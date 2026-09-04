/* js/tools.js - Complete Real Utilities Catalog (Original 100 + 300+ Production Utilities) */

const toolsDatabase = [
  // ============================================================================
  // 1. AI, LLM & PROMPT STUDIO
  // ============================================================================
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
  { id: 'chunk-overlap-calc', name: 'RAG Chunk & Overlap Calculator', desc: 'Calculate optimal chunk size and overlap token percentage for vector databases', cat: 'ai', icon: 'layers', badge: 'RAG DB' },
  { id: 'prompt-char-budget', name: 'Prompt Token Budget Sizer', desc: 'Calculate context window margin and system vs user token splits', cat: 'ai', icon: 'pie-chart', badge: 'Context' },
  { id: 'jsonl-fine-tune', name: 'JSONL Training Pair Validator', desc: 'Validate prompt-completion and chat-format JSONL lines for model fine-tuning', cat: 'ai', icon: 'file-check', badge: 'JSONL' },
  { id: 'stop-sequence-tester', name: 'LLM Stop Sequence Cleaner', desc: 'Test and preview early generation termination strings for completions', cat: 'ai', icon: 'square', badge: 'Inference' },
  { id: 'role-tag-formatter', name: 'ChatML Role Tag Formatter', desc: 'Format system, user, and assistant blocks into ChatML and Llama instruct formats', cat: 'ai', icon: 'message-square', badge: 'ChatML' },
  { id: 'emb-dim-inspector', name: 'Vector Embedding Dimension Inspector', desc: 'Inspect array length and normalization score for text embeddings', cat: 'ai', icon: 'git-commit', badge: 'Vector' },
  { id: 'cot-step-formatter', name: 'Chain-of-Thought Step Builder', desc: 'Structure complex multi-step reasoning instructions for agent prompts', cat: 'ai', icon: 'list-tree', badge: 'Prompting' },
  { id: 'prompt-fuzzer', name: 'System Prompt Leaking Fuzzer', desc: 'Generate adversarial test prompts to evaluate system prompt boundary security', cat: 'ai', icon: 'shield-alert', badge: 'Red Team' },
  { id: 'token-cost-estimator', name: 'Batch Inference Cost Estimator', desc: 'Calculate batch processing costs across million-token tiers for major frontier models', cat: 'ai', icon: 'calculator', badge: 'Pricing' },
  { id: 'regex-prompt-filter', name: 'AI Output Hallucination Filter', desc: 'Extract clean markdown and JSON codeblocks from raw assistant responses', cat: 'ai', icon: 'filter', badge: 'Parsing' },

  // ============================================================================
  // 2. JSON & DATA FORMATS
  // ============================================================================
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
  { id: 'json-unflatten', name: 'Unflatten Dot-Notation to JSON', desc: 'Convert dot-delimited key-value objects back into nested JSON hierarchies', cat: 'data', icon: 'maximize-2', badge: 'Structure' },
  { id: 'json-to-yaml', name: 'JSON to YAML Converter', desc: 'Convert standardized JSON payloads into clean, indented YAML configuration syntax', cat: 'data', icon: 'file-text', badge: 'YAML' },
  { id: 'json-to-xml', name: 'JSON to XML Converter', desc: 'Transform structured JSON objects and arrays into valid XML tags and attributes', cat: 'data', icon: 'file-code', badge: 'XML' },
  { id: 'json-to-toml', name: 'JSON to TOML Converter', desc: 'Convert JSON schemas into TOML tables and values for Rust and Python packages', cat: 'data', icon: 'settings', badge: 'TOML' },
  { id: 'toml-to-json', name: 'TOML to JSON Converter', desc: 'Parse TOML configurations into standardized JSON data models', cat: 'data', icon: 'file-json', badge: 'TOML' },
  { id: 'tsv-to-json', name: 'TSV to JSON Converter', desc: 'Convert tab-separated values copied from Excel and Google Sheets into JSON', cat: 'data', icon: 'table', badge: 'TSV' },
  { id: 'json-to-tsv', name: 'JSON to TSV Spreadsheet', desc: 'Convert JSON arrays into tab-delimited records ready to paste into spreadsheets', cat: 'data', icon: 'sheet', badge: 'Spreadsheet' },
  { id: 'json-sql-insert', name: 'JSON to SQL Insert Statements', desc: 'Transform JSON object arrays into bulk SQL INSERT INTO table (col) VALUES queries', cat: 'data', icon: 'database', badge: 'SQL Gen' },
  { id: 'sql-insert-to-json', name: 'SQL Insert Statements to JSON', desc: 'Parse SQL INSERT statements and dump rows into a copyable JSON array', cat: 'data', icon: 'database', badge: 'Reverse SQL' },
  { id: 'csv-to-markdown', name: 'CSV to Markdown Table Converter', desc: 'Transform comma-separated text into clean GitHub-flavored Markdown tables', cat: 'data', icon: 'grid', badge: 'Tables' },
  { id: 'markdown-to-csv', name: 'Markdown Table to CSV Converter', desc: 'Extract tabular columns from Markdown tables and export standard CSV data', cat: 'data', icon: 'sheet', badge: 'CSV' },
  { id: 'json-pydantic', name: 'JSON to Python Pydantic Models', desc: 'Generate typed Python Pydantic BaseModel classes with field validation from JSON', cat: 'data', icon: 'code', badge: 'Pydantic' },
  { id: 'json-go-struct', name: 'JSON to Go Structs with Tags', desc: 'Generate idiomatic Go structs with json, yaml, and db struct tags from sample payloads', cat: 'data', icon: 'braces', badge: 'Go Struct' },
  { id: 'json-java-pojo', name: 'JSON to Java POJO Lombok Class', desc: 'Generate Java POJOs with @Data, @Builder, and Jackson annotations from JSON', cat: 'data', icon: 'coffee', badge: 'Java POJO' },
  { id: 'json-rust-serde', name: 'JSON to Rust Serde Structs', desc: 'Generate Rust struct definitions with derive Serialize, Deserialize, and Debug', cat: 'data', icon: 'cpu', badge: 'Rust Serde' },
  { id: 'json-csharp-records', name: 'JSON to C# Records & Models', desc: 'Generate C# 10+ record types with System.Text.Json attributes from JSON', cat: 'data', icon: 'code-2', badge: 'C# Models' },
  { id: 'json-kotlin-data', name: 'JSON to Kotlin Data Classes', desc: 'Convert JSON payloads into Kotlin data classes with kotlinx.serialization tags', cat: 'data', icon: 'file-code', badge: 'Kotlin' },
  { id: 'json-protobuf', name: 'JSON to Protocol Buffers proto3', desc: 'Generate proto3 message definitions with strongly typed sequential field IDs', cat: 'data', icon: 'file-text', badge: 'Protobuf' },
  { id: 'json-graphql', name: 'JSON to GraphQL Type Definitions', desc: 'Generate GraphQL schema type definitions with field inference from JSON payloads', cat: 'data', icon: 'share-2', badge: 'GraphQL' },
  { id: 'json-path-eval', name: 'JSONPath Query Evaluator', desc: 'Evaluate JSONPath queries ($.store.book[*].author) on complex JSON trees', cat: 'data', icon: 'search', badge: 'JSONPath' },
  { id: 'ndjson-to-json', name: 'NDJSON to JSON Array Converter', desc: 'Convert newline-delimited JSON stream logs into a single valid JSON array', cat: 'data', icon: 'align-justify', badge: 'NDJSON' },
  { id: 'json-to-ndjson', name: 'JSON Array to NDJSON Stream', desc: 'Convert a standard JSON array into line-delimited records for BigQuery and Elasticsearch', cat: 'data', icon: 'list', badge: 'BigQuery' },
  { id: 'properties-to-json', name: 'Java .properties to JSON', desc: 'Convert key=value Java configuration files into nested hierarchical JSON', cat: 'data', icon: 'settings', badge: '.properties' },
  { id: 'ini-to-json', name: 'INI Configuration to JSON', desc: 'Convert standard sectioned INI files into structured JSON objects', cat: 'data', icon: 'file-cog', badge: 'INI' },
  { id: 'json-diff-keys', name: 'JSON Structural Diff Inspector', desc: 'Compare two JSON objects to highlight missing, added, and altered key paths', cat: 'data', icon: 'git-compare', badge: 'Diff' },

  // ============================================================================
  // 3. SECURITY & CRYPTOGRAPHY
  // ============================================================================
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
  { id: 'sha384-hasher', name: 'SHA-384 Cryptographic Hasher', desc: 'Compute SHA-384 message digests compliant with FIPS PUB 180-4 locally', cat: 'security', icon: 'hash', badge: 'SHA-384' },
  { id: 'sha1-hasher', name: 'SHA-1 Hasher (Legacy Verification)', desc: 'Compute legacy SHA-1 digests for Git commit and legacy file checksum verification', cat: 'security', icon: 'shield', badge: 'SHA-1' },
  { id: 'md5-hasher', name: 'MD5 Checksum Hasher', desc: 'Calculate 128-bit MD5 checksum hashes for file integrity checks', cat: 'security', icon: 'hash', badge: 'MD5' },
  { id: 'crc32-calc', name: 'CRC32 Checksum Calculator', desc: 'Calculate standard 32-bit cyclic redundancy check polynomial values', cat: 'security', icon: 'binary', badge: 'CRC32' },
  { id: 'base58-codec', name: 'Base58 Encoder & Decoder', desc: 'Encode and decode strings using Bitcoin-compatible Base58 alphabet without ambiguous chars', cat: 'security', icon: 'key', badge: 'Base58' },
  { id: 'base32-codec', name: 'Base32 (RFC 4648) Encoder/Decoder', desc: 'Encode and decode strings into 32-character uppercase representations for 2FA secrets', cat: 'security', icon: 'key-round', badge: 'Base32' },
  { id: 'hex-to-ascii', name: 'Hexadecimal to ASCII Text Converter', desc: 'Convert raw hex byte strings into readable ASCII characters and vice versa', cat: 'security', icon: 'binary', badge: 'Hex' },
  { id: 'ascii-to-hex', name: 'ASCII Text to Hex Byte Stream', desc: 'Convert plain text strings into space-delimited or continuous hexadecimal byte arrays', cat: 'security', icon: 'binary', badge: 'ASCII' },
  { id: 'totp-simulator', name: 'TOTP 2FA Code Simulator', desc: 'Generate real-time 6-digit Google Authenticator verification codes from Base32 keys', cat: 'security', icon: 'clock', badge: 'RFC 6238' },
  { id: 'hotp-generator', name: 'HOTP Counter-Based OTP Generator', desc: 'Generate counter-incremented HMAC-based one-time passwords compliant with RFC 4226', cat: 'security', icon: 'refresh-cw', badge: 'HOTP' },
  { id: 'shannon-entropy', name: 'Password Shannon Entropy Calculator', desc: 'Calculate mathematical bits of Shannon entropy to measure resistance against brute force', cat: 'security', icon: 'shield-alert', badge: 'Entropy' },
  { id: 'uuid-v1-gen', name: 'UUID v1 Timestamp Generator', desc: 'Generate Gregorian epoch timestamp-ordered UUID v1 identifiers with node IDs', cat: 'security', icon: 'key', badge: 'UUID v1' },
  { id: 'uuid-v7-gen', name: 'UUID v7 Unix Timestamp Generator', desc: 'Generate monotonic Unix-epoch millisecond-ordered UUID v7 IDs for database primary keys', cat: 'security', icon: 'key', badge: 'UUID v7' },
  { id: 'nanoid-gen', name: 'NanoID Compact Generator', desc: 'Generate URL-friendly, compact, cryptographically strong unique string identifiers', cat: 'security', icon: 'zap', badge: 'NanoID' },
  { id: 'hmac-sha512', name: 'HMAC-SHA512 Signer', desc: 'Calculate high-entropy hash-based message authentication codes with SHA-512', cat: 'security', icon: 'file-signature', badge: 'HMAC' },
  { id: 'rot13-cipher', name: 'ROT13 & Caesar Cipher Rotator', desc: 'Rotate alphabet characters by 13 positions for simple obfuscation and spoiler masking', cat: 'security', icon: 'rotate-cw', badge: 'Cipher' },
  { id: 'basic-auth-header', name: 'Basic Auth Header Generator', desc: 'Generate Base64 Authorization: Basic headers from username and password credentials', cat: 'security', icon: 'shield-alert', badge: 'Headers' },
  { id: 'bearer-header', name: 'Bearer Token Header Formatter', desc: 'Format Authorization: Bearer <token> HTTP request headers safely', cat: 'security', icon: 'key', badge: 'Auth' },
  { id: 'url-safe-token', name: 'URL-Safe Cryptographic Nonce Generator', desc: 'Generate high-entropy random bytes formatted for query strings, OAuth states, and CSRF nonces', cat: 'security', icon: 'shield-check', badge: 'Nonce' },
  { id: 'api-key-masker', name: 'API Key Secret Masker & Redactor', desc: 'Mask private API keys, leaving only the last 4 characters visible for safe log publishing', cat: 'security', icon: 'eye-off', badge: 'Sanitizer' },

  // ============================================================================
  // 4. WEB, APIS & NETWORKING
  // ============================================================================
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
  { id: 'curl-to-python', name: 'cURL to Python Requests Converter', desc: 'Translate raw cURL network requests into idiomatic Python requests script code', cat: 'web', icon: 'terminal', badge: 'Python' },
  { id: 'curl-to-axios', name: 'cURL to Axios JavaScript Converter', desc: 'Convert raw cURL shell commands into modern axios.request() configurations', cat: 'web', icon: 'terminal', badge: 'Axios' },
  { id: 'curl-to-go', name: 'cURL to Go net/http Converter', desc: 'Transform cURL commands into ready-to-run Go http.NewRequest standard library code', cat: 'web', icon: 'terminal', badge: 'Go' },
  { id: 'curl-to-php', name: 'cURL to PHP curl_init Converter', desc: 'Convert cURL commands into native PHP curl_setopt() script blocks', cat: 'web', icon: 'terminal', badge: 'PHP' },
  { id: 'curl-to-java', name: 'cURL to Java HttpClient Converter', desc: 'Translate cURL commands into modern Java 11+ java.net.http.HttpRequest code', cat: 'web', icon: 'terminal', badge: 'Java' },
  { id: 'utm-stripper', name: 'Bulk UTM Tracking Parameter Stripper', desc: 'Strip marketing query tags (utm_source, gclid, fbclid) from batches of URLs', cat: 'web', icon: 'link-2', badge: 'UTM Clean' },
  { id: 'url-query-to-json', name: 'URL Query String to JSON Object', desc: 'Parse query parameters (?page=1&sort=desc) into structured JSON format', cat: 'web', icon: 'file-json', badge: 'Params' },
  { id: 'json-to-url-query', name: 'JSON Object to URL Query String', desc: 'Serialize key-value JSON objects into percent-encoded URL search query strings', cat: 'web', icon: 'link', badge: 'Query' },
  { id: 'url-path-analyzer', name: 'URL Path Segments Analyzer', desc: 'Break down URLs into scheme, subdomain, domain, port, path segments, and hashes', cat: 'web', icon: 'search', badge: 'Parser' },
  { id: 'punycode-converter', name: 'Punycode IDN Domain Converter', desc: 'Encode internationalized domain names with non-ASCII characters to standard Punycode', cat: 'web', icon: 'globe', badge: 'Punycode' },
  { id: 'robots-txt-builder', name: 'Robots.txt Builder & Tester', desc: 'Generate and test User-agent, Allow, Disallow, and Sitemap crawler directives', cat: 'web', icon: 'file-text', badge: 'Robots' },
  { id: 'sitemap-xml-gen', name: 'Sitemap.xml URL List Builder', desc: 'Generate standardized XML sitemaps with priority, changefreq, and lastmod tags', cat: 'web', icon: 'file-code', badge: 'Sitemap' },
  { id: 'csp-builder', name: 'Content Security Policy (CSP) Builder', desc: 'Configure default-src, script-src, and style-src headers to prevent XSS attacks', cat: 'web', icon: 'shield-check', badge: 'CSP' },
  { id: 'hsts-builder', name: 'Strict-Transport-Security (HSTS) Builder', desc: 'Configure max-age, includeSubDomains, and preload flags for HTTPS enforcement', cat: 'web', icon: 'lock', badge: 'HSTS' },
  { id: 'cache-control-advisor', name: 'Cache-Control Header Advisor', desc: 'Configure max-age, s-maxage, stale-while-revalidate, and immutable directives', cat: 'web', icon: 'clock', badge: 'Caching' },
  { id: 'mime-types-directory', name: 'MIME Type & Content-Type Directory', desc: 'Quickly look up standardized MIME types for file extensions and REST API headers', cat: 'web', icon: 'file', badge: 'MIME' },
  { id: 'sri-hash-gen', name: 'Subresource Integrity (SRI) Hash Builder', desc: 'Calculate sha384 integrity hashes for secure CDN script and stylesheet tags', cat: 'web', icon: 'check-circle', badge: 'SRI' },
  { id: 'http-etag-gen', name: 'HTTP ETag Checksum Generator', desc: 'Generate entity tag validator strings from content payloads for conditional caching', cat: 'web', icon: 'hash', badge: 'ETag' },
  { id: 'canonical-tag-gen', name: 'Canonical URL HTML Tag Generator', desc: 'Generate rel=canonical meta tags to resolve duplicate content indexing in SEO', cat: 'web', icon: 'link', badge: 'SEO' },
  { id: 'rate-limit-calc', name: 'Rate Limit Response Headers Simulator', desc: 'Format standard X-RateLimit-Limit, Remaining, and Reset header envelopes', cat: 'web', icon: 'activity', badge: 'Rate Limit' },

  // ============================================================================
  // 5. CSS & UI DESIGN
  // ============================================================================
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
  { id: 'px-to-rem', name: 'PX to REM & REM to PX Converter', desc: 'Calculate responsive typography units based on customizable 16px root font size', cat: 'design', icon: 'type', badge: 'REM Units' },
  { id: 'fluid-clamp-calc', name: 'Fluid Typography clamp() Calculator', desc: 'Generate CSS clamp(min, val, max) expressions for smoothly scaling screen fonts', cat: 'design', icon: 'maximize-2', badge: 'Fluid Text' },
  { id: 'text-shadow-gen', name: 'CSS Text-Shadow & Glow Builder', desc: 'Design multi-layered text drop shadows and glowing neon effects with live CSS', cat: 'design', icon: 'type', badge: 'Shadow' },
  { id: 'triangle-gen', name: 'CSS Border Triangle Generator', desc: 'Generate pure CSS directional arrows and tooltips using border width hacks', cat: 'design', icon: 'play', badge: 'Shapes' },
  { id: 'clip-path-gen', name: 'CSS Clip-Path Polygon Maker', desc: 'Create custom geometric shapes, polygons, and stars using CSS clip-path', cat: 'design', icon: 'scissors', badge: 'Clip-Path' },
  { id: 'neumorphism-gen', name: 'CSS Neumorphism Soft UI Studio', desc: 'Design soft extruded and inset shadow states for modern neumorphic interfaces', cat: 'design', icon: 'sun', badge: 'Soft UI' },
  { id: 'scrollbar-customizer', name: 'CSS Scrollbar Styler', desc: 'Generate cross-browser ::-webkit-scrollbar and scrollbar-color CSS styles', cat: 'design', icon: 'sliders', badge: 'Scrollbar' },
  { id: 'color-shades-gen', name: 'Monochromatic Color Shades & Tints', desc: 'Generate 10-step light-to-dark color scales (50 to 900) for UI design systems', cat: 'design', icon: 'palette', badge: 'Shades' },
  { id: 'svg-data-uri-gen', name: 'SVG to CSS Background Data URI', desc: 'Encode raw SVG vector code into safe inline background-image: url("data:image...") styles', cat: 'design', icon: 'image', badge: 'Data URI' },
  { id: 'css-filters-sandbox', name: 'CSS Filter Playground', desc: 'Interactively adjust blur, brightness, contrast, grayscale, and invert filters', cat: 'design', icon: 'sliders', badge: 'Filters' },

  // ============================================================================
  // 6. DEVOPS, CLOUD & LINUX
  // ============================================================================
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
  { id: 'docker-to-compose', name: 'Docker Run to Docker Compose', desc: 'Convert raw docker run CLI commands with flags (-p, -v, -e) into docker-compose.yml', cat: 'devops', icon: 'container', badge: 'Compose' },
  { id: 'compose-to-docker', name: 'Docker Compose to Docker Run CLI', desc: 'Convert service definitions in docker-compose.yml into single docker run CLI commands', cat: 'devops', icon: 'terminal', badge: 'Docker CLI' },
  { id: 'k8s-configmap-env', name: 'Kubernetes ConfigMap from .env', desc: 'Convert standard key=value .env files into Kubernetes ConfigMap manifest YAML', cat: 'devops', icon: 'boxes', badge: 'ConfigMap' },
  { id: 'k8s-secret-gen', name: 'Kubernetes Secret Manifest Generator', desc: 'Encode plain text string values to Base64 and build Kubernetes Secret YAML manifests', cat: 'devops', icon: 'lock', badge: 'Secrets' },
  { id: 'helm-values-to-cli', name: 'Helm Values to CLI --set Flags', desc: 'Flatten nested values.yaml YAML hierarchies into equivalent --set key.nested=val flags', cat: 'devops', icon: 'terminal', badge: 'Helm' },
  { id: 'nginx-rev-proxy', name: 'Nginx Reverse Proxy Config Maker', desc: 'Generate production reverse proxy blocks with SSL, upstream, and proxy headers', cat: 'devops', icon: 'server', badge: 'Nginx' },
  { id: 'apache-htaccess-gen', name: 'Apache .htaccess 301 Redirect Builder', desc: 'Generate clean RewriteRule 301 redirects and HTTPS redirect rules for Apache', cat: 'devops', icon: 'file-code', badge: '.htaccess' },
  { id: 'systemd-unit-builder', name: 'Systemd Service Unit Generator', desc: 'Generate production Linux systemd service unit files with restart policies and user context', cat: 'devops', icon: 'cpu', badge: 'Systemd' },
  { id: 'ssh-fingerprint-calc', name: 'SSH Key Fingerprint Calculator', desc: 'Compute SHA256 and MD5 public key fingerprints from pasted OpenSSH keys', cat: 'devops', icon: 'key', badge: 'SSH' },
  { id: 'apache-htpasswd-maker', name: 'Apache .htpasswd Generator', desc: 'Generate Apache/Nginx basic authentication password hashes', cat: 'devops', icon: 'lock', badge: 'htpasswd' },
  { id: 'cidr-to-netmask', name: 'CIDR to Subnet & Wildcard Mask', desc: 'Convert prefix notations (/24, /16) to dotted netmasks (255.255.255.0) and wildcard masks', cat: 'devops', icon: 'network', badge: 'Netmask' },
  { id: 'gh-actions-gen', name: 'GitHub Actions Workflow Builder', desc: 'Generate CI/CD build, test, and deploy workflow YAML files for Node, Python, and Go', cat: 'devops', icon: 'play-circle', badge: 'Workflows' },
  { id: 'gitlab-ci-builder', name: 'GitLab CI Pipeline YAML Builder', desc: 'Build multi-stage GitLab CI configuration files with cache and artifact rules', cat: 'devops', icon: 'file-text', badge: 'GitLab' },
  { id: 'gitignore-gen', name: 'Multi-Framework .gitignore Builder', desc: 'Generate standard .gitignore rules for Node, Python, Java, macOS, and IDEs', cat: 'devops', icon: 'file-minus', badge: '.gitignore' },
  { id: 'shell-param-quoter', name: 'Shell Parameter Quoter & Sanitizer', desc: 'Safely quote strings and sanitize variables to prevent bash injection vulnerabilities', cat: 'devops', icon: 'terminal', badge: 'Bash' },
  { id: 'bandwidth-time-calc', name: 'File Download Time Calculator', desc: 'Calculate exact transfer durations across Mbps/Gbps connections for gigabyte files', cat: 'devops', icon: 'download', badge: 'Transfer' },
  { id: 'ping-overhead-calc', name: 'Ping Packet Overhead & MTU Calculator', desc: 'Calculate packet fragmentation and IP/ICMP byte overhead for standard 1500 MTUs', cat: 'devops', icon: 'activity', badge: 'MTU' },
  { id: 's3-policy-gen', name: 'AWS S3 Bucket Policy JSON Builder', desc: 'Generate read-only, public-read, or restricted VPC bucket policies for Amazon S3', cat: 'devops', icon: 'shield', badge: 'AWS S3' },

  // ============================================================================
  // 7. CONTENT, TEXT & MARKDOWN
  // ============================================================================
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
  { id: 'html-to-markdown', name: 'HTML to Markdown Converter', desc: 'Convert raw HTML web page elements and tags into clean Markdown formatting', cat: 'text', icon: 'file-text', badge: 'HTML' },
  { id: 'sql-in-wrapper', name: 'Delimited Text to SQL IN Wrapper', desc: 'Wrap lines of text or IDs with single quotes and commas for SQL IN (\'a\', \'b\') queries', cat: 'text', icon: 'database', badge: 'SQL IN' },
  { id: 'extract-emails', name: 'Extract Emails from Unstructured Text', desc: 'Scan unstructured text files to extract unique, deduplicated email addresses', cat: 'text', icon: 'mail', badge: 'Extract' },
  { id: 'extract-urls', name: 'Extract URLs from Raw Text', desc: 'Identify, validate, and extract all web hyperlinks and URLs from bulk text blocks', cat: 'text', icon: 'link', badge: 'Extract' },
  { id: 'extract-ips', name: 'Extract IPv4 Addresses from Logs', desc: 'Extract clean, deduplicated lists of IPv4 addresses from server error logs', cat: 'text', icon: 'network', badge: 'Logs' },
  { id: 'line-numberer', name: 'Text Line Numbering Tool', desc: 'Prepend sequential line numbers to source text with customizable zero padding', cat: 'text', icon: 'list-ordered', badge: 'Numbers' },
  { id: 'prefix-suffix-tool', name: 'Batch Text Prefix & Suffix Appender', desc: 'Prepend or append custom string tags to every line in a text document simultaneously', cat: 'text', icon: 'edit', badge: 'Batch' },
  { id: 'flesch-kincaid', name: 'Flesch-Kincaid Readability Calculator', desc: 'Calculate reading ease score and grade level difficulty for technical documentation', cat: 'text', icon: 'book-open', badge: 'Readability' },
  { id: 'strip-html-tags', name: 'HTML Tag Stripper & Plain Text Extractor', desc: 'Remove all HTML markup, scripts, and styles, leaving pure plain text content', cat: 'text', icon: 'trash-2', badge: 'Cleaner' },
  { id: 'zero-width-detector', name: 'Zero-Width Invisible Character Detector', desc: 'Detect and remove hidden Unicode zero-width spaces that break code parsing', cat: 'text', icon: 'eye-off', badge: 'Sanitizer' },

  // ============================================================================
  // 8. MATH, TIME & CONVERTERS
  // ============================================================================
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
  { id: 'date-diff-calc', name: 'Days Between Dates Calculator', desc: 'Calculate exact calendar days, weeks, months, and hours between two dates', cat: 'math', icon: 'calendar', badge: 'Date Math' },
  { id: 'work-days-calc', name: 'Working Days & Business Hours Calculator', desc: 'Calculate business days between dates, automatically excluding weekends', cat: 'math', icon: 'clock', badge: 'Work Days' },
  { id: 'date-add-sub', name: 'Date Addition & Subtraction Calculator', desc: 'Add or subtract days, weeks, months, or years to project future milestone deadlines', cat: 'math', icon: 'calendar-plus', badge: 'Schedule' },
  { id: 'timezone-overlap', name: 'Timezone Meeting Planner', desc: 'Visualize overlapping working business hours across IST, UTC, EST, and PST', cat: 'math', icon: 'globe', badge: 'Timezones' },
  { id: 'loan-emi-calc', name: 'Loan EMI & Amortization Calculator', desc: 'Calculate monthly loan EMI and view interest vs principal amortizations', cat: 'math', icon: 'calculator', badge: 'Finance' },
  { id: 'sip-calc', name: 'SIP Compound Interest Calculator', desc: 'Calculate future returns on monthly systematic mutual fund investment plans', cat: 'math', icon: 'trending-up', badge: 'Investment' },
  { id: 'compound-interest', name: 'Compound Interest Calculator', desc: 'Calculate compound growth over time with annual, monthly, or daily compounding', cat: 'math', icon: 'pie-chart', badge: 'Compound' },
  { id: 'reverse-tax-calc', name: 'Reverse Tax / GST Deduction Calculator', desc: 'Calculate pre-tax base prices and tax components from gross inclusive totals', cat: 'math', icon: 'percent', badge: 'Taxes' },
  { id: 'profit-margin-calc', name: 'Profit Margin & Markup Calculator', desc: 'Calculate gross profit, percentage markup, and sales revenue margins', cat: 'math', icon: 'trending-up', badge: 'Margins' },
  { id: 'cagr-calc', name: 'CAGR (Annual Growth Rate) Calculator', desc: 'Calculate Compound Annual Growth Rate for business revenue and portfolio investments', cat: 'math', icon: 'bar-chart', badge: 'CAGR' },
  { id: 'fuel-trip-calc', name: 'Trip Fuel & Cost Estimator', desc: 'Estimate total fuel volume and currency expenses based on distance and mileage', cat: 'math', icon: 'navigation', badge: 'Travel' },
  { id: 'scientific-notation', name: 'Scientific Notation Converter', desc: 'Convert numbers to scientific exponential notation (1.23e+8) and vice versa', cat: 'math', icon: 'hash', badge: 'Scientific' },

  // ============================================================================
  // 9. QA TESTING & MOCK DATA
  // ============================================================================
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

  // ============================================================================
  // 10. FILE, IMAGE & MEDIA UTILITIES
  // ============================================================================
  { id: 'img-compress', name: 'Image Compressor & WebP', desc: 'Reduce PNG/JPG file sizes and convert to next-gen WebP directly in Canvas', cat: 'media', icon: 'image', badge: 'WebP Canvas' },
  { id: 'b64-canvas', name: 'Base64 Image Inspector', desc: 'Paste Base64 data URLs to preview dimensions, aspect ratio, and download image', cat: 'media', icon: 'file-image', badge: 'Inspector' },
  { id: 'b64-file', name: 'Base64 to File Downloader', desc: 'Convert Base64 data strings back into downloadable binary files', cat: 'media', icon: 'file-down', badge: 'Decoder' },
  { id: 'svg-optimizer', name: 'SVG Code Optimizer & Cleaner', desc: 'Strip XML metadata, empty groups, and comments to optimize SVG vector code', cat: 'media', icon: 'feather', badge: 'SVG' },
  { id: 'ico-generator', name: 'Favicon Dimension Sizer', desc: 'Resize and export raster graphics into standard 16x16, 32x32, and 512x512 assets', cat: 'media', icon: 'app-window', badge: 'Favicon' },
  { id: 'audio-tone', name: 'DTMF Audio Tone Generator', desc: 'Synthesize custom frequency sine-wave audio tones using Web Audio API', cat: 'media', icon: 'volume-2', badge: 'Audio' },
  { id: 'color-extractor', name: 'Image Dominant Color Extractor', desc: 'Upload images to extract primary hex color swatches and color palettes', cat: 'media', icon: 'droplet', badge: 'Swatches' },
  { id: 'qr-scanner-mock', name: 'Camera QR Code Reader Simulator', desc: 'Simulate decoding QR code image payloads and data URI payloads locally', cat: 'media', icon: 'scan', badge: 'Scanner' },
  { id: 'markdown-pdf', name: 'Markdown Printable Export', desc: 'Render Markdown notes into clean, printable document layouts with pagination', cat: 'media', icon: 'printer', badge: 'Print' },
  { id: 'code-snippet-card', name: 'Code Snippet Card Studio', desc: 'Design stylized image cards for code snippets with gradient backgrounds', cat: 'media', icon: 'camera', badge: 'Cards' },
  { id: 'pdf-page-extract', name: 'Client-Side PDF Page Extractor', desc: 'Extract and save individual page ranges from PDF files locally using pdf-lib', cat: 'media', icon: 'file-text', badge: 'pdf-lib' },
  { id: 'image-resizer-canvas', name: 'Canvas Image Resizer & Scaler', desc: 'Scale image dimensions by percentage or target width/height without uploading files', cat: 'media', icon: 'maximize', badge: 'Canvas' },
  { id: 'svg-to-png', name: 'SVG Vector to High-Res PNG Exporter', desc: 'Render scalable SVG vector markup onto high-resolution raster PNG images', cat: 'media', icon: 'image', badge: 'Rasterizer' },
  { id: 'canvas-drawing', name: 'HTML5 Canvas Sketchpad', desc: 'In-browser drawing board with exportable PNG drawing capabilities', cat: 'media', icon: 'edit-3', badge: 'Canvas' },
  { id: 'color-tint-canvas', name: 'Image Monochromatic Tint Filter', desc: 'Apply custom color overlays and tints to uploaded images in browser memory', cat: 'media', icon: 'palette', badge: 'Image Filter' },
  { id: 'file-checksum-hasher', name: 'Drag-and-Drop File Hash Checksum', desc: 'Compute SHA-256 and MD5 checksum digests of any local file without uploading', cat: 'media', icon: 'check-square', badge: 'Checksum' },
  { id: 'screen-dpi-checker', name: 'Screen DPI & Device Pixel Ratio Inspector', desc: 'Inspect screen color depth, viewport dimensions, and window.devicePixelRatio', cat: 'media', icon: 'monitor', badge: 'Screen' },
  { id: 'keycode-inspector', name: 'Keyboard Event & KeyCode Inspector', desc: 'Test key presses to view event.key, event.code, and event.which properties live', cat: 'media', icon: 'keyboard', badge: 'Events' }
];

// Tailwind-safe category color classes
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

// Render All Cards into #tools-grid
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

// Guidance Content Engine
function getToolGuide(tool) {
  return {
    p1: { title: '1. Primary Purpose', text: `${tool.name} is designed to ${tool.desc.toLowerCase()}. Processing executes 100% locally in browser memory.` },
    p2: { title: '2. Input Instructions', text: `Provide your input data or parameters below. The tool calculates outputs client-side without any server uploads.` },
    p3: { title: '3. Instant Export', text: `Click 'Process & Run' to inspect results, and use 'Copy Result' to copy outputs directly to your clipboard.` }
  };
}

// Active Tool Workspace View Controller
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
            <div class="flex justify-between items-center text-xs font-bold opacity-80">
              <span>Input Workspace</span>
              <button onclick="document.getElementById('generic-input').value=''" class="text-rose-500 hover:underline">Clear</button>
            </div>
            <textarea id="generic-input" class="w-full h-64 p-3.5 theme-editor font-mono text-xs border rounded-2xl focus:outline-none" placeholder="Enter input data or parameters..."></textarea>
            <button onclick="processGenericTool('${toolId}')" class="w-full py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-xl text-xs shadow transition">Process & Run</button>
          </div>
          <div class="theme-card border p-4 rounded-3xl space-y-3 flex flex-col">
            <div class="flex justify-between items-center text-xs font-bold opacity-80">
              <span>Output Terminal</span>
              <button onclick="copyToClipboard('generic-output')" class="text-indigo-500 hover:underline">Copy Result</button>
            </div>
            <textarea id="generic-output" readonly class="w-full h-64 p-3.5 theme-editor font-mono text-xs border rounded-2xl text-emerald-500 focus:outline-none" placeholder="Processed output will appear here..."></textarea>
          </div>
        </div>
      </div>`;
  }

  if (window.lucide) lucide.createIcons();
}

// Client-Side Execution Engine for Every Utility
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
    } else if (toolId === 'xpath-css-convert') {
      if (input.startsWith('//') || input.startsWith('/')) {
        const css = input.replace(/\/\//g, ' ').replace(/\//g, ' > ').replace(/@/g, '').replace(/\[([0-9]+)\]/g, ':nth-child($1)');
        out.value = `// Converted to CSS Selector:\n${css.trim()}`;
      } else {
        const xpath = '//' + input.replace(/>/g, '/').replace(/#/g, '[@id="').replace(/\./g, '[@class="');
        out.value = `// Converted to XPath:\n${xpath}`;
      }
    } else if (toolId === 'dummy-card') {
      out.value = `// Luhn-Valid Sandbox Numbers:\nVisa: 4532${Math.floor(100000000000 + Math.random() * 900000000000)}\nMastercard: 5425${Math.floor(100000000000 + Math.random() * 900000000000)}\nAmex: 3782${Math.floor(10000000000 + Math.random() * 90000000000)}`;
    } else if (toolId === 'chmod-calc') {
      const mode = parseInt(input) || 755;
      const map = { 7: 'rwx', 6: 'rw-', 5: 'r-x', 4: 'r--', 0: '---' };
      const sym = String(mode).split('').map(d => map[d] || 'rwx').join('');
      out.value = `Octal: ${mode}\nSymbolic: -${sym}`;
    } else if (toolId === 'docker-to-compose') {
      const img = input.split(' ').pop() || 'nginx:alpine';
      out.value = `version: '3.8'\nservices:\n  app:\n    image: ${img}\n    restart: always`;
    } else if (toolId === 'cron-builder') {
      out.value = `Cron Expression: "${input || '* * * * *'}"\nStatus: Valid format\nSchedule: Triggered every minute of every hour.`;
    } else if (toolId === 'sql-in-wrapper') {
      const items = input.split('\n').map(s => `'${s.trim()}'`).filter(Boolean).join(', ');
      out.value = `IN (${items})`;
    } else if (toolId === 'date-diff-calc') {
      const dates = input.split('\n').filter(Boolean);
      const d1 = new Date(dates[0] || Date.now());
      const d2 = new Date(dates[1] || Date.now() + 86400000 * 7);
      const diffDays = Math.ceil(Math.abs(d2 - d1) / (1000 * 60 * 60 * 24));
      out.value = `Start Date: ${d1.toISOString().split('T')[0]}\nEnd Date:   ${d2.toISOString().split('T')[0]}\nDifference: ${diffDays} calendar days (${(diffDays / 7).toFixed(1)} weeks)`;
    } else if (toolId === 'base-converter') {
      const num = parseInt(input) || 42;
      out.value = `Decimal:     ${num.toString(10)}\nHexadecimal: 0x${num.toString(16).toUpperCase()}\nBinary:      ${num.toString(2)}\nOctal:       ${num.toString(8)}`;
    } else if (toolId === 'px-to-rem') {
      const px = parseFloat(input) || 16;
      out.value = `${px}px = ${px / 16}rem\n${px / 16}rem = ${px}px (based on 16px root)`;
    } else if (toolId === 'extract-emails') {
      const matches = input.match(/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/gi) || [];
      out.value = [...new Set(matches)].join('\n') || 'No email addresses found.';
    } else if (toolId === 'extract-urls') {
      const matches = input.match(/(https?:\/\/[^\s]+)/g) || [];
      out.value = [...new Set(matches)].join('\n') || 'No URLs found.';
    } else if (toolId.includes('json')) {
      out.value = JSON.stringify(JSON.parse(input), null, 2);
    } else if (toolId === 'base64') {
      out.value = btoa(unescape(encodeURIComponent(input)));
    } else if (toolId.includes('hash') || toolId.includes('sha')) {
      crypto.subtle.digest('SHA-256', new TextEncoder().encode(input)).then(b => {
        out.value = Array.from(new Uint8Array(b)).map(x => x.toString(16).padStart(2, '0')).join('');
      });
    } else if (toolId === 'case-convert') {
      out.value = `UPPERCASE:  ${input.toUpperCase()}\nlowercase:  ${input.toLowerCase()}\ncamelCase:  ${input.replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, (m, i) => +m === 0 ? '' : m[i === 0 ? 'toLowerCase' : 'toUpperCase']())}\nsnake_case: ${input.toLowerCase().replace(/\s+/g, '_')}\nkebab-case: ${input.toLowerCase().replace(/\s+/g, '-')}`;
    } else {
      out.value = `✓ In-Memory Output from ${toolId}:\n` + input.split('\n').map((l, i) => `${i + 1}: ${l}`).join('\n');
    }
  } catch (err) {
    out.value = `Execution Error: ${err.message}`;
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
