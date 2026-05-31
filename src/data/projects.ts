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
  screenshots: string[];
  accent: "electric" | "purple" | "green";
  featured?: boolean;
  liveUrl?: string;
  year?: string;
  tags: string[];
};

export const projectCategories = [
  "All",
  "Websites",
  "Funnels",
  "CRM & Workflows",
  "AI Agents",
  "Landing Pages",
] as const;

export type ProjectCategory = (typeof projectCategories)[number];

export const projects: Project[] = [
  {
    slug: "real-estate-lead-automation",
    title: "Real Estate Lead Automation",
    category: "CRM & Workflows",
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
    image: "/projects/ghl-workflow.png",
    screenshots: [
      "/projects/ghl-workflow.png",
      "/projects/ghl-workflow1.png",
    ],
    accent: "electric",
    featured: true,
    year: "2025",
    tags: ["CRM", "Automation", "WhatsApp", "Lead Nurture"],
  },
  {
    slug: "webinar-funnel-automation",
    title: "Webinar Funnel Automation",
    category: "Funnels",
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
    image: "/projects/website15.png",
    screenshots: [
      "/projects/website15.png",
    ],
    accent: "purple",
    featured: true,
    year: "2025",
    tags: ["Funnel", "Webinar", "Email", "High-Ticket"],
  },
  {
    slug: "whatsapp-ai-lead-qualification",
    title: "WhatsApp AI Lead Qualification System",
    category: "AI Agents",
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
    image: "/projects/a2p-3.png",
    screenshots: [
      "/projects/a2p-3.png",
      "/projects/a2p-2.png",
    ],
    accent: "green",
    featured: true,
    year: "2025",
    tags: ["AI", "WhatsApp", "Lead Qualification", "Automation"],
  },
  {
    slug: "ghl-pipeline-workflow-setup",
    title: "GHL Pipeline & Workflow Setup",
    category: "CRM & Workflows",
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
    image: "/projects/ghl-workflow1.png",
    screenshots: [
      "/projects/ghl-workflow1.png",
      "/projects/ghl-workflow.png",
    ],
    accent: "electric",
    year: "2024",
    tags: ["CRM", "GHL", "Pipeline", "Reporting"],
  },
  {
    slug: "ai-voice-assistant-setup",
    title: "AI Voice Assistant Setup",
    category: "AI Agents",
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
    image: "/projects/a2p-2.png",
    screenshots: [
      "/projects/a2p-2.png",
    ],
    accent: "purple",
    year: "2025",
    tags: ["AI", "Voice Agent", "VAPI", "Healthcare"],
  },
  {
    slug: "email-sms-followup-automation",
    title: "Email & SMS Follow-Up Automation",
    category: "CRM & Workflows",
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
    image: "/projects/ghl-workflow.png",
    screenshots: [
      "/projects/ghl-workflow.png",
    ],
    accent: "green",
    year: "2024",
    tags: ["Email", "SMS", "Reactivation", "Automation"],
  },
  {
    slug: "premium-business-website",
    title: "Premium Business Website",
    category: "Websites",
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
    image: "/projects/website1.png",
    screenshots: [
      "/projects/website1.png",
      "/projects/website2.png",
      "/projects/website3.png",
    ],
    accent: "purple",
    featured: true,
    year: "2025",
    tags: ["Website", "Next.js", "SEO", "Design"],
  },
  {
    slug: "ecommerce-landing-page",
    title: "E-Commerce Landing Page",
    category: "Landing Pages",
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
    image: "/projects/website6.png",
    screenshots: [
      "/projects/website6.png",
    ],
    accent: "electric",
    year: "2025",
    tags: ["Landing Page", "Conversion", "Funnel", "Stripe"],
  },
  {
    slug: "dark-theme-saas-website",
    title: "Dark Theme SaaS Website",
    category: "Websites",
    problem:
      "A tech startup needed a modern dark-themed website to position themselves as premium in their niche.",
    solution:
      "Designed a sleek dark-mode-first website with glassmorphism UI, animated sections, blog CMS and integrated lead capture forms.",
    tools: ["Next.js", "Framer Motion", "Tailwind CSS", "Vercel"],
    result:
      "Time on site increased 65%. Demo requests grew 4x in the first month after launch.",
    metrics: [
      { label: "Time on site", value: "+65%" },
      { label: "Demo requests", value: "4x" },
      { label: "Load time", value: "1.2s" },
    ],
    image: "/projects/website10.png",
    screenshots: [
      "/projects/website10.png",
      "/projects/website11.png",
      "/projects/website12.png",
    ],
    accent: "purple",
    year: "2025",
    tags: ["Website", "SaaS", "Dark Theme", "Premium"],
  },
  {
    slug: "agency-portfolio-website",
    title: "Agency Portfolio Website",
    category: "Websites",
    problem:
      "A creative agency's portfolio site was built on outdated tech, looked generic, and failed to showcase their best work effectively.",
    solution:
      "Built a visually stunning portfolio site with project galleries, case study pages, smooth animations and a booking system integrated with their CRM.",
    tools: ["Next.js", "Tailwind CSS", "Framer Motion", "GoHighLevel"],
    result:
      "Inbound leads doubled. Average proposal value increased 40% due to premium positioning.",
    metrics: [
      { label: "Inbound leads", value: "+100%" },
      { label: "Avg proposal", value: "+40%" },
      { label: "Page speed", value: "96/100" },
    ],
    image: "/projects/website7.png",
    screenshots: [
      "/projects/website7.png",
      "/projects/website8.png",
      "/projects/website9.png",
    ],
    accent: "green",
    year: "2025",
    tags: ["Website", "Portfolio", "Agency", "Design"],
  },
  {
    slug: "multi-page-corporate-site",
    title: "Multi-Page Corporate Site",
    category: "Websites",
    problem:
      "A growing services company needed a professional multi-page website to replace their single-page Wix site.",
    solution:
      "Designed and developed a comprehensive corporate website with services pages, team section, blog, contact forms and SEO optimization.",
    tools: ["Next.js", "Tailwind CSS", "Vercel", "Supabase"],
    result:
      "Organic traffic grew 280% in 90 days. Contact form submissions increased 5x.",
    metrics: [
      { label: "Organic traffic", value: "+280%" },
      { label: "Form submissions", value: "5x" },
      { label: "SEO keywords", value: "Top 10" },
    ],
    image: "/projects/website13.png",
    screenshots: [
      "/projects/website13.png",
      "/projects/website14.png",
    ],
    accent: "electric",
    year: "2025",
    tags: ["Website", "Corporate", "SEO", "Multi-page"],
  },
  {
    slug: "creative-brand-website",
    title: "Creative Brand Website",
    category: "Websites",
    problem:
      "A brand agency needed a visually bold website that matched their creative identity and attracted high-value clients.",
    solution:
      "Built a high-impact website with bold typography, full-bleed imagery, micro-interactions and a seamless booking flow.",
    tools: ["Next.js", "Framer Motion", "Tailwind CSS", "Calendly"],
    result:
      "Brand perception score improved 78%. Inbound inquiries from ideal clients grew 3x.",
    metrics: [
      { label: "Brand score", value: "+78%" },
      { label: "Ideal client inquiries", value: "3x" },
      { label: "Time on site", value: "+90%" },
    ],
    image: "/projects/website4.png",
    screenshots: [
      "/projects/website4.png",
      "/projects/website5.png",
    ],
    accent: "purple",
    year: "2025",
    tags: ["Website", "Branding", "Creative", "Design"],
  },
  {
    slug: "a2p-compliance-setup",
    title: "A2P 10DLC Compliance Setup",
    category: "CRM & Workflows",
    problem:
      "A client's SMS campaigns were getting filtered and blocked because they weren't A2P compliant.",
    solution:
      "Handled full A2P 10DLC registration — brand registration, campaign registration, number provisioning and compliance documentation — so their messages actually get delivered.",
    tools: ["GoHighLevel", "Twilio", "LC Phone"],
    result:
      "SMS deliverability went from 62% to 97%. No more filtered messages.",
    metrics: [
      { label: "Deliverability", value: "62% → 97%" },
      { label: "Blocked msgs", value: "0" },
      { label: "Setup time", value: "5 days" },
    ],
    image: "/projects/a2p-3.png",
    screenshots: [
      "/projects/a2p-3.png",
      "/projects/a2p-2.png",
    ],
    accent: "green",
    year: "2025",
    tags: ["SMS", "Compliance", "A2P", "Deliverability"],
  },
];
