import type { Metadata } from "next"
import { Geist, Inter, Geist_Mono } from "next/font/google"
import { SiteFooter } from "@/components/layout/site-footer"
import { SiteHeader } from "@/components/layout/site-header"
import { CommandMenu } from "@/components/shared/command-menu"
import "./globals.css"

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  metadataBase: new URL("https://prathameshmore.com"),
  title: {
    default: "Prathamesh More | Full Stack & AI Engineer",
    template: "%s | Prathamesh More",
  },
  description:
    "Premium portfolio for Prathamesh More, a Full Stack Product Engineer and AI Systems Engineer building production-grade MVPs, backends, and startup products.",
  openGraph: {
    title: "Prathamesh More | Full Stack & AI Engineer",
    description:
      "Production-grade MVPs, AI systems, backend architecture, and modern applications for startups and businesses.",
    url: "/",
    siteName: "Prathamesh More",
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
    <html
      lang="en"
      className={`${geist.variable} ${inter.variable} ${geistMono.variable} dark h-full scroll-smooth antialiased`}
    >
      <body className="min-h-screen bg-[#050816] text-white">
        <div className="relative isolate min-h-screen overflow-hidden bg-[radial-gradient(circle_at_top,_rgba(16,185,129,0.22),_transparent_28%),radial-gradient(circle_at_right,_rgba(59,130,246,0.16),_transparent_28%),linear-gradient(180deg,#050816_0%,#07111f_50%,#04070d_100%)]">
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:72px_72px] opacity-20 [mask-image:linear-gradient(180deg,rgba(0,0,0,0.95),transparent_90%)]" />
          <SiteHeader />
          <main className="relative z-10">{children}</main>
          <SiteFooter />
          <CommandMenu />
        </div>
      </body>
    </html>
  )
}
