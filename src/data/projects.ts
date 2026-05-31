export const projectCategories = [
  "All",
  "Automation",
  "GoHighLevel / CRM",
  "Website Design",
  "Sales Funnels",
  "AI Agents",
  "WhatsApp Automation",
  "Email Marketing",
  "SMS Marketing",
  "Lead Generation",
  "Other Projects",
] as const;

export type ProjectCategory = (typeof projectCategories)[number];

export type Project = {
  /** Unique slug — also used to deduplicate. */
  slug: string;
  title: string;
  category: Exclude<ProjectCategory, "All">;
  /** Short tagline shown in cards. */
  description: string;
  problem: string;
  solution: string;
  tools: string[];
  result: string;
  metrics: { label: string; value: string }[];
  /** Hero image. Drop real screenshots into /public/images/projects/ and update this path. */
  image: string;
  /** Optional gallery for the lightbox. */
  gallery?: string[];
  /** Used to lay out a masonry grid (1 = portrait, 2 = landscape). */
  aspect?: "portrait" | "landscape" | "square";
  accent: "electric" | "purple" | "green";
  featured?: boolean;
};

/**
 * Project catalog.
 *
 * 🖼  How to add real screenshots:
 *   1. Upload images to /public/images/projects/<slug>/cover.jpg (and 01.jpg, 02.jpg…)
 *   2. Replace the `image` and `gallery` fields below with those local paths.
 *   3. Slugs must remain unique — the gallery dedupes by slug.
 */
export const projects: Project[] = [
  // ───────────── Automation ─────────────
  {
    slug: "real-estate-lead-automation",
    title: "Real Estate Lead Automation",
    category: "Automation",
    description:
      "Instant multi-channel response system for a Facebook-ads-driven brokerage.",
    problem:
      "A real-estate brokerage was losing leads from Facebook ads because agents replied hours late and forgot to follow up.",
    solution:
      "Built a GHL pipeline with instant SMS + WhatsApp + email replies, AI qualification, round-robin agent assignment and a 14-day follow-up cadence.",
    tools: ["GoHighLevel", "n8n", "OpenAI", "WhatsApp API", "Twilio"],
    result:
      "Lead response time dropped from 4 hours to under 60 seconds. Booked viewings increased 3.2x in 60 days.",
    metrics: [
      { label: "Response time", value: "<60s" },
      { label: "Booked viewings", value: "+220%" },
      { label: "Cost / booked call", value: "-41%" },
    ],
    image:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1400&q=80",
    aspect: "landscape",
    accent: "electric",
    featured: true,
  },
  {
    slug: "n8n-multi-app-orchestration",
    title: "n8n Multi-App Orchestration",
    category: "Automation",
    description:
      "Custom n8n workflows linking Stripe, Supabase, GHL and Slack with full error handling.",
    problem:
      "A SaaS team had 7 SaaS tools that didn't talk to each other — data was getting lost between Stripe, GHL and their support inbox.",
    solution:
      "Built a self-hosted n8n instance with retry logic, dead-letter queues and observability dashboards. 24 production workflows, 100k+ executions/month.",
    tools: ["n8n", "Supabase", "Stripe", "GoHighLevel", "Slack"],
    result:
      "Zero lost events in 90 days. Ops team saves ~30 hours/week from removed manual sync work.",
    metrics: [
      { label: "Workflows", value: "24" },
      { label: "Executions / mo", value: "100k+" },
      { label: "Time saved", value: "30 hrs/wk" },
    ],
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1400&q=80",
    aspect: "landscape",
    accent: "purple",
  },

  // ───────────── GoHighLevel / CRM ─────────────
  {
    slug: "ghl-pipeline-workflow-setup",
    title: "GHL Pipeline & Workflow Setup",
    category: "GoHighLevel / CRM",
    description:
      "Full GoHighLevel build for a 6-person agency — pipelines, workflows, dashboards.",
    problem:
      "A 6-person agency had GHL but used <10% of it — no pipelines, no automations, no reporting.",
    solution:
      "Full snapshot install, 3 sales pipelines, 14 workflows, role permissions, dashboards and a team SOP doc so the workflow stuck.",
    tools: ["GoHighLevel", "Snapshots", "Looker Studio"],
    result:
      "Team adopted GHL fully in 2 weeks. Forecasting accuracy reached 92% in month 2.",
    metrics: [
      { label: "Workflows live", value: "14" },
      { label: "Adoption", value: "100%" },
      { label: "Forecast accuracy", value: "92%" },
    ],
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1400&q=80",
    aspect: "landscape",
    accent: "electric",
    featured: true,
  },
  {
    slug: "ghl-crm-cleanup",
    title: "GHL CRM Cleanup & Restructure",
    category: "GoHighLevel / CRM",
    description:
      "Audit + dedupe + tag restructure that fixed broken reporting for a coaching brand.",
    problem:
      "After 18 months of duct-tape changes, the GHL account had 14k duplicate contacts and reporting was unusable.",
    solution:
      "Ran a full audit, deduped contacts, restructured tags into 4 clear families, rebuilt 9 smart lists and recreated dashboards from scratch.",
    tools: ["GoHighLevel", "Phantombuster", "Looker Studio"],
    result:
      "Reporting accuracy back to 100%. Sales team trust in CRM data restored within a week.",
    metrics: [
      { label: "Duplicates removed", value: "14k" },
      { label: "Smart lists", value: "9" },
      { label: "Reporting", value: "100%" },
    ],
    image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1400&q=80",
    aspect: "portrait",
    accent: "green",
  },

  // ───────────── Website Design ─────────────
  {
    slug: "premium-consultancy-website",
    title: "Premium Consultancy Website",
    category: "Website Design",
    description:
      "Next.js website rebuild that went from 'looks like a freelancer' to high-ticket-ready.",
    problem:
      "A consultancy looked like a freelancer — outdated WordPress site, slow load times, no SEO and no clear CTA.",
    solution:
      "Designed and built a premium Next.js website with dark/light mode, blog, case studies, lead capture and Cal.com integration. Optimized for Core Web Vitals.",
    tools: ["Next.js", "Tailwind CSS", "Vercel", "Resend"],
    result:
      "PageSpeed 98/100. Inbound qualified calls grew from 2 to 18 per month.",
    metrics: [
      { label: "PageSpeed", value: "98/100" },
      { label: "Qualified calls", value: "2 → 18 / mo" },
      { label: "Bounce rate", value: "-52%" },
    ],
    image:
      "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&w=1400&q=80",
    aspect: "landscape",
    accent: "purple",
    featured: true,
  },
  {
    slug: "saas-marketing-site",
    title: "SaaS Marketing Site",
    category: "Website Design",
    description:
      "B2B SaaS marketing site with pricing, docs and a built-in lead capture engine.",
    problem:
      "A SaaS startup was driving paid traffic to a single landing page that didn't communicate the product depth.",
    solution:
      "Built a full Next.js marketing site with pricing, integrations, docs, blog and animated product UI sections.",
    tools: ["Next.js", "Tailwind", "Framer Motion", "Vercel"],
    result:
      "Demo bookings tripled in the first month after launch.",
    metrics: [
      { label: "Demo bookings", value: "+200%" },
      { label: "Time on site", value: "+128%" },
      { label: "PageSpeed", value: "97/100" },
    ],
    image:
      "https://images.unsplash.com/photo-1559028012-481c04fa702d?auto=format&fit=crop&w=1400&q=80",
    aspect: "portrait",
    accent: "electric",
  },

  // ───────────── Sales Funnels ─────────────
  {
    slug: "webinar-funnel-automation",
    title: "Webinar Funnel Automation",
    category: "Sales Funnels",
    description:
      "Webinar registration + AI replay system that 5x'd revenue per launch.",
    problem:
      "A coaching business had a 12% webinar show-up rate and an even lower close rate from their replays.",
    solution:
      "Rebuilt the registration funnel with VSL, designed a 6-step reminder sequence (email + SMS + WhatsApp), AI replay follow-up and a high-ticket application flow.",
    tools: ["GoHighLevel", "Funnels", "Resend", "WhatsApp", "Stripe"],
    result:
      "Show-up rate went from 12% to 41%. High-ticket applications jumped 4.5x in one launch cycle.",
    metrics: [
      { label: "Show-up rate", value: "12% → 41%" },
      { label: "Applications", value: "+350%" },
      { label: "Revenue / launch", value: "+5x" },
    ],
    image:
      "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1400&q=80",
    aspect: "landscape",
    accent: "purple",
    featured: true,
  },
  {
    slug: "high-ticket-application-funnel",
    title: "High-Ticket Application Funnel",
    category: "Sales Funnels",
    description:
      "VSL → application → call funnel for a $10k+ coaching offer.",
    problem:
      "An expert coach was selling a $10k offer through DMs and had no scalable application process.",
    solution:
      "Built a VSL funnel with multi-step application form, automated qualification scoring and call booking only for qualified leads.",
    tools: ["GoHighLevel", "Cal.com", "Stripe", "OpenAI"],
    result:
      "Booked calls now 100% qualified. Close rate jumped from ~12% to ~38%.",
    metrics: [
      { label: "Close rate", value: "12% → 38%" },
      { label: "Time per close", value: "-44%" },
      { label: "Pipeline value", value: "+3.1x" },
    ],
    image:
      "https://images.unsplash.com/photo-1573164574572-cb89e39749b4?auto=format&fit=crop&w=1400&q=80",
    aspect: "portrait",
    accent: "electric",
  },

  // ───────────── AI Agents ─────────────
  {
    slug: "ai-voice-receptionist",
    title: "AI Voice Receptionist",
    category: "AI Agents",
    description:
      "VAPI voice agent that captures 92% of after-hours calls for a dental clinic.",
    problem:
      "A dental clinic was missing 35% of after-hours calls and losing high-value bookings to competitors.",
    solution:
      "Deployed a VAPI-based AI voice receptionist that answers 24/7, books appointments into GHL, sends a confirmation SMS and forwards emergencies to the on-call dentist.",
    tools: ["VAPI", "OpenAI", "GoHighLevel", "Twilio"],
    result:
      "Captured 92% of after-hours calls. Added an extra $18k/month in booked appointments.",
    metrics: [
      { label: "Calls captured", value: "92%" },
      { label: "Extra revenue", value: "$18k/mo" },
      { label: "Setup time", value: "8 days" },
    ],
    image:
      "https://images.unsplash.com/photo-1589254065878-42c9da997008?auto=format&fit=crop&w=1400&q=80",
    aspect: "landscape",
    accent: "purple",
    featured: true,
  },
  {
    slug: "retell-ai-outbound-agent",
    title: "Retell AI Outbound Agent",
    category: "AI Agents",
    description:
      "Outbound AI agent that pre-qualifies inbound form fills with a phone call.",
    problem:
      "Sales reps were burning hours calling cold form-fills, most of which never picked up.",
    solution:
      "Built a Retell AI outbound agent that calls every new lead within 60 seconds, qualifies them, and routes hot leads to a human rep on Slack.",
    tools: ["Retell AI", "OpenAI", "n8n", "GoHighLevel"],
    result:
      "Connected rate up 3.4x. Reps spend their time only on pre-qualified leads.",
    metrics: [
      { label: "Connect rate", value: "+340%" },
      { label: "Time per lead", value: "-72%" },
      { label: "SQLs / week", value: "+58%" },
    ],
    image:
      "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=1400&q=80",
    aspect: "portrait",
    accent: "green",
  },

  // ───────────── WhatsApp Automation ─────────────
  {
    slug: "whatsapp-ai-lead-qualification",
    title: "WhatsApp AI Lead Qualification System",
    category: "WhatsApp Automation",
    description:
      "OpenAI + n8n agent that qualifies inbound WhatsApp leads in 8 seconds.",
    problem:
      "A B2B agency burned hours every day manually qualifying inbound WhatsApp leads from ads and referrals.",
    solution:
      "Built an AI WhatsApp agent (OpenAI + n8n) that asks 5 qualifying questions, books calls into Cal.com, tags the lead in GHL and notifies the rep on Slack only for hot leads.",
    tools: ["OpenAI", "n8n", "WhatsApp API", "GoHighLevel", "Slack"],
    result:
      "Saved 20+ hours/week of manual chat. SQLs grew 60% with no extra ad spend.",
    metrics: [
      { label: "Time saved", value: "20 hrs/wk" },
      { label: "Qualified leads", value: "+60%" },
      { label: "Avg reply time", value: "8s" },
    ],
    image:
      "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&w=1400&q=80",
    aspect: "landscape",
    accent: "green",
    featured: true,
  },
  {
    slug: "whatsapp-broadcast-automation",
    title: "WhatsApp Broadcast Automation",
    category: "WhatsApp Automation",
    description:
      "Compliant WhatsApp Business API broadcast system with template approvals.",
    problem:
      "A coaching brand wanted to launch on WhatsApp but kept getting templates rejected and accounts banned.",
    solution:
      "Set up the WhatsApp Business API with approved templates, opt-in flows, segmentation and engagement tracking.",
    tools: ["WhatsApp Business API", "n8n", "Supabase"],
    result:
      "Broadcasts now hit 8,000+ contacts at 78% read rate without bans.",
    metrics: [
      { label: "Read rate", value: "78%" },
      { label: "Reply rate", value: "11%" },
      { label: "Bans", value: "0" },
    ],
    image:
      "https://images.unsplash.com/photo-1603794067602-9feaa4f70e0c?auto=format&fit=crop&w=1400&q=80",
    aspect: "portrait",
    accent: "electric",
  },

  // ───────────── Email Marketing ─────────────
  {
    slug: "email-reactivation-sequence",
    title: "Email Reactivation Sequence",
    category: "Email Marketing",
    description:
      "21-day reactivation sequence that pulled $63k from a dormant 38k list.",
    problem:
      "An online course business had thousands of cold leads sitting in their list with no follow-up system.",
    solution:
      "Designed a 21-day email + SMS reactivation sequence with AI-personalized subject lines and an offer ladder, all wired through GHL workflows.",
    tools: ["GoHighLevel", "Resend", "Twilio", "OpenAI"],
    result:
      "Reactivated 11% of a 38k list. Generated $63k in 30 days from existing contacts.",
    metrics: [
      { label: "Reactivated", value: "11%" },
      { label: "Revenue", value: "$63k / 30d" },
      { label: "ROI", value: "42x" },
    ],
    image:
      "https://images.unsplash.com/photo-1557200134-90327ee9fafa?auto=format&fit=crop&w=1400&q=80",
    aspect: "landscape",
    accent: "green",
  },
  {
    slug: "ecommerce-lifecycle-emails",
    title: "E-Commerce Lifecycle Emails",
    category: "Email Marketing",
    description:
      "Welcome, browse-abandon, cart-abandon, post-purchase and winback flows for a DTC brand.",
    problem:
      "A DTC brand was relying entirely on paid ads — no lifecycle email program at all.",
    solution:
      "Built 7 lifecycle flows with dynamic product blocks, A/B-tested subject lines and revenue-attributed reporting.",
    tools: ["Klaviyo", "Shopify", "OpenAI"],
    result:
      "Email now drives 31% of revenue, up from 0% in 90 days.",
    metrics: [
      { label: "Email % of rev", value: "31%" },
      { label: "Flows live", value: "7" },
      { label: "Open rate", value: "47%" },
    ],
    image:
      "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1400&q=80",
    aspect: "portrait",
    accent: "purple",
  },

  // ───────────── SMS Marketing ─────────────
  {
    slug: "sms-no-show-recovery",
    title: "SMS No-Show Recovery",
    category: "SMS Marketing",
    description:
      "2-way SMS recovery flow that won back 38% of no-shows for a med-spa group.",
    problem:
      "A med-spa group was losing $40k/month to no-shows and one-way SMS reminders weren't enough.",
    solution:
      "Built a 2-way SMS recovery flow with automatic reschedule links, AI replies and a same-day waitlist offer.",
    tools: ["Twilio", "GoHighLevel", "OpenAI"],
    result:
      "38% of no-shows recovered same-day. ~$15k/month in retained revenue.",
    metrics: [
      { label: "No-shows recovered", value: "38%" },
      { label: "Retained revenue", value: "$15k/mo" },
      { label: "Setup", value: "5 days" },
    ],
    image:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1400&q=80",
    aspect: "landscape",
    accent: "electric",
  },

  // ───────────── Lead Generation ─────────────
  {
    slug: "linkedin-outbound-system",
    title: "LinkedIn Outbound System",
    category: "Lead Generation",
    description:
      "Personalized LinkedIn + email outbound sequence powered by AI research.",
    problem:
      "An agency wanted predictable outbound leads but cold templates were getting <1% reply rates.",
    solution:
      "Built an outbound system that researches each prospect with AI, writes a custom opener, and sequences across LinkedIn + email.",
    tools: ["Phantombuster", "Apollo", "OpenAI", "n8n"],
    result:
      "Reply rate jumped to 9.4%. 22 booked calls/month from cold outbound.",
    metrics: [
      { label: "Reply rate", value: "9.4%" },
      { label: "Booked calls", value: "22 / mo" },
      { label: "Cost / call", value: "$48" },
    ],
    image:
      "https://images.unsplash.com/photo-1611926653458-09294b3142bf?auto=format&fit=crop&w=1400&q=80",
    aspect: "portrait",
    accent: "purple",
  },
  {
    slug: "lead-magnet-funnel",
    title: "Lead Magnet Funnel",
    category: "Lead Generation",
    description:
      "Lead magnet + AI-personalized nurture sequence for a B2B founder.",
    problem:
      "A founder had thought leadership but no way to capture or nurture interested readers.",
    solution:
      "Built a lead magnet funnel with AI personalization, 7-day nurture sequence and a soft application CTA at the end.",
    tools: ["Next.js", "Resend", "GoHighLevel", "OpenAI"],
    result:
      "1,200 opt-ins in 30 days. Booked 14 sales calls from the nurture sequence.",
    metrics: [
      { label: "Opt-ins / 30d", value: "1,200" },
      { label: "Sales calls", value: "14" },
      { label: "Cost / opt-in", value: "$1.40" },
    ],
    image:
      "https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?auto=format&fit=crop&w=1400&q=80",
    aspect: "landscape",
    accent: "green",
  },

  // ───────────── Other ─────────────
  {
    slug: "internal-ops-dashboard",
    title: "Internal Ops Dashboard",
    category: "Other Projects",
    description:
      "Live dashboard pulling GHL, Stripe and Supabase data for a founder.",
    problem:
      "A founder was running their business from spreadsheets and had no real-time view of revenue, pipeline or churn.",
    solution:
      "Built a custom Next.js dashboard pulling GHL, Stripe and Supabase data with live charts and Slack alerts.",
    tools: ["Next.js", "Supabase", "Stripe API", "GHL API"],
    result:
      "Founder now runs the business from one screen. Decision speed up 4x.",
    metrics: [
      { label: "Data sources", value: "6" },
      { label: "Refresh", value: "Live" },
      { label: "Time saved", value: "8 hrs/wk" },
    ],
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1400&q=80&hue=120",
    aspect: "landscape",
    accent: "electric",
  },
];

/** Returns a deduplicated list (by slug). */
export function getDeduplicatedProjects(): Project[] {
  const seen = new Set<string>();
  return projects.filter((p) => {
    if (seen.has(p.slug)) return false;
    seen.add(p.slug);
    return true;
  });
}
