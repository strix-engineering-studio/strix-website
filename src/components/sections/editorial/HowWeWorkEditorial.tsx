"use client";

import Link from "next/link";
import { ArrowUpRight, FileCheck } from "lucide-react";
import { cn } from "@/lib/utils";

const stages = [
  {
    step: "01",
    name: "Discover",
    phase: "UNDERSTAND THE CONTEXT",
    timeline: "Discovery",
    objective:
      "Understand the business goal, users, existing systems, and constraints that should shape the product.",
    activities: [
      "Map user needs and key workflows",
      "Identify technical unknowns and dependencies",
      "Clarify constraints and success criteria",
    ],
    deliverableTitle: "Shared understanding of the problem",
    deliverableDetails:
      "A concise view of the opportunity, users, current state, constraints, and the questions the work needs to answer.",
  },
  {
    step: "02",
    name: "Define",
    phase: "SHAPE THE RIGHT SYSTEM",
    timeline: "Product direction",
    objective:
      "Set product scope and technical direction around the outcomes that matter, without adding complexity the product does not need.",
    activities: [
      "Prioritize product workflows and capabilities",
      "Choose an appropriate architecture and stack",
      "Plan integrations, data, and security boundaries",
    ],
    deliverableTitle: "Product scope and technical plan",
    deliverableDetails:
      "A practical outline of the first release, system boundaries, dependencies, and key decisions for implementation.",
  },
  {
    step: "03",
    name: "Build",
    phase: "ENGINEER IN ITERATIONS",
    timeline: "Build",
    objective:
      "Implement the agreed product scope in reviewable increments, with attention to reliability, usability, and maintainability.",
    activities: [
      "Develop product interfaces, APIs, and integrations",
      "Review behavior against agreed requirements",
      "Document important technical decisions",
    ],
    deliverableTitle: "Working product increments",
    deliverableDetails:
      "Reviewable software that connects the core user workflows to the services and data behind them.",
  },
  {
    step: "04",
    name: "Launch",
    phase: "PREPARE FOR REAL USE",
    timeline: "Release",
    objective:
      "Validate important product paths and prepare the system, team, and release process for real users.",
    activities: [
      "Verify core workflows and failure cases",
      "Prepare deployment and release steps",
      "Set up operational visibility where appropriate",
    ],
    deliverableTitle: "Release-ready product",
    deliverableDetails:
      "A product prepared for deployment, with release considerations and operational needs understood by the team.",
  },
  {
    step: "05",
    name: "Evolve",
    phase: "LEARN AND IMPROVE",
    timeline: "Ongoing",
    objective:
      "Use what the product and its users reveal to guide improvements, operational support, and the next set of product decisions.",
    activities: [
      "Prioritize improvements from real usage",
      "Address maintenance and technical debt",
      "Extend product capabilities as needs change",
    ],
    deliverableTitle: "A product that can keep improving",
    deliverableDetails:
      "Ongoing engineering can be scoped to the product's operational and roadmap needs.",
  },
];

export function HowWeWorkEditorial() {
  return (
    <section id="how-we-work" className="relative border-b border-border/80 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16 flex flex-col justify-between gap-6 border-b border-border/80 pb-10 md:flex-row md:items-end">
          <div className="max-w-3xl space-y-3">
            <span className="font-mono text-[11px] uppercase tracking-[0.28em] text-primary">
              [DELIVERY APPROACH // 05]
            </span>
            <h2 className="editorial-serif text-4xl tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Discover, define, build, launch & evolve.
            </h2>
            <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
              A product engineering process that connects business context, product decisions, implementation, release, and what comes next.
            </p>
          </div>

          <Link
            href="/contact"
            className="inline-flex items-center gap-2 border border-primary bg-primary px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.16em] text-primary-foreground transition-colors hover:bg-primary/90"
          >
            <span>Start discovery</span>
            <ArrowUpRight className="size-3.5" />
          </Link>
        </div>

        {/* Connected Visual Timeline */}
        <div className="relative">
          {/* Vertical Connecting Line (Hidden on mobile, visible on desktop) */}
          <div
            aria-hidden="true"
            className="absolute top-8 bottom-8 left-8 hidden w-px bg-border lg:left-1/2 lg:-translate-x-1/2 lg:block"
          />

          <div className="space-y-12">
            {stages.map((stage, index) => {
              const isEven = index % 2 === 0;

              return (
                <div
                  key={stage.step}
                  className="relative grid grid-cols-1 gap-6 lg:grid-cols-12 lg:gap-12 lg:items-center"
                >
                  {/* Step Marker Badge (Center on Desktop) */}
                  <div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 size-11 items-center justify-center rounded-full border border-primary bg-background shadow-md">
                    <span className="editorial-serif text-base font-bold text-primary">
                      {stage.step}
                    </span>
                  </div>

                  {/* Left Column (Content or Deliverable depending on even/odd) */}
                  <div
                    className={cn(
                      "lg:col-span-6",
                      isEven ? "lg:text-right" : "lg:order-2 lg:text-left",
                    )}
                  >
                    <div className="space-y-3 rounded-lg border border-border bg-card p-6 shadow-sm">
                      <div
                        className={cn(
                          "flex flex-wrap items-center gap-2 border-b border-border/80 pb-3",
                          isEven ? "lg:justify-end" : "lg:justify-start",
                        )}
                      >
                        <span className="lg:hidden editorial-serif text-xl font-bold text-primary">
                          {stage.step}.
                        </span>
                        <span className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                          {stage.phase}
                        </span>
                        <span className="rounded-full border border-primary/20 bg-primary/5 px-2 py-0.5 font-mono text-[9px] text-primary">
                          {stage.timeline}
                        </span>
                      </div>

                      <h3 className="editorial-serif text-2xl font-normal text-foreground">
                        {stage.name}
                      </h3>

                      <p className="text-xs leading-relaxed text-muted-foreground sm:text-sm">
                        {stage.objective}
                      </p>

                      <div
                        className={cn(
                          "pt-2 flex flex-col gap-1.5 text-xs text-muted-foreground",
                          isEven ? "lg:items-end" : "lg:items-start",
                        )}
                      >
                        {stage.activities.map((act) => (
                          <div key={act} className="flex items-center gap-2">
                            <span className="size-1 rounded-full bg-primary" />
                            <span>{act}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Concrete Client Deliverable */}
                  <div
                    className={cn(
                      "lg:col-span-6",
                      isEven ? "lg:order-2" : "lg:order-1",
                    )}
                  >
                    <div className="rounded-lg border border-primary/20 bg-primary/5 p-6 text-left">
                      <div className="flex items-center gap-2 text-primary">
                        <FileCheck className="size-4" />
                        <span className="font-mono text-[10px] uppercase tracking-[0.2em] font-semibold">
                          Client Deliverable at Step {stage.step}
                        </span>
                      </div>

                      <h4 className="mt-2 text-sm font-semibold text-foreground sm:text-base">
                        {stage.deliverableTitle}
                      </h4>

                      <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                        {stage.deliverableDetails}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

