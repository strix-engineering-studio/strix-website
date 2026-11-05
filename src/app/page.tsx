import type { Metadata } from "next";
import { buildMetadata } from "@/seo/metadata";

import { HeroEditorial } from "@/components/sections/editorial/HeroEditorial";
import { CapabilitiesEditorial } from "@/components/sections/editorial/CapabilitiesEditorial";
import { WhatWeBuildEditorial } from "@/components/sections/editorial/WhatWeBuildEditorial";
import { SelectedWorkEditorial } from "@/components/sections/editorial/SelectedWorkEditorial";
import { InsideEngineeringEditorial } from "@/components/sections/editorial/InsideEngineeringEditorial";
import { HowWeWorkEditorial } from "@/components/sections/editorial/HowWeWorkEditorial";
import { WhyStrixEditorial } from "@/components/sections/editorial/WhyStrixEditorial";
import { EngineeringJournalEditorial } from "@/components/sections/editorial/EngineeringJournalEditorial";
import { StudioSectionEditorial } from "@/components/sections/editorial/StudioSectionEditorial";
import { FinalConversionEditorial } from "@/components/sections/editorial/FinalConversionEditorial";
import { TechStackMarquee } from "@/components/shared/tech-stack-marquee";

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
      {/* 01. Hero */}
      <HeroEditorial />

      {/* Technology Marquee Strip */}
      <div className="border-b border-border/80 bg-muted/20 py-4">
        <TechStackMarquee />
      </div>

      {/* 02. Engineering Capabilities */}
      <CapabilitiesEditorial />

      {/* 03. What We Build (POC, MVP, Full Product) */}
      <WhatWeBuildEditorial />

      {/* 04. Selected Work (Editorial Portfolio with Hugged, H2Go, MagicalStones, etc.) */}
      <SelectedWorkEditorial />

      {/* 05. Inside the Engineering (Storytelling & Architecture Layer Explorer) */}
      <InsideEngineeringEditorial />

      {/* 06. How We Work (Connected Timeline 01 to 06) */}
      <HowWeWorkEditorial />

      {/* 07. Why Strix (Verifiable Engineering-First Principles) */}
      <WhyStrixEditorial />

      {/* 08. Engineering Journal & Studio Signals (LinkedIn, Instagram, Articles) */}
      <EngineeringJournalEditorial />

      {/* 09. The Studio (Philosophy & Independent Craft) */}
      <StudioSectionEditorial />

      {/* 10. Final Conversion ("Have a product idea? Let's engineer it.") */}
      <FinalConversionEditorial />
    </main>
  );
}
