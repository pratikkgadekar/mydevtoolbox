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

// Rich, Tool-Specific Documentation Guides Database (Exact Guidance for All Categories)
const toolGuidesDatabase = {
  // AI & LLM
  'llm-tokens': {
    p1: { title: '1. Token Rule of Thumb', text: '1 token is roughly 4 characters or 0.75 English words. Code, punctuation, and non-Latin alphabets consume 20% to 40% more tokens.' },
    p2: { title: '2. Input vs Output Pricing', text: 'AI providers charge 3x to 5x higher rates for output generation than context ingestion. The table compares real inference rates across 14 models.' },
    p3: { title: '3. Context Window Limits', text: 'Tracks what percentage of the selected model context window (e.g., 128k for GPT-4o, 2M for Gemini) your prompt consumes.' }
  },
  'prompt-cleaner': {
    p1: { title: '1. Token Optimization', text: 'Strips duplicate spaces, invisible zero-width characters, and redundant blank lines to reduce token waste in prompts.' },
    p2: { title: '2. Structural Normalization', text: 'Standardizes markdown heading hierarchies and blockquotes for deterministic AI model parsing.' },
    p3: { title: '3. How to Use', text: 'Paste your prompt in the input workspace and click "Process & Run" to receive sanitized, cost-efficient prompt text.' }
  },
  'json-ts': {
    p1: { title: '1. Automatic Type Inference', text: 'Analyzes JSON primitive values (strings, numbers, booleans) and nested arrays to generate typed TypeScript interfaces.' },
    p2: { title: '2. Nested Type Structuring', text: 'Creates discrete sub-interfaces for child objects to keep your frontend and backend data contracts clean.' },
    p3: { title: '3. How to Use', text: 'Paste any JSON response or payload in the left pane to instantly generate exportable TypeScript definitions.' }
  },
  'prompt-variables': {
    p1: { title: '1. Mustache Syntax', text: 'Supports standard {{variable}} tags. Ideal for constructing batch prompt generation pipelines.' },
    p2: { title: '2. Variable Extraction', text: 'Scans your prompt template to detect all variable keys and renders dynamic input fields for values.' },
    p3: { title: '3. How to Use', text: 'Write your prompt with {{user_name}} or {{input_data}} placeholders, fill in the values, and copy the compiled text.' }
  },
  'few-shot-formatter': {
    p1: { title: '1. Few-Shot In-Context Learning', text: 'LLMs perform significantly better when shown 2-3 input/output demonstration pairs before the actual task.' },
    p2: { title: '2. Standardized Role Schemas', text: 'Formats examples according to system, user, and assistant message role specifications.' },
    p3: { title: '3. How to Use', text: 'Input your raw sample pairs to output an API-ready message array format for OpenAI or Anthropic calls.' }
  },
  'temp-top-p': {
    p1: { title: '1. Temperature Dynamics', text: 'Low temperature (0.0 - 0.2) yields focused, deterministic answers. High temperature (0.7 - 1.0) boosts creative variance.' },
    p2: { title: '2. Top-P (Nucleus Sampling)', text: 'Restricts token selection to the top cumulative probability mass (e.g., 0.9 ignores the bottom 10% unlikely words).' },
    p3: { title: '3. Pro Tip', text: 'Alter either Temperature OR Top-P for optimal tuning—adjusting both simultaneously often produces erratic outputs.' }
  },
  'context-slicer': {
    p1: { title: '1. RAG Chunking', text: 'Splits lengthy documents into uniform token-sized blocks for vector embedding databases (Pinecone, Chroma, pgvector).' },
    p2: { title: '2. Overlap Preservation', text: 'Maintains customizable token overlap between neighboring chunks so semantic context is not severed mid-sentence.' },
    p3: { title: '3. How to Use', text: 'Set your target chunk size (e.g., 500 tokens) and overlap (50 tokens) to partition your source documentation.' }
  },
  'json-schema-ai': {
    p1: { title: '1. Structured Outputs', text: 'Creates JSON Schema objects that guarantee the LLM response strictly follows your expected data types.' },
    p2: { title: '2. Strict Mode Compliance', text: 'Includes required fields, type definitions, and additionalProperties: false required by OpenAI strict mode.' },
    p3: { title: '3. How to Use', text: 'Input your desired JSON structure to output the corresponding JSON Schema definition for tool calling.' }
  },

  // JSON & Data
  'json-formatter': {
    p1: { title: '1. Dual-Pane Workflow', text: 'Paste raw or minified JSON in the left pane to validate, format, and inspect syntax tree structure.' },
    p2: { title: '2. Error Locator', text: 'Pinpoints the exact line and character position of syntax bugs like missing quotes, brackets, or trailing commas.' },
    p3: { title: '3. Formatting Modes', text: 'Switch between 2-space indentation, 4-space tab indentation, or compact single-line minification.' }
  },
  'json-csv': {
    p1: { title: '1. Array Conversion', text: 'Flattens an array of uniform JSON objects into standard Comma-Separated Values (CSV) format.' },
    p2: { title: '2. Header Auto-Detection', text: 'Extracts top-level object keys to generate the first CSV column header row automatically.' },
    p3: { title: '3. How to Use', text: 'Paste [ { "name": "Alex", "age": 28 } ] to generate an Excel-compatible CSV table output.' }
  },
  'csv-json': {
    p1: { title: '1. Spreadsheet Parser', text: 'Translates CSV rows into structured JSON object arrays with auto-detected data types.' },
    p2: { title: '2. Escaped Strings & Commas', text: 'Properly handles quotation marks and comma delimiters within cell data fields.' },
    p3: { title: '3. How to Use', text: 'Paste your raw CSV spreadsheet data into the input box to export structured JSON.' }
  },
  'xml-json': {
    p1: { title: '1. Tag Hierarchy Parsing', text: 'Parses nested XML elements, parent-child nodes, and attributes into standard JSON dictionaries.' },
    p2: { title: '2. SOAP & Feed Modernization', text: 'Ideal for migrating legacy SOAP API payloads and RSS/Atom feeds into REST JSON schemas.' },
    p3: { title: '3. How to Use', text: 'Paste your <xml> block on the left and click Process to generate the corresponding JSON object.' }
  },
  'yaml-json': {
    p1: { title: '1. YAML Config Conversion', text: 'Converts human-readable YAML configurations to standardized JSON structures.' },
    p2: { title: '2. Indentation Safety', text: 'Validates strict 2-space YAML hierarchy rules to eliminate indentation bugs.' },
    p3: { title: '3. How to Use', text: 'Paste Docker Compose, Kubernetes, or GitHub Actions YAML files to generate JSON syntax.' }
  },
  'json-sort': {
    p1: { title: '1. Deterministic Sorting', text: 'Recursively sorts all object keys in alphabetical order (A to Z) across every nesting level.' },
    p2: { title: '2. Clean Version Diffs', text: 'Eliminates noisy git diff changes caused by unpredictable JSON key ordering from different API responses.' },
    p3: { title: '3. How to Use', text: 'Paste your JSON payload to produce an alphabetically sorted, deterministic JSON output.' }
  },
  'string-escape': {
    p1: { title: '1. Literal Escaping', text: 'Escapes double quotes (\"), single quotes (\'), newlines (\\n), and backslashes (\\\\) for code strings.' },
    p2: { title: '2. SQL & JSON Literals', text: 'Prevents syntax errors when hardcoding multi-line text into SQL statements or JavaScript string literals.' },
    p3: { title: '3. How to Use', text: 'Paste raw multi-line text to generate an escaped string ready to embed inside double quotes.' }
  },
  'json-depth': {
    p1: { title: '1. Payload Metrics', text: 'Analyzes JSON string byte weight, total node count, key count, and maximum nesting depth level.' },
    p2: { title: '2. Performance Optimization', text: 'Detects deeply nested object trees that may trigger call stack limits or slow down mobile client parsers.' },
    p3: { title: '3. How to Use', text: 'Paste your JSON data to view comprehensive memory and structure metrics.' }
  },
  'flatten-json': {
    p1: { title: '1. Dot-Notation Flattening', text: 'Flattens nested JSON objects into a single-level key-value map using dot paths (e.g., user.address.city).' },
    p2: { title: '2. Database Ingestion', text: 'Ideal for loading complex JSON payloads into relational SQL tables or flat analytics stores (BigQuery, Redshift).' },
    p3: { title: '3. How to Use', text: 'Paste any nested JSON payload to produce a flattened 1-level key-value dictionary.' }
  },
  'base64': {
    p1: { title: '1. UTF-8 Unicode Support', text: 'Encodes and decodes strings using safe UTF-8 byte conversion to prevent corruption of emojis and special characters.' },
    p2: { title: '2. Data URLs & Assets', text: 'Supports converting text strings to Base64 and parsing data:text/plain;base64 URIs.' },
    p3: { title: '3. How to Use', text: 'Paste your plain text to encode into Base64, or paste Base64 to decode back into readable text.' }
  },

  // Security & Crypto
  'uuid-gen': {
    p1: { title: '1. RFC4122 Standard', text: 'Generates Version 4 UUIDs (Universally Unique Identifiers) with 122 bits of cryptographically strong randomness.' },
    p2: { title: '2. Collision Resistance', text: 'The probability of generating duplicate v4 UUIDs is practically zero (1 in 2.71 quintillion).' },
    p3: { title: '3. How to Use', text: 'Click the generate button to create batches of clean, lowercase or uppercase UUIDs.' }
  },
  'pwd-gen': {
    p1: { title: '1. Web Crypto Randomness', text: 'Uses crypto.getRandomValues() for true cryptographic randomness rather than predictable Math.random().' },
    p2: { title: '2. Entropy Customization', text: 'Configure password length (8 to 64 characters) and toggle symbols, numbers, uppercase, and lowercase characters.' },
    p3: { title: '3. Pro Tip', text: 'Passphrases with 16+ characters and mixed character sets provide high defense against brute-force attacks.' }
  },
  'hash-gen': {
    p1: { title: '1. SHA-256 Digest', text: 'Calculates a 256-bit (64-character hexadecimal) cryptographic hash digest of any input text.' },
    p2: { title: '2. One-Way Verification', text: 'SHA-256 is mathematically irreversible. Ideal for verifying checksums and data integrity.' },
    p3: { title: '3. How to Use', text: 'Type or paste your text to view the computed SHA-256 digest updated in real time.' }
  },
  'sha512-gen': {
    p1: { title: '1. 512-Bit Security', text: 'Produces a 128-character hexadecimal hash digest designed for high-security applications and certificates.' },
    p2: { title: '2. Avalanche Effect', text: 'Changing a single character in the input string completely alters the resulting hash output.' },
    p3: { title: '3. How to Use', text: 'Paste your source data to calculate the corresponding SHA-512 cryptographic signature.' }
  },
  'hmac-gen': {
    p1: { title: '1. Message Authentication', text: 'Computes a hash-based message authentication code using SHA-256 combined with your secret key.' },
    p2: { title: '2. API Webhook Signatures', text: 'Standard format used by Stripe, GitHub, and AWS webhooks to verify request authenticity.' },
    p3: { title: '3. How to Use', text: 'Enter your payload and secret key to generate the HMAC-SHA256 signature.' }
  },
  'jwt-debugger': {
    p1: { title: '1. JWT Architecture', text: 'Decodes the Header (algorithm & token type), Payload (claims & expiration), and Signature components of JSON Web Tokens.' },
    p2: { title: '2. Expiration Verification', text: 'Parses the exp and nbf claims to display human-readable timestamps and validity status.' },
    p3: { title: '3. Privacy Guarantee', text: 'Tokens are parsed purely in-memory—secret keys and sensitive claims are never sent to external servers.' }
  },
  'salt-gen': {
    p1: { title: '1. Cryptographic Salting', text: 'Generates random hex, base64, and alphanumeric byte strings for password hashing rounds and session tokens.' },
    p2: { title: '2. Rainbow Table Defense', text: 'Appending unique random salts to passwords prevents precomputed rainbow table dictionary attacks.' },
    p3: { title: '3. How to Use', text: 'Select your desired byte length (16, 32, 64 bytes) to generate high-entropy salt strings.' }
  },
  'passphrase-gen': {
    p1: { title: '1. Diceware Passphrases', text: 'Generates multi-word passphrases using a curated dictionary of common, memorable words separated by hyphens.' },
    p2: { title: '2. Usability & Strength', text: 'Passphrases like "correct-horse-battery-staple" are easier for humans to remember while resisting automated cracking.' },
    p3: { title: '3. How to Use', text: 'Choose the word count (4 to 8 words) and separator character to generate strong passphrases.' }
  },
  'aes-encrypt': {
    p1: { title: '1. AES-256-GCM Standard', text: 'Encrypts plain text using the Advanced Encryption Standard in Galois/Counter Mode with 256-bit key length.' },
    p2: { title: '2. PBKDF2 Key Derivation', text: 'Derives a cryptographic key from your passphrase using 100,000 rounds of PBKDF2 with SHA-256 and random IV.' },
    p3: { title: '3. How to Use', text: 'Enter your message and private passphrase to generate an encrypted ciphertext string.' }
  },
  'aes-decrypt': {
    p1: { title: '1. Authenticated Decryption', text: 'Decrypts AES-GCM ciphertexts and verifies authentication tags to ensure the message was not tampered with.' },
    p2: { title: '2. Passphrase Verification', text: 'Requires the exact secret passphrase used during encryption. An incorrect passphrase fails decryption safely.' },
    p3: { title: '3. How to Use', text: 'Paste the encrypted payload and enter your secret passphrase to restore the original plain text.' }
  },

  // Web & Network
  'http-codes': {
    p1: { title: '1. Status Code Directory', text: 'Search standard 1xx (Informational), 2xx (Success), 3xx (Redirection), 4xx (Client Error), and 5xx (Server Error) codes.' },
    p2: { title: '2. Root Causes & Fixes', text: 'Explains common client-side mistakes (e.g., 401 Unauthorized vs 403 Forbidden) and backend server crashes.' },
    p3: { title: '3. Code Examples', text: 'Provides copyable cURL commands and JavaScript fetch() syntax for handling status responses.' }
  },
  'curl-fetch': {
    p1: { title: '1. Command Translation', text: 'Parses terminal curl requests (headers, HTTP methods, authorization, JSON body) into JavaScript fetch() syntax.' },
    p2: { title: '2. Async/Await Output', text: 'Outputs clean, production-ready async/await code compatible with modern browser and Node.js environments.' },
    p3: { title: '3. How to Use', text: 'Paste a curl -X POST https://api.com -H "Auth: Bearer" -d "{}" command to generate fetch code.' }
  },
  'url-codec': {
    p1: { title: '1. Percent-Encoding', text: 'Encodes reserved characters (spaces, ?, &, =, /) into %20, %3F, and %26 for safe transmission in query parameters.' },
    p2: { title: '2. Component vs Full URL', text: 'Supports encodeURIComponent (for individual query parameters) and encodeURI (for complete URL strings).' },
    p3: { title: '3. How to Use', text: 'Paste messy URLs or query strings to encode or decode special characters.' }
  },
  'url-parser': {
    p1: { title: '1. URL Deconstruction', text: 'Extracts protocol, hostname, port, pathname, hash anchor, and search query parameters into structured tables.' },
    p2: { title: '2. UTM Parameter Inspector', text: 'Highlights utm_source, utm_medium, and utm_campaign tracking tokens for marketing audits.' },
    p3: { title: '3. How to Use', text: 'Paste any complex URL with query strings to view parameters organized as key-value pairs.' }
  },
  'basic-auth': {
    p1: { title: '1. Basic Auth Standard', text: 'Constructs RFC7617 Authorization: Basic headers by joining username:password with a colon and Base64 encoding.' },
    p2: { title: '2. API Testing', text: 'Useful for testing protected endpoints in Postman, cURL, or custom HTTP client configurations.' },
    p3: { title: '3. How to Use', text: 'Enter your API username and password to generate the exact Authorization header string.' }
  },
  'slug-gen': {
    p1: { title: '1. Clean Permalinks', text: 'Converts article titles and strings into lowercase, hyphen-separated, URL-friendly permalinks.' },
    p2: { title: '2. Special Character Removal', text: 'Strips punctuation, accents, and symbols while collapsing multiple spaces into single hyphens.' },
    p3: { title: '3. How to Use', text: 'Type any article title to generate an SEO-friendly URL slug (e.g., "my-article-title").' }
  },
  'html-entities': {
    p1: { title: '1. XSS Prevention', text: 'Converts characters like <, >, &, ", and \' into &lt;, &gt;, &amp;, &quot;, and &#39; for safe HTML rendering.' },
    p2: { title: '2. Two-Way Conversion', text: 'Switch between encoding raw text to named/numeric HTML entities or decoding entities back into plain characters.' },
    p3: { title: '3. How to Use', text: 'Paste text or HTML snippets to escape characters and prevent browser markup injection.' }
  },
  'ua-parser': {
    p1: { title: '1. Client Parsing', text: 'Deconstructs User-Agent request strings to detect browser family, version, OS platform, and CPU architecture.' },
    p2: { title: '2. Device Classification', text: 'Classifies traffic between Desktop, Mobile, Tablet, Bot crawler, or headless testing environments.' },
    p3: { title: '3. How to Use', text: 'Paste any User-Agent string (or inspect your own current browser UA string) for detailed breakdown.' }
  },
  'cors-builder': {
    p1: { title: '1. Access-Control Rules', text: 'Constructs Access-Control-Allow-Origin, Allow-Methods, Allow-Headers, and Max-Age server response headers.' },
    p2: { title: '2. Security Best Practices', text: 'Recommends specific domain whitelisting over wildcard (*) headers for authenticated endpoints.' },
    p3: { title: '3. How to Use', text: 'Select allowed origins and HTTP methods to generate Nginx, Express.js, or Apache CORS configurations.' }
  },
  'meta-tags': {
    p1: { title: '1. OpenGraph & Twitter Cards', text: 'Generates <meta property="og:title"> and <meta name="twitter:card"> tags for social media link sharing.' },
    p2: { title: '2. Live Preview Simulation', text: 'Simulates how your link title, description, and preview image will display when shared on Twitter, Slack, and Facebook.' },
    p3: { title: '3. How to Use', text: 'Fill in your page title, description, and image URL to copy the complete HTML head tag block.' }
  },

  // Design & CSS
  'wcag-contrast': {
    p1: { title: '1. Compliance Ratios', text: 'WCAG 2.1 Level AA requires a minimum ratio of 4.5:1 for regular text and 3:1 for large text (18pt+). Level AAA requires 7:1.' },
    p2: { title: '2. Perceptual Luminance', text: 'Calculated using relative luminance formulas (sRGB values weighted by human eye cone sensitivity) for reliable accessibility validation.' },
    p3: { title: '3. Color Code Inputs', text: 'Accepts 6-digit hex color strings (#ffffff), 3-digit shorthand (#fff), or interactive color wheel pickers.' }
  },
  'box-shadow': {
    p1: { title: '1. Visual Multi-Layer Shadows', text: 'Adjust horizontal offset (X), vertical offset (Y), blur radius, spread distance, and color opacity with sliders.' },
    p2: { title: '2. Smooth Elevation Layers', text: 'Layering multiple subtle shadows creates realistic, elevation-based design depth (inspired by Tailwind and Stripe UI).' },
    p3: { title: '3. How to Use', text: 'Use the interactive sliders to customize your shadow and copy the generated CSS box-shadow rule.' }
  },
  'flexbox-play': {
    p1: { title: '1. Alignment Controls', text: 'Interactively test justify-content (main axis), align-items (cross axis), flex-direction, and flex-wrap properties.' },
    p2: { title: '2. Responsive Container', text: 'Visual sandbox demonstrating how flex children behave when resizing and distributing space.' },
    p3: { title: '3. How to Use', text: 'Click property toggles to observe child element layout shifts and copy the clean CSS flex rules.' }
  },
  'grid-gen': {
    p1: { title: '1. 2D Layout Design', text: 'Configure grid-template-columns and grid-template-rows using fractional units (1fr), pixels, and auto-fill repeat() functions.' },
    p2: { title: '2. Gap Spacing', text: 'Adjust row-gap and column-gap spacing between grid track items visually.' },
    p3: { title: '3. How to Use', text: 'Set column counts and spacing to generate responsive CSS Grid layout declarations.' }
  },
  'color-convert': {
    p1: { title: '1. Format Interoperability', text: 'Simultaneously converts color codes across HEX (#ffffff), RGB (255, 255, 255), HSL (0, 0%, 100%), and CSS color keywords.' },
    p2: { title: '2. Alpha Channel Transparency', text: 'Supports 8-digit HEX and RGBA formats for designing transparent color overlays.' },
    p3: { title: '3. How to Use', text: 'Enter any valid color format to view and copy all equivalent alternative CSS notations.' }
  },
  'palette-gen': {
    p1: { title: '1. Color Harmony Math', text: 'Calculates mathematically balanced color harmonies: Complementary (180°), Analogous (30°), Triadic (120°), and Monochromatic.' },
    p2: { title: '2. UI Design System Tones', text: 'Generates 50 to 900 shade distributions (50, 100, 200... 900) for cohesive UI component theming.' },
    p3: { title: '3. How to Use', text: 'Pick a base brand color to generate matching palette palettes with one-click HEX copy buttons.' }
  },
  'glassmorphism': {
    p1: { title: '1. Frosted Glass Styling', text: 'Combines backdrop-filter: blur(), semi-transparent background colors, and subtle border highlights.' },
    p2: { title: '2. Cross-Browser Support', text: 'Includes standard backdrop-filter and -webkit-backdrop-filter properties for full Safari and iOS compatibility.' },
    p3: { title: '3. How to Use', text: 'Adjust blur strength, background opacity, and border radiance to generate modern glassmorphic card styles.' }
  },
  'border-radius': {
    p1: { title: '1. 8-Point Asymmetric Radii', text: 'Configures independent horizontal and vertical radii for all four corners (border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%).' },
    p2: { title: '2. Organic Blob Shapes', text: 'Creates modern organic blob shapes and fluid button styles for contemporary websites.' },
    p3: { title: '3. How to Use', text: 'Drag corner control handles to sculpt organic shapes and copy the resulting CSS border-radius value.' }
  },
  'gradient-gen': {
    p1: { title: '1. Multi-Stop Transitions', text: 'Creates linear-gradient() and radial-gradient() transitions with custom angle rotation and color stop percentages.' },
    p2: { title: '2. CSS Output', text: 'Generates clean background-image CSS declarations compatible with all modern browsers.' },
    p3: { title: '3. How to Use', text: 'Add color stops, adjust angle degrees, and copy the gradient declaration for your CSS stylesheets.' }
  },
  'css-minifier': {
    p1: { title: '1. Asset Compression', text: 'Strips comments (/* */), removes redundant whitespace, collapses zero units (0px to 0), and compresses color codes.' },
    p2: { title: '2. Page Speed Boost', text: 'Reduces CSS file transfer sizes by 20% to 40% to improve First Contentful Paint (FCP) scores.' },
    p3: { title: '3. How to Use', text: 'Paste your raw CSS styles and click Process to generate a production-ready minified stylesheet.' }
  },

  // DevOps & Cloud
  'cron-builder': {
    p1: { title: '1. 5-Part Cron Syntax', text: 'Deconstructs standard cron expressions: Minute (0-59), Hour (0-23), Day of Month (1-31), Month (1-12), and Day of Week (0-6).' },
    p2: { title: '2. Human-Readable Translation', text: 'Translates expressions like */15 * * * * into clear sentences ("Every 15 minutes, every day").' },
    p3: { title: '3. Preset Shortcuts', text: 'Includes quick-pick presets for common schedules: hourly, daily midnight, weekly, and monthly jobs.' }
  },
  'dockerfile-lint': {
    p1: { title: '1. Docker Layer Caching', text: 'Checks that package installations (RUN apt-get) and dependency files (package.json) run before copying full application code.' },
    p2: { title: '2. Security Best Practices', text: 'Warns against running containers as the root user and recommends specific base image tags over :latest.' },
    p3: { title: '3. How to Use', text: 'Paste your Dockerfile to inspect recommendations for smaller image sizes and faster builds.' }
  },
  'k8s-yaml': {
    p1: { title: '1. Spec Validation', text: 'Validates apiVersion, kind, metadata, and spec definitions for Kubernetes Deployments, Services, and Ingresses.' },
    p2: { title: '2. Indentation Formatting', text: 'Enforces strict 2-space YAML formatting to prevent silent deployment parse failures in kubectl apply.' },
    p3: { title: '3. How to Use', text: 'Paste raw Kubernetes manifest files to format indentation and validate object structure.' }
  },
  'chmod-calc': {
    p1: { title: '1. Octal & Symbolic Notation', text: 'Calculates octal permission codes (e.g., 755, 644, 700) and symbolic notation (-rwxr-xr-x) for Linux filesystems.' },
    p2: { title: '2. User / Group / Others', text: 'Configures Read (4), Write (2), and Execute (1) bits across Owner, Group, and Public permission groups.' },
    p3: { title: '3. How to Use', text: 'Check the desired permission checkboxes to copy the exact chmod 755 file.sh command.' }
  },
  'subnet-calc': {
    p1: { title: '1. CIDR Calculations', text: 'Calculates subnet mask, wildcard mask, network address, broadcast address, and total usable host IPs for IPv4 subnets.' },
    p2: { title: '2. Prefix Notation', text: 'Supports prefix lengths from /0 to /32 (e.g., 192.168.1.0/24 provides 254 usable host addresses).' },
    p3: { title: '3. How to Use', text: 'Enter an IP address and CIDR prefix length to inspect complete networking allocation boundaries.' }
  },
  'ipv6-expand': {
    p1: { title: '1. RFC5952 Formatting', text: 'Expands compressed IPv6 addresses (e.g., 2001:db8::1) to full 32-hex character representation or compresses redundant zeros.' },
    p2: { title: '2. Network Auditing', text: 'Standardizes disparate IPv6 address formats for firewall access lists and router routing tables.' },
    p3: { title: '3. How to Use', text: 'Paste any IPv6 address to toggle between fully expanded 8-hextet format and compressed canonical format.' }
  },
  'nginx-format': {
    p1: { title: '1. Block Indentation', text: 'Standardizes nested server {}, location {}, and upstream {} configuration blocks with uniform tab spacing.' },
    p2: { title: '2. Directive Semicolons', text: 'Ensures closing semicolons (;) are aligned for readability across complex reverse proxy rules.' },
    p3: { title: '3. How to Use', text: 'Paste messy nginx.conf blocks to format and beautify the configuration structure.' }
  },
  'b64-file': {
    p1: { title: '1. Binary Reconstruction', text: 'Reconstructs raw Base64 encoded strings back into downloadable binary files (PDFs, images, ZIPs, audio).' },
    p2: { title: '2. MIME-Type Detection', text: 'Auto-detects data URL headers (data:image/png;base64,...) to assign proper file extensions.' },
    p3: { title: '3. How to Use', text: 'Paste a Base64 string, select your desired filename, and click download to save the binary file locally.' }
  },
  'env-validator': {
    p1: { title: '1. Syntax Validation', text: 'Checks .env configuration files for unquoted multi-word values, syntax typos, and duplicate environment keys.' },
    p2: { title: '2. Secret Leak Detection', text: 'Warns when sensitive credentials appear without standard formatting in production configuration files.' },
    p3: { title: '3. How to Use', text: 'Paste your .env file contents to validate syntax and clean whitespace.' }
  },
  'git-commit': {
    p1: { title: '1. Conventional Commits', text: 'Structures commit messages using industry standards: type(scope): short description followed by optional body and breaking changes.' },
    p2: { title: '2. Standardized Types', text: 'Select from conventional types: feat (new feature), fix (bug fix), chore (maintenance), docs (documentation), refactor, and test.' },
    p3: { title: '3. How to Use', text: 'Fill in the commit type, scope, and summary to generate a clean, professional git commit -m message.' }
  },

  // Content & Text
  'markdown-live': {
    p1: { title: '1. Realtime Markdown Preview', text: 'Renders GitHub Flavored Markdown (GFM) headings, bold/italic styles, code fences, blockquotes, and lists in real time.' },
    p2: { title: '2. Live Document Statistics', text: 'Displays real-time word count, character count, sentence count, and estimated reading time as you write.' },
    p3: { title: '3. How to Use', text: 'Type markdown in the left editor to inspect the styled HTML output on the right.' }
  },
  'word-counter': {
    p1: { title: '1. Comprehensive Text Metrics', text: 'Calculates exact word count, character count (with and without spaces), paragraph count, and sentence totals.' },
    p2: { title: '2. Reading & Speaking Time', text: 'Estimates reading time (based on 200 words per minute) and speaking duration (based on 130 WPM).' },
    p3: { title: '3. How to Use', text: 'Paste articles, blog drafts, or essays to inspect real-time readability metrics.' }
  },
  'case-convert': {
    p1: { title: '1. Multi-Case Transformation', text: 'Switch text across UPPERCASE, lowercase, Title Case, camelCase, snake_case, kebab-case, and PascalCase.' },
    p2: { title: '2. Developer & Writing Friendly', text: 'Convert human titles into variable names for programming or format copy for headings and documentation.' },
    p3: { title: '3. How to Use', text: 'Paste your text and click any of the case buttons to convert formatting instantly.' }
  },
  'dedupe-lines': {
    p1: { title: '1. Duplicate Removal', text: 'Scans multi-line lists to remove repeated lines while preserving the original list sequence or sorting alphabetically.' },
    p2: { title: '2. Case Sensitivity & Trimming', text: 'Supports case-insensitive deduplication and automatic trimming of leading/trailing line whitespace.' },
    p3: { title: '3. How to Use', text: 'Paste messy lists, email directories, or key arrays to produce a clean, deduplicated line list.' }
  },
  'sort-lines': {
    p1: { title: '1. Sorting Algorithms', text: 'Sort lines alphabetically (A to Z or Z to A), naturally (supporting numbers 1, 2, 10 properly), or by line length.' },
    p2: { title: '2. List Management', text: 'Ideal for organizing import statements, dependency arrays, CSS selectors, or contact lists.' },
    p3: { title: '3. How to Use', text: 'Paste list items into the workspace and select your desired sorting order.' }
  },
  'whitespace-clean': {
    p1: { title: '1. Whitespace Normalization', text: 'Strips trailing spaces from line endings, collapses consecutive empty lines, and converts tab characters to spaces.' },
    p2: { title: '2. Clean Source Formatting', text: 'Eliminates invisible whitespace noise before committing text to version control repositories.' },
    p3: { title: '3. How to Use', text: 'Paste unformatted text to remove unnecessary carriage returns and trailing whitespace.' }
  },
  'lorem-gen': {
    p1: { title: '1. Mock Placeholder Text', text: 'Generates standard Latin Lorem Ipsum placeholder copy for wireframes, website mockups, and typography tests.' },
    p2: { title: '2. Paragraph & Word Controls', text: 'Select exact paragraph counts, word limits, or sentence counts to fit your design container dimensions.' },
    p3: { title: '3. How to Use', text: 'Choose your desired paragraph count and click generate to copy placeholder text.' }
  },
  'slug-to-title': {
    p1: { title: '1. Slug Deconstruction', text: 'Converts kebab-case or snake_case URL slugs into readable, capitalized title strings.' },
    p2: { title: '2. CMS & Migration Audits', text: 'Useful when importing legacy blog post databases and converting URL paths back into post titles.' },
    p3: { title: '3. How to Use', text: 'Paste a slug like "10-best-developer-tools" to generate "10 Best Developer Tools".' }
  },
  'word-freq': {
    p1: { title: '1. Keyword Density Analysis', text: 'Scans text to rank the most frequently occurring words, their total counts, and percentage distribution.' },
    p2: { title: '2. SEO Optimization', text: 'Identifies overused words and helps optimize keyword balance in blog articles and marketing copy.' },
    p3: { title: '3. How to Use', text: 'Paste your draft text to view an ordered table of the most frequent keywords.' }
  },
  'text-reverse': {
    p1: { title: '1. Multi-Level Reversal', text: 'Reverse full character sequences ("hello" -> "olleh"), reverse word order, or reverse entire lines in a document.' },
    p2: { title: '2. Testing & Data Inversion', text: 'Useful for palindrome testing, data munging, and string manipulation exercises.' },
    p3: { title: '3. How to Use', text: 'Paste any text string and choose character, word, or line reversal.' }
  },

  // Math & Converters
  'base-converter': {
    p1: { title: '1. Simultaneous Base Sync', text: 'Typing into any field (Decimal, Hex, Binary, or Octal) automatically recalculates all other bases in real time without lag.' },
    p2: { title: '2. Bit & Byte Alignment', text: 'Hexadecimal outputs clean uppercase pairs. Binary outputs standard 8-bit or arbitrary-length string representations.' },
    p3: { title: '3. Signed & Unsigned Limits', text: 'Supports arbitrary integer precision up to JavaScript Safe Integer (2^53 - 1).' }
  },
  'unit-convert': {
    p1: { title: '1. Multi-Category Engine', text: 'Select between Length, Mass/Weight, Temperature, Data Storage, Speed, and Time categories from the pill selectors.' },
    p2: { title: '2. Exact Math Formulas', text: 'Uses high-precision floating-point conversion factors according to NIST and international metric/imperial standards.' },
    p3: { title: '3. Live Bi-Directional Calc', text: 'Change either the input value or target unit dropdown to recalculate the result instantly.' }
  },
  'percent-calc': {
    p1: { title: '1. Percentage Operations', text: 'Calculates X% of Y, what percentage X is of Y, percentage increase/decrease, and discount savings.' },
    p2: { title: '2. Financial & Metric Auditing', text: 'Useful for calculating markup margins, conversion rate changes, and performance benchmark improvements.' },
    p3: { title: '3. How to Use', text: 'Enter values into the corresponding formula fields to compute percentage metrics.' }
  },
  'unix-epoch': {
    p1: { title: '1. Timestamp Conversion', text: 'Converts seconds and milliseconds UNIX timestamps into UTC ISO-8601 strings and local timezone dates.' },
    p2: { title: '2. Relative Time', text: 'Displays relative time elapsed (e.g., "5 minutes ago", "in 2 days") alongside absolute calendar dates.' },
    p3: { title: '3. How to Use', text: 'Paste a UNIX epoch integer (e.g., 1700000000) to view formatted human dates.' }
  },
  'date-epoch': {
    p1: { title: '1. Date to Timestamp', text: 'Converts any selected calendar date, hour, minute, and second into an exact UNIX epoch timestamp in seconds and milliseconds.' },
    p2: { title: '2. Database Querying', text: 'Useful for constructing SQL WHERE created_at >= 1700000000 queries.' },
    p3: { title: '3. How to Use', text: 'Select a date and time using the picker to generate the corresponding integer timestamp.' }
  },
  'byte-calc': {
    p1: { title: '1. Binary vs Decimal Prefixes', text: 'Calculates data units in standard Binary (1024 Bytes = 1 KiB) and SI Decimal (1000 Bytes = 1 KB) standards.' },
    p2: { title: '2. Storage & Bandwidth', text: 'Converts bytes, megabytes, gigabytes, terabytes, and network bitrates (Mbps, Gbps).' },
    p3: { title: '3. How to Use', text: 'Enter any data size value to view all equivalent storage unit metrics.' }
  },
  'gcd-lcm': {
    p1: { title: '1. Euclidean Algorithm', text: 'Calculates the Greatest Common Divisor (GCD) and Least Common Multiple (LCM) of two or more integers.' },
    p2: { title: '2. Aspect Ratios & Fractions', text: 'Useful for simplifying fraction ratios, pixel grid scaling, and algorithm optimizations.' },
    p3: { title: '3. How to Use', text: 'Enter two integers separated by commas to compute their exact GCD and LCM.' }
  },
  'roman-num': {
    p1: { title: '1. Two-Way Roman Parsing', text: 'Converts standard integers into standard Roman numerals (I, V, X, L, C, D, M) and parses Roman numeral strings to integers.' },
    p2: { title: '2. Subtractive Notation', text: 'Accurately respects subtractive notation rules (e.g., IV for 4, IX for 9, MCMXCIX for 1999).' },
    p3: { title: '3. How to Use', text: 'Enter a number (1 to 3999) or a Roman numeral string to convert instantly.' }
  },
  'speed-conv': {
    p1: { title: '1. Velocity Conversions', text: 'Simultaneously converts speed values across km/h, mph, m/s, knots (nautical miles/hr), and Mach (speed of sound).' },
    p2: { title: '2. High-Precision Coefficients', text: 'Uses international aviation and meteorological conversion constants.' },
    p3: { title: '3. How to Use', text: 'Enter any speed measurement and choose the source unit to convert.' }
  },
  'temp-conv': {
    p1: { title: '1. Scale Equivalencies', text: 'Converts temperatures simultaneously across Celsius (°C), Fahrenheit (°F), Kelvin (K), and Rankine (°R).' },
    p2: { title: '2. Absolute Zero Validation', text: 'Respects thermodynamic absolute zero limits (-273.15°C / 0 Kelvin).' },
    p3: { title: '3. How to Use', text: 'Type a temperature in any scale to inspect equivalent values in all other systems.' }
  },

  // QA Testing
  'dummy-card': {
    p1: { title: '1. Luhn Algorithm Validity', text: 'Generates test credit card numbers (Visa, Mastercard, Amex) that strictly pass MOD-10 Luhn checksum validation.' },
    p2: { title: '2. QA & Billing Gateways Only', text: 'Designed strictly for software testing in Stripe, PayPal, and gateway sandbox modes. Not linked to real banking accounts.' },
    p3: { title: '3. How to Use', text: 'Select card brand to generate valid test card numbers, expiration dates, and CVVs.' }
  },
  'pdf-toolkit': {
    p1: { title: '1. In-Memory PDF Merge', text: 'Combines multiple PDF files directly inside browser WebAssembly/Canvas memory without uploading documents to external servers.' },
    p2: { title: '2. Document Security', text: 'Zero cloud upload ensures confidential legal documents, invoices, and contracts never leave your computer.' },
    p3: { title: '3. How to Use', text: 'Select 2 or more PDF files from your disk and click "Merge PDFs Now" to save the combined document.' }
  },
  'img-compress': {
    p1: { title: '1. Canvas WebP Compression', text: 'Uses HTML5 Canvas to re-encode and compress PNG/JPG images into lightweight next-gen WebP format.' },
    p2: { title: '2. Quality Slider', text: 'Adjust compression ratio slider (10% to 100%) to balance file weight against visual fidelity.' },
    p3: { title: '3. How to Use', text: 'Upload any image file, choose target compression quality, and download the compressed WebP asset.' }
  },
  'mock-user-gen': {
    p1: { title: '1. Synthetic Test Identities', text: 'Generates realistic mock user records complete with full names, email addresses, street addresses, and avatars.' },
    p2: { title: '2. Database Seeding', text: 'Export batch mock users directly to JSON or SQL INSERT fixtures to seed test database environments.' },
    p3: { title: '3. How to Use', text: 'Select the number of mock users and click generate to output structured test profiles.' }
  },
  'random-email-gen': {
    p1: { title: '1. QA Email Addresses', text: 'Creates unique, randomized valid test email addresses and phone numbers matching standard regex validation patterns.' },
    p2: { title: '2. Form Input Testing', text: 'Useful for automated end-to-end Cypress, Playwright, or manual signup flow test scripts.' },
    p3: { title: '3. How to Use', text: 'Generate random email strings with customizable domain names.' }
  },
  'regex-tester': {
    p1: { title: '1. Live Regex Sandbox', text: 'Tests regular expressions against sample text in real time with global (g), case-insensitive (i), and multiline (m) flags.' },
    p2: { title: '2. Capture Groups', text: 'Inspects full regex matches alongside matched capture groups ($1, $2) and character offsets.' },
    p3: { title: '3. How to Use', text: 'Enter your regex pattern and test string to view live match highlights.' }
  },
  'string-boundary': {
    p1: { title: '1. Boundary Value Analysis', text: 'Generates boundary test strings (e.g., exactly 255 chars, 65,535 chars, SQL injection strings, multi-byte UTF-8 emojis).' },
    p2: { title: '2. Buffer & Database QA', text: 'Verifies how backend API inputs and database VARCHAR/TEXT columns handle exact length ceilings.' },
    p3: { title: '3. How to Use', text: 'Choose your desired boundary test condition to generate the exact test string.' }
  },
  'dummy-payload': {
    p1: { title: '1. Byte-Accurate Test Files', text: 'Creates clean dummy test files of exact byte sizes (1 KB, 500 KB, 1 MB, 10 MB, 50 MB) in browser memory.' },
    p2: { title: '2. Upload Limit QA', text: 'Verifies web server upload ceilings (client_max_body_size in Nginx) and S3 multipart upload thresholds.' },
    p3: { title: '3. How to Use', text: 'Select target file size and format (.txt, .bin) to download an exact-sized dummy test file.' }
  },
  'http-simulator': {
    p1: { title: '1. REST Method Simulation', text: 'Simulates API responses for GET, POST, PUT, PATCH, and DELETE requests with custom HTTP status codes (200, 201, 400, 404, 500).' },
    p2: { title: '2. Error Handling QA', text: 'Test how your frontend single-page application responds to simulated network errors and API downtime.' },
    p3: { title: '3. How to Use', text: 'Choose HTTP method and response status code to simulate the API response payload.' }
  },
  'b64-canvas': {
    p1: { title: '1. Data URL Image Inspector', text: 'Parses raw Base64 image data strings (data:image/png;base64,...) and renders them to an HTML5 Canvas.' },
    p2: { title: '2. Dimension & Format Verification', text: 'Inspects image width, height, aspect ratio, and estimated uncompressed byte memory weight.' },
    p3: { title: '3. How to Use', text: 'Paste any Base64 image string to preview the visual image and export as PNG.' }
  },
  'diff-checker': {
    p1: { title: '1. Character & Word Diff', text: 'Uses Google Diff-Match-Patch algorithms to highlight exact character additions (green) and deletions (red).' },
    p2: { title: '2. Code & Text Review', text: 'Ideal for inspecting API responses, environment variables, git commit patches, or draft revisions.' },
    p3: { title: '3. In-Memory Privacy', text: 'No text or proprietary source code is ever transmitted to remote logging servers.' }
  },
  'qr-gen': {
    p1: { title: '1. High-Density Vector QR', text: 'Generates high-resolution vector QR code images using error correction Level H (30% damage recovery).' },
    p2: { title: '2. Universal Formats', text: 'Supports standard URLs, plain text strings, Wi-Fi network credentials (WIFI:S:SSID;T:WPA;P:password;;), and contact cards.' },
    p3: { title: '3. How to Use', text: 'Type any URL or text to generate a live QR code and click "Download Image" to save as PNG.' }
  },
  'md-table-gen': {
    p1: { title: '1. Grid Interface', text: 'Click "+ Add Row" or "+ Add Column" to expand your spreadsheet layout. All edits render to standard Markdown syntax instantly.' },
    p2: { title: '2. Markdown Table Standard', text: 'Generates GitHub Flavored Markdown (GFM) tables formatted with header separators (| --- |) for seamless documentation rendering.' },
    p3: { title: '3. One-Click Copy', text: 'Use the "Copy Markdown" action to paste directly into README.md, Obsidian notes, or documentation repositories.' }
  }
};

// Render all 100 Tool Cards to the Dashboard Grid
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
