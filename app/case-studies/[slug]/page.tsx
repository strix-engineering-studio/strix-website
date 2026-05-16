import { notFound } from "next/navigation"
import { PageShell } from "@/components/shared/page-shell"
import { CaseStudyView } from "@/components/case-studies/case-study-view"
import { featuredProjects } from "@/lib/site"

export function generateStaticParams() {
  return featuredProjects.map((project) => ({ slug: project.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const project = featuredProjects.find((item) => item.slug === slug)

  if (!project) return {}

  return {
    title: project.title,
    description: project.summary,
  }
}

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const project = featuredProjects.find((item) => item.slug === slug)

  if (!project) notFound()

  return (
    <PageShell eyebrow="Case study" title={project.title} description={project.summary}>
      <CaseStudyView project={project} />
    </PageShell>
  )
}
