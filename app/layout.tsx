import "@/app/globals.css";

import type { Metadata } from "next";
import { Fraunces, Manrope } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { SiteJsonLd } from "@/components/seo/site-jsonld";
import { absoluteUrl, siteConfig } from "@/lib/seo/site";
import { BottomNav } from "@/components/ui/bottom-nav";
import { AppDrawer } from "@/components/ui/app-drawer";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { LanguageProvider } from "@/lib/i18n/context";
import Script from "next/script";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  applicationName: siteConfig.name,
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [...siteConfig.keywords],
  alternates: {
    canonical: "/",
  },
  category: "education",
  referrer: "origin-when-cross-origin",
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.description,
    type: "website",
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: siteConfig.locale,
    images: [
      {
        url: absoluteUrl("/opengraph-image"),
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} social preview`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [absoluteUrl("/twitter-image")],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-ET" className={`${fraunces.variable} ${manrope.variable}`} suppressHydrationWarning>
      {/* Blocks theme flash before React hydrates */}
      <head>
        <script dangerouslySetInnerHTML={{ __html: `(function(){var t=localStorage.getItem('exit-theme');var d=t==='dark'||(t!=='light'&&window.matchMedia('(prefers-color-scheme:dark)').matches);if(d)document.documentElement.classList.add('dark')})()` }} />
      </head>
      <body className="page-shell relative pb-16 md:pb-0">
        <ThemeProvider>
          <LanguageProvider>
            {children}
            <SiteJsonLd />
            <Analytics />
            <SpeedInsights />
            <AppDrawer />
            <BottomNav />
          </LanguageProvider>
        </ThemeProvider>
      </body>
      <Script src="https://scripts.simpleanalyticscdn.com/latest.js" />
    </html>
  );
}
