"use client";

import Link from "next/link";
import { ArrowUpRight, CheckCircle2, Clock, FileCheck, Layers, Terminal } from "lucide-react";
import { cn } from "@/lib/utils";

const stages = [
  {
    step: "01",
    name: "Discovery & Requirements",
    phase: "PHASE 01 // SCOPING",
    timeline: "Week 01",
    objective:
      "Clarify the core business problem, uncover non-functional constraints, and map user workflows before writing code.",
    activities: [
      "User journey mapping and workflow modeling",
      "Technical risk identification and dependency audit",
      "Integration feasibility (payments, auth, third-party APIs)",
      "Scope boundaries to prevent feature creep",
    ],
    deliverableTitle: "System Scope Blueprint & Technical Audit",
    deliverableDetails:
      "A concrete architectural document defining exact workflows, entity models, third-party dependencies, and estimated delivery timeline.",
  },
  {
    step: "02",
    name: "Product Strategy & Data Modeling",
    phase: "PHASE 02 // ARCHITECTURE",
    timeline: "Week 01 - 02",
    objective:
      "Translate product vision into actionable domain models, data relationships, and prioritized release milestones.",
    activities: [
      "Entity relationship design (relational & document schemas)",
      "MVP feature prioritization and trade-off mapping",
      "API contract definitions (REST / GraphQL)",
      "State management & security policy planning",
    ],
    deliverableTitle: "Product Specification & Schema Contracts",
    deliverableDetails:
      "Complete data schemas, API specifications, and a sprint-by-sprint technical execution roadmap.",
  },
  {
    step: "03",
    name: "Architecture & Interface Design",
    phase: "PHASE 03 // BLUEPRINT",
    timeline: "Week 02",
    objective:
      "Finalize interface systems, responsive UI components, and backend architectural scaffolding.",
    activities: [
      "Editorial component design and design system tokens",
      "Repository setup with strict linting and TypeScript checks",
      "Database migration foundation and seed scripts",
      "Authentication and authorization policies (RBAC)",
    ],
    deliverableTitle: "Clickable UI Flows & Boilerplate Scaffolding",
    deliverableDetails:
      "Interactive component prototypes and working base repository with verified database connections.",
  },
  {
    step: "04",
    name: "Engineering & Iterative Sprints",
    phase: "PHASE 04 // IMPLEMENTATION",
    timeline: "Weeks 02 - 05",
    objective:
      "Build production software with weekly working demos, continuous integration, and transparent code commits.",
    activities: [
      "Full-stack development (Next.js / Flutter / NestJS)",
      "Test-driven core logic and schema validation (Zod)",
      "Payment gateway & webhook integration",
      "Weekly live demos with direct engineer communication",
    ],
    deliverableTitle: "Full Source Code & Weekly Working Builds",
    deliverableDetails:
      "Auditable Git commits, accessible staging environments, and functional application milestones delivered weekly.",
  },
  {
    step: "05",
    name: "Testing & Production Deployment",
    phase: "PHASE 05 // RELEASE",
    timeline: "Week 05 - 06",
    objective:
      "Rigorous end-to-end verification, load validation, domain configuration, and app store publishing.",
    activities: [
      "End-to-end scenario testing and edge-case validation",
      "Google Play & Apple App Store submission management",
      "Production cloud provisioning with SSL & CDN",
      "Logging, error monitoring (Sentry), and alerting configuration",
    ],
    deliverableTitle: "Live Production System & App Store Distribution",
    deliverableDetails:
      "Verified production URL, approved mobile store listings, zero-downtime CI/CD pipeline, and operational telemetry.",
  },
  {
    step: "06",
    name: "Continuous Improvement & Support",
    phase: "PHASE 06 // EVOLUTION",
    timeline: "Post-Launch",
    objective:
      "Durable partnership to support initial users, resolve live issues, optimize performance, and engineer new capabilities.",
    activities: [
      "Production telemetry monitoring and error triage",
      "Database index tuning and query optimization",
      "Feature iteration based on real user metrics",
      "Direct technical advisory for founders and operators",
    ],
    deliverableTitle: "Ongoing Engineering Partnership & SLA Support",
    deliverableDetails:
      "Guaranteed response times, scheduled maintenance windows, and a dedicated team that knows your codebase inside out.",
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
              [DELIVERY JOURNEY // 06]
            </span>
            <h2 className="editorial-serif text-4xl tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              How we work:{" "}
              <span className="italic font-normal text-primary">
                from discovery to continuous scale.
              </span>
            </h2>
            <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
              A transparent, connected timeline with concrete deliverables at every
              stage. No black-box development, no account manager intermediaries,
              and no surprises at launch.
            </p>
          </div>

          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.16em] text-primary-foreground shadow-sm transition-all hover:bg-primary/90"
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

