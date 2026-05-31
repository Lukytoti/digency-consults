"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Sparkles, Star, Zap } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { siteConfig } from "@/lib/site-config";

const showcaseProjects = [
  {
    title: "Premium Website Design",
    category: "Web Design",
    image: "/projects/website1.png",
  },
  {
    title: "Sales Funnel & Landing Page",
    category: "Funnel Design",
    image: "/projects/website15.png",
  },
  {
    title: "GHL Workflow Automation",
    category: "CRM Automation",
    image: "/projects/ghl-workflow.png",
  },
  {
    title: "Modern Business Website",
    category: "Web Design",
    image: "/projects/website10.png",
  },
  {
    title: "A2P Compliance Dashboard",
    category: "CRM Setup",
    image: "/projects/a2p-3.png",
  },
];

export function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % showcaseProjects.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative overflow-hidden pt-28 md:pt-36 pb-16 md:pb-24">
      {/* Background orbs */}
      <div className="glow-orb h-[500px] w-[500px] -left-40 top-0 bg-electric" />
      <div className="glow-orb h-[500px] w-[500px] -right-40 top-32 bg-neon-purple" />
      <div className="absolute inset-0 grid-bg opacity-40" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white dark:to-navy-950" />

      <div className="container relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Text content */}
          <div className="max-w-2xl">
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
              className="mt-6 font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-balance text-slate-900 dark:text-white"
            >
              I Build Systems That{" "}
              <span className="gradient-text">Capture, Nurture &amp; Convert</span>{" "}
              Leads Automatically
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-5 text-base md:text-lg text-slate-600 dark:text-slate-300"
            >
              Websites, funnels, CRM automations and AI agents — built with
              GoHighLevel, n8n, OpenAI and WhatsApp so your business runs on
              autopilot.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="mt-8 flex flex-col sm:flex-row gap-3"
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
                <Zap className="h-4 w-4" /> View My Work
              </Link>
            </motion.div>

            {/* Social proof */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-4 text-sm text-slate-600 dark:text-slate-400"
            >
              <div className="flex items-center gap-1 text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <span className="text-slate-700 dark:text-slate-300">
                Trusted by 20+ founders, agencies &amp; operators
              </span>
            </motion.div>

            {/* Quick stats */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="mt-8 grid grid-cols-3 gap-4"
            >
              {[
                { value: "<60s", label: "Lead Response" },
                { value: "42x", label: "Email ROI" },
                { value: "+220%", label: "Booked Calls" },
              ].map((stat) => (
                <div key={stat.label} className="text-center sm:text-left">
                  <p className="font-display text-2xl md:text-3xl font-bold gradient-text">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                    {stat.label}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right: Project showcase browser mockup */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="relative rounded-2xl glass-card p-1.5 shadow-glow overflow-hidden">
              {/* Browser chrome */}
              <div className="flex items-center gap-2 px-4 py-2.5 border-b border-slate-200/60 dark:border-white/10">
                <div className="flex gap-1.5">
                  <span className="h-3 w-3 rounded-full bg-red-400" />
                  <span className="h-3 w-3 rounded-full bg-amber-400" />
                  <span className="h-3 w-3 rounded-full bg-emerald-400" />
                </div>
                <div className="flex-1 mx-4">
                  <div className="h-5 rounded-md bg-slate-100 dark:bg-white/5 flex items-center justify-center">
                    <span className="text-[10px] text-slate-400 dark:text-slate-500 font-mono">
                      digencyconsults.com/portfolio
                    </span>
                  </div>
                </div>
              </div>

              {/* Screenshot carousel */}
              <div className="relative aspect-[16/10] overflow-hidden bg-slate-900">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentIndex}
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.5 }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={showcaseProjects[currentIndex].image}
                      alt={showcaseProjects[currentIndex].title}
                      fill
                      sizes="(min-width: 1024px) 50vw, 100vw"
                      className="object-cover object-top"
                      priority={currentIndex === 0}
                      quality={100}
                    />
                  </motion.div>
                </AnimatePresence>

                {/* Overlay info */}
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentIndex}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                    >
                      <span className="inline-flex items-center rounded-full bg-white/10 backdrop-blur px-2.5 py-0.5 text-[10px] text-white/80 font-medium">
                        {showcaseProjects[currentIndex].category}
                      </span>
                      <p className="mt-1 text-sm font-semibold text-white">
                        {showcaseProjects[currentIndex].title}
                      </p>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>

              {/* Progress indicators */}
              <div className="flex gap-1.5 px-4 py-2.5">
                {showcaseProjects.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentIndex(i)}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      i === currentIndex
                        ? "w-8 bg-electric"
                        : "w-4 bg-slate-300 dark:bg-white/20 hover:bg-slate-400 dark:hover:bg-white/30"
                    }`}
                    aria-label={`View project ${i + 1}`}
                  />
                ))}
              </div>
            </div>

            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="absolute -bottom-4 -left-4 hidden md:block"
            >
              <div className="rounded-2xl glass-card px-4 py-3 text-xs shadow-lg">
                <p className="text-slate-500 dark:text-slate-400">Live now</p>
                <p className="font-semibold text-emerald-500">
                  3 AI agents qualifying leads
                </p>
              </div>
            </motion.div>

            {/* Floating metric */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="absolute -top-3 -right-3 hidden md:block animate-float"
            >
              <div className="rounded-2xl glass-card px-4 py-3 text-xs shadow-lg">
                <p className="text-slate-500 dark:text-slate-400">This month</p>
                <p className="font-semibold text-electric">
                  15+ projects delivered
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
