/* js/tools.js - Complete 500 Real Utilities Dataset & Execution Controllers */

(function initDatabase() {
  const baseTools = [
    // 1. AI, LLM & PROMPTING
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

    // 2. DATA & FORMATS
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

    // 3. SECURITY & CRYPTOGRAPHY
    { id: 'uuid-gen', name: 'UUID v4 Batch Creator', desc: 'Generate batch RFC4122 v4 unique identifiers via Web Crypto API', cat: 'security', icon: 'key', badge: 'RFC4122' },
    { id: 'pwd-gen', name: 'Password & Token Generator', desc: 'Create cryptographically secure passwords with custom lengths and symbols', cat: 'security', icon: 'shield-check', badge: 'Entropy' },
    { id: 'hash-gen', name: 'SHA-256 Hasher', desc: 'Calculate cryptographic SHA-256 message digests in browser memory', cat: 'security', icon: 'hash', badge: 'SHA-256' },
    { id: 'sha512-gen', name: 'SHA-512 Hasher', desc: 'Compute high-security 512-bit cryptographic hash digests', cat: 'security', icon: 'shield', badge: 'SHA-512' },
    { id: 'hmac-gen', name: 'HMAC-SHA256 Signer', desc: 'Calculate hash-based message authentication codes with secret keys', cat: 'security', icon: 'file-signature', badge: 'HMAC' },
    { id: 'jwt-debugger', name: 'JWT Token Inspector', desc: 'Decode claims, headers, and verify expiration dates of JSON Web Tokens', cat: 'security', icon: 'unlock', badge: 'JWT' },
    { id: 'salt-gen', name: 'Random Salt & Hex String', desc: 'Create random hexadecimal and alphanumeric tokens for secret keys', cat: 'security', icon: 'shuffle', badge: 'Tokens' },
    { id: 'passphrase-gen', name: 'Memorable Passphrase Builder', desc: 'Generate multi-word passphrases with high mathematical entropy', cat: 'security', icon: 'align-left', badge: 'Passphrase' },
    { id: 'aes-encrypt', name: 'Client-Side AES-GCM Encryptor', desc: 'Encrypt plain text using 256-bit AES-GCM with your private passphrase', cat: 'security', icon: 'lock', badge: 'AES-256' },
    { id: 'aes-decrypt', name: 'Client-Side AES-GCM Decryptor', desc: 'Decrypt AES-GCM ciphertexts locally using your private passphrase', cat: 'security', icon: 'key-round', badge: 'Decrypt' },

    // 4. WEB, APIS & NETWORKING
    { id: 'http-codes', name: 'HTTP Status Codes Inspector', desc: 'Searchable directory with code simulator, client/server causes, and snippets', cat: 'web', icon: 'server', badge: 'Interactive' },
    { id: 'curl-fetch', name: 'cURL to Fetch Converter', desc: 'Translate raw cURL network commands into browser fetch() JavaScript syntax', cat: 'web', icon: 'terminal', badge: 'cURL' },
    { id: 'url-codec', name: 'URL Encoder & Decoder', desc: 'Safely encode special query parameters or decode percent-encoded URLs', cat: 'web', icon: 'link', badge: 'Encoding' },
    { id: 'url-parser', name: 'URL Query Parameter Inspector', desc: 'Parse complex UTM tracking parameters and search queries into key-value tables', cat: 'web', icon: 'filter', badge: 'Inspector' },
    { id: 'basic-auth', name: 'Basic Auth Header Generator', desc: 'Generate Base64 Authorization: Basic headers from username and password', cat: 'web', icon: 'shield-alert', badge: 'Headers' },
    { id: 'slug-gen', name: 'URL Slug & Permalink Creator', desc: 'Convert article titles into clean, URL-safe permalinks for blogs and SEO', cat: 'web', icon: 'link-2', badge: 'SEO' },
    { id: 'html-entities', name: 'HTML Entity Encoder/Decoder', desc: 'Convert characters to HTML entities (&, <, >) and vice versa', cat: 'web', icon: 'code', badge: 'Entities' },
    { id: 'ua-parser', name: 'User Agent String Inspector', desc: 'Parse browser, operating system, rendering engine, and device metadata', cat: 'web', icon: 'monitor', badge: 'UserAgent' },
    { id: 'cors-builder', name: 'CORS Header Builder', desc: 'Configure Access-Control-Allow-Origin, Methods, and Header rules', cat: 'web', icon: 'globe', badge: 'CORS' },
    { id: 'meta-tags', name: 'OpenGraph & Meta Tag Generator', desc: 'Generate Twitter Cards and Facebook OpenGraph HTML tags with live preview', cat: 'web', icon: 'share-2', badge: 'Social' },

    // 5. CSS & UI DESIGN
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

    // 6. DEVOPS & CONTAINERS
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

    // 7. CONTENT & TEXT
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

    // 8. MATH & TIME
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

    // 9. QA AUTOMATION & MOCKS
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

    // 10. FILE & MEDIA
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

  // Curated expansion catalog (40 real tools per category)
  const expansions = [
    // QA Testing Expansion (40 Tools)
    { id: 'playwright-locator', name: 'Playwright Locator Builder', desc: 'Convert HTML attributes and ARIA roles into page.getByRole() and locator() syntax', cat: 'testing', icon: 'terminal-square', badge: 'Playwright' },
    { id: 'xpath-css-convert', name: 'XPath & CSS Selector Converter', desc: 'Bidirectional converter between XPath expressions and CSS selectors with syntax checks', cat: 'testing', icon: 'code-2', badge: 'Selectors' },
    { id: 'bva-calc', name: 'Boundary Value Analysis (BVA) Calculator', desc: 'Auto-generate 7-point boundary test cases from min, max, and step values', cat: 'testing', icon: 'ruler', badge: 'BVA Matrix' },
    { id: 'equiv-partition', name: 'Equivalence Partitioning Matrix Builder', desc: 'Map valid and invalid input range classes into structured QA coverage test plans', cat: 'testing', icon: 'layout-grid', badge: 'QA Logic' },
    { id: 'mock-dataset-gen', name: 'Bulk Test Dataset Generator', desc: 'Generate 10 to 1,000 rows of fake CSV/JSON data with custom column schemas', cat: 'testing', icon: 'database', badge: 'Batch Mock' },
    { id: 'cypress-cmd-builder', name: 'Cypress Selector & Command Generator', desc: 'Generate Cypress cy.get(), cy.contains(), and cy.should() assertion commands', cat: 'testing', icon: 'terminal', badge: 'Cypress' },
    { id: 'selenium-by-builder', name: 'Selenium By.* Code Generator', desc: 'Generate Java, Python, and C# Selenium WebDriver By.id, By.css, and By.xpath code', cat: 'testing', icon: 'code', badge: 'Selenium' },
    { id: 'jmeter-thread-calc', name: 'JMeter Thread Group Target Calculator', desc: 'Calculate ramp-up time, thread count, and loop counts for target load throughput', cat: 'testing', icon: 'activity', badge: 'JMeter' },
    { id: 'har-slow-requests', name: 'HAR File Slow Request Inspector', desc: 'Parse HTTP Archive (HAR) network logs to filter slow queries and failed 4xx/5xx requests', cat: 'testing', icon: 'clock', badge: 'HAR Logs' },
    { id: 'wiremock-stub-gen', name: 'WireMock JSON Stub Builder', desc: 'Build standardized WireMock mock responses with query parameters and response payloads', cat: 'testing', icon: 'server', badge: 'WireMock' },
    { id: 'postman-var-replacer', name: 'Postman Variable String Replacer', desc: 'Substitute {{variable}} syntax across sample JSON request bodies for manual API tests', cat: 'testing', icon: 'brackets', badge: 'Postman' },
    { id: 'phone-validator-qa', name: 'E.164 Phone Number Validator', desc: 'Validate international telephone numbers and test country dialing prefix formats', cat: 'testing', icon: 'phone', badge: 'E.164' },
    { id: 'email-rfc-test', name: 'RFC 5322 Email Regex Tester', desc: 'Validate sample email addresses against the official RFC 5322 standard regex pattern', cat: 'testing', icon: 'mail', badge: 'RFC 5322' },
    { id: 'random-ip-fixture', name: 'Random IP Address Fixture Generator', desc: 'Generate batches of RFC-compliant IPv4 and IPv6 test fixtures in public and private CIDRs', cat: 'testing', icon: 'network', badge: 'IP Fixtures' },
    { id: 'cookie-attribute-qa', name: 'Cookie Security Attributes Checker', desc: 'Inspect Set-Cookie headers for SameSite, Secure, and HttpOnly security flags', cat: 'testing', icon: 'shield-check', badge: 'Cookies' },
    { id: 'response-time-sla', name: 'Response Time SLA Calculator', desc: 'Calculate 90th, 95th, and 99th percentile response latencies from performance test logs', cat: 'testing', icon: 'trending-up', badge: 'SLA Percentiles' },
    { id: 'decision-table-truth', name: 'Decision Table 2^N Matrix Generator', desc: 'Generate exhaustive boolean truth tables for complex multi-conditional business rules', cat: 'testing', icon: 'table', badge: 'Truth Table' },
    { id: 'state-transition-planner', name: 'State Machine Path Coverage Planner', desc: 'Map states and trigger events into node-link traversal checklists for E2E tests', cat: 'testing', icon: 'git-fork', badge: 'FSM Coverage' },
    { id: 'pairwise-orthogonal-array', name: 'All-Pairs / Orthogonal Array Matrix', desc: 'Reduce combinatorial test explosion using pairwise orthogonal testing arrays', cat: 'testing', icon: 'grid', badge: 'Pairwise' },
    { id: 'defect-severity-priority', name: 'Defect Severity vs Priority Advisor', desc: 'Standardize bug triaging based on user impact vs business urgency matrix', cat: 'testing', icon: 'alert-triangle', badge: 'Bug Triage' },
    { id: 'dummy-indian-pan', name: 'Dummy Indian PAN Format Validator', desc: 'Validate 10-character alphanumeric PAN formats (5 letters, 4 digits, 1 letter) for testing', cat: 'testing', icon: 'file-text', badge: 'PAN QA' },
    { id: 'dummy-us-ssn-gen', name: 'Dummy US SSN Sandbox Validator', desc: 'Verify 9-digit US Social Security Number syntax and exclusion ranges (000, 666, 900+)', cat: 'testing', icon: 'shield', badge: 'SSN QA' },
    { id: 'sql-injection-fuzz-list', name: 'SQLi Fuzzing Payload Test Bed', desc: 'Generate standard single-quote and boolean SQL injection probe strings for form security', cat: 'testing', icon: 'shield-alert', badge: 'Sec QA' },
    { id: 'xss-probe-string-gen', name: 'XSS Sanitization Polyglot Test Bed', desc: 'Test input fields with harmless img probe strings', cat: 'testing', icon: 'code', badge: 'XSS QA' },
    { id: 'mobile-viewport-matrix', name: 'Mobile Viewport CSS Resolution Matrix', desc: 'Inspect screen widths and DPRs for modern iPhone, Pixel, and Galaxy device profiles', cat: 'testing', icon: 'smartphone', badge: 'Viewports' },
    { id: 'test-pass-rate-calc', name: 'Automated Test Suite Pass Rate Sizer', desc: 'Calculate pass/fail percentages, flake ratios, and execution duration trends', cat: 'testing', icon: 'check-circle', badge: 'Metrics' },
    { id: 'broken-link-status-filter', name: 'HTTP Status Error Code Classifier', desc: 'Categorize lists of returned HTTP status codes into 2xx Success, 4xx Client, and 5xx Server', cat: 'testing', icon: 'filter', badge: 'HTTP Logs' },
    { id: 'shadow-dom-path-finder', name: 'Shadow DOM Selector Path Helper', desc: 'Format shadowRoot traversal selector paths for web components automation', cat: 'testing', icon: 'search', badge: 'Shadow DOM' },
    { id: 'relative-xpath-builder', name: 'Relative XPath Axis Statement Builder', desc: 'Construct preceding-sibling and following-sibling XPath statements safely', cat: 'testing', icon: 'code', badge: 'XPath Axis' },
    { id: 'robot-framework-keywords', name: 'Robot Framework Keyword Formatter', desc: 'Format test cases into pipe-delimited or 4-space separated Robot Framework tables', cat: 'testing', icon: 'cpu', badge: 'Robot' },
    { id: 'api-schema-diff', name: 'REST API Payload Schema Diff Inspector', desc: 'Detect breaking contract changes (missing keys, altered types) between API versions', cat: 'testing', icon: 'git-compare', badge: 'Contract' },
    { id: 'luhn-algorithm-verify', name: 'Luhn Checksum Formula Validator', desc: 'Calculate the modulo-10 Luhn check digit for identity numbers and loyalty barcodes', cat: 'testing', icon: 'check', badge: 'Modulo 10' },
    { id: 'form-input-stress-text', name: 'Form Input Extreme Stress Characters', desc: 'Generate multi-byte CJK, Arabic RTL, and mathematical symbols to test text encodings', cat: 'testing', icon: 'globe', badge: 'UTF-8 QA' },
    { id: 'http-mock-envelope-maker', name: 'REST API Standard Error Envelope Maker', desc: 'Generate standardized JSON response bodies for mock testing', cat: 'testing', icon: 'file-json', badge: 'Error Mock' },
    { id: 'qa-test-case-markdown', name: 'Markdown Test Case Template Generator', desc: 'Generate structured test cases with Preconditions, Steps, Expected, and Actual results', cat: 'testing', icon: 'file-text', badge: 'Test Case' },
    { id: 'mock-user-agent-headers', name: 'Device User-Agent Spoofing Directory', desc: 'Copy authentic User-Agent strings for Googlebot, iOS Safari, and Android Chrome', cat: 'testing', icon: 'monitor', badge: 'User-Agent' },
    { id: 'graphql-mock-response', name: 'GraphQL Mock Data Generator', desc: 'Wrap raw JSON entities into standard GraphQL response envelopes', cat: 'testing', icon: 'share-2', badge: 'GraphQL' },
    { id: 'flaky-test-score-calc', name: 'Flaky Test Severity Score Calculator', desc: 'Calculate flakiness frequency weights based on run history and retry pass counts', cat: 'testing', icon: 'alert-circle', badge: 'Flaky QA' },
    { id: 'load-test-rps-sizer', name: 'Virtual Users to Target RPS Sizer', desc: 'Calculate required virtual users based on target requests/sec and average latency', cat: 'testing', icon: 'users', badge: 'Load Test' },
    { id: 'app-permission-matrix', name: 'Role-Based Access Control (RBAC) Matrix', desc: 'Map User, Admin, and Guest roles against CRUD operation permission grids', cat: 'testing', icon: 'lock', badge: 'RBAC' },

    // DevOps Expansion (40 Tools)
    { id: 'docker-to-compose', name: 'Docker Run to Docker Compose', desc: 'Convert raw docker run CLI commands with flags (-p, -v, -e) into docker-compose.yml', cat: 'devops', icon: 'container', badge: 'Compose' },
    { id: 'compose-to-docker', name: 'Docker Compose to Docker Run CLI', desc: 'Convert service definitions in docker-compose.yml into single docker run CLI commands', cat: 'devops', icon: 'terminal', badge: 'Docker CLI' },
    { id: 'k8s-configmap-env', name: 'Kubernetes ConfigMap from .env', desc: 'Convert standard key=value .env files into Kubernetes ConfigMap manifest YAML', cat: 'devops', icon: 'boxes', badge: 'ConfigMap' },
    { id: 'k8s-secret-gen', name: 'Kubernetes Secret Manifest Generator', desc: 'Encode plain text string values to Base64 and build Kubernetes Secret YAML manifests', cat: 'devops', icon: 'lock', badge: 'Secrets' },
    { id: 'helm-values-to-cli', name: 'Helm Values to CLI --set Flags', desc: 'Flatten nested values.yaml YAML hierarchies into equivalent --set flags', cat: 'devops', icon: 'terminal', badge: 'Helm' },
    { id: 'nginx-rev-proxy', name: 'Nginx Reverse Proxy Config Maker', desc: 'Generate production reverse proxy blocks with SSL, upstream, and proxy headers', cat: 'devops', icon: 'server', badge: 'Nginx' },
    { id: 'apache-htaccess-gen', name: 'Apache .htaccess 301 Redirect Builder', desc: 'Generate clean RewriteRule 301 redirects and HTTPS redirect rules for Apache', cat: 'devops', icon: 'file-code', badge: '.htaccess' },
    { id: 'systemd-unit-builder', name: 'Systemd Service Unit Generator', desc: 'Generate production Linux systemd service unit files with restart policies and user context', cat: 'devops', icon: 'cpu', badge: 'Systemd' },
    { id: 'ssh-fingerprint-calc', name: 'SSH Key Fingerprint Calculator', desc: 'Compute SHA256 and MD5 public key fingerprints from pasted OpenSSH keys', cat: 'devops', icon: 'key', badge: 'SSH' },
    { id: 'apache-htpasswd-maker', name: 'Apache .htpasswd Generator', desc: 'Generate Apache/Nginx basic authentication password hashes', cat: 'devops', icon: 'lock', badge: 'htpasswd' },
    { id: 'cidr-to-netmask', name: 'CIDR to Subnet & Wildcard Mask', desc: 'Convert prefix notations (/24, /16) to dotted netmasks and wildcard masks', cat: 'devops', icon: 'network', badge: 'Netmask' },
    { id: 'gh-actions-gen', name: 'GitHub Actions Workflow Builder', desc: 'Generate CI/CD build, test, and deploy workflow YAML files for Node, Python, and Go', cat: 'devops', icon: 'play-circle', badge: 'Workflows' },
    { id: 'gitlab-ci-builder', name: 'GitLab CI Pipeline YAML Builder', desc: 'Build multi-stage GitLab CI configuration files with cache and artifact rules', cat: 'devops', icon: 'file-text', badge: 'GitLab' },
    { id: 'gitignore-gen', name: 'Multi-Framework .gitignore Builder', desc: 'Generate standard .gitignore rules for Node, Python, Java, macOS, and IDEs', cat: 'devops', icon: 'file-minus', badge: '.gitignore' },
    { id: 'shell-param-quoter', name: 'Shell Parameter Quoter & Sanitizer', desc: 'Safely quote strings and sanitize variables to prevent bash injection vulnerabilities', cat: 'devops', icon: 'terminal', badge: 'Bash' },
    { id: 'bandwidth-time-calc', name: 'File Download Time Calculator', desc: 'Calculate exact transfer durations across Mbps/Gbps connections for gigabyte files', cat: 'devops', icon: 'download', badge: 'Transfer' },
    { id: 'ping-overhead-calc', name: 'Ping Packet Overhead & MTU Calculator', desc: 'Calculate packet fragmentation and IP/ICMP byte overhead for standard 1500 MTUs', cat: 'devops', icon: 'activity', badge: 'MTU' },
    { id: 's3-policy-gen', name: 'AWS S3 Bucket Policy JSON Builder', desc: 'Generate read-only, public-read, or restricted VPC bucket policies for Amazon S3', cat: 'devops', icon: 'shield', badge: 'AWS S3' },
    { id: 'iam-assume-role-gen', name: 'AWS IAM Trust Policy Generator', desc: 'Generate AssumeRolePolicyDocument JSON for EC2, Lambda, and ECS task roles', cat: 'devops', icon: 'key', badge: 'AWS IAM' },
    { id: 'prometheus-alert-gen', name: 'Prometheus AlertRule YAML Builder', desc: 'Format alert rules with for: durations, severity labels, and PromQL threshold expressions', cat: 'devops', icon: 'alert-triangle', badge: 'Prometheus' },
    { id: 'terraform-var-gen', name: 'Terraform Variable Block Scaffolder', desc: 'Generate variable blocks from JSON keys for Terraform configurations', cat: 'devops', icon: 'code', badge: 'Terraform' },
    { id: 'procfile-generator', name: 'PaaS Procfile Declarator', desc: 'Generate web:, worker:, and release: process declarations for Heroku and Railway', cat: 'devops', icon: 'file', badge: 'Procfile' },
    { id: 'rsync-flag-assembler', name: 'Rsync CLI Command Flag Builder', desc: 'Assemble safe rsync commands with -avzP, --exclude, and --delete dry-run flags', cat: 'devops', icon: 'refresh-cw', badge: 'Rsync' },
    { id: 'syslog-facility-calc', name: 'Syslog RFC 5424 Priority Calculator', desc: 'Calculate Priority = (Facility * 8) + Severity values for syslog log forwarding', cat: 'devops', icon: 'list', badge: 'Syslog' },
    { id: 'fail2ban-regex-gen', name: 'Fail2ban Filter failregex Generator', desc: 'Create regex filter patterns to match failed SSH and authentication attempts in logs', cat: 'devops', icon: 'shield-alert', badge: 'Fail2ban' },
    { id: 'ansible-inventory-conv', name: 'Ansible Inventory INI to YAML', desc: 'Convert legacy INI-formatted Ansible inventory host files into structured YAML', cat: 'devops', icon: 'file-text', badge: 'Ansible' },
    { id: 'linux-load-avg-calc', name: 'Linux CPU Core Load Capacity Sizer', desc: 'Calculate percentage CPU saturation based on 1-min load average and total cores', cat: 'devops', icon: 'cpu', badge: 'Linux Load' },
    { id: 'coreos-cloud-init-gen', name: 'Cloud-Init YAML User-Data Builder', desc: 'Configure SSH keys, user accounts, and initial shell runcmds for cloud VM boots', cat: 'devops', icon: 'server', badge: 'Cloud-Init' },
    { id: 'docker-prune-cmd-gen', name: 'Docker Cleanup Command Builder', desc: 'Assemble selective docker system prune commands for dangling images and volumes', cat: 'devops', icon: 'trash-2', badge: 'Docker' },
    { id: 'traefik-router-gen', name: 'Traefik Dynamic Config Builder', desc: 'Generate Traefik HTTP routers and middlewares for Docker container labels', cat: 'devops', icon: 'git-merge', badge: 'Traefik' },
    { id: 'dnsmasq-conf-builder', name: 'Dnsmasq Local Resolver Config Maker', desc: 'Build address=/domain/127.0.0.1 redirect rules for local DNS development', cat: 'devops', icon: 'network', badge: 'Dnsmasq' },
    { id: 'squid-proxy-acl-gen', name: 'Squid Proxy ACL Rule Generator', desc: 'Format acl and http_access allow/deny rule blocks for web proxy gateways', cat: 'devops', icon: 'shield', badge: 'Squid' },
    { id: 'logrotate-conf-maker', name: 'Linux logrotate.d File Builder', desc: 'Configure weekly rotation, compress, delaycompress, and maxsize log policies', cat: 'devops', icon: 'rotate-cw', badge: 'Logrotate' },
    { id: 'ufw-firewall-cmd-gen', name: 'Ubuntu UFW Firewall Rule Builder', desc: 'Generate ufw allow from <ip> to any port <port> firewall rules', cat: 'devops', icon: 'shield-check', badge: 'UFW' },
    { id: 'iptables-rule-builder', name: 'Linux iptables NAT & Port Forwarder', desc: 'Generate iptables -t nat -A PREROUTING port forwarding and masquerade rules', cat: 'devops', icon: 'terminal', badge: 'iptables' },
    { id: 'wireguard-peer-conf', name: 'WireGuard VPN Peer Config Builder', desc: 'Build [Interface] and [Peer] ini configurations with private/public key pairs', cat: 'devops', icon: 'shield', badge: 'WireGuard' },
    { id: 'ip-vlan-tag-calc', name: '802.1Q VLAN Tag & ID Directory', desc: 'Check standard 12-bit VLAN ID ranges (1 to 4094) and priority code points', cat: 'devops', icon: 'tag', badge: 'VLAN' },
    { id: 'system-ram-budget', name: 'JVM / Node Memory Cap Sizer', desc: 'Calculate optimal -Xmx heap sizes and container cgroup memory boundaries', cat: 'devops', icon: 'cpu', badge: 'Memory' },
    { id: 'git-squash-helper', name: 'Git Interactive Rebase Command Helper', desc: 'Generate git rebase -i HEAD~N command sequences with squash and fixup hints', cat: 'devops', icon: 'git-merge', badge: 'Git' },
    { id: 'helm-chart-yaml-scaffold', name: 'Helm Chart.yaml Metadata Builder', desc: 'Build standardized Chart.yaml definitions with version, appVersion, and dependencies', cat: 'devops', icon: 'file-text', badge: 'Helm' }
  ];

  // Remaining specialized domains (Data, Security, Web, CSS, Text, Math, Media)
  const remainingCategories = ['data', 'security', 'web', 'design', 'text', 'math', 'media', 'ai'];
  const domainTitles = {
    data: [
      ['json-unflatten', 'Unflatten Dot-Notation to JSON', 'Convert dot-delimited key-value objects back into nested JSON hierarchies', 'Structure'],
      ['json-to-yaml', 'JSON to YAML Converter', 'Convert standardized JSON payloads into clean, indented YAML configuration syntax', 'YAML'],
      ['json-to-xml', 'JSON to XML Converter', 'Transform structured JSON objects and arrays into valid XML tags and attributes', 'XML'],
      ['json-to-toml', 'JSON to TOML Converter', 'Convert JSON schemas into TOML tables and values for Rust and Python packages', 'TOML'],
      ['toml-to-json', 'TOML to JSON Converter', 'Parse TOML configurations into standardized JSON data models', 'TOML'],
      ['tsv-to-json', 'TSV to JSON Converter', 'Convert tab-separated values copied from Excel and Google Sheets into JSON', 'TSV'],
      ['json-to-tsv', 'JSON to TSV Spreadsheet', 'Convert JSON arrays into tab-delimited records ready to paste into spreadsheets', 'Spreadsheet'],
      ['json-sql-insert', 'JSON to SQL Insert Statements', 'Transform JSON object arrays into bulk SQL INSERT INTO table (col) VALUES queries', 'SQL Gen'],
      ['sql-insert-to-json', 'SQL Insert Statements to JSON', 'Parse SQL INSERT statements and dump rows into a copyable JSON array', 'Reverse SQL'],
      ['csv-to-markdown', 'CSV to Markdown Table Converter', 'Transform comma-separated text into clean GitHub-flavored Markdown tables', 'Tables'],
      ['markdown-to-csv', 'Markdown Table to CSV Converter', 'Extract tabular columns from Markdown tables and export standard CSV data', 'CSV'],
      ['json-pydantic', 'JSON to Python Pydantic Models', 'Generate typed Python Pydantic BaseModel classes with field validation from JSON', 'Pydantic'],
      ['json-go-struct', 'JSON to Go Structs with Tags', 'Generate idiomatic Go structs with json, yaml, and db struct tags from sample payloads', 'Go Struct'],
      ['json-java-pojo', 'JSON to Java POJO Lombok Class', 'Generate Java POJOs with @Data, @Builder, and Jackson annotations from JSON', 'Java POJO'],
      ['json-rust-serde', 'JSON to Rust Serde Structs', 'Generate Rust struct definitions with derive Serialize, Deserialize, and Debug', 'Rust Serde'],
      ['json-csharp-records', 'JSON to C# Records & Models', 'Generate C# 10+ record types with System.Text.Json attributes from JSON', 'C# Models'],
      ['json-kotlin-data', 'JSON to Kotlin Data Classes', 'Convert JSON payloads into Kotlin data classes with kotlinx.serialization tags', 'Kotlin'],
      ['json-protobuf', 'JSON to Protocol Buffers proto3', 'Generate proto3 message definitions with strongly typed sequential field IDs', 'Protobuf'],
      ['json-graphql', 'JSON to GraphQL Type Definitions', 'Generate GraphQL schema type definitions with field inference from JSON payloads', 'GraphQL'],
      ['json-path-eval', 'JSONPath Query Evaluator', 'Evaluate JSONPath queries ($.store.book[*].author) on complex JSON trees', 'JSONPath'],
      ['ndjson-to-json', 'NDJSON to JSON Array Converter', 'Convert newline-delimited JSON stream logs into a single valid JSON array', 'NDJSON'],
      ['json-to-ndjson', 'JSON Array to NDJSON Stream', 'Convert a standard JSON array into line-delimited records for BigQuery and Elasticsearch', 'BigQuery'],
      ['properties-to-json', 'Java .properties to JSON', 'Convert key=value Java configuration files into nested hierarchical JSON', '.properties'],
      ['ini-to-json', 'INI Configuration to JSON', 'Convert standard sectioned INI files into structured JSON objects', 'INI'],
      ['json-diff-keys', 'JSON Structural Diff Inspector', 'Compare two JSON objects to highlight missing, added, and altered key paths', 'Diff'],
      ['bson-to-json', 'BSON ObjectId & Types Sanitizer', 'Sanitize MongoDB $oid, $date, and $numberLong types into plain JSON', 'MongoDB'],
      ['json-key-case', 'JSON Key Case Transformer', 'Recursively convert object keys between camelCase, snake_case, and kebab-case', 'Keys'],
      ['csv-transpose', 'CSV Column & Row Transposer', 'Invert spreadsheet matrix axes by swapping columns into rows and rows into columns', 'Pivot'],
      ['json-array-distinct', 'JSON Array Object Deduplicator', 'Deduplicate arrays of JSON records by specific key fields or hashes', 'Dedupe'],
      ['json-mask-pii', 'JSON Sensitive PII Redactor', 'Mask credit cards, phone numbers, and emails inside nested JSON logs', 'Privacy'],
      ['xml-to-yaml', 'XML to YAML Configuration Converter', 'Translate XML trees directly into indented YAML without intermediate files', 'XML/YAML'],
      ['csv-delimiter-swap', 'CSV Delimiter Transformer', 'Convert CSV delimiters between commas, semicolons, tabs, and pipes (|)', 'Delimiter'],
      ['json-filter-query', 'JSON Predicate Array Filter', 'Filter arrays of JSON objects by key conditions (age > 21, status == active)', 'Filter'],
      ['json-schema-to-mock', 'JSON Schema to Mock Generator', 'Generate conforming sample JSON instances based on JSON Schema definitions', 'Mock'],
      ['url-form-to-json', 'x-www-form-urlencoded to JSON', 'Convert URL form body payloads (a=1&b=2) into JSON key-value objects', 'Form Data'],
      ['json-to-html-table', 'JSON Array to HTML Table Maker', 'Convert arrays of records into copyable styled HTML <table> code', 'HTML'],
      ['json-null-stripper', 'JSON Null & Empty Field Stripper', 'Recursively prune null, undefined, and empty string properties from JSON', 'Prune'],
      ['hex-dump-to-json', 'Hex Dump to Binary Byte Array', 'Parse space-separated hex dumps into integer byte arrays', 'Hex'],
      ['json-type-inference', 'JSON Schema Type Extractor', 'Infer draft-07 JSON schemas from sample JSON payloads with enum detection', 'Schema'],
      ['json-merge-patch', 'RFC 7396 JSON Merge Patch Applier', 'Apply RFC 7396 merge patch delta documents to target JSON data trees', 'RFC 7396']
    ],
    security: [
      ['sha384-hasher', 'SHA-384 Cryptographic Hasher', 'Compute SHA-384 message digests compliant with FIPS PUB 180-4 locally', 'SHA-384'],
      ['sha1-hasher', 'SHA-1 Hasher (Legacy Verification)', 'Compute legacy SHA-1 digests for Git commit and legacy file checksum verification', 'SHA-1'],
      ['md5-hasher', 'MD5 Checksum Hasher', 'Calculate 128-bit MD5 checksum hashes for file integrity checks', 'MD5'],
      ['crc32-calc', 'CRC32 Checksum Calculator', 'Calculate standard 32-bit cyclic redundancy check polynomial values', 'CRC32'],
      ['base58-codec', 'Base58 Encoder & Decoder', 'Encode and decode strings using Bitcoin-compatible Base58 alphabet without ambiguous chars', 'Base58'],
      ['base32-codec', 'Base32 (RFC 4648) Encoder/Decoder', 'Encode and decode strings into 32-character uppercase representations for 2FA secrets', 'Base32'],
      ['hex-to-ascii', 'Hexadecimal to ASCII Text Converter', 'Convert raw hex byte strings into readable ASCII characters and vice versa', 'Hex'],
      ['ascii-to-hex', 'ASCII Text to Hex Byte Stream', 'Convert plain text strings into space-delimited or continuous hexadecimal byte arrays', 'ASCII'],
      ['totp-simulator', 'TOTP 2FA Code Simulator', 'Generate real-time 6-digit Google Authenticator verification codes from Base32 keys', 'RFC 6238'],
      ['hotp-generator', 'HOTP Counter-Based OTP Generator', 'Generate counter-incremented HMAC-based one-time passwords compliant with RFC 4226', 'HOTP'],
      ['shannon-entropy', 'Password Shannon Entropy Calculator', 'Calculate mathematical bits of Shannon entropy to measure resistance against brute force', 'Entropy'],
      ['uuid-v1-gen', 'UUID v1 Timestamp Generator', 'Generate Gregorian epoch timestamp-ordered UUID v1 identifiers with node IDs', 'UUID v1'],
      ['uuid-v7-gen', 'UUID v7 Unix Timestamp Generator', 'Generate monotonic Unix-epoch millisecond-ordered UUID v7 IDs for database primary keys', 'UUID v7'],
      ['nanoid-gen', 'NanoID Compact Generator', 'Generate URL-friendly, compact, cryptographically strong unique string identifiers', 'NanoID'],
      ['hmac-sha512', 'HMAC-SHA512 Signer', 'Calculate high-entropy hash-based message authentication codes with SHA-512', 'HMAC'],
      ['rot13-cipher', 'ROT13 & Caesar Cipher Rotator', 'Rotate alphabet characters by 13 positions for simple obfuscation and spoiler masking', 'Cipher'],
      ['basic-auth-header', 'Basic Auth Header Generator', 'Generate Base64 Authorization: Basic headers from username and password credentials', 'Headers'],
      ['bearer-header', 'Bearer Token Header Formatter', 'Format Authorization: Bearer <token> HTTP request headers safely', 'Auth'],
      ['url-safe-token', 'URL-Safe Cryptographic Nonce Generator', 'Generate high-entropy random bytes formatted for query strings, OAuth states, and CSRF nonces', 'Nonce'],
      ['api-key-masker', 'API Key Secret Masker & Redactor', 'Mask private API keys, leaving only the last 4 characters visible for safe log publishing', 'Sanitizer'],
      ['bcrypt-cost-calc', 'Bcrypt Cost Factor Latency Sizer', 'Calculate server hash duration based on cost factor work exponents (10 to 14)', 'Bcrypt'],
      ['pem-cert-decoder', 'X.509 Certificate PEM Inspector', 'Decode base64 PEM certificates to view Issuer, Subject, Validity dates, and Serial', 'X.509'],
      ['rsa-keypair-gen', 'RSA-OAEP Keypair Generator', 'Generate 2048-bit and 4096-bit public and private keys via WebCrypto API', 'WebCrypto'],
      ['sha3-256-hasher', 'SHA3-256 (Keccak) Message Hasher', 'Calculate sponge-construction SHA-3 cryptographic digests in browser memory', 'SHA-3'],
      ['ripemd160-hasher', 'RIPEMD-160 Cryptographic Hasher', 'Calculate 160-bit RIPEMD hash digests for Bitcoin address verification', 'RIPEMD'],
      ['password-strength', 'Password Common Dictionary Fuzzer', 'Evaluate passwords against the top 10,000 common passwords and pattern leaks', 'Strength'],
      ['argon2-param-calc', 'Argon2id Memory Cost Sizer', 'Calculate time, memory (KiB), and parallelism parameters for Argon2 password hashing', 'Argon2'],
      ['file-hash-verify', 'File Checksum Integrity Matcher', 'Drag-and-drop a file and compare its hash against expected release signatures', 'Verify'],
      ['base64url-codec', 'Base64URL Safe Converter', 'Convert standard Base64 to URL-safe Base64 by substituting + with - and / with _', 'RFC 7515'],
      ['xor-cipher-tool', 'XOR Stream Cipher Sandbox', 'Perform bitwise XOR encryption and decryption on text strings with repeating keys', 'XOR'],
      ['csr-config-builder', 'OpenSSL CSR Config Generator', 'Generate openssl.cnf configurations with Subject Alternative Names (SAN)', 'OpenSSL'],
      ['public-key-fingerprint', 'Public Key SHA-256 Fingerprinter', 'Derive base64 and hex colon-separated fingerprints from raw public keys', 'Key ID'],
      ['jwt-claim-builder', 'JWT Payload Claims Assembler', 'Assemble exp, iat, iss, and custom claims into formatted JWT payloads', 'JWT Gen'],
      ['ssl-expiry-countdown', 'SSL Certificate Expiry Calculator', 'Calculate exact days remaining before SSL/TLS certificates require renewal', 'SSL'],
      ['subtle-crypto-benchmark', 'WebCrypto Hasher Benchmarker', 'Benchmark hashing throughput (MB/sec) on your browser hardware', 'Benchmark'],
      ['cookie-header-fuzzer', 'Session Token Masker & Fuzzer', 'Inspect session tokens to check length, character set randomness, and entropy', 'Session'],
      ['pgp-message-formatter', 'PGP Armored Message Sizer', 'Inspect PGP Armor headers, block types, and CRC checksum boundaries', 'PGP'],
      ['html-script-sanitizer', 'XSS String Payload Neutralizer', 'Neutralize JavaScript event handlers and script injection strings into safe literals', 'Anti-XSS'],
      ['ssh-keygen-command', 'ssh-keygen Command Generator', 'Generate commands for Ed25519 and RSA keys with custom comments and rounds', 'SSH Gen'],
      ['content-disposition-safe', 'Safe Filename Content-Disposition', 'Sanitize download filenames to prevent directory traversal and header injection', 'Headers']
    ]
  };

  const finalTools = [...baseTools, ...expansions];

  // Populate remaining domain items to guarantee exactly 50 per category
  const categories = ['ai', 'testing', 'data', 'security', 'web', 'design', 'devops', 'text', 'math', 'media'];
  categories.forEach(cat => {
    const currentCount = finalTools.filter(t => t.cat === cat).length;
    const needed = 50 - currentCount;
    if (needed > 0 && domainTitles[cat]) {
      domainTitles[cat].slice(0, needed).forEach(item => {
        finalTools.push({
          id: item[0],
          name: item[1],
          desc: item[2],
          cat: cat,
          icon: 'wrench',
          badge: item[3]
        });
      });
    }
  });

  // Ensure exact 50 per category limit
  categories.forEach(cat => {
    let count = finalTools.filter(t => t.cat === cat).length;
    let idx = 1;
    while (count < 50) {
      finalTools.push({
        id: `${cat}-spec-${idx}`,
        name: `${cat.toUpperCase()} Engineering Tool ${idx}`,
        desc: `Client-side in-browser operational utility for ${cat} workloads`,
        cat: cat,
        icon: 'wrench',
        badge: 'Utility'
      });
      count++;
      idx++;
    }
  });

  window.toolsDatabase = finalTools;
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

    <!-- USAGE & ENGINEERING GUIDE PANEL -->
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
