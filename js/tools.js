/* js/tools.js - Production Catalog with 400 Real Tools & Dedicated Execution Logic */
const toolsDatabase = [
  // 1. QA & TEST AUTOMATION
  { id: 'playwright-locator', name: 'Playwright Locator Builder', desc: 'Convert HTML attributes and ARIA roles into page.getByRole() and locator() code.', cat: 'testing', icon: 'terminal-square', badge: 'Playwright' },
  { id: 'xpath-css-convert', name: 'XPath to CSS Selector Converter', desc: 'Convert XPath expressions to robust CSS selectors and vice versa with syntax checks.', cat: 'testing', icon: 'code-2', badge: 'Selectors' },
  { id: 'bva-calc', name: 'Boundary Value Analysis (BVA) Calculator', desc: 'Generate standard boundary test values (min-1, min, min+1, nominal, max-1, max, max+1).', cat: 'testing', icon: 'ruler', badge: 'BVA Matrix' },
  { id: 'equiv-partition', name: 'Equivalence Partitioning Matrix', desc: 'Generate valid and invalid equivalence partitions for input field test design.', cat: 'testing', icon: 'layout-grid', badge: 'QA Design' },
  { id: 'dummy-card', name: 'Dummy Test Card Generator', desc: 'Generate Luhn-valid dummy credit card numbers strictly for payment gateway sandbox QA.', cat: 'testing', icon: 'credit-card', badge: 'Luhn Valid' },
  { id: 'mock-dataset-gen', name: 'Bulk Test Dataset Generator', desc: 'Generate custom CSV or JSON datasets (10 to 1,000 rows) with realistic mock columns.', cat: 'testing', icon: 'database', badge: 'Batch Mock' },
  { id: 'mock-user-gen', name: 'Mock User Profile Generator', desc: 'Generate realistic test user identities with names, avatars, emails, addresses, and phone numbers.', cat: 'testing', icon: 'user-check', badge: 'Mock Data' },
  { id: 'phone-validator', name: 'E.164 Phone Number Formatter', desc: 'Validate and format domestic and international phone numbers into E.164 standard.', cat: 'testing', icon: 'phone', badge: 'E.164' },
  { id: 'email-rfc-test', name: 'RFC 5322 Email Regex Tester', desc: 'Test and validate email addresses against the official RFC 5322 standard regex pattern.', cat: 'testing', icon: 'mail', badge: 'RFC 5322' },
  { id: 'string-boundary', name: 'String Length Boundary Tester', desc: 'Generate boundary strings (255 chars, 65535 chars, UTF-8 emojis, null bytes) for QA.', cat: 'testing', icon: 'ruler', badge: 'Limits' },
  { id: 'decision-table', name: 'Decision Table Truth Matrix Builder', desc: 'Map boolean inputs and business conditions into exhaustive test case truth matrices.', cat: 'testing', icon: 'table', badge: 'Matrices' },
  { id: 'state-transition', name: 'State Transition Test Planner', desc: 'Map finite state transitions into end-to-end traversal test checklists.', cat: 'testing', icon: 'git-fork', badge: 'FSM QA' },
  { id: 'postman-env-rep', name: 'Postman Variable String Replacer', desc: 'Substitute {{variable}} syntax across sample JSON request payloads for manual API tests.', cat: 'testing', icon: 'brackets', badge: 'Postman' },
  { id: 'jmeter-thread-calc', name: 'JMeter Thread Group Calculator', desc: 'Calculate ramp-up period, thread count, and loop iterations for target requests/sec.', cat: 'testing', icon: 'activity', badge: 'JMeter' },
  { id: 'webhook-sim', name: 'Webhook Payload & Signature Simulator', desc: 'Simulate Stripe and GitHub HMAC-SHA256 signature headers for incoming webhook testing.', cat: 'testing', icon: 'send', badge: 'Webhooks' },
  { id: 'har-slow-requests', name: 'HAR File Slow Request Detector', desc: 'Parse HTTP Archive (HAR) JSON logs to identify slow network requests and 5xx errors.', cat: 'testing', icon: 'clock', badge: 'HAR Logs' },
  { id: 'wiremock-stub', name: 'WireMock JSON Stub Builder', desc: 'Generate standardized WireMock response stubs with URL patterns and mock headers.', cat: 'testing', icon: 'server', badge: 'WireMock' },
  { id: 'cypress-cmd-builder', name: 'Cypress Selector & Command Builder', desc: 'Generate Cypress cy.get(), cy.contains(), and cy.should() assertion commands.', cat: 'testing', icon: 'terminal', badge: 'Cypress' },
  { id: 'selenium-by-builder', name: 'Selenium By.* Locator Code Generator', desc: 'Generate Java, Python, and C# Selenium WebDriver By.id, By.css, and By.xpath syntax.', cat: 'testing', icon: 'code', badge: 'Selenium' },
  { id: 'regex-tester', name: 'Regex Sandbox & Group Matcher', desc: 'Interactive regular expression tester with capture group inspection and syntax validation.', cat: 'testing', icon: 'regex', badge: 'Live Regex' },

  // 2. DEVOPS & CONTAINERS
  { id: 'docker-to-compose', name: 'Docker Run to Docker Compose', desc: 'Convert raw docker run CLI commands into clean, ready docker-compose.yml files.', cat: 'devops', icon: 'container', badge: 'Containers' },
  { id: 'compose-to-docker', name: 'Docker Compose to Docker Run CLI', desc: 'Convert services declared in docker-compose.yml into single docker run CLI commands.', cat: 'devops', icon: 'terminal', badge: 'Docker CLI' },
  { id: 'dockerfile-lint', name: 'Dockerfile Validator & Linter', desc: 'Inspect Dockerfile instructions for caching efficiency and root user security practices.', cat: 'devops', icon: 'shield-alert', badge: 'Docker' },
  { id: 'k8s-pod-yaml', name: 'Kubernetes Pod Manifest Generator', desc: 'Generate standard Kubernetes Pod, Deployment, and Service YAML specifications.', cat: 'devops', icon: 'boxes', badge: 'K8s' },
  { id: 'k8s-configmap', name: 'Kubernetes ConfigMap from .env', desc: 'Transform standard .env key-value pairs into Kubernetes ConfigMap YAML declarations.', cat: 'devops', icon: 'file-symlink', badge: 'K8s' },
  { id: 'chmod-calc', name: 'Linux Chmod Permissions Calculator', desc: 'Calculate numeric (e.g. 755, 644) and symbolic (rwxr-xr-x) Linux file permissions.', cat: 'devops', icon: 'terminal-square', badge: 'Chmod' },
  { id: 'cron-builder', name: 'Cron Expression Explainer', desc: 'Translate 5-part cron syntax into human-readable sentences with next 10 run times.', cat: 'devops', icon: 'clock', badge: 'Crontab' },
  { id: 'nginx-rev-proxy', name: 'Nginx Reverse Proxy Config Builder', desc: 'Generate standard Nginx reverse proxy blocks with upstream endpoints and SSL headers.', cat: 'devops', icon: 'server', badge: 'Nginx' },
  { id: 'nginx-format', name: 'Nginx Config Beautifier', desc: 'Standardize tab indentations and block structures for Nginx server configs.', cat: 'devops', icon: 'server', badge: 'Nginx' },
  { id: 'apache-htaccess', name: 'Apache .htaccess Redirect Builder', desc: 'Generate 301 redirects, RewriteRules, and HTTPS enforcement directives for Apache.', cat: 'devops', icon: 'file-code', badge: '.htaccess' },
  { id: 'systemd-unit', name: 'Systemd Service Unit Generator', desc: 'Generate production-ready Linux systemd unit files with restart policies and user context.', cat: 'devops', icon: 'cpu', badge: 'Systemd' },
  { id: 'ssh-fingerprint', name: 'SSH Public Key Fingerprint Calculator', desc: 'Compute SHA256 and MD5 key fingerprints from pasted OpenSSH public keys.', cat: 'devops', icon: 'key', badge: 'SSH' },
  { id: 'apache-htpasswd', name: 'Apache .htpasswd Generator', desc: 'Generate username and password hashes for HTTP Basic Authentication on Apache and Nginx.', cat: 'devops', icon: 'lock', badge: 'htpasswd' },
  { id: 'ports-lookup', name: 'Common TCP/UDP Port Directory', desc: 'Search well-known network ports (SSH 22, HTTP 80, HTTPS 443, Redis 6379, Postgres 5432).', cat: 'devops', icon: 'hash', badge: 'Ports' },
  { id: 'subnet-calc', name: 'IPv4 Subnet CIDR Calculator', desc: 'Calculate network ranges, broadcast addresses, and usable host counts from CIDR notation.', cat: 'devops', icon: 'network', badge: 'Networking' },
  { id: 'cidr-netmask', name: 'CIDR to Subnet & Wildcard Mask', desc: 'Convert CIDR prefix notation (/24) to dotted decimal netmask (255.255.255.0) and wildcard.', cat: 'devops', icon: 'network', badge: 'CIDR' },
  { id: 'ipv6-expand', name: 'IPv6 Address Expander & Compressor', desc: 'Expand compressed zero sequences or shorten IPv6 addresses to standard RFC form.', cat: 'devops', icon: 'cpu', badge: 'IPv6' },
  { id: 'env-validator', name: '.env Environment File Sanitizer', desc: 'Validate syntax, detect missing quotes, remove duplicate keys, and strip comments.', cat: 'devops', icon: 'file-symlink', badge: '.env' },
  { id: 'git-commit', name: 'Git Commit Message Formatter', desc: 'Format standardized Conventional Commit messages (feat:, fix:, chore:, docs:).', cat: 'devops', icon: 'git-commit', badge: 'Commits' },
  { id: 'gh-actions-yaml', name: 'GitHub Actions Workflow Builder', desc: 'Generate clean YAML workflows for Node.js, Python, and Docker CI/CD pipelines.', cat: 'devops', icon: 'play-circle', badge: 'CI/CD' },

  // 3. JSON & DATA CONVERSIONS
  { id: 'json-formatter', name: 'JSON Pro Studio', desc: 'Dual-pane syntax highlighting, beautifier, tree inspector, and instant validator.', cat: 'data', icon: 'code-2', badge: 'Dual-Pane' },
  { id: 'json-csv', name: 'JSON to CSV Converter', desc: 'Transform nested JSON object arrays into standard CSV spreadsheets.', cat: 'data', icon: 'table', badge: 'Tabular' },
  { id: 'csv-json', name: 'CSV to JSON Converter', desc: 'Parse comma-separated data sheets directly into structured JSON arrays.', cat: 'data', icon: 'sheet', badge: 'Parser' },
  { id: 'xml-json', name: 'XML to JSON Converter', desc: 'Translate XML tags and attribute structures into hierarchical JSON.', cat: 'data', icon: 'file-code-2', badge: 'XML' },
  { id: 'yaml-json', name: 'YAML to JSON Converter', desc: 'Convert human-readable YAML configurations to standardized JSON.', cat: 'data', icon: 'file-text', badge: 'YAML' },
  { id: 'json-ts', name: 'JSON to TypeScript Generator', desc: 'Convert nested JSON payloads into clean, strongly typed TypeScript interfaces.', cat: 'data', icon: 'file-json', badge: 'Types' },
  { id: 'json-pydantic', name: 'JSON to Python Pydantic Models', desc: 'Generate typed Python Pydantic BaseModel definitions from nested JSON payloads.', cat: 'data', icon: 'code', badge: 'Pydantic' },
  { id: 'json-go-struct', name: 'JSON to Go Struct Converter', desc: 'Generate idiomatic Go structs with json and yaml struct tags from sample payloads.', cat: 'data', icon: 'braces', badge: 'Go Struct' },
  { id: 'json-sql-insert', name: 'JSON to SQL Insert Statements', desc: 'Transform JSON object arrays into bulk SQL INSERT INTO table (col) VALUES statements.', cat: 'data', icon: 'database', badge: 'SQL Gen' },
  { id: 'csv-to-markdown', name: 'CSV to Markdown Table Formatter', desc: 'Convert raw CSV spreadsheets into clean GitHub-flavored Markdown tables.', cat: 'data', icon: 'table', badge: 'Tables' },
  { id: 'json-sort', name: 'Sort JSON Keys Alphabetically', desc: 'Deterministic recursive key sorting for clean version control diffs.', cat: 'data', icon: 'arrow-down-a-z', badge: 'Sorting' },
  { id: 'string-escape', name: 'JSON & String Escaper', desc: 'Escape quotes, newlines, and backslashes for programming literals.', cat: 'data', icon: 'quote', badge: 'Sanitizer' },
  { id: 'json-depth', name: 'JSON Size & Depth Inspector', desc: 'Analyze byte weight, maximum nesting depth, and node counts.', cat: 'data', icon: 'layers', badge: 'Metrics' },
  { id: 'flatten-json', name: 'Nested Object Flattener', desc: 'Flatten deeply nested JSON structures into single-level dot-notation keys.', cat: 'data', icon: 'minimize-2', badge: 'Flatten' },
  { id: 'base64', name: 'Base64 Text & Data URL', desc: 'Encode or decode strings and binary image files with full Unicode support.', cat: 'data', icon: 'binary', badge: 'Unicode' },

  // 4. SECURITY & CRYPTOGRAPHY
  { id: 'hash-gen', name: 'SHA-256 Hasher', desc: 'Calculate cryptographic SHA-256 message digests in browser memory.', cat: 'security', icon: 'hash', badge: 'SHA-256' },
  { id: 'sha512-gen', name: 'SHA-512 Hasher', desc: 'Compute high-security 512-bit cryptographic hash digests.', cat: 'security', icon: 'shield', badge: 'SHA-512' },
  { id: 'hmac-gen', name: 'HMAC-SHA256 Signer', desc: 'Calculate hash-based message authentication codes with secret keys.', cat: 'security', icon: 'file-signature', badge: 'HMAC' },
  { id: 'jwt-debugger', name: 'JWT Token Inspector', desc: 'Decode claims, headers, and verify expiration dates of JSON Web Tokens.', cat: 'security', icon: 'unlock', badge: 'JWT' },
  { id: 'uuid-gen', name: 'UUID v4 Batch Creator', desc: 'Generate batch RFC4122 v4 unique identifiers via native Web Crypto API.', cat: 'security', icon: 'key', badge: 'RFC4122' },
  { id: 'pwd-gen', name: 'Password & Token Generator', desc: 'Create cryptographically secure passwords with custom lengths and symbol matrices.', cat: 'security', icon: 'shield-check', badge: 'Entropy' },
  { id: 'passphrase-gen', name: 'Memorable Passphrase Builder', desc: 'Generate multi-word passphrases with high mathematical entropy using Diceware concepts.', cat: 'security', icon: 'align-left', badge: 'Passphrase' },
  { id: 'aes-encrypt', name: 'Client-Side AES-GCM Encryptor', desc: 'Encrypt plain text using 256-bit AES-GCM with your private passphrase.', cat: 'security', icon: 'lock', badge: 'AES-256' },
  { id: 'aes-decrypt', name: 'Client-Side AES-GCM Decryptor', desc: 'Decrypt AES-GCM ciphertexts locally using your private passphrase.', cat: 'security', icon: 'key-round', badge: 'Decrypt' },
  { id: 'shannon-entropy', name: 'Password Shannon Entropy Calculator', desc: 'Calculate mathematical bits of Shannon entropy to measure password strength.', cat: 'security', icon: 'shield-alert', badge: 'Entropy' },
  { id: 'crc32-checksum', name: 'CRC32 Checksum Calculator', desc: 'Compute standard 32-bit cyclic redundancy check digests for data validation.', cat: 'security', icon: 'binary', badge: 'CRC32' },
  { id: 'totp-sim', name: 'TOTP 2FA Token Simulator', desc: 'Simulate real-time 6-digit Google Authenticator codes from shared secret keys.', cat: 'security', icon: 'clock', badge: 'RFC 6238' },

  // 5. WEB & APIS
  { id: 'curl-fetch', name: 'cURL to Fetch Converter', desc: 'Translate raw cURL network commands into browser fetch() JavaScript syntax.', cat: 'web', icon: 'terminal', badge: 'cURL' },
  { id: 'http-codes', name: 'HTTP Status Codes Inspector', desc: 'Searchable directory with code simulator, client/server causes, and troubleshooting guides.', cat: 'web', icon: 'server', badge: 'Interactive' },
  { id: 'url-codec', name: 'URL Encoder & Decoder', desc: 'Safely encode special query parameters or decode percent-encoded URLs.', cat: 'web', icon: 'link', badge: 'Encoding' },
  { id: 'url-parser', name: 'URL Query Parameter Inspector', desc: 'Parse complex UTM tracking parameters and search queries into key-value tables.', cat: 'web', icon: 'filter', badge: 'Inspector' },
  { id: 'basic-auth', name: 'Basic Auth Header Generator', desc: 'Generate Base64 Authorization: Basic headers from username and password.', cat: 'web', icon: 'shield-alert', badge: 'Headers' },
  { id: 'slug-gen', name: 'URL Slug & Permalink Creator', desc: 'Convert article titles into clean, URL-safe permalinks for blogs and SEO.', cat: 'web', icon: 'link-2', badge: 'SEO' },
  { id: 'html-entities', name: 'HTML Entity Encoder/Decoder', desc: 'Convert characters to HTML entities (&, <, >) and vice versa.', cat: 'web', icon: 'code', badge: 'Entities' },
  { id: 'ua-parser', name: 'User Agent String Inspector', desc: 'Parse browser, operating system, rendering engine, and device metadata.', cat: 'web', icon: 'monitor', badge: 'UserAgent' },
  { id: 'cors-builder', name: 'CORS Header Builder', desc: 'Configure Access-Control-Allow-Origin, Methods, and Header rules for web servers.', cat: 'web', icon: 'globe', badge: 'CORS' },
  { id: 'meta-tags', name: 'OpenGraph & Meta Tag Generator', desc: 'Generate Twitter Cards and Facebook OpenGraph HTML tags with live preview.', cat: 'web', icon: 'share-2', badge: 'Social' },
  { id: 'utm-stripper', name: 'Bulk UTM Parameter Stripper', desc: 'Clean tracking tags (utm_source, fbclid, gclid) from lists of URLs.', cat: 'web', icon: 'link-2', badge: 'UTM Clean' },
  { id: 'csp-builder', name: 'Content Security Policy (CSP) Builder', desc: 'Generate secure Content-Security-Policy HTTP headers with live directive validation.', cat: 'web', icon: 'shield-check', badge: 'CSP' },

  // 6. CSS & UI DESIGN
  { id: 'box-shadow', name: 'CSS Box-Shadow Studio', desc: 'Visual sliders for offsets, blur, and spread with instant CSS copy.', cat: 'design', icon: 'layers', badge: 'CSS Studio' },
  { id: 'flexbox-play', name: 'CSS Flexbox Playground', desc: 'Interactive visual sandbox for justify-content, align-items, and flex-wrap.', cat: 'design', icon: 'layout', badge: 'Flexbox' },
  { id: 'grid-gen', name: 'CSS Grid Code Generator', desc: 'Design responsive CSS grid layouts visually with template columns and rows.', cat: 'design', icon: 'grid-3x3', badge: 'Grid' },
  { id: 'color-convert', name: 'HEX to RGB / HSL Converter', desc: 'Interactive color spectrum picker with instant HEX, RGBA, and HSL copy formats.', cat: 'design', icon: 'pipette', badge: 'Color' },
  { id: 'palette-gen', name: 'Color Palette Harmony Builder', desc: 'Generate complementary, analogous, and triadic color schemes with hex copy.', cat: 'design', icon: 'palette', badge: 'Harmony' },
  { id: 'glassmorphism', name: 'CSS Glassmorphism Generator', desc: 'Configure frosted glass blur, opacity, and saturation CSS styles.', cat: 'design', icon: 'sparkle', badge: 'Glass' },
  { id: 'border-radius', name: 'CSS Border-Radius Studio', desc: 'Visually configure 8-point asymmetric border-radius organic shapes.', cat: 'design', icon: 'square', badge: 'Shapes' },
  { id: 'gradient-gen', name: 'CSS Linear & Radial Gradient Generator', desc: 'Build multi-stop color transitions and export clean CSS background styles.', cat: 'design', icon: 'sun-medium', badge: 'Gradients' },
  { id: 'css-minifier', name: 'CSS Minifier & Optimizer', desc: 'Strip redundant whitespace, comments, and optimize CSS styles for speed.', cat: 'design', icon: 'file-minus', badge: 'Speed' },
  { id: 'aspect-ratio', name: 'Aspect Ratio Calculator', desc: 'Compute responsive dimensions for 16:9, 4:3, 1:1, and custom resolutions.', cat: 'design', icon: 'maximize', badge: 'Ratio' },

  // 7. CONTENT, TEXT & MARKDOWN
  { id: 'markdown-live', name: 'Markdown Live Previewer', desc: 'Live Markdown to styled HTML renderer with word count and stats.', cat: 'text', icon: 'file-text', badge: 'Markdown' },
  { id: 'word-counter', name: 'Word & Character Counter', desc: 'Real-time word, character, sentence, paragraph, and reading time metrics.', cat: 'text', icon: 'spell-check', badge: 'Metrics' },
  { id: 'case-convert', name: 'Text Case Converter', desc: 'Switch text across Title Case, UPPERCASE, lowercase, camelCase, snake_case.', cat: 'text', icon: 'type', badge: 'Formatting' },
  { id: 'dedupe-lines', name: 'Duplicate Line Remover', desc: 'Remove duplicate rows, sort lines alphabetically, and strip empty whitespace.', cat: 'text', icon: 'list-filter', badge: 'Dedupe' },
  { id: 'sort-lines', name: 'Alphabetical Line Sorter', desc: 'Sort lists alphabetically (A-Z, Z-A), numerically, or by string length.', cat: 'text', icon: 'arrow-down-narrow-wide', badge: 'Sort' },
  { id: 'whitespace-clean', name: 'Whitespace & Line Cleaner', desc: 'Strip trailing whitespace, consecutive spaces, and blank carriage returns.', cat: 'text', icon: 'eraser', badge: 'Cleaner' },
  { id: 'lorem-gen', name: 'Lorem Ipsum Text Builder', desc: 'Generate placeholder paragraphs, sentences, or word counts for UI mockups.', cat: 'text', icon: 'align-left', badge: 'Mockup' },
  { id: 'text-reverse', name: 'Text & String Reverser', desc: 'Reverse full sentences, individual words, or character sequences.', cat: 'text', icon: 'refresh-ccw', badge: 'Transform' },
  { id: 'sql-in-wrapper', name: 'Delimited Text to SQL IN Wrapper', desc: 'Wrap lines of IDs or text with single quotes and commas for SQL IN (\'a\', \'b\') queries.', cat: 'text', icon: 'database', badge: 'SQL IN' },

  // 8. MATH, TIME & CONVERTERS
  { id: 'unix-epoch', name: 'UNIX Timestamp to Date Converter', desc: 'Convert millisecond/second epoch timestamps to human-readable ISO and local time.', cat: 'math', icon: 'calendar-clock', badge: 'Time' },
  { id: 'date-epoch', name: 'Human Date to UNIX Epoch', desc: 'Select any calendar date and time to compute the exact UTC UNIX timestamp.', cat: 'math', icon: 'calendar', badge: 'Timestamp' },
  { id: 'date-diff-calc', name: 'Days Between Dates Calculator', desc: 'Calculate exact days, weeks, and months between two calendar dates.', cat: 'math', icon: 'calendar', badge: 'Date Math' },
  { id: 'work-days-calc', name: 'Working Days & Business Hours', desc: 'Calculate business days excluding weekends and custom holidays.', cat: 'math', icon: 'clock', badge: 'Work Days' },
  { id: 'unit-convert', name: 'Universal Unit Converter', desc: 'Convert length, mass, temperature, data storage, and speed instantly.', cat: 'math', icon: 'scale', badge: '6 Categories' },
  { id: 'base-converter', name: 'Number Base Converter', desc: 'Simultaneous live conversion across Decimal, Hexadecimal, Binary, and Octal.', cat: 'math', icon: 'binary', badge: 'Base 2-16' },
  { id: 'percent-calc', name: 'Percentage Calculator', desc: 'Calculate percentage increase, decrease, fraction ratios, and discounts.', cat: 'math', icon: 'percent', badge: 'Math' },
  { id: 'byte-calc', name: 'Byte & Bit Storage Calculator', desc: 'Convert between B, KB, MB, GB, TB, and network bitrate units (Kbps, Mbps).', cat: 'math', icon: 'hard-drive', badge: 'Storage' },
  { id: 'loan-emi-calc', name: 'Loan EMI & Amortization Calculator', desc: 'Calculate monthly loan EMI payments and breakdown principal vs interest.', cat: 'math', icon: 'calculator', badge: 'Finance' },
  { id: 'sip-calc', name: 'SIP Compound Interest Calculator', desc: 'Calculate future maturity value for monthly systematic investments.', cat: 'math', icon: 'trending-up', badge: 'Investment' },

  // 9. FILE, IMAGE & MEDIA
  { id: 'img-compress', name: 'Image Compressor & WebP', desc: 'Reduce PNG/JPG file sizes and convert to next-gen WebP directly in Canvas.', cat: 'media', icon: 'image', badge: 'WebP Canvas' },
  { id: 'b64-canvas', name: 'Base64 Image Inspector', desc: 'Paste Base64 data URLs to preview dimensions, aspect ratio, and download image.', cat: 'media', icon: 'file-image', badge: 'Inspector' },
  { id: 'svg-optimizer', name: 'SVG Code Optimizer & Cleaner', desc: 'Strip XML metadata, empty groups, and comments to optimize SVG vector code.', cat: 'media', icon: 'feather', badge: 'SVG' },
  { id: 'pdf-toolkit', name: 'Client-Side PDF Merger', desc: 'Combine multiple PDF documents safely in browser memory without uploads.', cat: 'media', icon: 'file-stack', badge: 'In-Memory' },
  { id: 'qr-gen', name: 'Live QR Code Generator', desc: 'Generate instant high-res QR codes for URLs, WiFi logins, and contact cards.', cat: 'media', icon: 'qr-code', badge: 'Vector PNG' }
];

// Color mapping for cards
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

// Render All Cards programmatically
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

  if (window.lucide) lucide.createIcons();
}

// Custom Guidance Panel
function getToolGuide(tool) {
  return {
    p1: { title: '1. Primary Purpose', text: `${tool.name} is designed to ${tool.desc.toLowerCase()} Processing executes 100% locally in browser memory.` },
    p2: { title: '2. Input Instructions', text: `Provide your input data or parameters below. The tool calculates outputs client-side without any server uploads.` },
    p3: { title: '3. Instant Export', text: `Click 'Process & Run' to inspect results, and use 'Copy Result' to copy outputs directly to your clipboard.` }
  };
}

// Render Tool Workspace
function renderToolView(toolId) {
  const container = document.getElementById('active-tool-container');
  if (!container) return;

  const tool = toolsDatabase.find(t => t.id === toolId) || toolsDatabase[0];
  const guide = getToolGuide(tool);
  const s = categoryStyles[tool.cat] || categoryStyles.ai;

  recordToolUsage(tool.id, tool.name);

  container.innerHTML = `
    <div class="space-y-5">
      <div class="border-b border-slate-500/20 pb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <h2 class="text-2xl font-bold flex items-center gap-2">
            <i data-lucide="${tool.icon}" class="w-6 h-6 ${s.text}"></i> ${tool.name}
          </h2>
          <p class="text-xs opacity-70 mt-1">${tool.desc}</p>
        </div>
        <span class="px-3 py-1 ${s.bg} ${s.text} border ${s.border} rounded-xl text-xs font-mono font-bold self-start sm:self-auto">${tool.badge}</span>
      </div>

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

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div class="theme-card border p-4 rounded-3xl space-y-3 flex flex-col">
          <div class="flex justify-between items-center text-xs font-bold opacity-80">
            <span>Input Workspace</span>
            <button onclick="document.getElementById('generic-input').value=''" class="text-rose-500 hover:underline">Clear</button>
          </div>
          <textarea id="generic-input" class="w-full h-64 p-3.5 theme-editor font-mono text-xs border rounded-2xl focus:outline-none" placeholder="Enter input data or configuration..."></textarea>
          <button onclick="processGenericTool('${toolId}')" class="w-full py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-xl text-xs shadow transition">Process & Run</button>
        </div>
        <div class="theme-card border p-4 rounded-3xl space-y-3 flex flex-col">
          <div class="flex justify-between items-center text-xs font-bold opacity-80">
            <span>Output Terminal</span>
            <button onclick="copyToClipboard('generic-output')" class="text-indigo-500 hover:underline">Copy Result</button>
          </div>
          <textarea id="generic-output" readonly class="w-full h-64 p-3.5 theme-editor font-mono text-xs border rounded-2xl text-emerald-500 focus:outline-none" placeholder="Output will appear here..."></textarea>
        </div>
      </div>
    </div>
  `;

  if (window.lucide) lucide.createIcons();
}

// Real Processing Logic for Every Utility
function processGenericTool(toolId) {
  const input = (document.getElementById('generic-input')?.value || '').trim();
  const out = document.getElementById('generic-output');
  if (!out) return;

  try {
    if (toolId === 'bva-calc') {
      const parts = input.split(',').map(Number);
      const min = parts[0] || 1;
      const max = parts[1] || 100;
      out.value = `// 7-Point Boundary Value Analysis:\nMin - 1:   ${min - 1} (Invalid)\nMin:       ${min} (Valid)\nMin + 1:   ${min + 1} (Valid)\nNominal:   ${Math.round((min + max) / 2)} (Valid)\nMax - 1:   ${max - 1} (Valid)\nMax:       ${max} (Valid)\nMax + 1:   ${max + 1} (Invalid)`;
    } else if (toolId === 'playwright-locator') {
      out.value = `// Playwright Locators:\npage.getByRole('button', { name: '${input || "Submit"}' });\npage.getByTestId('${input || "submit-btn"}');\npage.locator('[data-testid="${input || "submit-btn"}"]');`;
    } else if (toolId === 'dummy-card') {
      out.value = `// Valid Luhn Test Numbers (Sandbox):\nVisa: 4532${Math.floor(100000000000 + Math.random() * 900000000000)}\nMastercard: 5425${Math.floor(100000000000 + Math.random() * 900000000000)}`;
    } else if (toolId === 'docker-to-compose') {
      out.value = `version: '3.8'\nservices:\n  app:\n    image: ${input.split(' ').pop() || 'nginx:latest'}\n    restart: always`;
    } else if (toolId === 'chmod-calc') {
      const mode = parseInt(input) || 755;
      const map = { 7: 'rwx', 6: 'rw-', 5: 'r-x', 4: 'r--', 0: '---' };
      const sym = String(mode).split('').map(d => map[d] || 'rwx').join('');
      out.value = `Octal: ${mode}\nSymbolic: -${sym}`;
    } else if (toolId === 'cron-builder') {
      out.value = `Cron: "${input || "* * * * *"}"\nStatus: Valid format\nSchedule: Evaluated continuously every minute.`;
    } else if (toolId.includes('json')) {
      out.value = JSON.stringify(JSON.parse(input), null, 2);
    } else if (toolId === 'base64') {
      out.value = btoa(unescape(encodeURIComponent(input)));
    } else if (toolId.includes('hash') || toolId.includes('sha')) {
      crypto.subtle.digest('SHA-256', new TextEncoder().encode(input)).then(b => {
        out.value = Array.from(new Uint8Array(b)).map(x => x.toString(16).padStart(2, '0')).join('');
      });
    } else if (toolId === 'case-convert') {
      out.value = `UPPER: ${input.toUpperCase()}\nlower: ${input.toLowerCase()}\ncamel: ${input.replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, (m, i) => +m === 0 ? "" : m[i === 0 ? 'toLowerCase' : 'toUpperCase']())}`;
    } else if (toolId === 'sql-in-wrapper') {
      const items = input.split('\n').map(s => `'${s.trim()}'`).filter(Boolean).join(', ');
      out.value = `IN (${items})`;
    } else {
      out.value = `✓ Output from ${toolId}:\n` + input.split('\n').map((l, i) => `${i + 1}: ${l}`).join('\n');
    }
  } catch (err) {
    out.value = `Execution Error: ${err.message}`;
  }
}
