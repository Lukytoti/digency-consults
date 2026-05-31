"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { projects, type ProjectCategory } from "@/data/projects";
import { GalleryFilter, GalleryGrid, ProjectModal } from "@/components/gallery";
import { CTASection } from "@/components/sections/CTASection";
import type { Project } from "@/data/projects";

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = useMemo(() => {
    if (activeCategory === "All") return projects;
    return projects.filter((p) => p.category === activeCategory);
  }, [activeCategory]);

  const featuredProjects = projects.filter((p) => p.featured);

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden pt-32 pb-12">
        <div className="glow-orb h-[400px] w-[400px] -left-32 top-0 bg-electric" />
        <div className="glow-orb h-[400px] w-[400px] -right-32 top-32 bg-neon-purple" />
        <div className="absolute inset-0 grid-bg opacity-40" />

        <div className="container relative max-w-4xl text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="eyebrow mx-auto"
          >
            Portfolio
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-4 font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-balance text-slate-900 dark:text-white"
          >
            Real <span className="gradient-text">systems</span> in production
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-5 text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto"
          >
            Every project below is a real engagement — the problem, the system I
            built, the tools used, and the measurable result. Click any card to
            explore the full details.
          </motion.p>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 flex flex-wrap justify-center gap-6 sm:gap-8 md:gap-12"
          >
            {[
              { value: `${projects.length}+`, label: "Projects Shipped" },
              { value: "20+", label: "Happy Clients" },
              { value: "100%", label: "Delivered On Time" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
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
      </section>

      {/* Featured highlight */}
      <section className="pb-8">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h2 className="font-display text-xl font-semibold text-slate-900 dark:text-white mb-6">
              ⭐ Featured Projects
            </h2>
            <GalleryGrid
              projects={featuredProjects}
              onSelect={setSelectedProject}
            />
          </motion.div>
        </div>
      </section>

      {/* Divider */}
      <div className="container">
        <div className="border-t border-slate-200 dark:border-white/10 my-8" />
      </div>

      {/* Full gallery */}
      <section className="pb-20">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8"
          >
            <h2 className="font-display text-xl font-semibold text-slate-900 dark:text-white">
              All Projects
            </h2>
            <GalleryFilter active={activeCategory} onChange={setActiveCategory} />
          </motion.div>

          <GalleryGrid
            projects={filteredProjects}
            onSelect={setSelectedProject}
          />

          {filteredProjects.length === 0 && (
            <div className="text-center py-16">
              <p className="text-slate-500 dark:text-slate-400">
                No projects in this category yet. Check back soon!
              </p>
            </div>
          )}
        </div>
      </section>

      <CTASection />

      {/* Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </>
  );
}
