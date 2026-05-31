import { ArrowUpRight } from "lucide-react"
import { PageShell } from "@/components/shared/page-shell"
import { featuredProjects } from "@/lib/site"

export default function WorkPage() {
  return (
    <PageShell
      eyebrow="Work"
      title="Selected systems built for clarity and long-term support"
      description="A collection of product systems, workflow tooling, and operational surfaces designed to be dependable in real use."
    >
      <div className="grid gap-6">
        {featuredProjects.map((project, index) => (
          <article key={project.slug} className={`grid gap-5 rounded-[34px] border border-white/10 bg-white/4 p-5 lg:grid-cols-[0.92fr_1.08fr] ${index % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""}`}>
            <div className="space-y-4">
              <p className="text-[11px] uppercase tracking-[0.38em] text-white/50">{project.category}</p>
              <h2 className="text-3xl font-semibold tracking-tight text-foreground">{project.title}</h2>
              <p className="text-sm leading-7 text-muted-foreground">{project.summary}</p>
              <div className="flex flex-wrap gap-2">
                {project.architecture.slice(0, 4).map((item) => (
                  <span key={item} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] uppercase tracking-[0.26em] text-white/68">
                    {item}
                  </span>
                ))}
              </div>
              <a href={`/case-studies/${project.slug}`} className="inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-3 text-sm font-medium text-background transition hover:opacity-90">
                View case study
                <ArrowUpRight className="size-4" />
              </a>
            </div>

            <div className="grid gap-3 sm:grid-cols-3">
              {project.metrics.map((metric) => (
                <div key={metric} className="rounded-[24px] border border-white/8 bg-black/20 px-4 py-4 text-sm text-white/76">
                  {metric}
                </div>
              ))}
            </div>
          </article>
        ))}
      </div>
    </PageShell>
  )
}
