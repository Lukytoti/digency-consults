"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { projects } from "@/data/projects";

export function ProjectShowcase() {
  const featured = projects.filter((p) => p.featured).slice(0, 3);

  return (
    <section className="py-16 md:py-20">
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-electric">
              Recent work
            </p>
            <h2 className="mt-3 font-display text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
              Systems Currently in Production
            </h2>
            <p className="mt-3 text-slate-600 dark:text-slate-300">
              Real infrastructure — not mockups. Every system shown here is
              actively generating revenue for the client.
            </p>
          </div>
          <Link
            href="/portfolio"
            className="btn-outline self-start md:self-auto text-sm"
          >
            View all projects <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-4 md:gap-5">
          {featured.map((project, i) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative rounded-2xl border border-slate-200/60 dark:border-white/8 bg-white dark:bg-navy-950/40 overflow-hidden hover:border-electric/30 dark:hover:border-electric/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-glow/20"
            >
              {/* Project image */}
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <span className="absolute top-3 left-3 inline-flex items-center rounded-full bg-black/60 backdrop-blur-sm px-2.5 py-1 text-[11px] font-medium text-white">
                  {project.category}
                </span>
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="font-display text-base font-semibold text-slate-900 dark:text-white leading-snug">
                  {project.title}
                </h3>

                {/* Metrics row */}
                <div className="mt-3 flex gap-3">
                  {project.metrics.slice(0, 2).map((m) => (
                    <div key={m.label} className="flex-1">
                      <p className="text-lg font-display font-bold text-electric">
                        {m.value}
                      </p>
                      <p className="text-[11px] uppercase tracking-wider text-slate-500 dark:text-slate-400">
                        {m.label}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Tools */}
                <div className="mt-3 flex flex-wrap gap-1">
                  {project.tools.slice(0, 3).map((t) => (
                    <span
                      key={t}
                      className="inline-flex rounded-full bg-slate-100 dark:bg-white/5 px-2 py-0.5 text-[11px] text-slate-600 dark:text-slate-400"
                    >
                      {t}
                    </span>
                  ))}
                  {project.tools.length > 3 && (
                    <span className="inline-flex rounded-full bg-slate-100 dark:bg-white/5 px-2 py-0.5 text-[11px] text-slate-600 dark:text-slate-400">
                      +{project.tools.length - 3}
                    </span>
                  )}
                </div>

                <Link
                  href="/case-studies"
                  className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-electric"
                >
                  View Case Study
                  <ArrowUpRight className="h-3.5 w-3.5 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
