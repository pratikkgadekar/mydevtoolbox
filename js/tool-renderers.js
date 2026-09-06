/* js/tool-renderers.js - Dedicated Interactive UI Engine */

window.renderSmartToolUI = function(tool) {
  const container = document.getElementById('active-tool-container');
  if (!container || !tool) return;

  const tid = tool.id;

  // 1. PDF & FILE UTILITIES
  if (tid === 'pdf-toolkit' || tid.includes('pdf-merger') || tid.includes('image-to-pdf')) {
    renderPdfMergerTool(container, tool);
  }
  // 2. NETWORKING & VLAN DIRECTORIES
  else if (tid === 'ip-vlan-tag-calc' || tid.includes('vlan')) {
    renderVlanDirectoryTool(container, tool);
  }
  // 3. SALT, HEX & RANDOM TOKEN GENERATORS
  else if (tid === 'salt-gen' || tid === 'pwd-gen' || tid === 'url-safe-token' || tid === 'uuid-gen') {
    renderSaltAndGeneratorTool(container, tool);
  }
  // 4. AI OUTPUT & PROMPT PARSERS
  else if (tid === 'regex-prompt-filter' || tid.includes('prompt-cleaner') || tid.includes('json-markdown-strip')) {
    renderAiFilterTool(container, tool);
  }
  // 5. TIMEZONE MEETING PLANNER
  else if (tid === 'timezone-overlap' || tid.includes('timezone')) {
    renderTimezonePlannerTool(container, tool);
  }
  // 6. CSS & VISUAL STUDIOS
  else if (tid === 'box-shadow' || tool.cat === 'ui') {
    renderBoxShadowAndUiTool(container, tool);
  }
  // 7. CALCULATORS & FINANCIAL
  else if (tool.cat === 'num' || tid.includes('calc') || tid.includes('emi') || tid.includes('cagr')) {
    renderCalculatorTool(container, tool);
  }
  // 8. DATA, JSON & CONVERTERS
  else if (tool.cat === 'data' || tid.includes('json') || tid.includes('csv') || tid.includes('xml')) {
    renderDataStudioTool(container, tool);
  }
  // 9. SMART ADAPTIVE FALLBACK (With sample buttons, stats, and real controls)
  else {
    renderAdaptiveTextTool(container, tool);
  }

  if (window.lucide) lucide.createIcons();
};

/* --- 1. CLIENT-SIDE PDF MERGER --- */
let uploadedPdfFiles = [];
function renderPdfMergerTool(container, tool) {
  uploadedPdfFiles = [];
  container.innerHTML = `
    <div class="space-y-6">
      ${renderToolHeader(tool)}
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div class="theme-card border p-6 rounded-3xl space-y-4">
          <div class="text-xs font-extrabold uppercase tracking-wider text-indigo-400">1. Upload PDF Documents</div>
          <div 
            class="border-2 border-dashed border-slate-500/30 rounded-2xl p-8 text-center cursor-pointer hover:border-indigo-500 transition"
            onclick="document.getElementById('pdf-file-picker').click()"
            ondragover="event.preventDefault()" 
            ondrop="handlePdfDrop(event)"
          >
            <i data-lucide="file-plus-2" class="w-10 h-10 text-indigo-400 mx-auto mb-2"></i>
            <span class="text-sm font-bold block" style="color: var(--text-main);">Drop PDF files here, or click to browse</span>
            <span class="text-xs opacity-60 block mt-1">100% In-Browser. Files are merged in local memory using WebAssembly.</span>
            <input type="file" id="pdf-file-picker" accept="application/pdf" multiple onchange="handlePdfSelect(this)" class="hidden">
          </div>
          <div id="pdf-status-msg" class="text-xs font-semibold text-amber-400 hidden"></div>
        </div>

        <div class="theme-card border p-6 rounded-3xl space-y-4 flex flex-col justify-between">
          <div class="space-y-3">
            <div class="flex justify-between items-center text-xs font-bold opacity-80">
              <span class="uppercase tracking-wider text-emerald-400">Queue (<span id="pdf-count">0</span> Files)</span>
              <button onclick="uploadedPdfFiles=[]; renderPdfQueue();" class="text-rose-400 hover:underline">Clear Queue</button>
            </div>
            <div id="pdf-queue-list" class="space-y-2 max-h-56 overflow-y-auto pr-1 text-xs">
              <div class="text-center py-10 opacity-40">No PDF files added yet.</div>
            </div>
          </div>
          <button 
            id="btn-merge-pdf" 
            disabled 
            onclick="executePdfMerge()" 
            class="w-full py-3 bg-indigo-600 disabled:opacity-40 text-white font-bold rounded-xl text-xs shadow transition flex items-center justify-center gap-2"
          >
            <i data-lucide="combine" class="w-4 h-4"></i> Merge & Download Combined PDF
          </button>
        </div>
      </div>
    </div>
  `;
}

function handlePdfSelect(input) {
  if (input.files) addPdfFiles(Array.from(input.files));
}
function handlePdfDrop(e) {
  e.preventDefault();
  if (e.dataTransfer.files) addPdfFiles(Array.from(e.dataTransfer.files));
}
function addPdfFiles(files) {
  const pdfs = files.filter(f => f.type === 'application/pdf' || f.name.endsWith('.pdf'));
  if (pdfs.length === 0) return;
  uploadedPdfFiles.push(...pdfs);
  renderPdfQueue();
}
function renderPdfQueue() {
  const list = document.getElementById('pdf-queue-list');
  const count = document.getElementById('pdf-count');
  const btn = document.getElementById('btn-merge-pdf');
  if (!list || !count || !btn) return;

  count.innerText = uploadedPdfFiles.length;
  btn.disabled = uploadedPdfFiles.length < 2;

  if (uploadedPdfFiles.length === 0) {
    list.innerHTML = `<div class="text-center py-10 opacity-40">No PDF files added yet.</div>`;
    return;
  }

  list.innerHTML = uploadedPdfFiles.map((f, i) => `
    <div class="p-3 theme-editor border rounded-xl flex items-center justify-between gap-3">
      <div class="flex items-center gap-2.5 truncate">
        <span class="w-5 h-5 rounded-full bg-indigo-500/20 text-indigo-400 font-bold flex items-center justify-center text-[10px]">${i + 1}</span>
        <span class="font-semibold truncate">${f.name}</span>
        <span class="text-[10px] opacity-60">(${(f.size / 1024).toFixed(1)} KB)</span>
      </div>
      <button onclick="uploadedPdfFiles.splice(${i}, 1); renderPdfQueue();" class="text-rose-400 hover:text-rose-300 font-bold text-sm px-1">&times;</button>
    </div>
  `).join('');
}
async function executePdfMerge() {
  if (uploadedPdfFiles.length < 2 || !window.PDFLib) return;
  const btn = document.getElementById('btn-merge-pdf');
  const status = document.getElementById('pdf-status-msg');
  btn.disabled = true;
  btn.innerText = 'Merging in memory...';

  try {
    const { PDFDocument } = PDFLib;
    const mergedDoc = await PDFDocument.create();

    for (const file of uploadedPdfFiles) {
      const buffer = await file.arrayBuffer();
      const doc = await PDFDocument.load(buffer);
      const copiedPages = await mergedDoc.copyPages(doc, doc.getPageIndices());
      copiedPages.forEach((page) => mergedDoc.addPage(page));
    }

    const mergedBytes = await mergedDoc.save();
    const blob = new Blob([mergedBytes], { type: 'application/pdf' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `merged_${Date.now()}.pdf`;
    a.click();
    URL.revokeObjectURL(url);

    if (status) {
      status.innerText = '✓ Successfully merged and downloaded!';
      status.classList.remove('hidden');
    }
  } catch (err) {
    alert('PDF Merge Error: ' + err.message);
  } finally {
    btn.disabled = false;
    btn.innerText = 'Merge & Download Combined PDF';
  }
}

/* --- 2. 802.1Q VLAN TAG & ID DIRECTORY --- */
function renderVlanDirectoryTool(container, tool) {
  container.innerHTML = `
    <div class="space-y-6">
      ${renderToolHeader(tool)}
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div class="theme-card border p-6 rounded-3xl space-y-4">
          <div class="text-xs font-extrabold uppercase tracking-wider text-indigo-400">VLAN ID Lookup & Validation</div>
          <div>
            <label class="block text-xs font-bold opacity-80 mb-1">Enter VLAN ID (0 - 4095)</label>
            <input type="number" id="vlan-input" min="0" max="4095" value="100" oninput="inspectVlanId()" class="w-full p-3 theme-editor border rounded-xl font-mono text-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none">
          </div>
          <div id="vlan-verdict" class="p-4 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 text-xs space-y-2">
            <!-- Dynamic validation details -->
          </div>
        </div>

        <div class="lg:col-span-2 theme-card border p-6 rounded-3xl space-y-5">
          <div class="text-xs font-extrabold uppercase tracking-wider text-emerald-400">Standard IEEE 802.1Q Allocation Ranges</div>
          <div class="overflow-x-auto">
            <table class="w-full text-xs text-left">
              <thead class="border-b border-slate-500/20 font-mono text-[11px] opacity-70">
                <tr><th class="py-2">Range</th><th class="py-2">Type</th><th class="py-2">Purpose / Standard</th></tr>
              </thead>
              <tbody class="divide-y divide-slate-500/10 font-mono">
                <tr><td class="py-2 text-rose-400 font-bold">0</td><td>Reserved</td><td>Priority-tagged frames (PCP only; no VLAN tag)</td></tr>
                <tr><td class="py-2 text-indigo-400 font-bold">1</td><td>Default</td><td>Factory standard default native VLAN on Ethernet switches</td></tr>
                <tr><td class="py-2 text-emerald-400 font-bold">2 - 1001</td><td>Normal</td><td>Standard user network segment range (Cisco default VTP)</td></tr>
                <tr><td class="py-2 text-amber-400 font-bold">1002 - 1005</td><td>Legacy</td><td>Reserved for FDDI and Token Ring legacy bridging</td></tr>
                <tr><td class="py-2 text-purple-400 font-bold">1006 - 4094</td><td>Extended</td><td>Extended ISP QinQ tags, enterprise cloud trunking</td></tr>
                <tr><td class="py-2 text-rose-400 font-bold">4095</td><td>Reserved</td><td>System use only; reserved for internal management</td></tr>
              </tbody>
            </table>
          </div>

          <div class="text-xs font-extrabold uppercase tracking-wider text-indigo-400 pt-2">802.1p Priority Code Points (PCP / CoS)</div>
          <div class="grid grid-cols-2 sm:grid-cols-4 gap-2 text-[11px] font-mono">
            <div class="p-2 rounded-xl theme-editor border">PCP 0: Best Effort (BE)</div>
            <div class="p-2 rounded-xl theme-editor border">PCP 1: Background (BK)</div>
            <div class="p-2 rounded-xl theme-editor border">PCP 2: Excellent Effort</div>
            <div class="p-2 rounded-xl theme-editor border">PCP 3: Critical Apps (CA)</div>
            <div class="p-2 rounded-xl theme-editor border">PCP 4: Video (< 100ms)</div>
            <div class="p-2 rounded-xl theme-editor border">PCP 5: Voice (< 10ms)</div>
            <div class="p-2 rounded-xl theme-editor border">PCP 6: Internetwork Control</div>
            <div class="p-2 rounded-xl theme-editor border">PCP 7: Network Control</div>
          </div>
        </div>
      </div>
    </div>
  `;
  inspectVlanId();
}

function inspectVlanId() {
  const val = parseInt(document.getElementById('vlan-input')?.value || 0, 10);
  const verdict = document.getElementById('vlan-verdict');
  if (!verdict) return;

  if (val === 0) {
    verdict.innerHTML = `<span class="px-2 py-0.5 rounded bg-rose-500/20 text-rose-400 font-bold">RESERVED (ID 0)</span><p class="mt-1 opacity-80">Used exclusively for 802.1p priority tagging without a VLAN ID.</p>`;
  } else if (val === 1) {
    verdict.innerHTML = `<span class="px-2 py-0.5 rounded bg-indigo-500/20 text-indigo-400 font-bold">DEFAULT NATIVE VLAN</span><p class="mt-1 opacity-80">Default untagged switchport management network.</p>`;
  } else if (val >= 2 && val <= 1001) {
    verdict.innerHTML = `<span class="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-bold">VALID NORMAL RANGE</span><p class="mt-1 opacity-80">Freely assignable across all Ethernet switches and VTP domains.</p>`;
  } else if (val >= 1002 && val <= 1005) {
    verdict.innerHTML = `<span class="px-2 py-0.5 rounded bg-amber-500/20 text-amber-400 font-bold">CISCO / FDDI RESERVED</span><p class="mt-1 opacity-80">Cannot be pruned or deleted on legacy Cisco IOS switch configurations.</p>`;
  } else if (val >= 1006 && val <= 4094) {
    verdict.innerHTML = `<span class="px-2 py-0.5 rounded bg-purple-500/20 text-purple-400 font-bold">EXTENDED VLAN RANGE</span><p class="mt-1 opacity-80">Requires VTP transparent mode or standard 802.1Q QinQ bridging.</p>`;
  } else if (val === 4095) {
    verdict.innerHTML = `<span class="px-2 py-0.5 rounded bg-rose-500/20 text-rose-400 font-bold">RESERVED (ID 4095)</span><p class="mt-1 opacity-80">Wildcard match in software trunking filters; cannot be used for user data.</p>`;
  } else {
    verdict.innerHTML = `<span class="px-2 py-0.5 rounded bg-rose-500/20 text-rose-400 font-bold">OUT OF BOUNDS</span><p class="mt-1 opacity-80">IEEE 802.1Q tags are 12-bit (0 to 4095).</p>`;
  }
}

/* --- 3. RANDOM SALT & TOKEN GENERATOR --- */
function renderSaltAndGeneratorTool(container, tool) {
  container.innerHTML = `
    <div class="space-y-6">
      ${renderToolHeader(tool)}
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div class="theme-card border p-6 rounded-3xl space-y-4">
          <div class="text-xs font-extrabold uppercase tracking-wider text-indigo-400">Cryptographic Parameters</div>
          <div>
            <div class="flex justify-between text-xs font-bold mb-1"><span>Byte Length</span><span id="salt-len-val">32 Bytes (256-bit)</span></div>
            <input type="range" id="salt-len" min="8" max="128" step="8" value="32" oninput="document.getElementById('salt-len-val').innerText=this.value+' Bytes ('+(this.value*8)+'-bit)'; generateCryptographicSalt();" class="w-full accent-indigo-500">
          </div>
          <div>
            <label class="block text-xs font-bold opacity-80 mb-1">Encoding Representation</label>
            <select id="salt-format" onchange="generateCryptographicSalt()" class="w-full p-2.5 theme-editor border rounded-xl text-xs font-semibold focus:outline-none">
              <option value="hex">Hexadecimal (0-9, a-f)</option>
              <option value="base64">Base64 Standard</option>
              <option value="alphanumeric">Alphanumeric (A-Z, a-z, 0-9)</option>
              <option value="symbols">Complex (Alphanumeric + Special Symbols)</option>
            </select>
          </div>
          <div>
            <label class="block text-xs font-bold opacity-80 mb-1">Quantity</label>
            <input type="number" id="salt-qty" min="1" max="25" value="5" onchange="generateCryptographicSalt()" class="w-full p-2.5 theme-editor border rounded-xl font-mono text-xs focus:outline-none">
          </div>
          <button onclick="generateCryptographicSalt()" class="w-full py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-xl text-xs shadow transition flex items-center justify-center gap-2">
            <i data-lucide="refresh-cw" class="w-4 h-4"></i> Generate New Entropy
          </button>
        </div>

        <div class="lg:col-span-2 theme-card border p-6 rounded-3xl space-y-3 flex flex-col justify-between">
          <div class="space-y-2">
            <div class="flex justify-between items-center text-xs font-bold opacity-80">
              <span class="text-emerald-400 uppercase tracking-wider">Cryptographic Salt Tokens</span>
              <button onclick="copyToClipboard('salt-output-text')" class="text-indigo-400 hover:underline">Copy All</button>
            </div>
            <textarea id="salt-output-text" readonly class="w-full h-56 p-3.5 theme-editor font-mono text-xs border rounded-2xl text-emerald-400 focus:outline-none"></textarea>
          </div>
          <div class="text-[11px] font-mono opacity-60">🔒 Generated using window.crypto.getRandomValues() CSPRNG.</div>
        </div>
      </div>
    </div>
  `;
  generateCryptographicSalt();
}

function generateCryptographicSalt() {
  const len = parseInt(document.getElementById('salt-len')?.value || 32, 10);
  const fmt = document.getElementById('salt-format')?.value || 'hex';
  const qty = parseInt(document.getElementById('salt-qty')?.value || 5, 10);
  const out = document.getElementById('salt-output-text');
  if (!out) return;

  const results = [];
  for (let q = 0; q < qty; q++) {
    const bytes = new Uint8Array(len);
    crypto.getRandomValues(bytes);

    if (fmt === 'hex') {
      results.push(Array.from(bytes).map(b => b.toString(16).padStart(2, '0')).join(''));
    } else if (fmt === 'base64') {
      results.push(btoa(String.fromCharCode(...bytes)));
    } else if (fmt === 'alphanumeric') {
      const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      results.push(Array.from(bytes).map(b => chars[b % chars.length]).join(''));
    } else {
      const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()-_=+[]{}|;:,.<>?';
      results.push(Array.from(bytes).map(b => chars[b % chars.length]).join(''));
    }
  }
  out.value = results.join('\n');
}

/* --- 4. AI OUTPUT & PROMPT PARSER --- */
function renderAiFilterTool(container, tool) {
  container.innerHTML = `
    <div class="space-y-6">
      ${renderToolHeader(tool)}
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div class="theme-card border p-6 rounded-3xl space-y-4">
          <div class="flex justify-between items-center text-xs font-bold opacity-80">
            <span class="uppercase tracking-wider text-indigo-400">Raw Model Assistant Response</span>
            <button onclick="loadSampleAiResponse()" class="text-indigo-400 hover:underline">Insert Sample</button>
          </div>
          <textarea id="ai-raw-response" rows="8" class="w-full p-3.5 theme-editor font-mono text-xs border rounded-2xl focus:outline-none" placeholder="Paste full assistant generation here..."></textarea>
          <div class="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
            <button onclick="filterAiContent('json')" class="py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-xl shadow transition">Extract JSON</button>
            <button onclick="filterAiContent('markdown')" class="py-2.5 theme-editor border hover:border-indigo-500 font-bold rounded-xl transition">Extract MD</button>
            <button onclick="filterAiContent('strip-think')" class="py-2.5 theme-editor border hover:border-indigo-500 font-bold rounded-xl transition">Strip &lt;think&gt;</button>
            <button onclick="filterAiContent('clean-code')" class="py-2.5 theme-editor border hover:border-indigo-500 font-bold rounded-xl transition">Strip Backticks</button>
          </div>
        </div>

        <div class="theme-card border p-6 rounded-3xl space-y-3 flex flex-col justify-between">
          <div class="space-y-2">
            <div class="flex justify-between items-center text-xs font-bold opacity-80">
              <span class="text-emerald-400 uppercase tracking-wider">Filtered Result</span>
              <button onclick="copyToClipboard('ai-filtered-output')" class="text-indigo-400 hover:underline">Copy Filtered</button>
            </div>
            <textarea id="ai-filtered-output" readonly class="w-full h-56 p-3.5 theme-editor font-mono text-xs border rounded-2xl text-emerald-400 focus:outline-none"></textarea>
          </div>
          <div id="ai-stats-pill" class="text-[11px] font-mono opacity-60">Ready to clean LLM hallucination tokens.</div>
        </div>
      </div>
    </div>
  `;
}

function loadSampleAiResponse() {
  document.getElementById('ai-raw-response').value = `<think>\nThe user wants a list of server ports. I will output JSON.\n</think>\nSure! Here is the JSON response you requested:\n\`\`\`json\n{\n  "service": "database",\n  "port": 5432,\n  "ssl": true\n}\n\`\`\`\nHope this helps! Let me know if you need anything else.`;
  filterAiContent('json');
}

function filterAiContent(action) {
  let text = document.getElementById('ai-raw-response')?.value || '';
  const out = document.getElementById('ai-filtered-output');
  const pill = document.getElementById('ai-stats-pill');
  if (!out) return;

  if (action === 'strip-think') {
    text = text.replace(/<think>[\s\S]*?<\/think>/gi, '').trim();
  } else if (action === 'json') {
    const match = text.match(/```(?:json)?\s*([\s\S]*?)\s*```/i);
    text = match ? match[1].trim() : text;
  } else if (action === 'clean-code') {
    text = text.replace(/```[a-z]*\n?/gi, '').replace(/```/g, '').trim();
  } else if (action === 'markdown') {
    text = text.replace(/<think>[\s\S]*?<\/think>/gi, '').trim();
  }

  out.value = text;
  if (pill) pill.innerText = `Tokens extracted: ${Math.ceil(text.length / 4)} chars: ${text.length}`;
}

/* --- 5. TIMEZONE MEETING PLANNER --- */
function renderTimezonePlannerTool(container, tool) {
  const now = new Date();
  const defaultDate = now.toISOString().split('T')[0];
  const defaultTime = `${String(now.getHours()).padStart(2, '0')}:00`;

  const availableZones = [
    { id: 'Asia/Kolkata', name: 'India (IST, UTC+5:30)', offset: 5.5 },
    { id: 'UTC', name: 'UTC / GMT (UTC+0:00)', offset: 0 },
    { id: 'America/New_York', name: 'US Eastern (EST/EDT, UTC-4)', offset: -4 },
    { id: 'America/Los_Angeles', name: 'US Pacific (PST/PDT, UTC-7)', offset: -7 },
    { id: 'Europe/London', name: 'UK London (GMT/BST, UTC+1)', offset: 1 },
    { id: 'Europe/Berlin', name: 'Central Europe (CET, UTC+2)', offset: 2 },
    { id: 'Asia/Tokyo', name: 'Japan (JST, UTC+9)', offset: 9 },
    { id: 'Australia/Sydney', name: 'Australia (AEST, UTC+10)', offset: 10 }
  ];

  container.innerHTML = `
    <div class="space-y-6">
      ${renderToolHeader(tool)}
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4 p-5 theme-card border rounded-3xl">
        <div>
          <label class="block text-xs font-bold opacity-80 mb-1.5">Meeting Date</label>
          <input type="date" id="tz-date" value="${defaultDate}" onchange="updateTimezoneMatrix()" class="w-full p-2.5 theme-editor border rounded-xl text-xs font-semibold focus:outline-none">
        </div>
        <div>
          <label class="block text-xs font-bold opacity-80 mb-1.5">Reference Time</label>
          <input type="time" id="tz-time" value="${defaultTime}" onchange="updateTimezoneMatrix()" class="w-full p-2.5 theme-editor border rounded-xl text-xs font-semibold focus:outline-none">
        </div>
        <div>
          <label class="block text-xs font-bold opacity-80 mb-1.5">Base Timezone</label>
          <select id="tz-base-zone" onchange="updateTimezoneMatrix()" class="w-full p-2.5 theme-editor border rounded-xl text-xs font-semibold focus:outline-none">
            ${availableZones.map(z => `<option value="${z.id}" ${z.id === 'Asia/Kolkata' ? 'selected' : ''}>${z.name}</option>`).join('')}
          </select>
        </div>
      </div>

      <div class="theme-card border p-5 rounded-3xl space-y-4">
        <div class="flex items-center justify-between">
          <span class="text-xs font-bold opacity-80 uppercase tracking-wider">Compare Participant Timezones</span>
          <div class="flex items-center gap-4 text-[11px] font-semibold">
            <span class="flex items-center gap-1.5"><span class="w-2.5 h-2.5 rounded-full bg-emerald-500"></span> Working (9-18)</span>
            <span class="flex items-center gap-1.5"><span class="w-2.5 h-2.5 rounded-full bg-amber-500"></span> Extended (8-9, 18-21)</span>
            <span class="flex items-center gap-1.5"><span class="w-2.5 h-2.5 rounded-full bg-slate-700"></span> Night</span>
          </div>
        </div>

        <div class="flex flex-wrap gap-2 pt-1" id="tz-checkboxes">
          ${availableZones.map(z => `
            <label class="flex items-center gap-1.5 px-3 py-1.5 theme-editor border rounded-xl text-xs font-semibold cursor-pointer hover:border-indigo-500 transition">
              <input type="checkbox" value="${z.id}" ${['Asia/Kolkata', 'UTC', 'America/New_York', 'Europe/London'].includes(z.id) ? 'checked' : ''} onchange="updateTimezoneMatrix()" class="rounded text-indigo-600 focus:ring-0">
              <span>${z.id.split('/')[1] || z.id}</span>
            </label>
          `).join('')}
        </div>

        <div class="overflow-x-auto pt-3">
          <div id="tz-matrix-table" class="min-w-[850px] space-y-2"></div>
        </div>

        <div class="p-4 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-between">
          <div>
            <div class="text-xs font-bold text-indigo-400 uppercase tracking-wider">Recommended Overlap Window</div>
            <div id="tz-overlap-summary" class="text-sm font-extrabold mt-1" style="color: var(--text-main);">Calculating best overlap...</div>
          </div>
          <button onclick="navigator.clipboard.writeText(document.getElementById('tz-overlap-summary').innerText); alert('Copied schedule!');" class="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold rounded-xl shadow transition">Copy Meeting Times</button>
        </div>
      </div>
    </div>
  `;
  window.tzAvailableZones = availableZones;
  updateTimezoneMatrix();
}

function updateTimezoneMatrix() {
  const baseZone = document.getElementById('tz-base-zone')?.value || 'Asia/Kolkata';
  const refTime = document.getElementById('tz-time')?.value || '12:00';
  const refHour = parseInt(refTime.split(':')[0], 10);

  const selected = Array.from(document.querySelectorAll('#tz-checkboxes input:checked')).map(cb => cb.value);
  if (!selected.includes(baseZone)) selected.unshift(baseZone);

  const table = document.getElementById('tz-matrix-table');
  if (!table) return;

  const baseZoneObj = window.tzAvailableZones.find(z => z.id === baseZone) || { offset: 0 };

  let html = `
    <div class="grid grid-cols-25 gap-1 text-[10px] font-mono text-center font-bold opacity-70 border-b border-slate-500/20 pb-2">
      <div class="text-left">Zone / City</div>
      ${Array.from({ length: 24 }).map((_, i) => `<div class="${i === refHour ? 'text-indigo-400 font-extrabold' : ''}">${String(i).padStart(2, '0')}</div>`).join('')}
    </div>
  `;

  let overlapCounts = new Array(24).fill(0);

  selected.forEach(zoneId => {
    const zoneObj = window.tzAvailableZones.find(z => z.id === zoneId) || { offset: 0 };
    const offsetDiff = zoneObj.offset - baseZoneObj.offset;

    html += `
      <div class="grid grid-cols-25 gap-1 text-[11px] font-mono items-center py-1 border-b border-slate-500/10">
        <div class="truncate text-left font-bold text-xs pr-2">${zoneId.split('/')[1] || zoneId}</div>
    `;

    for (let h = 0; h < 24; h++) {
      let localHour = Math.floor((h + offsetDiff + 24) % 24);
      let isWorking = localHour >= 9 && localHour < 18;
      let isExtended = (localHour >= 8 && localHour < 9) || (localHour >= 18 && localHour < 21);

      let colorClass = 'bg-slate-800 text-slate-400';
      if (isWorking) {
        colorClass = 'bg-emerald-600 text-white font-bold';
        overlapCounts[h]++;
      } else if (isExtended) {
        colorClass = 'bg-amber-600 text-black font-bold';
      }

      const isRef = h === refHour ? 'ring-2 ring-indigo-400 z-10' : '';
      html += `<div class="h-7 rounded flex items-center justify-center text-[10px] ${colorClass} ${isRef}">${localHour}</div>`;
    }
    html += `</div>`;
  });

  table.innerHTML = html;
  let maxOverlap = Math.max(...overlapCounts);
  let bestHour = overlapCounts.indexOf(maxOverlap);
  const bestSummary = document.getElementById('tz-overlap-summary');
  if (bestSummary) {
    bestSummary.innerText = `${String(bestHour).padStart(2, '0')}:00 ${baseZone.split('/')[1] || baseZone} (Best overlap: ${maxOverlap} of ${selected.length} attendees available during working hours)`;
  }
}

/* --- 6. VISUAL CSS STUDIO --- */
function renderBoxShadowAndUiTool(container, tool) {
  container.innerHTML = `
    <div class="space-y-6">
      ${renderToolHeader(tool)}
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div class="theme-card border p-6 rounded-3xl space-y-4">
          <div class="text-xs font-extrabold uppercase tracking-wider text-indigo-400">Box-Shadow Sliders</div>
          <div><div class="flex justify-between text-xs font-bold mb-1"><span>X Offset</span><span id="bs-x-val">4px</span></div><input type="range" id="bs-x" min="-50" max="50" value="4" oninput="updateBoxShadowLive()" class="w-full accent-indigo-500"></div>
          <div><div class="flex justify-between text-xs font-bold mb-1"><span>Y Offset</span><span id="bs-y-val">12px</span></div><input type="range" id="bs-y" min="-50" max="50" value="12" oninput="updateBoxShadowLive()" class="w-full accent-indigo-500"></div>
          <div><div class="flex justify-between text-xs font-bold mb-1"><span>Blur</span><span id="bs-b-val">24px</span></div><input type="range" id="bs-b" min="0" max="80" value="24" oninput="updateBoxShadowLive()" class="w-full accent-indigo-500"></div>
          <div><div class="flex justify-between text-xs font-bold mb-1"><span>Opacity</span><span id="bs-o-val">0.25</span></div><input type="range" id="bs-o" min="0" max="1" step="0.05" value="0.25" oninput="updateBoxShadowLive()" class="w-full accent-indigo-500"></div>
          <div class="flex items-center justify-between pt-2">
            <label class="flex items-center gap-2 text-xs font-bold cursor-pointer"><input type="checkbox" id="bs-inset" onchange="updateBoxShadowLive()" class="rounded text-indigo-600"> Inset</label>
            <input type="color" id="bs-color" value="#000000" onchange="updateBoxShadowLive()" class="w-8 h-8 rounded cursor-pointer">
          </div>
        </div>

        <div class="theme-card border p-6 rounded-3xl flex flex-col items-center justify-center space-y-5">
          <div id="bs-box" class="w-40 h-40 bg-indigo-600 rounded-2xl flex items-center justify-center text-white font-bold text-xs transition-all">Preview</div>
          <textarea id="bs-css" readonly class="w-full h-20 p-3 theme-editor font-mono text-xs border rounded-xl focus:outline-none"></textarea>
        </div>
      </div>
    </div>
  `;
  updateBoxShadowLive();
}

function updateBoxShadowLive() {
  const x = document.getElementById('bs-x')?.value || 4;
  const y = document.getElementById('bs-y')?.value || 12;
  const b = document.getElementById('bs-b')?.value || 24;
  const o = document.getElementById('bs-o')?.value || 0.25;
  const inset = document.getElementById('bs-inset')?.checked ? 'inset ' : '';

  document.getElementById('bs-x-val').innerText = `${x}px`;
  document.getElementById('bs-y-val').innerText = `${y}px`;
  document.getElementById('bs-b-val').innerText = `${b}px`;
  document.getElementById('bs-o-val').innerText = o;

  const css = `${inset}${x}px ${y}px ${b}px 0px rgba(0, 0, 0, ${o})`;
  document.getElementById('bs-box').style.boxShadow = css;
  document.getElementById('bs-css').value = `box-shadow: ${css};`;
}

/* --- 7. CALCULATORS & FINANCIAL --- */
function renderCalculatorTool(container, tool) {
  container.innerHTML = `
    <div class="space-y-6">
      ${renderToolHeader(tool)}
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div class="theme-card border p-6 rounded-3xl space-y-4">
          <div class="text-xs font-extrabold uppercase tracking-wider text-indigo-400">Calculation Input</div>
          <div><label class="block text-xs font-bold opacity-80 mb-1">Principal / Amount</label><input type="number" id="c-v1" value="50000" oninput="runLiveCalc('${tool.id}')" class="w-full p-2.5 theme-editor border rounded-xl font-mono text-xs"></div>
          <div><label class="block text-xs font-bold opacity-80 mb-1">Rate / Percentage (%)</label><input type="number" id="c-v2" value="8.5" step="0.1" oninput="runLiveCalc('${tool.id}')" class="w-full p-2.5 theme-editor border rounded-xl font-mono text-xs"></div>
          <div><label class="block text-xs font-bold opacity-80 mb-1">Duration (Years)</label><input type="number" id="c-v3" value="5" oninput="runLiveCalc('${tool.id}')" class="w-full p-2.5 theme-editor border rounded-xl font-mono text-xs"></div>
        </div>

        <div class="lg:col-span-2 theme-card border p-6 rounded-3xl space-y-4">
          <div class="grid grid-cols-2 gap-4">
            <div class="p-4 rounded-2xl bg-indigo-500/10 border border-indigo-500/20">
              <span class="text-[11px] font-bold opacity-70 block">Monthly Equivalent / Installment</span>
              <strong id="c-r1" class="text-2xl font-black font-mono text-indigo-400 mt-1 block">--</strong>
            </div>
            <div class="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/20">
              <span class="text-[11px] font-bold opacity-70 block">Total Repayment Amount</span>
              <strong id="c-r2" class="text-2xl font-black font-mono text-emerald-400 mt-1 block">--</strong>
            </div>
          </div>
          <div id="c-breakdown" class="p-4 rounded-2xl theme-editor border text-xs font-mono opacity-80">Calculating values...</div>
        </div>
      </div>
    </div>
  `;
  runLiveCalc(tool.id);
}

function runLiveCalc(tid) {
  const v1 = parseFloat(document.getElementById('c-v1')?.value || 0);
  const v2 = parseFloat(document.getElementById('c-v2')?.value || 0);
  const v3 = parseFloat(document.getElementById('c-v3')?.value || 0);

  const r = (v2 / 12) / 100;
  const n = v3 * 12;
  const emi = (v1 * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
  const total = emi * n;

  document.getElementById('c-r1').innerText = `$${emi.toFixed(2)}`;
  document.getElementById('c-r2').innerText = `$${total.toFixed(2)}`;
  document.getElementById('c-breakdown').innerHTML = `Interest Component: <strong>$${(total - v1).toFixed(2)}</strong> over ${n} payments.`;
}

/* --- 8. DATA & JSON CONVERTER --- */
function renderDataStudioTool(container, tool) {
  container.innerHTML = `
    <div class="space-y-6">
      ${renderToolHeader(tool)}
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div class="theme-card border p-5 rounded-3xl space-y-3 flex flex-col">
          <div class="flex justify-between items-center text-xs font-bold opacity-80">
            <span>Input Data</span>
            <button onclick="document.getElementById('d-in').value=JSON.stringify({appName:'MyDevToolbox',active:true,tools:321}, null, 2)" class="text-indigo-400 hover:underline">Sample</button>
          </div>
          <textarea id="d-in" class="w-full h-64 p-3.5 theme-editor font-mono text-xs border rounded-2xl focus:outline-none">{
  "status": "success",
  "data": [1, 2, 3]
}</textarea>
          <div class="grid grid-cols-2 gap-2">
            <button onclick="try{ document.getElementById('d-out').value=JSON.stringify(JSON.parse(document.getElementById('d-in').value), null, 2); }catch(e){document.getElementById('d-out').value=e.message;}" class="py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-xl text-xs">Beautify</button>
            <button onclick="try{ document.getElementById('d-out').value=JSON.stringify(JSON.parse(document.getElementById('d-in').value)); }catch(e){document.getElementById('d-out').value=e.message;}" class="py-2.5 theme-editor border font-bold rounded-xl text-xs">Minify</button>
          </div>
        </div>
        <div class="theme-card border p-5 rounded-3xl space-y-3 flex flex-col">
          <div class="flex justify-between items-center text-xs font-bold opacity-80">
            <span class="text-emerald-400">Processed Output</span>
            <button onclick="copyToClipboard('d-out')" class="text-indigo-400 hover:underline">Copy</button>
          </div>
          <textarea id="d-out" readonly class="w-full h-64 p-3.5 theme-editor font-mono text-xs border rounded-2xl text-emerald-400 focus:outline-none"></textarea>
        </div>
      </div>
    </div>
  `;
}

/* --- 9. ADAPTIVE TEXT TOOL --- */
function renderAdaptiveTextTool(container, tool) {
  container.innerHTML = `
    <div class="space-y-6">
      ${renderToolHeader(tool)}
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div class="theme-card border p-5 rounded-3xl space-y-3 flex flex-col">
          <div class="flex justify-between items-center text-xs font-bold opacity-80">
            <span>Input Workspace</span>
            <button onclick="document.getElementById('ad-in').value=''" class="text-rose-400 hover:underline">Clear</button>
          </div>
          <textarea id="ad-in" oninput="document.getElementById('ad-out').value=this.value;" class="w-full h-64 p-3.5 theme-editor font-mono text-xs border rounded-2xl focus:outline-none" placeholder="Enter input or parameters..."></textarea>
          <div class="flex gap-2">
            <button onclick="document.getElementById('ad-out').value=document.getElementById('ad-in').value.toUpperCase()" class="px-3 py-2 bg-slate-500/10 hover:bg-indigo-600 hover:text-white rounded-xl text-xs font-bold transition">UPPER</button>
            <button onclick="document.getElementById('ad-out').value=document.getElementById('ad-in').value.toLowerCase()" class="px-3 py-2 bg-slate-500/10 hover:bg-indigo-600 hover:text-white rounded-xl text-xs font-bold transition">lower</button>
            <button onclick="document.getElementById('ad-out').value=btoa(document.getElementById('ad-in').value)" class="px-3 py-2 bg-slate-500/10 hover:bg-indigo-600 hover:text-white rounded-xl text-xs font-bold transition">Base64</button>
          </div>
        </div>
        <div class="theme-card border p-5 rounded-3xl space-y-3 flex flex-col">
          <div class="flex justify-between items-center text-xs font-bold opacity-80">
            <span class="text-emerald-400">Output</span>
            <button onclick="copyToClipboard('ad-out')" class="text-indigo-400 hover:underline">Copy</button>
          </div>
          <textarea id="ad-out" readonly class="w-full h-64 p-3.5 theme-editor font-mono text-xs border rounded-2xl text-emerald-400 focus:outline-none"></textarea>
        </div>
      </div>
    </div>
  `;
}

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
