import {
  BlogPreviewSection,
  CTASection,
  EngineeringDepthSection,
  ExperienceSection,
  FeaturedWorkSection,
  HeroSection,
  ServicesSection,
  TestimonialsSection,
  TrustStrip,
} from "@/components/sections/home-sections"

export default function Home() {
  return (
    <>
      <HeroSection />
      <TrustStrip />
      <FeaturedWorkSection />
      <ServicesSection />
      <EngineeringDepthSection />
      <BlogPreviewSection />
      <ExperienceSection />
      <TestimonialsSection />
      <CTASection />
    </>
  )
}
