import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Sjöfn - Daily Productivity Todo App",
    template: "%s | Sjöfn",
  },
  description:
    "A beautiful, minimalist todo app with daily workflow system. Automatically resets completed tasks at midnight while preserving ongoing work. Features three-state todos, dark/light themes, and smooth animations.",
  keywords: [
    "todo app",
    "productivity",
    "task management",
    "daily workflow",
    "minimalist",
    "todo list",
    "task organizer",
    "productivity tool",
    "sjofn",
    "daily planner",
  ],
  authors: [{ name: "Sjöfn Team" }],
  creator: "Sjöfn Team",
  publisher: "Sjöfn",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://morphine-cake.github.io/sjofn-todo-app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Sjöfn - Daily Productivity Todo App",
    description:
      "A beautiful, minimalist todo app with daily workflow system. Automatically resets completed tasks at midnight while preserving ongoing work.",
    url: "https://morphine-cake.github.io/sjofn-todo-app",
    siteName: "Sjöfn",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Sjöfn Todo App - Daily Productivity Tool",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sjöfn - Daily Productivity Todo App",
    description:
      "A beautiful, minimalist todo app with daily workflow system. Perfect for daily productivity and task management.",
    images: ["/twitter-image.png"],
    creator: "@sjofn_app",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code", // Replace with actual code
    // yandex: "your-yandex-verification-code",
    // bing: "your-bing-verification-code",
  },
  category: "productivity",
  classification: "Productivity App",
  referrer: "origin-when-cross-origin",
  colorScheme: "light dark",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Sjöfn",
  },
  applicationName: "Sjöfn Todo App",
  generator: "Next.js",
  manifest: "/manifest.json",
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      {
        rel: "mask-icon",
        url: "/safari-pinned-tab.svg",
        color: "#000000",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
