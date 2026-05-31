import { Hero } from "@/components/sections/Hero";
import { AuthorityStats } from "@/components/sections/AuthorityStats";
import { ToolStackSection } from "@/components/sections/ToolStackSection";
import { LinkedInProof } from "@/components/sections/LinkedInProof";
import { ProjectShowcase } from "@/components/sections/ProjectShowcase";
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
      {/* 1. Personal-brand hero with name, headline, title, photo */}
      <Hero />

      {/* 2. Authority numbers */}
      <AuthorityStats />

      {/* 3. Trusted tools */}
      <ToolStackSection />

      {/* 4. LinkedIn proof — build-in-public credibility */}
      <LinkedInProof />

      {/* 5. Project screenshots — show work early */}
      <ProjectShowcase />

      {/* 6. Who I serve */}
      <BusinessesIHelp />

      {/* 7. Results & Transformations — before/after */}
      <ResultsTransformations />

      {/* 8. Problems I solve */}
      <ProblemsSection />

      {/* 9. Services overview */}
      <ServicesSection limit={6} />

      {/* 10. How I help (process) */}
      <HowIHelp />

      {/* 11. Testimonials */}
      <TestimonialsSection limit={6} />

      {/* 12. FAQ */}
      <FAQ />

      {/* 13. Final CTA */}
      <CTASection />
    </>
  );
}
