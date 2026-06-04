"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Sparkles, ArrowRight, ChevronDown } from "lucide-react";
import { useEffect, useState, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "@/components/ui/ThemeToggle";

// Services dropdown data for mega-menu feel
const serviceItems = [
  {
    label: "GoHighLevel CRM",
    href: "/services#gohighlevel",
    description: "Full CRM setup & automation",
  },
  {
    label: "AI Automation",
    href: "/services#ai-automation",
    description: "n8n, OpenAI & intelligent workflows",
  },
  {
    label: "Sales Funnels",
    href: "/services#funnels",
    description: "High-converting landing pages",
  },
  {
    label: "Website Design",
    href: "/services#websites",
    description: "Premium business websites",
  },
  {
    label: "WhatsApp Automation",
    href: "/services#whatsapp",
    description: "AI-powered messaging systems",
  },
];

export function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const servicesRef = useRef<HTMLDivElement>(null);
  const servicesTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Scroll detection with hysteresis
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
    setServicesOpen(false);
    setMobileServicesOpen(false);
  }, [pathname]);

  // Close services dropdown on outside click
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (
        servicesRef.current &&
        !servicesRef.current.contains(e.target as Node)
      ) {
        setServicesOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const handleServicesEnter = useCallback(() => {
    if (servicesTimeoutRef.current) {
      clearTimeout(servicesTimeoutRef.current);
      servicesTimeoutRef.current = null;
    }
    setServicesOpen(true);
  }, []);

  const handleServicesLeave = useCallback(() => {
    servicesTimeoutRef.current = setTimeout(() => {
      setServicesOpen(false);
    }, 150);
  }, []);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 inset-x-0 z-50 transition-all duration-500",
          scrolled
            ? "py-2 border-b border-slate-200/50 dark:border-white/[0.06] bg-white/70 dark:bg-navy-950/70 backdrop-blur-2xl backdrop-saturate-150 shadow-[0_1px_3px_rgba(0,0,0,0.05)]"
            : "py-3 bg-transparent"
        )}
      >
        <div className="container">
          <div
            className={cn(
              "flex items-center justify-between transition-all duration-500",
              scrolled ? "h-14" : "h-16"
            )}
          >
            {/* Logo */}
            <Link
              href="/"
              className="group flex items-center gap-2.5 font-display text-lg font-bold"
            >
              <span className="relative inline-flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-electric via-neon-purple to-neon-green text-white shadow-glow transition-transform duration-300 group-hover:scale-105">
                <Sparkles className="h-4 w-4" />
                {/* Animated glow ring */}
                <span className="absolute inset-0 rounded-xl bg-gradient-to-br from-electric via-neon-purple to-neon-green opacity-0 blur-md transition-opacity group-hover:opacity-60" />
              </span>
              <span className="text-slate-900 dark:text-white tracking-tight">
                {siteConfig.shortName}
                <span className="text-electric">.</span>
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-0.5">
              {siteConfig.nav.map((item) => {
                // Services gets a dropdown
                if (item.label === "Services") {
                  return (
                    <div
                      key={item.href}
                      ref={servicesRef}
                      className="relative"
                      onMouseEnter={handleServicesEnter}
                      onMouseLeave={handleServicesLeave}
                    >
                      <button
                        type="button"
                        onClick={() => setServicesOpen((v) => !v)}
                        className={cn(
                          "relative flex items-center gap-1 rounded-lg px-3 py-2 text-[13px] font-medium transition-all duration-200",
                          isActive(item.href)
                            ? "text-electric"
                            : "text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white"
                        )}
                      >
                        {item.label}
                        <ChevronDown
                          className={cn(
                            "h-3 w-3 transition-transform duration-200",
                            servicesOpen && "rotate-180"
                          )}
                        />
                        {isActive(item.href) && (
                          <motion.span
                            layoutId="nav-indicator"
                            className="absolute bottom-0 left-3 right-3 h-[2px] rounded-full bg-electric"
                            transition={{
                              type: "spring",
                              stiffness: 380,
                              damping: 30,
                            }}
                          />
                        )}
                      </button>

                      {/* Services Dropdown */}
                      <AnimatePresence>
                        {servicesOpen && (
                          <motion.div
                            initial={{ opacity: 0, y: 8, scale: 0.96 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 8, scale: 0.96 }}
                            transition={{ duration: 0.2, ease: "easeOut" }}
                            className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[320px] rounded-2xl border border-slate-200/60 dark:border-white/[0.08] bg-white/95 dark:bg-navy-900/95 backdrop-blur-xl p-2 shadow-xl shadow-black/[0.08] dark:shadow-black/[0.3]"
                          >
                            <div className="space-y-0.5">
                              {serviceItems.map((service) => (
                                <Link
                                  key={service.href}
                                  href={service.href}
                                  className="group/item flex flex-col gap-0.5 rounded-xl px-3 py-2.5 transition-colors hover:bg-slate-50 dark:hover:bg-white/[0.04]"
                                >
                                  <span className="text-sm font-medium text-slate-900 dark:text-white group-hover/item:text-electric transition-colors">
                                    {service.label}
                                  </span>
                                  <span className="text-xs text-slate-500 dark:text-slate-400">
                                    {service.description}
                                  </span>
                                </Link>
                              ))}
                            </div>
                            <div className="mt-2 border-t border-slate-100 dark:border-white/[0.06] pt-2">
                              <Link
                                href="/services"
                                className="flex items-center gap-1.5 rounded-xl px-3 py-2 text-xs font-medium text-electric hover:bg-electric/5 transition-colors"
                              >
                                View all services
                                <ArrowRight className="h-3 w-3" />
                              </Link>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                }

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "relative rounded-lg px-3 py-2 text-[13px] font-medium transition-all duration-200",
                      isActive(item.href)
                        ? "text-electric"
                        : "text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white"
                    )}
                  >
                    {item.label}
                    {isActive(item.href) && (
                      <motion.span
                        layoutId="nav-indicator"
                        className="absolute bottom-0 left-3 right-3 h-[2px] rounded-full bg-electric"
                        transition={{
                          type: "spring",
                          stiffness: 380,
                          damping: 30,
                        }}
                      />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Right Actions */}
            <div className="flex items-center gap-2">
              <ThemeToggle />

              {/* CTA Button - Desktop */}
              <a
                href={siteConfig.contact.calendar}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-electric via-neon-purple to-electric bg-[length:200%_auto] px-4 py-2 text-sm font-semibold text-white shadow-glow transition-all duration-300 hover:bg-[position:100%_0] hover:shadow-glow-purple hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>Book a Call</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </a>

              {/* Mobile Menu Toggle */}
              <button
                type="button"
                aria-label={mobileOpen ? "Close menu" : "Open menu"}
                onClick={() => setMobileOpen((v) => !v)}
                className="lg:hidden relative inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200/80 dark:border-white/10 bg-white/50 dark:bg-white/5 backdrop-blur-sm transition-colors hover:border-electric/50"
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
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 bg-black/20 dark:bg-black/50 backdrop-blur-sm lg:hidden"
              onClick={() => setMobileOpen(false)}
            />

            {/* Mobile Panel */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="fixed top-[72px] inset-x-0 z-50 lg:hidden"
            >
              <div className="container">
                <div className="rounded-2xl border border-slate-200/60 dark:border-white/[0.08] bg-white/95 dark:bg-navy-900/95 backdrop-blur-2xl shadow-2xl shadow-black/[0.08] dark:shadow-black/[0.4] overflow-hidden">
                  <div className="p-4 flex flex-col gap-1">
                    {siteConfig.nav.map((item) => {
                      if (item.label === "Services") {
                        return (
                          <div key={item.href}>
                            <button
                              type="button"
                              onClick={() =>
                                setMobileServicesOpen((v) => !v)
                              }
                              className={cn(
                                "w-full flex items-center justify-between rounded-xl px-4 py-3 min-h-[48px] text-[15px] font-medium transition-colors",
                                isActive(item.href)
                                  ? "text-electric bg-electric/5"
                                  : "text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-white/[0.04]"
                              )}
                            >
                              <span>{item.label}</span>
                              <ChevronDown
                                className={cn(
                                  "h-4 w-4 transition-transform duration-200",
                                  mobileServicesOpen && "rotate-180"
                                )}
                              />
                            </button>
                            <AnimatePresence>
                              {mobileServicesOpen && (
                                <motion.div
                                  initial={{ height: 0, opacity: 0 }}
                                  animate={{ height: "auto", opacity: 1 }}
                                  exit={{ height: 0, opacity: 0 }}
                                  transition={{ duration: 0.2 }}
                                  className="overflow-hidden"
                                >
                                  <div className="pl-4 py-1 space-y-0.5">
                                    {serviceItems.map((service) => (
                                      <Link
                                        key={service.href}
                                        href={service.href}
                                        className="flex flex-col gap-0.5 rounded-lg px-3 py-2.5 hover:bg-slate-50 dark:hover:bg-white/[0.04] transition-colors"
                                      >
                                        <span className="text-sm font-medium text-slate-800 dark:text-slate-200">
                                          {service.label}
                                        </span>
                                        <span className="text-xs text-slate-500 dark:text-slate-400">
                                          {service.description}
                                        </span>
                                      </Link>
                                    ))}
                                    <Link
                                      href="/services"
                                      className="flex items-center gap-1.5 rounded-lg px-3 py-2 text-xs font-medium text-electric"
                                    >
                                      View all services
                                      <ArrowRight className="h-3 w-3" />
                                    </Link>
                                  </div>
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </div>
                        );
                      }

                      return (
                        <Link
                          key={item.href}
                          href={item.href}
                          className={cn(
                            "rounded-xl px-4 py-3 min-h-[48px] flex items-center text-[15px] font-medium transition-colors",
                            isActive(item.href)
                              ? "text-electric bg-electric/5"
                              : "text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-white/[0.04]"
                          )}
                        >
                          {item.label}
                        </Link>
                      );
                    })}
                  </div>

                  {/* Mobile CTA */}
                  <div className="border-t border-slate-100 dark:border-white/[0.06] p-4">
                    <a
                      href={siteConfig.contact.calendar}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 w-full rounded-xl bg-gradient-to-r from-electric via-neon-purple to-electric bg-[length:200%_auto] px-5 py-3.5 text-sm font-semibold text-white shadow-glow transition-all duration-300 hover:bg-[position:100%_0] min-h-[48px]"
                    >
                      Book a Strategy Call
                      <ArrowRight className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
