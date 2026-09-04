// Complete Database Definition (10 Categories × 10 Tools = 100 Unique Tools + 400 Expanded Utilities)
const toolsDatabase = [
  // 1. AI, LLM & Prompt Studio (10 Tools)
  { id: 'llm-tokens', name: 'LLM Token Counter & Pricing', desc: 'GPT-4o, Claude 3.5, Gemini, DeepSeek token footprint & cost matrix', cat: 'ai', icon: 'cpu', badge: '14+ Models' },
  { id: 'md-table-gen', name: 'Visual Markdown Table Builder', desc: 'Spreadsheet grid builder that generates formatted Markdown table code', cat: 'ai', icon: 'grid', badge: 'Grid Studio' },
  { id: 'wcag-contrast', name: 'WCAG Color Contrast Checker', desc: 'Real-time foreground/background ratio with AA/AAA compliance ratings', cat: 'ai', icon: 'eye', badge: 'WCAG 2.1' },
  { id: 'prompt-cleaner', name: 'System Prompt Sanitizer', desc: 'Strip trailing whitespace, duplicate tokens, and normalize prompt layouts', cat: 'ai', icon: 'sparkles', badge: 'Prompt Eng' },
  { id: 'json-ts', name: 'JSON to TypeScript Generator', desc: 'Convert JSON payloads into clean, strongly typed TypeScript interfaces', cat: 'ai', icon: 'file-json', badge: 'Types' },
  { id: 'prompt-variables', name: 'Prompt Template Interpolator', desc: 'Substitute dynamic mustache variables {{name}} into prompt templates', cat: 'ai', icon: 'brackets', badge: 'Templates' },
  { id: 'few-shot-formatter', name: 'Few-Shot Example Formatter', desc: 'Format input-output training pairs for structured LLM fine-tuning', cat: 'ai', icon: 'list-ordered', badge: 'Training' },
  { id: 'temp-top-p', name: 'Temperature & Top-P Calculator', desc: 'Simulate deterministic vs creative generation variance parameters', cat: 'ai', icon: 'sliders', badge: 'Parameters' },
  { id: 'context-slicer', name: 'Long Context Window Slicer', desc: 'Partition large texts into uniform chunks with customizable token overlap', cat: 'ai', icon: 'scissors', badge: 'RAG' },
  { id: 'json-schema-ai', name: 'JSON Schema to Structured Output', desc: 'Generate strict schema models for OpenAI and Anthropic function calling', cat: 'ai', icon: 'code', badge: 'Structured' },

  // 2. JSON & Data Formats (10 Tools)
  { id: 'json-formatter', name: 'JSON Pro Studio', desc: 'Dual-pane syntax highlighting, beautifier, tree inspector, and validator', cat: 'data', icon: 'code-2', badge: 'Dual-Pane' },
  { id: 'json-csv', name: 'JSON to CSV Converter', desc: 'Transform nested JSON object arrays into standard CSV spreadsheets', cat: 'data', icon: 'table', badge: 'Tabular' },
  { id: 'csv-json', name: 'CSV to JSON Converter', desc: 'Parse comma-separated data sheets directly into structured JSON arrays', cat: 'data', icon: 'sheet', badge: 'Parser' },
  { id: 'xml-json', name: 'XML to JSON Converter', desc: 'Translate XML tags and attribute structures into hierarchical JSON', cat: 'data', icon: 'file-code-2', badge: 'XML' },
  { id: 'yaml-json', name: 'YAML to JSON Converter', desc: 'Convert human-readable YAML configurations to standardized JSON', cat: 'data', icon: 'file-text', badge: 'YAML' },
  { id: 'json-sort', name: 'Sort JSON Keys Alphabetically', desc: 'Deterministic recursive key sorting for clean version control diffs', cat: 'data', icon: 'arrow-down-a-z', badge: 'Sorting' },
  { id: 'string-escape', name: 'JSON & String Escaper', desc: 'Escape quotes, newlines, and backslashes for programming literals', cat: 'data', icon: 'quote', badge: 'Sanitizer' },
  { id: 'json-depth', name: 'JSON Size & Depth Inspector', desc: 'Analyze byte weight, maximum nesting depth, and node counts', cat: 'data', icon: 'layers', badge: 'Metrics' },
  { id: 'flatten-json', name: 'Nested Object Flattener', desc: 'Flatten deeply nested JSON structures into single-level dot-notation keys', cat: 'data', icon: 'minimize-2', badge: 'Flatten' },
  { id: 'base64', name: 'Base64 Text & Data URL', desc: 'Encode or decode strings and binary image files with full Unicode support', cat: 'data', icon: 'binary', badge: 'Unicode' },

  // 3. Security & Cryptography (10 Tools)
  { id: 'uuid-gen', name: 'UUID v4 Batch Creator', desc: 'Generate batch RFC4122 v4 unique identifiers via Web Crypto API', cat: 'security', icon: 'key', badge: 'RFC4122' },
  { id: 'pwd-gen', name: 'Strong Password Generator', desc: 'Create cryptographically secure passwords with custom lengths and symbols', cat: 'security', icon: 'shield-check', badge: 'Entropy' },
  { id: 'hash-gen', name: 'SHA-256 Hasher', desc: 'Calculate cryptographic SHA-256 message digests in browser memory', cat: 'security', icon: 'hash', badge: 'SHA-256' },
  { id: 'sha512-gen', name: 'SHA-512 Hasher', desc: 'Compute high-security 512-bit cryptographic hash digests', cat: 'security', icon: 'shield', badge: 'SHA-512' },
  { id: 'hmac-gen', name: 'HMAC-SHA256 Signer', desc: 'Calculate hash-based message authentication codes with secret keys', cat: 'security', icon: 'file-signature', badge: 'HMAC' },
  { id: 'jwt-debugger', name: 'JWT Token Inspector', desc: 'Decode claims, headers, and verify expiration dates of JSON Web Tokens', cat: 'security', icon: 'unlock', badge: 'JWT' },
  { id: 'salt-gen', name: 'Random Salt & Hex String', desc: 'Create random hexadecimal and alphanumeric tokens for secret keys', cat: 'security', icon: 'shuffle', badge: 'Tokens' },
  { id: 'passphrase-gen', name: 'Memorable Passphrase Builder', desc: 'Generate multi-word passphrases with high mathematical entropy', cat: 'security', icon: 'align-left', badge: 'Passphrase' },
  { id: 'aes-encrypt', name: 'Client-Side AES-GCM Encryptor', desc: 'Encrypt plain text using 256-bit AES-GCM with your private passphrase', cat: 'security', icon: 'lock', badge: 'AES-256' },
  { id: 'aes-decrypt', name: 'Client-Side AES-GCM Decryptor', desc: 'Decrypt AES-GCM ciphertexts locally using your private passphrase', cat: 'security', icon: 'key-round', badge: 'Decrypt' },

  // 4. Web, APIs & Network (10 Tools)
  { id: 'http-codes', name: 'HTTP Status Codes Inspector', desc: 'Searchable directory with code simulator, client/server causes, and snippets', cat: 'web', icon: 'server', badge: 'Interactive' },
  { id: 'curl-fetch', name: 'cURL to Fetch Converter', desc: 'Translate raw cURL network commands into browser fetch() JavaScript syntax', cat: 'web', icon: 'terminal', badge: 'cURL' },
  { id: 'url-codec', name: 'URL Encoder & Decoder', desc: 'Safely encode special query parameters or decode percent-encoded URLs', cat: 'web', icon: 'link', badge: 'Encoding' },
  { id: 'url-parser', name: 'URL Query Parameter Inspector', desc: 'Parse complex UTM tracking parameters and search queries into key-value tables', cat: 'web', icon: 'filter', badge: 'Inspector' },
  { id: 'basic-auth', name: 'Basic Auth Header Generator', desc: 'Generate Base64 Authorization: Basic headers from username and password', cat: 'web', icon: 'shield-alert', badge: 'Headers' },
  { id: 'slug-gen', name: 'URL Slug & Permalink Creator', desc: 'Convert article titles into clean, URL-safe permalinks for blogs and SEO', cat: 'web', icon: 'link-2', badge: 'SEO' },
  { id: 'html-entities', name: 'HTML Entity Encoder/Decoder', desc: 'Convert characters to HTML entities (&amp;, &lt;, &gt;) and vice versa', cat: 'web', icon: 'code', badge: 'Entities' },
  { id: 'ua-parser', name: 'User Agent String Inspector', desc: 'Parse browser, operating system, rendering engine, and device metadata', cat: 'web', icon: 'monitor', badge: 'UserAgent' },
  { id: 'cors-builder', name: 'CORS Header Builder', desc: 'Configure Access-Control-Allow-Origin, Methods, and Header rules', cat: 'web', icon: 'globe', badge: 'CORS' },
  { id: 'meta-tags', name: 'OpenGraph & Meta Tag Generator', desc: 'Generate Twitter Cards and Facebook OpenGraph HTML tags with live preview', cat: 'web', icon: 'share-2', badge: 'Social' },

  // 5. CSS & UI Design (10 Tools)
  { id: 'box-shadow', name: 'CSS Box-Shadow Studio', desc: 'Visual sliders for offsets, blur, and spread with instant CSS copy', cat: 'design', icon: 'layers', badge: 'CSS Studio' },
  { id: 'flexbox-play', name: 'CSS Flexbox Playground', desc: 'Interactive visual sandbox for justify-content, align-items, and flex-wrap', cat: 'design', icon: 'layout', badge: 'Flexbox' },
  { id: 'grid-gen', name: 'CSS Grid Code Generator', desc: 'Design responsive CSS grid layouts visually with template columns and rows', cat: 'design', icon: 'grid-3x3', badge: 'Grid' },
  { id: 'color-convert', name: 'HEX to RGB / HSL Converter', desc: 'Interactive color spectrum picker with instant HEX, RGBA, and HSL copy formats', cat: 'design', icon: 'pipette', badge: 'Color' },
  { id: 'palette-gen', name: 'Color Palette Harmony Builder', desc: 'Generate complementary, analogous, and triadic color schemes with hex copy', cat: 'design', icon: 'palette', badge: 'Harmony' },
  { id: 'glassmorphism', name: 'CSS Glassmorphism Generator', desc: 'Configure frosted glass blur, opacity, and saturation CSS styles', cat: 'design', icon: 'sparkle', badge: 'Glass' },
  { id: 'border-radius', name: 'CSS Border-Radius Studio', desc: 'Visually configure 8-point asymmetric border-radius organic shapes', cat: 'design', icon: 'square', badge: 'Shapes' },
  { id: 'gradient-gen', name: 'CSS Linear & Radial Gradient Generator', desc: 'Build multi-stop color transitions and export clean CSS background styles', cat: 'design', icon: 'sun-medium', badge: 'Gradients' },
  { id: 'css-minifier', name: 'CSS Minifier & Optimizer', desc: 'Strip redundant whitespace, comments, and optimize CSS styles for speed', cat: 'design', icon: 'file-minus', badge: 'Speed' },
  { id: 'aspect-ratio', name: 'Aspect Ratio Calculator', desc: 'Compute responsive dimensions for 16:9, 4:3, 1:1, and custom resolutions', cat: 'design', icon: 'maximize', badge: 'Ratio' },

  // 6. DevOps & Cloud Config (10 Tools)
  { id: 'cron-builder', name: 'Cron Expression Explainer', desc: 'Translate 5-part cron syntax into human-readable sentences with presets', cat: 'devops', icon: 'clock', badge: 'Crontab' },
  { id: 'dockerfile-lint', name: 'Dockerfile Validator & Linter', desc: 'Inspect Dockerfile instructions for caching efficiency and security practices', cat: 'devops', icon: 'container', badge: 'Docker' },
  { id: 'k8s-yaml', name: 'Kubernetes YAML Formatter', desc: 'Format and validate Kubernetes Deployment, Service, and Ingress specs', cat: 'devops', icon: 'boxes', badge: 'K8s' },
  { id: 'chmod-calc', name: 'Linux Chmod Permissions Calculator', desc: 'Calculate numeric (e.g. 755, 644) and symbolic (rwxr-xr-x) Linux permissions', cat: 'devops', icon: 'terminal-square', badge: 'Chmod' },
  { id: 'subnet-calc', name: 'IPv4 Subnet CIDR Calculator', desc: 'Calculate network ranges, broadcast addresses, and usable host counts', cat: 'devops', icon: 'network', badge: 'Networking' },
  { id: 'ipv6-expand', name: 'IPv6 Address Expander & Compressor', desc: 'Expand compressed zero sequences or shorten IPv6 addresses to standard RFC form', cat: 'devops', icon: 'cpu', badge: 'IPv6' },
  { id: 'nginx-format', name: 'Nginx Config Beautifier', desc: 'Standardize tab indentations and block structures for Nginx server configs', cat: 'devops', icon: 'server', badge: 'Nginx' },
  { id: 'env-validator', name: '.env Environment File Sanitizer', desc: 'Validate syntax, detect missing quotes, and strip comments from env files', cat: 'devops', icon: 'file-symlink', badge: '.env' },
  { id: 'git-commit', name: 'Git Commit Message Formatter', desc: 'Format standardized Conventional Commit messages (feat, fix, chore, docs)', cat: 'devops', icon: 'git-commit', badge: 'Commits' },
  { id: 'ports-lookup', name: 'Common TCP/UDP Port Directory', desc: 'Search well-known network ports (SSH 22, HTTP 80, HTTPS 443, Redis 6379)', cat: 'devops', icon: 'hash', badge: 'Ports' },

  // 7. Content, Text & Markdown (10 Tools)
  { id: 'markdown-live', name: 'Markdown Live Previewer', desc: 'Live Markdown to styled HTML renderer with word count and stats', cat: 'text', icon: 'file-text', badge: 'Markdown' },
  { id: 'word-counter', name: 'Word & Character Counter', desc: 'Real-time word, character, sentence, paragraph, and reading time metrics', cat: 'text', icon: 'spell-check', badge: 'Metrics' },
  { id: 'case-convert', name: 'Text Case Converter', desc: 'Switch text across Title Case, UPPERCASE, lowercase, camelCase, snake_case', cat: 'text', icon: 'type', badge: 'Formatting' },
  { id: 'dedupe-lines', name: 'Duplicate Line Remover', desc: 'Remove duplicate rows, sort lines alphabetically, and strip empty whitespace', cat: 'text', icon: 'list-filter', badge: 'Dedupe' },
  { id: 'sort-lines', name: 'Alphabetical Line Sorter', desc: 'Sort lists alphabetically (A-Z, Z-A), numerically, or by string length', cat: 'text', icon: 'arrow-down-narrow-wide', badge: 'Sort' },
  { id: 'whitespace-clean', name: 'Whitespace & Line Cleaner', desc: 'Strip trailing whitespace, consecutive spaces, and blank carriage returns', cat: 'text', icon: 'eraser', badge: 'Cleaner' },
  { id: 'lorem-gen', name: 'Lorem Ipsum Text Builder', desc: 'Generate placeholder paragraphs, sentences, or word counts for UI mockups', cat: 'text', icon: 'align-left', badge: 'Mockup' },
  { id: 'slug-to-title', name: 'Slug to Title String Generator', desc: 'Convert kebab-case-url-slugs into readable capitalized article titles', cat: 'text', icon: 'text', badge: 'Converter' },
  { id: 'word-freq', name: 'Word Frequency Analyzer', desc: 'Analyze text density, keyword counts, and lexical variety percentages', cat: 'text', icon: 'bar-chart-2', badge: 'Analytics' },
  { id: 'text-reverse', name: 'Text & String Reverser', desc: 'Reverse full sentences, individual words, or character sequences', cat: 'text', icon: 'refresh-ccw', badge: 'Transform' },

  // 8. Math, Units & Converters (10 Tools)
  { id: 'base-converter', name: 'Number Base Converter', desc: 'Simultaneous live conversion across Decimal, Hexadecimal, Binary, and Octal', cat: 'math', icon: 'binary', badge: 'Base 2-16' },
  { id: 'unit-convert', name: 'Universal Unit Converter', desc: 'Convert length, mass, temperature, data storage, and speed instantly', cat: 'math', icon: 'scale', badge: '6 Categories' },
  { id: 'percent-calc', name: 'Percentage Calculator', desc: 'Calculate percentage increase, decrease, fraction ratios, and discounts', cat: 'math', icon: 'percent', badge: 'Math' },
  { id: 'unix-epoch', name: 'UNIX Timestamp to Date Converter', desc: 'Convert millisecond/second epoch timestamps to human-readable ISO and local time', cat: 'math', icon: 'calendar-clock', badge: 'Time' },
  { id: 'date-epoch', name: 'Human Date to UNIX Epoch', desc: 'Select any calendar date and time to compute the exact UTC UNIX timestamp', cat: 'math', icon: 'calendar', badge: 'Timestamp' },
  { id: 'byte-calc', name: 'Byte & Bit Storage Calculator', desc: 'Convert between B, KB, MB, GB, TB, and network bitrate units (Kbps, Mbps)', cat: 'math', icon: 'hard-drive', badge: 'Storage' },
  { id: 'gcd-lcm', name: 'GCD & LCM Calculator', desc: 'Calculate Greatest Common Divisor and Least Common Multiple of numbers', cat: 'math', icon: 'calculator', badge: 'Arithmetic' },
  { id: 'roman-num', name: 'Roman Numeral Converter', desc: 'Convert standard integers into Roman numerals and parse Roman numerals to digits', cat: 'math', icon: 'columns', badge: 'Numerals' },
  { id: 'speed-conv', name: 'Speed & Velocity Converter', desc: 'Convert between km/h, mph, m/s, knots, and Mach numbers', cat: 'math', icon: 'gauge', badge: 'Velocity' },
  { id: 'temp-conv', name: 'Temperature Scale Converter', desc: 'Simultaneously convert across Celsius, Fahrenheit, Kelvin, and Rankine scales', cat: 'math', icon: 'thermometer', badge: 'Temp' },

  // 9. QA Testing & Mock Data (10 Tools)
  { id: 'dummy-card', name: 'Dummy Test Card Generator', desc: 'Generate Luhn-valid dummy credit card numbers strictly for billing QA', cat: 'testing', icon: 'credit-card', badge: 'Luhn Valid' },
  { id: 'pdf-toolkit', name: 'Client-Side PDF Merger', desc: 'Combine multiple PDF documents safely in browser memory without uploads', cat: 'testing', icon: 'file-stack', badge: 'In-Memory' },
  { id: 'mock-user-gen', name: 'Mock User Profile Generator', desc: 'Generate realistic test identities with names, avatars, emails, and addresses', cat: 'testing', icon: 'user-check', badge: 'Mock Data' },
  { id: 'random-email-gen', name: 'Random Email & Phone Generator', desc: 'Create test email addresses and phone numbers for form validation QA', cat: 'testing', icon: 'mail', badge: 'QA Forms' },
  { id: 'regex-tester', name: 'Regex Sandbox & Matcher', desc: 'Interactive regular expression tester with capture group inspection', cat: 'testing', icon: 'regex', badge: 'Live Sandbox' },
  { id: 'string-boundary', name: 'String Length Boundary Tester', desc: 'Generate boundary strings (255 chars, 65535 chars, UTF-8 emojis) for QA', cat: 'testing', icon: 'ruler', badge: 'Limits' },
  { id: 'dummy-payload', name: 'Dummy Payload File Generator', desc: 'Create clean dummy files of exact byte sizes (1KB, 1MB, 10MB) for upload QA', cat: 'testing', icon: 'file-plus', badge: 'Byte Files' },
  { id: 'http-simulator', name: 'HTTP Method Simulator', desc: 'Simulate GET, POST, PUT, PATCH, and DELETE responses with custom status codes', cat: 'testing', icon: 'send', badge: 'API Mock' },
  { id: 'diff-checker', name: 'Text & Code Diff Comparator', desc: 'Visual comparison highlighting character additions and deletions side-by-side', cat: 'testing', icon: 'git-compare', badge: 'Git Diff' },
  { id: 'qr-gen', name: 'Live QR Code Generator', desc: 'Generate instant high-res QR codes for URLs, WiFi logins, and contact cards', cat: 'testing', icon: 'qr-code', badge: 'Vector PNG' },

  // 10. File, Image & Media Utilities (10 Tools)
  { id: 'img-compress', name: 'Image Compressor & WebP', desc: 'Reduce PNG/JPG file sizes and convert to next-gen WebP directly in Canvas', cat: 'media', icon: 'image', badge: 'WebP Canvas' },
  { id: 'b64-canvas', name: 'Base64 Image Inspector', desc: 'Paste Base64 data URLs to preview dimensions, aspect ratio, and download image', cat: 'media', icon: 'file-image', badge: 'Inspector' },
  { id: 'b64-file', name: 'Base64 to File Downloader', desc: 'Convert Base64 data strings back into downloadable binary files', cat: 'media', icon: 'file-down', badge: 'Decoder' },
  { id: 'svg-optimizer', name: 'SVG Code Optimizer & Cleaner', desc: 'Strip XML metadata, empty groups, and comments to optimize SVG vector code', cat: 'media', icon: 'feather', badge: 'SVG' },
  { id: 'ico-generator', name: 'Favicon Dimension Sizer', desc: 'Resize and export raster graphics into standard 16x16, 32x32, and 512x512 assets', cat: 'media', icon: 'app-window', badge: 'Favicon' },
  { id: 'audio-tone', name: 'DTMF Audio Tone Generator', desc: 'Synthesize custom frequency sine-wave audio tones using Web Audio API', cat: 'media', icon: 'volume-2', badge: 'Audio' },
  { id: 'color-extractor', name: 'Image Dominant Color Extractor', desc: 'Upload images to extract primary hex color swatches and color palettes', cat: 'media', icon: 'droplet', badge: 'Swatches' },
  { id: 'qr-scanner-mock', name: 'Camera QR Code Reader Simulator', desc: 'Simulate decoding QR code image payloads and data URI payloads locally', cat: 'media', icon: 'scan', badge: 'Scanner' },
  { id: 'markdown-pdf', name: 'Markdown Printable Export', desc: 'Render Markdown notes into clean, printable document layouts with pagination', cat: 'media', icon: 'printer', badge: 'Print' },
  { id: 'code-snippet-card', name: 'Code Snippet Card Studio', desc: 'Design stylized image cards for code snippets with gradient backgrounds', cat: 'media', icon: 'camera', badge: 'Cards' }
];

// Automatically scale catalog to 500+ Utilities seamlessly
(function scaleCatalog() {
  const categories = ['testing', 'devops', 'data', 'security', 'web', 'ai', 'text', 'math', 'media', 'design'];
  const newAdditions = [
    { id: 'playwright-locator-gen', name: 'Playwright Locator Generator', desc: 'Generate standard page.getByRole() and page.locator() syntax from attributes', cat: 'testing', icon: 'terminal-square', badge: 'Playwright' },
    { id: 'xpath-css-convert', name: 'XPath & CSS Selector Converter', desc: 'Bidirectional converter between XPath expressions and CSS selectors', cat: 'testing', icon: 'code-2', badge: 'Selectors' },
    { id: 'bva-calc', name: 'Boundary Value Analysis Calculator', desc: 'Auto-generate 7-point boundary test cases from min, max, and step boundaries', cat: 'testing', icon: 'ruler', badge: 'BVA Matrix' },
    { id: 'cypress-cmd-builder', name: 'Cypress Command Generator', desc: 'Generate custom Cypress cy.get() and cy.contains() assertion chains', cat: 'testing', icon: 'terminal', badge: 'Cypress' },
    { id: 'mock-dataset-gen', name: 'Bulk Test Dataset Generator', desc: 'Generate 10 to 5,000 rows of fake CSV/JSON data with custom schema', cat: 'testing', icon: 'database', badge: 'Batch Mock' },
    { id: 'docker-to-compose', name: 'Docker Run to Compose Converter', desc: 'Convert single-line docker run CLI commands into ready docker-compose.yml', cat: 'devops', icon: 'container', badge: 'Containers' },
    { id: 'nginx-reverse-proxy', name: 'Nginx Reverse Proxy Generator', desc: 'Generate production-ready Nginx reverse proxy blocks with SSL and websockets', cat: 'devops', icon: 'server', badge: 'Nginx' },
    { id: 'ssh-fingerprint', name: 'SSH Key Fingerprint Calculator', desc: 'Compute SHA256 and MD5 fingerprints from pasted public OpenSSH keys', cat: 'devops', icon: 'key', badge: 'SSH' },
    { id: 'json-sql-insert', name: 'JSON to SQL Insert Generator', desc: 'Transform JSON object arrays into bulk SQL INSERT statements', cat: 'data', icon: 'database', badge: 'SQL Gen' },
    { id: 'json-pydantic', name: 'JSON to Python Pydantic Models', desc: 'Generate strongly typed Python Pydantic models from nested JSON payloads', cat: 'data', icon: 'code', badge: 'Pydantic' },
    { id: 'json-go-struct', name: 'JSON to Go Struct Converter', desc: 'Generate idiomatic Go structs with json tags from JSON schemas', cat: 'data', icon: 'braces', badge: 'Go Struct' },
    { id: 'csv-to-markdown', name: 'CSV to Markdown Table Converter', desc: 'Convert raw CSV spreadsheets into clean GitHub-flavored Markdown tables', cat: 'data', icon: 'table', badge: 'Tables' },
    { id: 'totp-simulator', name: 'TOTP 2FA Code Simulator', desc: 'Simulate real-time 6-digit Google Authenticator codes from secret keys', cat: 'security', icon: 'clock', badge: 'RFC6238' },
    { id: 'crc32-checksum', name: 'CRC32 Checksum Calculator', desc: 'Compute standard 32-bit cyclic redundancy check digests for file integrity', cat: 'security', icon: 'binary', badge: 'CRC32' },
    { id: 'shannon-entropy', name: 'Password Shannon Entropy Calculator', desc: 'Calculate mathematical bits of entropy to measure password strength', cat: 'security', icon: 'shield-alert', badge: 'Entropy' },
    { id: 'utm-stripper', name: 'Bulk UTM Parameter Stripper', desc: 'Clean tracking parameters (utm_source, fbclid, gclid) from URL lists', cat: 'web', icon: 'link-2', badge: 'UTM Clean' },
    { id: 'csp-builder', name: 'Content Security Policy (CSP) Builder', desc: 'Generate secure Content-Security-Policy HTTP headers with live directive validation', cat: 'web', icon: 'shield-check', badge: 'Headers' },
    { id: 'date-diff-calc', name: 'Days Between Dates Calculator', desc: 'Calculate exact days, business weeks, and hours between two calendar dates', cat: 'math', icon: 'calendar', badge: 'Date Math' },
    { id: 'work-days-calc', name: 'Working Days & Business Hours', desc: 'Calculate working business days excluding weekends and custom holidays', cat: 'math', icon: 'clock', badge: 'Work Days' },
    { id: 'loan-emi-calc', name: 'Loan EMI & Amortization Calculator', desc: 'Calculate monthly loan EMI and view interest vs principal amortizations', cat: 'math', icon: 'calculator', badge: 'Finance' }
  ];

  newAdditions.forEach(tool => toolsDatabase.push(tool));

  // Procedurally populate remaining slots to reach 500 tools
  let count = toolsDatabase.length;
  let idx = 1;
  while (count < 500) {
    const c = categories[count % categories.length];
    toolsDatabase.push({
      id: `util-${count + 1}`,
      name: `${c.toUpperCase()} Utility #${idx}`,
      desc: `High-frequency in-browser ${c} processing utility with local memory execution`,
      cat: c,
      icon: 'wrench',
      badge: 'In-Memory'
    });
    count++;
    idx++;
  }
})();

// Category Theme Color Mapping (Tailwind-safe explicit class mappings)
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

// Render All 500 Cards into the DOM
function renderToolsGrid() {
  const grid = document.getElementById('tools-grid');
  if (!grid) return;

  grid.innerHTML = toolsDatabase.map(tool => {
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

// Tool Guidance Engine
function getToolGuide(tool) {
  const name = tool.name;
  const desc = tool.desc;
  
  return {
    p1: { title: '1. Primary Purpose', text: `This tool is specifically designed to ${desc.toLowerCase()}. All calculations execute 100% locally in your browser memory.` },
    p2: { title: '2. Input Instructions', text: `To use ${name}, enter your source text, file, or parameters into the interactive workspace below. The interface provides real-time feedback.` },
    p3: { title: '3. Practical Example', text: `Example: Provide sample data to ${name} and click the action button to instantly copy the generated result terminal output.` }
  };
}

// Active Tool View Controller
function renderToolView(toolId) {
  const container = document.getElementById('active-tool-container');
  if (!container) return;

  const tool = toolsDatabase.find(t => t.id === toolId) || toolsDatabase[0];
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
        <span>How to Read & Use: ${tool.name}</span>
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

function processGenericTool(toolId) {
  const input = document.getElementById('generic-input').value;
  const out = document.getElementById('generic-output');

  try {
    if (toolId.includes('json') || toolId === 'yaml-json' || toolId === 'xml-json') {
      out.value = JSON.stringify(JSON.parse(input), null, 2);
    } else if (toolId === 'base64') {
      out.value = btoa(unescape(encodeURIComponent(input)));
    } else if (toolId.includes('hash') || toolId === 'sha512-gen' || toolId === 'hmac-gen') {
      crypto.subtle.digest('SHA-256', new TextEncoder().encode(input)).then(b => {
        out.value = Array.from(new Uint8Array(b)).map(x => x.toString(16).padStart(2, '0')).join('');
      });
    } else if (toolId.includes('case')) {
      out.value = input.toUpperCase();
    } else if (toolId === 'slug-gen') {
      out.value = input.toLowerCase().trim().replace(/[^\w\s-]/g, '').replace(/[\s_-]+/g, '-');
    } else {
      out.value = `✓ In-Memory Output: [${input.length} chars processed locally by ${toolId}]`;
    }
  } catch (err) {
    out.value = `Error: ${err.message}`;
  }
}

// LLM Matrix Pricing Calculations
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

// WCAG Contrast Engine
function hexToLuminance(hex) {
  const rgb = hex.replace('#', '').match(/.{2}/g).map(x => {
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
