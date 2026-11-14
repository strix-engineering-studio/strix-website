
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
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
  const documentedMetrics = study.metrics.filter(
    (metric) => metric.verified || metric.evidenceUrl,
  );

  const workType = study.client?.confidential
    ? "Client project · anonymized"
    : study.type === "client-project"
      ? "Client project"
      : study.type === "internal-project" || study.type === "product-development"
        ? "Studio product"
        : "Experiment & technical implementation";

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
          className="strix-container flex items-center gap-2 py-4 text-sm text-muted-foreground"
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
        <div className="strix-container grid gap-8 py-14 sm:py-16 lg:grid-cols-12 lg:gap-12 lg:py-24">
          <div className="lg:col-span-8">
            <p className="editorial-meta border-l-2 border-primary py-1 pl-3 text-primary">
              {workType} · {study.category}
            </p>
            <p className="mt-6 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
              Strix Engineering Studio / Case study
            </p>
            <h1 className="editorial-serif type-display-lg mt-3 text-foreground">
              {study.title}
            </h1>

            {study.subtitle && (
              <p className="mt-5 max-w-3xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
                {study.subtitle}
              </p>
            )}

            <p className="mt-5 max-w-3xl text-base leading-relaxed text-muted-foreground">
              {study.summary}
            </p>

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

          <aside className="border-t border-border pt-5 lg:col-span-4 lg:border-l lg:border-t-0 lg:pl-7 lg:pt-0">
            <p className="editorial-meta text-muted-foreground">Project context</p>
            <dl className="mt-4 space-y-4">
              {study.client?.name && !study.client.confidential && (
                <div>
                  <dt className="text-xs text-muted-foreground">Client</dt>
                  <dd className="mt-1 text-sm font-medium text-foreground">{study.client.name}</dd>
                </div>
              )}
              {study.client?.confidential && (
                <div>
                  <dt className="text-xs text-muted-foreground">Client</dt>
                  <dd className="mt-1 text-sm font-medium text-foreground">Confidential client</dd>
                </div>
              )}
              {study.client?.industry && (
                <div>
                  <dt className="text-xs text-muted-foreground">Industry</dt>
                  <dd className="mt-1 text-sm font-medium text-foreground">{study.client.industry}</dd>
                </div>
              )}
              {study.role && (
                <div>
                  <dt className="text-xs text-muted-foreground">Strix responsibilities</dt>
                  <dd className="mt-1 text-sm leading-relaxed text-foreground">{study.role}</dd>
                </div>
              )}
              {study.duration && (
                <div>
                  <dt className="text-xs text-muted-foreground">Duration</dt>
                  <dd className="mt-1 text-sm font-medium text-foreground">{study.duration}</dd>
                </div>
              )}
              {typeof study.teamSize === "number" && (
                <div>
                  <dt className="text-xs text-muted-foreground">Team size</dt>
                  <dd className="mt-1 text-sm font-medium text-foreground">{study.teamSize} {study.teamSize === 1 ? "person" : "people"}</dd>
                </div>
              )}
            </dl>
          </aside>
        </div>
      </header>

      {/* Cover image */}
      {study.coverImageUrl && (
        <section className="border-b border-border">
          <div className="strix-container py-8">
            <div className="relative aspect-[16/8] overflow-hidden border border-border bg-surface-warm">
              <Image
                src={study.coverImageUrl}
                alt={`${study.title} project overview`}
                fill
                priority
                sizes="(max-width: 768px) 100vw, 90vw"
                className="object-cover"
              />
            </div>
          </div>
        </section>
      )}

      {/* Main content and sidebar */}
      <div className="strix-container grid grid-cols-1 gap-12 py-14 lg:grid-cols-[minmax(0,1fr)_300px] lg:gap-16 lg:py-20">
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

          {study.role && (
            <section id="responsibilities" className="scroll-mt-24 border-l-2 border-primary pl-5 sm:pl-6">
              <SectionHeading number="02" title="Strix responsibilities" />
              <p className="mt-5 whitespace-pre-line text-base leading-8 text-muted-foreground">
                {study.role}
              </p>
            </section>
          )}

          {/* Approach */}
          <section id="approach" className="scroll-mt-24">
            <SectionHeading number="03" title="Product direction" />
            <p className="mt-5 whitespace-pre-line text-base leading-8 text-muted-foreground">
              {study.approach}
            </p>
          </section>

          {/* Solution */}
          <section id="solution" className="scroll-mt-24">
            <SectionHeading number="04" title="The solution" />
            <p className="mt-5 whitespace-pre-line text-base leading-8 text-muted-foreground">
              {study.solution}
            </p>
          </section>

          {/* Implementation */}
          {sections.length > 0 && (
            <section id="implementation" className="scroll-mt-24">
              <SectionHeading number="05" title="Engineering implementation" />
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
              <SectionHeading number="06" title="Engineering & architecture decisions" />
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
              <SectionHeading number="07" title="Engineering challenges" />
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
            <SectionHeading number="08" title="Outcomes documented" />
            <p className="mt-5 whitespace-pre-line text-base leading-8 text-muted-foreground">
              {study.outcomes}
            </p>

            {documentedMetrics.length > 0 && (
              <div className="mt-7 grid grid-cols-1 gap-4 sm:grid-cols-2">
                {documentedMetrics.map((metric) => (
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
              <SectionHeading number="09" title="Project visuals" />
              <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2">
                {study.images.map((image, index) => (
                  <figure
                    key={`${image.src}-${index}`}
                    className={`overflow-hidden rounded-xl border border-border ${
                      image.type === "cover" ? "sm:col-span-2" : ""
                    }`}
                  >
                    <div className="relative aspect-[4/3] bg-surface-warm">
                      <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover"
                      />
                    </div>
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
              <SectionHeading number="10" title="Capabilities delivered" />
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

          {study.relatedServices && study.relatedServices.length > 0 && (
            <section id="related-services" className="scroll-mt-24 border-t border-border pt-10">
              <SectionHeading number="11" title="Related services" />
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {study.relatedServices.map((service) => (
                  <li key={service.href}>
                    <Link
                      href={service.href}
                      className="group flex h-full items-center justify-between gap-3 border border-border bg-card p-4 text-sm font-medium transition-colors hover:border-primary hover:text-primary"
                    >
                      {service.title}
                      <ArrowUpRight aria-hidden="true" className="size-4 shrink-0" />
                    </Link>
                  </li>
                ))}
              </ul>
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
                  ...(study.role ? [["responsibilities", "Strix responsibilities"]] : []),
                  ["approach", "Product direction"],
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
                  ...(study.relatedServices?.length
                    ? [["related-services", "Related services"]]
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

          {study.relatedServices && study.relatedServices.length > 0 && (
            <div className="border border-border p-5 sm:p-6">
              <h2 className="font-semibold">Related services</h2>
              <ul className="mt-4 space-y-3 text-sm">
                {study.relatedServices.map((service) => (
                  <li key={service.href}>
                    <Link href={service.href} className="text-muted-foreground transition-colors hover:text-primary">
                      {service.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}

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

          <div className="border border-border bg-card p-5 sm:p-6">
            <h2 className="text-lg font-semibold tracking-tight">
              Planning a similar project?
            </h2>
            <p className="mt-3 text-sm leading-6 text-muted-foreground">
              Discuss your product requirements, technical challenges, and
              implementation goals with Strix Engineering Studio.
            </p>
            <Link
              href="/contact"
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
                href="/contact"
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
