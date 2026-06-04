"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Service } from "@/data/services";
import { serviceIconMap } from "@/components/icons/ServiceIcons";

export function ServiceCard({ service }: { service: Service }) {
  const IconComponent = serviceIconMap[service.slug];

  return (
    <Link
      href={`/services#${service.slug}`}
      className="group relative block rounded-2xl border border-slate-200/60 dark:border-white/[0.06] bg-white dark:bg-navy-900/80 p-6 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-black/[0.06] dark:hover:shadow-black/[0.2] hover:border-slate-300/80 dark:hover:border-white/[0.12]"
    >
      {/* Hover glow effect */}
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none bg-gradient-to-br from-electric/[0.03] via-transparent to-neon-purple/[0.03]" />

      {/* Icon Container — consistent 48x48 with brand logo SVG */}
      <div className="relative inline-flex h-12 w-12 items-center justify-center rounded-xl transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg">
        {IconComponent ? (
          <IconComponent className="h-10 w-10" />
        ) : (
          <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-electric to-neon-purple" />
        )}
      </div>

      {/* Title */}
      <h3 className="mt-5 font-display text-lg font-semibold text-slate-900 dark:text-white group-hover:text-electric transition-colors duration-300 leading-tight">
        {service.title}
      </h3>

      {/* Description */}
      <p className="mt-2 text-sm text-slate-600 dark:text-slate-400 leading-relaxed line-clamp-2">
        {service.short}
      </p>

      {/* Feature list */}
      <ul className="mt-4 space-y-2">
        {service.features.slice(0, 3).map((f) => (
          <li
            key={f}
            className="flex items-start gap-2 text-[13px] text-slate-600 dark:text-slate-400"
          >
            <span className="mt-1.5 inline-block h-1 w-1 rounded-full bg-electric shrink-0" />
            <span className="leading-snug">{f}</span>
          </li>
        ))}
      </ul>

      {/* CTA */}
      <div className="mt-5 pt-4 border-t border-slate-100 dark:border-white/[0.06] flex items-center justify-between">
        <span className="text-sm font-semibold text-electric">
          Learn more
        </span>
        <span className="inline-flex h-7 w-7 items-center justify-center rounded-lg bg-electric/10 text-electric transition-all duration-300 group-hover:bg-electric group-hover:text-white group-hover:scale-110">
          <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-[1px] group-hover:-translate-y-[1px]" />
        </span>
      </div>
    </Link>
  );
}
