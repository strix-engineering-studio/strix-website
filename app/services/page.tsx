import { PageShell } from "@/components/shared/page-shell"
import { services } from "@/lib/site"

export default function ServicesPage() {
  return (
    <PageShell
      eyebrow="Services"
      title="Capabilities designed to work as one system"
      description="From product engineering to long-term support, the focus is on clarity, reliability, and a better operating rhythm."
    >
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {services.map((service) => (
          <div key={service.title} className="rounded-[30px] border border-white/10 bg-white/4 p-5">
            <p className="text-[11px] uppercase tracking-[0.38em] text-white/50">{service.title}</p>
            <p className="mt-3 text-sm leading-7 text-muted-foreground">{service.summary}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {service.bullets.map((bullet) => (
                <span key={bullet} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] uppercase tracking-[0.26em] text-white/68">
                  {bullet}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </PageShell>
  )
}
