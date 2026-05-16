import { PageShell } from "@/components/shared/page-shell"
import { usesStack } from "@/lib/site"

export default function UsesPage() {
  return (
    <PageShell
      eyebrow="Uses"
      title="A pragmatic stack for designing and shipping premium product systems."
      description="The tools below support a workflow centered on speed, precision, and polished delivery."
    >
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {usesStack.map((item) => (
          <article key={item.label} className="rounded-[30px] border border-white/10 bg-white/5 p-5">
            <p className="text-xs uppercase tracking-[0.35em] text-emerald-300/80">{item.label}</p>
            <h2 className="mt-3 text-xl font-semibold text-white">{item.value}</h2>
            <p className="mt-3 text-sm leading-7 text-white/66">{item.description}</p>
          </article>
        ))}
      </div>
    </PageShell>
  )
}
