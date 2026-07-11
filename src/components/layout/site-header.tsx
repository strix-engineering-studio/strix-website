"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { ArrowUpRight, Menu, X } from "lucide-react"
import { useState } from "react"
import { cn } from "@/lib/utils"
import Image from "next/image"

const navigation = [
  {
    label: "System",
    href: "/systems",
  },
  {
    label: "Case Study",
    href: "/case-studies",
  },
  {
    label: "Products",
    href: "/products",
  },
  {
    label: "Open Source",
    href: "/open-source",
  },
  {
    label: "About",
    href: "/about",
  },
]

export function SiteHeader() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  if (pathname.startsWith("/admin")) {
    return null
  }

  return (
    <header className="sticky top-0 z-50 px-3 pt-4 sm:px-4 lg:px-6">
      <div className="mx-auto grid max-w-7xl items-center gap-3 rounded-[14px] border border-border bg-background/95 px-4 py-3 shadow-[0_10px_30px_rgba(0,0,0,0.08)] backdrop-blur-xl sm:px-5 lg:grid-cols-[auto_minmax(0,1fr)_auto] lg:px-6">
        
        {/* Brand */}
        <Link href="/" className="flex min-w-0 items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-[10px] border border-border bg-surface">
            <Image
              src="/strix.svg"
              width={24}
              height={24}
              alt="Strix"
            />
          </div>

          <div className="hidden sm:block">
            <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-primary">
              STRIX
            </p>

            <p className="text-sm text-foreground/60">
              System Before Software
            </p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden min-w-0 items-center justify-center gap-2 lg:flex">
          {navigation.map((item) => {
            const active =
              pathname === item.href ||
              pathname.startsWith(`${item.href}/`)

            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "relative whitespace-nowrap px-3 py-2 text-[11px] font-medium uppercase tracking-[0.24em] transition-colors",
                  active
                    ? "text-primary after:absolute after:bottom-0 after:left-3 after:right-3 after:h-px after:bg-primary"
                    : "text-foreground/60 hover:text-foreground"
                )}
              >
                {item.label}
              </Link>
            )
          })}
        </nav>

        {/* CTA */}
        <div className="hidden items-center justify-end lg:flex">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-[10px] bg-primary px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-primary-foreground transition hover:bg-primary/90"
          >
            Let's talk

            <ArrowUpRight className="h-3.5 w-3.5" />
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          className="justify-self-end rounded-[8px] border border-border p-2 text-foreground/70 lg:hidden"
        >
          {open ? (
            <X className="h-4 w-4" />
          ) : (
            <Menu className="h-4 w-4" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {open ? (
        <div className="mt-3 lg:hidden">
          <div className="rounded-[14px] border border-border bg-background/90 p-4 shadow-[0_8px_30px_rgba(11,11,10,0.04)] backdrop-blur-xl">
            <div className="flex flex-col gap-2">
              {navigation.map((item) => {
                const active =
                  pathname === item.href ||
                  pathname.startsWith(`${item.href}/`)

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className={cn(
                      "rounded-[8px] px-3 py-2 text-[11px] font-medium uppercase tracking-[0.24em] transition",
                      active
                        ? "bg-primary/10 text-primary"
                        : "text-foreground/70 hover:bg-black/5 hover:text-foreground dark:hover:bg-white/5"
                    )}
                  >
                    {item.label}
                  </Link>
                )
              })}

              <div className="mt-2">
                <Link
                  href="/contact"
                  onClick={() => setOpen(false)}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-[8px] bg-primary px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-primary-foreground transition hover:bg-primary/90"
                >
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