import type { Metadata } from "next"
import { BlogIndex } from "@/components/blog/blog-index"
import { PageShell } from "@/components/shared/page-shell"
import { getBlogPosts } from "@/lib/content"

export const metadata: Metadata = {
  title: "Blog",
  description: "Ideas, strategies, and updates for scaling smarter with automation and product systems.",
}

export default async function BlogPage() {
  const posts = await getBlogPosts()

  return (
    <PageShell
      eyebrow="Blog"
      title="Ideas, strategies, and updates for scaling smarter with automation"
      description="Practical notes on product systems, architecture, and delivery patterns that make teams faster without making the product fragile."
    >
      <BlogIndex posts={posts} />
    </PageShell>
  )
}
