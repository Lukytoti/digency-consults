"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  Download,
  Award,
  Calendar,
  Building2,
  ZoomIn,
  ZoomOut,
} from "lucide-react";
import { useState, useEffect, useCallback } from "react";
import type { Certification } from "@/data/certifications";

interface CertificationModalProps {
  certification: Certification | null;
  onClose: () => void;
}

export function CertificationModal({
  certification,
  onClose,
}: CertificationModalProps) {
  const [zoomed, setZoomed] = useState(false);
  const [imgError, setImgError] = useState(false);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    },
    [onClose]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    if (certification) document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [handleKeyDown, certification]);

  useEffect(() => {
    setZoomed(false);
    setImgError(false);
  }, [certification]);

  return (
    <AnimatePresence>
      {certification && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8"
          onClick={onClose}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />

          {/* Modal content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
            className="relative w-full max-w-5xl max-h-[90vh] overflow-y-auto rounded-3xl bg-white dark:bg-navy-900 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 rounded-full bg-black/50 backdrop-blur p-2 text-white hover:bg-black/70 transition-colors"
              aria-label="Close modal"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Certificate viewer */}
            <div className="relative overflow-hidden rounded-t-3xl bg-slate-900">
              {certification.type === "image" ? (
                <div
                  className={`relative transition-transform duration-300 ${
                    zoomed ? "cursor-zoom-out" : "cursor-zoom-in"
                  }`}
                  onClick={() => setZoomed(!zoomed)}
                >
                  <div
                    className={`relative aspect-[4/3] transition-transform duration-300 ${
                      zoomed ? "scale-150" : "scale-100"
                    }`}
                  >
                    {imgError ? (
                      <div className="absolute inset-0 bg-gradient-to-br from-electric/20 via-neon-purple/20 to-navy-900/60 flex flex-col items-center justify-center p-8 text-center">
                        <Award className="h-16 w-16 text-electric mb-4" />
                        <p className="font-display text-xl font-bold text-white">
                          {certification.name}
                        </p>
                        <p className="mt-2 text-slate-300">
                          {certification.issuer}
                        </p>
                        <p className="mt-4 text-sm text-slate-400">
                          Certificate image will be available soon
                        </p>
                      </div>
                    ) : (
                      <Image
                        src={certification.file}
                        alt={`${certification.name} certificate`}
                        fill
                        sizes="(min-width: 1024px) 80vw, 95vw"
                        className="object-contain"
                        quality={90}
                        onError={() => setImgError(true)}
                      />
                    )}
                  </div>
                </div>
              ) : (
                <div className="relative aspect-[4/3]">
                  <object
                    data={certification.file}
                    type="application/pdf"
                    className="w-full h-full"
                    aria-label={`${certification.name} PDF certificate`}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-electric/20 via-neon-purple/20 to-navy-900/60 flex flex-col items-center justify-center p-8 text-center">
                      <Award className="h-16 w-16 text-electric mb-4" />
                      <p className="font-display text-xl font-bold text-white">
                        {certification.name}
                      </p>
                      <p className="mt-2 text-slate-300">
                        {certification.issuer}
                      </p>
                      <p className="mt-4 text-sm text-slate-400">
                        PDF preview not available. Click the download button
                        below to view the certificate.
                      </p>
                    </div>
                  </object>
                </div>
              )}

              {/* Zoom button for images */}
              {certification.type === "image" && !imgError && (
                <button
                  onClick={() => setZoomed(!zoomed)}
                  className="absolute bottom-4 right-4 rounded-full bg-black/50 backdrop-blur p-2 text-white hover:bg-black/70 transition-colors"
                  aria-label={zoomed ? "Zoom out" : "Zoom in"}
                >
                  {zoomed ? (
                    <ZoomOut className="h-5 w-5" />
                  ) : (
                    <ZoomIn className="h-5 w-5" />
                  )}
                </button>
              )}
            </div>

            {/* Certificate details */}
            <div className="p-6 md:p-8">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <span className="inline-flex items-center rounded-full bg-electric/10 dark:bg-electric/20 px-3 py-1 text-xs font-semibold text-electric">
                    {certification.category}
                  </span>
                  <h2 className="mt-3 font-display text-2xl md:text-3xl font-bold text-slate-900 dark:text-white">
                    {certification.name}
                  </h2>
                </div>
                <a
                  href={certification.file}
                  download
                  className="btn-primary text-sm inline-flex items-center gap-2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Download className="h-4 w-4" /> Download Certificate
                </a>
              </div>

              {/* Details grid */}
              <div className="mt-6 grid grid-cols-2 md:grid-cols-3 gap-4">
                <div className="rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 p-4">
                  <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400">
                    <Building2 className="h-3.5 w-3.5" /> Issued By
                  </div>
                  <p className="mt-1 font-display text-sm font-bold text-slate-900 dark:text-white">
                    {certification.issuer}
                  </p>
                </div>
                <div className="rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 p-4">
                  <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400">
                    <Calendar className="h-3.5 w-3.5" /> Date
                  </div>
                  <p className="mt-1 font-display text-sm font-bold text-slate-900 dark:text-white">
                    {certification.date}
                  </p>
                </div>
                {certification.credentialId && (
                  <div className="rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 p-4">
                    <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400">
                      <Award className="h-3.5 w-3.5" /> Credential ID
                    </div>
                    <p className="mt-1 font-display text-sm font-bold text-slate-900 dark:text-white font-mono">
                      {certification.credentialId}
                    </p>
                  </div>
                )}
              </div>

              {/* Type indicator */}
              <div className="mt-4 flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
                <span className="inline-flex items-center rounded-full bg-slate-100 dark:bg-white/10 px-2.5 py-0.5 text-xs font-medium">
                  {certification.type === "pdf"
                    ? "PDF Document"
                    : "Certificate Image"}
                </span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
