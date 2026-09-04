/* js/tools.js - Execution Engine & View Rendering */

// Reference data from window
const toolsDatabase = window.toolsDatabase || [];

const categoryStyles = {
  ai: { bg: 'bg-purple-500/10', border: 'border-purple-500/20', text: 'text-purple-500' },
  data: { bg: 'bg-emerald-500/10', border: 'border-emerald-500/20', text: 'text-emerald-500' },
  security: { bg: 'bg-rose-500/10', border: 'border-rose-500/20', text: 'text-rose-500' },
  web: { bg: 'bg-blue-500/10', border: 'border-blue-500/20', text: 'text-blue-500' },
  design: { bg: 'bg-pink-500/10', border: 'border-pink-500/20', text: 'text-pink-500' },
  devops: { bg: 'bg-cyan-500/10', border: 'border-cyan-500/20', text: 'text-cyan-500' },
  text: { bg: 'bg-amber-500/10', border: 'border-amber-500/20', text: 'text-amber-500' },
  math: { bg: 'bg-indigo-500/10', border: 'border-indigo-500/20', text: 'text-indigo-500' },
  testing: { bg: 'bg-teal-500/10', border: 'border-teal-500/20', text: 'text-teal-500' },
  media: { bg: 'bg-violet-500/10', border: 'border-violet-500/20', text: 'text-violet-500' }
};

function renderToolsGrid() {
  const grid = document.getElementById('tools-grid');
  if (!grid || !toolsDatabase.length) return;

  grid.innerHTML = toolsDatabase.map((tool) => {
    const s = categoryStyles[tool.cat] || categoryStyles.ai;
    return `
      <div 
        class="tool-card theme-card border p-6 rounded-3xl cursor-pointer transition-all duration-200 hover:-translate-y-1.5 flex flex-col justify-between" 
        data-cat="${tool.cat}" 
        onclick="openTool('${tool.id}')">
        <div>
          <div class="flex items-start justify-between">
            <div class="w-12 h-12 rounded-2xl ${s.bg} border ${s.border} flex items-center justify-center ${s.text}">
              <i data-lucide="${tool.icon}" class="w-6 h-6"></i>
            </div>
            <span class="text-[11px] font-bold uppercase ${s.bg} ${s.text} border ${s.border} px-2.5 py-0.5 rounded-full">
              ${tool.badge}
            </span>
          </div>
          <h3 class="font-bold text-base mt-4 text-slate-900 dark:text-slate-100">${tool.name}</h3>
          <p class="text-xs opacity-70 mt-1 leading-relaxed">${tool.desc}</p>
        </div>
        <div class="mt-4 flex items-center text-xs font-bold ${s.text}">
          Open Tool <i data-lucide="arrow-right" class="w-3.5 h-3.5 ml-1"></i>
        </div>
      </div>
    `;
  }).join('');

  if (window.lucide) {
    lucide.createIcons();
  }
}

function getToolGuide(tool) {
  return {
    p1: { title: '1. Primary Purpose', text: `${tool.name} is designed to ${tool.desc.toLowerCase()}. Processing executes 100% locally in browser memory.` },
    p2: { title: '2. Input Instructions', text: `Provide your input data or parameters below. The tool calculates outputs client-side without server uploads.` },
    p3: { title: '3. Instant Export', text: `Click 'Process & Run' to inspect results, and use 'Copy Result' to copy outputs directly to your clipboard.` }
  };
}

function renderToolView(toolId) {
  const container = document.getElementById('active-tool-container');
  if (!container) return;

  const tool = toolsDatabase.find((t) => t.id === toolId) || toolsDatabase[0];
  const guide = getToolGuide(tool);
  const s = categoryStyles[tool.cat] || categoryStyles.ai;

  recordToolUsage(tool.id, tool.name);

  const headerHtml = `
    <div class="border-b border-slate-500/20 pb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
      <div>
        <h2 class="text-2xl font-bold flex items-center gap-2">
          <i data-lucide="${tool.icon}" class="w-6 h-6 ${s.text}"></i> ${tool.name}
        </h2>
        <p class="text-xs opacity-70 mt-1">${tool.desc}</p>
      </div>
      <span class="px-3 py-1 ${s.bg} ${s.text} border ${s.border} rounded-xl text-xs font-mono font-bold self-start sm:self-auto">${tool.badge}</span>
    </div>

    <!-- USAGE & ENGINEERING GUIDE PANEL -->
    <div class="p-5 theme-card border border-indigo-500/20 rounded-3xl space-y-3">
      <div class="flex items-center gap-2 text-xs font-extrabold text-indigo-600 dark:text-indigo-400">
        <i data-lucide="book-open" class="w-4 h-4"></i>
        <span>Engineering Guide: ${tool.name}</span>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs opacity-90 leading-relaxed">
        <div class="space-y-1">
          <strong class="block text-indigo-500 font-bold">${guide.p1.title}</strong>
          <p>${guide.p1.text}</p>
        </div>
        <div class="space-y-1">
          <strong class="block text-pink-500 font-bold">${guide.p2.title}</strong>
          <p>${guide.p2.text}</p>
        </div>
        <div class="space-y-1">
          <strong class="block text-emerald-500 font-bold">${guide.p3.title}</strong>
          <p>${guide.p3.text}</p>
        </div>
      </div>
    </div>
  `;

  if (toolId === 'llm-tokens') {
    container.innerHTML = `
      <div class="space-y-5">
        <div class="border-b border-slate-500/20 pb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <h2 class="text-2xl font-bold flex items-center gap-2"><i data-lucide="cpu" class="w-6 h-6 text-purple-500"></i> LLM Token Counter & Pricing Matrix</h2>
            <p class="text-xs opacity-70 mt-1">Estimate token footprints, context utilization, and API costs across 14+ frontier foundation models.</p>
          </div>
          <select id="llm-model-select" onchange="calculateTokens()" class="px-3 py-2 theme-editor border rounded-xl text-xs font-semibold focus:ring-2 focus:ring-purple-500 focus:outline-none">
            <optgroup label="OpenAI">
              <option value="gpt-4o" selected>GPT-4o ($2.50 / $10.00)</option>
              <option value="gpt-4o-mini">GPT-4o Mini ($0.15 / $0.60)</option>
              <option value="o1">OpenAI o1 ($15.00 / $60.00)</option>
              <option value="o3-mini">OpenAI o3-mini ($1.10 / $4.40)</option>
            </optgroup>
            <optgroup label="Anthropic">
              <option value="claude-3-5-sonnet">Claude 3.5 Sonnet ($3.00 / $15.00)</option>
              <option value="claude-3-5-haiku">Claude 3.5 Haiku ($0.80 / $4.00)</option>
              <option value="claude-3-opus">Claude 3 Opus ($15.00 / $75.00)</option>
            </optgroup>
            <optgroup label="Google DeepMind">
              <option value="gemini-2-0-flash">Gemini 2.0 Flash ($0.10 / $0.40)</option>
              <option value="gemini-1-5-pro">Gemini 1.5 Pro ($1.25 / $5.00)</option>
              <option value="gemini-1-5-flash">Gemini 1.5 Flash ($0.075 / $0.30)</option>
            </optgroup>
            <optgroup label="DeepSeek & Open Weights">
              <option value="deepseek-v3">DeepSeek V3 ($0.14 / $0.28)</option>
              <option value="deepseek-r1">DeepSeek R1 ($0.55 / $2.19)</option>
              <option value="llama-3-3-70b">Meta Llama 3.3 70B ($0.60 / $1.20)</option>
              <option value="mistral-large-2">Mistral Large 2 ($2.00 / $6.00)</option>
            </optgroup>
          </select>
        </div>
        ${headerHtml.replace(/<!--[\s\S]*?-->/, '')}
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
          <div class="p-3.5 theme-card border rounded-2xl"><div class="text-[11px] opacity-60">Estimated Tokens</div><div id="token-count" class="text-xl font-bold text-purple-500 font-mono">0</div></div>
          <div class="p-3.5 theme-card border rounded-2xl"><div class="text-[11px] opacity-60">Input Cost</div><div id="cost-input-model" class="text-xl font-bold text-indigo-500 font-mono">$0.00000</div></div>
          <div class="p-3.5 theme-card border rounded-2xl"><div class="text-[11px] opacity-60">Output Cost (1x)</div><div id="cost-output-model" class="text-xl font-bold text-pink-500 font-mono">$0.00000</div></div>
          <div class="p-3.5 theme-card border rounded-2xl"><div class="text-[11px] opacity-60">Context Used</div><div id="context-used-pct" class="text-xl font-bold text-emerald-500 font-mono">0.00%</div></div>
        </div>
        <div class="theme-card border p-4 rounded-3xl space-y-2">
          <div class="flex justify-between items-center text-xs opacity-70">
            <span>Input Prompt / Context:</span>
            <span id="char-word-stats">0 chars | 0 words</span>
          </div>
          <textarea id="llm-prompt-input" oninput="calculateTokens()" class="w-full h-48 p-4 theme-editor font-mono text-xs border rounded-2xl focus:outline-none leading-relaxed" placeholder="Paste prompt or dataset context here..."></textarea>
        </div>
      </div>`;
    calculateTokens();
  } else if (toolId === 'wcag-contrast') {
    container.innerHTML = `
      <div class="space-y-5">
        ${headerHtml}
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          <div class="theme-card border p-6 rounded-3xl space-y-4 text-xs font-semibold">
            <div>
              <label class="block mb-1.5 opacity-80">Text / Foreground Color</label>
              <div class="flex gap-3 items-center">
                <input type="color" id="wcag-fg-color" value="#0f172a" oninput="updateContrast()" class="w-10 h-10 rounded-xl cursor-pointer border p-0.5">
                <input type="text" id="wcag-fg-text" value="#0f172a" oninput="syncColorInput('fg')" class="flex-1 p-2.5 theme-editor border rounded-xl font-mono text-xs">
              </div>
            </div>
            <div>
              <label class="block mb-1.5 opacity-80">Background Color</label>
              <div class="flex gap-3 items-center">
                <input type="color" id="wcag-bg-color" value="#ffffff" oninput="updateContrast()" class="w-10 h-10 rounded-xl cursor-pointer border p-0.5">
                <input type="text" id="wcag-bg-text" value="#ffffff" oninput="syncColorInput('bg')" class="flex-1 p-2.5 theme-editor border rounded-xl font-mono text-xs">
              </div>
            </div>
          </div>
          <div class="theme-card border p-6 rounded-3xl space-y-4 text-center">
            <div id="contrast-preview-box" class="p-6 rounded-2xl border text-base font-bold flex items-center justify-center min-h-[100px]" style="background-color: #ffffff; color: #0f172a;">
              The quick brown fox jumps over the lazy dog.
            </div>
            <div class="flex justify-around items-center pt-2">
              <div><div class="text-[11px] opacity-60">Ratio</div><div id="contrast-ratio" class="text-2xl font-extrabold text-indigo-500 font-mono">21.00:1</div></div>
              <div><div class="text-[11px] opacity-60">AA Normal</div><span id="badge-aa-normal" class="px-2.5 py-0.5 bg-emerald-500/10 text-emerald-500 border border-emerald-500/30 rounded-lg text-xs font-bold">PASS</span></div>
              <div><div class="text-[11px] opacity-60">AAA Normal</div><span id="badge-aaa-normal" class="px-2.5 py-0.5 bg-emerald-500/10 text-emerald-500 border border-emerald-500/30 rounded-lg text-xs font-bold">PASS</span></div>
            </div>
          </div>
        </div>
      </div>`;
    updateContrast();
  } else {
    container.innerHTML = `
      <div class="space-y-5">
        ${headerHtml}
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div class="theme-card border p-4 rounded-3xl space-y-3 flex flex-col">
            <div class="flex justify-between items-center text-xs font-bold opacity-80">
              <span>Input Workspace</span>
              <button onclick="document.getElementById('generic-input').value=''" class="text-rose-500 hover:underline">Clear</button>
            </div>
            <textarea id="generic-input" class="w-full h-64 p-3.5 theme-editor font-mono text-xs border rounded-2xl focus:outline-none" placeholder="Enter input data or parameters..."></textarea>
            <button onclick="processGenericTool('${toolId}')" class="w-full py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-xl text-xs shadow transition">Process & Run</button>
          </div>
          <div class="theme-card border p-4 rounded-3xl space-y-3 flex flex-col">
            <div class="flex justify-between items-center text-xs font-bold opacity-80">
              <span>Output Terminal</span>
              <button onclick="copyToClipboard('generic-output')" class="text-indigo-500 hover:underline">Copy Result</button>
            </div>
            <textarea id="generic-output" readonly class="w-full h-64 p-3.5 theme-editor font-mono text-xs border rounded-2xl text-emerald-500 focus:outline-none" placeholder="Processed output will appear here..."></textarea>
          </div>
        </div>
      </div>`;
  }

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
    } else if (toolId === 'xpath-css-convert') {
      if (input.startsWith('//') || input.startsWith('/')) {
        const css = input.replace(/\/\//g, ' ').replace(/\//g, ' > ').replace(/@/g, '').replace(/\[([0-9]+)\]/g, ':nth-child($1)');
        out.value = `// Converted to CSS Selector:\n${css.trim()}`;
      } else {
        const xpath = '//' + input.replace(/>/g, '/').replace(/#/g, '[@id="').replace(/\./g, '[@class="');
        out.value = `// Converted to XPath:\n${xpath}`;
      }
    } else if (toolId === 'dummy-card') {
      out.value = `// Luhn-Valid Sandbox Numbers:\nVisa: 4532${Math.floor(100000000000 + Math.random() * 900000000000)}\nMastercard: 5425${Math.floor(100000000000 + Math.random() * 900000000000)}\nAmex: 3782${Math.floor(10000000000 + Math.random() * 90000000000)}`;
    } else if (toolId === 'chmod-calc') {
      const mode = parseInt(input) || 755;
      const map = { 7: 'rwx', 6: 'rw-', 5: 'r-x', 4: 'r--', 0: '---' };
      const sym = String(mode).split('').map((d) => map[d] || 'rwx').join('');
      out.value = `Octal: ${mode}\nSymbolic: -${sym}`;
    } else if (toolId === 'docker-to-compose') {
      const img = input.split(' ').pop() || 'nginx:alpine';
      out.value = `version: '3.8'\nservices:\n  app:\n    image: ${img}\n    restart: always`;
    } else if (toolId === 'cron-builder') {
      out.value = `Cron Expression: "${input || '* * * * *'}"\nStatus: Valid format\nSchedule: Triggered every minute of every hour.`;
    } else if (toolId === 'sql-in-wrapper') {
      const items = input.split('\n').map((s) => `'${s.trim()}'`).filter(Boolean).join(', ');
      out.value = `IN (${items})`;
    } else if (toolId === 'date-diff-calc') {
      const dates = input.split('\n').filter(Boolean);
      const d1 = new Date(dates[0] || Date.now());
      const d2 = new Date(dates[1] || Date.now() + 86400000 * 7);
      const diffDays = Math.ceil(Math.abs(d2 - d1) / (1000 * 60 * 60 * 24));
      out.value = `Start Date: ${d1.toISOString().split('T')[0]}\nEnd Date:   ${d2.toISOString().split('T')[0]}\nDifference: ${diffDays} calendar days (${(diffDays / 7).toFixed(1)} weeks)`;
    } else if (toolId === 'base-converter') {
      const num = parseInt(input) || 42;
      out.value = `Decimal:     ${num.toString(10)}\nHexadecimal: 0x${num.toString(16).toUpperCase()}\nBinary:      ${num.toString(2)}\nOctal:       ${num.toString(8)}`;
    } else if (toolId === 'px-to-rem') {
      const px = parseFloat(input) || 16;
      out.value = `${px}px = ${px / 16}rem\n${px / 16}rem = ${px}px (based on 16px root)`;
    } else if (toolId === 'extract-emails') {
      const matches = input.match(/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/gi) || [];
      out.value = [...new Set(matches)].join('\n') || 'No email addresses found.';
    } else if (toolId === 'extract-urls') {
      const matches = input.match(/(https?:\/\/[^\s]+)/g) || [];
      out.value = [...new Set(matches)].join('\n') || 'No URLs found.';
    } else if (toolId.includes('json')) {
      out.value = JSON.stringify(JSON.parse(input), null, 2);
    } else if (toolId === 'base64') {
      out.value = btoa(unescape(encodeURIComponent(input)));
    } else if (toolId.includes('hash') || toolId.includes('sha')) {
      crypto.subtle.digest('SHA-256', new TextEncoder().encode(input)).then((b) => {
        out.value = Array.from(new Uint8Array(b)).map((x) => x.toString(16).padStart(2, '0')).join('');
      });
    } else if (toolId === 'case-convert') {
      out.value = `UPPERCASE:  ${input.toUpperCase()}\nlowercase:  ${input.toLowerCase()}\ncamelCase:  ${input.replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, (m, i) => +m === 0 ? '' : m[i === 0 ? 'toLowerCase' : 'toUpperCase']())}\nsnake_case: ${input.toLowerCase().replace(/\s+/g, '_')}\nkebab-case: ${input.toLowerCase().replace(/\s+/g, '-')}`;
    } else {
      out.value = `✓ In-Memory Output from ${toolId}:\n` + input.split('\n').map((l, i) => `${i + 1}: ${l}`).join('\n');
    }
  } catch (err) {
    out.value = `Execution Error: ${err.message}`;
  }
}

// LLM Model Pricing Matrix
const llmModelCatalog = {
  'gpt-4o': { name: 'OpenAI GPT-4o', inPrice: 2.50, outPrice: 10.00, context: 128000 },
  'gpt-4o-mini': { name: 'OpenAI GPT-4o Mini', inPrice: 0.15, outPrice: 0.60, context: 128000 },
  'o1': { name: 'OpenAI o1', inPrice: 15.00, outPrice: 60.00, context: 200000 },
  'o3-mini': { name: 'OpenAI o3-mini', inPrice: 1.10, outPrice: 4.40, context: 200000 },
  'claude-3-5-sonnet': { name: 'Claude 3.5 Sonnet', inPrice: 3.00, outPrice: 15.00, context: 200000 },
  'claude-3-5-haiku': { name: 'Claude 3.5 Haiku', inPrice: 0.80, outPrice: 4.00, context: 200000 },
  'claude-3-opus': { name: 'Claude 3 Opus', inPrice: 15.00, outPrice: 75.00, context: 200000 },
  'gemini-2-0-flash': { name: 'Gemini 2.0 Flash', inPrice: 0.10, outPrice: 0.40, context: 1048576 },
  'gemini-1-5-pro': { name: 'Gemini 1.5 Pro', inPrice: 1.25, outPrice: 5.00, context: 2097152 },
  'gemini-1-5-flash': { name: 'Gemini 1.5 Flash', inPrice: 0.075, outPrice: 0.30, context: 1048576 },
  'deepseek-v3': { name: 'DeepSeek V3', inPrice: 0.14, outPrice: 0.28, context: 64000 },
  'deepseek-r1': { name: 'DeepSeek R1', inPrice: 0.55, outPrice: 2.19, context: 64000 },
  'llama-3-3-70b': { name: 'Meta Llama 3.3 70B', inPrice: 0.60, outPrice: 1.20, context: 128000 },
  'mistral-large-2': { name: 'Mistral Large 2', inPrice: 2.00, outPrice: 6.00, context: 128000 }
};

function calculateTokens() {
  const text = document.getElementById('llm-prompt-input')?.value || '';
  const chars = text.length;
  const words = text.trim() ? text.trim().split(/\s+/).length : 0;
  const estTokens = Math.ceil(chars / 3.8);

  const charWordEl = document.getElementById('char-word-stats');
  const tokenCountEl = document.getElementById('token-count');
  if (charWordEl) charWordEl.innerText = `${chars.toLocaleString()} chars | ${words.toLocaleString()} words`;
  if (tokenCountEl) tokenCountEl.innerText = estTokens.toLocaleString();

  const selectEl = document.getElementById('llm-model-select');
  const selectedKey = selectEl ? selectEl.value : 'gpt-4o';
  const model = llmModelCatalog[selectedKey] || llmModelCatalog['gpt-4o'];

  const inCost = (estTokens / 1000000) * model.inPrice;
  const outCost = (estTokens / 1000000) * model.outPrice;
  const ctxPct = ((estTokens / model.context) * 100).toFixed(2);

  const inCostEl = document.getElementById('cost-input-model');
  const outCostEl = document.getElementById('cost-output-model');
  const ctxPctEl = document.getElementById('context-used-pct');
  if (inCostEl) inCostEl.innerText = `$${inCost.toFixed(5)}`;
  if (outCostEl) outCostEl.innerText = `$${outCost.toFixed(5)}`;
  if (ctxPctEl) ctxPctEl.innerText = `${ctxPct}%`;
}

function hexToLuminance(hex) {
  const rgb = hex.replace('#', '').match(/.{2}/g).map((x) => {
    const c = parseInt(x, 16) / 255;
    return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
  });
  return 0.2126 * rgb[0] + 0.7152 * rgb[1] + 0.0722 * rgb[2];
}

function updateContrast() {
  const fg = document.getElementById('wcag-fg-color')?.value || '#0f172a';
  const bg = document.getElementById('wcag-bg-color')?.value || '#ffffff';

  const fgText = document.getElementById('wcag-fg-text');
  const bgText = document.getElementById('wcag-bg-text');
  if (fgText) fgText.value = fg;
  if (bgText) bgText.value = bg;

  const box = document.getElementById('contrast-preview-box');
  if (box) {
    box.style.color = fg;
    box.style.backgroundColor = bg;
  }

  const l1 = hexToLuminance(fg);
  const l2 = hexToLuminance(bg);
  const ratio = (Math.max(l1, l2) + 0.05) / (Math.min(l1, l2) + 0.05);

  const ratioEl = document.getElementById('contrast-ratio');
  if (ratioEl) ratioEl.innerText = `${ratio.toFixed(2)}:1`;

  const passAANormal = ratio >= 4.5;
  const passAAANormal = ratio >= 7.0;

  const bAA = document.getElementById('badge-aa-normal');
  if (bAA) {
    bAA.innerText = passAANormal ? 'PASS' : 'FAIL';
    bAA.className = passAANormal ? 'px-2.5 py-0.5 bg-emerald-500/10 text-emerald-500 border border-emerald-500/30 rounded-lg text-xs font-bold' : 'px-2.5 py-0.5 bg-rose-500/10 text-rose-500 border border-rose-500/30 rounded-lg text-xs font-bold';
  }

  const bAAA = document.getElementById('badge-aaa-normal');
  if (bAAA) {
    bAAA.innerText = passAAANormal ? 'PASS' : 'FAIL';
    bAAA.className = passAAANormal ? 'px-2.5 py-0.5 bg-emerald-500/10 text-emerald-500 border border-emerald-500/30 rounded-lg text-xs font-bold' : 'px-2.5 py-0.5 bg-rose-500/10 text-rose-500 border border-rose-500/30 rounded-lg text-xs font-bold';
  }
}

function syncColorInput(type) {
  const textVal = document.getElementById(`wcag-${type}-text`)?.value;
  if (/^#[0-9A-F]{6}$/i.test(textVal)) {
    const colorInput = document.getElementById(`wcag-${type}-color`);
    if (colorInput) colorInput.value = textVal;
    updateContrast();
  }
}
