export type AuthorityContent = {
  slug: string;
  title: string;
  description: string;
  whatIsThis: string;
  whoIsItFor: string;
  whatProblemDoesItSolve: string;
  howDoesItWork: string;
  whyChooseStrix: string;
  related: { label: string; href: string }[];
  faqs: { question: string; answer: string }[];
};

export type ServicePageContent = {
  slug: string;
  eyebrow: string;
  title: string;
  description: string;
  whatIsThis: string;
  whoIsItFor: string;
  whatProblemDoesItSolve: string;
  howDoesItWork: string;
  whyChooseStrix: string;
  related: { label: string; href: string }[];
  faqs: { question: string; answer: string }[];
  evidence: { label: string; detail: string }[];
  keywords: string[];
  publishedAt: string;
};

export const authorityPages: AuthorityContent[] = [
  {
    slug: "process",
    title: "Engineering Process",
    description:
      "How Strix designs, validates, and ships production systems with architecture first.",
    whatIsThis:
      "A delivery model that starts with system boundaries, workflows, and operating constraints before UI implementation.",
    whoIsItFor:
      "Founders, CTOs, and operators who need reliable product delivery without bloated process theater.",
    whatProblemDoesItSolve:
      "It reduces rework by aligning product scope, architecture, and implementation before execution starts.",
    howDoesItWork:
      "Discovery, architecture mapping, technical decisions, scoped implementation, validation, and long-term support.",
    whyChooseStrix:
      "Strix focuses on systems that stay maintainable after launch, not just code that looks good on day one.",
    related: [
      { label: "Capabilities", href: "/capabilities" },
      { label: "Systems", href: "/systems" },
      { label: "Products", href: "/products" },
      { label: "Case Studies", href: "/case-studies" },
    ],
    faqs: [
      {
        question: "What is Strix's engineering process?",
        answer:
          "Strix starts with discovery and architecture, then moves into scoped implementation, validation, and support.",
      },
      {
        question: "Why is process important in product engineering?",
        answer:
          "Because the wrong system design creates compounding cost later in delivery, support, and scaling.",
      },
    ],
  },
  {
    slug: "engineering-principles",
    title: "Engineering Principles",
    description:
      "The rules Strix uses to keep product systems durable, understandable, and easy to evolve.",
    whatIsThis:
      "A concise set of system-design principles that shape delivery decisions.",
    whoIsItFor:
      "Teams that want a repeatable engineering philosophy instead of ad hoc implementation choices.",
    whatProblemDoesItSolve:
      "It prevents teams from optimizing for speed in ways that make the product fragile.",
    howDoesItWork:
      "Use domain boundaries, explicit contracts, observable behavior, and progressive simplification.",
    whyChooseStrix:
      "The studio is organized around operational clarity and maintainability, not temporary output volume.",
    related: [
      { label: "Architecture Philosophy", href: "/architecture-philosophy" },
      { label: "Technology Decisions", href: "/technology-decisions" },
      { label: "System Design Framework", href: "/system-design-framework" },
    ],
    faqs: [
      {
        question: "What is system-first engineering?",
        answer:
          "It means designing the operating model and architecture before deciding the implementation details.",
      },
      {
        question: "How is Strix different from an agency?",
        answer:
          "Strix focuses on systems, long-term maintainability, and architecture decisions rather than generic production hours.",
      },
    ],
  },
  {
    slug: "architecture-philosophy",
    title: "Architecture Philosophy",
    description:
      "Why Strix believes architecture is the product's operating system, not a documentation exercise.",
    whatIsThis:
      "A practical philosophy for building production-grade systems that can change without collapsing.",
    whoIsItFor:
      "Teams that operate software over time and need reliable growth without constant rewrites.",
    whatProblemDoesItSolve:
      "It avoids the common failure mode where a product is easy to launch but hard to evolve.",
    howDoesItWork:
      "Clarify boundaries, model data carefully, isolate workflows, and design for operational visibility.",
    whyChooseStrix:
      "The studio pairs product thinking with architecture discipline, which lowers delivery and maintenance risk.",
    related: [
      { label: "Process", href: "/process" },
      { label: "Capabilities", href: "/capabilities" },
      { label: "Products", href: "/products" },
    ],
    faqs: [
      {
        question: "Why does architecture matter so much?",
        answer:
          "Because architecture determines how expensive it is to change the product later.",
      },
      {
        question: "What does Strix optimize for?",
        answer:
          "Clarity, maintainability, operational fit, and long-term evolution.",
      },
    ],
  },
  {
    slug: "technology-decisions",
    title: "Technology Decisions",
    description:
      "How Strix chooses technology based on product requirements, risk, and long-term operating cost.",
    whatIsThis:
      "A decision framework for selecting frameworks, databases, and infrastructure with intent.",
    whoIsItFor:
      "Founders and technical leaders who want an architecture rationale, not a trend-driven stack.",
    whatProblemDoesItSolve:
      "It prevents over-engineering and under-engineering by matching tools to the system constraints.",
    howDoesItWork:
      "Evaluate use case, scale profile, team capability, delivery risk, and migration cost.",
    whyChooseStrix:
      "Strix is explicit about tradeoffs and avoids technology choices that only look good in a pitch.",
    related: [
      { label: "Engineering Principles", href: "/engineering-principles" },
      { label: "System Design Framework", href: "/system-design-framework" },
      { label: "Open Source", href: "/open-source" },
    ],
    faqs: [
      {
        question: "When should a startup change its stack?",
        answer:
          "When the current architecture materially blocks delivery, reliability, or operational clarity.",
      },
      {
        question: "How does Strix evaluate technologies?",
        answer:
          "By looking at tradeoffs, production readiness, migration cost, and team fit.",
      },
    ],
  },
  {
    slug: "system-design-framework",
    title: "System Design Framework",
    description:
      "A practical framework for designing software systems around real workflows and operating constraints.",
    whatIsThis:
      "A repeatable way to design product systems, internal platforms, and operational tools.",
    whoIsItFor:
      "Startups and technology businesses building products that must survive real usage.",
    whatProblemDoesItSolve:
      "It makes complex systems easier to reason about by defining boundaries, inputs, and outputs.",
    howDoesItWork:
      "Model domains, define states, draw boundaries, design APIs, and instrument the system.",
    whyChooseStrix:
      "The studio treats systems as the product, which keeps implementation aligned with outcomes.",
    related: [
      { label: "Process", href: "/process" },
      { label: "Capabilities", href: "/capabilities" },
      { label: "Case Studies", href: "/case-studies" },
    ],
    faqs: [
      {
        question: "What is system-first engineering?",
        answer:
          "Designing the system of work and the software architecture before implementation decisions.",
      },
      {
        question: "Why use a framework?",
        answer:
          "Because it creates consistency and reduces design drift across products and teams.",
      },
    ],
  },
];

export function getAuthorityPage(slug: string) {
  return authorityPages.find((page) => page.slug === slug);
}

export const servicePages: ServicePageContent[] = [
  // ============================================================
  // PRODUCT ENGINEERING
  // ============================================================

  {
    slug: "product-engineering",
    eyebrow: "Product engineering",
    title: "Product Engineering",
    description:
      "Build product systems that can launch, evolve, and support real operations without breaking under the weight of changing requirements.",
    whatIsThis:
      "Product engineering is the practice of turning product strategy into a system that can be delivered, operated, and improved over time with clear boundaries and structured execution.",
    whoIsItFor:
      "Founders and product teams that need more than a reactive feature backlog and want a disciplined engineering partner that can build the product as a real system.",
    whatProblemDoesItSolve:
      "It prevents the product from becoming a pile of disconnected features whose underlying architecture no longer reflects the needs of the business or the users.",
    howDoesItWork:
      "We clarify product intent, map the important workflows, define the technical architecture, implement the product and operational surfaces, and continue iterating with technical decisions tied to actual product requirements.",
    whyChooseStrix:
      "Strix approaches engineering as part of product development rather than treating software implementation as an isolated production task. The goal is a system that remains understandable after the first release.",
    related: [
      {
        label: "Full-Stack Product Delivery",
        href: "/services/full-stack-product-delivery",
      },
      {
        label: "Technical Architecture",
        href: "/services/technical-architecture",
      },
      { label: "Next.js Development", href: "/services/nextjs-development" },
      {
        label: "AI-Enabled Workflow Design",
        href: "/services/ai-enabled-workflows",
      },
    ],
    faqs: [
      {
        question:
          "What differentiates product engineering from feature development?",
        answer:
          "Product engineering considers the product as a complete system. That includes architecture, workflows, user experience, backend behavior, operational tooling, and the ability to evolve the system after launch.",
      },
      {
        question: "When should a team work with a product engineering partner?",
        answer:
          "It can make sense when the product requires stronger technical ownership, clearer architecture, faster execution across multiple layers, or a system that needs to evolve beyond an initial prototype.",
      },
      {
        question: "Does product engineering include architecture?",
        answer:
          "Yes. Architecture is part of the engineering process because technical boundaries directly affect how the product can be developed, changed, operated, and maintained.",
      },
    ],
    evidence: [
      {
        label: "Operational Telemetry Platform",
        detail:
          "A product system built around field operations, dashboards, synchronization workflows, and leadership visibility.",
      },
      {
        label: "Internal Operations Hub",
        detail:
          "An internal operating system designed to consolidate operational workflows and reduce fragmentation between teams and tools.",
      },
    ],
    keywords: [
      "product engineering",
      "product engineering services",
      "software product development",
      "product development company",
      "digital product engineering",
    ],
    publishedAt: "2026-09-24",
  },

  {
    slug: "full-stack-product-delivery",
    eyebrow: "Full-stack delivery",
    title: "Full-Stack Product Delivery",
    description:
      "Ship product systems across web interfaces, backend services, workflows, and operational tooling with a single delivery model and a clear product architecture.",
    whatIsThis:
      "Full-stack product delivery connects the product experience, application services, data model, and operational workflows so that the technology functions as one coherent system.",
    whoIsItFor:
      "Teams that need a complete engineering partner capable of working across frontend, backend, data, integrations, and operational concerns without creating coordination gaps between separate implementation teams.",
    whatProblemDoesItSolve:
      "It reduces the risk of frontend, backend, and business logic evolving independently until every change requires coordination across disconnected systems.",
    howDoesItWork:
      "We begin from the product workflow, establish the system boundaries, then implement the user-facing application, backend services, data interactions, and operational capabilities as connected parts of one system.",
    whyChooseStrix:
      "Strix combines product thinking with full-stack implementation so architecture decisions are made with the complete product in view rather than optimized for one technical layer.",
    related: [
      { label: "Product Engineering", href: "/services/product-engineering" },
      { label: "Next.js Development", href: "/services/nextjs-development" },
      { label: "NestJS Development", href: "/services/nestjs-development" },
      { label: "Backend Systems", href: "/services/backend-systems" },
    ],
    faqs: [
      {
        question: "What does full-stack product delivery cover?",
        answer:
          "It can cover product interfaces, backend services, APIs, data models, authentication, workflows, integrations, and operational tooling required to make the product function as a complete system.",
      },
      {
        question: "Why is full-stack ownership useful?",
        answer:
          "It reduces handoff gaps between frontend and backend work and allows architectural decisions to consider the complete product rather than a single technical layer.",
      },
      {
        question: "Is full-stack delivery only for startups?",
        answer:
          "No. It can also be useful for established teams launching new products, rebuilding internal systems, or consolidating fragmented application layers.",
      },
    ],
    evidence: [
      {
        label: "AI Workflow Orchestrator",
        detail:
          "Combined product interaction, backend orchestration, and operational visibility across AI-driven workflows.",
      },
      {
        label: "Operational Telemetry Platform",
        detail:
          "Connected product interfaces with backend workflows, field operations, synchronization, and leadership reporting.",
      },
    ],
    keywords: [
      "full-stack product development",
      "full-stack product delivery",
      "full-stack engineering",
      "full-stack software development",
    ],
    publishedAt: "2026-09-24",
  },

  {
    slug: "mvp-development",
    eyebrow: "MVP development",
    title: "MVP Development",
    description:
      "Turn a validated product idea into a focused working system with the architecture and engineering discipline needed for the next stage of growth.",
    whatIsThis:
      "MVP development is the process of converting a product hypothesis into the smallest useful software system capable of being tested with real users and real workflows.",
    whoIsItFor:
      "Founders, early-stage teams, and product owners who have a defined problem and need to turn the idea into a usable product without building an unnecessarily large first release.",
    whatProblemDoesItSolve:
      "It helps teams avoid spending months building secondary functionality before understanding whether the core workflow actually works for users.",
    howDoesItWork:
      "We identify the core workflow, separate essential capabilities from future requirements, establish an appropriate architecture, and build the smallest coherent product that can support real validation.",
    whyChooseStrix:
      "The goal is not simply to produce a fast prototype. Strix focuses on making the first version small enough to validate while still maintaining enough engineering structure to evolve it later.",
    related: [
      { label: "Product Engineering", href: "/services/product-engineering" },
      {
        label: "Full-Stack Product Delivery",
        href: "/services/full-stack-product-delivery",
      },
      {
        label: "Technical Architecture",
        href: "/services/technical-architecture",
      },
    ],
    faqs: [
      {
        question: "What should an MVP contain?",
        answer:
          "An MVP should contain the smallest set of capabilities required to test the core product hypothesis and allow users to complete the primary workflow.",
      },
      {
        question: "Should an MVP have production-quality architecture?",
        answer:
          "It should have architecture appropriate to its expected stage and risk. The objective is to avoid both unnecessary complexity and a foundation that makes the next iteration unnecessarily expensive.",
      },
      {
        question: "How is an MVP different from a prototype?",
        answer:
          "A prototype primarily demonstrates an idea. An MVP is intended to support a real user workflow and generate meaningful product feedback.",
      },
    ],
    evidence: [
      {
        label: "Product engineering model",
        detail:
          "Strix's delivery approach emphasizes defining system boundaries and product workflows before implementation rather than treating early product development as disconnected feature production.",
      },
      {
        label: "Operational systems",
        detail:
          "Existing product work demonstrates an emphasis on building usable workflows that can continue evolving beyond their initial implementation.",
      },
    ],
    keywords: [
      "MVP development",
      "MVP development company",
      "MVP software development",
      "startup MVP development",
      "product MVP development",
    ],
    publishedAt: "2026-09-24",
  },

  // ============================================================
  // WEB ENGINEERING
  // ============================================================

  {
    slug: "nextjs-development",
    eyebrow: "Next.js development",
    title: "Next.js Development",
    description:
      "Build product experiences and internal applications in Next.js with a clear system architecture and a delivery model designed for growth.",
    whatIsThis:
      "Strix develops Next.js products and internal tools that need clear product boundaries, maintainable UI structure, and a reliable path from prototype to production.",
    whoIsItFor:
      "Founders and product teams that need customer-facing platforms, dashboards, SaaS interfaces, or internal applications with a dependable frontend foundation.",
    whatProblemDoesItSolve:
      "It prevents frontend applications from becoming a collection of disconnected components, unclear state decisions, duplicated API logic, and brittle handoffs between design, product, and backend engineering.",
    howDoesItWork:
      "We map user journeys, establish the application structure, define data and API boundaries, implement reusable interface patterns, and connect the frontend to the underlying product workflows.",
    whyChooseStrix:
      "The studio treats frontend engineering as part of the larger product system, ensuring the interface reflects actual workflows, permissions, data, and operational requirements.",
    related: [
      { label: "NestJS Development", href: "/services/nestjs-development" },
      {
        label: "TypeScript Development",
        href: "/services/typescript-development",
      },
      { label: "Frontend Engineering", href: "/services/frontend-engineering" },
      { label: "Product Engineering", href: "/services/product-engineering" },
    ],
    faqs: [
      {
        question: "When should a team choose Next.js?",
        answer:
          "Next.js is a strong fit for products that need structured routing, modern React-based interfaces, server-side capabilities, and a frontend architecture that can support different types of product experiences.",
      },
      {
        question: "What does Strix optimize for in a Next.js implementation?",
        answer:
          "The focus is maintainable application structure, clear API boundaries, predictable data flow, reusable UI patterns, and an architecture that can continue evolving with the product.",
      },
      {
        question: "Can Next.js be used for internal applications?",
        answer:
          "Yes. Next.js can support dashboards, administrative applications, operational systems, customer portals, and other authenticated product experiences.",
      },
    ],
    evidence: [
      {
        label: "Operational Telemetry Platform",
        detail:
          "Built a route-visibility product with realtime status surfaces and field operations workflows requiring a dependable product-grade frontend.",
      },
      {
        label: "AI Workflow Orchestrator",
        detail:
          "Delivered a workflow-oriented interface for status, approvals, and operator visibility within AI execution workflows.",
      },
    ],
    keywords: [
      "Next.js development",
      "Next.js development services",
      "Next.js product engineering",
      "Next.js application development",
      "Next.js frontend development",
    ],
    publishedAt: "2026-09-24",
  },

  {
    slug: "frontend-engineering",
    eyebrow: "Frontend engineering",
    title: "Frontend Engineering",
    description:
      "Design and build maintainable frontend systems for customer products, dashboards, internal applications, and workflow-heavy interfaces.",
    whatIsThis:
      "Frontend engineering is the design and implementation of the application layer users interact with, including component architecture, state, data interaction, navigation, responsiveness, and application behavior.",
    whoIsItFor:
      "Teams building web products where frontend quality depends on more than visual implementation and requires reliable interaction with product workflows and backend services.",
    whatProblemDoesItSolve:
      "It addresses frontend systems that become difficult to change because UI components, state, API interactions, and business behavior have become tightly coupled.",
    howDoesItWork:
      "We establish interface patterns, map application state, define API interactions, organize reusable components, and connect user actions to the underlying product workflows.",
    whyChooseStrix:
      "Strix treats frontend architecture as an engineering concern rather than only a visual concern. The interface is designed around the system it operates within.",
    related: [
      { label: "Next.js Development", href: "/services/nextjs-development" },
      {
        label: "TypeScript Development",
        href: "/services/typescript-development",
      },
      {
        label: "Full-Stack Product Delivery",
        href: "/services/full-stack-product-delivery",
      },
    ],
    faqs: [
      {
        question: "What does frontend engineering include?",
        answer:
          "It can include application architecture, component design, state management, API integration, responsive behavior, performance, accessibility, and frontend testing.",
      },
      {
        question: "How does frontend engineering differ from web design?",
        answer:
          "Design focuses primarily on the experience and visual system, while frontend engineering turns that experience into reliable application behavior connected to real data and workflows.",
      },
      {
        question: "Can Strix work with an existing design system?",
        answer:
          "Yes. The engineering approach can adapt an existing design system while establishing reusable implementation patterns and application boundaries.",
      },
    ],
    evidence: [
      {
        label: "Operational interfaces",
        detail:
          "Existing operational products require interfaces for status visibility, workflows, approvals, and leadership reporting rather than static presentation pages.",
      },
      {
        label: "AI workflow interfaces",
        detail:
          "Workflow-oriented product surfaces connect user actions, AI execution states, approvals, and operational visibility.",
      },
    ],
    keywords: [
      "frontend engineering",
      "frontend development",
      "frontend development services",
      "web frontend engineering",
      "frontend architecture",
    ],
    publishedAt: "2026-09-24",
  },

  {
    slug: "typescript-development",
    eyebrow: "TypeScript development",
    title: "TypeScript Development",
    description:
      "Use TypeScript to create safer application contracts across the frontend, backend, and shared product logic without breaking delivery speed.",
    whatIsThis:
      "TypeScript provides explicit contracts across application layers, making product behavior, API interfaces, domain models, and shared logic easier to reason about as the system grows.",
    whoIsItFor:
      "Product teams building web applications, internal systems, and service-heavy platforms that need stronger contracts between frontend, backend, and domain logic.",
    whatProblemDoesItSolve:
      "It reduces ambiguous interfaces, inconsistent assumptions, and integration errors that become increasingly expensive as multiple application layers evolve independently.",
    howDoesItWork:
      "We use strong types around APIs, workflows, domain models, service boundaries, and shared application behavior while keeping the type system useful rather than unnecessarily complex.",
    whyChooseStrix:
      "Strix treats TypeScript as an engineering tool for improving system clarity and team communication rather than merely as a language preference.",
    related: [
      { label: "Next.js Development", href: "/services/nextjs-development" },
      { label: "NestJS Development", href: "/services/nestjs-development" },
      { label: "Backend Systems", href: "/services/backend-systems" },
    ],
    faqs: [
      {
        question: "Why does TypeScript matter for product teams?",
        answer:
          "It makes interfaces explicit and helps developers identify mismatches earlier when frontend, backend, and shared application logic evolve together.",
      },
      {
        question: "Is TypeScript only useful for frontend development?",
        answer:
          "No. TypeScript can be used across frontend applications, backend services, APIs, domain logic, and shared contracts.",
      },
      {
        question: "Does TypeScript eliminate runtime errors?",
        answer:
          "No. TypeScript provides compile-time checks but does not replace runtime validation, testing, monitoring, or careful system design.",
      },
    ],
    evidence: [
      {
        label: "Full-stack delivery model",
        detail:
          "Strix's product work connects frontend, backend, and operational tooling through shared application contracts and explicit boundaries.",
      },
      {
        label: "Operational and AI systems",
        detail:
          "TypeScript-oriented contracts support workflow-heavy services and operational interfaces that require clear communication between application layers.",
      },
    ],
    keywords: [
      "TypeScript development",
      "TypeScript development services",
      "TypeScript engineering",
      "full-stack TypeScript development",
      "TypeScript application development",
    ],
    publishedAt: "2026-09-24",
  },

  // ============================================================
  // BACKEND & API ENGINEERING
  // ============================================================

  {
    slug: "nestjs-development",
    eyebrow: "NestJS development",
    title: "NestJS Development",
    description:
      "Design backend systems, APIs, and service layers in NestJS with the structure needed for maintainable product delivery and operational clarity.",
    whatIsThis:
      "NestJS gives Strix a structured way to build backend services with modular boundaries, explicit contracts, dependency management, and application architecture that can evolve with product complexity.",
    whoIsItFor:
      "Teams shipping application APIs, internal services, or operational systems where backend structure and maintainability matter more than a quick one-off implementation.",
    whatProblemDoesItSolve:
      "It reduces the risk of backend sprawl, poorly defined modules, duplicated logic, inconsistent validation, and service boundaries that become difficult to maintain.",
    howDoesItWork:
      "We model the domain, map business workflows, define modules and service boundaries, establish data access patterns, and connect external integrations through explicit interfaces.",
    whyChooseStrix:
      "The studio designs backend services around real workflows and operational requirements so the framework supports the product rather than becoming the architecture itself.",
    related: [
      { label: "Backend Systems", href: "/services/backend-systems" },
      { label: "API Development", href: "/services/api-development" },
      {
        label: "TypeScript Development",
        href: "/services/typescript-development",
      },
      { label: "Next.js Development", href: "/services/nextjs-development" },
    ],
    faqs: [
      {
        question: "Why use NestJS for backend development?",
        answer:
          "NestJS provides a structured application model around modules, dependency injection, controllers, services, validation, and other patterns that help teams organize larger backend applications.",
      },
      {
        question: "What systems fit NestJS well?",
        answer:
          "Application backends, APIs, internal platforms, workflow-heavy systems, and service-oriented applications where explicit structure and maintainability are important.",
      },
      {
        question: "Does Strix use NestJS for every backend?",
        answer:
          "No. Technology selection should follow product requirements, constraints, team capabilities, and long-term operating needs rather than a fixed framework preference.",
      },
    ],
    evidence: [
      {
        label: "AI Workflow Orchestrator",
        detail:
          "Built workflow orchestration logic and service boundaries connecting AI execution, approvals, retries, and operational monitoring.",
      },
      {
        label: "Operational Telemetry Platform",
        detail:
          "Structured backend services supporting route events, synchronization workflows, and leadership dashboards.",
      },
    ],
    keywords: [
      "NestJS development",
      "NestJS development services",
      "NestJS backend development",
      "NestJS API development",
      "NestJS engineering",
    ],
    publishedAt: "2026-09-24",
  },

  {
    slug: "backend-systems",
    eyebrow: "Backend systems",
    title: "Backend Systems",
    description:
      "Build backend services and infrastructure that support reliability, automation, integrations, and product operations without creating fragile systems.",
    whatIsThis:
      "Backend systems form the operating layer behind a product: APIs, workflows, business logic, integrations, data access, permissions, and operational controls.",
    whoIsItFor:
      "Teams with growing product complexity, operational workflows, integration requirements, or data needs that have outgrown simple backend implementations.",
    whatProblemDoesItSolve:
      "It prevents products from depending on disconnected integrations, duplicated business logic, unclear data ownership, and backend workflows that are difficult to observe or change.",
    howDoesItWork:
      "We model business workflows, establish domain and service boundaries, design data access patterns, define API contracts, and introduce operational visibility around important system behavior.",
    whyChooseStrix:
      "The studio focuses on backend structure that remains understandable as more features, workflows, integrations, and users depend on the system.",
    related: [
      { label: "NestJS Development", href: "/services/nestjs-development" },
      { label: "API Development", href: "/services/api-development" },
      {
        label: "Admin Workflow Design",
        href: "/services/admin-workflow-design",
      },
      {
        label: "Operational Platforms",
        href: "/services/operational-platforms",
      },
    ],
    faqs: [
      {
        question: "What makes a backend system maintainable?",
        answer:
          "Clear domain boundaries, explicit interfaces, sensible data ownership, predictable workflows, validation, and enough operational visibility to understand system behavior.",
      },
      {
        question: "How does Strix approach backend architecture?",
        answer:
          "The architecture begins with the actual product workflows and constraints, then maps those requirements into services, data boundaries, APIs, and operational behavior.",
      },
      {
        question: "Can Strix improve an existing backend?",
        answer:
          "Yes. Existing systems can be assessed and incrementally improved when a complete rewrite would create unnecessary migration risk.",
      },
    ],
    evidence: [
      {
        label: "Operational Telemetry Platform",
        detail:
          "The backend needed dependable route event handling, synchronization behavior, and shared operational visibility across multiple workflows and user roles.",
      },
      {
        label: "Internal Operations Hub",
        detail:
          "Centralized operational data and permissioned workflows to reduce fragmented tooling and inconsistent business logic.",
      },
    ],
    keywords: [
      "backend systems",
      "backend development",
      "backend engineering",
      "backend architecture",
      "custom backend development",
    ],
    publishedAt: "2026-09-24",
  },

  {
    slug: "api-development",
    eyebrow: "API development",
    title: "API Development",
    description:
      "Design reliable APIs and service contracts that connect product interfaces, backend systems, integrations, and operational workflows.",
    whatIsThis:
      "API development is the design and implementation of explicit interfaces through which applications, services, users, and external systems exchange data and trigger workflows.",
    whoIsItFor:
      "Product teams building web applications, mobile applications, integrations, internal platforms, or service-oriented systems that depend on reliable communication between components.",
    whatProblemDoesItSolve:
      "It prevents APIs from becoming undocumented collections of endpoints with inconsistent validation, error behavior, authentication, and business rules.",
    howDoesItWork:
      "We identify consumers and workflows, define request and response contracts, establish validation and authorization rules, implement business logic behind the interface, and consider failure and retry behavior.",
    whyChooseStrix:
      "Strix treats an API as a product boundary rather than merely a collection of HTTP routes. The contract, behavior, data ownership, and operational characteristics are considered together.",
    related: [
      { label: "Backend Systems", href: "/services/backend-systems" },
      { label: "NestJS Development", href: "/services/nestjs-development" },
      {
        label: "TypeScript Development",
        href: "/services/typescript-development",
      },
      {
        label: "Technical Architecture",
        href: "/services/technical-architecture",
      },
    ],
    faqs: [
      {
        question: "What makes an API maintainable?",
        answer:
          "Clear contracts, predictable errors, consistent validation, appropriate authentication and authorization, sensible versioning, and ownership of the business logic behind the endpoints.",
      },
      {
        question: "Can Strix integrate third-party APIs?",
        answer:
          "API integration can be part of backend and product engineering work where external services are required to complete a product workflow.",
      },
      {
        question: "Does every product need a separate API layer?",
        answer:
          "Not necessarily. API architecture should follow the application's consumers, deployment model, data boundaries, and operational requirements.",
      },
    ],
    evidence: [
      {
        label: "Workflow-oriented systems",
        detail:
          "Existing product systems rely on explicit service boundaries to connect user interfaces, operational workflows, data, and external system behavior.",
      },
      {
        label: "AI Workflow Orchestrator",
        detail:
          "Workflow orchestration requires clear interfaces between AI execution, approval steps, retries, and operational monitoring.",
      },
    ],
    keywords: [
      "API development",
      "API development services",
      "REST API development",
      "backend API development",
      "API engineering",
    ],
    publishedAt: "2026-09-24",
  },

  // ============================================================
  // AI ENGINEERING
  // ============================================================

  {
    slug: "ai-enabled-workflows",
    eyebrow: "AI workflow design",
    title: "AI-Enabled Workflow Design",
    description:
      "Integrate AI into operational and product workflows with guardrails, review processes, and explicit business controls rather than brittle automation.",
    whatIsThis:
      "AI-enabled workflows combine model capabilities with deterministic application logic, human review, business rules, and operational controls so AI becomes part of a usable system rather than an isolated experiment.",
    whoIsItFor:
      "Teams integrating AI into business workflows, product experiences, research processes, or knowledge-heavy operations where human oversight and predictable execution still matter.",
    whatProblemDoesItSolve:
      "It reduces the risk of AI becoming an opaque component that produces outputs without clear ownership, validation, retry behavior, or operational visibility.",
    howDoesItWork:
      "We identify where AI provides useful leverage, define deterministic boundaries around it, introduce approval or validation stages where needed, and instrument the workflow so teams can understand execution and failures.",
    whyChooseStrix:
      "Strix treats AI as a system capability that needs architecture, controls, observability, and product context rather than as a standalone model integration.",
    related: [
      {
        label: "AI Product Engineering",
        href: "/services/ai-product-engineering",
      },
      { label: "Backend Systems", href: "/services/backend-systems" },
      { label: "Product Engineering", href: "/services/product-engineering" },
      {
        label: "Technical Architecture",
        href: "/services/technical-architecture",
      },
    ],
    faqs: [
      {
        question: "How does Strix make AI workflows more reliable?",
        answer:
          "By defining explicit workflow boundaries, approval gates, validation, retry-safe execution, and monitoring around AI operations.",
      },
      {
        question: "Should AI make every workflow decision automatically?",
        answer:
          "Not necessarily. The appropriate level of automation depends on the consequences of an incorrect decision, the quality of available information, and the need for human judgment.",
      },
      {
        question: "Where can AI workflows be useful?",
        answer:
          "They can support research, information processing, classification, operational assistance, content workflows, internal tools, and other tasks where AI can reduce repetitive work while remaining within defined controls.",
      },
    ],
    evidence: [
      {
        label: "AI Workflow Orchestrator",
        detail:
          "A project centered on orchestrated AI tasks, approval gates, and operator feedback loops to keep work observable and reviewable.",
      },
      {
        label: "Guardrails and observability",
        detail:
          "The architecture emphasized auditability and predictable execution rather than allowing AI work to proceed without traceable controls.",
      },
    ],
    keywords: [
      "AI workflow design",
      "AI workflow development",
      "AI automation",
      "AI product engineering",
      "LLM workflow development",
    ],
    publishedAt: "2026-09-24",
  },

  {
    slug: "ai-product-engineering",
    eyebrow: "AI product engineering",
    title: "AI Product Engineering",
    description:
      "Build AI-powered products around real user workflows, application architecture, evaluation, operational controls, and reliable model integration.",
    whatIsThis:
      "AI product engineering combines conventional software engineering with model-driven capabilities to create products where AI contributes directly to user or business workflows.",
    whoIsItFor:
      "Founders and product teams building applications where language models, intelligent automation, classification, generation, or decision support are meaningful parts of the product experience.",
    whatProblemDoesItSolve:
      "It addresses the gap between an impressive AI prototype and a production product that needs predictable behavior, user controls, application integration, monitoring, and maintainable infrastructure.",
    howDoesItWork:
      "We define the product workflow first, identify where AI provides useful leverage, establish interfaces around model operations, implement deterministic product logic, and add appropriate validation and observability.",
    whyChooseStrix:
      "Strix approaches AI as an engineering problem within a larger product rather than treating the model as the entire product architecture.",
    related: [
      {
        label: "AI-Enabled Workflow Design",
        href: "/services/ai-enabled-workflows",
      },
      { label: "Backend Systems", href: "/services/backend-systems" },
      { label: "Product Engineering", href: "/services/product-engineering" },
      {
        label: "TypeScript Development",
        href: "/services/typescript-development",
      },
    ],
    faqs: [
      {
        question: "What is AI product engineering?",
        answer:
          "It is the engineering discipline required to turn AI capabilities into usable product features connected to application workflows, data, interfaces, and operational systems.",
      },
      {
        question: "Is an LLM API integration enough to build an AI product?",
        answer:
          "Usually not. A production AI feature also needs application logic, context management, validation, failure handling, user experience, monitoring, and appropriate controls.",
      },
      {
        question: "How should AI features be evaluated?",
        answer:
          "Evaluation should reflect the actual task and product requirement, including output quality, failure cases, consistency, cost, latency, and the consequences of incorrect outputs.",
      },
    ],
    evidence: [
      {
        label: "AI Workflow Orchestrator",
        detail:
          "Existing AI work combines model-driven execution with application workflows, approvals, operational status, and feedback loops.",
      },
      {
        label: "Operational product systems",
        detail:
          "The studio's system-oriented approach connects AI capabilities with broader product and operational architecture instead of isolating them from the application.",
      },
    ],
    keywords: [
      "AI product engineering",
      "AI development services",
      "AI software development",
      "AI application development",
      "AI product development",
    ],
    publishedAt: "2026-09-24",
  },

  // ============================================================
  // INTERNAL & OPERATIONAL SOFTWARE
  // ============================================================

  {
    slug: "admin-workflow-design",
    eyebrow: "Admin workflow design",
    title: "Admin Workflow Design",
    description:
      "Create operational systems and business workflows that keep internal teams aligned, efficient, and clear about ownership without adding more fragmented tools.",
    whatIsThis:
      "Admin workflow design turns scattered operational tasks into structured software workflows that are easier to operate, audit, understand, and improve.",
    whoIsItFor:
      "Teams managing customer records, internal operations, approvals, support processes, research workflows, or content operations that have outgrown spreadsheets and disconnected tools.",
    whatProblemDoesItSolve:
      "It reduces context switching, duplicated data entry, unclear ownership, and process drift caused by teams working across multiple disconnected operational systems.",
    howDoesItWork:
      "We map the actual business process, identify roles and permissions, define important states and transitions, then design the operational interface around those decisions.",
    whyChooseStrix:
      "Strix focuses on the workflow underneath the interface. The objective is not to add another dashboard but to make the underlying operation easier to execute and control.",
    related: [
      { label: "Internal Tools", href: "/services/internal-tools" },
      { label: "Backend Systems", href: "/services/backend-systems" },
      {
        label: "Operational Platforms",
        href: "/services/operational-platforms",
      },
      { label: "Product Engineering", href: "/services/product-engineering" },
    ],
    faqs: [
      {
        question: "When does an internal workflow need custom software?",
        answer:
          "Usually when the process has enough volume, complexity, ownership ambiguity, or repeated manual work that spreadsheets and disconnected tools create meaningful operational friction.",
      },
      {
        question: "What should an admin system model?",
        answer:
          "It should reflect the real entities, permissions, states, actions, approvals, and business rules that determine how the organization operates.",
      },
      {
        question: "Does an admin system need complex automation?",
        answer:
          "Not always. Clear workflow visibility and ownership can provide significant value before additional automation is introduced.",
      },
    ],
    evidence: [
      {
        label: "Internal Operations Hub",
        detail:
          "A central operations platform that brought fragmented administrative and content workflows into a structured permission-aware operating layer.",
      },
      {
        label: "Workflow clarity",
        detail:
          "The design emphasized searchability, ownership, structured workflows, and reusable patterns instead of disconnected one-off tools.",
      },
    ],
    keywords: [
      "admin workflow design",
      "admin portal development",
      "internal operations software",
      "workflow systems",
      "administrative software development",
    ],
    publishedAt: "2026-09-24",
  },

  {
    slug: "internal-tools",
    eyebrow: "Internal tools",
    title: "Internal Tools Development",
    description:
      "Build custom internal tools that turn repetitive operational work into structured software workflows with clear data, permissions, and ownership.",
    whatIsThis:
      "Internal tools are software systems built specifically for the teams operating a business, including administrative applications, dashboards, approval systems, search interfaces, and workflow management tools.",
    whoIsItFor:
      "Companies whose internal teams depend on spreadsheets, disconnected SaaS tools, manual coordination, or repetitive operational processes that have become difficult to manage.",
    whatProblemDoesItSolve:
      "It replaces fragmented operational work with a system designed around the organization's actual processes, data, roles, and decision points.",
    howDoesItWork:
      "We map the internal workflow, model the required data, define permissions and ownership, design the operational interface, and connect the system to existing services where necessary.",
    whyChooseStrix:
      "The studio treats internal software as a real product. The same attention to architecture, usability, and maintainability applies even when the users are employees rather than customers.",
    related: [
      {
        label: "Admin Workflow Design",
        href: "/services/admin-workflow-design",
      },
      {
        label: "Operational Platforms",
        href: "/services/operational-platforms",
      },
      { label: "Backend Systems", href: "/services/backend-systems" },
    ],
    faqs: [
      {
        question: "What are examples of internal tools?",
        answer:
          "Examples include operations dashboards, administrative portals, approval systems, research tools, workflow managers, internal search systems, and team-specific business applications.",
      },
      {
        question: "When should a company build an internal tool?",
        answer:
          "A custom tool can make sense when an important workflow is sufficiently unique, repetitive, or operationally important that generic software no longer fits the process.",
      },
      {
        question: "Can internal tools integrate with existing systems?",
        answer:
          "Yes. Integration with existing APIs, databases, authentication systems, and business services can be part of the architecture.",
      },
    ],
    evidence: [
      {
        label: "Internal Operations Hub",
        detail:
          "Existing internal tooling consolidated operational data and workflows into a structured application rather than leaving teams dependent on disconnected systems.",
      },
      {
        label: "Operational dashboards",
        detail:
          "Existing product work includes operational surfaces designed around real team workflows and decision-making requirements.",
      },
    ],
    keywords: [
      "internal tools development",
      "internal software development",
      "custom internal tools",
      "internal business applications",
      "internal operations software",
    ],
    publishedAt: "2026-09-24",
  },

  {
    slug: "operational-platforms",
    eyebrow: "Operational platforms",
    title: "Operational Platforms",
    description:
      "Design operational software that gives teams a live picture of what is happening, what needs attention, and what should happen next.",
    whatIsThis:
      "Operational platforms are software systems designed around active business operations such as dispatch, field activity, escalation, route visibility, service workflows, and leadership reporting.",
    whoIsItFor:
      "Organizations running field teams, service operations, logistics workflows, or other processes where people need current information to make operational decisions.",
    whatProblemDoesItSolve:
      "It replaces spreadsheet-driven awareness and fragmented status updates with a system that represents the current state of operational work.",
    howDoesItWork:
      "We map the operational lifecycle, identify important signals and state changes, design the relevant interfaces, and build resilient update flows that account for real-world operating conditions.",
    whyChooseStrix:
      "The studio designs operational software around how work actually happens, including delayed updates, imperfect connectivity, multiple roles, and changing states.",
    related: [
      { label: "Backend Systems", href: "/services/backend-systems" },
      {
        label: "Admin Workflow Design",
        href: "/services/admin-workflow-design",
      },
      { label: "Internal Tools", href: "/services/internal-tools" },
      { label: "Next.js Development", href: "/services/nextjs-development" },
    ],
    faqs: [
      {
        question:
          "What makes an operational platform different from a dashboard?",
        answer:
          "An operational platform supports actions and workflows as well as visibility. It models what is happening, who is responsible, what state the work is in, and what should happen next.",
      },
      {
        question: "Can operational software work with unreliable connectivity?",
        answer:
          "It can be designed around delayed synchronization, local state, retry behavior, and other constraints when the operating environment requires it.",
      },
      {
        question:
          "Does operational software require both frontend and backend engineering?",
        answer:
          "Usually yes. The operational experience depends on the interface, workflow logic, data model, synchronization behavior, and backend services working together.",
      },
    ],
    evidence: [
      {
        label: "Operational Telemetry Platform",
        detail:
          "A field operations product built around dispatch visibility, offline capture, and leadership dashboards for teams working in motion.",
      },
      {
        label: "Low-connectivity workflow support",
        detail:
          "The architecture accounted for unreliable coverage and delayed updates so the system could continue supporting operational decision-making.",
      },
    ],
    keywords: [
      "operational platforms",
      "operations software",
      "field operations software",
      "operational software development",
      "workflow visibility",
    ],
    publishedAt: "2026-09-24",
  },

  {
    slug: "workflow-automation",
    eyebrow: "Workflow automation",
    title: "Workflow Automation",
    description:
      "Turn repetitive business processes into explicit software workflows with clear states, ownership, integrations, and controlled automation.",
    whatIsThis:
      "Workflow automation connects business rules, application actions, notifications, integrations, and human decisions into a repeatable software-controlled process.",
    whoIsItFor:
      "Teams dealing with repetitive operational work, manual handoffs, approval processes, data movement, or coordination across multiple systems.",
    whatProblemDoesItSolve:
      "It reduces unnecessary manual coordination and makes important processes more explicit, observable, and repeatable.",
    howDoesItWork:
      "We map the current process, identify deterministic steps, define states and transitions, automate appropriate actions, and retain human review where decisions require judgment.",
    whyChooseStrix:
      "Strix focuses on workflow architecture rather than simply attaching automation to an existing process. The system should remain understandable when something fails or a business rule changes.",
    related: [
      {
        label: "AI-Enabled Workflow Design",
        href: "/services/ai-enabled-workflows",
      },
      {
        label: "Admin Workflow Design",
        href: "/services/admin-workflow-design",
      },
      { label: "Internal Tools", href: "/services/internal-tools" },
      { label: "Backend Systems", href: "/services/backend-systems" },
    ],
    faqs: [
      {
        question: "What business processes can be automated?",
        answer:
          "Processes with predictable steps are good candidates, including data synchronization, notifications, approvals, record updates, routing, and other repetitive operational actions.",
      },
      {
        question: "Should every workflow be fully automated?",
        answer:
          "No. Some workflows require human judgment. Good automation distinguishes deterministic tasks from decisions that should remain under human control.",
      },
      {
        question: "Can AI and workflow automation be combined?",
        answer:
          "Yes. AI can support classification, extraction, research, or decision assistance while deterministic application logic controls the overall workflow.",
      },
    ],
    evidence: [
      {
        label: "AI Workflow Orchestrator",
        detail:
          "Existing work combines automated execution with approval steps, retries, and operator feedback rather than treating automation as an uncontrolled process.",
      },
      {
        label: "Internal Operations Hub",
        detail:
          "Structured workflows reduce repeated coordination and create clearer ownership around internal operational processes.",
      },
    ],
    keywords: [
      "workflow automation",
      "business workflow automation",
      "workflow automation development",
      "business process automation",
      "custom workflow software",
    ],
    publishedAt: "2026-09-24",
  },

  // ============================================================
  // ARCHITECTURE
  // ============================================================

  {
    slug: "technical-architecture",
    eyebrow: "Technical architecture",
    title: "Technical Architecture",
    description:
      "Design software architecture around product realities: constraints, growth, operational expectations, and the tradeoffs that matter at the point of delivery.",
    whatIsThis:
      "Technical architecture is the collection of decisions that defines how the system is structured, how its components interact, how it evolves, and how teams work with it over time.",
    whoIsItFor:
      "Founders, product leaders, and engineering teams that need architecture decisions to be explicit, practical, and connected to actual product requirements.",
    whatProblemDoesItSolve:
      "It reduces design drift, unnecessary rework, unclear ownership, and architectural decisions that make future product changes more expensive than necessary.",
    howDoesItWork:
      "We start with the product workflow and constraints, identify important system boundaries, evaluate technology and architecture tradeoffs, then turn those decisions into an implementation-oriented system model.",
    whyChooseStrix:
      "Strix prioritizes architecture clarity and operational usefulness over theoretical complexity. The architecture must help the team build and operate the product.",
    related: [
      { label: "System Design", href: "/services/system-design" },
      { label: "Product Engineering", href: "/services/product-engineering" },
      { label: "Backend Systems", href: "/services/backend-systems" },
      { label: "Next.js Development", href: "/services/nextjs-development" },
    ],
    faqs: [
      {
        question: "Why is architecture a business decision?",
        answer:
          "Architecture affects development speed, release risk, maintenance cost, scalability, and how easily the product can respond to changing requirements.",
      },
      {
        question: "When should architecture be reviewed?",
        answer:
          "Architecture should be revisited when product requirements, system scale, team structure, reliability expectations, or operational constraints materially change.",
      },
      {
        question: "Does good architecture mean using more services?",
        answer:
          "No. Architecture should match the actual system requirements. Additional services can introduce operational complexity and should have a clear reason to exist.",
      },
    ],
    evidence: [
      {
        label: "Architecture-first product work",
        detail:
          "Strix's delivery model begins with system boundaries and workflow understanding before implementation decisions are finalized.",
      },
      {
        label: "Platform patterns",
        detail:
          "Architecture decisions balance clarity, maintainability, and the ability to support later feature expansion without unnecessarily restructuring the whole product.",
      },
    ],
    keywords: [
      "technical architecture",
      "software architecture",
      "product architecture",
      "application architecture",
      "technical architecture services",
    ],
    publishedAt: "2026-09-24",
  },

  {
    slug: "system-design",
    eyebrow: "System design",
    title: "System Design",
    description:
      "Design software systems around real workflows, state transitions, data boundaries, APIs, failure modes, and operational constraints.",
    whatIsThis:
      "System design translates product requirements into a model of components, workflows, data, interfaces, states, dependencies, and operational behavior.",
    whoIsItFor:
      "Teams building products where increasing workflow complexity requires more deliberate decisions about how the system should behave and evolve.",
    whatProblemDoesItSolve:
      "It gives teams a structured way to reason about complex systems before implementation becomes expensive to change.",
    howDoesItWork:
      "We model the domain, identify important states and transitions, establish data ownership, define service boundaries, design interfaces, and consider failure and operational behavior.",
    whyChooseStrix:
      "Strix focuses on system design that can be translated into implementation. The output should help engineers make decisions rather than becoming architecture documentation that is disconnected from the codebase.",
    related: [
      {
        label: "Technical Architecture",
        href: "/services/technical-architecture",
      },
      { label: "Backend Systems", href: "/services/backend-systems" },
      { label: "Technology Decisions", href: "/technology-decisions" },
      { label: "Engineering Principles", href: "/engineering-principles" },
    ],
    faqs: [
      {
        question: "What does system design cover?",
        answer:
          "It can cover domain boundaries, data models, APIs, workflows, state transitions, service boundaries, integrations, failure modes, and operational requirements.",
      },
      {
        question: "Why design before coding?",
        answer:
          "Important structural decisions are generally cheaper to change before implementation spreads those decisions throughout the codebase.",
      },
      {
        question: "Is system design only for large systems?",
        answer:
          "No. Smaller products also benefit from explicit boundaries when the workflows or future requirements justify them. The level of design should match the complexity.",
      },
    ],
    evidence: [
      {
        label: "System-first engineering",
        detail:
          "Strix's engineering model begins by understanding workflows and system boundaries before choosing implementation details.",
      },
      {
        label: "Operational product architecture",
        detail:
          "Existing operational systems require explicit modeling of states, events, synchronization, roles, and visibility.",
      },
    ],
    keywords: [
      "system design",
      "system design services",
      "software system design",
      "application system design",
      "system architecture",
    ],
    publishedAt: "2026-09-24",
  },

  {
    slug: "architecture-review",
    eyebrow: "Architecture review",
    title: "Software Architecture Review",
    description:
      "Review an existing software architecture to identify structural risks, unnecessary complexity, technical debt, and practical paths for improvement.",
    whatIsThis:
      "An architecture review examines how an existing application is structured and how its technical decisions affect maintainability, reliability, development speed, and future change.",
    whoIsItFor:
      "Founders, CTOs, product teams, and engineering teams that have an existing system but need an independent technical assessment before continuing significant development.",
    whatProblemDoesItSolve:
      "It provides a structured way to identify architectural problems before they become more expensive through additional features, integrations, or team growth.",
    howDoesItWork:
      "We examine system boundaries, application structure, data ownership, APIs, workflows, deployment assumptions, observability, and areas of technical debt, then identify practical improvement paths.",
    whyChooseStrix:
      "The review is focused on actionable engineering decisions rather than producing a theoretical assessment that is disconnected from the team's ability to implement it.",
    related: [
      {
        label: "Technical Architecture",
        href: "/services/technical-architecture",
      },
      { label: "System Design", href: "/services/system-design" },
      { label: "Product Engineering", href: "/services/product-engineering" },
      { label: "Backend Systems", href: "/services/backend-systems" },
    ],
    faqs: [
      {
        question: "When should a company conduct an architecture review?",
        answer:
          "Useful triggers include major product expansion, recurring engineering friction, increasing technical debt, reliability problems, a planned migration, or uncertainty about whether the existing architecture can support the next stage.",
      },
      {
        question: "Does an architecture review require rewriting the system?",
        answer:
          "No. A useful review should distinguish between problems that require structural change and problems that can be improved incrementally.",
      },
      {
        question: "What does an architecture review produce?",
        answer:
          "The output can include identified risks, architectural observations, technical priorities, decision recommendations, and an incremental improvement roadmap.",
      },
    ],
    evidence: [
      {
        label: "Architecture-first delivery",
        detail:
          "Strix's engineering approach explicitly considers system boundaries, workflow structure, maintainability, and operational constraints.",
      },
      {
        label: "Technology decisions",
        detail:
          "Technology selection is evaluated according to requirements, risk, operating cost, and migration implications rather than technology popularity alone.",
      },
    ],
    keywords: [
      "software architecture review",
      "architecture review services",
      "technical architecture review",
      "application architecture assessment",
      "software architecture assessment",
    ],
    publishedAt: "2026-09-24",
  },

  // ============================================================
  // MODERNIZATION
  // ============================================================

  {
    slug: "product-modernization",
    eyebrow: "Product modernization",
    title: "Product Modernization",
    description:
      "Improve existing software incrementally by addressing architectural constraints, technical debt, outdated workflows, and difficult-to-maintain product areas.",
    whatIsThis:
      "Product modernization is the structured improvement of an existing software product without automatically replacing everything that already works.",
    whoIsItFor:
      "Teams operating an existing product that has accumulated technical debt, outdated architecture, inconsistent workflows, or development friction that is slowing continued growth.",
    whatProblemDoesItSolve:
      "It addresses systems where adding new features increasingly creates regression risk, duplicated logic, maintenance burden, or unpredictable development effort.",
    howDoesItWork:
      "We identify the highest-impact structural problems, separate urgent risks from lower-priority debt, and introduce improvements incrementally around active product development.",
    whyChooseStrix:
      "Strix favors evidence-driven modernization over rewrites by default. Existing business logic and working product behavior are treated as assets that should not be discarded without a reason.",
    related: [
      { label: "Architecture Review", href: "/services/architecture-review" },
      {
        label: "Technical Architecture",
        href: "/services/technical-architecture",
      },
      { label: "Backend Systems", href: "/services/backend-systems" },
      { label: "Product Engineering", href: "/services/product-engineering" },
    ],
    faqs: [
      {
        question: "When should an existing product be modernized?",
        answer:
          "Modernization becomes useful when technical constraints materially affect delivery speed, reliability, maintainability, security, or the ability to introduce required product changes.",
      },
      {
        question: "Does modernization mean rewriting the application?",
        answer:
          "No. Modernization can involve incremental refactoring, boundary improvements, migrations, architecture changes, or replacement of specific components.",
      },
      {
        question: "How do you prioritize technical debt?",
        answer:
          "Priority should be based on the cost and risk the debt creates for current product requirements, reliability, security, and future development.",
      },
    ],
    evidence: [
      {
        label: "Architecture-first engineering",
        detail:
          "Strix's approach emphasizes identifying system boundaries and technical constraints before implementation decisions.",
      },
      {
        label: "Maintainability focus",
        detail:
          "Existing product work is structured around keeping systems understandable as workflows, features, and operational requirements evolve.",
      },
    ],
    keywords: [
      "product modernization",
      "software modernization",
      "application modernization",
      "legacy software modernization",
      "software modernization services",
    ],
    publishedAt: "2026-09-24",
  },

  // ============================================================
  // SAAS & PLATFORM PRODUCTS
  // ============================================================

  {
    slug: "saas-development",
    eyebrow: "SaaS development",
    title: "SaaS Product Development",
    description:
      "Build SaaS products around clear product workflows, account boundaries, application architecture, operational tooling, and a foundation for continuous evolution.",
    whatIsThis:
      "SaaS development involves building software products delivered as continuously operated services, including the customer experience, application backend, administration, data model, and operational systems.",
    whoIsItFor:
      "Founders and product teams developing subscription products, B2B platforms, operational SaaS, or other software delivered to multiple customers through a shared product environment.",
    whatProblemDoesItSolve:
      "It addresses the architectural and operational complexity that appears when a product needs to support multiple customers, evolving features, administration, permissions, and continuous delivery.",
    howDoesItWork:
      "We establish product boundaries, user and organization models, application workflows, backend services, administration capabilities, and operational visibility appropriate to the product's stage.",
    whyChooseStrix:
      "Strix approaches SaaS as a continuously operated product rather than a collection of screens. Architecture decisions are made with future product evolution and operational ownership in mind.",
    related: [
      { label: "Product Engineering", href: "/services/product-engineering" },
      {
        label: "Full-Stack Product Delivery",
        href: "/services/full-stack-product-delivery",
      },
      { label: "Backend Systems", href: "/services/backend-systems" },
      { label: "Next.js Development", href: "/services/nextjs-development" },
    ],
    faqs: [
      {
        question: "What does SaaS development include?",
        answer:
          "Depending on the product, it can include the customer application, backend services, authentication, organizations, permissions, administration, integrations, billing-related workflows, and operational tooling.",
      },
      {
        question: "Does every SaaS application need multi-tenancy?",
        answer:
          "The correct model depends on the product and deployment requirements. Multi-tenancy is one architectural approach rather than a requirement for every SaaS product.",
      },
      {
        question: "How should a SaaS product be architected initially?",
        answer:
          "The architecture should reflect the expected customer model, workflows, data ownership, operational requirements, and likely evolution without introducing unnecessary complexity too early.",
      },
    ],
    evidence: [
      {
        label: "Product engineering",
        detail:
          "Strix's product work focuses on coherent application systems that connect user experiences, backend services, workflows, and operational tooling.",
      },
      {
        label: "Internal and operational platforms",
        detail:
          "Existing systems demonstrate experience designing structured applications around users, roles, workflows, and operational visibility.",
      },
    ],
    keywords: [
      "SaaS development",
      "SaaS development company",
      "SaaS product development",
      "SaaS application development",
      "B2B SaaS development",
    ],
    publishedAt: "2026-09-24",
  },

  // ============================================================
  // SERVICE EXTENSION / PRODUCT DELIVERY
  // ============================================================

  {
    slug: "software-development",
    eyebrow: "Custom software development",
    title: "Custom Software Development",
    description:
      "Build custom software around the workflows, data, integrations, and operating requirements that generic products cannot adequately support.",
    whatIsThis:
      "Custom software development creates applications specifically around an organization's product or operational requirements instead of forcing those workflows into a generic software package.",
    whoIsItFor:
      "Organizations with differentiated workflows, specialized operational requirements, or product ideas that require software designed around their specific needs.",
    whatProblemDoesItSolve:
      "It addresses situations where existing tools create excessive manual work, fragmented data, poor workflow fit, or limitations that prevent the organization from operating effectively.",
    howDoesItWork:
      "We understand the workflow first, model the required system, select appropriate technologies, implement the core application, and establish the operational foundation required to maintain it.",
    whyChooseStrix:
      "Strix emphasizes system clarity and maintainability instead of treating custom software as a collection of one-off features.",
    related: [
      { label: "Product Engineering", href: "/services/product-engineering" },
      {
        label: "Full-Stack Product Delivery",
        href: "/services/full-stack-product-delivery",
      },
      { label: "Backend Systems", href: "/services/backend-systems" },
      {
        label: "Technical Architecture",
        href: "/services/technical-architecture",
      },
    ],
    faqs: [
      {
        question: "When should a company build custom software?",
        answer:
          "Custom software can make sense when the workflow is strategically important, sufficiently unique, or poorly served by available products.",
      },
      {
        question: "How does custom software differ from SaaS configuration?",
        answer:
          "Configuration adapts an existing product within its boundaries. Custom software allows the system itself to be designed around the organization's workflows and requirements.",
      },
      {
        question: "Does custom software need to be complex?",
        answer:
          "No. The implementation should be as simple as the requirements allow. Custom software is about fit, not unnecessary complexity.",
      },
    ],
    evidence: [
      {
        label: "Internal Operations Hub",
        detail:
          "Custom operational software was used to consolidate workflows and provide a structured operating layer around internal processes.",
      },
      {
        label: "Operational Telemetry Platform",
        detail:
          "The system was designed around field operations, route visibility, synchronization, and leadership requirements rather than a generic dashboard model.",
      },
    ],
    keywords: [
      "custom software development",
      "custom software development company",
      "custom application development",
      "business software development",
      "custom software engineering",
    ],
    publishedAt: "2026-09-24",
  },

  {
    slug: "software-integration",
    eyebrow: "Software integration",
    title: "Software Integration Engineering",
    description:
      "Connect applications, APIs, services, and operational systems through deliberate integration architecture rather than fragile point-to-point connections.",
    whatIsThis:
      "Software integration connects separate systems so data and workflows can move reliably between applications, services, and external platforms.",
    whoIsItFor:
      "Teams whose products depend on external APIs, internal services, communication platforms, payment systems, data sources, or multiple application environments.",
    whatProblemDoesItSolve:
      "It reduces duplicated data entry, inconsistent system state, fragile integrations, and unclear ownership when multiple systems participate in one business workflow.",
    howDoesItWork:
      "We identify system boundaries and ownership, define integration contracts, map data flow, account for retries and failure conditions, and build the integration around the actual business workflow.",
    whyChooseStrix:
      "The studio considers integrations part of the system architecture. External dependencies are treated as sources of operational risk that need explicit boundaries and failure behavior.",
    related: [
      { label: "API Development", href: "/services/api-development" },
      { label: "Backend Systems", href: "/services/backend-systems" },
      { label: "Workflow Automation", href: "/services/workflow-automation" },
      {
        label: "Technical Architecture",
        href: "/services/technical-architecture",
      },
    ],
    faqs: [
      {
        question: "What does software integration include?",
        answer:
          "It can include API integrations, webhooks, data synchronization, authentication between systems, event handling, scheduled synchronization, and workflow coordination.",
      },
      {
        question: "Why do integrations become fragile?",
        answer:
          "External systems change, network requests fail, data formats differ, and ownership is often distributed across systems. Integration architecture needs to account for those conditions.",
      },
      {
        question: "Should integrations be synchronous or asynchronous?",
        answer:
          "The appropriate model depends on the workflow, consistency requirements, latency expectations, failure behavior, and characteristics of the systems being connected.",
      },
    ],
    evidence: [
      {
        label: "Operational synchronization",
        detail:
          "Existing operational systems include synchronization workflows designed to move information between product surfaces and field operations.",
      },
      {
        label: "AI workflow orchestration",
        detail:
          "AI-oriented workflows require coordinated interactions between execution services, approval logic, application state, and operational visibility.",
      },
    ],
    keywords: [
      "software integration",
      "API integration",
      "software integration services",
      "system integration",
      "application integration",
    ],
    publishedAt: "2026-09-24",
  },

  // ============================================================
  // PERFORMANCE / RELIABILITY
  // ============================================================

  {
    slug: "software-reliability",
    eyebrow: "Software reliability",
    title: "Software Reliability Engineering",
    description:
      "Design software systems around predictable behavior, failure handling, observability, and operational clarity so problems can be detected and addressed.",
    whatIsThis:
      "Software reliability engineering focuses on how an application behaves when dependencies fail, data is delayed, workflows are interrupted, or unexpected conditions occur.",
    whoIsItFor:
      "Teams operating products where reliability, workflow continuity, operational visibility, and predictable failure behavior matter to users or internal teams.",
    whatProblemDoesItSolve:
      "It addresses systems that work under ideal conditions but become difficult to understand or recover when APIs fail, connectivity drops, data becomes inconsistent, or workflows are interrupted.",
    howDoesItWork:
      "We identify critical workflows and failure modes, introduce appropriate validation and retry behavior, improve observability, and design recovery paths around the actual operating environment.",
    whyChooseStrix:
      "Strix considers failure behavior part of product architecture rather than treating reliability as something added only after incidents occur.",
    related: [
      { label: "Backend Systems", href: "/services/backend-systems" },
      {
        label: "Technical Architecture",
        href: "/services/technical-architecture",
      },
      {
        label: "Operational Platforms",
        href: "/services/operational-platforms",
      },
      { label: "Product Engineering", href: "/services/product-engineering" },
    ],
    faqs: [
      {
        question: "What does software reliability include?",
        answer:
          "It can include failure handling, retries, idempotency, validation, monitoring, logging, recovery workflows, synchronization behavior, and clear operational visibility.",
      },
      {
        question: "Why should failure cases be designed early?",
        answer:
          "Because failure behavior is part of the system's actual behavior. Deferring it can create workflows that are difficult to recover or diagnose once users depend on them.",
      },
      {
        question: "Does reliability mean eliminating all failures?",
        answer:
          "No. Reliable systems recognize that failures occur and are designed to detect, contain, recover from, and explain them appropriately.",
      },
    ],
    evidence: [
      {
        label: "Low-connectivity workflows",
        detail:
          "Operational systems accounted for delayed updates and unreliable connectivity so the product could continue supporting real-world workflows.",
      },
      {
        label: "AI workflow controls",
        detail:
          "AI-oriented workflows include approval gates, retry-aware execution, and monitoring rather than relying on uncontrolled model execution.",
      },
    ],
    keywords: [
      "software reliability",
      "software reliability engineering",
      "application reliability",
      "reliable software development",
      "software reliability services",
    ],
    publishedAt: "2026-09-24",
  },

  // ============================================================
  // PRODUCT / OPERATIONS
  // ============================================================

  {
    slug: "product-platform-development",
    eyebrow: "Product platforms",
    title: "Product Platform Development",
    description:
      "Build the shared application foundations, workflows, services, and operational capabilities that allow a product platform to grow without unnecessary fragmentation.",
    whatIsThis:
      "Product platform development focuses on the shared technical and operational foundation behind products that contain multiple workflows, user types, or application surfaces.",
    whoIsItFor:
      "Teams whose product has grown beyond a single workflow and now requires shared services, reusable capabilities, consistent data boundaries, and centralized operational control.",
    whatProblemDoesItSolve:
      "It reduces duplication and architectural drift when multiple product surfaces begin implementing similar business logic independently.",
    howDoesItWork:
      "We identify common capabilities, establish ownership and boundaries, define shared interfaces, and implement reusable services or platform components only where the product actually benefits from them.",
    whyChooseStrix:
      "Strix avoids creating abstractions merely for theoretical reuse. Platform capabilities are introduced when they reduce real duplication or improve the product's ability to evolve.",
    related: [
      { label: "Backend Systems", href: "/services/backend-systems" },
      {
        label: "Technical Architecture",
        href: "/services/technical-architecture",
      },
      {
        label: "Full-Stack Product Delivery",
        href: "/services/full-stack-product-delivery",
      },
      { label: "Product Engineering", href: "/services/product-engineering" },
    ],
    faqs: [
      {
        question: "When does a product need platform architecture?",
        answer:
          "Usually when multiple product areas depend on shared capabilities or when duplication and inconsistent implementation begin creating meaningful engineering and operational costs.",
      },
      {
        question: "Does platform engineering mean microservices?",
        answer:
          "No. A platform can be built within a modular application or through separate services. The architecture should follow actual boundaries and operating requirements.",
      },
      {
        question: "How do you avoid over-engineering a platform?",
        answer:
          "Start from repeated product needs and measurable coordination problems. Introduce shared capabilities when they solve a real problem rather than predicting every possible future requirement.",
      },
    ],
    evidence: [
      {
        label: "Shared product architecture",
        detail:
          "Strix's full-stack work connects interfaces, backend services, workflows, and operational tooling around common product boundaries.",
      },
      {
        label: "Operational systems",
        detail:
          "Existing products demonstrate the need for shared data, workflow, and visibility patterns across multiple operational surfaces.",
      },
    ],
    keywords: [
      "platform development",
      "product platform development",
      "software platform development",
      "application platform engineering",
      "product platform engineering",
    ],
    publishedAt: "2026-09-24",
  },
];

export function getServicePage(slug: string) {
  return servicePages.find((page) => page.slug === slug);
}
