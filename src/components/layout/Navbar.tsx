"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "@/components/ui/ThemeToggle";

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-slate-200/60 dark:border-white/10 bg-white/80 dark:bg-navy-950/80 backdrop-blur-xl"
          : "bg-transparent"
      )}
    >
      <div className="container flex h-16 items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-2 font-display text-lg font-bold"
        >
          <span className="relative inline-flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-electric via-neon-purple to-neon-green text-white shadow-glow">
            <Sparkles className="h-4 w-4" />
          </span>
          <span className="text-slate-900 dark:text-white">
            {siteConfig.shortName}
            <span className="text-electric">.</span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {siteConfig.nav.map((item) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                  active
                    ? "text-electric"
                    : "text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white"
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <a
            href={siteConfig.contact.calendar}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex btn-primary px-4 py-2 text-sm"
          >
            Book a Call
          </a>
          <button
            type="button"
            aria-label="Open menu"
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden inline-flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 dark:border-white/10"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-slate-200/60 dark:border-white/10 bg-white/95 dark:bg-navy-950/95 backdrop-blur-xl animate-slide-down">
          <div className="container py-4 flex flex-col gap-1">
            {siteConfig.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-lg px-3 py-2 text-sm font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-white/5"
              >
                {item.label}
              </Link>
            ))}
            <a
              href={siteConfig.contact.calendar}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary mt-2 w-full justify-center"
            >
              Book a Strategy Call
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
