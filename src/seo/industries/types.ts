export type IndustryDefinition = {
  slug: string;
  name: string;

  title: string;
  description: string;

  problems: string[];
  workflows: string[];
  softwareNeeds: string[];

  relevantServices: string[];
  relevantProducts: string[];

  keywords: string[];

  indexable: boolean;
};
