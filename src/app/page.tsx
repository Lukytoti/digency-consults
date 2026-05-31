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
import { siteConfig } from "@/lib/site-config";

export default function HomePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url,
    logo: `${siteConfig.url}/favicon.svg`,
    description: siteConfig.description,
    founder: {
      "@type": "Person",
      name: siteConfig.founder.name,
      jobTitle: siteConfig.founder.role,
      url: siteConfig.founder.linkedin,
    },
    contactPoint: {
      "@type": "ContactPoint",
      email: siteConfig.contact.email,
      contactType: "customer service",
    },
    sameAs: [
      siteConfig.social.linkedin,
      siteConfig.social.twitter,
      siteConfig.social.youtube,
      siteConfig.social.instagram,
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
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
