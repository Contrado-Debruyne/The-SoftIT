const CACHE_VERSION = 'gxp-academy-v6';
const STATIC_CACHE = CACHE_VERSION + '-static';
const RUNTIME_CACHE = CACHE_VERSION + '-runtime';
const PRECACHE_URLS = [
  './', 'index.html', 'styles.css', 'app.js', 'content.js',
  'manifest.json', 'sw.js', 'icon-192.png', 'icon-512.png', 'apple-touch-icon.png'
];
self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(STATIC_CACHE).then(c => c.addAll(PRECACHE_URLS)).then(() => self.skipWaiting()).catch(() => self.skipWaiting()));
});
self.addEventListener('activate', (e) => {
  e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== STATIC_CACHE && k !== RUNTIME_CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', (e) => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (req.mode === 'navigate') {
    e.respondWith(fetch(req).then(r => { caches.open(STATIC_CACHE).then(c => c.put('index.html', r.clone())); return r; }).catch(() => caches.match('index.html')));
    return;
  }
  if (url.origin === self.location.origin) {
    e.respondWith(caches.match(req).then(cached => {
      const net = fetch(req).then(r => { if (r && r.ok) caches.open(STATIC_CACHE).then(c => c.put(req, r.clone())); return r; }).catch(() => cached);
      return cached || net;
    }));
    return;
  }
  if (url.hostname === 'img.youtube.com' || url.hostname.endsWith('ytimg.com')) {
    e.respondWith(caches.match(req).then(cached => {
      if (cached) return cached;
      return fetch(req, { mode: 'no-cors', credentials: 'omit' }).then(r => { if (r) caches.open(RUNTIME_CACHE).then(c => c.put(req, r.clone())); return r; }).catch(() => new Response('', { status: 404 }));
    }));
  }
});
self.addEventListener('sync', (e) => {
  if (e.tag === 'progress-sync' || e.tag === 'cache-refresh') {
    e.waitUntil(caches.open(STATIC_CACHE).then(c => Promise.allSettled(PRECACHE_URLS.map(u => fetch(u, { cache: 'no-cache' }).then(r => r.ok && c.put(u, r))))));
  }
});
self.addEventListener('message', (e) => {
  if (e.data === 'SKIP_WAITING') self.skipWaiting();
});
