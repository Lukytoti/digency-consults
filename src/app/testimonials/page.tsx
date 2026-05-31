import type { Metadata } from "next";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { SocialProofSection } from "@/components/sections/SocialProofSection";
import { CTASection } from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Testimonials — Real Feedback from Real Clients",
  description:
    "Founders, agencies and operators share what shipping AI & CRM infrastructure with Digency Consults actually felt like.",
};

export default function TestimonialsPage() {
  return (
    <>
      <section className="relative overflow-hidden pt-32 pb-12">
        <div className="glow-orb h-[400px] w-[400px] -left-32 top-0 bg-electric" />
        <div className="glow-orb h-[400px] w-[400px] -right-32 top-32 bg-neon-purple" />
        <div className="absolute inset-0 grid-bg opacity-40" />

        <div className="container relative max-w-4xl">
          <p className="eyebrow">Testimonials</p>
          <h1 className="mt-4 font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-balance text-slate-900 dark:text-white">
            What the founders, agencies and operators actually say.
          </h1>
          <p className="mt-5 text-lg text-slate-600 dark:text-slate-300">
            Pulled from LinkedIn DMs, WhatsApp chats, Fiverr / Upwork reviews
            and direct engagements.
          </p>
        </div>
      </section>

      <TestimonialsSection />
      <SocialProofSection />
      <CTASection />
    </>
  );
}
