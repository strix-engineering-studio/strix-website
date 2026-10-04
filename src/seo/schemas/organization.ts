import { absoluteUrl, seoConfig } from "../config";

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",

    name: seoConfig.siteName,

    url: seoConfig.siteUrl,

    logo: absoluteUrl(seoConfig.logo),

    sameAs: [...seoConfig.socialProfiles],
  };
}
