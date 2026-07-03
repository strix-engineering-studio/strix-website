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
    <footer className="relative overflow-hidden px-4 pb-10 pt-20">
      <div className="pointer-events-none absolute inset-x-0 top-10 flex justify-center">
        <div className="h-64 w-[700px] rounded-full bg-[#F9A907]/10 blur-[160px]" />
      </div>

      <div className="relative mx-auto max-w-7xl space-y-10">

        

        <section className="relative overflow-hidden rounded-[36px] border border-white/5 bg-[#08171C]/80 p-8 backdrop-blur-3xl lg:p-12">

          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(249,169,7,0.18),transparent_45%)]" />

          <div className="relative flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">

            <div className="max-w-3xl">

              <p className="mb-4 text-xs uppercase tracking-[0.45em] text-[#F9A907]">
                Start Discovery
              </p>

              <h2 className="text-balance text-4xl font-semibold leading-tight text-[#EEF3F2] sm:text-5xl lg:text-6xl">
                Build the right system before building the software.
              </h2>

              <p className="mt-6 max-w-2xl text-base leading-8 text-[#8FA39E]">
                Discovery, architecture, engineering, deployment, and long-term
                product support—all in one engineering studio.
              </p>

            </div>

            <div className="flex flex-wrap gap-4">

              <Link
                href="/contact"
                className="
                inline-flex
                items-center
                gap-2
                rounded-full
                bg-[#F9A907]
                px-6
                py-3.5
                text-sm
                font-semibold
                text-[#031217]
                shadow-lg
                shadow-[#F9A907]/20
                transition-all
                duration-300
                hover:-translate-y-1
                hover:bg-[#FFC633]
                "
              >
                Start Discovery

                <ArrowUpRight className="size-4" />
              </Link>

              <Link
                href="/systems"
                className="
                inline-flex
                items-center
                gap-2
                rounded-full
                border
                border-[#F9A907]/20
                bg-[#102228]
                px-6
                py-3.5
                text-sm
                font-medium
                text-white
                transition-all
                duration-300
                hover:border-[#F9A907]
                hover:bg-[#183038]
                "
              >
                View Systems
              </Link>

            </div>

          </div>

        </section>

        

        <section className="rounded-[36px] border border-white/5 bg-[#08171C]/70 p-8 backdrop-blur-3xl">

          <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">

            {/* Brand */}

            <div>

              <h3 className="text-xl font-semibold tracking-[0.2em] text-[#F9A907]">
                STRIX
              </h3>

              <p className="mt-2 text-sm text-[#8FA39E]">
                Product Engineering Studio
              </p>

              <p className="mt-6 max-w-sm leading-8 text-[#8FA39E]">
                We help ambitious startups and technology companies design,
                engineer, and scale software systems with an architecture-first
                mindset.
              </p>

            </div>

            <FooterGroup
              title="Explore"
              links={navigation}
            />

            <FooterGroup
              title="Resources"
              links={[
                {
                  href: "/systems",
                  label: "Systems",
                },
                {
                  href: "/insights",
                  label: "Insights",
                },
                {
                  href: "/case-studies",
                  label: "Case Studies",
                },
                {
                  href: "/about",
                  label: "About",
                },
              ]}
            />

            <FooterGroup
              title="Contact"
              links={[
                {
                  href: "/contact",
                  label: "Contact",
                },
                {
                  href: "/project-inquiry",
                  label: "Project Inquiry",
                },
                {
                  href: "/admin/login",
                  label: "Admin Login",
                },
              ]}
            />

          </div>

          

          <div className="my-10 h-px bg-gradient-to-r from-transparent via-[#F9A907]/30 to-transparent" />

          {/* Bottom */}

          <div className="flex flex-col gap-4 text-sm text-[#7C8E89] md:flex-row md:items-center md:justify-between">

            <p>
              © {new Date().getFullYear()} STRIX Engineering Studio.
            </p>

            <p>
              Architecture First · Engineering Excellence · Built with Next.js &
              Tailwind CSS
            </p>

          </div>

        </section>

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
