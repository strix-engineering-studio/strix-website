
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { PageShell } from "@/components/shared/page-shell";
import { buildMetadata } from "@/seo/metadata";
import { featuredProjects } from "../content/product.content";

export const metadata: Metadata = buildMetadata({
    title: "Products | Strix Engineering Studio",
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
            title="Products built around real business needs"
            description="Explore our products across business operations, education technology, AI, discovery, and e-commerce."
        >
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                {projects.map((project) => {
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
                            className="group flex min-w-0 flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] transition-colors hover:border-white/20"
                        >
                            {/* Product preview */}
                            <Link
                                href={`/products/${project.slug}`}
                                aria-label={`Explore ${project.title}`}
                                className="relative block aspect-[16/10] overflow-hidden border-b border-white/10 bg-neutral-950"
                            >
                                {project.coverImageUrl ? (
                                    <Image
                                        src={project.coverImageUrl}
                                        alt={`${project.title} product preview`}
                                        fill
                                        sizes="(max-width: 767px) 100vw, (max-width: 1279px) 50vw, 33vw"
                                        className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                                    />
                                ) : (
                                    <div className="flex h-full flex-col justify-between bg-gradient-to-br from-neutral-900 via-neutral-950 to-black p-5">
                                        <div className="flex items-start justify-between gap-3">
                                            <span className="text-xs uppercase tracking-[0.25em] text-white/50">
                                                {project.category}
                                            </span>

                                            <span className="rounded-full border border-white/15 px-2.5 py-1 text-[11px] text-white/70">
                                                {statusLabels[project.status] ??
                                                    project.status}
                                            </span>
                                        </div>

                                        <div>
                                            <p className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                                                {project.title}
                                            </p>
                                            <p className="mt-2 max-w-sm text-sm leading-6 text-white/60">
                                                {project.tagline}
                                            </p>
                                        </div>

                                        <div className="flex flex-wrap gap-2">
                                            {project.stack
                                                .slice(0, 3)
                                                .map((technology) => (
                                                    <span
                                                        key={technology}
                                                        className="rounded-md border border-white/10 bg-white/5 px-2 py-1 text-[10px] text-white/60"
                                                    >
                                                        {technology}
                                                    </span>
                                                ))}
                                        </div>
                                    </div>
                                )}
                            </Link>

                            {/* Product information */}
                            <div className="flex flex-1 flex-col p-5">
                                <div className="flex flex-wrap items-center justify-between gap-2">
                                    <p className="text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
                                        {project.category}
                                    </p>

                                    <span className="rounded-full border border-white/10 px-2.5 py-1 text-[11px] text-muted-foreground">
                                        {statusLabels[project.status] ??
                                            project.status}
                                    </span>
                                </div>

                                <h2 className="mt-3 text-xl font-semibold text-foreground">
                                    {project.title}
                                </h2>

                                <p className="mt-2 text-sm leading-7 text-muted-foreground">
                                    {project.summary}
                                </p>

                                {/* Technology tags */}
                                <div className="mt-4 flex flex-wrap gap-2">
                                    {project.stack.slice(0, 4).map((technology) => (
                                        <span
                                            key={technology}
                                            className="rounded-md bg-white/[0.06] px-2 py-1 text-xs text-muted-foreground"
                                        >
                                            {technology}
                                        </span>
                                    ))}
                                </div>

                                {/* Open-source information */}
                                {project.openSource.status !== "closed-source" && (
                                    <p className="mt-4 text-xs text-muted-foreground">
                                        {project.openSource.status === "open-source"
                                            ? "Open source"
                                            : project.openSource.status ===
                                                "partially-open-source"
                                              ? "Partially open source"
                                              : "Source available"}
                                        {project.openSource.license
                                            ? ` · ${project.openSource.license}`
                                            : ""}
                                    </p>
                                )}

                                {/* Actions */}
                                <div className="mt-auto flex flex-wrap items-center gap-x-4 gap-y-3 pt-6">
                                    <Link
                                        href={`/products/${project.slug}`}
                                        className="text-sm font-medium text-foreground underline underline-offset-4"
                                    >
                                        Explore product
                                    </Link>

                                    {primaryLink && (
                                        <a
                                            href={primaryLink.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
                                        >
                                            {primaryLink.label}
                                            <span aria-hidden="true">↗</span>
                                        </a>
                                    )}

                                    {repositoryLink && (
                                        <a
                                            href={repositoryLink.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                                        >
                                            GitHub ↗
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
