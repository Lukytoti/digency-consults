"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowLeft, ArrowRight, ExternalLink } from "lucide-react";
import { useState, useEffect, useCallback } from "react";
import type { Project } from "@/data/projects";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  const [currentScreenshot, setCurrentScreenshot] = useState(0);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (!project) return;
      if (e.key === "ArrowLeft") {
        setCurrentScreenshot((prev) =>
          prev === 0 ? project.screenshots.length - 1 : prev - 1
        );
      }
      if (e.key === "ArrowRight") {
        setCurrentScreenshot((prev) =>
          prev === project.screenshots.length - 1 ? 0 : prev + 1
        );
      }
    },
    [project, onClose]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    if (project) document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [handleKeyDown, project]);

  useEffect(() => {
    setCurrentScreenshot(0);
  }, [project]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8"
          onClick={onClose}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />

          {/* Modal content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
            className="relative w-full max-w-5xl max-h-[90vh] overflow-y-auto rounded-3xl bg-white dark:bg-navy-900 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 rounded-full bg-black/50 backdrop-blur p-2 text-white hover:bg-black/70 transition-colors"
              aria-label="Close modal"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Screenshot carousel */}
            <div className="relative aspect-[16/9] overflow-hidden rounded-t-3xl bg-slate-900">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentScreenshot}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0"
                >
                  <Image
                    src={project.screenshots[currentScreenshot]}
                    alt={`${project.title} screenshot ${currentScreenshot + 1}`}
                    fill
                    sizes="(min-width: 1024px) 80vw, 95vw"
                    className="object-cover object-top"
                    quality={90}
                  />
                </motion.div>
              </AnimatePresence>

              {/* Navigation arrows */}
              {project.screenshots.length > 1 && (
                <>
                  <button
                    onClick={() =>
                      setCurrentScreenshot((prev) =>
                        prev === 0 ? project.screenshots.length - 1 : prev - 1
                      )
                    }
                    className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-black/50 backdrop-blur p-2 text-white hover:bg-black/70 transition-colors"
                    aria-label="Previous screenshot"
                  >
                    <ArrowLeft className="h-5 w-5" />
                  </button>
                  <button
                    onClick={() =>
                      setCurrentScreenshot((prev) =>
                        prev === project.screenshots.length - 1 ? 0 : prev + 1
                      )
                    }
                    className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-black/50 backdrop-blur p-2 text-white hover:bg-black/70 transition-colors"
                    aria-label="Next screenshot"
                  >
                    <ArrowRight className="h-5 w-5" />
                  </button>

                  {/* Dots */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                    {project.screenshots.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setCurrentScreenshot(i)}
                        className={`h-2 rounded-full transition-all duration-300 ${
                          i === currentScreenshot
                            ? "w-6 bg-white"
                            : "w-2 bg-white/50 hover:bg-white/70"
                        }`}
                        aria-label={`Go to screenshot ${i + 1}`}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>

            {/* Project details */}
            <div className="p-6 md:p-8">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <span className="inline-flex items-center rounded-full bg-electric/10 dark:bg-electric/20 px-3 py-1 text-xs font-semibold text-electric">
                    {project.category}
                  </span>
                  <h2 className="mt-3 font-display text-2xl md:text-3xl font-bold text-slate-900 dark:text-white">
                    {project.title}
                  </h2>
                </div>
                {project.liveUrl && (
                  <Link
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-outline text-sm"
                  >
                    <ExternalLink className="h-4 w-4" /> Visit Live
                  </Link>
                )}
              </div>

              {/* Metrics bar */}
              <div className="mt-6 grid grid-cols-2 md:grid-cols-3 gap-4">
                {project.metrics.map((metric) => (
                  <div
                    key={metric.label}
                    className="rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 p-4"
                  >
                    <p className="text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400">
                      {metric.label}
                    </p>
                    <p className="mt-1 font-display text-xl font-bold text-slate-900 dark:text-white">
                      {metric.value}
                    </p>
                  </div>
                ))}
              </div>

              {/* Problem / Solution */}
              <div className="mt-6 grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                    Problem
                  </h4>
                  <p className="mt-2 text-slate-700 dark:text-slate-300">
                    {project.problem}
                  </p>
                </div>
                <div>
                  <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                    Solution
                  </h4>
                  <p className="mt-2 text-slate-700 dark:text-slate-300">
                    {project.solution}
                  </p>
                </div>
              </div>

              {/* Tools */}
              <div className="mt-6">
                <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                  Tools & Technologies
                </h4>
                <div className="mt-3 flex flex-wrap gap-2">
                  {project.tools.map((tool) => (
                    <span
                      key={tool}
                      className="inline-flex items-center rounded-full bg-slate-100 dark:bg-white/10 px-3 py-1.5 text-sm text-slate-700 dark:text-slate-300 font-medium"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              {/* Result */}
              <div className="mt-6 rounded-xl bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800/50 p-4">
                <h4 className="text-sm font-semibold uppercase tracking-wider text-emerald-700 dark:text-emerald-400">
                  Result
                </h4>
                <p className="mt-2 text-emerald-800 dark:text-emerald-300 font-medium">
                  {project.result}
                </p>
              </div>

              {/* Tags */}
              <div className="mt-6 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center rounded-md bg-slate-100 dark:bg-white/5 px-2 py-1 text-xs text-slate-500 dark:text-slate-400"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
