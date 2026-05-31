import type { Metadata } from "next";
import { CalendarCheck, Linkedin, Mail, MessageCircle } from "lucide-react";
import { ContactForm } from "@/components/forms/ContactForm";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Contact / Book a Call — Digency Consults",
  description:
    "Book a free strategy call or send a message. I personally reply to every inquiry within 24 hours.",
};

export default function ContactPage() {
  return (
    <>
      <section className="relative overflow-hidden pt-32 pb-12">
        <div className="glow-orb h-[400px] w-[400px] -left-32 top-0 bg-electric" />
        <div className="glow-orb h-[400px] w-[400px] -right-32 top-32 bg-neon-purple" />
        <div className="absolute inset-0 grid-bg opacity-40" />

        <div className="container relative max-w-4xl">
          <p className="eyebrow">Book a Call</p>
          <h1 className="mt-4 font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-balance text-slate-900 dark:text-white">
            Let's map your <span className="gradient-text">revenue system</span> in 30 minutes.
          </h1>
          <p className="mt-5 text-lg text-slate-600 dark:text-slate-300">
            Tell me what you're trying to build, fix or scale. I personally
            reply within 24 hours and book strategy calls for projects where I
            can genuinely move the needle.
          </p>
        </div>
      </section>

      <section className="pb-24">
        <div className="container grid lg:grid-cols-5 gap-8 items-start">
          <div className="lg:col-span-2 space-y-4">
            <div className="rounded-2xl glass-card p-6">
              <p className="text-sm font-semibold text-slate-900 dark:text-white">
                Fastest ways to reach me
              </p>
              <ul className="mt-4 space-y-3 text-sm">
                <li>
                  <a
                    href={siteConfig.contact.calendar}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-3 group text-slate-700 dark:text-slate-200"
                  >
                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-electric to-neon-purple text-white">
                      <CalendarCheck className="h-4 w-4" />
                    </span>
                    Book a 30-min Strategy Call
                  </a>
                </li>
                <li>
                  <a
                    href={`https://wa.me/${siteConfig.contact.whatsapp}`}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-3 text-slate-700 dark:text-slate-200"
                  >
                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-500 text-white">
                      <MessageCircle className="h-4 w-4" />
                    </span>
                    WhatsApp me directly
                  </a>
                </li>
                <li>
                  <a
                    href={`mailto:${siteConfig.contact.email}`}
                    className="flex items-center gap-3 text-slate-700 dark:text-slate-200"
                  >
                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-slate-700 text-white">
                      <Mail className="h-4 w-4" />
                    </span>
                    {siteConfig.contact.email}
                  </a>
                </li>
                <li>
                  <a
                    href={siteConfig.social.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-3 text-slate-700 dark:text-slate-200"
                  >
                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-blue-600 text-white">
                      <Linkedin className="h-4 w-4" />
                    </span>
                    Connect on LinkedIn
                  </a>
                </li>
              </ul>
            </div>

            <div className="rounded-2xl glass-card p-6">
              <p className="text-sm font-semibold text-slate-900 dark:text-white">
                Working hours
              </p>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                Mon – Fri • 9am – 7pm WAT (UTC+1).
                <br />
                Async-friendly across all time zones.
              </p>
            </div>

            <div className="rounded-2xl glass-card p-6">
              <p className="text-sm font-semibold text-slate-900 dark:text-white">
                On the call we'll cover
              </p>
              <ul className="mt-3 space-y-2 text-sm text-slate-600 dark:text-slate-300">
                <li>• Where leads are leaking in your current funnel</li>
                <li>• The highest-leverage automation to ship first</li>
                <li>• Whether a Sprint, System or Engine fits</li>
                <li>• Realistic timeline + investment</li>
              </ul>
            </div>
          </div>

          <div className="lg:col-span-3 rounded-3xl glass-card p-6 md:p-8">
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
