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

// Category color/gradient mappings for unique card visuals
export const categoryStyles: Record<
  CertificationCategory,
  { gradient: string; accent: string; icon: string }
> = {
  "AI & Automation": {
    gradient: "from-violet-600 via-purple-500 to-indigo-600",
    accent: "#8b5cf6",
    icon: "brain",
  },
  "CRM & Marketing": {
    gradient: "from-rose-500 via-pink-500 to-fuchsia-600",
    accent: "#ec4899",
    icon: "megaphone",
  },
  "Technical Skills": {
    gradient: "from-cyan-500 via-blue-500 to-indigo-600",
    accent: "#3b82f6",
    icon: "code",
  },
  "Professional Development": {
    gradient: "from-emerald-500 via-teal-500 to-cyan-600",
    accent: "#10b981",
    icon: "trending-up",
  },
};

export type Certification = {
  id: string;
  name: string;
  shortName: string; // Shorter title for card display
  issuer: string;
  date: string;
  credentialId?: string;
  category: CertificationCategory;
  type: CertificationType;
  thumbnail: string; // For image certs: actual image. For PDFs: empty string (uses custom card)
  file: string;
  featured?: boolean;
};

export const certifications: Certification[] = [
  {
    id: "google-ai-professional-certificate",
    name: "Google AI Professional Certificate",
    shortName: "Google AI Professional",
    issuer: "Google (via Coursera)",
    date: "May 27, 2026",
    credentialId: "GEMZ6YSIA67A",
    category: "AI & Automation",
    type: "pdf",
    thumbnail: "",
    file: "/certifications/coursera-gemz6ysia67a.pdf",
    featured: true,
  },
  {
    id: "agentic-ai-masterclass",
    name: "The Agentic AI Masterclass",
    shortName: "Agentic AI Masterclass",
    issuer: "Hagital Consulting",
    date: "September 2, 2025",
    category: "AI & Automation",
    type: "pdf",
    thumbnail: "",
    file: "/certifications/agentic-ai-masterclass.pdf",
    featured: true,
  },
  {
    id: "alx-ai-career-essentials",
    name: "AI Career Essentials (AICE)",
    shortName: "AI Career Essentials",
    issuer: "ALX Africa",
    date: "2025",
    category: "AI & Automation",
    type: "image",
    thumbnail: "/certifications/alx-ai-career-essentials.png",
    file: "/certifications/alx-ai-career-essentials.png",
    featured: true,
  },
  {
    id: "microsoft-generative-ai",
    name: "Career Essentials in Generative AI",
    shortName: "Generative AI Essentials",
    issuer: "Microsoft & LinkedIn",
    date: "July 8, 2023",
    credentialId: "5ae5ded0c182",
    category: "AI & Automation",
    type: "pdf",
    thumbnail: "",
    file: "/certifications/microsoft-generative-ai.pdf",
  },
  {
    id: "google-ai-fundamentals",
    name: "AI Fundamentals",
    shortName: "AI Fundamentals",
    issuer: "Google (via Coursera)",
    date: "May 16, 2026",
    credentialId: "DXTZCAY8F050",
    category: "Technical Skills",
    type: "pdf",
    thumbnail: "",
    file: "/certifications/coursera-dxtzcay8f050.pdf",
  },
  {
    id: "google-ai-brainstorming-planning",
    name: "AI for Brainstorming and Planning",
    shortName: "AI Brainstorming & Planning",
    issuer: "Google (via Coursera)",
    date: "May 19, 2026",
    credentialId: "G42XI7ZPHKYW",
    category: "Technical Skills",
    type: "pdf",
    thumbnail: "",
    file: "/certifications/coursera-g42xi7zphkyw.pdf",
  },
  {
    id: "google-ai-content-creation",
    name: "AI for Content Creation",
    shortName: "AI Content Creation",
    issuer: "Google (via Coursera)",
    date: "May 20, 2026",
    credentialId: "UXA4AMCU9544",
    category: "CRM & Marketing",
    type: "pdf",
    thumbnail: "",
    file: "/certifications/coursera-uxa4amcu9544.pdf",
  },
  {
    id: "alx-professional-certificate",
    name: "ALX Professional Certificate",
    shortName: "ALX Professional",
    issuer: "ALX Africa",
    date: "2025",
    category: "Professional Development",
    type: "image",
    thumbnail: "/certifications/alx-certificate.png",
    file: "/certifications/alx-certificate.png",
  },
];
