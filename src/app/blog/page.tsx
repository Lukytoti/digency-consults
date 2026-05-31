import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { blogPosts } from "@/data/blog";
import { formatDate } from "@/lib/utils";
import { CTASection } from "@/components/sections/CTASection";
import { NewsletterForm } from "@/components/forms/NewsletterForm";

export const metadata: Metadata = {
  title: "Blog — AI, CRM, Funnels & Automation Playbooks",
  description:
    "Tactical playbooks on GoHighLevel, n8n, AI voice agents, WhatsApp automation and high-converting funnels.",
};

export default function BlogPage() {
  return (
    <>
      <section className="relative overflow-hidden pt-32 pb-16">
        <div className="glow-orb h-[400px] w-[400px] -left-32 top-0 bg-electric" />
        <div className="glow-orb h-[400px] w-[400px] -right-32 top-32 bg-neon-purple" />
        <div className="absolute inset-0 grid-bg opacity-40" />

        <div className="container relative max-w-4xl">
          <p className="eyebrow">Blog</p>
          <h1 className="mt-4 font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-balance text-slate-900 dark:text-white">
            Playbooks on AI, CRM, funnels &amp; automation.
          </h1>
          <p className="mt-5 text-lg text-slate-600 dark:text-slate-300">
            Tactical breakdowns of the systems I deploy in production. No
            fluff, no hype — just the architecture and the numbers.
          </p>

          <div className="mt-8 max-w-md">
            <NewsletterForm />
          </div>
        </div>
      </section>

      <section className="pb-20">
        <div className="container grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group rounded-2xl glass-card overflow-hidden transition hover:-translate-y-1 hover:shadow-glow"
            >
              <div className="relative aspect-[16/9] overflow-hidden">
                <Image
                  src={post.cover}
                  alt={post.title}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
                <span className="absolute top-3 left-3 inline-flex items-center rounded-full bg-black/60 backdrop-blur px-3 py-1 text-xs text-white">
                  {post.category}
                </span>
              </div>
              <div className="p-6">
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  {formatDate(post.date)} • {post.readTime}
                </p>
                <h3 className="mt-2 font-display text-lg font-semibold text-slate-900 dark:text-white">
                  {post.title}
                </h3>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                  {post.excerpt}
                </p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-electric">
                  Read article <ArrowRight className="h-4 w-4" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <CTASection
        title="Want playbooks like these in your inbox?"
        subtitle="Get the AI + CRM playbook every other week. No spam. Unsubscribe anytime."
      />
    </>
  );
}
