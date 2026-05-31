"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { projects } from "@/data/projects";

export function FeaturedProjects() {
  const featured = projects.filter((p) => p.featured).slice(0, 4);

  return (
    <section className="section relative">
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div className="max-w-2xl">
            <p className="eyebrow">Featured projects</p>
            <h2 className="mt-4 section-title text-slate-900 dark:text-white text-balance">
              Real systems. Real revenue. Real results.
            </h2>
            <p className="mt-4 text-slate-600 dark:text-slate-300">
              A snapshot of recent CRM, AI and automation systems I&apos;ve built.
              Every project ships with measurable outcomes — not just a pretty
              dashboard.
            </p>
          </div>
          <Link href="/portfolio" className="btn-outline self-start md:self-auto">
            View all projects <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featured.map((project, index) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link
                href={`/portfolio/${project.slug}`}
                className="group relative overflow-hidden rounded-2xl glass-card block transition-all duration-300 hover:-translate-y-1 hover:shadow-glow"
              >
                {/* Image */}
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover object-top transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                    <span className="opacity-0 group-hover:opacity-100 transform scale-90 group-hover:scale-100 transition-all duration-300 inline-flex items-center gap-1.5 rounded-full bg-white/90 backdrop-blur px-3 py-1.5 text-xs font-semibold text-slate-900">
                      View Details <ArrowUpRight className="h-3.5 w-3.5" />
                    </span>
                  </div>
                  <span className="absolute top-3 left-3 inline-flex items-center rounded-full bg-black/50 backdrop-blur px-2.5 py-1 text-[10px] text-white font-medium">
                    {project.category}
                  </span>
                </div>

                {/* Content */}
                <div className="p-4">
                  <h3 className="font-display text-sm font-semibold text-slate-900 dark:text-white group-hover:text-electric transition-colors line-clamp-1">
                    {project.title}
                  </h3>
                  <p className="mt-1.5 text-xs text-emerald-600 dark:text-emerald-400 font-medium line-clamp-1">
                    {project.metrics[0]?.label}: {project.metrics[0]?.value}
                  </p>
                  <div className="mt-2 flex flex-wrap gap-1">
                    {project.tools.slice(0, 3).map((tool) => (
                      <span
                        key={tool}
                        className="inline-flex items-center rounded-full bg-slate-100 dark:bg-white/5 px-2 py-0.5 text-[10px] text-slate-500 dark:text-slate-400"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
