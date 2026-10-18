
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, BriefcaseBusiness, Code2 } from "lucide-react";
import { caseStudies } from "../content/case-studies.content";



export const metadata: Metadata = {
  title: "Case Studies | Strix Engineering Studio",
  description:
    "Explore software engineering case studies from Strix Engineering Studio, covering product development, mobile applications, web platforms, integrations, and system architecture.",
  alternates: {
    canonical: "/case-studies",
  },
  openGraph: {
    title: "Case Studies | Strix Engineering Studio",
    description:
      "Explore published engineering work, implementation decisions, and product outcomes from Strix Engineering Studio.",
    type: "website",
    url: "/case-studies",
  },
};

const publishedCaseStudies = caseStudies
  .filter(
    (study) =>
      study.status === "published" &&
      (study.visibility === "public" ||
        study.visibility === "anonymized"),
  )
  .sort((a, b) => {
    if (a.featured !== b.featured) {
      return a.featured ? -1 : 1;
    }

    return (
      (a.featuredOrder ?? Number.MAX_SAFE_INTEGER) -
      (b.featuredOrder ?? Number.MAX_SAFE_INTEGER)
    );
  });

function formatCaseStudyType(type: string): string {
  return type
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

export default function CaseStudiesPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Case Studies | Strix Engineering Studio",
    description:
      "Published software engineering case studies from Strix Engineering Studio.",
    url: "/case-studies",
    mainEntity: {
      "@type": "ItemList",
      itemListElement: publishedCaseStudies.map((study, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: study.title,
        url: `/case-studies/${study.slug}`,
        description: study.summary,
      })),
    },
  };

  return (
    <main className="min-h-screen bg-background text-foreground">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
        }}
      />

      {/* Hero */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28 lg:px-12 lg:py-32">
          <div className="max-w-4xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border px-3 py-1.5 text-sm text-muted-foreground">
              <BriefcaseBusiness className="h-4 w-4" aria-hidden="true" />
              Engineering work
            </div>

            <h1 className="max-w-4xl text-4xl font-semibold tracking-tight sm:text-5xl lg:text-7xl">
              Case studies built around real engineering problems.
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
              A closer look at the problems, technical decisions, system
              architectures, and implementation work behind the products and
              software systems we build.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <Link
                href="/project-inquiry"
                className="inline-flex min-h-11 items-center justify-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
              >
                Discuss a project
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>

              <Link
                href="/products"
                className="inline-flex min-h-11 items-center justify-center gap-2 rounded-md border border-border px-5 py-3 text-sm font-medium transition-colors hover:bg-muted"
              >
                Explore products
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Case study listing */}
      <section
        aria-labelledby="case-studies-heading"
        className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24"
      >
        <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.16em] text-muted-foreground">
              Selected work
            </p>

            <h2
              id="case-studies-heading"
              className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl"
            >
              Engineering case studies
            </h2>

            <p className="mt-3 max-w-2xl text-sm leading-6 text-muted-foreground sm:text-base">
              Detailed accounts of project context, implementation, architecture,
              and outcomes.
            </p>
          </div>

          <p className="text-sm text-muted-foreground">
            {publishedCaseStudies.length}{" "}
            {publishedCaseStudies.length === 1
              ? "published case study"
              : "published case studies"}
          </p>
        </div>

        {publishedCaseStudies.length > 0 ? (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8">
            {publishedCaseStudies.map((study, index) => (
              <article
                key={study.slug}
                className="group flex h-full flex-col overflow-hidden rounded-xl border border-border bg-card transition-colors hover:border-foreground/30"
              >
                {/* Cover image */}
                <Link
                  href={`/case-studies/${study.slug}`}
                  aria-label={`Read case study: ${study.title}`}
                  className="block"
                >
                  <div className="relative aspect-[16/9] overflow-hidden border-b border-border bg-muted">
                    {study.coverImageUrl ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={study.coverImageUrl}
                        alt={`${study.title} cover`}
                        loading={index < 2 ? "eager" : "lazy"}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                      />
                    ) : (
                      <div className="flex h-full flex-col justify-between p-6 sm:p-8">
                        <div className="flex h-11 w-11 items-center justify-center rounded-lg border border-border bg-background">
                          <Code2
                            className="h-5 w-5 text-muted-foreground"
                            aria-hidden="true"
                          />
                        </div>

                        <div>
                          <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
                            Strix Engineering Studio
                          </p>
                          <p className="mt-2 line-clamp-2 text-xl font-semibold tracking-tight sm:text-2xl">
                            {study.title}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                </Link>

                <div className="flex flex-1 flex-col p-5 sm:p-7">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="rounded-full border border-border px-2.5 py-1 text-xs text-muted-foreground">
                      {study.category}
                    </span>

                    <span className="rounded-full bg-muted px-2.5 py-1 text-xs text-muted-foreground">
                      {formatCaseStudyType(study.type)}
                    </span>
                  </div>

                  <h3 className="mt-5 text-xl font-semibold tracking-tight sm:text-2xl">
                    <Link
                      href={`/case-studies/${study.slug}`}
                      className="transition-colors hover:text-muted-foreground"
                    >
                      {study.title}
                    </Link>
                  </h3>

                  {study.subtitle && (
                    <p className="mt-2 text-sm font-medium text-muted-foreground">
                      {study.subtitle}
                    </p>
                  )}

                  <p className="mt-3 line-clamp-3 text-sm leading-6 text-muted-foreground sm:text-base sm:leading-7">
                    {study.summary}
                  </p>

                  {study.technologies.length > 0 && (
                    <div className="mt-5 flex flex-wrap gap-2">
                      {study.technologies.slice(0, 5).map((technology) => (
                        <span
                          key={technology.name}
                          className="rounded-md border border-border px-2.5 py-1 text-xs text-muted-foreground"
                        >
                          {technology.name}
                        </span>
                      ))}

                      {study.technologies.length > 5 && (
                        <span className="px-1 py-1 text-xs text-muted-foreground">
                          +{study.technologies.length - 5} more
                        </span>
                      )}
                    </div>
                  )}

                  <div className="mt-auto flex items-center justify-between gap-4 border-t border-border pt-5 mt-7">
                    <div className="min-w-0">
                      {study.client?.confidential ? (
                        <p className="truncate text-sm text-muted-foreground">
                          Anonymized client
                        </p>
                      ) : study.client?.name ? (
                        <p className="truncate text-sm text-muted-foreground">
                          {study.client.name}
                        </p>
                      ) : (
                        <p className="text-sm text-muted-foreground">
                          Strix project
                        </p>
                      )}

                      {study.duration && (
                        <p className="mt-1 text-xs text-muted-foreground">
                          {study.duration}
                        </p>
                      )}
                    </div>

                    <Link
                      href={`/case-studies/${study.slug}`}
                      className="inline-flex shrink-0 items-center gap-2 text-sm font-medium"
                    >
                      Read case study
                      <ArrowRight
                        className="h-4 w-4 transition-transform group-hover:translate-x-1"
                        aria-hidden="true"
                      />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="rounded-xl border border-dashed border-border px-6 py-16 text-center sm:px-12 sm:py-20">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl border border-border bg-muted">
              <BriefcaseBusiness
                className="h-5 w-5 text-muted-foreground"
                aria-hidden="true"
              />
            </div>

            <h3 className="mt-5 text-xl font-semibold tracking-tight">
              Case studies are being prepared
            </h3>

            <p className="mx-auto mt-3 max-w-lg text-sm leading-6 text-muted-foreground sm:text-base">
              We are documenting the engineering decisions, implementation
              details, and outcomes behind our work. Published case studies will
              appear here.
            </p>

            <Link
              href="/project-inquiry"
              className="mt-7 inline-flex items-center gap-2 text-sm font-medium underline underline-offset-4"
            >
              Discuss your project
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        )}
      </section>

      {/* Bottom CTA */}
      <section className="border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-5 py-16 sm:px-8 sm:py-20 lg:flex-row lg:items-center lg:justify-between lg:px-12">
          <div className="max-w-2xl">
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              Have a system to build or improve?
            </h2>

            <p className="mt-3 text-sm leading-6 text-muted-foreground sm:text-base">
              Tell us about the product, technical challenge, or workflow you
              need to solve.
            </p>
          </div>

          <Link
            href="/project-inquiry"
            className="inline-flex min-h-11 shrink-0 items-center justify-center gap-2 self-start rounded-md bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90 lg:self-center"
          >
            Start a conversation
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </section>
    </main>
  );
}
