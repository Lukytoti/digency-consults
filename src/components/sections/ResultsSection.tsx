"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "20+", label: "Client systems shipped", color: "text-electric" },
  { value: "$1.2M+", label: "Pipeline influenced for clients", color: "text-neon-purple" },
  { value: "8+", label: "AI voice & WhatsApp agents in production", color: "text-neon-green" },
  { value: "92%", label: "Avg call capture with AI receptionists", color: "text-electric" },
  { value: "<60s", label: "Lead response time after my builds", color: "text-neon-purple" },
  { value: "42x", label: "ROI on top-performing reactivation system", color: "text-neon-green" },
];

export function ResultsSection() {
  return (
    <section className="section relative">
      <div className="container">
        <div className="max-w-3xl">
          <p className="eyebrow">Results that matter</p>
          <h2 className="mt-4 section-title text-slate-900 dark:text-white text-balance">
            Numbers from systems running in production right now.
          </h2>
          <p className="mt-4 text-slate-600 dark:text-slate-300">
            I'd rather show you what the work actually does than tell you how
            beautiful the dashboards look. Here's a snapshot.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="rounded-2xl glass-card p-6 text-center"
            >
              <p className={`font-display text-3xl md:text-5xl font-bold ${s.color}`}>
                {s.value}
              </p>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                {s.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
