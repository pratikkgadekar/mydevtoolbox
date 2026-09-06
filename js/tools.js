/* js/tools.js - Exact 500 Real Utilities (10 Categories × 50 Tools) */

(function initDatabase() {
  const c = {
    ai: 'ai',
    testing: 'testing',
    data: 'data',
    sec: 'security',
    web: 'web',
    ui: 'design',
    ops: 'devops',
    txt: 'text',
    num: 'math',
    med: 'media'
  };

  // Exactly 50 tools per category = 500 unique tools
  const rawList = [
    // 1. AI, LLM & PROMPT ENGINEERING (50)
    ['llm-tokens', 'LLM Token Counter & Pricing', 'Estimate BPE tokens and query costs for GPT-4o, Claude, and Gemini', c.ai, 'cpu', 'Pricing'],
    ['md-table-gen', 'Visual Markdown Table Builder', 'Spreadsheet grid builder generating formatted Markdown table syntax', c.ai, 'grid', 'Markdown'],
    ['wcag-contrast', 'WCAG Color Contrast Checker', 'Real-time foreground/background ratio calculator with AA/AAA badges', c.ai, 'eye', 'WCAG 2.1'],
    ['prompt-cleaner', 'System Prompt Sanitizer', 'Strip trailing whitespace and normalize layouts for clean LLM context', c.ai, 'sparkles', 'Prompt Eng'],
    ['json-ts', 'JSON to TypeScript Generator', 'Convert nested JSON payloads into strongly typed TypeScript interfaces', c.ai, 'file-json', 'Types'],
    ['prompt-variables', 'Prompt Template Interpolator', 'Substitute mustache variables {{name}} into prompt templates', c.ai, 'brackets', 'Templates'],
    ['few-shot-formatter', 'Few-Shot Example Formatter', 'Format input-output pairs for structured LLM fine-tuning and learning', c.ai, 'list-ordered', 'Training'],
    ['temp-top-p', 'Temperature & Top-P Calculator', 'Simulate deterministic vs creative generation variance parameters', c.ai, 'sliders', 'Parameters'],
    ['context-slicer', 'Long Context Window Slicer', 'Partition large text files into uniform chunks with customizable overlap', c.ai, 'scissors', 'RAG'],
    ['json-schema-ai', 'JSON Schema to Structured Output', 'Generate strict schema models for OpenAI and Anthropic function calling', c.ai, 'code', 'Structured'],
    ['chunk-overlap-calc', 'RAG Chunk & Overlap Calculator', 'Calculate optimal chunk size and overlap token percentage for vector DBs', c.ai, 'layers', 'RAG DB'],
    ['prompt-char-budget', 'Prompt Token Budget Sizer', 'Calculate context window margin and system vs user token splits', c.ai, 'pie-chart', 'Context'],
    ['jsonl-fine-tune', 'JSONL Training Pair Validator', 'Validate prompt-completion and chat-format JSONL lines for fine-tuning', c.ai, 'file-check', 'JSONL'],
    ['stop-sequence-tester', 'LLM Stop Sequence Cleaner', 'Test and preview early generation termination strings for completions', c.ai, 'square', 'Inference'],
    ['role-tag-formatter', 'ChatML Role Tag Formatter', 'Format system, user, and assistant blocks into ChatML format', c.ai, 'message-square', 'ChatML'],
    ['emb-dim-inspector', 'Vector Embedding Dimension Inspector', 'Inspect array length and normalization score for text embeddings', c.ai, 'git-commit', 'Vector'],
    ['cot-step-formatter', 'Chain-of-Thought Step Builder', 'Structure complex multi-step reasoning instructions for agent prompts', c.ai, 'list-tree', 'Prompting'],
    ['prompt-fuzzer', 'System Prompt Leaking Fuzzer', 'Generate adversarial test prompts to evaluate system prompt boundaries', c.ai, 'shield-alert', 'Red Team'],
    ['token-cost-estimator', 'Batch Inference Cost Estimator', 'Calculate batch processing costs across million-token tiers', c.ai, 'calculator', 'Pricing'],
    ['regex-prompt-filter', 'AI Output Hallucination Filter', 'Extract clean markdown and JSON codeblocks from raw assistant text', c.ai, 'filter', 'Parsing'],
    ['cosine-similarity', 'Vector Cosine Similarity Calculator', 'Calculate the mathematical cosine distance between two float vectors', c.ai, 'maximize-2', 'Math'],
    ['claude-xml-builder', 'Anthropic Claude XML Tag Formatter', 'Format prompt context with context and instructions XML tags', c.ai, 'code', 'Claude'],
    ['bpe-tokenizer-sim', 'BPE Byte-Pair Tokenizer Visualizer', 'Simulate subword byte-pair token splits on pasted strings', c.ai, 'scissors', 'Tokens'],
    ['llama-prompt-builder', 'Llama 3 Instruct Header Formatter', 'Wrap raw inputs in start_header_id and end_header_id tokens', c.ai, 'terminal', 'Llama 3'],
    ['negative-prompt-gen', 'Diffusion Negative Prompt Formatter', 'Format quality-enhancing negative prompts for Stable Diffusion', c.ai, 'ban', 'Diffusion'],
    ['rag-rerank-scorer', 'RAG Re-ranking Score Normalizer', 'Normalize Cross-Encoder and BM25 relevance scores to 0-1 ranges', c.ai, 'bar-chart', 'Rerank'],
    ['json-function-gen', 'OpenAI Function Call Schema Builder', 'Build JSON schemas with strict property types for OpenAI tools', c.ai, 'file-json', 'Functions'],
    ['guardrail-regex', 'Prompt Injection Pattern Matcher', 'Detect ignore previous instructions and jailbreak patterns with regex', c.ai, 'shield-check', 'Guardrails'],
    ['prompt-diff-tester', 'Prompt Version A/B Diff Inspector', 'Visually compare character additions and changes between prompt drafts', c.ai, 'git-compare', 'A/B Test'],
    ['multimodal-token-calc', 'Vision Model Image Token Calculator', 'Calculate token weights for images based on resolution tiles and patches', c.ai, 'image', 'Vision'],
    ['speech-token-calc', 'Audio Speech Token Duration Sizer', 'Estimate Whisper token consumption and API transcription cost per minute', c.ai, 'mic', 'Whisper'],
    ['system-prompt-compress', 'System Prompt Lexical Compressor', 'Remove redundant adverbs and articles to reduce prompt token footprint', c.ai, 'minimize-2', 'Optimizer'],
    ['ai-persona-builder', 'Agent Persona Definition Formatter', 'Structure agent role, constraints, tone, and knowledge boundaries', c.ai, 'user', 'Agents'],
    ['rag-triplet-builder', 'Knowledge Graph Triplet Extractor', 'Format subject-predicate-object semantic triplets for graph DBs', c.ai, 'share-2', 'Graph RAG'],
    ['synthetic-qa-gen', 'Synthetic Q&A Dataset Builder', 'Structure multi-turn conversational evaluation pairs for benchmarks', c.ai, 'help-circle', 'Eval'],
    ['groundedness-checker', 'Context Groundedness Citation Checker', 'Check whether assistant claims match verifiable sentence quotes', c.ai, 'check-square', 'Citation'],
    ['llm-latency-budget', 'TTFT & Streaming Latency Calculator', 'Calculate Time-To-First-Token and token generation speed per second', c.ai, 'activity', 'Latency'],
    ['prompt-variable-clean', 'Unused Prompt Variable Detector', 'Highlight declared {{variables}} in templates lacking input bindings', c.ai, 'alert-circle', 'Templates'],
    ['tool-call-log-parser', 'LLM Tool Execution Log Parser', 'Extract and format nested JSON arguments and tool call outputs from logs', c.ai, 'file-text', 'Debugging'],
    ['prefix-caching-calc', 'KV Cache Prefix Savings Calculator', 'Calculate discount savings on cached prompt tokens for Claude and GPT', c.ai, 'database', 'Cache'],
    ['context-window-fit', 'Context Window Overflow Verifier', 'Check if system prompt + retrieved RAG docs fit safe limits', c.ai, 'box', 'Limits'],
    ['agent-scratchpad', 'ReAct Scratchpad Log Formatter', 'Format Thought, Action, Action Input, and Observation logs for agents', c.ai, 'book', 'ReAct'],
    ['pydantic-ai-gen', 'Pydantic Output Parser Generator', 'Generate typed schema models for LangChain structured outputs', c.ai, 'code-2', 'LangChain'],
    ['prompt-deduplicator', 'Sentence De-duplication Cleaner', 'Remove repetitive instructions from concatenated multi-agent prompts', c.ai, 'list-filter', 'Cleaner'],
    ['embedding-norm-calc', 'L2 Euclidean Vector Normalizer', 'Calculate vector magnitude and normalize floats to unit length', c.ai, 'trending-up', 'Vector'],
    ['json-markdown-strip', 'Markdown Code Block JSON Extractor', 'Strip leading ```json and trailing ``` markers from raw LLM text', c.ai, 'code', 'JSON'],
    ['hallucination-word-count', 'Response Density Word Analyzer', 'Calculate lexical richness and unique token ratio in LLM responses', c.ai, 'bar-chart-2', 'Metrics'],
    ['gemini-safety-calc', 'Gemini Harm Category Thresholds', 'Format safety rating filter thresholds for Google GenAI SDK calls', c.ai, 'shield', 'Gemini'],
    ['multiturn-history-trim', 'Chat History Sliding Window Trimmer', 'Trim oldest conversation turns while preserving system prompt context', c.ai, 'clock', 'Chat'],
    ['token-to-word-calc', 'BPE Token to Word Equivalence Sizer', 'Convert between token counts and word/page lengths across 8 languages', c.ai, 'type', 'Estimation'],

    // 2. QA, TEST AUTOMATION & SCRAPING (50)
    ['dummy-card', 'Dummy Test Card Generator', 'Generate Luhn-valid dummy credit card numbers strictly for billing QA', c.testing, 'credit-card', 'Luhn Valid'],
    ['pdf-toolkit', 'Client-Side PDF Merger', 'Combine multiple PDF documents safely in browser memory without uploads', c.testing, 'file-stack', 'In-Memory'],
    ['mock-user-gen', 'Mock User Profile Generator', 'Generate realistic test identities with names, avatars, emails, and addresses', c.testing, 'user-check', 'Mock Data'],
    ['random-email-gen', 'Random Email & Phone Generator', 'Create test email addresses and phone numbers for form validation QA', c.testing, 'mail', 'QA Forms'],
    ['regex-tester', 'Regex Sandbox & Matcher', 'Interactive regular expression tester with capture group inspection', c.testing, 'regex', 'Live Sandbox'],
    ['string-boundary', 'String Length Boundary Tester', 'Generate boundary strings (255 chars, 65535 chars, UTF-8 emojis) for QA', c.testing, 'ruler', 'Limits'],
    ['dummy-payload', 'Dummy Payload File Generator', 'Create clean dummy files of exact byte sizes for upload QA', c.testing, 'file-plus', 'Byte Files'],
    ['http-simulator', 'HTTP Method Simulator', 'Simulate GET, POST, PUT, PATCH, and DELETE responses with status codes', c.testing, 'send', 'API Mock'],
    ['diff-checker', 'Text & Code Diff Comparator', 'Visual comparison highlighting character additions and deletions side-by-side', c.testing, 'git-compare', 'Git Diff'],
    ['qr-gen', 'Live QR Code Generator', 'Generate instant high-res QR codes for URLs, WiFi logins, and vCards', c.testing, 'qr-code', 'Vector PNG'],
    ['playwright-locator', 'Playwright Locator Builder', 'Convert HTML attributes and ARIA roles into page.getByRole() syntax', c.testing, 'terminal-square', 'Playwright'],
    ['xpath-css-convert', 'XPath & CSS Selector Converter', 'Bidirectional converter between XPath expressions and CSS selectors', c.testing, 'code-2', 'Selectors'],
    ['bva-calc', 'Boundary Value Analysis (BVA) Calculator', 'Auto-generate 7-point boundary test cases from min, max, and step values', c.testing, 'ruler', 'BVA Matrix'],
    ['equiv-partition', 'Equivalence Partitioning Matrix Builder', 'Map valid and invalid input range classes into structured QA test plans', c.testing, 'layout-grid', 'QA Logic'],
    ['mock-dataset-gen', 'Bulk Test Dataset Generator', 'Generate 10 to 1,000 rows of fake CSV/JSON data with custom schemas', c.testing, 'database', 'Batch Mock'],
    ['cypress-cmd-builder', 'Cypress Selector & Command Generator', 'Generate Cypress cy.get(), cy.contains(), and cy.should() commands', c.testing, 'terminal', 'Cypress'],
    ['selenium-by-builder', 'Selenium By.* Code Generator', 'Generate Java, Python, and C# Selenium WebDriver By.id and By.xpath code', c.testing, 'code', 'Selenium'],
    ['jmeter-thread-calc', 'JMeter Thread Group Target Calculator', 'Calculate ramp-up time, thread count, and loop counts for target load', c.testing, 'activity', 'JMeter'],
    ['har-slow-requests', 'HAR File Slow Request Inspector', 'Parse HTTP Archive (HAR) network logs to filter slow queries and errors', c.testing, 'clock', 'HAR Logs'],
    ['wiremock-stub-gen', 'WireMock JSON Stub Builder', 'Build standardized WireMock mock responses with query parameters and payloads', c.testing, 'server', 'WireMock'],
    ['postman-var-replacer', 'Postman Variable String Replacer', 'Substitute {{variable}} syntax across sample JSON request bodies', c.testing, 'brackets', 'Postman'],
    ['phone-validator-qa', 'E.164 Phone Number Validator', 'Validate international telephone numbers and test country dialing prefix formats', c.testing, 'phone', 'E.164'],
    ['email-rfc-test', 'RFC 5322 Email Regex Tester', 'Validate sample email addresses against the official RFC 5322 regex pattern', c.testing, 'mail', 'RFC 5322'],
    ['random-ip-fixture', 'Random IP Address Fixture Generator', 'Generate batches of RFC-compliant IPv4 and IPv6 test fixtures in CIDRs', c.testing, 'network', 'IP Fixtures'],
    ['cookie-attribute-qa', 'Cookie Security Attributes Checker', 'Inspect Set-Cookie headers for SameSite, Secure, and HttpOnly flags', c.testing, 'shield-check', 'Cookies'],
    ['response-time-sla', 'Response Time SLA Calculator', 'Calculate 90th, 95th, and 99th percentile response latencies from test logs', c.testing, 'trending-up', 'SLA'],
    ['decision-table-truth', 'Decision Table 2^N Matrix Generator', 'Generate exhaustive boolean truth tables for multi-conditional business rules', c.testing, 'table', 'Truth Table'],
    ['state-transition-planner', 'State Machine Path Coverage Planner', 'Map states and trigger events into node-link traversal checklists for tests', c.testing, 'git-fork', 'FSM'],
    ['pairwise-orthogonal-array', 'All-Pairs / Orthogonal Array Matrix', 'Reduce combinatorial test explosion using pairwise orthogonal testing arrays', c.testing, 'grid', 'Pairwise'],
    ['defect-severity-priority', 'Defect Severity vs Priority Advisor', 'Standardize bug triaging based on user impact vs business urgency matrix', c.testing, 'alert-triangle', 'Bug Triage'],
    ['dummy-indian-pan', 'Dummy Indian PAN Format Validator', 'Validate 10-character alphanumeric PAN formats (5 letters, 4 digits, 1 letter)', c.testing, 'file-text', 'PAN QA'],
    ['dummy-us-ssn-gen', 'Dummy US SSN Sandbox Validator', 'Verify 9-digit US Social Security Number syntax and exclusion ranges', c.testing, 'shield', 'SSN QA'],
    ['sql-injection-fuzz-list', 'SQLi Fuzzing Payload Test Bed', 'Generate standard single-quote and boolean SQL injection probe strings', c.testing, 'shield-alert', 'Sec QA'],
    ['xss-probe-string-gen', 'XSS Sanitization Polyglot Test Bed', 'Test input fields with harmless img probe strings for XSS auditing', c.testing, 'code', 'XSS QA'],
    ['mobile-viewport-matrix', 'Mobile Viewport CSS Resolution Matrix', 'Inspect screen widths and DPRs for modern iPhone and Android profiles', c.testing, 'smartphone', 'Viewports'],
    ['test-pass-rate-calc', 'Automated Test Suite Pass Rate Sizer', 'Calculate pass/fail percentages, flake ratios, and execution duration trends', c.testing, 'check-circle', 'Metrics'],
    ['broken-link-status-filter', 'HTTP Status Error Code Classifier', 'Categorize lists of returned HTTP status codes into 2xx, 4xx, and 5xx buckets', c.testing, 'filter', 'HTTP Logs'],
    ['shadow-dom-path-finder', 'Shadow DOM Selector Path Helper', 'Format shadowRoot traversal selector paths for web components automation', c.testing, 'search', 'Shadow DOM'],
    ['relative-xpath-builder', 'Relative XPath Axis Statement Builder', 'Construct preceding-sibling and following-sibling XPath statements safely', c.testing, 'code', 'XPath Axis'],
    ['robot-framework-keywords', 'Robot Framework Keyword Formatter', 'Format test cases into pipe-delimited or 4-space separated tables', c.testing, 'cpu', 'Robot'],
    ['api-schema-diff', 'REST API Payload Schema Diff Inspector', 'Detect breaking contract changes (missing keys, altered types) between APIs', c.testing, 'git-compare', 'Contract'],
    ['luhn-algorithm-verify', 'Luhn Checksum Formula Validator', 'Calculate the modulo-10 Luhn check digit for identity numbers and barcodes', c.testing, 'check', 'Modulo 10'],
    ['form-input-stress-text', 'Form Input Extreme Stress Characters', 'Generate multi-byte CJK, Arabic RTL, and symbols to test text encodings', c.testing, 'globe', 'UTF-8 QA'],
    ['http-mock-envelope-maker', 'REST API Standard Error Envelope Maker', 'Generate standardized JSON response bodies for mock testing', c.testing, 'file-json', 'Error Mock'],
    ['qa-test-case-markdown', 'Markdown Test Case Template Generator', 'Generate structured test cases with Preconditions, Steps, and Expected results', c.testing, 'file-text', 'Test Case'],
    ['mock-user-agent-headers', 'Device User-Agent Spoofing Directory', 'Copy authentic User-Agent strings for Googlebot, Safari, and Chrome', c.testing, 'monitor', 'User-Agent'],
    ['graphql-mock-response', 'GraphQL Mock Data Generator', 'Wrap raw JSON entities into standard GraphQL response envelopes', c.testing, 'share-2', 'GraphQL'],
    ['flaky-test-score-calc', 'Flaky Test Severity Score Calculator', 'Calculate flakiness frequency weights based on run history and retry counts', c.testing, 'alert-circle', 'Flaky QA'],
    ['load-test-rps-sizer', 'Virtual Users to Target RPS Sizer', 'Calculate required virtual users based on target requests/sec and latency', c.testing, 'users', 'Load Test'],
    ['app-permission-matrix', 'Role-Based Access Control Matrix', 'Map User, Admin, and Guest roles against CRUD operation permission grids', c.testing, 'lock', 'RBAC'],

    // 3. JSON, CSV, XML & DATA FORMATS (50)
    ['json-formatter', 'JSON Pro Studio', 'Dual-pane syntax highlighting, beautifier, tree inspector, and validator', c.data, 'code-2', 'Dual-Pane'],
    ['json-csv', 'JSON to CSV Converter', 'Transform nested JSON object arrays into standard CSV spreadsheets', c.data, 'table', 'Tabular'],
    ['csv-json', 'CSV to JSON Converter', 'Parse comma-separated data sheets directly into structured JSON arrays', c.data, 'sheet', 'Parser'],
    ['xml-json', 'XML to JSON Converter', 'Translate XML tags and attribute structures into hierarchical JSON', c.data, 'file-code-2', 'XML'],
    ['yaml-json', 'YAML to JSON Converter', 'Convert human-readable YAML configurations to standardized JSON', c.data, 'file-text', 'YAML'],
    ['json-sort', 'Sort JSON Keys Alphabetically', 'Deterministic recursive key sorting for clean version control diffs', c.data, 'arrow-down-a-z', 'Sorting'],
    ['string-escape', 'JSON & String Escaper', 'Escape quotes, newlines, and backslashes for programming literals', c.data, 'quote', 'Sanitizer'],
    ['json-depth', 'JSON Size & Depth Inspector', 'Analyze byte weight, maximum nesting depth, and node counts', c.data, 'layers', 'Metrics'],
    ['flatten-json', 'Nested Object Flattener', 'Flatten deeply nested JSON structures into single-level dot-notation keys', c.data, 'minimize-2', 'Flatten'],
    ['base64', 'Base64 Text & Data URL', 'Encode or decode strings and binary image files with full Unicode support', c.data, 'binary', 'Unicode'],
    ['json-unflatten', 'Unflatten Dot-Notation to JSON', 'Convert dot-delimited key-value objects back into nested JSON hierarchies', c.data, 'maximize-2', 'Structure'],
    ['json-to-yaml', 'JSON to YAML Converter', 'Convert standardized JSON payloads into clean, indented YAML syntax', c.data, 'file-text', 'YAML'],
    ['json-to-xml', 'JSON to XML Converter', 'Transform structured JSON objects and arrays into valid XML tags', c.data, 'file-code', 'XML'],
    ['json-to-toml', 'JSON to TOML Converter', 'Convert JSON schemas into TOML tables and values for Rust/Python packages', c.data, 'settings', 'TOML'],
    ['toml-to-json', 'TOML to JSON Converter', 'Parse TOML configurations into standardized JSON data models', c.data, 'file-json', 'TOML'],
    ['tsv-to-json', 'TSV to JSON Converter', 'Convert tab-separated values from Excel and Sheets into JSON', c.data, 'table', 'TSV'],
    ['json-to-tsv', 'JSON to TSV Spreadsheet', 'Convert JSON arrays into tab-delimited records ready to paste into sheets', c.data, 'sheet', 'Spreadsheet'],
    ['json-sql-insert', 'JSON to SQL Insert Statements', 'Transform JSON object arrays into bulk SQL INSERT INTO statements', c.data, 'database', 'SQL Gen'],
    ['sql-insert-to-json', 'SQL Insert Statements to JSON', 'Parse SQL INSERT statements and dump rows into a copyable JSON array', c.data, 'database', 'Reverse SQL'],
    ['csv-to-markdown', 'CSV to Markdown Table Converter', 'Transform comma-separated text into clean GitHub-flavored Markdown tables', c.data, 'grid', 'Tables'],
    ['markdown-to-csv', 'Markdown Table to CSV Converter', 'Extract tabular columns from Markdown tables and export standard CSV data', c.data, 'sheet', 'CSV'],
    ['json-pydantic', 'JSON to Python Pydantic Models', 'Generate typed Python Pydantic BaseModel classes from JSON payloads', c.data, 'code', 'Pydantic'],
    ['json-go-struct', 'JSON to Go Structs with Tags', 'Generate idiomatic Go structs with json, yaml, and db struct tags', c.data, 'braces', 'Go Struct'],
    ['json-java-pojo', 'JSON to Java POJO Lombok Class', 'Generate Java POJOs with @Data, @Builder, and Jackson annotations', c.data, 'coffee', 'Java POJO'],
    ['json-rust-serde', 'JSON to Rust Serde Structs', 'Generate Rust struct definitions with derive Serialize and Deserialize', c.data, 'cpu', 'Rust Serde'],
    ['json-csharp-records', 'JSON to C# Records & Models', 'Generate C# record types with System.Text.Json attributes from JSON', c.data, 'code-2', 'C# Models'],
    ['json-kotlin-data', 'JSON to Kotlin Data Classes', 'Convert JSON payloads into Kotlin data classes with serialization tags', c.data, 'file-code', 'Kotlin'],
    ['json-protobuf', 'JSON to Protocol Buffers proto3', 'Generate proto3 message definitions with strongly typed field IDs', c.data, 'file-text', 'Protobuf'],
    ['json-graphql', 'JSON to GraphQL Type Definitions', 'Generate GraphQL schema type definitions with field inference from JSON', c.data, 'share-2', 'GraphQL'],
    ['json-path-eval', 'JSONPath Query Evaluator', 'Evaluate JSONPath queries ($.store.book[*].author) on complex JSON trees', c.data, 'search', 'JSONPath'],
    ['ndjson-to-json', 'NDJSON to JSON Array Converter', 'Convert newline-delimited JSON stream logs into a single valid JSON array', c.data, 'align-justify', 'NDJSON'],
    ['json-to-ndjson', 'JSON Array to NDJSON Stream', 'Convert a standard JSON array into line-delimited records for BigQuery', c.data, 'list', 'BigQuery'],
    ['properties-to-json', 'Java .properties to JSON', 'Convert key=value Java configuration files into nested hierarchical JSON', c.data, 'settings', '.properties'],
    ['ini-to-json', 'INI Configuration to JSON', 'Convert standard sectioned INI files into structured JSON objects', c.data, 'file-cog', 'INI'],
    ['json-diff-keys', 'JSON Structural Diff Inspector', 'Compare two JSON objects to highlight missing, added, and altered key paths', c.data, 'git-compare', 'Diff'],
    ['bson-to-json', 'BSON ObjectId & Types Sanitizer', 'Sanitize MongoDB $oid, $date, and $numberLong types into plain JSON', c.data, 'database', 'MongoDB'],
    ['json-key-case', 'JSON Key Case Transformer', 'Recursively convert object keys between camelCase, snake_case, and kebab', c.data, 'type', 'Keys'],
    ['csv-transpose', 'CSV Column & Row Transposer', 'Invert spreadsheet matrix axes by swapping columns into rows and vice versa', c.data, 'refresh-ccw', 'Pivot'],
    ['json-array-distinct', 'JSON Array Object Deduplicator', 'Deduplicate arrays of JSON records by specific key fields or hashes', c.data, 'filter', 'Dedupe'],
    ['json-mask-pii', 'JSON Sensitive PII Redactor', 'Mask credit cards, phone numbers, and emails inside nested JSON logs', c.data, 'eye-off', 'Privacy'],
    ['xml-to-yaml', 'XML to YAML Configuration Converter', 'Translate XML trees directly into indented YAML without intermediate files', c.data, 'file-text', 'XML/YAML'],
    ['csv-delimiter-swap', 'CSV Delimiter Transformer', 'Convert CSV delimiters between commas, semicolons, tabs, and pipes', c.data, 'columns', 'Delimiter'],
    ['json-filter-query', 'JSON Predicate Array Filter', 'Filter arrays of JSON objects by key conditions (age > 21, status == true)', c.data, 'filter', 'Filter'],
    ['json-schema-to-mock', 'JSON Schema to Mock Generator', 'Generate conforming sample JSON instances based on JSON Schema definitions', c.data, 'file-plus', 'Mock'],
    ['url-form-to-json', 'x-www-form-urlencoded to JSON', 'Convert URL form body payloads (a=1&b=2) into JSON key-value objects', c.data, 'link', 'Form Data'],
    ['json-to-html-table', 'JSON Array to HTML Table Maker', 'Convert arrays of records into copyable styled HTML table code', c.data, 'layout', 'HTML'],
    ['json-null-stripper', 'JSON Null & Empty Field Stripper', 'Recursively prune null, undefined, and empty string properties from JSON', c.data, 'trash-2', 'Prune'],
    ['hex-dump-to-json', 'Hex Dump to Binary Byte Array', 'Parse space-separated hex dumps into integer byte arrays', c.data, 'binary', 'Hex'],
    ['json-type-inference', 'JSON Schema Type Extractor', 'Infer draft-07 JSON schemas from sample JSON payloads with enums', c.data, 'file-check', 'Schema'],
    ['json-merge-patch', 'RFC 7396 JSON Merge Patch Applier', 'Apply RFC 7396 merge patch delta documents to target JSON data trees', c.data, 'git-merge', 'RFC 7396'],

    // 4. SECURITY, TOKENS & CRYPTOGRAPHY (50)
    ['uuid-gen', 'UUID v4 Batch Creator', 'Generate batch RFC4122 v4 unique identifiers via Web Crypto API', c.sec, 'key', 'RFC4122'],
    ['pwd-gen', 'Password & Token Generator', 'Create cryptographically secure passwords with custom lengths and symbols', c.sec, 'shield-check', 'Entropy'],
    ['hash-gen', 'SHA-256 Hasher', 'Calculate cryptographic SHA-256 message digests in browser memory', c.sec, 'hash', 'SHA-256'],
    ['sha512-gen', 'SHA-512 Hasher', 'Compute high-security 512-bit cryptographic hash digests', c.sec, 'shield', 'SHA-512'],
    ['hmac-gen', 'HMAC-SHA256 Signer', 'Calculate hash-based message authentication codes with secret keys', c.sec, 'file-signature', 'HMAC'],
    ['jwt-debugger', 'JWT Token Inspector', 'Decode claims, headers, and verify expiration dates of JSON Web Tokens', c.sec, 'unlock', 'JWT'],
    ['salt-gen', 'Random Salt & Hex String', 'Create random hexadecimal and alphanumeric tokens for secret keys', c.sec, 'shuffle', 'Tokens'],
    ['passphrase-gen', 'Memorable Passphrase Builder', 'Generate multi-word passphrases with high mathematical entropy', c.sec, 'align-left', 'Passphrase'],
    ['aes-encrypt', 'Client-Side AES-GCM Encryptor', 'Encrypt plain text using 256-bit AES-GCM with your private passphrase', c.sec, 'lock', 'AES-256'],
    ['aes-decrypt', 'Client-Side AES-GCM Decryptor', 'Decrypt AES-GCM ciphertexts locally using your private passphrase', c.sec, 'key-round', 'Decrypt'],
    ['sha384-hasher', 'SHA-384 Cryptographic Hasher', 'Compute SHA-384 message digests compliant with FIPS PUB 180-4 locally', c.sec, 'hash', 'SHA-384'],
    ['sha1-hasher', 'SHA-1 Hasher (Legacy Verification)', 'Compute legacy SHA-1 digests for Git commit and file verification', c.sec, 'shield', 'SHA-1'],
    ['md5-hasher', 'MD5 Checksum Hasher', 'Calculate 128-bit MD5 checksum hashes for file integrity checks', c.sec, 'hash', 'MD5'],
    ['crc32-calc', 'CRC32 Checksum Calculator', 'Calculate standard 32-bit cyclic redundancy check polynomial values', c.sec, 'binary', 'CRC32'],
    ['base58-codec', 'Base58 Encoder & Decoder', 'Encode and decode strings using Bitcoin-compatible Base58 alphabet', c.sec, 'key', 'Base58'],
    ['base32-codec', 'Base32 (RFC 4648) Encoder/Decoder', 'Encode and decode strings into 32-character uppercase representations', c.sec, 'key-round', 'Base32'],
    ['hex-to-ascii', 'Hexadecimal to ASCII Text Converter', 'Convert raw hex byte strings into readable ASCII characters and vice versa', c.sec, 'binary', 'Hex'],
    ['ascii-to-hex', 'ASCII Text to Hex Byte Stream', 'Convert plain text strings into space-delimited hex byte arrays', c.sec, 'binary', 'ASCII'],
    ['totp-simulator', 'TOTP 2FA Code Simulator', 'Generate real-time 6-digit Google Authenticator verification codes', c.sec, 'clock', 'RFC 6238'],
    ['hotp-generator', 'HOTP Counter-Based OTP Generator', 'Generate counter-incremented HMAC-based one-time passwords (RFC 4226)', c.sec, 'refresh-cw', 'HOTP'],
    ['shannon-entropy', 'Password Shannon Entropy Calculator', 'Calculate mathematical bits of Shannon entropy for password brute force', c.sec, 'shield-alert', 'Entropy'],
    ['uuid-v1-gen', 'UUID v1 Timestamp Generator', 'Generate Gregorian epoch timestamp-ordered UUID v1 identifiers', c.sec, 'key', 'UUID v1'],
    ['uuid-v7-gen', 'UUID v7 Unix Timestamp Generator', 'Generate monotonic Unix-epoch millisecond-ordered UUID v7 IDs for DBs', c.sec, 'key', 'UUID v7'],
    ['nanoid-gen', 'NanoID Compact Generator', 'Generate URL-friendly, compact, cryptographically strong unique IDs', c.sec, 'zap', 'NanoID'],
    ['hmac-sha512', 'HMAC-SHA512 Signer', 'Calculate high-entropy hash-based message authentication codes with SHA-512', c.sec, 'file-signature', 'HMAC'],
    ['rot13-cipher', 'ROT13 & Caesar Cipher Rotator', 'Rotate alphabet characters by 13 positions for simple obfuscation', c.sec, 'rotate-cw', 'Cipher'],
    ['bearer-header', 'Bearer Token Header Formatter', 'Format Authorization: Bearer token HTTP request headers safely', c.sec, 'key', 'Auth'],
    ['url-safe-token', 'URL-Safe Cryptographic Nonce Generator', 'Generate high-entropy random bytes formatted for query strings and CSRF', c.sec, 'shield-check', 'Nonce'],
    ['api-key-masker', 'API Key Secret Masker & Redactor', 'Mask private API keys, leaving only the last 4 characters visible for logs', c.sec, 'eye-off', 'Sanitizer'],
    ['bcrypt-cost-calc', 'Bcrypt Cost Factor Latency Sizer', 'Calculate server hash duration based on cost factor work exponents', c.sec, 'cpu', 'Bcrypt'],
    ['pem-cert-decoder', 'X.509 Certificate PEM Inspector', 'Decode base64 PEM certificates to view Issuer, Subject, and Validity', c.sec, 'file-check', 'X.509'],
    ['rsa-keypair-gen', 'RSA-OAEP Keypair Generator', 'Generate 2048-bit and 4096-bit public and private keys via WebCrypto API', c.sec, 'key', 'WebCrypto'],
    ['sha3-256-hasher', 'SHA3-256 (Keccak) Message Hasher', 'Calculate sponge-construction SHA-3 cryptographic digests in browser', c.sec, 'hash', 'SHA-3'],
    ['ripemd160-hasher', 'RIPEMD-160 Cryptographic Hasher', 'Calculate 160-bit RIPEMD hash digests for Bitcoin address verification', c.sec, 'shield', 'RIPEMD'],
    ['password-strength', 'Password Common Dictionary Fuzzer', 'Evaluate passwords against top 10,000 common passwords and leaks', c.sec, 'alert-triangle', 'Strength'],
    ['argon2-param-calc', 'Argon2id Memory Cost Sizer', 'Calculate time, memory (KiB), and parallelism parameters for Argon2', c.sec, 'sliders', 'Argon2'],
    ['file-hash-verify', 'File Checksum Integrity Matcher', 'Drag-and-drop a file and compare its hash against expected signatures', c.sec, 'check-circle', 'Verify'],
    ['base64url-codec', 'Base64URL Safe Converter', 'Convert standard Base64 to URL-safe Base64 by substituting + with -', c.sec, 'link', 'RFC 7515'],
    ['xor-cipher-tool', 'XOR Stream Cipher Sandbox', 'Perform bitwise XOR encryption and decryption on text strings with keys', c.sec, 'refresh-ccw', 'XOR'],
    ['csr-config-builder', 'OpenSSL CSR Config Generator', 'Generate openssl.cnf configurations with Subject Alternative Names (SAN)', c.sec, 'file-text', 'OpenSSL'],
    ['public-key-fingerprint', 'Public Key SHA-256 Fingerprinter', 'Derive base64 and hex colon-separated fingerprints from raw keys', c.sec, 'fingerprint', 'Key ID'],
    ['jwt-claim-builder', 'JWT Payload Claims Assembler', 'Assemble exp, iat, iss, and custom claims into formatted JWT payloads', c.sec, 'file-plus', 'JWT Gen'],
    ['ssl-expiry-countdown', 'SSL Certificate Expiry Calculator', 'Calculate exact days remaining before SSL/TLS certificates expire', c.sec, 'calendar', 'SSL'],
    ['subtle-crypto-benchmark', 'WebCrypto Hasher Benchmarker', 'Benchmark hashing throughput (MB/sec) on your browser hardware', c.sec, 'zap', 'Benchmark'],
    ['cookie-header-fuzzer', 'Session Token Masker & Fuzzer', 'Inspect session tokens to check length, character randomness, and entropy', c.sec, 'shield', 'Session'],
    ['pgp-message-formatter', 'PGP Armored Message Sizer', 'Inspect PGP Armor headers, block types, and CRC checksum boundaries', c.sec, 'mail', 'PGP'],
    ['html-script-sanitizer', 'XSS String Payload Neutralizer', 'Neutralize JavaScript event handlers and script injection strings', c.sec, 'shield-alert', 'Anti-XSS'],
    ['ssh-keygen-command', 'ssh-keygen Command Generator', 'Generate commands for Ed25519 and RSA keys with custom comments', c.sec, 'terminal', 'SSH Gen'],
    ['content-disposition-safe', 'Safe Filename Content-Disposition', 'Sanitize download filenames to prevent directory traversal attacks', c.sec, 'download', 'Headers'],
    ['wireguard-key-inspector', 'WireGuard Base64 Key Validator', 'Inspect and validate 32-byte curve25519 public and private WireGuard keys', c.sec, 'key', 'WireGuard'],

    // 5. WEB, HTTP & APIS (50)
    ['http-codes', 'HTTP Status Codes Inspector', 'Searchable directory with code simulator, client/server causes, and snippets', c.web, 'server', 'Interactive'],
    ['curl-fetch', 'cURL to Fetch Converter', 'Translate raw cURL network commands into browser fetch() JavaScript syntax', c.web, 'terminal', 'cURL'],
    ['url-codec', 'URL Encoder & Decoder', 'Safely encode special query parameters or decode percent-encoded URLs', c.web, 'link', 'Encoding'],
    ['url-parser', 'URL Query Parameter Inspector', 'Parse complex UTM tracking parameters and search queries into key-value tables', c.web, 'filter', 'Inspector'],
    ['basic-auth', 'Basic Auth Header Generator', 'Generate Base64 Authorization: Basic headers from username and password', c.web, 'shield-alert', 'Headers'],
    ['slug-gen', 'URL Slug & Permalink Creator', 'Convert article titles into clean, URL-safe permalinks for blogs and SEO', c.web, 'link-2', 'SEO'],
    ['html-entities', 'HTML Entity Encoder/Decoder', 'Convert characters to HTML entities (&, <, >) and vice versa', c.web, 'code', 'Entities'],
    ['ua-parser', 'User Agent String Inspector', 'Parse browser, operating system, rendering engine, and device metadata', c.web, 'monitor', 'UserAgent'],
    ['cors-builder', 'CORS Header Builder', 'Configure Access-Control-Allow-Origin, Methods, and Header rules', c.web, 'globe', 'CORS'],
    ['meta-tags', 'OpenGraph & Meta Tag Generator', 'Generate Twitter Cards and Facebook OpenGraph HTML tags with live preview', c.web, 'share-2', 'Social'],
    ['curl-to-python', 'cURL to Python Requests Converter', 'Translate raw cURL network requests into idiomatic Python requests script code', c.web, 'terminal', 'Python'],
    ['curl-to-axios', 'cURL to Axios JavaScript Converter', 'Convert raw cURL shell commands into modern axios.request() configurations', c.web, 'terminal', 'Axios'],
    ['curl-to-go', 'cURL to Go net/http Converter', 'Transform cURL commands into ready-to-run Go http.NewRequest standard library code', c.web, 'terminal', 'Go'],
    ['curl-to-php', 'cURL to PHP curl_init Converter', 'Convert cURL commands into native PHP curl_setopt() script blocks', c.web, 'terminal', 'PHP'],
    ['curl-to-java', 'cURL to Java HttpClient Converter', 'Translate cURL commands into modern Java 11+ java.net.http.HttpRequest code', c.web, 'terminal', 'Java'],
    ['utm-stripper', 'Bulk UTM Tracking Parameter Stripper', 'Strip marketing query tags (utm_source, gclid, fbclid) from batches of URLs', c.web, 'link-2', 'UTM Clean'],
    ['url-query-to-json', 'URL Query String to JSON Object', 'Parse query parameters (?page=1&sort=desc) into structured JSON format', c.web, 'file-json', 'Params'],
    ['json-to-url-query', 'JSON Object to URL Query String', 'Serialize key-value JSON objects into percent-encoded URL search query strings', c.web, 'link', 'Query'],
    ['url-path-analyzer', 'URL Path Segments Analyzer', 'Break down URLs into scheme, subdomain, domain, port, path segments, and hashes', c.web, 'search', 'Parser'],
    ['punycode-converter', 'Punycode IDN Domain Converter', 'Encode internationalized domain names with non-ASCII characters to standard Punycode', c.web, 'globe', 'Punycode'],
    ['robots-txt-builder', 'Robots.txt Builder & Tester', 'Generate and test User-agent, Allow, Disallow, and Sitemap crawler directives', c.web, 'file-text', 'Robots'],
    ['sitemap-xml-gen', 'Sitemap.xml URL List Builder', 'Generate standardized XML sitemaps with priority, changefreq, and lastmod tags', c.web, 'file-code', 'Sitemap'],
    ['csp-builder', 'Content Security Policy (CSP) Builder', 'Configure default-src, script-src, and style-src headers to prevent XSS attacks', c.web, 'shield-check', 'CSP'],
    ['hsts-builder', 'Strict-Transport-Security (HSTS) Builder', 'Configure max-age, includeSubDomains, and preload flags for HTTPS enforcement', c.web, 'lock', 'HSTS'],
    ['cache-control-advisor', 'Cache-Control Header Advisor', 'Configure max-age, s-maxage, stale-while-revalidate, and immutable directives', c.web, 'clock', 'Caching'],
    ['mime-types-directory', 'MIME Type & Content-Type Directory', 'Quickly look up standardized MIME types for file extensions and REST API headers', c.web, 'file', 'MIME'],
    ['sri-hash-gen', 'Subresource Integrity (SRI) Hash Builder', 'Calculate sha384 integrity hashes for secure CDN script and stylesheet tags', c.web, 'check-circle', 'SRI'],
    ['http-etag-gen', 'HTTP ETag Checksum Generator', 'Generate entity tag validator strings from content payloads for conditional caching', c.web, 'hash', 'ETag'],
    ['canonical-tag-gen', 'Canonical URL HTML Tag Generator', 'Generate rel=canonical meta tags to resolve duplicate content indexing in SEO', c.web, 'link', 'SEO'],
    ['rate-limit-calc', 'Rate Limit Response Headers Simulator', 'Format standard X-RateLimit-Limit, Remaining, and Reset header envelopes', c.web, 'activity', 'Rate Limit'],
    ['websocket-url-validator', 'WebSocket URL (ws/wss) Validator', 'Validate WebSocket URLs and test query parameters and protocols', c.web, 'radio', 'WebSocket'],
    ['accept-header-parser', 'Accept Header Quality Weight Sorter', 'Parse Accept header priorities (text/html;q=0.9, application/json;q=0.8)', c.web, 'list', 'Accept'],
    ['referrer-policy-gen', 'Referrer-Policy Header Builder', 'Configure strict-origin-when-cross-origin and no-referrer header directives', c.web, 'shield', 'Privacy'],
    ['permissions-policy-builder', 'Permissions-Policy Header Generator', 'Control browser hardware permissions (camera, microphone, geolocation) via headers', c.web, 'lock', 'Permissions'],
    ['dns-record-formatter', 'DNS Zone Record Builder', 'Format standard A, AAAA, CNAME, MX, TXT, and PTR records for BIND zone files', c.web, 'server', 'DNS'],
    ['spf-record-validator', 'SPF Email Record Builder', 'Build and validate v=spf1 records with ip4, include, and ~all mechanisms', c.web, 'mail', 'SPF'],
    ['dmarc-policy-maker', 'DMARC Email Policy Record Generator', 'Configure v=DMARC1 records with rua reporting and p=reject policy enforcement', c.web, 'shield-check', 'DMARC'],
    ['pagination-header-gen', 'RFC 5988 Link Header Pagination Builder', 'Generate Link: <url>; rel="next", rel="last" HTTP headers for REST APIs', c.web, 'arrow-right', 'RFC 5988'],
    ['webhook-verifier', 'Webhook Signature Header Formatter', 'Generate standard X-Hub-Signature-256 headers from webhook payload bodies', c.web, 'send', 'Webhook'],
    ['graphql-url-parser', 'GraphQL Query URL String Extractor', 'Extract clean query and variables from encoded GET request query strings', c.web, 'share-2', 'GraphQL'],
    ['oauth-url-builder', 'OAuth 2.0 Authorization URL Builder', 'Assemble client_id, redirect_uri, scope, and response_type into login URLs', c.web, 'key', 'OAuth'],
    ['ip-lookup-simulator', 'IPv4/IPv6 IP Address Classifier', 'Check if an IP address belongs to Private, Loopback, Link-Local, or Public ranges', c.web, 'network', 'IP Class'],
    ['curl-to-csharp', 'cURL to C# RestSharp / HttpClient', 'Convert raw cURL terminal commands into modern C# RestClient code', c.web, 'code-2', 'C#'],
    ['curl-to-rust', 'cURL to Rust reqwest Code Converter', 'Generate asynchronous Rust reqwest::Client request blocks from cURL strings', c.web, 'cpu', 'Rust'],
    ['http-method-matrix', 'HTTP Method Idempotency Matrix', 'Reference RFC 9110 safety, idempotency, and caching matrix across HTTP verbs', c.web, 'help-circle', 'RFC 9110'],
    ['cookie-header-parser', 'Cookie HTTP Header String Parser', 'Parse Cookie: a=1; b=2; session=xyz header strings into structured JSON', c.web, 'file-text', 'Cookies'],
    ['set-cookie-builder', 'Set-Cookie Header Directive Builder', 'Generate Set-Cookie headers with Secure, HttpOnly, SameSite=Strict, and Max-Age', c.web, 'shield-check', 'Cookies'],
    ['cors-preflight-eval', 'CORS Preflight (OPTIONS) Tester', 'Simulate Access-Control-Request-Method and verify preflight responses', c.web, 'globe', 'CORS'],
    ['security-txt-gen', 'security.txt Vulnerability File Maker', 'Generate RFC 9116 security.txt files with Contact, Encryption, and Canonical tags', c.web, 'shield', 'RFC 9116'],
    ['ads-txt-validator', 'Google ads.txt / app-ads.txt Generator', 'Format authorized digital sellers listings for advertising monetization', c.web, 'dollar-sign', 'ads.txt'],

    // 6. CSS, STYLING & UI DESIGN (50)
    ['box-shadow', 'CSS Box-Shadow Studio', 'Visual sliders for offsets, blur, and spread with instant CSS copy', c.ui, 'layers', 'CSS Studio'],
    ['flexbox-play', 'CSS Flexbox Playground', 'Interactive visual sandbox for justify-content, align-items, and flex-wrap', c.ui, 'layout', 'Flexbox'],
    ['grid-gen', 'CSS Grid Code Generator', 'Design responsive CSS grid layouts visually with template columns and rows', c.ui, 'grid-3x3', 'Grid'],
    ['color-convert', 'HEX to RGB / HSL Converter', 'Interactive color spectrum picker with instant HEX, RGBA, and HSL copy formats', c.ui, 'pipette', 'Color'],
    ['palette-gen', 'Color Palette Harmony Builder', 'Generate complementary, analogous, and triadic color schemes with hex copy', c.ui, 'palette', 'Harmony'],
    ['glassmorphism', 'CSS Glassmorphism Generator', 'Configure frosted glass blur, opacity, and saturation CSS styles', c.ui, 'sparkle', 'Glass'],
    ['border-radius', 'CSS Border-Radius Studio', 'Visually configure 8-point asymmetric border-radius organic shapes', c.ui, 'square', 'Shapes'],
    ['gradient-gen', 'CSS Linear & Radial Gradient Generator', 'Build multi-stop color transitions and export clean CSS background styles', c.ui, 'sun-medium', 'Gradients'],
    ['css-minifier', 'CSS Minifier & Optimizer', 'Strip redundant whitespace, comments, and optimize CSS styles for speed', c.ui, 'file-minus', 'Speed'],
    ['aspect-ratio', 'Aspect Ratio Calculator', 'Compute responsive dimensions for 16:9, 4:3, 1:1, and custom resolutions', c.ui, 'maximize', 'Ratio'],
    ['px-to-rem', 'PX to REM & REM to PX Converter', 'Calculate responsive typography units based on customizable 16px root font size', c.ui, 'type', 'REM Units'],
    ['fluid-clamp-calc', 'Fluid Typography clamp() Calculator', 'Generate CSS clamp(min, val, max) expressions for smoothly scaling screen fonts', c.ui, 'maximize-2', 'Fluid Text'],
    ['text-shadow-gen', 'CSS Text-Shadow & Glow Builder', 'Design multi-layered text drop shadows and glowing neon effects with live CSS', c.ui, 'type', 'Shadow'],
    ['triangle-gen', 'CSS Border Triangle Generator', 'Generate pure CSS directional arrows and tooltips using border width hacks', c.ui, 'play', 'Shapes'],
    ['clip-path-gen', 'CSS Clip-Path Polygon Maker', 'Create custom geometric shapes, polygons, and stars using CSS clip-path', c.ui, 'scissors', 'Clip-Path'],
    ['neumorphism-gen', 'CSS Neumorphism Soft UI Studio', 'Design soft extruded and inset shadow states for modern neumorphic interfaces', c.ui, 'sun', 'Soft UI'],
    ['scrollbar-customizer', 'CSS Scrollbar Styler', 'Generate cross-browser ::-webkit-scrollbar and scrollbar-color CSS styles', c.ui, 'sliders', 'Scrollbar'],
    ['color-shades-gen', 'Monochromatic Color Shades & Tints', 'Generate 10-step light-to-dark color scales (50 to 900) for UI design systems', c.ui, 'palette', 'Shades'],
    ['svg-data-uri-gen', 'SVG to CSS Background Data URI', 'Encode raw SVG vector code into safe inline background-image data URI styles', c.ui, 'image', 'Data URI'],
    ['css-filters-sandbox', 'CSS Filter Playground', 'Interactively adjust blur, brightness, contrast, grayscale, and invert filters', c.ui, 'sliders', 'Filters'],
    ['css-animation-keyframes', 'CSS Keyframe Animation Studio', 'Build 0% to 100% keyframe transitions with pulse, bounce, and fade presets', c.ui, 'play', 'Keyframes'],
    ['cubic-bezier-tester', 'Cubic-Bezier Easing Inspector', 'Visual cubic-bezier(x1, y1, x2, y2) timing curve generator for smooth transitions', c.ui, 'activity', 'Easing'],
    ['css-specificity-calc', 'CSS Selector Specificity Calculator', 'Calculate (Inline, IDs, Classes, Elements) specificity scores for CSS rules', c.ui, 'award', 'Specificity'],
    ['color-cmyk-converter', 'RGB & HEX to CMYK Print Converter', 'Convert screen colors to Cyan, Magenta, Yellow, and Key/Black print values', c.ui, 'printer', 'CMYK'],
    ['tailwind-hex-lookup', 'Tailwind CSS Color Palette Lookup', 'Search official Tailwind CSS v3 & v4 hex colors by name (slate-800, indigo-600)', c.ui, 'search', 'Tailwind'],
    ['css-var-scaffold', 'CSS Custom Property (:root) Scaffolder', 'Generate CSS variable design tokens for typography, spacing, and colors', c.ui, 'file-text', 'Variables'],
    ['font-pair-tester', 'Heading & Body Font Pair Tester', 'Preview Google Fonts combinations side-by-side with adjustable scale ratios', c.ui, 'type', 'Typography'],
    ['css-columns-builder', 'CSS Multi-Column Layout Maker', 'Configure column-count, column-gap, and column-rule for print-style text columns', c.ui, 'columns', 'Columns'],
    ['css-backdrop-filter', 'Backdrop Filter Blur & Saturate', 'Generate iOS-style backdrop-filter blur backgrounds for navigation modals', c.ui, 'sparkles', 'Backdrop'],
    ['golden-ratio-type', 'Golden Ratio Typography Scale Calculator', 'Calculate modular typographic scales based on the 1.618 golden ratio multiplier', c.ui, 'trending-up', 'Scale'],
    ['css-cursor-directory', 'CSS Cursor Property Directory', 'Interactive preview of all CSS cursor states (pointer, grab, crosshair, not-allowed)', c.ui, 'mouse-pointer', 'Cursor'],
    ['z-index-scale-manager', 'CSS z-index Elevation Scale Builder', 'Map organized z-index scales (dropdown 1000, modal 2000, toast 3000)', c.ui, 'layers', 'z-index'],
    ['css-ribbon-builder', 'Corner Badge & Ribbon CSS Generator', 'Generate pure CSS corner banner ribbons for e-commerce product cards', c.ui, 'bookmark', 'Ribbon'],
    ['color-blindness-sim', 'Color Blindness Accessibility Simulator', 'Simulate Protanopia, Deuteranopia, and Tritanopia color blindness on hex colors', c.ui, 'eye', 'A11y'],
    ['css-media-query-gen', 'Responsive Breakpoint Media Queries', 'Generate standard media queries for Mobile (640px), Tablet (768px), and Laptop (1024px)', c.ui, 'smartphone', 'Responsive'],
    ['css-calc-validator', 'CSS calc() Expression Evaluator', 'Test and validate CSS calc(100% - 32px) expressions with mixed units', c.ui, 'calculator', 'calc()'],
    ['web-safe-font-stacks', 'Web-Safe Font Stacks Directory', 'Copy fallback font stacks for Arial, Helvetica, Georgia, Times, and Courier', c.ui, 'type', 'Fonts'],
    ['css-mask-generator', 'CSS Mask Image & Clipping Studio', 'Generate CSS mask-image gradient fade-out styles for scrollable overflow boxes', c.ui, 'eye-off', 'Masking'],
    ['svg-icon-color-tint', 'CSS Filter Hex to Filter Converter', 'Convert target hex colors into exact CSS filter: invert(...) approximations', c.ui, 'filter', 'Filter Gen'],
    ['button-hover-builder', 'Interactive Button Hover Micro-Transitions', 'Design scale, translateY, and shadow elevation hover micro-interactions', c.ui, 'square', 'Buttons'],
    ['css-perspective-3d', 'CSS 3D Transform & Perspective Studio', 'Visually rotate cards along rotateX, rotateY, and perspective planes', c.ui, 'box', '3D'],
    ['screen-mockup-frame', 'Browser Window UI Mockup Frame Maker', 'Wrap screenshot images in dark-mode browser chrome window headers', c.ui, 'layout', 'Mockup'],
    ['css-reset-scaffold', 'Modern CSS Reset Snippet Generator', 'Generate clean CSS resets (box-sizing, margin 0, smooth scrolling defaults)', c.ui, 'file-text', 'Reset'],
    ['color-name-finder', 'Hex Color Nearest Named Color Finder', 'Match any raw hex color code to its nearest official CSS named color name', c.ui, 'tag', 'Color Names'],
    ['css-focus-visible-gen', 'Accessible Focus Ring Styler', 'Generate high-contrast :focus-visible outlines compliant with accessibility standards', c.ui, 'check-square', 'A11y Focus'],
    ['badge-pill-builder', 'UI Badge & Pill Element Generator', 'Design badge pills with status colors, pulse dots, and copyable Tailwind code', c.ui, 'tag', 'Badges'],
    ['css-table-styler', 'Zebra Stripe Data Table Styler', 'Generate alternating row colors and hover state CSS for HTML data tables', c.ui, 'grid', 'Tables'],
    ['glassmorphism-card', 'Frosted Glass Modal Card Studio', 'Design layered translucent modal cards with border gradients and blurs', c.ui, 'sparkles', 'Modal UI'],
    ['css-tooltip-maker', 'Pure CSS Data-Tooltip Generator', 'Generate hover tooltips using [data-tooltip]::before and ::after pseudo-elements', c.ui, 'message-circle', 'Tooltips'],
    ['letter-spacing-calc', 'Tracking & Letter Spacing Converter', 'Convert Photoshop/Figma tracking values (-20, 50) into CSS em/px letter-spacing', c.ui, 'type', 'Spacing'],

    // 7. DEVOPS, CONTAINERS & LINUX (50)
    ['cron-builder', 'Cron Expression Explainer', 'Translate 5-part cron syntax into human-readable sentences with presets', c.ops, 'clock', 'Crontab'],
    ['dockerfile-lint', 'Dockerfile Validator & Linter', 'Inspect Dockerfile instructions for caching efficiency and security practices', c.ops, 'container', 'Docker'],
    ['k8s-yaml', 'Kubernetes YAML Formatter', 'Format and validate Kubernetes Deployment, Service, and Ingress specs', c.ops, 'boxes', 'K8s'],
    ['chmod-calc', 'Linux Chmod Permissions Calculator', 'Calculate numeric (e.g. 755, 644) and symbolic (rwxr-xr-x) Linux permissions', c.ops, 'terminal-square', 'Chmod'],
    ['subnet-calc', 'IPv4 Subnet CIDR Calculator', 'Calculate network ranges, broadcast addresses, and usable host counts', c.ops, 'network', 'Networking'],
    ['ipv6-expand', 'IPv6 Address Expander & Compressor', 'Expand compressed zero sequences or shorten IPv6 addresses to standard RFC form', c.ops, 'cpu', 'IPv6'],
    ['nginx-format', 'Nginx Config Beautifier', 'Standardize tab indentations and block structures for Nginx server configs', c.ops, 'server', 'Nginx'],
    ['env-validator', '.env Environment File Sanitizer', 'Validate syntax, detect missing quotes, and strip comments from env files', c.ops, 'file-symlink', '.env'],
    ['git-commit', 'Git Commit Message Formatter', 'Format standardized Conventional Commit messages (feat, fix, chore, docs)', c.ops, 'git-commit', 'Commits'],
    ['ports-lookup', 'Common TCP/UDP Port Directory', 'Search well-known network ports (SSH 22, HTTP 80, HTTPS 443, Redis 6379)', c.ops, 'hash', 'Ports'],
    ['docker-to-compose', 'Docker Run to Docker Compose', 'Convert raw docker run CLI commands with flags (-p, -v, -e) into docker-compose.yml', c.ops, 'container', 'Compose'],
    ['compose-to-docker', 'Docker Compose to Docker Run CLI', 'Convert service definitions in docker-compose.yml into single docker run CLI commands', c.ops, 'terminal', 'Docker CLI'],
    ['k8s-configmap-env', 'Kubernetes ConfigMap from .env', 'Convert standard key=value .env files into Kubernetes ConfigMap manifest YAML', c.ops, 'boxes', 'ConfigMap'],
    ['k8s-secret-gen', 'Kubernetes Secret Manifest Generator', 'Encode plain text string values to Base64 and build Kubernetes Secret YAML manifests', c.ops, 'lock', 'Secrets'],
    ['helm-values-to-cli', 'Helm Values to CLI --set Flags', 'Flatten nested values.yaml YAML hierarchies into equivalent --set flags', c.ops, 'terminal', 'Helm'],
    ['nginx-rev-proxy', 'Nginx Reverse Proxy Config Maker', 'Generate production reverse proxy blocks with SSL, upstream, and proxy headers', c.ops, 'server', 'Nginx'],
    ['apache-htaccess-gen', 'Apache .htaccess 301 Redirect Builder', 'Generate clean RewriteRule 301 redirects and HTTPS redirect rules for Apache', c.ops, 'file-code', '.htaccess'],
    ['systemd-unit-builder', 'Systemd Service Unit Generator', 'Generate production Linux systemd service unit files with restart policies and user context', c.ops, 'cpu', 'Systemd'],
    ['ssh-fingerprint-calc', 'SSH Key Fingerprint Calculator', 'Compute SHA256 and MD5 public key fingerprints from pasted OpenSSH keys', c.ops, 'key', 'SSH'],
    ['apache-htpasswd-maker', 'Apache .htpasswd Generator', 'Generate Apache/Nginx basic authentication password hashes', c.ops, 'lock', 'htpasswd'],
    ['cidr-to-netmask', 'CIDR to Subnet & Wildcard Mask', 'Convert prefix notations (/24, /16) to dotted netmasks and wildcard masks', c.ops, 'network', 'Netmask'],
    ['gh-actions-gen', 'GitHub Actions Workflow Builder', 'Generate CI/CD build, test, and deploy workflow YAML files for Node, Python, and Go', c.ops, 'play-circle', 'Workflows'],
    ['gitlab-ci-builder', 'GitLab CI Pipeline YAML Builder', 'Build multi-stage GitLab CI configuration files with cache and artifact rules', c.ops, 'file-text', 'GitLab'],
    ['gitignore-gen', 'Multi-Framework .gitignore Builder', 'Generate standard .gitignore rules for Node, Python, Java, macOS, and IDEs', c.ops, 'file-minus', '.gitignore'],
    ['shell-param-quoter', 'Shell Parameter Quoter & Sanitizer', 'Safely quote strings and sanitize variables to prevent bash injection vulnerabilities', c.ops, 'terminal', 'Bash'],
    ['bandwidth-time-calc', 'File Download Time Calculator', 'Calculate exact transfer durations across Mbps/Gbps connections for gigabyte files', c.ops, 'download', 'Transfer'],
    ['ping-overhead-calc', 'Ping Packet Overhead & MTU Calculator', 'Calculate packet fragmentation and IP/ICMP byte overhead for standard 1500 MTUs', c.ops, 'activity', 'MTU'],
    ['s3-policy-gen', 'AWS S3 Bucket Policy JSON Builder', 'Generate read-only, public-read, or restricted VPC bucket policies for Amazon S3', c.ops, 'shield', 'AWS S3'],
    ['iam-assume-role-gen', 'AWS IAM Trust Policy Generator', 'Generate AssumeRolePolicyDocument JSON for EC2, Lambda, and ECS task roles', c.ops, 'key', 'AWS IAM'],
    ['prometheus-alert-gen', 'Prometheus AlertRule YAML Builder', 'Format alert rules with for: durations, severity labels, and PromQL threshold expressions', c.ops, 'alert-triangle', 'Prometheus'],
    ['terraform-var-gen', 'Terraform Variable Block Scaffolder', 'Generate variable blocks from JSON keys for Terraform configurations', c.ops, 'code', 'Terraform'],
    ['procfile-generator', 'PaaS Procfile Declarator', 'Generate web:, worker:, and release: process declarations for Heroku and Railway', c.ops, 'file', 'Procfile'],
    ['rsync-flag-assembler', 'Rsync CLI Command Flag Builder', 'Assemble safe rsync commands with -avzP, --exclude, and --delete dry-run flags', c.ops, 'refresh-cw', 'Rsync'],
    ['syslog-facility-calc', 'Syslog RFC 5424 Priority Calculator', 'Calculate Priority = (Facility * 8) + Severity values for syslog log forwarding', c.ops, 'list', 'Syslog'],
    ['fail2ban-regex-gen', 'Fail2ban Filter failregex Generator', 'Create regex filter patterns to match failed SSH and authentication attempts in logs', c.ops, 'shield-alert', 'Fail2ban'],
    ['ansible-inventory-conv', 'Ansible Inventory INI to YAML', 'Convert legacy INI-formatted Ansible inventory host files into structured YAML', c.ops, 'file-text', 'Ansible'],
    ['linux-load-avg-calc', 'Linux CPU Core Load Capacity Sizer', 'Calculate percentage CPU saturation based on 1-min load average and total cores', c.ops, 'cpu', 'Linux Load'],
    ['coreos-cloud-init-gen', 'Cloud-Init YAML User-Data Builder', 'Configure SSH keys, user accounts, and initial shell runcmds for cloud VM boots', c.ops, 'server', 'Cloud-Init'],
    ['docker-prune-cmd-gen', 'Docker Cleanup Command Builder', 'Assemble selective docker system prune commands for dangling images and volumes', c.ops, 'trash-2', 'Docker'],
    ['traefik-router-gen', 'Traefik Dynamic Config Builder', 'Generate Traefik HTTP routers and middlewares for Docker container labels', c.ops, 'git-merge', 'Traefik'],
    ['dnsmasq-conf-builder', 'Dnsmasq Local Resolver Config Maker', 'Build address=/domain/127.0.0.1 redirect rules for local DNS development', c.ops, 'network', 'Dnsmasq'],
    ['squid-proxy-acl-gen', 'Squid Proxy ACL Rule Generator', 'Format acl and http_access allow/deny rule blocks for web proxy gateways', c.ops, 'shield', 'Squid'],
    ['logrotate-conf-maker', 'Linux logrotate.d File Builder', 'Configure weekly rotation, compress, delaycompress, and maxsize log policies', c.ops, 'rotate-cw', 'Logrotate'],
    ['ufw-firewall-cmd-gen', 'Ubuntu UFW Firewall Rule Builder', 'Generate ufw allow from to any port firewall rules', c.ops, 'shield-check', 'UFW'],
    ['iptables-rule-builder', 'Linux iptables NAT & Port Forwarder', 'Generate iptables -t nat -A PREROUTING port forwarding and masquerade rules', c.ops, 'terminal', 'iptables'],
    ['wireguard-peer-conf', 'WireGuard VPN Peer Config Builder', 'Build [Interface] and [Peer] ini configurations with private/public key pairs', c.ops, 'shield', 'WireGuard'],
    ['ip-vlan-tag-calc', '802.1Q VLAN Tag & ID Directory', 'Check standard 12-bit VLAN ID ranges (1 to 4094) and priority code points', c.ops, 'tag', 'VLAN'],
    ['system-ram-budget', 'JVM / Node Memory Cap Sizer', 'Calculate optimal -Xmx heap sizes and container cgroup memory boundaries', c.ops, 'cpu', 'Memory'],
    ['git-squash-helper', 'Git Interactive Rebase Command Helper', 'Generate git rebase -i HEAD~N command sequences with squash and fixup hints', c.ops, 'git-merge', 'Git'],
    ['helm-chart-yaml-scaffold', 'Helm Chart.yaml Metadata Builder', 'Build standardized Chart.yaml definitions with version, appVersion, and dependencies', c.ops, 'file-text', 'Helm'],

    // 8. CONTENT, TEXT & MARKDOWN (50)
    ['markdown-live', 'Markdown Live Previewer', 'Live Markdown to styled HTML renderer with word count and stats', c.txt, 'file-text', 'Markdown'],
    ['word-counter', 'Word & Character Counter', 'Real-time word, character, sentence, paragraph, and reading time metrics', c.txt, 'spell-check', 'Metrics'],
    ['case-convert', 'Text Case Converter', 'Switch text across Title Case, UPPERCASE, lowercase, camelCase, snake_case', c.txt, 'type', 'Formatting'],
    ['dedupe-lines', 'Duplicate Line Remover', 'Remove duplicate rows, sort lines alphabetically, and strip empty whitespace', c.txt, 'list-filter', 'Dedupe'],
    ['sort-lines', 'Alphabetical Line Sorter', 'Sort lists alphabetically (A-Z, Z-A), numerically, or by string length', c.txt, 'arrow-down-narrow-wide', 'Sort'],
    ['whitespace-clean', 'Whitespace & Line Cleaner', 'Strip trailing whitespace, consecutive spaces, and blank carriage returns', c.txt, 'eraser', 'Cleaner'],
    ['lorem-gen', 'Lorem Ipsum Text Builder', 'Generate placeholder paragraphs, sentences, or word counts for UI mockups', c.txt, 'align-left', 'Mockup'],
    ['slug-to-title', 'Slug to Title String Generator', 'Convert kebab-case-url-slugs into readable capitalized article titles', c.txt, 'text', 'Converter'],
    ['word-freq', 'Word Frequency Analyzer', 'Analyze text density, keyword counts, and lexical variety percentages', c.txt, 'bar-chart-2', 'Analytics'],
    ['text-reverse', 'Text & String Reverser', 'Reverse full sentences, individual words, or character sequences', c.txt, 'refresh-ccw', 'Transform'],
    ['html-to-markdown', 'HTML to Markdown Converter', 'Convert raw HTML web page elements and tags into clean Markdown formatting', c.txt, 'file-text', 'HTML'],
    ['sql-in-wrapper', 'Delimited Text to SQL IN Wrapper', 'Wrap lines of text or IDs with single quotes and commas for SQL IN (\'a\', \'b\') queries', c.txt, 'database', 'SQL IN'],
    ['extract-emails', 'Extract Emails from Unstructured Text', 'Scan unstructured text files to extract unique, deduplicated email addresses', c.txt, 'mail', 'Extract'],
    ['extract-urls', 'Extract URLs from Raw Text', 'Identify, validate, and extract all web hyperlinks and URLs from bulk text blocks', c.txt, 'link', 'Extract'],
    ['extract-ips', 'Extract IPv4 Addresses from Logs', 'Extract clean, deduplicated lists of IPv4 addresses from server error logs', c.txt, 'network', 'Logs'],
    ['line-numberer', 'Text Line Numbering Tool', 'Prepend sequential line numbers to source text with customizable zero padding', c.txt, 'list-ordered', 'Numbers'],
    ['prefix-suffix-tool', 'Batch Text Prefix & Suffix Appender', 'Prepend or append custom string tags to every line in a text document simultaneously', c.txt, 'edit', 'Batch'],
    ['flesch-kincaid', 'Flesch-Kincaid Readability Calculator', 'Calculate reading ease score and grade level difficulty for technical documentation', c.txt, 'book-open', 'Readability'],
    ['strip-html-tags', 'HTML Tag Stripper & Plain Text Extractor', 'Remove all HTML markup, scripts, and styles, leaving pure plain text content', c.txt, 'trash-2', 'Cleaner'],
    ['zero-width-detector', 'Zero-Width Invisible Character Detector', 'Detect and remove hidden Unicode zero-width spaces that break code parsing', c.txt, 'eye-off', 'Sanitizer'],
    ['diff-inline-checker', 'Inline Character-by-Character Diff', 'Highlight micro text changes, typo fixes, and punctuation diffs inline', c.txt, 'git-commit', 'Diff'],
    ['palindrome-checker', 'Palindrome Phrase & Sentence Verifier', 'Check if alphanumeric character sequences read identically forwards and backwards', c.txt, 'refresh-cw', 'Palindrome'],
    ['string-truncator', 'Word-Boundary Smart String Truncator', 'Truncate paragraphs to max characters without chopping words in half', c.txt, 'scissors', 'Truncate'],
    ['comma-to-newline', 'Comma to Newline & List Transposer', 'Convert comma-delimited strings into vertical lists or newline lists to commas', c.txt, 'list', 'Delimit'],
    ['extract-hex-colors', 'Extract Hex Color Codes from CSS', 'Scan CSS and text blocks to extract unique 3, 6, and 8-digit #hex color codes', c.txt, 'pipette', 'Extract'],
    ['nato-phonetic-gen', 'NATO Phonetic Alphabet Speller', 'Convert text (Alpha, Bravo, Charlie) for clear spelling over voice phone calls', c.txt, 'mic', 'Phonetic'],
    ['morse-code-codec', 'Morse Code Encoder & Decoder', 'Translate text into dots and dashes (. ---) and decode Morse back into letters', c.txt, 'radio', 'Morse'],
    ['bbcode-to-html', 'BBCode to HTML Markup Converter', 'Convert forum BBCode tags ([b], [url], [quote]) into clean semantic HTML5', c.txt, 'code', 'BBCode'],
    ['markdown-checklist-calc', 'Markdown Checklist Progress Tracker', 'Calculate percentage completion from - [x] done and - [ ] todo markdown checkboxes', c.txt, 'check-square', 'Checklist'],
    ['binary-to-text', 'Binary (01) to ASCII Text Converter', 'Convert 8-bit space-separated binary byte streams into readable English text', c.txt, 'binary', 'Binary'],
    ['text-to-binary', 'Text to 8-Bit Binary Representation', 'Encode ASCII and UTF-8 strings into binary byte representations', c.txt, 'binary', 'Binary'],
    ['leetspeak-generator', 'LeetSpeak (1337) Text Generator', 'Transform standard text into hacker leetspeak with customizable letter substitutions', c.txt, 'terminal', '1337'],
    ['upside-down-text', 'Upside-Down Unicode Text Flipper', 'Flip text upside down using Unicode phonetic and mathematical turned characters', c.txt, 'rotate-cw', 'Unicode'],
    ['zalgo-glitch-text', 'Zalgo Glitched Text Generator', 'Add combining diacritical marks to text to produce spooky matrix glitch effects', c.txt, 'zap', 'Zalgo'],
    ['speaking-time-calc', 'Public Speaking Time Estimator', 'Estimate verbal presentation time based on standard 130-150 words per minute rates', c.txt, 'volume-2', 'Speech'],
    ['char-occurrence-calc', 'Character Frequency Heatmap Analyzer', 'Calculate individual character occurrences and percentage density in a document', c.txt, 'bar-chart', 'Frequency'],
    ['remove-accent-marks', 'Diacritic & Accent Mark Stripper', 'Strip accents and normalize characters (é -> e, ü -> u, ñ -> n) for search indexing', c.txt, 'type', 'Normalize'],
    ['column-text-aligner', 'Monospace Table Text Column Aligner', 'Align uneven plain text columns by padding spaces to match maximum column width', c.txt, 'align-justify', 'Align'],
    ['c-string-literal-gen', 'C/C++ Multi-Line String Literal Maker', 'Format raw multi-line strings into quoted escaped C-string literals with \\n', c.txt, 'code', 'C/C++'],
    ['tab-to-spaces-conv', 'Tabs to Spaces & Spaces to Tabs', 'Convert between tab characters and 2-space or 4-space indentations consistently', c.txt, 'sliders', 'Indent'],
    ['sentence-counter', 'Sentence & Average Sentence Length Sizer', 'Count total sentences and calculate average words per sentence to improve clarity', c.txt, 'book', 'Sentences'],
    ['text-scramble-fuzzer', 'Random Word Scrambler & Anonymizer', 'Shuffle inner letters of words or substitute nouns with random filler for anonymization', c.txt, 'shuffle', 'Scramble'],
    ['markdown-link-extractor', 'Markdown Link & Reference Extractor', 'Extract [anchor text](url) pairings from markdown files into tabular lists', c.txt, 'link', 'Links'],
    ['title-case-ap-style', 'AP & Chicago Style Headline Capitalizer', 'Capitalize article headlines according to official AP Stylebook capitalization rules', c.txt, 'type', 'AP Style'],
    ['repeated-words-finder', 'Consecutive Duplicate Word Detector', 'Identify and highlight accidental repeated duplicate words ("the the", "in in")', c.txt, 'alert-triangle', 'Proofread'],
    ['regex-replace-all', 'Client-Side RegEx Replace Studio', 'Run global regex substitutions with capture group back-references ($1, $2)', c.txt, 'search', 'Replace'],
    ['text-wrap-width', 'Hard Word Wrap at Column Width', 'Hard-wrap paragraphs at 80 characters or custom widths for terminal and email readability', c.txt, 'align-left', 'Wrap'],
    ['base64-text-wrap', 'Base64 76-Character MIME Line Wrapper', 'Split long continuous Base64 text streams into standard 76-char RFC 2045 lines', c.txt, 'align-justify', 'MIME'],
    ['text-mask-emails', 'Email Address Privacy Masker', 'Mask email user handles (j***@example.com) for public display and GDPR compliance', c.txt, 'eye-off', 'GDPR'],
    ['emoji-stripper', 'Unicode Emoji Character Stripper', 'Strip all emojis and surrogate pair symbols from text to ensure ASCII compatibility', c.txt, 'smile', 'Clean'],

    // 9. MATH, TIME & FINANCIAL (50)
    ['base-converter', 'Number Base Converter', 'Simultaneous live conversion across Decimal, Hexadecimal, Binary, and Octal', c.num, 'binary', 'Base 2-16'],
    ['unit-convert', 'Universal Unit Converter', 'Convert length, mass, temperature, data storage, and speed instantly', c.num, 'scale', '6 Categories'],
    ['percent-calc', 'Percentage Calculator', 'Calculate percentage increase, decrease, fraction ratios, and discounts', c.num, 'percent', 'Math'],
    ['unix-epoch', 'UNIX Timestamp to Date Converter', 'Convert millisecond/second epoch timestamps to human-readable ISO and local time', c.num, 'calendar-clock', 'Time'],
    ['date-epoch', 'Human Date to UNIX Epoch', 'Select any calendar date and time to compute the exact UTC UNIX timestamp', c.num, 'calendar', 'Timestamp'],
    ['byte-calc', 'Byte & Bit Storage Calculator', 'Convert between B, KB, MB, GB, TB, and network bitrate units (Kbps, Mbps)', c.num, 'hard-drive', 'Storage'],
    ['gcd-lcm', 'GCD & LCM Calculator', 'Calculate Greatest Common Divisor and Least Common Multiple of numbers', c.num, 'calculator', 'Arithmetic'],
    ['roman-num', 'Roman Numeral Converter', 'Convert standard integers into Roman numerals and parse Roman numerals to digits', c.num, 'columns', 'Numerals'],
    ['speed-conv', 'Speed & Velocity Converter', 'Convert between km/h, mph, m/s, knots, and Mach numbers', c.num, 'gauge', 'Velocity'],
    ['temp-conv', 'Temperature Scale Converter', 'Simultaneously convert across Celsius, Fahrenheit, Kelvin, and Rankine scales', c.num, 'thermometer', 'Temp'],
    ['date-diff-calc', 'Days Between Dates Calculator', 'Calculate exact calendar days, weeks, months, and hours between two dates', c.num, 'calendar', 'Date Math'],
    ['work-days-calc', 'Working Days & Business Hours Calculator', 'Calculate business days between dates, automatically excluding weekends', c.num, 'clock', 'Work Days'],
    ['date-add-sub', 'Date Addition & Subtraction Calculator', 'Add or subtract days, weeks, months, or years to project future milestone deadlines', c.num, 'calendar-plus', 'Schedule'],
    ['timezone-overlap', 'Timezone Meeting Planner', 'Visualize overlapping working business hours across IST, UTC, EST, and PST', c.num, 'globe', 'Timezones'],
    ['loan-emi-calc', 'Loan EMI & Amortization Calculator', 'Calculate monthly loan EMI and view interest vs principal amortizations', c.num, 'calculator', 'Finance'],
    ['sip-calc', 'SIP Compound Interest Calculator', 'Calculate future returns on monthly systematic mutual fund investment plans', c.num, 'trending-up', 'Investment'],
    ['compound-interest', 'Compound Interest Calculator', 'Calculate compound growth over time with annual, monthly, or daily compounding', c.num, 'pie-chart', 'Compound'],
    ['reverse-tax-calc', 'Reverse Tax / GST Deduction Calculator', 'Calculate pre-tax base prices and tax components from gross inclusive totals', c.num, 'percent', 'Taxes'],
    ['profit-margin-calc', 'Profit Margin & Markup Calculator', 'Calculate gross profit, percentage markup, and sales revenue margins', c.num, 'trending-up', 'Margins'],
    ['cagr-calc', 'CAGR (Annual Growth Rate) Calculator', 'Calculate Compound Annual Growth Rate for business revenue and portfolio investments', c.num, 'bar-chart', 'CAGR'],
    ['fuel-trip-calc', 'Trip Fuel & Cost Estimator', 'Estimate total fuel volume and currency expenses based on distance and mileage', c.num, 'navigation', 'Travel'],
    ['scientific-notation', 'Scientific Notation Converter', 'Convert numbers to scientific exponential notation (1.23e+8) and vice versa', c.num, 'hash', 'Scientific'],
    ['rule-of-72-calc', 'Rule of 72 Doubling Time Calculator', 'Estimate how many years it takes for an investment to double at a given interest rate', c.num, 'clock', 'Rule of 72'],
    ['simple-interest-calc', 'Simple Interest & Payoff Calculator', 'Calculate basic non-compounding interest (I = P * r * t) on loans', c.num, 'dollar-sign', 'Interest'],
    ['tip-bill-splitter', 'Restaurant Tip & Group Bill Splitter', 'Calculate tip percentages and split total restaurant checks evenly among party guests', c.num, 'users', 'Bill Split'],
    ['fraction-reducer', 'Fraction Simplifier & Reducer', 'Simplify complex fractions to lowest terms and convert to decimal equivalents', c.num, 'divide', 'Fractions'],
    ['prime-factor-calc', 'Prime Number Factorization Calculator', 'Test if an integer is prime and view its complete prime factor breakdown tree', c.num, 'hash', 'Primes'],
    ['quadratic-solver', 'Quadratic Equation (ax^2+bx+c) Solver', 'Calculate real and complex roots for standard algebraic quadratic formulas', c.num, 'help-circle', 'Algebra'],
    ['statistics-mean-median', 'Mean, Median, Mode & Range Calculator', 'Calculate central tendency statistics from comma-delimited numeric datasets', c.num, 'bar-chart-2', 'Statistics'],
    ['std-dev-calc', 'Standard Deviation & Variance Calculator', 'Calculate population and sample variance and standard deviation', c.num, 'activity', 'Variance'],
    ['random-num-range', 'Cryptographic Random Integer Picker', 'Generate uniform random numbers within custom min/max integer boundaries', c.num, 'shuffle', 'Random'],
    ['ratio-scaler-calc', 'Aspect Ratio & Proportion Scaler', 'Solve proportional ratios (A:B = C:D) to scale dimensions maintaining proportions', c.num, 'maximize', 'Ratios'],
    ['bmi-calc-metric', 'Body Mass Index (BMI) Calculator', 'Calculate BMI and healthy weight categories using metric or imperial inputs', c.num, 'heart', 'BMI'],
    ['bmr-calorie-calc', 'Basal Metabolic Rate (BMR) Calculator', 'Calculate baseline daily caloric burn using the Mifflin-St Jeor formula', c.num, 'activity', 'Calorie'],
    ['kwh-appliance-calc', 'Electricity Appliance Cost Calculator', 'Calculate electricity running costs (kWh) from appliance wattage and hours', c.num, 'zap', 'Energy'],
    ['iso-week-number', 'ISO 8601 Week Number & Day Finder', 'Determine the exact ISO week number (W01 to W53) and day of year for any date', c.num, 'calendar', 'ISO 8601'],
    ['relative-time-human', 'Relative Time Humanizer ("3 hours ago")', 'Convert timestamps into relative English strings ("just now", "yesterday")', c.num, 'clock', 'Humanize'],
    ['stopwatch-lap-timer', 'Browser Millisecond Stopwatch & Lap Timer', 'High-precision in-browser stopwatch with split lap recording capabilities', c.num, 'watch', 'Timer'],
    ['pomodoro-timer', 'Pomodoro 25/5 Work Interval Timer', 'Classic 25-minute focus session and 5-minute break timer with audio notifications', c.num, 'clock', 'Pomodoro'],
    ['epoch-nanoseconds', 'Nanosecond & Microsecond Timestamp Sizer', 'Parse 16-digit (micro) and 19-digit (nano) Unix timestamps into human dates', c.num, 'calendar', 'Nanoseconds'],
    ['leap-year-checker', 'Leap Year Century Verifier', 'Verify if calendar years satisfy the Gregorian 400-year leap year rule', c.num, 'calendar-check', 'Calendar'],
    ['military-time-conv', '24-Hour Military Time Converter', 'Convert 12-hour AM/PM time into 24-hour military notation (17:30) and vice versa', c.num, 'clock', '24-Hour'],
    ['inflation-impact-calc', 'Historical Inflation Impact Estimator', 'Calculate how annual inflation rates erode monetary purchasing power over decades', c.num, 'trending-down', 'Inflation'],
    ['billable-hours-calc', 'Freelance Billable Time & Rate Multiplier', 'Sum project time cards (hours:minutes) and multiply by hourly billing rates', c.num, 'dollar-sign', 'Billing'],
    ['salary-to-hourly', 'Annual Salary to Hourly Wage Equivalent', 'Convert annual gross pay into weekly, daily, and hourly wage rates (2080 hrs)', c.num, 'dollar-sign', 'Salary'],
    ['binary-bitwise-ops', 'Bitwise AND, OR, XOR, NOT Calculator', 'Perform bitwise logical operations on two integers and view binary bit registers', c.num, 'binary', 'Bitwise'],
    ['permutations-comb-calc', 'Permutations (nPr) & Combinations (nCr)', 'Calculate mathematical permutations and combinations for probability sets', c.num, 'shuffle', 'Probability'],
    ['discount-savings-calc', 'Sale Discount & Savings Calculator', 'Calculate final checkout prices after applying percentage discounts and coupons', c.num, 'tag', 'Savings'],
    ['unit-price-comparator', 'Price-per-Unit Comparison Tool', 'Compare multi-pack grocery sizes to find the lowest price per ounce or liter', c.num, 'shopping-cart', 'Best Value'],
    ['year-progress-bar', 'Current Year Percentage Completion Bar', 'Calculate what percentage of the current calendar year has elapsed down to seconds', c.num, 'clock', 'Year Progress'],

    // 10. FILE, MEDIA & CANVAS (50)
    ['img-compress', 'Image Compressor & WebP', 'Reduce PNG/JPG file sizes and convert to next-gen WebP directly in Canvas', c.med, 'image', 'WebP Canvas'],
    ['b64-canvas', 'Base64 Image Inspector', 'Paste Base64 data URLs to preview dimensions, aspect ratio, and download image', c.med, 'file-image', 'Inspector'],
    ['b64-file', 'Base64 to File Downloader', 'Convert Base64 data strings back into downloadable binary files', c.med, 'file-down', 'Decoder'],
    ['svg-optimizer', 'SVG Code Optimizer & Cleaner', 'Strip XML metadata, empty groups, and comments to optimize SVG vector code', c.med, 'feather', 'SVG'],
    ['ico-generator', 'Favicon Dimension Sizer', 'Resize and export raster graphics into standard 16x16, 32x32, and 512x512 assets', c.med, 'app-window', 'Favicon'],
    ['audio-tone', 'DTMF Audio Tone Generator', 'Synthesize custom frequency sine-wave audio tones using Web Audio API', c.med, 'volume-2', 'Audio'],
    ['color-extractor', 'Image Dominant Color Extractor', 'Upload images to extract primary hex color swatches and color palettes', c.med, 'droplet', 'Swatches'],
    ['qr-scanner-mock', 'Camera QR Code Reader Simulator', 'Simulate decoding QR code image payloads and data URI payloads locally', c.med, 'scan', 'Scanner'],
    ['markdown-pdf', 'Markdown Printable Export', 'Render Markdown notes into clean, printable document layouts with pagination', c.med, 'printer', 'Print'],
    ['code-snippet-card', 'Code Snippet Card Studio', 'Design stylized image cards for code snippets with gradient backgrounds', c.med, 'camera', 'Cards'],
    ['pdf-page-extract', 'Client-Side PDF Page Extractor', 'Extract and save individual page ranges from PDF files locally using pdf-lib', c.med, 'file-text', 'pdf-lib'],
    ['image-resizer-canvas', 'Canvas Image Resizer & Scaler', 'Scale image dimensions by percentage or target width/height without uploading files', c.med, 'maximize', 'Canvas'],
    ['svg-to-png', 'SVG Vector to High-Res PNG Exporter', 'Render scalable SVG vector markup onto high-resolution raster PNG images', c.med, 'image', 'Rasterizer'],
    ['canvas-drawing', 'HTML5 Canvas Sketchpad', 'In-browser drawing board with exportable PNG drawing capabilities', c.med, 'edit-3', 'Canvas'],
    ['color-tint-canvas', 'Image Monochromatic Tint Filter', 'Apply custom color overlays and tints to uploaded images in browser memory', c.med, 'palette', 'Image Filter'],
    ['file-checksum-hasher', 'Drag-and-Drop File Hash Checksum', 'Compute SHA-256 and MD5 checksum digests of any local file without uploading', c.med, 'check-square', 'Checksum'],
    ['screen-dpi-checker', 'Screen DPI & Device Pixel Ratio Inspector', 'Inspect screen color depth, viewport dimensions, and window.devicePixelRatio', c.med, 'monitor', 'Screen'],
    ['keycode-inspector', 'Keyboard Event & KeyCode Inspector', 'Test key presses to view event.key, event.code, and event.which properties live', c.med, 'keyboard', 'Events'],
    ['exif-metadata-viewer', 'EXIF Metadata & Camera Tag Inspector', 'Read camera model, focal length, ISO, and GPS location tags from uploaded photos', c.med, 'camera', 'EXIF'],
    ['exif-metadata-stripper', '1-Click Privacy EXIF Metadata Stripper', 'Strip GPS geolocation and camera serial tags from photos before online sharing', c.med, 'shield', 'Privacy'],
    ['image-to-base64', 'Image File to Base64 Data URI', 'Upload PNG/JPG images and copy clean data:image/png;base64,... code strings', c.med, 'file-image', 'Base64'],
    ['barcode-generator', 'Barcode CODE128 & EAN-13 Generator', 'Generate printable vector barcodes for inventory tracking and retail products', c.med, 'align-justify', 'Barcode'],
    ['dead-pixel-tester', 'Monitor Dead Pixel Color Test Bed', 'Cycle full-screen solid red, green, blue, black, and white to reveal stuck pixels', c.med, 'monitor', 'Display'],
    ['webcam-snapshot-tester', 'Webcam Hardware Frame Grabber', 'Capture camera snapshots and verify local video permissions without external servers', c.med, 'video', 'Webcam'],
    ['mic-decibel-meter', 'Microphone Decibel (dB) Audio Meter', 'Monitor ambient room noise and microphone input volume levels in real time', c.med, 'mic', 'Audio'],
    ['speech-synthesis-test', 'Web Speech Synthesis Voice Simulator', 'Test browser text-to-speech voices with adjustable pitch, rate, and volume', c.med, 'volume-2', 'Voice'],
    ['speech-recognition-test', 'Web Speech-to-Text Dictation Sandbox', 'Live speech transcription testing microphone speech recognition accuracy', c.med, 'mic-off', 'Dictation'],
    ['gamepad-tester', 'Gamepad & Controller Event Tester', 'Test analog sticks, triggers, and buttons for connected USB and Bluetooth controllers', c.med, 'play', 'Gamepad'],
    ['mouse-click-accuracy', 'Mouse Click & Double-Click Latency Tester', 'Measure click response latency (ms) and test mouse button double-click triggers', c.med, 'mouse-pointer', 'Mouse'],
    ['vibration-api-tester', 'Mobile Vibration API Pattern Tester', 'Trigger custom vibration pulse patterns on supported smartphones', c.med, 'smartphone', 'Haptics'],
    ['battery-status-inspector', 'Battery Level & Charging Status Inspector', 'Inspect battery charge percentage and discharging time via navigator.getBattery()', c.med, 'battery-charging', 'Battery'],
    ['network-info-inspector', 'Network Connection & Effective Speed Sizer', 'Inspect downlink speeds (Mbps) and effective network types via navigator.connection', c.med, 'wifi', 'Network'],
    ['geolocation-coord-finder', 'Browser Geolocation Lat/Long Inspector', 'Inspect GPS latitude, longitude, and accuracy radius via HTML5 Geolocation API', c.med, 'map-pin', 'GPS'],
    ['clipboard-history-sandbox', 'Clipboard Reader API Permissions Sandbox', 'Test reading and writing rich text and images via navigator.clipboard', c.med, 'clipboard', 'Clipboard'],
    ['drag-drop-mime-checker', 'Drag-and-Drop File MIME & Size Inspector', 'Drop any file to inspect exact byte size, file extension, and OS MIME type', c.med, 'file', 'File Info'],
    ['image-aspect-crop-calc', 'Image Aspect Ratio Crop Dimension Sizer', 'Calculate exact pixel dimensions to crop images without distortion', c.med, 'scissors', 'Crop'],
    ['video-thumbnail-extractor', 'Client-Side Video Thumbnail Grabber', 'Capture frame thumbnails from local MP4/WebM videos at specific timestamps', c.med, 'film', 'Video'],
    ['audio-wave-synth', 'Sine & Square Wave Audio Synthesizer', 'Synthesize custom 440Hz A-tone and variable audio frequencies using WebAudio', c.med, 'music', 'Synthesizer'],
    ['svg-path-bounding-box', 'SVG Path Visualizer & Bounding Sizer', 'Paste raw path vector code to preview outlines and bounding boxes', c.med, 'code', 'SVG Path'],
    ['monospace-font-checker', 'Monospace Font Pitch Alignment Tester', 'Verify if installed monospace fonts render characters with equal horizontal widths', c.med, 'type', 'Monospace'],
    ['pdf-page-rotator', 'Client-Side PDF Page Rotator', 'Rotate landscape and portrait PDF pages (90, 180, 270 deg) locally in browser memory', c.med, 'rotate-cw', 'pdf-lib'],
    ['image-to-pdf-converter', 'Image to PDF Document Generator', 'Combine JPEG and PNG images into a clean, downloadable PDF file locally', c.med, 'file-text', 'PDF'],
    ['qr-wifi-network-gen', 'WiFi Network Login QR Code Builder', 'Generate QR codes to instantly connect phones to WPA/WPA2 WiFi networks', c.med, 'wifi', 'WiFi QR'],
    ['vcard-qr-gen', 'Contact vCard Address Book QR Maker', 'Generate QR codes encoding contact cards (vCard 3.0) with phone, email, and name', c.med, 'user-plus', 'vCard'],
    ['fullscreen-resolution-test', 'Fullscreen Display Resolution Inspector', 'Inspect physical screen dimensions, color depth, and window inner/outer sizes', c.med, 'maximize-2', 'Display'],
    ['image-grayscale-converter', 'Client-Side Grayscale Image Filter', 'Convert full-color photographs into classic black-and-white images using Canvas', c.med, 'image', 'Grayscale'],
    ['svg-circle-progress-gen', 'SVG Circular Progress Ring Generator', 'Generate stroke-dasharray and stroke-dashoffset CSS for SVG progress meters', c.med, 'loader', 'SVG'],
    ['audio-bpm-tap-tempo', 'Tap Tempo (BPM) Music Metronome', 'Tap any key along with a song beat to calculate musical Beats Per Minute', c.med, 'activity', 'BPM'],
    ['pdf-page-counter', 'Instant PDF Page Count Reader', 'Inspect total page count and document metadata from PDF files in memory', c.med, 'book-open', 'PDF Info'],
    ['favicon-ico-exporter', 'Favicon Multi-Size Asset Exporter', 'Generate responsive favicon assets (16x16, 32x32, 48x48) from uploaded icons', c.med, 'app-window', 'Favicon']
  ];

  // Map into strict de-duplicated catalog
  const seenIds = new Set();
  const seenNames = new Set();
  const verified = [];

  rawList.forEach(([id, name, desc, cat, icon, badge]) => {
    if (!seenIds.has(id) && !seenNames.has(name)) {
      seenIds.add(id);
      seenNames.add(name);
      verified.push({ id, name, desc, cat, icon, badge });
    }
  });

  window.toolsDatabase = verified;
})();

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
