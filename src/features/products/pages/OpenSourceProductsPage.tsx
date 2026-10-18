
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { PageShell } from "@/components/shared/page-shell";
import { buildMetadata } from "@/seo/metadata";
import { featuredProjects } from "../content/product.content";


export const metadata: Metadata = buildMetadata({
    title: "Open Source | Strix Engineering Studio",
    description:
        "Explore open-source projects and publicly available components from Strix Engineering Studio. Browse source repositories, technologies, and project documentation.",
    path: "/open-source",
    keywords: [
        "Strix open source",
        "open-source projects",
        "GitHub repositories",
        "developer tools",
        "software engineering",
    ],
});

export default function OpenSourcePage() {
    const projects = featuredProjects
        .filter(
            (project) =>
                project.visibility === "public" &&
                (
                    project.openSource.status === "open-source" ||
                    project.openSource.status ===
                        "partially-open-source"
                ),
        )
        .sort(
            (a, b) =>
                (a.featuredOrder ?? Number.MAX_SAFE_INTEGER) -
                (b.featuredOrder ?? Number.MAX_SAFE_INTEGER),
        );

    return (
        <PageShell
            eyebrow="Open Source"
            title="Software built in the open"
            description="Explore open-source projects and publicly available components from Strix Engineering Studio. Inspect the code, explore the implementation, and contribute where contributions are welcome."
        >
            {projects.length > 0 ? (
                <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                    {projects.map((project) => {
                        const repositoryLink =
                            project.links.find(
                                (link) => link.type === "repository",
                            ) ??
                            (project.openSource.repositoryUrl
                                ? {
                                      label: "View source",
                                      url: project.openSource.repositoryUrl,
                                  }
                                : undefined);

                        const documentationLink =
                            project.links.find(
                                (link) =>
                                    link.type === "documentation",
                            ) ??
                            (project.documentationUrl
                                ? {
                                      label: "Documentation",
                                      url: project.documentationUrl,
                                  }
                                : undefined);

                        const isFullyOpenSource =
                            project.openSource.status === "open-source";

                        return (
                            <article
                                key={project.slug}
                                className="group flex min-w-0 flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] transition-colors hover:border-white/20"
                            >
                                {/* Project preview */}
                                <Link
                                    href={`/products/${project.slug}`}
                                    aria-label={`Explore ${project.title}`}
                                    className="relative block aspect-[16/10] overflow-hidden border-b border-white/10 bg-neutral-950"
                                >
                                    {project.coverImageUrl ? (
                                        <Image
                                            src={project.coverImageUrl}
                                            alt={`${project.title} project preview`}
                                            fill
                                            sizes="(max-width: 767px) 100vw, (max-width: 1279px) 50vw, 33vw"
                                            className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                                        />
                                    ) : (
                                        <div className="flex h-full flex-col justify-between bg-gradient-to-br from-neutral-900 via-neutral-950 to-black p-5">
                                            <div className="flex items-center justify-between gap-3">
                                                <span className="text-xs uppercase tracking-[0.25em] text-white/50">
                                                    {project.category}
                                                </span>

                                                <span className="rounded-full border border-white/15 px-2.5 py-1 text-[10px] text-white/70">
                                                    {isFullyOpenSource
                                                        ? "Open source"
                                                        : "Partial source"}
                                                </span>
                                            </div>

                                            <div>
                                                <h2 className="text-2xl font-semibold tracking-tight text-white">
                                                    {project.title}
                                                </h2>
                                                <p className="mt-2 text-sm leading-6 text-white/60">
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

                                {/* Project details */}
                                <div className="flex flex-1 flex-col p-5">
                                    <div className="flex flex-wrap items-center justify-between gap-2">
                                        <p className="text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
                                            {project.category}
                                        </p>

                                        <span className="rounded-full border border-white/10 px-2.5 py-1 text-[10px] text-muted-foreground">
                                            {isFullyOpenSource
                                                ? "Open source"
                                                : "Partially open source"}
                                        </span>
                                    </div>

                                    <h2 className="mt-3 text-xl font-semibold text-foreground">
                                        {project.title}
                                    </h2>

                                    <p className="mt-2 text-sm leading-7 text-muted-foreground">
                                        {project.summary}
                                    </p>

                                    {/* License */}
                                    {project.openSource.license && (
                                        <p className="mt-3 text-xs text-muted-foreground">
                                            License:{" "}
                                            {project.openSource.license}
                                        </p>
                                    )}

                                    {/* Technology tags */}
                                    <div className="mt-4 flex flex-wrap gap-2">
                                        {project.stack
                                            .slice(0, 4)
                                            .map((technology) => (
                                                <span
                                                    key={technology}
                                                    className="rounded-md bg-white/[0.06] px-2 py-1 text-xs text-muted-foreground"
                                                >
                                                    {technology}
                                                </span>
                                            ))}
                                    </div>

                                    {/* Open-source components */}
                                    {project.openSource.openComponents &&
                                        project.openSource.openComponents
                                            .length > 0 && (
                                            <div className="mt-4">
                                                <p className="mb-2 text-xs text-muted-foreground">
                                                    Open components
                                                </p>

                                                <div className="flex flex-wrap gap-2">
                                                    {project.openSource.openComponents.map(
                                                        (component) => (
                                                            <span
                                                                key={component}
                                                                className="rounded-md border border-white/10 px-2 py-1 text-xs text-muted-foreground"
                                                            >
                                                                {component}
                                                            </span>
                                                        ),
                                                    )}
                                                </div>
                                            </div>
                                        )}

                                    {/* Actions */}
                                    <div className="mt-auto flex flex-wrap items-center gap-x-4 gap-y-3 pt-6">
                                        {repositoryLink && (
                                            <a
                                                href={repositoryLink.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-sm font-medium text-foreground underline underline-offset-4"
                                            >
                                                {repositoryLink.label || "View source"} ↗
                                            </a>
                                        )}

                                        {documentationLink && (
                                            <a
                                                href={documentationLink.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-sm text-muted-foreground underline underline-offset-4 hover:text-foreground"
                                            >
                                                Documentation ↗
                                            </a>
                                        )}

                                        <Link
                                            href={`/products/${project.slug}`}
                                            className="text-sm text-muted-foreground underline underline-offset-4 hover:text-foreground"
                                        >
                                            Project details
                                        </Link>
                                    </div>
                                </div>
                            </article>
                        );
                    })}
                </div>
            ) : (
                <div className="rounded-2xl border border-white/10 bg-white/[0.03] px-6 py-14 text-center">
                    <h2 className="text-xl font-semibold text-foreground">
                        No public open-source projects yet
                    </h2>

                    <p className="mx-auto mt-3 max-w-lg text-sm leading-7 text-muted-foreground">
                        Strix Engineering Studio will list projects here
                        when their source code is publicly available under
                        an appropriate open-source license.
                    </p>

                    <Link
                        href="/products"
                        className="mt-6 inline-flex text-sm font-medium text-foreground underline underline-offset-4"
                    >
                        Explore all products
                    </Link>
                </div>
            )}
        </PageShell>
    );
}
