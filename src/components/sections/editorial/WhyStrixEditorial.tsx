import Link from "next/link";
import { ArrowUpRight, Compass, Code2, Eye, Layers } from "lucide-react";

const principles = [
  {
    icon: Compass,
    number: "01",
    title: "Product thinking first",
    description:
      "Start with the people, workflows, and business outcome. Use those to decide what to build and where engineering effort matters most.",
  },
  {
    icon: Code2,
    number: "02",
    title: "Direct engineering ownership",
    description:
      "Work directly with the engineers shaping the product and its technical foundations, from early decisions through implementation.",
  },
  {
    icon: Eye,
    number: "03",
    title: "Transparent delivery",
    description:
      "Keep scope, trade-offs, and progress visible so decisions can be made with a shared understanding of the work.",
  },
  {
    icon: Layers,
    number: "04",
    title: "Built for evolution",
    description:
      "Choose clear system boundaries and a suitable level of architecture so the product can change as its needs become clearer.",
  },
];

export function WhyStrixEditorial() {
  return (
    <section id="why-strix" className="border-b border-border py-16 sm:py-20 lg:py-24">
      <div className="strix-container">
        <header className="mb-10 grid gap-4 border-b border-border pb-7 md:grid-cols-12 md:items-end">
          <div className="space-y-4 md:col-span-8">
            <p className="editorial-meta text-primary">Why Strix</p>
            <h2 className="editorial-serif type-heading-1 text-foreground">
              Engineering shaped around the product.
            </h2>
          </div>
          <p className="text-sm leading-relaxed text-muted-foreground md:col-span-4">
            Product judgment, engineering craft, and clear collaboration belong in the same conversation.
          </p>
        </header>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {principles.map(({ icon: Icon, ...principle }) => (
            <article key={principle.number} className="border border-border bg-card p-5 sm:p-6">
              <div className="flex items-center justify-between border-b border-border pb-4">
                <span className="font-mono text-xs tracking-[0.18em] text-primary">{principle.number}</span>
                <Icon aria-hidden="true" className="size-5 text-foreground/70" strokeWidth={1.6} />
              </div>
              <h3 className="editorial-serif mt-5 text-2xl leading-tight text-foreground">
                {principle.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {principle.description}
              </p>
            </article>
          ))}
        </div>

        <Link
          href="/about"
          className="mt-7 inline-flex items-center gap-2 text-sm font-medium text-foreground transition-colors hover:text-primary"
        >
          Learn more about the studio
          <ArrowUpRight className="size-4" />
        </Link>
      </div>
    </section>
  );
}
