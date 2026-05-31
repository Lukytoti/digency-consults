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
  date: string;
  credentialId?: string;
  category: CertificationCategory;
  type: CertificationType;
  thumbnail: string;
  file: string;
  featured?: boolean;
};

export const certifications: Certification[] = [
  {
    id: "google-ai-professional-certificate",
    name: "Google AI Professional Certificate",
    issuer: "Google (via Coursera)",
    date: "May 27, 2026",
    credentialId: "GEMZ6YSIA67A",
    category: "AI & Automation",
    type: "pdf",
    thumbnail: "/certifications/alx-ai-career-essentials.png",
    file: "/certifications/coursera-gemz6ysia67a.pdf",
    featured: true,
  },
  {
    id: "agentic-ai-masterclass",
    name: "The Agentic AI Masterclass",
    issuer: "Hagital Consulting",
    date: "September 2, 2025",
    category: "AI & Automation",
    type: "pdf",
    thumbnail: "/certifications/alx-certificate.png",
    file: "/certifications/agentic-ai-masterclass.pdf",
    featured: true,
  },
  {
    id: "alx-ai-career-essentials",
    name: "AI Career Essentials (AICE)",
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
    issuer: "Microsoft & LinkedIn",
    date: "July 8, 2023",
    credentialId: "5ae5ded0c1826d081762b862d7c78da8bb2c49082c736942067c9508e17b48ec",
    category: "AI & Automation",
    type: "pdf",
    thumbnail: "/certifications/alx-ai-career-essentials.png",
    file: "/certifications/microsoft-generative-ai.pdf",
  },
  {
    id: "google-ai-fundamentals",
    name: "AI Fundamentals",
    issuer: "Google (via Coursera)",
    date: "May 16, 2026",
    credentialId: "DXTZCAY8F050",
    category: "Technical Skills",
    type: "pdf",
    thumbnail: "/certifications/alx-certificate.png",
    file: "/certifications/coursera-dxtzcay8f050.pdf",
  },
  {
    id: "google-ai-brainstorming-planning",
    name: "AI for Brainstorming and Planning",
    issuer: "Google (via Coursera)",
    date: "May 19, 2026",
    credentialId: "G42XI7ZPHKYW",
    category: "Technical Skills",
    type: "pdf",
    thumbnail: "/certifications/alx-ai-career-essentials.png",
    file: "/certifications/coursera-g42xi7zphkyw.pdf",
  },
  {
    id: "google-ai-content-creation",
    name: "AI for Content Creation",
    issuer: "Google (via Coursera)",
    date: "May 20, 2026",
    credentialId: "UXA4AMCU9544",
    category: "CRM & Marketing",
    type: "pdf",
    thumbnail: "/certifications/alx-certificate.png",
    file: "/certifications/coursera-uxa4amcu9544.pdf",
  },
  {
    id: "alx-professional-certificate",
    name: "ALX Professional Certificate",
    issuer: "ALX Africa",
    date: "2025",
    category: "Professional Development",
    type: "image",
    thumbnail: "/certifications/alx-certificate.png",
    file: "/certifications/alx-certificate.png",
  },
];
