"use client";

import { motion } from "framer-motion";
import { Briefcase, Bot, PenLine, Users } from "lucide-react";

const stats = [
  {
    icon: Briefcase,
    value: "20+",
    label: "Projects Delivered",
    accent: "text-electric",
    bg: "from-electric/10 to-electric/5",
  },
  {
    icon: Bot,
    value: "8+",
    label: "AI Agents Built",
    accent: "text-neon-purple",
    bg: "from-neon-purple/10 to-neon-purple/5",
  },
  {
    icon: PenLine,
    value: "40+",
    label: "LinkedIn Posts",
    accent: "text-neon-green",
    bg: "from-neon-green/10 to-neon-green/5",
  },
  {
    icon: Users,
    value: "190+",
    label: "LinkedIn Followers",
    accent: "text-electric",
    bg: "from-electric/10 to-electric/5",
  },
];

export function AuthorityStats() {
  return (
    <section className="py-10 md:py-14 relative">
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {stats.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className={`relative rounded-2xl border border-slate-200/60 dark:border-white/8 bg-gradient-to-br ${s.bg} backdrop-blur-sm p-5 md:p-6 text-center group hover:border-slate-300 dark:hover:border-white/15 transition-colors`}
              >
                <div className={`inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white dark:bg-navy-900 shadow-sm ${s.accent} mb-3`}>
                  <Icon className="h-5 w-5" />
                </div>
                <p className={`font-display text-3xl md:text-4xl font-bold ${s.accent}`}>
                  {s.value}
                </p>
                <p className="mt-1 text-sm text-slate-600 dark:text-slate-400 font-medium">
                  {s.label}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
