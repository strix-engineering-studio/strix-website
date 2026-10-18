
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { PageShell } from "@/components/shared/page-shell";
import { JsonLd } from "@/seo/json-ld";
import { buildMetadata } from "@/seo/metadata";
import { featuredProjects } from "../content/product.content";


const SITE_URL = "https://strix.website";

const statusLabels: Record<string, string> = {
    live: "Live",
    beta: "Beta",
    "in-development": "In development",
    prototype: "Prototype",
    archived: "Archived",
};

function getStatusLabel(status: string) {
    return statusLabels[status] ?? status;
}

function Section({
    title,
    children,
}: {
    title: string;
    children: React.ReactNode;
}) {
    return (
        <section className="rounded-xl border border-white/10 bg-white/[0.03] p-5 sm:p-6">
            <h2 className="text-xs font-medium uppercase tracking-[0.3em] text-muted-foreground">
                {title}
            </h2>
            <div className="mt-4">{children}</div>
        </section>
    );
}

function TagList({ items }: { items: string[] }) {
    if (!items.length) return null;

    return (
        <div className="flex flex-wrap gap-2">
            {items.map((item) => (
                <span
                    key={item}
                    className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs text-muted-foreground"
                >
                    {item}
                </span>
            ))}
        </div>
    );
}

export function generateStaticParams() {
    return featuredProjects.map((project) => ({
        slug: project.slug,
    }));
}

export async function generateMetadata({
    params,
}: {
    params: Promise<{ slug: string }>;
}): Promise<Metadata> {
    const { slug } = await params;

    const project = featuredProjects.find(
        (item) => item.slug === slug && item.visibility === "public",
    );

    if (!project) {
        return {};
    }

    return buildMetadata({
        title: `${project.title} | Strix Engineering Studio`,
        description: project.summary,
        path: `/products/${project.slug}`,
        keywords: [
            project.title,
            project.category,
            "Strix Engineering Studio",
            "product engineering",
            ...project.highlights,
        ],
    });
}

export default async function ProductDetailsPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;

    const project = featuredProjects.find(
        (item) => item.slug === slug && item.visibility === "public",
    );

    if (!project) {
        notFound();
    }

    const websiteLink = project.links.find(
        (link) =>
            link.type === "website" ||
            link.type === "app",
    );

    const demoLink = project.links.find(
        (link) => link.type === "demo",
    );

    const repositoryLink = project.links.find(
        (link) => link.type === "repository",
    );

    const documentationLink =
        project.links.find((link) => link.type === "documentation") ??
        (project.documentationUrl
            ? {
                  label: "Documentation",
                  url: project.documentationUrl,
                  type: "documentation" as const,
              }
            : undefined);

    const hasOpenSource =
        project.openSource.status !== "closed-source";

    const hasMetrics = project.metrics.length > 0;

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        name: project.title,
        description: project.summary,
        url: `${SITE_URL}/products/${project.slug}`,
        applicationCategory: project.category,
        creator: {
            "@type": "Organization",
            name: "Strix Engineering Studio",
            url: SITE_URL,
        },
        ...(websiteLink ? { sameAs: [websiteLink.url] } : {}),
    };

    return (
        <>
            {/* <JsonLd data={jsonLd} /> */}

            <PageShell
                eyebrow={project.category}
                title={project.title}
                description={project.tagline}
            >
                <div className="space-y-8">
                    {/* Product overview */}
                    <section className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
                        <div className="space-y-5">
                            <div className="flex flex-wrap items-center gap-2">
                                <span className="rounded-full border border-white/15 px-3 py-1 text-xs text-muted-foreground">
                                    {getStatusLabel(project.status)}
                                </span>

                                {project.openSource.status !==
                                    "closed-source" && (
                                    <span className="rounded-full border border-white/15 px-3 py-1 text-xs text-muted-foreground">
                                        {project.openSource.status ===
                                        "open-source"
                                            ? "Open source"
                                            : project.openSource.status ===
                                                "partially-open-source"
                                              ? "Partially open source"
                                              : "Source available"}
                                    </span>
                                )}

                                {project.openSource.license && (
                                    <span className="rounded-full border border-white/15 px-3 py-1 text-xs text-muted-foreground">
                                        {project.openSource.license}
                                    </span>
                                )}
                            </div>

                            <p className="text-base leading-8 text-muted-foreground">
                                {project.summary}
                            </p>

                            <div className="flex flex-wrap gap-3">
                                {websiteLink && (
                                    <a
                                        href={websiteLink.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 rounded-lg bg-foreground px-4 py-2.5 text-sm font-medium text-background transition-opacity hover:opacity-80"
                                    >
                                        {websiteLink.label || "Visit website"}
                                        <span aria-hidden="true">↗</span>
                                    </a>
                                )}

                                {demoLink && (
                                    <a
                                        href={demoLink.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 rounded-lg border border-white/15 px-4 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-white/5"
                                    >
                                        {demoLink.label || "View demo"}
                                        <span aria-hidden="true">↗</span>
                                    </a>
                                )}

                                {repositoryLink && (
                                    <a
                                        href={repositoryLink.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 rounded-lg border border-white/15 px-4 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-white/5"
                                    >
                                        {repositoryLink.label || "View source"}
                                        <span aria-hidden="true">↗</span>
                                    </a>
                                )}
                            </div>
                        </div>

                        {/* Product screenshot or fallback */}
                        <div className="relative aspect-[16/10] overflow-hidden rounded-xl border border-white/10 bg-neutral-950">
                            {project.coverImageUrl ? (
                                <Image
                                    src={project.coverImageUrl}
                                    alt={`${project.title} product preview`}
                                    fill
                                    priority
                                    sizes="(max-width: 1023px) 100vw, 40vw"
                                    className="object-cover"
                                />
                            ) : (
                                <div className="flex h-full flex-col justify-between bg-gradient-to-br from-neutral-900 via-neutral-950 to-black p-6">
                                    <span className="text-xs uppercase tracking-[0.3em] text-white/50">
                                        Strix Product
                                    </span>

                                    <div>
                                        <p className="text-3xl font-semibold tracking-tight text-white">
                                            {project.title}
                                        </p>
                                        <p className="mt-2 text-sm text-white/60">
                                            {project.tagline}
                                        </p>
                                    </div>

                                    <TagList
                                        items={project.stack.slice(0, 3)}
                                    />
                                </div>
                            )}
                        </div>
                    </section>

                    {/* Problem, solution, result */}
                    <div className="grid gap-4 md:grid-cols-3">
                        <Section title="The problem">
                            <p className="text-sm leading-7 text-muted-foreground">
                                {project.problem}
                            </p>
                        </Section>

                        <Section title="The solution">
                            <p className="text-sm leading-7 text-muted-foreground">
                                {project.solution}
                            </p>
                        </Section>

                        <Section title="The outcome">
                            <p className="text-sm leading-7 text-muted-foreground">
                                {project.result}
                            </p>
                        </Section>
                    </div>

                    {/* Capabilities */}
                    {project.capabilities.length > 0 && (
                        <Section title="Capabilities">
                            <div className="grid gap-4 sm:grid-cols-2">
                                {project.capabilities.map((capability) => (
                                    <div
                                        key={capability.name}
                                        className="rounded-lg border border-white/10 p-4"
                                    >
                                        <h3 className="text-sm font-medium text-foreground">
                                            {capability.name}
                                        </h3>

                                        {capability.description && (
                                            <p className="mt-2 text-sm leading-6 text-muted-foreground">
                                                {capability.description}
                                            </p>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </Section>
                    )}

                    {/* Audience and technologies */}
                    <div className="grid gap-4 lg:grid-cols-2">
                        {project.targetAudience &&
                            project.targetAudience.length > 0 && (
                                <Section title="Designed for">
                                    <TagList items={project.targetAudience} />
                                </Section>
                            )}

                        <Section title="Technology stack">
                            <TagList items={project.stack} />
                        </Section>
                    </div>

                    {/* Metrics */}
                    {hasMetrics && (
                        <Section title="Results and metrics">
                            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                                {project.metrics.map((metric) => (
                                    <div
                                        key={`${metric.label}-${metric.value}`}
                                        className="rounded-lg border border-white/10 p-4"
                                    >
                                        <p className="text-2xl font-semibold text-foreground">
                                            {metric.value}
                                        </p>

                                        <p className="mt-2 text-sm font-medium text-foreground">
                                            {metric.label}
                                        </p>

                                        {metric.description && (
                                            <p className="mt-1 text-sm leading-6 text-muted-foreground">
                                                {metric.description}
                                            </p>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </Section>
                    )}

                    {/* Architecture and deployment */}
                    <div className="grid gap-4 lg:grid-cols-2">
                        {project.architecture.length > 0 && (
                            <Section title="Architecture">
                                <TagList items={project.architecture} />
                            </Section>
                        )}

                        {project.deployment.length > 0 && (
                            <Section title="Deployment and operations">
                                <TagList items={project.deployment} />
                            </Section>
                        )}
                    </div>

                    {/* Additional highlights */}
                    {project.highlights.length > 0 && (
                        <Section title="Key highlights">
                            <TagList items={project.highlights} />
                        </Section>
                    )}

                    {/* Open-source information */}
                    {hasOpenSource && (
                        <Section title="Open source">
                            <div className="space-y-4">
                                <p className="text-sm leading-7 text-muted-foreground">
                                    {project.openSource.status ===
                                    "open-source"
                                        ? "This project is identified as open source."
                                        : project.openSource.status ===
                                            "partially-open-source"
                                          ? "Selected components of this project are open source."
                                          : "Source code is available under specified access or licensing conditions."}
                                </p>

                                {project.openSource.openComponents &&
                                    project.openSource.openComponents.length >
                                        0 && (
                                        <div>
                                            <h3 className="mb-2 text-sm font-medium">
                                                Open components
                                            </h3>
                                            <TagList
                                                items={
                                                    project.openSource
                                                        .openComponents
                                                }
                                            />
                                        </div>
                                    )}

                                {project.openSource.proprietaryComponents &&
                                    project.openSource.proprietaryComponents
                                        .length > 0 && (
                                        <div>
                                            <h3 className="mb-2 text-sm font-medium">
                                                Proprietary components
                                            </h3>
                                            <TagList
                                                items={
                                                    project.openSource
                                                        .proprietaryComponents
                                                }
                                            />
                                        </div>
                                    )}

                                {project.openSource.contributingUrl && (
                                    <a
                                        href={project.openSource.contributingUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex text-sm underline underline-offset-4"
                                    >
                                        Contribution guidelines ↗
                                    </a>
                                )}

                                {project.openSource.repositoryUrl &&
                                    !repositoryLink && (
                                        <a
                                            href={
                                                project.openSource.repositoryUrl
                                            }
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex text-sm underline underline-offset-4"
                                        >
                                            View source repository ↗
                                        </a>
                                    )}
                            </div>
                        </Section>
                    )}

                    {/* Other external links */}
                    {project.links.filter(
                        (link) =>
                            link.type !== "website" &&
                            link.type !== "app" &&
                            link.type !== "demo" &&
                            link.type !== "repository" &&
                            link.type !== "documentation",
                    ).length > 0 && (
                        <Section title="More resources">
                            <div className="flex flex-wrap gap-4">
                                {project.links
                                    .filter(
                                        (link) =>
                                            link.type !== "website" &&
                                            link.type !== "app" &&
                                            link.type !== "demo" &&
                                            link.type !== "repository" &&
                                            link.type !== "documentation",
                                    )
                                    .map((link) => (
                                        <a
                                            key={`${link.type}-${link.url}`}
                                            href={link.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-sm text-muted-foreground underline underline-offset-4 hover:text-foreground"
                                        >
                                            {link.label} ↗
                                        </a>
                                    ))}
                            </div>
                        </Section>
                    )}

                    {documentationLink && (
                        <p>
                            <a
                                href={documentationLink.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-sm text-muted-foreground underline underline-offset-4 hover:text-foreground"
                            >
                                {documentationLink.label} ↗
                            </a>
                        </p>
                    )}

                    {/* Product metadata */}
                    {(project.timeline ||
                        project.launchedAt ||
                        project.lastUpdated ||
                        project.pricingModel) && (
                        <div className="flex flex-wrap gap-x-6 gap-y-3 border-t border-white/10 pt-5 text-xs text-muted-foreground">
                            {project.timeline && (
                                <span>
                                    Development: {project.timeline}
                                </span>
                            )}

                            {project.launchedAt && (
                                <span>
                                    Launched: {project.launchedAt}
                                </span>
                            )}

                            {project.lastUpdated && (
                                <span>
                                    Updated: {project.lastUpdated}
                                </span>
                            )}

                            {project.pricingModel && (
                                <span>
                                    Pricing:{" "}
                                    {project.pricingModel.replaceAll("-", " ")}
                                </span>
                            )}
                        </div>
                    )}

                    <div className="border-t border-white/10 pt-6">
                        <Link
                            href="/products"
                            className="text-sm text-muted-foreground underline underline-offset-4 hover:text-foreground"
                        >
                            ← Back to all products
                        </Link>
                    </div>
                </div>
            </PageShell>
        </>
    );
}
