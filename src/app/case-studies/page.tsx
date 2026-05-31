import type { Metadata } from "next";
import { caseStudies } from "@/data/case-studies";
import { CaseStudyCard } from "@/components/cards/CaseStudyCard";
import { CTASection } from "@/components/sections/CTASection";
import { ResultsSection } from "@/components/sections/ResultsSection";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Case Studies — Real Revenue from AI & CRM Systems",
  description:
    "In-depth case studies from Digency Consults: CRM rebuilds, AI voice agents, WhatsApp automation, webinar funnels and more.",
};

export default function CaseStudiesPage() {
  return (
    <>
      <section className="relative overflow-hidden pt-32 pb-16">
        <div className="glow-orb h-[400px] w-[400px] -left-32 top-0 bg-electric" />
        <div className="glow-orb h-[400px] w-[400px] -right-32 top-32 bg-neon-purple" />
        <div className="absolute inset-0 grid-bg opacity-40" />

        <div className="container relative max-w-4xl">
          <p className="eyebrow">Case studies</p>
          <h1 className="mt-4 font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-balance text-slate-900 dark:text-white">
            How I move <span className="gradient-text">real revenue</span> with AI &amp; CRM infrastructure.
          </h1>
          <p className="mt-5 text-lg text-slate-600 dark:text-slate-300">
            Detailed breakdowns of recent client engagements — the challenge,
            the approach, the stack and the result.
          </p>
        </div>
      </section>

      <section className="pb-12">
        <div className="container grid md:grid-cols-2 gap-6">
          {caseStudies.map((c) => (
            <CaseStudyCard key={c.slug} caseStudy={c} />
          ))}
        </div>
      </section>

      <section className="section">
        <div className="container space-y-20">
          {caseStudies.map((cs) => {
            const accent =
              cs.accent === "electric"
                ? "text-electric"
                : cs.accent === "purple"
                ? "text-neon-purple"
                : "text-neon-green";
            return (
              <article
                key={cs.slug}
                id={cs.slug}
                className="scroll-mt-28 grid lg:grid-cols-3 gap-8"
              >
                <div className="lg:col-span-1">
                  <p className="text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400">
                    {cs.industry} • {cs.duration}
                  </p>
                  <h2 className="mt-2 font-display text-2xl md:text-3xl font-bold text-slate-900 dark:text-white">
                    {cs.title}
                  </h2>
                  <p className="mt-2 text-slate-600 dark:text-slate-300">
                    Client: <span className="font-medium">{cs.client}</span>
                  </p>
                  <div className="mt-6 grid grid-cols-3 gap-3">
                    {cs.metrics.map((m) => (
                      <div
                        key={m.label}
                        className="rounded-xl glass-card p-3 text-center"
                      >
                        <p className={cn("font-display text-base font-bold", accent)}>
                          {m.value}
                        </p>
                        <p className="text-[10px] uppercase tracking-wider text-slate-500 dark:text-slate-400">
                          {m.label}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="lg:col-span-2 rounded-2xl glass-card p-6 md:p-8 space-y-6">
                  <div>
                    <p className="text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400">
                      Challenge
                    </p>
                    <p className="mt-2 text-slate-700 dark:text-slate-200">
                      {cs.challenge}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400">
                      Approach
                    </p>
                    <ul className="mt-2 space-y-1.5 text-slate-700 dark:text-slate-200">
                      {cs.approach.map((a) => (
                        <li key={a} className="flex gap-2">
                          <span className={accent}>▸</span>
                          {a}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400">
                      Outcome
                    </p>
                    <p className="mt-2 text-slate-700 dark:text-slate-200 font-medium">
                      {cs.outcome}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400">
                      Stack
                    </p>
                    <div className="mt-2 flex flex-wrap gap-1.5">
                      {cs.tools.map((t) => (
                        <span
                          key={t}
                          className="inline-flex items-center rounded-full bg-slate-100 dark:bg-white/5 px-2.5 py-0.5 text-xs text-slate-700 dark:text-slate-300"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <ResultsSection />
      <CTASection />
    </>
  );
}
