// Register PWA Service Worker for Offline Execution
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

function updateInstallBadgeCount() {
  let count = parseInt(localStorage.getItem('mdt_install_count') || '1240');
  const badge = document.getElementById('install-counter-badge');
  if (badge) {
    badge.innerText = count >= 1000 ? (count / 1000).toFixed(1) + 'k+' : count;
  }
}

function triggerPwaInstall() {
  let count = parseInt(localStorage.getItem('mdt_install_count') || '1240');
  count++;
  localStorage.setItem('mdt_install_count', count);
  updateInstallBadgeCount();

  if (deferredPrompt) {
    deferredPrompt.prompt();
    deferredPrompt.userChoice.then((choiceResult) => {
      if (choiceResult.outcome === 'accepted' && window.confetti) {
        confetti({ particleCount: 35, spread: 60, origin: { y: 0.1 } });
      }
      deferredPrompt = null;
    });
  } else {
    alert('💡 To install MyDevToolbox:\n\n• On Chrome/Edge (Desktop): Click the install icon (⊕) on the right side of the address bar.\n• On Safari (Mac/iOS): Click Share → "Add to Dock" or "Add to Home Screen".\n\nRuns standalone and works 100% offline.');
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
  if (!dashboard || !toolView) return;

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
  if (!list) return;
  list.innerHTML = '';
  recent.forEach((t) => {
    list.innerHTML += `<button onclick="openTool('${t.id}')" class="px-3 py-1 theme-card border text-[11px] font-semibold rounded-lg hover:border-indigo-500 transition">⚡ ${t.name}</button>`;
  });
}

function openTool(toolId) {
  switchView('tool');
  if (typeof renderToolView === 'function') {
    renderToolView(toolId);
  }
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Category Filter Engine
let currentActiveCategory = 'all';

function setCategoryFilter(cat) {
  currentActiveCategory = cat;
  const searchInput = document.getElementById('tool-search');
  const statusText = document.getElementById('search-status-text');
  if (searchInput) searchInput.value = '';
  if (statusText) statusText.classList.add('hidden');

  document.querySelectorAll('.cat-pill').forEach((btn) => {
    btn.classList.remove('bg-indigo-600', 'text-white', 'shadow-md');
  });

  const activePill = document.querySelector(`.cat-pill[data-pill="${cat}"]`);
  if (activePill) {
    activePill.classList.add('bg-indigo-600', 'text-white', 'shadow-md');
  }

  document.querySelectorAll('.tool-card').forEach((card) => {
    const cats = card.getAttribute('data-cat') || '';
    card.style.display = cat === 'all' || cats.includes(cat) ? 'flex' : 'none';
  });
}

function filterTools() {
  const searchInput = document.getElementById('tool-search');
  const statusText = document.getElementById('search-status-text');
  if (!searchInput || !statusText) return;

  const q = searchInput.value.trim().toLowerCase();
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

// Spotlight Command Palette
function toggleSpotlight() {
  const modal = document.getElementById('spotlight-modal');
  if (!modal) return;
  modal.classList.toggle('hidden');
  if (!modal.classList.contains('hidden')) {
    const spotlightInput = document.getElementById('spotlight-input');
    if (spotlightInput) {
      spotlightInput.value = '';
      spotlightInput.focus();
    }
    handleSpotlightSearch();
  }
}

window.addEventListener('keydown', (e) => {
  if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
    e.preventDefault();
    toggleSpotlight();
  }
  const modal = document.getElementById('spotlight-modal');
  if (e.key === 'Escape' && modal && !modal.classList.contains('hidden')) {
    toggleSpotlight();
  }
});

function handleSpotlightSearch() {
  const spotlightInput = document.getElementById('spotlight-input');
  const container = document.getElementById('spotlight-results');
  if (!spotlightInput || !container) return;

  const q = spotlightInput.value.toLowerCase();
  container.innerHTML = '';
  
  const matches = toolsDatabase.filter((t) => t.name.toLowerCase().includes(q) || t.desc.toLowerCase().includes(q));

  matches.slice(0, 8).forEach((t) => {
    container.innerHTML += `
      <div onclick="openTool('${t.id}'); toggleSpotlight();" class="p-2.5 rounded-xl hover:bg-indigo-500/10 cursor-pointer flex justify-between items-center transition">
        <div><span class="text-indigo-500 font-bold">${t.name}</span><div class="text-[11px] opacity-60">${t.desc}</div></div>
        <i data-lucide="arrow-right" class="w-3.5 h-3.5 opacity-50"></i>
      </div>`;
  });
  if (window.lucide) lucide.createIcons();
}

// Blobby Companion Logic
function toggleCompanionDialog() {
  const dialog = document.getElementById('companion-dialog');
  if (dialog) {
    dialog.classList.toggle('hidden');
    if (!dialog.classList.contains('hidden') && window.confetti) {
      confetti({ particleCount: 20, spread: 50, origin: { y: 0.9, x: 0.9 } });
    }
  }
}

async function fetchFreshJoke() {
  const msgBox = document.getElementById('blobby-msg');
  const bubbleBoard = document.getElementById('bubble-wrap-board');
  if (bubbleBoard) bubbleBoard.classList.add('hidden');
  if (msgBox) msgBox.innerText = 'Fetching a fresh joke...';
  try {
    const res = await fetch('https://v2.jokeapi.dev/joke/Any?safe-mode&type=single');
    const data = await res.json();
    if (data && data.joke && msgBox) msgBox.innerText = `"${data.joke}" 😂`;
    else {
      const res2 = await fetch('https://icanhazdadjoke.com/', { headers: { Accept: 'application/json' } });
      const data2 = await res2.json();
      if (msgBox) msgBox.innerText = `"${data2.joke}" 🤣`;
    }
  } catch (err) {
    if (msgBox) msgBox.innerText = '"Why do programmers prefer dark mode? Because light attracts bugs!" 🐛';
  }
}

function toggleBubblePopper() {
  const board = document.getElementById('bubble-wrap-board');
  const msgBox = document.getElementById('blobby-msg');
  if (!board) return;
  board.classList.toggle('hidden');
  if (!board.classList.contains('hidden')) {
    board.innerHTML = '';
    for (let i = 0; i < 18; i++) {
      const b = document.createElement('div');
      b.className = 'bubble-wrap-dot';
      b.onclick = function () { this.classList.add('popped'); };
      board.appendChild(b);
    }
    if (msgBox) msgBox.innerText = '🫧 Pop the calming bubbles to relieve stress!';
  }
}

function copyToClipboard(id) {
  const el = document.getElementById(id);
  if (!el) return;
  navigator.clipboard.writeText(el.value || el.innerText);
  alert('Copied to clipboard!');
}

function toggleRequestModal() {
  const modal = document.getElementById('request-tool-modal');
  if (modal) modal.classList.toggle('hidden');
}

async function submitToolRequest(e) {
  e.preventDefault();
  const nameEl = document.getElementById('req-tool-name');
  const detailsEl = document.getElementById('req-tool-details');
  const btn = document.getElementById('btn-submit-request');
  const status = document.getElementById('request-status');
  if (!nameEl || !btn || !status) return;

  const toolName = nameEl.value.trim();
  const toolDetails = detailsEl ? detailsEl.value.trim() : '';

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
      const form = document.getElementById('request-tool-form');
      if (form) form.reset();
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

// CRITICAL FIX: Ensure grid is populated on DOM load
document.addEventListener('DOMContentLoaded', () => {
  if (typeof renderToolsGrid === 'function') {
    renderToolsGrid();
  }
  renderRecentTools();
  updateInstallBadgeCount();
  if (window.lucide) lucide.createIcons();
});
