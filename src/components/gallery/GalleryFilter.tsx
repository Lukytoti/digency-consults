"use client";

import { motion } from "framer-motion";
import { projectCategories, type ProjectCategory } from "@/data/projects";

interface GalleryFilterProps {
  active: ProjectCategory;
  onChange: (category: ProjectCategory) => void;
}

export function GalleryFilter({ active, onChange }: GalleryFilterProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {projectCategories.map((cat) => (
        <button
          key={cat}
          onClick={() => onChange(cat)}
          className="relative rounded-full px-4 py-2 text-sm font-medium transition-colors duration-200"
        >
          {active === cat && (
            <motion.span
              layoutId="gallery-filter-active"
              className="absolute inset-0 rounded-full bg-electric/10 dark:bg-electric/20 border border-electric/30"
              transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
            />
          )}
          <span
            className={`relative z-10 ${
              active === cat
                ? "text-electric font-semibold"
                : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
            }`}
          >
            {cat}
          </span>
        </button>
      ))}
    </div>
  );
}
