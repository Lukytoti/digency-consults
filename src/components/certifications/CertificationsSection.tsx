"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Award, Brain, Code2, Megaphone, TrendingUp } from "lucide-react";
import {
  certifications,
  type Certification,
  type CertificationCategory,
} from "@/data/certifications";
import { CertificationCard } from "./CertificationCard";
import { CertificationFilter } from "./CertificationFilter";
import { CertificationModal } from "./CertificationModal";

type FilterOption = CertificationCategory | "All";

const categoryIconMap: Record<CertificationCategory, typeof Brain> = {
  "AI & Automation": Brain,
  "CRM & Marketing": Megaphone,
  "Technical Skills": Code2,
  "Professional Development": TrendingUp,
};

export function CertificationsSection() {
  const [activeFilter, setActiveFilter] = useState<FilterOption>("All");
  const [selectedCert, setSelectedCert] = useState<Certification | null>(null);

  const filtered =
    activeFilter === "All"
      ? certifications
      : certifications.filter((c) => c.category === activeFilter);

  // Count per category
  const counts: Record<string, number> = { All: certifications.length };
  for (const cert of certifications) {
    counts[cert.category] = (counts[cert.category] || 0) + 1;
  }

  const stats = [
    {
      icon: Award,
      value: String(certifications.length),
      label: "Certifications",
      color: "text-electric",
    },
    {
      icon: Brain,
      value: String(counts["AI & Automation"] || 0),
      label: "AI & Automation",
      color: "text-violet-500",
    },
    {
      icon: Code2,
      value: String(counts["Technical Skills"] || 0),
      label: "Technical Skills",
      color: "text-blue-500",
    },
    {
      icon: Megaphone,
      value: String(counts["CRM & Marketing"] || 0),
      label: "CRM & Marketing",
      color: "text-pink-500",
    },
    {
      icon: TrendingUp,
      value: String(counts["Professional Development"] || 0),
      label: "Professional Dev",
      color: "text-emerald-500",
    },
  ];

  return (
    <section id="certifications" className="section relative overflow-hidden">
      <div className="glow-orb h-[300px] w-[300px] -right-20 top-20 bg-neon-purple" />
      <div className="glow-orb h-[200px] w-[200px] -left-10 bottom-32 bg-electric" />

      <div className="container relative">
        {/* ─── Header ──────────────────────────────────────────── */}
        <div className="max-w-3xl">
          <p className="eyebrow">
            <Award className="h-3.5 w-3.5" />
            Certifications & Training
          </p>
          <h2 className="mt-4 section-title text-slate-900 dark:text-white text-balance">
            Committed to{" "}
            <span className="gradient-text">Continuous Learning</span>
          </h2>
          <p className="mt-4 text-slate-600 dark:text-slate-300 max-w-2xl">
            Industry-recognized certifications in AI, automation, CRM, and
            marketing. Every certificate represents hands-on, production-level
            expertise — not just theory.
          </p>
        </div>

        {/* ─── Stats Row ───────────────────────────────────────── */}
        <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: i * 0.07 }}
              className="rounded-xl border border-slate-200/60 dark:border-white/[0.06] bg-white/50 dark:bg-white/[0.02] backdrop-blur-sm p-4 text-center"
            >
              <stat.icon className={`h-5 w-5 mx-auto ${stat.color}`} />
              <p className="mt-1.5 font-display text-xl font-bold text-slate-900 dark:text-white">
                {stat.value}
              </p>
              <p className="mt-0.5 text-[11px] text-slate-500 dark:text-slate-400 font-medium">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>

        {/* ─── Filter ──────────────────────────────────────────── */}
        <div className="mt-10">
          <CertificationFilter
            active={activeFilter}
            onChange={setActiveFilter}
            counts={counts}
          />
        </div>

        {/* ─── Grid ────────────────────────────────────────────── */}
        <motion.div
          layout
          className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5"
        >
          {filtered.map((cert, index) => (
            <CertificationCard
              key={cert.id}
              certification={cert}
              index={index}
              onSelect={setSelectedCert}
            />
          ))}
        </motion.div>

        {filtered.length === 0 && (
          <div className="mt-12 text-center py-16">
            <Award className="h-12 w-12 text-slate-300 dark:text-slate-600 mx-auto" />
            <p className="mt-4 text-slate-500 dark:text-slate-400 font-medium">
              No certifications found in this category.
            </p>
          </div>
        )}

        {/* ─── Modal ───────────────────────────────────────────── */}
        <CertificationModal
          certification={selectedCert}
          onClose={() => setSelectedCert(null)}
        />
      </div>
    </section>
  );
}
