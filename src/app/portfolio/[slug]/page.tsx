import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { ArrowLeft, ArrowUpRight, ExternalLink } from "lucide-react";
import { projects } from "@/data/projects";
import { CTASection } from "@/components/sections/CTASection";

type Props = {
  params: { slug: string };
};

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) return { title: "Project Not Found" };
  return {
    title: `${project.title} — Portfolio`,
    description: project.solution,
  };
}

export default function ProjectDetailPage({ params }: Props) {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) notFound();

  const relatedProjects = projects
    .filter((p) => p.category === project.category && p.slug !== project.slug)
    .slice(0, 3);

  return (
    <>
      {/* Header */}
      <section className="relative overflow-hidden pt-28 pb-8">
        <div className="glow-orb h-[300px] w-[300px] -left-20 top-0 bg-electric" />
        <div className="glow-orb h-[300px] w-[300px] -right-20 top-20 bg-neon-purple" />
        <div className="absolute inset-0 grid-bg opacity-40" />

        <div className="container relative">
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400 hover:text-electric transition-colors mb-6"
          >
            <ArrowLeft className="h-4 w-4" /> Back to Portfolio
          </Link>

          <div className="flex flex-wrap items-start gap-3 mb-4">
            <span className="inline-flex items-center rounded-full bg-electric/10 dark:bg-electric/20 px-3 py-1 text-xs font-semibold text-electric">
              {project.category}
            </span>
            {project.year && (
              <span className="inline-flex items-center rounded-full bg-slate-100 dark:bg-white/5 px-3 py-1 text-xs text-slate-600 dark:text-slate-400">
                {project.year}
              </span>
            )}
          </div>

          <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 dark:text-white">
            {project.title}
          </h1>

          {project.liveUrl && (
            <Link
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-electric hover:underline"
            >
              <ExternalLink className="h-4 w-4" /> Visit Live Site
            </Link>
          )}
        </div>
      </section>

      {/* Main screenshot */}
      <section className="pb-12">
        <div className="container">
          <div className="relative rounded-2xl overflow-hidden glass-card shadow-glow">
            <div className="relative aspect-[16/9]">
              <Image
                src={project.image}
                alt={project.title}
                fill
                sizes="100vw"
                className="object-cover object-top"
                priority
                quality={100}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="pb-12">
        <div className="container max-w-4xl">
          {/* Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-10">
            {project.metrics.map((metric) => (
              <div
                key={metric.label}
                className="rounded-xl glass-card p-5 text-center"
              >
                <p className="font-display text-2xl md:text-3xl font-bold gradient-text">
                  {metric.value}
                </p>
                <p className="mt-1 text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400">
                  {metric.label}
                </p>
              </div>
            ))}
          </div>

          {/* Problem / Solution */}
          <div className="grid md:grid-cols-2 gap-8 mb-10">
            <div className="rounded-xl bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-800/30 p-6">
              <h3 className="text-sm font-bold uppercase tracking-wider text-red-700 dark:text-red-400 mb-3">
                The Problem
              </h3>
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                {project.problem}
              </p>
            </div>
            <div className="rounded-xl bg-emerald-50 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-800/30 p-6">
              <h3 className="text-sm font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400 mb-3">
                The Solution
              </h3>
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                {project.solution}
              </p>
            </div>
          </div>

          {/* Result */}
          <div className="rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 p-6 mb-10">
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-3">
              The Result
            </h3>
            <p className="text-lg font-semibold text-slate-900 dark:text-white">
              {project.result}
            </p>
          </div>

          {/* Tools */}
          <div className="mb-10">
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-4">
              Tools &amp; Technologies
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.tools.map((tool) => (
                <span
                  key={tool}
                  className="inline-flex items-center rounded-full bg-slate-100 dark:bg-white/10 px-4 py-2 text-sm text-slate-700 dark:text-slate-300 font-medium"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>

          {/* Screenshots gallery */}
          {project.screenshots.length > 1 && (
            <div className="mb-10">
              <h3 className="text-sm font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-4">
                Screenshots
              </h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {project.screenshots.map((src, i) => (
                  <div
                    key={i}
                    className="relative aspect-[16/10] rounded-xl overflow-hidden glass-card"
                  >
                    <Image
                      src={src}
                      alt={`${project.title} screenshot ${i + 1}`}
                      fill
                      sizes="(min-width: 640px) 50vw, 100vw"
                      className="object-cover object-top"
                      quality={100}
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center rounded-md bg-slate-100 dark:bg-white/5 px-2.5 py-1 text-xs text-slate-500 dark:text-slate-400"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Related projects */}
      {relatedProjects.length > 0 && (
        <section className="pb-16">
          <div className="container">
            <h2 className="font-display text-xl font-semibold text-slate-900 dark:text-white mb-6">
              Related Projects
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedProjects.map((p) => (
                <Link
                  key={p.slug}
                  href={`/portfolio/${p.slug}`}
                  className="group relative overflow-hidden rounded-2xl glass-card transition-all duration-300 hover:-translate-y-1 hover:shadow-glow"
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={p.image}
                      alt={p.title}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover object-top transition duration-500 group-hover:scale-105"
                      quality={100}
                    />
                    <span className="absolute top-3 left-3 inline-flex items-center rounded-full bg-black/50 backdrop-blur px-3 py-1 text-xs text-white">
                      {p.category}
                    </span>
                  </div>
                  <div className="p-4">
                    <h3 className="font-display text-base font-semibold text-slate-900 dark:text-white group-hover:text-electric transition-colors">
                      {p.title}
                    </h3>
                    <div className="mt-2 flex items-center gap-1 text-sm text-electric font-medium">
                      View project <ArrowUpRight className="h-3.5 w-3.5" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <CTASection />
    </>
  );
}
