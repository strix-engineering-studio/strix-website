
import type { MetadataRoute } from "next";


import { servicePages } from "../seo/content";
import { featuredProjects } from "../features/products/content/product.content";

const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://strix.website"
).replace(/\/+$/, "");

// Update this date when the corresponding static pages change.
const STATIC_LAST_MODIFIED = new Date("2026-10-18");

const staticRoutes = [
  "",
  "/about",
  "/contact",
  "/services",
  "/products",
  "/work",
  "/case-studies",
  "/insights",
  "/open-source",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: STATIC_LAST_MODIFIED,
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
    lastModified: STATIC_LAST_MODIFIED,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [...staticPages, ...services, ...products];
}
