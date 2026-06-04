import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { WhatsAppLogo } from "@/components/icons/BrandIcons";

export function CTASection({
  title = "Ready to turn your business into a system that prints leads?",
  subtitle = "Book a free 30-minute strategy call. We'll map your funnel, find the biggest revenue leak, and decide if working together makes sense.",
}: {
  title?: string;
  subtitle?: string;
}) {
  return (
    <section className="section relative overflow-hidden">
      <div className="container relative">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-navy-900 via-navy-950 to-black p-10 md:p-16 text-white">
          <div className="glow-orb h-[400px] w-[400px] -top-32 -right-32 bg-electric" />
          <div className="glow-orb h-[400px] w-[400px] -bottom-32 -left-32 bg-neon-purple" />
          <div className="absolute inset-0 grid-bg opacity-30" />

          <div className="relative max-w-3xl">
            <p className="eyebrow !text-neon-green">Final CTA</p>
            <h2 className="mt-4 font-display text-3xl md:text-5xl font-bold tracking-tight text-balance">
              {title}
            </h2>
            <p className="mt-4 text-slate-300 text-lg">{subtitle}</p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Link
                href={siteConfig.contact.calendar}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary px-6 py-3.5"
              >
                Book a Strategy Call <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href={siteConfig.contact.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="btn px-6 py-3.5 border border-white/20 text-white hover:bg-white/10"
              >
                <WhatsAppLogo className="h-4 w-4" /> Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
