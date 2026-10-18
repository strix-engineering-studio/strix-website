export type NavItem = {
    href: string
    label: string
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

export type BlogTopic = {
    title: string
    subtitle: string
}

export const navigation: NavItem[] = [
    { href: "/capabilities", label: "Capabilities" },
    { href: "/systems", label: "Systems" },
    { href: "/products", label: "Products" },
    { href: "/case-studies", label: "Case Studies" },
    { href: "/open-source", label: "Open Source" },
    { href: "/insights", label: "Insights" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
]

export const heroStats = [
    { label: "Products shipped", value: 24 },
    { label: "Production systems launched", value: 38 },
    { label: "AI-enabled workflows", value: 16 },
    { label: "Reliability improvements", value: 21 },
    { label: "Teams supported long-term", value: 12 },
    { label: "Months of active support", value: 18 },
]



export const services: Service[] = [
    {
        title: "Discovery and Architecture",
        summary:
            "Clarify the problem, map the system, and define the product shape before implementation begins.",
        bullets: ["Discovery", "PRD", "Architecture"],
        visual: "Requirements translated into a system model the team can build with confidence.",
    },
    {
        title: "Product Engineering",
        summary:
            "Build production software across web, backend, and mobile with a focus on architecture, release quality, and maintainability.",
        bullets: ["Web apps", "Backend APIs", "Mobile experiences"],
        visual: "Cross-functional delivery with disciplined execution and maintainable code.",
    },
    {
        title: "Platform and Backend Systems",
        summary:
            "Design APIs, data boundaries, admin systems, and internal platforms that stay fast and understandable.",
        bullets: ["APIs", "Admin consoles", "Infrastructure"],
        visual: "Backend systems with clean boundaries, observability, and room to grow.",
    },
    {
        title: "AI-enabled Workflows",
        summary:
            "Add AI where it improves the product, using guardrails, retrieval, approvals, and fallbacks.",
        bullets: ["LLM routing", "Workflow automation", "RAG"],
        visual: "AI capability integrated into the product instead of standing apart from it.",
    },
    {
        title: "Long-term Partnership",
        summary:
            "Stay with the system after launch to improve reliability, reduce technical debt, and support the next round of growth.",
        bullets: ["Iteration", "Maintenance", "Operational support"],
        visual: "Ongoing engineering support that keeps the product healthy over time.",
    },
]

export const experienceTimeline: TimelineItem[] = [
    {
        year: "2026",
        kind: "Discovery",
        title: "Discovery became the starting point",
        description: "Focused on the workflows, constraints, and handoffs that define a durable system before writing a line of code.",
    },
    {
        year: "2025",
        kind: "Architecture",
        title: "Systems architecture shaped delivery",
        description: "Built reusable foundations for product systems, internal tools, and AI-enabled workflows with clearer separation of concerns.",
    },
    {
        year: "2024",
        kind: "Delivery",
        title: "Structured delivery became the norm",
        description: "Shipped releases with better planning, stronger validation, and fewer surprises during launch.",
    },
    {
        year: "2023",
        kind: "Support",
        title: "Long-term support became part of the work",
        description: "Kept improving the systems after launch so the product stayed reliable as the team and scope grew.",
    },
]

export const testimonials: Testimonial[] = [
    {
        quote:
            "Strix understood the operational problem quickly and turned it into a system we could actually run every day.",
        name: "Aarav Mehta",
        role: "Founder",
        company: "Seed-stage SaaS",
    },
    {
        quote:
            "The architecture work was exceptional. We got a cleaner backend, stronger permissions, and a delivery process we can trust.",
        name: "Nisha Rao",
        role: "Product Lead",
        company: "B2B Platform",
    },
    {
        quote:
            "They moved like an engineering partner, not a short-term vendor. The result was a much more durable product.",
        name: "Karan Iyer",
        role: "CTO",
        company: "Growth-stage company",
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

export const blogTopics: BlogTopic[] = [
    {
        title: "Product architecture",
        subtitle: "How to structure systems around workflows, handoffs, and long-term maintainability.",
    },
    {
        title: "Reliable AI workflows",
        subtitle: "Guardrails, approvals, and fallback paths for AI features that have to work in production.",
    },
    {
        title: "Clean data boundaries",
        subtitle: "Why schema discipline and validation matter when the product starts growing quickly.",
    },
    {
        title: "System observability",
        subtitle: "Practical dashboards and logs that help teams understand what the product is doing.",
    },
    {
        title: "Infrastructure reviews",
        subtitle: "The release and deployment choices that keep a team moving without losing control.",
    },
    {
        title: "Support models",
        subtitle: "What long-term technical partnership looks like after the initial launch is done.",
    },
    {
        title: "Backend scaling",
        subtitle: "Patterns for keeping APIs fast, safe, and easier to extend under real usage.",
    },
]

export const contactCategories = [
    "Discovery and roadmap",
    "Product engineering",
    "Platform and backend systems",
    "Mobile and web applications",
    "AI-enabled workflows",
    "Long-term partnership",
]

export const budgetBands = ["< $10k", "$10k - $25k", "$25k - $50k", "$50k+"]

export const timelineBands = ["1-2 weeks", "3-4 weeks", "1-2 months", "2+ months"]
