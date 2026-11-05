"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowUpRight,
  Bot,
  Cloud,
  Cpu,
  Database,
  Globe,
  Layers,
  Smartphone,
  Workflow,
  Zap,
} from "lucide-react";
import { cn } from "@/lib/utils";

const capabilities = [
  {
    id: "web",
    layer: "LAYER 01",
    title: "Web Applications",
    subtitle: "High-performance, scalable web systems and consoles",
    icon: Globe,
    description:
      "Modern web platforms built with React 19, Next.js App Router, TypeScript, and server components. Designed for sub-second page loads, SEO authority, accessibility, and high conversion.",
    architecture: [
      "Server-Side Rendering (SSR)",
      "Next.js App Router & Server Actions",
      "Progressive Hydration & Island Arch",
      "Tailwind CSS & Editorial Design Systems",
    ],
    technologies: ["Next.js", "React 19", "TypeScript", "Tailwind CSS", "Zod", "Vercel"],
    deliverable: "Production web applications, client portals, and administrative consoles.",
    link: "/services/nextjs-development",
  },
  {
    id: "mobile",
    layer: "LAYER 02",
    title: "Mobile Applications",
    subtitle: "Cross-platform iOS and Android native experiences",
    icon: Smartphone,
    description:
      "Single-codebase, high-fidelity mobile apps built with Flutter and Dart. From multi-role access control and offline synchronization to app store submission and FCM notifications.",
    architecture: [
      "Clean Architecture & BLoC / Riverpod",
      "Role-Based Access Control (RBAC)",
      "Offline-first local cache & syncing",
      "Firebase Cloud Messaging (FCM) push",
    ],
    technologies: ["Flutter", "Dart", "Firebase", "App Store Connect", "Google Play Console"],
    deliverable: "Live App Store & Google Play distribution with full update lifecycle.",
    link: "/services/mobile-application-development",
  },
  {
    id: "saas",
    layer: "LAYER 03",
    title: "SaaS Platforms",
    subtitle: "Multi-tenant software ready for commercial scale",
    icon: Layers,
    description:
      "Turn business workflows into self-serve SaaS products with tenant isolation, flexible subscription billing, role hierarchies, audit logs, and analytics telemetry.",
    architecture: [
      "Multi-tenant schema & tenant isolation",
      "Subscription workflows & Stripe / Razorpay billing",
      "Granular permission matrix & invitations",
      "Usage metering & rate-limiting guards",
    ],
    technologies: ["PostgreSQL", "Prisma", "NestJS", "Stripe", "Razorpay", "Redis"],
    deliverable: "Production-ready SaaS architecture ready for paying customers.",
    link: "/services/saas-development",
  },
  {
    id: "ai",
    layer: "LAYER 04",
    title: "AI-Powered Products",
    subtitle: "Native AI workflows beyond superficial chat wrappers",
    icon: Bot,
    description:
      "Integrate generative and agentic AI directly into user tasks. We engineer prompt pipelines, structured outputs, fallback chains, vector search (RAG), and deterministic safety guardrails.",
    architecture: [
      "Structured output validation with Zod / Pydantic",
      "Retrieval-Augmented Generation (RAG)",
      "Multi-model routing & latency optimization",
      "Deterministic guardrails & fallback circuits",
    ],
    technologies: ["LLM APIs", "Python", "TypeScript", "Vector DBs", "OpenAI / Claude / Gemini"],
    deliverable: "Reliable AI capabilities embedded into actual business operations.",
    link: "/services/ai-product-engineering",
  },
  {
    id: "backend",
    layer: "LAYER 05",
    title: "Backend & API Systems",
    subtitle: "Modular services built for throughput and clarity",
    icon: Database,
    description:
      "Enterprise backend systems using NestJS and Node.js. Clean domain boundaries, dependency injection, robust transaction boundaries, idempotent webhooks, and documented APIs.",
    architecture: [
      "Domain-Driven Design (DDD) & Modular NestJS",
      "Idempotent API endpoints & request tracking",
      "Relational & Document DB modeling",
      "Job queues, workers & event distribution",
    ],
    technologies: ["NestJS", "Node.js", "PostgreSQL", "MongoDB", "Prisma", "BullMQ"],
    deliverable: "Auditable backend services with OpenAPI specs and automated test suites.",
    link: "/services/backend-systems",
  },
  {
    id: "cloud",
    layer: "LAYER 06",
    title: "Cloud Infrastructure",
    subtitle: "Predictable, secure, and observable infrastructure",
    icon: Cloud,
    description:
      "Cloud architecture that minimizes overhead while guaranteeing 99.9% availability. Containerized environments, CI/CD deployment pipelines, automated backups, and actionable monitoring.",
    architecture: [
      "Containerization & Docker builds",
      "Automated CI/CD via GitHub Actions",
      "Secrets management & environment parity",
      "Structured logs, metrics & alerts (Sentry / Datadog)",
    ],
    technologies: ["Docker", "GitHub Actions", "Vercel", "AWS / GCP", "Redis", "Cloudflare"],
    deliverable: "Automated deployment pipelines and zero-downtime rollout infrastructure.",
    link: "/services/backend-systems",
  },
  {
    id: "integrations",
    layer: "LAYER 07",
    title: "Integrations & Automation",
    subtitle: "Connecting payments, communications, and third-party tools",
    icon: Workflow,
    description:
      "Connecting your product with the external world: Razorpay/Stripe payments, WhatsApp APIs, transactional email, SMS, IoT hardware, and custom enterprise webhook integrations.",
    architecture: [
      "Verified webhook signatures & retry handlers",
      "Event-driven background sync pipelines",
      "Third-party rate-limit buffering",
      "Transactional notification dispatchers",
    ],
    technologies: ["Razorpay", "Twilio", "Resend", "SendGrid", "Webhooks", "REST / GraphQL"],
    deliverable: "Bulletproof third-party integrations with automatic recovery and failure alerts.",
    link: "/services/software-integration",
  },
];

export function CapabilitiesEditorial() {
  const [activeTab, setActiveTab] = useState(capabilities[0].id);
  const activeCapability = capabilities.find((c) => c.id === activeTab) || capabilities[0];

  return (
    <section id="capabilities" className="relative border-b border-border/80 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-14 flex flex-col justify-between gap-6 border-b border-border/80 pb-10 md:flex-row md:items-end">
          <div className="max-w-2xl space-y-3">
            <span className="font-mono text-[11px] uppercase tracking-[0.28em] text-primary">
              [CAPABILITY MATRIX // 02]
            </span>
            <h2 className="editorial-serif text-4xl tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Engineering capabilities for{" "}
              <span className="italic font-normal text-primary">
                modern software products.
              </span>
            </h2>
            <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
              The stack is framed as an operating system for your business, not a
              disconnected collection of technologies. Every layer is built to
              reduce handoff friction and scale smoothly.
            </p>
          </div>

          <Link
            href="/services"
            className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-primary transition-colors hover:text-foreground"
          >
            <span>Explore all services</span>
            <ArrowUpRight className="size-4" />
          </Link>
        </div>

        {/* Interactive Capability Explorer */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
          {/* Navigation Tabs (Col 1-4) */}
          <div className="flex flex-row overflow-x-auto gap-2 pb-2 lg:flex-col lg:col-span-4 lg:overflow-visible">
            {capabilities.map((item) => {
              const Icon = item.icon;
              const isActive = item.id === activeTab;

              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setActiveTab(item.id)}
                  className={cn(
                    "group flex shrink-0 items-center justify-between rounded-md border p-3.5 text-left transition-all duration-200 lg:w-full",
                    isActive
                      ? "border-primary bg-primary/10 shadow-sm"
                      : "border-border bg-card/60 hover:border-border/80 hover:bg-card",
                  )}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={cn(
                        "flex size-8 shrink-0 items-center justify-center rounded-sm transition-colors",
                        isActive
                          ? "bg-primary text-primary-foreground"
                          : "bg-muted text-foreground/70 group-hover:text-primary",
                      )}
                    >
                      <Icon className="size-4" />
                    </div>

                    <div>
                      <p className="font-mono text-[9px] uppercase tracking-wider text-muted-foreground">
                        {item.layer}
                      </p>
                      <p
                        className={cn(
                          "text-sm font-semibold transition-colors",
                          isActive ? "text-primary" : "text-foreground",
                        )}
                      >
                        {item.title}
                      </p>
                    </div>
                  </div>

                  <span
                    className={cn(
                      "hidden font-mono text-xs transition-transform duration-200 lg:inline-block",
                      isActive
                        ? "translate-x-0 text-primary"
                        : "opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 text-muted-foreground",
                    )}
                  >
                    →
                  </span>
                </button>
              );
            })}
          </div>

          {/* Active Capability Deep Dive (Col 5-12) */}
          <div className="relative rounded-lg border border-border bg-card p-6 shadow-sm lg:col-span-8 lg:p-8">
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-border/80 pb-5">
              <div>
                <span className="font-mono text-[10px] uppercase tracking-[0.24em] text-primary">
                  {activeCapability.layer} // SPECIFICATION
                </span>
                <h3 className="editorial-serif mt-1 text-2xl font-normal text-foreground sm:text-3xl">
                  {activeCapability.title}
                </h3>
              </div>

              <Link
                href={activeCapability.link}
                className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-foreground transition-colors hover:border-primary hover:text-primary"
              >
                <span>Service detail</span>
                <ArrowUpRight className="size-3.5" />
              </Link>
            </div>

            <p className="mt-5 text-sm leading-relaxed text-muted-foreground sm:text-base">
              {activeCapability.description}
            </p>

            {/* Architecture Highlights */}
            <div className="mt-7">
              <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-muted-foreground">
                Architectural Principles
              </p>
              <div className="mt-3 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                {activeCapability.architecture.map((arch) => (
                  <div
                    key={arch}
                    className="flex items-start gap-2.5 rounded-sm border border-border/60 bg-muted/30 p-2.5 text-xs text-foreground/90"
                  >
                    <span className="mt-0.5 size-1.5 shrink-0 rounded-full bg-primary" />
                    <span>{arch}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Deliverable Callout */}
            <div className="mt-7 rounded-sm border border-primary/20 bg-primary/5 p-4">
              <p className="font-mono text-[10px] uppercase tracking-wider text-primary">
                What Strix Delivers:
              </p>
              <p className="mt-1 text-xs font-medium leading-relaxed text-foreground sm:text-sm">
                {activeCapability.deliverable}
              </p>
            </div>

            {/* Tech Stack Badges */}
            <div className="mt-7 border-t border-border/70 pt-5">
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                Core Technologies
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {activeCapability.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-border bg-background px-3 py-1 font-mono text-[11px] text-foreground/80 shadow-2xs"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

