import Link from "next/link";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";

const systemParts = [
  { number: "01", title: "Product strategy", position: "left-[5%] top-[12%]" },
  { number: "02", title: "User experience", position: "right-[5%] top-[12%]" },
  { number: "03", title: "Software architecture", position: "left-[5%] bottom-[12%]" },
  { number: "04", title: "Operations & data", position: "right-[5%] bottom-[12%]" },
];

export function HeroEditorial() {
  return (
    <section className="relative overflow-hidden border-b border-border py-12 sm:py-16 lg:py-20">
      <div className="pointer-events-none absolute inset-0 blueprint-grid opacity-50" aria-hidden="true" />

      <div className="strix-container relative">
        <div className="mb-8 flex flex-wrap items-center justify-between gap-3 border-b border-border pb-3">
          <span className="editorial-meta text-primary">Strix Engineering Studio</span>
          <span className="editorial-meta text-muted-foreground">Product strategy · Software engineering · Systems</span>
        </div>

        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="space-y-6 lg:col-span-7">
            <p className="editorial-meta border-l-2 border-primary py-1 pl-3 text-primary">
              Build the right system before building the software
            </p>

            <h1 className="editorial-serif type-display-xl max-w-4xl text-foreground">
              Your idea deserves more than a prototype.
            </h1>

            <p className="body-large max-w-2xl text-muted-foreground">
              Strix helps businesses turn ideas into reliable digital products through product strategy, software engineering, and scalable technology systems.
            </p>

            <div className="flex flex-wrap gap-3 pt-2">
              <Link
                href="/contact"
                className="group inline-flex min-h-12 items-center gap-3 border border-primary bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
              >
                <span>Start a Project</span>
                <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>
              <Link
                href="#selected-work"
                className="inline-flex min-h-12 items-center gap-3 border border-border bg-background px-5 py-3 text-sm font-medium text-foreground transition-colors hover:border-foreground/40"
              >
                <span>Explore Our Work</span>
                <ArrowDownRight className="size-4 text-muted-foreground" />
              </Link>
            </div>
          </div>

          <div
            role="img"
            aria-label="A product system diagram connecting strategy, user experience, software architecture, and operations through a shared digital product."
            className="relative isolate mx-auto aspect-[1.08] w-full max-w-[34rem] overflow-hidden border border-border bg-surface-warm p-4 sm:p-6 lg:col-span-5"
          >
            <div className="absolute inset-0 blueprint-grid opacity-70" aria-hidden="true" />
            <div className="relative flex items-center justify-between border-b border-border pb-3">
              <span className="editorial-meta text-foreground">System map</span>
              <span className="font-mono text-[10px] text-muted-foreground">STRIX / PRODUCT ENGINEERING</span>
            </div>

            <svg
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              className="pointer-events-none absolute inset-x-0 top-12 h-[calc(100%-3rem)] w-full"
              aria-hidden="true"
            >
              <path d="M26 25 L43 43 M74 25 L57 43 M26 75 L43 57 M74 75 L57 57" fill="none" stroke="var(--strix-orange)" strokeOpacity="0.55" strokeWidth="0.35" strokeDasharray="1.5 1.5" />
            </svg>

            {systemParts.map((part) => (
              <div
                key={part.number}
                className={`absolute z-10 flex min-h-16 w-[42%] flex-col justify-center border border-border bg-background/95 p-2.5 shadow-[var(--shadow-soft)] sm:min-h-[4.5rem] sm:p-3 ${part.position}`}
              >
                <span className="font-mono text-[9px] tracking-widest text-primary">{part.number}</span>
                <span className="mt-1 text-[11px] font-medium leading-tight text-foreground sm:text-xs">{part.title}</span>
              </div>
            ))}

            <div className="absolute left-1/2 top-1/2 z-20 flex w-[40%] -translate-x-1/2 -translate-y-1/2 flex-col items-center border border-primary bg-background px-2 py-4 text-center shadow-[var(--shadow-raised)] sm:py-5">
              <span className="editorial-meta text-primary">Connected system</span>
              <span className="editorial-serif mt-1 text-xl leading-none text-foreground sm:text-2xl">Digital product</span>
            </div>

            <div className="absolute inset-x-4 bottom-3 flex items-center justify-between border-t border-border pt-2 sm:inset-x-6">
              <span className="font-mono text-[9px] uppercase tracking-wider text-muted-foreground">Designed for real use</span>
              <span className="font-mono text-[9px] text-primary">01 — 04</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
