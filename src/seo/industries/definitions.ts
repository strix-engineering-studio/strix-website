import { IndustryDefinition } from "./types";

export const industries: IndustryDefinition[] = [
  {
    slug: "logistics",
    name: "Logistics",

    title: "Logistics Software Development",
    description:
      "Custom logistics software for delivery operations, workflow management, tracking, and operational visibility.",

    problems: [
      "delivery coordination",
      "operational visibility",
      "manual workflows",
      "field team coordination",
      "data synchronization",
    ],

    workflows: [
      "delivery management",
      "route management",
      "driver operations",
      "order management",
      "status tracking",
    ],

    softwareNeeds: [
      "admin dashboards",
      "mobile applications",
      "backend systems",
      "workflow automation",
      "operational platforms",
    ],

    relevantServices: [
      "product-engineering",
      "operational-software",
      "internal-tools",
      "custom-software-development",
    ],

    relevantProducts: ["h2go", "icity"],

    keywords: [
      "logistics software development",
      "logistics software company",
      "custom logistics software",
      "logistics management software",
    ],

    indexable: true,
  },

  {
    slug: "travel",
    name: "Travel",

    title: "Travel Software Development",
    description:
      "Build travel and transportation software around booking, trip management, operations, and customer workflows.",

    problems: [
      "booking workflows",
      "trip management",
      "operator coordination",
      "customer communication",
    ],

    workflows: [
      "booking",
      "trip management",
      "operator management",
      "customer management",
    ],

    softwareNeeds: [
      "customer applications",
      "admin systems",
      "booking platforms",
      "operational dashboards",
      "backend APIs",
    ],

    relevantServices: [
      "product-engineering",
      "mvp-development",
      "custom-software-development",
      "operational-software",
    ],

    relevantProducts: ["icity"],

    keywords: [
      "travel software development",
      "travel platform development",
      "transportation software development",
    ],

    indexable: true,
  },

  // education
  // SaaS
  // field-services
  // retail
  // professional-services
  // transportation
  // water-delivery
];
