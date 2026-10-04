import { absoluteUrl } from "../config";
import { getServiceDefinition } from "./definitions";
import { getServiceCombination } from "./combinations";
import type { ResolvedService, ServiceDefinition } from "./types";

function toRelatedServices(slugs: string[]): { label: string; href: string }[] {
  return slugs.map((slug) => {
    const service = getServiceDefinition(slug);

    if (!service) {
      return {
        label: slug,
        href: `/services/${slug}`,
      };
    }

    return {
      label: service.name,
      href: `/services/${service.slug}`,
    };
  });
}

function resolveCanonical(service: ServiceDefinition): ResolvedService {
  return {
    kind: "canonical",

    slug: service.slug,

    name: service.name,

    eyebrow: service.eyebrow,

    title: service.title,

    description: service.description,

    whatIsThis: service.positioning.whatIsThis,

    whoIsItFor: service.positioning.whoIsItFor,

    whatProblemDoesItSolve: service.positioning.whatProblemDoesItSolve,

    howDoesItWork: service.positioning.howDoesItWork,

    whyChooseStrix: service.positioning.whyChooseStrix,

    related: toRelatedServices(service.relatedServices),

    faqs: service.faqs,

    keywords: service.keywords,

    evidence: service.evidence.map((item) => ({
      label: item,
      detail: "Relevant Strix engineering work or capability.",
    })),

    publishedAt: service.publishedAt,

    indexable: true,

    serviceSchema: {
      name: service.name,
      description: service.description,
      url: absoluteUrl(`/services/${service.slug}`),
    },
  };
}

export function resolveService(slug: string): ResolvedService | undefined {
  const service = getServiceDefinition(slug);

  if (service) {
    return resolveCanonical(service);
  }

  const combination = getServiceCombination(slug);

  if (!combination) {
    return undefined;
  }

  const parent = getServiceDefinition(combination.service);

  if (!parent) {
    return undefined;
  }

  const relatedSlugs = [parent.slug, ...combination.relatedServices].filter(
    (value, index, array) => array.indexOf(value) === index,
  );

  return {
    kind: "combination",

    slug: combination.slug,

    name: combination.name,

    eyebrow: combination.eyebrow,

    title: combination.title,

    description: combination.description,

    whatIsThis: combination.uniqueContent.introduction,

    whoIsItFor: combination.audience
      ? `For ${combination.audience}.`
      : parent.positioning.whoIsItFor,

    whatProblemDoesItSolve: parent.positioning.whatProblemDoesItSolve,

    howDoesItWork: parent.positioning.howDoesItWork,

    whyChooseStrix: combination.uniqueContent.whyThisCombination,

    related: toRelatedServices(relatedSlugs),

    faqs: combination.faqs,

    keywords: combination.keywords,

    evidence: combination.evidence.map((item) => ({
      label: item,
      detail: "Relevant Strix engineering work or capability.",
    })),

    publishedAt: combination.publishedAt,

    indexable: combination.indexable,

    serviceSchema: {
      name: combination.name,
      description: combination.description,
      url: absoluteUrl(`/services/${combination.slug}`),
    },
  };
}

export function getAllServiceSlugs(): string[] {
  const canonicalSlugs = [
    ...[
      "product-engineering",
      "mvp-development",
      "custom-software-development",
      "ai-engineering",
      "internal-tools",
      "operational-software",
      "software-architecture",
      "software-modernization",
    ],
  ];

  const technologySlugs = [
    "nextjs-development",
    "nestjs-development",
    "flutter-development",
    "typescript-development",
  ];

  const combinationSlugs = [
    "mvp-development-for-startups",
    "internal-tools-for-operations",
    "ai-engineering-for-products",
    "operational-software-for-field-teams",
    "nextjs-product-development",
    "nestjs-backend-development",
    "software-modernization-for-growing-products",
    "architecture-review-for-existing-products",
    "saas-product-development-for-startups",
    "custom-software-for-operational-businesses",
  ];

  return [...canonicalSlugs, ...technologySlugs, ...combinationSlugs];
}
