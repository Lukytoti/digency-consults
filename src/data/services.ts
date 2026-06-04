export type Service = {
  slug: string;
  title: string;
  short: string;
  description: string;
  features: string[];
  color: "electric" | "purple" | "green";
};

export const services: Service[] = [
  {
    slug: "gohighlevel-crm-setup",
    title: "GoHighLevel CRM Setup",
    short:
      "Done-for-you GHL setup with pipelines, calendars, sub-accounts and snapshots.",
    description:
      "I configure your entire GoHighLevel sub-account from scratch — pipelines, opportunities, calendars, payments, custom fields and team roles — so you stop juggling tools and run everything from one CRM.",
    features: [
      "Sub-account & snapshot setup",
      "Pipelines & opportunity stages",
      "Custom fields & smart lists",
      "Calendar & payment configuration",
    ],
    color: "electric",
  },
  {
    slug: "ghl-workflow-automation",
    title: "GHL Workflow Automation",
    short:
      "Smart workflows that nurture leads, book calls and close clients on autopilot.",
    description:
      "Multi-channel workflows in GoHighLevel that nurture leads with email, SMS, WhatsApp and voice — triggered by forms, calls, payments or pipeline stages.",
    features: [
      "Lead nurture sequences",
      "Appointment reminders & no-show recovery",
      "Pipeline-based automations",
      "Reactivation & winback campaigns",
    ],
    color: "purple",
  },
  {
    slug: "n8n-automation",
    title: "n8n Automation",
    short:
      "Custom n8n workflows that connect your CRM, AI, databases and apps end-to-end.",
    description:
      "When GHL or Zapier isn't enough, I build production-grade n8n workflows that connect OpenAI, Supabase, Google Sheets, Stripe, GHL, WhatsApp and 200+ apps with full logic and error handling.",
    features: [
      "Custom multi-step workflows",
      "AI + OpenAI integrations",
      "Webhook & API orchestration",
      "Self-hosted or cloud deployment",
    ],
    color: "green",
  },
  {
    slug: "ai-voice-agent",
    title: "AI Voice Agent Setup",
    short:
      "24/7 AI voice agents that answer calls, qualify leads and book appointments.",
    description:
      "I deploy AI voice agents (VAPI, Bland, Synthflow, Retell) trained on your offer so they can answer calls, qualify prospects, transfer hot leads and push contacts straight into your CRM.",
    features: [
      "Inbound & outbound voice agents",
      "Custom prompts & guardrails",
      "Calendar booking via voice",
      "Live transfer + CRM logging",
    ],
    color: "electric",
  },
  {
    slug: "whatsapp-ai-agent",
    title: "WhatsApp AI Agent",
    short:
      "AI on WhatsApp that qualifies leads, answers FAQs and books calls instantly.",
    description:
      "WhatsApp Business API + AI that replies in seconds, qualifies leads with smart questions, books meetings and hands off to a human when it matters — all logged in your CRM.",
    features: [
      "WhatsApp Business API setup",
      "AI qualification flows",
      "Calendar booking inside chat",
      "Human handoff + CRM sync",
    ],
    color: "green",
  },
  {
    slug: "sales-funnel-design",
    title: "Sales Funnel Design",
    short:
      "High-converting funnels: opt-ins, VSLs, webinars, applications and upsells.",
    description:
      "Strategy + design + copy + tech for funnels that convert. From lead magnets and VSL pages to webinar registrations and high-ticket applications, fully integrated with GHL or your stack.",
    features: [
      "Lead magnet & opt-in funnels",
      "VSL & webinar funnels",
      "High-ticket application funnels",
      "Order bumps, upsells & downsells",
    ],
    color: "purple",
  },
  {
    slug: "website-design",
    title: "Website Design",
    short:
      "Premium, fast, SEO-ready websites that look like a SaaS, not a template.",
    description:
      "Custom Next.js, Framer or GHL websites with premium design, blazing-fast performance, perfect mobile UX and SEO baked in — built to win clients before they even talk to you.",
    features: [
      "Next.js / Framer / GHL builds",
      "Custom premium design",
      "SEO + Core Web Vitals",
      "CMS & blog integration",
    ],
    color: "electric",
  },
  {
    slug: "email-marketing-automation",
    title: "Email Marketing Automation",
    short:
      "Email sequences that nurture, sell and re-engage — written and automated.",
    description:
      "Welcome sequences, nurture campaigns, sales launches, abandoned-cart and reactivation emails — designed, written and automated end-to-end with deliverability done right.",
    features: [
      "Welcome & nurture sequences",
      "Promo & launch campaigns",
      "Abandoned cart & winback",
      "Deliverability & domain warmup",
    ],
    color: "purple",
  },
  {
    slug: "sms-automation",
    title: "SMS Automation",
    short:
      "SMS that books appointments, recovers no-shows and reactivates old leads.",
    description:
      "2-way SMS automations using Twilio or GoHighLevel — booking confirmations, reminders, no-show recovery, database reactivation and conversational AI on text.",
    features: [
      "Twilio / GHL SMS setup",
      "Appointment reminders",
      "Database reactivation",
      "AI 2-way text conversations",
    ],
    color: "green",
  },
  {
    slug: "lead-generation-systems",
    title: "Lead Generation Systems",
    short:
      "End-to-end systems that pull leads in and route them straight to your CRM.",
    description:
      "Paid ads, organic content funnels, lead magnets, scrapers, outbound sequences and CRM routing — all wired into one measurable system.",
    features: [
      "Cold email & LinkedIn outbound",
      "Lead magnet & opt-in funnels",
      "Scraping & enrichment workflows",
      "CRM routing & attribution",
    ],
    color: "electric",
  },
  {
    slug: "appointment-booking-automation",
    title: "Appointment Booking Automation",
    short:
      "Reduce no-shows and double your booked calls with smart booking automations.",
    description:
      "Round-robin calendars, instant confirmations, multi-channel reminders, reschedule flows and no-show recovery — so your calendar fills itself.",
    features: [
      "Round-robin team calendars",
      "Email + SMS + WhatsApp reminders",
      "No-show recovery flows",
      "Show-up rate analytics",
    ],
    color: "purple",
  },
  {
    slug: "crm-cleanup-optimization",
    title: "CRM Cleanup & Optimization",
    short:
      "Audit, clean and optimize your CRM so your team trusts the data again.",
    description:
      "Deep audits of your existing GHL, HubSpot or Pipedrive — deduping contacts, fixing tags, rebuilding pipelines and rewiring automations so reporting is accurate and revenue is unblocked.",
    features: [
      "Full CRM audit & report",
      "Dedupe + data hygiene",
      "Pipeline & tag restructure",
      "Reporting & dashboard rebuild",
    ],
    color: "green",
  },
];
