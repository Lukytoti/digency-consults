import { Hero } from "@/components/sections/Hero";
import { ToolStackSection } from "@/components/sections/ToolStackSection";
import { ProblemsSection } from "@/components/sections/ProblemsSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { FeaturedProjects } from "@/components/sections/FeaturedProjects";
import { HowIHelp } from "@/components/sections/HowIHelp";
import { CaseStudyHighlights } from "@/components/sections/CaseStudyHighlights";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { ResultsSection } from "@/components/sections/ResultsSection";
import { SocialProofSection } from "@/components/sections/SocialProofSection";
import { FAQ } from "@/components/sections/FAQ";
import { CTASection } from "@/components/sections/CTASection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ToolStackSection />
      <ProblemsSection />
      <ServicesSection limit={6} />
      <FeaturedProjects />
      <HowIHelp />
      <ResultsSection />
      <CaseStudyHighlights />
      <SocialProofSection />
      <TestimonialsSection limit={6} />
      <FAQ />
      <CTASection />
    </>
  );
}
