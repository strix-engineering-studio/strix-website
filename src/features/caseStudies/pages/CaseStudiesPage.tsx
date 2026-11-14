import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { caseStudies } from "../content/case-studies.content";
import { featuredProjects } from "@/features/products/content/product.content";
import { PortfolioExplorer, type PortfolioItem } from "../components/portfolio-explorer";

export const metadata: Metadata = {
  title: "Portfolio & Case Studies | Strix Engineering Studio",
  description:
    "Explore Strix client projects, studio products, and prototypes across mobile, web, backend, and connected product systems.",
  alternates: { canonical: "/case-studies" },
  openGraph: {
    title: "Portfolio & Case Studies | Strix Engineering Studio",
    description:
      "Published product engineering work, studio products, and experiments from Strix Engineering Studio.",
    type: "website",
    url: "/case-studies",
  },
};

const publishedCaseStudies = caseStudies
  .filter(
    (study) => study.status === "published" && (study.visibility === "public" || study.visibility === "anonymized"),
  )
  .sort((a, b) => (a.featuredOrder ?? Number.MAX_SAFE_INTEGER) - (b.featuredOrder ?? Number.MAX_SAFE_INTEGER));

const clientItems: PortfolioItem[] = publishedCaseStudies.map((study) => ({
  slug: study.slug,
  title: study.title,
  category: study.type === "client-project" || study.client?.confidential ? "Client Projects" : "Experiments & Prototypes",
  categoryLabel: study.client?.confidential ? "Anonymized client project" : study.type === "client-project" ? "Client project" : "Technical implementation",
  description: study.summary,
  industry: study.client?.industry || study.category,
  href: `/case-studies/${study.slug}`,
  linkLabel: "View Case Study",
  image: study.coverImageUrl,
  imageAlt: `${study.title} project visual`,
  technologies: study.technologies.map((technology) => technology.name),
  status: study.type === "technical-implementation" ? "Proof of concept" : undefined,
  clientName: study.client?.confidential ? undefined : study.client?.name,
}));

const productItems: PortfolioItem[] = featuredProjects
  .filter((project) => project.visibility === "public")
  .map((project) => {
    const isPrototype = project.status === "prototype";
    return {
      slug: project.slug,
      title: project.title,
      category: isPrototype ? "Experiments & Prototypes" : "Studio Products",
      categoryLabel: isPrototype ? "Studio prototype" : "Studio product",
      description: project.summary,
      industry: project.category,
      href: `/products/${project.slug}`,
      linkLabel: isPrototype ? "View Prototype" : "View Product",
      image: project.coverImageUrl,
      imageAlt: `${project.title} product visual`,
      technologies: project.stack,
      status: project.status.replaceAll("-", " "),
    };
  });

const portfolioItems = [...clientItems, ...productItems];

export default function CaseStudiesPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Portfolio & Case Studies | Strix Engineering Studio",
    description: "Client projects, studio products, and prototypes from Strix Engineering Studio.",
    url: "/case-studies",
    mainEntity: {
      "@type": "ItemList",
      itemListElement: portfolioItems.map((item, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: item.title,
        url: item.href,
        description: item.description,
      })),
    },
  };

  return (
    <main className="min-h-screen bg-background text-foreground">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }}
      />

      <section className="relative overflow-hidden border-b border-border py-16 sm:py-20 lg:py-24">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 blueprint-grid opacity-50" />
        <div className="strix-container relative">
          <div className="max-w-4xl space-y-5">
            <p className="editorial-meta border-l-2 border-primary py-1 pl-3 text-primary">Portfolio / Selected work</p>
            <h1 className="editorial-serif type-display-lg text-foreground">
              Products built for real workflows and real constraints.
            </h1>
            <p className="body-large max-w-3xl text-muted-foreground">
              Explore documented client work, products developed by Strix, and early-stage experiments. Each project is labeled by its relationship to the studio.
            </p>
            <Link href="/contact" className="inline-flex min-h-12 items-center gap-3 border border-primary bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90">
              Discuss a project <ArrowUpRight className="size-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 lg:py-20">
        <div className="strix-container">
          <header className="mb-7 flex flex-col gap-3 border-b border-border pb-5 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="editorial-meta text-primary">Project archive</p>
              <h2 className="editorial-serif mt-2 text-3xl text-foreground sm:text-4xl">Client work, studio products, and experiments.</h2>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
              Client identities are shown only when public; confidential work is labeled as anonymized.
            </p>
          </header>
          <PortfolioExplorer items={portfolioItems} />
        </div>
      </section>

      <section className="border-t border-border bg-surface-warm py-14 sm:py-16">
        <div className="strix-container flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div className="max-w-2xl space-y-3">
            <p className="editorial-meta text-primary">Your next project</p>
            <h2 className="editorial-serif type-heading-2 text-foreground">Have a product or engineering challenge to work through?</h2>
            <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">Share the context and what you are trying to change. We can explore a suitable next step.</p>
          </div>
          <Link href="/contact" className="inline-flex min-h-12 shrink-0 items-center gap-3 border border-primary bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90">
            Start a conversation <ArrowUpRight className="size-4" />
          </Link>
        </div>
      </section>
    </main>
  );
}
