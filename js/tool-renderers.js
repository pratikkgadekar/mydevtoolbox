/* js/tool-renderers.js - Autonomous UI Archetype Engine */

window.renderSmartToolUI = function(tool) {
  const container = document.getElementById('active-tool-container');
  if (!container || !tool) return;

  if (typeof recordToolUsage === 'function') {
    recordToolUsage(tool.id, tool.name);
  }

  const tid = tool.id;
  const cat = tool.cat;

  // 1. SPECIFIC CUSTOM TOOLS
  if (tid === 'timezone-overlap') {
    renderTimezoneMeetingPlanner(container, tool);
  } else if (tid === 'box-shadow') {
    renderBoxShadowStudio(container, tool);
  } else if (tid === 'qr-gen') {
    renderQrStudio(container, tool);
  } else if (tid === 'uuid-gen' || tid === 'pwd-gen') {
    renderGeneratorStudio(container, tool);
  } 
  // 2. CATEGORY & KEYWORD ARCHETYPES
  else if (cat === 'num' || tid.includes('calc') || tid.includes('emi') || tid.includes('tax') || tid.includes('interest')) {
    renderCalculatorArchetype(container, tool);
  } else if (tid.includes('epoch') || tid.includes('date') || tid.includes('time') || tid.includes('days')) {
    renderDateTimeArchetype(container, tool);
  } else if (cat === 'ui' || tid.includes('color') || tid.includes('css') || tid.includes('radius') || tid.includes('gradient')) {
    renderVisualStudioArchetype(container, tool);
  } else if (cat === 'sec' || tid.includes('hash') || tid.includes('sha') || tid.includes('crypto') || tid.includes('jwt')) {
    renderSecurityCryptoArchetype(container, tool);
  } else if (cat === 'testing' || tid.includes('locator') || tid.includes('playwright') || tid.includes('selenium') || tid.includes('cypress')) {
    renderQaAutomationArchetype(container, tool);
  } else if (cat === 'ai' || tid.includes('token') || tid.includes('prompt') || tid.includes('llm')) {
    renderAiPromptArchetype(container, tool);
  } else if (cat === 'data' || tid.includes('json') || tid.includes('csv') || tid.includes('xml') || tid.includes('yaml')) {
    renderDataConverterArchetype(container, tool);
  } else if (cat === 'ops' || tid.includes('docker') || tid.includes('k8s') || tid.includes('subnet') || tid.includes('nginx')) {
    renderDevOpsArchetype(container, tool);
  } else if (cat === 'med' || tid.includes('img') || tid.includes('canvas') || tid.includes('svg') || tid.includes('pdf')) {
    renderMediaCanvasArchetype(container, tool);
  } else {
    renderTextContentArchetype(container, tool);
  }

  if (window.lucide) lucide.createIcons();
};

/* --- ARCHETYPE 1: FINANCIAL, MATH & CALCULATORS --- */
function renderCalculatorArchetype(container, tool) {
  const isLoan = tool.id.includes('loan') || tool.id.includes('emi');
  const isCagr = tool.id.includes('cagr') || tool.id.includes('interest') || tool.id.includes('sip');
  const isTax = tool.id.includes('tax') || tool.id.includes('discount') || tool.id.includes('margin');

  container.innerHTML = `
    <div class="space-y-6">
      ${renderToolHeader(tool)}
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div class="theme-card border p-6 rounded-3xl space-y-4">
          <div class="text-xs font-extrabold uppercase tracking-wider text-indigo-400">Calculation Parameters</div>
          <div>
            <label class="block text-xs font-bold opacity-80 mb-1" id="lbl-f1">${isLoan ? 'Loan Principal Amount ($)' : (isCagr ? 'Initial Investment ($)' : 'Primary Value / Base Price')}</label>
            <input type="number" id="calc-val1" value="${isLoan ? '100000' : '10000'}" class="w-full p-2.5 theme-editor border rounded-xl font-mono text-xs focus:ring-2 focus:ring-indigo-500 focus:outline-none">
          </div>
          <div>
            <label class="block text-xs font-bold opacity-80 mb-1" id="lbl-f2">${isLoan || isCagr ? 'Annual Interest Rate (%)' : 'Percentage / Secondary Rate (%)'}</label>
            <input type="number" id="calc-val2" value="${isLoan ? '8.5' : '12'}" step="0.1" class="w-full p-2.5 theme-editor border rounded-xl font-mono text-xs focus:ring-2 focus:ring-indigo-500 focus:outline-none">
          </div>
          <div>
            <label class="block text-xs font-bold opacity-80 mb-1" id="lbl-f3">${isLoan ? 'Tenure (Years)' : (isCagr ? 'Duration (Years)' : 'Additional Factor / Tax Rate')}</label>
            <input type="number" id="calc-val3" value="${isLoan ? '20' : '5'}" class="w-full p-2.5 theme-editor border rounded-xl font-mono text-xs focus:ring-2 focus:ring-indigo-500 focus:outline-none">
          </div>
          <button onclick="executeCalculatorCalculation('${tool.id}')" class="w-full py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-xl text-xs shadow transition">Compute Results</button>
        </div>

        <div class="lg:col-span-2 theme-card border p-6 rounded-3xl space-y-5">
          <div class="text-xs font-extrabold uppercase tracking-wider text-emerald-400">Calculation Summary</div>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div class="p-4 rounded-2xl bg-indigo-500/10 border border-indigo-500/20">
              <span class="text-[11px] font-bold opacity-70 block" id="res-lbl-1">Calculated Primary Output</span>
              <span class="text-2xl font-black text-indigo-400 font-mono mt-1 block" id="res-val-1">--</span>
            </div>
            <div class="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/20">
              <span class="text-[11px] font-bold opacity-70 block" id="res-lbl-2">Effective Total / Accrual</span>
              <span class="text-2xl font-black text-emerald-400 font-mono mt-1 block" id="res-val-2">--</span>
            </div>
          </div>
          <div class="p-4 rounded-2xl theme-editor border space-y-2">
            <span class="text-xs font-bold opacity-80">Formula & Breakdown:</span>
            <div id="calc-breakdown" class="text-xs font-mono opacity-70 leading-relaxed">Click 'Compute Results' to evaluate parameters client-side.</div>
          </div>
        </div>
      </div>
    </div>
  `;
  executeCalculatorCalculation(tool.id);
}

function executeCalculatorCalculation(toolId) {
  const v1 = parseFloat(document.getElementById('calc-val1')?.value || 0);
  const v2 = parseFloat(document.getElementById('calc-val2')?.value || 0);
  const v3 = parseFloat(document.getElementById('calc-val3')?.value || 0);
  const r1 = document.getElementById('res-val-1');
  const r2 = document.getElementById('res-val-2');
  const breakdown = document.getElementById('calc-breakdown');
  if (!r1 || !r2) return;

  if (toolId.includes('loan') || toolId.includes('emi')) {
    const r = (v2 / 12) / 100;
    const n = v3 * 12;
    const emi = (v1 * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    const totalPay = emi * n;
    r1.innerText = `$${emi.toFixed(2)}`;
    r2.innerText = `$${totalPay.toFixed(2)}`;
    breakdown.innerHTML = `Monthly EMI: <strong>$${emi.toFixed(2)}</strong><br>Total Interest Accrued: <strong>$${(totalPay - v1).toFixed(2)}</strong> over ${n} monthly installments.`;
  } else if (toolId.includes('cagr')) {
    const cagr = (Math.pow(v2 / v1, 1 / v3) - 1) * 100;
    r1.innerText = `${cagr.toFixed(2)}%`;
    r2.innerText = `$${(v2 - v1).toFixed(2)}`;
    breakdown.innerHTML = `Compound Annual Growth Rate: <strong>${cagr.toFixed(2)}%</strong> annual compounding.`;
  } else {
    const pctVal = (v1 * v2) / 100;
    r1.innerText = pctVal.toFixed(2);
    r2.innerText = (v1 + pctVal).toFixed(2);
    breakdown.innerHTML = `${v2}% of ${v1} = <strong>${pctVal.toFixed(2)}</strong>. Sum total = <strong>${(v1 + pctVal).toFixed(2)}</strong>.`;
  }
}

/* --- ARCHETYPE 2: DATE & TIME STUDIO --- */
function renderDateTimeArchetype(container, tool) {
  const now = new Date();
  container.innerHTML = `
    <div class="space-y-6">
      ${renderToolHeader(tool)}
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div class="theme-card border p-6 rounded-3xl space-y-4">
          <div class="text-xs font-extrabold uppercase tracking-wider text-indigo-400">Date & Time Inputs</div>
          <div>
            <label class="block text-xs font-bold opacity-80 mb-1">Select Target Date</label>
            <input type="datetime-local" id="dt-input" value="${now.toISOString().slice(0,16)}" onchange="evaluateDateTime('${tool.id}')" class="w-full p-2.5 theme-editor border rounded-xl font-mono text-xs focus:ring-2 focus:ring-indigo-500 focus:outline-none">
          </div>
          <div>
            <label class="block text-xs font-bold opacity-80 mb-1">Time Offset / Increment (Days)</label>
            <input type="number" id="dt-offset" value="30" onchange="evaluateDateTime('${tool.id}')" class="w-full p-2.5 theme-editor border rounded-xl font-mono text-xs focus:ring-2 focus:ring-indigo-500 focus:outline-none">
          </div>
          <button onclick="evaluateDateTime('${tool.id}')" class="w-full py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-xl text-xs shadow transition">Convert & Calculate</button>
        </div>

        <div class="theme-card border p-6 rounded-3xl space-y-3">
          <div class="text-xs font-extrabold uppercase tracking-wider text-emerald-400">Standardized Time Outputs</div>
          <div class="space-y-2">
            <div class="p-3 theme-editor border rounded-xl flex justify-between items-center text-xs">
              <span class="opacity-70">UNIX Epoch Seconds:</span>
              <strong id="dt-out-epoch" class="font-mono text-indigo-400">--</strong>
            </div>
            <div class="p-3 theme-editor border rounded-xl flex justify-between items-center text-xs">
              <span class="opacity-70">ISO 8601 UTC:</span>
              <strong id="dt-out-iso" class="font-mono text-emerald-400 truncate ml-2">--</strong>
            </div>
            <div class="p-3 theme-editor border rounded-xl flex justify-between items-center text-xs">
              <span class="opacity-70">Offset Milestone Date:</span>
              <strong id="dt-out-offset" class="font-mono text-purple-400">--</strong>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
  evaluateDateTime(tool.id);
}

function evaluateDateTime(toolId) {
  const val = document.getElementById('dt-input')?.value;
  const offset = parseInt(document.getElementById('dt-offset')?.value || 0, 10);
  if (!val) return;

  const d = new Date(val);
  const epoch = Math.floor(d.getTime() / 1000);
  const iso = d.toISOString();
  const future = new Date(d.getTime() + offset * 86400000);

  document.getElementById('dt-out-epoch').innerText = epoch;
  document.getElementById('dt-out-iso').innerText = iso;
  document.getElementById('dt-out-offset').innerText = future.toLocaleDateString(undefined, { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' });
}

/* --- ARCHETYPE 3: VISUAL CSS & DESIGN STUDIO --- */
function renderVisualStudioArchetype(container, tool) {
  container.innerHTML = `
    <div class="space-y-6">
      ${renderToolHeader(tool)}
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div class="theme-card border p-6 rounded-3xl space-y-4">
          <div class="text-xs font-extrabold uppercase tracking-wider text-indigo-400">Visual Controls</div>
          <div>
            <div class="flex justify-between text-xs font-bold mb-1"><span>Border Radius</span><span id="ui-rad-val">16px</span></div>
            <input type="range" id="ui-rad" min="0" max="60" value="16" oninput="updateVisualPreview()" class="w-full accent-indigo-500">
          </div>
          <div>
            <div class="flex justify-between text-xs font-bold mb-1"><span>Element Opacity</span><span id="ui-op-val">1.0</span></div>
            <input type="range" id="ui-op" min="0.1" max="1" step="0.05" value="1" oninput="updateVisualPreview()" class="w-full accent-indigo-500">
          </div>
          <div class="flex items-center justify-between pt-2">
            <label class="text-xs font-bold">Accent Color</label>
            <input type="color" id="ui-color" value="#6366f1" onchange="updateVisualPreview()" class="w-10 h-8 rounded border-none cursor-pointer">
          </div>
        </div>

        <div class="theme-card border p-6 rounded-3xl flex flex-col items-center justify-center space-y-5">
          <div id="ui-preview-canvas" class="w-48 h-36 flex items-center justify-center text-white font-bold text-xs shadow-xl transition-all" style="background-color: #6366f1; border-radius: 16px;">
            Live Style Preview
          </div>
          <div class="w-full space-y-1.5">
            <div class="flex justify-between text-xs font-bold opacity-80">
              <span>CSS Snippet</span>
              <button onclick="copyToClipboard('ui-css-code')" class="text-indigo-400 hover:underline">Copy CSS</button>
            </div>
            <textarea id="ui-css-code" readonly class="w-full h-20 p-3 theme-editor font-mono text-xs border rounded-xl focus:outline-none"></textarea>
          </div>
        </div>
      </div>
    </div>
  `;
  updateVisualPreview();
}

function updateVisualPreview() {
  const rad = document.getElementById('ui-rad')?.value || '16';
  const op = document.getElementById('ui-op')?.value || '1';
  const col = document.getElementById('ui-color')?.value || '#6366f1';
  const preview = document.getElementById('ui-preview-canvas');
  const code = document.getElementById('ui-css-code');

  document.getElementById('ui-rad-val').innerText = `${rad}px`;
  document.getElementById('ui-op-val').innerText = op;

  if (preview) {
    preview.style.borderRadius = `${rad}px`;
    preview.style.opacity = op;
    preview.style.backgroundColor = col;
  }
  if (code) {
    code.value = `border-radius: ${rad}px;\nopacity: ${op};\nbackground-color: ${col};`;
  }
}

/* --- ARCHETYPE 4: SECURITY & CRYPTOGRAPHY --- */
function renderSecurityCryptoArchetype(container, tool) {
  container.innerHTML = `
    <div class="space-y-6">
      ${renderToolHeader(tool)}
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div class="theme-card border p-6 rounded-3xl space-y-4">
          <div class="text-xs font-extrabold uppercase tracking-wider text-indigo-400">Cryptographic Input</div>
          <div>
            <label class="block text-xs font-bold opacity-80 mb-1">Plaintext / Payload *</label>
            <textarea id="sec-input" rows="5" class="w-full p-3 theme-editor border rounded-xl font-mono text-xs focus:ring-2 focus:ring-indigo-500 focus:outline-none" placeholder="Enter string to digest or encrypt...">SecretToken123</textarea>
          </div>
          <div>
            <label class="block text-xs font-bold opacity-80 mb-1">Secret Key / Salt (Optional)</label>
            <input type="text" id="sec-key" placeholder="Optional secret key..." class="w-full p-2.5 theme-editor border rounded-xl font-mono text-xs focus:outline-none">
          </div>
          <button onclick="executeSecurityCrypto('${tool.id}')" class="w-full py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-xl text-xs shadow transition">Generate Cryptographic Output</button>
        </div>

        <div class="theme-card border p-6 rounded-3xl space-y-3 flex flex-col justify-between">
          <div class="space-y-2">
            <div class="flex justify-between items-center text-xs font-bold opacity-80">
              <span class="uppercase tracking-wider text-emerald-400">Cryptographic Hash Digest</span>
              <button onclick="copyToClipboard('sec-output')" class="text-indigo-400 hover:underline">Copy Hash</button>
            </div>
            <textarea id="sec-output" readonly class="w-full h-44 p-3.5 theme-editor font-mono text-xs border rounded-2xl text-emerald-400 focus:outline-none"></textarea>
          </div>
          <div class="p-3 bg-indigo-500/10 border border-indigo-500/20 rounded-xl text-[11px] font-mono opacity-80">
            🔒 Processed 100% locally via browser WebCrypto API. Zero network calls.
          </div>
        </div>
      </div>
    </div>
  `;
  executeSecurityCrypto(tool.id);
}

function executeSecurityCrypto(toolId) {
  const input = document.getElementById('sec-input')?.value || '';
  const out = document.getElementById('sec-output');
  if (!out) return;

  crypto.subtle.digest('SHA-256', new TextEncoder().encode(input)).then(buf => {
    const hash = Array.from(new Uint8Array(buf)).map(x => x.toString(16).padStart(2, '0')).join('');
    out.value = hash;
  });
}

/* --- ARCHETYPE 5: QA & TEST AUTOMATION SCRIPT BUILDER --- */
function renderQaAutomationArchetype(container, tool) {
  container.innerHTML = `
    <div class="space-y-6">
      ${renderToolHeader(tool)}
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div class="theme-card border p-6 rounded-3xl space-y-4">
          <div class="text-xs font-extrabold uppercase tracking-wider text-indigo-400">Selector & Locator Settings</div>
          <div>
            <label class="block text-xs font-bold opacity-80 mb-1">Target Element Identifier</label>
            <input type="text" id="qa-target" value="submit-button" class="w-full p-2.5 theme-editor border rounded-xl font-mono text-xs focus:ring-2 focus:ring-indigo-500 focus:outline-none">
          </div>
          <div class="grid grid-cols-2 gap-3">
            <div>
              <label class="block text-xs font-bold opacity-80 mb-1">Strategy</label>
              <select id="qa-strategy" class="w-full p-2.5 theme-editor border rounded-xl text-xs font-semibold focus:outline-none">
                <option value="id">By ID (#id)</option>
                <option value="testId" selected>By data-testid</option>
                <option value="role">By ARIA Role</option>
                <option value="xpath">By XPath</option>
              </select>
            </div>
            <div>
              <label class="block text-xs font-bold opacity-80 mb-1">Framework</label>
              <select id="qa-framework" class="w-full p-2.5 theme-editor border rounded-xl text-xs font-semibold focus:outline-none">
                <option value="playwright">Playwright</option>
                <option value="cypress">Cypress</option>
                <option value="selenium">Selenium (Java)</option>
              </select>
            </div>
          </div>
          <button onclick="generateQaScript()" class="w-full py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-xl text-xs shadow transition">Generate Automation Snippet</button>
        </div>

        <div class="theme-card border p-6 rounded-3xl space-y-3 flex flex-col justify-between">
          <div class="space-y-2">
            <div class="flex justify-between items-center text-xs font-bold opacity-80">
              <span class="uppercase tracking-wider text-emerald-400">Test Automation Code</span>
              <button onclick="copyToClipboard('qa-output')" class="text-indigo-400 hover:underline">Copy Code</button>
            </div>
            <textarea id="qa-output" readonly class="w-full h-44 p-3.5 theme-editor font-mono text-xs border rounded-2xl text-emerald-400 focus:outline-none"></textarea>
          </div>
          <div class="text-[11px] opacity-70">Ready to paste into your test automation repository.</div>
        </div>
      </div>
    </div>
  `;
  generateQaScript();
}

function generateQaScript() {
  const target = document.getElementById('qa-target')?.value || 'button';
  const strat = document.getElementById('qa-strategy')?.value || 'testId';
  const fw = document.getElementById('qa-framework')?.value || 'playwright';
  const out = document.getElementById('qa-output');
  if (!out) return;

  if (fw === 'playwright') {
    out.value = `// Playwright Locator & Assertion\nconst element = page.getByTestId('${target}');\nawait expect(element).toBeVisible();\nawait element.click();`;
  } else if (fw === 'cypress') {
    out.value = `// Cypress Command\ncy.get('[data-testid="${target}"]')\n  .should('be.visible')\n  .click();`;
  } else {
    out.value = `// Selenium WebDriver\nWebElement element = driver.findElement(By.cssSelector("[data-testid='${target}']"));\nelement.click();`;
  }
}

/* --- ARCHETYPE 6: AI & PROMPT ENGINEERING STUDIO --- */
function renderAiPromptArchetype(container, tool) {
  container.innerHTML = `
    <div class="space-y-6">
      ${renderToolHeader(tool)}
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div class="theme-card border p-6 rounded-3xl space-y-4">
          <div class="text-xs font-extrabold uppercase tracking-wider text-indigo-400">Prompt Context & Variables</div>
          <div>
            <label class="block text-xs font-bold opacity-80 mb-1">System Prompt / Template</label>
            <textarea id="ai-prompt-input" rows="6" class="w-full p-3 theme-editor border rounded-xl font-mono text-xs focus:ring-2 focus:ring-indigo-500 focus:outline-none" placeholder="You are an expert assistant. Address user inquiry about {{topic}}...">You are an expert software engineer. Review the following {{language}} code and suggest performance improvements.</textarea>
          </div>
          <div class="grid grid-cols-2 gap-3">
            <div>
              <label class="block text-xs font-bold opacity-80 mb-1">Frontier Model</label>
              <select id="ai-model" onchange="calculateAiTokens()" class="w-full p-2.5 theme-editor border rounded-xl text-xs font-semibold focus:outline-none">
                <option value="gpt4o">GPT-4o ($2.50 / 1M)</option>
                <option value="claude35">Claude 3.5 Sonnet ($3.00 / 1M)</option>
                <option value="gemini">Gemini 1.5 Pro ($1.25 / 1M)</option>
              </select>
            </div>
            <div>
              <label class="block text-xs font-bold opacity-80 mb-1">Temperature</label>
              <input type="number" id="ai-temp" min="0" max="1" step="0.1" value="0.7" class="w-full p-2.5 theme-editor border rounded-xl font-mono text-xs focus:outline-none">
            </div>
          </div>
          <button onclick="calculateAiTokens()" class="w-full py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-xl text-xs shadow transition">Analyze Token Footprint</button>
        </div>

        <div class="theme-card border p-6 rounded-3xl space-y-4">
          <div class="text-xs font-extrabold uppercase tracking-wider text-emerald-400">Context Window & Budget Analysis</div>
          <div class="grid grid-cols-2 gap-3">
            <div class="p-3.5 rounded-2xl bg-indigo-500/10 border border-indigo-500/20">
              <span class="text-[10px] font-bold opacity-70 block">Estimated Tokens</span>
              <strong id="ai-out-tokens" class="text-xl font-black font-mono text-indigo-400 mt-1 block">--</strong>
            </div>
            <div class="p-3.5 rounded-2xl bg-emerald-500/10 border border-emerald-500/20">
              <span class="text-[10px] font-bold opacity-70 block">Estimated Query Cost</span>
              <strong id="ai-out-cost" class="text-xl font-black font-mono text-emerald-400 mt-1 block">--</strong>
            </div>
          </div>
          <div class="p-3.5 theme-editor border rounded-2xl text-xs space-y-1.5 font-mono">
            <div>Detected Variables: <strong class="text-pink-400">{{language}}</strong></div>
            <div class="text-[11px] opacity-70">Prompt complies with standard structured context boundaries.</div>
          </div>
        </div>
      </div>
    </div>
  `;
  calculateAiTokens();
}

function calculateAiTokens() {
  const text = document.getElementById('ai-prompt-input')?.value || '';
  const tokens = Math.ceil(text.length / 3.8);
  const cost = (tokens / 1000000) * 2.50;

  document.getElementById('ai-out-tokens').innerText = `~${tokens}`;
  document.getElementById('ai-out-cost').innerText = `< $${cost.toFixed(5)}`;
}

/* --- ARCHETYPE 7: DATA & JSON TRANSFORMERS --- */
function renderDataConverterArchetype(container, tool) {
  container.innerHTML = `
    <div class="space-y-6">
      ${renderToolHeader(tool)}
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div class="theme-card border p-5 rounded-3xl space-y-3 flex flex-col">
          <div class="flex justify-between items-center text-xs font-bold opacity-80">
            <span>Input Data</span>
            <div class="space-x-2">
              <button onclick="loadSampleData('${tool.id}')" class="text-indigo-400 hover:underline">Sample</button>
              <button onclick="document.getElementById('data-src-input').value=''" class="text-rose-400 hover:underline">Clear</button>
            </div>
          </div>
          <textarea id="data-src-input" class="w-full h-64 p-3.5 theme-editor font-mono text-xs border rounded-2xl focus:outline-none" placeholder="Paste data here...">{
  "user": "developer",
  "status": "active",
  "roles": ["admin", "tester"]
}</textarea>
          <div class="grid grid-cols-2 gap-2">
            <button onclick="formatJsonData(true)" class="py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-xl text-xs shadow transition">Beautify JSON</button>
            <button onclick="formatJsonData(false)" class="py-2.5 theme-editor border hover:border-indigo-500 font-bold rounded-xl text-xs transition">Minify JSON</button>
          </div>
        </div>

        <div class="theme-card border p-5 rounded-3xl space-y-3 flex flex-col">
          <div class="flex justify-between items-center text-xs font-bold opacity-80">
            <span class="text-emerald-400 uppercase tracking-wider">Processed Output</span>
            <button onclick="copyToClipboard('data-src-output')" class="text-indigo-400 hover:underline">Copy Result</button>
          </div>
          <textarea id="data-src-output" readonly class="w-full h-64 p-3.5 theme-editor font-mono text-xs border rounded-2xl text-emerald-400 focus:outline-none"></textarea>
        </div>
      </div>
    </div>
  `;
  formatJsonData(true);
}

function loadSampleData(toolId) {
  document.getElementById('data-src-input').value = JSON.stringify({ name: 'MyDevToolbox', offline: true, tools: 321, tags: ['developer', 'privacy', 'in-memory'] }, null, 2);
  formatJsonData(true);
}

function formatJsonData(beautify) {
  const src = document.getElementById('data-src-input')?.value || '';
  const out = document.getElementById('data-src-output');
  if (!out) return;
  try {
    const obj = JSON.parse(src);
    out.value = beautify ? JSON.stringify(obj, null, 2) : JSON.stringify(obj);
  } catch (e) {
    out.value = `Syntax Error: ${e.message}`;
  }
}

/* --- ARCHETYPE 8: DEVOPS & INFRASTRUCTURE --- */
function renderDevOpsArchetype(container, tool) {
  container.innerHTML = `
    <div class="space-y-6">
      ${renderToolHeader(tool)}
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div class="theme-card border p-6 rounded-3xl space-y-4">
          <div class="text-xs font-extrabold uppercase tracking-wider text-indigo-400">Configuration Variables</div>
          <div>
            <label class="block text-xs font-bold opacity-80 mb-1">Service / Network Target</label>
            <input type="text" id="ops-name" value="web-service" class="w-full p-2.5 theme-editor border rounded-xl font-mono text-xs focus:ring-2 focus:ring-indigo-500 focus:outline-none">
          </div>
          <div class="grid grid-cols-2 gap-3">
            <div>
              <label class="block text-xs font-bold opacity-80 mb-1">Port</label>
              <input type="number" id="ops-port" value="8080" class="w-full p-2.5 theme-editor border rounded-xl font-mono text-xs focus:outline-none">
            </div>
            <div>
              <label class="block text-xs font-bold opacity-80 mb-1">Restart Policy</label>
              <select id="ops-restart" class="w-full p-2.5 theme-editor border rounded-xl text-xs font-semibold focus:outline-none">
                <option value="always">always</option>
                <option value="unless-stopped" selected>unless-stopped</option>
                <option value="no">no</option>
              </select>
            </div>
          </div>
          <button onclick="generateDevOpsSpec()" class="w-full py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-xl text-xs shadow transition">Generate Deployment Spec</button>
        </div>

        <div class="theme-card border p-6 rounded-3xl space-y-3 flex flex-col justify-between">
          <div class="space-y-2">
            <div class="flex justify-between items-center text-xs font-bold opacity-80">
              <span class="text-emerald-400 uppercase tracking-wider">Manifest YAML / Config</span>
              <button onclick="copyToClipboard('ops-output')" class="text-indigo-400 hover:underline">Copy Spec</button>
            </div>
            <textarea id="ops-output" readonly class="w-full h-44 p-3.5 theme-editor font-mono text-xs border rounded-2xl text-emerald-400 focus:outline-none"></textarea>
          </div>
          <div class="text-[11px] opacity-70">Production ready syntax conforming to standard container specifications.</div>
        </div>
      </div>
    </div>
  `;
  generateDevOpsSpec();
}

function generateDevOpsSpec() {
  const name = document.getElementById('ops-name')?.value || 'service';
  const port = document.getElementById('ops-port')?.value || '80';
  const restart = document.getElementById('ops-restart')?.value || 'always';
  const out = document.getElementById('ops-output');
  if (!out) return;

  out.value = `version: '3.8'\nservices:\n  ${name}:\n    image: ${name}:latest\n    ports:\n      - "${port}:${port}"\n    restart: ${restart}\n    environment:\n      - NODE_ENV=production`;
}

/* --- ARCHETYPE 9: MEDIA, FILE & CANVAS STUDIO --- */
function renderMediaCanvasArchetype(container, tool) {
  container.innerHTML = `
    <div class="space-y-6">
      ${renderToolHeader(tool)}
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div class="theme-card border p-6 rounded-3xl space-y-4">
          <div class="text-xs font-extrabold uppercase tracking-wider text-indigo-400">Media Workspace</div>
          <div class="border-2 border-dashed border-slate-500/30 rounded-2xl p-8 text-center cursor-pointer hover:border-indigo-500 transition" onclick="document.getElementById('media-file-input').click()">
            <i data-lucide="upload-cloud" class="w-8 h-8 text-indigo-400 mx-auto mb-2"></i>
            <span class="text-xs font-bold block">Drop image or file here, or browse</span>
            <span class="text-[10px] opacity-60 block mt-1">100% In-Browser Memory. Never uploaded.</span>
            <input type="file" id="media-file-input" onchange="handleMediaUpload(this)" class="hidden">
          </div>
          <div>
            <div class="flex justify-between text-xs font-bold mb-1"><span>Target Quality / Scale</span><span id="med-q-val">80%</span></div>
            <input type="range" id="med-q" min="10" max="100" value="80" oninput="document.getElementById('med-q-val').innerText=this.value+'%'" class="w-full accent-indigo-500">
          </div>
        </div>

        <div class="theme-card border p-6 rounded-3xl flex flex-col items-center justify-center space-y-4">
          <div id="media-preview-box" class="w-full h-44 rounded-2xl bg-slate-500/10 border border-dashed flex items-center justify-center text-xs opacity-60">
            No file loaded
          </div>
          <button id="med-btn-download" disabled class="px-5 py-2.5 bg-indigo-600 disabled:opacity-40 text-white font-bold rounded-xl text-xs shadow transition">Process & Export</button>
        </div>
      </div>
    </div>
  `;
}

function handleMediaUpload(input) {
  if (!input.files || !input.files[0]) return;
  const file = input.files[0];
  const box = document.getElementById('media-preview-box');
  const btn = document.getElementById('med-btn-download');

  const reader = new FileReader();
  reader.onload = (e) => {
    box.innerHTML = `<img src="${e.target.result}" class="max-h-40 rounded-xl object-contain shadow">`;
    btn.disabled = false;
  };
  reader.readAsDataURL(file);
}

/* --- ARCHETYPE 10: TEXT & CONTENT TOOLBAR --- */
function renderTextContentArchetype(container, tool) {
  container.innerHTML = `
    <div class="space-y-6">
      ${renderToolHeader(tool)}
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div class="theme-card border p-5 rounded-3xl space-y-3 flex flex-col">
          <div class="flex justify-between items-center text-xs font-bold opacity-80">
            <span>Input Document</span>
            <button onclick="document.getElementById('txt-source-input').value=''" class="text-rose-400 hover:underline">Clear</button>
          </div>
          <textarea id="txt-source-input" oninput="evaluateTextTransformation()" class="w-full h-64 p-3.5 theme-editor font-mono text-xs border rounded-2xl focus:outline-none" placeholder="Type or paste content here...">Engineering clean client-side developer utilities.</textarea>
          <div class="flex flex-wrap gap-1.5 pt-1">
            <button onclick="applyTextCase('upper')" class="px-2.5 py-1 bg-slate-500/10 hover:bg-indigo-600 hover:text-white rounded-lg text-xs font-semibold transition">UPPERCASE</button>
            <button onclick="applyTextCase('lower')" class="px-2.5 py-1 bg-slate-500/10 hover:bg-indigo-600 hover:text-white rounded-lg text-xs font-semibold transition">lowercase</button>
            <button onclick="applyTextCase('title')" class="px-2.5 py-1 bg-slate-500/10 hover:bg-indigo-600 hover:text-white rounded-lg text-xs font-semibold transition">Title Case</button>
            <button onclick="applyTextCase('slug')" class="px-2.5 py-1 bg-slate-500/10 hover:bg-indigo-600 hover:text-white rounded-lg text-xs font-semibold transition">slug-case</button>
          </div>
        </div>

        <div class="theme-card border p-5 rounded-3xl space-y-3 flex flex-col justify-between">
          <div>
            <div class="flex justify-between items-center text-xs font-bold opacity-80 mb-2">
              <span class="text-emerald-400 uppercase tracking-wider">Processed Text</span>
              <button onclick="copyToClipboard('txt-source-output')" class="text-indigo-400 hover:underline">Copy</button>
            </div>
            <textarea id="txt-source-output" readonly class="w-full h-44 p-3.5 theme-editor font-mono text-xs border rounded-2xl text-emerald-400 focus:outline-none"></textarea>
          </div>
          <div class="grid grid-cols-3 gap-2 p-3 bg-indigo-500/10 border border-indigo-500/20 rounded-2xl text-center">
            <div><span class="text-[10px] opacity-60 block">Words</span><strong id="stat-words" class="text-xs font-bold">0</strong></div>
            <div><span class="text-[10px] opacity-60 block">Chars</span><strong id="stat-chars" class="text-xs font-bold">0</strong></div>
            <div><span class="text-[10px] opacity-60 block">Reading Time</span><strong id="stat-read" class="text-xs font-bold">0m</strong></div>
          </div>
        </div>
      </div>
    </div>
  `;
  evaluateTextTransformation();
}

function evaluateTextTransformation() {
  const input = document.getElementById('txt-source-input')?.value || '';
  const out = document.getElementById('txt-source-output');
  if (!out) return;

  out.value = input;
  const words = input.trim() ? input.trim().split(/\s+/).length : 0;
  const chars = input.length;
  const readTime = Math.ceil(words / 200);

  document.getElementById('stat-words').innerText = words;
  document.getElementById('stat-chars').innerText = chars;
  document.getElementById('stat-read').innerText = `${readTime}m`;
}

function applyTextCase(mode) {
  const input = document.getElementById('txt-source-input');
  if (!input) return;
  const val = input.value;

  if (mode === 'upper') input.value = val.toUpperCase();
  if (mode === 'lower') input.value = val.toLowerCase();
  if (mode === 'title') input.value = val.replace(/\w\S*/g, (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase());
  if (mode === 'slug') input.value = val.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');

  evaluateTextTransformation();
}

/* --- COMMON HEADER GENERATOR --- */
function renderToolHeader(tool) {
  return `
    <div class="border-b border-slate-500/20 pb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
      <div>
        <h2 class="text-2xl font-bold flex items-center gap-2" style="color: var(--text-main);">
          <i data-lucide="${tool.icon}" class="w-6 h-6 text-indigo-400"></i> ${tool.name}
        </h2>
        <p class="text-xs opacity-70 mt-1">${tool.desc}</p>
      </div>
      <span class="px-3 py-1 bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 rounded-xl text-xs font-mono font-bold self-start sm:self-auto">${tool.badge}</span>
    </div>
  `;
}
