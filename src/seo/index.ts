export { seoConfig, absoluteUrl } from "./config";

export { createPageMetadata, buildMetadata } from "./metadata";

export { JsonLd } from "./json-ld";

export {
  serviceDefinitions,
  canonicalServices,
  technologyServices,
  getServiceDefinition,
} from "./services/definitions";

export {
  serviceCombinations,
  getServiceCombination,
} from "./services/combinations";

export { resolveService, getAllServiceSlugs } from "./services/resolver";

export type {
  FAQ,
  ServiceType,
  CombinationType,
  ServiceDefinition,
  ServiceCombination,
  ResolvedService,
} from "./services/types";

export { organizationSchema } from "./schemas/organization";

export { websiteSchema } from "./schemas/website";

export { breadcrumbSchema } from "./schemas/breadcrumb";

export { faqSchema } from "./schemas/faq";

export { serviceSchema } from "./schemas/service";
