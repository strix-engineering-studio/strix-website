import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { ContentPage } from "@/components/seo/content-page"
import { buildMetadata } from "@/lib/seo"
import { getServicePage, servicePages } from "@/lib/seo-content"

export const dynamicParams = false

export function generateStaticParams() {
  return servicePages.map((page) => ({ slug: page.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const page = getServicePage(slug)

  if (!page) {
    return buildMetadata({
      title: "Service | Strix Engineering Studio",
      description: "Explore Strix product engineering and platform design services.",
      path: `/services/${slug}`,
      noIndex: true,
    })
  }

  return buildMetadata({
    title: `${page.title} | Strix Engineering Studio`,
    description: page.description,
    path: `/services/${page.slug}`,
    keywords: page.keywords,
  })
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const page = getServicePage(slug)

  if (!page) {
    notFound()
  }

  return (
    <ContentPage
      eyebrow={page.eyebrow}
      path={`/services/${page.slug}`}
      title={page.title}
      description={page.description}
      whatIsThis={page.whatIsThis}
      whoIsItFor={page.whoIsItFor}
      whatProblemDoesItSolve={page.whatProblemDoesItSolve}
      howDoesItWork={page.howDoesItWork}
      whyChooseStrix={page.whyChooseStrix}
      related={page.related}
      faqs={page.faqs}
      breadcrumbParent={{ name: "Services", href: "/services" }}
      serviceSchema={{
        name: page.title,
        description: page.description,
        url: `https://strix.website/services/${page.slug}`,
      }}
    >
      <div className="rounded-xl border border-white/10 bg-white/4 p-5">
        <p className="text-[11px] uppercase tracking-[0.35em] text-white/45">
          Evidence from Strix work
        </p>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          {page.evidence.map((item) => (
            <div
              key={item.label}
              className="rounded border border-white/10 bg-black/20 p-4"
            >
              <p className="text-sm font-medium text-foreground">{item.label}</p>
              <p className="mt-2 text-sm leading-7 text-muted-foreground">
                {item.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </ContentPage>
  )
}
