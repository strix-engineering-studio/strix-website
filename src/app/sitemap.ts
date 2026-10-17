import type { MetadataRoute } from "next";

import { featuredProjects } from "@/lib/site";
import { servicePages } from "../seo/content";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://strix.website";

// Bump this only when static page content actually changes
const STATIC_LAST_MODIFIED = new Date("2026-10-04");

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/services",
    "/products",
    "/process",
    "/insights",
    "/about",
    "/project-inquiry",
  ];

  const pages: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: STATIC_LAST_MODIFIED,
    changeFrequency: "monthly",
    priority: route === "" ? 1.0 : 0.8,
  }));

  const services: MetadataRoute.Sitemap = servicePages.map((page) => ({
    url: `${siteUrl}/services/${page.slug}`,
    lastModified: new Date(page.publishedAt),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const work: MetadataRoute.Sitemap = featuredProjects.map((project) => ({
    url: `${siteUrl}/work/${project.slug}`,
    lastModified: STATIC_LAST_MODIFIED,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const products: MetadataRoute.Sitemap = featuredProjects.map((project) => ({
    url: `${siteUrl}/products/${project.slug}`,
    lastModified: STATIC_LAST_MODIFIED,
    changeFrequency: "monthly",
    priority: 0.9,
  }));

  return [...pages, ...services, ...work, ...products];
}
