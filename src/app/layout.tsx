import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Instrument_Serif } from "next/font/google";

import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";

import { CommandMenu } from "@/components/shared/command-menu";
import { PwaRegister } from "@/components/shared/pwa-register";
import { ThemeProvider } from "@/components/shared/theme-provider";

import "./globals.css";
import { StrixCursor } from "../components/strix-cursor";
import { JsonLd } from "../seo/json-ld";
import { organizationSchema } from "../seo/schemas/organization";
import { seoConfig, websiteSchema } from "../seo";

/* -------------------------------------------------------------------------- */
/* Fonts                                                                       */
/* -------------------------------------------------------------------------- */

const displayFont = Instrument_Serif({
  weight: "400",
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const bodyFont = Geist({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const monoFont = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

/* -------------------------------------------------------------------------- */
/* Metadata                                                                    */
/* -------------------------------------------------------------------------- */

export const metadata: Metadata = {
  metadataBase: new URL(seoConfig.siteUrl),
  title: {
    default:
      "Strix Engineering Studio | Architecture-First Product Engineering",
    template: "%s | Strix Engineering Studio",
  },
  description: seoConfig.defaultDescription,
  keywords: [...seoConfig.defaultKeywords],
  manifest: "/manifest.webmanifest",
  appleWebApp: {
    capable: true,
    title: "Strix",
    statusBarStyle: "black-translucent",
  },
  openGraph: {
    title: "Strix Engineering Studio | Architecture-First Product Engineering",
    description: seoConfig.defaultDescription,
    url: "/",
    siteName: seoConfig.siteName,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Strix Engineering Studio",
    description: seoConfig.defaultDescription,
  },

  robots: {
    index: true,
    follow: true,
  },
};

/* -------------------------------------------------------------------------- */
/* Viewport                                                                    */
/* -------------------------------------------------------------------------- */

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#081316",
};

/* -------------------------------------------------------------------------- */
/* Layout                                                                      */
/* -------------------------------------------------------------------------- */

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`
    ${displayFont.variable}
    ${bodyFont.variable}
    ${monoFont.variable}
    h-full
    scroll-smooth
    antialiased
  `}
    >
      <head>
        <link rel="canonical" href={seoConfig.siteUrl} />

        <JsonLd data={[organizationSchema(), websiteSchema()]} />
      </head>
      <body className="relative isolate min-h-screen overflow-x-hidden text-text-primary bg-background">
        <ThemeProvider>
          <PwaRegister />

          <div className="relative flex min-h-screen flex-col">
            <SiteHeader />

            <div className="relative flex-1">{children}</div>

            <SiteFooter />

            <StrixCursor />
          </div>

          <CommandMenu />
        </ThemeProvider>
      </body>
    </html>
  );
}
