"use client";

import { motion } from "framer-motion";
import { Award, Brain, Megaphone, Code2, TrendingUp } from "lucide-react";
import {
  certificationCategories,
  type CertificationCategory,
} from "@/data/certifications";

type FilterOption = CertificationCategory | "All";

const filterIcons: Record<FilterOption, typeof Award> = {
  All: Award,
  "AI & Automation": Brain,
  "CRM & Marketing": Megaphone,
  "Technical Skills": Code2,
  "Professional Development": TrendingUp,
};

interface CertificationFilterProps {
  active: FilterOption;
  onChange: (category: FilterOption) => void;
  counts?: Record<string, number>;
}

export function CertificationFilter({
  active,
  onChange,
  counts,
}: CertificationFilterProps) {
  const options: FilterOption[] = ["All", ...certificationCategories];

  return (
    <div className="overflow-x-auto -mx-4 px-4 sm:mx-0 sm:px-0 scrollbar-hide">
      <div className="flex gap-2 min-w-max sm:min-w-0 sm:flex-wrap">
        {options.map((cat) => {
          const Icon = filterIcons[cat];
          const isActive = active === cat;
          const count = counts?.[cat];

          return (
            <button
              key={cat}
              onClick={() => onChange(cat)}
              className="relative rounded-full px-4 py-2 text-sm font-medium transition-colors duration-200 min-h-[40px] whitespace-nowrap flex items-center gap-1.5"
            >
              {isActive && (
                <motion.span
                  layoutId="cert-filter-active"
                  className="absolute inset-0 rounded-full bg-electric/10 dark:bg-electric/20 border border-electric/30"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
                />
              )}
              <Icon
                className={`relative z-10 h-3.5 w-3.5 ${
                  isActive
                    ? "text-electric"
                    : "text-slate-400 dark:text-slate-500"
                }`}
              />
              <span
                className={`relative z-10 ${
                  isActive
                    ? "text-electric font-semibold"
                    : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                }`}
              >
                {cat}
              </span>
              {count !== undefined && (
                <span
                  className={`relative z-10 text-[11px] font-semibold rounded-full px-1.5 py-0.5 min-w-[20px] text-center ${
                    isActive
                      ? "bg-electric/20 text-electric"
                      : "bg-slate-100 dark:bg-white/[0.06] text-slate-500 dark:text-slate-400"
                  }`}
                >
                  {count}
                </span>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}
