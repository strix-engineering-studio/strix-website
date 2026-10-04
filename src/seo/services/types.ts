export type FAQ = {
  question: string;
  answer: string;
};

export type ServiceType = "canonical" | "technology" | "combination";

export type CombinationType = "technology" | "audience" | "use-case";

export type ServiceDefinition = {
  slug: string;

  name: string;

  type: ServiceType;

  eyebrow: string;

  title: string;

  description: string;

  positioning: {
    whatIsThis: string;
    whoIsItFor: string;
    whatProblemDoesItSolve: string;
    howDoesItWork: string;
    whyChooseStrix: string;
  };

  keywords: string[];

  technologies: string[];

  useCases: string[];

  audiences: string[];

  evidence: string[];

  relatedServices: string[];

  faqs: FAQ[];

  publishedAt: string;
};

export type ServiceCombination = {
  slug: string;

  name: string;

  type: "combination";

  combinationType: CombinationType;

  service: string;

  technology?: string;

  audience?: string;

  useCase?: string;

  eyebrow: string;

  title: string;

  description: string;

  keywords: string[];

  uniqueContent: {
    introduction: string;
    whyThisCombination: string;
  };

  evidence: string[];

  relatedServices: string[];

  faqs: FAQ[];

  publishedAt: string;

  indexable: boolean;
};

export type ResolvedService = {
  kind: "canonical" | "combination";

  slug: string;

  name: string;

  eyebrow: string;

  title: string;

  description: string;

  whatIsThis: string;

  whoIsItFor: string;

  whatProblemDoesItSolve: string;

  howDoesItWork: string;

  whyChooseStrix: string;

  related: {
    label: string;
    href: string;
  }[];

  faqs: FAQ[];

  keywords: string[];

  evidence: {
    label: string;
    detail: string;
  }[];

  publishedAt: string;

  indexable: boolean;

  serviceSchema: {
    name: string;
    description: string;
    url: string;
  };
};
