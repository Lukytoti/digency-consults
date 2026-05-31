import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";
import { blogPosts } from "@/data/blog";
import { caseStudies } from "@/data/case-studies";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url;
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    "",
    "/about",
    "/services",
    "/portfolio",
    "/case-studies",
    "/testimonials",
    "/blog",
    "/contact",
  ].map((p) => ({
    url: `${base}${p}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: p === "" ? 1 : 0.8,
  }));

  const blogRoutes: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${base}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const caseRoutes: MetadataRoute.Sitemap = caseStudies.map((c) => ({
    url: `${base}/case-studies#${c.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticRoutes, ...blogRoutes, ...caseRoutes];
}
