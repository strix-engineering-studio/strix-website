"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { ArrowUpRight } from "lucide-react"
import { ThemeToggle } from "@/components/shared/theme-toggle"
import { navigation } from "@/lib/site"

export function SiteFooter() {
  const pathname = usePathname()

  if (pathname.startsWith("/admin")) {
    return null
  }

  return (
    <footer className="relative overflow-hidden px-3 pb-8 pt-16 sm:px-4 lg:px-6 lg:pb-10 lg:pt-20">
      <div className="mx-auto max-w-7xl space-y-6">
        <section className="rounded-[20px] border border-black/10 bg-[rgba(255,255,255,0.65)] p-6 shadow-[0_8px_30px_rgba(11,11,10,0.04)] backdrop-blur-xl dark:border-white/10 dark:bg-[rgba(11,11,14,0.75)] lg:p-8">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <p className="text-[11px] font-medium uppercase tracking-[0.32em] text-primary">Start a conversation</p>
              <h2 className="mt-4 text-balance text-3xl font-semibold leading-tight text-foreground sm:text-4xl lg:text-5xl">
                Build the right system before building the software.
              </h2>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-foreground/70 sm:text-base">
                Discovery, architecture, engineering, deployment, and long-term product support, all under one calm operating structure.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              
              <Link href="/contact" className="inline-flex items-center gap-2 rounded-[8px] border border-black/10 bg-transparent px-5 py-3 text-[11px] font-semibold uppercase tracking-[0.24em] text-foreground/80 transition hover:-translate-y-0.5 hover:bg-black/5 dark:border-white/10 dark:text-foreground/80 dark:hover:bg-white/5">
                Start discovery
                <ArrowUpRight className="size-3.5" />
              </Link>
            </div>
          </div>
        </section>

        <section className="rounded-[20px] border border-black/10 bg-[rgba(255,255,255,0.62)] p-6 shadow-[0_8px_30px_rgba(11,11,10,0.04)] backdrop-blur-xl dark:border-white/10 dark:bg-[rgba(11,11,14,0.7)] lg:p-8">
          <div className="grid gap-10 lg:grid-cols-[1.3fr_1fr_1fr_1fr]">
            <div>
              <p className="text-[11px] font-medium uppercase tracking-[0.32em] text-primary">STRIX</p>
              <p className="mt-2 text-sm text-foreground/60">System Before Software</p>
              <p className="mt-5 max-w-sm text-sm leading-7 ">
                We help ambitious teams design, engineer, and scale software systems with an architecture-first mindset.
              </p>
              
            </div>

            <FooterGroup title="Explore" links={navigation} />
            <FooterGroup title="Resources" links={[{ href: "/systems", label: "Systems" }, { href: "/insights", label: "Insights" }, { href: "/case-studies", label: "Case Studies" }, { href: "/about", label: "About" }]} />
            <FooterGroup title="Contact" links={[{ href: "/contact", label: "Contact" }, { href: "/project-inquiry", label: "Project Inquiry" }, { href: "/admin/login", label: "Admin Login" }]} />
            <p><ThemeToggle /></p>
          </div>

          <div className="mt-8 h-px bg-black/10 dark:bg-white/10" />
          
          <div className="mt-6 flex flex-col gap-3 text-sm text-foreground/60 md:flex-row md:items-center md:justify-between">
            <p>© {new Date().getFullYear()} STRIX Engineering Studio.</p>
            <p>Architecture First · Engineering Excellence · Built with Next.js & Tailwind CSS</p>
          </div>
        </section>
      </div>
    </footer>
  )
}

function FooterGroup({ title, links }: { title: string; links: Array<{ href: string; label: string }> }) {
  return (
    <div>
      <h4 className="mb-4 text-[11px] font-medium uppercase tracking-[0.32em] text-foreground/60">{title}</h4>
      <div className="flex flex-col gap-2">
        {links.map((item) => (
          <Link key={item.href} href={item.href} className="inline-flex w-fit items-center rounded-[6px] border border-transparent bg-transparent px-2 py-1.5 text-sm text-foreground/70 transition hover:border-black/10 hover:bg-black/5 hover:text-foreground dark:hover:border-white/10 dark:hover:bg-white/5">
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  )
}
