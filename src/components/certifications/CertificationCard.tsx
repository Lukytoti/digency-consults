"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Eye, Award, Calendar, Building2 } from "lucide-react";
import { useState } from "react";
import type { Certification } from "@/data/certifications";

interface CertificationCardProps {
  certification: Certification;
  index: number;
  onSelect: (certification: Certification) => void;
}

export function CertificationCard({
  certification,
  index,
  onSelect,
}: CertificationCardProps) {
  const [imgError, setImgError] = useState(false);

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      className="group relative overflow-hidden rounded-2xl glass-card cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-glow"
      onClick={() => onSelect(certification)}
    >
      {/* Thumbnail */}
      <div className="relative aspect-[16/11] overflow-hidden">
        {imgError ? (
          <div className="absolute inset-0 bg-gradient-to-br from-electric/20 via-neon-purple/20 to-navy-900/60 flex flex-col items-center justify-center p-4 text-center">
            <Award className="h-10 w-10 text-electric mb-3" />
            <p className="font-display text-sm font-semibold text-slate-900 dark:text-white line-clamp-2">
              {certification.name}
            </p>
            <p className="mt-1 text-xs text-slate-600 dark:text-slate-400">
              {certification.issuer}
            </p>
          </div>
        ) : (
          <Image
            src={certification.thumbnail}
            alt={`${certification.name} certificate`}
            fill
            sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover transition duration-500 group-hover:scale-105"
            quality={90}
            loading="lazy"
            onError={() => setImgError(true)}
          />
        )}

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-300 flex items-center justify-center">
          <div className="opacity-0 group-hover:opacity-100 transform scale-90 group-hover:scale-100 transition-all duration-300 flex gap-3">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white/90 backdrop-blur px-4 py-2 text-sm font-semibold text-slate-900">
              <Eye className="h-4 w-4" /> View Certificate
            </span>
          </div>
        </div>

        {/* Category badge */}
        <span className="absolute top-3 left-3 inline-flex items-center rounded-full bg-black/50 backdrop-blur px-3 py-1 text-xs text-white font-medium">
          {certification.category}
        </span>

        {/* Featured badge */}
        {certification.featured && (
          <span className="absolute top-3 right-3 inline-flex items-center rounded-full bg-electric/90 backdrop-blur px-2.5 py-1 text-xs text-white font-medium">
            Featured
          </span>
        )}
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="font-display text-lg font-semibold text-slate-900 dark:text-white group-hover:text-electric transition-colors line-clamp-1">
          {certification.name}
        </h3>

        <div className="mt-2 flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
          <Building2 className="h-3.5 w-3.5 flex-shrink-0" />
          <span className="line-clamp-1">{certification.issuer}</span>
        </div>

        <div className="mt-1.5 flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
          <Calendar className="h-3.5 w-3.5 flex-shrink-0" />
          <span>{certification.date}</span>
        </div>

        {certification.credentialId && (
          <p className="mt-2 text-xs text-slate-500 dark:text-slate-500 font-mono">
            ID: {certification.credentialId}
          </p>
        )}

        <div className="mt-3 flex items-center justify-between">
          <span className="inline-flex items-center rounded-full bg-electric/10 dark:bg-electric/20 px-2.5 py-0.5 text-xs font-medium text-electric">
            {certification.type === "pdf" ? "PDF" : "Image"}
          </span>
          <span className="text-xs text-electric font-medium opacity-0 group-hover:opacity-100 transition-opacity">
            View Details &rarr;
          </span>
        </div>
      </div>
    </motion.article>
  );
}
