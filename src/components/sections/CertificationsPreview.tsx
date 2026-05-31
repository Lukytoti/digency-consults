"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Award, Building2, Calendar } from "lucide-react";
import { certifications } from "@/data/certifications";
import { useState } from "react";

function CertPreviewCard({
  cert,
  index,
}: {
  cert: (typeof certifications)[number];
  index: number;
}) {
  const [imgError, setImgError] = useState(false);

  return (
    <motion.div
      key={cert.id}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="group relative overflow-hidden rounded-2xl glass-card transition-all duration-300 hover:-translate-y-1 hover:shadow-glow">
        {/* Thumbnail */}
        <div className="relative aspect-[16/11] overflow-hidden">
          {imgError ? (
            <div className="absolute inset-0 bg-gradient-to-br from-electric/20 via-neon-purple/20 to-navy-900/60 flex flex-col items-center justify-center p-4 text-center">
              <Award className="h-10 w-10 text-electric mb-3" />
              <p className="font-display text-sm font-semibold text-slate-900 dark:text-white line-clamp-2">
                {cert.name}
              </p>
              <p className="mt-1 text-xs text-slate-600 dark:text-slate-400">
                {cert.issuer}
              </p>
            </div>
          ) : (
            <Image
              src={cert.thumbnail}
              alt={`${cert.name} certificate`}
              fill
              sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
              className="object-cover transition duration-500 group-hover:scale-105"
              quality={90}
              loading="lazy"
              onError={() => setImgError(true)}
            />
          )}

          {/* Category badge */}
          <span className="absolute top-3 left-3 inline-flex items-center rounded-full bg-black/50 backdrop-blur px-3 py-1 text-xs text-white font-medium">
            {cert.category}
          </span>
        </div>

        {/* Content */}
        <div className="p-5">
          <h3 className="font-display text-base font-semibold text-slate-900 dark:text-white group-hover:text-electric transition-colors line-clamp-1">
            {cert.name}
          </h3>
          <div className="mt-2 flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
            <Building2 className="h-3.5 w-3.5 flex-shrink-0" />
            <span className="line-clamp-1">{cert.issuer}</span>
          </div>
          <div className="mt-1.5 flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
            <Calendar className="h-3.5 w-3.5 flex-shrink-0" />
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
            <p className="eyebrow">Credentials</p>
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
