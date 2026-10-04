import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { CaseStudyView } from "@/components/case-studies/case-study-view";
import { PageShell } from "@/components/shared/page-shell";

import { featuredProjects } from "@/lib/site";

import { buildMetadata } from "@/seo/metadata";
import { JsonLd } from "@/seo/json-ld";

import { articleSchema } from "@/seo/schemas/article";
import { breadcrumbSchema } from "@/seo/schemas/breadcrumb";
import { organizationSchema } from "@/seo/schemas/organization";
import { websiteSchema } from "@/seo/schemas/website";

import { absoluteUrl } from "@/seo/config";

type WorkPageParams = {
  slug: string;
};

export function generateStaticParams(): WorkPageParams[] {
  return featuredProjects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<WorkPageParams>;
}): Promise<Metadata> {
  const { slug } = await params;

  const project = featuredProjects.find(
    (item) => item.slug === slug,
  );

  if (!project) {
    return {};
  }

  return buildMetadata({
    title: `${project.title} | Strix Engineering Studio`,

    description: project.summary,

    path: `/work/${project.slug}`,

    keywords: [
      project.category,
      "case study",
      "software engineering",
      "architecture",
    ],
  });
}

export default async function WorkDetailPage({
  params,
}: {
  params: Promise<WorkPageParams>;
}) {
  const { slug } = await params;

  const project = featuredProjects.find(
    (item) => item.slug === slug,
  );

  if (!project) {
    notFound();
  }

  const projectUrl = absoluteUrl(
    `/work/${project.slug}`,
  );

  const jsonLd = [
    organizationSchema(),

    websiteSchema(),

    breadcrumbSchema([
      {
        name: "Home",
        url: absoluteUrl("/"),
      },
      {
        name: "Work",
        url: absoluteUrl("/work"),
      },
      {
        name: project.title,
        url: projectUrl,
      },
    ]),

    articleSchema({
      headline: project.title,

      description: project.summary,

      path: `/work/${project.slug}`,

      publishedAt:
        "2026-01-01",

      author:
        "Strix Engineering Studio",
    }),
  ];

  return (
    <>
      <JsonLd data={jsonLd} />

      <PageShell
        eyebrow="Case Study"
        title={project.title}
        description={project.summary}
      >
        <CaseStudyView project={project} />
      </PageShell>
    </>
  );
}
