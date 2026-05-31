import type { Metadata } from "next";
import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/cards/ProjectCard";
import { CTASection } from "@/components/sections/CTASection";
import { ResultsSection } from "@/components/sections/ResultsSection";

export const metadata: Metadata = {
  title: "Portfolio — AI, CRM & Automation Projects",
  description:
    "A selection of recent CRM, AI voice, WhatsApp automation, sales funnel and website design projects shipped by Digency Consults.",
};

export default function PortfolioPage() {
  return (
    <>
      <section className="relative overflow-hidden pt-32 pb-16">
        <div className="glow-orb h-[400px] w-[400px] -left-32 top-0 bg-electric" />
        <div className="glow-orb h-[400px] w-[400px] -right-32 top-32 bg-neon-purple" />
        <div className="absolute inset-0 grid-bg opacity-40" />

        <div className="container relative max-w-4xl">
          <p className="eyebrow">Portfolio</p>
          <h1 className="mt-4 font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-balance text-slate-900 dark:text-white">
            A selection of <span className="gradient-text">systems</span> currently in production.
          </h1>
          <p className="mt-5 text-lg text-slate-600 dark:text-slate-300">
            Every card is a real engagement: the problem, the system I built,
            the tools used, and the measurable result.
          </p>
        </div>
      </section>

      <section className="pb-12">
        <div className="container grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </div>
      </section>

      <ResultsSection />
      <CTASection />
    </>
  );
}
