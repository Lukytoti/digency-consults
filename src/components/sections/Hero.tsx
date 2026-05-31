"use client";

import Link from "next/link";
import { ArrowRight, PlayCircle, Sparkles, Star } from "lucide-react";
import { motion } from "framer-motion";
import { siteConfig } from "@/lib/site-config";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 md:pt-40 pb-20 md:pb-28">
      {/* Background orbs */}
      <div className="glow-orb h-[500px] w-[500px] -left-40 top-0 bg-electric" />
      <div className="glow-orb h-[500px] w-[500px] -right-40 top-32 bg-neon-purple" />
      <div className="absolute inset-0 grid-bg opacity-40" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white dark:to-navy-950" />

      <div className="container relative">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-electric"
          >
            <Sparkles className="h-3.5 w-3.5" />
            AI &amp; CRM Infrastructure Engineer
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-6 font-display text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-balance text-slate-900 dark:text-white"
          >
            I Build Websites, Funnels, CRM Systems and{" "}
            <span className="gradient-text">AI Automations</span> That Help
            Businesses Capture Leads, Follow Up Automatically and Convert More
            Clients.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-6 text-base md:text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto"
          >
            I help businesses set up smart systems using GoHighLevel, n8n, AI
            agents, WhatsApp, SMS, email automation and high-converting websites
            so they can save time, generate leads and close more sales.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-10 flex flex-col sm:flex-row gap-3 justify-center"
          >
            <Link
              href={siteConfig.contact.calendar}
              target="_blank"
              rel="noreferrer"
              className="btn-primary px-6 py-3.5"
            >
              Book a Strategy Call <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="/portfolio" className="btn-secondary px-6 py-3.5">
              <PlayCircle className="h-4 w-4" /> View My Work
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 text-sm text-slate-600 dark:text-slate-400"
          >
            <div className="flex items-center -space-x-2">
              {[
                "0ea5e9",
                "8b5cf6",
                "10b981",
                "f59e0b",
                "ef4444",
              ].map((c, i) => (
                <span
                  key={i}
                  className="inline-block h-8 w-8 rounded-full border-2 border-white dark:border-navy-950"
                  style={{ background: `#${c}` }}
                />
              ))}
            </div>
            <div className="flex items-center gap-1 text-amber-500">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-current" />
              ))}
              <span className="ml-2 text-slate-700 dark:text-slate-300">
                Trusted by 20+ founders, agencies and operators
              </span>
            </div>
          </motion.div>
        </div>

        {/* Floating preview card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="relative mt-16 mx-auto max-w-5xl"
        >
          <div className="relative rounded-3xl glass-card p-2 md:p-3 shadow-glow">
            <div className="rounded-2xl bg-gradient-to-br from-navy-900 via-navy-950 to-black p-6 md:p-10">
              <div className="grid md:grid-cols-3 gap-4">
                {[
                  {
                    label: "Avg Lead Response",
                    value: "<60s",
                    accent: "text-electric",
                  },
                  {
                    label: "Booked Calls / Mo",
                    value: "+220%",
                    accent: "text-neon-purple",
                  },
                  {
                    label: "Email + SMS ROI",
                    value: "42x",
                    accent: "text-neon-green",
                  },
                ].map((s) => (
                  <div
                    key={s.label}
                    className="rounded-2xl border border-white/10 bg-white/5 p-6"
                  >
                    <p className="text-xs uppercase tracking-wider text-slate-400">
                      {s.label}
                    </p>
                    <p
                      className={`mt-2 font-display text-3xl md:text-4xl font-bold ${s.accent}`}
                    >
                      {s.value}
                    </p>
                  </div>
                ))}
              </div>
              <div className="mt-6 grid sm:grid-cols-2 gap-3 text-xs text-slate-400">
                <div className="rounded-xl border border-white/10 bg-black/30 p-4 font-mono">
                  <span className="text-emerald-400">▸</span> ai_agent.qualify_lead()
                  <br />
                  <span className="text-slate-500">{"// 8s avg, 60% more SQLs"}</span>
                </div>
                <div className="rounded-xl border border-white/10 bg-black/30 p-4 font-mono">
                  <span className="text-electric">▸</span> ghl.workflow.fire("nurture_v3")
                  <br />
                  <span className="text-slate-500">{"// 14 day cross-channel cadence"}</span>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute -bottom-4 -right-4 hidden md:block animate-float">
            <div className="rounded-2xl glass-card px-4 py-3 text-xs">
              <p className="text-slate-500 dark:text-slate-400">Live now</p>
              <p className="font-semibold text-emerald-500">3 AI agents qualifying leads</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
