// 1. LLM Multi-Model Token & Pricing Matrix Engine
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
  const text = document.getElementById('llm-prompt-input').value;
  const chars = text.length;
  const words = text.trim() ? text.trim().split(/\s+/).length : 0;
  const estTokens = Math.ceil(chars / 3.8);

  document.getElementById('char-word-stats').innerText = `${chars.toLocaleString()} chars | ${words.toLocaleString()} words`;
  document.getElementById('token-count').innerText = estTokens.toLocaleString();

  const selectedKey = document.getElementById('llm-model-select').value;
  const model = llmModelCatalog[selectedKey] || llmModelCatalog['gpt-4o'];

  const inCost = (estTokens / 1000000) * model.inPrice;
  const outCost = (estTokens / 1000000) * model.outPrice;
  const ctxPct = ((estTokens / model.context) * 100).toFixed(2);

  document.getElementById('cost-input-model').innerText = `$${inCost.toFixed(5)}`;
  document.getElementById('cost-output-model').innerText = `$${outCost.toFixed(5)}`;
  document.getElementById('context-used-pct').innerText = `${ctxPct}%`;

  // Render comparative table
  const tbody = document.getElementById('llm-matrix-body');
  if (tbody) {
    tbody.innerHTML = '';
    Object.keys(llmModelCatalog).forEach((key) => {
      const m = llmModelCatalog[key];
      const cost = (estTokens / 1000000) * m.inPrice;
      const isSelected = key === selectedKey;
      tbody.innerHTML += `
        <tr class="hover:bg-indigo-500/5 ${isSelected ? 'bg-purple-500/10 font-bold text-purple-600 dark:text-purple-400' : ''}">
          <td class="py-2 flex items-center gap-1.5">${isSelected ? '👉 ' : ''}${m.name}</td>
          <td class="py-2">${(m.context / 1000).toFixed(0)}k tokens</td>
          <td class="py-2">$${m.inPrice.toFixed(2)} / $${m.outPrice.toFixed(2)}</td>
          <td class="py-2 text-right">$${cost.toFixed(5)}</td>
        </tr>`;
    });
  }
}

// 2. WCAG Contrast Calculator
function hexToLuminance(hex) {
  const rgb = hex.replace('#', '').match(/.{2}/g).map((x) => {
    const c = parseInt(x, 16) / 255;
    return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
  });
  return 0.2126 * rgb[0] + 0.7152 * rgb[1] + 0.0722 * rgb[2];
}

function updateContrast() {
  const fg = document.getElementById('wcag-fg-color').value;
  const bg = document.getElementById('wcag-bg-color').value;
  document.getElementById('wcag-fg-text').value = fg;
  document.getElementById('wcag-bg-text').value = bg;

  const box = document.getElementById('contrast-preview-box');
  if (box) {
    box.style.color = fg;
    box.style.backgroundColor = bg;
  }

  const l1 = hexToLuminance(fg);
  const l2 = hexToLuminance(bg);
  const ratio = (Math.max(l1, l2) + 0.05) / (Math.min(l1, l2) + 0.05);

  document.getElementById('contrast-ratio').innerText = `${ratio.toFixed(2)}:1`;
  const passAANormal = ratio >= 4.5;
  const passAAANormal = ratio >= 7.0;

  const bAA = document.getElementById('badge-aa-normal');
  bAA.innerText = passAANormal ? 'PASS' : 'FAIL';
  bAA.className = passAANormal ? 'px-2.5 py-0.5 bg-emerald-500/10 text-emerald-500 border border-emerald-500/30 rounded-lg text-xs font-bold' : 'px-2.5 py-0.5 bg-rose-500/10 text-rose-500 border border-rose-500/30 rounded-lg text-xs font-bold';

  const bAAA = document.getElementById('badge-aaa-normal');
  bAAA.innerText = passAAANormal ? 'PASS' : 'FAIL';
  bAAA.className = passAAANormal ? 'px-2.5 py-0.5 bg-emerald-500/10 text-emerald-500 border border-emerald-500/30 rounded-lg text-xs font-bold' : 'px-2.5 py-0.5 bg-rose-500/10 text-rose-500 border border-rose-500/30 rounded-lg text-xs font-bold';
}

function syncColorInput(type) {
  const textVal = document.getElementById(`wcag-${type}-text`).value;
  if (/^#[0-9A-F]{6}$/i.test(textVal)) {
    document.getElementById(`wcag-${type}-color`).value = textVal;
    updateContrast();
  }
}

// 3. Markdown Table Generator
function addTableRow() {
  const tbody = document.getElementById('table-body');
  const colCount = document.getElementById('table-head-row').children.length;
  let tr = document.createElement('tr');
  for (let i = 0; i < colCount; i++) {
    tr.innerHTML += `<td class="p-2"><input type="text" value="New Item" class="w-full p-2 theme-editor border rounded-lg" oninput="generateMarkdownTable()"></td>`;
  }
  tbody.appendChild(tr);
  generateMarkdownTable();
}

function addTableCol() {
  const headRow = document.getElementById('table-head-row');
  const th = document.createElement('th');
  th.className = 'p-2';
  th.innerHTML = `<input type="text" value="Column" class="w-full p-2 theme-editor border rounded-lg font-bold" oninput="generateMarkdownTable()">`;
  headRow.appendChild(th);
  document.querySelectorAll('#table-body tr').forEach((tr) => {
    tr.innerHTML += `<td class="p-2"><input type="text" value="Data" class="w-full p-2 theme-editor border rounded-lg" oninput="generateMarkdownTable()"></td>`;
  });
  generateMarkdownTable();
}

function generateMarkdownTable() {
  const headers = Array.from(document.querySelectorAll('#table-head-row input')).map((i) => i.value.trim());
  let md = `| ${headers.join(' | ')} |\n| ${headers.map(() => '---').join(' | ')} |\n`;
  document.querySelectorAll('#table-body tr').forEach((tr) => {
    const row = Array.from(tr.querySelectorAll('input')).map((i) => i.value.trim());
    md += `| ${row.join(' | ')} |\n`;
  });
  document.getElementById('md-table-output').value = md;
}

// 4. Number Base Converter
function syncBaseConv(source) {
  const val = document.getElementById(`nb-${source}`).value.trim();
  let dec = NaN;
  try {
    if (source === 'dec') dec = parseInt(val, 10);
    if (source === 'hex') dec = parseInt(val, 16);
    if (source === 'bin') dec = parseInt(val, 2);
    if (source === 'oct') dec = parseInt(val, 8);
  } catch (e) {}

  if (isNaN(dec)) return;
  if (source !== 'dec') document.getElementById('nb-dec').value = dec.toString(10);
  if (source !== 'hex') document.getElementById('nb-hex').value = dec.toString(16).toUpperCase();
  if (source !== 'bin') document.getElementById('nb-bin').value = dec.toString(2);
  if (source !== 'oct') document.getElementById('nb-oct').value = dec.toString(8);
}

// 5. JSON Studio & Validator
function syntaxHighlightJson(jsonStr) {
  jsonStr = jsonStr.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  return jsonStr.replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g, function (m) {
    let cls = 'json-number';
    if (/^"/.test(m)) cls = /:$/.test(m) ? 'json-key' : 'json-string';
    else if (/true|false/.test(m)) cls = 'json-boolean';
    else if (/null/.test(m)) cls = 'json-null';
    return '<span class="' + cls + '">' + m + '</span>';
  });
}

function handleJsonStudioInput() {
  const val = document.getElementById('json-studio-input').value.trim();
  const status = document.getElementById('json-studio-status');
  const output = document.getElementById('json-studio-output');
  const metrics = document.getElementById('json-metrics');
  metrics.innerText = `${val ? val.split('\n').length : 0} lines | ${new Blob([val]).size} bytes`;
  if (!val) {
    output.innerHTML = '// Output...';
    return;
  }
  try {
    const parsed = JSON.parse(val);
    output.innerHTML = syntaxHighlightJson(JSON.stringify(parsed, null, 2));
    status.innerHTML = `<span class="text-emerald-500 font-bold">✓ Valid JSON</span>`;
  } catch (err) {
    output.innerHTML = `<span class="text-rose-500 font-bold">// ${err.message}</span>`;
    status.innerHTML = `<span class="text-rose-500 font-bold">✗ ${err.message}</span>`;
  }
}

function formatJsonStudio(sp) {
  const el = document.getElementById('json-studio-input');
  try {
    el.value = JSON.stringify(JSON.parse(el.value), null, sp);
    handleJsonStudioInput();
  } catch (e) {}
}

function minifyJsonStudio() {
  const el = document.getElementById('json-studio-input');
  try {
    el.value = JSON.stringify(JSON.parse(el.value));
    handleJsonStudioInput();
  } catch (e) {}
}

function loadSampleJsonStudio() {
  document.getElementById('json-studio-input').value = JSON.stringify({ app: 'MyDevToolbox', privacy: '100% Client-Side', tools: 120 }, null, 2);
  handleJsonStudioInput();
}

function clearJsonStudio() {
  document.getElementById('json-studio-input').value = '';
  handleJsonStudioInput();
}

function jsonToTs(obj, interfaceName = 'RootObject') {
  let result = `export interface ${interfaceName} {\n`;
  for (const [key, value] of Object.entries(obj)) {
    let type = typeof value;
    if (value === null) type = 'any';
    else if (Array.isArray(value)) type = value.length > 0 ? `${typeof value[0]}[]` : 'any[]';
    else if (type === 'object') type = 'Record<string, any>';
    result += `  ${key}: ${type};\n`;
  }
  result += '}';
  return result;
}

function convertJsonToTs() {
  const input = document.getElementById('json-ts-in').value.trim();
  try {
    document.getElementById('json-ts-out').value = jsonToTs(JSON.parse(input));
  } catch (e) {
    document.getElementById('json-ts-out').value = '// Invalid JSON';
  }
}

// 6. PDF Merger
let uploadedPdfFiles = [];
function handlePdfUpload(e) {
  uploadedPdfFiles = Array.from(e.target.files);
  if (uploadedPdfFiles.length === 0) return;
  const listEl = document.getElementById('pdf-file-list');
  listEl.innerHTML = '';
  uploadedPdfFiles.forEach((f) => {
    listEl.innerHTML += `<li class="p-2 theme-editor rounded-xl border flex justify-between"><span>📄 ${f.name}</span><span class="opacity-60">${(f.size / 1024).toFixed(1)} KB</span></li>`;
  });
  document.getElementById('pdf-list-container').classList.remove('hidden');
}

async function executePdfMerge() {
  if (uploadedPdfFiles.length < 2) {
    alert('Please select at least 2 PDF files.');
    return;
  }
  try {
    const mergedPdf = await PDFLib.PDFDocument.create();
    for (const file of uploadedPdfFiles) {
      const bytes = await file.arrayBuffer();
      const pdf = await PDFLib.PDFDocument.load(bytes);
      const copiedPages = await mergedPdf.copyPages(pdf, pdf.getPageIndices());
      copiedPages.forEach((p) => mergedPdf.addPage(p));
    }
    const mergedPdfFile = await mergedPdf.save();
    const a = document.createElement('a');
    a.href = URL.createObjectURL(new Blob([mergedPdfFile], { type: 'application/pdf' }));
    a.download = 'merged_document.pdf';
    a.click();
  } catch (err) {
    alert('PDF Error: ' + err.message);
  }
}

// 7. Diff Match Engine
function runTextDiff() {
  const t1 = document.getElementById('diff-text-1').value;
  const t2 = document.getElementById('diff-text-2').value;
  const out = document.getElementById('diff-result');
  if (!window.diff_match_patch) return;
  const dmp = new diff_match_patch();
  const diffs = dmp.diff_main(t1, t2);
  dmp.diff_cleanupSemantic(diffs);
  let html = '';
  diffs.forEach((part) => {
    const text = part[1].replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    if (part[0] === 1) html += `<span class="diff-insert">${text}</span>`;
    else if (part[0] === -1) html += `<span class="diff-delete">${text}</span>`;
    else html += text;
  });
  out.innerHTML = html || 'No differences found.';
}

// 8. Cryptographic Generators
function generateUuids() {
  let list = [];
  for (let i = 0; i < 5; i++) list.push(crypto.randomUUID ? crypto.randomUUID() : 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => ((Math.random() * 16) | 0).toString(16)));
  document.getElementById('uuid-output').value = list.join('\n');
}

function generatePassword() {
  const len = parseInt(document.getElementById('pwd-len').value) || 16;
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=[]{}|';
  const array = new Uint32Array(len);
  crypto.getRandomValues(array);
  let pwd = '';
  for (let i = 0; i < len; i++) pwd += chars[array[i] % chars.length];
  document.getElementById('pwd-output').value = pwd;
}

function runBase64(mode) {
  const input = document.getElementById('b64-input').value;
  try {
    if (mode === 'encode') document.getElementById('b64-output').value = btoa(unescape(encodeURIComponent(input)));
    else document.getElementById('b64-output').value = decodeURIComponent(escape(atob(input)));
  } catch (err) {
    document.getElementById('b64-output').value = 'Error: Invalid base64.';
  }
}

function generateQrCode() {
  const text = document.getElementById('qr-text').value.trim() || 'https://mydevtoolbox.in';
  const container = document.getElementById('qrcode-container');
  container.innerHTML = '';
  new QRCode(container, { text: text, width: 220, height: 220, colorDark: '#0f172a', colorLight: '#ffffff', correctLevel: QRCode.CorrectLevel.H });
}

function downloadQrCode() {
  const img = document.querySelector('#qrcode-container img');
  if (img && img.src) {
    const a = document.createElement('a');
    a.href = img.src;
    a.download = 'qrcode.png';
    a.click();
  }
}

async function computeHashes() {
  const str = document.getElementById('hash-input').value;
  const buf = new TextEncoder().encode(str);
  const h256 = await crypto.subtle.digest('SHA-256', buf);
  document.getElementById('hash-sha256').value = Array.from(new Uint8Array(h256))
    .map((b) => b.toString(16).padStart(2, '0'))
    .join('');
}

function decodeJwt() {
  const jwt = document.getElementById('jwt-input').value.trim();
  try {
    const parts = jwt.split('.');
    document.getElementById('jwt-header-out').innerText = JSON.stringify(JSON.parse(atob(parts[0])), null, 2);
    document.getElementById('jwt-payload-out').innerText = JSON.stringify(JSON.parse(atob(parts[1])), null, 2);
  } catch (e) {
    document.getElementById('jwt-header-out').innerText = '// Invalid Token';
    document.getElementById('jwt-payload-out').innerText = '// ' + e.message;
  }
}

function generateDummyCard() {
  const brand = document.getElementById('card-type-select').value;
  let prefix = brand === 'mastercard' ? '5425' : brand === 'amex' ? '3782' : '4532';
  let num = prefix;
  const targetLen = brand === 'amex' ? 15 : 16;
  while (num.length < targetLen - 1) num += Math.floor(Math.random() * 10);
  let sum = 0,
    alt = true;
  for (let i = num.length - 1; i >= 0; i--) {
    let n = parseInt(num.charAt(i), 10);
    if (alt) {
      n *= 2;
      if (n > 9) n -= 9;
    }
    sum += n;
    alt = !alt;
  }
  num += (10 - (sum % 10)) % 10;
  document.getElementById('dummy-card-num').innerText = num.match(/.{1,4}/g).join(' ');
  document.getElementById('dummy-card-meta').innerText = `12/29 | ${Math.floor(Math.random() * 899 + 100)}`;
}

// 9. Text, Units & Media Engines
function computeWordStats() {
  const text = document.getElementById('wc-input').value;
  const words = text.trim() ? text.trim().split(/\s+/).length : 0;
  const chars = text.length;
  const sentences = text.trim() ? (text.match(/[\w|\)][.?!]+(\s|$)/g) || []).length : 0;
  document.getElementById('wc-words').innerText = words;
  document.getElementById('wc-chars').innerText = chars;
  document.getElementById('wc-sentences').innerText = sentences;
  document.getElementById('wc-readtime').innerText = `${Math.ceil(words / 200)}m`;
}

function convertCase(mode) {
  const el = document.getElementById('case-input');
  const val = el.value;
  if (!val) return;
  if (mode === 'upper') el.value = val.toUpperCase();
  if (mode === 'lower') el.value = val.toLowerCase();
  if (mode === 'title') el.value = val.replace(/\w\S*/g, (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase());
  if (mode === 'camel') el.value = val.replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, (match, index) => (+match === 0 ? '' : index === 0 ? match.toLowerCase() : match.toUpperCase())).replace(/\s+/g, '');
  if (mode === 'snake') el.value = val.trim().toLowerCase().replace(/\s+/g, '_').replace(/[^\w]/g, '_');
  if (mode === 'kebab') el.value = val.trim().toLowerCase().replace(/\s+/g, '-').replace(/[^\w]/g, '-');
}

const unitCategories = {
  length: {
    units: { m: 'Meters (m)', km: 'Kilometers (km)', cm: 'Centimeters (cm)', mm: 'Millimeters (mm)', mi: 'Miles (mi)', yd: 'Yards (yd)', ft: 'Feet (ft)', in: 'Inches (in)' },
    rates: { m: 1, km: 1000, cm: 0.01, mm: 0.001, mi: 1609.344, yd: 0.9144, ft: 0.3048, in: 0.0254 }
  },
  weight: {
    units: { kg: 'Kilograms (kg)', g: 'Grams (g)', mg: 'Milligrams (mg)', lb: 'Pounds (lbs)', oz: 'Ounces (oz)', ton: 'Metric Ton (t)' },
    rates: { kg: 1, g: 0.001, mg: 0.000001, lb: 0.45359237, oz: 0.0283495, ton: 1000 }
  },
  temp: {
    units: { c: 'Celsius (°C)', f: 'Fahrenheit (°F)', k: 'Kelvin (K)' }
  },
  data: {
    units: { b: 'Bytes (B)', kb: 'Kilobytes (KB)', mb: 'Megabytes (MB)', gb: 'Gigabytes (GB)', tb: 'Terabytes (TB)' },
    rates: { b: 1, kb: 1024, mb: 1048576, gb: 1073741824, tb: 1099511627776 }
  }
};
let currentUnitCat = 'length';

function setUnitCategory(cat) {
  currentUnitCat = cat;
  ['length', 'weight', 'temp', 'data'].forEach((c) => {
    const btn = document.getElementById('btn-ucat-' + c);
    if (c === cat) btn.className = 'px-3.5 py-2 bg-teal-600 text-white rounded-xl shadow';
    else btn.className = 'px-3.5 py-2 theme-editor border rounded-xl';
  });

  const fromSel = document.getElementById('unit-from');
  const toSel = document.getElementById('unit-to');
  fromSel.innerHTML = '';
  toSel.innerHTML = '';

  const uObj = unitCategories[cat].units;
  const keys = Object.keys(uObj);
  keys.forEach((k, idx) => {
    fromSel.innerHTML += `<option value="${k}" ${idx === 0 ? 'selected' : ''}>${uObj[k]}</option>`;
    toSel.innerHTML += `<option value="${k}" ${idx === 1 ? 'selected' : ''}>${uObj[k]}</option>`;
  });
  convertUnits();
}

function convertUnits() {
  const val = parseFloat(document.getElementById('unit-val').value);
  const resEl = document.getElementById('unit-result');
  if (isNaN(val)) {
    resEl.value = '0';
    return;
  }
  const from = document.getElementById('unit-from').value;
  const to = document.getElementById('unit-to').value;

  if (currentUnitCat === 'temp') {
    let inCelsius = val;
    if (from === 'f') inCelsius = (val - 32) * (5 / 9);
    if (from === 'k') inCelsius = val - 273.15;
    let finalVal = inCelsius;
    if (to === 'f') finalVal = inCelsius * (9 / 5) + 32;
    if (to === 'k') finalVal = inCelsius + 273.15;
    resEl.value = `${finalVal.toFixed(2)}`;
    return;
  }

  const rates = unitCategories[currentUnitCat].rates;
  const inBase = val * rates[from];
  const converted = inBase / rates[to];
  resEl.value = `${converted.toLocaleString(undefined, { maximumFractionDigits: 6 })}`;
}

let currentUploadedImg = null;
function handleImageUpload(e) {
  const file = e.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = function (event) {
    currentUploadedImg = new Image();
    currentUploadedImg.onload = function () {
      document.getElementById('img-process-panel').classList.remove('hidden');
      processImage();
    };
    currentUploadedImg.src = event.target.result;
  };
  reader.readAsDataURL(file);
}

function processImage() {
  if (!currentUploadedImg) return;
  const canvas = document.createElement('canvas');
  canvas.width = currentUploadedImg.width;
  canvas.height = currentUploadedImg.height;
  const ctx = canvas.getContext('2d');
  ctx.drawImage(currentUploadedImg, 0, 0);
  const dataUrl = canvas.toDataURL('image/webp', 0.8);
  document.getElementById('img-download-link').href = dataUrl;
  document.getElementById('img-download-link').download = 'compressed.webp';
}

function explainCron() {
  const expr = document.getElementById('cron-input').value.trim();
  document.getElementById('cron-result').innerText = `Scheduled interval: [Expression: ${expr}]`;
}

function updateShadow() {
  const x = document.getElementById('bs-x').value;
  const y = document.getElementById('bs-y').value;
  const blur = document.getElementById('bs-blur').value;
  const spread = document.getElementById('bs-spread').value;
  const shadow = `${x}px ${y}px ${blur}px ${spread}px rgba(0, 0, 0, 0.25)`;
  document.getElementById('shadow-box').style.boxShadow = shadow;
  document.getElementById('shadow-code').innerText = `box-shadow: ${shadow};`;
}

function testRegex() {
  try {
    const p = document.getElementById('regex-pattern').value;
    const f = document.getElementById('regex-flags').value;
    const re = new RegExp(p, f);
    const matches = document.getElementById('regex-string').value.match(re);
    document.getElementById('regex-matches').innerText = `Matches found: ${matches ? matches.length : 0}`;
  } catch (e) {
    document.getElementById('regex-matches').innerText = 'Regex Syntax Error';
  }
}

function generateSlug() {
  const val = document.getElementById('slug-input').value;
  document.getElementById('slug-output').innerText =
    val
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, '')
      .replace(/[\s_-]+/g, '-')
      .replace(/^-+|-+$/g, '') || 'url-slug-preview';
}

function runUrlCodec(mode) {
  const val = document.getElementById('url-codec-input').value;
  try {
    document.getElementById('url-codec-output').value = mode === 'encode' ? encodeURIComponent(val) : decodeURIComponent(val);
  } catch (e) {
    document.getElementById('url-codec-output').value = 'Codec error';
  }
}
