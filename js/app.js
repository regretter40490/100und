// js/app.js
// Final update: immediate next-button appearance after unlocking + home layout fix

(function () {
  'use strict';

  document.addEventListener('DOMContentLoaded', () => initApp());

  function initApp() {
    const STORAGE_KEY = 'puzzle_demo_state_v1';
    const UNLOCK_STAGES = [5, 10, 20, 30, 40, 50, 60, 70, 85, 90, 100];

    // DOM
    const screenTitle = document.getElementById('screen-title');
    const screenHome = document.getElementById('screen-home');
    const screenPuzzle = document.getElementById('screen-puzzle');

    const toHomeBtn = document.getElementById('to-home');
    const backToTitle = document.getElementById('back-to-title');
    const levelsGrid = document.getElementById('levels-grid');

    const btnHome = document.getElementById('btn-home');
    const btnPrev = document.getElementById('btn-prev');
    const btnNext = document.getElementById('btn-next');
    const puzzleTitle = document.getElementById('puzzle-title');
    const boardEl = document.getElementById('board');
    const boardFrameEl = document.getElementById('board-frame');
    const puzzleHint = document.getElementById('puzzle-hint');

    const resetBtn = document.getElementById('reset-btn');
    const resetModal = document.getElementById('reset-modal');
    const doResetBtn = document.getElementById('doreset-btn');
    const cancelResetBtn = document.getElementById('cancelreset-btn');

    const muteBtn = document.getElementById('mute-btn');

    // Audio setup (same pool approach as before)
    const audio = { bgm: new Audio('assets/audio/bgm.mp3'), se_click_src: 'assets/audio/se_click.mp3', se_transition_src: 'assets/audio/se_transition.mp3', se_solve_src: 'assets/audio/se_solve.mp3' };
    audio.bgm.loop = true;
    audio.bgm.volume = 0.18;

    function createAudioPool(src, poolSize) {
      const pool = [];
      for (let i = 0; i < poolSize; i++) {
        const a = new Audio(src);
        a.preload = 'auto';
        pool.push(a);
      }
      return { pool, idx: 0 };
    }
    const POOL_SIZE = 6;
    const seClickPool = createAudioPool(audio.se_click_src, POOL_SIZE);
    const seTransitionPool = createAudioPool(audio.se_transition_src, POOL_SIZE);
    const seSolvePool = createAudioPool(audio.se_solve_src, POOL_SIZE);
    seClickPool.pool.forEach(a => a.volume = 0.95);
    seTransitionPool.pool.forEach(a => a.volume = 0.9);
    seSolvePool.pool.forEach(a => a.volume = 0.95);
    function playSEfromPool(poolObj) { if (!poolObj) return; if (state.mute) return; const a = poolObj.pool[poolObj.idx]; try { a.currentTime = 0; } catch(e){} a.play().catch(()=>{}); poolObj.idx = (poolObj.idx + 1) % poolObj.pool.length; }
    function playSEClick(){ playSEfromPool(seClickPool); }
    function playSETransition(){ playSEfromPool(seTransitionPool); }
    function playSESolve(){ playSEfromPool(seSolvePool); }

    // state
    let state = loadState() || { unlockedUpTo: 5, solved: {}, boards: {}, mute: false };
    let currentIndex = 0;
    let board = [];
    let dragging = null;
    let hasUserGesture = false;
    const WHITE=0, BLACK=1, GRAY=2;

    if (!window.PROBLEMS || !Array.isArray(PROBLEMS.questions)) {
      console.error('PROBLEMS missing or malformed');
      if (screenTitle) screenTitle.innerHTML = '<p style="color:#900">エラー: problems.js が見つからないか形式が不正です。</p>';
      return;
    }

    function saveState(){ try { localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); } catch(e){ console.warn('保存失敗', e); } }
    function loadState(){ try { const s = localStorage.getItem(STORAGE_KEY); return s ? JSON.parse(s) : null; } catch(e){ return null; } }

    function startBGMIfNeeded(){ if (state.mute) return; if (hasUserGesture) audio.bgm.play().catch(()=>{}); }
    function setMute(m){ state.mute = !!m; saveState(); const img = muteBtn.querySelector('img'); if (img) img.src = state.mute ? 'assets/img/icons/muteoff.png' : 'assets/img/icons/mute.png'; if (state.mute) { audio.bgm.pause(); audio.bgm.currentTime = 0; muteBtn.style.opacity='var(--muted-opacity)'; } else { if (hasUserGesture) audio.bgm.play().catch(()=>{}); muteBtn.style.opacity='1'; } }

    function getHintFileAt(q,r1,c1){ if (!q || !Array.isArray(q.hints)) return null; for (let i=0;i<q.hints.length;i++){ const h=q.hints[i]; if(!h) continue; if(Number(h.r)===Number(r1) && Number(h.c)===Number(c1) && h.file) return String(h.file); } return null; }
    function formatLevelLabel(id,fallbackIndex){ if (typeof id==='string'){ let s = id.replace(/^[^0-9]*/,''); s = s.replace(/^0+/, ''); if (s.length===0) s='0'; return s; } return String(fallbackIndex+1); }

    function showScreen(screenEl){ [screenTitle,screenHome,screenPuzzle].forEach(el=>el.classList.add('hidden')); screenEl.classList.remove('hidden'); playSETransition(); }

    function renderHome(){
      levelsGrid.innerHTML = '';
      const total = PROBLEMS.questions.length;
      const upTo = state.unlockedUpTo;
      for (let i=0;i<total;i++){
        const q = PROBLEMS.questions[i] || {};
        const btn = document.createElement('button');
        btn.className = 'level-button';
        const label = formatLevelLabel(q.id, i);
        btn.innerHTML = `<span class="level-label">${label}</span>`;
        if (i+1 > upTo) { btn.classList.add('locked'); btn.disabled = true; btn.style.visibility = 'hidden'; } else { btn.disabled = false; btn.style.visibility = ''; }
        if (state.solved[q.id]) btn.classList.add('solved');
        btn.dataset.index = i;
        btn.setAttribute('aria-label', q.id || ('Q' + String(i+1).padStart(3,'0')));
        btn.addEventListener('click', ()=> openPuzzle(i));
        levelsGrid.appendChild(btn);
      }
    }

    function openPuzzle(index){
      currentIndex = index;
      const q = PROBLEMS.questions[index];
      puzzleTitle.textContent = formatLevelLabel(q.id, index);

      const key = q.id;
      const cells = q.rows * q.cols;
      const saved = state.boards[key];
      if (Array.isArray(saved) && saved.length === cells) board = saved.slice(); else board = new Array(cells).fill(WHITE);

      updateNavButtonsVisibility();

      if (state.solved[key]) {
        screenPuzzle.style.background = 'linear-gradient(90deg,#e6ffe6,#ffffff)';
      } else {
        screenPuzzle.style.background = '';
      }

      renderBoard(q);
      showScreen(screenPuzzle);
    }

    function updateNavButtonsVisibility(){
      const total = PROBLEMS.questions.length;
      if (currentIndex > 0) btnPrev.style.display = ''; else btnPrev.style.display = 'none';
      const nextIdx = currentIndex + 1;
      if (nextIdx < total && (nextIdx + 1) <= state.unlockedUpTo) btnNext.style.display = ''; else btnNext.style.display = 'none';
    }

    function renderBoard(q){
      boardEl.innerHTML = '';
      const rows = q.rows, cols = q.cols;
      boardEl.style.gridTemplateColumns = `repeat(${cols}, auto)`;
      boardEl.style.gridTemplateRows = `repeat(${rows}, auto)`;

      for (let r=0;r<rows;r++){
        for (let c=0;c<cols;c++){
          const idx = r*cols + c;
          const cell = document.createElement('div');
          cell.className = 'cell';
          cell.dataset.idx = idx;
          cell.style.position = 'relative';

          const img = document.createElement('img');
          img.draggable = false;
          setCellImage(img, board[idx]);
          img.alt = '';
          cell.appendChild(img);

          const hintFile = getHintFileAt(q, r+1, c+1);
          if (hintFile) {
            const hintImg = document.createElement('img');
            hintImg.className = 'hint-img';
            hintImg.draggable = false;
            hintImg.src = 'assets/img/hints/' + hintFile;
            hintImg.onerror = function(){ this.style.display='none'; };
            cell.appendChild(hintImg);
          }

          attachPointerHandlers(cell, img, q);
          boardEl.appendChild(cell);
        }
      }

      updateBoardFrameMatchStatus(q);
      puzzleHint.textContent = '';
      state.boards[q.id] = board.slice();
      saveState();
    }

    function setCellImage(imgEl, stateVal){ if (stateVal===WHITE) imgEl.src='assets/img/white.png'; else if (stateVal===BLACK) imgEl.src='assets/img/black.png'; else imgEl.src='assets/img/gray.png'; }
    function nextColorOnLeft(curr){ return curr===WHITE?BLACK:(curr===BLACK?GRAY:WHITE); }
    function nextColorOnRight(curr){ return curr===GRAY?WHITE:GRAY; }
    function updateBoardFrameMatchStatus(q){ if (!boardFrameEl) return; const matched = checkSolvedForQuestion(q); boardFrameEl.style.background = matched ? 'var(--frame-solved)' : 'var(--frame-gray)'; }

    function attachPointerHandlers(cell, imgEl, q){
      cell.addEventListener('pointerdown', (ev)=> {
        hasUserGesture = true; startBGMIfNeeded();
        if (ev.button !== 0 && ev.button !== 2) return;
        ev.preventDefault();
        try { cell.setPointerCapture(ev.pointerId); } catch(e){}
        const idx = Number(cell.dataset.idx);
        const cur = board[idx];
        const apply = (ev.button===0)? nextColorOnLeft(cur) : nextColorOnRight(cur);
        const wasCorrectBefore = checkSolvedForQuestion(q);
        applyToCell(idx, apply, { playEffect: cur !== apply, wasCorrectBefore });
        dragging = { pointerId: ev.pointerId, applyColor: apply, button: ev.button, captureTarget: cell, wasCorrectBefore };
        disableSelectionDuringDrag();
      });
      cell.addEventListener('contextmenu', (e)=> e.preventDefault());
    }

    function applyToCell(idx, color, { playEffect=false, wasCorrectBefore=null } = {}){
      const q = PROBLEMS.questions[currentIndex];
      if (wasCorrectBefore === null) wasCorrectBefore = checkSolvedForQuestion(q);

      board[idx] = color;
      const cell = boardEl.querySelector(`.cell[data-idx='${idx}']`);
      if (cell) { const img = cell.querySelector('img'); setCellImage(img, color); }
      if (playEffect) playSEClick();

      state.boards[q.id] = board.slice();
      saveState();

      const nowCorrect = checkSolvedForQuestion(q);
      updateBoardFrameMatchStatus(q);

      if (!wasCorrectBefore && nowCorrect) {
        playSESolve();
        markSolved(q);
      }
    }

    function markSolved(q){
      const id = q.id;
      if (state.solved[id]) return;
      state.solved[id] = true;

      // set gradient permanently
      screenPuzzle.style.transition = 'background 1s linear';
      screenPuzzle.style.background = 'linear-gradient(90deg,#e6ffe6,#ffffff)';

      // check unlocking and update home & nav immediately
      checkForNextUnlock();  // may update state.unlockedUpTo
      renderHome();
      updateNavButtonsVisibility(); // important: ensure next button appears immediately on current puzzle if unlocked
      saveState();
    }

    function checkSolvedForQuestion(q){
      const sol = q.solution;
      if (!Array.isArray(sol)) return false;
      for (let i=0;i<sol.length;i++){ const need = !!sol[i]; const curBlack = (board[i]===BLACK); if (need && !curBlack) return false; if (!need && curBlack) return false; }
      return true;
    }

    function checkForNextUnlock(){
      const currentStageIndex = UNLOCK_STAGES.indexOf(state.unlockedUpTo);
      if (currentStageIndex === -1) return;
      const upTo = state.unlockedUpTo;
      let allSolved = true;
      for (let i=0;i<upTo;i++){
        const id = PROBLEMS.questions[i].id;
        if (!state.solved[id]) { allSolved = false; break; }
      }
      if (!allSolved) return;
      const nextStageVal = UNLOCK_STAGES[currentStageIndex + 1];
      if (nextStageVal) { state.unlockedUpTo = nextStageVal; saveState(); }
    }

    // global drag support
    document.addEventListener('pointermove', (ev)=> {
      if (!dragging) return;
      if (ev.pointerId !== dragging.pointerId) return;
      const el = document.elementFromPoint(ev.clientX, ev.clientY);
      if (!el) return;
      const cell = el.closest && el.closest('.cell');
      if (!cell) return;
      const idx = Number(cell.dataset.idx);
      if (Number.isNaN(idx)) return;
      if (board[idx] !== dragging.applyColor) applyToCell(idx, dragging.applyColor, { playEffect: true, wasCorrectBefore: dragging.wasCorrectBefore });
    }, { passive:true });

    document.addEventListener('pointerup', (ev)=> {
      if (!dragging) return;
      if (ev.pointerId !== dragging.pointerId) return;
      try { if (dragging.captureTarget && typeof dragging.captureTarget.releasePointerCapture === 'function') dragging.captureTarget.releasePointerCapture(dragging.pointerId); } catch(e){}
      dragging = null; restoreSelectionAfterDrag();
    });

    let _prevBodyUserSelect = null, _prevBodyWebkitUserSelect = null;
    function disableSelectionDuringDrag(){ try { const body=document.body; _prevBodyUserSelect = body.style.userSelect; _prevBodyWebkitUserSelect=body.style.webkitUserSelect; body.style.userSelect='none'; body.style.webkitUserSelect='none'; body.style.webkitUserDrag='none'; } catch(e){} }
    function restoreSelectionAfterDrag(){ try { const body=document.body; if (_prevBodyUserSelect !== null) body.style.userSelect=_prevBodyUserSelect; else body.style.userSelect=''; if (_prevBodyWebkitUserSelect !== null) body.style.webkitUserSelect=_prevBodyWebkitUserSelect; else body.style.webkitUserSelect=''; body.style.webkitUserDrag=''; _prevBodyUserSelect=null; _prevBodyWebkitUserSelect=null; } catch(e){} }

    // navigation wiring
    toHomeBtn.addEventListener('click', (e)=>{ e.preventDefault(); showScreen(screenHome); renderHome(); });
    backToTitle.addEventListener('click', (e)=>{ e.preventDefault(); showScreen(screenTitle); });
    btnHome.addEventListener('click', (e)=>{ e.preventDefault(); showScreen(screenHome); renderHome(); });
    btnPrev.addEventListener('click', (e)=>{ e.preventDefault(); if (currentIndex>0) openPuzzle(currentIndex-1); });
    btnNext.addEventListener('click', (e)=>{ e.preventDefault(); const nextIdx = currentIndex+1; if (nextIdx < PROBLEMS.questions.length && (nextIdx+1) <= state.unlockedUpTo) openPuzzle(nextIdx); });

    // reset modal wiring (preserve behavior)
    if (resetBtn) resetBtn.addEventListener('click', (e)=>{ e.preventDefault(); showResetModal(); });
    if (cancelResetBtn) cancelResetBtn.addEventListener('click', (e)=>{ e.preventDefault(); hideResetModal(); showScreen(screenTitle); });
    if (doResetBtn) doResetBtn.addEventListener('click', (e)=>{ e.preventDefault(); performReset(); hideResetModal(); showScreen(screenTitle); });
    if (resetModal) resetModal.addEventListener('click', (ev)=>{ if (ev.target===resetModal) { hideResetModal(); showScreen(screenTitle); } });

    function showResetModal(){ if (!resetModal) return; resetModal.classList.remove('hidden'); resetModal.setAttribute('aria-hidden','false'); if (doResetBtn) doResetBtn.focus(); }
    function hideResetModal(){ if (!resetModal) return; resetModal.classList.add('hidden'); resetModal.setAttribute('aria-hidden','true'); }
    function performReset(){ state.unlockedUpTo = 5; state.solved = {}; state.boards = {}; saveState(); renderHome(); }

    // keyboard navigation
    document.addEventListener('keydown', (ev)=> {
      if (resetModal && !resetModal.classList.contains('hidden')) return;
      const active = document.activeElement;
      if (active && (active.tagName==='INPUT' || active.tagName==='TEXTAREA' || active.isContentEditable)) return;
      if (ev.key === 'ArrowRight') {
        const nextIdx = currentIndex + 1;
        if (nextIdx < PROBLEMS.questions.length && (nextIdx+1) <= state.unlockedUpTo) { openPuzzle(nextIdx); ev.preventDefault(); }
      } else if (ev.key==='ArrowLeft') {
        if (currentIndex>0) { openPuzzle(currentIndex-1); ev.preventDefault(); }
      }
    });

    document.addEventListener('contextmenu', (e)=> e.preventDefault());
    muteBtn.addEventListener('click', (e)=>{ e.preventDefault(); setMute(!state.mute); });
    setMute(state.mute);

    // initial
    showScreen(screenTitle);

    document.addEventListener('pointerdown', (e)=>{ hasUserGesture = true; startBGMIfNeeded(); }, { once:true });

    // expose state for debugging
    window._puzzleState = state;
  } // initApp end

})();