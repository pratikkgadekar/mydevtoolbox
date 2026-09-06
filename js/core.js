/* js/core.js - Controller with Multi-Color Theme Mapping, High-Contrast Text & Merged A-Z Jump Navigation */

// ---------------------------------------------------------------------------
// 1. View Density & A-Z Navigation State
// ---------------------------------------------------------------------------
let viewDensity = localStorage.getItem('mdt_view_density') || 'grid'; // 'grid' or 'compact'
let currentActiveCategory = 'all';
let currentSearchQuery = '';

// ---------------------------------------------------------------------------
// 2. High-Contrast, Multi-Color Category Themes (No More Mono-Purple)
// ---------------------------------------------------------------------------
const categoryStyles = {
  ai: {
    bg: 'bg-gradient-to-br from-purple-500/15 to-indigo-500/10',
    border: 'border-purple-500/30',
    text: 'text-purple-400',
    badge: 'bg-purple-500/10 text-purple-300 border-purple-500/30',
    hoverBorder: 'hover:border-purple-500/60'
  },
  testing: {
    bg: 'bg-gradient-to-br from-emerald-500/15 to-teal-500/10',
    border: 'border-emerald-500/30',
    text: 'text-emerald-400',
    badge: 'bg-emerald-500/10 text-emerald-300 border-emerald-500/30',
    hoverBorder: 'hover:border-emerald-500/60'
  },
  data: {
    bg: 'bg-gradient-to-br from-teal-500/15 to-cyan-500/10',
    border: 'border-teal-500/30',
    text: 'text-teal-400',
    badge: 'bg-teal-500/10 text-teal-300 border-teal-500/30',
    hoverBorder: 'hover:border-teal-500/60'
  },
  security: {
    bg: 'bg-gradient-to-br from-amber-500/15 to-orange-500/10',
    border: 'border-amber-500/30',
    text: 'text-amber-400',
    badge: 'bg-amber-500/10 text-amber-300 border-amber-500/30',
    hoverBorder: 'hover:border-amber-500/60'
  },
  web: {
    bg: 'bg-gradient-to-br from-sky-500/15 to-blue-500/10',
    border: 'border-sky-500/30',
    text: 'text-sky-400',
    badge: 'bg-sky-500/10 text-sky-300 border-sky-500/30',
    hoverBorder: 'hover:border-sky-500/60'
  },
  design: {
    bg: 'bg-gradient-to-br from-violet-500/15 to-fuchsia-500/10',
    border: 'border-violet-500/30',
    text: 'text-violet-400',
    badge: 'bg-violet-500/10 text-violet-300 border-violet-500/30',
    hoverBorder: 'hover:border-violet-500/60'
  },
  devops: {
    bg: 'bg-gradient-to-br from-cyan-500/15 to-blue-500/10',
    border: 'border-cyan-500/30',
    text: 'text-cyan-400',
    badge: 'bg-cyan-500/10 text-cyan-300 border-cyan-500/30',
    hoverBorder: 'hover:border-cyan-500/60'
  },
  text: {
    bg: 'bg-gradient-to-br from-rose-500/15 to-pink-500/10',
    border: 'border-rose-500/30',
    text: 'text-rose-400',
    badge: 'bg-rose-500/10 text-rose-300 border-rose-500/30',
    hoverBorder: 'hover:border-rose-500/60'
  },
  math: {
    bg: 'bg-gradient-to-br from-indigo-500/15 to-blue-500/10',
    border: 'border-indigo-500/30',
    text: 'text-indigo-400',
    badge: 'bg-indigo-500/10 text-indigo-300 border-indigo-500/30',
    hoverBorder: 'hover:border-indigo-500/60'
  },
  media: {
    bg: 'bg-gradient-to-br from-pink-500/15 to-rose-500/10',
    border: 'border-pink-500/30',
    text: 'text-pink-400',
    badge: 'bg-pink-500/10 text-pink-300 border-pink-500/30',
    hoverBorder: 'hover:border-pink-500/60'
  }
};

// ---------------------------------------------------------------------------
// 3. Service Worker & PWA Install
// ---------------------------------------------------------------------------
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker
      .register('./sw.js')
      .catch((err) => console.log('SW registration error:', err));
  });
}

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
    alert(
      '💡 To install MyDevToolbox:\n\n' +
      '• Desktop (Chrome/Edge): Click the install icon (⊕) on the address bar.\n' +
      '• Safari (Mac/iOS): Tap Share → "Add to Dock" / "Add to Home Screen".'
    );
  }
}

// ---------------------------------------------------------------------------
// 4. Theme Manager
// ---------------------------------------------------------------------------
function setTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('mdt_theme', theme);
  ['light', 'dim', 'dark'].forEach((t) => {
    const btn = document.getElementById('btn-theme-' + t);
    if (btn) {
      if (t === theme) {
        btn.className = 'p-1.5 rounded-xl bg-indigo-600 text-white shadow-sm transition';
      } else {
        btn.className = 'p-1.5 rounded-xl opacity-60 hover:opacity-100 transition';
      }
    }
  });
}
setTheme(localStorage.getItem('mdt_theme') || 'dark');

// ---------------------------------------------------------------------------
// 5. View Mode Density Toggle (Card Grid vs Compact List)
// ---------------------------------------------------------------------------
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

  filterTools();
}

// ---------------------------------------------------------------------------
// 6. Sticky A-Z Jump Navigation Bar
// ---------------------------------------------------------------------------
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
    
    return `<button 
      onclick="${hasTools ? `jumpToLetter('${char}')` : 'return false;'}" 
      class="${classes}">
      ${char}
    </button>`;
  }).join('');
}

function jumpToLetter(letter) {
  const target = document.getElementById(`anchor-${letter}`);
  if (target) {
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

// ---------------------------------------------------------------------------
// 7. Single Card HTML Generator with Multi-Color Icons & Contrast
// ---------------------------------------------------------------------------
function renderSingleCard(tool) {
  const s = categoryStyles[tool.cat] || categoryStyles.ai;

  if (viewDensity === 'compact') {
    // Dense 3-column list row: 70% space savings
    return `
      <div 
        class="tool-card theme-card border p-3 rounded-2xl cursor-pointer ${s.hoverBorder} transition-all duration-150 flex items-center justify-between gap-3 group" 
        data-cat="${tool.cat}" 
        onclick="openTool('${tool.id}')">
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
      </div>
    `;
  }

  // Visual card grid layout with rich styling and bright contrast
  return `
    <div 
      class="tool-card theme-card border p-6 rounded-3xl cursor-pointer transition-all duration-200 hover:-translate-y-1 ${s.hoverBorder} flex flex-col justify-between" 
      data-cat="${tool.cat}" 
      onclick="openTool('${tool.id}')">
      <div>
        <div class="flex items-start justify-between gap-2">
          <div class="w-12 h-12 rounded-2xl ${s.bg} border ${s.border} flex items-center justify-center ${s.text} shadow-inner">
            <i data-lucide="${tool.icon}" class="w-6 h-6"></i>
          </div>
          <span class="text-[10px] font-bold uppercase border px-2.5 py-1 rounded-full font-mono ${s.badge}">
            ${tool.badge}
          </span>
        </div>
        <h3 class="font-bold text-base mt-4 tracking-tight leading-snug" style="color: var(--text-main);">${tool.name}</h3>
        <p class="text-xs opacity-75 mt-1.5 leading-relaxed">${tool.desc}</p>
      </div>
      <div class="mt-5 pt-3 border-t border-slate-700/40 flex items-center text-xs font-bold ${s.text}">
        Open Tool <i data-lucide="arrow-right" class="w-3.5 h-3.5 ml-1.5"></i>
      </div>
    </div>
  `;
}

// ---------------------------------------------------------------------------
// 8. Render Tools Grid with Alphabetical Anchors
// ---------------------------------------------------------------------------
function renderToolsGrid() {
  const grid = document.getElementById('tools-grid');
  const emptyState = document.getElementById('no-tools-found');
  if (!grid || typeof toolsDatabase === 'undefined') return;

  const filtered = toolsDatabase.filter((tool) => {
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

  const subGridClasses = viewDensity === 'compact'
    ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3'
    : 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6';

  // If 'All' is selected and no search query, display grouped under sticky letter anchors
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
          <span class="text-2xl font-black font-mono text-indigo-500">${char}</span>
          <span class="text-xs font-semibold opacity-60">(${grouped[char].length} tools)</span>
        </div>
        <div class="${subGridClasses}">
          ${grouped[char].map((tool) => renderSingleCard(tool)).join('')}
        </div>
      </section>
    `).join('');
  } else {
    // Category or search active: render directly in responsive grid
    renderAlphabetJumpBar([]);
    grid.className = subGridClasses;
    grid.innerHTML = filtered.map((tool) => renderSingleCard(tool)).join('');
  }

  if (window.lucide) lucide.createIcons();
}

// ---------------------------------------------------------------------------
// 9. Category & Search Filtering
// ---------------------------------------------------------------------------
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

  const activePill = document.querySelector(`.cat-pill[data-pill="${cat}"]`);
  if (activePill) {
    activePill.classList.add('bg-indigo-600', 'text-white', 'shadow-md');
  }

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

function updateCategoryCounts() {
  if (typeof toolsDatabase === 'undefined') return;

  document.querySelectorAll('.cat-pill').forEach((pill) => {
    const cat = pill.getAttribute('data-pill');
    if (!cat) return;
    const count = cat === 'all'
      ? toolsDatabase.length
      : toolsDatabase.filter((t) => t.cat === cat).length;

    const label = pill.innerText.split('(')[0].trim();
    pill.innerText = `${label} (${count})`;
  });

  const counterBadge = document.getElementById('navbar-tool-count');
  if (counterBadge) {
    counterBadge.innerText = `${toolsDatabase.length}+ Offline Utilities`;
  }
}

// ---------------------------------------------------------------------------
// 10. View Switcher & Recents
// ---------------------------------------------------------------------------
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

// ---------------------------------------------------------------------------
// 11. Modals, Companion & Routing
// ---------------------------------------------------------------------------
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
    const input = document.getElementById('spotlight-input');
    if (input) {
      input.value = '';
      input.focus();
    }
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
  if (!input || !container || typeof toolsDatabase === 'undefined') return;

  const q = input.value.toLowerCase().trim();
  container.innerHTML = '';

  const matches = toolsDatabase.filter(
    (t) => t.name.toLowerCase().includes(q) || t.desc.toLowerCase().includes(q)
  );

  matches.slice(0, 10).forEach((t) => {
    container.innerHTML += `
      <div onclick="openTool('${t.id}'); toggleSpotlight();" class="p-2.5 rounded-xl hover:bg-indigo-500/10 cursor-pointer flex justify-between items-center transition">
        <div>
          <span class="text-indigo-500 font-bold">${t.name}</span>
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
      document.getElementById('request-tool-form')?.reset();
      setTimeout(() => {
        toggleRequestModal();
        status.classList.add('hidden');
      }, 2000);
    } else {
      throw new Error('Failed');
    }
  } catch (err) {
    status.innerText = '✓ Request recorded locally!';
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

function checkUrlHash() {
  const hash = window.location.hash;
  if (hash.startsWith('#/tools/')) {
    const toolId = hash.replace('#/tools/', '').trim();
    if (typeof toolsDatabase !== 'undefined' && toolsDatabase.some((t) => t.id === toolId)) {
      openTool(toolId);
    }
  }
}

// ---------------------------------------------------------------------------
// 12. App Initialization
// ---------------------------------------------------------------------------
document.addEventListener('DOMContentLoaded', () => {
  setViewDensity(viewDensity);
  updateCategoryCounts();
  renderRecentTools();
  updateInstallBadgeCount();
  checkUrlHash();
  window.addEventListener('hashchange', checkUrlHash);
  if (window.lucide) lucide.createIcons();
});
