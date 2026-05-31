import type { Metadata } from "next";
import { ProjectGallerySection } from "@/components/sections/ProjectGallerySection";
import { CTASection } from "@/components/sections/CTASection";
import { ResultsSection } from "@/components/sections/ResultsSection";

export const metadata: Metadata = {
  title: "Portfolio — AI, CRM & Automation Projects",
  description:
    "A filterable gallery of CRM, AI voice, WhatsApp, sales funnel and website design projects shipped by Digency Consults.",
};

export default function PortfolioPage() {
  return (
    <>
      <section className="relative overflow-hidden pt-32 pb-12">
        <div className="glow-orb h-[400px] w-[400px] -left-32 top-0 bg-electric" />
        <div className="glow-orb h-[400px] w-[400px] -right-32 top-32 bg-neon-purple" />
        <div className="absolute inset-0 grid-bg opacity-40" />

        <div className="container relative max-w-4xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-electric">
            Portfolio
          </p>
          <h1 className="mt-3 font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-balance text-slate-900 dark:text-white">
            A filterable gallery of{" "}
            <span className="gradient-text">systems in production</span>.
          </h1>
          <p className="mt-5 text-lg text-slate-600 dark:text-slate-300">
            Browse by category, search by tool or outcome, and click any
            screenshot to open the full breakdown.
          </p>
        </div>
      </section>

      <ProjectGallerySection
        eyebrow="All projects"
        title="Filter, search, and click any screenshot"
        subtitle="Every card is a real engagement — problem, solution, tools, and the measurable result."
        showAllLink={false}
      />

      <ResultsSection />
      <CTASection />
    </>
  );
}
