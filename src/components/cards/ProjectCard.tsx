import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/data/projects";
import { cn } from "@/lib/utils";

const accentMap: Record<Project["accent"], string> = {
  electric: "from-electric/30 via-transparent to-transparent",
  purple: "from-neon-purple/30 via-transparent to-transparent",
  green: "from-neon-green/30 via-transparent to-transparent",
};

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group relative overflow-hidden rounded-2xl glass-card transition-all duration-300 hover:-translate-y-1 hover:shadow-glow">
      <Link href={`/portfolio/${project.slug}`} className="block">
        <div className="relative aspect-[16/10] overflow-hidden">
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover object-top transition duration-500 group-hover:scale-105"
            quality={100}
          />
          <div
            className={cn(
              "pointer-events-none absolute inset-0 bg-gradient-to-tr",
              accentMap[project.accent]
            )}
          />
          <span className="absolute top-3 left-3 inline-flex items-center rounded-full bg-black/50 backdrop-blur px-3 py-1 text-xs text-white">
            {project.category}
          </span>
        </div>

        <div className="p-6">
          <h3 className="font-display text-lg font-semibold text-slate-900 dark:text-white">
            {project.title}
          </h3>

          <dl className="mt-4 space-y-3 text-sm">
            <div>
              <dt className="text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400">
                Problem
              </dt>
              <dd className="mt-1 text-slate-700 dark:text-slate-300">
                {project.problem}
              </dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400">
                Solution
              </dt>
              <dd className="mt-1 text-slate-700 dark:text-slate-300">
                {project.solution}
              </dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400">
                Tools
              </dt>
              <dd className="mt-1 flex flex-wrap gap-1.5">
                {project.tools.map((t) => (
                  <span
                    key={t}
                    className="inline-flex items-center rounded-full bg-slate-100 dark:bg-white/5 px-2.5 py-0.5 text-xs text-slate-700 dark:text-slate-300"
                  >
                    {t}
                  </span>
                ))}
              </dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400">
                Result
              </dt>
              <dd className="mt-1 font-semibold text-emerald-600 dark:text-emerald-400">
                {project.result}
              </dd>
            </div>
          </dl>

          <span className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-electric">
            View Project
            <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </span>
        </div>
      </Link>
    </article>
  );
}
