"use client";

import Link from "next/link";
import { ArrowUpRight, BookOpen, ExternalLink, Sparkles } from "lucide-react";
import { SiInstagram, SiLinkerd } from "react-icons/si";

const articles = [
  {
    slug: "nestjs-architecture-for-operational-products",
    title: "NestJS Architecture for Operational Products",
    theme: "SOFTWARE ARCHITECTURE",
    date: "OCT 2026",
    readTime: "7 MIN READ",
    summary:
      "Why framework conventions matter for operational longevity: structuring dependency injection, domain boundaries, and database transactions for maintainability.",
    href: "/insights/nestjs-architecture-for-operational-products",
  },
  {
    slug: "ai-systems-that-feel-native",
    title: "AI Systems that Feel Native: Beyond Chat Wrappers",
    theme: "AI PRODUCT ENGINEERING",
    date: "SEP 2026",
    readTime: "9 MIN READ",
    summary:
      "Moving beyond toy demos: integrating probabilistic LLM reasoning into deterministic business applications using Zod validation and fallback circuits.",
    href: "/insights/ai-systems-that-feel-native",
  },
  {
    slug: "scalable-api-ops",
    title: "Scalable API Operations: Designing Resilient Endpoints",
    theme: "BACKEND & RESILIENCE",
    date: "AUG 2026",
    readTime: "6 MIN READ",
    summary:
      "A tactical guide to handling network interruptions, duplicate payment events, and third-party rate limits using idempotency keys and queues.",
    href: "/insights/scalable-api-ops",
  },
];

const socialSignals = [
  {
    platform: "LinkedIn",
    icon: SiLinkerd,
    signalNumber: "SIGNAL / 042",
    date: "RECENT UPDATE",
    theme: "MVP STRATEGY",
    headline: "A prototype proves an idea. Production proves a system.",
    excerpt:
      "Most teams focus 90% of their energy on the 'happy path' demo. But production systems spend 90% of their operational lifetime handling timeouts, edge cases, concurrent state updates, and network disconnects.",
    url: "https://www.linkedin.com/company/strix-engineering-studio/",
  },
  {
    platform: "LinkedIn",
    icon: SiLinkerd,
    signalNumber: "SIGNAL / 038",
    date: "ARCHITECTURE NOTE",
    theme: "DATA INTEGRITY",
    headline: "Security and data integrity are not launch-day tasks.",
    excerpt:
      "Designing RBAC, secrets rotation, and audit logs after your application is already live is 10x harder than building with clean security boundaries from day zero.",
    url: "https://www.linkedin.com/company/strix-engineering-studio/",
  },
  {
    platform: "Instagram",
    icon: SiInstagram,
    signalNumber: "STUDIO / REEL",
    date: "VISUAL SCHEMATIC",
    theme: "SYSTEM SCHEMATICS",
    headline:
      "Actionable observability: logs, metrics, traces, and alert hygiene.",
    excerpt:
      "If you cannot see it, you cannot operate it. How we instrument Next.js and NestJS applications for instant error correlation before users report issues.",
    url: "https://www.instagram.com/strix.website/",
  },
];

export function EngineeringJournalEditorial() {
  return (
    <section
      id="engineering-journal"
      className="relative border-b border-border/80 py-20 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-14 flex flex-col justify-between gap-6 border-b border-border/80 pb-10 md:flex-row md:items-end">
          <div className="max-w-3xl space-y-3">
            <span className="font-mono text-[11px] uppercase tracking-[0.28em] text-primary">
              [PUBLICATIONS // 08]
            </span>
            <h2 className="editorial-serif text-4xl tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Engineering journal &{" "}
              <span className="italic font-normal text-primary">
                studio thinking.
              </span>
            </h2>
            <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
              Essays, technical breakdowns, and curated signals from our work
              designing software architectures, MVP strategies, and production
              systems.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/insights"
              className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-primary transition-colors hover:text-foreground"
            >
              <span>View all insights</span>
              <ArrowUpRight className="size-4" />
            </Link>
          </div>
        </div>

        {/* 2-Part Grid: In-depth Articles + Social Signals */}
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
          {/* Left Column: Long-form Engineering Essays (7 cols) */}
          <div className="space-y-6 lg:col-span-7">
            <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
              Deep-Dive Technical Essays:
            </p>

            <div className="space-y-4">
              {articles.map((art) => (
                <article
                  key={art.slug}
                  className="group relative rounded-lg border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:border-primary/50"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-border/70 pb-3">
                    <span className="font-mono text-[10px] uppercase tracking-wider text-primary">
                      {art.theme}
                    </span>
                    <span className="font-mono text-[10px] text-muted-foreground">
                      {art.date} · {art.readTime}
                    </span>
                  </div>

                  <h3 className="editorial-serif mt-4 text-2xl font-normal text-foreground transition-colors group-hover:text-primary">
                    <Link href={art.href} className="focus:outline-hidden">
                      {art.title}
                    </Link>
                  </h3>

                  <p className="mt-2 text-xs leading-relaxed text-muted-foreground sm:text-sm">
                    {art.summary}
                  </p>

                  <div className="mt-4 pt-2">
                    <Link
                      href={art.href}
                      className="inline-flex items-center gap-1.5 font-mono text-xs text-foreground transition-colors hover:text-primary"
                    >
                      <span>Read essay</span>
                      <ArrowUpRight className="size-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Right Column: Curated Studio Signals from LinkedIn & Instagram (5 cols) */}
          <div className="space-y-6 lg:col-span-5">
            <div className="flex items-center justify-between">
              <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
                Signals from the Studio:
              </p>
              <div className="flex items-center gap-3">
                <a
                  href="https://www.linkedin.com/company/strix-engineering-studio/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground transition-colors hover:text-primary"
                  aria-label="Strix LinkedIn"
                >
                  <SiLinkerd className="size-3.5" />
                </a>
                <a
                  href="https://www.instagram.com/strix.website/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground transition-colors hover:text-primary"
                  aria-label="Strix Instagram"
                >
                  <SiInstagram className="size-3.5" />
                </a>
              </div>
            </div>

            <div className="space-y-4">
              {socialSignals.map((sig, idx) => {
                const Icon = sig.icon;

                return (
                  <div
                    key={idx}
                    className="rounded-lg border border-border/80 bg-muted/20 p-5 transition-colors hover:border-border"
                  >
                    <div className="flex items-center justify-between border-b border-border/60 pb-2.5">
                      <div className="flex items-center gap-2">
                        <Icon className="size-3.5 text-primary" />
                        <span className="font-mono text-[10px] uppercase tracking-wider text-foreground">
                          {sig.signalNumber}
                        </span>
                      </div>
                      <span className="font-mono text-[9px] text-muted-foreground">
                        {sig.theme}
                      </span>
                    </div>

                    <h4 className="editorial-serif mt-3 text-lg font-normal text-foreground">
                      {sig.headline}
                    </h4>

                    <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                      “{sig.excerpt}”
                    </p>

                    <div className="mt-4 pt-2">
                      <a
                        href={sig.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 font-mono text-[11px] text-primary transition-colors hover:text-foreground"
                      >
                        <span>View post on {sig.platform}</span>
                        <ExternalLink className="size-3" />
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
