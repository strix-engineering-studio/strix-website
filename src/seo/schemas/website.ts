import { absoluteUrl, seoConfig } from "../config";

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",

    name: seoConfig.siteName,

    url: seoConfig.siteUrl,

    description: seoConfig.defaultDescription,

    publisher: {
      "@type": "Organization",
      name: seoConfig.siteName,
      url: seoConfig.siteUrl,
    },

    potentialAction: {
      "@type": "SearchAction",
      target: `${seoConfig.siteUrl}/search?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };
}
