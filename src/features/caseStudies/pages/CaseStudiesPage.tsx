import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, CheckCircle2, Code2, ExternalLink, Sparkles } from "lucide-react";
import { caseStudies } from "../content/case-studies.content";
import { featuredProjects } from "@/features/products/content/product.content";

export const metadata: Metadata = {
  title: "Engineering Case Studies & Selected Work | Strix Engineering Studio",
  description:
    "Explore software engineering case studies from Strix Engineering Studio: full-stack platforms, Flutter mobile apps, NestJS backend systems, and AI workflows.",
  alternates: {
    canonical: "/case-studies",
  },
  openGraph: {
    title: "Engineering Case Studies | Strix Engineering Studio",
    description:
      "Explore published engineering work, technical decisions, and verifiable product outcomes from Strix Engineering Studio.",
    type: "website",
    url: "/case-studies",
  },
};

const publishedCaseStudies = caseStudies
  .filter(
    (study) =>
      study.status === "published" &&
      (study.visibility === "public" || study.visibility === "anonymized"),
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

      {/* Editorial Hero Header */}
      <section className="relative overflow-hidden border-b border-border/80 pt-16 pb-20 lg:pt-24 lg:pb-28">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 blueprint-grid opacity-60"
        />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl space-y-5">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-3.5 py-1">
              <span className="size-1.5 rounded-full bg-primary" />
              <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.24em] text-primary">
                Portfolio & Engineering Deliveries
              </span>
            </div>

            <h1 className="editorial-serif text-5xl leading-tight tracking-tight text-foreground sm:text-6xl lg:text-7xl">
              Case studies built around{" "}
              <span className="italic font-normal text-primary">
                real engineering problems.
              </span>
            </h1>

            <p className="max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              A transparent look at the problems, technical decisions, system
              architectures, and implementation work behind the products we build.
              We distinguish client projects, internal systems, and prototypes.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-xs font-semibold uppercase tracking-[0.18em] text-primary-foreground shadow-md transition-all hover:bg-primary/90"
              >
                <span>Start a project inquiry</span>
                <ArrowUpRight className="size-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Client Deliveries & Featured Case Studies */}
      <section className="border-b border-border/80 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 flex flex-col justify-between gap-4 border-b border-border/80 pb-6 sm:flex-row sm:items-end">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-primary">
                VERIFIED CASE STUDIES
              </p>
              <h2 className="editorial-serif mt-2 text-3xl font-normal text-foreground sm:text-4xl">
                Client & Production Deliveries
              </h2>
            </div>
            <p className="font-mono text-xs text-muted-foreground">
              {publishedCaseStudies.length} DOCUMENTED ENGAGEMENTS
            </p>
          </div>

          <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
            {publishedCaseStudies.map((study, index) => (
              <article
                key={study.slug}
                className="group relative flex flex-col justify-between rounded-xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:border-primary/50 hover:shadow-lg lg:p-8"
              >
                <div>
                  {/* Top Meta */}
                  <div className="flex items-center justify-between border-b border-border/80 pb-4">
                    <span className="editorial-serif text-3xl font-normal text-primary">
                      0{index + 1}
                    </span>
                    <span className="rounded-full border border-border bg-muted/40 px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-foreground">
                      {formatCaseStudyType(study.type)}
                    </span>
                  </div>

                  {/* Visual Preview Frame */}
                  {study.coverImageUrl && (
                    <div className="relative my-6 overflow-hidden rounded-md border border-border/80 bg-background">
                      <div className="relative aspect-[16/10] w-full overflow-hidden">
                        <Image
                          src={study.coverImageUrl}
                          alt={`${study.title} cover preview`}
                          fill
                          sizes="(max-width: 768px) 100vw, 540px"
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                    </div>
                  )}

                  {/* Category & Title */}
                  <p className="font-mono text-[9px] uppercase tracking-[0.22em] text-muted-foreground">
                    {study.category}
                  </p>

                  <h3 className="editorial-serif mt-2 text-2xl font-normal text-foreground transition-colors group-hover:text-primary sm:text-3xl">
                    <Link href={`/case-studies/${study.slug}`} className="focus:outline-hidden">
                      {study.title}
                    </Link>
                  </h3>

                  <p className="mt-3 text-xs leading-relaxed text-muted-foreground sm:text-sm">
                    {study.summary}
                  </p>

                  {/* Client Info / Role */}
                  {study.client?.name && (
                    <div className="mt-4 rounded-sm border border-border/60 bg-muted/20 p-3 text-xs text-muted-foreground">
                      <span className="font-mono uppercase tracking-wider text-foreground">
                        Client:
                      </span>{" "}
                      {study.client.name}
                      {study.role && (
                        <p className="mt-1">
                          <span className="font-mono uppercase tracking-wider text-foreground">
                            Role:
                          </span>{" "}
                          {study.role}
                        </p>
                      )}
                    </div>
                  )}

                  {/* Tech stack */}
                  {study.technologies.length > 0 && (
                    <div className="mt-5 flex flex-wrap gap-1.5">
                      {study.technologies.slice(0, 6).map((tech) => (
                        <span
                          key={tech.name}
                          className="rounded-full border border-border bg-background px-2.5 py-0.5 font-mono text-[10px] text-foreground/80"
                        >
                          {tech.name}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                {/* Bottom Action */}
                <div className="mt-8 flex items-center justify-between border-t border-border/80 pt-4">
                  <span className="font-mono text-[10px] text-muted-foreground">
                    STATUS: {study.status.toUpperCase()}
                  </span>

                  <Link
                    href={`/case-studies/${study.slug}`}
                    className="inline-flex items-center gap-1.5 font-mono text-xs font-semibold uppercase tracking-wider text-primary transition-colors hover:text-foreground"
                  >
                    <span>Read case study</span>
                    <ArrowUpRight className="size-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Studio Products & Internal Systems Section */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 flex flex-col justify-between gap-4 border-b border-border/80 pb-6 sm:flex-row sm:items-end">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-primary">
                INTERNAL PLATFORMS & EXPERIMENTS
              </p>
              <h2 className="editorial-serif mt-2 text-3xl font-normal text-foreground sm:text-4xl">
                Products Built by Strix
              </h2>
            </div>
            <Link
              href="/products"
              className="font-mono text-xs uppercase tracking-wider text-primary hover:text-foreground"
            >
              View all products →
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {featuredProjects.slice(0, 3).map((prod) => (
              <article
                key={prod.slug}
                className="group flex flex-col justify-between rounded-lg border border-border bg-card p-6 shadow-sm transition-all hover:border-primary/50"
              >
                <div>
                  <span className="font-mono text-[9px] uppercase tracking-wider text-primary">
                    {prod.category} · {prod.status.toUpperCase()}
                  </span>

                  <h3 className="editorial-serif mt-3 text-2xl font-normal text-foreground transition-colors group-hover:text-primary">
                    <Link href={`/products/${prod.slug}`}>{prod.title}</Link>
                  </h3>

                  <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                    {prod.summary}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {prod.stack.map((s) => (
                      <span
                        key={s}
                        className="rounded-full border border-border bg-background px-2 py-0.5 font-mono text-[9px] text-foreground/75"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-6 border-t border-border/80 pt-4">
                  <Link
                    href={`/products/${prod.slug}`}
                    className="inline-flex items-center gap-1.5 font-mono text-xs text-primary transition-colors hover:text-foreground"
                  >
                    <span>Explore {prod.title}</span>
                    <ArrowUpRight className="size-3.5" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom Conversion Section */}
      <section className="border-t border-border/80 bg-muted/20 py-16">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <span className="font-mono text-[11px] uppercase tracking-[0.26em] text-primary">
            HAVE A SYSTEM TO ENGINEER?
          </span>
          <h2 className="editorial-serif mt-3 text-3xl font-normal text-foreground sm:text-4xl">
            Let&apos;s engineer your software product.
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm text-muted-foreground">
            Tell us about your product idea, existing codebase, or technical
            bottleneck. We will provide a direct architectural review.
          </p>
          <div className="mt-6">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-xs font-semibold uppercase tracking-[0.18em] text-primary-foreground shadow-md transition-all hover:bg-primary/90"
            >
              <span>Start project inquiry</span>
              <ArrowUpRight className="size-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
