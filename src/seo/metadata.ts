import type { Metadata } from "next";

import { absoluteUrl, seoConfig } from "./config";

type PageMetadataInput = {
  title: string;
  description: string;
  path?: string;
  keywords?: string[];
  image?: string;
  noIndex?: boolean;
};

export function createPageMetadata({
  title,
  description,
  path = "/",
  keywords = [],
  image = "/og-image.png",
  noIndex = false,
}: PageMetadataInput): Metadata {
  const url = absoluteUrl(path);
  const imageUrl = absoluteUrl(image);

  return {
    title,
    description,

    keywords: [...seoConfig.defaultKeywords, ...keywords],

    alternates: {
      canonical: url,
    },

    robots: noIndex
      ? {
          index: false,
          follow: false,
        }
      : {
          index: true,
          follow: true,
        },

    openGraph: {
      type: "website",
      url,
      siteName: seoConfig.siteName,
      title,
      description,
      images: [
        {
          url: imageUrl,
          alt: title,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl],
    },
  };
}

/**
 * Backward-compatible alias.
 */
export const buildMetadata = createPageMetadata;
