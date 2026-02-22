export const LINKS = {
  github: "https://github.com/markksantos/Peeky",
  download: "#download",
  lemonSqueezy: "#pricing",
  support: "https://github.com/markksantos/Peeky/issues",
};

export const FEATURES = [
  {
    title: "Markdown",
    description: "Rich preview with syntax highlighting, tables, and math blocks.",
    icon: "TextT" as const,
    span: 1,
  },
  {
    title: "JSON & YAML",
    description: "Formatted, collapsible tree views with syntax coloring.",
    icon: "BracketsCurly" as const,
    span: 1,
  },
  {
    title: "CSV & TSV",
    description: "Clean table rendering with row and column counts.",
    icon: "Table" as const,
    span: 2,
  },
  {
    title: "Source Code",
    description: "Syntax highlighting for 20+ languages with line numbers.",
    icon: "Code" as const,
    span: 1,
  },
  {
    title: "Archives",
    description: "Peek inside ZIP, TAR, and GZ files without extracting.",
    icon: "FileZip" as const,
    span: 1,
  },
  {
    title: "Folders",
    description: "Quick Look into directory contents with file counts and sizes.",
    icon: "FolderOpen" as const,
    span: 1,
  },
  {
    title: "Images",
    description: "Enhanced image previews with metadata and EXIF info.",
    icon: "Image" as const,
    span: 1,
  },
];

export const TESTIMONIALS = [
  {
    quote:
      "Peeky changed the way I browse files. I can preview everything without opening a single app.",
    author: "Alex R.",
    role: "Software Engineer",
  },
  {
    quote:
      "Finally, a Quick Look extension that handles Markdown and JSON properly. It just works.",
    author: "Sarah K.",
    role: "Technical Writer",
  },
  {
    quote:
      "The native macOS feel is perfect. It looks and feels like it was built by Apple.",
    author: "James L.",
    role: "Designer",
  },
];

export const FAQS = [
  {
    question: "What is Peeky?",
    answer:
      "Peeky is a macOS Quick Look extension that enhances Finder's built-in preview. Press Space on any supported file to see a rich, formatted preview instantly.",
  },
  {
    question: "How do I install Peeky?",
    answer:
      "Download Peeky from the link above, move it to your Applications folder, and open it once. It will automatically register as a Quick Look extension. You may need to enable it in System Settings → Extensions → Quick Look.",
  },
  {
    question: "What file formats are supported?",
    answer:
      "Peeky supports Markdown, JSON, YAML, CSV, TSV, source code (20+ languages), ZIP/TAR/GZ archives, folder previews, and enhanced image previews with metadata.",
  },
  {
    question: "Does it integrate with Finder?",
    answer:
      "Yes! Peeky works natively with Finder's Quick Look. Just select a file and press Space to preview — no extra steps needed.",
  },
  {
    question: "Is Peeky a one-time purchase?",
    answer:
      "Yes. Peeky is a one-time purchase with no subscriptions. You get all future updates included.",
  },
  {
    question: "Which macOS versions are supported?",
    answer:
      "Peeky requires macOS 13 (Ventura) or later. It is fully compatible with macOS 14 (Sonoma) and macOS 15 (Sequoia).",
  },
];

export const METRICS = [
  { value: "15+", label: "File Formats" },
  { value: "Native", label: "macOS App" },
  { value: "One-Click", label: "Preview" },
];

export const NAV_LINKS = [
  { label: "Features", href: "#features" },
  { label: "Screenshots", href: "#screenshots" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];
