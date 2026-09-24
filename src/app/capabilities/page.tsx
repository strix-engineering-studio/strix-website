import type { Metadata } from "next"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { PageShell } from "@/components/shared/page-shell"
import { buildMetadata } from "@/lib/seo"
import { servicePages } from "@/lib/seo-content"
import { services, testimonials } from "@/lib/site"

export const metadata: Metadata = buildMetadata({
  title: "Capabilities | Strix Engineering Studio",
  description: "Product engineering, system architecture, backend systems, and AI-enabled workflow design.",
  path: "/capabilities",
  keywords: ["capabilities", "product engineering", "backend systems"],
})

export default function CapabilitiesPage() {
  return (
    <PageShell
      eyebrow="Capabilities"
      title="One studio, all the capabilities you need"
      description="Bring the stack together, eliminate silos, and keep the product experience flowing across every system and team."
    >
      <div className="grid gap-6 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
        <div className="space-y-5">
          <div className="rounded-xl border border-white/10 bg-white/4 p-5">
            <p className="text-[11px] uppercase tracking-[0.38em] text-white/50">Capabilities</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground">The work is modular, but the operating surface should feel unified.</h2>
            <p className="mt-4 text-sm leading-7 text-muted-foreground">Each capability is designed as part of a larger system rather than a disconnected service line.</p>
          </div>
          <a href="/contact" className="inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-3 text-sm font-medium text-background transition hover:opacity-90">
            Start discovery
            <ArrowUpRight className="size-4" />
          </a>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {services.map((service, index) => (
            <div key={service.title} className="rounded-xl border border-white/10 bg-white/4 p-5">
              <p className="text-[11px] uppercase tracking-[0.38em] text-white/50">0{index + 1}</p>
              <h3 className="mt-3 text-xl font-semibold text-foreground">{service.title}</h3>
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
      </div>

      <div className="rounded-xl border border-white/10 bg-white/4 p-5">
        <div className="flex items-center justify-between gap-3">
          <div>
            <p className="text-[11px] uppercase tracking-[0.38em] text-white/50">Service expertise</p>
            <h3 className="mt-3 text-2xl font-semibold text-foreground">Focused pages for distinct engineering intents</h3>
          </div>
          <Link href="/services" className="inline-flex items-center gap-2 text-sm font-medium text-foreground">
            Open service catalog
            <ArrowUpRight className="size-4" />
          </Link>
        </div>
        <div className="mt-5 flex flex-wrap gap-2">
          {servicePages.map((page) => (
            <Link
              key={page.slug}
              href={`/services/${page.slug}`}
              className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-foreground transition hover:bg-white/10"
            >
              {page.title}
            </Link>
          ))}
        </div>
      </div>

      <div className="grid gap-4 lg:grid-cols-3">
        {testimonials.map((testimonial) => (
          <div key={testimonial.name} className="rounded-xl border border-white/10 bg-white/4 p-5">
            <p className="text-sm leading-7 text-foreground/90">“{testimonial.quote}”</p>
            <p className="mt-5 text-sm font-medium text-foreground">{testimonial.name}</p>
            <p className="text-sm text-muted-foreground">
              {testimonial.role} · {testimonial.company}
            </p>
          </div>
        ))}
      </div>
    </PageShell>
  )
}