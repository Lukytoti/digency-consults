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
    id: "alx-ai-career-essentials",
    name: "AI Career Essentials",
    issuer: "ALX Africa (AICE Program)",
    date: "2025",
    credentialId: "ALX-AICE-2025",
    category: "AI & Automation",
    type: "image",
    thumbnail: "/certifications/alx-ai-career-essentials.png",
    file: "/certifications/alx-ai-career-essentials.png",
    featured: true,
  },
  {
    id: "alx-certificate",
    name: "ALX Professional Certificate",
    issuer: "ALX Africa",
    date: "2025",
    category: "Professional Development",
    type: "image",
    thumbnail: "/certifications/alx-certificate.png",
    file: "/certifications/alx-certificate.png",
    featured: true,
  },
  {
    id: "agentic-ai-masterclass",
    name: "The Agentic AI Masterclass",
    issuer: "Agentic AI Academy",
    date: "2025",
    category: "AI & Automation",
    type: "pdf",
    thumbnail: "/certifications/alx-ai-career-essentials.png",
    file: "/certifications/agentic-ai-masterclass.pdf",
    featured: true,
  },
  {
    id: "microsoft-generative-ai",
    name: "Career Essentials in Generative AI",
    issuer: "Microsoft & LinkedIn",
    date: "2025",
    category: "AI & Automation",
    type: "pdf",
    thumbnail: "/certifications/alx-certificate.png",
    file: "/certifications/microsoft-generative-ai.pdf",
  },
  {
    id: "coursera-dxtzcay8f050",
    name: "Coursera Professional Certificate",
    issuer: "Coursera",
    date: "2024",
    credentialId: "DXTZCAY8F050",
    category: "Technical Skills",
    type: "pdf",
    thumbnail: "/certifications/alx-ai-career-essentials.png",
    file: "/certifications/coursera-dxtzcay8f050.pdf",
  },
  {
    id: "coursera-g42xi7zphkyw",
    name: "Coursera Professional Certificate",
    issuer: "Coursera",
    date: "2024",
    credentialId: "G42XI7ZPHKYW",
    category: "Technical Skills",
    type: "pdf",
    thumbnail: "/certifications/alx-certificate.png",
    file: "/certifications/coursera-g42xi7zphkyw.pdf",
  },
  {
    id: "coursera-gemz6ysia67a",
    name: "Coursera Professional Certificate",
    issuer: "Coursera",
    date: "2024",
    credentialId: "GEMZ6YSIA67A",
    category: "CRM & Marketing",
    type: "pdf",
    thumbnail: "/certifications/alx-ai-career-essentials.png",
    file: "/certifications/coursera-gemz6ysia67a.pdf",
  },
  {
    id: "coursera-uxa4amcu9544",
    name: "Coursera Professional Certificate",
    issuer: "Coursera",
    date: "2024",
    credentialId: "UXA4AMCU9544",
    category: "CRM & Marketing",
    type: "pdf",
    thumbnail: "/certifications/alx-certificate.png",
    file: "/certifications/coursera-uxa4amcu9544.pdf",
  },
];
