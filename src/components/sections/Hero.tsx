"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Linkedin } from "lucide-react";
import { motion } from "framer-motion";
import { siteConfig } from "@/lib/site-config";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-24 pb-12 md:pt-28 md:pb-16">
      {/* Subtle background */}
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="glow-orb h-[600px] w-[600px] -top-40 left-1/2 -translate-x-1/2 bg-electric/20" />

      <div className="container relative">
        <div className="grid lg:grid-cols-5 gap-10 lg:gap-16 items-center">
          {/* Left – Text content */}
          <div className="lg:col-span-3">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-3"
            >
              <div className="h-12 w-12 rounded-full bg-gradient-to-br from-electric via-neon-purple to-neon-green p-[2px]">
                <div className="h-full w-full rounded-full bg-white dark:bg-navy-950 flex items-center justify-center">
                  <span className="text-sm font-bold gradient-text">OO</span>
                </div>
              </div>
              <div>
                <p className="text-base font-semibold text-slate-900 dark:text-white">
                  Oluwatobi Olowookere
                </p>
                <p className="text-sm text-electric font-medium">
                  AI &amp; CRM Infrastructure Engineer
                </p>
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-8 font-display text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] xl:text-[3.5rem] font-bold tracking-tight leading-[1.1] text-slate-900 dark:text-white"
            >
              I Build Revenue Systems, AI Automations, CRM Infrastructure and
              Lead Generation Systems That Help Businesses{" "}
              <span className="gradient-text">Scale Without Manual Work.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-5 text-base md:text-lg text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed"
            >
              I design and deploy backend automation, CRM systems, AI workflows
              and revenue infrastructure using GoHighLevel, n8n, OpenAI, WhatsApp,
              VAPI &amp; more — so your business captures leads, follows up
              automatically and closes clients without you touching anything.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-8 flex flex-col sm:flex-row gap-3"
            >
              <Link
                href={siteConfig.contact.calendar}
                target="_blank"
                rel="noreferrer"
                className="btn-primary px-7 py-3.5 text-base"
              >
                Book a Strategy Call <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href={siteConfig.social.linkedin}
                target="_blank"
                rel="noreferrer"
                className="btn-secondary px-6 py-3.5 text-base"
              >
                <Linkedin className="h-4 w-4" /> Connect on LinkedIn
              </a>
            </motion.div>

            {/* Micro-proof line */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="mt-6 text-sm text-slate-500 dark:text-slate-400"
            >
              Trusted by founders, agencies &amp; operators across 3 continents.
              <span className="mx-2 text-slate-300 dark:text-slate-600">|</span>
              20+ projects shipped. 8+ AI agents in production.
            </motion.p>
          </div>

          {/* Right – Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-2 flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Glow behind photo */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-electric/30 via-neon-purple/20 to-neon-green/20 blur-2xl scale-110" />
              <div className="relative rounded-3xl overflow-hidden border-2 border-white/10 shadow-glow w-[280px] h-[340px] sm:w-[320px] sm:h-[400px] lg:w-[360px] lg:h-[440px]">
                {/* Professional photo placeholder — replace with your actual photo */}
                <Image
                  src="/images/tobi-photo.jpg"
                  alt="Oluwatobi Olowookere — AI & CRM Infrastructure Engineer"
                  fill
                  sizes="(min-width: 1024px) 360px, 320px"
                  className="object-cover"
                  priority
                />
                {/* Fallback gradient if image not found */}
                <div className="absolute inset-0 bg-gradient-to-br from-navy-900 via-navy-800 to-electric/30 flex items-end justify-center p-6">
                  <div className="text-center">
                    <p className="text-white font-display text-2xl font-bold">OO</p>
                    <p className="text-slate-300 text-xs mt-1">Add your photo at<br/>/public/images/tobi-photo.jpg</p>
                  </div>
                </div>
              </div>

              {/* Floating badge */}
              <div className="absolute -bottom-3 -left-3 rounded-xl glass-card px-4 py-2.5 shadow-glow animate-float">
                <p className="text-[11px] text-slate-500 dark:text-slate-400 uppercase tracking-wider">Currently</p>
                <p className="text-sm font-semibold text-emerald-500">3 AI agents live</p>
              </div>

              {/* Floating badge top */}
              <div className="absolute -top-3 -right-3 rounded-xl glass-card px-4 py-2.5 shadow-glow-purple">
                <p className="text-[11px] text-slate-500 dark:text-slate-400 uppercase tracking-wider">This month</p>
                <p className="text-sm font-semibold text-neon-purple">4 systems deployed</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
