import { ServiceItem, ProcessStep, WhyChooseItem, FounderProfile, Testimonial, FaqItem, AgencyConfig } from '../types';

export const DEFAULT_CONFIG: AgencyConfig = {
  companyName: "ScaleX",
  tagline: "We Build. We Automate. We Scale.",
  whatsappNumber: "15550192834", // International format without + or spaces
  displayWhatsapp: "[YOUR WHATSAPP NUMBER]",
  email: "[YOUR BUSINESS EMAIL]",
  location: "[YOUR BUSINESS LOCATION]",
  linkedin: "https://linkedin.com/company/scalex-growth",
  instagram: "https://instagram.com/scalex.agency",
  facebook: "https://facebook.com/scalex.digital",
};

export const SERVICES: ServiceItem[] = [
  {
    id: "web-development",
    number: "01",
    title: "Website Development",
    headline: "Websites That Make Businesses Stand Out.",
    description:
      "We design and develop modern, responsive, high-performance websites that build credibility, communicate your value, and convert visitors into potential customers.",
    features: [
      "Business Website Development",
      "Landing Page Design",
      "E-commerce Websites",
      "Responsive Mobile Design",
      "Website Redesign",
      "Performance Optimization",
    ],
    ctaText: "Build My Website",
    whatsappMessage: "Hello ScaleX! I'm interested in Website Development services and would like to build a high-performance website for my business.",
    iconName: "Globe",
    startingPrice: "Custom quote based on scope",
    timeline: "2 to 4 weeks",
  },
  {
    id: "ai-automation",
    number: "02",
    title: "Business AI Automation",
    headline: "Work Smarter. Automate More.",
    description:
      "We implement intelligent AI-powered workflows that reduce repetitive tasks, improve efficiency, and help businesses save valuable time.",
    features: [
      "AI Customer Support",
      "Automated Lead Management",
      "Business Workflow Automation",
      "AI Chatbots",
      "Automated Follow-ups",
      "Smart Business Integrations",
    ],
    ctaText: "Automate My Business",
    whatsappMessage: "Hello ScaleX! I'm interested in Business AI Automation to streamline workflows and reduce repetitive tasks for my company.",
    iconName: "Cpu",
    startingPrice: "Custom quote based on scope",
    timeline: "1 to 3 weeks",
  },
  {
    id: "ad-creation",
    number: "03",
    title: "Ad Creation",
    headline: "Creative Ads That Capture Attention.",
    description:
      "We create professional, engaging advertising creatives that communicate your brand message and attract your target audience.",
    features: [
      "Social Media Ad Creatives",
      "Promotional Graphics",
      "Video Ad Concepts",
      "Advertising Copywriting",
      "Brand-Focused Creative Design",
    ],
    ctaText: "Create My Ads",
    whatsappMessage: "Hello ScaleX! I'm interested in Ad Creation services to craft high-converting ad visuals and copy for my brand.",
    iconName: "Palette",
    startingPrice: "Custom quote based on scope",
    timeline: "5 to 10 days",
  },
  {
    id: "ad-deployment",
    number: "04",
    title: "Ad Deployment & Management",
    headline: "Turn Advertising Into Business Opportunities.",
    description:
      "We help businesses launch and manage strategic advertising campaigns across digital platforms to reach relevant audiences and generate potential customers.",
    features: [
      "Meta Ads Campaign Setup",
      "Google Ads Campaign Setup",
      "Audience Targeting",
      "Campaign Monitoring",
      "Performance Optimization",
      "Advertising Analytics",
    ],
    ctaText: "Launch My Campaign",
    whatsappMessage: "Hello ScaleX! I'm interested in Ad Deployment & Management to scale our Meta & Google ad campaigns profitably.",
    iconName: "TrendingUp",
    startingPrice: "Monthly management retainers",
    timeline: "Ongoing sprint cycles",
  },
];

export const WHY_CHOOSE_ITEMS: WhyChooseItem[] = [
  {
    id: 1,
    title: "Business-Focused Solutions",
    description:
      "Every deliverable is engineered with your direct commercial objectives in mind. We prioritize real revenue impact, pipeline velocity, and measurable customer acquisition.",
    benefit: "Direct alignment with revenue goals",
    icon: "Target",
  },
  {
    id: 2,
    title: "Modern Technology",
    description:
      "We leverage state-of-the-art frameworks, high-speed architectures, and generative AI systems to build robust digital foundations that outpace competitors.",
    benefit: "Future-proof modern tech stack",
    icon: "Layers",
  },
  {
    id: 3,
    title: "Creative & Strategic Thinking",
    description:
      "We fuse persuasive storytelling, behavioral design, and precision data analysis into cohesive digital campaigns that command audience attention.",
    benefit: "Distinctive brand positioning",
    icon: "Lightbulb",
  },
  {
    id: 4,
    title: "Automation-Driven Efficiency",
    description:
      "We eliminate manual friction through automated lead qualification, instant CRM routing, and 24/7 AI response engines that save hundreds of staff hours.",
    benefit: "Time saved & operational velocity",
    icon: "Zap",
  },
  {
    id: 5,
    title: "Transparent Communication",
    description:
      "No corporate jargon or hidden fees. You get direct access to dedicated strategists, real-time reporting dashboards, and weekly milestone check-ins.",
    benefit: "Clear milestones & live tracking",
    icon: "MessageSquare",
  },
  {
    id: 6,
    title: "Growth-Oriented Approach",
    description:
      "We treat every client as a long-term partner. As your business expands, we continuously test, refine, and optimize your systems to scale effortlessly.",
    benefit: "Iterative testing & continuous scaling",
    icon: "Compass",
  },
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: "01",
    title: "Discovery",
    tagline: "Uncover Core Potential & Objectives",
    description: "We understand your business, objectives, target audience, and challenges.",
    deliverables: [
      "Deep-dive business model analysis",
      "Competitor benchmark & tech audit",
      "Target customer persona definition",
      "KPI & growth goal specification",
    ],
    duration: "Week 1",
  },
  {
    number: "02",
    title: "Strategy",
    tagline: "Architect Your Custom Growth Engine",
    description: "We develop a tailored digital strategy based on your business goals.",
    deliverables: [
      "Custom system architecture & wireframes",
      "Automation blueprint & integration map",
      "Creative messaging & copy framework",
      "Campaign roadmap with exact timelines",
    ],
    duration: "Week 1–2",
  },
  {
    number: "03",
    title: "Execution",
    tagline: "Build, Automate & Deploy",
    description: "Our team builds, implements, and launches your digital solutions.",
    deliverables: [
      "Full responsive website engineering",
      "Intelligent AI workflow deployment",
      "High-converting ad creative production",
      "End-to-end tracking & QA validation",
    ],
    duration: "Week 2–4",
  },
  {
    number: "04",
    title: "Growth & Optimization",
    tagline: "Refine, Iterate & Scale",
    description: "We review performance, identify improvements, and help your business move forward.",
    deliverables: [
      "Continuous A/B testing & CRO audit",
      "Ad spend reallocation for max ROAS",
      "Automated weekly reporting summaries",
      "Proactive scaling recommendations",
    ],
    duration: "Ongoing",
  },
];

export const INITIAL_FOUNDERS: FounderProfile[] = [
  {
    id: "founder-1",
    role: "Founder",
    name: "[FOUNDER FULL NAME]",
    title: "Founder & Chief Executive Officer",
    bio: "Passionate growth strategist and technologist dedicated to empowering high-potential businesses with modern digital infrastructure and automated scaling models.",
    photoUrl: "",
    linkedinUrl: "https://linkedin.com",
    isPlaceholder: true,
  },
  {
    id: "founder-2",
    role: "Co-Founder",
    name: "[CO-FOUNDER FULL NAME]",
    title: "Co-Founder & Head of AI & Engineering",
    bio: "Pioneering systems architect specializing in intelligent workflow automations, custom AI assistant deployments, and high-performance web applications.",
    photoUrl: "",
    linkedinUrl: "https://linkedin.com",
    isPlaceholder: true,
  },
  {
    id: "founder-3",
    role: "Additional Co-Founder",
    name: "[CO-FOUNDER FULL NAME, IF APPLICABLE]",
    title: "Co-Founder & Head of Growth & Performance Marketing",
    bio: "Data-driven performance marketer focused on full-funnel customer acquisition, paid media optimization across Meta & Google, and high-converting ad creative design.",
    photoUrl: "",
    linkedinUrl: "https://linkedin.com",
    isPlaceholder: true,
  },
];

export const SAMPLE_TESTIMONIALS: Testimonial[] = [
  {
    id: "test-1",
    clientName: "David Miller",
    clientRole: "Managing Director",
    companyName: "Nexus Logistics Group",
    companyIndustry: "Supply Chain & Freight",
    quote:
      "ScaleX completely overhauled our online presence and automated our quote intake pipeline. We cut lead response times from 4 hours to under 30 seconds and our conversion rate jumped significantly.",
    metrics: "+148% Inbound Conversions",
    rating: 5,
    isPlaceholder: true,
  },
  {
    id: "test-2",
    clientName: "Sarah Al-Mansoor",
    clientRole: "Founder & CEO",
    companyName: "Aura Aesthetics Clinic",
    companyIndustry: "Healthcare & Wellness",
    quote:
      "The AI automation ScaleX built manages our patient bookings seamlessly. Along with targeted ad campaigns, we booked out our next three months without hiring additional administrative staff.",
    metrics: "3.8x ROI on Meta Ads",
    rating: 5,
    isPlaceholder: true,
  },
  {
    id: "test-3",
    clientName: "Marcus Vance",
    clientRole: "VP of E-Commerce",
    companyName: "Nordic Craft Provisions",
    companyIndustry: "Retail & Consumer Brands",
    quote:
      "Their team operates with rare precision. ScaleX didn't just give us a beautiful high-speed website; they designed creative ads that drove our lowest customer acquisition cost in 3 years.",
    metrics: "42 hrs Saved Weekly",
    rating: 5,
    isPlaceholder: true,
  },
];

export const FAQS: FaqItem[] = [
  {
    question: "What services does ScaleX provide?",
    answer:
      "ScaleX provides end-to-end digital growth services built around three core pillars: High-Performance Website Development (custom business sites, e-commerce, and high-converting landing pages), Business AI Automation (custom AI customer support, CRM pipeline automations, automated follow-ups, and workflow integrations), and Strategic Advertising (creative ad production, Meta & Google Ads setup, audience targeting, and proactive campaign management).",
    category: "Services",
  },
  {
    question: "Can you build a website for my business?",
    answer:
      "Yes, absolutely. We design and build bespoke, high-performance websites tailored to your specific industry and commercial goals. Whether you need an authoritative corporate website, a high-converting lead generation landing page, or a feature-rich e-commerce store, our engineering team ensures ultra-fast loading speeds, responsive mobile-first layouts, and seamless conversion funnels.",
    category: "Websites",
  },
  {
    question: "How can AI automation help my company?",
    answer:
      "AI automation eliminates repetitive administrative burdens, speeds up customer response times, and prevents lost leads. We implement intelligent 24/7 AI chatbots trained on your business knowledge, automated lead capture and qualification, instant calendar booking systems, and CRM integrations. By automating routine workflows, your team saves dozens of hours each week while never missing a sales opportunity.",
    category: "AI & Automation",
  },
  {
    question: "Do you manage advertising campaigns?",
    answer:
      "Yes. We offer complete ad campaign management across Meta (Facebook & Instagram) and Google Ads. This includes creative concepting, copywriting, graphic/video design, audience segmentation, pixel and conversion API tracking, daily budget optimization, and granular analytics reporting to ensure your ad spend generates profitable customer acquisition.",
    category: "Advertising",
  },
  {
    question: "How much do your services cost?",
    answer:
      "Every business has unique objectives and scopes. We provide customized proposals and transparent milestone-based pricing rather than rigid one-size-fits-all packages. You can request a personalized quote through our contact form or chat directly with our team on WhatsApp to receive a detailed breakdown tailored to your project requirements.",
    category: "Pricing",
  },
  {
    question: "How long does a project take?",
    answer:
      "Standard website development projects typically take 2 to 4 weeks depending on scope, content readiness, and feature complexity. AI automation implementations usually launch within 1 to 3 weeks. Ad creation and campaign setup typically require 5 to 10 business days before initial ad deployment.",
    category: "Process",
  },
  {
    question: "How can I get started with ScaleX?",
    answer:
      "Getting started is simple. Click 'Book a Free Consultation' or message us directly on WhatsApp. We will schedule a 20-minute discovery session to understand your current challenges, evaluate your growth potential, and prepare a tailored digital roadmap for your business.",
    category: "Getting Started",
  },
  {
    question: "Do you work with international businesses?",
    answer:
      "Yes! ScaleX partners with businesses globally across North America, Europe, the Middle East, Asia-Pacific, and beyond. Our team operates across international time zones with agile communication channels (WhatsApp, Slack, video conferences) and seamless digital delivery.",
    category: "International",
  },
];

export const TARGET_AUDIENCES = [
  {
    title: "Startups & Entrepreneurs",
    desc: "Launch with modern digital credibility and automated early customer capture.",
    icon: "Rocket",
  },
  {
    title: "Small & Medium Businesses",
    desc: "Save dozens of manual hours weekly and scale sales pipelines efficiently.",
    icon: "Store",
  },
  {
    title: "Established Companies",
    desc: "Modernize legacy systems with state-of-the-art tech and automated workflows.",
    icon: "Building2",
  },
  {
    title: "E-Commerce Brands",
    desc: "Optimize conversion funnels, recover abandoned carts, and scale ROAS.",
    icon: "ShoppingBag",
  },
  {
    title: "Service-Based Businesses",
    desc: "Automate quote requests, booking calendars, and customer follow-up cycles.",
    icon: "Briefcase",
  },
  {
    title: "International Enterprises",
    desc: "Expand into new regional markets with localized digital touchpoints and ads.",
    icon: "Globe2",
  },
];
