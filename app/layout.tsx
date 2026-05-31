import type { Metadata, Viewport } from "next"
import { Geist_Mono, Manrope, Space_Grotesk } from "next/font/google"
import { SiteFooter } from "@/components/layout/site-footer"
import { SiteHeader } from "@/components/layout/site-header"
import { CommandMenu } from "@/components/shared/command-menu"
import { PwaRegister } from "@/components/shared/pwa-register"
import { ThemeProvider } from "@/components/shared/theme-provider"
import { JsonLd } from "@/components/seo/json-ld"
import { organizationSchema, siteConfig, websiteSchema } from "@/lib/seo"
import "./globals.css"

const headingFont = Space_Grotesk({
  variable: "--font-heading",
  subsets: ["latin"],
})

const bodyFont = Manrope({
  variable: "--font-body",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Strix Engineering Studio | Architecture-First Product Engineering",
    template: "%s | Strix Engineering Studio",
  },
  description: siteConfig.description,
  keywords: siteConfig.defaultKeywords,
  manifest: "/manifest.webmanifest",
  appleWebApp: {
    capable: true,
    title: "Strix",
    statusBarStyle: "black-translucent",
  },
  openGraph: {
    title: "Strix Engineering Studio | Architecture-First Product Engineering",
    description: siteConfig.description,
    url: "/",
    siteName: siteConfig.name,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Strix Engineering Studio",
    description: siteConfig.description,
  },
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#0b0d10",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${headingFont.variable} ${bodyFont.variable} ${geistMono.variable} h-full scroll-smooth antialiased`} suppressHydrationWarning>
      <head>
        <link rel="canonical" href={siteConfig.url} />
        <JsonLd data={[organizationSchema(), websiteSchema()]} />
      </head>
      <body className="relative isolate min-h-screen overflow-x-hidden text-foreground" style={{ background: "var(--page-background)" }}>
        <ThemeProvider>
          <PwaRegister />
          <SiteHeader />
          <main className="relative z-10">{children}</main>
          <SiteFooter />
          <CommandMenu />
        </ThemeProvider>
      </body>
    </html>
  )
}
