import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const insights = defineCollection({
  loader: glob({ base: "./src/content/insights", pattern: "**/*.mdx" }),
  schema: z.object({
    title: z.string(),
    excerpt: z.string(),
    tag: z.string(),
    publishedAt: z.coerce.date(),
    updatedAt: z.coerce.date().optional(),
    draft: z.boolean().default(false),
    cover: z.string().optional(),
    author: z.string().default("Strix Engineering Studio"),
    readingTime: z.string().optional()
  })
});

const caseStudies = defineCollection({
  loader: glob({ base: "./src/content/case-studies", pattern: "**/*.mdx" }),
  schema: z.object({
    title: z.string(),
    subtitle: z.string(),
    category: z.string(),
    status: z.enum(["draft", "published"]).default("published"),
    visibility: z.enum(["public", "anonymized", "private"]).default("public"),
    client: z.string().optional(),
    cover: z.string().optional(),
    publishedAt: z.coerce.date().optional(),
    description: z.string().optional()
  })
});

const products = defineCollection({
  loader: glob({ base: "./src/content/products", pattern: "**/*.mdx" }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    category: z.string(),
    status: z.string(),
    url: z.string().url().optional(),
    logo: z.string().optional(),
    cover: z.string().optional(),
    featured: z.boolean().default(false)
  })
});

export const collections = { insights, caseStudies, products };