"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight, Clock } from "lucide-react";
import { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { BrandLogo } from "@/components/ui/BrandLogo";

// ─── Navigation Items ────────────────────────────────────────────────────────
const navItems = [
  { label: "Home", href: "/" },
  { label: "About Me", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/portfolio" },
  { label: "Cases", href: "/case-studies" },
  { label: "Gallery", href: "/portfolio#gallery" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

// ─── Live Time Hook ──────────────────────────────────────────────────────────
function useLiveTime() {
  const [time, setTime] = useState<string | null>(null);
  const [timezone, setTimezone] = useState<string>("");

  useEffect(() => {
    const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
    const short = tz.split("/").pop()?.replace(/_/g, " ") ?? tz;
    setTimezone(short);

    const update = () => {
      const formatted = new Intl.DateTimeFormat(undefined, {
        hour: "numeric",
        minute: "2-digit",
        hour12: true,
      }).format(new Date());
      setTime(formatted);
    };

    update();
    const interval = setInterval(update, 60_000);
    return () => clearInterval(interval);
  }, []);

  return { time, timezone };
}

// ─── Navbar ──────────────────────────────────────────────────────────────────
export function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { time, timezone } = useLiveTime();

  // Scroll detection
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  // Lock body scroll
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const isActive = useCallback(
    (href: string) => {
      if (href === "/") return pathname === "/";
      const base = href.split("#")[0];
      return pathname === base || pathname.startsWith(base + "/");
    },
    [pathname]
  );

  return (
    <>
      <header
        className={cn(
          "fixed top-0 inset-x-0 z-50 transition-all duration-500 ease-out",
          scrolled ? "py-2" : "py-3"
        )}
      >
        <div className="container max-w-7xl">
          <div
            className={cn(
              "relative rounded-2xl transition-all duration-500 ease-out",
              scrolled
                ? "bg-white/80 dark:bg-navy-950/80 backdrop-blur-2xl backdrop-saturate-150 border border-slate-200/50 dark:border-white/[0.06] shadow-[0_4px_24px_-4px_rgba(0,0,0,0.08)] dark:shadow-[0_4px_24px_-4px_rgba(0,0,0,0.4)]"
                : "bg-white/50 dark:bg-navy-950/50 backdrop-blur-xl border border-slate-200/30 dark:border-white/[0.04]"
            )}
          >
            <div
              className={cn(
                "relative flex items-center justify-between px-4 lg:px-5 transition-all duration-500",
                scrolled ? "h-[60px]" : "h-[68px]"
              )}
            >
              {/* ─── Left: Logo (image only, no text) ────────── */}
              <Link
                href="/"
                className="group shrink-0 flex items-center"
              >
                <BrandLogo className="transition-transform duration-300 group-hover:scale-[1.03]" />
              </Link>

              {/* ─── Center: Navigation ──────────────────────────── */}
              <nav className="hidden lg:flex items-center">
                <div className="flex items-center gap-0.5 rounded-xl bg-slate-100/50 dark:bg-white/[0.03] px-1 py-1">
                  {navItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={cn(
                        "relative px-2.5 py-1.5 text-[13px] font-medium rounded-lg transition-all duration-200 whitespace-nowrap",
                        "hover:-translate-y-[0.5px]",
                        isActive(item.href)
                          ? "text-electric"
                          : "text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white"
                      )}
                    >
                      <span className="relative z-10">{item.label}</span>
                      {isActive(item.href) && (
                        <motion.span
                          layoutId="nav-pill"
                          className="absolute inset-0 rounded-lg bg-white dark:bg-white/[0.08] shadow-sm dark:shadow-none"
                          style={{ zIndex: 0 }}
                          transition={{
                            type: "spring",
                            stiffness: 400,
                            damping: 30,
                          }}
                        />
                      )}
                    </Link>
                  ))}
                </div>
              </nav>

              {/* ─── Right: Time + Theme + CTA ───────────────────── */}
              <div className="flex items-center gap-2 shrink-0">
                {/* Live Time */}
                {time && (
                  <div className="hidden md:flex items-center gap-1.5 text-[11px] text-slate-500 dark:text-slate-400 font-medium tabular-nums mr-1">
                    <Clock className="h-3 w-3 opacity-60" />
                    <span>{time}</span>
                    <span className="text-slate-300 dark:text-slate-600">
                      ·
                    </span>
                    <span className="text-slate-400 dark:text-slate-500">
                      {timezone}
                    </span>
                  </div>
                )}

                {/* Theme Toggle */}
                <ThemeToggle />

                {/* CTA - Desktop */}
                <a
                  href="https://cal.com/oluwatobi-olowookere-3055pb/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hidden sm:inline-flex group/cta relative items-center gap-1.5 overflow-hidden rounded-xl bg-gradient-to-r from-electric via-neon-purple to-electric bg-[length:200%_auto] px-4 py-2 text-[13px] font-semibold text-white shadow-[0_0_16px_rgba(59,130,246,0.25)] transition-all duration-500 hover:bg-[position:100%_0] hover:shadow-[0_0_24px_rgba(139,92,246,0.35)] hover:scale-[1.02] active:scale-[0.97]"
                >
                  <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover/cta:translate-x-full" />
                  <span className="relative">Book a Call</span>
                  <ArrowRight className="relative h-3.5 w-3.5 transition-transform duration-300 group-hover/cta:translate-x-0.5" />
                </a>

                {/* Mobile Toggle */}
                <button
                  type="button"
                  aria-label={mobileOpen ? "Close menu" : "Open menu"}
                  onClick={() => setMobileOpen((v) => !v)}
                  className="lg:hidden inline-flex h-9 w-9 items-center justify-center rounded-xl border border-slate-200/80 dark:border-white/[0.08] bg-white/50 dark:bg-white/5 transition-all duration-200 hover:border-electric/40"
                >
                  <AnimatePresence mode="wait" initial={false}>
                    {mobileOpen ? (
                      <motion.div
                        key="close"
                        initial={{ rotate: -90, opacity: 0 }}
                        animate={{ rotate: 0, opacity: 1 }}
                        exit={{ rotate: 90, opacity: 0 }}
                        transition={{ duration: 0.12 }}
                      >
                        <X className="h-4.5 w-4.5" />
                      </motion.div>
                    ) : (
                      <motion.div
                        key="menu"
                        initial={{ rotate: 90, opacity: 0 }}
                        animate={{ rotate: 0, opacity: 1 }}
                        exit={{ rotate: -90, opacity: 0 }}
                        transition={{ duration: 0.12 }}
                      >
                        <Menu className="h-4.5 w-4.5" />
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
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 bg-black/20 dark:bg-black/50 backdrop-blur-sm lg:hidden"
              onClick={() => setMobileOpen(false)}
            />

            <motion.div
              initial={{ opacity: 0, y: -8, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.98 }}
              transition={{ type: "spring", damping: 30, stiffness: 400 }}
              className="fixed top-[76px] inset-x-0 z-50 lg:hidden px-4"
            >
              <div className="rounded-2xl border border-slate-200/60 dark:border-white/[0.08] bg-white/95 dark:bg-navy-900/95 backdrop-blur-2xl shadow-xl overflow-hidden">
                {/* Time bar */}
                {time && (
                  <div className="flex items-center justify-center gap-2 px-4 py-2.5 border-b border-slate-100 dark:border-white/[0.06] text-xs text-slate-500 dark:text-slate-400">
                    <Clock className="h-3 w-3 opacity-60" />
                    <span>{time}</span>
                    <span className="text-slate-300 dark:text-slate-600">·</span>
                    <span>{timezone}</span>
                  </div>
                )}

                {/* Nav */}
                <div className="p-2 flex flex-col gap-0.5">
                  {navItems.map((item, i) => (
                    <motion.div
                      key={item.href}
                      initial={{ opacity: 0, x: -8 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.03 }}
                    >
                      <Link
                        href={item.href}
                        className={cn(
                          "flex items-center justify-between rounded-xl px-4 py-3 min-h-[44px] text-[15px] font-medium transition-all duration-200",
                          isActive(item.href)
                            ? "text-electric bg-electric/[0.06]"
                            : "text-slate-700 dark:text-slate-200 active:bg-slate-50 dark:active:bg-white/[0.04]"
                        )}
                      >
                        {item.label}
                        {isActive(item.href) && (
                          <span className="h-1.5 w-1.5 rounded-full bg-electric" />
                        )}
                      </Link>
                    </motion.div>
                  ))}
                </div>

                {/* CTA */}
                <div className="p-3 pt-1 border-t border-slate-100 dark:border-white/[0.06]">
                  <a
                    href="https://cal.com/oluwatobi-olowookere-3055pb/30min"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/mcta relative flex items-center justify-center gap-2 w-full overflow-hidden rounded-xl bg-gradient-to-r from-electric via-neon-purple to-electric bg-[length:200%_auto] px-5 py-3 text-sm font-semibold text-white shadow-[0_0_16px_rgba(59,130,246,0.25)] transition-all duration-500 hover:bg-[position:100%_0] min-h-[48px] active:scale-[0.97]"
                  >
                    <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover/mcta:translate-x-full" />
                    <span className="relative">Book a Strategy Call</span>
                    <ArrowRight className="relative h-4 w-4" />
                  </a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
