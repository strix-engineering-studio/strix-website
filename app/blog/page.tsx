import { PageShell } from "@/components/shared/page-shell"
import { BlogIndex } from "@/components/blog/blog-index"
import { getBlogPosts } from "@/lib/content"

export const metadata = {
  title: "Blog",
  description: "MDX blog for engineering notes, architecture thinking, and startup learnings.",
}

export default async function BlogPage() {
  const posts = await getBlogPosts()

  return (
    <PageShell
      eyebrow="Blog"
      title="Build-in-public writing for founders and engineers."
      description="Architecture notes, engineering patterns, and practical thinking on shipping startup-grade systems."
    >
      <BlogIndex posts={posts} />
    </PageShell>
  )
}
