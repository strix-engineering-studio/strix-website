import type { Metadata } from "next"
import { buildMetadata } from "@/lib/seo"
import { getAuthorityPage } from "@/lib/seo-content"
import { ContentPage } from "@/components/seo/content-page"

const page = getAuthorityPage("process")!

export const metadata: Metadata = buildMetadata({
  title: "Process | Strix Engineering Studio",
  description: page.description,
  path: "/process",
  keywords: ["engineering process", "discovery", "system design"],
})

export default function ProcessPage() {
  const { slug: _slug, ...content } = page
  return <ContentPage eyebrow="Process" path="/process" {...content} />
}
