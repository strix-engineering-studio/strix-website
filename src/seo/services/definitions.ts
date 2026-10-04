import type { ServiceDefinition } from "./types";

export const serviceDefinitions: ServiceDefinition[] = [
  {
    slug: "product-engineering",
    name: "Product Engineering",
    type: "canonical",

    eyebrow: "Product Engineering",

    title: "Product Engineering for Production Software",

    description:
      "Strix helps startups and growing businesses design, build, ship, and evolve production software across web, mobile, backend, and AI systems.",

    positioning: {
      whatIsThis:
        "Product engineering combines product thinking, software architecture, implementation, deployment, and ongoing technical improvement into one engineering discipline.",

      whoIsItFor:
        "For startups, growing businesses, and teams that need a technical partner to turn a product idea or existing system into reliable production software.",

      whatProblemDoesItSolve:
        "It reduces the gap between product requirements and production implementation by keeping architecture, development, infrastructure, and product delivery connected.",

      howDoesItWork:
        "Strix works from product requirements through architecture, implementation, deployment, and iterative improvement, selecting the appropriate web, mobile, backend, and AI technologies for the product.",

      whyChooseStrix:
        "Strix focuses on production systems rather than isolated feature development, with attention to architecture, maintainability, deployment, and long-term product evolution.",
    },

    keywords: [
      "product engineering",
      "product engineering company",
      "software product development",
      "product development services",
    ],

    technologies: [
      "Next.js",
      "NestJS",
      "TypeScript",
      "Flutter",
      "Firebase",
      "MongoDB",
      "Prisma",
    ],

    useCases: [
      "new product development",
      "existing product development",
      "MVP development",
      "product modernization",
    ],

    audiences: ["startups", "growing businesses", "technology companies"],

    evidence: [
      "Hugged Parenting Platform",
      "H2Go",
      "ICity",
      "Imrabo",
      "GoHere",
    ],

    relatedServices: [
      "mvp-development",
      "custom-software-development",
      "ai-engineering",
      "software-architecture",
    ],

    faqs: [
      {
        question: "What does product engineering include?",
        answer:
          "Product engineering can include product architecture, frontend and backend development, mobile development, integrations, deployment, reliability improvements, and ongoing product evolution.",
      },
      {
        question: "Can Strix work with an existing product?",
        answer:
          "Yes. Strix can work on existing products through modernization, architecture improvements, feature development, backend work, and reliability engineering.",
      },
    ],

    publishedAt: "2026-01-01",
  },

  {
    slug: "mvp-development",
    name: "MVP Development",
    type: "canonical",

    eyebrow: "MVP Development",

    title: "MVP Development for Startups and New Products",

    description:
      "Strix builds focused MVPs that validate product assumptions while establishing a production-ready technical foundation.",

    positioning: {
      whatIsThis:
        "MVP development is the process of building the smallest useful version of a product capable of validating its core product and technical assumptions.",

      whoIsItFor:
        "For founders, startups, and businesses validating a new software product before committing to a larger product build.",

      whatProblemDoesItSolve:
        "It helps teams move from an idea to a usable product without prematurely building unnecessary features or infrastructure.",

      howDoesItWork:
        "Strix defines the core product scope, establishes the technical architecture, implements the critical workflows, and prepares the MVP for real users and further iteration.",

      whyChooseStrix:
        "Strix treats an MVP as a foundation for the next product stage rather than disposable prototype code.",
    },

    keywords: [
      "MVP development",
      "MVP development company",
      "startup MVP development",
      "MVP software development",
    ],

    technologies: [
      "Next.js",
      "NestJS",
      "Flutter",
      "TypeScript",
      "Firebase",
      "MongoDB",
    ],

    useCases: [
      "startup MVP",
      "product validation",
      "POC to MVP",
      "new software product",
    ],

    audiences: ["startups", "founders", "new businesses"],

    evidence: ["H2Go", "ICity", "Imrabo", "GoHere"],

    relatedServices: [
      "product-engineering",
      "custom-software-development",
      "software-architecture",
    ],

    faqs: [
      {
        question: "How long does an MVP take to build?",
        answer:
          "The timeline depends on the product scope, integrations, platforms, and validation requirements. Strix first reduces the MVP to the workflows that must exist for meaningful validation.",
      },
      {
        question: "Does Strix build production-ready MVPs?",
        answer:
          "Yes. The goal is to avoid throwaway architecture where the MVP is expected to become the foundation for the next product stage.",
      },
    ],

    publishedAt: "2026-01-01",
  },

  {
    slug: "custom-software-development",
    name: "Custom Software Development",
    type: "canonical",

    eyebrow: "Custom Software",

    title: "Custom Software Development for Business Workflows",

    description:
      "Strix builds custom software around specific business workflows, operational requirements, integrations, and product goals.",

    positioning: {
      whatIsThis:
        "Custom software development creates software specifically around an organization's workflows and requirements rather than forcing those workflows into a generic product.",

      whoIsItFor:
        "For organizations with operational or product requirements that cannot be effectively handled by off-the-shelf software.",

      whatProblemDoesItSolve:
        "It addresses workflow constraints, fragmented systems, manual processes, and product requirements that generic software cannot adequately support.",

      howDoesItWork:
        "Strix maps the required workflows, designs the system architecture, implements the necessary interfaces and backend systems, and integrates the resulting software into the business workflow.",

      whyChooseStrix:
        "The software is designed around the actual workflow instead of adding unnecessary complexity around a generic template.",
    },

    keywords: [
      "custom software development",
      "custom software development company",
      "business software development",
      "bespoke software development",
    ],

    technologies: [
      "Next.js",
      "NestJS",
      "TypeScript",
      "Flutter",
      "Firebase",
      "MongoDB",
    ],

    useCases: [
      "business applications",
      "workflow software",
      "operational platforms",
      "internal software",
    ],

    audiences: ["businesses", "startups", "operations teams"],

    evidence: ["H2Go", "ICity", "Hugged Parenting Platform", "GoHere"],

    relatedServices: [
      "product-engineering",
      "internal-tools",
      "operational-software",
      "software-architecture",
    ],

    faqs: [
      {
        question: "When should a business build custom software?",
        answer:
          "Custom software is useful when important workflows, integrations, or product requirements cannot be handled effectively by existing software.",
      },
      {
        question: "Can Strix integrate custom software with existing systems?",
        answer:
          "Yes. Integrations can be part of the architecture when existing APIs, databases, services, or operational systems need to work together.",
      },
    ],

    publishedAt: "2026-01-01",
  },

  {
    slug: "ai-engineering",
    name: "AI Engineering",
    type: "canonical",

    eyebrow: "AI Engineering",

    title: "AI Engineering for Software Products and Workflows",

    description:
      "Strix designs and builds AI-enabled software, assistants, agentic workflows, and integrations around practical product requirements.",

    positioning: {
      whatIsThis:
        "AI engineering connects models, tools, application logic, data, and product workflows into usable software systems.",

      whoIsItFor:
        "For companies looking to introduce AI capabilities into existing products or build new AI-enabled software.",

      whatProblemDoesItSolve:
        "It turns model capabilities into controlled product workflows rather than treating AI as an isolated chatbot feature.",

      howDoesItWork:
        "Strix evaluates the workflow, selects appropriate model and tool architectures, implements application integration, and adds the supporting infrastructure required for reliable usage.",

      whyChooseStrix:
        "The focus is on useful AI systems integrated into software products, with attention to architecture, tools, models, and operational constraints.",
    },

    keywords: [
      "AI engineering",
      "AI product development",
      "AI software development",
      "AI application development",
      "agentic software development",
    ],

    technologies: ["LLMs", "MCP", "TypeScript", "Python", "Next.js", "Flutter"],

    useCases: [
      "AI assistants",
      "AI workflows",
      "agentic systems",
      "AI product features",
    ],

    audiences: ["startups", "technology companies", "software teams"],

    evidence: ["Imrabo", "AI-enabled product workflows"],

    relatedServices: [
      "product-engineering",
      "custom-software-development",
      "software-architecture",
    ],

    faqs: [
      {
        question: "Does Strix build AI agents?",
        answer:
          "Strix can build agentic software where models interact with application tools, services, data, and controlled workflows.",
      },
      {
        question: "Can AI be added to an existing product?",
        answer:
          "Yes. AI capabilities can be integrated into an existing product when there is a clear workflow or user problem that benefits from them.",
      },
    ],

    publishedAt: "2026-01-01",
  },

  {
    slug: "internal-tools",
    name: "Internal Tools",
    type: "canonical",

    eyebrow: "Internal Tools",

    title: "Internal Tools for Business Operations",

    description:
      "Strix builds internal applications that centralize workflows, data, approvals, operational actions, and business processes.",

    positioning: {
      whatIsThis:
        "Internal tools are software applications built specifically for teams to manage operational workflows and business information.",

      whoIsItFor:
        "For organizations that rely on spreadsheets, manual processes, disconnected systems, or repetitive administrative workflows.",

      whatProblemDoesItSolve:
        "They reduce fragmented workflows and provide teams with a structured interface for executing recurring operational work.",

      howDoesItWork:
        "Strix maps the operational workflow, models the required data, builds the interface and backend, and integrates relevant systems.",

      whyChooseStrix:
        "The tool is designed around how the organization actually operates instead of forcing internal teams into generic workflows.",
    },

    keywords: [
      "internal tools development",
      "internal business tools",
      "internal software development",
      "business operations software",
    ],

    technologies: ["Next.js", "NestJS", "TypeScript", "Prisma", "MongoDB"],

    useCases: [
      "admin consoles",
      "operations dashboards",
      "lead management",
      "workflow management",
    ],

    audiences: [
      "operations teams",
      "business teams",
      "startups",
      "growing companies",
    ],

    evidence: ["Strix Lead Console", "Hugged Admin Console"],

    relatedServices: [
      "custom-software-development",
      "operational-software",
      "backend-api-engineering",
    ],

    faqs: [
      {
        question: "What internal tools can Strix build?",
        answer:
          "Examples include admin consoles, operational dashboards, workflow applications, lead management systems, research systems, and internal data interfaces.",
      },
    ],

    publishedAt: "2026-01-01",
  },

  {
    slug: "operational-software",
    name: "Operational Software",
    type: "canonical",

    eyebrow: "Operational Software",

    title: "Operational Software for Real-World Workflows",

    description:
      "Strix builds software for operational businesses that need to coordinate people, workflows, data, field activity, and service delivery.",

    positioning: {
      whatIsThis:
        "Operational software manages the workflows through which businesses deliver services, coordinate teams, process orders, or manage physical-world operations.",

      whoIsItFor:
        "For businesses with operational workflows that require software beyond a standard website or CRM.",

      whatProblemDoesItSolve:
        "It replaces fragmented operational processes with software that coordinates data, users, workflows, and business actions.",

      howDoesItWork:
        "Strix models the operational workflow first and then builds the interfaces, backend systems, integrations, and data flows required to execute it.",

      whyChooseStrix:
        "Strix approaches operational software as a system rather than a collection of isolated screens.",
    },

    keywords: [
      "operational software",
      "operations software development",
      "business operations platform",
      "workflow software development",
    ],

    technologies: ["Next.js", "NestJS", "Flutter", "Firebase", "MongoDB"],

    useCases: [
      "field operations",
      "service management",
      "logistics workflows",
      "order management",
    ],

    audiences: [
      "operational businesses",
      "service businesses",
      "logistics businesses",
    ],

    evidence: ["H2Go", "GoHere", "ICity"],

    relatedServices: [
      "custom-software-development",
      "internal-tools",
      "product-engineering",
    ],

    faqs: [
      {
        question: "What is operational software?",
        answer:
          "Operational software coordinates the workflows and data required to deliver services, manage field activity, process orders, or run recurring business operations.",
      },
    ],

    publishedAt: "2026-01-01",
  },

  {
    slug: "software-architecture",
    name: "Software Architecture",
    type: "canonical",

    eyebrow: "Software Architecture",

    title: "Software Architecture for Growing Products",

    description:
      "Strix designs and reviews software architectures for products that need a stronger technical foundation before scaling or evolving.",

    positioning: {
      whatIsThis:
        "Software architecture defines the structure, boundaries, dependencies, data flows, and technical decisions that shape a software system.",

      whoIsItFor:
        "For teams starting a product, growing an existing system, or facing architectural constraints that are slowing development.",

      whatProblemDoesItSolve:
        "It addresses architectural coupling, unclear boundaries, scaling constraints, poor data flow, and technical decisions that make future development expensive.",

      howDoesItWork:
        "Strix examines product requirements and technical constraints, defines system boundaries and interfaces, and selects an architecture appropriate to the product's current and future needs.",

      whyChooseStrix:
        "Architecture decisions are connected to actual product requirements rather than applying generic architectural patterns without context.",
    },

    keywords: [
      "software architecture",
      "software architecture services",
      "system architecture consulting",
      "application architecture",
    ],

    technologies: [
      "TypeScript",
      "Next.js",
      "NestJS",
      "Flutter",
      "MongoDB",
      "Firebase",
    ],

    useCases: [
      "new product architecture",
      "architecture review",
      "system redesign",
      "scaling existing products",
    ],

    audiences: ["startups", "software teams", "growing products"],

    evidence: ["Hugged", "Strix Lead Console", "Imrabo"],

    relatedServices: [
      "product-engineering",
      "software-modernization",
      "custom-software-development",
    ],

    faqs: [
      {
        question: "When should a product review its architecture?",
        answer:
          "Architecture should be reviewed when development slows because of technical coupling, scaling requirements change, major product capabilities are being added, or the current structure creates recurring reliability problems.",
      },
    ],

    publishedAt: "2026-01-01",
  },

  {
    slug: "software-modernization",
    name: "Software Modernization",
    type: "canonical",

    eyebrow: "Software Modernization",

    title: "Software Modernization for Existing Products",

    description:
      "Strix modernizes existing software systems through architecture improvements, technology upgrades, refactoring, and incremental replacement.",

    positioning: {
      whatIsThis:
        "Software modernization improves an existing system's architecture, technology, reliability, maintainability, or delivery process without requiring a complete rewrite by default.",

      whoIsItFor:
        "For companies with existing software that has become difficult to maintain, extend, deploy, or scale.",

      whatProblemDoesItSolve:
        "It reduces technical debt and development friction while allowing the product to continue evolving.",

      howDoesItWork:
        "Strix identifies the highest-impact technical constraints, establishes a modernization sequence, and incrementally improves the system while protecting important existing functionality.",

      whyChooseStrix:
        "Modernization is treated as an engineering transition rather than a blanket rewrite.",
    },

    keywords: [
      "software modernization",
      "legacy software modernization",
      "application modernization",
      "software refactoring services",
    ],

    technologies: [
      "Next.js",
      "NestJS",
      "TypeScript",
      "Flutter",
      "Firebase",
      "MongoDB",
    ],

    useCases: [
      "legacy modernization",
      "architecture refactoring",
      "technology migration",
      "technical debt reduction",
    ],

    audiences: ["growing companies", "software teams", "existing products"],

    evidence: ["Hugged", "Existing Strix engineering work"],

    relatedServices: [
      "software-architecture",
      "product-engineering",
      "custom-software-development",
    ],

    faqs: [
      {
        question: "Does modernization require rewriting the whole application?",
        answer:
          "No. Incremental modernization is often preferable because it reduces migration risk and allows the product to continue operating during the transition.",
      },
    ],

    publishedAt: "2026-01-01",
  },

  // Technology-focused services

  {
    slug: "nextjs-development",
    name: "Next.js Development",
    type: "technology",

    eyebrow: "Next.js Development",

    title: "Next.js Development for Production Applications",

    description:
      "Strix builds production web applications, SaaS products, dashboards, and business platforms with Next.js and TypeScript.",

    positioning: {
      whatIsThis:
        "Next.js development covers production web applications built around React, server-side capabilities, routing, data access, and modern web application architecture.",

      whoIsItFor:
        "For startups and businesses building web products, SaaS applications, dashboards, and internal platforms.",

      whatProblemDoesItSolve:
        "It provides a structured foundation for building modern web applications with strong application architecture and deployment options.",

      howDoesItWork:
        "Strix combines Next.js with appropriate backend services, databases, authentication, APIs, and deployment infrastructure.",

      whyChooseStrix:
        "Next.js is used as part of a complete product architecture rather than as an isolated frontend technology.",
    },

    keywords: [
      "Next.js development",
      "Next.js development company",
      "Next.js application development",
      "Next.js product development",
    ],

    technologies: ["Next.js", "React", "TypeScript", "Prisma", "MongoDB"],

    useCases: [
      "SaaS applications",
      "admin consoles",
      "business applications",
      "web products",
    ],

    audiences: ["startups", "software companies", "businesses"],

    evidence: ["Hugged Admin Console", "Strix Lead Console", "ICity"],

    relatedServices: [
      "product-engineering",
      "custom-software-development",
      "internal-tools",
    ],

    faqs: [],

    publishedAt: "2026-01-01",
  },

  {
    slug: "nestjs-development",
    name: "NestJS Development",
    type: "technology",

    eyebrow: "NestJS Development",

    title: "NestJS Backend Development",

    description:
      "Strix builds structured TypeScript backend systems and APIs using NestJS.",

    positioning: {
      whatIsThis:
        "NestJS development focuses on structured TypeScript backend applications, APIs, services, modules, and integrations.",

      whoIsItFor:
        "For teams building backend systems that require clear architecture, maintainability, and integration capabilities.",

      whatProblemDoesItSolve:
        "It provides structure for growing backend applications where an ad-hoc API architecture would become difficult to maintain.",

      howDoesItWork:
        "Strix organizes backend systems around modules, services, data access, APIs, validation, authentication, and integrations.",

      whyChooseStrix:
        "NestJS is used where structured TypeScript backend architecture provides a practical advantage for the product.",
    },

    keywords: [
      "NestJS development",
      "NestJS development company",
      "NestJS backend development",
      "TypeScript backend development",
    ],

    technologies: ["NestJS", "TypeScript", "Prisma", "MongoDB", "Firebase"],

    useCases: [
      "REST APIs",
      "backend systems",
      "admin backends",
      "business platforms",
    ],

    audiences: ["startups", "software teams", "technology companies"],

    evidence: ["Strix Lead Console", "Hugged backend systems"],

    relatedServices: [
      "product-engineering",
      "custom-software-development",
      "software-architecture",
    ],

    faqs: [],

    publishedAt: "2026-01-01",
  },

  {
    slug: "flutter-development",
    name: "Flutter Development",
    type: "technology",

    eyebrow: "Flutter Development",

    title: "Flutter Development for Mobile Applications",

    description:
      "Strix builds cross-platform mobile applications with Flutter for products that require a shared mobile codebase.",

    positioning: {
      whatIsThis:
        "Flutter development provides a cross-platform application architecture for building mobile applications from a shared Dart codebase.",

      whoIsItFor:
        "For businesses and product teams building mobile applications across iOS and Android.",

      whatProblemDoesItSolve:
        "It can reduce duplicated platform implementation while maintaining a product-specific mobile application experience.",

      howDoesItWork:
        "Strix structures Flutter applications around feature boundaries, state management, domain logic, APIs, local persistence, and platform integrations.",

      whyChooseStrix:
        "Flutter is used with product architecture and engineering practices suitable for long-term application development.",
    },

    keywords: [
      "Flutter development",
      "Flutter app development",
      "Flutter development company",
      "cross platform mobile development",
    ],

    technologies: ["Flutter", "Dart", "Firebase"],

    useCases: [
      "mobile products",
      "customer applications",
      "field applications",
    ],

    audiences: ["startups", "businesses", "product companies"],

    evidence: ["Hugged mobile application", "GoHere"],

    relatedServices: ["product-engineering", "custom-software-development"],

    faqs: [],

    publishedAt: "2026-01-01",
  },

  {
    slug: "typescript-development",
    name: "TypeScript Development",
    type: "technology",

    eyebrow: "TypeScript Development",

    title: "TypeScript Development for Web and Backend Systems",

    description:
      "Strix uses TypeScript across web applications, backend services, tooling, and AI-enabled systems.",

    positioning: {
      whatIsThis:
        "TypeScript development provides static typing and structured application code across modern JavaScript-based products.",

      whoIsItFor:
        "For teams building web applications, backend systems, APIs, and developer tooling.",

      whatProblemDoesItSolve:
        "It improves maintainability and type safety in growing JavaScript applications.",

      howDoesItWork:
        "Strix uses TypeScript across application boundaries, APIs, services, domain models, and shared tooling where it improves system clarity.",

      whyChooseStrix:
        "TypeScript is applied as part of a broader architecture rather than treated as a standalone implementation choice.",
    },

    keywords: [
      "TypeScript development",
      "TypeScript development company",
      "TypeScript software development",
      "TypeScript backend development",
    ],

    technologies: ["TypeScript", "Next.js", "NestJS", "Node.js"],

    useCases: [
      "web applications",
      "backend systems",
      "APIs",
      "developer tooling",
    ],

    audiences: ["startups", "software teams", "technology companies"],

    evidence: ["Strix Lead Console", "Imrabo", "Hugged"],

    relatedServices: [
      "nextjs-development",
      "nestjs-development",
      "product-engineering",
    ],

    faqs: [],

    publishedAt: "2026-01-01",
  },
];

export const canonicalServices = serviceDefinitions.filter(
  (service) => service.type === "canonical",
);

export const technologyServices = serviceDefinitions.filter(
  (service) => service.type === "technology",
);

export function getServiceDefinition(
  slug: string,
): ServiceDefinition | undefined {
  return serviceDefinitions.find((service) => service.slug === slug);
}
