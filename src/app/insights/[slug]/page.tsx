import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { PageShell } from "@/components/shared/page-shell";

import { getBlogPostBySlug, getBlogPosts } from "@/lib/content";

import { absoluteUrl } from "@/seo/config";
import { buildMetadata } from "@/seo/metadata";
import { JsonLd } from "@/seo/json-ld";

import { articleSchema } from "@/seo/schemas/article";
import { breadcrumbSchema } from "@/seo/schemas/breadcrumb";
import { organizationSchema } from "@/seo/schemas/organization";
import { websiteSchema } from "@/seo/schemas/website";

export async function generateStaticParams() {
  const posts = await getBlogPosts();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;

  try {
    const { frontmatter } = await getBlogPostBySlug(slug);

    return buildMetadata({
      title: `${frontmatter.title} | Strix Engineering Studio`,

      description: frontmatter.excerpt,

      path: `/insights/${slug}`,

      keywords: [
        frontmatter.tag,
        "software architecture",
        "product engineering",
      ],
    });
  } catch {
    return buildMetadata({
      title: "Insight | Strix Engineering Studio",

      description:
        "Architecture and product engineering insights from Strix Engineering Studio.",

      path: `/insights/${slug}`,

      noIndex: true,
    });
  }
}

export default async function InsightsPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const post = await getBlogPostBySlug(slug).catch(() => null);

  if (!post) {
    notFound();
  }

  const { content, frontmatter } = post;

  const articlePath = `/insights/${slug}`;

  const articleUrl = absoluteUrl(articlePath);

  const publishedDate = new Date(frontmatter.publishedAt).toLocaleDateString(
    "en-US",
    {
      month: "long",
      day: "numeric",
      year: "numeric",
    },
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
        name: "Insights",
        url: absoluteUrl("/insights"),
      },

      {
        name: frontmatter.title,
        url: articleUrl,
      },
    ]),

    articleSchema({
      headline: frontmatter.title,

      description: frontmatter.excerpt,

      path: articlePath,

      publishedAt: frontmatter.publishedAt,

      author: "Strix Engineering Studio",
    }),
  ];

  return (
    <>
      <JsonLd data={jsonLd} />

      <PageShell
        eyebrow={frontmatter.tag}
        title={frontmatter.title}
        description={frontmatter.excerpt}
      >
        <article className="prose max-w-none prose-invert prose-headings:tracking-tight prose-a:text-[color:var(--foreground)] prose-strong:text-foreground prose-code:text-foreground prose-pre:border prose-pre:border-white/10 prose-pre:bg-black/30">
          <div className="mb-8 flex items-center gap-4 text-sm text-muted-foreground">
            <time dateTime={frontmatter.publishedAt}>{publishedDate}</time>

            <span aria-hidden="true" className="text-white/30">
              /
            </span>

            <span>{frontmatter.tag}</span>
          </div>

          {content}
        </article>
      </PageShell>
    </>
  );
}
