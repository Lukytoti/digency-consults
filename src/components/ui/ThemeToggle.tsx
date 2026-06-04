"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const current = mounted ? resolvedTheme ?? theme : "dark";
  const isDark = current === "dark";

  return (
    <button
      type="button"
      aria-label="Toggle theme"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="relative inline-flex h-8 w-8 items-center justify-center rounded-xl border border-slate-200/80 dark:border-white/[0.08] bg-white/50 dark:bg-white/5 backdrop-blur-sm text-slate-600 dark:text-slate-400 transition-all duration-300 hover:border-electric/50 hover:text-amber-500 dark:hover:text-sky-300 hover:bg-amber-50/50 dark:hover:bg-sky-500/5 hover:shadow-[0_0_12px_rgba(251,191,36,0.2)] dark:hover:shadow-[0_0_12px_rgba(56,189,248,0.15)] hover:scale-110 active:scale-95"
    >
      <AnimatePresence mode="wait" initial={false}>
        {isDark ? (
          <motion.div
            key="moon"
            initial={{ rotate: -90, opacity: 0, scale: 0.5 }}
            animate={{ rotate: 0, opacity: 1, scale: 1 }}
            exit={{ rotate: 90, opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.2 }}
          >
            <Moon className="h-3.5 w-3.5" />
          </motion.div>
        ) : (
          <motion.div
            key="sun"
            initial={{ rotate: 90, opacity: 0, scale: 0.5 }}
            animate={{ rotate: 0, opacity: 1, scale: 1 }}
            exit={{ rotate: -90, opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.2 }}
          >
            <Sun className="h-3.5 w-3.5" />
          </motion.div>
        )}
      </AnimatePresence>
    </button>
  );
}
