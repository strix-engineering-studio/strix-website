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
