# 🛠️ MyDevToolbox — 100% In-Browser Offline Developer Suite

> **Every developer tool, in one tab.**  
> A professional, zero-server-upload utility platform engineered for software engineers, QA automation specialists, DevOps practitioners, and security analysts.

🌐 **Live Web Application:** [https://www.mydevtoolbox.in/](https://www.mydevtoolbox.in/)

---

## 🔒 Core Architecture: Local-First & Zero Server Uploads

Most online formatters, decoders, and PDF converters send private data, secret keys, and logs over the network to external backends. **MyDevToolbox eliminates remote leaks by design:**

* **100% In-Browser Execution:** Cryptographic hashing, format parsing, and document manipulation run directly in client memory via native Web APIs (`Web Crypto API`, `Canvas API`, `WebAssembly`, `FileReader`).
* **Air-Gapped & PWA Ready:** Installable as a standalone Progressive Web App (PWA) with complete offline functionality.
* **Zero Network Latency:** Sub-millisecond operations executed locally on your CPU with no remote round-trips or API rate limits.
* **Autonomous UI Engine:** No generic textboxes—utilities dynamically render dedicated controls such as range sliders, visual color pickers, timeline matrices, file dropzones, and structured form generators.

---

## 🧭 The 10 Engineering Pillars

| Category | Icon | Count | Focus Areas |
| :--- | :---: | :--- | :--- |
| **AI, LLM & Prompting** | 🤖 | 50 Tools | Token pricing calculators (GPT-4o, Claude 3.5, Gemini, DeepSeek), RAG window chunking, ChatML/Claude XML formatters, prompt sanitizers, temperature simulators. |
| **QA & Test Automation** | 🧪 | 50 Tools | Playwright locators (`getByRole`, `getByTestId`), XPath-to-CSS converters, Boundary Value Analysis (BVA), All-Pairs/Orthogonal arrays, Cypress commands, JMeter thread estimators. |
| **JSON & Data Formats** | 📊 | 50 Tools | JSON Pro Studio, multi-format conversions (CSV, XML, YAML, TOML, TSV, NDJSON), nested object flatteners, JSON Schema validators, code model generators (TypeScript, Pydantic, Go, Java POJO). |
| **Security & Cryptography** | 🔐 | 50 Tools | Web Crypto SHA-256/SHA-512, HMAC signers, JWT claims inspector, client-side AES-GCM 256-bit encrypt/decrypt, UUID v4/v7 generators, TOTP 2FA simulators, random salt generators. |
| **Web & APIs** | 🌐 | 50 Tools | cURL-to-Code translators (fetch, Axios, Python, Go, Rust), HTTP status code diagnostics, Accept header quality weight sorters, CORS builders, CSP validators, bulk UTM strippers. |
| **CSS & UI Design** | 🎨 | 50 Tools | Accessible focus ring stylers, live Box-shadow studios, Flexbox/Grid visual sandboxes, 8-point border-radius makers, WCAG contrast checkers, fluid typography `clamp()` calculators. |
| **DevOps & Cloud** | ⚙️ | 50 Tools | AWS IAM trust policy builders, `.env` sanitizers and linters, 802.1Q VLAN directory, `docker run` to `docker-compose` converters, Crontab explainers, Linux `chmod` calculators, CIDR subnetting. |
| **Content & Markdown** | 📝 | 50 Tools | Live Markdown previewers, case converters (camel, snake, kebab), text deduplication, regex extractors, SQL `IN ('a','b')` wrappers, readability indices. |
| **Math & Financial** | 📐 | 50 Tools | 24-hour military time converters, timezone overlap meeting planners, UNIX timestamp tools, business day counters, Loan EMI amortizations, mutual fund SIP visualizers. |
| **File, Media & Canvas** | 📂 | 50 Tools | 1-click privacy EXIF metadata strippers, client-side PDF mergers, in-browser WebP compressors, vector QR code generators, SVG code optimizers, hardware diagnostic testers. |

---

## ⚡ Productivity & Workspace Features

* **Adaptive Tool Interfaces:** High-utility components (file dropzones, range sliders, visual timelines) replace generic dual-pane text inputs.
* **Instant Client-Side Filtering:** Real-time search across tool names, categories, and keywords with sticky alphabetical (A–Z) navigation.
* **Command Palette:** Press `⌘K` (macOS) or `Ctrl+K` (Windows/Linux) anywhere to search and launch utilities instantly.
* **Display Density Modes:** Switch between spacious **Card Grid** and high-density **Compact List** layouts with saved preference persistence.
* **Theme System:** Seamless toggle between `Light`, `Midnight Dim`, and `OLED Dark` colorways.
* **Privacy by Default:** Zero tracking, zero telemetry, and zero third-party dependencies required for computation.

---

## 🚀 Running Locally

No build tools, compilation steps, or runtime package managers required:

```bash
# 1. Clone the repository
git clone [https://github.com/pratikkgadekar/mydevtoolbox.git](https://github.com/pratikkgadekar/mydevtoolbox.git)

# 2. Navigate to the project directory
cd mydevtoolbox

# 3. Serve via any static web server (or open index.html directly)
npx serve .
# or using Python 3
python3 -m http.server 8080
