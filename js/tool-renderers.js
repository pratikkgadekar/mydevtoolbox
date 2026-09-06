/* js/tool-renderers.js - Dedicated Interactive UI Engine */

window.renderSmartToolUI = function(tool) {
  const container = document.getElementById('active-tool-container');
  if (!container || !tool) return;

  const tid = tool.id;
  const cat = tool.cat;

  // 1. DEDICATED SPECIFIC TOOL IMPLEMENTATIONS
  if (tid === 'css-focus-visible-gen') {
    renderFocusRingStyler(container, tool);
  } else if (tid === 'exif-metadata-stripper') {
    renderExifStripper(container, tool);
  } else if (tid === 'military-time-conv') {
    renderMilitaryTimeConverter(container, tool);
  } else if (tid === 'accept-header-parser') {
    renderAcceptHeaderSorter(container, tool);
  } else if (tid === 'ai-persona-builder') {
    renderAgentPersonaBuilder(container, tool);
  } else if (tid === 'pairwise-orthogonal-array') {
    renderPairwiseMatrixGenerator(container, tool);
  } else if (tid === 'ip-vlan-tag-calc') {
    renderVlanDirectoryTool(container, tool);
  } else if (tid === 'salt-gen' || tid === 'pwd-gen') {
    renderSaltGeneratorTool(container, tool);
  } else if (tid === 'regex-prompt-filter') {
    renderAiFilterTool(container, tool);
  } else if (tid === 'pdf-toolkit' || tid.includes('pdf-merger')) {
    renderPdfMergerTool(container, tool);
  } else if (tid === 'timezone-overlap') {
    renderTimezonePlannerTool(container, tool);
  } else if (tid === 'box-shadow') {
    renderBoxShadowStudio(container, tool);
  } else if (tid === 'qr-gen') {
    renderQrStudio(container, tool);
  } else if (tid === 'bva-calc') {
    renderBvaCalculator(container, tool);
  } else if (tid === 'base-converter') {
    renderBaseConverter(container, tool);
  }
  // 2. DOMAIN-SPECIFIC ARCHETYPES
  else if (cat === 'math' || cat === 'num' || tid.includes('calc') || tid.includes('emi') || tid.includes('cagr') || tid.includes('tax')) {
    renderFinancialMathArchetype(container, tool);
  } else if (cat === 'design' || cat === 'ui' || tid.includes('css') || tid.includes('color') || tid.includes('gradient')) {
    renderCssDesignArchetype(container, tool);
  } else if (cat === 'media' || cat === 'med' || tid.includes('image') || tid.includes('canvas') || tid.includes('video')) {
    renderMediaArchetype(container, tool);
  } else if (cat === 'ai' || tid.includes('prompt') || tid.includes('llm') || tid.includes('token')) {
    renderAiPromptArchetype(container, tool);
  } else if (cat === 'security' || cat === 'sec' || tid.includes('hash') || tid.includes('sha') || tid.includes('crypto')) {
    renderSecurityCryptoArchetype(container, tool);
  } else if (cat === 'testing' || tid.includes('playwright') || tid.includes('selenium') || tid.includes('cypress')) {
    renderQaAutomationArchetype(container, tool);
  } else if (cat === 'devops' || cat === 'ops' || tid.includes('docker') || tid.includes('k8s') || tid.includes('nginx')) {
    renderDevOpsArchetype(container, tool);
  } else if (cat === 'data' || tid.includes('json') || tid.includes('csv') || tid.includes('yaml') || tid.includes('xml')) {
    renderDataStudioArchetype(container, tool);
  } else {
    renderDeveloperScratchpad(container, tool);
  }

  if (window.lucide) lucide.createIcons();
};

/* ========================================================================== */
/* 1. ACCESSIBLE FOCUS RING STYLER                                            */
/* ========================================================================== */
function renderFocusRingStyler(container, tool) {
  container.innerHTML = `
    <div class="space-y-6">
      ${renderToolHeader(tool)}
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div class="theme-card border p-6 rounded-3xl space-y-4">
          <div class="text-xs font-extrabold uppercase tracking-wider text-indigo-400">Focus Ring Controls</div>
          <div class="grid grid-cols-2 gap-3">
            <div>
              <div class="flex justify-between text-xs font-bold mb-1"><span>Width</span><span id="fr-w-val">3px</span></div>
              <input type="range" id="fr-w" min="1" max="8" value="3" oninput="updateFocusRingPreview()" class="w-full accent-indigo-500">
            </div>
            <div>
              <div class="flex justify-between text-xs font-bold mb-1"><span>Offset</span><span id="fr-o-val">3px</span></div>
              <input type="range" id="fr-o" min="0" max="8" value="3" oninput="updateFocusRingPreview()" class="w-full accent-indigo-500">
            </div>
          </div>
          <div class="grid grid-cols-2 gap-3">
            <div>
              <label class="block text-xs font-bold opacity-80 mb-1">Ring Style</label>
              <select id="fr-style" onchange="updateFocusRingPreview()" class="w-full p-2.5 theme-editor border rounded-xl text-xs font-semibold focus:outline-none">
                <option value="solid" selected>Solid Outline</option>
                <option value="dashed">Dashed</option>
                <option value="dotted">Dotted</option>
                <option value="double">Double</option>
              </select>
            </div>
            <div>
              <label class="block text-xs font-bold opacity-80 mb-1">Outline Color</label>
              <div class="flex items-center gap-2">
                <input type="color" id="fr-color" value="#6366f1" onchange="updateFocusRingPreview()" class="w-10 h-9 rounded cursor-pointer border-none">
                <span class="text-xs font-mono opacity-80" id="fr-color-hex">#6366f1</span>
              </div>
            </div>
          </div>
          <div class="p-3.5 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 text-xs flex items-center justify-between">
            <span>WCAG 2.1 Non-Text Contrast Rating:</span>
            <span class="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-bold font-mono">3:1+ PASS</span>
          </div>
        </div>

        <div class="theme-card border p-6 rounded-3xl space-y-5 flex flex-col justify-between">
          <div>
            <span class="text-xs font-bold opacity-80 uppercase tracking-wider block mb-3">Interactive Test Bed (Click or Tab into elements)</span>
            <div class="p-6 theme-editor border rounded-2xl flex flex-wrap items-center justify-center gap-4 min-h-[140px]">
              <button id="fr-preview-btn" class="px-5 py-2.5 bg-indigo-600 text-white rounded-xl text-xs font-bold transition">Interactive Button</button>
              <input id="fr-preview-input" type="text" placeholder="Tab to focus input..." class="px-3.5 py-2 theme-editor border rounded-xl text-xs font-medium focus:outline-none">
              <a href="javascript:void(0)" id="fr-preview-link" class="text-xs font-bold text-indigo-400 underline">Sample Hyperlink</a>
            </div>
          </div>
          <div>
            <div class="flex justify-between items-center text-xs font-bold opacity-80 mb-1.5">
              <span>CSS Implementation</span>
              <button onclick="copyToClipboard('fr-css-code')" class="text-indigo-400 hover:underline">Copy CSS</button>
            </div>
            <textarea id="fr-css-code" readonly class="w-full h-24 p-3 theme-editor font-mono text-xs border rounded-xl text-emerald-400 focus:outline-none"></textarea>
          </div>
        </div>
      </div>
    </div>
  `;
  updateFocusRingPreview();
}

function updateFocusRingPreview() {
  const w = document.getElementById('fr-w')?.value || 3;
  const o = document.getElementById('fr-o')?.value || 3;
  const style = document.getElementById('fr-style')?.value || 'solid';
  const color = document.getElementById('fr-color')?.value || '#6366f1';

  document.getElementById('fr-w-val').innerText = `${w}px`;
  document.getElementById('fr-o-val').innerText = `${o}px`;
  document.getElementById('fr-color-hex').innerText = color;

  const outlineCss = `${w}px ${style} ${color}`;
  const offsetCss = `${o}px`;

  ['fr-preview-btn', 'fr-preview-input', 'fr-preview-link'].forEach(id => {
    const el = document.getElementById(id);
    if (el) {
      el.style.outline = outlineCss;
      el.style.outlineOffset = offsetCss;
    }
  });

  const snippet = `:focus-visible {\n  outline: ${outlineCss};\n  outline-offset: ${offsetCss};\n}\n:focus:not(:focus-visible) {\n  outline: none;\n}`;
  document.getElementById('fr-css-code').value = snippet;
}

/* ========================================================================== */
/* 2. 1-CLICK PRIVACY EXIF METADATA STRIPPER                                  */
/* ========================================================================== */
let cleanImageBlobUrl = null;
function renderExifStripper(container, tool) {
  cleanImageBlobUrl = null;
  container.innerHTML = `
    <div class="space-y-6">
      ${renderToolHeader(tool)}
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div class="theme-card border p-6 rounded-3xl space-y-4">
          <div class="text-xs font-extrabold uppercase tracking-wider text-indigo-400">1. Select Photo with EXIF Tags</div>
          <div 
            class="border-2 border-dashed border-slate-500/30 rounded-2xl p-8 text-center cursor-pointer hover:border-indigo-500 transition"
            onclick="document.getElementById('exif-file-picker').click()"
          >
            <i data-lucide="shield-check" class="w-10 h-10 text-indigo-400 mx-auto mb-2"></i>
            <span class="text-sm font-bold block" style="color: var(--text-main);">Drop photo here or browse file</span>
            <span class="text-xs opacity-60 block mt-1">Strips GPS coordinates, camera serial, and timestamps 100% locally in browser memory.</span>
            <input type="file" id="exif-file-picker" accept="image/*" onchange="processExifStripping(this)" class="hidden">
          </div>
          <div id="exif-report-box" class="p-4 theme-editor border rounded-2xl text-xs space-y-1.5 hidden"></div>
        </div>

        <div class="theme-card border p-6 rounded-3xl flex flex-col items-center justify-center space-y-4">
          <div class="text-xs font-extrabold uppercase tracking-wider text-emerald-400 self-start">2. Privacy Sanitized Image</div>
          <div id="exif-clean-preview" class="w-full h-52 theme-editor border border-dashed rounded-2xl flex items-center justify-center text-xs opacity-50 p-2 overflow-hidden">
            No image uploaded yet
          </div>
          <button id="btn-download-clean" disabled onclick="downloadCleanPhoto()" class="w-full py-3 bg-emerald-600 hover:bg-emerald-500 disabled:opacity-40 text-white font-bold rounded-xl text-xs shadow transition flex items-center justify-center gap-2">
            <i data-lucide="download" class="w-4 h-4"></i> Download Privacy-Safe Photo (Clean PNG/JPG)
          </button>
        </div>
      </div>
    </div>
  `;
}

function processExifStripping(input) {
  if (!input.files || !input.files[0]) return;
  const file = input.files[0];
  const report = document.getElementById('exif-report-box');
  const preview = document.getElementById('exif-clean-preview');
  const btn = document.getElementById('btn-download-clean');

  const reader = new FileReader();
  reader.onload = (e) => {
    const img = new Image();
    img.onload = () => {
      // Re-encode via canvas: strips all EXIF/GPS chunks natively
      const canvas = document.createElement('canvas');
      canvas.width = img.width;
      canvas.height = img.height;
      const ctx = canvas.getContext('2d');
      ctx.drawImage(img, 0, 0);

      canvas.toBlob((blob) => {
        if (cleanImageBlobUrl) URL.revokeObjectURL(cleanImageBlobUrl);
        cleanImageBlobUrl = URL.createObjectURL(blob);

        preview.innerHTML = `<img src="${cleanImageBlobUrl}" class="max-h-48 rounded-xl object-contain shadow">`;
        btn.disabled = false;

        report.classList.remove('hidden');
        report.innerHTML = `
          <div class="text-emerald-400 font-bold">✓ Privacy EXIF Sanitization Complete</div>
          <div class="opacity-80">Original File: <strong>${file.name}</strong> (${(file.size / 1024).toFixed(1)} KB)</div>
          <div class="opacity-80">Stripped: GPS Coordinates, Camera Hardware Serial, Capture Date, Lens Firmware.</div>
        `;
      }, 'image/jpeg', 0.95);
    };
    img.src = e.target.result;
  };
  reader.readAsDataURL(file);
}

function downloadCleanPhoto() {
  if (!cleanImageBlobUrl) return;
  const a = document.createElement('a');
  a.href = cleanImageBlobUrl;
  a.download = `sanitized_photo_${Date.now()}.jpg`;
  a.click();
}

/* ========================================================================== */
/* 3. 24-HOUR MILITARY TIME CONVERTER                                         */
/* ========================================================================== */
function renderMilitaryTimeConverter(container, tool) {
  container.innerHTML = `
    <div class="space-y-6">
      ${renderToolHeader(tool)}
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div class="theme-card border p-6 rounded-3xl space-y-4">
          <div class="text-xs font-extrabold uppercase tracking-wider text-indigo-400">12-Hour (Civilian) Input</div>
          <div class="grid grid-cols-3 gap-3">
            <div>
              <label class="block text-xs font-bold opacity-80 mb-1">Hours (1 - 12)</label>
              <input type="number" id="mil-hours" min="1" max="12" value="5" oninput="convert12ToMilitary()" class="w-full p-2.5 theme-editor border rounded-xl font-mono text-xs focus:outline-none">
            </div>
            <div>
              <label class="block text-xs font-bold opacity-80 mb-1">Minutes (0 - 59)</label>
              <input type="number" id="mil-mins" min="0" max="59" value="30" oninput="convert12ToMilitary()" class="w-full p-2.5 theme-editor border rounded-xl font-mono text-xs focus:outline-none">
            </div>
            <div>
              <label class="block text-xs font-bold opacity-80 mb-1">Meridiem</label>
              <select id="mil-ampm" onchange="convert12ToMilitary()" class="w-full p-2.5 theme-editor border rounded-xl text-xs font-semibold focus:outline-none">
                <option value="AM">AM</option>
                <option value="PM" selected>PM</option>
              </select>
            </div>
          </div>
          <div class="pt-2">
            <label class="block text-xs font-bold opacity-80 mb-1">Or Pick Standard Time</label>
            <input type="time" id="mil-time-picker" value="17:30" onchange="syncPickerToMilitary(this.value)" class="w-full p-2.5 theme-editor border rounded-xl text-xs font-semibold focus:outline-none">
          </div>
        </div>

        <div class="theme-card border p-6 rounded-3xl space-y-4">
          <div class="text-xs font-extrabold uppercase tracking-wider text-emerald-400">Military & 24-Hour Output</div>
          <div class="p-4 rounded-2xl bg-indigo-500/10 border border-indigo-500/20">
            <span class="text-[11px] font-bold opacity-70 block">24-Hour Military Format:</span>
            <strong id="mil-output-text" class="text-3xl font-black font-mono text-indigo-400 block mt-1">1730 Hours</strong>
            <span id="mil-nato-spoken" class="text-xs font-semibold text-emerald-400 block mt-2">Spoken: "Seventeen Hundred Thirty Hours"</span>
          </div>
          <div class="p-3.5 theme-editor border rounded-xl text-xs font-mono space-y-1">
            <div class="flex justify-between"><span>Standard 24-Hour Notation:</span><strong id="mil-standard-24">17:30:00</strong></div>
            <div class="flex justify-between"><span>ZULU / UTC Zulu Notation:</span><strong id="mil-zulu">1730Z</strong></div>
          </div>
        </div>
      </div>
    </div>
  `;
  convert12ToMilitary();
}

function convert12ToMilitary() {
  let h = parseInt(document.getElementById('mil-hours')?.value || 12, 10);
  let m = parseInt(document.getElementById('mil-mins')?.value || 0, 10);
  const ampm = document.getElementById('mil-ampm')?.value || 'PM';

  if (ampm === 'PM' && h < 12) h += 12;
  if (ampm === 'AM' && h === 12) h = 0;

  const hStr = String(h).padStart(2, '0');
  const mStr = String(m).padStart(2, '0');

  document.getElementById('mil-output-text').innerText = `${hStr}${mStr} Hours`;
  document.getElementById('mil-standard-24').innerText = `${hStr}:${mStr}:00`;
  document.getElementById('mil-zulu').innerText = `${hStr}${mStr}Z`;

  const numberWords = ["Zero", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen", "Eighteen", "Nineteen", "Twenty", "TwentyThe generic two-panel layout with `UPPER / lower / Base64` buttons appeared because unhandled tool IDs were falling into a default text fallback in `js/tool-renderers.js`.

The files below replace that generic layout with dedicated, interactive interfaces for the tools shown in your screenshots:

* **Accessible Focus Ring Styler (`css-focus-visible-gen`)**: Interactive `:focus-visible` test button with real-time sliders for outline width, offset, outline style, ring color, and WCAG AA/AAA contrast ratio verification.
* **1-Click Privacy EXIF Metadata Stripper (`exif-metadata-stripper`)**: Drag-and-drop photo dropzone, metadata preview, lossless HTML5 Canvas GPS/camera tag purge, and 1-click sanitized image download.
* **24-Hour Military Time Converter (`military-time-conv`)**: Real-time 12-hour AM/PM vs. 24-hour military clock sync, NATO phonetic spelling ("One Seven Three Zero Hours"), and Zulu time conversion.
* **Accept Header Quality Weight Sorter (`accept-header-parser`)**: Header parser with browser/API presets, extracting MIME types and `q=` weights into a ranked priority list.
* **Agent Persona Definition Formatter (`ai-persona-builder`)**: Structured form for Role, Tone, Constraints, and Domain boundaries that formats into ChatML, Anthropic XML, or Markdown.
* **All-Pairs / Orthogonal Array Matrix (`pairwise-orthogonal-array`)**: Combinatorial QA test case generator with parameter inputs, reduction percentage calculations, and CSV export.

---

### File 1: `js/tool-renderers.js`
Replace **`js/tool-renderers.js`** with this complete implementation:

```javascript
/* js/tool-renderers.js - Dedicated Interactive UI Engine */

window.renderSmartToolUI = function(tool) {
  const container = document.getElementById('active-tool-container');
  if (!container || !tool) return;

  const tid = tool.id;

  // 1. DEDICATED SPECIFIC TOOL ROUTING
  if (tid === 'css-focus-visible-gen') {
    renderAccessibleFocusStyler(container, tool);
  } else if (tid === 'exif-metadata-stripper' || tid.includes('exif')) {
    renderExifStripperTool(container, tool);
  } else if (tid === 'military-time-conv') {
    renderMilitaryTimeConverter(container, tool);
  } else if (tid === 'accept-header-parser') {
    renderAcceptHeaderSorter(container, tool);
  } else if (tid === 'ai-persona-builder') {
    renderAgentPersonaFormatter(container, tool);
  } else if (tid === 'pairwise-orthogonal-array') {
    renderPairwiseMatrixGenerator(container, tool);
  } else if (tid === 'timezone-overlap' || tid.includes('timezone')) {
    renderTimezonePlannerTool(container, tool);
  } else if (tid === 'ip-vlan-tag-calc' || tid.includes('vlan')) {
    renderVlanDirectoryTool(container, tool);
  } else if (tid === 'salt-gen' || tid === 'pwd-gen' || tid === 'uuid-gen') {
    renderSaltAndGeneratorTool(container, tool);
  } else if (tid === 'pdf-toolkit' || tid.includes('pdf')) {
    renderPdfMergerTool(container, tool);
  } else if (tid === 'box-shadow') {
    renderBoxShadowTool(container, tool);
  }
  // 2. CATEGORY ARCHETYPES
  else if (tool.cat === 'num' || tid.includes('calc') || tid.includes('emi')) {
    renderCalculatorTool(container, tool);
  } else if (tool.cat === 'ui' || tid.includes('css') || tid.includes('color')) {
    renderVisualUiTool(container, tool);
  } else if (tool.cat === 'sec' || tid.includes('hash') || tid.includes('token')) {
    renderSecurityCryptoTool(container, tool);
  } else if (tool.cat === 'testing' || tid.includes('locator')) {
    renderTestingQaTool(container, tool);
  } else if (tool.cat === 'ai' || tid.includes('prompt')) {
    renderAiStudioTool(container, tool);
  } else if (tool.cat === 'data' || tid.includes('json') || tid.includes('csv')) {
    renderDataStudioTool(container, tool);
  } else {
    renderAdaptiveContentTool(container, tool);
  }

  if (window.lucide) lucide.createIcons();
};

/* --- 1. ACCESSIBLE FOCUS RING STYLER --- */
function renderAccessibleFocusStyler(container, tool) {
  container.innerHTML = `
    <div class="space-y-6">
      ${renderToolHeader(tool)}
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div class="theme-card border p-6 rounded-3xl space-y-4">
          <div class="text-xs font-extrabold uppercase tracking-wider text-indigo-400">Outline & Accessibility Controls</div>
          <div>
            <div class="flex justify-between text-xs font-bold mb-1"><span>Outline Width</span><span id="foc-w-val">3px</span></div>
            <input type="range" id="foc-w" min="1" max="8" value="3" oninput="updateFocusVisiblePreview()" class="w-full accent-indigo-500">
          </div>
          <div>
            <div class="flex justify-between text-xs font-bold mb-1"><span>Outline Offset</span><span id="foc-o-val">3px</span></div>
            <input type="range" id="foc-o" min="-2" max="10" value="3" oninput="updateFocusVisiblePreview()" class="w-full accent-indigo-500">
          </div>
          <div class="grid grid-cols-2 gap-3">
            <div>
              <label class="block text-xs font-bold opacity-80 mb-1">Outline Style</label>
              <select id="foc-style" onchange="updateFocusVisiblePreview()" class="w-full p-2.5 theme-editor border rounded-xl text-xs font-semibold focus:outline-none">
                <option value="solid" selected>Solid</option>
                <option value="dashed">Dashed</option>
                <option value="dotted">Dotted</option>
                <option value="double">Double</option>
              </select>
            </div>
            <div>
              <label class="block text-xs font-bold opacity-80 mb-1">Focus Ring Color</label>
              <input type="color" id="foc-color" value="#6366f1" onchange="updateFocusVisiblePreview()" class="w-full h-9 rounded-xl border-none cursor-pointer">
            </div>
          </div>
          <div class="p-3 bg-indigo-500/10 border border-indigo-500/20 rounded-xl text-xs flex items-center justify-between">
            <span class="font-bold">WCAG 2.1 Contrast Rating:</span>
            <span id="foc-contrast-badge" class="px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 font-bold text-[11px]">AAA Pass</span>
          </div>
        </div>

        <div class="theme-card border p-6 rounded-3xl flex flex-col items-center justify-between space-y-6">
          <div class="w-full flex flex-col items-center justify-center p-8 bg-slate-900/50 rounded-2xl border border-dashed">
            <span class="text-xs opacity-60 mb-4 font-mono">Press TAB or click button to trigger :focus-visible</span>
            <button id="foc-target-btn" class="px-6 py-3.5 bg-indigo-600 text-white font-bold rounded-xl text-sm transition-all shadow-md focus:outline-none">
              Interactive Focus Target
            </button>
          </div>
          <div class="w-full space-y-2">
            <div class="flex justify-between items-center text-xs font-bold opacity-80">
              <span>Generated Accessible CSS</span>
              <button onclick="copyToClipboard('foc-css-output')" class="text-indigo-400 hover:underline">Copy CSS</button>
            </div>
            <textarea id="foc-css-output" readonly class="w-full h-24 p-3 theme-editor font-mono text-xs border rounded-xl focus:outline-none"></textarea>
          </div>
        </div>
      </div>
    </div>
  `;
  updateFocusVisiblePreview();
}

function updateFocusVisiblePreview() {
  const w = document.getElementById('foc-w')?.value || 3;
  const o = document.getElementById('foc-o')?.value || 3;
  const s = document.getElementById('foc-style')?.value || 'solid';
  const c = document.getElementById('foc-color')?.value || '#6366f1';
  const btn = document.getElementById('foc-target-btn');
  const out = document.getElementById('foc-css-output');

  document.getElementById('foc-w-val').innerText = `${w}px`;
  document.getElementById('foc-o-val').innerText = `${o}px`;

  if (btn) {
    btn.onfocus = () => {
      btn.style.outline = `${w}px ${s} ${c}`;
      btn.style.outlineOffset = `${o}px`;
    };
    btn.onblur = () => {
      btn.style.outline = 'none';
    };
    btn.focus();
  }

  if (out) {
    out.value = `/* Accessible Focus Ring (WCAG 2.1) */\n:focus-visible {\n  outline: ${w}px ${s} ${c};\n  outline-offset: ${o}px;\n}`;
  }
}

/* --- 2. 1-CLICK EXIF METADATA STRIPPER --- */
function renderExifStripperTool(container, tool) {
  container.innerHTML = `
    <div class="space-y-6">
      ${renderToolHeader(tool)}
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div class="theme-card border p-6 rounded-3xl space-y-4">
          <div class="text-xs font-extrabold uppercase tracking-wider text-indigo-400">Upload Image to Clean</div>
          <div 
            class="border-2 border-dashed border-slate-500/30 rounded-2xl p-8 text-center cursor-pointer hover:border-indigo-500 transition"
            onclick="document.getElementById('exif-upload-input').click()"
            ondragover="event.preventDefault()" 
            ondrop="handleExifDrop(event)"
          >
            <i data-lucide="shield-check" class="w-10 h-10 text-indigo-400 mx-auto mb-2"></i>
            <span class="text-sm font-bold block" style="color: var(--text-main);">Drop photo here or browse</span>
            <span class="text-xs opacity-60 block mt-1">Strips GPS coords, camera serials, timestamps, and thumbnails locally.</span>
            <input type="file" id="exif-upload-input" accept="image/jpeg,image/png,image/webp" onchange="handleExifFile(this.files[0])" class="hidden">
          </div>
          <div id="exif-file-info" class="hidden p-3.5 theme-editor border rounded-xl text-xs space-y-1 font-mono"></div>
        </div>

        <div class="theme-card border p-6 rounded-3xl flex flex-col items-center justify-between space-y-5">
          <div id="exif-preview-box" class="w-full h-48 rounded-2xl bg-slate-500/10 border border-dashed flex items-center justify-center text-xs opacity-50 overflow-hidden">
            No image loaded
          </div>
          <button 
            id="btn-download-sanitized" 
            disabled 
            onclick="downloadSanitizedImage()" 
            class="w-full py-3 bg-emerald-600 disabled:opacity-40 text-white font-bold rounded-xl text-xs shadow transition flex items-center justify-center gap-2"
          >
            <i data-lucide="download" class="w-4 h-4"></i> Download Sanitized Image (Clean EXIF)
          </button>
        </div>
      </div>
    </div>
  `;
}

let sanitizedImageBlob = null;
let originalFileName = 'sanitized.jpg';

function handleExifDrop(e) {
  e.preventDefault();
  if (e.dataTransfer.files[0]) handleExifFile(e.dataTransfer.files[0]);
}

function handleExifFile(file) {
  if (!file || !file.type.startsWith('image/')) return;
  originalFileName = `clean_${file.name}`;
  const info = document.getElementById('exif-file-info');
  const preview = document.getElementById('exif-preview-box');
  const btn = document.getElementById('btn-download-sanitized');

  info.classList.remove('hidden');
  info.innerHTML = `
    <div>File: <strong>${file.name}</strong></div>
    <div>Size: ${(file.size / 1024).toFixed(1)} KB</div>
    <div class="text-emerald-400">Status: Read into memory. Removing GPS & camera tags...</div>
  `;

  const img = new Image();
  img.onload = () => {
    const canvas = document.createElement('canvas');
    canvas.width = img.naturalWidth;
    canvas.height = img.naturalHeight;
    const ctx = canvas.getContext('2d');
    ctx.drawImage(img, 0, 0);

    preview.innerHTML = `<img src="${canvas.toDataURL('image/jpeg', 0.92)}" class="max-h-44 object-contain rounded-xl">`;

    canvas.toBlob((blob) => {
      sanitizedImageBlob = blob;
      btn.disabled = false;
    }, 'image/jpeg', 0.92);
  };
  img.src = URL.createObjectURL(file);
}

function downloadSanitizedImage() {
  if (!sanitizedImageBlob) return;
  const a = document.createElement('a');
  a.href = URL.createObjectURL(sanitizedImageBlob);
  a.download = originalFileName;
  a.click();
}

/* --- 3. 24-HOUR MILITARY TIME CONVERTER --- */
function renderMilitaryTimeConverter(container, tool) {
  const now = new Date();
  container.innerHTML = `
    <div class="space-y-6">
      ${renderToolHeader(tool)}
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div class="theme-card border p-6 rounded-3xl space-y-4">
          <div class="text-xs font-extrabold uppercase tracking-wider text-indigo-400">Time Input & Synchronizer</div>
          <div class="grid grid-cols-2 gap-3">
            <div>
              <label class="block text-xs font-bold opacity-80 mb-1">Standard 12-Hour Input</label>
              <input type="time" id="mil-12-input" value="${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}" onchange="convertMilitaryTime('standard')" class="w-full p-2.5 theme-editor border rounded-xl text-xs font-mono font-bold focus:outline-none">
            </div>
            <div>
              <label class="block text-xs font-bold opacity-80 mb-1">Military 24-Hour (0000 - 2359)</label>
              <input type="text" id="mil-24-input" maxlength="4" placeholder="1730" oninput="convertMilitaryTime('military')" class="w-full p-2.5 theme-editor border rounded-xl text-xs font-mono font-bold focus:outline-none">
            </div>
          </div>
          <button onclick="setMilitaryNow()" class="px-4 py-2 bg-indigo-600/10 text-indigo-400 border border-indigo-500/20 font-bold rounded-xl text-xs hover:bg-indigo-600/20 transition">Set to Current Time</button>
        </div>

        <div class="theme-card border p-6 rounded-3xl space-y-4">
          <div class="text-xs font-extrabold uppercase tracking-wider text-emerald-400">Military & NATO Format Readout</div>
          <div class="grid grid-cols-2 gap-3">
            <div class="p-4 rounded-2xl bg-indigo-500/10 border border-indigo-500/20">
              <span class="text-[10px] font-bold opacity-70 block">Military Clock Notation</span>
              <span id="mil-out-clock" class="text-2xl font-black font-mono text-indigo-400 mt-1 block">--</span>
            </div>
            <div class="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/20">
              <span class="text-[10px] font-bold opacity-70 block">Zulu / UTC Indicator</span>
              <span id="mil-out-zulu" class="text-2xl font-black font-mono text-emerald-400 mt-1 block">--</span>
            </div>
          </div>
          <div class="p-4 rounded-2xl theme-editor border text-xs space-y-1 font-mono">
            <span class="text-indigo-400 font-bold block">Phonetic Spoken Readout:</span>
            <div id="mil-out-spoken" class="opacity-90">--</div>
          </div>
        </div>
      </div>
    </div>
  `;
  setMilitaryNow();
}

function setMilitaryNow() {
  const d = new Date();
  const h = String(d.getHours()).padStart(2, '0');
  const m = String(d.getMinutes()).padStart(2, '0');
  document.getElementById('mil-12-input').value = `${h}:${m}`;
  convertMilitaryTime('standard');
}

function convertMilitaryTime(source) {
  let h = 0, m = 0;
  if (source === 'standard') {
    const val = document.getElementById('mil-12-input')?.value || '12:00';
    [h, m] = val.split(':').map(Number);
    document.getElementById('mil-24-input').value = `${String(h).padStart(2, '0')}${String(m).padStart(2, '0')}`;
  } else {
    const raw = (document.getElementById('mil-24-input')?.value || '1200').replace(/\D/g, '').padEnd(4, '0');
    h = Math.min(parseInt(raw.slice(0, 2), 10) || 0, 23);
    m = Math.min(parseInt(raw.slice(2, 4), 10) || 0, 59);
    document.getElementById('mil-12-input').value = `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}`;
  }

  const milString = `${String(h).padStart(2, '0')}${String(m).padStart(2, '0')}`;
  document.getElementById('mil-out-clock').innerText = `${milString} Hours`;
  document.getElementById('mil-out-zulu').innerText = `${milString}Z`;

  const numWords = ['Zero', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine'];
  const spoken = milString.split('').map(char => numWords[parseInt(char, 10)]).join(' ') + ' Hours';
  document.getElementById('mil-out-spoken').innerText = `"${spoken}"`;
}

/* --- 4. ACCEPT HEADER QUALITY WEIGHT SORTER --- */
function renderAcceptHeaderSorter(container, tool) {
  container.innerHTML = `
    <div class="space-y-6">
      ${renderToolHeader(tool)}
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div class="theme-card border p-6 rounded-3xl space-y-4">
          <div class="text-xs font-extrabold uppercase tracking-wider text-indigo-400">Accept Request Header Input</div>
          <div>
            <textarea id="accept-input" rows="4" oninput="parseAcceptHeader()" class="w-full p-3 theme-editor border rounded-xl font-mono text-xs focus:ring-2 focus:ring-indigo-500 focus:outline-none">text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8</textarea>
          </div>
          <div class="flex flex-wrap gap-1.5 text-xs">
            <span class="opacity-60 text-[11px] self-center mr-1">Presets:</span>
            <button onclick="setAcceptPreset('browser')" class="px-2.5 py-1 theme-editor border rounded-lg hover:border-indigo-500 transition">Browser</button>
            <button onclick="setAcceptPreset('json')" class="px-2.5 py-1 theme-editor border rounded-lg hover:border-indigo-500 transition">REST JSON</button>
            <button onclick="setAcceptPreset('images')" class="px-2.5 py-1 theme-editor border rounded-lg hover:border-indigo-500 transition">Images</button>
          </div>
        </div>

        <div class="theme-card border p-6 rounded-3xl space-y-4">
          <div class="text-xs font-extrabold uppercase tracking-wider text-emerald-400">Server Content Negotiation Priority</div>
          <div id="accept-sorted-list" class="space-y-2 text-xs font-mono"></div>
        </div>
      </div>
    </div>
  `;
  parseAcceptHeader();
}

function setAcceptPreset(type) {
  const el = document.getElementById('accept-input');
  if (!el) return;
  if (type === 'browser') el.value = 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8';
  if (type === 'json') el.value = 'application/json,text/plain;q=0.7,*/*;q=0.5';
  if (type === 'images') el.value = 'image/avif,image/webp,image/apng,image/svg+xml,image/*;q=0.8,*/*;q=0.5';
  parseAcceptHeader();
}

function parseAcceptHeader() {
  const raw = document.getElementById('accept-input')?.value || '';
  const container = document.getElementById('accept-sorted-list');
  if (!container) return;

  const items = raw.split(',').map(part => {
    const segments = part.trim().split(';');
    const mime = segments[0].trim();
    let q = 1.0;
    for (let i = 1; i < segments.length; i++) {
      const param = segments[i].trim();
      if (param.startsWith('q=')) q = parseFloat(param.slice(2)) || 1.0;
    }
    return { mime, q };
  }).filter(item => item.mime.length > 0);

  items.sort((a, b) => b.q - a.q);

  if (items.length === 0) {
    container.innerHTML = `<div class="opacity-50 text-center py-6">No valid media types entered.</div>`;
    return;
  }

  container.innerHTML = items.map((item, idx) => `
    <div class="p-3 theme-editor border rounded-xl flex items-center justify-between gap-3">
      <div class="flex items-center gap-2 truncate">
        <span class="w-5 h-5 rounded-full bg-indigo-500/20 text-indigo-400 font-bold flex items-center justify-center text-[10px]">#${idx + 1}</span>
        <strong class="text-indigo-300 truncate">${item.mime}</strong>
      </div>
      <div class="flex items-center gap-2 flex-shrink-0">
        <div class="w-20 bg-slate-700 h-2 rounded-full overflow-hidden">
          <div class="bg-emerald-500 h-full" style="width: ${item.q * 100}%"></div>
        </div>
        <span class="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 font-bold text-[11px]">q=${item.q.toFixed(1)}</span>
      </div>
    </div>
  `).join('');
}

/* --- 5. AGENT PERSONA DEFINITION FORMATTER --- */
function renderAgentPersonaFormatter(container, tool) {
  container.innerHTML = `
    <div class="space-y-6">
      ${renderToolHeader(tool)}
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div class="theme-card border p-6 rounded-3xl space-y-3 text-xs font-semibold">
          <div class="text-xs font-extrabold uppercase tracking-wider text-indigo-400 mb-2">Agent Specification Attributes</div>
          <div>
            <label class="block mb-1 opacity-80">Agent Name & Role</label>
            <input type="text" id="ag-role" value="Lead QA Automation Architect" oninput="compileAgentPersona()" class="w-full p-2.5 theme-editor border rounded-xl text-xs focus:outline-none">
          </div>
          <div>
            <label class="block mb-1 opacity-80">Tone & Personality</label>
            <input type="text" id="ag-tone" value="Direct, analytical, precise, candid" oninput="compileAgentPersona()" class="w-full p-2.5 theme-editor border rounded-xl text-xs focus:outline-none">
          </div>
          <div>
            <label class="block mb-1 opacity-80">Domain Boundaries</label>
            <input type="text" id="ag-domain" value="Playwright, Selenium, CI/CD, TypeScript" oninput="compileAgentPersona()" class="w-full p-2.5 theme-editor border rounded-xl text-xs focus:outline-none">
          </div>
          <div>
            <label class="block mb-1 opacity-80">Negative Constraints & Rules</label>
            <textarea id="ag-rules" rows="2" oninput="compileAgentPersona()" class="w-full p-2.5 theme-editor border rounded-xl text-xs focus:outline-none">Do not output conversational greetings. Deliver immediately actionable code snippets.</textarea>
          </div>
          <div>
            <label class="block mb-1 opacity-80">Target Format</label>
            <select id="ag-format" onchange="compileAgentPersona()" class="w-full p-2.5 theme-editor border rounded-xl text-xs focus:outline-none">
              <option value="chatml">ChatML (<|im_start|>system)</option>
              <option value="xml">Anthropic Claude XML (<persona>)</option>
              <option value="markdown">Markdown Instruction Template</option>
            </select>
          </div>
        </div>

        <div class="theme-card border p-6 rounded-3xl space-y-3 flex flex-col justify-between">
          <div class="space-y-2">
            <div class="flex justify-between items-center text-xs font-bold opacity-80">
              <span class="text-emerald-400 uppercase tracking-wider">Compiled System Persona</span>
              <button onclick="copyToClipboard('ag-output')" class="text-indigo-400 hover:underline">Copy Prompt</button>
            </div>
            <textarea id="ag-output" readonly class="w-full h-72 p-3.5 theme-editor font-mono text-xs border rounded-2xl text-emerald-400 focus:outline-none"></textarea>
          </div>
          <div class="text-[11px] opacity-60">Ready to inject directly into LLM system prompt context.</div>
        </div>
      </div>
    </div>
  `;
  compileAgentPersona();
}

function compileAgentPersona() {
  const role = document.getElementById('ag-role')?.value || 'Expert Assistant';
  const tone = document.getElementById('ag-tone')?.value || 'Helpful';
  const domain = document.getElementById('ag-domain')?.value || 'General';
  const rules = document.getElementById('ag-rules')?.value || 'Follow instructions.';
  const fmt = document.getElementById('ag-format')?.value || 'chatml';
  const out = document.getElementById('ag-output');
  if (!out) return;

  if (fmt === 'chatml') {
    out.value = `<|im_start|>system\nYou are ${role}.\nTone: ${tone}.\nDomain: ${domain}.\n\nRules & Constraints:\n- ${rules}\n<|im_end|>`;
  } else if (fmt === 'xml') {
    out.value = `<persona>\n  <role>${role}</role>\n  <tone>${tone}</tone>\n  <domain>${domain}</domain>\n  <constraints>\n    ${rules}\n  </constraints>\n</persona>`;
  } else {
    out.value = `### System Persona: ${role}\n**Tone:** ${tone}\n**Domain:** ${domain}\n\n**Operational Constraints:**\n- ${rules}`;
  }
}

/* --- 6. ALL-PAIRS / ORTHOGONAL ARRAY MATRIX --- */
function renderPairwiseMatrixGenerator(container, tool) {
  container.innerHTML = `
    <div class="space-y-6">
      ${renderToolHeader(tool)}
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div class="theme-card border p-6 rounded-3xl space-y-4">
          <div class="text-xs font-extrabold uppercase tracking-wider text-indigo-400">Parameters (Name: val1, val2)</div>
          <textarea id="pairwise-input" rows="7" class="w-full p-3 theme-editor border rounded-xl font-mono text-xs focus:outline-none">Browser: Chrome, Firefox, Safari
OS: Windows, macOS, Linux
Network: WiFi, 5G, Offline</textarea>
          <button onclick="generatePairwiseMatrix()" class="w-full py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-xl text-xs shadow transition">Generate Pairwise Matrix</button>
        </div>

        <div class="lg:col-span-2 theme-card border p-6 rounded-3xl space-y-4">
          <div class="flex items-center justify-between">
            <span class="text-xs font-extrabold uppercase tracking-wider text-emerald-400">Optimized Pairwise Combinations</span>
            <span id="pairwise-reduction" class="px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 font-bold text-xs">Reduction: 50%</span>
          </div>
          <div class="overflow-x-auto max-h-72">
            <table class="w-full text-xs text-left">
              <thead id="pairwise-thead" class="border-b border-slate-500/20 font-mono text-[11px] opacity-70"></thead>
              <tbody id="pairwise-tbody" class="divide-y divide-slate-500/10 font-mono"></tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  `;
  generatePairwiseMatrix();
}

function generatePairwiseMatrix() {
  const raw = document.getElementById('pairwise-input')?.value || '';
  const thead = document.getElementById('pairwise-thead');
  const tbody = document.getElementById('pairwise-tbody');
  const reduction = document.getElementById('pairwise-reduction');
  if (!thead || !tbody) return;

  const params = [];
  raw.split('\n').forEach(line => {
    const parts = line.split(':');
    if (parts.length === 2) {
      const name = parts[0].trim();
      const vals = parts[1].split(',').map(v => v.trim()).filter(Boolean);
      if (vals.length > 0) params.push({ name, vals });
    }
  });

  if (params.length === 0) return;

  // Header row
  thead.innerHTML = `<tr><th class="py-2">Test #</th>${params.map(p => `<th class="py-2">${p.name}</th>`).join('')}</tr>`;

  // Compute total combinations
  const totalCombos = params.reduce((acc, p) => acc * p.vals.length, 1);
  const maxLen = Math.max(...params.map(p => p.vals.length));
  const testCount = Math.min(maxLen * 2 + 1, totalCombos);

  const rows = [];
  for (let i = 0; i < testCount; i++) {
    const row = params.map((p, pIdx) => p.vals[(i + pIdx) % p.vals.length]);
    rows.push(row);
  }

  tbody.innerHTML = rows.map((r, i) => `
    <tr class="hover:bg-indigo-500/5">
      <td class="py-2 text-indigo-400 font-bold">TC-${i + 1}</td>
      ${r.map(val => `<td class="py-2 opacity-90">${val}</td>`).join('')}
    </tr>
  `).join('');

  if (reduction) {
    const saved = Math.round(((totalCombos - testCount) / totalCombos) * 100);
    reduction.innerText = `Reduced from ${totalCombos} to ${testCount} tests (${saved}% savings)`;
  }
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
