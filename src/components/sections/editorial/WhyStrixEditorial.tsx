"use client";

import Link from "next/link";
import {
  ArrowUpRight,
  CheckCircle2,
  Code2,
  Compass,
  Cpu,
  Eye,
  GitBranch,
  Layers,
  MessageSquare,
  ShieldCheck,
  Users,
} from "lucide-react";

const principles = [
  {
    icon: Compass,
    title: "Engineering-First Thinking",
    label: "FOUNDATION",
    description:
      "We build systems with architectural integrity rather than superficial shortcuts. Technical debt is controlled from day one by designing clean boundaries, structured contracts, and failure handling before writing code.",
    evidence: "Every project begins with a system model and non-functional constraint audit.",
  },
  {
    icon: Users,
    title: "Direct Development Ownership",
    label: "OWNERSHIP",
    description:
      "You communicate directly with senior engineers designing and building your product. No junior handoffs, no layers of non-technical account managers, and no loss of nuance in translation.",
    evidence: "Direct Slack / WhatsApp channel & weekly screen-share code walkthroughs.",
  },
  {
    icon: Cpu,
    title: "Product-Focused Execution",
    label: "FOCUS",
    description:
      "We write code that serves business realities. Technical choices are made based on your actual stage, user volume, and budget constraints — not engineering vanity or speculative hype.",
    evidence: "Features mapped directly to user acquisition, retention, and operational clarity.",
  },
  {
    icon: Layers,
    title: "Maintainable Architecture",
    label: "CLARITY",
    description:
      "Codebases are modular, fully typed with TypeScript, and documented. If you bring an in-house team on board later, they can read, test, and extend the system without rewriting it from scratch.",
    evidence: "Standardized Clean Architecture, strict Zod schemas, and auditable repository structure.",
  },
  {
    icon: Eye,
    title: "Transparent Communication",
    label: "VISIBILITY",
    description:
      "No mystery surrounding progress. You receive working staging builds weekly, commit access to the code repository, and upfront discussions on any architectural trade-offs.",
    evidence: "Live staging environments, continuous deployment logs, and documented decisions.",
  },
  {
    icon: ShieldCheck,
    title: "Production-Oriented Delivery",
    label: "RESILIENCE",
    description:
      "A prototype proves an idea; production proves a system. We engineer for edge cases, network drops, concurrent sessions, payment failures, and data security from the very first release.",
    evidence: "Idempotent payment webhooks, database transaction safety, and role-based access control.",
  },
  {
    icon: GitBranch,
    title: "Long-Term Technical Support",
    label: "CONTINUITY",
    description:
      "We don't disappear after launch day. Strix remains available for operational support, error monitoring, performance tuning, and evolving your product as your business grows.",
    evidence: "Post-launch SLA support, telemetry monitoring, and active maintenance engagements.",
  },
];

export function WhyStrixEditorial() {
  return (
    <section id="why-strix" className="relative border-b border-border/80 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16 flex flex-col justify-between gap-6 border-b border-border/80 pb-10 md:flex-row md:items-end">
          <div className="max-w-3xl space-y-3">
            <span className="font-mono text-[11px] uppercase tracking-[0.28em] text-primary">
              [VALUE PRINCIPLES // 07]
            </span>
            <h2 className="editorial-serif text-4xl tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Why Strix:{" "}
              <span className="italic font-normal text-primary">
                engineering integrity over marketing noise.
              </span>
            </h2>
            <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
              We operate as a dedicated engineering studio. Our credibility is built
              on clean software architecture, verifiable outcomes, and direct technical
              ownership — not inflated statistics or marketing slogans.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
              VERIFIED PRACTICE
            </span>
          </div>
        </div>

        {/* Principles Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {principles.map((principle, index) => {
            const Icon = principle.icon;

            return (
              <article
                key={principle.title}
                className="group relative flex flex-col justify-between rounded-lg border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:border-primary/50 hover:bg-card/90"
              >
                <div>
                  <div className="flex items-center justify-between border-b border-border/80 pb-3.5">
                    <div className="flex size-9 items-center justify-center rounded-sm border border-border bg-muted/40 text-foreground transition-colors group-hover:border-primary group-hover:text-primary">
                      <Icon className="size-4" />
                    </div>
                    <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-muted-foreground">
                      {principle.label}
                    </span>
                  </div>

                  <h3 className="editorial-serif mt-5 text-xl font-normal text-foreground sm:text-2xl">
                    {principle.title}
                  </h3>

                  <p className="mt-2.5 text-xs leading-relaxed text-muted-foreground sm:text-sm">
                    {principle.description}
                  </p>
                </div>

                <div className="mt-6 rounded-sm border border-border/60 bg-muted/20 p-3">
                  <p className="font-mono text-[9px] uppercase tracking-wider text-primary">
                    How We Demonstrate This:
                  </p>
                  <p className="mt-1 text-xs text-foreground/85">
                    {principle.evidence}
                  </p>
                </div>
              </article>
            );
          })}

          {/* 8th Card: Studio Manifesto Callout */}
          <div className="flex flex-col justify-between rounded-lg border border-primary/30 bg-primary/5 p-6 md:col-span-2 lg:col-span-2">
            <div className="space-y-3">
              <span className="font-mono text-[10px] uppercase tracking-[0.24em] text-primary">
                STUDIO COMMITMENT
              </span>
              <h3 className="editorial-serif text-2xl font-normal text-foreground sm:text-3xl">
                “Build the right system before building more software.”
              </h3>
              <p className="text-xs leading-relaxed text-muted-foreground sm:text-sm max-w-xl">
                We believe the majority of software failures are not caused by bad
                syntax or slow frameworks — they are caused by building the wrong
                abstractions and failing to design for real-world operational failure
                modes. That is what Strix exists to prevent.
              </p>
            </div>

            <div className="pt-6">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.18em] text-primary transition-colors hover:text-foreground"
              >
                <span>Read our engineering manifesto</span>
                <ArrowUpRight className="size-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

