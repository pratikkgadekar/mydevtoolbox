# 🛠️ MyDevToolbox — 100% In-Browser Offline Developer Suite
> **Every developer tool, in one tab.**  
> A professional, zero-server-upload utility platform engineered for software engineers, QA automation specialists, DevOps practitioners, and security analysts.
🌐 **Live Web Application:** [https://www.mydevtoolbox.in/](https://www.mydevtoolbox.in/)
---
## 🔒 Core Architecture: Zero Server Uploads
Most web-based formatters, hashers, and PDF converters secretly send your private data, API keys, and sensitive logs over HTTP to backend servers. **MyDevToolbox is built differently:**
* **100% In-Browser Memory:** All data transformations, cryptographic hashing, and parsing run locally inside browser memory using native Web APIs (`Web Crypto API`, `Canvas API`, `Web Workers`, `FileReader`).
* **Air-Gapped & Offline Ready (PWA):** Installs as a standalone Progressive Web App (PWA). Works without an active internet connection.
* **Instant Sub-Millisecond Execution:** No network round-trips, rate limits, or waiting on remote server processing.
---
## 🧭 The 10 Core Pillars (500 Utilities)
The platform is organized across 10 specialized engineering domains:

| Category | Icon | Count | Focus Areas |
| :--- | :--- | :--- | :--- |
| **AI, LLM & Prompting** | 🤖 | 50 Tools | Token pricing calculators (GPT-4o, Claude 3.5, Gemini, DeepSeek), RAG window chunking, ChatML formatters, temperature simulators, prompt sanitizers. |
| **QA & Test Automation** | 🧪 | 50 Tools | Playwright locators (`getByRole`, `getByTestId`), XPath-to-CSS converters, Boundary Value Analysis (BVA), Luhn dummy card generators, Cypress commands, JMeter calculators. |
| **JSON & Data Formats** | 📊 | 50 Tools | JSON Pro Studio, bi-directional converters (CSV, XML, YAML, TOML, TSV), nested object flatteners, JSON Schema validators, code model generators (TypeScript, Pydantic, Go, Java POJO). |
| **Security & Cryptography** | 🔐 | 50 Tools | Web Crypto SHA-256/SHA-512, HMAC signers, JWT claims inspector, client-side AES-GCM 256-bit encrypt/decrypt, UUID v4/v7 generators, TOTP 2FA simulators. |
| **Web & APIs** | 🌐 | 50 Tools | cURL-to-Code converters (fetch, Axios, Python, Go, Rust), HTTP status code diagnostics, CORS builders, CSP validators, bulk UTM strippers, URL parsers. |
| **CSS & UI Design** | 🎨 | 50 Tools | Box-shadow studios, Flexbox/Grid visual sandboxes, 8-point border-radius makers, glassmorphism, WCAG contrast raters, fluid typography `clamp()` calculators. |
| **DevOps & Cloud** | ⚙️ | 50 Tools | `docker run` to `docker-compose` converters, Crontab schedule explainers, Linux `chmod` calculators, CIDR subnet calculators, Kubernetes YAML builders, Nginx configs. |
| **Content & Markdown** | 📝 | 50 Tools | Live Markdown previewers, case converters (camel, snake, kebab), text deduplication, regex extractors, SQL `IN ('a','b')` wrappers, readability indices. |
| **Math & Financial** | 📐 | 50 Tools | UNIX timestamp converters, business days calculators, timezone overlap meeting planners, Loan EMI amortizations, mutual fund SIP visualizers, base converters. |
| **File, Media & Canvas** | 📂 | 50 Tools | In-browser WebP image compressors, client-side PDF mergers, base64 data URL inspectors, SVG optimizers, vector QR code generators, webcam/audio diagnostic testers. |

---
## ⚡ UX & Engineering Features
* **Quick Search & Category Filters:** Real-time debounced fuzzy-search across all 500 tool titles, descriptions, and keywords.
* **Spotlight Command Palette:** Press `⌘K` (Mac) or `Ctrl+K` (Windows/Linux) anywhere to search and launch any tool instantly.
* **Triple Theme Matrix:** Native support for `Light`, `Midnight Dim`, and `OLED Dark` themes with persistent local storage.
* **Zen Lounge & Stress Reliever:** Interactive built-in Easter eggs including an ASMR bubble wrap popper and developer joke generator.
* **Zero Bloat / Fast Load:** Clean, modular JavaScript architecture that avoids monolithic vendor bundles.
---
## 🚀 Running Locally
Clone and run directly in any browser—no build tools, Docker containers, or Node dependencies required:
```bash
# 1. Clone the repository
git clone [https://github.com/pratikkgadekar/mydevtoolbox.git](https://github.com/pratikkgadekar/mydevtoolbox.git)
# 2. Navigate to the project directory
cd mydevtoolbox
# 3. Serve with any static web server (or open index.html directly)
npx serve .
# or using Python 3
python3 -m http.server 8080
