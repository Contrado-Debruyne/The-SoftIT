/**
 * Pharma GxP IT Academy – Service Worker
 * Offline-first caching of the full app shell and static assets.
 * YouTube thumbnails/videos remain network-only (external).
 */
const CACHE_VERSION = 'gxp-academy-v4';
const STATIC_CACHE = CACHE_VERSION + '-static';
const RUNTIME_CACHE = CACHE_VERSION + '-runtime';

// Core assets required for offline operation
const PRECACHE_URLS = [
  './',
  './index.html',
  './css/styles.css',
  './js/app.js',
  './js/content.js',
  './manifest.json',
  './sw.js',
  './assets/icon-192.png',
  './assets/icon-512.png',
  './assets/apple-touch-icon.png'
];

// ---------- Install: pre-cache shell ----------
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(STATIC_CACHE)
      .then((cache) => cache.addAll(PRECACHE_URLS))
      .then(() => self.skipWaiting())
      .catch((err) => {
        console.error('[SW] Precache failed', err);
        // Still activate even if some optional assets fail
        return self.skipWaiting();
      })
  );
});

// ---------- Activate: clean old caches ----------
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys
          .filter((key) => key !== STATIC_CACHE && key !== RUNTIME_CACHE)
          .map((key) => caches.delete(key))
      );
    }).then(() => self.clients.claim())
  );
});

// ---------- Helpers ----------
function isSameOrigin(url) {
  return url.origin === self.location.origin;
}

function isStaticAsset(url) {
  const path = url.pathname;
  return (
    path.endsWith('.html') ||
    path.endsWith('.css') ||
    path.endsWith('.js') ||
    path.endsWith('.json') ||
    path.endsWith('.png') ||
    path.endsWith('.svg') ||
    path.endsWith('.ico') ||
    path === '/' ||
    path.endsWith('/')
  );
}

function isYouTubeThumbnail(url) {
  return url.hostname === 'img.youtube.com' || url.hostname.endsWith('ytimg.com');
}

// ---------- Fetch strategy ----------
self.addEventListener('fetch', (event) => {
  const req = event.request;
  if (req.method !== 'GET') return;

  const url = new URL(req.url);

  // Navigation requests → network first, fall back to cached index.html
  if (req.mode === 'navigate') {
    event.respondWith(
      fetch(req)
        .then((res) => {
          const copy = res.clone();
          caches.open(STATIC_CACHE).then((c) => c.put('./index.html', copy));
          return res;
        })
        .catch(() => caches.match('./index.html').then((r) => r || caches.match('./')))
    );
    return;
  }

  // Same-origin static assets → cache first, then network (and update cache)
  if (isSameOrigin(url) && isStaticAsset(url)) {
    event.respondWith(
      caches.match(req).then((cached) => {
        const networkFetch = fetch(req)
          .then((res) => {
            if (res && res.ok) {
              const copy = res.clone();
              caches.open(STATIC_CACHE).then((c) => c.put(req, copy));
            }
            return res;
          })
          .catch(() => cached);
        return cached || networkFetch;
      })
    );
    return;
  }

  // YouTube thumbnails → try cache, then network; store successful responses (opaque ok)
  if (isYouTubeThumbnail(url)) {
    event.respondWith(
      caches.match(req).then((cached) => {
        if (cached) return cached;
        return fetch(req, { mode: 'no-cors', credentials: 'omit' })
          .then((res) => {
            // Opaque responses still useful offline once cached
            if (res) {
              const copy = res.clone();
              caches.open(RUNTIME_CACHE).then((c) => c.put(req, copy));
            }
            return res;
          })
          .catch(() => {
            // Offline + no cache → return a tiny transparent 1x1 so layout doesn't break
            return new Response(
              Uint8Array.from(atob('R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7'), c => c.charCodeAt(0)),
              { headers: { 'Content-Type': 'image/gif' } }
            );
          });
      })
    );
    return;
  }

  // Everything else (external APIs, YouTube pages, etc.) → network only
  // (no offline interception)
});

// ---------- Background Sync ----------
// Tags used by the app:
//   'progress-sync'  – offline progress was saved; refresh caches when online
//   'cache-refresh'  – re-precache the app shell
//   'warm-thumbnails'– optional: warm known YouTube thumbnail URLs

const THUMBNAIL_WARM_LIST_KEY = 'gxp-thumb-warm-list';

self.addEventListener('sync', (event) => {
  console.log('[SW] Background sync fired:', event.tag);

  if (event.tag === 'progress-sync' || event.tag === 'cache-refresh') {
    event.waitUntil(refreshAppCache().then(() => notifyClients({ type: 'SYNC_COMPLETE', tag: event.tag })));
  }

  if (event.tag === 'warm-thumbnails') {
    event.waitUntil(warmThumbnails().then(() => notifyClients({ type: 'SYNC_COMPLETE', tag: event.tag })));
  }
});

async function refreshAppCache() {
  try {
    const cache = await caches.open(STATIC_CACHE);
    // Re-fetch critical assets so the shell stays fresh after being offline
    await Promise.allSettled(
      PRECACHE_URLS.map(async (url) => {
        try {
          const res = await fetch(url, { cache: 'no-cache' });
          if (res && res.ok) await cache.put(url, res.clone());
        } catch (_) { /* still offline or network blip – ignore */ }
      })
    );
    return true;
  } catch (err) {
    console.error('[SW] refreshAppCache failed', err);
    return false;
  }
}

async function warmThumbnails() {
  // Read list of thumbnail URLs the page may have posted via postMessage
  // (kept in a simple cache entry as JSON text)
  try {
    const cache = await caches.open(RUNTIME_CACHE);
    const listRes = await cache.match(THUMBNAIL_WARM_LIST_KEY);
    if (!listRes) return false;
    const urls = await listRes.json();
    if (!Array.isArray(urls) || !urls.length) return false;

    await Promise.allSettled(
      urls.slice(0, 40).map(async (url) => {
        try {
          const existing = await caches.match(url);
          if (existing) return;
          const res = await fetch(url, { mode: 'no-cors', credentials: 'omit' });
          if (res) await cache.put(url, res.clone());
        } catch (_) {}
      })
    );
    return true;
  } catch (err) {
    console.error('[SW] warmThumbnails failed', err);
    return false;
  }
}

async function notifyClients(message) {
  const clientsList = await self.clients.matchAll({ type: 'window', includeUncontrolled: true });
  clientsList.forEach((client) => client.postMessage(message));
}

// Allow the page to store a list of thumbnail URLs to warm on next sync
self.addEventListener('message', (event) => {
  if (!event.data) return;

  if (event.data === 'CLEAR_RUNTIME_CACHE') {
    event.waitUntil(caches.delete(RUNTIME_CACHE));
  }
  if (event.data === 'SKIP_WAITING') {
    self.skipWaiting();
  }
  if (event.data.type === 'STORE_THUMB_LIST' && Array.isArray(event.data.urls)) {
    event.waitUntil(
      caches.open(RUNTIME_CACHE).then((cache) =>
        cache.put(
          THUMBNAIL_WARM_LIST_KEY,
          new Response(JSON.stringify(event.data.urls), {
            headers: { 'Content-Type': 'application/json' }
          })
        )
      )
    );
  }
  if (event.data.type === 'REQUEST_SYNC' && event.data.tag) {
    // SW cannot call registration.sync itself from message easily without the registration;
    // the page registers the sync. This is a no-op placeholder for future use.
  }
});
