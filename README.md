<div align="center">

# 👁️ Peeky

**A powerful macOS Quick Look extension for previewing files Finder can't**

[![Swift](https://img.shields.io/badge/Swift-5.9-F05138?style=for-the-badge&logo=swift&logoColor=white)](https://swift.org)
[![macOS](https://img.shields.io/badge/macOS-13+-000000?style=for-the-badge&logo=apple&logoColor=white)](https://apple.com)
[![Quick Look](https://img.shields.io/badge/Quick_Look-Extension-007AFF?style=for-the-badge&logo=apple&logoColor=white)](https://developer.apple.com/documentation/quicklook)

[Features](#-features) · [Getting Started](#-getting-started) · [Supported Formats](#-supported-formats)

</div>

---

## ✨ Features

- **Markdown Preview** — Renders `.md` files with full formatting
- **JSON Preview** — Pretty-printed, syntax-highlighted JSON viewing
- **CSV Tables** — View CSV files as formatted tables
- **Source Code Highlighting** — Syntax highlighting for multiple languages with themes
- **Archive Browsing** — Peek inside ZIP files without extracting
- **Folder Previews** — Visual grid view of folder contents
- **Image Previews** — Enhanced image file previewing
- **Configurable Settings** — Customize preview behavior via the companion app

## 🖼️ Screenshots

> _Screenshots coming soon_

## 📂 Supported Formats

| Category | Formats |
|----------|---------|
| Documents | Markdown, JSON, CSV |
| Archives | ZIP |
| Code | Multi-language syntax highlighting |
| Media | Images |
| Filesystem | Folders |

## 🚀 Getting Started

### Prerequisites

- macOS 13.0+
- Xcode 15+

### Building from Source

```bash
git clone https://github.com/yourusername/Peeky.git
cd Peeky
open QuickLookProApp/QuickLookProApp.xcodeproj
```

Build and run the app, then enable the Quick Look extension in **System Settings → Extensions → Quick Look**.

## 🛠️ Tech Stack

| Category | Technology |
|----------|-----------|
| Language | Swift 5.9 |
| UI | SwiftUI, AppKit |
| Platform | macOS Quick Look Extension |
| Parsing | Custom Markdown, CSV, JSON, and syntax parsers |

## 📁 Project Structure

```
Peeky/
├── QuickLookProApp/           # Companion settings app
│   ├── Quick Look Preview Extension/  # Main Quick Look extension
│   │   ├── ArchivePreviewRenderer.swift
│   │   ├── CSVPreviewRenderer.swift
│   │   ├── JSONPreviewRenderer.swift
│   │   ├── MarkdownPreviewRenderer.swift
│   │   ├── SourceCodePreviewRenderer.swift
│   │   ├── ImagePreviewRenderer.swift
│   │   ├── SyntaxHighlighter.swift
│   │   └── FileTypeRouter.swift
│   └── QuickLookProApp/
├── QuickLookPro/              # Legacy Quick Look generator
└── tasks/
```

## 📄 License

MIT License © 2025 Mark Santos
