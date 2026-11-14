import Link from "next/link";
import { ArrowUpRight, Layers, Lightbulb, Rocket } from "lucide-react";

const pathways = [
  {
    number: "01",
    title: "Validate",
    label: "DISCOVERY · FEASIBILITY · PoC",
    description:
      "Clarify the product opportunity, test technical assumptions, and find a practical path forward before committing to a full build.",
    outcomes: ["Product discovery", "Technical feasibility", "Proofs of concept"],
    href: "/services/poc-development",
    icon: Lightbulb,
  },
  {
    number: "02",
    title: "Launch",
    label: "MVP · NEW PRODUCT ENGINEERING",
    description:
      "Turn the essential product experience into reliable software, with the architecture and workflows needed to support real users.",
    outcomes: ["MVP development", "Web and mobile products", "SaaS engineering"],
    href: "/services/mvp-development",
    icon: Rocket,
  },
  {
    number: "03",
    title: "Grow",
    label: "SCALING · MODERNIZATION · PARTNERSHIP",
    description:
      "Improve an existing product, strengthen its technical foundations, and keep evolving the system as needs change.",
    outcomes: ["Product scaling", "Modernization", "Ongoing engineering"],
    href: "/services/product-engineering",
    icon: Layers,
  },
];

export function WhatWeBuildEditorial() {
  return (
    <section id="what-we-build" className="border-b border-border py-16 sm:py-20 lg:py-24">
      <div className="strix-container">
        <header className="mb-10 flex flex-col justify-between gap-5 border-b border-border pb-7 md:flex-row md:items-end">
          <div className="max-w-3xl space-y-4">
            <p className="editorial-meta text-primary">How we help</p>
            <h2 className="editorial-serif type-heading-1 text-foreground">
              From first question to lasting product.
            </h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-muted-foreground sm:text-base">
            Work with Strix at the stage your product needs: find the right direction, bring it to market, or make it stronger over time.
          </p>
        </header>

        <div className="grid gap-4 lg:grid-cols-3">
          {pathways.map((pathway) => {
            const Icon = pathway.icon;
            return (
              <article key={pathway.number} className="flex h-full flex-col border border-border bg-card p-5 sm:p-6">
                <div className="flex items-center justify-between border-b border-border pb-4">
                  <span className="font-mono text-xs tracking-[0.18em] text-primary">{pathway.number}</span>
                  <Icon aria-hidden="true" className="size-5 text-foreground/70" strokeWidth={1.6} />
                </div>
                <div className="flex-1 py-5">
                  <p className="editorial-meta text-muted-foreground">{pathway.label}</p>
                  <h3 className="editorial-serif mt-2 text-3xl text-foreground">{pathway.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{pathway.description}</p>
                  <ul className="mt-5 space-y-2 border-t border-border pt-4">
                    {pathway.outcomes.map((outcome) => (
                      <li key={outcome} className="flex items-center gap-2 text-sm text-foreground/80">
                        <span className="size-1.5 shrink-0 bg-primary" aria-hidden="true" />
                        {outcome}
                      </li>
                    ))}
                  </ul>
                </div>
                <Link
                  href={pathway.href}
                  className="inline-flex items-center gap-2 border-t border-border pt-4 text-sm font-medium text-foreground transition-colors hover:text-primary"
                >
                  Explore {pathway.title}
                  <ArrowUpRight className="size-4" />
                </Link>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
