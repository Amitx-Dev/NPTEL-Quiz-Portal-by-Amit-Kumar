/* ==========================================================================
   NPTEL Design Thinking Quiz Web Application - Core App Logic
   ========================================================================== */

(function () {
  'use strict';

  // State Management
  const state = {
    currentView: 'dashboard', // dashboard, quiz, flashcard, qbank, analytics
    quizMode: 'practice', // practice, exam
    quizQuestions: [],
    currentIndex: 0,
    userAnswers: [], // { selected: number|null, correct: boolean, flagged: boolean, time: number }
    timerInterval: null,
    timeRemaining: 0, // in seconds
    totalExamTime: 0,
    examActive: false,
    
    // Flashcard State
    flashcardIndex: 0,
    flashcards: [],
    isFlipped: false,

    // Search & Filter State
    searchQuery: '',
    selectedModule: 'all',
    onlyBookmarked: false,

    // Persistence Data
    bookmarks: new Set(JSON.parse(localStorage.getItem('nptel_bookmarks') || '[]')),
    stats: JSON.parse(localStorage.getItem('nptel_stats') || JSON.stringify({
      totalAnswered: 0,
      correctCount: 0,
      examsCompleted: 0,
      streakDays: 1,
      lastActiveDate: new Date().toDateString(),
      history: []
    })),
    settings: JSON.parse(localStorage.getItem('nptel_settings') || JSON.stringify({
      theme: 'dark',
      sound: true
    }))
  };

  // Web Audio Synthesizer for FX
  class AudioSynth {
    constructor() {
      this.ctx = null;
    }
    init() {
      if (!this.ctx && (window.AudioContext || window.webkitAudioContext)) {
        const AudioCtx = window.AudioContext || window.webkitAudioContext;
        this.ctx = new AudioCtx();
      }
    }
    playCorrect() {
      if (!state.settings.sound) return;
      this.init();
      if (!this.ctx) return;
      const now = this.ctx.currentTime;
      const osc1 = this.ctx.createOscillator();
      const osc2 = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc1.type = 'sine';
      osc2.type = 'triangle';
      osc1.frequency.setValueAtTime(523.25, now); // C5
      osc1.frequency.exponentialRampToValueAtTime(659.25, now + 0.1); // E5
      osc2.frequency.setValueAtTime(783.99, now + 0.1); // G5

      gain.gain.setValueAtTime(0.15, now);
      gain.gain.exponentialRampToValueAtTime(0.01, now + 0.35);

      osc1.connect(gain);
      osc2.connect(gain);
      gain.connect(this.ctx.destination);

      osc1.start(now);
      osc2.start(now + 0.1);
      osc1.stop(now + 0.35);
      osc2.stop(now + 0.35);
    }
    playWrong() {
      if (!state.settings.sound) return;
      this.init();
      if (!this.ctx) return;
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(220, now); // A3
      osc.frequency.exponentialRampToValueAtTime(164.81, now + 0.2); // E3

      gain.gain.setValueAtTime(0.15, now);
      gain.gain.exponentialRampToValueAtTime(0.01, now + 0.3);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(now);
      osc.stop(now + 0.3);
    }
    playFanfare() {
      if (!state.settings.sound) return;
      this.init();
      if (!this.ctx) return;
      const now = this.ctx.currentTime;
      const notes = [523.25, 659.25, 783.99, 1046.50]; // C5, E5, G5, C6
      notes.forEach((freq, idx) => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.frequency.setValueAtTime(freq, now + idx * 0.1);
        gain.gain.setValueAtTime(0.12, now + idx * 0.1);
        gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.1 + 0.4);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start(now + idx * 0.1);
        osc.stop(now + idx * 0.1 + 0.4);
      });
    }
  }

  const audioSynth = new AudioSynth();

  // Canvas Confetti Effect
  function launchConfetti() {
    const canvas = document.getElementById('confetti-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles = [];
    const colors = ['#6366f1', '#06b6d4', '#10b981', '#f59e0b', '#ec4899'];

    for (let i = 0; i < 120; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height - canvas.height,
        size: Math.random() * 8 + 4,
        color: colors[Math.floor(Math.random() * colors.length)],
        vy: Math.random() * 3 + 2,
        vx: Math.random() * 2 - 1,
        rotation: Math.random() * 360,
        rSpeed: Math.random() * 6 - 3
      });
    }

    let animationFrame;
    function render() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      let alive = false;
      particles.forEach(p => {
        p.y += p.vy;
        p.x += p.vx;
        p.rotation += p.rSpeed;
        if (p.y < canvas.height) alive = true;

        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate((p.rotation * Math.PI) / 180);
        ctx.fillStyle = p.color;
        ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size);
        ctx.restore();
      });

      if (alive) {
        animationFrame = requestAnimationFrame(render);
      } else {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
      }
    }

    render();
  }

  // Toast System
  function showToast(message, icon = '💡') {
    const container = document.getElementById('toast-container');
    if (!container) return;
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `<span>${icon}</span> <span>${message}</span>`;
    container.appendChild(toast);
    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(10px)';
      toast.style.transition = 'all 0.3s ease';
      setTimeout(() => toast.remove(), 300);
    }, 2800);
  }

  // Local Storage Sync
  function saveState() {
    localStorage.setItem('nptel_bookmarks', JSON.stringify(Array.from(state.bookmarks)));
    localStorage.setItem('nptel_stats', JSON.stringify(state.stats));
    localStorage.setItem('nptel_settings', JSON.stringify(state.settings));
  }

  // Theme Initializer
  function initTheme() {
    document.documentElement.setAttribute('data-theme', state.settings.theme);
    const themeBtn = document.getElementById('theme-toggle-btn');
    if (themeBtn) {
      themeBtn.innerHTML = state.settings.theme === 'dark' ? '<i class="ri-sun-line"></i> ☀️' : '<i class="ri-moon-line"></i> 🌙';
    }
  }

  function toggleTheme() {
    state.settings.theme = state.settings.theme === 'dark' ? 'light' : 'dark';
    initTheme();
    saveState();
  }

  function toggleSound() {
    state.settings.sound = !state.settings.sound;
    const soundBtn = document.getElementById('sound-toggle-btn');
    if (soundBtn) {
      soundBtn.innerHTML = state.settings.sound ? '🔊' : '🔇';
    }
    showToast(state.settings.sound ? 'Sound FX Enabled' : 'Sound FX Muted');
    saveState();
  }

  // Navigation Logic
  function switchView(targetView) {
    state.currentView = targetView;
    document.querySelectorAll('.view-section').forEach(sec => sec.classList.remove('active'));
    document.querySelectorAll('.nav-btn').forEach(btn => btn.classList.remove('active'));

    const activeSec = document.getElementById(`view-${targetView}`);
    const activeNavBtn = document.querySelector(`.nav-btn[data-view="${targetView}"]`);

    if (activeSec) activeSec.classList.add('active');
    if (activeNavBtn) activeNavBtn.classList.add('active');

    // Trigger View-Specific Renderers
    if (targetView === 'dashboard') renderDashboard();
    if (targetView === 'flashcard') renderFlashcardView();
    if (targetView === 'qbank') renderQBankView();
    if (targetView === 'analytics') renderAnalyticsView();
  }

  // Dashboard Renderer
  function renderDashboard() {
    document.getElementById('stat-answered').textContent = state.stats.totalAnswered;
    const accuracy = state.stats.totalAnswered > 0 
      ? Math.round((state.stats.correctCount / state.stats.totalAnswered) * 100) 
      : 0;
    document.getElementById('stat-accuracy').textContent = `${accuracy}%`;
    document.getElementById('stat-bookmarks').textContent = state.bookmarks.size;
    document.getElementById('stat-exams').textContent = state.stats.examsCompleted;

    // Render Module Progress
    const modulesContainer = document.getElementById('modules-list-container');
    if (!modulesContainer) return;

    const moduleCounts = {};
    QUIZ_DATA.forEach(q => {
      moduleCounts[q.module] = (moduleCounts[q.module] || 0) + 1;
    });

    modulesContainer.innerHTML = Object.keys(moduleCounts).map(modName => {
      const count = moduleCounts[modName];
      const completed = state.stats.history.filter(h => h.module === modName).length;
      const pct = Math.min(100, Math.round((completed / count) * 100));

      return `
        <div class="module-item">
          <div class="module-info">
            <div class="module-name">${modName}</div>
            <div class="module-meta">
              <span>${count} Questions</span>
              <span>•</span>
              <span>${pct}% Practiced</span>
            </div>
          </div>
          <div style="display: flex; align-items: center; gap: 1rem;">
            <div class="progress-bar-container">
              <div class="progress-bar-fill" style="width: ${pct}%"></div>
            </div>
            <button class="btn-secondary start-module-btn" data-module="${modName}">Practice</button>
          </div>
        </div>
      `;
    }).join('');

    document.querySelectorAll('.start-module-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const modName = e.currentTarget.getAttribute('data-module');
        startQuiz('practice', modName);
      });
    });
  }

  // Quiz Engine Logic
  function startQuiz(mode, moduleFilter = 'all', questionCount = 20, timeLimitMins = 20) {
    state.quizMode = mode;
    let pool = [...QUIZ_DATA];

    if (moduleFilter !== 'all') {
      pool = pool.filter(q => q.module === moduleFilter);
    }

    if (mode === 'exam') {
      // Shuffle pool for exam
      pool = pool.sort(() => 0.5 - Math.random()).slice(0, Math.min(questionCount, pool.length));
      state.totalExamTime = timeLimitMins * 60;
      state.timeRemaining = state.totalExamTime;
      startExamTimer();
    }

    state.quizQuestions = pool;
    state.currentIndex = 0;
    state.userAnswers = pool.map(() => ({
      selected: null,
      correct: false,
      flagged: false,
      time: 0
    }));

    switchView('quiz');
    renderQuestion();
  }

  function startExamTimer() {
    clearInterval(state.timerInterval);
    state.examActive = true;
    updateTimerDisplay();

    state.timerInterval = setInterval(() => {
      state.timeRemaining--;
      updateTimerDisplay();

      if (state.timeRemaining <= 0) {
        clearInterval(state.timerInterval);
        state.examActive = false;
        showToast('⏰ Time is up! Submitting your exam...', '⚠️');
        finishExam();
      }
    }, 1000);
  }

  function updateTimerDisplay() {
    const timerBox = document.getElementById('quiz-timer');
    if (!timerBox) return;

    if (state.quizMode !== 'exam') {
      timerBox.style.display = 'none';
      return;
    }

    timerBox.style.display = 'flex';
    const mins = Math.floor(state.timeRemaining / 60);
    const secs = state.timeRemaining % 60;
    const formatted = `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
    
    document.getElementById('timer-val').textContent = formatted;

    if (state.timeRemaining < 120) {
      timerBox.classList.add('warning');
    } else {
      timerBox.classList.remove('warning');
    }
  }

  function renderQuestion() {
    const q = state.quizQuestions[state.currentIndex];
    if (!q) return;

    const ansState = state.userAnswers[state.currentIndex];

    // Meta & Header
    document.getElementById('quiz-module-tag').textContent = `${q.module} • ${q.section}`;
    document.getElementById('quiz-counter').textContent = `Question ${state.currentIndex + 1} of ${state.quizQuestions.length}`;
    
    const progressFill = document.getElementById('quiz-progress-bar');
    if (progressFill) {
      const pct = ((state.currentIndex + 1) / state.quizQuestions.length) * 100;
      progressFill.style.width = `${pct}%`;
    }

    // Question Text
    document.getElementById('question-text-content').textContent = q.question;

    // Option Buttons
    const optionsContainer = document.getElementById('options-container');
    const letters = ['A', 'B', 'C', 'D'];

    optionsContainer.innerHTML = q.options.map((optText, idx) => {
      let optClass = 'option-btn';

      if (state.quizMode === 'practice') {
        if (ansState.selected !== null) {
          if (idx === q.answer) optClass += ' correct';
          else if (idx === ansState.selected) optClass += ' wrong';
        }
      } else {
        // Exam Mode: highlight selected option
        if (ansState.selected === idx) optClass += ' selected';
      }

      return `
        <button class="${optClass}" data-index="${idx}">
          <div class="option-index">${letters[idx]}</div>
          <div class="option-text">${optText}</div>
        </button>
      `;
    }).join('');

    // Attach click events to options
    document.querySelectorAll('.option-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const selectedIdx = parseInt(e.currentTarget.getAttribute('data-index'), 10);
        selectOption(selectedIdx);
      });
    });

    // Explanation Box (Practice Mode)
    const expBox = document.getElementById('explanation-box');
    if (state.quizMode === 'practice' && ansState.selected !== null) {
      expBox.style.display = 'block';
      document.getElementById('explanation-text').textContent = q.explanation;
    } else {
      expBox.style.display = 'none';
    }

    // Flag & Bookmark buttons
    const flagBtn = document.getElementById('flag-question-btn');
    if (flagBtn) {
      if (ansState.flagged) flagBtn.classList.add('flagged');
      else flagBtn.classList.remove('flagged');
    }

    const bookmarkBtn = document.getElementById('bookmark-question-btn');
    if (bookmarkBtn) {
      if (state.bookmarks.has(q.id)) bookmarkBtn.classList.add('bookmarked');
      else bookmarkBtn.classList.remove('bookmarked');
    }

    // Prev / Next Buttons
    const prevBtn = document.getElementById('prev-q-btn');
    const nextBtn = document.getElementById('next-q-btn');

    prevBtn.disabled = state.currentIndex === 0;
    
    if (state.currentIndex === state.quizQuestions.length - 1) {
      nextBtn.innerHTML = state.quizMode === 'exam' ? 'Submit Exam 🏁' : 'Finish Quiz ✨';
    } else {
      nextBtn.innerHTML = 'Next Question ➡️';
    }
  }

  function selectOption(index) {
    const q = state.quizQuestions[state.currentIndex];
    const ansState = state.userAnswers[state.currentIndex];

    // In practice mode, lock once selected
    if (state.quizMode === 'practice' && ansState.selected !== null) return;

    ansState.selected = index;
    ansState.correct = (index === q.answer);

    if (ansState.correct) {
      audioSynth.playCorrect();
    } else {
      audioSynth.playWrong();
    }

    // Update statistics
    if (state.quizMode === 'practice') {
      state.stats.totalAnswered++;
      if (ansState.correct) state.stats.correctCount++;
      state.stats.history.push({
        qId: q.id,
        module: q.module,
        correct: ansState.correct,
        timestamp: Date.now()
      });
      saveState();
    }

    renderQuestion();
  }

  function toggleFlagCurrent() {
    const ansState = state.userAnswers[state.currentIndex];
    ansState.flagged = !ansState.flagged;
    showToast(ansState.flagged ? 'Question flagged for review' : 'Flag removed');
    renderQuestion();
  }

  function toggleBookmarkCurrent() {
    const q = state.quizQuestions[state.currentIndex];
    if (state.bookmarks.has(q.id)) {
      state.bookmarks.delete(q.id);
      showToast('Removed from Bookmarks');
    } else {
      state.bookmarks.add(q.id);
      showToast('Added to Bookmarks ⭐');
    }
    saveState();
    renderQuestion();
  }

  function nextQuestion() {
    if (state.currentIndex < state.quizQuestions.length - 1) {
      state.currentIndex++;
      renderQuestion();
    } else {
      if (state.quizMode === 'exam') {
        finishExam();
      } else {
        showToast('Practice Quiz Completed! 🎉', '⭐');
        audioSynth.playFanfare();
        launchConfetti();
        switchView('dashboard');
      }
    }
  }

  function prevQuestion() {
    if (state.currentIndex > 0) {
      state.currentIndex--;
      renderQuestion();
    }
  }

  function finishExam() {
    clearInterval(state.timerInterval);
    state.examActive = false;

    // Calculate Scores
    let correctNum = 0;
    state.userAnswers.forEach(ans => {
      if (ans.correct) correctNum++;
    });

    const totalNum = state.quizQuestions.length;
    const scorePct = Math.round((correctNum / totalNum) * 100);

    // Save stats
    state.stats.totalAnswered += totalNum;
    state.stats.correctCount += correctNum;
    state.stats.examsCompleted++;
    saveState();

    if (scorePct >= 70) {
      audioSynth.playFanfare();
      launchConfetti();
    }

    // Render Exam Results Modal
    document.getElementById('exam-res-score-pct').textContent = `${scorePct}%`;
    document.getElementById('exam-res-correct').textContent = `${correctNum}/${totalNum}`;
    document.getElementById('exam-res-time').textContent = `${Math.round((state.totalExamTime - state.timeRemaining) / 60)} mins`;
    
    let gradeMsg = 'Outstanding Performance! 🌟';
    if (scorePct < 50) gradeMsg = 'Keep Practicing! You will get there 💪';
    else if (scorePct < 75) gradeMsg = 'Good Job! Review missed questions 👍';
    document.getElementById('exam-res-grade').textContent = gradeMsg;

    document.getElementById('exam-results-modal').classList.add('active');
  }

  // Question Palette Grid Modal
  function renderPaletteModal() {
    const paletteGrid = document.getElementById('palette-items-grid');
    if (!paletteGrid) return;

    paletteGrid.innerHTML = state.quizQuestions.map((q, idx) => {
      const ansState = state.userAnswers[idx];
      let itemClass = 'palette-item';

      if (idx === state.currentIndex) itemClass += ' current';
      if (ansState.selected !== null) itemClass += ' answered';
      if (ansState.flagged) itemClass += ' flagged';

      return `
        <div class="${itemClass}" data-index="${idx}">${idx + 1}</div>
      `;
    }).join('');

    document.querySelectorAll('.palette-item').forEach(item => {
      item.addEventListener('click', (e) => {
        const targetIdx = parseInt(e.currentTarget.getAttribute('data-index'), 10);
        state.currentIndex = targetIdx;
        renderQuestion();
        document.getElementById('palette-modal').classList.remove('active');
      });
    });

    document.getElementById('palette-modal').classList.add('active');
  }

  // Flashcard Engine
  function renderFlashcardView() {
    if (state.flashcards.length === 0) {
      state.flashcards = [...QUIZ_DATA].sort(() => 0.5 - Math.random());
      state.flashcardIndex = 0;
    }

    const card = state.flashcards[state.flashcardIndex];
    if (!card) return;

    state.isFlipped = false;
    const cardElem = document.getElementById('flashcard-elem');
    if (cardElem) cardElem.classList.remove('flipped');

    document.getElementById('flashcard-module-tag').textContent = card.module;
    document.getElementById('flashcard-q-text').textContent = card.question;
    document.getElementById('flashcard-counter').textContent = `Card ${state.flashcardIndex + 1} of ${state.flashcards.length}`;

    // Back of card
    const correctLetter = ['A', 'B', 'C', 'D'][card.answer];
    document.getElementById('flashcard-ans-text').textContent = `Answer: (${correctLetter}) ${card.options[card.answer]}`;
    document.getElementById('flashcard-exp-text').textContent = card.explanation;
  }

  function flipFlashcard() {
    state.isFlipped = !state.isFlipped;
    const cardElem = document.getElementById('flashcard-elem');
    if (cardElem) {
      if (state.isFlipped) cardElem.classList.add('flipped');
      else cardElem.classList.remove('flipped');
    }
  }

  function nextFlashcard() {
    if (state.flashcardIndex < state.flashcards.length - 1) {
      state.flashcardIndex++;
    } else {
      state.flashcardIndex = 0;
      showToast('Completed Flashcard Deck! Restarting... 🎴');
    }
    renderFlashcardView();
  }

  // Question Bank Search & Render
  function renderQBankView() {
    const listContainer = document.getElementById('qbank-list-container');
    if (!listContainer) return;

    let filtered = [...QUIZ_DATA];

    if (state.searchQuery.trim() !== '') {
      const q = state.searchQuery.toLowerCase();
      filtered = filtered.filter(item => 
        item.question.toLowerCase().includes(q) ||
        item.options.some(opt => opt.toLowerCase().includes(q)) ||
        item.section.toLowerCase().includes(q)
      );
    }

    if (state.selectedModule !== 'all') {
      filtered = filtered.filter(item => item.module === state.selectedModule);
    }

    if (state.onlyBookmarked) {
      filtered = filtered.filter(item => state.bookmarks.has(item.id));
    }

    document.getElementById('qbank-count-label').textContent = `Showing ${filtered.length} of ${QUIZ_DATA.length} Questions`;

    const letters = ['A', 'B', 'C', 'D'];

    listContainer.innerHTML = filtered.map(item => {
      const isBookmarked = state.bookmarks.has(item.id);
      return `
        <div class="qbank-item">
          <div class="qbank-item-header">
            <div>
              <span class="quiz-meta-badge" style="margin-bottom:0.4rem;">${item.module} • ${item.section}</span>
              <div class="qbank-qtext">${item.question}</div>
            </div>
            <button class="icon-btn qbank-bm-btn ${isBookmarked ? 'bookmarked' : ''}" data-id="${item.id}">
              ${isBookmarked ? '⭐' : '☆'}
            </button>
          </div>
          <div class="qbank-options">
            ${item.options.map((opt, i) => `
              <div class="qbank-opt ${i === item.answer ? 'correct-opt' : ''}">
                <strong>${letters[i]}.</strong> ${opt} ${i === item.answer ? '✓' : ''}
              </div>
            `).join('')}
          </div>
          <div class="explanation-card" style="margin-top:0.8rem;">
            <div class="explanation-title">💡 Explanation</div>
            <div class="explanation-body">${item.explanation}</div>
          </div>
        </div>
      `;
    }).join('');

    document.querySelectorAll('.qbank-bm-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const id = e.currentTarget.getAttribute('data-id');
        if (state.bookmarks.has(id)) state.bookmarks.delete(id);
        else state.bookmarks.add(id);
        saveState();
        renderQBankView();
      });
    });
  }

  // Analytics View Renderer
  function renderAnalyticsView() {
    const totalAns = state.stats.totalAnswered;
    const correct = state.stats.correctCount;
    const pct = totalAns > 0 ? Math.round((correct / totalAns) * 100) : 0;

    document.getElementById('analytics-total-q').textContent = totalAns;
    document.getElementById('analytics-correct-q').textContent = correct;
    document.getElementById('analytics-accuracy-pct').textContent = `${pct}%`;

    // Category Breakdown
    const breakdownContainer = document.getElementById('analytics-breakdown-container');
    if (!breakdownContainer) return;

    const moduleStats = {};
    state.stats.history.forEach(h => {
      if (!moduleStats[h.module]) moduleStats[h.module] = { total: 0, correct: 0 };
      moduleStats[h.module].total++;
      if (h.correct) moduleStats[h.module].correct++;
    });

    breakdownContainer.innerHTML = Object.keys(moduleStats).map(mod => {
      const s = moduleStats[mod];
      const modPct = Math.round((s.correct / s.total) * 100);
      return `
        <div style="margin-bottom: 1rem;">
          <div style="display:flex; justify-content:space-between; margin-bottom:0.3rem; font-size:0.9rem;">
            <span>${mod}</span>
            <span>${modPct}% (${s.correct}/${s.total})</span>
          </div>
          <div class="progress-bar-container" style="width:100%;">
            <div class="progress-bar-fill" style="width:${modPct}%"></div>
          </div>
        </div>
      `;
    }).join('') || '<div style="color:var(--text-muted);">No quiz data recorded yet. Take a practice quiz to see detailed insights!</div>';
  }

  // Event Listeners Initializer
  function initEvents() {
    // Navigation Buttons
    document.querySelectorAll('.nav-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const view = e.currentTarget.getAttribute('data-view');
        switchView(view);
      });
    });

    // Theme & Sound Toggle
    const themeBtn = document.getElementById('theme-toggle-btn');
    if (themeBtn) themeBtn.addEventListener('click', toggleTheme);

    const soundBtn = document.getElementById('sound-toggle-btn');
    if (soundBtn) soundBtn.addEventListener('click', toggleSound);

    // Dashboard Mode Launchers
    document.querySelectorAll('.launch-mode-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const mode = e.currentTarget.getAttribute('data-mode');
        if (mode === 'exam') {
          document.getElementById('exam-setup-modal').classList.add('active');
        } else if (mode === 'flashcard') {
          switchView('flashcard');
        } else if (mode === 'qbank') {
          switchView('qbank');
        } else {
          startQuiz('practice');
        }
      });
    });

    // Exam Setup Modal Form
    const startExamConfirmBtn = document.getElementById('start-exam-confirm-btn');
    if (startExamConfirmBtn) {
      startExamConfirmBtn.addEventListener('click', () => {
        const mod = document.getElementById('exam-module-select').value;
        const count = parseInt(document.getElementById('exam-count-select').value, 10);
        const time = parseInt(document.getElementById('exam-time-select').value, 10);

        document.getElementById('exam-setup-modal').classList.remove('active');
        startQuiz('exam', mod, count, time);
      });
    }

    const cancelExamSetupBtn = document.getElementById('cancel-exam-setup-btn');
    if (cancelExamSetupBtn) {
      cancelExamSetupBtn.addEventListener('click', () => {
        document.getElementById('exam-setup-modal').classList.remove('active');
      });
    }

    // Quiz Controls
    document.getElementById('next-q-btn').addEventListener('click', nextQuestion);
    document.getElementById('prev-q-btn').addEventListener('click', prevQuestion);
    document.getElementById('flag-question-btn').addEventListener('click', toggleFlagCurrent);
    document.getElementById('bookmark-question-btn').addEventListener('click', toggleBookmarkCurrent);
    document.getElementById('open-palette-btn').addEventListener('click', renderPaletteModal);

    const closePaletteBtn = document.getElementById('close-palette-btn');
    if (closePaletteBtn) {
      closePaletteBtn.addEventListener('click', () => {
        document.getElementById('palette-modal').classList.remove('active');
      });
    }

    // Exam Results Close
    document.getElementById('close-exam-res-btn').addEventListener('click', () => {
      document.getElementById('exam-results-modal').classList.remove('active');
      switchView('dashboard');
    });

    // Flashcard Interactions
    const cardElem = document.getElementById('flashcard-elem');
    if (cardElem) cardElem.addEventListener('click', flipFlashcard);

    document.querySelectorAll('.fc-rate-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        nextFlashcard();
      });
    });

    // Search & QBank Filters
    const searchInput = document.getElementById('qbank-search-input');
    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        state.searchQuery = e.target.value;
        renderQBankView();
      });
    }

    const modFilter = document.getElementById('qbank-module-filter');
    if (modFilter) {
      modFilter.addEventListener('change', (e) => {
        state.selectedModule = e.target.value;
        renderQBankView();
      });
    }

    const bmFilter = document.getElementById('qbank-bm-filter');
    if (bmFilter) {
      bmFilter.addEventListener('click', () => {
        state.onlyBookmarked = !state.onlyBookmarked;
        bmFilter.classList.toggle('active', state.onlyBookmarked);
        renderQBankView();
      });
    }

    // Reset Progress
    const resetBtn = document.getElementById('reset-stats-btn');
    if (resetBtn) {
      resetBtn.addEventListener('click', () => {
        if (confirm('Are you sure you want to reset all your practice stats and history?')) {
          state.stats = {
            totalAnswered: 0,
            correctCount: 0,
            examsCompleted: 0,
            streakDays: 1,
            lastActiveDate: new Date().toDateString(),
            history: []
          };
          saveState();
          showToast('All progress statistics reset.');
          renderAnalyticsView();
        }
      });
    }
  }

  // App Initialization
  document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    initEvents();
    renderDashboard();
  });

})();
