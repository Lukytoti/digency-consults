import { Linkedin, ArrowUpRight, Award, Star, Sparkles } from "lucide-react";
import {
  certifications,
  linkedInPosts,
  proofReviews,
  proofStats,
} from "@/data/social-proof";
import { siteConfig } from "@/lib/site-config";

export function SocialProofSection() {
  return (
    <section className="section relative bg-slate-50 dark:bg-navy-900/40">
      <div className="container">
        <div className="grid lg:grid-cols-3 gap-10 items-start">
          {/* Header */}
          <div className="lg:sticky lg:top-28">
            <p className="eyebrow">As seen on LinkedIn</p>
            <h2 className="mt-4 section-title text-slate-900 dark:text-white text-balance">
              The proof is in the systems — and on{" "}
              <span className="gradient-text">LinkedIn</span>.
            </h2>
            <p className="mt-4 text-slate-600 dark:text-slate-300">
              I document AI, CRM and automation projects in public. Real builds,
              real results, no hype. Connect with me to see the work in progress.
            </p>

            <a
              href={siteConfig.social.linkedin}
              target="_blank"
              rel="noreferrer"
              className="mt-6 btn-primary inline-flex"
            >
              <Linkedin className="h-4 w-4" /> Connect on LinkedIn
              <ArrowUpRight className="h-4 w-4" />
            </a>

            <div className="mt-8 rounded-2xl glass-card p-5">
              <p className="text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400">
                LinkedIn Headline
              </p>
              <p className="mt-2 text-slate-800 dark:text-slate-100 font-medium">
                {siteConfig.founder.headline}
              </p>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-3">
              {proofStats.map((s) => (
                <div
                  key={s.title}
                  className="rounded-2xl glass-card p-4 text-center"
                >
                  <p className="font-display text-2xl font-bold gradient-text">
                    {s.title}
                  </p>
                  <p className="mt-1 text-xs text-slate-600 dark:text-slate-400">
                    {s.body}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Posts + reviews */}
          <div className="lg:col-span-2 space-y-8">
            <div>
              <div className="flex items-center gap-2 text-sm font-semibold text-slate-900 dark:text-white">
                <Sparkles className="h-4 w-4 text-electric" /> Featured LinkedIn posts
              </div>
              <div className="mt-4 grid sm:grid-cols-2 gap-4">
                {linkedInPosts.map((p) => (
                  <a
                    key={p.title}
                    href={siteConfig.social.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="group rounded-2xl glass-card p-5 transition hover:-translate-y-1 hover:shadow-glow"
                  >
                    <div className="flex items-center gap-2 text-xs text-electric font-medium">
                      <Linkedin className="h-3.5 w-3.5" /> LinkedIn Post
                    </div>
                    <h4 className="mt-2 font-display font-semibold text-slate-900 dark:text-white">
                      {p.title}
                    </h4>
                    <p className="mt-2 text-sm text-slate-600 dark:text-slate-300 line-clamp-3">
                      {p.body}
                    </p>
                    <p className="mt-3 text-xs text-slate-500 dark:text-slate-400">
                      {p.meta}
                    </p>
                  </a>
                ))}
              </div>
            </div>

            <div>
              <div className="flex items-center gap-2 text-sm font-semibold text-slate-900 dark:text-white">
                <Star className="h-4 w-4 text-amber-500" /> Client feedback &amp; platform reviews
              </div>
              <div className="mt-4 grid sm:grid-cols-2 gap-4">
                {proofReviews.map((r) => (
                  <div
                    key={r.title}
                    className="rounded-2xl glass-card p-5"
                  >
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-semibold text-slate-900 dark:text-white">
                        {r.title}
                      </p>
                      <span className="text-xs text-slate-500 dark:text-slate-400">
                        {r.source}
                      </span>
                    </div>
                    <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                      {r.body}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="flex items-center gap-2 text-sm font-semibold text-slate-900 dark:text-white">
                <Award className="h-4 w-4 text-neon-green" /> Certifications &amp; expertise
              </div>
              <div className="mt-4 grid sm:grid-cols-2 gap-4">
                {certifications.map((c) => (
                  <div key={c.title} className="rounded-2xl glass-card p-5">
                    <p className="text-sm font-semibold text-slate-900 dark:text-white">
                      {c.title}
                    </p>
                    <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                      {c.body}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
