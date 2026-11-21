import type { MetadataRoute } from "next";

import { servicePages } from "../seo/content";
import { featuredProjects } from "../features/products/content/product.content";
import { seoConfig } from "../seo";

const siteUrl = seoConfig.siteUrl.replace(/\/+$/, "");

// Use the canonical destination instead of the legacy /work redirect.
const staticRoutes = [
  "",
  "/about",
  "/contact",
  "/services",
  "/products",
  "/case-studies",
  "/insights",
  "/open-source",
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
    url: `${siteUrl}${route}`,
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.7,
  }));

  const services: MetadataRoute.Sitemap = servicePages
    .filter((page) => Boolean(page.slug && page.publishedAt))
    .map((page) => ({
      url: `${siteUrl}/services/${page.slug}`,
      lastModified: new Date(page.publishedAt),
      changeFrequency: "monthly",
      priority: 0.8,
    }));

  const products: MetadataRoute.Sitemap = featuredProjects.map((project) => ({
    url: `${siteUrl}/products/${project.slug}`,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [...staticPages, ...services, ...products];
}
