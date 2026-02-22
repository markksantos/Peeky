import type { Metadata } from "next";
import { DM_Sans, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant-garant",
  subsets: ["latin"],
  weight: ["300", "400"],
  style: ["italic"],
  display: "swap",
});

const siteUrl = "https://peeky.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Peeky — Preview Everything on Your Mac",
  description:
    "A macOS Quick Look extension that lets you preview Markdown, JSON, CSV, source code, archives, and more — right from Finder.",
  keywords: [
    "macOS",
    "Quick Look",
    "preview",
    "Markdown",
    "JSON",
    "CSV",
    "source code",
    "Finder",
    "Quick Look extension",
    "file preview",
  ],
  openGraph: {
    title: "Peeky — Preview Everything on Your Mac",
    description:
      "A macOS Quick Look extension that lets you preview Markdown, JSON, CSV, source code, archives, and more — right from Finder.",
    type: "website",
    url: siteUrl,
    siteName: "Peeky",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Peeky — Preview Everything on Your Mac",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Peeky — Preview Everything on Your Mac",
    description:
      "A macOS Quick Look extension that lets you preview Markdown, JSON, CSV, source code, archives, and more — right from Finder.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: "/apple-touch-icon.png",
  },
  other: {
    "theme-color": [
      { media: "(prefers-color-scheme: light)", color: "#ffffff" },
      { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
    ] as unknown as string,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SoftwareApplication",
        name: "Peeky",
        operatingSystem: "macOS",
        applicationCategory: "UtilitiesApplication",
        offers: {
          "@type": "Offer",
          price: "9.00",
          priceCurrency: "USD",
        },
        description:
          "A macOS Quick Look extension that lets you preview Markdown, JSON, CSV, source code, archives, and more — right from Finder.",
      },
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "What is Peeky?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Peeky is a macOS Quick Look extension that enhances Finder's built-in preview. Press Space on any supported file to see a rich, formatted preview instantly.",
            },
          },
          {
            "@type": "Question",
            name: "What file formats are supported?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Peeky supports Markdown, JSON, YAML, CSV, TSV, source code (20+ languages), ZIP/TAR/GZ archives, folder previews, and enhanced image previews with metadata.",
            },
          },
          {
            "@type": "Question",
            name: "Is Peeky a one-time purchase?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. Peeky is a one-time purchase with no subscriptions. You get all future updates included.",
            },
          },
        ],
      },
    ],
  };

  return (
    <html lang="en">
      <body className={`${dmSans.variable} ${cormorant.variable} antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
