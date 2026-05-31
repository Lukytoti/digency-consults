import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { CaseStudy } from "@/data/case-studies";
import { cn } from "@/lib/utils";

const accentMap: Record<CaseStudy["accent"], string> = {
  electric: "from-electric/20 to-electric/0 text-electric",
  purple: "from-neon-purple/20 to-neon-purple/0 text-neon-purple",
  green: "from-neon-green/20 to-neon-green/0 text-neon-green",
};

export function CaseStudyCard({ caseStudy }: { caseStudy: CaseStudy }) {
  return (
    <article className="group relative overflow-hidden rounded-2xl glass-card p-6 md:p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-glow">
      <div
        className={cn(
          "absolute inset-x-0 top-0 h-1 bg-gradient-to-r",
          accentMap[caseStudy.accent]
        )}
      />

      <div className="flex items-center gap-3 text-xs">
        <span className="rounded-full bg-slate-100 dark:bg-white/5 px-3 py-1 text-slate-600 dark:text-slate-300">
          {caseStudy.industry}
        </span>
        <span className="text-slate-400 dark:text-slate-500">•</span>
        <span className="text-slate-500 dark:text-slate-400">
          {caseStudy.duration}
        </span>
      </div>

      <h3 className="mt-3 font-display text-xl md:text-2xl font-semibold text-slate-900 dark:text-white">
        {caseStudy.title}
      </h3>
      <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
        Client: <span className="font-medium">{caseStudy.client}</span>
      </p>

      <p className="mt-4 text-slate-700 dark:text-slate-300">
        {caseStudy.summary}
      </p>

      <div className="mt-6 grid grid-cols-3 gap-3">
        {caseStudy.metrics.map((m) => (
          <div
            key={m.label}
            className="rounded-xl border border-slate-200 dark:border-white/10 bg-white/60 dark:bg-white/5 p-3 text-center"
          >
            <p className={cn("font-display text-lg font-bold", accentMap[caseStudy.accent].split(" ").pop())}>
              {m.value}
            </p>
            <p className="text-[11px] uppercase tracking-wider text-slate-500 dark:text-slate-400">
              {m.label}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-6 flex flex-wrap gap-1.5">
        {caseStudy.tools.map((t) => (
          <span
            key={t}
            className="inline-flex items-center rounded-full bg-slate-100 dark:bg-white/5 px-2.5 py-0.5 text-xs text-slate-700 dark:text-slate-300"
          >
            {t}
          </span>
        ))}
      </div>

      <Link
        href={`/case-studies#${caseStudy.slug}`}
        className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-electric"
      >
        Read the full case study
        <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </Link>
    </article>
  );
}
