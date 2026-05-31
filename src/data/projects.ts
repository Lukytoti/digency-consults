export type Project = {
  slug: string;
  title: string;
  category: string;
  problem: string;
  solution: string;
  tools: string[];
  result: string;
  metrics: { label: string; value: string }[];
  image: string;
  accent: "electric" | "purple" | "green";
  featured?: boolean;
};

export const projects: Project[] = [
  {
    slug: "real-estate-lead-automation",
    title: "Real Estate Lead Automation",
    category: "CRM Automation",
    problem:
      "A real-estate brokerage was losing leads from Facebook ads because agents replied hours late and forgot to follow up.",
    solution:
      "Built a GHL pipeline with instant SMS + WhatsApp + email replies, AI qualification, round-robin agent assignment and 14-day follow-up cadence.",
    tools: ["GoHighLevel", "n8n", "OpenAI", "WhatsApp API", "Twilio"],
    result:
      "Lead response time dropped from 4 hours to under 60 seconds. Booked viewings increased 3.2x in 60 days.",
    metrics: [
      { label: "Response time", value: "<60s" },
      { label: "Booked viewings", value: "+220%" },
      { label: "Cost per booked call", value: "-41%" },
    ],
    image:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1400&q=80",
    accent: "electric",
    featured: true,
  },
  {
    slug: "webinar-funnel-automation",
    title: "Webinar Funnel Automation",
    category: "Sales Funnel",
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
    accent: "purple",
    featured: true,
  },
  {
    slug: "whatsapp-ai-lead-qualification",
    title: "WhatsApp AI Lead Qualification System",
    category: "AI Automation",
    problem:
      "A B2B agency burned hours every day manually qualifying inbound WhatsApp leads from ads and referrals.",
    solution:
      "Built an AI WhatsApp agent (OpenAI + n8n) that asks 5 qualifying questions, books calls into Calendly, tags the lead in GHL and notifies the rep on Slack only for hot leads.",
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
    accent: "green",
    featured: true,
  },
  {
    slug: "ghl-pipeline-workflow-setup",
    title: "GHL Pipeline & Workflow Setup",
    category: "CRM Setup",
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
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1400&q=80",
    accent: "electric",
  },
  {
    slug: "ai-voice-assistant-setup",
    title: "AI Voice Assistant Setup",
    category: "AI Voice",
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
    accent: "purple",
  },
  {
    slug: "email-sms-followup-automation",
    title: "Email & SMS Follow-Up Automation",
    category: "Marketing Automation",
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
    accent: "green",
  },
  {
    slug: "sales-funnel-build",
    title: "Sales Funnel Build",
    category: "Funnel",
    problem:
      "A SaaS founder had a great offer but a single 'Buy Now' page that converted at 0.6%.",
    solution:
      "Rebuilt as a multi-step funnel: lead magnet → VSL → application → checkout, with abandoned-cart automation and a 7-day onboarding sequence.",
    tools: ["Next.js", "GoHighLevel", "Stripe", "Resend"],
    result:
      "Conversion went from 0.6% to 4.8%. MRR grew 3.4x in 90 days.",
    metrics: [
      { label: "Conversion", value: "0.6% → 4.8%" },
      { label: "MRR growth", value: "+340%" },
      { label: "CAC", value: "-38%" },
    ],
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1400&q=80",
    accent: "electric",
  },
  {
    slug: "website-design-project",
    title: "Premium Website Design Project",
    category: "Web Design",
    problem:
      "A consultancy looked like a freelancer — outdated WordPress site, slow load times, no SEO and no clear CTA.",
    solution:
      "Designed and built a premium Next.js website with dark/light mode, blog, case studies, lead capture and Calendly integration. Optimized for Core Web Vitals and SEO.",
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
    accent: "purple",
  },
];
