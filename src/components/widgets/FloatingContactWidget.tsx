"use client";

import { useEffect, useState } from "react";
import {
  Briefcase,
  CalendarCheck,
  Facebook,
  Linkedin,
  MessageCircle,
  Sparkles,
  X,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { siteConfig } from "@/lib/site-config";

type Action = {
  label: string;
  href: string;
  icon: typeof MessageCircle;
  bg: string;
  description: string;
};

const actions: Action[] = [
  {
    label: "Book a Call",
    href: siteConfig.contact.calendar,
    icon: CalendarCheck,
    bg: "bg-gradient-to-br from-electric to-neon-purple",
    description: "30-min strategy call",
  },
  {
    label: "WhatsApp",
    href: siteConfig.social.whatsapp,
    icon: MessageCircle,
    bg: "bg-emerald-500",
    description: "Reply usually in minutes",
  },
  {
    label: "LinkedIn",
    href: siteConfig.social.linkedin,
    icon: Linkedin,
    bg: "bg-[#0A66C2]",
    description: "Connect and DM",
  },
  {
    label: "Facebook",
    href: siteConfig.social.facebook,
    icon: Facebook,
    bg: "bg-[#1877F2]",
    description: "Send me a message",
  },
  {
    label: "Fiverr",
    href: siteConfig.social.fiverr,
    icon: Briefcase,
    bg: "bg-[#1DBF73]",
    description: "View Fiverr profile",
  },
  {
    label: "Upwork",
    href: siteConfig.social.upwork,
    icon: Briefcase,
    bg: "bg-[#14A800]",
    description: "View Upwork profile",
  },
];

export function FloatingContactWidget() {
  const [open, setOpen] = useState(false);

  // Close on escape
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <div className="fixed bottom-5 left-5 z-40">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.96 }}
            transition={{ duration: 0.18 }}
            className="absolute bottom-16 left-0 w-[280px] rounded-2xl glass-card shadow-glow overflow-hidden"
          >
            <div className="bg-gradient-to-br from-navy-900 via-navy-950 to-black p-4 text-white">
              <div className="flex items-center gap-2">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-electric to-neon-purple">
                  <Sparkles className="h-4 w-4" />
                </span>
                <div>
                  <p className="text-sm font-semibold">Let&apos;s talk</p>
                  <p className="text-[11px] text-slate-300">
                    Pick the channel you prefer
                  </p>
                </div>
              </div>
            </div>
            <ul className="p-2">
              {actions.map((a) => {
                const Icon = a.icon;
                return (
                  <li key={a.label}>
                    <a
                      href={a.href}
                      target="_blank"
                      rel="noreferrer"
                      onClick={() => setOpen(false)}
                      className="flex items-center gap-3 rounded-xl px-3 py-2.5 hover:bg-slate-100 dark:hover:bg-white/5 transition"
                    >
                      <span
                        className={`inline-flex h-8 w-8 items-center justify-center rounded-lg text-white ${a.bg}`}
                      >
                        <Icon className="h-4 w-4" />
                      </span>
                      <div className="flex-1">
                        <p className="text-sm font-medium text-slate-900 dark:text-white">
                          {a.label}
                        </p>
                        <p className="text-[11px] text-slate-500 dark:text-slate-400">
                          {a.description}
                        </p>
                      </div>
                    </a>
                  </li>
                );
              })}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        type="button"
        aria-label={open ? "Close contact menu" : "Open contact menu"}
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className="group relative inline-flex h-12 items-center gap-2 rounded-full bg-gradient-to-r from-electric via-neon-purple to-electric bg-[length:200%_auto] px-5 text-sm font-semibold text-white shadow-glow ring-2 ring-white/10 transition hover:bg-[position:100%_0]"
      >
        <span className="absolute -inset-1 rounded-full bg-electric/30 blur-xl group-hover:bg-neon-purple/40 transition" />
        <span className="relative inline-flex h-7 w-7 items-center justify-center rounded-full bg-white/20">
          {open ? <X className="h-4 w-4" /> : <Sparkles className="h-4 w-4" />}
        </span>
        <span className="relative hidden sm:inline">
          {open ? "Close" : "Connect with me"}
        </span>
      </button>
    </div>
  );
}
