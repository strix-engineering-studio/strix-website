"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Layers3 } from "lucide-react";

export type PortfolioCategory =
  | "Client Projects"
  | "Studio Products"
  | "Experiments & Prototypes";

export type PortfolioItem = {
  slug: string;
  title: string;
  category: PortfolioCategory;
  categoryLabel: string;
  description: string;
  industry: string;
  href: string;
  linkLabel: string;
  image?: string;
  imageAlt: string;
  technologies: string[];
  status?: string;
  clientName?: string;
};

const filters: ("All Work" | PortfolioCategory)[] = [
  "All Work",
  "Client Projects",
  "Studio Products",
  "Experiments & Prototypes",
];

export function PortfolioExplorer({ items }: { items: PortfolioItem[] }) {
  const [activeFilter, setActiveFilter] = useState<(typeof filters)[number]>("All Work");
  const visibleItems = useMemo(
    () => activeFilter === "All Work" ? items : items.filter((item) => item.category === activeFilter),
    [activeFilter, items],
  );

  const counts = useMemo(() => ({
    "All Work": items.length,
    "Client Projects": items.filter((item) => item.category === "Client Projects").length,
    "Studio Products": items.filter((item) => item.category === "Studio Products").length,
    "Experiments & Prototypes": items.filter((item) => item.category === "Experiments & Prototypes").length,
  }), [items]);

  return (
    <div>
      <div className="mb-8 flex flex-wrap gap-2" role="group" aria-label="Filter portfolio projects">
        {filters.map((filter) => (
          <button
            key={filter}
            type="button"
            onClick={() => setActiveFilter(filter)}
            aria-pressed={activeFilter === filter}
            className={`min-h-10 border px-4 py-2 text-sm transition-colors ${
              activeFilter === filter
                ? "border-foreground bg-foreground text-background"
                : "border-border bg-background text-muted-foreground hover:border-foreground/40 hover:text-foreground"
            }`}
          >
            {filter} <span className="ml-1 font-mono text-xs opacity-70">{counts[filter]}</span>
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-12">
        {visibleItems.map((item, index) => {
          const wide = index % 3 === 0;
          return (
            <article
              key={`${item.category}-${item.slug}`}
              className={`group flex flex-col overflow-hidden border border-border bg-card ${wide ? "lg:col-span-7" : "lg:col-span-5"}`}
            >
              <Link
                href={item.href}
                aria-label={`${item.linkLabel}: ${item.title}`}
                className={`relative block w-full overflow-hidden border-b border-border bg-surface-warm ${wide ? "aspect-[16/9]" : "aspect-[4/3]"}`}
              >
                {item.image ? (
                  <Image
                    src={item.image}
                    alt={item.imageAlt}
                    fill
                    sizes={wide ? "(max-width: 768px) 100vw, 65vw" : "(max-width: 768px) 100vw, 40vw"}
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.025]"
                  />
                ) : (
                  <div className="absolute inset-0 blueprint-grid flex flex-col items-center justify-center gap-3 p-6 text-center">
                    <Layers3 aria-hidden="true" className="size-8 text-primary/80" strokeWidth={1.3} />
                    <span className="editorial-meta text-muted-foreground">Project profile · {item.categoryLabel}</span>
                    <span className="editorial-serif text-2xl text-foreground">{item.title}</span>
                  </div>
                )}
                {item.status && (
                  <span className="absolute bottom-3 left-3 border border-border bg-background/95 px-2.5 py-1 font-mono text-[10px] uppercase tracking-wide text-foreground">
                    {item.status}
                  </span>
                )}
              </Link>

              <div className={`flex flex-1 flex-col p-5 sm:p-6 ${wide ? "sm:grid sm:grid-cols-5 sm:gap-6" : ""}`}>
                <div className={wide ? "sm:col-span-3" : ""}>
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="editorial-meta text-primary">{item.categoryLabel}</span>
                    {item.clientName && <span className="text-xs text-muted-foreground">· {item.clientName}</span>}
                  </div>
                  <h2 className="editorial-serif mt-3 text-2xl leading-tight text-foreground sm:text-3xl">
                    <Link href={item.href} className="transition-colors hover:text-primary">{item.title}</Link>
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
                </div>

                <div className={`mt-5 flex flex-1 flex-col ${wide ? "sm:col-span-2 sm:mt-0" : ""}`}>
                  <p className="editorial-meta text-muted-foreground">{item.industry}</p>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {item.technologies.slice(0, 5).map((technology) => (
                      <span key={technology} className="border border-border bg-background px-2 py-1 font-mono text-[10px] text-muted-foreground">
                        {technology}
                      </span>
                    ))}
                  </div>
                  <Link href={item.href} className="mt-auto inline-flex items-center gap-2 border-t border-border pt-4 text-sm font-medium text-foreground transition-colors hover:text-primary sm:mt-auto">
                    {item.linkLabel}
                    <ArrowUpRight aria-hidden="true" className="size-4" />
                  </Link>
                </div>
              </div>
            </article>
          );
        })}
      </div>

      {visibleItems.length === 0 && (
        <p className="border border-dashed border-border p-8 text-center text-sm text-muted-foreground">
          No projects are listed in this category yet.
        </p>
      )}
    </div>
  );
}
