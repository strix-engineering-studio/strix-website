export const seoConfig = {
  siteName: "Strix Engineering Studio",
  shortName: "Strix",
  siteUrl:
    process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ??
    "https://strix.website",

  defaultDescription:
    "Strix Engineering Studio designs, builds, and improves production web, mobile, backend, and AI-enabled software for startups and growing businesses.",

  defaultKeywords: [
    "product engineering",
    "software development",
    "custom software development",
    "MVP development",
    "AI engineering",
    "backend engineering",
    "software architecture",
    "software modernization",
  ],

  logo: "/strix.svg",

  socialProfiles: [
    "https://github.com/strix-engineering-studio",
    "https://www.linkedin.com/company/strix-engineering-studio",
    "https://x.com/strix_engineering",
  ],

  organization: {
    name: "Strix Engineering Studio",
    type: "Organization",
  },

  navigation: {
    work: "/work",
    services: "/services",
    products: "/products",
    insights: "/insights",
    about: "/about",
    projectInquiry: "/project-inquiry",
  },
} as const;

export function absoluteUrl(path = "/"): string {
  if (path.startsWith("http")) {
    return path;
  }

  return `${seoConfig.siteUrl}${path.startsWith("/") ? path : `/${path}`}`;
}
