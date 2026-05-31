"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { ArrowUpRight } from "lucide-react"
import { navigation } from "@/lib/site"

export function SiteFooter() {
  const pathname = usePathname()

  if (pathname.startsWith("/admin")) {
    return null
  }

  return (
    <footer className="px-3 pb-8 pt-6 sm:px-4 lg:px-6">
      <div className="mx-auto max-w-7xl space-y-5">
        <div className="overflow-hidden rounded-[34px] border border-border/70 bg-[linear-gradient(135deg,rgba(216,158,88,0.24),rgba(122,168,112,0.12)_40%,rgba(255,255,255,0.04))] p-5 shadow-[0_24px_80px_rgba(0,0,0,0.24)] sm:p-6 lg:p-8">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl space-y-3">
              <p className="text-[11px] uppercase tracking-[0.42em] text-white/70">Start a project</p>
              <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl lg:text-5xl">A calm, premium system for the next version of your product.</h2>
              <p className="max-w-xl text-sm leading-7 text-muted-foreground sm:text-base">Use the same design language across landing pages, case studies, support flows, and long-form content.</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link href="/contact" className="inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-3 text-sm font-medium text-background transition hover:opacity-90">
                Contact
                <ArrowUpRight className="size-4" />
              </Link>
              <Link href="/uses" className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-5 py-3 text-sm font-medium text-foreground transition hover:bg-white/8">
                View stack
              </Link>
            </div>
          </div>
        </div>

        <div className="grid gap-6 rounded-[30px] border border-white/8 bg-white/[0.03] px-5 py-6 sm:grid-cols-2 lg:grid-cols-[1.15fr_0.85fr_0.85fr_0.85fr] lg:px-6">
          <div className="space-y-3">
            <p className="text-sm font-semibold tracking-[0.14em] text-foreground">Auren</p>
            <p className="max-w-sm text-sm leading-7 text-muted-foreground">Engineering systems for modern operations, built with clarity and long-term support in mind.</p>
          </div>

          <FooterGroup title="Explore" links={navigation} />
          <FooterGroup title="Routes" links={[{ href: "/uses", label: "Uses" }, { href: "/blog", label: "Blog" }, { href: "/work", label: "Work" }, { href: "/about", label: "About" }]} />
          <FooterGroup title="Contact" links={[{ href: "/contact", label: "Contact" }, { href: "/project-inquiry", label: "Project inquiry" }, { href: "/admin/login", label: "Admin login" }]} />
        </div>

        <div className="flex flex-col gap-2 border-t border-white/8 pt-4 text-xs leading-6 text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>Built with Next.js, Tailwind, and a dark-first design system.</p>
          <p>Available for product systems, workflow tooling, and long-term support.</p>
        </div>
      </div>
    </footer>
  )
}

function FooterGroup({
  title,
  links,
}: {
  title: string
  links: Array<{ href: string; label: string }>
}) {
  return (
    <div className="space-y-3">
      <p className="text-[11px] uppercase tracking-[0.36em] text-white/55">{title}</p>
      <div className="flex flex-col gap-1 text-sm text-muted-foreground">
        {links.map((item) => (
          <Link key={item.href} href={item.href} className="rounded-xl px-2 py-1.5 transition hover:bg-white/6 hover:text-foreground">
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  )
}
