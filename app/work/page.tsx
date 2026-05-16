import { PageShell } from "@/components/shared/page-shell"
import { WorkGallery } from "@/components/sections/work-gallery"

export default function WorkPage() {
  return (
    <PageShell
      eyebrow="Selected work"
      title="A curated system of shipped products, not a generic portfolio grid."
      description="Filter by category, search by stack or outcome, and open each case study to see the architecture, deployment, and product reasoning behind the work."
    >
      <WorkGallery />
    </PageShell>
  )
}
