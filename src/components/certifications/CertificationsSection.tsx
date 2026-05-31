"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Award, BookOpen, Brain, TrendingUp } from "lucide-react";
import {
  certifications,
  type Certification,
  type CertificationCategory,
} from "@/data/certifications";
import { CertificationCard } from "./CertificationCard";
import { CertificationFilter } from "./CertificationFilter";
import { CertificationModal } from "./CertificationModal";

type FilterOption = CertificationCategory | "All";

export function CertificationsSection() {
  const [activeFilter, setActiveFilter] = useState<FilterOption>("All");
  const [selectedCert, setSelectedCert] = useState<Certification | null>(null);

  const filtered =
    activeFilter === "All"
      ? certifications
      : certifications.filter((c) => c.category === activeFilter);

  const stats = [
    {
      icon: Award,
      value: "8",
      label: "Professional Certifications",
    },
    {
      icon: Brain,
      value: "AI & Automation",
      label: "Training",
    },
    {
      icon: BookOpen,
      value: "CRM & Marketing",
      label: "Certifications",
    },
    {
      icon: TrendingUp,
      value: "Continuous",
      label: "Professional Development",
    },
  ];

  return (
    <section id="certifications" className="section relative">
      <div className="glow-orb h-[300px] w-[300px] -right-20 top-20 bg-neon-purple" />
      <div className="container relative">
        {/* Header */}
        <div className="max-w-3xl">
          <p className="eyebrow">Certifications & Training</p>
          <h2 className="mt-4 section-title text-slate-900 dark:text-white text-balance">
            Committed to{" "}
            <span className="gradient-text">Continuous Learning</span>
          </h2>
          <p className="mt-4 text-slate-600 dark:text-slate-300">
            I invest in industry-recognized certifications to stay at the
            cutting edge of AI, CRM infrastructure and marketing automation.
            Every certification represents hands-on, production-level expertise.
          </p>
        </div>

        {/* Stats row */}
        <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="rounded-2xl glass-card p-5 text-center"
            >
              <stat.icon className="h-6 w-6 text-electric mx-auto" />
              <p className="mt-2 font-display text-lg font-bold text-slate-900 dark:text-white">
                {stat.value}
              </p>
              <p className="mt-1 text-xs text-slate-600 dark:text-slate-400">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Filter tabs */}
        <div className="mt-10">
          <CertificationFilter
            active={activeFilter}
            onChange={setActiveFilter}
          />
        </div>

        {/* Grid */}
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filtered.map((cert, index) => (
            <CertificationCard
              key={cert.id}
              certification={cert}
              index={index}
              onSelect={setSelectedCert}
            />
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="mt-12 text-center">
            <p className="text-slate-500 dark:text-slate-400">
              No certifications found in this category.
            </p>
          </div>
        )}

        {/* Modal */}
        <CertificationModal
          certification={selectedCert}
          onClose={() => setSelectedCert(null)}
        />
      </div>
    </section>
  );
}
