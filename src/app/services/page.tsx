import type { Metadata } from "next"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { PageShell } from "@/components/shared/page-shell"
import { buildMetadata } from "@/lib/seo"
import { servicePages } from "@/lib/seo-content"

export const metadata: Metadata = buildMetadata({
  title: "Services | Strix Engineering Studio",
  description:
    "Product engineering, product delivery, backend systems, AI workflow design, and architecture support for technology businesses.",
  path: "/services",
  keywords: [
    "product engineering",
    "backend systems",
    "Next.js development",
    "NestJS development",
    "software architecture",
  ],
})

export default function ServicesPage() {
  return (
    <PageShell
      eyebrow="Services"
      title="Product systems, product delivery, and architecture support"
      description="Strix builds the product infrastructure that helps teams move from product intent to working operational software without losing clarity along the way."
    >
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {servicePages.map((page) => (
          <div
            key={page.slug}
            className="rounded-xl border border-white/10 bg-white/4 p-5 transition hover:border-white/20 hover:bg-white/6"
          >
            <p className="text-[11px] uppercase tracking-[0.35em] text-white/50">
              {page.eyebrow}
            </p>
            <h2 className="mt-3 text-xl font-semibold text-foreground">
              {page.title}
            </h2>
            <p className="mt-3 text-sm leading-7 text-muted-foreground">
              {page.description}
            </p>
            <Link
              href={`/services/${page.slug}`}
              className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-foreground"
            >
              View page
              <ArrowUpRight className="size-4" />
            </Link>
          </div>
        ))}
      </div>

      <div className="rounded-xl border border-white/10 bg-white/4 p-5">
        <p className="text-[11px] uppercase tracking-[0.35em] text-white/45">
          Related directions
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          <Link
            href="/capabilities"
            className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-foreground transition hover:bg-white/10"
          >
            Capabilities
          </Link>
          <Link
            href="/process"
            className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-foreground transition hover:bg-white/10"
          >
            Process
          </Link>
          <Link
            href="/technology-decisions"
            className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-foreground transition hover:bg-white/10"
          >
            Technology decisions
          </Link>
          <Link
            href="/contact"
            className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-foreground transition hover:bg-white/10"
          >
            Start a project
          </Link>
        </div>
      </div>
    </PageShell>
  )
}
