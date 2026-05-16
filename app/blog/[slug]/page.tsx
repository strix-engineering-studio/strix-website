import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { PageShell } from "@/components/shared/page-shell"
import { getBlogPostBySlug, getBlogPosts } from "@/lib/content"

export async function generateStaticParams() {
  const posts = await getBlogPosts()
  return posts.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  try {
    const { frontmatter } = await getBlogPostBySlug(slug)
    return {
      title: frontmatter.title,
      description: frontmatter.excerpt,
    }
  } catch {
    return {}
  }
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params

  const post = await getBlogPostBySlug(slug).catch(() => null)

  if (!post) {
    notFound()
  }

  const { content, frontmatter } = post
  const publishedDate = new Date(frontmatter.publishedAt).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  })

  return (
    <PageShell eyebrow={frontmatter.tag} title={frontmatter.title} description={frontmatter.excerpt}>
      <article className="prose prose-invert max-w-none prose-headings:tracking-tight prose-a:text-emerald-300 prose-strong:text-white prose-code:text-emerald-200 prose-pre:border prose-pre:border-white/10 prose-pre:bg-black/30">
        <div className="mb-8 flex items-center gap-4 text-sm text-white/48">
          <span>{publishedDate}</span>
          <span>{frontmatter.tag}</span>
        </div>
        {content}
      </article>
    </PageShell>
  )
}
