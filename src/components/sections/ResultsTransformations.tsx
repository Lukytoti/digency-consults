"use client";

import { motion } from "framer-motion";
import { ArrowRight, TrendingUp } from "lucide-react";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

const transformations = [
  {
    before: "4+ hour lead response time",
    after: "Under 60 seconds (automated)",
    metric: "Response Time",
    accent: "border-electric/30",
  },
  {
    before: "12% webinar show-up rate",
    after: "41% show-up rate",
    metric: "+242% improvement",
    accent: "border-neon-purple/30",
  },
  {
    before: "35% of calls missed (after-hours)",
    after: "92% of calls captured by AI",
    metric: "+$18k/mo revenue",
    accent: "border-neon-green/30",
  },
  {
    before: "Manual WhatsApp qualifying (20+ hrs/wk)",
    after: "AI qualifies in 8 seconds",
    metric: "20 hrs/wk saved",
    accent: "border-electric/30",
  },
  {
    before: "38k cold contacts, no follow-up",
    after: "11% reactivated, $63k in 30 days",
    metric: "42x ROI",
    accent: "border-neon-purple/30",
  },
  {
    before: "0.6% funnel conversion",
    after: "4.8% conversion, 3.4x MRR growth",
    metric: "+700% conversion",
    accent: "border-neon-green/30",
  },
];

export function ResultsTransformations() {
  return (
    <section className="py-16 md:py-20 bg-slate-50/50 dark:bg-navy-900/30 border-y border-slate-200/50 dark:border-white/5">
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-electric">
              Proven outcomes
            </p>
            <h2 className="mt-3 font-display text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
              Results &amp; Transformations
            </h2>
            <p className="mt-3 text-slate-600 dark:text-slate-300">
              Before and after from real client engagements. Every number is
              from a system currently running in production.
            </p>
          </div>
          <Link
            href="/case-studies"
            className="btn-outline self-start md:self-auto text-sm"
          >
            Read full case studies <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {transformations.map((t, i) => (
            <motion.div
              key={t.metric}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className={`rounded-2xl border ${t.accent} bg-white dark:bg-navy-950/60 p-5 hover:shadow-glow/30 transition-shadow`}
            >
              <div className="flex items-center gap-2 mb-4">
                <TrendingUp className="h-4 w-4 text-emerald-500" />
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-500">
                  {t.metric}
                </span>
              </div>

              <div className="space-y-3">
                <div className="flex items-start gap-2">
                  <span className="mt-1 h-2 w-2 rounded-full bg-rose-400 shrink-0" />
                  <div>
                    <p className="text-[11px] uppercase tracking-wider text-slate-500 dark:text-slate-500">Before</p>
                    <p className="text-sm text-slate-700 dark:text-slate-300">{t.before}</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <span className="mt-1 h-2 w-2 rounded-full bg-emerald-400 shrink-0" />
                  <div>
                    <p className="text-[11px] uppercase tracking-wider text-slate-500 dark:text-slate-500">After</p>
                    <p className="text-sm font-semibold text-slate-900 dark:text-white">{t.after}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href={siteConfig.contact.calendar}
            target="_blank"
            rel="noreferrer"
            className="btn-primary px-7 py-3.5"
          >
            Get Results Like These <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
