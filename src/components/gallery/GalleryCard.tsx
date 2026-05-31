"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Eye, ArrowUpRight } from "lucide-react";
import type { Project } from "@/data/projects";

interface GalleryCardProps {
  project: Project;
  index: number;
  onSelect: (project: Project) => void;
}

export function GalleryCard({ project, index, onSelect }: GalleryCardProps) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20, scale: 0.95 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="group relative overflow-hidden rounded-2xl glass-card cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-glow"
      onClick={() => onSelect(project)}
    >
      {/* Image */}
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover object-top transition duration-500 group-hover:scale-105"
          quality={100}
        />

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-300 flex items-center justify-center">
          <div className="opacity-0 group-hover:opacity-100 transform scale-90 group-hover:scale-100 transition-all duration-300 flex gap-3">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white/90 backdrop-blur px-4 py-2 text-sm font-semibold text-slate-900">
              <Eye className="h-4 w-4" /> View Project
            </span>
          </div>
        </div>

        {/* Category badge */}
        <span className="absolute top-3 left-3 inline-flex items-center rounded-full bg-black/50 backdrop-blur px-3 py-1 text-xs text-white font-medium">
          {project.category}
        </span>

        {/* Featured badge */}
        {project.featured && (
          <span className="absolute top-3 right-3 inline-flex items-center rounded-full bg-electric/90 backdrop-blur px-2.5 py-1 text-xs text-white font-medium">
            Featured
          </span>
        )}
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="font-display text-lg font-semibold text-slate-900 dark:text-white group-hover:text-electric transition-colors">
          {project.title}
        </h3>

        <p className="mt-2 text-sm text-slate-600 dark:text-slate-400 line-clamp-2">
          {project.solution}
        </p>

        {/* Tools */}
        <div className="mt-3 flex flex-wrap gap-1.5">
          {project.tools.slice(0, 4).map((tool) => (
            <span
              key={tool}
              className="inline-flex items-center rounded-full bg-slate-100 dark:bg-white/5 px-2.5 py-0.5 text-xs text-slate-600 dark:text-slate-400"
            >
              {tool}
            </span>
          ))}
          {project.tools.length > 4 && (
            <span className="inline-flex items-center rounded-full bg-slate-100 dark:bg-white/5 px-2.5 py-0.5 text-xs text-slate-500 dark:text-slate-400">
              +{project.tools.length - 4}
            </span>
          )}
        </div>

        {/* Result highlight */}
        <div className="mt-4 flex items-center justify-between">
          <p className="text-sm font-semibold text-emerald-600 dark:text-emerald-400 line-clamp-1">
            {project.metrics[0]?.label}: {project.metrics[0]?.value}
          </p>
          <ArrowUpRight className="h-4 w-4 text-slate-400 group-hover:text-electric transition-colors" />
        </div>
      </div>
    </motion.article>
  );
}
