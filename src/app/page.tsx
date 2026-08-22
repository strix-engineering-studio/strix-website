import type { Metadata } from "next";

import { buildMetadata } from "@/lib/seo";

import { HeroSection, SystemsStrip, SelectedSystemsSection, CapabilityMapSection, PhilosophySection, TestimonialsSection, InsightsSection, FaqSection, ContactSection } from "../components/sections/home-sections";
import { LinkedInSection } from "../components/sections/linkedin-section";

export const metadata: Metadata = buildMetadata({
  title: "Strix Engineering Studio | Architecture-First Product Engineering",
  description:
    "Strix Engineering Studio helps startups and technology businesses design, build, deploy, and evolve production-grade software systems.",
  path: "/",
  keywords: ["product engineering", "software systems", "architecture first"],
});

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      {/* Global Strix grid */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          fixed
          inset-0
          z-0
          opacity-[0.035]
          dark:opacity-[0.055]
        "
        style={{
          backgroundImage: `
            linear-gradient(
              to right,
              currentColor 1px,
              transparent 1px
            ),
            linear-gradient(
              to bottom,
              currentColor 1px,
              transparent 1px
            )
          `,
          backgroundSize: "64px 64px",
        }}
      />

      {/* Page content */}
      <div className="relative z-10">
        <HeroSection />
        <LinkedInSection />
        <SystemsStrip />
        <SelectedSystemsSection />
        <CapabilityMapSection />
        <PhilosophySection />
        <TestimonialsSection />
        <InsightsSection />
        <FaqSection />
        <ContactSection />
      </div>
    </main>
  );
}
