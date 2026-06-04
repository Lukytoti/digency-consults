"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Award,
  Building2,
  Calendar,
  Brain,
  Megaphone,
  Code2,
  TrendingUp,
  FileText,
  Sparkles,
} from "lucide-react";
import { certifications, categoryStyles } from "@/data/certifications";
import { useState } from "react";

const categoryIcons = {
  brain: Brain,
  megaphone: Megaphone,
  code: Code2,
  "trending-up": TrendingUp,
};

function CertPreviewCard({
  cert,
  index,
}: {
  cert: (typeof certifications)[number];
  index: number;
}) {
  const [imgError, setImgError] = useState(false);
  const style = categoryStyles[cert.category];
  const CategoryIcon =
    categoryIcons[style.icon as keyof typeof categoryIcons] || Award;

  const hasRealImage =
    cert.type === "image" && cert.thumbnail && !imgError;

  return (
    <motion.div
      key={cert.id}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="group relative overflow-hidden rounded-2xl border border-slate-200/60 dark:border-white/[0.06] bg-white dark:bg-navy-900/80 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/[0.06] dark:hover:shadow-black/[0.2]">
        {/* Thumbnail */}
        <div className="relative aspect-[4/3] overflow-hidden">
          {hasRealImage ? (
            <Image
              src={cert.thumbnail}
              alt={`${cert.name} certificate`}
              fill
              sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
              className="object-cover transition duration-500 group-hover:scale-105"
              quality={85}
              loading="lazy"
              onError={() => setImgError(true)}
            />
          ) : (
            <div
              className={`absolute inset-0 bg-gradient-to-br ${style.gradient} flex flex-col items-center justify-center p-5 text-center`}
            >
              <div className="absolute inset-0 opacity-10">
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage:
                      "radial-gradient(circle at 20% 30%, rgba(255,255,255,0.3) 0%, transparent 50%), radial-gradient(circle at 80% 70%, rgba(255,255,255,0.2) 0%, transparent 40%)",
                  }}
                />
                <div className="absolute top-4 right-4 opacity-20">
                  <Sparkles className="h-16 w-16 text-white" />
                </div>
              </div>
              <div className="relative mb-3 rounded-2xl bg-white/15 backdrop-blur-sm p-3 shadow-lg">
                <CategoryIcon className="h-6 w-6 text-white" />
              </div>
              <p className="relative font-display text-sm font-bold text-white leading-tight line-clamp-2 max-w-[85%]">
                {cert.shortName}
              </p>
              <p className="relative mt-1.5 text-[11px] text-white/70 font-medium">
                {cert.issuer}
              </p>
              {cert.type === "pdf" && (
                <div className="relative mt-2.5 inline-flex items-center gap-1 rounded-full bg-white/15 backdrop-blur-sm px-2.5 py-1">
                  <FileText className="h-3 w-3 text-white/80" />
                  <span className="text-[10px] font-semibold text-white/80 uppercase tracking-wider">
                    PDF
                  </span>
                </div>
              )}
            </div>
          )}

          {/* Category badge */}
          <span
            className="absolute top-3 left-3 inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-[11px] font-semibold text-white backdrop-blur-sm"
            style={{ backgroundColor: `${style.accent}cc` }}
          >
            <CategoryIcon className="h-3 w-3" />
            {cert.category}
          </span>
        </div>

        {/* Content */}
        <div className="p-4">
          <h3 className="font-display text-[15px] font-semibold text-slate-900 dark:text-white group-hover:text-electric transition-colors line-clamp-1">
            {cert.name}
          </h3>
          <div className="mt-2 flex items-center gap-2 text-[13px] text-slate-600 dark:text-slate-400">
            <Building2 className="h-3.5 w-3.5 flex-shrink-0 text-slate-400 dark:text-slate-500" />
            <span className="line-clamp-1">{cert.issuer}</span>
          </div>
          <div className="mt-1.5 flex items-center gap-2 text-[13px] text-slate-600 dark:text-slate-400">
            <Calendar className="h-3.5 w-3.5 flex-shrink-0 text-slate-400 dark:text-slate-500" />
            <span>{cert.date}</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export function CertificationsPreview() {
  const featured = certifications.filter((c) => c.featured).slice(0, 3);

  return (
    <section className="section relative">
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div className="max-w-2xl">
            <p className="eyebrow">
              <Award className="h-3.5 w-3.5" /> Credentials
            </p>
            <h2 className="mt-4 section-title text-slate-900 dark:text-white text-balance">
              Professional{" "}
              <span className="gradient-text">Certifications</span>
            </h2>
            <p className="mt-4 text-slate-600 dark:text-slate-300">
              Industry-recognized certifications in AI, CRM and automation
              platforms. Continuous learning that translates to production-grade
              results.
            </p>
          </div>
          <Link
            href="/about#certifications"
            className="btn-outline self-start md:self-auto"
          >
            View All Certifications <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((cert, index) => (
            <CertPreviewCard key={cert.id} cert={cert} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
