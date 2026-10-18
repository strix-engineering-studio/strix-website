import { Project } from "../types/product.type";

export const featuredProjects: Project[] = [
    {
        slug: "h2go",
        title: "H2Go",
        category: "Business Operations",
        summary:
            "A water-can management system designed to help water delivery businesses organize customers, orders, deliveries, and day-to-day operations.",
        tagline: "Simplifying water delivery operations.",

        status: "in-development",
        visibility: "public",

        featured: true,
        featuredOrder: 1,

        links: [],

        openSource: {
            status: "closed-source",
        },

        stack: ["Next.js", "TypeScript", "Firebase"],

        capabilities: [
            {
                name: "Customer management",
                description:
                    "Organize customer information for water delivery operations.",
            },
            {
                name: "Order management",
                description:
                    "Support structured order workflows for water-can businesses.",
            },
            {
                name: "Delivery operations",
                description:
                    "Organize delivery-related business activities.",
            },
        ],

        targetAudience: [
            "Water-can suppliers",
            "Water delivery businesses",
        ],

        metrics: [],

        timeline: "Product development",

        spotlight:
            "A dedicated digital system for managing the operational side of a water-can business.",

        problem:
            "Water-can businesses need a structured way to manage customers, orders, deliveries, and recurring operational activities.",

        solution:
            "H2Go focuses on bringing water-can business workflows into a centralized management system.",

        result:
            "A product focused on making water-can business operations more organized.",

        architecture: [
            "Business management",
            "Customer records",
            "Order management",
            "Delivery workflows",
        ],

        deployment: [
            "Digital business operations",
            "Centralized records",
            "Structured order workflows",
        ],

        highlights: [
            "water-can management",
            "customer operations",
            "delivery management",
        ],

        pricingModel: "custom",
    },

    {
        slug: "classes360",
        title: "Classes360",
        category: "Education Technology",
        summary:
            "An institute management platform focused on coaching-class enquiries, admission follow-ups, student records, courses, batches, and fee management.",
        tagline: "A more structured way to run coaching institutes.",

        status: "in-development",
        visibility: "public",

        featured: true,
        featuredOrder: 2,

        links: [],

        openSource: {
            status: "closed-source",
        },

        stack: [
            "Next.js",
            "NestJS",
            "TypeScript",
            "MongoDB",
            "Prisma",
        ],

        capabilities: [
            {
                name: "Enquiry management",
                description:
                    "Organize prospective student enquiries and follow-ups.",
            },
            {
                name: "Admission tracking",
                description:
                    "Support the journey from enquiry to student admission.",
            },
            {
                name: "Student and batch management",
                description:
                    "Organize student records, courses, and batches.",
            },
            {
                name: "Fee and payment records",
                description:
                    "Centralize fee-related information and payment records.",
            },
        ],

        targetAudience: [
            "Coaching institutes",
            "Tuition classes",
            "Education businesses",
        ],

        metrics: [],

        timeline: "Product development",

        spotlight:
            "Connecting the enquiry-to-admission journey with everyday institute administration.",

        problem:
            "Coaching institutes need a consistent way to track prospective students, follow-ups, admissions, batches, and fee-related records.",

        solution:
            "Classes360 brings institute enquiries, student records, course and batch management, follow-ups, and payment tracking into one platform.",

        result:
            "A centralized workflow for managing prospective students and day-to-day institute operations.",

        architecture: [
            "Enquiry management",
            "Admission tracking",
            "Student records",
            "Course and batch management",
            "Fee and payment records",
            "Role-based access",
        ],

        deployment: [
            "Centralized institute records",
            "Structured admission workflows",
            "Organized follow-up management",
        ],

        highlights: [
            "institute management",
            "admission CRM",
            "student operations",
        ],

        pricingModel: "subscription",
    },

    {
        slug: "imrabo",
        title: "Imrabo",
        category: "AI Products",
        summary:
            "An AI assistant concept exploring how AI capabilities can support tasks and workflows through a unified user experience.",
        tagline: "An AI assistant for work across contexts.",

        status: "prototype",
        visibility: "public",

        featured: true,
        featuredOrder: 3,

        links: [],

        openSource: {
            status: "closed-source",
        },

        stack: [
            "TypeScript",
            "LLM APIs",
        ],

        capabilities: [
            {
                name: "AI assistance",
                description:
                    "Explore AI-powered support for user tasks.",
            },
            {
                name: "Workflow integration",
                description:
                    "Explore ways to bring AI capabilities into connected workflows.",
            },
        ],

        targetAudience: [
            "Individuals",
            "Knowledge workers",
            "Digital product users",
        ],

        metrics: [],

        timeline: "Prototype",

        spotlight:
            "Exploring a unified AI assistant experience rather than a collection of disconnected tools.",

        problem:
            "Using AI across different tasks and contexts can require switching between disconnected tools and workflows.",

        solution:
            "Imrabo explores an AI assistant experience intended to bring useful AI capabilities into a more unified workflow.",

        result:
            "An early-stage direction for an AI assistant product.",

        architecture: [
            "AI assistant interface",
            "LLM integration",
            "Task-oriented workflows",
        ],

        deployment: [
            "Prototype development",
            "AI capability exploration",
        ],

        highlights: [
            "AI assistant",
            "LLM integration",
            "unified workflows",
        ],

        pricingModel: "not-applicable",
    },

    {
        slug: "gohere",
        title: "GoHere",
        category: "Digital Products",
        summary:
            "An early-stage product concept focused on helping users discover places and explore relevant destinations through a digital experience.",
        tagline: "Discover places and decide where to go.",

        status: "prototype",
        visibility: "public",

        featured: true,
        featuredOrder: 4,

        links: [],

        openSource: {
            status: "closed-source",
        },

        stack: [
            "Next.js",
            "TypeScript",
        ],

        capabilities: [
            {
                name: "Place discovery",
                description:
                    "Explore ways to help users find relevant places.",
            },
            {
                name: "Destination exploration",
                description:
                    "Organize destination information in a focused experience.",
            },
        ],

        targetAudience: [
            "Travelers",
            "Local explorers",
        ],

        metrics: [],

        timeline: "Prototype",

        spotlight:
            "Exploring a simpler digital experience for place discovery.",

        problem:
            "Finding relevant places and deciding where to go can involve scattered information across multiple sources.",

        solution:
            "GoHere explores a focused product experience for discovering places and organizing destination information.",

        result:
            "An early-stage concept for a place-discovery product.",

        architecture: [
            "Place discovery",
            "Destination information",
            "Search-oriented experience",
        ],

        deployment: [
            "Prototype development",
            "Product validation",
        ],

        highlights: [
            "place discovery",
            "destination exploration",
            "discovery experience",
        ],

        pricingModel: "not-applicable",
    },

    {
        slug: "magicalstones-store",
        title: "MagicalStones.store",
        category: "E-commerce",
        summary:
            "An astrology and spiritual-products online store designed to help customers discover products, shop online, and complete purchases.",
        tagline: "An online storefront for astrology and spiritual products.",

        status: "live",
        visibility: "public",

        featured: true,
        featuredOrder: 5,

        links: [
            // Add the verified storefront URL before publishing.
            // {
            //     label: "Visit store",
            //     url: "https://your-verified-store-domain.com",
            //     type: "website",
            //     featured: true,
            // },
        ],

        openSource: {
            status: "closed-source",
        },

        stack: [
            "Next.js",
            "TypeScript",
            "Firebase",
            "Online Payments",
        ],

        capabilities: [
            {
                name: "Product catalog",
                description:
                    "Present astrology and spiritual products in an online storefront.",
            },
            {
                name: "Shopping cart",
                description:
                    "Support the product selection and shopping workflow.",
            },
            {
                name: "Checkout and payments",
                description:
                    "Support online purchase workflows.",
            },
            {
                name: "Order management",
                description:
                    "Maintain records associated with customer orders.",
            },
        ],

        targetAudience: [
            "Online shoppers",
            "Astrology enthusiasts",
            "Customers interested in spiritual products",
        ],

        metrics: [],

        timeline: "Store development",

        spotlight:
            "A dedicated e-commerce experience for discovering and purchasing astrology-related products.",

        problem:
            "Customers need a clear online shopping experience to browse products, review product information, and complete purchases.",

        solution:
            "MagicalStones.store provides a branded storefront focused on product discovery, shopping, checkout, and order management.",

        result:
            "An e-commerce product focused on the online sale of astrology and spiritual products.",

        architecture: [
            "Product catalog",
            "Shopping cart",
            "Checkout",
            "Online payments",
            "Order records",
        ],

        deployment: [
            "Online storefront",
            "Digital checkout",
            "Order management",
        ],

        highlights: [
            "astrology store",
            "e-commerce",
            "online shopping",
        ],

        pricingModel: "one-time",
    },
];
