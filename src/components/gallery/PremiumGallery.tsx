"use client";

import {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Filter,
  Search,
  X,
  ZoomIn,
} from "lucide-react";
import {
  getDeduplicatedProjects,
  projectCategories,
  type Project,
  type ProjectCategory,
} from "@/data/projects";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";

type Props = {
  /** Optional cap (e.g. 6 on the homepage). */
  limit?: number;
  /** Hide the search bar (e.g. on homepage). */
  showSearch?: boolean;
  /** Hide the category filter chips (e.g. compact mode). */
  showFilters?: boolean;
  /** Restrict to a single category. */
  forceCategory?: Exclude<ProjectCategory, "All">;
  /** Compact = denser grid for homepage. */
  compact?: boolean;
};

const aspectClasses: Record<NonNullable<Project["aspect"]>, string> = {
  portrait: "aspect-[3/4]",
  landscape: "aspect-[16/10]",
  square: "aspect-square",
};

const accentRing: Record<Project["accent"], string> = {
  electric: "ring-electric/40",
  purple: "ring-neon-purple/40",
  green: "ring-neon-green/40",
};

export function PremiumGallery({
  limit,
  showSearch = true,
  showFilters = true,
  forceCategory,
  compact = false,
}: Props) {
  const allProjects = useMemo(() => getDeduplicatedProjects(), []);
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>(
    forceCategory ?? "All"
  );
  const [query, setQuery] = useState("");
  const [lightboxIdx, setLightboxIdx] = useState<number | null>(null);

  // Filter + search
  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    let list = allProjects;
    if (forceCategory) {
      list = list.filter((p) => p.category === forceCategory);
    } else if (activeCategory !== "All") {
      list = list.filter((p) => p.category === activeCategory);
    }
    if (q) {
      list = list.filter((p) =>
        [
          p.title,
          p.description,
          p.problem,
          p.solution,
          p.result,
          p.category,
          ...p.tools,
        ]
          .join(" ")
          .toLowerCase()
          .includes(q)
      );
    }
    if (limit) list = list.slice(0, limit);
    return list;
  }, [allProjects, activeCategory, query, limit, forceCategory]);

  // Counts per category for chip badges
  const counts = useMemo(() => {
    const map: Record<string, number> = { All: allProjects.length };
    for (const p of allProjects) {
      map[p.category] = (map[p.category] ?? 0) + 1;
    }
    return map;
  }, [allProjects]);

  const openLightbox = useCallback((idx: number) => setLightboxIdx(idx), []);
  const closeLightbox = useCallback(() => setLightboxIdx(null), []);
  const next = useCallback(() => {
    setLightboxIdx((i) => (i === null ? null : (i + 1) % filtered.length));
  }, [filtered.length]);
  const prev = useCallback(() => {
    setLightboxIdx((i) =>
      i === null ? null : (i - 1 + filtered.length) % filtered.length
    );
  }, [filtered.length]);

  // Keyboard navigation
  useEffect(() => {
    if (lightboxIdx === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [lightboxIdx, closeLightbox, next, prev]);

  return (
    <div>
      {/* Toolbar */}
      {(showSearch || showFilters) && (
        <div className="flex flex-col gap-4 mb-6 md:mb-8">
          {showSearch && (
            <div className="relative max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
              <input
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search projects, tools, outcomes…"
                className="w-full rounded-xl border border-slate-200 dark:border-white/10 bg-white dark:bg-navy-900 pl-10 pr-10 py-2.5 text-sm text-slate-900 dark:text-white placeholder:text-slate-400 focus:border-electric focus:outline-none focus:ring-2 focus:ring-electric/30"
              />
              {query && (
                <button
                  type="button"
                  onClick={() => setQuery("")}
                  aria-label="Clear search"
                  className="absolute right-2 top-1/2 -translate-y-1/2 inline-flex h-7 w-7 items-center justify-center rounded-lg text-slate-400 hover:text-slate-700 dark:hover:text-white"
                >
                  <X className="h-4 w-4" />
                </button>
              )}
            </div>
          )}

          {showFilters && !forceCategory && (
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mr-1">
                <Filter className="h-3 w-3" /> Filter
              </span>
              {projectCategories.map((c) => {
                const count = counts[c] ?? 0;
                if (c !== "All" && count === 0) return null;
                const active = activeCategory === c;
                return (
                  <button
                    key={c}
                    type="button"
                    onClick={() => setActiveCategory(c)}
                    className={cn(
                      "inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-medium transition border",
                      active
                        ? "bg-gradient-to-r from-electric to-neon-purple text-white border-transparent shadow-glow"
                        : "border-slate-200 dark:border-white/10 bg-white dark:bg-navy-900/40 text-slate-700 dark:text-slate-300 hover:border-electric/40"
                    )}
                  >
                    {c}
                    <span
                      className={cn(
                        "rounded-full px-1.5 py-0.5 text-[10px] font-semibold",
                        active
                          ? "bg-white/20 text-white"
                          : "bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-slate-400"
                      )}
                    >
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>
          )}
        </div>
      )}

      {/* Empty state */}
      {filtered.length === 0 && (
        <div className="rounded-2xl border border-dashed border-slate-300 dark:border-white/10 p-10 text-center">
          <p className="font-display text-lg font-semibold text-slate-900 dark:text-white">
            No projects match your filter.
          </p>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
            Try a different category or clear your search.
          </p>
          <button
            type="button"
            onClick={() => {
              setActiveCategory("All");
              setQuery("");
            }}
            className="mt-4 btn-outline text-sm"
          >
            Reset filters
          </button>
        </div>
      )}

      {/* Masonry */}
      {filtered.length > 0 && (
        <div
          className={cn(
            "columns-1 sm:columns-2 gap-4 md:gap-5 [column-fill:_balance]",
            compact ? "lg:columns-3" : "lg:columns-3 xl:columns-3"
          )}
        >
          {filtered.map((p, idx) => (
            <motion.button
              key={p.slug}
              type="button"
              onClick={() => openLightbox(idx)}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: Math.min(idx * 0.04, 0.4) }}
              className={cn(
                "group relative mb-4 md:mb-5 block w-full break-inside-avoid overflow-hidden rounded-2xl border border-slate-200/60 dark:border-white/8 bg-white dark:bg-navy-950/40 text-left transition-all duration-300 hover:-translate-y-0.5 hover:shadow-glow/30 ring-1 ring-transparent hover:ring-2",
                accentRing[p.accent]
              )}
            >
              <div
                className={cn(
                  "relative w-full overflow-hidden",
                  aspectClasses[p.aspect ?? "landscape"]
                )}
              >
                <Image
                  src={p.image}
                  alt={p.title}
                  fill
                  loading="lazy"
                  sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw"
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-black/0" />

                {/* Top: category */}
                <span className="absolute top-3 left-3 inline-flex items-center rounded-full bg-black/60 backdrop-blur-sm px-2.5 py-1 text-[11px] font-medium text-white">
                  {p.category}
                </span>

                {/* Top right: zoom hint */}
                <span className="absolute top-3 right-3 inline-flex h-7 w-7 items-center justify-center rounded-full bg-black/60 backdrop-blur-sm text-white opacity-0 group-hover:opacity-100 transition">
                  <ZoomIn className="h-3.5 w-3.5" />
                </span>

                {/* Bottom: title */}
                <div className="absolute bottom-0 inset-x-0 p-4">
                  <h3 className="text-white font-display text-base md:text-lg font-semibold leading-snug">
                    {p.title}
                  </h3>
                  <p className="mt-1 text-xs text-slate-300 line-clamp-2">
                    {p.description}
                  </p>
                </div>
              </div>

              {!compact && (
                <div className="p-4 border-t border-slate-100 dark:border-white/5">
                  <div className="flex flex-wrap gap-1">
                    {p.tools.slice(0, 4).map((t) => (
                      <span
                        key={t}
                        className="inline-flex rounded-full bg-slate-100 dark:bg-white/5 px-2 py-0.5 text-[11px] text-slate-600 dark:text-slate-400"
                      >
                        {t}
                      </span>
                    ))}
                    {p.tools.length > 4 && (
                      <span className="inline-flex rounded-full bg-slate-100 dark:bg-white/5 px-2 py-0.5 text-[11px] text-slate-600 dark:text-slate-400">
                        +{p.tools.length - 4}
                      </span>
                    )}
                  </div>
                </div>
              )}
            </motion.button>
          ))}
        </div>
      )}

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIdx !== null && filtered[lightboxIdx] && (
          <Lightbox
            project={filtered[lightboxIdx]}
            index={lightboxIdx}
            total={filtered.length}
            onClose={closeLightbox}
            onNext={next}
            onPrev={prev}
          />
        )}
      </AnimatePresence>
    </div>
  );
}

// ──────────────────────────────────────────────
// Lightbox
// ──────────────────────────────────────────────
function Lightbox({
  project,
  index,
  total,
  onClose,
  onNext,
  onPrev,
}: {
  project: Project;
  index: number;
  total: number;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}) {
  const [galleryIdx, setGalleryIdx] = useState(0);
  const images = project.gallery && project.gallery.length > 0
    ? project.gallery
    : [project.image];

  // Reset on project change
  useEffect(() => setGalleryIdx(0), [project.slug]);

  // Touch swipe
  const startX = useRef<number | null>(null);
  const onTouchStart = (e: React.TouchEvent) => {
    startX.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (startX.current === null) return;
    const diff = e.changedTouches[0].clientX - startX.current;
    if (Math.abs(diff) > 50) {
      if (diff < 0) onNext();
      else onPrev();
    }
    startX.current = null;
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`${project.title} — full screen view`}
    >
      {/* Top toolbar */}
      <div
        className="absolute top-4 inset-x-4 flex items-center justify-between text-white"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center gap-2 text-xs">
          <span className="rounded-full bg-white/10 backdrop-blur px-3 py-1.5 font-medium">
            {project.category}
          </span>
          <span className="rounded-full bg-white/10 backdrop-blur px-3 py-1.5 font-medium">
            {index + 1} / {total}
          </span>
        </div>
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 backdrop-blur hover:bg-white/20 transition"
        >
          <X className="h-5 w-5" />
        </button>
      </div>

      {/* Prev / Next */}
      {total > 1 && (
        <>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onPrev();
            }}
            aria-label="Previous project"
            className="absolute left-4 md:left-6 inline-flex h-12 w-12 items-center justify-center rounded-full bg-white/10 backdrop-blur text-white hover:bg-white/20 transition z-10"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onNext();
            }}
            aria-label="Next project"
            className="absolute right-4 md:right-6 inline-flex h-12 w-12 items-center justify-center rounded-full bg-white/10 backdrop-blur text-white hover:bg-white/20 transition z-10"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </>
      )}

      {/* Body */}
      <motion.div
        key={project.slug}
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -12 }}
        transition={{ duration: 0.25 }}
        className="relative w-full max-w-6xl max-h-[90vh] overflow-hidden rounded-2xl bg-navy-950 ring-1 ring-white/10 grid lg:grid-cols-5 gap-0"
        onClick={(e) => e.stopPropagation()}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        {/* Image */}
        <div className="lg:col-span-3 relative bg-black aspect-[16/10] lg:aspect-auto">
          <Image
            src={images[galleryIdx]}
            alt={project.title}
            fill
            sizes="(min-width:1024px) 60vw, 100vw"
            className="object-contain"
            priority
          />
          {images.length > 1 && (
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
              {images.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setGalleryIdx(i)}
                  aria-label={`Image ${i + 1}`}
                  className={cn(
                    "h-1.5 rounded-full transition-all",
                    i === galleryIdx ? "w-6 bg-white" : "w-1.5 bg-white/40"
                  )}
                />
              ))}
            </div>
          )}
        </div>

        {/* Details */}
        <div className="lg:col-span-2 p-5 md:p-7 overflow-y-auto max-h-[40vh] lg:max-h-[90vh] text-white">
          <h3 className="font-display text-xl md:text-2xl font-bold leading-tight">
            {project.title}
          </h3>
          <p className="mt-2 text-sm text-slate-300">{project.description}</p>

          {/* Metrics */}
          <div className="mt-5 grid grid-cols-3 gap-2">
            {project.metrics.map((m) => (
              <div
                key={m.label}
                className="rounded-xl bg-white/5 ring-1 ring-white/10 p-3 text-center"
              >
                <p className="font-display text-sm md:text-base font-bold text-electric">
                  {m.value}
                </p>
                <p className="mt-1 text-[10px] uppercase tracking-wider text-slate-400">
                  {m.label}
                </p>
              </div>
            ))}
          </div>

          {/* Sections */}
          <div className="mt-6 space-y-4 text-sm">
            <Section label="Problem" body={project.problem} />
            <Section label="Solution" body={project.solution} />
            <Section label="Outcome" body={project.result} />
          </div>

          {/* Tools */}
          <div className="mt-5">
            <p className="text-[10px] uppercase tracking-wider text-slate-400">
              Tools
            </p>
            <div className="mt-2 flex flex-wrap gap-1.5">
              {project.tools.map((t) => (
                <span
                  key={t}
                  className="inline-flex rounded-full bg-white/5 ring-1 ring-white/10 px-2.5 py-0.5 text-[11px] text-slate-200"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* CTAs */}
          <div className="mt-7 flex flex-col sm:flex-row gap-2">
            <Link
              href={siteConfig.contact.calendar}
              target="_blank"
              rel="noreferrer"
              className="btn-primary px-4 py-2.5 text-sm w-full sm:w-auto"
              onClick={(e) => e.stopPropagation()}
            >
              Book a Call <ArrowRight className="h-3.5 w-3.5" />
            </Link>
            <Link
              href="/case-studies"
              className="btn-outline px-4 py-2.5 text-sm w-full sm:w-auto !text-white !border-white/20 hover:!bg-white/10"
              onClick={(e) => e.stopPropagation()}
            >
              Read Case Study <ExternalLink className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

function Section({ label, body }: { label: string; body: string }) {
  return (
    <div>
      <p className="text-[10px] uppercase tracking-wider text-slate-400">
        {label}
      </p>
      <p className="mt-1 text-slate-200 leading-relaxed">{body}</p>
    </div>
  );
}
