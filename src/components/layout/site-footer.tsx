"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { ThemeToggle } from "@/components/shared/theme-toggle"

export function SiteFooter() {
  const pathname = usePathname()

  if (pathname.startsWith("/admin")) {
    return null
  }

  return (
    <footer className="relative border-t border-black/10 bg-background dark:border-white/10">
      {/* Footer Links */}
      <div className="mx-auto max-w-7xl px-3 py-12 sm:px-4 lg:px-6">
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-4">
          {/* Brand Column */}
          <div>
            <p className="text-sm font-semibold text-foreground">STRIX</p>
            <p className="mt-1 text-xs text-foreground/60">System Before Software</p>
          </div>

          {/* Studio Links */}
          <div>
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-widest text-foreground/70">Studio</h4>
            <ul className="flex flex-col gap-2">
              <li>
                <Link href="/capabilities" className="text-sm text-foreground/60 transition hover:text-foreground">
                  Capabilities
                </Link>
              </li>
              <li>
                <Link href="/systems" className="text-sm text-foreground/60 transition hover:text-foreground">
                  Systems
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-sm text-foreground/60 transition hover:text-foreground">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/case-studies" className="text-sm text-foreground/60 transition hover:text-foreground">
                  Case Studies
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-widest text-foreground/70">Company</h4>
            <ul className="flex flex-col gap-2">
              <li>
                <Link href="/insights" className="text-sm text-foreground/60 transition hover:text-foreground">
                  Insights
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sm text-foreground/60 transition hover:text-foreground">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-foreground/60 transition hover:text-foreground">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/admin/login" className="text-sm text-foreground/60 transition hover:text-foreground">
                  Admin
                </Link>
              </li>
            </ul>
          </div>

          {/* Start a Project */}
          <div>
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-widest text-foreground/70">Start a Project</h4>
            <ul className="flex flex-col gap-2">
              <li>
                <Link href="/contact" className="text-sm text-foreground/60 transition hover:text-foreground">
                  Book a Call
                </Link>
              </li>
              <li>
                <Link href="/project-inquiry" className="text-sm text-foreground/60 transition hover:text-foreground">
                  Submit Inquiry
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-black/10 dark:border-white/10" />

      {/* Meta Bar */}
      <div className="mx-auto max-w-7xl px-3 py-6 sm:px-4 lg:px-6">
        <div className="flex flex-col items-center justify-between gap-4 text-xs text-foreground/60 md:flex-row md:items-center">
          <p>© 2026 Strix Engineering Studio</p>
          <p>Built with ♥ in Prayagraj, India</p>
          <div className="flex items-center gap-4">
            <Link href="/terms" className="transition hover:text-foreground">
              Terms
            </Link>
            <span className="text-foreground/30">·</span>
            <Link href="/privacy" className="transition hover:text-foreground">
              Privacy
            </Link>
            <span className="text-foreground/30">·</span>
            <ThemeToggle />
          </div>
        </div>
      </div>

      {/* Decorative Wordmark */}
      <div className="overflow-hidden border-t border-black/10 py-8 dark:border-white/10">
        <div className="mx-auto max-w-7xl px-3 sm:px-4 lg:px-6">
          <div className="relative flex items-center justify-center">
            <svg
              viewBox="0 0 400 120"
              className="w-full max-w-4xl text-foreground/10"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="xMidYMid meet"
            >
              {/* Outline letters STR */}
              <text
                x="20"
                y="100"
                fontSize="120"
                fontFamily="var(--font-heading), system-ui"
                fontWeight="700"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                letterSpacing="8"
              >
                STR
              </text>
              {/* Solid IX */}
              <text
                x="280"
                y="100"
                fontSize="120"
                fontFamily="var(--font-heading), system-ui"
                fontWeight="700"
                fill="currentColor"
              >
                IX
              </text>
            </svg>
          </div>
        </div>
      </div>
    </footer>
  )
}
