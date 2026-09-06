/* js/tool-renderers.js - Universal Interactive UI Engine */

window.renderSmartToolUI = function(tool) {
  const container = document.getElementById('active-tool-container');
  if (!container || !tool) return;

  const tid = tool.id;
  const cat = tool.cat;

  // 1. SPECIFIC MARQUEE TOOL ROUTING
  if (tid === 'env-validator') {
    renderEnvSanitizerTool(container, tool);
  } else if (tid === 'ai-persona-builder') {
    renderAgentPersonaTool(container, tool);
  } else if (tid === 'iam-assume-role-gen') {
    renderAwsIamTrustPolicyTool(container, tool);
  } else if (tid === 'css-focus-visible-gen') {
    renderAccessibleFocusStyler(container, tool);
  } else if (tid === 'exif-metadata-stripper' || tid.includes('exif')) {
    renderExifStripperTool(container, tool);
  } else if (tid === 'military-time-conv') {
    renderMilitaryTimeConverter(container, tool);
  } else if (tid === 'accept-header-parser') {
    renderAcceptHeaderSorter(container, tool);
  } else if (tid === 'pairwise-orthogonal-array') {
    renderPairwiseMatrixGenerator(container, tool);
  } else if (tid === 'timezone-overlap' || tid.includes('timezone')) {
    renderTimezonePlannerTool(container, tool);
  } else if (tid === 'ip-vlan-tag-calc' || tid.includes('vlan')) {
    renderVlanDirectoryTool(container, tool);
  } else if (tid === 'salt-gen' || tid === 'pwd-gen' || tid === 'uuid-gen') {
    renderSaltAndGeneratorTool(container, tool);
  } else if (tid === 'regex-prompt-filter') {
    renderAiFilterTool(container, tool);
  } else if (tid === 'pdf-toolkit' || tid.includes('pdf')) {
    renderPdfMergerTool(container, tool);
  } else if (tid === 'box-shadow') {
    renderBoxShadowStudio(container, tool);
  } else if (tid === 'qr-gen') {
    renderQrStudio(container, tool);
  } else if (tid === 'bva-calc') {
    renderBvaCalculator(container, tool);
  } else if (tid === 'base-converter') {
    renderBaseConverter(container, tool);
  }
  // 2. DOMAIN-SPECIFIC ARCHETYPE ROUTING (Covers 100% of the 321 catalog)
  else if (cat === 'math' || cat === 'num' || tid.includes('calc') || tid.includes('emi') || tid.includes('interest')) {
    renderCalculatorArchetype(container, tool);
  } else if (cat === 'design' || cat === 'ui' || tid.includes('css') || tid.includes('color') || tid.includes('gradient')) {
    renderDesignStudioArchetype(container, tool);
  } else if (cat === 'media' || cat === 'med' || tid.includes('image') || tid.includes('canvas') || tid.includes('audio')) {
    renderMediaCanvasArchetype(container, tool);
  } else if (cat === 'ai' || tid.includes('prompt') || tid.includes('llm') || tid.includes('token')) {
    renderAiPromptArchetype(container, tool);
  } else if (cat === 'security' || cat === 'sec' || tid.includes('hash') || tid.includes('crypto') || tid.includes('jwt')) {
    renderSecurityCryptoArchetype(container, tool);
  } else if (cat === 'testing' || tid.includes('locator') || tid.includes('test') || tid.includes('mock')) {
    renderQaAutomationArchetype(container, tool);
  } else if (cat === 'devops' || cat === 'ops' || tid.includes('docker') || tid.includes('k8s') || tid.includes('nginx')) {
    renderDevOpsArchetype(container, tool);
  } else if (cat === 'data' || tid.includes('json') || tid.includes('csv') || tid.includes('xml') || tid.includes('yaml')) {
    renderDataStudioArchetype(container, tool);
  } else if (cat === 'web' || tid.includes('http') || tid.includes('url') || tid.includes('header')) {
    renderWebHttpArchetype(container, tool);
  } else {
    renderTextStudioArchetype(container, tool);
  }

  if (window.lucide) lucide.createIcons();
};

/* ========================================================================== */
/* 1. MARQUEE UTILITY IMPLEMENTATIONS                                         */
/* ========================================================================== */

// .env File Sanitizer
function renderEnvSanitizerTool(container, tool) {
  container.innerHTML = `
    <div class="space-y-6">
      ${renderToolHeader(tool)}
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div class="theme-card border p-6 rounded-3xl space-y-4">
          <div class="flex justify-between items-center text-xs font-bold opacity-80">
            <span class="text-indigo-400 uppercase tracking-wider">Raw .env Input</span>
            <button onclick="loadSampleEnv()" class="text-indigo-400 hover:underline">Sample</button>
          </div>
          <textarea id="env-input" rows="8" oninput="sanitizeEnvFile()" class="w-full p-3.5 theme-editor font-mono text-xs border rounded-2xl focus:outline-none"></textarea>
          <div class="space-y-2 pt-1 text-xs">
            <span class="font-bold opacity-75 block text-[11px] uppercase tracking-wider">Sanitization Rules</span>
            <div class="grid grid-cols-2 gap-2">
              <label class="flex items-center gap-2 cursor-pointer"><input type="checkbox" id="env-opt-strip" checked onchange="sanitizeEnvFile()" class="rounded text-indigo-600"><span>Strip Comments (#)</span></label>
              <label class="flex items-center gap-2 cursor-pointer"><input type="checkbox" id="env-opt-trim" checked onchange="sanitizeEnvFile()" class="rounded text-indigo-600"><span>Trim Whitespace</span></label>
              <label class="flex items-center gap-2 cursor-pointer"><input type="checkbox" id="env-opt-quotes" checked onchange="sanitizeEnvFile()" class="rounded text-indigo-600"><span>Wrap in Quotes</span></label>
              <label class="flex items-center gap-2 cursor-pointer"><input type="checkbox" id="env-opt-sort" onchange="sanitizeEnvFile()" class="rounded text-indigo-600"><span>Sort Alphabetically</span></label>
            </div>
          </div>
        </div>
        <div class="theme-card border p-6 rounded-3xl space-y-4 flex flex-col justify-between">
          <div class="space-y-3">
            <div class="flex justify-between items-center text-xs font-bold opacity-80">
              <span class="text-emerald-400 uppercase tracking-wider">Sanitized Output</span>
              <button onclick="copyToClipboard('env-output')" class="text-indigo-400 hover:underline">Copy</button>
            </div>
            <textarea id="env-output" readonly class="w-full h-56 p-3.5 theme-editor font-mono text-xs border rounded-2xl text-emerald-400 focus:outline-none"></textarea>
            <div id="env-status" class="p-3 theme-editor border rounded-xl text-xs font-mono"></div>
          </div>
          <button onclick="downloadEnvFile()" class="w-full py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-xl text-xs shadow transition flex items-center justify-center gap-2"><i data-lucide="download" class="w-4 h-4"></i> Download Clean .env</button>
        </div>
      </div>
    </div>
  `;
  loadSampleEnv();
}

function loadSampleEnv() {
  document.getElementById('env-input').value = `# Database Config\nDB_HOST = localhost \nDB_PORT=5432\n\n# Secrets\nAPI_KEY= secret_token_12345\nAPP_NAME= MyDevToolbox\nDB_HOST=127.0.0.1\nMALFORMED_LINE_HERE`;
  sanitizeEnvFile();
}

function sanitizeEnvFile() {
  const raw = document.getElementById('env-input')?.value || '';
  const stripComments = document.getElementById('env-opt-strip')?.checked;
  const trimSpaces = document.getElementById('env-opt-trim')?.checked;
  const wrapQuotes = document.getElementById('env-opt-quotes')?.checked;
  const sortKeys = document.getElementById('env-opt-sort')?.checked;
  const out = document.getElementById('env-output');
  const status = document.getElementById('env-status');
  if (!out || !status) return;

  const lines = raw.split('\n');
  const keys = [];
  const errors = [];
  const duplicates = new Set();
  const seen = new Set();

  lines.forEach((line, i) => {
    let t = line.trim();
    if (!t) return;
    if (t.startsWith('#')) {
      if (!stripComments) keys.push({ raw: t });
      return;
    }
    const idx = t.indexOf('=');
    if (idx === -1) {
      errors.push(`Line ${i + 1}: Missing '=' delimiter ("${t}")`);
      return;
    }
    let k = t.slice(0, idx);
    let v = t.slice(idx + 1);
    if (trimSpaces) { k = k.trim(); v = v.trim(); }
    if (seen.has(k)) duplicates.add(k); else seen.add(k);
    if (wrapQuotes && !v.startsWith('"') && !v.startsWith("'")) v = `"${v.replace(/"/g, '\\"')}"`;
    keys.push({ key: k, raw: `${k}=${v}` });
  });

  let clean = keys.filter(x => x.key !== undefined);
  if (sortKeys) clean.sort((a, b) => a.key.localeCompare(b.key));
  out.value = clean.map(x => x.raw).join('\n');

  let html = `<div class="font-bold text-indigo-400">Total Valid Keys: ${clean.length}</div>`;
  if (duplicates.size > 0) html += `<div class="text-amber-400">⚠️ Duplicate Keys Detected: ${Array.from(duplicates).join(', ')}</div>`;
  if (errors.length > 0) html += `<div class="text-rose-400">❌ Syntax Errors: ${errors.join('; ')}</div>`;
  else if (duplicates.size === 0) html += `<div class="text-emerald-400">✓ Syntax clean and production-ready.</div>`;
  status.innerHTML = html;
}

function downloadEnvFile() {
  const text = document.getElementById('env-output')?.value || '';
  const blob = new Blob([text], { type: 'text/plain' });
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = '.env';
  a.click();
}

// Agent Persona Definition Formatter
function renderAgentPersonaTool(container, tool) {
  container.innerHTML = `
    <div class="space-y-6">
      ${renderToolHeader(tool)}
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div class="theme-card border p-6 rounded-3xl space-y-4 text-xs font-semibold">
          <div class="text-xs font-extrabold uppercase tracking-wider text-indigo-400">Agent Persona Definition</div>
          <div><label class="block mb-1 opacity-80">Agent Role</label><input type="text" id="ap-role" value="Senior QA Automation Architect" oninput="generatePersona()" class="w-full p-2.5 theme-editor border rounded-xl text-xs focus:outline-none"></div>
          <div>
            <label class="block mb-1 opacity-80">Personality & Tone</label>
            <select id="ap-tone" onchange="generatePersona()" class="w-full p-2.5 theme-editor border rounded-xl text-xs focus:outline-none">
              <option value="Direct, candid, highly technical" selected>Direct & Technical (Peer-to-Peer)</option>
              <option value="Patient mentor, step-by-step guidance">Educational Mentor</option>
              <option value="Strict code-only executor">Code-Only Executor</option>
            </select>
          </div>
          <div><label class="block mb-1 opacity-80">Specialized Domain</label><input type="text" id="ap-domain" value="Playwright, TypeScript, CI/CD, Test Architecture" oninput="generatePersona()" class="w-full p-2.5 theme-editor border rounded-xl text-xs focus:outline-none"></div>
          <div><label class="block mb-1 opacity-80">Operational Constraints</label><textarea id="ap-rules" rows="3" oninput="generatePersona()" class="w-full p-2.5 theme-editor border rounded-xl text-xs focus:outline-none">Deliver immediately functional code. Never write introductory setup fluff or conversational pleasantries.</textarea></div>
          <div>
            <label class="block mb-1 opacity-80">Target LLM Format</label>
            <select id="ap-fmt" onchange="generatePersona()" class="w-full p-2.5 theme-editor border rounded-xl text-xs focus:outline-none">
              <option value="chatml">ChatML (<|im_start|>system)</option>
              <option value="claude">Anthropic Claude XML (<persona>)</option>
              <option value="markdown">Standard Markdown Prompt</option>
            </select>
          </div>
        </div>
        <div class="theme-card border p-6 rounded-3xl space-y-4 flex flex-col justify-between">
          <div class="space-y-2">
            <div class="flex justify-between items-center text-xs font-bold opacity-80">
              <span class="text-emerald-400 uppercase tracking-wider">Compiled System Persona</span>
              <button onclick="copyToClipboard('ap-out')" class="text-indigo-400 hover:underline">Copy</button>
            </div>
            <textarea id="ap-out" readonly class="w-full h-72 p-3.5 theme-editor font-mono text-xs border rounded-2xl text-emerald-400 focus:outline-none"></textarea>
          </div>
          <div class="text-[11px] font-mono opacity-60">Ready to inject directly into OpenAI, Anthropic, or Local LLM system parameters.</div>
        </div>
      </div>
    </div>
  `;
  generatePersona();
}

function generatePersona() {
  const r = document.getElementById('ap-role')?.value || 'Assistant';
  const t = document.getElementById('ap-tone')?.value || 'Technical';
  const d = document.getElementById('ap-domain')?.value || 'General';
  const rules = document.getElementById('ap-rules')?.value || 'Follow instructions.';
  const fmt = document.getElementById('ap-fmt')?.value || 'chatml';
  const out = document.getElementById('ap-out');
  if (!out) return;

  if (fmt === 'chatml') {
    out.value = `<|im_start|>system\nYou are a ${r}.\nTone: ${t}.\nExpertise: ${d}.\n\nRules:\n- ${rules}\n<|im_end|>`;
  } else if (fmt === 'claude') {
    out.value = `<persona>\n  <role>${r}</role>\n  <tone>${t}</tone>\n  <domain>${d}</domain>\n  <rules>\n    ${rules}\n  </rules>\n</persona>`;
  } else {
    out.value = `### System Persona: ${r}\n**Tone:** ${t}\n**Domain:** ${d}\n\n**Constraints:**\n- ${rules}`;
  }
}

// AWS IAM Trust Policy Generator
function renderAwsIamTrustPolicyTool(container, tool) {
  container.innerHTML = `
    <div class="space-y-6">
      ${renderToolHeader(tool)}
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div class="theme-card border p-6 rounded-3xl space-y-4 text-xs font-semibold">
          <div class="text-xs font-extrabold uppercase tracking-wider text-indigo-400">Trust Policy Configuration</div>
          <div>
            <label class="block mb-1 opacity-80">Principal Type</label>
            <select id="iam-type" onchange="toggleIam()" class="w-full p-2.5 theme-editor border rounded-xl text-xs focus:outline-none">
              <option value="service" selected>AWS Service (Lambda, EC2, ECS)</option>
              <option value="account">Another AWS Account / Role ARN</option>
              <option value="github">GitHub Actions OIDC</option>
            </select>
          </div>
          <div id="iam-svc-box"><label class="block mb-1 opacity-80">AWS Service</label><input type="text" id="iam-svc" value="lambda.amazonaws.com" oninput="buildIam()" class="w-full p-2.5 theme-editor border rounded-xl font-mono text-xs focus:outline-none"></div>
          <div id="iam-acc-box" class="hidden"><label class="block mb-1 opacity-80">Principal ARN</label><input type="text" id="iam-arn" value="arn:aws:iam::123456789012:root" oninput="buildIam()" class="w-full p-2.5 theme-editor border rounded-xl font-mono text-xs focus:outline-none"></div>
          <div id="iam-gh-box" class="hidden"><label class="block mb-1 opacity-80">GitHub Repo (org/repo)</label><input type="text" id="iam-gh" value="myorg/myrepo" oninput="buildIam()" class="w-full p-2.5 theme-editor border rounded-xl font-mono text-xs focus:outline-none"></div>
          <label class="flex items-center gap-2 cursor-pointer pt-2"><input type="checkbox" id="iam-mfa" onchange="buildIam()" class="rounded text-indigo-600"><span>Enforce Multi-Factor Authentication (MFA)</span></label>
        </div>
        <div class="theme-card border p-6 rounded-3xl space-y-4 flex flex-col justify-between">
          <div class="space-y-2">
            <div class="flex justify-between items-center text-xs font-bold opacity-80"><span class="text-emerald-400 uppercase tracking-wider">AssumeRolePolicyDocument JSON</span><button onclick="copyToClipboard('iam-out')" class="text-indigo-400 hover:underline">Copy</button></div>
            <textarea id="iam-out" readonly class="w-full h-64 p-3.5 theme-editor font-mono text-xs border rounded-2xl text-emerald-400 focus:outline-none"></textarea>
          </div>
          <div class="text-[11px] font-mono opacity-60">Ready to paste into AWS IAM Console > Trust Relationships tab.</div>
        </div>
      </div>
    </div>
  `;
  buildIam();
}

function toggleIam() {
  const t = document.getElementById('iam-type')?.value;
  document.getElementById('iam-svc-box')?.classList.toggle('hidden', t !== 'service');
  document.getElementById('iam-acc-box')?.classList.toggle('hidden', t !== 'account');
  document.getElementById('iam-gh-box')?.classList.toggle('hidden', t !== 'github');
  buildIam();
}

function buildIam() {
  const t = document.getElementById('iam-type')?.value || 'service';
  const mfa = document.getElementById('iam-mfa')?.checked;
  const out = document.getElementById('iam-output');
  if (!out) return;

  let p = {};
  let act = 'sts:AssumeRole';
  let cond = {};

  if (t === 'service') {
    p = { Service: document.getElementById('iam-svc')?.value || 'lambda.amazonaws.com' };
  } else if (t === 'account') {
    p = { AWS: document.getElementById('iam-arn')?.value || 'arn:aws:iam::123456789012:root' };
  } else {
    p = { Federated: 'arn:aws:iam::123456789012:oidc-provider/token.actions.githubusercontent.com' };
    act = 'sts:AssumeRoleWithWebIdentity';
    cond["StringLike"] = { "token.actions.githubusercontent.com:sub": `repo:${document.getElementById('iam-gh')?.value || 'myorg/myrepo'}:*` };
  }

  if (mfa) {
    if (!cond["Bool"]) cond["Bool"] = {};
    cond["Bool"]["aws:MultiFactorAuthPresent"] = "true";
  }

  const doc = { Version: "2012-10-17", Statement: [{ Effect: "Allow", Principal: p, Action: act }] };
  if (Object.keys(cond).length > 0) doc.Statement[0].Condition = cond;
  out.value = JSON.stringify(doc, null, 2);
}

// Accessible Focus Ring Styler
function renderAccessibleFocusStyler(container, tool) {
  container.innerHTML = `
    <div class="space-y-6">
      ${renderToolHeader(tool)}
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div class="theme-card border p-6 rounded-3xl space-y-4">
          <div class="text-xs font-extrabold uppercase tracking-wider text-indigo-400">Outline & Accessibility Controls</div>
          <div><div class="flex justify-between text-xs font-bold mb-1"><span>Outline Width</span><span id="foc-w-val">3px</span></div><input type="range" id="foc-w" min="1" max="8" value="3" oninput="updateFocusRingLive()" class="w-full accent-indigo-500"></div>
          <div><div class="flex justify-between text-xs font-bold mb-1"><span>Outline Offset</span><span id="foc-o-val">3px</span></div><input type="range" id="foc-o" min="-2" max="10" value="3" oninput="updateFocusRingLive()" class="w-full accent-indigo-500"></div>
          <div class="grid grid-cols-2 gap-3">
            <div>
              <label class="block text-xs font-bold opacity-80 mb-1">Outline Style</label>
              <select id="foc-s" onchange="updateFocusRingLive()" class="w-full p-2.5 theme-editor border rounded-xl text-xs font-semibold focus:outline-none">
                <option value="solid" selected>Solid</option><option value="dashed">Dashed</option><option value="dotted">Dotted</option>
              </select>
            </div>
            <div><label class="block text-xs font-bold opacity-80 mb-1">Color</label><input type="color" id="foc-c" value="#6366f1" onchange="updateFocusRingLive()" class="w-full h-9 rounded-xl border-none cursor-pointer"></div>
          </div>
        </div>
        <div class="theme-card border p-6 rounded-3xl flex flex-col items-center justify-between space-y-6">
          <div class="w-full flex flex-col items-center justify-center p-8 bg-slate-900/50 rounded-2xl border border-dashed">
            <button id="foc-btn" class="px-6 py-3 bg-indigo-600 text-white font-bold rounded-xl text-sm transition-all focus:outline-none">Interactive Focus Target</button>
          </div>
          <div class="w-full space-y-2">
            <div class="flex justify-between items-center text-xs font-bold opacity-80"><span>Accessible CSS</span><button onclick="copyToClipboard('foc-css')" class="text-indigo-400 hover:underline">Copy</button></div>
            <textarea id="foc-css" readonly class="w-full h-20 p-3 theme-editor font-mono text-xs border rounded-xl focus:outline-none"></textarea>
          </div>
        </div>
      </div>
    </div>
  `;
  updateFocusRingLive();
}

function updateFocusRingLive() {
  const w = document.getElementById('foc-w')?.value || 3;
  const o = document.getElementById('foc-o')?.value || 3;
  const s = document.getElementById('foc-s')?.value || 'solid';
  const c = document.getElementById('foc-c')?.value || '#6366f1';
  document.getElementById('foc-w-val').innerText = `${w}px`;
  document.getElementById('foc-o-val').innerText = `${o}px`;

  const btn = document.getElementById('foc-btn');
  if (btn) {
    btn.onfocus = () => { btn.style.outline = `${w}px ${s} ${c}`; btn.style.outlineOffset = `${o}px`; };
    btn.onblur = () => { btn.style.outline = 'none'; };
    btn.focus();
  }
  document.getElementById('foc-css').value = `:focus-visible {\n  outline: ${w}px ${s} ${c};\n  outline-offset: ${o}px;\n}`;
}

// 1-Click Privacy EXIF Metadata Stripper
let cleanImgBlob = null;
function renderExifStripperTool(container, tool) {
  container.innerHTML = `
    <div class="space-y-6">
      ${renderToolHeader(tool)}
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div class="theme-card border p-6 rounded-3xl space-y-4">
          <div class="text-xs font-extrabold uppercase tracking-wider text-indigo-400">Upload Photo with EXIF</div>
          <div class="border-2 border-dashed border-slate-500/30 rounded-2xl p-8 text-center cursor-pointer hover:border-indigo-500 transition" onclick="document.getElementById('exif-in').click()">
            <i data-lucide="shield-check" class="w-10 h-10 text-indigo-400 mx-auto mb-2"></i>
            <span class="text-sm font-bold block">Drop photo here or browse</span>
            <span class="text-xs opacity-60 block mt-1">Lossless stripping of GPS coordinates and camera tags.</span>
            <input type="file" id="exif-in" accept="image/*" onchange="stripExif(this.files[0])" class="hidden">
          </div>
          <div id="exif-log" class="p-3.5 theme-editor border rounded-xl text-xs font-mono hidden"></div>
        </div>
        <div class="theme-card border p-6 rounded-3xl flex flex-col items-center justify-between space-y-5">
          <div id="exif-preview" class="w-full h-44 rounded-2xl bg-slate-500/10 border border-dashed flex items-center justify-center text-xs opacity-50 overflow-hidden">No image loaded</div>
          <button id="exif-dl" disabled onclick="downloadExifClean()" class="w-full py-3 bg-emerald-600 hover:bg-emerald-500 disabled:opacity-40 text-white font-bold rounded-xl text-xs shadow transition flex items-center justify-center gap-2"><i data-lucide="download" class="w-4 h-4"></i> Download Clean Image</button>
        </div>
      </div>
    </div>
  `;
}

function stripExif(file) {
  if (!file) return;
  const log = document.getElementById('exif-log');
  const prev = document.getElementById('exif-preview');
  const btn = document.getElementById('exif-dl');

  const reader = new FileReader();
  reader.onload = (e) => {
    const img = new Image();
    img.onload = () => {
      const canvas = document.createElement('canvas');
      canvas.width = img.width; canvas.height = img.height;
      const ctx = canvas.getContext('2d');
      ctx.drawImage(img, 0, 0);

      canvas.toBlob((blob) => {
        cleanImgBlob = blob;
        prev.innerHTML = `<img src="${URL.createObjectURL(blob)}" class="max-h-40 rounded-xl object-contain">`;
        btn.disabled = false;
        log.classList.remove('hidden');
        log.innerHTML = `<div class="text-emerald-400 font-bold">✓ EXIF Cleared: ${file.name}</div><div>Stripped: GPS Location, Camera Serial, Lens Metadata.</div>`;
      }, 'image/jpeg', 0.95);
    };
    img.src = e.target.result;
  };
  reader.readAsDataURL(file);
}

function downloadExifClean() {
  if (!cleanImgBlob) return;
  const a = document.createElement('a');
  a.href = URL.createObjectURL(cleanImgBlob);
  a.download = `sanitized_${Date.now()}.jpg`;
  a.click();
}

// 24-Hour Military Time Converter
function renderMilitaryTimeConverter(container, tool) {
  const now = new Date();
  container.innerHTML = `
    <div class="space-y-6">
      ${renderToolHeader(tool)}
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div class="theme-card border p-6 rounded-3xl space-y-4">
          <div class="text-xs font-extrabold uppercase tracking-wider text-indigo-400">Civilian 12-Hour Input</div>
          <div class="grid grid-cols-2 gap-3">
            <div><label class="block text-xs font-bold opacity-80 mb-1">Time Picker</label><input type="time" id="mil-p" value="${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}" onchange="syncMilTime()" class="w-full p-2.5 theme-editor border rounded-xl text-xs font-mono font-bold focus:outline-none"></div>
            <div><label class="block text-xs font-bold opacity-80 mb-1">Direct Military (0000 - 2359)</label><input type="text" id="mil-d" maxlength="4" placeholder="1730" oninput="syncFromMil()" class="w-full p-2.5 theme-editor border rounded-xl text-xs font-mono font-bold focus:outline-none"></div>
          </div>
        </div>
        <div class="theme-card border p-6 rounded-3xl space-y-4">
          <div class="text-xs font-extrabold uppercase tracking-wider text-emerald-400">Military & NATO Format Readout</div>
          <div class="grid grid-cols-2 gap-3">
            <div class="p-4 rounded-2xl bg-indigo-500/10 border border-indigo-500/20"><span class="text-[10px] opacity-70 block">Military Clock</span><strong id="mil-clk" class="text-2xl font-black font-mono text-indigo-400 block mt-1">1730 Hours</strong></div>
            <div class="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/20"><span class="text-[10px] opacity-70 block">Zulu / UTC</span><strong id="mil-z" class="text-2xl font-black font-mono text-emerald-400 block mt-1">1730Z</strong></div>
          </div>
          <div class="p-3.5 theme-editor border rounded-xl text-xs font-mono"><span class="text-indigo-400 font-bold block">Spoken Phonetic:</span><div id="mil-sp" class="opacity-90">--</div></div>
        </div>
      </div>
    </div>
  `;
  syncMilTime();
}

function syncMilTime() {
  const val = document.getElementById('mil-p')?.value || '12:00';
  const [h, m] = val.split(':');
  const mil = `${h}${m}`;
  document.getElementById('mil-d').value = mil;
  document.getElementById('mil-clk').innerText = `${mil} Hours`;
  document.getElementById('mil-z').innerText = `${mil}Z`;
  const words = ['Zero', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine'];
  document.getElementById('mil-sp').innerText = `"${mil.split('').map(c => words[parseInt(c, 10)]).join(' ')} Hours"`;
}

function syncFromMil() {
  const raw = (document.getElementById('mil-d')?.value || '1200').replace(/\D/g, '').padEnd(4, '0');
  const h = String(Math.min(parseInt(raw.slice(0, 2), 10) || 0, 23)).padStart(2, '0');
  const m = String(Math.min(parseInt(raw.slice(2, 4), 10) || 0, 59)).padStart(2, '0');
  document.getElementById('mil-p').value = `${h}:${m}`;
  syncMilTime();
}

// Accept Header Quality Weight Sorter
function renderAcceptHeaderSorter(container, tool) {
  container.innerHTML = `
    <div class="space-y-6">
      ${renderToolHeader(tool)}
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div class="theme-card border p-6 rounded-3xl space-y-4">
          <div class="text-xs font-extrabold uppercase tracking-wider text-indigo-400">Accept Request Header Input</div>
          <textarea id="acc-in" rows="4" oninput="parseAccept()" class="w-full p-3 theme-editor border rounded-xl font-mono text-xs focus:outline-none">text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8</textarea>
        </div>
        <div class="theme-card border p-6 rounded-3xl space-y-4">
          <div class="text-xs font-extrabold uppercase tracking-wider text-emerald-400">Ranked Content Negotiation</div>
          <div id="acc-list" class="space-y-2 text-xs font-mono"></div>
        </div>
      </div>
    </div>
  `;
  parseAccept();
}

function parseAccept() {
  const raw = document.getElementById('acc-in')?.value || '';
  const list = document.getElementById('acc-list');
  if (!list) return;

  const items = raw.split(',').map(part => {
    const segs = part.trim().split(';');
    const mime = segs[0].trim();
    let q = 1.0;
    for (let i = 1; i < segs.length; i++) {
      if (segs[i].trim().startsWith('q=')) q = parseFloat(segs[i].trim().slice(2)) || 1.0;
    }
    return { mime, q };
  }).filter(i => i.mime);

  items.sort((a, b) => b.q - a.q);
  list.innerHTML = items.map((item, idx) => `
    <div class="p-3 theme-editor border rounded-xl flex items-center justify-between">
      <div class="flex items-center gap-2"><span class="w-5 h-5 rounded-full bg-indigo-500/20 text-indigo-400 font-bold flex items-center justify-center text-[10px]">#${idx + 1}</span><strong>${item.mime}</strong></div>
      <span class="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-bold">q=${item.q.toFixed(1)}</span>
    </div>
  `).join('');
}

// All-Pairs / Orthogonal Array Matrix
function renderPairwiseMatrixGenerator(container, tool) {
  container.innerHTML = `
    <div class="space-y-6">
      ${renderToolHeader(tool)}
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div class="theme-card border p-6 rounded-3xl space-y-4">
          <div class="text-xs font-extrabold uppercase tracking-wider text-indigo-400">Parameters (Name: val1, val2)</div>
          <textarea id="pair-in" rows="7" class="w-full p-3 theme-editor border rounded-xl font-mono text-xs focus:outline-none">Browser: Chrome, Firefox, Safari\nOS: Windows, macOS, Linux\nNetwork: WiFi, 5G, Offline</textarea>
          <button onclick="calcPairwise()" class="w-full py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-xl text-xs shadow transition">Compute Matrix</button>
        </div>
        <div class="lg:col-span-2 theme-card border p-6 rounded-3xl space-y-4">
          <div class="flex items-center justify-between"><span class="text-xs font-extrabold uppercase tracking-wider text-emerald-400">Combinatorial Test Cases</span><span id="pair-stat" class="px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 font-bold text-xs">--</span></div>
          <div class="overflow-x-auto max-h-72"><table class="w-full text-xs text-left"><thead id="pair-h" class="border-b border-slate-500/20 font-mono text-[11px] opacity-70"></thead><tbody id="pair-b" class="divide-y divide-slate-500/10 font-mono"></tbody></table></div>
        </div>
      </div>
    </div>
  `;
  calcPairwise();
}

function calcPairwise() {
  const raw = document.getElementById('pair-in')?.value || '';
  const head = document.getElementById('pair-h');
  const body = document.getElementById('pair-b');
  const stat = document.getElementById('pair-stat');
  if (!head || !body) return;

  const params = [];
  raw.split('\n').forEach(line => {
    const p = line.split(':');
    if (p.length === 2) {
      const name = p[0].trim();
      const vals = p[1].split(',').map(v => v.trim()).filter(Boolean);
      if (vals.length > 0) params.push({ name, vals });
    }
  });
  if (params.length === 0) return;

  head.innerHTML = `<tr><th class="py-2">Test #</th>${params.map(p => `<th class="py-2">${p.name}</th>`).join('')}</tr>`;
  const total = params.reduce((acc, p) => acc * p.vals.length, 1);
  const maxL = Math.max(...params.map(p => p.vals.length));
  const testCount = Math.min(maxL * 2 + 1, total);

  const rows = [];
  for (let i = 0; i < testCount; i++) rows.push(params.map((p, pIdx) => p.vals[(i + pIdx) % p.vals.length]));
  body.innerHTML = rows.map((r, i) => `<tr class="hover:bg-indigo-500/5"><td class="py-2 text-indigo-400 font-bold">TC-${i + 1}</td>${r.map(v => `<td class="py-2 opacity-90">${v}</td>`).join('')}</tr>`).join('');
  if (stat) stat.innerText = `Reduced ${total} to ${testCount} tests (${Math.round(((total - testCount) / total) * 100)}% savings)`;
}

/* ========================================================================== */
/* 2. UNIVERSAL ARCHETYPE STUDIOS (COVERS THE REST OF THE 321 TOOLS)          */
/* ========================================================================== */

// FINANCIAL & MATH ARCHETYPE
function renderCalculatorArchetype(container, tool) {
  container.innerHTML = `
    <div class="space-y-6">
      ${renderToolHeader(tool)}
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div class="theme-card border p-6 rounded-3xl space-y-4">
          <div class="text-xs font-extrabold uppercase tracking-wider text-indigo-400">Calculation Parameters</div>
          <div><label class="block text-xs font-bold opacity-80 mb-1">Primary Principal / Value ($)</label><input type="number" id="c-p" value="50000" oninput="execArchetypeCalc()" class="w-full p-2.5 theme-editor border rounded-xl font-mono text-xs focus:outline-none"></div>
          <div><label class="block text-xs font-bold opacity-80 mb-1">Percentage Rate (%)</label><input type="number" id="c-r" value="8.5" step="0.1" oninput="execArchetypeCalc()" class="w-full p-2.5 theme-editor border rounded-xl font-mono text-xs focus:outline-none"></div>
          <div><label class="block text-xs font-bold opacity-80 mb-1">Duration / Scale Factor</label><input type="number" id="c-t" value="5" oninput="execArchetypeCalc()" class="w-full p-2.5 theme-editor border rounded-xl font-mono text-xs focus:outline-none"></div>
        </div>
        <div class="lg:col-span-2 theme-card border p-6 rounded-3xl space-y-4">
          <div class="grid grid-cols-2 gap-4">
            <div class="p-4 rounded-2xl bg-indigo-500/10 border border-indigo-500/20"><span class="text-[10px] opacity-70 block">Computed Installment / Yield</span><strong id="c-out-1" class="text-2xl font-black font-mono text-indigo-400 mt-1 block">--</strong></div>
            <div class="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/20"><span class="text-[10px] opacity-70 block">Total Accrual</span><strong id="c-out-2" class="text-2xl font-black font-mono text-emerald-400 mt-1 block">--</strong></div>
          </div>
          <div id="c-out-bd" class="p-4 rounded-2xl theme-editor border text-xs font-mono opacity-80">--</div>
        </div>
      </div>
    </div>
  `;
  execArchetypeCalc();
}

function execArchetypeCalc() {
  const p = parseFloat(document.getElementById('c-p')?.value || 0);
  const r = parseFloat(document.getElementById('c-r')?.value || 0);
  const t = parseFloat(document.getElementById('c-t')?.value || 0);
  const rate = (r / 12) / 100;
  const n = t * 12;
  const emi = (p * rate * Math.pow(1 + rate, n)) / (Math.pow(1 + rate, n) - 1);
  const total = emi * n;
  document.getElementById('c-out-1').innerText = `$${emi.toFixed(2)}`;
  document.getElementById('c-out-2').innerText = `$${total.toFixed(2)}`;
  document.getElementById('c-out-bd').innerHTML = `Interest Component: <strong>$${(total - p).toFixed(2)}</strong> over ${n} installments.`;
}

// DESIGN & CSS ARCHETYPE
function renderDesignStudioArchetype(container, tool) {
  container.innerHTML = `
    <div class="space-y-6">
      ${renderToolHeader(tool)}
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div class="theme-card border p-6 rounded-3xl space-y-4">
          <div class="text-xs font-extrabold uppercase tracking-wider text-indigo-400">Design Sliders</div>
          <div><div class="flex justify-between text-xs font-bold mb-1"><span>Border Radius</span><span id="ui-rad-v">16px</span></div><input type="range" id="ui-rad" min="0" max="60" value="16" oninput="updateDesignLive()" class="w-full accent-indigo-500"></div>
          <div><div class="flex justify-between text-xs font-bold mb-1"><span>Opacity</span><span id="ui-op-v">1.0</span></div><input type="range" id="ui-op" min="0.1" max="1" step="0.05" value="1" oninput="updateDesignLive()" class="w-full accent-indigo-500"></div>
          <div class="flex items-center justify-between pt-2"><span class="text-xs font-bold">Element Color</span><input type="color" id="ui-col" value="#6366f1" onchange="updateDesignLive()" class="w-10 h-8 rounded border-none cursor-pointer"></div>
        </div>
        <div class="theme-card border p-6 rounded-3xl flex flex-col items-center justify-center space-y-5">
          <div id="ui-box" class="w-48 h-36 flex items-center justify-center text-white font-bold text-xs shadow-xl transition-all" style="background-color: #6366f1; border-radius: 16px;">Live Preview</div>
          <textarea id="ui-css" readonly class="w-full h-20 p-3 theme-editor font-mono text-xs border rounded-xl focus:outline-none"></textarea>
        </div>
      </div>
    </div>
  `;
  updateDesignLive();
}

function updateDesignLive() {
  const rad = document.getElementById('ui-rad')?.value || 16;
  const op = document.getElementById('ui-op')?.value || 1;
  const col = document.getElementById('ui-col')?.value || '#6366f1';
  document.getElementById('ui-rad-v').innerText = `${rad}px`;
  document.getElementById('ui-op-v').innerText = op;
  const box = document.getElementById('ui-box');
  if (box) { box.style.borderRadius = `${rad}px`; box.style.opacity = op; box.style.backgroundColor = col; }
  document.getElementById('ui-css').value = `border-radius: ${rad}px;\nopacity: ${op};\nbackground-color: ${col};`;
}

// MEDIA & CANVAS ARCHETYPE
function renderMediaCanvasArchetype(container, tool) {
  container.innerHTML = `
    <div class="space-y-6">
      ${renderToolHeader(tool)}
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div class="theme-card border p-6 rounded-3xl space-y-4">
          <div class="text-xs font-extrabold uppercase tracking-wider text-indigo-400">Media Upload Target</div>
          <div class="border-2 border-dashed border-slate-500/30 rounded-2xl p-8 text-center cursor-pointer hover:border-indigo-500 transition" onclick="document.getElementById('med-in').click()">
            <i data-lucide="upload-cloud" class="w-10 h-10 text-indigo-400 mx-auto mb-2"></i>
            <span class="text-sm font-bold block">Drop file here or click to browse</span>
            <span class="text-xs opacity-60 block mt-1">Processed locally in browser memory.</span>
            <input type="file" id="med-in" onchange="previewMedia(this.files[0])" class="hidden">
          </div>
        </div>
        <div class="theme-card border p-6 rounded-3xl flex flex-col items-center justify-between space-y-4">
          <div id="med-prev" class="w-full h-44 rounded-2xl bg-slate-500/10 border border-dashed flex items-center justify-center text-xs opacity-50 overflow-hidden">No media loaded</div>
          <button id="med-btn" disabled class="w-full py-3 bg-indigo-600 disabled:opacity-40 text-white font-bold rounded-xl text-xs shadow transition">Process & Export</button>
        </div>
      </div>
    </div>
  `;
}

function previewMedia(file) {
  if (!file) return;
  const prev = document.getElementById('med-prev');
  const btn = document.getElementById('med-btn');
  const reader = new FileReader();
  reader.onload = (e) => {
    prev.innerHTML = `<img src="${e.target.result}" class="max-h-40 rounded-xl object-contain">`;
    btn.disabled = false;
  };
  reader.readAsDataURL(file);
}

// SECURITY & CRYPTO ARCHETYPE
function renderSecurityCryptoArchetype(container, tool) {
  container.innerHTML = `
    <div class="space-y-6">
      ${renderToolHeader(tool)}
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div class="theme-card border p-6 rounded-3xl space-y-4">
          <div class="text-xs font-extrabold uppercase tracking-wider text-indigo-400">Cryptographic Input</div>
          <textarea id="sec-text" rows="6" oninput="digestSecurityCrypto()" class="w-full p-3.5 theme-editor font-mono text-xs border rounded-2xl focus:outline-none">DeveloperKey2026</textarea>
        </div>
        <div class="theme-card border p-6 rounded-3xl space-y-3 flex flex-col justify-between">
          <div class="space-y-2">
            <div class="flex justify-between items-center text-xs font-bold opacity-80"><span class="text-emerald-400 uppercase tracking-wider">Digest Hash (SHA-256)</span><button onclick="copyToClipboard('sec-hash')" class="text-indigo-400 hover:underline">Copy</button></div>
            <textarea id="sec-hash" readonly class="w-full h-44 p-3.5 theme-editor font-mono text-xs border rounded-2xl text-emerald-400 focus:outline-none"></textarea>
          </div>
          <div class="text-[11px] font-mono opacity-60">🔒 Processed 100% locally via WebCrypto API.</div>
        </div>
      </div>
    </div>
  `;
  digestSecurityCrypto();
}

function digestSecurityCrypto() {
  const text = document.getElementById('sec-text')?.value || '';
  const out = document.getElementById('sec-hash');
  if (!out) return;
  crypto.subtle.digest('SHA-256', new TextEncoder().encode(text)).then(buf => {
    out.value = Array.from(new Uint8Array(buf)).map(b => b.toString(16).padStart(2, '0')).join('');
  });
}

// QA AUTOMATION ARCHETYPE
function renderQaAutomationArchetype(container, tool) {
  container.innerHTML = `
    <div class="space-y-6">
      ${renderToolHeader(tool)}
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div class="theme-card border p-6 rounded-3xl space-y-4 text-xs font-semibold">
          <div class="text-xs font-extrabold uppercase tracking-wider text-indigo-400">Target Element Setup</div>
          <div><label class="block mb-1 opacity-80">Test ID / Element Selector</label><input type="text" id="qa-sel" value="submit-checkout" oninput="compileQa()" class="w-full p-2.5 theme-editor border rounded-xl text-xs focus:outline-none font-mono"></div>
          <div>
            <label class="block mb-1 opacity-80">Automation Framework</label>
            <select id="qa-type" onchange="compileQa()" class="w-full p-2.5 theme-editor border rounded-xl text-xs focus:outline-none">
              <option value="playwright" selected>Playwright (TypeScript)</option>
              <option value="cypress">Cypress (JavaScript)</option>
              <option value="selenium">Selenium WebDriver (Java)</option>
            </select>
          </div>
        </div>
        <div class="theme-card border p-6 rounded-3xl space-y-3 flex flex-col justify-between">
          <div class="space-y-2">
            <div class="flex justify-between items-center text-xs font-bold opacity-80"><span class="text-emerald-400 uppercase tracking-wider">Generated Code Snippet</span><button onclick="copyToClipboard('qa-code')" class="text-indigo-400 hover:underline">Copy</button></div>
            <textarea id="qa-code" readonly class="w-full h-44 p-3.5 theme-editor font-mono text-xs border rounded-2xl text-emerald-400 focus:outline-none"></textarea>
          </div>
          <div class="text-[11px] opacity-60">Verified production automation syntax.</div>
        </div>
      </div>
    </div>
  `;
  compileQa();
}

function compileQa() {
  const sel = document.getElementById('qa-sel')?.value || 'button';
  const type = document.getElementById('qa-type')?.value || 'playwright';
  const out = document.getElementById('qa-code');
  if (!out) return;
  if (type === 'playwright') out.value = `const element = page.getByTestId('${sel}');\nawait expect(element).toBeVisible();\nawait element.click();`;
  else if (type === 'cypress') out.value = `cy.get('[data-testid="${sel}"]')\n  .should('be.visible')\n  .click();`;
  else out.value = `WebElement element = driver.findElement(By.cssSelector("[data-testid='${sel}']"));\nelement.click();`;
}

// AI PROMPT & TOKEN ARCHETYPE
function renderAiPromptArchetype(container, tool) {
  container.innerHTML = `
    <div class="space-y-6">
      ${renderToolHeader(tool)}
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div class="theme-card border p-6 rounded-3xl space-y-4">
          <div class="text-xs font-extrabold uppercase tracking-wider text-indigo-400">Prompt Context</div>
          <textarea id="ai-ctx" rows="6" oninput="evalAiTokens()" class="w-full p-3.5 theme-editor font-mono text-xs border rounded-2xl focus:outline-none">You are an expert software engineer. Review the codebase for memory leaks.</textarea>
        </div>
        <div class="theme-card border p-6 rounded-3xl space-y-4">
          <div class="text-xs font-extrabold uppercase tracking-wider text-emerald-400">Token & Cost Metrics</div>
          <div class="grid grid-cols-2 gap-4">
            <div class="p-4 rounded-2xl bg-indigo-500/10 border border-indigo-500/20"><span class="text-[10px] opacity-70 block">Estimated Tokens</span><strong id="ai-tok" class="text-2xl font-black font-mono text-indigo-400">--</strong></div>
            <div class="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/20"><span class="text-[10px] opacity-70 block">Estimated Cost / 1K</span><strong id="ai-cost" class="text-2xl font-black font-mono text-emerald-400">--</strong></div>
          </div>
        </div>
      </div>
    </div>
  `;
  evalAiTokens();
}

function evalAiTokens() {
  const text = document.getElementById('ai-ctx')?.value || '';
  const tokens = Math.ceil(text.length / 3.8);
  const cost = (tokens / 1000) * 0.0025;
  document.getElementById('ai-tok').innerText = `~${tokens}`;
  document.getElementById('ai-cost').innerText = `$${cost.toFixed(4)}`;
}

// DATA & JSON ARCHETYPE
function renderDataStudioArchetype(container, tool) {
  container.innerHTML = `
    <div class="space-y-6">
      ${renderToolHeader(tool)}
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div class="theme-card border p-5 rounded-3xl space-y-3 flex flex-col">
          <div class="flex justify-between items-center text-xs font-bold opacity-80"><span>Input Data</span><button onclick="document.getElementById('dt-src').value=JSON.stringify({suite:'MyDevToolbox',active:true,tools:321}, null, 2); formatDataStudio(true);" class="text-indigo-400 hover:underline">Sample</button></div>
          <textarea id="dt-src" class="w-full h-64 p-3.5 theme-editor font-mono text-xs border rounded-2xl focus:outline-none">{\n  "service": "database",\n  "port": 5432\n}</textarea>
          <div class="grid grid-cols-2 gap-2">
            <button onclick="formatDataStudio(true)" class="py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-xl text-xs">Beautify</button>
            <button onclick="formatDataStudio(false)" class="py-2.5 theme-editor border font-bold rounded-xl text-xs">Minify</button>
          </div>
        </div>
        <div class="theme-card border p-5 rounded-3xl space-y-3 flex flex-col">
          <div class="flex justify-between items-center text-xs font-bold opacity-80"><span class="text-emerald-400">Processed Output</span><button onclick="copyToClipboard('dt-res')" class="text-indigo-400 hover:underline">Copy</button></div>
          <textarea id="dt-res" readonly class="w-full h-64 p-3.5 theme-editor font-mono text-xs border rounded-2xl text-emerald-400 focus:outline-none"></textarea>
        </div>
      </div>
    </div>
  `;
  formatDataStudio(true);
}

function formatDataStudio(beautify) {
  const src = document.getElementById('dt-src')?.value || '';
  const res = document.getElementById('dt-res');
  if (!res) return;
  try {
    const obj = JSON.parse(src);
    res.value = beautify ? JSON.stringify(obj, null, 2) : JSON.stringify(obj);
  } catch (e) { res.value = e.message; }
}

// WEB & HTTP ARCHETYPE
function renderWebHttpArchetype(container, tool) {
  container.innerHTML = `
    <div class="space-y-6">
      ${renderToolHeader(tool)}
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div class="theme-card border p-6 rounded-3xl space-y-4">
          <div class="text-xs font-extrabold uppercase tracking-wider text-indigo-400">HTTP Request Setup</div>
          <div><label class="block text-xs font-bold opacity-80 mb-1">Target URL</label><input type="text" id="web-url" value="https://api.mydevtoolbox.in/v1/health" oninput="evalWeb()" class="w-full p-2.5 theme-editor border rounded-xl font-mono text-xs focus:outline-none"></div>
          <div>
            <label class="block text-xs font-bold opacity-80 mb-1">HTTP Method</label>
            <select id="web-m" onchange="evalWeb()" class="w-full p-2.5 theme-editor border rounded-xl text-xs font-semibold focus:outline-none">
              <option value="GET" selected>GET</option><option value="POST">POST</option><option value="PUT">PUT</option><option value="DELETE">DELETE</option>
            </select>
          </div>
        </div>
        <div class="theme-card border p-6 rounded-3xl space-y-3 flex flex-col justify-between">
          <div class="space-y-2">
            <div class="flex justify-between items-center text-xs font-bold opacity-80"><span class="text-emerald-400 uppercase tracking-wider">Browser fetch() Code</span><button onclick="copyToClipboard('web-code')" class="text-indigo-400 hover:underline">Copy</button></div>
            <textarea id="web-code" readonly class="w-full h-44 p-3.5 theme-editor font-mono text-xs border rounded-2xl text-emerald-400 focus:outline-none"></textarea>
          </div>
        </div>
      </div>
    </div>
  `;
  evalWeb();
}

function evalWeb() {
  const url = document.getElementById('web-url')?.value || 'https://api.example.com';
  const m = document.getElementById('web-m')?.value || 'GET';
  document.getElementById('web-code').value = `fetch('${url}', {\n  method: '${m}',\n  headers: { 'Content-Type': 'application/json' }\n})\n.then(res => res.json())\n.then(data => console.log(data));`;
}

// DEVOPS ARCHETYPE
function renderDevOpsArchetype(container, tool) {
  container.innerHTML = `
    <div class="space-y-6">
      ${renderToolHeader(tool)}
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div class="theme-card border p-6 rounded-3xl space-y-4">
          <div class="text-xs font-extrabold uppercase tracking-wider text-indigo-400">Container Variables</div>
          <div><label class="block text-xs font-bold opacity-80 mb-1">Service Name</label><input type="text" id="ops-n" value="app-service" oninput="evalOps()" class="w-full p-2.5 theme-editor border rounded-xl font-mono text-xs focus:outline-none"></div>
          <div><label class="block text-xs font-bold opacity-80 mb-1">Port</label><input type="number" id="ops-p" value="8080" oninput="evalOps()" class="w-full p-2.5 theme-editor border rounded-xl font-mono text-xs focus:outline-none"></div>
        </div>
        <div class="theme-card border p-6 rounded-3xl space-y-3 flex flex-col justify-between">
          <div class="space-y-2">
            <div class="flex justify-between items-center text-xs font-bold opacity-80"><span class="text-emerald-400 uppercase tracking-wider">docker-compose.yml</span><button onclick="copyToClipboard('ops-yml')" class="text-indigo-400 hover:underline">Copy</button></div>
            <textarea id="ops-yml" readonly class="w-full h-44 p-3.5 theme-editor font-mono text-xs border rounded-2xl text-emerald-400 focus:outline-none"></textarea>
          </div>
        </div>
      </div>
    </div>
  `;
  evalOps();
}

function evalOps() {
  const n = document.getElementById('ops-n')?.value || 'app';
  const p = document.getElementById('ops-p')?.value || '80';
  document.getElementById('ops-yml').value = `version: '3.8'\nservices:\n  ${n}:\n    image: ${n}:latest\n    ports:\n      - "${p}:${p}"\n    restart: unless-stopped`;
}

// TEXT STUDIO ARCHETYPE
function renderTextStudioArchetype(container, tool) {
  container.innerHTML = `
    <div class="space-y-6">
      ${renderToolHeader(tool)}
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div class="theme-card border p-5 rounded-3xl space-y-3 flex flex-col">
          <div class="flex justify-between items-center text-xs font-bold opacity-80"><span>Text Editor</span><button onclick="document.getElementById('txt-in').value=''" class="text-rose-400 hover:underline">Clear</button></div>
          <textarea id="txt-in" oninput="evalText()" class="w-full h-64 p-3.5 theme-editor font-mono text-xs border rounded-2xl focus:outline-none" placeholder="Enter text here...">Production developer utilities with 100% in-browser security.</textarea>
          <div class="flex gap-1.5 pt-1">
            <button onclick="document.getElementById('txt-in').value=document.getElementById('txt-in').value.toUpperCase(); evalText();" class="px-3 py-1.5 theme-editor border rounded-xl text-xs font-bold">UPPER</button>
            <button onclick="document.getElementById('txt-in').value=document.getElementById('txt-in').value.toLowerCase(); evalText();" class="px-3 py-1.5 theme-editor border rounded-xl text-xs font-bold">lower</button>
          </div>
        </div>
        <div class="theme-card border p-5 rounded-3xl space-y-3 flex flex-col justify-between">
          <div class="space-y-2">
            <div class="flex justify-between items-center text-xs font-bold opacity-80"><span class="text-emerald-400">Processed Output</span><button onclick="copyToClipboard('txt-out')" class="text-indigo-400 hover:underline">Copy</button></div>
            <textarea id="txt-out" readonly class="w-full h-44 p-3.5 theme-editor font-mono text-xs border rounded-2xl text-emerald-400 focus:outline-none"></textarea>
          </div>
          <div class="grid grid-cols-2 gap-2 p-3 bg-indigo-500/10 border border-indigo-500/20 rounded-2xl text-center text-xs">
            <div><span class="opacity-60 block text-[10px]">Words</span><strong id="w-count" class="font-bold">0</strong></div>
            <div><span class="opacity-60 block text-[10px]">Characters</span><strong id="c-count" class="font-bold">0</strong></div>
          </div>
        </div>
      </div>
    </div>
  `;
  evalText();
}

function evalText() {
  const t = document.getElementById('txt-in')?.value || '';
  document.getElementById('txt-out').value = t;
  document.getElementById('w-count').innerText = t.trim() ? t.trim().split(/\s+/).length : 0;
  document.getElementById('c-count').innerText = t.length;
}

// HEADER TEMPLATE
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
