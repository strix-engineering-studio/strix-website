import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { PageShell } from "@/components/shared/page-shell";
import { buildMetadata } from "@/seo/metadata";
import { featuredProjects } from "../content/product.content";

export const metadata: Metadata = buildMetadata({
  title: "Products & Systems | Strix Engineering Studio",
  description:
    "Explore H2Go, Classes360, Imrabo, GoHere, and MagicalStones.store — products built by Strix Engineering Studio.",
  path: "/products",
  keywords: [
    "Strix products",
    "H2Go water-can management",
    "Classes360 institute management",
    "Imrabo AI assistant",
    "GoHere",
    "MagicalStones astrology store",
  ],
});

const statusLabels: Record<string, string> = {
  live: "Live",
  beta: "Beta",
  "in-development": "In development",
  prototype: "Prototype",
  archived: "Archived",
};

const linkPriority = [
  "website",
  "app",
  "demo",
  "repository",
  "documentation",
  "changelog",
  "social",
  "support",
  "other",
] as const;

export default function ProductsPage() {
  const projects = [...featuredProjects]
    .filter((project) => project.visibility === "public")
    .sort(
      (a, b) =>
        (a.featuredOrder ?? Number.MAX_SAFE_INTEGER) -
        (b.featuredOrder ?? Number.MAX_SAFE_INTEGER),
    );

  return (
    <PageShell
      eyebrow="Our Products"
      title="Products built around real business operations"
      description="Explore our platforms across business operations, education technology, AI assistance, place discovery, and e-commerce."
    >
      <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((project, index) => {
          const sortedLinks = [...project.links].sort((a, b) => {
            const aIndex = linkPriority.indexOf(
              a.type as (typeof linkPriority)[number],
            );
            const bIndex = linkPriority.indexOf(
              b.type as (typeof linkPriority)[number],
            );

            return (
              (a.featured ? -100 : 0) +
              aIndex -
              ((b.featured ? -100 : 0) + bIndex)
            );
          });

          const primaryLink = sortedLinks.find(
            (link) =>
              link.type === "website" ||
              link.type === "app" ||
              link.type === "demo",
          );

          const repositoryLink = sortedLinks.find(
            (link) => link.type === "repository",
          );

          return (
            <article
              key={project.slug}
              className="group flex min-w-0 flex-col overflow-hidden rounded-xl border border-border bg-card shadow-sm transition-all hover:border-primary/50 hover:shadow-md"
            >
              {/* Product preview */}
              <Link
                href={`/products/${project.slug}`}
                aria-label={`Explore ${project.title}`}
                className="relative block aspect-[16/10] overflow-hidden border-b border-border bg-muted/30"
              >
                {project.coverImageUrl ? (
                  <Image
                    src={project.coverImageUrl}
                    alt={`${project.title} product preview`}
                    fill
                    sizes="(max-width: 767px) 100vw, (max-width: 1279px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                ) : (
                  <div className="flex h-full flex-col justify-between bg-muted/40 p-5">
                    <div className="flex items-start justify-between gap-3">
                      <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
                        {project.category}
                      </span>

                      <span className="rounded-full border border-border bg-background px-2.5 py-0.5 font-mono text-[10px] text-foreground">
                        {statusLabels[project.status] ?? project.status}
                      </span>
                    </div>

                    <div>
                      <p className="editorial-serif text-3xl font-normal text-foreground">
                        {project.title}
                      </p>
                      <p className="mt-1 text-xs text-muted-foreground">
                        {project.tagline}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-1.5">
                      {project.stack.slice(0, 3).map((technology) => (
                        <span
                          key={technology}
                          className="rounded-full border border-border bg-background px-2 py-0.5 font-mono text-[9px] text-foreground/80"
                        >
                          {technology}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </Link>

              {/* Product information */}
              <div className="flex flex-1 flex-col p-6">
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-border/70 pb-3">
                  <p className="font-mono text-[10px] uppercase tracking-wider text-primary">
                    {project.category}
                  </p>

                  <span className="rounded-full border border-border bg-background px-2.5 py-0.5 font-mono text-[10px] text-muted-foreground">
                    {statusLabels[project.status] ?? project.status}
                  </span>
                </div>

                <h2 className="editorial-serif mt-4 text-2xl font-normal text-foreground transition-colors group-hover:text-primary">
                  <Link href={`/products/${project.slug}`}>
                    {project.title}
                  </Link>
                </h2>

                <p className="mt-2 text-xs leading-relaxed text-muted-foreground sm:text-sm">
                  {project.summary}
                </p>

                {/* Technology tags */}
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {project.stack.slice(0, 4).map((technology) => (
                    <span
                      key={technology}
                      className="rounded-full border border-border bg-background px-2.5 py-0.5 font-mono text-[10px] text-foreground/80"
                    >
                      {technology}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="mt-auto flex flex-wrap items-center justify-between border-t border-border/80 pt-4 mt-6">
                  <Link
                    href={`/products/${project.slug}`}
                    className="inline-flex items-center gap-1 font-mono text-xs font-semibold uppercase tracking-wider text-primary transition-colors hover:text-foreground"
                  >
                    <span>Explore product</span>
                    <ArrowUpRight className="size-3.5" />
                  </Link>

                  {primaryLink && (
                    <a
                      href={primaryLink.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 font-mono text-xs text-muted-foreground transition-colors hover:text-foreground"
                    >
                      <span>{primaryLink.label}</span>
                      <ArrowUpRight className="size-3" />
                    </a>
                  )}
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </PageShell>
  );
}
