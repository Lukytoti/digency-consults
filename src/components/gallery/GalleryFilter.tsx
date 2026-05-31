"use client";

import { motion } from "framer-motion";
import { projectCategories, type ProjectCategory } from "@/data/projects";

interface GalleryFilterProps {
  active: ProjectCategory;
  onChange: (category: ProjectCategory) => void;
}

export function GalleryFilter({ active, onChange }: GalleryFilterProps) {
  return (
    <div className="overflow-x-auto -mx-4 px-4 sm:mx-0 sm:px-0 scrollbar-hide">
      <div className="flex gap-2 min-w-max sm:min-w-0 sm:flex-wrap">
        {projectCategories.map((cat) => (
          <button
            key={cat}
            onClick={() => onChange(cat)}
            className="relative rounded-full px-4 py-2 text-sm font-medium transition-colors duration-200 min-h-[44px] whitespace-nowrap"
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
    </div>
  );
}
