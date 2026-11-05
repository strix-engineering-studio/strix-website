"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Activity,
  ArrowUpRight,
  CheckCircle2,
  Code2,
  Database,
  Layers,
  Lock,
  RefreshCw,
  Server,
  ShieldCheck,
  Terminal,
} from "lucide-react";
import { cn } from "@/lib/utils";

const engineeringLayers = [
  {
    id: "frontend",
    number: "01",
    name: "Frontend Architecture",
    headline: "Fast, resilient interfaces designed for human interaction.",
    principle: "Client state is minimized; server rendering handles layout stability and SEO.",
    description:
      "We build with React 19 and Next.js App Router, using server components to minimize client bundle weight. Routing, form mutations, and optimistic state updates are governed by strict schema validation (Zod) and typed data contracts.",
    diagramImage: "/assets/production-systems/2.png",
    diagramCaption: "Demo Happy Path vs. Real-World Interruptions & Edge Cases",
    specs: [
      { label: "Core Web Vitals", value: "Sub-second LCP & 0 CLS" },
      { label: "Data Integrity", value: "Runtime schema validation (Zod)" },
      { label: "State Strategy", value: "Server-first with minimal client state" },
      { label: "Accessibility", value: "WCAG 2.1 AA keyboard & ARIA compliance" },
    ],
  },
  {
    id: "backend",
    number: "02",
    name: "Backend Systems",
    headline: "Modular services with strict transactional boundaries.",
    principle: "Services fail safely; retries and timeouts prevent cascading degradation.",
    description:
      "Engineered in NestJS and Node.js with dependency injection and clean domain boundaries. Every business operation executes within transactional boundaries with idempotent handlers to withstand network disconnects and duplicate requests.",
    diagramImage: "/assets/production-systems/3.png",
    diagramCaption: "Reliability is Designed Before it is Needed (Timeouts, Fallbacks, Recovery)",
    specs: [
      { label: "Pattern", value: "Domain-Driven Design (DDD) & NestJS" },
      { label: "Idempotency", value: "Unique idempotency keys on mutation endpoints" },
      { label: "Resilience", value: "Circuit breakers, dead-letter queues, exponential backoff" },
      { label: "Security", value: "JWT / Session auth with role-based policies (RBAC)" },
    ],
  },
  {
    id: "database",
    number: "03",
    name: "Database Design",
    headline: "Structured schemas, relational integrity, and migration safety.",
    principle: "Data outlives code; write schemas that survive feature changes.",
    description:
      "Whether using PostgreSQL with Prisma or MongoDB for document-heavy domains, we design normalized data structures, indexed lookup paths, foreign key constraints, and repeatable migration pipelines that never lose data during schema evolutions.",
    diagramImage: "/assets/production-systems/4.png",
    diagramCaption: "Security & Data Integrity are Not Launch-Day Tasks",
    specs: [
      { label: "ORM / Engine", value: "Prisma ORM with PostgreSQL & MongoDB" },
      { label: "Migrations", value: "Automated, version-controlled schema migrations" },
      { label: "Consistency", value: "ACID transactions for billing & critical states" },
      { label: "Backups", value: "Automated point-in-time recovery & snapshots" },
    ],
  },
  {
    id: "api",
    number: "04",
    name: "API Integrations",
    headline: "Hardened webhook handlers and defensive third-party contracts.",
    principle: "Never trust external APIs to be fast, available, or consistent.",
    description:
      "From Razorpay and Stripe payments to WhatsApp and push messaging, our integration layer isolates third-party downtime through asynchronous worker queues (BullMQ), HMAC signature verification, and replay protection.",
    diagramImage: "/assets/production-systems/6.png",
    diagramCaption: "Production Includes Everything Around the Code",
    specs: [
      { label: "Verification", value: "Cryptographic HMAC signature checking" },
      { label: "Queuing", value: "Redis-backed BullMQ for background jobs" },
      { label: "Rate Limiting", value: "Token-bucket throttles for inbound/outbound calls" },
      { label: "Documentation", value: "OpenAPI 3.0 / Swagger typed specifications" },
    ],
  },
  {
    id: "ai",
    number: "05",
    name: "AI Workflows",
    headline: "Deterministic guardrails wrapped around probabilistic models.",
    principle: "AI should solve concrete user bottlenecks, not generate hallucinations.",
    description:
      "We design AI systems with structured JSON outputs, semantic caching, fallback models, and human-in-the-loop validation. Retrieval-Augmented Generation (RAG) is coupled with vector index filtering so prompts receive exact context.",
    diagramImage: "/assets/production-systems/7.png",
    diagramCaption: "Production-Readiness Checklist: Build the Right System First",
    specs: [
      { label: "Output Validation", value: "Strict JSON schema enforcement with Zod" },
      { label: "Routing", value: "Dynamic cost / latency multi-LLM router" },
      { label: "Context", value: "Vector similarity search with metadata pre-filtering" },
      { label: "Guardrails", value: "Regex & semantic safety filters before response execution" },
    ],
  },
  {
    id: "observability",
    number: "06",
    name: "Observability & Ops",
    headline: "If you can't see it, you can't operate it.",
    principle: "Errors should trigger alerts before clients or users notice.",
    description:
      "Actionable observability: structured JSON logs, distributed trace IDs across client and server requests, Prometheus metrics, and automated alert routing. CI/CD pipelines run linting, unit tests, and smoke tests before deployment.",
    diagramImage: "/assets/production-systems/5.png",
    diagramCaption: "Actionable Observability: Logs, Metrics, Traces & Alerting",
    specs: [
      { label: "Logging", value: "Structured JSON with correlated Request-IDs" },
      { label: "Monitoring", value: "Uptime checks & threshold alerts on latency spikes" },
      { label: "CI / CD", value: "Automated GitHub Actions with rollback capabilities" },
      { label: "Incident Playbooks", value: "Documented operational runbooks for production support" },
    ],
  },
];

export function InsideEngineeringEditorial() {
  const [activeLayerId, setActiveLayerId] = useState(engineeringLayers[0].id);
  const activeLayer =
    engineeringLayers.find((layer) => layer.id === activeLayerId) ||
    engineeringLayers[0];

  return (
    <section id="engineering-story" className="relative border-b border-border/80 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-14 flex flex-col justify-between gap-6 border-b border-border/80 pb-10 md:flex-row md:items-end">
          <div className="max-w-3xl space-y-3">
            <span className="font-mono text-[11px] uppercase tracking-[0.28em] text-primary">
              [ENGINEERING STORY // 05]
            </span>
            <h2 className="editorial-serif text-4xl tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Inside the engineering:{" "}
              <span className="italic font-normal text-primary">
                how Strix builds systems.
              </span>
            </h2>
            <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
              A software product is more than user interface mockups. Explore our
              system design principles, reliability patterns, and architectural
              decisions across all layers of the engineering stack.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
              ENGINEERED FOR REALITY
            </span>
          </div>
        </div>

        {/* Interactive Layer Explorer */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
          {/* Layer Selection Column (4 cols) */}
          <div className="space-y-2 lg:col-span-4">
            <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
              Select Architecture Layer:
            </p>

            <div className="flex flex-row overflow-x-auto gap-2 pb-2 lg:flex-col lg:overflow-visible">
              {engineeringLayers.map((layer) => {
                const isActive = layer.id === activeLayerId;

                return (
                  <button
                    key={layer.id}
                    type="button"
                    onClick={() => setActiveLayerId(layer.id)}
                    className={cn(
                      "group flex shrink-0 items-center justify-between rounded-md border p-3 text-left transition-all lg:w-full",
                      isActive
                        ? "border-primary bg-primary/10 shadow-sm"
                        : "border-border bg-card/60 hover:border-border/80 hover:bg-card",
                    )}
                  >
                    <div className="flex items-center gap-3">
                      <span
                        className={cn(
                          "font-mono text-xs font-semibold",
                          isActive ? "text-primary" : "text-muted-foreground",
                        )}
                      >
                        {layer.number}
                      </span>
                      <span
                        className={cn(
                          "text-sm font-medium",
                          isActive ? "text-primary" : "text-foreground",
                        )}
                      >
                        {layer.name}
                      </span>
                    </div>

                    <span
                      className={cn(
                        "hidden font-mono text-xs lg:inline-block transition-transform",
                        isActive
                          ? "text-primary translate-x-0"
                          : "opacity-0 -translate-x-2 text-muted-foreground group-hover:opacity-100 group-hover:translate-x-0",
                      )}
                    >
                      →
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Layer Detail & Diagram Visual (8 cols) */}
          <div className="rounded-lg border border-border bg-card p-6 shadow-sm lg:col-span-8 lg:p-8">
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-border/80 pb-5">
              <div>
                <span className="font-mono text-[10px] uppercase tracking-[0.24em] text-primary">
                  LAYER {activeLayer.number} // ARCHITECTURAL DEEP-DIVE
                </span>
                <h3 className="editorial-serif mt-1 text-2xl font-normal text-foreground sm:text-3xl">
                  {activeLayer.headline}
                </h3>
              </div>

              <div className="rounded-full border border-border bg-background px-3 py-1 font-mono text-[10px] text-muted-foreground">
                SPEC: VALIDATED
              </div>
            </div>

            {/* Core Principle Callout */}
            <div className="mt-5 rounded-sm border border-primary/20 bg-primary/5 p-3.5">
              <p className="font-mono text-[10px] uppercase tracking-wider text-primary">
                Operating Principle:
              </p>
              <p className="editorial-serif mt-1 text-base italic text-foreground">
                “{activeLayer.principle}”
              </p>
            </div>

            <p className="mt-5 text-sm leading-relaxed text-muted-foreground sm:text-base">
              {activeLayer.description}
            </p>

            {/* Schematic Illustration from Production Systems Assets */}
            <div className="relative my-7 overflow-hidden rounded-md border border-border bg-sand/20 dark:bg-card">
              <div className="flex items-center justify-between border-b border-border/80 bg-muted/40 px-4 py-2">
                <span className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                  FIG. {activeLayer.number} // PRODUCTION SYSTEM SPECIFICATION
                </span>
                <span className="font-mono text-[10px] text-primary">
                  STRIX ARCHITECTURE
                </span>
              </div>

              <div className="relative aspect-[16/9] w-full overflow-hidden">
                <Image
                  src={activeLayer.diagramImage}
                  alt={activeLayer.diagramCaption}
                  fill
                  sizes="(max-width: 768px) 100vw, 720px"
                  className="object-cover"
                />
              </div>

              <div className="border-t border-border/70 bg-card/90 px-4 py-2">
                <p className="font-mono text-[11px] text-muted-foreground">
                  {activeLayer.diagramCaption}
                </p>
              </div>
            </div>

            {/* Technical Specifications Grid */}
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
                Technical Specifications & Standards
              </p>
              <div className="mt-3 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                {activeLayer.specs.map((spec) => (
                  <div
                    key={spec.label}
                    className="flex flex-col rounded-sm border border-border/60 bg-muted/30 p-3"
                  >
                    <span className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                      {spec.label}
                    </span>
                    <span className="mt-1 text-xs font-semibold text-foreground">
                      {spec.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

