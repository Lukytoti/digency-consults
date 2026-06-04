"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  Sparkles,
  ArrowRight,
  Linkedin,
  MessageCircle,
  Calendar,
  Clock,
} from "lucide-react";
import { useEffect, useState, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "@/components/ui/ThemeToggle";

// ─── Live Time Hook ──────────────────────────────────────────────────────────
function useLiveTime() {
  const [time, setTime] = useState<string | null>(null);
  const [timezone, setTimezone] = useState<string>("");

  useEffect(() => {
    const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
    setTimezone(tz.split("/").pop()?.replace(/_/g, " ") ?? tz);

    const update = () => {
      const now = new Date();
      const formatted = new Intl.DateTimeFormat(undefined, {
        hour: "numeric",
        minute: "2-digit",
        hour12: true,
      }).format(now);
      setTime(formatted);
    };

    update();
    const interval = setInterval(update, 60_000);
    return () => clearInterval(interval);
  }, []);

  return { time, timezone };
}

// ─── Navbar Component ────────────────────────────────────────────────────────
export function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { time, timezone } = useLiveTime();
  const headerRef = useRef<HTMLElement>(null);

  // Scroll detection
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const isActive = useCallback(
    (href: string) => {
      if (href === "/") return pathname === "/";
      if (href.includes("#")) return pathname === href.split("#")[0];
      return pathname.startsWith(href);
    },
    [pathname]
  );

  return (
    <>
      {/* ─── Header ─────────────────────────────────────────────────────── */}
      <header
        ref={headerRef}
        className={cn(
          "fixed top-0 inset-x-0 z-50 transition-all duration-700 ease-out",
          scrolled
            ? "py-1.5"
            : "py-3"
        )}
      >
        {/* Floating pill container */}
        <div className="container">
          <div
            className={cn(
              "relative rounded-2xl transition-all duration-700 ease-out",
              scrolled
                ? "bg-white/80 dark:bg-navy-950/80 backdrop-blur-2xl backdrop-saturate-150 border border-slate-200/50 dark:border-white/[0.08] shadow-[0_8px_40px_-12px_rgba(0,0,0,0.12)] dark:shadow-[0_8px_40px_-12px_rgba(0,0,0,0.5)]"
                : "bg-white/40 dark:bg-navy-950/40 backdrop-blur-xl border border-slate-200/30 dark:border-white/[0.04]"
            )}
          >
            {/* Animated border glow */}
            <div className="absolute inset-0 rounded-2xl overflow-hidden pointer-events-none">
              <div
                className={cn(
                  "absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-700",
                  scrolled && "opacity-100"
                )}
                style={{
                  background:
                    "linear-gradient(135deg, rgba(59,130,246,0.1) 0%, rgba(139,92,246,0.05) 50%, rgba(16,185,129,0.1) 100%)",
                }}
              />
            </div>

            <div className="relative flex items-center justify-between px-4 lg:px-6 h-14 lg:h-16">
              {/* ─── Left: Logo ────────────────────────────────────── */}
              <Link
                href="/"
                className="group flex items-center gap-2.5 font-display text-lg font-bold shrink-0"
              >
                <span className="relative inline-flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-electric via-neon-purple to-neon-green text-white shadow-glow transition-all duration-500 group-hover:scale-110 group-hover:shadow-glow-purple">
                  <Sparkles className="h-4 w-4 transition-transform duration-500 group-hover:rotate-12" />
                  <span className="absolute inset-0 rounded-xl bg-gradient-to-br from-electric via-neon-purple to-neon-green opacity-0 blur-lg transition-opacity duration-500 group-hover:opacity-70" />
                </span>
                <span className="hidden sm:inline text-slate-900 dark:text-white tracking-tight">
                  Digency
                  <span className="text-electric transition-colors duration-300 group-hover:text-neon-purple">
                    .
                  </span>
                  <span className="text-slate-500 dark:text-slate-400 text-sm font-medium ml-1">
                    Consults
                  </span>
                </span>
              </Link>

              {/* ─── Center: Desktop Navigation ───────────────────── */}
              <nav className="hidden xl:flex items-center gap-0.5">
                {siteConfig.nav.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "nav-item relative px-3 py-2 text-[13px] font-medium rounded-lg transition-all duration-300",
                      "hover:bg-gradient-to-b hover:from-electric/[0.06] hover:to-transparent",
                      "hover:-translate-y-[1px]",
                      isActive(item.href)
                        ? "text-electric"
                        : "text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white"
                    )}
                  >
                    <span className="relative z-10">{item.label}</span>
                    {/* Active indicator */}
                    {isActive(item.href) && (
                      <motion.span
                        layoutId="nav-active-pill"
                        className="absolute inset-x-2 -bottom-[1px] h-[2px] rounded-full bg-gradient-to-r from-electric via-neon-purple to-electric"
                        transition={{
                          type: "spring",
                          stiffness: 400,
                          damping: 30,
                        }}
                      />
                    )}
                    {/* Hover glow underline */}
                    <span className="absolute inset-x-2 bottom-0 h-[2px] rounded-full bg-gradient-to-r from-electric/0 via-electric/40 to-electric/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 hover-glow" />
                  </Link>
                ))}
              </nav>

              {/* ─── Right: Actions ───────────────────────────────── */}
              <div className="flex items-center gap-1.5 lg:gap-2 shrink-0">
                {/* Live Time + Status (desktop only) */}
                <div className="hidden lg:flex items-center gap-3 mr-2 pr-3 border-r border-slate-200/50 dark:border-white/[0.08]">
                  {/* Available Status */}
                  <div className="flex items-center gap-1.5 group/status cursor-default">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                      <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.6)]" />
                    </span>
                    <span className="text-[11px] font-medium text-emerald-600 dark:text-emerald-400 whitespace-nowrap">
                      Available
                    </span>
                    {/* Tooltip */}
                    <div className="absolute top-full mt-2 left-1/2 -translate-x-1/2 px-3 py-1.5 rounded-lg bg-slate-900 dark:bg-white text-white dark:text-slate-900 text-[10px] font-medium opacity-0 group-hover/status:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap shadow-xl">
                      Open for new projects
                      <span className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-slate-900 dark:bg-white rotate-45" />
                    </div>
                  </div>

                  {/* Live Time */}
                  {time && (
                    <div className="flex items-center gap-1.5 text-[11px] text-slate-500 dark:text-slate-400 font-medium">
                      <Clock className="h-3 w-3" />
                      <span>{time}</span>
                      {timezone && (
                        <span className="text-slate-400 dark:text-slate-500">
                          {timezone}
                        </span>
                      )}
                    </div>
                  )}
                </div>

                {/* Social Icons */}
                <div className="hidden md:flex items-center gap-0.5">
                  <a
                    href="https://www.linkedin.com/in/oluwatobi-olowookere-720b3610a/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-8 w-8 items-center justify-center rounded-lg text-slate-500 dark:text-slate-400 hover:text-[#0077B5] dark:hover:text-[#0077B5] hover:bg-[#0077B5]/10 transition-all duration-200 hover:scale-110"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="h-3.5 w-3.5" />
                  </a>
                  <a
                    href="https://wa.me/447448309532"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-8 w-8 items-center justify-center rounded-lg text-slate-500 dark:text-slate-400 hover:text-[#25D366] dark:hover:text-[#25D366] hover:bg-[#25D366]/10 transition-all duration-200 hover:scale-110"
                    aria-label="WhatsApp"
                  >
                    <MessageCircle className="h-3.5 w-3.5" />
                  </a>
                  <a
                    href="https://cal.com/oluwatobi-olowookere-3055pb/30min"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-8 w-8 items-center justify-center rounded-lg text-slate-500 dark:text-slate-400 hover:text-electric dark:hover:text-electric hover:bg-electric/10 transition-all duration-200 hover:scale-110"
                    aria-label="Book a Call"
                  >
                    <Calendar className="h-3.5 w-3.5" />
                  </a>
                </div>

                {/* Theme Toggle */}
                <ThemeToggle />

                {/* CTA Button - Desktop */}
                <a
                  href="https://cal.com/oluwatobi-olowookere-3055pb/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hidden sm:inline-flex group/cta relative items-center gap-2 overflow-hidden rounded-xl bg-gradient-to-r from-electric via-neon-purple to-electric bg-[length:200%_auto] px-4 py-2 text-sm font-semibold text-white shadow-[0_0_20px_rgba(59,130,246,0.3)] transition-all duration-500 hover:bg-[position:100%_0] hover:shadow-[0_0_30px_rgba(139,92,246,0.4)] hover:scale-[1.03] hover:-translate-y-[1px] active:scale-[0.97]"
                >
                  {/* Shine effect */}
                  <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover/cta:translate-x-full" />
                  <span className="relative">Book a Call</span>
                  <ArrowRight className="relative h-3.5 w-3.5 transition-transform duration-300 group-hover/cta:translate-x-0.5" />
                </a>

                {/* Mobile Menu Toggle */}
                <button
                  type="button"
                  aria-label={mobileOpen ? "Close menu" : "Open menu"}
                  onClick={() => setMobileOpen((v) => !v)}
                  className="xl:hidden relative inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200/80 dark:border-white/[0.08] bg-white/50 dark:bg-white/5 backdrop-blur-sm transition-all duration-200 hover:border-electric/50 hover:bg-electric/5"
                >
                  <AnimatePresence mode="wait" initial={false}>
                    {mobileOpen ? (
                      <motion.div
                        key="close"
                        initial={{ rotate: -90, opacity: 0 }}
                        animate={{ rotate: 0, opacity: 1 }}
                        exit={{ rotate: 90, opacity: 0 }}
                        transition={{ duration: 0.15 }}
                      >
                        <X className="h-5 w-5" />
                      </motion.div>
                    ) : (
                      <motion.div
                        key="menu"
                        initial={{ rotate: 90, opacity: 0 }}
                        animate={{ rotate: 0, opacity: 1 }}
                        exit={{ rotate: -90, opacity: 0 }}
                        transition={{ duration: 0.15 }}
                      >
                        <Menu className="h-5 w-5" />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* ─── Mobile Menu ──────────────────────────────────────────────── */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 bg-black/30 dark:bg-black/60 backdrop-blur-sm xl:hidden"
              onClick={() => setMobileOpen(false)}
            />

            {/* Mobile Panel */}
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.98 }}
              transition={{ type: "spring", damping: 28, stiffness: 350 }}
              className="fixed top-[80px] inset-x-0 z-50 xl:hidden px-4"
            >
              <div className="rounded-2xl border border-slate-200/60 dark:border-white/[0.08] bg-white/95 dark:bg-navy-900/95 backdrop-blur-2xl shadow-2xl shadow-black/[0.1] dark:shadow-black/[0.4] overflow-hidden max-h-[calc(100vh-100px)] overflow-y-auto">
                {/* Mobile Status Bar */}
                <div className="flex items-center justify-between px-5 py-3 border-b border-slate-100 dark:border-white/[0.06]">
                  <div className="flex items-center gap-2">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                      <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.6)]" />
                    </span>
                    <span className="text-xs font-medium text-emerald-600 dark:text-emerald-400">
                      Available Now
                    </span>
                  </div>
                  {time && (
                    <div className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400">
                      <Clock className="h-3 w-3" />
                      <span>{time}</span>
                    </div>
                  )}
                </div>

                {/* Nav Items */}
                <div className="p-3 flex flex-col gap-0.5">
                  {siteConfig.nav.map((item, i) => (
                    <motion.div
                      key={item.href}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.04 }}
                    >
                      <Link
                        href={item.href}
                        className={cn(
                          "flex items-center rounded-xl px-4 py-3.5 min-h-[48px] text-[15px] font-medium transition-all duration-200",
                          isActive(item.href)
                            ? "text-electric bg-electric/[0.06]"
                            : "text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-white/[0.04] active:bg-slate-100 dark:active:bg-white/[0.08]"
                        )}
                      >
                        {item.label}
                        {isActive(item.href) && (
                          <span className="ml-auto h-1.5 w-1.5 rounded-full bg-electric" />
                        )}
                      </Link>
                    </motion.div>
                  ))}
                </div>

                {/* Social Links */}
                <div className="px-5 py-3 border-t border-slate-100 dark:border-white/[0.06]">
                  <div className="flex items-center gap-2">
                    <a
                      href="https://www.linkedin.com/in/oluwatobi-olowookere-720b3610a/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[#0077B5]/10 text-[#0077B5] transition-all duration-200 active:scale-95"
                      aria-label="LinkedIn"
                    >
                      <Linkedin className="h-4 w-4" />
                    </a>
                    <a
                      href="https://wa.me/447448309532"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[#25D366]/10 text-[#25D366] transition-all duration-200 active:scale-95"
                      aria-label="WhatsApp"
                    >
                      <MessageCircle className="h-4 w-4" />
                    </a>
                    <a
                      href="https://cal.com/oluwatobi-olowookere-3055pb/30min"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-electric/10 text-electric transition-all duration-200 active:scale-95"
                      aria-label="Calendar"
                    >
                      <Calendar className="h-4 w-4" />
                    </a>
                  </div>
                </div>

                {/* Mobile CTA */}
                <div className="p-4 pt-2">
                  <a
                    href="https://cal.com/oluwatobi-olowookere-3055pb/30min"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/mcta relative flex items-center justify-center gap-2 w-full overflow-hidden rounded-xl bg-gradient-to-r from-electric via-neon-purple to-electric bg-[length:200%_auto] px-5 py-3.5 text-sm font-semibold text-white shadow-[0_0_20px_rgba(59,130,246,0.3)] transition-all duration-500 hover:bg-[position:100%_0] min-h-[52px] active:scale-[0.97]"
                  >
                    <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover/mcta:translate-x-full" />
                    <span className="relative">Book a Strategy Call</span>
                    <ArrowRight className="relative h-4 w-4 transition-transform duration-300 group-hover/mcta:translate-x-0.5" />
                  </a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* ─── CSS for hover glow effect ────────────────────────────────── */}
      <style jsx global>{`
        .nav-item:hover .hover-glow {
          opacity: 1;
        }
        .nav-item {
          position: relative;
        }
        .nav-item::after {
          content: "";
          position: absolute;
          inset: 0;
          border-radius: 0.5rem;
          opacity: 0;
          background: radial-gradient(
            circle at var(--mouse-x, 50%) var(--mouse-y, 50%),
            rgba(59, 130, 246, 0.08) 0%,
            transparent 60%
          );
          transition: opacity 0.3s;
          pointer-events: none;
        }
        .nav-item:hover::after {
          opacity: 1;
        }
      `}</style>
    </>
  );
}
