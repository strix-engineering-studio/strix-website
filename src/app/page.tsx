import type { Metadata } from "next";
import { buildMetadata } from "@/seo/metadata";

import { HeroEditorial } from "@/components/sections/editorial/HeroEditorial";
import { TrustStripEditorial } from "@/components/sections/editorial/TrustStripEditorial";
import { WhatWeBuildEditorial } from "@/components/sections/editorial/WhatWeBuildEditorial";
import { SelectedWorkEditorial } from "@/components/sections/editorial/SelectedWorkEditorial";
import { HowWeWorkEditorial } from "@/components/sections/editorial/HowWeWorkEditorial";
import { WhyStrixEditorial } from "@/components/sections/editorial/WhyStrixEditorial";
import { EngineeringJournalEditorial } from "@/components/sections/editorial/EngineeringJournalEditorial";
import { FinalConversionEditorial } from "@/components/sections/editorial/FinalConversionEditorial";

export const metadata: Metadata = buildMetadata({
  title: "Strix Engineering Studio | Architecture-First Product Engineering",
  description:
    "We design, engineer, and launch software products — from proof of concept to production-ready platforms. POC, MVP, full-stack web, mobile, and AI product engineering.",
  path: "/",
  keywords: [
    "product engineering",
    "POC development",
    "MVP development",
    "full product engineering",
    "web application development",
    "mobile application development",
    "AI product engineering",
    "NestJS development",
    "Next.js engineering",
    "software architecture",
  ],
});

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      <HeroEditorial />
      <TrustStripEditorial />
      <WhatWeBuildEditorial />
      <SelectedWorkEditorial />
      <HowWeWorkEditorial />
      <WhyStrixEditorial />
      <EngineeringJournalEditorial />
      <FinalConversionEditorial />
    </main>
  );
}
