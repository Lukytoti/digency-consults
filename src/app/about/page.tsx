import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Linkedin, Sparkles } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { CTASection } from "@/components/sections/CTASection";
import { ToolStackSection } from "@/components/sections/ToolStackSection";
import { ResultsSection } from "@/components/sections/ResultsSection";
import { SocialProofSection } from "@/components/sections/SocialProofSection";
import { CertificationsSection } from "@/components/certifications";
import { certifications } from "@/data/certifications";

export const metadata: Metadata = {
  title: "About Me — AI & CRM Infrastructure Engineer",
  description:
    "I'm Oluwatobi Olowookere, an AI & CRM Infrastructure Engineer building backend automation, CRM systems and revenue engines for businesses worldwide.",
};

export default function AboutPage() {
  const certificationsJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.founder.name,
    jobTitle: siteConfig.founder.role,
    url: siteConfig.url,
    hasCredential: certifications.map((cert) => ({
      "@type": "EducationalOccupationalCredential",
      name: cert.name,
      credentialCategory: cert.category,
      recognizedBy: {
        "@type": "Organization",
        name: cert.issuer,
      },
      dateCreated: cert.date,
      ...(cert.credentialId && { identifier: cert.credentialId }),
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(certificationsJsonLd),
        }}
      />
      <section className="relative overflow-hidden pt-32 pb-16">
        <div className="glow-orb h-[400px] w-[400px] -left-32 top-0 bg-electric" />
        <div className="glow-orb h-[400px] w-[400px] -right-32 top-32 bg-neon-purple" />
        <div className="absolute inset-0 grid-bg opacity-40" />

        <div className="container relative grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="eyebrow">About Me</p>
            <h1 className="mt-4 font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-balance text-slate-900 dark:text-white">
              I'm <span className="gradient-text">Oluwatobi Olowookere</span> — and I build the AI &amp; CRM infrastructure most agencies are missing.
            </h1>
            <p className="mt-5 text-lg text-slate-600 dark:text-slate-300">
              {siteConfig.tagline} I help operators turn duct-taped tools into
              one clean, measurable system that captures leads, follows up
              automatically and converts more clients.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Link
                href={siteConfig.contact.calendar}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary px-6 py-3.5 w-full sm:w-auto min-h-[48px] justify-center"
              >
                Book a Strategy Call <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href={siteConfig.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary px-6 py-3.5 w-full sm:w-auto min-h-[48px] justify-center"
              >
                <Linkedin className="h-4 w-4" /> Connect on LinkedIn
              </a>
            </div>
          </div>

          <div className="relative">
            {/* Founder photo */}
            <div className="relative rounded-3xl overflow-hidden glass-card p-2 mb-6">
              <div className="relative aspect-[4/3] sm:aspect-[4/5] rounded-2xl overflow-hidden">
                <Image
                  src="/tobi.png"
                  alt="Oluwatobi Olowookere — AI & CRM Infrastructure Engineer"
                  fill
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  className="object-cover object-top"
                  priority
                  quality={90}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="font-display text-xl font-bold text-white">
                    {siteConfig.founder.name}
                  </p>
                  <p className="text-sm text-slate-300">
                    {siteConfig.founder.role}
                  </p>
                </div>
              </div>
            </div>

            <div className="relative rounded-3xl glass-card p-2">
              <div className="rounded-2xl bg-gradient-to-br from-navy-900 via-navy-950 to-black p-8 text-white">
                <div className="flex items-center gap-3">
                  <div className="relative h-12 w-12 rounded-full overflow-hidden border-2 border-electric">
                    <Image
                      src="/tobi.png"
                      alt={siteConfig.founder.name}
                      fill
                      className="object-cover"
                      quality={90}
                    />
                  </div>
                  <div>
                    <p className="font-display text-lg font-semibold">
                      {siteConfig.founder.name}
                    </p>
                    <p className="text-xs text-slate-400">
                      {siteConfig.founder.role}
                    </p>
                  </div>
                </div>
                <p className="mt-5 text-slate-300 text-sm leading-relaxed">
                  {siteConfig.founder.headline}
                </p>
                <div className="mt-6 grid grid-cols-3 gap-3">
                  {[
                    { v: "20+", l: "Projects" },
                    { v: "190+", l: "Followers" },
                    { v: "8+", l: "AI agents" },
                  ].map((s) => (
                    <div
                      key={s.l}
                      className="rounded-xl border border-white/10 bg-white/5 p-3 text-center"
                    >
                      <p className="font-display text-xl font-bold text-electric">
                        {s.v}
                      </p>
                      <p className="text-[11px] text-slate-400">{s.l}</p>
                    </div>
                  ))}
                </div>
                <a
                  href={siteConfig.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-2 text-sm text-electric"
                >
                  <Linkedin className="h-4 w-4" /> View LinkedIn profile
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
            <h2 className="section-title text-slate-900 dark:text-white text-balance">
              From scattered SaaS tools to one revenue system.
            </h2>
            <p>
              I started as a web developer building marketing sites for small
              businesses, but I kept noticing the same pattern: beautiful
              websites with no system behind them. Leads came in. Leads went
              cold. Founders blamed the ads, the copy, the moon — anything but
              the infrastructure.
            </p>
            <p>
              So I went deep into automation. GoHighLevel, n8n, Zapier, Make,
              OpenAI, Twilio, WhatsApp Business API. I started rebuilding the
              backend before touching the front-end. The results spoke for
              themselves: 3x more booked calls, AI agents replying in 8
              seconds, $18k/month captured from after-hours calls a clinic was
              losing to voicemail.
            </p>
            <p>
              Today I work with founders, agencies, real estate brokerages,
              coaches and SaaS operators who are done with duct tape. They want
              one infrastructure stack — CRM, funnels, AI, follow-up, reporting
              — that works without them babysitting it.
            </p>
            <p>
              That's what I build. Quietly. In production. With receipts.
            </p>

            <div className="rounded-2xl glass-card p-6 mt-8">
              <p className="text-sm font-semibold text-electric uppercase tracking-wider">
                My positioning
              </p>
              <p className="mt-2 text-lg text-slate-900 dark:text-white">
                AI &amp; CRM Infrastructure Engineer helping businesses build
                backend automation, CRM systems, AI workflows, and revenue
                systems using GoHighLevel, n8n, OpenAI, Zapier, Make, and other
                automation tools.
              </p>
            </div>
          </div>

          <aside className="space-y-4">
            <div className="rounded-2xl glass-card p-6">
              <p className="text-sm font-semibold text-slate-900 dark:text-white">
                What I focus on
              </p>
              <ul className="mt-4 space-y-2 text-sm text-slate-600 dark:text-slate-300">
                {[
                  "GoHighLevel CRM systems",
                  "n8n workflows in production",
                  "AI voice + WhatsApp agents",
                  "Sales funnels that convert",
                  "Premium Next.js websites",
                  "Email & SMS infrastructure",
                ].map((s) => (
                  <li key={s} className="flex items-start gap-2">
                    <Sparkles className="h-4 w-4 mt-0.5 text-electric" />
                    {s}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl glass-card p-6">
              <p className="text-sm font-semibold text-slate-900 dark:text-white">
                How I work
              </p>
              <ul className="mt-4 space-y-2 text-sm text-slate-600 dark:text-slate-300">
                <li>• Strategy-first, deliverables second</li>
                <li>• Loom walkthroughs + written SOPs</li>
                <li>• Async-friendly, time-zone agnostic</li>
                <li>• Production-grade or I won't ship it</li>
              </ul>
            </div>
          </aside>
        </div>
      </section>

      <CertificationsSection />
      <ToolStackSection />
      <ResultsSection />
      <SocialProofSection />
      <CTASection />
    </>
  );
}
