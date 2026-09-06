/* js/tools-part-2.js - Tools Part 2 */
window.toolsPart2 = [
  // CSS, STYLING & UI DESIGN
  ['box-shadow', 'CSS Box-Shadow Studio', 'Visual sliders for offsets, blur, and spread with instant CSS copy', 'design', 'layers', 'CSS Studio'],
  ['flexbox-play', 'CSS Flexbox Playground', 'Interactive visual sandbox for justify-content, align-items, and flex-wrap', 'design', 'layout', 'Flexbox'],
  ['grid-gen', 'CSS Grid Code Generator', 'Design responsive CSS grid layouts visually with template columns and rows', 'design', 'grid-3x3', 'Grid'],
  ['color-convert', 'HEX to RGB / HSL Converter', 'Interactive color spectrum picker with instant HEX, RGBA, and HSL copy formats', 'design', 'pipette', 'Color'],
  ['palette-gen', 'Color Palette Harmony Builder', 'Generate complementary, analogous, and triadic color schemes with hex copy', 'design', 'palette', 'Harmony'],
  ['glassmorphism', 'CSS Glassmorphism Generator', 'Configure frosted glass blur, opacity, and saturation CSS styles', 'design', 'sparkle', 'Glass'],
  ['border-radius', 'CSS Border-Radius Studio', 'Visually configure 8-point asymmetric border-radius organic shapes', 'design', 'square', 'Shapes'],
  ['gradient-gen', 'CSS Linear & Radial Gradient Generator', 'Build multi-stop color transitions and export clean CSS background styles', 'design', 'sun-medium', 'Gradients'],
  ['css-minifier', 'CSS Minifier & Optimizer', 'Strip redundant whitespace, comments, and optimize CSS styles for speed', 'design', 'file-minus', 'Speed'],
  ['aspect-ratio', 'Aspect Ratio Calculator', 'Compute responsive dimensions for 16:9, 4:3, 1:1, and custom resolutions', 'design', 'maximize', 'Ratio'],

  // DEVOPS, CONTAINERS & LINUX
  ['cron-builder', 'Cron Expression Explainer', 'Translate 5-part cron syntax into human-readable sentences with presets', 'devops', 'clock', 'Crontab'],
  ['dockerfile-lint', 'Dockerfile Validator & Linter', 'Inspect Dockerfile instructions for caching efficiency and security practices', 'devops', 'container', 'Docker'],
  ['k8s-yaml', 'Kubernetes YAML Formatter', 'Format and validate Kubernetes Deployment, Service, and Ingress specs', 'devops', 'boxes', 'K8s'],
  ['chmod-calc', 'Linux Chmod Permissions Calculator', 'Calculate numeric (e.g. 755, 644) and symbolic (rwxr-xr-x) Linux permissions', 'devops', 'terminal-square', 'Chmod'],
  ['subnet-calc', 'IPv4 Subnet CIDR Calculator', 'Calculate network ranges, broadcast addresses, and usable host counts', 'devops', 'network', 'Networking'],
  ['ipv6-expand', 'IPv6 Address Expander & Compressor', 'Expand compressed zero sequences or shorten IPv6 addresses to standard RFC form', 'devops', 'cpu', 'IPv6'],
  ['nginx-format', 'Nginx Config Beautifier', 'Standardize tab indentations and block structures for Nginx server configs', 'devops', 'server', 'Nginx'],
  ['env-validator', '.env Environment File Sanitizer', 'Validate syntax, detect missing quotes, and strip comments from env files', 'devops', 'file-symlink', '.env'],
  ['git-commit', 'Git Commit Message Formatter', 'Format standardized Conventional Commit messages (feat, fix, chore, docs)', 'devops', 'git-commit', 'Commits'],
  ['ports-lookup', 'Common TCP/UDP Port Directory', 'Search well-known network ports (SSH 22, HTTP 80, HTTPS 443, Redis 6379)', 'devops', 'hash', 'Ports'],

  // CONTENT, TEXT & MARKDOWN
  ['markdown-live', 'Markdown Live Previewer', 'Live Markdown to styled HTML renderer with word count and stats', 'text', 'file-text', 'Markdown'],
  ['word-counter', 'Word & Character Counter', 'Real-time word, character, sentence, paragraph, and reading time metrics', 'text', 'spell-check', 'Metrics'],
  ['case-convert', 'Text Case Converter', 'Switch text across Title Case, UPPERCASE, lowercase, camelCase, snake_case', 'text', 'type', 'Formatting'],
  ['dedupe-lines', 'Duplicate Line Remover', 'Remove duplicate rows, sort lines alphabetically, and strip empty whitespace', 'text', 'list-filter', 'Dedupe'],
  ['sort-lines', 'Alphabetical Line Sorter', 'Sort lists alphabetically (A-Z, Z-A), numerically, or by string length', 'text', 'arrow-down-narrow-wide', 'Sort'],
  ['whitespace-clean', 'Whitespace & Line Cleaner', 'Strip trailing whitespace, consecutive spaces, and blank carriage returns', 'text', 'eraser', 'Cleaner'],
  ['lorem-gen', 'Lorem Ipsum Text Builder', 'Generate placeholder paragraphs, sentences, or word counts for UI mockups', 'text', 'align-left', 'Mockup'],
  ['slug-to-title', 'Slug to Title String Generator', 'Convert kebab-case-url-slugs into readable capitalized article titles', 'text', 'text', 'Converter'],
  ['word-freq', 'Word Frequency Analyzer', 'Analyze text density, keyword counts, and lexical variety percentages', 'text', 'bar-chart-2', 'Analytics'],
  ['text-reverse', 'Text & String Reverser', 'Reverse full sentences, individual words, or character sequences', 'text', 'refresh-ccw', 'Transform'],

  // MATH, TIME & FINANCIAL
  ['base-converter', 'Number Base Converter', 'Simultaneous live conversion across Decimal, Hexadecimal, Binary, and Octal', 'math', 'binary', 'Base 2-16'],
  ['unit-convert', 'Universal Unit Converter', 'Convert length, mass, temperature, data storage, and speed instantly', 'math', 'scale', '6 Categories'],
  ['percent-calc', 'Percentage Calculator', 'Calculate percentage increase, decrease, fraction ratios, and discounts', 'math', 'percent', 'Math'],
  ['unix-epoch', 'UNIX Timestamp to Date Converter', 'Convert millisecond/second epoch timestamps to human-readable ISO and local time', 'math', 'calendar-clock', 'Time'],
  ['date-epoch', 'Human Date to UNIX Epoch', 'Select any calendar date and time to compute the exact UTC UNIX timestamp', 'math', 'calendar', 'Timestamp'],
  ['byte-calc', 'Byte & Bit Storage Calculator', 'Convert between B, KB, MB, GB, TB, and network bitrate units (Kbps, Mbps)', 'math', 'hard-drive', 'Storage'],
  ['gcd-lcm', 'GCD & LCM Calculator', 'Calculate Greatest Common Divisor and Least Common Multiple of numbers', 'math', 'calculator', 'Arithmetic'],
  ['roman-num', 'Roman Numeral Converter', 'Convert standard integers into Roman numerals and parse Roman numerals to digits', 'math', 'columns', 'Numerals'],
  ['speed-conv', 'Speed & Velocity Converter', 'Convert between km/h, mph, m/s, knots, and Mach numbers', 'math', 'gauge', 'Velocity'],
  ['temp-conv', 'Temperature Scale Converter', 'Simultaneously convert across Celsius, Fahrenheit, Kelvin, and Rankine scales', 'math', 'thermometer', 'Temp'],

  // FILE, MEDIA & CANVAS UTILITIES
  ['img-compress', 'Image Compressor & WebP', 'Reduce PNG/JPG file sizes and convert to next-gen WebP directly in Canvas', 'media', 'image', 'WebP Canvas'],
  ['b64-canvas', 'Base64 Image Inspector', 'Paste Base64 data URLs to preview dimensions, aspect ratio, and download image', 'media', 'file-image', 'Inspector'],
  ['b64-file', 'Base64 to File Downloader', 'Convert Base64 data strings back into downloadable binary files', 'media', 'file-down', 'Decoder'],
  ['svg-optimizer', 'SVG Code Optimizer & Cleaner', 'Strip XML metadata, empty groups, and comments to optimize SVG vector code', 'media', 'feather', 'SVG'],
  ['ico-generator', 'Favicon Dimension Sizer', 'Resize and export raster graphics into standard 16x16, 32x32, and 512x512 assets', 'media', 'app-window', 'Favicon'],
  ['audio-tone', 'DTMF Audio Tone Generator', 'Synthesize custom frequency sine-wave audio tones using Web Audio API', 'media', 'volume-2', 'Audio'],
  ['color-extractor', 'Image Dominant Color Extractor', 'Upload images to extract primary hex color swatches and color palettes', 'media', 'droplet', 'Swatches'],
  ['qr-scanner-mock', 'Camera QR Code Reader Simulator', 'Simulate decoding QR code image payloads and data URI payloads locally', 'media', 'scan', 'Scanner'],
  ['markdown-pdf', 'Markdown Printable Export', 'Render Markdown notes into clean, printable document layouts with pagination', 'media', 'printer', 'Print'],
  ['code-snippet-card', 'Code Snippet Card Studio', 'Design stylized image cards for code snippets with gradient backgrounds', 'media', 'camera', 'Cards']
];
