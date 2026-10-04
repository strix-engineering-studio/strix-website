import { absoluteUrl } from "../config";

type ServiceSchemaInput = {
  name: string;
  description: string;
  url: string;
};

export function serviceSchema({ name, description, url }: ServiceSchemaInput) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",

    name,

    description,

    url,

    provider: {
      "@type": "Organization",

      name: "Strix Engineering Studio",

      url: absoluteUrl("/"),
    },
  };
}
