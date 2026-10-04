import { absoluteUrl, seoConfig } from "../config";

type ArticleSchemaInput = {
  headline: string;
  description: string;
  path: string;
  publishedAt: string;
  updatedAt?: string;
  image?: string;
  author?: string;
};

export function articleSchema({
  headline,
  description,
  path,
  publishedAt,
  updatedAt,
  image = "/og-image.png",
  author = "Strix Engineering Studio",
}: ArticleSchemaInput) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",

    headline,

    description,

    url: absoluteUrl(path),

    image: [absoluteUrl(image)],

    datePublished: publishedAt,

    ...(updatedAt
      ? {
          dateModified: updatedAt,
        }
      : {}),

    author: {
      "@type": "Organization",

      name: author,

      url: seoConfig.siteUrl,
    },

    publisher: {
      "@type": "Organization",

      name: seoConfig.siteName,

      url: seoConfig.siteUrl,

      logo: {
        "@type": "ImageObject",

        url: absoluteUrl(seoConfig.logo),
      },
    },
  };
}
