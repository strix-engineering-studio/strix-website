
import type { Metadata } from "next";

import { buildMetadata } from "@/seo/metadata";

import {
  HeroSection,
  SystemsStrip,
  SelectedSystemsSection,
  CapabilityMapSection,
  PhilosophySection,
  TestimonialsSection,
  InsightsSection,
  FaqSection,
  ContactSection,
} from "@/components/sections/home-sections";
import { LinkedInSection } from "@/components/sections/linkedin-section";
import { TechStackMarquee } from "@/components/shared/tech-stack-marquee";
import { HorizontalShowcase } from "@/features/caseStudies/components/horizontal-showcase";

import { caseStudies } from "@/features/caseStudies/content/case-studies.content";
import { featuredProjects } from "@/features/products/content/product.content";

export const metadata: Metadata = buildMetadata({
  title: "Strix Engineering Studio | Architecture-First Product Engineering",
  description:
    "Strix Engineering Studio helps startups and technology businesses design, build, deploy, and evolve production-grade software systems.",
  path: "/",
  keywords: ["product engineering", "software systems", "architecture first"],
});

/* -------------------------------------------------------------------------- */
/* Case studies                                                                */
/* -------------------------------------------------------------------------- */

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

const caseStudyItems = publishedCaseStudies.slice(0, 6).map((study) => ({
  slug: study.slug,
  title: study.title,
  description: study.summary,
  href: `/case-studies/${study.slug}`,
  category: study.category,
  image: study.coverImageUrl,
  tags: study.technologies.map((technology) => technology.name),
}));

/* -------------------------------------------------------------------------- */
/* Products                                                                    */
/* -------------------------------------------------------------------------- */

const productItems = featuredProjects
  .filter(
    (project) =>
      project.visibility === "public" && project.featured,
  )
  .sort(
    (a, b) =>
      (a.featuredOrder ?? Number.MAX_SAFE_INTEGER) -
      (b.featuredOrder ?? Number.MAX_SAFE_INTEGER),
  )
  .slice(0, 6)
  .map((project) => ({
    slug: project.slug,
    title: project.title,
    description: project.summary,
    href: `/products/${project.slug}`,
    category: project.category,
    image: project.coverImageUrl,
    tags: project.stack,
  }));

/* -------------------------------------------------------------------------- */
/* Homepage                                                                    */
/* -------------------------------------------------------------------------- */

export default function Home() {
  return (
    <main className="relative overflow-hidden">
 

      {/* Homepage content */}
      <div className="relative z-10">
        <HeroSection />

        <TechStackMarquee />

        <LinkedInSection />

        <SystemsStrip />

        {/* Client work and engineering delivery */}
        <HorizontalShowcase
          eyebrow="Selected work"
          title="Engineering case studies"
          description="Explore the systems, implementation decisions, and engineering work behind our projects."
          viewAllHref="/case-studies"
          items={caseStudyItems}
          columns={3}
        />

        {/* Products owned and developed by Strix */}
        <HorizontalShowcase
          eyebrow="Built by Strix"
          title="Products and experiments"
          description="Explore products we are building and evolving."
          viewAllHref="/products"
          items={productItems}
          columns={3}
        />

        {/* Capabilities and engineering philosophy */}
        <CapabilityMapSection />

        <PhilosophySection />

        <TestimonialsSection />

        <InsightsSection />

        <FaqSection />

        <ContactSection />
      </div>
    </main>
  );
}
