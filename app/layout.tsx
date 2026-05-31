import type { Metadata } from "next"
import { Geist_Mono, Manrope, Space_Grotesk } from "next/font/google"
import { SiteFooter } from "@/components/layout/site-footer"
import { SiteHeader } from "@/components/layout/site-header"
import { CommandMenu } from "@/components/shared/command-menu"
import { ThemeProvider } from "@/components/shared/theme-provider"
import "./globals.css"

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://auren.com"

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
  metadataBase: new URL(siteUrl),
  title: {
    default: "Auren | Systems for modern operations",
    template: "%s | Auren",
  },
  description:
    "Auren designs premium product systems, workflow tooling, AI-enabled automation, and long-term technical support for growing teams.",
  openGraph: {
    title: "Auren | Systems for modern operations",
    description: "Operational software, product engineering, AI workflows, and infrastructure designed for clarity, reliability, and long-term support.",
    url: "/",
    siteName: "Auren",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${headingFont.variable} ${bodyFont.variable} ${geistMono.variable} h-full scroll-smooth antialiased`} suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(() => { try { const storedTheme = localStorage.getItem('theme'); const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches; const resolvedTheme = storedTheme === 'light' || storedTheme === 'dark' ? storedTheme : (systemDark ? 'dark' : 'light'); document.documentElement.classList.toggle('dark', resolvedTheme === 'dark'); document.documentElement.style.colorScheme = resolvedTheme; } catch (error) {} })();`,
          }}
        />
      </head>
      <body className="relative isolate min-h-screen overflow-x-hidden text-foreground" style={{ background: "var(--page-background)" }}>
        <ThemeProvider>
          <SiteHeader />
          <main className="relative z-10">{children}</main>
          <SiteFooter />
          <CommandMenu />
        </ThemeProvider>
      </body>
    </html>
  )
}
