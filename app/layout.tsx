import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";
import { ServiceWorkerRegister } from "@/components/ServiceWorkerRegister";
import PWAInstallPrompt from "@/components/PWAInstallPrompt";
import GoogleAnalytics from "@/components/GoogleAnalytics";

export const metadata: Metadata = {
  title: {
    default: "AfroCinema — Discover Nollywood, Bollywood & Hollywood",
    template: "%s | AfroCinema",
  },
  description:
    "The best place to discover and watch Nollywood, Bollywood, and Hollywood movies. Find where to stream or watch free on YouTube.",
  keywords: [
    "nollywood movies",
    "bollywood movies",
    "hollywood movies",
    "african cinema",
    "nigerian movies online",
    "watch nollywood free",
    "best nollywood movies",
  ],
  authors: [{ name: "AfroCinema" }],
  creator: "AfroCinema",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.afrocinema.vercel.app",
    siteName: "AfroCinema",
    title: "AfroCinema — Discover Nollywood, Bollywood & Hollywood",
    description:
      "Discover and watch the best Nollywood, Bollywood, and Hollywood movies in one place.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "AfroCinema",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AfroCinema",
    description: "Discover Nollywood, Bollywood & Hollywood movies",
  },
  manifest: "/manifest.json",
  icons: {
    icon: "/icons/icon-192x192.png",
    apple: "/icons/apple-touch-icon.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#0A0A0F",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link rel="icon" type="image/png" sizes="32x32" href="/icons/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/icons/favicon-16x16.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/icons/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="AfroCinema" />
        <meta name="google-site-verification" content="av6-7gzLnZrfn9Y-3kX5BWkN8IcwC1SkskaCCXapT7I" />
      </head>
      <body className="min-h-screen bg-background text-foreground antialiased">
        <GoogleAnalytics />
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <ServiceWorkerRegister />
          <PWAInstallPrompt />
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
