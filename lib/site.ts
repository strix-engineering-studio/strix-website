export type NavItem = {
    href: string
    label: string
}

export type Project = {
    slug: string
    title: string
    category: string
    summary: string
    tagline: string
    stack: string[]
    metrics: string[]
    timeline: string
    spotlight: string
    problem: string
    solution: string
    result: string
    architecture: string[]
    deployment: string[]
    highlights: string[]
}

export type Service = {
    title: string
    summary: string
    bullets: string[]
    visual: string
}

export type Testimonial = {
    quote: string
    name: string
    role: string
    company: string
}

export type TimelineItem = {
    title: string
    description: string
    year: string
    kind: string
}

export type UseItem = {
    label: string
    value: string
    description: string
}

export const navigation: NavItem[] = [
    { href: "/work", label: "Work" },
    { href: "/services", label: "Services" },
    { href: "/blog", label: "Blog" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
]

export const heroStats = [
    { label: "Production systems shipped", value: 28 },
    { label: "APIs deployed", value: 60 },
    { label: "Mobile apps launched", value: 9 },
    { label: "AI integrations completed", value: 18 },
    { label: "Cloud deployments", value: 34 },
    { label: "Releases without rollback", value: 21 },
]

export const featuredProjects: Project[] = [
    {
        slug: "ai-workflow-platform",
        title: "AI Workflow Platform",
        category: "AI + SaaS",
        summary:
            "A production-grade orchestration layer for automating research, retrieval, and content workflows across multiple teams.",
        tagline: "A founder-grade operating system for AI-enabled execution.",
        stack: ["Next.js", "NestJS", "PostgreSQL", "Prisma", "OpenAI", "Redis"],
        metrics: ["42% faster turnaround", "<200ms internal API p95", "6 core automations"],
        timeline: "5 weeks",
        spotlight: "Orchestrated multi-step AI jobs with audit trails, retry logic, and realtime feedback.",
        problem:
            "The client needed a way to coordinate multiple AI tasks without creating brittle one-off scripts.",
        solution:
            "I designed an event-driven workflow engine, added queue-backed execution, and surfaced a clean operator UI for monitoring every job.",
        result:
            "Teams now launch and observe AI work from one place, with clearer ownership and predictable delivery.",
        architecture: ["API gateway", "Queue workers", "AI prompts", "Realtime status stream", "Audit log"],
        deployment: ["Vercel frontend", "Railway workers", "Managed Postgres", "Redis queue"],
        highlights: ["LLM routing", "approval gates", "observable workflow history"],
    },
    {
        slug: "racerapi",
        title: "RacerAPI",
        category: "Backend",
        summary:
            "A high-throughput backend platform built for real-time telemetry, secure integrations, and analytics-heavy endpoints.",
        tagline: "A backend that behaves like infrastructure, not a demo.",
        stack: ["NestJS", "PostgreSQL", "Prisma", "Redis", "Docker", "Vercel"],
        metrics: ["99.96% uptime", "120k monthly requests", "3x faster dashboard load"],
        timeline: "4 weeks",
        spotlight: "Tuned API latency, hardened auth, and designed a stable schema for rapid product iteration.",
        problem:
            "Their product hit a ceiling because every new feature increased the risk of a cascading performance issue.",
        solution:
            "I introduced a modular domain architecture, cache-first reads, and crisp validation at every boundary.",
        result:
            "The system now supports more usage without needing a rewrite.",
        architecture: ["Domain modules", "Rate limiting", "Caching", "Structured logs", "Schema validation"],
        deployment: ["CI pipeline", "Preview environments", "Blue/green rollout", "Database migrations"],
        highlights: ["predictable latency", "typed contracts", "production hardening"],
    },
    {
        slug: "flutter-production-app",
        title: "Flutter Production App",
        category: "Mobile",
        summary:
            "A polished mobile application with offline-first state, realtime sync, and a clean product UX for daily operations.",
        tagline: "Mobile execution with desktop-grade rigor.",
        stack: ["Flutter", "Firebase", "REST APIs", "Riverpod", "SQLite"],
        metrics: ["4.8 star app rating", "2 offline modes", "96% crash-free sessions"],
        timeline: "6 weeks",
        spotlight: "Built a mobile experience that stayed reliable under poor connectivity and frequent updates.",
        problem:
            "Users needed to complete mission-critical work even when connectivity and device quality were inconsistent.",
        solution:
            "I designed an offline-first data flow with optimistic updates and reconciliation on reconnect.",
        result:
            "The app remains fast, dependable, and easy to expand.",
        architecture: ["Local cache", "Sync queue", "Auth session", "Push notifications", "Feature flags"],
        deployment: ["CI builds", "Store releases", "Crash analytics", "Remote config"],
        highlights: ["offline-first", "smooth transitions", "clear sync states"],
    },
    {
        slug: "realtime-dashboard-system",
        title: "Real-time Dashboard System",
        category: "Full Stack",
        summary:
            "A live operations dashboard combining event streams, analytics, and product telemetry for leadership visibility.",
        tagline: "Visibility that helps founders make faster decisions.",
        stack: ["Next.js", "Socket.IO", "PostgreSQL", "Prisma", "Tailwind"],
        metrics: ["Live updates <100ms", "12 visual panels", "8 data sources"],
        timeline: "3 weeks",
        spotlight: "Created an executive interface for product, operations, and growth metrics in one place.",
        problem:
            "Leadership relied on scattered reports that were always behind the actual state of the product.",
        solution:
            "I unified analytics and backend events into a realtime visualization layer with robust filtering.",
        result:
            "Decisions moved from weekly guesses to same-day action.",
        architecture: ["Event stream", "Aggregation jobs", "Realtime sync", "Analytics cards", "Alerts"],
        deployment: ["Vercel", "Managed database", "Scheduled jobs", "Edge caching"],
        highlights: ["realtime updates", "founder visibility", "dense data design"],
    },
    {
        slug: "backend-architecture-platform",
        title: "Backend Architecture Platform",
        category: "Automation",
        summary:
            "A reusable architecture foundation for startups that need secure APIs, workflows, auth, and scaling from day one.",
        tagline: "The skeleton for a serious startup backend.",
        stack: ["Next.js", "Auth.js", "Prisma", "PostgreSQL", "Nodemailer", "Zod"],
        metrics: ["5 internal services", "1 security model", "Zero untyped inputs"],
        timeline: "2 weeks",
        spotlight: "Packaged the engineering baseline so future teams could move faster with fewer decisions.",
        problem:
            "Startups kept repeating the same architecture work: auth, validation, data storage, logging, and forms.",
        solution:
            "I turned the stack into an opinionated platform with reusable primitives and safe defaults.",
        result:
            "New products now start from a much stronger foundation.",
        architecture: ["Auth layer", "Schema validation", "Database models", "Contact ingestion", "Analytics hooks"],
        deployment: ["Vercel deployment", "Postgres ready", "Environment checks", "Observability hooks"],
        highlights: ["starter architecture", "secure defaults", "clear extension points"],
    },
]

export const services: Service[] = [
    {
        title: "MVP Development",
        summary:
            "Rapid product execution for founders who need a polished, production-grade launch without tradeoffs in engineering quality.",
        bullets: ["Product scoping", "Frontend + backend delivery", "Launch-ready systems"],
        visual: "Architecture-first delivery with a strong release cadence.",
    },
    {
        title: "AI Systems",
        summary:
            "Ship practical AI features, workflows, and retrieval systems that feel native to the product instead of bolted on.",
        bullets: ["LLM orchestration", "RAG pipelines", "Approval workflows"],
        visual: "Guardrailed AI flow with observability and fallbacks.",
    },
    {
        title: "Backend Architecture",
        summary:
            "Build secure APIs, clean schemas, auth flows, and runtime patterns that stay maintainable as the product scales.",
        bullets: ["Domain modeling", "API design", "Postgres + Prisma"],
        visual: "System diagrams that keep the product extensible.",
    },
    {
        title: "Mobile Apps",
        summary:
            "Create mobile experiences with offline-first behavior, realtime sync, and the polish expected from serious products.",
        bullets: ["Flutter apps", "Offline sync", "Store release support"],
        visual: "Mobile delivery with product-grade transitions.",
    },
    {
        title: "Automation Workflows",
        summary:
            "Connect product events, notifications, operations, and AI tasks into dependable workflows that save time.",
        bullets: ["Webhook routing", "Background jobs", "Ops automation"],
        visual: "Workflow automation that stays observable.",
    },
]

export const experienceTimeline: TimelineItem[] = [
    {
        year: "2026",
        kind: "Systems",
        title: "Started packaging repeatable startup architecture",
        description: "Shifted from project delivery to a reusable engineering system for founders and small teams.",
    },
    {
        year: "2025",
        kind: "AI",
        title: "Shipped multi-step AI workflows",
        description: "Delivered orchestration layers, retrieval systems, and operator tooling for production teams.",
    },
    {
        year: "2024",
        kind: "Backend",
        title: "Hardened API platforms",
        description: "Built modular NestJS and Next.js backends with auth, caching, validation, and clean releases.",
    },
    {
        year: "2023",
        kind: "Mobile",
        title: "Released production Flutter apps",
        description: "Focused on offline-first design, realtime sync, and launch quality on mobile surfaces.",
    },
]

export const testimonials: Testimonial[] = [
    {
        quote:
            "Prathamesh brought founder-level thinking to the table. He understood the product, designed the right system, and delivered fast.",
        name: "Aarav Mehta",
        role: "Founder",
        company: "Seed-stage SaaS",
    },
    {
        quote:
            "The architecture work was exceptional. We got a cleaner backend, stronger auth, and a delivery process we can trust.",
        name: "Nisha Rao",
        role: "Product Lead",
        company: "B2B Platform",
    },
    {
        quote:
            "He moves like an engineer who already understands how startups fail. The result was a much more durable product.",
        name: "Karan Iyer",
        role: "CTO",
        company: "Growth-stage startup",
    },
]

export const usesStack: UseItem[] = [
    { label: "Editor", value: "VS Code", description: "Primary environment with custom tasking and AI-assisted workflows." },
    { label: "Design", value: "Figma", description: "Product systems, diagrams, and interface direction." },
    { label: "Frontend", value: "Next.js + Tailwind", description: "Primary stack for shipping polished interfaces quickly." },
    { label: "Motion", value: "Framer Motion", description: "Used for elegant reveal and transition layers." },
    { label: "Database", value: "PostgreSQL + Prisma", description: "Structured data and reliable data access patterns." },
    { label: "AI", value: "OpenAI + RAG", description: "Applied where it improves product utility and speed." },
]

export const blogTopics = [
    "NestJS architecture",
    "AI systems",
    "scalable APIs",
    "Flutter engineering",
    "offline-first systems",
    "auth systems",
    "backend scaling",
]

export const contactCategories = [
    "MVP build",
    "AI system",
    "Backend overhaul",
    "Mobile app",
    "Automation workflow",
]

export const budgetBands = ["< $10k", "$10k - $25k", "$25k - $50k", "$50k+"]

export const timelineBands = ["1-2 weeks", "3-4 weeks", "1-2 months", "2+ months"]
