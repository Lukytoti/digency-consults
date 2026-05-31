"use client";

import { motion } from "framer-motion";

const trustedTools = [
  { name: "GoHighLevel", abbr: "GHL" },
  { name: "n8n", abbr: "n8n" },
  { name: "OpenAI", abbr: "AI" },
  { name: "Make", abbr: "MK" },
  { name: "Zapier", abbr: "ZP" },
  { name: "WhatsApp", abbr: "WA" },
  { name: "Vapi", abbr: "VP" },
  { name: "Retell AI", abbr: "RT" },
  { name: "Supabase", abbr: "SB" },
];

export function ToolStackSection() {
  return (
    <section className="py-10 md:py-14 border-y border-slate-200/50 dark:border-white/5 bg-slate-50/50 dark:bg-navy-900/30">
      <div className="container">
        <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400 mb-6">
          Tools I build &amp; deploy with
        </p>
        <div className="flex flex-wrap justify-center gap-3 md:gap-4">
          {trustedTools.map((tool, i) => (
            <motion.div
              key={tool.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.04 }}
              className="inline-flex items-center gap-2.5 rounded-full border border-slate-200 dark:border-white/10 bg-white dark:bg-navy-900/60 px-4 py-2.5 text-sm font-medium text-slate-700 dark:text-slate-200 hover:border-electric dark:hover:border-electric/50 transition-colors group"
            >
              <span className="inline-flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-br from-electric/10 to-neon-purple/10 text-[10px] font-bold text-electric group-hover:from-electric/20 group-hover:to-neon-purple/20 transition">
                {tool.abbr}
              </span>
              {tool.name}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
