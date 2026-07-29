/**
 * The SoftIT Academy – Application Logic
 * Offline-first, autosave to localStorage, backup/restore, gamification.
 */

const STORAGE_KEY = 'pharmaGxpAcademy_v1';

// Default user state
function defaultState() {
  return {
    xp: 0,
    completedLessons: [],
    completedModules: [],
    quizScores: {},
    achievements: [],
    currentModuleId: null,
    currentLessonId: null,
    activityDays: [],
    virtualCerts: [],
    lastSaved: null
  };
}

let state = defaultState();
let currentView = 'dashboard';
let quizAnswers = {};
let quizSubmitted = false;

// ---------- Persistence ----------
function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      state = { ...defaultState(), ...parsed };
    }
  } catch (e) {
    console.warn('Failed to load state', e);
  }
  recordActivityDay();
}

function saveState() {
  state.lastSaved = new Date().toISOString();
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch (e) {
    showToast('Autosave failed – storage may be full', 'error');
  }
  // Queue background sync so caches refresh when connectivity returns
  requestBackgroundSync('progress-sync');
}

function recordActivityDay() {
  const today = new Date().toISOString().slice(0, 10);
  if (!state.activityDays.includes(today)) {
    state.activityDays.push(today);
    // keep last 30
    if (state.activityDays.length > 30) state.activityDays = state.activityDays.slice(-30);
    saveState();
  }
}

// ---------- Level helpers ----------
function getLevel(xp) {
  return CURRICULUM.levels.find(l => xp >= l.minXp && xp <= l.maxXp) || CURRICULUM.levels[0];
}

function xpForNextLevel(xp) {
  const lvl = getLevel(xp);
  if (lvl.maxXp === Infinity) return null;
  return lvl.maxXp + 1 - xp;
}

// ---------- Achievements & certs ----------
function checkAchievements() {
  let newOnes = [];
  CURRICULUM.achievements.forEach(ach => {
    if (!state.achievements.includes(ach.id) && ach.condition(state)) {
      state.achievements.push(ach.id);
      newOnes.push(ach);
    }
  });
  if (newOnes.length) {
    newOnes.forEach(a => showToast(`Achievement unlocked: ${a.icon} ${a.title}`, 'success'));
    saveState();
  }
}

function awardVirtualCert(quizId, score, title) {
  if (score >= 80 && !state.virtualCerts.find(c => c.id === quizId)) {
    state.virtualCerts.push({
      id: quizId,
      title: title || 'Virtual Certificate',
      score,
      date: new Date().toISOString()
    });
    showToast(`Virtual certificate earned: ${title}`, 'success');
    saveState();
  }
}

// ---------- Module unlock logic ----------
function isModuleUnlocked(moduleIndex) {
  if (moduleIndex === 0) return true;
  // Unlock next after previous module completed (lessons + quiz passed)
  const prev = CURRICULUM.modules[moduleIndex - 1];
  return state.completedModules.includes(prev.id);
}

function isLessonCompleted(lessonId) {
  return state.completedLessons.includes(lessonId);
}

function completeLesson(lessonId, moduleId) {
  if (!state.completedLessons.includes(lessonId)) {
    state.completedLessons.push(lessonId);
    const mod = CURRICULUM.modules.find(m => m.id === moduleId);
    const lessonXp = Math.round((mod?.xpReward || 100) / (mod?.lessons.length || 3));
    state.xp += lessonXp;
    showToast(`+${lessonXp} XP – Lesson completed`, 'success');
  }
  // Check if all lessons done → mark module if quiz also passed later
  const mod = CURRICULUM.modules.find(m => m.id === moduleId);
  if (mod && mod.lessons.every(l => state.completedLessons.includes(l.id))) {
    // Module complete only after quiz, but we track lessons
  }
  checkAchievements();
  saveState();
  render();
}

// ---------- Backup / Restore ----------
function exportBackup() {
  const data = {
    version: 1,
    exportedAt: new Date().toISOString(),
    state
  };
  const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `gxp-academy-backup-${new Date().toISOString().slice(0, 10)}.json`;
  a.click();
  URL.revokeObjectURL(url);
  showToast('Backup downloaded', 'success');
}

function importBackup(file) {
  const reader = new FileReader();
  reader.onload = (e) => {
    try {
      const data = JSON.parse(e.target.result);
      if (data.state) {
        state = { ...defaultState(), ...data.state };
        saveState();
        checkAchievements();
        showToast('Progress restored successfully', 'success');
        render();
      } else {
        showToast('Invalid backup file', 'error');
      }
    } catch (err) {
      showToast('Failed to parse backup', 'error');
    }
  };
  reader.readAsText(file);
}

function resetProgress() {
  if (confirm('Reset ALL progress? This cannot be undone (unless you have a backup).')) {
    state = defaultState();
    saveState();
    showToast('Progress reset', 'success');
    render();
  }
}

// ---------- UI Helpers ----------
function showToast(msg, type = '') {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.className = 'toast show ' + type;
  setTimeout(() => t.classList.remove('show'), 3500);
}

function $(sel) { return document.querySelector(sel); }
function $all(sel) { return document.querySelectorAll(sel); }

// ---------- Rendering ----------
function renderHeader() {
  const lvl = getLevel(state.xp);
  const next = xpForNextLevel(state.xp);
  $('#header-xp').textContent = state.xp.toLocaleString();
  $('#header-level').textContent = lvl.name;
  $('#header-level').style.color = lvl.color;
  const pct = next === null ? 100 : Math.min(100, Math.round(((state.xp - lvl.minXp) / (lvl.maxXp - lvl.minXp + 1)) * 100));
  // optional progress in header if desired
}

function renderDashboard() {
  const lvl = getLevel(state.xp);
  const next = xpForNextLevel(state.xp);
  const totalLessons = CURRICULUM.modules.reduce((s, m) => s + m.lessons.length, 0);
  const doneLessons = state.completedLessons.length;
  const totalMods = CURRICULUM.modules.length;
  const doneMods = state.completedModules.length;

  let html = `
    <div class="lesson-header">
      <h1>Dashboard</h1>
      <p class="lesson-meta">Track your journey from beginner to pro in GxP IT &amp; Validation</p>
    </div>
    <div class="dashboard-grid">
      <div class="card stat-card">
        <div class="big-number" style="color:${lvl.color}">${lvl.name}</div>
        <div class="label">Current Level</div>
        <div class="progress-bar" style="margin-top:1rem"><div class="progress-fill" style="width:${next === null ? 100 : Math.min(100, ((state.xp - lvl.minXp) / (lvl.maxXp - lvl.minXp + 1)) * 100)}%"></div></div>
        <div style="font-size:0.8rem;color:var(--text-secondary);margin-top:0.35rem">${state.xp.toLocaleString()} XP ${next !== null ? `· ${next} to next` : '· Max level'}</div>
      </div>
      <div class="card stat-card">
        <div class="big-number">${doneLessons}/${totalLessons}</div>
        <div class="label">Lessons Completed</div>
      </div>
      <div class="card stat-card">
        <div class="big-number">${doneMods}/${totalMods}</div>
        <div class="label">Modules Mastered</div>
      </div>
      <div class="card stat-card">
        <div class="big-number">${state.achievements.length}</div>
        <div class="label">Achievements</div>
      </div>
    </div>
  `;

  if (state.virtualCerts.length) {
    html += `<div class="card"><div class="card-title">Virtual Certificates</div><div>`;
    state.virtualCerts.forEach(c => {
      html += `<span class="cert-badge">${c.title} (${c.score}%)</span>`;
    });
    html += `</div></div>`;
  }

  html += `
    <div class="card">
      <div class="card-title">Learning Path</div>
      <p style="color:var(--text-secondary);margin-bottom:1rem;font-size:0.9rem">Modules unlock sequentially. Complete lessons and pass the quiz (≥70%, Capstone ≥80%) to progress and earn XP + virtual certificates.</p>
      ${CURRICULUM.modules.map((m, i) => {
        const unlocked = isModuleUnlocked(i);
        const done = state.completedModules.includes(m.id);
        return `<div class="module-item ${done ? 'completed' : ''} ${!unlocked ? 'locked' : ''}" onclick="${unlocked ? `openModule('${m.id}')` : ''}">
          <div class="module-num">${done ? '•' : (i + 1)}</div>
          <div class="module-info">
            <h4>${m.title}</h4>
            <p>${m.description}</p>
            <div class="module-meta"><span class="level-badge">${m.level}</span> · ${m.lessons.length} lessons · Quiz · ${m.xpReward} XP</div>
          </div>
        </div>`;
      }).join('')}
    </div>
  `;

  $('#content-area').innerHTML = html;
}

function renderModulesSidebar() {
  const list = $('#module-list');
  list.innerHTML = CURRICULUM.modules.map((m, i) => {
    const unlocked = isModuleUnlocked(i);
    const done = state.completedModules.includes(m.id);
    const active = state.currentModuleId === m.id;
    return `<div class="module-item ${active ? 'active' : ''} ${done ? 'completed' : ''} ${!unlocked ? 'locked' : ''}"
      onclick="${unlocked ? `openModule('${m.id}')` : `showToast('Complete previous module first','error')`}">
      <div class="module-num">${done ? '•' : (i + 1)}</div>
      <div class="module-info">
        <h4>${m.title}</h4>
        <div class="module-meta">${m.level}</div>
      </div>
    </div>`;
  }).join('');
}

function openModule(moduleId) {
  state.currentModuleId = moduleId;
  state.currentLessonId = null;
  currentView = 'module';
  saveState();
  render();
  requestAnimationFrame(() => window.scrollTo(0, 0));
}

function openLesson(moduleId, lessonId) {
  state.currentModuleId = moduleId;
  state.currentLessonId = lessonId;
  currentView = 'lesson';
  quizAnswers = {};
  quizSubmitted = false;
  saveState();
  render();
}

function renderModuleView() {
  const mod = CURRICULUM.modules.find(m => m.id === state.currentModuleId);
  if (!mod) return renderDashboard();

  let html = `
    <div class="lesson-header">
      <h1>${mod.title}</h1>
      <div class="lesson-meta">
        <span class="level-badge">${mod.level}</span>
        <span>${mod.lessons.length} lessons</span>
        <span>Quiz · ${mod.xpReward} XP module reward</span>
      </div>
      <p style="margin-top:0.75rem;color:var(--text-secondary)">${mod.description}</p>
    </div>
    <div class="card">
      <div class="card-title">Lessons</div>
  `;

  mod.lessons.forEach((l, idx) => {
    const done = isLessonCompleted(l.id);
    html += `<div class="module-item ${done ? 'completed' : ''}" onclick="openLesson('${mod.id}','${l.id}')">
      <div class="module-num">${done ? '•' : (idx + 1)}</div>
      <div class="module-info">
        <h4>${l.title}</h4>
        <div class="module-meta">${l.duration}</div>
      </div>
    </div>`;
  });

  const quizDone = state.quizScores[mod.quiz.id] !== undefined;
  const quizPassed = (state.quizScores[mod.quiz.id] || 0) >= mod.quiz.passScore;
  html += `</div>
    <div class="card">
      <div class="card-title">Module Quiz / Virtual Exam</div>
      <p style="color:var(--text-secondary);margin-bottom:1rem">Pass with ≥${mod.quiz.passScore}% to complete the module, earn XP and (for high scores) a virtual certificate.</p>
      <button class="btn btn-primary" onclick="startQuiz('${mod.id}')">${quizDone ? (quizPassed ? 'Retake Quiz (Passed ' + state.quizScores[mod.quiz.id] + '%)' : 'Retake Quiz (' + state.quizScores[mod.quiz.id] + '%)') : 'Start Quiz'}</button>
    </div>
    <div class="btn-group">
      <button class="btn btn-secondary" onclick="currentView='dashboard';render()">← Dashboard</button>
    </div>
  `;
  $('#content-area').innerHTML = html;
}

function renderLessonView() {
  const mod = CURRICULUM.modules.find(m => m.id === state.currentModuleId);
  const lesson = mod?.lessons.find(l => l.id === state.currentLessonId);
  if (!mod || !lesson) return renderModuleView();

  const idx = mod.lessons.findIndex(l => l.id === lesson.id);
  const done = isLessonCompleted(lesson.id);

  let html = `
    <div class="lesson-header">
      <h1>${lesson.title}</h1>
      <div class="lesson-meta">
        <span>${mod.title}</span>
        <span>Lesson ${idx + 1} of ${mod.lessons.length}</span>
        <span>${lesson.duration}</span>
        ${done ? '<span style="color:var(--success)">Completed</span>' : ''}
      </div>
    </div>
    <div class="card lesson-body">${lesson.content}</div>
    <div class="btn-group">
      <button class="btn btn-secondary" onclick="openModule('${mod.id}')">← Module</button>
      ${!done ? `<button class="btn btn-success" onclick="completeLesson('${lesson.id}','${mod.id}')">Mark Complete &amp; +XP</button>` : ''}
      ${idx < mod.lessons.length - 1 ? `<button class="btn btn-primary" onclick="openLesson('${mod.id}','${mod.lessons[idx + 1].id}')">Next Lesson →</button>` : `<button class="btn btn-primary" onclick="startQuiz('${mod.id}')">Take Module Quiz →</button>`}
    </div>
  `;
  $('#content-area').innerHTML = html;
}

function startQuiz(moduleId) {
  state.currentModuleId = moduleId;
  state.currentLessonId = null;
  currentView = 'quiz';
  quizAnswers = {};
  quizSubmitted = false;
  render();
}

function renderQuizView() {
  const mod = CURRICULUM.modules.find(m => m.id === state.currentModuleId);
  if (!mod) return renderDashboard();
  const quiz = mod.quiz;

  if (quizSubmitted) {
    // results already rendered by submitQuiz
    return;
  }

  let html = `
    <div class="lesson-header">
      <h1>${quiz.title}</h1>
      <div class="lesson-meta">Pass ≥${quiz.passScore}% · ${quiz.xpReward} XP · Virtual cert at ≥80%</div>
    </div>
  `;

  quiz.questions.forEach((q, i) => {
    html += `<div class="quiz-question" id="q-${i}">
      <h3>Q${i + 1}. ${q.q}</h3>
      <div class="quiz-options">
        ${q.options.map((opt, j) => `
          <label class="quiz-option ${quizAnswers[i] === j ? 'selected' : ''}" onclick="selectAnswer(${i},${j})">
            <input type="radio" name="q${i}" ${quizAnswers[i] === j ? 'checked' : ''}>
            <span>${opt}</span>
          </label>
        `).join('')}
      </div>
    </div>`;
  });

  html += `<div class="btn-group">
    <button class="btn btn-secondary" onclick="openModule('${mod.id}')">← Back</button>
    <button class="btn btn-primary" onclick="submitQuiz()">Submit Answers</button>
  </div>`;
  $('#content-area').innerHTML = html;
}

function selectAnswer(qIdx, optIdx) {
  if (quizSubmitted) return;
  quizAnswers[qIdx] = optIdx;
  renderQuizView();
}

function submitQuiz() {
  const mod = CURRICULUM.modules.find(m => m.id === state.currentModuleId);
  const quiz = mod.quiz;
  const total = quiz.questions.length;
  let correct = 0;
  quiz.questions.forEach((q, i) => {
    if (quizAnswers[i] === q.correct) correct++;
  });
  const score = Math.round((correct / total) * 100);
  const passed = score >= quiz.passScore;

  // Award XP only on first pass or improvement? Simple: award if passed and not previously passed, or always award once.
  const prev = state.quizScores[quiz.id];
  if (passed && (prev === undefined || prev < quiz.passScore)) {
    state.xp += quiz.xpReward;
    showToast(`+${quiz.xpReward} XP – Quiz passed!`, 'success');
  } else if (passed) {
    showToast(`Quiz passed (${score}%)`, 'success');
  } else {
    showToast(`Score ${score}% – need ${quiz.passScore}% to pass`, 'error');
  }
  state.quizScores[quiz.id] = Math.max(prev || 0, score);

  if (passed && !state.completedModules.includes(mod.id)) {
    state.completedModules.push(mod.id);
    state.xp += Math.round(mod.xpReward * 0.3); // bonus for finishing module
  }

  if (score >= 80) {
    awardVirtualCert(quiz.id, score, mod.title + ' – Virtual Certificate');
  }

  checkAchievements();
  saveState();
  quizSubmitted = true;

  // Render results
  let html = `
    <div class="quiz-result card">
      <h2>${passed ? '🎉 Passed!' : 'Not quite yet'}</h2>
      <div class="quiz-score">${score}%</div>
      <p>${correct} of ${total} correct · Pass mark ${quiz.passScore}%</p>
      ${score >= 80 ? '<p class="cert-badge" style="margin-top:1rem">Virtual certificate awarded</p>' : ''}
    </div>
  `;

  quiz.questions.forEach((q, i) => {
    const user = quizAnswers[i];
    const isCorrect = user === q.correct;
    html += `<div class="quiz-question">
      <h3>Q${i + 1}. ${q.q}</h3>
      <div class="quiz-options">
        ${q.options.map((opt, j) => {
          let cls = '';
          if (j === q.correct) cls = 'correct';
          else if (j === user && !isCorrect) cls = 'incorrect';
          return `<div class="quiz-option ${cls}"><span>${opt}</span></div>`;
        }).join('')}
      </div>
      <p style="margin-top:0.75rem;font-size:0.9rem;color:var(--text-secondary)"><strong>Explanation:</strong> ${q.explanation}</p>
    </div>`;
  });

  html += `<div class="btn-group">
    <button class="btn btn-secondary" onclick="openModule('${mod.id}')">← Module</button>
    <button class="btn btn-primary" onclick="currentView='dashboard';render()">Dashboard</button>
    <button class="btn btn-ghost" onclick="startQuiz('${mod.id}')">Retake</button>
  </div>`;
  $('#content-area').innerHTML = html;
}

function renderAchievements() {
  let html = `
    <div class="lesson-header">
      <h1>Achievements</h1>
      <p class="lesson-meta">${state.achievements.length} of ${CURRICULUM.achievements.length} unlocked</p>
    </div>
    <div class="achievements-grid">
  `;
  CURRICULUM.achievements.forEach(a => {
    const unlocked = state.achievements.includes(a.id);
    html += `<div class="achievement-card ${unlocked ? 'unlocked' : 'locked'}">
      <div class="achievement-icon">${a.icon}</div>
      <h4>${a.title}</h4>
      <p>${a.description}</p>
    </div>`;
  });
  html += `</div>`;
  $('#content-area').innerHTML = html;
}

function renderSettings() {
  const html = `
    <div class="lesson-header">
      <h1>Settings &amp; Data</h1>
      <p class="lesson-meta">Offline · Autosave · Backup / Restore</p>
    </div>
    <div class="card settings-section">
      <h3>Progress Summary</h3>
      <p>XP: <strong>${state.xp}</strong> · Level: <strong>${getLevel(state.xp).name}</strong></p>
      <p>Lessons: ${state.completedLessons.length} · Modules: ${state.completedModules.length} · Achievements: ${state.achievements.length}</p>
      <p style="font-size:0.85rem;color:var(--text-muted)">Last saved: ${state.lastSaved ? new Date(state.lastSaved).toLocaleString() : 'never'}</p>
    </div>
    <div class="card settings-section">
      <h3>Offline &amp; Background Sync</h3>
      <p style="margin-bottom:0.75rem;color:var(--text-secondary)">
        The full curriculum, quizzes and your progress work without a network connection.
        Progress is stored locally (autosave). When connectivity returns, <strong>Background Sync</strong>
        refreshes the app cache and warms video thumbnails you have already seen so they stay available offline.
      </p>
      <p style="font-size:0.85rem;color:var(--text-muted)">Supported in Chromium-based browsers (Chrome, Edge, etc.) over HTTPS or localhost.</p>
    </div>
    <div class="card settings-section">
      <h3>Backup</h3>
      <p style="margin-bottom:1rem;color:var(--text-secondary)">Download a JSON file containing all your progress. Store it safely – you can restore on any device that runs this app offline.</p>
      <button class="btn btn-primary" onclick="exportBackup()">⬇ Download Backup</button>
    </div>
    <div class="card settings-section">
      <h3>Restore</h3>
      <p style="margin-bottom:1rem;color:var(--text-secondary)">Import a previously exported backup file. This will overwrite current progress.</p>
      <div class="file-input-wrapper">
        <button class="btn btn-secondary">⬆ Choose Backup File</button>
        <input type="file" accept=".json,application/json" onchange="if(this.files[0]) importBackup(this.files[0])">
      </div>
    </div>
    <div class="card settings-section">
      <h3>Reset</h3>
      <p style="margin-bottom:1rem;color:var(--text-secondary)">Clear all progress on this device. Make a backup first if you want to keep it.</p>
      <button class="btn" style="background:var(--danger);color:white" onclick="resetProgress()">Reset All Progress</button>
    </div>
    <div class="card settings-section">
      <h3>About this Academy</h3>
      <p style="color:var(--text-secondary);font-size:0.9rem">
        Offline Progressive Web App for learning software development processes, GxP validation (GAMP 5),
        data integrity (ALCOA+), networking, architecture, IT structures, cloud, security, 21 CFR Part 11 and Annex 11
        in a pharmaceutical / healthcare context.<br><br>
        After the first online visit the academy works offline. Background Sync keeps caches fresh when you reconnect.
        YouTube videos still need internet when you choose to watch them.<br><br>
        Content is educational summary only. Always consult current official regulatory guidance and your
        company’s Quality System for real validation work. Virtual certificates are for self-evaluation only.
      </p>
    </div>
  `;
  $('#content-area').innerHTML = html;
}

function setView(view) {
  if (!view) return;
  currentView = view;
  // Clear module context when using top-level tabs
  if (view === 'dashboard' || view === 'achievements' || view === 'settings') {
    state.currentModuleId = null;
    state.currentLessonId = null;
  }
  document.querySelectorAll('.nav-tab').forEach((tab) => {
    tab.classList.toggle('active', tab.getAttribute('data-view') === view);
  });
  render();
  // Instant jump: content is first in the layout — pin viewport to top
  requestAnimationFrame(() => {
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  });
}

function updateSidebarVisibility() {
  const sidebar = document.getElementById('sidebar');
  if (!sidebar) return;
  // Hide modules rail on Dashboard / Achievements / Settings so the section is visible immediately
  const hide = currentView === 'dashboard' || currentView === 'achievements' || currentView === 'settings';
  sidebar.classList.toggle('hidden-panel', hide);
}

function render() {
  renderHeader();
  updateSidebarVisibility();
  if (currentView === 'module' || currentView === 'lesson' || currentView === 'quiz') {
    renderModulesSidebar();
  }
  if (currentView === 'dashboard') renderDashboard();
  else if (currentView === 'module') renderModuleView();
  else if (currentView === 'lesson') renderLessonView();
  else if (currentView === 'quiz') renderQuizView();
  else if (currentView === 'achievements') renderAchievements();
  else if (currentView === 'settings') renderSettings();
}

// ---------- Init ----------
function init() {
  loadState();
  checkAchievements();
  render();

  // Offline / online indicator
  updateOnlineStatus();
  window.addEventListener('online', updateOnlineStatus);
  window.addEventListener('offline', updateOnlineStatus);

  // Graceful fallback for video thumbnails when offline / blocked
  document.addEventListener('error', (e) => {
    if (e.target && e.target.tagName === 'IMG' && e.target.src && e.target.src.includes('img.youtube.com')) {
      e.target.style.display = 'none';
      const fallback = e.target.parentElement && e.target.parentElement.querySelector('.thumb-fallback');
      if (fallback) fallback.style.display = 'block';
    }
  }, true);

  // Register service worker for offline
  registerServiceWorker();
}

function updateOnlineStatus() {
  const el = document.getElementById('online-status');
  if (!el) return;
  if (navigator.onLine) {
    el.textContent = 'Online';
    el.className = 'stat-pill online';
    el.title = 'Connected – videos and new content available';
    // Connectivity restored → request background sync to refresh caches
    requestBackgroundSync('cache-refresh');
    requestBackgroundSync('progress-sync');
    queueThumbnailWarm();
  } else {
    el.textContent = 'Offline';
    el.className = 'stat-pill offline';
    el.title = 'Offline mode – full curriculum and progress available locally';
  }
}

function registerServiceWorker() {
  if (!('serviceWorker' in navigator)) return;
  navigator.serviceWorker.register('sw.js')
    .then((reg) => {
      // Check for updates periodically
      setInterval(() => reg.update().catch(() => {}), 60 * 60 * 1000);
      reg.addEventListener('updatefound', () => {
        const newWorker = reg.installing;
        if (!newWorker) return;
        newWorker.addEventListener('statechange', () => {
          if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
            showToast('App update ready – reload to apply', 'success');
          }
        });
      });
    })
    .catch((err) => console.log('SW registration failed', err));

  // Reload when a new SW takes control (optional smooth update)
  let refreshing = false;
  navigator.serviceWorker.addEventListener('controllerchange', () => {
    if (refreshing) return;
    refreshing = true;
    // Uncomment if you want auto-reload on update:
    // window.location.reload();
  });

  // Listen for background-sync completion messages from the service worker
  navigator.serviceWorker.addEventListener('message', (event) => {
    if (!event.data) return;
    if (event.data.type === 'SYNC_COMPLETE') {
      const tag = event.data.tag || '';
      if (tag === 'progress-sync' || tag === 'cache-refresh') {
        showToast('Background sync complete – caches refreshed', 'success');
      } else if (tag === 'warm-thumbnails') {
        // quiet – thumbnails warmed for offline use
      }
    }
  });
}


function requestBackgroundSync(tag) {
  if (!('serviceWorker' in navigator) || !('SyncManager' in window)) {
    // Background Sync not supported – when we come online, refresh manually
    return;
  }
  navigator.serviceWorker.ready
    .then((reg) => reg.sync.register(tag))
    .catch((err) => {
      // Often fails if permission denied or browser limitation – safe to ignore
      console.log('Background sync register skipped:', tag, err && err.message);
    });
}

function collectThumbnailUrls() {
  // Gather YouTube thumbnail URLs currently in the DOM or known from content
  const urls = new Set();
  document.querySelectorAll('img[src*="img.youtube.com"]').forEach((img) => {
    if (img.src) urls.add(img.src);
  });
  // Also parse content.js style URLs from curriculum if loaded
  try {
    if (typeof CURRICULUM !== 'undefined') {
      const re = /img\.youtube\.com\/vi\/([a-zA-Z0-9_-]+)\/hqdefault\.jpg/g;
      const blob = JSON.stringify(CURRICULUM);
      let m;
      while ((m = re.exec(blob)) !== null) {
        urls.add('https://img.youtube.com/vi/' + m[1] + '/hqdefault.jpg');
      }
    }
  } catch (_) {}
  return Array.from(urls);
}

function queueThumbnailWarm() {
  const urls = collectThumbnailUrls();
  if (!urls.length || !navigator.serviceWorker.controller) return;
  navigator.serviceWorker.controller.postMessage({ type: 'STORE_THUMB_LIST', urls });
  requestBackgroundSync('warm-thumbnails');
}

document.addEventListener('DOMContentLoaded', init);

// Expose functions for inline handlers
window.openModule = openModule;
window.openLesson = openLesson;
window.completeLesson = completeLesson;
window.startQuiz = startQuiz;
window.selectAnswer = selectAnswer;
window.submitQuiz = submitQuiz;
window.exportBackup = exportBackup;
window.importBackup = importBackup;
window.resetProgress = resetProgress;
window.setView = setView;
window.currentView = currentView;
window.render = render;
