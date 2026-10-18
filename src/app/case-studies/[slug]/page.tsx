import CaseStudyDetailPage from "@/src/features/caseStudies/pages/CaseStudyDetailsPage";


export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
    return (
        <CaseStudyDetailPage params={params} />
    );
}
