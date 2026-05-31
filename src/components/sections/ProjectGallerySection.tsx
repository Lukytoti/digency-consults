import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PremiumGallery } from "@/components/gallery/PremiumGallery";

type Props = {
  /** Optional override eyebrow / title / subtitle */
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  /** Limit count for compact embeds (e.g. homepage) */
  limit?: number;
  /** Show the View All link */
  showAllLink?: boolean;
  /** Hide search/filters for compact homepage embed */
  showSearch?: boolean;
  showFilters?: boolean;
  /** Tighter card layout */
  compact?: boolean;
  /** Section background variant */
  variant?: "default" | "muted";
};

export function ProjectGallerySection({
  eyebrow = "Project gallery",
  title = "Real systems in production",
  subtitle = "Click any project to expand the screenshot, see the metrics, and read the full breakdown.",
  limit,
  showAllLink = true,
  showSearch = true,
  showFilters = true,
  compact = false,
  variant = "default",
}: Props) {
  return (
    <section
      className={`py-16 md:py-20 relative ${
        variant === "muted"
          ? "bg-slate-50/50 dark:bg-navy-900/30 border-y border-slate-200/50 dark:border-white/5"
          : ""
      }`}
    >
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-electric">
              {eyebrow}
            </p>
            <h2 className="mt-3 font-display text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
              {title}
            </h2>
            <p className="mt-3 text-slate-600 dark:text-slate-300">
              {subtitle}
            </p>
          </div>
          {showAllLink && (
            <Link
              href="/portfolio"
              className="btn-outline self-start md:self-auto text-sm"
            >
              View full portfolio <ArrowRight className="h-4 w-4" />
            </Link>
          )}
        </div>

        <PremiumGallery
          limit={limit}
          showSearch={showSearch}
          showFilters={showFilters}
          compact={compact}
        />
      </div>
    </section>
  );
}
