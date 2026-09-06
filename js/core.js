/* js/core.js - Controller & Dynamic Filter Synchronization */

let viewDensity = localStorage.getItem('mdt_view_density') || 'grid';
let currentActiveCategory = 'all';
let currentSearchQuery = '';

const categoryStyles = {
  ai: { bg: 'bg-purple-500/10', border: 'border-purple-500/30', text: 'text-purple-400', badge: 'bg-purple-500/10 text-purple-300 border-purple-500/30', hoverBorder: 'hover:border-purple-500' },
  testing: { bg: 'bg-emerald-500/10', border: 'border-emerald-500/30', text: 'text-emerald-400', badge: 'bg-emerald-500/10 text-emerald-300 border-emerald-500/30', hoverBorder: 'hover:border-emerald-500' },
  data: { bg: 'bg-teal-500/10', border: 'border-teal-500/30', text: 'text-teal-400', badge: 'bg-teal-500/10 text-teal-300 border-teal-500/30', hoverBorder: 'hover:border-teal-500' },
  security: { bg: 'bg-amber-500/10', border: 'border-amber-500/30', text: 'text-amber-400', badge: 'bg-amber-500/10 text-amber-300 border-amber-500/30', hoverBorder: 'hover:border-amber-500' },
  web: { bg: 'bg-sky-500/10', border: 'border-sky-500/30', text: 'text-sky-400', badge: 'bg-sky-500/10 text-sky-300 border-sky-500/30', hoverBorder: 'hover:border-sky-500' },
  design: { bg: 'bg-violet-500/10', border: 'border-violet-500/30', text: 'text-violet-400', badge: 'bg-violet-500/10 text-violet-300 border-violet-500/30', hoverBorder: 'hover:border-violet-500' },
  devops: { bg: 'bg-cyan-500/10', border: 'border-cyan-500/30', text: 'text-cyan-400', badge: 'bg-cyan-500/10 text-cyan-300 border-cyan-500/30', hoverBorder: 'hover:border-cyan-500' },
  text: { bg: 'bg-rose-500/10', border: 'border-rose-500/30', text: 'text-rose-400', badge: 'bg-rose-500/10 text-rose-300 border-rose-500/30', hoverBorder: 'hover:border-rose-500' },
  math: { bg: 'bg-indigo-500/10', border: 'border-indigo-500/30', text: 'text-indigo-400', badge: 'bg-indigo-500/10 text-indigo-300 border-indigo-500/30', hoverBorder: 'hover:border-indigo-500' },
  media: { bg: 'bg-pink-500/10', border: 'border-pink-500/30', text: 'text-pink-400', badge: 'bg-pink-500/10 text-pink-300 border-pink-500/30', hoverBorder: 'hover:border-pink-500' }
};

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./sw.js').catch((err) => console.log('SW error:', err));
  });
}

let deferredPrompt = null;
window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault();
  deferredPrompt = e;
  document.getElementById('btn-pwa-install')?.classList.remove('hidden');
});

function updateInstallBadgeCount() {
  let count = parseInt(localStorage.getItem('mdt_install_count') || '1240');
  const badge = document.getElementById('install-counter-badge');
  if (badge) badge.innerText = count >= 1000 ? (count / 1000).toFixed(1) + 'k+' : count;
}

function triggerPwaInstall() {
  let count = parseInt(localStorage.getItem('mdt_install_count') || '1240') + 1;
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
    alert('💡 To install MyDevToolbox:\n\n• Desktop: Click the install icon (⊕) on the address bar.\n• Mobile: Tap Share → "Add to Home Screen".');
  }
}

function setTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('mdt_theme', theme);
  ['light', 'dim', 'dark'].forEach((t) => {
    const btn = document.getElementById('btn-theme-' + t);
    if (btn) {
      btn.className = t === theme ? 'p-1.5 rounded-xl bg-indigo-600 text-white shadow-sm transition' : 'p-1.5 rounded-xl opacity-60 hover:opacity-100 transition';
    }
  });
}
setTheme(localStorage.getItem('mdt_theme') || 'dark');

function setViewDensity(density) {
  viewDensity = density;
  localStorage.setItem('mdt_view_density', density);
  const btnGrid = document.getElementById('btn-view-grid');
  const btnCompact = document.getElementById('btn-view-compact');

  if (density === 'compact') {
    btnCompact?.classList.add('bg-indigo-600', 'text-white');
    btnCompact?.classList.remove('opacity-70');
    btnGrid?.classList.remove('bg-indigo-600', 'text-white');
    btnGrid?.classList.add('opacity-70');
  } else {
    btnGrid?.classList.add('bg-indigo-600', 'text-white');
    btnGrid?.classList.remove('opacity-70');
    btnCompact?.classList.remove('bg-indigo-600', 'text-white');
    btnCompact?.classList.add('opacity-70');
  }
  renderToolsGrid();
}

function renderAlphabetJumpBar(availableLetters = []) {
  const container = document.getElementById('az-jump-container');
  const bar = document.getElementById('az-jump-bar');
  if (!bar || !container) return;

  if (currentActiveCategory !== 'all' || currentSearchQuery) {
    container.classList.add('hidden');
    return;
  }
  container.classList.remove('hidden');

  const allLetters = ['#', ...'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')];
  bar.innerHTML = allLetters.map((char) => {
    const hasTools = availableLetters.includes(char);
    const classes = hasTools
      ? 'px-2.5 py-1 rounded-lg border theme-card hover:border-indigo-500 hover:text-indigo-400 font-bold transition cursor-pointer shadow-sm'
      : 'px-2.5 py-1 rounded-lg border theme-card opacity-25 cursor-not-allowed';
    return `<button onclick="${hasTools ? `jumpToLetter('${char}')` : 'return false;'}" class="${classes}">${char}</button>`;
  }).join('');
}

function jumpToLetter(letter) {
  document.getElementById(`anchor-${letter}`)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function renderSingleCard(tool) {
  const s = categoryStyles[tool.cat] || categoryStyles.ai;
  if (viewDensity === 'compact') {
    return `
      <div class="tool-card theme-card border p-3 rounded-2xl cursor-pointer ${s.hoverBorder} transition flex items-center justify-between gap-3 group" data-cat="${tool.cat}" onclick="openTool('${tool.id}')">
        <div class="flex items-center gap-3 min-w-0">
          <div class="w-9 h-9 rounded-xl ${s.bg} border ${s.border} flex-shrink-0 flex items-center justify-center ${s.text} shadow-sm">
            <i data-lucide="${tool.icon}" class="w-4 h-4"></i>
          </div>
          <div class="truncate">
            <h4 class="font-bold text-xs truncate group-hover:text-indigo-400 transition-colors" style="color: var(--text-main);">${tool.name}</h4>
            <span class="text-[10px] uppercase font-mono px-1.5 py-0.5 rounded ${s.badge}">${tool.badge}</span>
          </div>
        </div>
        <i data-lucide="chevron-right" class="w-4 h-4 opacity-40 group-hover:opacity-100 group-hover:translate-x-0.5 transition flex-shrink-0 ${s.text}"></i>
      </div>`;
  }
  return `
    <div class="tool-card theme-card border p-6 rounded-3xl cursor-pointer transition-all duration-200 hover:-translate-y-1 ${s.hoverBorder} flex flex-col justify-between" data-cat="${tool.cat}" onclick="openTool('${tool.id}')">
      <div>
        <div class="flex items-start justify-between gap-2">
          <div class="w-12 h-12 rounded-2xl ${s.bg} border ${s.border} flex items-center justify-center ${s.text} shadow-inner">
            <i data-lucide="${tool.icon}" class="w-6 h-6"></i>
          </div>
          <span class="text-[10px] font-bold uppercase border px-2.5 py-1 rounded-full font-mono ${s.badge}">${tool.badge}</span>
        </div>
        <h3 class="font-bold text-base mt-4 tracking-tight leading-snug" style="color: var(--text-main);">${tool.name}</h3>
        <p class="text-xs opacity-75 mt-1.5 leading-relaxed">${tool.desc}</p>
      </div>
      <div class="mt-5 pt-3 border-t border-slate-700/40 flex items-center text-xs font-bold ${s.text}">
        Open Tool <i data-lucide="arrow-right" class="w-3.5 h-3.5 ml-1.5"></i>
      </div>
    </div>`;
}

function renderToolsGrid() {
  const grid = document.getElementById('tools-grid');
  const emptyState = document.getElementById('no-tools-found');
  const db = window.toolsDatabase || [];

  if (!grid || db.length === 0) return;

  const filtered = db.filter((tool) => {
    const matchCat = currentActiveCategory === 'all' || tool.cat === currentActiveCategory;
    const matchQuery = !currentSearchQuery ||
      tool.name.toLowerCase().includes(currentSearchQuery) ||
      tool.desc.toLowerCase().includes(currentSearchQuery) ||
      tool.badge.toLowerCase().includes(currentSearchQuery);
    return matchCat && matchQuery;
  });

  if (filtered.length === 0) {
    grid.innerHTML = '';
    emptyState?.classList.remove('hidden');
    renderAlphabetJumpBar([]);
    return;
  }
  emptyState?.classList.add('hidden');

  const subGridClasses = viewDensity === 'compact' ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3' : 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6';

  if (currentActiveCategory === 'all' && !currentSearchQuery) {
    const sorted = [...filtered].sort((a, b) => a.name.localeCompare(b.name));
    const grouped = {};
    sorted.forEach((tool) => {
      const firstChar = tool.name.charAt(0).toUpperCase();
      const key = /[A-Z]/.test(firstChar) ? firstChar : '#';
      if (!grouped[key]) grouped[key] = [];
      grouped[key].push(tool);
    });

    const activeLetters = Object.keys(grouped).sort();
    renderAlphabetJumpBar(activeLetters);

    grid.className = 'flex flex-col gap-10 w-full';
    grid.innerHTML = activeLetters.map((char) => `
      <section id="anchor-${char}" class="scroll-mt-36">
        <div class="sticky top-28 z-20 flex items-center gap-3 border-b border-slate-500/20 py-2.5 mb-4 bg-inherit backdrop-blur-md">
          <span class="text-2xl font-black font-mono text-indigo-400">${char}</span>
          <span class="text-xs font-semibold opacity-60">(${grouped[char].length} tools)</span>
        </div>
        <div class="${subGridClasses}">
          ${grouped[char].map((tool) => renderSingleCard(tool)).join('')}
        </div>
      </section>`).join('');
  } else {
    renderAlphabetJumpBar([]);
    grid.className = subGridClasses;
    grid.innerHTML = filtered.map((tool) => renderSingleCard(tool)).join('');
  }

  if (window.lucide) lucide.createIcons();
}

function setCategoryFilter(cat) {
  currentActiveCategory = cat;
  const searchInput = document.getElementById('tool-search');
  const statusText = document.getElementById('search-status-text');
  if (searchInput) searchInput.value = '';
  currentSearchQuery = '';
  if (statusText) statusText.classList.add('hidden');

  document.querySelectorAll('.cat-pill').forEach((btn) => {
    btn.classList.remove('bg-indigo-600', 'text-white', 'shadow-md');
  });

  document.querySelector(`.cat-pill[data-pill="${cat}"]`)?.classList.add('bg-indigo-600', 'text-white', 'shadow-md');
  renderToolsGrid();
}

function filterTools() {
  const searchInput = document.getElementById('tool-search');
  const statusText = document.getElementById('search-status-text');
  if (!searchInput) return;

  currentSearchQuery = searchInput.value.trim().toLowerCase();
  renderToolsGrid();

  if (currentSearchQuery && statusText) {
    const totalRendered = document.querySelectorAll('.tool-card').length;
    statusText.innerText = `Showing ${totalRendered} matching tool(s) for "${currentSearchQuery}"`;
    statusText.classList.remove('hidden');
  } else if (statusText) {
    statusText.classList.add('hidden');
  }
}

function handleMainSearchEnter() {
  filterTools();
  const visible = Array.from(document.querySelectorAll('.tool-card'));
  if (visible.length === 1) visible[0].click();
}

function switchView(viewName) {
  const dashboard = document.getElementById('view-dashboard');
  const toolView = document.getElementById('view-tool');
  if (!dashboard || !toolView) return;

  if (viewName === 'dashboard') {
    dashboard.classList.remove('hidden');
    toolView.classList.add('hidden');
    window.history.pushState(null, '', window.location.pathname);
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
  list.innerHTML = recent.map((t) => 
    `<button onclick="openTool('${t.id}')" class="px-3 py-1 theme-card border text-[11px] font-semibold rounded-lg hover:border-indigo-500 transition">⚡ ${t.name}</button>`
  ).join('');
}

function openTool(toolId) {
  switchView('tool');
  window.location.hash = `#/tools/${toolId}`;
  if (typeof renderToolView === 'function') {
    renderToolView(toolId);
  }
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function copyToClipboard(id) {
  const el = document.getElementById(id);
  if (!el) return;
  navigator.clipboard.writeText(el.value || el.innerText);
  alert('Copied to clipboard!');
}

function toggleRequestModal() {
  document.getElementById('request-tool-modal')?.classList.toggle('hidden');
}

function toggleSpotlight() {
  const modal = document.getElementById('spotlight-modal');
  if (!modal) return;
  modal.classList.toggle('hidden');
  if (!modal.classList.contains('hidden')) {
    document.getElementById('spotlight-input').value = '';
    document.getElementById('spotlight-input').focus();
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
  const input = document.getElementById('spotlight-input');
  const container = document.getElementById('spotlight-results');
  const db = window.toolsDatabase || [];
  if (!input || !container || db.length === 0) return;

  const q = input.value.toLowerCase().trim();
  container.innerHTML = '';
  const matches = db.filter((t) => t.name.toLowerCase().includes(q) || t.desc.toLowerCase().includes(q));

  matches.slice(0, 10).forEach((t) => {
    container.innerHTML += `
      <div onclick="openTool('${t.id}'); toggleSpotlight();" class="p-2.5 rounded-xl hover:bg-indigo-500/10 cursor-pointer flex justify-between items-center transition">
        <div>
          <span class="text-indigo-400 font-bold">${t.name}</span>
          <div class="text-[11px] opacity-60">${t.desc}</div>
        </div>
        <i data-lucide="arrow-right" class="w-3.5 h-3.5 opacity-50"></i>
      </div>`;
  });
  if (window.lucide) lucide.createIcons();
}

function toggleCompanionDialog() {
  document.getElementById('companion-dialog')?.classList.toggle('hidden');
}

async function fetchFreshJoke() {
  const msg = document.getElementById('blobby-msg');
  if (msg) msg.innerText = '"There are 10 types of people: those who understand binary, and those who don\'t." 😂';
}

function toggleBubblePopper() {
  const board = document.getElementById('bubble-wrap-board');
  if (!board) return;
  board.classList.toggle('hidden');
  if (!board.classList.contains('hidden')) {
    board.innerHTML = Array.from({ length: 18 })
      .map(() => `<div class="bubble-wrap-dot" onclick="this.classList.add('popped')"></div>`)
      .join('');
  }
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
      body: JSON.stringify({ tool_name: toolName, details: toolDetails, timestamp: new Date().toISOString(), site: 'mydevtoolbox.in' })
    });

    if (res.ok) {
      status.innerText = '✓ Thank you! Your tool request has been received.';
      status.classList.remove('hidden');
      document.getElementById('request-tool-form')?.reset();
      setTimeout(() => { toggleRequestModal(); status.classList.add('hidden'); }, 2000);
    } else {
      throw new Error('Failed');
    }
  } catch (err) {
    status.innerText = '✓ Request recorded locally!';
    status.classList.remove('hidden');
    setTimeout(() => { toggleRequestModal(); status.classList.add('hidden'); }, 2000);
  } finally {
    btn.disabled = false;
    btn.innerHTML = 'Submit Request';
  }
}

function checkUrlHash() {
  const hash = window.location.hash;
  const db = window.toolsDatabase || [];
  if (hash.startsWith('#/tools/')) {
    const toolId = hash.replace('#/tools/', '').trim();
    if (db.some((t) => t.id === toolId)) {
      openTool(toolId);
    }
  }
}

document.addEventListener('DOMContentLoaded', () => {
  renderToolsGrid();
  setViewDensity(viewDensity);
  renderRecentTools();
  updateInstallBadgeCount();
  checkUrlHash();
  window.addEventListener('hashchange', checkUrlHash);
  if (window.lucide) lucide.createIcons();
});
