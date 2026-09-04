/* js/tools.js - Exact 500 Real Utilities (10 Categories × 50 Tools) */

const toolsDatabase = [
  // ============================================================================
  // 1. AI, LLM & PROMPT ENGINEERING (Tools 1 to 50)
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
  { id: 'cosine-similarity', name: 'Vector Cosine Similarity Calculator', desc: 'Calculate the mathematical cosine distance between two floating-point vectors', cat: 'ai', icon: 'maximize-2', badge: 'Math' },
  { id: 'claude-xml-builder', name: 'Anthropic Claude XML Tag Formatter', desc: 'Format prompt context with <context>, <instructions>, and <examples> XML tags', cat: 'ai', icon: 'code', badge: 'Claude' },
  { id: 'bpe-tokenizer-sim', name: 'BPE Byte-Pair Tokenizer Visualizer', desc: 'Simulate subword byte-pair token splits and boundaries on pasted strings', cat: 'ai', icon: 'scissors', badge: 'Tokens' },
  { id: 'llama-prompt-builder', name: 'Llama 3 Instruct Header Formatter', desc: 'Wrap raw inputs in <|start_header_id|> and <|end_header_id|> header tokens', cat: 'ai', icon: 'terminal', badge: 'Llama 3' },
  { id: 'negative-prompt-gen', name: 'Diffusion Negative Prompt Formatter', desc: 'Format quality-enhancing negative prompts for Midjourney and Stable Diffusion', cat: 'ai', icon: 'ban', badge: 'Diffusion' },
  { id: 'rag-rerank-scorer', name: 'RAG Re-ranking Score Normalizer', desc: 'Normalize Cross-Encoder and BM25 relevance scores to 0-1 probability ranges', cat: 'ai', icon: 'bar-chart', badge: 'Rerank' },
  { id: 'json-function-gen', name: 'OpenAI Function Call Schema Builder', desc: 'Build JSON schemas with strict property types for OpenAI tools integration', cat: 'ai', icon: 'file-json', badge: 'Functions' },
  { id: 'guardrail-regex', name: 'Prompt Injection Pattern Matcher', desc: 'Detect ignore previous instructions and jailbreak patterns with regex', cat: 'ai', icon: 'shield-check', badge: 'Guardrails' },
  { id: 'prompt-diff-tester', name: 'Prompt Version A/B Diff Inspector', desc: 'Visually compare character additions and semantic changes between prompt versions', cat: 'ai', icon: 'git-compare', badge: 'A/B Test' },
  { id: 'multimodal-token-calc', name: 'Vision Model Image Token Calculator', desc: 'Calculate token weights for images based on resolution tiles and patch grids', cat: 'ai', icon: 'image', badge: 'Vision' },
  { id: 'speech-token-calc', name: 'Audio Speech Token & Duration Sizer', desc: 'Estimate Whisper token consumption and API transcription cost per audio minute', cat: 'ai', icon: 'mic', badge: 'Whisper' },
  { id: 'system-prompt-compress', name: 'System Prompt Lexical Compressor', desc: 'Remove redundant adverbs and articles to reduce prompt token footprint', cat: 'ai', icon: 'minimize-2', badge: 'Optimizer' },
  { id: 'ai-persona-builder', name: 'Agent Persona Definition Formatter', desc: 'Structure agent role, constraints, tone, and knowledge boundaries into templates', cat: 'ai', icon: 'user', badge: 'Agents' },
  { id: 'rag-triplet-builder', name: 'Knowledge Graph Triplet Extractor', desc: 'Format subject-predicate-object semantic triplets for graph vector stores', cat: 'ai', icon: 'share-2', badge: 'Graph RAG' },
  { id: 'synthetic-qa-gen', name: 'Synthetic Q&A Dataset Builder', desc: 'Structure multi-turn conversational evaluation pairs for benchmark testing', cat: 'ai', icon: 'help-circle', badge: 'Eval' },
  { id: 'groundedness-checker', name: 'Context Groundedness Citation Checker', desc: 'Check whether assistant claims match verifiable sentence quotes in retrieved text', cat: 'ai', icon: 'check-square', badge: 'Citation' },
  { id: 'llm-latency-budget', name: 'TTFT & Streaming Latency Calculator', desc: 'Calculate Time-To-First-Token (TTFT) and token generation speed per second', cat: 'ai', icon: 'activity', badge: 'Latency' },
  { id: 'prompt-variable-clean', name: 'Unused Prompt Variable Detector', desc: 'Highlight declared {{variables}} in prompt templates that lack input bindings', cat: 'ai', icon: 'alert-circle', badge: 'Templates' },
  { id: 'tool-call-log-parser', name: 'LLM Tool Execution Log Parser', desc: 'Extract and format nested JSON arguments and tool call outputs from agent logs', cat: 'ai', icon: 'file-text', badge: 'Debugging' },
  { id: 'prefix-caching-calc', name: 'KV Cache Prefix Savings Calculator', desc: 'Calculate discount savings on cached prompt tokens for Anthropic and OpenAI', cat: 'ai', icon: 'database', badge: 'Cache' },
  { id: 'context-window-fit', name: 'Context Window Overflow Verifier', desc: 'Check if system prompt + retrieved RAG docs + history fit safe context boundaries', cat: 'ai', icon: 'box', badge: 'Limits' },
  { id: 'agent-scratchpad', name: 'ReAct Scratchpad Log Formatter', desc: 'Format Thought, Action, Action Input, and Observation logs for ReAct agents', cat: 'ai', icon: 'book', badge: 'ReAct' },
  { id: 'pydantic-ai-gen', name: 'Pydantic Output Parser Generator', desc: 'Generate typed schema models for LangChain and LlamaIndex structured outputs', cat: 'ai', icon: 'code-2', badge: 'LangChain' },
  { id: 'prompt-deduplicator', name: 'Sentence De-duplication Cleaner', desc: 'Remove repetitive instructions from concatenated multi-agent prompts', cat: 'ai', icon: 'list-filter', badge: 'Cleaner' },
  { id: 'embedding-norm-calc', name: 'L2 Euclidean Vector Normalizer', desc: 'Calculate vector magnitude and normalize floats to unit length ($||v||=1$)', cat: 'ai', icon: 'trending-up', badge: 'Vector' },
  { id: 'json-markdown-strip', name: 'Markdown Code Block JSON Extractor', desc: 'Strip leading ```json and trailing ``` markers from raw LLM responses', cat: 'ai', icon: 'code', badge: 'JSON' },
  { id: 'hallucination-word-count', name: 'Response Density Word Analyzer', desc: 'Calculate lexical richness and unique token ratio in LLM generation samples', cat: 'ai', icon: 'bar-chart-2', badge: 'Metrics' },
  { id: 'gemini-safety-calc', name: 'Gemini Harm Category Thresholds', desc: 'Format safety rating filter thresholds for Google GenAI SDK calls', cat: 'ai', icon: 'shield', badge: 'Gemini' },
  { id: 'multiturn-history-trim', name: 'Chat History Sliding Window Trimmer', desc: 'Trim oldest conversation turns while preserving the foundational system prompt', cat: 'ai', icon: 'clock', badge: 'Chat' },
  { id: 'token-to-word-calc', name: 'BPE Token to Word Equivalence Sizer', desc: 'Convert between token counts and word/page lengths across 8 languages', cat: 'ai', icon: 'type', badge: 'Estimation' },

  // ============================================================================
  // 2. JSON & DATA CONVERSIONS (Tools 51 to 100)
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
  { id: 'bson-to-json', name: 'BSON ObjectId & Types Sanitizer', desc: 'Sanitize MongoDB $oid, $date, and $numberLong types into plain JSON', cat: 'data', icon: 'database', badge: 'MongoDB' },
  { id: 'json-key-case', name: 'JSON Key Case Transformer', desc: 'Recursively convert object keys between camelCase, snake_case, and kebab-case', cat: 'data', icon: 'type', badge: 'Keys' },
  { id: 'csv-transpose', name: 'CSV Column & Row Transposer', desc: 'Invert spreadsheet matrix axes by swapping columns into rows and rows into columns', cat: 'data', icon: 'refresh-ccw', badge: 'Pivot' },
  { id: 'json-array-distinct', name: 'JSON Array Object Deduplicator', desc: 'Deduplicate arrays of JSON records by specific key fields or hashes', cat: 'data', icon: 'filter', badge: 'Dedupe' },
  { id: 'json-mask-pii', name: 'JSON Sensitive PII Redactor', desc: 'Mask credit cards, phone numbers, and emails inside nested JSON logs', cat: 'data', icon: 'eye-off', badge: 'Privacy' },
  { id: 'xml-to-yaml', name: 'XML to YAML Configuration Converter', desc: 'Translate XML trees directly into indented YAML without intermediate files', cat: 'data', icon: 'file-text', badge: 'XML/YAML' },
  { id: 'csv-delimiter-swap', name: 'CSV Delimiter Transformer', desc: 'Convert CSV delimiters between commas, semicolons, tabs, and pipes (|)', cat: 'data', icon: 'columns', badge: 'Delimiter' },
  { id: 'json-filter-query', name: 'JSON Predicate Array Filter', desc: 'Filter arrays of JSON objects by key conditions (age > 21, status == active)', cat: 'data', icon: 'filter', badge: 'Filter' },
  { id: 'json-schema-to-mock', name: 'JSON Schema to Mock Generator', desc: 'Generate conforming sample JSON instances based on JSON Schema definitions', cat: 'data', icon: 'file-plus', badge: 'Mock' },
  { id: 'url-form-to-json', name: 'x-www-form-urlencoded to JSON', desc: 'Convert URL form body payloads (a=1&b=2) into JSON key-value objects', cat: 'data', icon: 'link', badge: 'Form Data' },
  { id: 'json-to-html-table', name: 'JSON Array to HTML Table Maker', desc: 'Convert arrays of records into copyable styled HTML <table> code', cat: 'data', icon: 'layout', badge: 'HTML' },
  { id: 'json-null-stripper', name: 'JSON Null & Empty Field Stripper', desc: 'Recursively prune null, undefined, and empty string properties from JSON', cat: 'data', icon: 'trash-2', badge: 'Prune' },
  { id: 'hex-dump-to-json', name: 'Hex Dump to Binary Byte Array', desc: 'Parse space-separated hex dumps (48 65 6c 6c 6f) into integer byte arrays', cat: 'data', icon: 'binary', badge: 'Hex' },
  { id: 'json-type-inference', name: 'JSON Schema Type Extractor', desc: 'Infer draft-07 JSON schemas from sample JSON payloads with enum detection', cat: 'data', icon: 'file-check', badge: 'Schema' },
  { id: 'json-merge-patch', name: 'RFC 7396 JSON Merge Patch Applier', desc: 'Apply RFC 7396 merge patch delta documents to target JSON data trees', cat: 'data', icon: 'git-merge', badge: 'RFC 7396' },

  // ============================================================================
  // 3. SECURITY & CRYPTOGRAPHY (Tools 101 to 150)
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
  { id: 'bcrypt-cost-calc', name: 'Bcrypt Cost Factor Latency Sizer', desc: 'Calculate server hash duration based on cost factor work exponents (10 to 14)', cat: 'security', icon: 'cpu', badge: 'Bcrypt' },
  { id: 'pem-cert-decoder', name: 'X.509 Certificate PEM Inspector', desc: 'Decode base64 PEM certificates to view Issuer, Subject, Validity dates, and Serial', cat: 'security', icon: 'file-check', badge: 'X.509' },
  { id: 'rsa-keypair-gen', name: 'RSA-OAEP Keypair Generator', desc: 'Generate 2048-bit and 4096-bit public and private keys via WebCrypto API', cat: 'security', icon: 'key', badge: 'WebCrypto' },
  { id: 'sha3-256-hasher', name: 'SHA3-256 (Keccak) Message Hasher', desc: 'Calculate sponge-construction SHA-3 cryptographic digests in browser memory', cat: 'security', icon: 'hash', badge: 'SHA-3' },
  { id: 'ripemd160-hasher', name: 'RIPEMD-160 Cryptographic Hasher', desc: 'Calculate 160-bit RIPEMD hash digests for Bitcoin address verification', cat: 'security', icon: 'shield', badge: 'RIPEMD' },
  { id: 'password-strength', name: 'Password Common Dictionary Fuzzer', desc: 'Evaluate passwords against the top 10,000 common passwords and pattern leaks', cat: 'security', icon: 'alert-triangle', badge: 'Strength' },
  { id: 'argon2-param-calc', name: 'Argon2id Memory Cost Sizer', desc: 'Calculate time, memory (KiB), and parallelism parameters for Argon2 password hashing', cat: 'security', icon: 'sliders', badge: 'Argon2' },
  { id: 'file-hash-verify', name: 'File Checksum Integrity Matcher', desc: 'Drag-and-drop a file and compare its hash against expected release signatures', cat: 'security', icon: 'check-circle', badge: 'Verify' },
  { id: 'base64url-codec', name: 'Base64URL Safe Converter', desc: 'Convert standard Base64 to URL-safe Base64 by substituting + with - and / with _', cat: 'security', icon: 'link', badge: 'RFC 7515' },
  { id: 'xor-cipher-tool', name: 'XOR Stream Cipher Sandbox', desc: 'Perform bitwise XOR encryption and decryption on text strings with repeating keys', cat: 'security', icon: 'refresh-ccw', badge: 'XOR' },
  { id: 'csr-config-builder', name: 'OpenSSL CSR Config Generator', desc: 'Generate openssl.cnf configurations with Subject Alternative Names (SAN)', cat: 'security', icon: 'file-text', badge: 'OpenSSL' },
  { id: 'public-key-fingerprint', name: 'Public Key SHA-256 Fingerprinter', desc: 'Derive base64 and hex colon-separated fingerprints from raw public keys', cat: 'security', icon: 'fingerprint', badge: 'Key ID' },
  { id: 'jwt-claim-builder', name: 'JWT Payload Claims Assembler', desc: 'Assemble exp, iat, iss, and custom claims into formatted JWT payloads', cat: 'security', icon: 'file-plus', badge: 'JWT Gen' },
  { id: 'ssl-expiry-countdown', name: 'SSL Certificate Expiry Calculator', desc: 'Calculate exact days remaining before SSL/TLS certificates require renewal', cat: 'security', icon: 'calendar', badge: 'SSL' },
  { id: 'subtle-crypto-benchmark', name: 'WebCrypto Hasher Benchmarker', desc: 'Benchmark hashing throughput (MB/sec) on your browser hardware', cat: 'security', icon: 'zap', badge: 'Benchmark' },
  { id: 'cookie-header-fuzzer', name: 'Session Token Masker & Fuzzer', desc: 'Inspect session tokens to check length, character set randomness, and entropy', cat: 'security', icon: 'shield', badge: 'Session' },
  { id: 'pgp-message-formatter', name: 'PGP Armored Message Sizer', desc: 'Inspect PGP Armor headers, block types, and CRC checksum boundaries', cat: 'security', icon: 'mail', badge: 'PGP' },
  { id: 'html-script-sanitizer', name: 'XSS String Payload Neutralizer', desc: 'Neutralize JavaScript event handlers and script injection strings into safe literals', cat: 'security', icon: 'shield-alert', badge: 'Anti-XSS' },
  { id: 'ssh-keygen-command', name: 'ssh-keygen Command Generator', desc: 'Generate commands for Ed25519 and RSA keys with custom comments and rounds', cat: 'security', icon: 'terminal', badge: 'SSH Gen' },
  { id: 'content-disposition-safe', name: 'Safe Filename Content-Disposition', desc: 'Sanitize download filenames to prevent directory traversal and header injection', cat: 'security', icon: 'download', badge: 'Headers' },

  // ============================================================================
  // 4. WEB, APIS & NETWORKING (Tools 151 to 200)
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
  { id: 'websocket-url-validator', name: 'WebSocket URL (ws/wss) Validator', desc: 'Validate WebSocket URLs and test query parameters and protocols', cat: 'web', icon: 'radio', badge: 'WebSocket' },
  { id: 'accept-header-parser', name: 'Accept Header Quality Weight Sorter', desc: 'Parse Accept header priorities (text/html;q=0.9, application/json;q=0.8)', cat: 'web', icon: 'list', badge: 'Accept' },
  { id: 'referrer-policy-gen', name: 'Referrer-Policy Header Builder', desc: 'Configure strict-origin-when-cross-origin and no-referrer header directives', cat: 'web', icon: 'shield', badge: 'Privacy' },
  { id: 'permissions-policy-builder', name: 'Permissions-Policy Header Generator', desc: 'Control browser hardware permissions (camera, microphone, geolocation) via headers', cat: 'web', icon: 'lock', badge: 'Permissions' },
  { id: 'dns-record-formatter', name: 'DNS Zone Record Builder', desc: 'Format standard A, AAAA, CNAME, MX, TXT, and PTR records for BIND zone files', cat: 'web', icon: 'server', badge: 'DNS' },
  { id: 'spf-record-validator', name: 'SPF Email Record Builder', desc: 'Build and validate v=spf1 records with ip4, include, and ~all mechanisms', cat: 'web', icon: 'mail', badge: 'SPF' },
  { id: 'dmarc-policy-maker', name: 'DMARC Email Policy Record Generator', desc: 'Configure v=DMARC1 records with rua reporting and p=reject policy enforcement', cat: 'web', icon: 'shield-check', badge: 'DMARC' },
  { id: 'pagination-header-gen', name: 'RFC 5988 Link Header Pagination Builder', desc: 'Generate Link: <url>; rel="next", rel="last" HTTP headers for REST APIs', cat: 'web', icon: 'arrow-right', badge: 'RFC 5988' },
  { id: 'webhook-verifier', name: 'Webhook Signature Header Formatter', desc: 'Generate standard X-Hub-Signature-256 headers from webhook payload bodies', cat: 'web', icon: 'send', badge: 'Webhook' },
  { id: 'graphql-url-parser', name: 'GraphQL Query URL String Extractor', desc: 'Extract clean query and variables from encoded GET request query strings', cat: 'web', icon: 'share-2', badge: 'GraphQL' },
  { id: 'oauth-url-builder', name: 'OAuth 2.0 Authorization URL Builder', desc: 'Assemble client_id, redirect_uri, scope, and response_type into login URLs', cat: 'web', icon: 'key', badge: 'OAuth' },
  { id: 'ip-lookup-simulator', name: 'IPv4/IPv6 IP Address Classifier', desc: 'Check if an IP address belongs to Private, Loopback, Link-Local, or Public ranges', cat: 'web', icon: 'network', badge: 'IP Class' },
  { id: 'curl-to-csharp', name: 'cURL to C# RestSharp / HttpClient', desc: 'Convert raw cURL terminal commands into modern C# RestClient code', cat: 'web', icon: 'code-2', badge: 'C#' },
  { id: 'curl-to-rust', name: 'cURL to Rust reqwest Code Converter', desc: 'Generate asynchronous Rust reqwest::Client request blocks from cURL strings', cat: 'web', icon: 'cpu', badge: 'Rust' },
  { id: 'http-method-matrix', name: 'HTTP Method Idempotency Matrix', desc: 'Reference RFC 9110 safety, idempotency, and caching matrix across HTTP verbs', cat: 'web', icon: 'help-circle', badge: 'RFC 9110' },
  { id: 'cookie-header-parser', name: 'Cookie HTTP Header String Parser', desc: 'Parse Cookie: a=1; b=2; session=xyz header strings into structured JSON', cat: 'web', icon: 'file-text', badge: 'Cookies' },
  { id: 'set-cookie-builder', name: 'Set-Cookie Header Directive Builder', desc: 'Generate Set-Cookie headers with Secure, HttpOnly, SameSite=Strict, and Max-Age', cat: 'web', icon: 'shield-check', badge: 'Cookies' },
  { id: 'cors-preflight-eval', name: 'CORS Preflight (OPTIONS) Tester', desc: 'Simulate Access-Control-Request-Method and verify preflight responses', cat: 'web', icon: 'globe', badge: 'CORS' },
  { id: 'security-txt-gen', name: 'security.txt Vulnerability File Maker', desc: 'Generate RFC 9116 security.txt files with Contact, Encryption, and Canonical tags', cat: 'web', icon: 'shield', badge: 'RFC 9116' },
  { id: 'ads-txt-validator', name: 'Google ads.txt / app-ads.txt Generator', desc: 'Format authorized digital sellers listings (google.com, pub-id, DIRECT, f08c47fec0942fa0)', cat: 'web', icon: 'dollar-sign', badge: 'ads.txt' },

  // ============================================================================
  // 5. CSS & UI DESIGN (Tools 201 to 250)
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
  { id: 'css-animation-keyframes', name: 'CSS Keyframe Animation Studio', desc: 'Build 0% to 100% keyframe transitions with pulse, bounce, and fade presets', cat: 'design', icon: 'play', badge: 'Keyframes' },
  { id: 'cubic-bezier-tester', name: 'Cubic-Bezier Easing Inspector', desc: 'Visual cubic-bezier(x1, y1, x2, y2) timing curve generator for smooth transitions', cat: 'design', icon: 'activity', badge: 'Easing' },
  { id: 'css-specificity-calc', name: 'CSS Selector Specificity Calculator', desc: 'Calculate (Inline, IDs, Classes, Elements) specificity scores for CSS rules', cat: 'design', icon: 'award', badge: 'Specificity' },
  { id: 'color-cmyk-converter', name: 'RGB & HEX to CMYK Print Converter', desc: 'Convert screen colors to Cyan, Magenta, Yellow, and Key/Black print values', cat: 'design', icon: 'printer', badge: 'CMYK' },
  { id: 'tailwind-hex-lookup', name: 'Tailwind CSS Color Palette Lookup', desc: 'Search official Tailwind CSS v3 & v4 hex colors by name (slate-800, indigo-600)', cat: 'design', icon: 'search', badge: 'Tailwind' },
  { id: 'css-var-scaffold', name: 'CSS Custom Property (:root) Scaffolder', desc: 'Generate CSS variable design tokens for typography, spacing, and colors', cat: 'design', icon: 'file-text', badge: 'Variables' },
  { id: 'font-pair-tester', name: 'Heading & Body Font Pair Tester', desc: 'Preview Google Fonts combinations side-by-side with adjustable scale ratios', cat: 'design', icon: 'type', badge: 'Typography' },
  { id: 'css-columns-builder', name: 'CSS Multi-Column Layout Maker', desc: 'Configure column-count, column-gap, and column-rule for print-style text columns', cat: 'design', icon: 'columns', badge: 'Columns' },
  { id: 'css-backdrop-filter', name: 'Backdrop Filter Blur & Saturate', desc: 'Generate iOS-style backdrop-filter blur backgrounds for navigation modals', cat: 'design', icon: 'sparkles', badge: 'Backdrop' },
  { id: 'golden-ratio-type', name: 'Golden Ratio Typography Scale Calculator', desc: 'Calculate modular typographic scales based on the 1.618 golden ratio multiplier', cat: 'design', icon: 'trending-up', badge: 'Scale' },
  { id: 'css-cursor-directory', name: 'CSS Cursor Property Directory', desc: 'Interactive preview of all CSS cursor states (pointer, grab, crosshair, not-allowed)', cat: 'design', icon: 'mouse-pointer', badge: 'Cursor' },
  { id: 'z-index-scale-manager', name: 'CSS z-index Elevation Scale Builder', desc: 'Map organized z-index scales (dropdown 1000, modal 2000, toast 3000)', cat: 'design', icon: 'layers', badge: 'z-index' },
  { id: 'css-ribbon-builder', name: 'Corner Badge & Ribbon CSS Generator', desc: 'Generate pure CSS corner banner ribbons for e-commerce product cards', cat: 'design', icon: 'bookmark', badge: 'Ribbon' },
  { id: 'color-blindness-sim', name: 'Color Blindness Accessibility Simulator', desc: 'Simulate Protanopia, Deuteranopia, and Tritanopia color blindness on hex colors', cat: 'design', icon: 'eye', badge: 'A11y' },
  { id: 'css-media-query-gen', name: 'Responsive Breakpoint Media Queries', desc: 'Generate standard media queries for Mobile (640px), Tablet (768px), and Laptop (1024px)', cat: 'design', icon: 'smartphone', badge: 'Responsive' },
  { id: 'css-calc-validator', name: 'CSS calc() Expression Evaluator', desc: 'Test and validate CSS calc(100% - 32px) expressions with mixed units', cat: 'design', icon: 'calculator', badge: 'calc()' },
  { id: 'web-safe-font-stacks', name: 'Web-Safe Font Stacks Directory', desc: 'Copy fallback font stacks for Arial, Helvetica, Georgia, Times, and Courier', cat: 'design', icon: 'type', badge: 'Fonts' },
  { id: 'css-mask-generator', name: 'CSS Mask Image & Clipping Studio', desc: 'Generate CSS mask-image gradient fade-out styles for scrollable overflow boxes', cat: 'design', icon: 'eye-off', badge: 'Masking' },
  { id: 'svg-icon-color-tint', name: 'CSS Filter Hex to Filter Converter', desc: 'Convert target hex colors into exact CSS filter: invert(...) approximations', cat: 'design', icon: 'filter', badge: 'Filter Gen' },
  { id: 'button-hover-builder', name: 'Interactive Button Hover Micro-Transitions', desc: 'Design scale, translateY, and shadow elevation hover micro-interactions', cat: 'design', icon: 'square', badge: 'Buttons' },
  { id: 'css-perspective-3d', name: 'CSS 3D Transform & Perspective Studio', desc: 'Visually rotate cards along rotateX, rotateY, and perspective planes', cat: 'design', icon: 'box', badge: '3D' },
  { id: 'screen-mockup-frame', name: 'Browser Window UI Mockup Frame Maker', desc: 'Wrap screenshot images in dark-mode browser chrome window headers', cat: 'design', icon: 'layout', badge: 'Mockup' },
  { id: 'css-reset-scaffold', name: 'Modern CSS Reset Snippet Generator', desc: 'Generate clean CSS resets (box-sizing, margin 0, smooth scrolling defaults)', cat: 'design', icon: 'file-text', badge: 'Reset' },
  { id: 'color-name-finder', name: 'Hex Color Nearest Named Color Finder', desc: 'Match any raw hex color code to its nearest official CSS named color name', cat: 'design', icon: 'tag', badge: 'Color Names' },
  { id: 'css-focus-visible-gen', name: 'Accessible Focus Ring Styler', desc: 'Generate high-contrast :focus-visible outlines compliant with accessibility standards', cat: 'design', icon: 'check-square', badge: 'A11y Focus' },
  { id: 'badge-pill-builder', name: 'UI Badge & Pill Element Generator', desc: 'Design badge pills with status colors, pulse dots, and copyable Tailwind code', cat: 'design', icon: 'tag', badge: 'Badges' },
  { id: 'css-table-styler', name: 'Zebra Stripe Data Table Styler', desc: 'Generate alternating row colors and hover state CSS for HTML data tables', cat: 'design', icon: 'grid', badge: 'Tables' },
  { id: 'glassmorphism-card', name: 'Frosted Glass Modal Card Studio', desc: 'Design layered translucent modal cards with border gradients and blurs', cat: 'design', icon: 'sparkles', badge: 'Modal UI' },
  { id: 'css-tooltip-maker', name: 'Pure CSS Data-Tooltip Generator', desc: 'Generate hover tooltips using [data-tooltip]::before and ::after pseudo-elements', cat: 'design', icon: 'message-circle', badge: 'Tooltips' },
  { id: 'letter-spacing-calc', name: 'Tracking & Letter Spacing Converter', desc: 'Convert Photoshop/Figma tracking values (-20, 50) into CSS em/px letter-spacing', cat: 'design', icon: 'type', badge: 'Spacing' },

  // ============================================================================
  // 6. DEVOPS, CLOUD & LINUX (Tools 251 to 300)
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
  { id: 'iam-assume-role-gen', name: 'AWS IAM Trust Policy Generator', desc: 'Generate AssumeRolePolicyDocument JSON for EC2, Lambda, and ECS task roles', cat: 'devops', icon: 'key', badge: 'AWS IAM' },
  { id: 'prometheus-alert-gen', name: 'Prometheus AlertRule YAML Builder', desc: 'Format alert rules with for: durations, severity labels, and PromQL threshold expressions', cat: 'devops', icon: 'alert-triangle', badge: 'Prometheus' },
  { id: 'terraform-var-gen', name: 'Terraform Variable Block Scaffolder', desc: 'Generate variable "name" { type = string, default = ... } blocks from JSON keys', cat: 'devops', icon: 'code', badge: 'Terraform' },
  { id: 'procfile-generator', name: 'PaaS Procfile Declarator', desc: 'Generate web:, worker:, and release: process declarations for Heroku and Railway', cat: 'devops', icon: 'file', badge: 'Procfile' },
  { id: 'rsync-flag-assembler', name: 'Rsync CLI Command Flag Builder', desc: 'Assemble safe rsync commands with -avzP, --exclude, and --delete dry-run flags', cat: 'devops', icon: 'refresh-cw', badge: 'Rsync' },
  { id: 'syslog-facility-calc', name: 'Syslog RFC 5424 Priority Calculator', desc: 'Calculate Priority = (Facility * 8) + Severity values for syslog log forwarding', cat: 'devops', icon: 'list', badge: 'Syslog' },
  { id: 'fail2ban-regex-gen', name: 'Fail2ban Filter failregex Generator', desc: 'Create regex filter patterns to match failed SSH and authentication attempts in logs', cat: 'devops', icon: 'shield-alert', badge: 'Fail2ban' },
  { id: 'ansible-inventory-conv', name: 'Ansible Inventory INI to YAML', desc: 'Convert legacy INI-formatted Ansible inventory host files into structured YAML', cat: 'devops', icon: 'file-text', badge: 'Ansible' },
  { id: 'linux-load-avg-calc', name: 'Linux CPU Core Load Capacity Sizer', desc: 'Calculate percentage CPU saturation based on 1-min load average and total cores', cat: 'devops', icon: 'cpu', badge: 'Linux Load' },
  { id: 'coreos-cloud-init-gen', name: 'Cloud-Init YAML User-Data Builder', desc: 'Configure SSH keys, user accounts, and initial shell runcmds for cloud VM boots', cat: 'devops', icon: 'server', badge: 'Cloud-Init' },
  { id: 'docker-prune-cmd-gen', name: 'Docker Cleanup Command Builder', desc: 'Assemble selective docker system prune commands for dangling images and volumes', cat: 'devops', icon: 'trash-2', badge: 'Docker' },
  { id: 'traefik-router-gen', name: 'Traefik v2/v3 Dynamic Config Builder', desc: 'Generate Traefik HTTP routers and middlewares for Docker container labels', cat: 'devops', icon: 'git-merge', badge: 'Traefik' },
  { id: 'dnsmasq-conf-builder', name: 'Dnsmasq Local Resolver Config Maker', desc: 'Build address=/domain/127.0.0.1 redirect rules for local DNS development', cat: 'devops', icon: 'network', badge: 'Dnsmasq' },
  { id: 'squid-proxy-acl-gen', name: 'Squid Proxy ACL Rule Generator', desc: 'Format acl and http_access allow/deny rule blocks for web proxy gateways', cat: 'devops', icon: 'shield', badge: 'Squid' },
  { id: 'logrotate-conf-maker', name: 'Linux logrotate.d File Builder', desc: 'Configure weekly rotation, compress, delaycompress, and maxsize log policies', cat: 'devops', icon: 'rotate-cw', badge: 'Logrotate' },
  { id: 'ufw-firewall-cmd-gen', name: 'Ubuntu UFW Firewall Rule Builder', desc: 'Generate ufw allow from <ip> to any port <port> firewall rules', cat: 'devops', icon: 'shield-check', badge: 'UFW' },
  { id: 'iptables-rule-builder', name: 'Linux iptables NAT & Port Forwarder', desc: 'Generate iptables -t nat -A PREROUTING port forwarding and masquerade rules', cat: 'devops', icon: 'terminal', badge: 'iptables' },
  { id: 'wireguard-peer-conf', name: 'WireGuard VPN Peer Config Builder', desc: 'Build [Interface] and [Peer] ini configurations with private/public key pairs', cat: 'devops', icon: 'shield', badge: 'WireGuard' },
  { id: 'ip-vlan-tag-calc', name: '802.1Q VLAN Tag & ID Directory', desc: 'Check standard 12-bit VLAN ID ranges (1 to 4094) and priority code points', cat: 'devops', icon: 'tag', badge: 'VLAN' },
  { id: 'system-ram-budget', name: 'JVM / Node Memory Cap Sizer', desc: 'Calculate optimal -Xmx heap sizes and container cgroup memory boundaries', cat: 'devops', icon: 'cpu', badge: 'Memory' },
  { id: 'git-squash-helper', name: 'Git Interactive Rebase Command Helper', desc: 'Generate git rebase -i HEAD~N command sequences with squash and fixup hints', cat: 'devops', icon: 'git-merge', badge: 'Git' },
  { id: 'helm-chart-yaml-scaffold', name: 'Helm Chart.yaml Metadata Builder', desc: 'Build standardized Chart.yaml definitions with version, appVersion, and dependencies', cat: 'devops', icon: 'file-text', badge: 'Helm' },

  // ============================================================================
  // 7. CONTENT, TEXT & MARKDOWN (Tools 301 to 350)
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
  { id: 'diff-inline-checker', name: 'Inline Character-by-Character Diff', desc: 'Highlight micro text changes, typo fixes, and punctuation diffs inline', cat: 'text', icon: 'git-commit', badge: 'Diff' },
  { id: 'palindrome-checker', name: 'Palindrome Phrase & Sentence Verifier', desc: 'Check if alphanumeric character sequences read identically forwards and backwards', cat: 'text', icon: 'refresh-cw', badge: 'Palindrome' },
  { id: 'string-truncator', name: 'Word-Boundary Smart String Truncator', desc: 'Truncate paragraphs to max characters without chopping words in half', cat: 'text', icon: 'scissors', badge: 'Truncate' },
  { id: 'comma-to-newline', name: 'Comma to Newline & List Transposer', desc: 'Convert comma-delimited strings into vertical lists or newline lists to commas', cat: 'text', icon: 'list', badge: 'Delimit' },
  { id: 'extract-hex-colors', name: 'Extract Hex Color Codes from CSS', desc: 'Scan CSS and text blocks to extract unique 3, 6, and 8-digit #hex color codes', cat: 'text', icon: 'pipette', badge: 'Extract' },
  { id: 'nato-phonetic-gen', name: 'NATO Phonetic Alphabet Speller', desc: 'Convert text (Alpha, Bravo, Charlie) for clear spelling over voice phone calls', cat: 'text', icon: 'mic', badge: 'Phonetic' },
  { id: 'morse-code-codec', name: 'Morse Code Encoder & Decoder', desc: 'Translate text into dots and dashes (. ---) and decode Morse back into letters', cat: 'text', icon: 'radio', badge: 'Morse' },
  { id: 'bbcode-to-html', name: 'BBCode to HTML Markup Converter', desc: 'Convert forum BBCode tags ([b], [url], [quote]) into clean semantic HTML5', cat: 'text', icon: 'code', badge: 'BBCode' },
  { id: 'markdown-checklist-calc', name: 'Markdown Checklist Progress Tracker', desc: 'Calculate percentage completion from - [x] done and - [ ] todo markdown checkboxes', cat: 'text', icon: 'check-square', badge: 'Checklist' },
  { id: 'binary-to-text', name: 'Binary (01) to ASCII Text Converter', desc: 'Convert 8-bit space-separated binary byte streams into readable English text', cat: 'text', icon: 'binary', badge: 'Binary' },
  { id: 'text-to-binary', name: 'Text to 8-Bit Binary Representation', desc: 'Encode ASCII and UTF-8 strings into binary byte representations', cat: 'text', icon: 'binary', badge: 'Binary' },
  { id: 'leetspeak-generator', name: 'LeetSpeak (1337) Text Generator', desc: 'Transform standard text into hacker leetspeak with customizable letter substitutions', cat: 'text', icon: 'terminal', badge: '1337' },
  { id: 'upside-down-text', name: 'Upside-Down Unicode Text Flipper', desc: 'Flip text upside down using Unicode phonetic and mathematical turned characters', cat: 'text', icon: 'rotate-cw', badge: 'Unicode' },
  { id: 'zalgo-glitch-text', name: 'Zalgo Glitched Text Generator', desc: 'Add combining diacritical marks to text to produce spooky matrix glitch effects', cat: 'text', icon: 'zap', badge: 'Zalgo' },
  { id: 'speaking-time-calc', name: 'Public Speaking Time Estimator', desc: 'Estimate verbal presentation time based on standard 130-150 words per minute rates', cat: 'text', icon: 'volume-2', badge: 'Speech' },
  { id: 'char-occurrence-calc', name: 'Character Frequency Heatmap Analyzer', desc: 'Calculate individual character occurrences and percentage density in a document', cat: 'text', icon: 'bar-chart', badge: 'Frequency' },
  { id: 'remove-accent-marks', name: 'Diacritic & Accent Mark Stripper', desc: 'Strip accents and normalize characters (é -> e, ü -> u, ñ -> n) for search indexing', cat: 'text', icon: 'type', badge: 'Normalize' },
  { id: 'column-text-aligner', name: 'Monospace Table Text Column Aligner', desc: 'Align uneven plain text columns by padding spaces to match maximum column width', cat: 'text', icon: 'align-justify', badge: 'Align' },
  { id: 'c-string-literal-gen', name: 'C/C++ Multi-Line String Literal Maker', desc: 'Format raw multi-line strings into quoted escaped C-string literals with \\n', cat: 'text', icon: 'code', badge: 'C/C++' },
  { id: 'tab-to-spaces-conv', name: 'Tabs to Spaces & Spaces to Tabs', desc: 'Convert between tab characters and 2-space or 4-space indentations consistently', cat: 'text', icon: 'sliders', badge: 'Indent' },
  { id: 'sentence-counter', name: 'Sentence & Average Sentence Length Sizer', desc: 'Count total sentences and calculate average words per sentence to improve clarity', cat: 'text', icon: 'book', badge: 'Sentences' },
  { id: 'text-scramble-fuzzer', name: 'Random Word Scrambler & Anonymizer', desc: 'Shuffle inner letters of words or substitute nouns with random filler for anonymization', cat: 'text', icon: 'shuffle', badge: 'Scramble' },
  { id: 'markdown-link-extractor', name: 'Markdown Link & Reference Extractor', desc: 'Extract [anchor text](url) pairings from markdown files into tabular lists', cat: 'text', icon: 'link', badge: 'Links' },
  { id: 'title-case-ap-style', name: 'AP & Chicago Style Headline Capitalizer', desc: 'Capitalize article headlines according to official AP Stylebook capitalization rules', cat: 'text', icon: 'type', badge: 'AP Style' },
  { id: 'repeated-words-finder', name: 'Consecutive Duplicate Word Detector', desc: 'Identify and highlight accidental repeated duplicate words ("the the", "in in")', cat: 'text', icon: 'alert-triangle', badge: 'Proofread' },
  { id: 'regex-replace-all', name: 'Client-Side RegEx Replace Studio', desc: 'Run global regex substitutions with capture group back-references ($1, $2)', cat: 'text', icon: 'search', badge: 'Replace' },
  { id: 'text-wrap-width', name: 'Hard Word Wrap at Column Width', desc: 'Hard-wrap paragraphs at 80 characters or custom widths for terminal and email readability', cat: 'text', icon: 'align-left', badge: 'Wrap' },
  { id: 'base64-text-wrap', name: 'Base64 76-Character MIME Line Wrapper', desc: 'Split long continuous Base64 text streams into standard 76-char RFC 2045 lines', cat: 'text', icon: 'align-justify', badge: 'MIME' },
  { id: 'text-mask-emails', name: 'Email Address Privacy Masker', desc: 'Mask email user handles (j***@example.com) for public display and GDPR compliance', cat: 'text', icon: 'eye-off', badge: 'GDPR' },
  { id: 'emoji-stripper', name: 'Unicode Emoji Character Stripper', desc: 'Strip all emojis and surrogate pair symbols from text to ensure ASCII compatibility', cat: 'text', icon: 'smile', badge: 'Clean' },

  // ============================================================================
  // 8. MATH, TIME & FINANCIAL (Tools 351 to 400)
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
  { id: 'rule-of-72-calc', name: 'Rule of 72 Doubling Time Calculator', desc: 'Estimate how many years it takes for an investment to double at a given interest rate', cat: 'math', icon: 'clock', badge: 'Rule of 72' },
  { id: 'simple-interest-calc', name: 'Simple Interest & Payoff Calculator', desc: 'Calculate basic non-compounding interest ($I = P \\times r \\times t$) on loans', cat: 'math', icon: 'dollar-sign', badge: 'Interest' },
  { id: 'tip-bill-splitter', name: 'Restaurant Tip & Group Bill Splitter', desc: 'Calculate tip percentages and split total restaurant checks evenly among party guests', cat: 'math', icon: 'users', badge: 'Bill Split' },
  { id: 'fraction-reducer', name: 'Fraction Simplifier & Reducer', desc: 'Simplify complex fractions to lowest terms and convert to decimal equivalents', cat: 'math', icon: 'divide', badge: 'Fractions' },
  { id: 'prime-factor-calc', name: 'Prime Number Factorization Calculator', desc: 'Test if an integer is prime and view its complete prime factor breakdown tree', cat: 'math', icon: 'hash', badge: 'Primes' },
  { id: 'quadratic-solver', name: 'Quadratic Equation ($ax^2+bx+c$) Solver', desc: 'Calculate real and complex roots for standard algebraic quadratic formulas', cat: 'math', icon: 'help-circle', badge: 'Algebra' },
  { id: 'statistics-mean-median', name: 'Mean, Median, Mode & Range Calculator', desc: 'Calculate central tendency statistics from comma-delimited numeric datasets', cat: 'math', icon: 'bar-chart-2', badge: 'Statistics' },
  { id: 'std-dev-calc', name: 'Standard Deviation & Variance Calculator', desc: 'Calculate population and sample variance ($s^2$) and standard deviation ($\\sigma$)', cat: 'math', icon: 'activity', badge: 'Variance' },
  { id: 'random-num-range', name: 'Cryptographic Random Integer Picker', desc: 'Generate uniform random numbers within custom min/max integer boundaries', cat: 'math', icon: 'shuffle', badge: 'Random' },
  { id: 'ratio-scaler-calc', name: 'Aspect Ratio & Proportion Scaler', desc: 'Solve proportional ratios ($A:B = C:D$) to scale dimensions maintaining proportions', cat: 'math', icon: 'maximize', badge: 'Ratios' },
  { id: 'bmi-calc-metric', name: 'Body Mass Index (BMI) Calculator', desc: 'Calculate BMI and healthy weight categories using metric or imperial inputs', cat: 'math', icon: 'heart', badge: 'BMI' },
  { id: 'bmr-calorie-calc', name: 'Basal Metabolic Rate (BMR) Calculator', desc: 'Calculate baseline daily caloric burn using the Mifflin-St Jeor formula', cat: 'math', icon: 'activity', badge: 'Calorie' },
  { id: 'kwh-appliance-calc', name: 'Electricity Appliance Cost Calculator', desc: 'Calculate electricity running costs (kWh) from appliance wattage and hours', cat: 'math', icon: 'zap', badge: 'Energy' },
  { id: 'iso-week-number', name: 'ISO 8601 Week Number & Day Finder', desc: 'Determine the exact ISO week number (W01 to W53) and day of year for any date', cat: 'math', icon: 'calendar', badge: 'ISO 8601' },
  { id: 'relative-time-human', name: 'Relative Time Humanizer ("3 hours ago")', desc: 'Convert timestamps into relative English strings ("just now", "yesterday")', cat: 'math', icon: 'clock', badge: 'Humanize' },
  { id: 'stopwatch-lap-timer', name: 'Browser Millisecond Stopwatch & Lap Timer', desc: 'High-precision in-browser stopwatch with split lap recording capabilities', cat: 'math', icon: 'watch', badge: 'Timer' },
  { id: 'pomodoro-timer', name: 'Pomodoro 25/5 Work Interval Timer', desc: 'Classic 25-minute focus session and 5-minute break timer with audio notifications', cat: 'math', icon: 'clock', badge: 'Pomodoro' },
  { id: 'epoch-nanoseconds', name: 'Nanosecond & Microsecond Timestamp Sizer', desc: 'Parse 16-digit (micro) and 19-digit (nano) Unix timestamps into human dates', cat: 'math', icon: 'calendar', badge: 'Nanoseconds' },
  { id: 'leap-year-checker', name: 'Leap Year Century Verifier', desc: 'Verify if calendar years satisfy the Gregorian 400-year leap year rule', cat: 'math', icon: 'calendar-check', badge: 'Calendar' },
  { id: 'military-time-conv', name: '24-Hour Military Time Converter', desc: 'Convert 12-hour AM/PM time into 24-hour military notation (17:30) and vice versa', cat: 'math', icon: 'clock', badge: '24-Hour' },
  { id: 'inflation-impact-calc', name: 'Historical Inflation Impact Estimator', desc: 'Calculate how annual inflation rates erode monetary purchasing power over decades', cat: 'math', icon: 'trending-down', badge: 'Inflation' },
  { id: 'billable-hours-calc', name: 'Freelance Billable Time & Rate Multiplier', desc: 'Sum project time cards (hours:minutes) and multiply by hourly billing rates', cat: 'math', icon: 'dollar-sign', badge: 'Billing' },
  { id: 'salary-to-hourly', name: 'Annual Salary to Hourly Wage Equivalent', desc: 'Convert annual gross pay into weekly, daily, and hourly wage rates (based on 2080 hrs)', cat: 'math', icon: 'dollar-sign', badge: 'Salary' },
  { id: 'binary-bitwise-ops', name: 'Bitwise AND, OR, XOR, NOT Calculator', desc: 'Perform bitwise logical operations on two integers and view binary bit registers', cat: 'math', icon: 'binary', badge: 'Bitwise' },
  { id: 'permutations-comb-calc', name: 'Permutations ($nPr$) & Combinations ($nCr$)', desc: 'Calculate mathematical permutations and combinations for probability sets', cat: 'math', icon: 'shuffle', badge: 'Probability' },
  { id: 'discount-savings-calc', name: 'Sale Discount & Savings Calculator', desc: 'Calculate final checkout prices after applying percentage discounts and coupons', cat: 'math', icon: 'tag', badge: 'Savings' },
  { id: 'unit-price-comparator', name: 'Price-per-Unit Comparison Tool', desc: 'Compare multi-pack grocery sizes to find the lowest price per ounce, gram, or liter', cat: 'math', icon: 'shopping-cart', badge: 'Best Value' },
  { id: 'year-progress-bar', name: 'Current Year Percentage Completion Bar', desc: 'Calculate what percentage of the current calendar year has elapsed down to seconds', cat: 'math', icon: 'clock', badge: 'Year Progress' },

  // ============================================================================
  // 9. QA AUTOMATION, LOCATORS & MOCKS (Tools 401 to 450)
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
  { id: 'decision-table-truth', name: 'Decision Table 2^N Matrix Generator', desc: 'Generate exhaustive boolean truth tables for complex multi-conditional business rules', cat: 'testing', icon: 'table', badge: 'Truth Table' },
  { id: 'state-transition-planner', name: 'State Machine Path Coverage Planner', desc: 'Map states and trigger events into node-link traversal checklists for E2E tests', cat: 'testing', icon: 'git-fork', badge: 'FSM Coverage' },
  { id: 'pairwise-orthogonal-array', name: 'All-Pairs / Orthogonal Array Matrix', desc: 'Reduce combinatorial test explosion using pairwise orthogonal testing arrays', cat: 'testing', icon: 'grid', badge: 'Pairwise' },
  { id: 'defect-severity-priority', name: 'Defect Severity vs Priority Advisor', desc: 'Standardize bug triaging based on user impact vs business urgency matrix', cat: 'testing', icon: 'alert-triangle', badge: 'Bug Triage' },
  { id: 'dummy-indian-pan', name: 'Dummy Indian PAN Format Validator', desc: 'Validate 10-character alphanumeric PAN formats (5 letters, 4 digits, 1 letter) for testing', cat: 'testing', icon: 'file-text', badge: 'PAN QA' },
  { id: 'dummy-us-ssn-gen', name: 'Dummy US SSN Sandbox Validator', desc: 'Verify 9-digit US Social Security Number syntax and exclusion ranges (000, 666, 900+)', cat: 'testing', icon: 'shield', badge: 'SSN QA' },
  { id: 'sql-injection-fuzz-list', name: 'SQLi Fuzzing Payload Test Bed', desc: 'Generate standard single-quote and boolean SQL injection probe strings for form security', cat: 'testing', icon: 'shield-alert', badge: 'Sec QA' },
  { id: 'xss-probe-string-gen', name: 'XSS Sanitization Polyglot Test Bed', desc: 'Test input fields with harmless <img src=x onerror=alert()> probe strings', cat: 'testing', icon: 'code', badge: 'XSS QA' },
  { id: 'mobile-viewport-matrix', name: 'Mobile Viewport CSS Resolution Matrix', desc: 'Inspect screen widths and DPRs for modern iPhone, Pixel, and Galaxy device profiles', cat: 'testing', icon: 'smartphone', badge: 'Viewports' },
  { id: 'test-pass-rate-calc', name: 'Automated Test Suite Pass Rate Sizer', desc: 'Calculate pass/fail percentages, flake ratios, and execution duration trends', cat: 'testing', icon: 'check-circle', badge: 'Metrics' },
  { id: 'broken-link-status-filter', name: 'HTTP Status Error Code Classifier', desc: 'Categorize lists of returned HTTP status codes into 2xx Success, 4xx Client, and 5xx Server', cat: 'testing', icon: 'filter', badge: 'HTTP Logs' },
  { id: 'shadow-dom-path-finder', name: 'Shadow DOM Selector Path Helper', desc: 'Format >>> and shadowRoot traversal selector paths for web components automation', cat: 'testing', icon: 'search', badge: 'Shadow DOM' },
  { id: 'relative-xpath-builder', name: 'Relative XPath Axis Statement Builder', desc: 'Construct preceding-sibling and following-sibling XPath statements safely', cat: 'testing', icon: 'code', badge: 'XPath Axis' },
  { id: 'robot-framework-keywords', name: 'Robot Framework Keyword Formatter', desc: 'Format test cases into pipe-delimited or 4-space separated Robot Framework tables', cat: 'testing', icon: 'cpu', badge: 'Robot' },
  { id: 'api-schema-diff', name: 'REST API Payload Schema Diff Inspector', desc: 'Detect breaking contract changes (missing keys, altered types) between API versions', cat: 'testing', icon: 'git-compare', badge: 'Contract' },
  { id: 'luhn-algorithm-verify', name: 'Luhn Checksum Formula Validator', desc: 'Calculate the modulo-10 Luhn check digit for identity numbers and loyalty barcodes', cat: 'testing', icon: 'check', badge: 'Modulo 10' },
  { id: 'form-input-stress-text', name: 'Form Input Extreme Stress Characters', desc: 'Generate multi-byte CJK, Arabic RTL, and mathematical symbols to test text encodings', cat: 'testing', icon: 'globe', badge: 'UTF-8 QA' },
  { id: 'http-mock-envelope-maker', name: 'REST API Standard Error Envelope Maker', desc: 'Generate standardized { status, error: { code, message, details } } response bodies', cat: 'testing', icon: 'file-json', badge: 'Error Mock' },
  { id: 'qa-test-case-markdown', name: 'Markdown Test Case Template Generator', desc: 'Generate structured test cases with Preconditions, Steps, Expected, and Actual results', cat: 'testing', icon: 'file-text', badge: 'Test Case' },
  { id: 'mock-user-agent-headers', name: 'Device User-Agent Spoofing Directory', desc: 'Copy authentic User-Agent strings for Googlebot, iOS Safari, and Android Chrome', cat: 'testing', icon: 'monitor', badge: 'User-Agent' },
  { id: 'graphql-mock-response', name: 'GraphQL Mock { data, errors } Generator', desc: 'Wrap raw JSON entities into standard GraphQL { data: { ... } } response envelopes', cat: 'testing', icon: 'share-2', badge: 'GraphQL' },
  { id: 'flaky-test-score-calc', name: 'Flaky Test Severity Score Calculator', desc: 'Calculate flakiness frequency weights based on run history and retry pass counts', cat: 'testing', icon: 'alert-circle', badge: 'Flaky QA' },
  { id: 'load-test-rps-sizer', name: 'Virtual Users (VU) to Target RPS Sizer', desc: 'Calculate required virtual users based on target requests/sec and average page latency', cat: 'testing', icon: 'users', badge: 'Load Test' },
  { id: 'app-permission-matrix', name: 'Role-Based Access Control (RBAC) Matrix', desc: 'Map User, Admin, and Guest roles against CRUD operation permission grids', cat: 'testing', icon: 'lock', badge: 'RBAC' },

  // ============================================================================
  // 10. FILE, IMAGE & MEDIA UTILITIES (Tools 451 to 500)
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
  { id: 'keycode-inspector', name: 'Keyboard Event & KeyCode Inspector', desc: 'Test key presses to view event.key, event.code, and event.which properties live', cat: 'media', icon: 'keyboard', badge: 'Events' },
  { id: 'exif-metadata-viewer', name: 'EXIF Metadata & Camera Tag Inspector', desc: 'Read camera model, focal length, ISO, and GPS location tags from uploaded photos', cat: 'media', icon: 'camera', badge: 'EXIF' },
  { id: 'exif-metadata-stripper', name: '1-Click Privacy EXIF Metadata Stripper', desc: 'Strip GPS geolocation and camera serial tags from photos before online sharing', cat: 'media', icon: 'shield', badge: 'Privacy' },
  { id: 'image-to-base64', name: 'Image File to Base64 Data URI', desc: 'Upload PNG/JPG images and copy clean data:image/png;base64,... code strings', cat: 'media', icon: 'file-image', badge: 'Base64' },
  { id: 'barcode-generator', name: 'Barcode CODE128 & EAN-13 Generator', desc: 'Generate printable vector barcodes for inventory tracking and retail products', cat: 'media', icon: 'align-justify', badge: 'Barcode' },
  { id: 'dead-pixel-tester', name: 'Monitor Dead Pixel Color Test Bed', desc: 'Cycle full-screen solid red, green, blue, black, and white to reveal stuck pixels', cat: 'media', icon: 'monitor', badge: 'Display' },
  { id: 'webcam-snapshot-tester', name: 'Webcam Hardware Frame Grabber', desc: 'Capture camera snapshots and verify local video permissions without external servers', cat: 'media', icon: 'video', badge: 'Webcam' },
  { id: 'mic-decibel-meter', name: 'Microphone Decibel (dB) Audio Meter', desc: 'Monitor ambient room noise and microphone input volume levels in real time', cat: 'media', icon: 'mic', badge: 'Audio' },
  { id: 'speech-synthesis-test', name: 'Web Speech Synthesis Voice Simulator', desc: 'Test browser text-to-speech voices with adjustable pitch, rate, and volume', cat: 'media', icon: 'volume-2', badge: 'Voice' },
  { id: 'speech-recognition-test', name: 'Web Speech-to-Text Dictation Sandbox', desc: 'Live speech transcription testing microphone speech recognition accuracy', cat: 'media', icon: 'mic-off', badge: 'Dictation' },
  { id: 'gamepad-tester', name: 'Gamepad & Controller Event Tester', desc: 'Test analog sticks, triggers, and buttons for connected USB and Bluetooth controllers', cat: 'media', icon: 'play', badge: 'Gamepad' },
  { id: 'mouse-click-accuracy', name: 'Mouse Click & Double-Click Latency Tester', desc: 'Measure click response latency (ms) and test mouse button double-click triggers', cat: 'media', icon: 'mouse-pointer', badge: 'Mouse' },
  { id: 'vibration-api-tester', name: 'Mobile Vibration API Pattern Tester', desc: 'Trigger custom vibration pulse patterns ([200, 100, 200]) on supported smartphones', cat: 'media', icon: 'smartphone', badge: 'Haptics' },
  { id: 'battery-status-inspector', name: 'Battery Level & Charging Status Inspector', desc: 'Inspect battery charge percentage and discharging time via navigator.getBattery()', cat: 'media', icon: 'battery-charging', badge: 'Battery' },
  { id: 'network-info-inspector', name: 'Network Connection & Effective Speed Sizer', desc: 'Inspect downlink speeds (Mbps) and effective network types (4g/wifi) via navigator.connection', cat: 'media', icon: 'wifi', badge: 'Network' },
  { id: 'geolocation-coord-finder', name: 'Browser Geolocation Lat/Long Inspector', desc: 'Inspect GPS latitude, longitude, and accuracy radius via the HTML5 Geolocation API', cat: 'media', icon: 'map-pin', badge: 'GPS' },
  { id: 'clipboard-history-sandbox', name: 'Clipboard Reader API Permissions Sandbox', desc: 'Test reading and writing rich text and images via navigator.clipboard', cat: 'media', icon: 'clipboard', badge: 'Clipboard' },
  { id: 'drag-drop-mime-checker', name: 'Drag-and-Drop File MIME & Size Inspector', desc: 'Drop any file to inspect exact byte size, file extension, and OS MIME type', cat: 'media', icon: 'file', badge: 'File Info' },
  { id: 'image-aspect-crop-calc', name: 'Image Aspect Ratio Crop Dimension Sizer', desc: 'Calculate exact pixel dimensions to crop images to 16:9, 4:3, or 1:1 without distortion', cat: 'media', icon: 'scissors', badge: 'Crop' },
  { id: 'video-thumbnail-extractor', name: 'Client-Side Video Thumbnail Grabber', desc: 'Capture frame thumbnails from local MP4/WebM videos at specific timestamps', cat: 'media', icon: 'film', badge: 'Video' },
  { id: 'audio-wave-synth', name: 'Sine & Square Wave Audio Synthesizer', desc: 'Synthesize custom 440Hz A-tone and variable audio frequencies using WebAudio', cat: 'media', icon: 'music', badge: 'Synthesizer' },
  { id: 'svg-path-bounding-box', name: 'SVG Path Visualizer & Bounding Sizer', desc: 'Paste raw <path d="..."> vector code to preview outlines and bounding box boxes', cat: 'media', icon: 'code', badge: 'SVG Path' },
  { id: 'monospace-font-checker', name: 'Monospace Font Pitch Alignment Tester', desc: 'Verify if installed monospace fonts render characters with equal horizontal widths', cat: 'media', icon: 'type', badge: 'Monospace' },
  { id: 'pdf-page-rotator', name: 'Client-Side PDF Page Rotator', desc: 'Rotate landscape and portrait PDF pages (90°, 180°, 270°) locally in browser memory', cat: 'media', icon: 'rotate-cw', badge: 'pdf-lib' },
  { id: 'image-to-pdf-converter', name: 'Image to PDF Document Generator', desc: 'Combine JPEG and PNG images into a clean, downloadable PDF file locally', cat: 'media', icon: 'file-text', badge: 'PDF' },
  { id: 'qr-wifi-network-gen', name: 'WiFi Network Login QR Code Builder', desc: 'Generate QR codes to instantly connect phones to WPA/WPA2 WiFi networks', cat: 'media', icon: 'wifi', badge: 'WiFi QR' },
  { id: 'vcard-qr-gen', name: 'Contact vCard Address Book QR Maker', desc: 'Generate QR codes encoding contact cards (vCard 3.0) with phone, email, and name', cat: 'media', icon: 'user-plus', badge: 'vCard' },
  { id: 'fullscreen-resolution-test', name: 'Fullscreen Display Resolution Inspector', desc: 'Inspect physical screen dimensions, color depth, and window inner/outer sizes', cat: 'media', icon: 'maximize-2', badge: 'Display' },
  { id: 'image-grayscale-converter', name: 'Client-Side Grayscale Image Filter', desc: 'Convert full-color photographs into classic black-and-white images using Canvas', cat: 'media', icon: 'image', badge: 'Grayscale' },
  { id: 'svg-circle-progress-gen', name: 'SVG Circular Progress Ring Generator', desc: 'Generate stroke-dasharray and stroke-dashoffset CSS for SVG progress meters', cat: 'media', icon: 'loader', badge: 'SVG' },
  { id: 'audio-bpm-tap-tempo', name: 'Tap Tempo (BPM) Music Metronome', desc: 'Tap any key along with a song beat to calculate musical Beats Per Minute (BPM)', cat: 'media', icon: 'activity', badge: 'BPM' },
  { id: 'pdf-page-counter', name: 'Instant PDF Page Count Reader', desc: 'Inspect total page count and document metadata from PDF files in memory', cat: 'media', icon: 'book-open', badge: 'PDF Info' },
  { id: 'favicon-ico-exporter', name: 'Favicon Multi-Size Asset Exporter', desc: 'Generate responsive favicon assets (16x16, 32x32, 48x48) from uploaded icons', cat: 'media', icon: 'app-window', badge: 'Favicon' }
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

// Render All 500 Cards into #tools-grid
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
