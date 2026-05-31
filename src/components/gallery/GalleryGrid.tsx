"use client";

import { AnimatePresence, motion } from "framer-motion";
import type { Project } from "@/data/projects";
import { GalleryCard } from "./GalleryCard";

interface GalleryGridProps {
  projects: Project[];
  onSelect: (project: Project) => void;
}

export function GalleryGrid({ projects, onSelect }: GalleryGridProps) {
  return (
    <motion.div
      layout
      className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
    >
      <AnimatePresence mode="popLayout">
        {projects.map((project, index) => (
          <GalleryCard
            key={project.slug}
            project={project}
            index={index}
            onSelect={onSelect}
          />
        ))}
      </AnimatePresence>
    </motion.div>
  );
}
