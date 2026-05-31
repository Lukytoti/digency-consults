export const siteConfig = {
  name: "Digency Consults",
  shortName: "Digency",
  tagline:
    "AI & CRM Infrastructure Engineer building backend automation, CRM systems and revenue engines.",
  description:
    "I help businesses build websites, sales funnels, CRM systems and AI automations using GoHighLevel, n8n, OpenAI, WhatsApp and email — so they can capture leads, follow up automatically and close more clients.",
  url:
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://digencyconsults.com",
  ogImage: "/og.png",
  founder: {
    name: "Oluwatobi Olowookere",
    role: "AI & CRM Infrastructure Engineer",
    linkedin:
      process.env.NEXT_PUBLIC_LINKEDIN_URL ??
      "https://www.linkedin.com/in/oluwatobi-olowookere-720b3610a/",
    headline:
      "AI & CRM Infrastructure Engineer | GoHighLevel • n8n • OpenAI • WhatsApp Automation • Sales Funnels",
  },
  contact: {
    email: "hello@digencyconsults.com",
    whatsapp:
      process.env.NEXT_PUBLIC_WHATSAPP_URL ?? "https://wa.me/447448309532",
    calendar:
      process.env.NEXT_PUBLIC_CALENDAR_URL ??
      "https://cal.com/oluwatobi-olowookere-3055pb/30min",
  },
  social: {
    linkedin:
      process.env.NEXT_PUBLIC_LINKEDIN_URL ??
      "https://www.linkedin.com/in/oluwatobi-olowookere-720b3610a/",
    twitter: "https://twitter.com/digencyconsults",
    youtube: "https://youtube.com/@digencyconsults",
    instagram: "https://instagram.com/digencyconsults",
  },
  nav: [
    { label: "Home", href: "/" },
    { label: "About Me", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Portfolio", href: "/portfolio" },
    { label: "Case Studies", href: "/case-studies" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
  ],
  keywords: [
    "GoHighLevel expert",
    "GoHighLevel consultant",
    "GHL agency",
    "n8n automation",
    "AI automation expert",
    "AI voice agent",
    "WhatsApp AI agent",
    "sales funnel design",
    "CRM setup",
    "email marketing automation",
    "lead generation systems",
    "AI CRM infrastructure",
    "Digency Consults",
    "Oluwatobi Olowookere",
  ],
};

export type SiteConfig = typeof siteConfig;
