export type CertificationType = "image" | "pdf";

export type CertificationCategory =
  | "AI & Automation"
  | "CRM & Marketing"
  | "Technical Skills"
  | "Professional Development";

export const certificationCategories: CertificationCategory[] = [
  "AI & Automation",
  "CRM & Marketing",
  "Technical Skills",
  "Professional Development",
];

export type Certification = {
  id: string;
  name: string;
  issuer: string;
  date: string; // e.g. "March 2025"
  credentialId?: string;
  category: CertificationCategory;
  type: CertificationType;
  thumbnail: string; // path to thumbnail image
  file: string; // path to full image or PDF
  featured?: boolean;
};

export const certifications: Certification[] = [
  {
    id: "ghl-crm-mastery",
    name: "GoHighLevel CRM Mastery",
    issuer: "GoHighLevel Academy",
    date: "January 2025",
    credentialId: "GHL-2025-001",
    category: "CRM & Marketing",
    type: "pdf",
    thumbnail: "/certifications/ghl-crm-mastery-thumb.png",
    file: "/certifications/ghl-crm-mastery.pdf",
    featured: true,
  },
  {
    id: "n8n-advanced-automation",
    name: "n8n Advanced Automation",
    issuer: "n8n Academy",
    date: "February 2025",
    credentialId: "N8N-ADV-2025",
    category: "AI & Automation",
    type: "pdf",
    thumbnail: "/certifications/n8n-advanced-thumb.png",
    file: "/certifications/n8n-advanced.pdf",
    featured: true,
  },
  {
    id: "openai-api-integration",
    name: "OpenAI API Integration",
    issuer: "OpenAI Developer Program",
    date: "March 2025",
    credentialId: "OAI-DEV-2025-042",
    category: "AI & Automation",
    type: "image",
    thumbnail: "/certifications/openai-cert-thumb.png",
    file: "/certifications/openai-cert.png",
    featured: true,
  },
  {
    id: "ai-voice-agent-specialist",
    name: "AI Voice Agent Specialist",
    issuer: "VAPI Certification Program",
    date: "April 2025",
    category: "AI & Automation",
    type: "pdf",
    thumbnail: "/certifications/vapi-specialist-thumb.png",
    file: "/certifications/vapi-specialist.pdf",
  },
  {
    id: "digital-marketing-strategy",
    name: "Digital Marketing Strategy",
    issuer: "HubSpot Academy",
    date: "December 2024",
    credentialId: "HS-DMS-2024",
    category: "CRM & Marketing",
    type: "pdf",
    thumbnail: "/certifications/hubspot-marketing-thumb.png",
    file: "/certifications/hubspot-marketing.pdf",
  },
  {
    id: "nextjs-web-development",
    name: "Next.js Web Development",
    issuer: "Vercel",
    date: "November 2024",
    credentialId: "VCL-NEXT-2024",
    category: "Technical Skills",
    type: "image",
    thumbnail: "/certifications/nextjs-cert-thumb.png",
    file: "/certifications/nextjs-cert.png",
  },
  {
    id: "whatsapp-business-api",
    name: "WhatsApp Business API Integration",
    issuer: "Meta for Developers",
    date: "January 2025",
    credentialId: "META-WBA-2025",
    category: "Technical Skills",
    type: "pdf",
    thumbnail: "/certifications/whatsapp-api-thumb.png",
    file: "/certifications/whatsapp-api.pdf",
  },
  {
    id: "sales-funnel-optimization",
    name: "Sales Funnel Optimization",
    issuer: "ClickFunnels University",
    date: "October 2024",
    category: "Professional Development",
    type: "pdf",
    thumbnail: "/certifications/funnel-opt-thumb.png",
    file: "/certifications/funnel-optimization.pdf",
  },
];
