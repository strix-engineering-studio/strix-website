import type { Metadata } from "next";
import { buildMetadata } from "@/seo/metadata";
import { ContentPage } from "@/components/seo/content-page";
import { getAuthorityPage } from "@/src/seo/content";

const page = getAuthorityPage("process")!;

export const metadata: Metadata = buildMetadata({
  title: "Process | Strix Engineering Studio",
  description: page.description,
  path: "/process",
  keywords: ["engineering process", "discovery", "system design"],
});

export default function ProcessPage() {
  return <ContentPage eyebrow="Process" path="/process" {...page} />;
}
