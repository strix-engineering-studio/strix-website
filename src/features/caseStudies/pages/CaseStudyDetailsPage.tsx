
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Code2,
  ExternalLink,
  Layers3,
} from "lucide-react";
import { caseStudies } from "../content/case-studies.content";


type PageProps = {
  params: Promise<{ slug: string }>;
};

function getPublishedCaseStudy(slug: string) {
  return caseStudies.find(
    (study) =>
      study.slug === slug &&
      study.status === "published" &&
      (study.visibility === "public" ||
        study.visibility === "anonymized"),
  );
}

function formatLabel(value: string) {
  return value
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}

export function generateStaticParams() {
  return caseStudies
    .filter(
      (study) =>
        study.status === "published" &&
        (study.visibility === "public" ||
          study.visibility === "anonymized"),
    )
    .map((study) => ({ slug: study.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const study = getPublishedCaseStudy(slug);

  if (!study) {
    return {
      title: "Case Study Not Found | Strix Engineering Studio",
      robots: { index: false, follow: false },
    };
  }

  const title =
    study.seoTitle ?? `${study.title} | Strix Engineering Studio`;

  const description =
    study.seoDescription ?? study.summary;

  const canonical = `/case-studies/${study.slug}`;

  return {
    title,
    description,
    alternates: {
      canonical,
    },
    openGraph: {
      title,
      description,
      url: canonical,
      type: "article",
      ...(study.coverImageUrl
        ? { images: [{ url: study.coverImageUrl, alt: study.title }] }
        : {}),
    },
    twitter: {
      card: study.coverImageUrl ? "summary_large_image" : "summary",
      title,
      description,
      ...(study.coverImageUrl
        ? { images: [study.coverImageUrl] }
        : {}),
    },
  };
}

export default async function CaseStudyDetailPage({
  params,
}: PageProps) {
  const { slug } = await params;
  const study = getPublishedCaseStudy(slug);

  if (!study) {
    notFound();
  }

  const relatedStudies = (study.relatedCaseStudies ?? [])
    .map((relatedSlug) => getPublishedCaseStudy(relatedSlug))
    .filter((related): related is NonNullable<typeof related> => Boolean(related));

  const sections = study.implementation ?? [];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: study.title,
    description: study.summary,
    datePublished: study.publishedAt,
    dateModified: study.updatedAt ?? study.publishedAt,
    author: {
      "@type": "Organization",
      name: "Strix Engineering Studio",
    },
    publisher: {
      "@type": "Organization",
      name: "Strix Engineering Studio",
    },
    mainEntityOfPage: `/case-studies/${study.slug}`,
    ...(study.coverImageUrl ? { image: study.coverImageUrl } : {}),
    keywords: study.tags.join(", "),
  };

  return (
    <main className="min-h-screen bg-background text-foreground">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />

      {/* Breadcrumb */}
      <div className="border-b border-border">
        <nav
          aria-label="Breadcrumb"
          className="mx-auto flex max-w-7xl items-center gap-2 px-5 py-4 text-sm text-muted-foreground sm:px-8 lg:px-12"
        >
          <Link
            href="/case-studies"
            className="inline-flex items-center gap-2 transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            Case studies
          </Link>
          <span aria-hidden="true">/</span>
          <span className="truncate text-foreground">{study.title}</span>
        </nav>
      </div>

      {/* Hero */}
      <header className="border-b border-border">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-28">
          <div className="max-w-4xl">
            <div className="flex flex-wrap items-center gap-2">
              <span className="rounded-full border border-border px-3 py-1 text-xs font-medium text-muted-foreground">
                {formatLabel(study.type)}
              </span>
              <span className="rounded-full bg-muted px-3 py-1 text-xs text-muted-foreground">
                {study.category}
              </span>
              {study.featured && (
                <span className="rounded-full bg-muted px-3 py-1 text-xs text-foreground">
                  Featured work
                </span>
              )}
            </div>

            <p className="mt-7 text-sm font-medium uppercase tracking-[0.18em] text-muted-foreground">
              Strix Engineering Studio · Case study
            </p>

            <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl lg:text-7xl">
              {study.title}
            </h1>

            {study.subtitle && (
              <p className="mt-5 text-xl leading-8 text-muted-foreground sm:text-2xl">
                {study.subtitle}
              </p>
            )}

            <p className="mt-6 max-w-3xl text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
              {study.summary}
            </p>

            <div className="mt-8 flex flex-wrap gap-x-8 gap-y-5 border-t border-border pt-6">
              {study.client?.name && !study.client.confidential && (
                <div>
                  <p className="text-xs uppercase tracking-wider text-muted-foreground">
                    Client
                  </p>
                  <p className="mt-2 text-sm font-medium">
                    {study.client.name}
                  </p>
                </div>
              )}

              {study.client?.confidential && (
                <div>
                  <p className="text-xs uppercase tracking-wider text-muted-foreground">
                    Client
                  </p>
                  <p className="mt-2 text-sm font-medium">
                    Anonymized
                  </p>
                </div>
              )}

              {study.client?.industry && (
                <div>
                  <p className="text-xs uppercase tracking-wider text-muted-foreground">
                    Industry
                  </p>
                  <p className="mt-2 text-sm font-medium">
                    {study.client.industry}
                  </p>
                </div>
              )}

              {study.role && (
                <div>
                  <p className="text-xs uppercase tracking-wider text-muted-foreground">
                    Engagement
                  </p>
                  <p className="mt-2 text-sm font-medium">{study.role}</p>
                </div>
              )}

              {study.duration && (
                <div>
                  <p className="text-xs uppercase tracking-wider text-muted-foreground">
                    Duration
                  </p>
                  <p className="mt-2 text-sm font-medium">
                    {study.duration}
                  </p>
                </div>
              )}

              {typeof study.teamSize === "number" && (
                <div>
                  <p className="text-xs uppercase tracking-wider text-muted-foreground">
                    Team size
                  </p>
                  <p className="mt-2 text-sm font-medium">
                    {study.teamSize}{" "}
                    {study.teamSize === 1 ? "person" : "people"}
                  </p>
                </div>
              )}
            </div>

            {study.links.length > 0 && (
              <div className="mt-8 flex flex-wrap gap-3">
                {study.links
                  .filter((link) => link.featured)
                  .slice(0, 3)
                  .map((link) => (
                    <a
                      key={`${link.type}-${link.url}`}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex min-h-11 items-center gap-2 rounded-md border border-border px-4 py-2.5 text-sm font-medium transition-colors hover:bg-muted"
                    >
                      {link.label}
                      <ExternalLink
                        className="h-4 w-4"
                        aria-hidden="true"
                      />
                    </a>
                  ))}
              </div>
            )}
          </div>
        </div>
      </header>

      {/* Cover image */}
      {study.coverImageUrl && (
        <section className="border-b border-border">
          <div className="mx-auto max-w-7xl px-5 py-8 sm:px-8 lg:px-12">
            <div className="overflow-hidden rounded-xl border border-border bg-muted">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={study.coverImageUrl}
                alt={`${study.title} project overview`}
                className="max-h-[640px] w-full object-cover"
                fetchPriority="high"
              />
            </div>
          </div>
        </section>
      )}

      {/* Main content and sidebar */}
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-5 py-16 sm:px-8 lg:grid-cols-[minmax(0,1fr)_300px] lg:gap-16 lg:px-12 lg:py-24">
        <article className="min-w-0 space-y-14">
          {/* Problem */}
          <section id="problem" className="scroll-mt-24">
            <SectionHeading number="01" title="The problem" />
            <p className="mt-5 whitespace-pre-line text-base leading-8 text-muted-foreground">
              {study.problem}
            </p>

            {study.constraints && study.constraints.length > 0 && (
              <div className="mt-6 rounded-xl border border-border p-5 sm:p-6">
                <h3 className="font-semibold">Constraints and considerations</h3>
                <ul className="mt-4 space-y-3">
                  {study.constraints.map((constraint) => (
                    <li
                      key={constraint}
                      className="flex items-start gap-3 text-sm leading-6 text-muted-foreground"
                    >
                      <CheckCircle2
                        className="mt-1 h-4 w-4 shrink-0"
                        aria-hidden="true"
                      />
                      {constraint}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {study.objectives && study.objectives.length > 0 && (
              <div className="mt-6">
                <h3 className="font-semibold">Objectives</h3>
                <ul className="mt-4 space-y-3">
                  {study.objectives.map((objective) => (
                    <li
                      key={objective}
                      className="flex items-start gap-3 text-sm leading-6 text-muted-foreground"
                    >
                      <ArrowRight
                        className="mt-1 h-4 w-4 shrink-0"
                        aria-hidden="true"
                      />
                      {objective}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </section>

          {/* Approach */}
          <section id="approach" className="scroll-mt-24">
            <SectionHeading number="02" title="The approach" />
            <p className="mt-5 whitespace-pre-line text-base leading-8 text-muted-foreground">
              {study.approach}
            </p>
          </section>

          {/* Solution */}
          <section id="solution" className="scroll-mt-24">
            <SectionHeading number="03" title="The solution" />
            <p className="mt-5 whitespace-pre-line text-base leading-8 text-muted-foreground">
              {study.solution}
            </p>
          </section>

          {/* Implementation */}
          {sections.length > 0 && (
            <section id="implementation" className="scroll-mt-24">
              <SectionHeading number="04" title="Implementation" />
              <div className="mt-7 space-y-8">
                {sections.map((section, index) => (
                  <div
                    key={`${section.heading}-${index}`}
                    className="border-l-2 border-border pl-5 sm:pl-6"
                  >
                    <h3 className="text-lg font-semibold">
                      {section.heading}
                    </h3>
                    <p className="mt-3 whitespace-pre-line text-sm leading-7 text-muted-foreground sm:text-base">
                      {section.body}
                    </p>

                    {section.points && section.points.length > 0 && (
                      <ul className="mt-4 space-y-2">
                        {section.points.map((point) => (
                          <li
                            key={point}
                            className="flex items-start gap-3 text-sm leading-6 text-muted-foreground"
                          >
                            <CheckCircle2
                              className="mt-1 h-4 w-4 shrink-0"
                              aria-hidden="true"
                            />
                            {point}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Architecture */}
          {study.architecture.length > 0 && (
            <section id="architecture" className="scroll-mt-24">
              <SectionHeading number="05" title="System architecture" />
              <p className="mt-4 text-sm leading-7 text-muted-foreground">
                The main architectural components and responsibilities
                involved in this implementation.
              </p>

              <div className="mt-6 space-y-3">
                {study.architecture.map((component, index) => (
                  <div
                    key={component}
                    className="flex items-start gap-4 rounded-lg border border-border p-4"
                  >
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-muted text-sm font-medium">
                      {String(index + 1).padStart(2, "0")}
                    </div>
                    <p className="pt-1 text-sm leading-6">{component}</p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Challenges */}
          {study.challenges && study.challenges.length > 0 && (
            <section id="challenges" className="scroll-mt-24">
              <SectionHeading number="06" title="Engineering challenges" />
              <div className="mt-6 space-y-6">
                {study.challenges.map((challenge, index) => (
                  <div
                    key={`${challenge.heading}-${index}`}
                    className="rounded-xl border border-border p-5 sm:p-6"
                  >
                    <h3 className="font-semibold">{challenge.heading}</h3>
                    <p className="mt-3 text-sm leading-7 text-muted-foreground">
                      {challenge.body}
                    </p>
                    {challenge.points && challenge.points.length > 0 && (
                      <ul className="mt-4 space-y-2">
                        {challenge.points.map((point) => (
                          <li
                            key={point}
                            className="flex items-start gap-3 text-sm leading-6 text-muted-foreground"
                          >
                            <ArrowRight
                              className="mt-1 h-4 w-4 shrink-0"
                              aria-hidden="true"
                            />
                            {point}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Outcomes */}
          <section id="outcomes" className="scroll-mt-24">
            <SectionHeading number="07" title="Outcomes" />
            <p className="mt-5 whitespace-pre-line text-base leading-8 text-muted-foreground">
              {study.outcomes}
            </p>

            {study.metrics.length > 0 && (
              <div className="mt-7 grid grid-cols-1 gap-4 sm:grid-cols-2">
                {study.metrics.map((metric) => (
                  <div
                    key={`${metric.label}-${metric.value}`}
                    className="rounded-xl border border-border p-5"
                  >
                    <p className="text-sm text-muted-foreground">
                      {metric.label}
                    </p>
                    <p className="mt-2 text-3xl font-semibold tracking-tight">
                      {metric.value}
                    </p>
                    {metric.baseline && (
                      <p className="mt-2 text-xs text-muted-foreground">
                        Baseline: {metric.baseline}
                      </p>
                    )}
                    {metric.description && (
                      <p className="mt-3 text-sm leading-6 text-muted-foreground">
                        {metric.description}
                      </p>
                    )}
                    {metric.verified && (
                      <p className="mt-3 text-xs text-muted-foreground">
                        Verified metric
                      </p>
                    )}
                    {metric.evidenceUrl && (
                      <a
                        href={metric.evidenceUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-3 inline-flex items-center gap-1 text-xs underline underline-offset-4"
                      >
                        View evidence
                        <ExternalLink
                          className="h-3 w-3"
                          aria-hidden="true"
                        />
                      </a>
                    )}
                  </div>
                ))}
              </div>
            )}
          </section>

          {/* Gallery */}
          {study.images && study.images.length > 0 && (
            <section id="gallery" className="scroll-mt-24">
              <SectionHeading number="08" title="Project visuals" />
              <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2">
                {study.images.map((image, index) => (
                  <figure
                    key={`${image.src}-${index}`}
                    className={`overflow-hidden rounded-xl border border-border ${
                      image.type === "cover" ? "sm:col-span-2" : ""
                    }`}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={image.src}
                      alt={image.alt}
                      loading="lazy"
                      className="w-full object-cover"
                    />
                    {image.caption && (
                      <figcaption className="border-t border-border px-4 py-3 text-sm text-muted-foreground">
                        {image.caption}
                      </figcaption>
                    )}
                  </figure>
                ))}
              </div>
            </section>
          )}

          {/* Deployment */}
          {study.capabilities && study.capabilities.length > 0 && (
            <section id="capabilities" className="scroll-mt-24">
              <SectionHeading number="09" title="Capabilities delivered" />
              <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {study.capabilities.map((capability) => (
                  <div
                    key={capability}
                    className="flex items-start gap-3 rounded-lg border border-border p-4"
                  >
                    <CheckCircle2
                      className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground"
                      aria-hidden="true"
                    />
                    <p className="text-sm leading-6">{capability}</p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Related case studies */}
          {relatedStudies.length > 0 && (
            <section id="related" className="border-t border-border pt-10">
              <h2 className="text-2xl font-semibold tracking-tight">
                Related case studies
              </h2>
              <div className="mt-6 space-y-3">
                {relatedStudies.map((related) => (
                  <Link
                    key={related.slug}
                    href={`/case-studies/${related.slug}`}
                    className="group flex items-center justify-between gap-4 rounded-xl border border-border p-5 transition-colors hover:bg-muted"
                  >
                    <div>
                      <p className="text-xs text-muted-foreground">
                        {related.category}
                      </p>
                      <h3 className="mt-2 font-semibold">{related.title}</h3>
                      <p className="mt-2 line-clamp-2 text-sm leading-6 text-muted-foreground">
                        {related.summary}
                      </p>
                    </div>
                    <ArrowUpRight
                      className="h-5 w-5 shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      aria-hidden="true"
                    />
                  </Link>
                ))}
              </div>
            </section>
          )}
        </article>

        {/* Sidebar */}
        <aside className="space-y-6 lg:sticky lg:top-8 lg:self-start">
          <div className="rounded-xl border border-border p-5 sm:p-6">
            <div className="flex items-center gap-2">
              <Layers3
                className="h-4 w-4 text-muted-foreground"
                aria-hidden="true"
              />
              <h2 className="font-semibold">On this page</h2>
            </div>

            <nav aria-label="On this page" className="mt-5">
              <ul className="space-y-3 text-sm">
                {[
                  ["problem", "The problem"],
                  ["approach", "The approach"],
                  ["solution", "The solution"],
                  ...(sections.length ? [["implementation", "Implementation"]] : []),
                  ...(study.architecture.length
                    ? [["architecture", "System architecture"]]
                    : []),
                  ...(study.challenges?.length
                    ? [["challenges", "Engineering challenges"]]
                    : []),
                  ["outcomes", "Outcomes"],
                  ...(study.images?.length ? [["gallery", "Project visuals"]] : []),
                  ...(study.capabilities?.length
                    ? [["capabilities", "Capabilities delivered"]]
                    : []),
                ].map(([id, label]) => (
                  <li key={id}>
                    <a
                      href={`#${id}`}
                      className="text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div className="rounded-xl border border-border p-5 sm:p-6">
            <h2 className="font-semibold">Technology stack</h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {study.technologies.map((technology) => (
                <span
                  key={`${technology.name}-${technology.category ?? "other"}`}
                  className="rounded-md bg-muted px-2.5 py-1.5 text-xs"
                >
                  {technology.name}
                </span>
              ))}
            </div>
          </div>

          {study.tags.length > 0 && (
            <div className="rounded-xl border border-border p-5 sm:p-6">
              <h2 className="font-semibold">Topics</h2>
              <div className="mt-4 flex flex-wrap gap-2">
                {study.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )}

          <div className="rounded-xl border border-border bg-card p-5 sm:p-6">
            <h2 className="text-lg font-semibold tracking-tight">
              Planning a similar project?
            </h2>
            <p className="mt-3 text-sm leading-6 text-muted-foreground">
              Discuss your product requirements, technical challenges, and
              implementation goals with Strix Engineering Studio.
            </p>
            <Link
              href="/project-inquiry"
              className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-md bg-primary px-4 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
            >
              Discuss a project
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </aside>
      </div>

      {/* All resources */}
      {study.links.length > 0 && (
        <section className="border-t border-border">
          <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8 lg:px-12">
            <h2 className="text-xl font-semibold tracking-tight">
              Project resources
            </h2>
            <div className="mt-5 flex flex-wrap gap-3">
              {study.links.map((link) => (
                <a
                  key={`${link.type}-${link.url}`}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-md border border-border px-4 py-2.5 text-sm transition-colors hover:bg-muted"
                >
                  {link.label}
                  <ExternalLink className="h-4 w-4" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Closing CTA */}
      <section className="border-t border-border">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-12">
          <div className="rounded-2xl border border-border p-7 sm:p-10 lg:p-12">
            <p className="text-sm font-medium uppercase tracking-[0.16em] text-muted-foreground">
              Work with Strix
            </p>
            <h2 className="mt-4 max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl">
              Turn your technical requirements into a working product.
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-muted-foreground sm:text-base">
              From mobile applications to web platforms and backend
              integrations, start with the problem you need to solve.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                href="/project-inquiry"
                className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
              >
                Start a conversation
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <Link
                href="/case-studies"
                className="inline-flex items-center gap-2 rounded-md border border-border px-5 py-3 text-sm font-medium transition-colors hover:bg-muted"
              >
                All case studies
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function SectionHeading({
  number,
  title,
}: {
  number: string;
  title: string;
}) {
  return (
    <div className="flex items-start gap-4">
      <span className="pt-1 text-xs font-medium tabular-nums text-muted-foreground">
        {number}
      </span>
      <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
        {title}
      </h2>
    </div>
  );
}
