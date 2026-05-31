"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Linkedin } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

const posts = [
  {
    title: "Why most agencies fail at GoHighLevel (and how to actually win)",
    engagement: "1.2k impressions · 84 reactions",
  },
  {
    title: "The 8-second WhatsApp AI agent that qualifies my client's leads",
    engagement: "2.4k impressions · 137 reactions",
  },
  {
    title: "AI voice agents are a $20k/mo unlock for local businesses",
    engagement: "3.1k impressions · 211 reactions",
  },
];

export function LinkedInProof() {
  return (
    <section className="py-12 md:py-16">
      <div className="container">
        <div className="rounded-2xl border border-slate-200/60 dark:border-white/8 bg-white/50 dark:bg-navy-900/40 p-6 md:p-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
            <div className="flex items-center gap-3">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[#0A66C2] text-white">
                <Linkedin className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm font-semibold text-slate-900 dark:text-white">
                  Building in public on LinkedIn
                </p>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  40+ posts on AI, CRM &amp; automation · 190+ followers
                </p>
              </div>
            </div>
            <a
              href={siteConfig.social.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-electric hover:text-electric-dark transition"
            >
              Follow my work <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>

          <div className="grid md:grid-cols-3 gap-3">
            {posts.map((post, i) => (
              <motion.a
                key={post.title}
                href={siteConfig.social.linkedin}
                target="_blank"
                rel="noreferrer"
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.08 }}
                className="group rounded-xl border border-slate-200/60 dark:border-white/8 bg-white dark:bg-navy-950/60 p-4 hover:border-[#0A66C2]/40 transition-colors"
              >
                <div className="flex items-center gap-1.5 text-[11px] text-[#0A66C2] font-medium mb-2">
                  <Linkedin className="h-3 w-3" /> LinkedIn Post
                </div>
                <p className="text-sm font-medium text-slate-900 dark:text-white leading-snug line-clamp-2">
                  {post.title}
                </p>
                <p className="mt-2 text-xs text-slate-500 dark:text-slate-400">
                  {post.engagement}
                </p>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
