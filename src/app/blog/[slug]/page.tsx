import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { blogPosts } from "@/data/blog";
import { formatDate } from "@/lib/utils";
import { CTASection } from "@/components/sections/CTASection";

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) return { title: "Post not found" };
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [post.cover],
    },
  };
}

export default function BlogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) notFound();

  return (
    <>
      <section className="relative overflow-hidden pt-32 pb-12">
        <div className="absolute inset-0 grid-bg opacity-40" />
        <div className="container relative max-w-3xl">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1 text-sm text-electric hover:underline"
          >
            <ArrowLeft className="h-4 w-4" /> All posts
          </Link>
          <p className="mt-6 text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400">
            {post.category} • {formatDate(post.date)} • {post.readTime}
          </p>
          <h1 className="mt-3 font-display text-3xl md:text-5xl font-bold text-slate-900 dark:text-white text-balance">
            {post.title}
          </h1>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-300">
            {post.excerpt}
          </p>
        </div>
      </section>

      <section className="pb-16">
        <div className="container max-w-4xl">
          <div className="relative aspect-[16/9] overflow-hidden rounded-3xl glass-card">
            <Image
              src={post.cover}
              alt={post.title}
              fill
              sizes="(min-width: 768px) 800px, 100vw"
              className="object-cover"
              priority
            />
          </div>
          <article className="prose prose-slate dark:prose-invert max-w-3xl mx-auto mt-10 text-slate-700 dark:text-slate-200 leading-relaxed">
            <p>{post.content}</p>
            <p>
              I'll keep updating this post as I ship new variations of this
              system in production. Want the playbook in your inbox? Subscribe
              below or DM me on{" "}
              <a
                className="text-electric"
                href={"https://www.linkedin.com/in/oluwatobi-olowookere-720b3610a/"}
              >
                LinkedIn
              </a>
              .
            </p>
          </article>
        </div>
      </section>

      <CTASection
        title="Want this kind of system in your business?"
        subtitle="Book a free strategy call. We'll map your funnel and find the highest-leverage automation in 30 minutes."
      />
    </>
  );
}
