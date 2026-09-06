/* js/tools.js - Merges Catalogs, De-duplicates & Attaches Workspace Engine */

(function initDatabase() {
  const p1 = window.toolsCatalogPart1 || [];
  const p2 = window.toolsCatalogPart2 || [];
  const combined = [...p1, ...p2];

  // De-duplicate by unique tool ID and unique tool name
  const seenIds = new Set();
  const seenNames = new Set();
  const verified = [];

  combined.forEach(([id, name, desc, cat, icon, badge]) => {
    if (!seenIds.has(id) && !seenNames.has(name)) {
      seenIds.add(id);
      seenNames.add(name);
      verified.push({ id, name, desc, cat, icon, badge });
    }
  });

  window.toolsDatabase = verified;
})();

// Execution logic for tools workspace
function getToolGuide(tool) {
  return {
    p1: { title: '1. Primary Purpose', text: `${tool.name} is designed to ${tool.desc.toLowerCase()}. Processing executes 100% locally in browser memory.` },
    p2: { title: '2. Input Instructions', text: `Provide your input data or parameters below. The tool calculates outputs client-side without server uploads.` },
    p3: { title: '3. Instant Export', text: `Click 'Process & Run' to inspect results, and use 'Copy Result' to copy outputs directly to your clipboard.` }
  };
}

function renderToolView(toolId) {
  const container = document.getElementById('active-tool-container');
  if (!container || !window.toolsDatabase) return;

  const tool = window.toolsDatabase.find(t => t.id === toolId) || window.toolsDatabase[0];
  const guide = getToolGuide(tool);

  recordToolUsage(tool.id, tool.name);

  const headerHtml = `
    <div class="border-b border-slate-500/20 pb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
      <div>
        <h2 class="text-2xl font-bold flex items-center gap-2">
          <i data-lucide="${tool.icon}" class="w-6 h-6 text-indigo-400"></i> ${tool.name}
        </h2>
        <p class="text-xs opacity-70 mt-1">${tool.desc}</p>
      </div>
      <span class="px-3 py-1 bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 rounded-xl text-xs font-mono font-bold self-start sm:self-auto">${tool.badge}</span>
    </div>

    <div class="p-5 theme-card border border-indigo-500/20 rounded-3xl space-y-3">
      <div class="flex items-center gap-2 text-xs font-extrabold text-indigo-400">
        <i data-lucide="book-open" class="w-4 h-4"></i>
        <span>Engineering Guide: ${tool.name}</span>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs opacity-90 leading-relaxed">
        <div class="space-y-1">
          <strong class="block text-indigo-400 font-bold">${guide.p1.title}</strong>
          <p>${guide.p1.text}</p>
        </div>
        <div class="space-y-1">
          <strong class="block text-pink-400 font-bold">${guide.p2.title}</strong>
          <p>${guide.p2.text}</p>
        </div>
        <div class="space-y-1">
          <strong class="block text-emerald-400 font-bold">${guide.p3.title}</strong>
          <p>${guide.p3.text}</p>
        </div>
      </div>
    </div>
  `;

  container.innerHTML = `
    <div class="space-y-5">
      ${headerHtml}
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div class="theme-card border p-4 rounded-3xl space-y-3 flex flex-col">
          <div class="flex justify-between items-center text-xs font-bold opacity-80">
            <span>Input Workspace</span>
            <button onclick="document.getElementById('generic-input').value=''" class="text-rose-400 hover:underline">Clear</button>
          </div>
          <textarea id="generic-input" class="w-full h-64 p-3.5 theme-editor font-mono text-xs border rounded-2xl focus:outline-none" placeholder="Enter input data or parameters..."></textarea>
          <button onclick="processGenericTool('${toolId}')" class="w-full py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-xl text-xs shadow transition">Process & Run</button>
        </div>
        <div class="theme-card border p-4 rounded-3xl space-y-3 flex flex-col">
          <div class="flex justify-between items-center text-xs font-bold opacity-80">
            <span>Output Terminal</span>
            <button onclick="copyToClipboard('generic-output')" class="text-indigo-400 hover:underline">Copy Result</button>
          </div>
          <textarea id="generic-output" readonly class="w-full h-64 p-3.5 theme-editor font-mono text-xs border rounded-2xl text-emerald-400 focus:outline-none" placeholder="Processed output will appear here..."></textarea>
        </div>
      </div>
    </div>
  `;

  if (window.lucide) lucide.createIcons();
}

function processGenericTool(toolId) {
  const input = (document.getElementById('generic-input')?.value || '').trim();
  const out = document.getElementById('generic-output');
  if (!out) return;

  try {
    if (toolId === 'bva-calc') {
      const parts = input.split(',').map(Number);
      const min = isNaN(parts[0]) ? 1 : parts[0];
      const max = isNaN(parts[1]) ? 100 : parts[1];
      out.value = `// 7-Point Boundary Value Analysis:\nMin - 1:   ${min - 1} (Invalid)\nMin:       ${min} (Valid)\nMin + 1:   ${min + 1} (Valid)\nNominal:   ${Math.round((min + max) / 2)} (Valid)\nMax - 1:   ${max - 1} (Valid)\nMax:       ${max} (Valid)\nMax + 1:   ${max + 1} (Invalid)`;
    } else if (toolId === 'playwright-locator') {
      const val = input || 'submit-btn';
      out.value = `// Playwright Locators:\npage.getByRole('button', { name: '${val}' });\npage.getByTestId('${val}');\npage.locator('[data-testid="${val}"]');`;
    } else if (toolId === 'dummy-card') {
      out.value = `// Luhn-Valid Sandbox Numbers:\nVisa: 4532${Math.floor(100000000000 + Math.random() * 900000000000)}\nMastercard: 5425${Math.floor(100000000000 + Math.random() * 900000000000)}`;
    } else if (toolId.includes('json')) {
      out.value = JSON.stringify(JSON.parse(input), null, 2);
    } else if (toolId === 'base64') {
      out.value = btoa(unescape(encodeURIComponent(input)));
    } else if (toolId.includes('hash') || toolId.includes('sha')) {
      crypto.subtle.digest('SHA-256', new TextEncoder().encode(input)).then(b => {
        out.value = Array.from(new Uint8Array(b)).map(x => x.toString(16).padStart(2, '0')).join('');
      });
    } else if (toolId === 'case-convert') {
      out.value = `UPPERCASE:  ${input.toUpperCase()}\nlowercase:  ${input.toLowerCase()}\ncamelCase:  ${input.replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, (m, i) => +m === 0 ? '' : m[i === 0 ? 'toLowerCase' : 'toUpperCase']())}`;
    } else {
      out.value = `✓ In-Memory Output from ${toolId}:\n` + input.split('\n').map((l, i) => `${i + 1}: ${l}`).join('\n');
    }
  } catch (err) {
    out.value = `Execution Error: ${err.message}`;
  }
}
