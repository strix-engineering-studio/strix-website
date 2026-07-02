"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { ArrowUpRight, Menu, X } from "lucide-react"
import { useState } from "react"
import { navigation } from "@/lib/site"
import { cn } from "@/lib/utils"
import Image from "next/image"

export function SiteHeader() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  if (pathname.startsWith("/admin")) {
    return null
  }

  return (
    <header className="sticky top-0 z-50 px-3 pt-3 sm:px-4 lg:px-6">
      <div className="mx-auto flex max-w-7xl items-center gap-4 rounded-xl border border-border/70 bg-background/70 px-4 py-3 shadow-[0_20px_80px_rgba(0,0,0,0.32)] backdrop-blur-2xl sm:px-5">
        <Link href="/" className="group flex items-center gap-3">
          <Image src="/strix.svg" alt="Strix logo" width={28} height={28} className="size-7" />
          <span className="hidden flex-col sm:flex">
            <span className="text-sm font-semibold tracking-[0.14em] text-foreground">Strix</span>
            <span className="text-xs text-muted-foreground">Product engineering studio</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 rounded-full border border-white/8 bg-white/3 p-1 lg:flex">
          {navigation.map((item) => {
            const active = pathname === item.href || pathname.startsWith(`${item.href}/`)

            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "rounded-full px-4 py-2 text-sm transition-colors",
                  active ? "bg-white/10 text-foreground" : "text-muted-foreground hover:bg-white/6 hover:text-foreground"
                )}
              >
                {item.label}
              </Link>
            )
          })}
        </nav>

        <div className="ml-auto hidden items-center gap-3 lg:flex">
          <Link
            href="/systems"
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/4 px-4 py-2 text-sm font-medium text-foreground transition hover:bg-white/8"
          >
            View systems
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background transition hover:opacity-90"
          >
            Start discovery
            <ArrowUpRight className="size-4" />
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          className="ml-auto inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 p-3 text-white/80 lg:hidden"
          aria-label={open ? "Close navigation" : "Open navigation"}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {open ? (
        <div className="px-3 py-3 lg:hidden sm:px-4">
          <div className="mx-auto flex max-w-7xl flex-col gap-3 rounded-xl border border-border/70 bg-background/90 p-4 shadow-[0_24px_90px_rgba(0,0,0,0.34)] backdrop-blur-2xl">
            {navigation.map((item) => (
              <Link key={item.href} href={item.href} onClick={() => setOpen(false)} className="rounded-2xl border border-white/8 bg-white/4 px-4 py-3 text-sm text-muted-foreground transition hover:bg-white/8 hover:text-foreground">
                {item.label}
              </Link>
            ))}
              <Link href="/contact" onClick={() => setOpen(false)} className="inline-flex items-center justify-center gap-2 rounded-2xl bg-foreground px-4 py-3 text-sm font-medium text-background">
                Start a Conversation
              <ArrowUpRight className="size-4" />
            </Link>
          </div>
        </div>
      ) : null}
    </header>
  )
}
