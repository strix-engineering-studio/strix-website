import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";

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

  const [post, allPosts] = await Promise.all([
    getBlogPostBySlug(slug).catch(() => null),
    getBlogPosts(),
  ]);

  if (!post) {
    notFound();
  }

  const { content, frontmatter } = post;
  const currentMeta = allPosts.find((item) => item.slug === slug);
  const sameTopic = allPosts.filter((item) => item.slug !== slug && item.tag === frontmatter.tag);
  const relatedPosts = (sameTopic.length ? sameTopic : allPosts.filter((item) => item.slug !== slug)).slice(0, 2);

  const articlePath = `/insights/${slug}`;

  const articleUrl = absoluteUrl(articlePath);

  const publishedDate = new Date(`${frontmatter.publishedAt.slice(0, 10)}T12:00:00`).toLocaleDateString(
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
        <article className="prose dark:prose-invert max-w-none prose-headings:editorial-serif prose-headings:font-normal prose-headings:tracking-tight prose-headings:text-foreground prose-a:text-primary prose-strong:text-foreground prose-code:text-foreground prose-pre:border prose-pre:border-border prose-pre:bg-card">
          <div className="mb-8 flex items-center gap-4 text-sm text-muted-foreground">
            <time dateTime={frontmatter.publishedAt}>{publishedDate}</time>

            <span aria-hidden="true" className="text-white/30">
              /
            </span>

            <span>{frontmatter.tag}</span>
            {currentMeta ? <><span aria-hidden="true" className="text-white/30">/</span><span>{currentMeta.readingTime}</span></> : null}
          </div>

          {content}
          <div className="mt-10 flex flex-wrap items-center gap-3 border-y border-border py-5 text-sm">
            <span className="font-mono text-xs text-muted-foreground">SHARE</span>
            <a href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(articleUrl)}`} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">LinkedIn</a>
            <a href={`mailto:?subject=${encodeURIComponent(frontmatter.title)}&body=${encodeURIComponent(articleUrl)}`} className="text-primary hover:underline">Email</a>
          </div>
        </article>
        {relatedPosts.length > 0 ? <section className="border-t border-border pt-8">
          <p className="editorial-meta text-primary">KEEP READING</p>
          <h2 className="editorial-serif mt-2 text-3xl">Related articles</h2>
          <div className="mt-5 grid gap-4 sm:grid-cols-2">{relatedPosts.map((item) => <Link key={item.slug} href={`/insights/${item.slug}`} className="border border-border p-5 transition-colors hover:border-primary"><span className="font-mono text-[10px] text-muted-foreground">{item.readingTime} · {item.tag}</span><h3 className="editorial-serif mt-2 text-xl">{item.title}</h3><p className="mt-2 text-sm text-muted-foreground">{item.excerpt}</p></Link>)}</div>
        </section> : null}
      </PageShell>
    </>
  );
}
