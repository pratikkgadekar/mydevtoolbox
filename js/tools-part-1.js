/* js/tools-part-1.js - Tools Part 1 */
window.toolsPart1 = [
  // AI, LLM & PROMPTING
  ['llm-tokens', 'LLM Token Counter & Pricing', 'Estimate BPE tokens and query costs for GPT-4o, Claude 3.5, Gemini, and DeepSeek', 'ai', 'cpu', '14+ Models'],
  ['md-table-gen', 'Visual Markdown Table Builder', 'Spreadsheet grid builder that generates formatted copyable Markdown table syntax', 'ai', 'grid', 'Grid Studio'],
  ['wcag-contrast', 'WCAG Color Contrast Checker', 'Real-time foreground/background ratio calculator with instant AA/AAA accessibility ratings', 'ai', 'eye', 'WCAG 2.1'],
  ['prompt-cleaner', 'System Prompt Sanitizer', 'Strip trailing whitespace, duplicate tokens, and normalize prompt layouts for clean LLM context', 'ai', 'sparkles', 'Prompt Eng'],
  ['json-ts', 'JSON to TypeScript Generator', 'Convert nested JSON payloads into clean, strongly typed TypeScript interfaces', 'ai', 'file-json', 'Types'],
  ['prompt-variables', 'Prompt Template Interpolator', 'Substitute dynamic mustache variables {{name}} into prompt templates for batch API generations', 'ai', 'brackets', 'Templates'],
  ['few-shot-formatter', 'Few-Shot Example Formatter', 'Format input-output training pairs for structured LLM fine-tuning and in-context learning', 'ai', 'list-ordered', 'Training'],
  ['temp-top-p', 'Temperature & Top-P Calculator', 'Simulate deterministic vs creative generation variance parameters for OpenAI and Anthropic', 'ai', 'sliders', 'Parameters'],
  ['context-slicer', 'Long Context Window Slicer', 'Partition large text files into uniform chunks with customizable token overlap for vector DBs', 'ai', 'scissors', 'RAG'],
  ['json-schema-ai', 'JSON Schema to Structured Output', 'Generate strict schema models for OpenAI function calling and Anthropic tool use', 'ai', 'code', 'Structured'],

  // QA, TEST AUTOMATION & SCRAPING
  ['dummy-card', 'Dummy Test Card Generator', 'Generate Luhn-valid dummy credit card numbers strictly for billing QA', 'testing', 'credit-card', 'Luhn Valid'],
  ['pdf-toolkit', 'Client-Side PDF Merger', 'Combine multiple PDF documents safely in browser memory without uploads', 'testing', 'file-stack', 'In-Memory'],
  ['mock-user-gen', 'Mock User Profile Generator', 'Generate realistic test identities with names, avatars, emails, and addresses', 'testing', 'user-check', 'Mock Data'],
  ['random-email-gen', 'Random Email & Phone Generator', 'Create test email addresses and phone numbers for form validation QA', 'testing', 'mail', 'QA Forms'],
  ['regex-tester', 'Regex Sandbox & Matcher', 'Interactive regular expression tester with capture group inspection', 'testing', 'regex', 'Live Sandbox'],
  ['string-boundary', 'String Length Boundary Tester', 'Generate boundary strings (255 chars, 65535 chars, UTF-8 emojis) for QA', 'testing', 'ruler', 'Limits'],
  ['playwright-locator', 'Playwright Locator Builder', 'Convert HTML attributes and ARIA roles into page.getByRole() and locator() syntax', 'testing', 'terminal-square', 'Playwright'],
  ['xpath-css-convert', 'XPath & CSS Selector Converter', 'Bidirectional converter between XPath expressions and CSS selectors with syntax checks', 'testing', 'code-2', 'Selectors'],
  ['bva-calc', 'Boundary Value Analysis Calculator', 'Auto-generate 7-point boundary test cases from min, max, and step values', 'testing', 'ruler', 'BVA Matrix'],
  ['cypress-cmd-builder', 'Cypress Selector & Command Generator', 'Generate Cypress cy.get(), cy.contains(), and cy.should() assertion commands', 'testing', 'terminal', 'Cypress'],

  // JSON, CSV, XML & DATA FORMATS
  ['json-formatter', 'JSON Pro Studio', 'Dual-pane syntax highlighting, beautifier, tree inspector, and validator', 'data', 'code-2', 'Dual-Pane'],
  ['json-csv', 'JSON to CSV Converter', 'Transform nested JSON object arrays into standard CSV spreadsheets', 'data', 'table', 'Tabular'],
  ['csv-json', 'CSV to JSON Converter', 'Parse comma-separated data sheets directly into structured JSON arrays', 'data', 'sheet', 'Parser'],
  ['xml-json', 'XML to JSON Converter', 'Translate XML tags and attribute structures into hierarchical JSON', 'data', 'file-code-2', 'XML'],
  ['yaml-json', 'YAML to JSON Converter', 'Convert human-readable YAML configurations to standardized JSON', 'data', 'file-text', 'YAML'],
  ['json-sort', 'Sort JSON Keys Alphabetically', 'Deterministic recursive key sorting for clean version control diffs', 'data', 'arrow-down-a-z', 'Sorting'],
  ['string-escape', 'JSON & String Escaper', 'Escape quotes, newlines, and backslashes for programming literals', 'data', 'quote', 'Sanitizer'],
  ['json-depth', 'JSON Size & Depth Inspector', 'Analyze byte weight, maximum nesting depth, and node counts', 'data', 'layers', 'Metrics'],
  ['flatten-json', 'Nested Object Flattener', 'Flatten deeply nested JSON structures into single-level dot-notation keys', 'data', 'minimize-2', 'Flatten'],
  ['base64', 'Base64 Text & Data URL', 'Encode or decode strings and binary image files with full Unicode support', 'data', 'binary', 'Unicode'],

  // SECURITY, TOKENS & CRYPTOGRAPHY
  ['uuid-gen', 'UUID v4 Batch Creator', 'Generate batch RFC4122 v4 unique identifiers via Web Crypto API', 'security', 'key', 'RFC4122'],
  ['pwd-gen', 'Password & Token Generator', 'Create cryptographically secure passwords with custom lengths and symbols', 'security', 'shield-check', 'Entropy'],
  ['hash-gen', 'SHA-256 Hasher', 'Calculate cryptographic SHA-256 message digests in browser memory', 'security', 'hash', 'SHA-256'],
  ['sha512-gen', 'SHA-512 Hasher', 'Compute high-security 512-bit cryptographic hash digests', 'security', 'shield', 'SHA-512'],
  ['hmac-gen', 'HMAC-SHA256 Signer', 'Calculate hash-based message authentication codes with secret keys', 'security', 'file-signature', 'HMAC'],
  ['jwt-debugger', 'JWT Token Inspector', 'Decode claims, headers, and verify expiration dates of JSON Web Tokens', 'security', 'unlock', 'JWT'],
  ['salt-gen', 'Random Salt & Hex String', 'Create random hexadecimal and alphanumeric tokens for secret keys', 'security', 'shuffle', 'Tokens'],
  ['passphrase-gen', 'Memorable Passphrase Builder', 'Generate multi-word passphrases with high mathematical entropy', 'security', 'align-left', 'Passphrase'],
  ['aes-encrypt', 'Client-Side AES-GCM Encryptor', 'Encrypt plain text using 256-bit AES-GCM with your private passphrase', 'security', 'lock', 'AES-256'],
  ['aes-decrypt', 'Client-Side AES-GCM Decryptor', 'Decrypt AES-GCM ciphertexts locally using your private passphrase', 'security', 'key-round', 'Decrypt'],

  // WEB, HTTP & APIS
  ['http-codes', 'HTTP Status Codes Inspector', 'Searchable directory with code simulator, client/server causes, and snippets', 'web', 'server', 'Interactive'],
  ['curl-fetch', 'cURL to Fetch Converter', 'Translate raw cURL network commands into browser fetch() JavaScript syntax', 'web', 'terminal', 'cURL'],
  ['url-codec', 'URL Encoder & Decoder', 'Safely encode special query parameters or decode percent-encoded URLs', 'web', 'link', 'Encoding'],
  ['url-parser', 'URL Query Parameter Inspector', 'Parse complex UTM tracking parameters and search queries into key-value tables', 'web', 'filter', 'Inspector'],
  ['basic-auth', 'Basic Auth Header Generator', 'Generate Base64 Authorization: Basic headers from username and password', 'web', 'shield-alert', 'Headers'],
  ['slug-gen', 'URL Slug & Permalink Creator', 'Convert article titles into clean, URL-safe permalinks for blogs and SEO', 'web', 'link-2', 'SEO'],
  ['html-entities', 'HTML Entity Encoder/Decoder', 'Convert characters to HTML entities (&, <, >) and vice versa', 'web', 'code', 'Entities'],
  ['ua-parser', 'User Agent String Inspector', 'Parse browser, operating system, rendering engine, and device metadata', 'web', 'monitor', 'UserAgent'],
  ['cors-builder', 'CORS Header Builder', 'Configure Access-Control-Allow-Origin, Methods, and Header rules', 'web', 'globe', 'CORS'],
  ['meta-tags', 'OpenGraph & Meta Tag Generator', 'Generate Twitter Cards and Facebook OpenGraph HTML tags with live preview', 'web', 'share-2', 'Social']
];
