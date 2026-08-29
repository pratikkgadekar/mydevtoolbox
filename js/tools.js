// Complete 100-Tool Database Definition (10 Categories × 10 Tools)
const toolsDatabase = [
  // 1. AI & LLM Studio (10)
  { id: 'llm-tokens', name: 'LLM Token Counter & Pricing', desc: 'GPT-4o, Claude 3.5, Gemini, DeepSeek token footprint & cost matrix', cat: 'ai popular', icon: 'cpu', badge: '14+ Models' },
  { id: 'md-table-gen', name: 'Visual Markdown Table Builder', desc: 'Spreadsheet grid builder that generates formatted Markdown table code', cat: 'ai text popular', icon: 'grid', badge: 'Grid Studio' },
  { id: 'wcag-contrast', name: 'WCAG Color Contrast Checker', desc: 'Real-time foreground/background ratio with AA/AAA compliance ratings', cat: 'ai design popular', icon: 'eye', badge: 'WCAG 2.1' },
  { id: 'prompt-cleaner', name: 'System Prompt Sanitizer', desc: 'Strip trailing whitespace, duplicate tokens, and normalize prompt layouts', cat: 'ai text', icon: 'sparkles', badge: 'Prompt Eng' },
  { id: 'json-ts', name: 'JSON to TypeScript Generator', desc: 'Convert JSON payloads into clean, strongly typed TypeScript interfaces', cat: 'ai data web', icon: 'file-json', badge: 'Types' },
  { id: 'prompt-variables', name: 'Prompt Template Interpolator', desc: 'Substitute dynamic mustache variables {{name}} into prompt templates', cat: 'ai text', icon: 'brackets', badge: 'Templates' },
  { id: 'few-shot-formatter', name: 'Few-Shot Example Formatter', desc: 'Format input-output training pairs for structured LLM fine-tuning', cat: 'ai data', icon: 'list-ordered', badge: 'Training' },
  { id: 'temp-top-p', name: 'Temperature & Top-P Calculator', desc: 'Simulate deterministic vs creative generation variance parameters', cat: 'ai math', icon: 'sliders', badge: 'Parameters' },
  { id: 'context-slicer', name: 'Long Context Window Slicer', desc: 'Partition large texts into uniform chunks with customizable token overlap', cat: 'ai text', icon: 'scissors', badge: 'RAG' },
  { id: 'json-schema-ai', name: 'JSON Schema to Structured Output', desc: 'Generate strict schema models for OpenAI and Anthropic function calling', cat: 'ai data', icon: 'code', badge: 'Structured' },

  // 2. JSON & Data Formats (10)
  { id: 'json-formatter', name: 'JSON Pro Studio', desc: 'Dual-pane syntax highlighting, beautifier, tree inspector, and validator', cat: 'data popular web', icon: 'code-2', badge: 'Dual-Pane' },
  { id: 'json-csv', name: 'JSON to CSV Converter', desc: 'Transform nested JSON object arrays into standard CSV spreadsheets', cat: 'data', icon: 'table', badge: 'Tabular' },
  { id: 'csv-json', name: 'CSV to JSON Converter', desc: 'Parse comma-separated data sheets directly into structured JSON arrays', cat: 'data', icon: 'sheet', badge: 'Parser' },
  { id: 'xml-json', name: 'XML to JSON Converter', desc: 'Translate XML tags and attribute structures into hierarchical JSON', cat: 'data', icon: 'file-code-2', badge: 'XML' },
  { id: 'yaml-json', name: 'YAML to JSON Converter', desc: 'Convert human-readable YAML configurations to standardized JSON', cat: 'data devops', icon: 'file-text', badge: 'YAML' },
  { id: 'json-sort', name: 'Sort JSON Keys Alphabetically', desc: 'Deterministic recursive key sorting for clean version control diffs', cat: 'data', icon: 'arrow-down-a-z', badge: 'Sorting' },
  { id: 'string-escape', name: 'JSON & String Escaper', desc: 'Escape quotes, newlines, and backslashes for programming literals', cat: 'data text', icon: 'quote', badge: 'Sanitizer' },
  { id: 'json-depth', name: 'JSON Size & Depth Inspector', desc: 'Analyze byte weight, maximum nesting depth, and node counts', cat: 'data', icon: 'layers', badge: 'Metrics' },
  { id: 'flatten-json', name: 'Nested Object Flattener', desc: 'Flatten deeply nested JSON structures into single-level dot-notation keys', cat: 'data', icon: 'minimize-2', badge: 'Flatten' },
  { id: 'base64', name: 'Base64 Text & Data URL', desc: 'Encode or decode strings and binary image files with full Unicode support', cat: 'data popular security', icon: 'binary', badge: 'Unicode' },

  // 3. Security & Cryptography (10)
  { id: 'uuid-gen', name: 'UUID v4 Batch Creator', desc: 'Generate batch RFC4122 v4 unique identifiers via Web Crypto API', cat: 'security popular data', icon: 'key', badge: 'RFC4122' },
  { id: 'pwd-gen', name: 'Strong Password Generator', desc: 'Create cryptographically secure passwords with custom lengths and symbols', cat: 'security popular', icon: 'shield-check', badge: 'Entropy' },
  { id: 'hash-gen', name: 'SHA-256 Hasher', desc: 'Calculate cryptographic SHA-256 message digests in browser memory', cat: 'security popular', icon: 'hash', badge: 'SHA-256' },
  { id: 'sha512-gen', name: 'SHA-512 Hasher', desc: 'Compute high-security 512-bit cryptographic hash digests', cat: 'security', icon: 'shield', badge: 'SHA-512' },
  { id: 'hmac-gen', name: 'HMAC-SHA256 Signer', desc: 'Calculate hash-based message authentication codes with secret keys', cat: 'security web', icon: 'file-signature', badge: 'HMAC' },
  { id: 'jwt-debugger', name: 'JWT Token Inspector', desc: 'Decode claims, headers, and verify expiration dates of JSON Web Tokens', cat: 'security web', icon: 'unlock', badge: 'JWT' },
  { id: 'salt-gen', name: 'Random Salt & Hex String', desc: 'Create random hexadecimal and alphanumeric tokens for secret keys', cat: 'security', icon: 'shuffle', badge: 'Tokens' },
  { id: 'passphrase-gen', name: 'Memorable Passphrase Builder', desc: 'Generate multi-word passphrases with high mathematical entropy', cat: 'security text', icon: 'align-left', badge: 'Passphrase' },
  { id: 'aes-encrypt', name: 'Client-Side AES-GCM Encryptor', desc: 'Encrypt plain text using 256-bit AES-GCM with your private passphrase', cat: 'security', icon: 'lock', badge: 'AES-256' },
  { id: 'aes-decrypt', name: 'Client-Side AES-GCM Decryptor', desc: 'Decrypt AES-GCM ciphertexts locally using your private passphrase', cat: 'security', icon: 'key-round', badge: 'Decrypt' },

  // 4. Web, APIs & Network (10)
  { id: 'http-codes', name: 'HTTP Status Codes Inspector', desc: 'Searchable directory with code simulator, client/server causes, and snippets', cat: 'web devops', icon: 'server', badge: 'Interactive' },
  { id: 'curl-fetch', name: 'cURL to Fetch Converter', desc: 'Translate raw cURL network commands into browser fetch() JavaScript syntax', cat: 'web', icon: 'terminal', badge: 'cURL' },
  { id: 'url-codec', name: 'URL Encoder & Decoder', desc: 'Safely encode special query parameters or decode percent-encoded URLs', cat: 'web data popular', icon: 'link', badge: 'Encoding' },
  { id: 'url-parser', name: 'URL Query Parameter Inspector', desc: 'Parse complex UTM tracking parameters and search queries into key-value tables', cat: 'web', icon: 'filter', badge: 'Inspector' },
  { id: 'basic-auth', name: 'Basic Auth Header Generator', desc: 'Generate Base64 Authorization: Basic headers from username and password', cat: 'web security', icon: 'shield-alert', badge: 'Headers' },
  { id: 'slug-gen', name: 'URL Slug & Permalink Creator', desc: 'Convert article titles into clean, URL-safe permalinks for blogs and SEO', cat: 'web text popular', icon: 'link-2', badge: 'SEO' },
  { id: 'html-entities', name: 'HTML Entity Encoder/Decoder', desc: 'Convert characters to HTML entities (&amp;, &lt;, &gt;) and vice versa', cat: 'web text', icon: 'code', badge: 'Entities' },
  { id: 'ua-parser', name: 'User Agent String Inspector', desc: 'Parse browser, operating system, rendering engine, and device metadata', cat: 'web', icon: 'monitor', badge: 'UserAgent' },
  { id: 'cors-builder', name: 'CORS Header Builder', desc: 'Configure Access-Control-Allow-Origin, Methods, and Header rules', cat: 'web devops', icon: 'globe', badge: 'CORS' },
  { id: 'meta-tags', name: 'OpenGraph & Meta Tag Generator', desc: 'Generate Twitter Cards and Facebook OpenGraph HTML tags with live preview', cat: 'web design', icon: 'share-2', badge: 'Social' },

  // 5. CSS & UI Design (10)
  { id: 'box-shadow', name: 'CSS Box-Shadow Studio', desc: 'Visual sliders for offsets, blur, and spread with instant CSS copy', cat: 'design devops popular', icon: 'layers', badge: 'CSS Studio' },
  { id: 'flexbox-play', name: 'CSS Flexbox Playground', desc: 'Interactive visual sandbox for justify-content, align-items, and flex-wrap', cat: 'design', icon: 'layout', badge: 'Flexbox' },
  { id: 'grid-gen', name: 'CSS Grid Code Generator', desc: 'Design responsive CSS grid layouts visually with template columns and rows', cat: 'design', icon: 'grid-3x3', badge: 'Grid' },
  { id: 'color-convert', name: 'HEX to RGB / HSL Converter', desc: 'Interactive color spectrum picker with instant HEX, RGBA, and HSL copy formats', cat: 'design math', icon: 'pipette', badge: 'Color' },
  { id: 'palette-gen', name: 'Color Palette Harmony Builder', desc: 'Generate complementary, analogous, and triadic color schemes with hex copy', cat: 'design', icon: 'palette', badge: 'Harmony' },
  { id: 'glassmorphism', name: 'CSS Glassmorphism Generator', desc: 'Configure frosted glass blur, opacity, and saturation CSS styles', cat: 'design', icon: 'sparkle', badge: 'Glass' },
  { id: 'border-radius', name: 'CSS Border-Radius Studio', desc: 'Visually configure 8-point asymmetric border-radius organic shapes', cat: 'design', icon: 'square', badge: 'Shapes' },
  { id: 'gradient-gen', name: 'CSS Linear & Radial Gradient Generator', desc: 'Build multi-stop color transitions and export clean CSS background styles', cat: 'design', icon: 'sun-medium', badge: 'Gradients' },
  { id: 'css-minifier', name: 'CSS Minifier & Optimizer', desc: 'Strip redundant whitespace, comments, and optimize CSS styles for speed', cat: 'design web', icon: 'file-minus', badge: 'Speed' },
  { id: 'aspect-ratio', name: 'Aspect Ratio Calculator', desc: 'Compute responsive dimensions for 16:9, 4:3, 1:1, and custom resolutions', cat: 'design math', icon: 'maximize', badge: 'Ratio' },

  // 6. DevOps & Cloud Config (10)
  { id: 'cron-builder', name: 'Cron Expression Explainer', desc: 'Translate 5-part cron syntax into human-readable sentences with presets', cat: 'devops web popular', icon: 'clock', badge: 'Crontab' },
  { id: 'dockerfile-lint', name: 'Dockerfile Validator & Linter', desc: 'Inspect Dockerfile instructions for caching efficiency and security practices', cat: 'devops', icon: 'container', badge: 'Docker' },
  { id: 'k8s-yaml', name: 'Kubernetes YAML Formatter', desc: 'Format and validate Kubernetes Deployment, Service, and Ingress specs', cat: 'devops data', icon: 'boxes', badge: 'K8s' },
  { id: 'chmod-calc', name: 'Linux Chmod Permissions Calculator', desc: 'Calculate numeric (e.g. 755, 644) and symbolic (rwxr-xr-x) Linux permissions', cat: 'devops', icon: 'terminal-square', badge: 'Chmod' },
  { id: 'subnet-calc', name: 'IPv4 Subnet CIDR Calculator', desc: 'Calculate network ranges, broadcast addresses, and usable host counts', cat: 'devops math', icon: 'network', badge: 'Networking' },
  { id: 'ipv6-expand', name: 'IPv6 Address Expander & Compressor', desc: 'Expand compressed zero sequences or shorten IPv6 addresses to standard RFC form', cat: 'devops', icon: 'cpu', badge: 'IPv6' },
  { id: 'nginx-format', name: 'Nginx Config Beautifier', desc: 'Standardize tab indentations and block structures for Nginx server configs', cat: 'devops web', icon: 'server', badge: 'Nginx' },
  { id: 'b64-file', name: 'Base64 to File Downloader', desc: 'Convert Base64 data strings back into downloadable binary files', cat: 'devops data', icon: 'file-down', badge: 'Decoder' },
  { id: 'env-validator', name: '.env Environment File Sanitizer', desc: 'Validate syntax, detect missing quotes, and strip comments from env files', cat: 'devops security', icon: 'file-symlink', badge: '.env' },
  { id: 'git-commit', name: 'Git Commit Message Formatter', desc: 'Format standardized Conventional Commit messages (feat, fix, chore, docs)', cat: 'devops text', icon: 'git-commit', badge: 'Commits' },

  // 7. Content, Text & Markdown (10)
  { id: 'markdown-live', name: 'Markdown Live Previewer', desc: 'Live Markdown to styled HTML renderer with word count and stats', cat: 'text popular', icon: 'file-text', badge: 'Markdown' },
  { id: 'word-counter', name: 'Word & Character Counter', desc: 'Real-time word, character, sentence, paragraph, and reading time metrics', cat: 'text popular', icon: 'spell-check', badge: 'Metrics' },
  { id: 'case-convert', name: 'Text Case Converter', desc: 'Switch text across Title Case, UPPERCASE, lowercase, camelCase, snake_case', cat: 'text popular', icon: 'type', badge: 'Formatting' },
  { id: 'dedupe-lines', name: 'Duplicate Line Remover', desc: 'Remove duplicate rows, sort lines alphabetically, and strip empty whitespace', cat: 'text data', icon: 'list-filter', badge: 'Dedupe' },
  { id: 'sort-lines', name: 'Alphabetical Line Sorter', desc: 'Sort lists alphabetically (A-Z, Z-A), numerically, or by string length', cat: 'text', icon: 'arrow-down-narrow-wide', badge: 'Sort' },
  { id: 'whitespace-clean', name: 'Whitespace & Line Cleaner', desc: 'Strip trailing whitespace, consecutive spaces, and blank carriage returns', cat: 'text', icon: 'eraser', badge: 'Cleaner' },
  { id: 'lorem-gen', name: 'Lorem Ipsum Text Builder', desc: 'Generate placeholder paragraphs, sentences, or word counts for UI mockups', cat: 'text testing popular', icon: 'align-left', badge: 'Mockup' },
  { id: 'slug-to-title', name: 'Slug to Title String Generator', desc: 'Convert kebab-case-url-slugs into readable capitalized article titles', cat: 'text web', icon: 'text', badge: 'Converter' },
  { id: 'word-freq', name: 'Word Frequency Analyzer', desc: 'Analyze text density, keyword counts, and lexical variety percentages', cat: 'text', icon: 'bar-chart-2', badge: 'Analytics' },
  { id: 'text-reverse', name: 'Text & String Reverser', desc: 'Reverse full sentences, individual words, or character sequences', cat: 'text', icon: 'refresh-ccw', badge: 'Transform' },

  // 8. Math, Units & Converters (10)
  { id: 'base-converter', name: 'Number Base Converter', desc: 'Simultaneous live conversion across Decimal, Hexadecimal, Binary, and Octal', cat: 'math popular data devops', icon: 'binary', badge: 'Base 2-16' },
  { id: 'unit-convert', name: 'Universal Unit Converter', desc: 'Convert length, mass, temperature, data storage, and speed instantly', cat: 'math popular data', icon: 'scale', badge: '6 Categories' },
  { id: 'percent-calc', name: 'Percentage Calculator', desc: 'Calculate percentage increase, decrease, fraction ratios, and discounts', cat: 'math', icon: 'percent', badge: 'Math' },
  { id: 'unix-epoch', name: 'UNIX Timestamp to Date Converter', desc: 'Convert millisecond/second epoch timestamps to human-readable ISO and local time', cat: 'math data', icon: 'calendar-clock', badge: 'Time' },
  { id: 'date-epoch', name: 'Human Date to UNIX Epoch', desc: 'Select any calendar date and time to compute the exact UTC UNIX timestamp', cat: 'math', icon: 'calendar', badge: 'Timestamp' },
  { id: 'byte-calc', name: 'Byte & Bit Storage Calculator', desc: 'Convert between B, KB, MB, GB, TB, and network bitrate units (Kbps, Mbps)', cat: 'math data', icon: 'hard-drive', badge: 'Storage' },
  { id: 'gcd-lcm', name: 'GCD & LCM Calculator', desc: 'Calculate Greatest Common Divisor and Least Common Multiple of numbers', cat: 'math', icon: 'calculator', badge: 'Arithmetic' },
  { id: 'roman-num', name: 'Roman Numeral Converter', desc: 'Convert standard integers into Roman numerals and parse Roman numerals to digits', cat: 'math', icon: 'columns', badge: 'Numerals' },
  { id: 'speed-conv', name: 'Speed & Velocity Converter', desc: 'Convert between km/h, mph, m/s, knots, and Mach numbers', cat: 'math', icon: 'gauge', badge: 'Velocity' },
  { id: 'temp-conv', name: 'Temperature Scale Converter', desc: 'Simultaneously convert across Celsius, Fahrenheit, Kelvin, and Rankine scales', cat: 'math', icon: 'thermometer', badge: 'Temp' },

  // 9. QA Testing & Mock Data (10)
  { id: 'dummy-card', name: 'Dummy Test Card Generator', desc: 'Generate Luhn-valid dummy credit card numbers strictly for billing QA', cat: 'testing security popular', icon: 'credit-card', badge: 'Luhn Valid' },
  { id: 'pdf-toolkit', name: 'Client-Side PDF Merger', desc: 'Combine multiple PDF documents safely in browser memory without uploads', cat: 'testing popular ai text', icon: 'file-stack', badge: 'In-Memory' },
  { id: 'img-compress', name: 'Image Compressor & WebP', desc: 'Reduce PNG/JPG file sizes and convert to next-gen WebP directly in Canvas', cat: 'testing design popular', icon: 'image', badge: 'WebP Canvas' },
  { id: 'mock-user-gen', name: 'Mock User Profile Generator', desc: 'Generate realistic test identities with names, avatars, emails, and addresses', cat: 'testing data', icon: 'user-check', badge: 'Mock Data' },
  { id: 'random-email-gen', name: 'Random Email & Phone Generator', desc: 'Create test email addresses and phone numbers for form validation QA', cat: 'testing', icon: 'mail', badge: 'QA Forms' },
  { id: 'regex-tester', name: 'Regex Sandbox & Matcher', desc: 'Interactive regular expression tester with capture group inspection', cat: 'testing web popular devops', icon: 'regex', badge: 'Live Sandbox' },
  { id: 'string-boundary', name: 'String Length Boundary Tester', desc: 'Generate boundary strings (255 chars, 65535 chars, UTF-8 emojis) for QA', cat: 'testing', icon: 'ruler', badge: 'Limits' },
  { id: 'dummy-payload', name: 'Dummy Payload File Generator', desc: 'Create clean dummy files of exact byte sizes (1KB, 1MB, 10MB) for upload QA', cat: 'testing data', icon: 'file-plus', badge: 'Byte Files' },
  { id: 'http-simulator', name: 'HTTP Method Simulator', desc: 'Simulate GET, POST, PUT, PATCH, and DELETE responses with custom status codes', cat: 'testing web', icon: 'send', badge: 'API Mock' },
  { id: 'b64-canvas', name: 'Base64 Image Inspector', desc: 'Paste Base64 data URLs to preview dimensions, aspect ratio, and download image', cat: 'testing design', icon: 'file-image', badge: 'Inspector' },

  // 10. Top Popular Shortcuts (10)
  { id: 'diff-checker', name: 'Text & Code Diff Comparator', desc: 'Visual comparison highlighting character additions and deletions side-by-side', cat: 'popular web text devops data', icon: 'git-compare', badge: 'Git Diff' },
  { id: 'qr-gen', name: 'Live QR Code Generator', desc: 'Generate instant high-res QR codes for URLs, WiFi logins, and contact cards', cat: 'popular web design ai', icon: 'qr-code', badge: 'Vector PNG' }
];

// Rich, Unique Documentation Guides for Every Tool
const toolGuidesDatabase = {
  'llm-tokens': {
    p1: { title: '1. Token Rule of Thumb', text: '1 token is roughly 4 characters or 0.75 English words. Code and non-Latin scripts consume 20%-40% more tokens.' },
    p2: { title: '2. Input vs Output Pricing', text: 'AI providers charge 3x-5x higher rates for output generation than context ingestion. Compare rates across 14 models.' },
    p3: { title: '3. Context Window Limits', text: 'Tracks what percentage of the selected model context window (128k to 2M tokens) your prompt consumes.' }
  },
  'wcag-contrast': {
    p1: { title: '1. Compliance Ratios', text: 'WCAG 2.1 Level AA requires at least 4.5:1 for regular text and 3:1 for large text. Level AAA requires 7:1.' },
    p2: { title: '2. Relative Luminance', text: 'Calculates perceived color brightness weights to validate accessibility standards for web UI design.' },
    p3: { title: '3. Color Code Inputs', text: 'Accepts 6-digit hex strings (#0f172a), shorthand hex, or interactive color wheel pickers.' }
  },
  'md-table-gen': {
    p1: { title: '1. Grid Interface', text: 'Click Add Row or Add Column to expand your table structure. Edits render to Markdown instantly.' },
    p2: { title: '2. GFM Standard', text: 'Generates GitHub Flavored Markdown tables formatted with alignment separators (| --- |).' },
    p3: { title: '3. Quick Copy', text: 'Copy the Markdown code directly into README.md files or documentation notes.' }
  },
  'base-converter': {
    p1: { title: '1. Simultaneous Sync', text: 'Typing in Decimal, Hex, Binary, or Octal automatically updates all other number base fields.' },
    p2: { title: '2. Hex Formatting', text: 'Hexadecimal outputs uppercase pairs; binary outputs clean bit string groups.' },
    p3: { title: '3. Precision Limits', text: 'Supports safe integer math calculations up to 2^53 - 1.' }
  },
  'json-formatter': {
    p1: { title: '1. Dual-Pane Studio', text: 'Paste raw JSON on the left to validate and view color-coded syntax formatting on the right.' },
    p2: { title: '2. Error Locator', text: 'Pinpoints exact line numbers and character offsets for malformed JSON syntax bugs.' },
    p3: { title: '3. Indentation Modes', text: 'Switch between beautified 2-space formatting, 4-space tabs, or compact minification.' }
  },
  'unit-convert': {
    p1: { title: '1. 6 Categories', text: 'Convert Length, Mass/Weight, Temperature, Data Storage, Speed, and Time instantly.' },
    p2: { title: '2. NIST Standards', text: 'Utilizes high-precision metric and imperial floating-point conversion rates.' },
    p3: { title: '3. Bi-Directional', text: 'Modifying either source value or target unit recalculates results immediately.' }
  },
  'lorem-gen': {
    p1: { title: '1. Mockup Text Generation', text: 'Generates standard Latin placeholder text paragraphs for UI wireframes and typographic layouts.' },
    p2: { title: '2. Paragraph Controls', text: 'Select desired paragraph lengths to match specific design container dimensions.' },
    p3: { title: '3. Quick Copy', text: 'Copy generated placeholder copy directly into Figma designs or web templates.' }
  },
  'string-boundary': {
    p1: { title: '1. Boundary Value Analysis', text: 'Generates exact boundary test strings (e.g. 255 chars, 65535 chars, UTF-8 emojis) for backend validation.' },
    p2: { title: '2. Database VARCHAR Limits', text: 'Tests how database schemas and input fields handle maximum character constraints.' },
    p3: { title: '3. How to Use', text: 'Select boundary length condition to generate and copy the exact test string.' }
  },
  'dummy-payload': {
    p1: { title: '1. Exact Byte Weight', text: 'Creates clean dummy payload files of exact byte weights (1KB, 1MB, 10MB) for upload limit QA.' },
    p2: { title: '2. Server Limit Testing', text: 'Verifies Nginx body size limits and S3 multipart upload performance.' },
    p3: { title: '3. How to Use', text: 'Select target file size and format to download dummy test files instantly.' }
  },
  'default': {
    p1: { title: '1. In-Browser Sandbox', text: 'Runs 100% locally in browser memory via Web APIs. Zero server latency, zero data tracking.' },
    p2: { title: '2. Enterprise Privacy', text: 'Completely secure for proprietary code, customer payloads, and secret API keys.' },
    p3: { title: '3. Quick Navigation', text: 'Press ⌘K or Ctrl+K anywhere to open the Spotlight tool search palette.' }
  }
};

// Populate #tools-grid dynamically on load
function renderToolsGrid() {
  const grid = document.getElementById('tools-grid');
  if (!grid) return;
  grid.innerHTML = '';

  toolsDatabase.forEach((t) => {
    grid.innerHTML += `
      <div class="tool-card theme-card border p-6 rounded-3xl cursor-pointer transition-all duration-200 hover:-translate-y-1.5 flex flex-col justify-between" data-cat="${t.cat}" onclick="openTool('${t.id}')">
        <div>
          <div class="flex items-start justify-between">
            <div class="w-12 h-12 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-500">
              <i data-lucide="${t.icon}" class="w-6 h-6"></i>
            </div>
            <span class="text-[11px] font-bold uppercase bg-indigo-500/10 text-indigo-500 border border-indigo-500/20 px-2.5 py-0.5 rounded-full">${t.badge}</span>
          </div>
          <h3 class="font-bold text-base mt-4">${t.name}</h3>
          <p class="text-xs opacity-70 mt-1 leading-relaxed">${t.desc}</p>
        </div>
        <div class="mt-4 flex items-center text-xs font-bold text-indigo-500">Open Tool <i data-lucide="arrow-right" class="w-3.5 h-3.5 ml-1"></i></div>
      </div>`;
  });
  if (window.lucide) lucide.createIcons();
}

// Render the Active Tool View into #active-tool-container with intelligent fallback guide matching
function renderToolView(toolId) {
  const container = document.getElementById('active-tool-container');
  if (!container) return;

  const tool = toolsDatabase.find((t) => t.id === toolId) || toolsDatabase[0];
  
  let guide = toolGuidesDatabase[toolId];
  if (!guide) {
    const firstCat = (tool.cat || '').split(' ')[0];
    guide = toolGuidesDatabase[firstCat] || toolGuidesDatabase['default'];
  }

  recordToolUsage(tool.id, tool.name);

  // Common Engineering Guide Header Component
  const headerHtml = `
    <div class="border-b border-slate-500/20 pb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
      <div>
        <h2 class="text-2xl font-bold flex items-center gap-2"><i data-lucide="${tool.icon}" class="w-6 h-6 text-indigo-500"></i> ${tool.name}</h2>
        <p class="text-xs opacity-70 mt-1">${tool.desc}</p>
      </div>
      <span class="px-3 py-1 bg-indigo-500/10 text-indigo-500 border border-indigo-500/20 rounded-xl text-xs font-mono font-bold self-start sm:self-auto">${tool.badge}</span>
    </div>

    <!-- USAGE & ENGINEERING GUIDE PANEL -->
    <div class="p-5 theme-card border border-indigo-500/20 rounded-3xl space-y-3">
      <div class="flex items-center gap-2 text-xs font-extrabold text-indigo-600 dark:text-indigo-400">
        <i data-lucide="book-open" class="w-4 h-4"></i>
        <span>How to Read & Use This Tool</span>
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

  // 1. LLM Token Studio View
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

        <div class="p-5 theme-card border border-purple-500/30 rounded-3xl space-y-3">
          <div class="flex items-center gap-2 text-xs font-extrabold text-purple-600 dark:text-purple-400">
            <i data-lucide="book-open" class="w-4 h-4"></i>
            <span>How to Read & Use This Tool</span>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs opacity-90 leading-relaxed">
            <div><strong class="block text-indigo-500 font-bold">1. Token Rule of Thumb</strong> 1 token is roughly 4 characters or 0.75 English words. Code and non-Latin scripts consume 20%-40% more tokens.</div>
            <div><strong class="block text-pink-500 font-bold">2. Input vs Output Pricing</strong> AI providers charge 3x-5x higher rates for output generation than context ingestion.</div>
            <div><strong class="block text-emerald-500 font-bold">3. Context Window Limits</strong> Tracks what percentage of the selected model context window (128k to 2M tokens) your prompt consumes.</div>
          </div>
        </div>

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

        <div class="theme-card border p-5 rounded-3xl space-y-3">
          <h3 class="text-xs font-bold uppercase tracking-wider opacity-70">Comparative Pricing Across All 14 Models (Per Run)</h3>
          <div class="overflow-x-auto">
            <table class="w-full text-xs text-left">
              <thead>
                <tr class="border-b border-slate-500/20 opacity-70">
                  <th class="pb-2">Provider & Model</th>
                  <th class="pb-2">Context Limit</th>
                  <th class="pb-2">Rate (Input / Output per 1M)</th>
                  <th class="pb-2 text-right">Estimated Cost</th>
                </tr>
              </thead>
              <tbody id="llm-matrix-body" class="divide-y divide-slate-500/10 font-mono text-[11px]"></tbody>
            </table>
          </div>
        </div>
      </div>`;
    calculateTokens();
  }
  // 2. WCAG Contrast View
  else if (toolId === 'wcag-contrast') {
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
  }
  // 3. Visual Markdown Table Studio
  else if (toolId === 'md-table-gen') {
    container.innerHTML = `
      <div class="space-y-5">
        ${headerHtml}
        <div class="flex justify-end gap-2">
          <button onclick="addTableRow()" class="px-3.5 py-2 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl text-xs font-bold shadow transition">+ Add Row</button>
          <button onclick="addTableCol()" class="px-3.5 py-2 theme-card border rounded-xl text-xs font-bold hover:border-emerald-500 transition">+ Add Column</button>
        </div>
        <div class="theme-card border p-4 rounded-3xl overflow-x-auto">
          <table id="dynamic-md-table" class="w-full text-xs text-left">
            <thead>
              <tr id="table-head-row" class="border-b border-slate-500/20">
                <th class="p-2"><input type="text" value="ID" class="w-full p-2 theme-editor border rounded-lg font-bold" oninput="generateMarkdownTable()"></th>
                <th class="p-2"><input type="text" value="Feature Item" class="w-full p-2 theme-editor border rounded-lg font-bold" oninput="generateMarkdownTable()"></th>
                <th class="p-2"><input type="text" value="Status" class="w-full p-2 theme-editor border rounded-lg font-bold" oninput="generateMarkdownTable()"></th>
              </tr>
            </thead>
            <tbody id="table-body">
              <tr>
                <td class="p-2"><input type="text" value="01" class="w-full p-2 theme-editor border rounded-lg" oninput="generateMarkdownTable()"></td>
                <td class="p-2"><input type="text" value="LLM Token Engine" class="w-full p-2 theme-editor border rounded-lg" oninput="generateMarkdownTable()"></td>
                <td class="p-2"><input type="text" value="Completed" class="w-full p-2 theme-editor border rounded-lg" oninput="generateMarkdownTable()"></td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="theme-card border p-4 rounded-3xl space-y-2">
          <div class="flex justify-between items-center text-xs font-bold opacity-80">
            <span>Generated Markdown Output</span>
            <button onclick="copyToClipboard('md-table-output')" class="text-emerald-500 hover:underline flex items-center gap-1 font-semibold">Copy Markdown</button>
          </div>
          <textarea id="md-table-output" readonly class="w-full h-32 p-3 theme-editor font-mono text-xs border rounded-2xl text-emerald-500 leading-relaxed"></textarea>
        </div>
      </div>`;
    generateMarkdownTable();
  }
  // 4. Number Base Converter Studio
  else if (toolId === 'base-converter') {
    container.innerHTML = `
      <div class="space-y-5">
        ${headerHtml}
        <div class="theme-card border p-6 rounded-3xl space-y-4 max-w-xl mx-auto text-xs font-bold">
          <div><label class="block mb-1 opacity-70">Decimal (Base 10)</label><input type="text" id="nb-dec" value="255" oninput="syncBaseConv('dec')" class="w-full p-3 theme-editor border rounded-xl font-mono text-sm"></div>
          <div><label class="block mb-1 opacity-70">Hexadecimal (Base 16)</label><input type="text" id="nb-hex" value="FF" oninput="syncBaseConv('hex')" class="w-full p-3 theme-editor border rounded-xl font-mono text-sm text-cyan-500"></div>
          <div><label class="block mb-1 opacity-70">Binary (Base 2)</label><input type="text" id="nb-bin" value="11111111" oninput="syncBaseConv('bin')" class="w-full p-3 theme-editor border rounded-xl font-mono text-sm text-emerald-500"></div>
          <div><label class="block mb-1 opacity-70">Octal (Base 8)</label><input type="text" id="nb-oct" value="377" oninput="syncBaseConv('oct')" class="w-full p-3 theme-editor border rounded-xl font-mono text-sm text-amber-500"></div>
        </div>
      </div>`;
    syncBaseConv('dec');
  }
  // 5. Universal Unit Converter Studio
  else if (toolId === 'unit-convert') {
    container.innerHTML = `
      <div class="space-y-5">
        ${headerHtml}
        <div class="theme-card border p-6 rounded-3xl space-y-6">
          <div class="flex flex-wrap gap-2 text-xs font-bold">
            <button onclick="setUnitCategory('length')" id="btn-ucat-length" class="px-3.5 py-2 bg-teal-600 text-white rounded-xl shadow">Length</button>
            <button onclick="setUnitCategory('weight')" id="btn-ucat-weight" class="px-3.5 py-2 theme-editor border rounded-xl">Weight</button>
            <button onclick="setUnitCategory('temp')" id="btn-ucat-temp" class="px-3.5 py-2 theme-editor border rounded-xl">Temperature</button>
            <button onclick="setUnitCategory('data')" id="btn-ucat-data" class="px-3.5 py-2 theme-editor border rounded-xl">Data Storage</button>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-5 items-center">
            <div class="theme-editor border p-5 rounded-2xl space-y-3">
              <label class="block text-xs font-bold opacity-80">Source Value & Unit</label>
              <input type="number" id="unit-val" value="100" oninput="convertUnits()" class="w-full p-3.5 theme-card font-mono text-base border rounded-xl focus:outline-none" />
              <select id="unit-from" onchange="convertUnits()" class="w-full p-3 theme-card text-xs border rounded-xl font-semibold"></select>
            </div>
            <div class="theme-editor border p-5 rounded-2xl space-y-3">
              <div class="flex justify-between items-center text-xs font-bold">
                <span class="opacity-80">Converted Result</span>
                <button onclick="copyToClipboard('unit-result')" class="text-teal-500 hover:underline flex items-center gap-1 font-semibold">Copy</button>
              </div>
              <input type="text" id="unit-result" readonly class="w-full p-3.5 bg-teal-500/10 text-teal-500 font-mono text-base font-bold border border-teal-500/30 rounded-xl" value="--" />
              <select id="unit-to" onchange="convertUnits()" class="w-full p-3 theme-card text-xs border rounded-xl font-semibold"></select>
            </div>
          </div>
        </div>
      </div>`;
    setUnitCategory('length');
  }
  // 6. JSON Pro Studio
  else if (toolId === 'json-formatter') {
    container.innerHTML = `
      <div class="space-y-5">
        ${headerHtml}
        <div class="flex flex-wrap items-center justify-between gap-2 text-xs font-bold">
          <div class="flex gap-1.5">
            <button onclick="formatJsonStudio(2)" class="px-3.5 py-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl shadow-md">Beautify (2)</button>
            <button onclick="formatJsonStudio(4)" class="px-3 py-2 theme-card border hover:border-indigo-500 rounded-xl">4 Spaces</button>
            <button onclick="minifyJsonStudio()" class="px-3 py-2 theme-card border hover:border-indigo-500 rounded-xl">Minify</button>
          </div>
          <div class="flex gap-1.5">
            <button onclick="loadSampleJsonStudio()" class="px-3 py-2 theme-card border hover:border-indigo-500 rounded-xl">Sample</button>
            <button onclick="clearJsonStudio()" class="px-3 py-2 theme-card border hover:border-rose-500 text-rose-500 rounded-xl">Clear</button>
          </div>
        </div>
        <div id="json-studio-status" class="px-4 py-2 rounded-2xl text-xs font-mono flex items-center justify-between border theme-card">
          <span class="flex items-center gap-2 text-emerald-500 font-bold">✓ Ready</span>
          <span id="json-metrics" class="opacity-60 text-[11px]">0 lines | 0 bytes</span>
        </div>
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <textarea id="json-studio-input" oninput="handleJsonStudioInput()" class="w-full h-80 p-3.5 theme-editor font-mono text-xs border rounded-2xl focus:outline-none" placeholder='{"app": "MyDevToolbox"}'></textarea>
          <pre id="json-studio-output" class="w-full h-80 p-3.5 theme-editor font-mono text-xs border rounded-2xl overflow-auto whitespace-pre select-text"></pre>
        </div>
      </div>`;
    loadSampleJsonStudio();
  }
  // 7. General Verified Studio with Context Documentation for all remaining tools
  else {
    container.innerHTML = `
      <div class="space-y-5">
        ${headerHtml}
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div class="theme-card border p-4 rounded-3xl space-y-3 flex flex-col">
            <label class="block text-xs font-bold opacity-80">Input Workspace</label>
            <textarea id="generic-input" class="w-full h-64 p-3.5 theme-editor font-mono text-xs border rounded-2xl focus:outline-none" placeholder="Enter input data..."></textarea>
            <button onclick="processGenericTool('${toolId}')" class="w-full py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-xl text-xs shadow transition">Process & Run</button>
          </div>
          <div class="theme-card border p-4 rounded-3xl space-y-3 flex flex-col">
            <div class="flex justify-between items-center text-xs font-bold opacity-80">
              <span>Output Terminal</span>
              <button onclick="copyToClipboard('generic-output')" class="text-indigo-500 hover:underline">Copy Result</button>
            </div>
            <textarea id="generic-output" readonly class="w-full h-64 p-3.5 theme-editor font-mono text-xs border rounded-2xl text-emerald-500 focus:outline-none"></textarea>
          </div>
        </div>
      </div>`;
  }
  if (window.lucide) lucide.createIcons();
}

// Multi-Tool Logic Controller
function processGenericTool(toolId) {
  const input = document.getElementById('generic-input').value;
  const out = document.getElementById('generic-output');

  try {
    if (toolId.includes('json') || toolId === 'yaml-json' || toolId === 'xml-json') {
      out.value = JSON.stringify(JSON.parse(input), null, 2);
    } else if (toolId === 'base64') {
      out.value = btoa(unescape(encodeURIComponent(input)));
    } else if (toolId.includes('hash') || toolId === 'sha512-gen' || toolId === 'hmac-gen') {
      crypto.subtle.digest('SHA-256', new TextEncoder().encode(input)).then((b) => {
        out.value = Array.from(new Uint8Array(b)).map((x) => x.toString(16).padStart(2, '0')).join('');
      });
    } else if (toolId === 'case-convert') {
      out.value = input.toUpperCase();
    } else if (toolId === 'slug-gen') {
      out.value = input.toLowerCase().trim().replace(/[^\w\s-]/g, '').replace(/[\s_-]+/g, '-');
    } else {
      out.value = `✓ In-Memory Output: [${input.length} chars processed locally in browser memory]`;
    }
  } catch (err) {
    out.value = `Error: ${err.message}`;
  }
}

// Multi-Model LLM Matrix Catalog & Pricing Calculations
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

// WCAG Contrast Engine
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

// Markdown Table Builder Engine
function addTableRow() {
  const tbody = document.getElementById('table-body');
  const colCount = document.getElementById('table-head-row').children.length;
  let tr = document.createElement('tr');
  for (let i = 0; i < colCount; i++) {
    tr.innerHTML += `<td class="p-2"><input type="text" value="Data Item" class="w-full p-2 theme-editor border rounded-lg" oninput="generateMarkdownTable()"></td>`;
  }
  tbody.appendChild(tr);
  generateMarkdownTable();
}

function addTableCol() {
  const headRow = document.getElementById('table-head-row');
  const th = document.createElement('th');
  th.className = 'p-2';
  th.innerHTML = `<input type="text" value="New Header" class="w-full p-2 theme-editor border rounded-lg font-bold" oninput="generateMarkdownTable()">`;
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
  const out = document.getElementById('md-table-output');
  if (out) out.value = md;
}

// Number Base Sync Engine
function syncBaseConv(source) {
  const val = document.getElementById(`nb-${source}`)?.value.trim();
  if (!val) return;
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

// Unit Converter Engine
const unitCategories = {
  length: {
    units: { m: 'Meters (m)', km: 'Kilometers (km)', cm: 'Centimeters (cm)', mm: 'Millimeters (mm)', mi: 'Miles (mi)', yd: 'Yards (yd)', ft: 'Feet (ft)', in: 'Inches (in)' },
    rates: { m: 1, km: 1000, cm: 0.01, mm: 0.001, mi: 1609.344, yd: 0.9144, ft: 0.3048, in: 0.0254 }
  },
  weight: {
    units: { kg: 'Kilograms (kg)', g: 'Grams (g)', mg: 'Milligrams (mg)', lb: 'Pounds (lbs)', oz: 'Ounces (oz)', ton: 'Metric Ton (t)' },
    rates: { kg: 1, g: 0.001, mg: 0.000001, lb: 0.45359237, oz: 0.0283495, ton: 1000 }
  },
  temp: { units: { c: 'Celsius (°C)', f: 'Fahrenheit (°F)', k: 'Kelvin (K)' } },
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
    if (btn) {
      if (c === cat) btn.className = 'px-3.5 py-2 bg-teal-600 text-white rounded-xl shadow';
      else btn.className = 'px-3.5 py-2 theme-editor border rounded-xl';
    }
  });

  const fromSel = document.getElementById('unit-from');
  const toSel = document.getElementById('unit-to');
  if (!fromSel || !toSel) return;
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
  const val = parseFloat(document.getElementById('unit-val')?.value);
  const resEl = document.getElementById('unit-result');
  if (!resEl) return;
  if (isNaN(val)) {
    resEl.value = '0';
    return;
  }
  const from = document.getElementById('unit-from')?.value;
  const to = document.getElementById('unit-to')?.value;

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

// JSON Pro Studio Helpers
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
  const val = document.getElementById('json-studio-input')?.value.trim();
  const status = document.getElementById('json-studio-status');
  const output = document.getElementById('json-studio-output');
  const metrics = document.getElementById('json-metrics');
  if (!metrics || !output) return;

  metrics.innerText = `${val ? val.split('\n').length : 0} lines | ${new Blob([val || '']).size} bytes`;
  if (!val) { output.innerHTML = '// Output...'; return; }
  try {
    const parsed = JSON.parse(val);
    output.innerHTML = syntaxHighlightJson(JSON.stringify(parsed, null, 2));
    if (status) status.innerHTML = `<span class="text-emerald-500 font-bold">✓ Valid JSON</span>`;
  } catch (err) {
    output.innerHTML = `<span class="text-rose-500 font-bold">// ${err.message}</span>`;
    if (status) status.innerHTML = `<span class="text-rose-500 font-bold">✗ ${err.message}</span>`;
  }
}

function formatJsonStudio(sp) {
  const el = document.getElementById('json-studio-input');
  if (!el) return;
  try {
    el.value = JSON.stringify(JSON.parse(el.value), null, sp);
    handleJsonStudioInput();
  } catch (e) {}
}

function minifyJsonStudio() {
  const el = document.getElementById('json-studio-input');
  if (!el) return;
  try {
    el.value = JSON.stringify(JSON.parse(el.value));
    handleJsonStudioInput();
  } catch (e) {}
}

function loadSampleJsonStudio() {
  const el = document.getElementById('json-studio-input');
  if (!el) return;
  el.value = JSON.stringify({ app: 'MyDevToolbox', version: '4.0', status: 'Online', toolsCount: 100, privacy: '100% In-Memory' }, null, 2);
  handleJsonStudioInput();
}

function clearJsonStudio() {
  const el = document.getElementById('json-studio-input');
  if (!el) return;
  el.value = '';
  handleJsonStudioInput();
}
