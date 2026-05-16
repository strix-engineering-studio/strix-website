"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { ArrowUpRight, Menu } from "lucide-react"
import { useMemo, useState } from "react"
import { Button } from "@/components/ui/button"
import { navigation } from "@/lib/site"
import { cn } from "@/lib/utils"

export function SiteHeader() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  const activeLabel = useMemo(
    () => navigation.find((item) => pathname.startsWith(item.href))?.label ?? "Home",
    [pathname]
  )

  return (
    <header className="sticky top-0 z-50 border-b border-white/8 bg-[#050816]/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="group flex items-center gap-3">
          <span className="flex size-11 items-center justify-center rounded-2xl border border-white/12 bg-white/5 text-xs font-semibold tracking-[0.35em] text-emerald-300 shadow-[0_0_30px_rgba(16,185,129,0.2)] transition-transform duration-300 group-hover:scale-105">
            PM
          </span>
          <span className="hidden flex-col sm:flex">
            <span className="text-sm font-semibold text-white">Prathamesh More</span>
            <span className="text-xs text-white/55">Full Stack & AI Engineer</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 rounded-full border border-white/10 bg-white/5 p-1 lg:flex">
          {navigation.map((item) => {
            const active = pathname === item.href || pathname.startsWith(`${item.href}/`)

            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "rounded-full px-4 py-2 text-sm transition-colors",
                  active ? "bg-white/12 text-white" : "text-white/62 hover:text-white"
                )}
              >
                {item.label}
              </Link>
            )
          })}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/60">
            {activeLabel}
          </span>
          <Button asChild variant="outline" className="border-white/12 bg-white/5 text-white hover:bg-white/10">
            <Link href="/contact" className="inline-flex items-center gap-2">
              Book a call
              <ArrowUpRight className="size-4" />
            </Link>
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 p-3 text-white/80 lg:hidden"
          aria-label="Open navigation"
        >
          <Menu className="size-5" />
        </button>
      </div>

      {open ? (
        <div className="border-t border-white/8 bg-[#050816]/90 px-5 py-4 backdrop-blur-xl lg:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-3">
            {navigation.map((item) => (
              <Link key={item.href} href={item.href} onClick={() => setOpen(false)} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/78">
                {item.label}
              </Link>
            ))}
            <Link href="/contact" onClick={() => setOpen(false)} className="rounded-2xl bg-emerald-400 px-4 py-3 text-sm font-medium text-slate-950">
              Book a discovery call
            </Link>
          </div>
        </div>
      ) : null}
    </header>
  )
}
