import { PageShell } from "@/components/shared/page-shell"

export default function AboutPage() {
  return (
    <PageShell
      eyebrow="About"
      title="A technical founder mindset, applied to client work."
      description="Prathamesh More builds products with the discipline of a systems engineer and the urgency of a founder. The focus is always production readiness, architecture clarity, and launch momentum."
    >
      <div className="grid gap-4 lg:grid-cols-3">
        {[
          ["Product thinking", "Treats every build like a customer-facing product with measurable outcomes."],
          ["Engineering depth", "Designs backend systems, auth, data, and AI flows with long-term maintainability."],
          ["Execution speed", "Moves quickly while protecting quality, security, and release confidence."],
        ].map(([title, text]) => (
          <article key={title} className="rounded-[30px] border border-white/10 bg-white/5 p-5">
            <h2 className="text-xl font-semibold text-white">{title}</h2>
            <p className="mt-3 text-sm leading-7 text-white/66">{text}</p>
          </article>
        ))}
      </div>
    </PageShell>
  )
}
