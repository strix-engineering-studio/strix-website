import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowUpRight,
  Bot,
  CheckCircle2,
  Cloud,
  Cpu,
  Database,
  Globe,
  Layers,
  RefreshCw,
  Rocket,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Workflow,
} from "lucide-react";
import { buildMetadata } from "@/seo/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Engineering Services | Strix Engineering Studio",
  description:
    "Explore Strix's 8 core software product engineering services: POC Development, MVP Engineering, Full Product Delivery, Web & Mobile Apps, AI Engineering, Backend & Cloud, and Modernization.",
  path: "/services",
  keywords: [
    "POC development",
    "MVP engineering",
    "full product engineering",
    "web application development",
    "mobile application development",
    "AI product engineering",
    "backend and API engineering",
    "product modernization",
  ],
});

const coreServices = [
  {
    number: "01",
    slug: "poc-development",
    title: "Proof of Concept (POC) Development",
    eyebrow: "TECHNICAL FEASIBILITY & DE-RISKING",
    timeframe: "1 to 3 Weeks",
    icon: Rocket,
    problem:
      "You have an ambitious technical idea, novel algorithm, or complex integration, but you need concrete proof of feasibility before committing serious capital.",
    strixProvides:
      "Rapidly isolated technical prototyping, architecture spikes, benchmark evaluations, and feasibility audits to de-risk key uncertainties.",
    deliverables: [
      "Interactive working prototype",
      "Technical feasibility and risk assessment",
      "Architecture blueprint & technology recommendations",
      "Live interactive demonstration",
    ],
    technologies: ["Next.js", "TypeScript", "Python", "LLM APIs", "Docker"],
    relatedProjects: ["Imrabo", "QR IoT Sensor POC"],
  },
  {
    number: "02",
    slug: "mvp-development",
    title: "Minimum Viable Product (MVP) Development",
    eyebrow: "MARKET VALIDATION & FIRST CUSTOMERS",
    timeframe: "3 to 6 Weeks",
    icon: Sparkles,
    problem:
      "You need to get a functional, secure, and production-grade software product in front of real users and paying customers without months of delayed delivery.",
    strixProvides:
      "Focused full-stack engineering prioritizing core value loops, secure payment processing, authentication, and launch telemetry.",
    deliverables: [
      "Production web and/or mobile application",
      "Role-based access control (RBAC) & authentication",
      "Payment processing (Razorpay / Stripe)",
      "Zero-downtime deployment & monitoring telemetry",
    ],
    technologies: ["Next.js", "Flutter", "NestJS", "PostgreSQL", "Firebase"],
    relatedProjects: ["Hugged", "H2Go", "Classes360"],
  },
  {
    number: "03",
    slug: "product-engineering",
    title: "Full Product Engineering",
    eyebrow: "END-TO-END PRODUCT SYSTEMS",
    timeframe: "Long-Term Engineering Partnership",
    icon: Layers,
    problem:
      "Your company requires continuous, disciplined software delivery across web, mobile, distributed backends, and cloud infrastructure with high reliability.",
    strixProvides:
      "Full technical lifecycle ownership: architecture modeling, sprint-based full-stack engineering, test automation, and proactive operational support.",
    deliverables: [
      "Multi-platform applications (Web, iOS, Android)",
      "Distributed backend & microservices architecture",
      "Automated test suites & CI/CD deployment pipelines",
      "Direct senior engineering ownership & SLA support",
    ],
    technologies: ["Next.js", "Flutter", "NestJS", "PostgreSQL", "Prisma", "Docker"],
    relatedProjects: ["Hugged", "H2Go", "MagicalStones.store"],
  },
  {
    number: "04",
    slug: "web-application-development",
    title: "Web Application Development",
    eyebrow: "HIGH-SPEED EDITORIAL WEB PLATFORMS",
    timeframe: "Fixed Scope or Sprints",
    icon: Globe,
    problem:
      "Your existing web app is slow, fragile, or hard to scale, or you need a modern SaaS platform with instant page loads, great SEO, and intuitive user experiences.",
    strixProvides:
      "Server-rendered web systems engineered with React 19, Next.js App Router, and Tailwind CSS. Built for sub-second speeds, accessibility, and high conversion.",
    deliverables: [
      "Server-rendered Next.js web application",
      "Custom responsive editorial design system",
      "Type-safe API routes & server actions",
      "Lighthouse 95+ performance optimization",
    ],
    technologies: ["Next.js 16+", "React 19", "TypeScript", "Tailwind CSS", "Zod"],
    relatedProjects: ["MagicalStones.store", "GoHere"],
  },
  {
    number: "05",
    slug: "mobile-application-development",
    title: "Mobile Application Development",
    eyebrow: "CROSS-PLATFORM FLUTTER ENGINEERING",
    timeframe: "4 to 8 Weeks",
    icon: Smartphone,
    problem:
      "Maintaining separate iOS (Swift) and Android (Kotlin) codebases is expensive and results in desynchronized feature releases and bugs.",
    strixProvides:
      "High-performance cross-platform apps built with Flutter and Dart from a single codebase, delivering native 60fps fluidity and app store publishing.",
    deliverables: [
      "Single-codebase Flutter mobile application (iOS & Android)",
      "Offline-first local cache & background syncing",
      "Push notification dispatch via Firebase Cloud Messaging",
      "Full Apple App Store & Google Play approval management",
    ],
    technologies: ["Flutter", "Dart", "Firebase", "FCM", "App Store Connect"],
    relatedProjects: ["Hugged", "Instameasure"],
  },
  {
    number: "06",
    slug: "ai-product-engineering",
    title: "AI Product Engineering",
    eyebrow: "AGENTIC WORKFLOWS & NATIVE AI CAPABILITIES",
    timeframe: "2 to 6 Weeks",
    icon: Bot,
    problem:
      "Off-the-shelf chatbots and raw LLM wrappers hallucinate, fail on edge cases, and don't integrate deeply with real business databases and user tasks.",
    strixProvides:
      "Production AI engineering with structured JSON schema outputs, multi-model routing, semantic RAG pipelines, and deterministic fallback guardrails.",
    deliverables: [
      "Deterministic AI task execution pipelines",
      "Vector search index & retrieval context filters",
      "Structured output validation with Zod / Pydantic",
      "Observability logging for prompt latency and tokens",
    ],
    technologies: ["LLM APIs", "Python", "TypeScript", "Vector DBs", "Claude / OpenAI"],
    relatedProjects: ["Imrabo", "Thoughtstream"],
  },
  {
    number: "07",
    slug: "backend-systems",
    title: "Backend, API & Cloud Engineering",
    eyebrow: "RESILIENT SERVICES & DATA ARCHITECTURE",
    timeframe: "Sprints or Infrastructure Sprints",
    icon: Database,
    problem:
      "Unstructured APIs, unindexed databases, and lack of transaction safety lead to data corruption, webhook failures, and difficult maintenance.",
    strixProvides:
      "Modular NestJS and Node.js backends with clean domain boundaries, relational data integrity (PostgreSQL/Prisma), and Dockerized cloud deployment.",
    deliverables: [
      "Modular NestJS / Node.js backend architecture",
      "Relational & document database schemas with migrations",
      "Idempotent API endpoints & webhook handlers",
      "Automated CI/CD pipelines & Docker containerization",
    ],
    technologies: ["NestJS", "Node.js", "PostgreSQL", "MongoDB", "Prisma", "Docker"],
    relatedProjects: ["Classes360", "Hugged"],
  },
  {
    number: "08",
    slug: "product-modernization",
    title: "Product Modernization & Maintenance",
    eyebrow: "REFACTORING, SCALING & SYSTEM HEALTH",
    timeframe: "Audit or Ongoing Retainer",
    icon: RefreshCw,
    problem:
      "Legacy codebases, slow response times, technical debt, and missing documentation are slowing your product development down to a crawl.",
    strixProvides:
      "Disciplined code refactoring, migration to TypeScript and modern frameworks, performance audits, database query tuning, and reliable ongoing support.",
    deliverables: [
      "Comprehensive architectural health audit & remediation plan",
      "Incremental refactoring without breaking production",
      "TypeScript migration and automated test coverage",
      "Guaranteed operational SLA and emergency bug response",
    ],
    technologies: ["TypeScript", "NestJS", "Next.js", "PostgreSQL", "Sentry"],
    relatedProjects: ["Hugged", "Instameasure"],
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Editorial Hero Header */}
      <section className="relative overflow-hidden border-b border-border/80 pt-16 pb-20 lg:pt-24 lg:pb-28">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 blueprint-grid opacity-60"
        />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl space-y-5">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-3.5 py-1">
              <span className="size-1.5 rounded-full bg-primary" />
              <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.24em] text-primary">
                Commercial Capabilities & Offerings
              </span>
            </div>

            <h1 className="editorial-serif text-5xl leading-tight tracking-tight text-foreground sm:text-6xl lg:text-7xl">
              Software engineering services built for{" "}
              <span className="italic font-normal text-primary">
                production reality.
              </span>
            </h1>

            <p className="max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              Strix bridges product intent and robust software architecture. From
              validating initial proof of concepts to engineering high-scale
              production platforms, our 8 core services deliver disciplined
              ownership without bloat.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-xs font-semibold uppercase tracking-[0.18em] text-primary-foreground shadow-md transition-all hover:bg-primary/90"
              >
                <span>Discuss your requirements</span>
                <ArrowUpRight className="size-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid (8 Detailed Editorial Cards) */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
            {coreServices.map((service) => {
              const Icon = service.icon;

              return (
                <article
                  key={service.slug}
                  className="group relative flex flex-col justify-between rounded-xl border border-border bg-card p-7 shadow-sm transition-all duration-300 hover:border-primary/50 hover:shadow-lg lg:p-9"
                >
                  <div>
                    {/* Top Meta */}
                    <div className="flex items-center justify-between border-b border-border/80 pb-4">
                      <div className="flex items-center gap-3">
                        <span className="editorial-serif text-3xl font-normal text-primary">
                          {service.number}
                        </span>
                        <span className="font-mono text-[9px] uppercase tracking-widest text-muted-foreground">
                          {service.eyebrow}
                        </span>
                      </div>

                      <div className="flex size-9 items-center justify-center rounded-sm border border-border bg-muted/40 text-foreground transition-colors group-hover:border-primary group-hover:text-primary">
                        <Icon className="size-4" />
                      </div>
                    </div>

                    {/* Title */}
                    <h2 className="editorial-serif mt-5 text-2xl font-normal text-foreground transition-colors group-hover:text-primary sm:text-3xl">
                      <Link href={`/services/${service.slug}`} className="focus:outline-hidden">
                        {service.title}
                      </Link>
                    </h2>

                    {/* Customer Problem */}
                    <div className="mt-4 rounded-sm border border-border/60 bg-muted/20 p-3.5">
                      <p className="font-mono text-[9px] uppercase tracking-wider text-muted-foreground">
                        The Problem You Face:
                      </p>
                      <p className="mt-1 text-xs leading-relaxed text-foreground/90">
                        {service.problem}
                      </p>
                    </div>

                    {/* What Strix Provides */}
                    <p className="mt-4 text-xs leading-relaxed text-muted-foreground sm:text-sm">
                      {service.strixProvides}
                    </p>

                    {/* Deliverables */}
                    <div className="mt-5 space-y-2 border-t border-border/60 pt-4">
                      <p className="font-mono text-[10px] uppercase tracking-wider text-foreground">
                        Key Deliverables:
                      </p>
                      <ul className="space-y-1.5 text-xs text-muted-foreground">
                        {service.deliverables.map((deliv) => (
                          <li key={deliv} className="flex items-start gap-2">
                            <span className="mt-1 size-1.5 shrink-0 rounded-full bg-primary" />
                            <span>{deliv}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Tech Badges */}
                    <div className="mt-6 flex flex-wrap gap-1.5">
                      {service.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full border border-border bg-background px-2.5 py-0.5 font-mono text-[10px] text-foreground/80"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Bottom Action */}
                  <div className="mt-8 flex items-center justify-between border-t border-border/80 pt-4">
                    <span className="font-mono text-[10px] text-muted-foreground">
                      TIMEFRAME: {service.timeframe.toUpperCase()}
                    </span>

                    <Link
                      href={`/services/${service.slug}`}
                      className="inline-flex items-center gap-1.5 font-mono text-xs font-semibold uppercase tracking-wider text-primary transition-colors hover:text-foreground"
                    >
                      <span>Explore service</span>
                      <ArrowUpRight className="size-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="border-t border-border/80 bg-muted/20 py-16">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <span className="font-mono text-[11px] uppercase tracking-[0.26em] text-primary">
            NEED A CUSTOM ENGAGEMENT?
          </span>
          <h2 className="editorial-serif mt-3 text-3xl font-normal text-foreground sm:text-4xl">
            Let&apos;s map the right engineering scope for your product.
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm text-muted-foreground">
            Whether your project requires a two-week architectural spike or a
            multi-month dedicated product engineering team, we provide fixed
            scope clarity and senior execution.
          </p>
          <div className="mt-6">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-xs font-semibold uppercase tracking-[0.18em] text-primary-foreground shadow-md transition-all hover:bg-primary/90"
            >
              <span>Start project inquiry</span>
              <ArrowUpRight className="size-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
