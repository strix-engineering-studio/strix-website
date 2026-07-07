import type { Metadata } from "next"
import {
  CapabilityMapSection,
  ContactSection,
  HeroSection,
  InsightsSection,
  PhilosophySection,
  SelectedSystemsSection,
  FaqSection,
  TestimonialsSection,
  SystemsStrip,
} from "@/components/sections/home-sections"
import { buildMetadata } from "@/lib/seo"

export const metadata: Metadata = buildMetadata({
  title: "Strix Engineering Studio | Architecture-First Product Engineering",
  description: "Strix Engineering Studio helps startups and technology businesses design, build, deploy, and evolve production-grade software systems.",
  path: "/",
  keywords: ["product engineering", "software systems", "architecture first"],
})

export default function Home() {
  return (
    <>
      <HeroSection />
      <SystemsStrip />
      <SelectedSystemsSection />
      <CapabilityMapSection />
      <PhilosophySection />
      <TestimonialsSection />
      <InsightsSection />
      <FaqSection />
      <ContactSection />
    </>
  )
}
