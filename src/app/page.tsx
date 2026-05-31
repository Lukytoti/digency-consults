import { Hero } from "@/components/sections/Hero";
import { AuthorityStats } from "@/components/sections/AuthorityStats";
import { ToolStackSection } from "@/components/sections/ToolStackSection";
import { LinkedInProof } from "@/components/sections/LinkedInProof";
import { ProjectGallerySection } from "@/components/sections/ProjectGallerySection";
import { BusinessesIHelp } from "@/components/sections/BusinessesIHelp";
import { ProblemsSection } from "@/components/sections/ProblemsSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { ResultsTransformations } from "@/components/sections/ResultsTransformations";
import { HowIHelp } from "@/components/sections/HowIHelp";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { FAQ } from "@/components/sections/FAQ";
import { CTASection } from "@/components/sections/CTASection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <AuthorityStats />
      <ToolStackSection />
      <LinkedInProof />

      {/* Project gallery — compact, no search, with category chips */}
      <ProjectGallerySection
        eyebrow="Recent work"
        title="Real systems currently in production"
        subtitle="Click any screenshot to expand — see the metrics, tools and full breakdown."
        limit={6}
        showSearch={false}
        compact
      />

      <BusinessesIHelp />
      <ResultsTransformations />
      <ProblemsSection />
      <ServicesSection limit={6} />
      <HowIHelp />
      <TestimonialsSection limit={6} />
      <FAQ />
      <CTASection />
    </>
  );
}
