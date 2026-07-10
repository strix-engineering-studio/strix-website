import type { Metadata, Viewport } from "next"
import { Geist, Inter } from "next/font/google"

import { SiteFooter } from "@/components/layout/site-footer"
import { SiteHeader } from "@/components/layout/site-header"

import { CommandMenu } from "@/components/shared/command-menu"
import { PwaRegister } from "@/components/shared/pwa-register"
import { ThemeProvider } from "@/components/shared/theme-provider"

import { JsonLd } from "@/components/seo/json-ld"
import {
  organizationSchema,
  siteConfig,
  websiteSchema,
} from "@/lib/seo"

import "./globals.css"

/* -------------------------------------------------------------------------- */
/* Fonts                                                                       */
/* -------------------------------------------------------------------------- */

const displayFont = Geist({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
})

const bodyFont = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
})

/* -------------------------------------------------------------------------- */
/* Metadata                                                                    */
/* -------------------------------------------------------------------------- */

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),

  title: {
    default: "Strix Engineering Studio | System Before Software",
    template: "%s | Strix Engineering Studio",
  },

  description: siteConfig.description,

  keywords: siteConfig.defaultKeywords,

  manifest: "/manifest.webmanifest",

  applicationName: "Strix",

  appleWebApp: {
    capable: true,
    title: "Strix",
    statusBarStyle: "black-translucent",
  },

  openGraph: {
    title: "Strix Engineering Studio",
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Strix Engineering Studio",
    description: siteConfig.description,
  },

  robots: {
    index: true,
    follow: true,
  },
}

/* -------------------------------------------------------------------------- */
/* Viewport                                                                    */
/* -------------------------------------------------------------------------- */

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#081316",
}

/* -------------------------------------------------------------------------- */
/* Layout                                                                      */
/* -------------------------------------------------------------------------- */

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`
        ${displayFont.variable}
        ${bodyFont.variable}
        h-full
        scroll-smooth
        antialiased
      `}
    >
      <head>
        <link rel="canonical" href={siteConfig.url} />

        <JsonLd
          data={[
            organizationSchema(),
            websiteSchema(),
          ]}
        />
      </head>

      <body className="min-h-screen overflow-x-hidden bg-background text-foreground">
        <ThemeProvider>
          <PwaRegister />

          <div className="relative flex min-h-screen flex-col">
            <SiteHeader />

            <main className="relative z-10 flex-1">
              {children}
            </main>

            <SiteFooter />
          </div>

          <CommandMenu />
        </ThemeProvider>
      </body>
    </html>
  )
}