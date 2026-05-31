import type { Metadata } from "next";
import { pricingTiers } from "@/data/pricing";
import { PricingCard } from "@/components/cards/PricingCard";
import { FAQ } from "@/components/sections/FAQ";
import { CTASection } from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Pricing — Sprints, Systems & Revenue Engines",
  description:
    "Transparent pricing for AI, CRM and automation projects. Start with a sprint, scale to a full revenue engine.",
};

export default function PricingPage() {
  return (
    <>
      <section className="relative overflow-hidden pt-32 pb-16">
        <div className="glow-orb h-[400px] w-[400px] -left-32 top-0 bg-electric" />
        <div className="glow-orb h-[400px] w-[400px] -right-32 top-32 bg-neon-purple" />
        <div className="absolute inset-0 grid-bg opacity-40" />

        <div className="container relative max-w-4xl text-center mx-auto">
          <p className="eyebrow mx-auto">Pricing</p>
          <h1 className="mt-4 font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-balance text-slate-900 dark:text-white">
            Transparent pricing. <span className="gradient-text">Outcome-based</span> engagements.
          </h1>
          <p className="mt-5 text-lg text-slate-600 dark:text-slate-300">
            Pick the right starting point. Every package includes strategy,
            build, documentation and post-launch support.
          </p>
        </div>
      </section>

      <section className="pb-12">
        <div className="container grid md:grid-cols-3 gap-6">
          {pricingTiers.map((t) => (
            <PricingCard key={t.name} tier={t} />
          ))}
        </div>

        <p className="mt-10 text-center text-sm text-slate-500 dark:text-slate-400">
          Custom scope? White-label projects? Email{" "}
          <a
            href="mailto:hello@digencyconsults.com"
            className="text-electric hover:underline"
          >
            hello@digencyconsults.com
          </a>
          .
        </p>
      </section>

      <FAQ />
      <CTASection />
    </>
  );
}
