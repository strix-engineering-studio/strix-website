import type { Metadata } from "next"
import Link from "next/link"
import { PageShell } from "@/components/shared/page-shell"
import { featuredProjects } from "@/lib/site"
import { buildMetadata } from "@/lib/seo"

export const metadata: Metadata = buildMetadata({
  title: "Case Studies | Strix Engineering Studio",
  description: "Selected product systems and architecture-led implementations from Strix Engineering Studio.",
  path: "/case-studies",
  keywords: ["case studies", "architecture case studies", "product engineering examples"],
})

export default function CaseStudiesPage() {
  return (
    <PageShell
      eyebrow="Case Studies"
      title="Selected systems built for clarity, reliability, and long-term support"
      description="Each case study explains the problem, system design, implementation, and operational outcome."
    >
      <div className="grid gap-4">
        {featuredProjects.map((project) => (
          <article key={project.slug} className="rounded-xl border border-white/10 bg-white/4 p-5">
            <p className="text-[11px] uppercase tracking-[0.38em] text-white/50">{project.category}</p>
            <h2 className="mt-3 text-2xl font-semibold text-foreground">{project.title}</h2>
            <p className="mt-3 text-sm leading-7 text-muted-foreground">{project.summary}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.architecture.slice(0, 4).map((item) => (
                <span key={item} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] uppercase tracking-[0.26em] text-white/68">
                  {item}
                </span>
              ))}
            </div>
            <div className="mt-4">
              <Link href={`/case-studies/${project.slug}`} className="text-sm font-medium text-foreground underline underline-offset-4">
                View case study
              </Link>
            </div>
          </article>
        ))}
      </div>
    </PageShell>
  )
}
