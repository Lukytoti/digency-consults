import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/cards/ProjectCard";

export function FeaturedProjects() {
  const featured = projects.filter((p) => p.featured).slice(0, 3);

  return (
    <section className="section relative">
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div className="max-w-2xl">
            <p className="eyebrow">Featured projects</p>
            <h2 className="mt-4 section-title text-slate-900 dark:text-white text-balance">
              Real systems. Real revenue. Real results.
            </h2>
            <p className="mt-4 text-slate-600 dark:text-slate-300">
              A snapshot of recent CRM, AI and automation systems I've built.
              Every project ships with measurable outcomes — not just a pretty
              dashboard.
            </p>
          </div>
          <Link href="/portfolio" className="btn-outline self-start md:self-auto">
            View all projects <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
