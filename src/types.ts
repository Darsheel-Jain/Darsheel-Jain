export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  headline: string;
  description: string;
  features: string[];
  ctaText: string;
  whatsappMessage: string;
  iconName: string;
  startingPrice?: string;
  timeline?: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  tagline: string;
  description: string;
  deliverables: string[];
  duration: string;
}

export interface WhyChooseItem {
  id: number;
  title: string;
  description: string;
  benefit: string;
  icon: string;
}

export interface FounderProfile {
  id: string;
  role: string;
  name: string;
  title: string;
  bio: string;
  photoUrl: string;
  linkedinUrl: string;
  isPlaceholder?: boolean;
}

export interface Testimonial {
  id: string;
  clientName: string;
  clientRole: string;
  companyName: string;
  companyIndustry: string;
  quote: string;
  metrics: string;
  rating: number;
  isPlaceholder: boolean;
}

export interface FaqItem {
  question: string;
  answer: string;
  category?: string;
}

export interface ContactFormData {
  fullName: string;
  businessName: string;
  email: string;
  whatsappNumber: string;
  serviceRequired: string;
  projectBudget: string;
  message: string;
}

export interface AgencyConfig {
  companyName: string;
  tagline: string;
  whatsappNumber: string; // e.g. "15550192834" international digits without plus
  displayWhatsapp: string; // e.g. "+1 (555) 019-2834"
  email: string;
  location: string;
  linkedin: string;
  instagram: string;
  facebook: string;
}
