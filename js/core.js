// 1. Initialize Icons on load
document.addEventListener("DOMContentLoaded", () => {
  if (window.lucide) lucide.createIcons();
});

// 2. 3-Way Theme Manager
function setTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('mdt_theme', theme);
  ['light', 'dim', 'dark'].forEach(t => {
    const btn = document.getElementById('btn-theme-' + t);
    if (btn) {
      if (t === theme) btn.className = "p-1.5 rounded-xl bg-indigo-600 text-white shadow-sm transition";
      else btn.className = "p-1.5 rounded-xl opacity-60 hover:opacity-100 transition";
    }
  });
}
setTheme(localStorage.getItem('mdt_theme') || 'light');

// 3. View Switcher & Tool Router
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

function openTool(toolId) {
  switchView('tool');
  document.querySelectorAll('.tool-view-panel').forEach(el => el.classList.add('hidden'));
  const target = document.getElementById('tool-' + toolId);
  if (target) {
    target.classList.remove('hidden');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // Lifecycle initializers
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
  if (toolId === 'lorem-gen' && !document.getElementById('lorem-output').value) generateLorem(3);
}

// 4. Fast Filter & Search
let currentActiveCategory = 'all';

function filterTools() {
  const q = document.getElementById('tool-search').value.trim().toLowerCase();
  const statusText = document.getElementById('search-status-text');
  let count = 0;

  document.querySelectorAll('.tool-card').forEach(card => {
    const text = card.innerText.toLowerCase();
    const cats = card.getAttribute('data-cat') || '';
    const matchQ = !q || text.includes(q);
    const matchC = q ? true : (currentActiveCategory === 'all' || cats.includes(currentActiveCategory));

    if (matchQ && matchC) {
      card.style.display = 'flex';
      count++;
    } else {
      card.style.display = 'none';
    }
  });

  if (q) {
    statusText.innerText = `Showing ${count} tool(s) for "${q}"`;
    statusText.classList.remove('hidden');
  } else {
    statusText.classList.add('hidden');
  }
}

function handleMainSearchEnter() {
  filterTools();
  const visible = Array.from(document.querySelectorAll('.tool-card')).filter(c => c.style.display === 'flex');
  if (visible.length === 1) visible[0].click();
}

function setCategoryFilter(cat) {
  currentActiveCategory = cat;
  document.getElementById('tool-search').value = '';
  document.getElementById('search-status-text').classList.add('hidden');

  document.querySelectorAll('.cat-pill').forEach(btn => btn.classList.remove('bg-indigo-600', 'text-white', 'shadow-md'));
  if (event && event.target) event.target.classList.add('bg-indigo-600', 'text-white', 'shadow-md');

  document.querySelectorAll('.tool-card').forEach(card => {
    const cats = card.getAttribute('data-cat') || '';
    card.style.display = (cat === 'all' || cats.includes(cat)) ? 'flex' : 'none';
  });
}

// 5. Spotlight Command Launcher (⌘K / Ctrl+K)
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

const toolsDirectory = [
  { id: 'llm-tokens', name: 'LLM Token Counter & Pricing', desc: 'GPT-4o, Claude 3.5, Gemini 1.5 calculations' },
  { id: 'wcag-contrast', name: 'WCAG Color Contrast Checker', desc: 'Accessibility AA/AAA ratio calculator' },
  { id: 'md-table-gen', name: 'Visual Markdown Table Builder', desc: 'Grid spreadsheet to Markdown' },
  { id: 'base-converter', name: 'Number Base Converter', desc: 'Dec, Hex, Bin, Oct simultaneous converter' },
  { id: 'json-formatter', name: 'JSON Pro Studio', desc: 'Dual-pane syntax highlighting & formatter' },
  { id: 'pdf-toolkit', name: 'Client-Side PDF Merger', desc: 'In-memory PDF document merger' },
  { id: 'diff-checker', name: 'Text & Code Diff Comparator', desc: 'Side-by-side change highlighter' },
  { id: 'qr-gen', name: 'Live QR Code Generator', desc: 'Vector QR for URLs and Wi-Fi credentials' },
  { id: 'img-compress', name: 'Image Compressor & WebP', desc: 'Reduce dimensions and export WebP' },
  { id: 'case-convert', name: 'Text Case Converter', desc: 'UPPER, camelCase, snake_case converter' },
  { id: 'word-counter', name: 'Word & Character Counter', desc: 'Live reading metrics & statistics' },
  { id: 'unit-convert', name: 'Universal Unit Converter', desc: 'Length, Mass, Temperature, Bytes converter' },
  { id: 'uuid-gen', name: 'UUID v4 Batch Creator', desc: 'RFC4122 random UUID identifiers' },
  { id: 'pwd-gen', name: 'Strong Password Generator', desc: 'High-entropy cryptographic passwords' },
  { id: 'hash-gen', name: 'Cryptographic Hash Generator', desc: 'Client-side SHA-256 / SHA-512 hashes' },
  { id: 'jwt-debugger', name: 'JWT Token Inspector', desc: 'Decode token headers, payload & claims' },
  { id: 'cron-builder', name: 'Cron Expression Explainer', desc: 'Human-readable crontab translator' },
  { id: 'box-shadow', name: 'CSS Box-Shadow Studio', desc: 'Visual multi-layer shadow builder' },
  { id: 'regex-tester', name: 'Regex Sandbox & Matcher', desc: 'Realtime pattern testing sandbox' },
  { id: 'http-codes', name: 'HTTP Status Codes Inspector', desc: 'Status directory, causes & cURL snippets' },
  { id: 'base64', name: 'Base64 Encoder & Decoder', desc: 'Unicode string and binary converter' },
  { id: 'dummy-card', name: 'Dummy Test Card Generator', desc: 'Luhn valid numbers for billing QA' },
  { id: 'url-codec', name: 'URL Encoder & Decoder', desc: 'Percent-encoding parameter sanitizer' },
  { id: 'slug-gen', name: 'URL Slug & Permalink Creator', desc: 'Clean SEO friendly permalink builder' },
  { id: 'json-ts', name: 'JSON to TypeScript Generator', desc: 'Auto-generate TS interfaces from JSON' }
];

function handleSpotlightSearch() {
  const q = (document.getElementById('spotlight-input').value || '').toLowerCase();
  const container = document.getElementById('spotlight-results');
  container.innerHTML = '';
  toolsDirectory.filter(t => t.name.toLowerCase().includes(q) || t.desc.toLowerCase().includes(q)).forEach(t => {
    container.innerHTML += `
      <div onclick="openTool('${t.id}'); toggleSpotlight();" class="p-2.5 rounded-xl hover:bg-indigo-500/10 cursor-pointer flex justify-between items-center transition">
        <div><span class="text-indigo-500 font-bold">${t.name}</span><div class="text-[11px] opacity-60">${t.desc}</div></div>
        <i data-lucide="arrow-right" class="w-3.5 h-3.5 opacity-50"></i>
      </div>`;
  });
  if (window.lucide) lucide.createIcons();
}

// 6. Offline Standalone Export Engine
function downloadOfflineSuite() {
  const docHtml = document.documentElement.outerHTML;
  const blob = new Blob([docHtml], { type: 'text/html' });
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = 'MyDevToolbox_Offline.html';
  a.click();
  alert('Standalone toolbox exported! You can double-click this file to run all tools completely offline.');
}

// 7. Blobby Companion & Zen Lounge
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
  msgBox.innerText = "Fetching a fresh joke from the universe...";
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
      b.onclick = function() { this.classList.add('popped'); };
      board.appendChild(b);
    }
    document.getElementById('blobby-msg').innerText = "🫧 Pop the calming bubbles to relieve stress!";
  }
}

function copyToClipboard(id) { 
  const el = document.getElementById(id);
  navigator.clipboard.writeText(el.value || el.innerText); 
  alert('Copied to clipboard!'); 
}
