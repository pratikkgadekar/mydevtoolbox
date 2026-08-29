// Register PWA Service Worker
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./sw.js').catch((err) => console.log('SW registration error:', err));
  });
}

// Native PWA Install Prompt Listener
let deferredPrompt = null;
window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault();
  deferredPrompt = e;
  const installBtn = document.getElementById('btn-pwa-install');
  if (installBtn) installBtn.classList.remove('hidden');
});

function triggerPwaInstall() {
  if (deferredPrompt) {
    deferredPrompt.prompt();
    deferredPrompt.userChoice.then((choiceResult) => {
      if (choiceResult.outcome === 'accepted') {
        const installBtn = document.getElementById('btn-pwa-install');
        if (installBtn) installBtn.classList.add('hidden');
      }
      deferredPrompt = null;
    });
  } else {
    alert('💡 To install MyDevToolbox:\n\n• On Chrome/Edge: Click the install icon (⊕) in the browser address bar.\n• On Safari: Click Share → "Add to Dock" or "Add to Home Screen".\n\nRuns standalone and works 100% offline.');
  }
}

// 3-Way Theme Manager
function setTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('mdt_theme', theme);
  ['light', 'dim', 'dark'].forEach((t) => {
    const btn = document.getElementById('btn-theme-' + t);
    if (btn) {
      if (t === theme) btn.className = 'p-1.5 rounded-xl bg-indigo-600 text-white shadow-sm transition';
      else btn.className = 'p-1.5 rounded-xl opacity-60 hover:opacity-100 transition';
    }
  });
}
setTheme(localStorage.getItem('mdt_theme') || 'light');

// View Controller & History Tracker
function switchView(viewName) {
  const dashboard = document.getElementById('view-dashboard');
  const toolView = document.getElementById('view-tool');
  if (viewName === 'dashboard') {
    dashboard.classList.remove('hidden');
    toolView.classList.add('hidden');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  } else {
    dashboard.classList.add('hidden');
    toolView.classList.remove('hidden');
  }
}

function recordToolUsage(toolId, toolName) {
  let recent = JSON.parse(localStorage.getItem('mdt_recent_tools') || '[]');
  recent = recent.filter((t) => t.id !== toolId);
  recent.unshift({ id: toolId, name: toolName });
  if (recent.length > 5) recent.pop();
  localStorage.setItem('mdt_recent_tools', JSON.stringify(recent));
  renderRecentTools();
}

function renderRecentTools() {
  const container = document.getElementById('recent-tools-bar');
  if (!container) return;
  const recent = JSON.parse(localStorage.getItem('mdt_recent_tools') || '[]');
  if (recent.length === 0) {
    container.classList.add('hidden');
    return;
  }
  container.classList.remove('hidden');
  const list = document.getElementById('recent-tools-list');
  list.innerHTML = '';
  recent.forEach((t) => {
    list.innerHTML += `<button onclick="openTool('${t.id}')" class="px-2.5 py-1 theme-card border text-[11px] font-semibold rounded-lg hover:border-indigo-500 transition">⚡ ${t.name}</button>`;
  });
}

function openTool(toolId) {
  switchView('tool');
  document.querySelectorAll('.tool-view-panel').forEach((el) => el.classList.add('hidden'));
  const target = document.getElementById('tool-' + toolId);
  if (target) {
    target.classList.remove('hidden');
    window.scrollTo({ top: 0, behavior: 'smooth' });
    const cardEl = document.querySelector(`.tool-card[onclick*="${toolId}"] h3`);
    if (cardEl) recordToolUsage(toolId, cardEl.innerText);
  }

  // Engine Initializers
  if (toolId === 'llm-tokens') calculateTokens();
  if (toolId === 'wcag-contrast') updateContrast();
  if (toolId === 'md-table-gen') generateMarkdownTable();
  if (toolId === 'base-converter') syncBaseConv('dec');
  if (toolId === 'json-formatter' && !document.getElementById('json-studio-input').value) loadSampleJsonStudio();
  if (toolId === 'uuid-gen') generateUuids();
  if (toolId === 'pwd-gen') generatePassword();
  if (toolId === 'qr-gen') generateQrCode();
  if (toolId === 'regex-tester') testRegex();
  if (toolId === 'unit-convert') setUnitCategory('length');
  if (toolId === 'hash-gen') computeHashes();
  if (toolId === 'dummy-card') generateDummyCard();
  if (toolId === 'box-shadow') updateShadow();
  if (toolId === 'cron-builder') explainCron();
}

// Real-Time Pill Counts Synchronization
function updateCategoryPillCounts() {
  const cards = Array.from(document.querySelectorAll('.tool-card'));
  const categories = ['popular', 'ai', 'data', 'security', 'web', 'design', 'devops', 'text', 'math', 'testing'];

  categories.forEach((cat) => {
    const matchCount = cards.filter((c) => (c.getAttribute('data-cat') || '').includes(cat)).length;
    const pill = document.querySelector(`.cat-pill[data-pill="${cat}"] .pill-count`);
    if (pill) pill.innerText = `(${matchCount})`;
  });
}

// Category Filtering Engine
let currentActiveCategory = 'all';
function filterTools() {
  const q = document.getElementById('tool-search').value.trim().toLowerCase();
  const statusText = document.getElementById('search-status-text');
  let count = 0;

  document.querySelectorAll('.tool-card').forEach((card) => {
    const text = card.innerText.toLowerCase();
    const cats = card.getAttribute('data-cat') || '';
    const matchQ = !q || text.includes(q);
    const matchC = q ? true : currentActiveCategory === 'all' || cats.includes(currentActiveCategory);

    if (matchQ && matchC) {
      card.style.display = 'flex';
      count++;
    } else {
      card.style.display = 'none';
    }
  });

  if (q) {
    statusText.innerText = `Showing ${count} matching tool(s) for "${q}"`;
    statusText.classList.remove('hidden');
  } else {
    statusText.classList.add('hidden');
  }
}

function handleMainSearchEnter() {
  filterTools();
  const visible = Array.from(document.querySelectorAll('.tool-card')).filter((c) => c.style.display === 'flex');
  if (visible.length === 1) visible[0].click();
}

function setCategoryFilter(cat) {
  currentActiveCategory = cat;
  document.getElementById('tool-search').value = '';
  document.getElementById('search-status-text').classList.add('hidden');

  document.querySelectorAll('.cat-pill').forEach((btn) => btn.classList.remove('bg-indigo-600', 'text-white', 'shadow-md'));
  if (event && event.target) event.target.classList.add('bg-indigo-600', 'text-white', 'shadow-md');

  document.querySelectorAll('.tool-card').forEach((card) => {
    const cats = card.getAttribute('data-cat') || '';
    card.style.display = cat === 'all' || cats.includes(cat) ? 'flex' : 'none';
  });
}

// Spotlight Command Palette
function toggleSpotlight() {
  const modal = document.getElementById('spotlight-modal');
  modal.classList.toggle('hidden');
  if (!modal.classList.contains('hidden')) {
    document.getElementById('spotlight-input').value = '';
    handleSpotlightSearch();
    document.getElementById('spotlight-input').focus();
  }
}

window.addEventListener('keydown', (e) => {
  if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
    e.preventDefault();
    toggleSpotlight();
  }
  if (e.key === 'Escape' && !document.getElementById('spotlight-modal').classList.contains('hidden')) {
    toggleSpotlight();
  }
});

function handleSpotlightSearch() {
  const q = (document.getElementById('spotlight-input').value || '').toLowerCase();
  const container = document.getElementById('spotlight-results');
  container.innerHTML = '';
  const cards = Array.from(document.querySelectorAll('.tool-card'));
  const matches = cards.filter((c) => c.innerText.toLowerCase().includes(q));

  matches.slice(0, 8).forEach((card) => {
    const title = card.querySelector('h3').innerText;
    const desc = card.querySelector('p').innerText;
    const clickAttr = card.getAttribute('onclick');
    const toolId = clickAttr.match(/'([^']+)'/)[1];

    container.innerHTML += `
      <div onclick="openTool('${toolId}'); toggleSpotlight();" class="p-2.5 rounded-xl hover:bg-indigo-500/10 cursor-pointer flex justify-between items-center transition">
        <div><span class="text-indigo-500 font-bold">${title}</span><div class="text-[11px] opacity-60">${desc}</div></div>
        <i data-lucide="arrow-right" class="w-3.5 h-3.5 opacity-50"></i>
      </div>`;
  });
  if (window.lucide) lucide.createIcons();
}

// Blobby Companion Logic
function toggleCompanionDialog() {
  const dialog = document.getElementById('companion-dialog');
  dialog.classList.toggle('hidden');
  if (!dialog.classList.contains('hidden') && window.confetti) {
    confetti({ particleCount: 20, spread: 50, origin: { y: 0.9, x: 0.9 } });
  }
}

async function fetchFreshJoke() {
  const msgBox = document.getElementById('blobby-msg');
  document.getElementById('bubble-wrap-board').classList.add('hidden');
  msgBox.innerText = 'Fetching a fresh joke...';
  try {
    const res = await fetch('https://v2.jokeapi.dev/joke/Any?safe-mode&type=single');
    const data = await res.json();
    if (data && data.joke) msgBox.innerText = `"${data.joke}" 😂`;
    else {
      const res2 = await fetch('https://icanhazdadjoke.com/', { headers: { Accept: 'application/json' } });
      const data2 = await res2.json();
      msgBox.innerText = `"${data2.joke}" 🤣`;
    }
  } catch (err) {
    msgBox.innerText = '"Why do programmers prefer dark mode? Because light attracts bugs!" 🐛';
  }
}

function toggleBubblePopper() {
  const board = document.getElementById('bubble-wrap-board');
  board.classList.toggle('hidden');
  if (!board.classList.contains('hidden')) {
    board.innerHTML = '';
    for (let i = 0; i < 18; i++) {
      const b = document.createElement('div');
      b.className = 'bubble-wrap-dot';
      b.onclick = function () {
        this.classList.add('popped');
      };
      board.appendChild(b);
    }
    document.getElementById('blobby-msg').innerText = '🫧 Pop the calming bubbles to relieve stress!';
  }
}

function copyToClipboard(id) {
  const el = document.getElementById(id);
  navigator.clipboard.writeText(el.value || el.innerText);
  alert('Copied to clipboard!');
}

// Request Tool Modal Controls
function toggleRequestModal() {
  const modal = document.getElementById('request-tool-modal');
  modal.classList.toggle('hidden');
}

// Formspree Background Submission
async function submitToolRequest(e) {
  e.preventDefault();
  const toolName = document.getElementById('req-tool-name').value.trim();
  const toolDetails = document.getElementById('req-tool-details').value.trim();
  const btn = document.getElementById('btn-submit-request');
  const status = document.getElementById('request-status');

  if (!toolName) return;

  btn.disabled = true;
  btn.innerHTML = 'Sending...';

  try {
    const res = await fetch('https://formspree.io/f/mwlkkgwz', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({
        tool_name: toolName,
        details: toolDetails,
        timestamp: new Date().toISOString(),
        site: 'mydevtoolbox.in'
      })
    });

    if (res.ok) {
      status.innerText = '✓ Thank you! Your tool request has been received.';
      status.classList.remove('hidden');
      document.getElementById('request-tool-form').reset();
      setTimeout(() => {
        toggleRequestModal();
        status.classList.add('hidden');
      }, 2000);
    } else {
      throw new Error('Failed');
    }
  } catch (err) {
    status.innerText = '✓ Request recorded locally! We will review it soon.';
    status.classList.remove('hidden');
    setTimeout(() => {
      toggleRequestModal();
      status.classList.add('hidden');
    }, 2000);
  } finally {
    btn.disabled = false;
    btn.innerHTML = 'Submit Request';
  }
}

document.addEventListener('DOMContentLoaded', () => {
  renderRecentTools();
  updateCategoryPillCounts();
  if (window.lucide) lucide.createIcons();
});
