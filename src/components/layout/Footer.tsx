import Link from "next/link";
import { Sparkles, Linkedin, Mail, MessageCircle, ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { NewsletterForm } from "@/components/forms/NewsletterForm";

export function Footer() {
  return (
    <footer className="relative border-t border-slate-200/70 dark:border-white/10 bg-white dark:bg-navy-950">
      <div className="container py-12 sm:py-16 md:py-20 grid gap-10 sm:gap-12 sm:grid-cols-2 lg:grid-cols-4">
        <div className="sm:col-span-2 lg:col-span-2 max-w-md">
          <Link href="/" className="flex items-center gap-2 font-display text-lg font-bold">
            <span className="relative inline-flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-electric via-neon-purple to-neon-green text-white shadow-glow">
              <Sparkles className="h-4 w-4" />
            </span>
            <span className="text-slate-900 dark:text-white">
              {siteConfig.name}
              <span className="text-electric">.</span>
            </span>
          </Link>
          <p className="mt-4 text-sm text-slate-600 dark:text-slate-400">
            {siteConfig.tagline} GoHighLevel • n8n • OpenAI • WhatsApp •
            funnels • websites.
          </p>

          <div className="mt-6">
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
              Get the AI + CRM playbook
            </p>
            <NewsletterForm className="mt-3" />
          </div>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-slate-900 dark:text-white">
            Company
          </h4>
          <ul className="mt-4 space-y-2 text-sm">
            {[
              { label: "About Me", href: "/about" },
              { label: "Services", href: "/services" },
              { label: "Portfolio", href: "/portfolio" },
              { label: "Case Studies", href: "/case-studies" },
              { label: "Blog", href: "/blog" },
              { label: "Contact", href: "/contact" },
            ].map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="text-slate-600 hover:text-electric dark:text-slate-300"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-slate-900 dark:text-white">
            Connect
          </h4>
          <ul className="mt-4 space-y-3 text-sm">
            <li>
              <a
                href={siteConfig.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-slate-600 hover:text-electric dark:text-slate-300"
              >
                <Linkedin className="h-4 w-4" /> LinkedIn
                <ArrowUpRight className="h-3 w-3" />
              </a>
            </li>
            <li>
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="inline-flex items-center gap-2 text-slate-600 hover:text-electric dark:text-slate-300"
              >
                <Mail className="h-4 w-4" /> {siteConfig.contact.email}
              </a>
            </li>
            <li>
              <a
                href={siteConfig.contact.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-slate-600 hover:text-electric dark:text-slate-300"
              >
                <MessageCircle className="h-4 w-4" /> WhatsApp
              </a>
            </li>
            <li>
              <a
                href={siteConfig.contact.calendar}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-slate-600 hover:text-electric dark:text-slate-300"
              >
                Book a Strategy Call
                <ArrowUpRight className="h-3 w-3" />
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-slate-200/70 dark:border-white/10">
        <div className="container py-6 flex flex-col md:flex-row items-center justify-between gap-2 text-xs text-slate-500 dark:text-slate-400">
          <p>
            © {new Date().getFullYear()} {siteConfig.name}. Built by{" "}
            <a
              href={siteConfig.founder.linkedin}
              className="text-electric hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              {siteConfig.founder.name}
            </a>
            .
          </p>
          <p>
            AI &amp; CRM Infrastructure • GoHighLevel • n8n • OpenAI •
            WhatsApp • Funnels
          </p>
        </div>
      </div>
    </footer>
  );
}
