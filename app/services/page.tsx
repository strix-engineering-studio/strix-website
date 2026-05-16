import { PageShell } from "@/components/shared/page-shell"
import { services } from "@/lib/site"

export default function ServicesPage() {
  return (
    <PageShell
      eyebrow="Services"
      title="Engineering services built for product velocity and technical confidence."
      description="Each engagement is shaped like a product delivery system: clear scope, strong architecture, and a launch-ready result."
    >
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {services.map((service) => (
          <article key={service.title} className="rounded-[30px] border border-white/10 bg-white/5 p-5">
            <h2 className="text-xl font-semibold text-white">{service.title}</h2>
            <p className="mt-3 text-sm leading-7 text-white/66">{service.summary}</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {service.bullets.map((bullet) => (
                <span key={bullet} className="rounded-full border border-white/8 bg-black/20 px-3 py-1.5 text-xs text-white/68">
                  {bullet}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </PageShell>
  )
}
