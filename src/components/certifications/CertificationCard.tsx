"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Eye,
  Award,
  Calendar,
  Building2,
  Brain,
  Megaphone,
  Code2,
  TrendingUp,
  FileText,
  Sparkles,
} from "lucide-react";
import { useState } from "react";
import type { Certification } from "@/data/certifications";
import { categoryStyles } from "@/data/certifications";

interface CertificationCardProps {
  certification: Certification;
  index: number;
  onSelect: (certification: Certification) => void;
}

// Map category icon strings to components
const categoryIcons = {
  brain: Brain,
  megaphone: Megaphone,
  code: Code2,
  "trending-up": TrendingUp,
};

export function CertificationCard({
  certification,
  index,
  onSelect,
}: CertificationCardProps) {
  const [imgError, setImgError] = useState(false);
  const style = categoryStyles[certification.category];
  const CategoryIcon =
    categoryIcons[style.icon as keyof typeof categoryIcons] || Award;

  const hasRealThumbnail =
    certification.type === "image" && certification.thumbnail && !imgError;

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4, delay: index * 0.06 }}
      className="group relative overflow-hidden rounded-2xl border border-slate-200/60 dark:border-white/[0.06] bg-white dark:bg-navy-900/80 cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/[0.06] dark:hover:shadow-black/[0.2] hover:border-slate-300/80 dark:hover:border-white/[0.12]"
      onClick={() => onSelect(certification)}
    >
      {/* Thumbnail Area — fixed aspect ratio for consistency */}
      <div className="relative aspect-[4/3] overflow-hidden">
        {hasRealThumbnail ? (
          /* Real certificate image */
          <Image
            src={certification.thumbnail}
            alt={`${certification.name} certificate`}
            fill
            sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            quality={85}
            loading="lazy"
            onError={() => setImgError(true)}
          />
        ) : (
          /* Custom premium preview card for PDFs / failed images */
          <div
            className={`absolute inset-0 bg-gradient-to-br ${style.gradient} flex flex-col items-center justify-center p-5 text-center`}
          >
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-10">
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage: `radial-gradient(circle at 20% 30%, rgba(255,255,255,0.3) 0%, transparent 50%), radial-gradient(circle at 80% 70%, rgba(255,255,255,0.2) 0%, transparent 40%)`,
                }}
              />
              <div className="absolute top-4 right-4 opacity-20">
                <Sparkles className="h-20 w-20 text-white" />
              </div>
            </div>

            {/* Certificate icon */}
            <div className="relative mb-3 rounded-2xl bg-white/15 backdrop-blur-sm p-3.5 shadow-lg">
              <CategoryIcon className="h-7 w-7 text-white" />
            </div>

            {/* Certificate title */}
            <p className="relative font-display text-sm font-bold text-white leading-tight line-clamp-2 max-w-[85%]">
              {certification.shortName}
            </p>

            {/* Issuer */}
            <p className="relative mt-1.5 text-[11px] text-white/70 font-medium">
              {certification.issuer}
            </p>

            {/* PDF badge */}
            {certification.type === "pdf" && (
              <div className="relative mt-3 inline-flex items-center gap-1 rounded-full bg-white/15 backdrop-blur-sm px-2.5 py-1">
                <FileText className="h-3 w-3 text-white/80" />
                <span className="text-[10px] font-semibold text-white/80 uppercase tracking-wider">
                  PDF Certificate
                </span>
              </div>
            )}
          </div>
        )}

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
          <div className="opacity-0 group-hover:opacity-100 scale-90 group-hover:scale-100 transition-all duration-300">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white/95 backdrop-blur px-4 py-2 text-sm font-semibold text-slate-900 shadow-lg">
              <Eye className="h-4 w-4" /> View Certificate
            </span>
          </div>
        </div>

        {/* Category badge */}
        <span
          className="absolute top-3 left-3 inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-[11px] font-semibold text-white backdrop-blur-sm"
          style={{ backgroundColor: `${style.accent}cc` }}
        >
          <CategoryIcon className="h-3 w-3" />
          {certification.category}
        </span>

        {/* Featured badge */}
        {certification.featured && (
          <span className="absolute top-3 right-3 inline-flex items-center gap-1 rounded-full bg-amber-500/90 backdrop-blur-sm px-2 py-1 text-[10px] font-bold text-white uppercase tracking-wider">
            <Award className="h-3 w-3" />
            Featured
          </span>
        )}
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="font-display text-[15px] font-semibold text-slate-900 dark:text-white group-hover:text-electric transition-colors line-clamp-1 leading-snug">
          {certification.name}
        </h3>

        <div className="mt-2.5 flex items-center gap-2 text-[13px] text-slate-600 dark:text-slate-400">
          <Building2 className="h-3.5 w-3.5 flex-shrink-0 text-slate-400 dark:text-slate-500" />
          <span className="line-clamp-1">{certification.issuer}</span>
        </div>

        <div className="mt-1.5 flex items-center gap-2 text-[13px] text-slate-600 dark:text-slate-400">
          <Calendar className="h-3.5 w-3.5 flex-shrink-0 text-slate-400 dark:text-slate-500" />
          <span>{certification.date}</span>
        </div>

        {certification.credentialId && (
          <p className="mt-2 text-[11px] text-slate-400 dark:text-slate-500 font-mono truncate">
            ID: {certification.credentialId}
          </p>
        )}

        {/* Footer */}
        <div className="mt-3 pt-3 border-t border-slate-100 dark:border-white/[0.06] flex items-center justify-between">
          <span
            className="inline-flex items-center gap-1 rounded-md px-2 py-0.5 text-[11px] font-medium"
            style={{
              backgroundColor: `${style.accent}15`,
              color: style.accent,
            }}
          >
            {certification.type === "pdf" ? (
              <>
                <FileText className="h-3 w-3" /> PDF
              </>
            ) : (
              <>
                <Award className="h-3 w-3" /> Image
              </>
            )}
          </span>
          <span className="text-[11px] text-electric font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            View Details →
          </span>
        </div>
      </div>
    </motion.article>
  );
}
