"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { ArrowUpRight, Menu, X } from "lucide-react"
import { useState } from "react"
import { navigation } from "@/lib/site"
import { cn } from "@/lib/utils"
import Image from "next/image"
import { ThemeToggle } from "@/components/shared/theme-toggle"

export function SiteHeader() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  if (pathname.startsWith("/admin")) {
    return null
  }

  return (
    <header className="sticky top-0 z-50 px-3 pt-4 sm:px-4 lg:px-6">
      <div className="mx-auto grid max-w-7xl items-center gap-3 rounded-[14px] border border-border bg-background/95 px-4 py-3 shadow-[0_10px_30px_rgba(0,0,0,0.08)] backdrop-blur-xl dark:border-border dark:bg-background/10 sm:px-5 lg:px-6 lg:grid-cols-[auto_minmax(0,1fr)_auto]">
        <Link href="/" className="flex items-center gap-3 min-w-0">
          <div className="flex h-10 w-10 items-center justify-center rounded-[10px] border border-border bg-surface dark:border-border dark:bg-surface">
            <Image src="/strix.svg" width={24} height={24} alt="Strix" />
          </div>
          <div className="hidden sm:block">
            <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-primary">STRIX</p>
            <p className="text-sm text-foreground/60">System Before Software</p>
          </div>
        </Link>

        <nav className="hidden lg:flex flex-wrap justify-center gap-3 min-w-0">
          {navigation.map((item) => {
            const active = pathname === item.href || pathname.startsWith(`${item.href}/`)

            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "relative px-3 py-2 text-[11px] font-medium uppercase tracking-[0.28em] transition-colors",
                  active ? "text-primary after:absolute after:bottom-0 after:left-3 after:right-3 after:h-px after:bg-primary" : "text-foreground/60 hover:text-foreground"
                )}
              >
                {item.label}
              </Link>
            )
          })}
        </nav>

        <div className="hidden items-center gap-3 lg:flex lg:justify-end">
          <ThemeToggle />
          <Link href="/systems" className="rounded-[10px] border border-border bg-surface px-4 py-2 text-[11px] font-medium uppercase tracking-[0.24em] text-foreground/80 transition hover:border-primary/30 hover:text-foreground dark:bg-surface dark:border-border">
            View systems
          </Link>
          <Link href="/contact" className="inline-flex items-center gap-2 rounded-[10px] bg-primary px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-primary-foreground transition hover:bg-primary/90">
            Start project
            <ArrowUpRight className="h-3.5 w-3.5" />
          </Link>
        </div>

        <button type="button" onClick={() => setOpen((value) => !value)} className="rounded-[8px] border border-border p-2 text-foreground/70 lg:hidden dark:border-border">
          {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
        </button>
      </div>

      {open ? (
        <div className="mt-3 lg:hidden">
          <div className="rounded-[14px] border border-black/10 bg-[#fbf8f2]/90 p-4 shadow-[0_8px_30px_rgba(11,11,10,0.04)] backdrop-blur-xl dark:border-white/10 dark:bg-[#0b0b0a]/90">
            <div className="flex flex-col gap-2">
              {navigation.map((item) => (
                <Link key={item.href} href={item.href} onClick={() => setOpen(false)} className="rounded-[8px] px-3 py-2 text-[11px] font-medium uppercase tracking-[0.24em] text-foreground/70 transition hover:bg-black/5 hover:text-foreground dark:hover:bg-white/5">
                  {item.label}
                </Link>
              ))}
                    <div className="mt-2 flex flex-col gap-3 sm:flex-row">
                <ThemeToggle className="flex-1 justify-center" />
                <Link href="/contact" onClick={() => setOpen(false)} className="inline-flex flex-1 items-center justify-center gap-2 rounded-[8px] bg-primary px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-primary-foreground transition hover:bg-primary/90">
                  Start project
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  )
}
