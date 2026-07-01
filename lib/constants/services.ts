import type { Service } from "@/lib/types/service";

const services: Service[] = [
  {
    id: "staffing",
    title: "IT Staffing",
    description:
      "Flexible staffing solutions for contract, permanent, and project-based technology roles.",
    icon: "users",
  },
  {
    id: "recruitment",
    title: "Recruitment Solutions",
    description:
      "Helping businesses hire exceptional technology professionals quickly and efficiently.",
    icon: "briefcase",
  },
  {
    id: "teams",
    title: "Dedicated Development Teams",
    description:
      "Scale your engineering capacity with high-performing remote development teams.",
    icon: "layers",
  },
  {
    id: "software",
    title: "Custom Software Development",
    description:
      "Designing and building secure, scalable web, mobile, and enterprise applications.",
    icon: "code",
  },
  {
    id: "cloud",
    title: "Cloud & DevOps",
    description:
      "Cloud migration, infrastructure automation, DevOps pipelines, and platform engineering.",
    icon: "cloud",
  },
  {
    id: "data",
    title: "Data Engineering & Analytics",
    description:
      "Building modern data platforms, analytics pipelines, and business intelligence solutions.",
    icon: "database",
  },
  {
    id: "ai",
    title: "AI & Automation",
    description:
      "Leveraging AI and automation to improve efficiency, decision-making, and customer experiences.",
    icon: "sparkles",
  },
  {
    id: "consulting",
    title: "Technology Consulting",
    description:
      "Strategic technology guidance to accelerate innovation and digital transformation.",
    icon: "lightbulb",
  },
];

export const servicesPageContent = {
  hero: {
    badge: "Our Services",

    title: "Scalable Technology Services\nfor Growing Enterprises",

    description:
      "From IT staffing and managed teams to software engineering, cloud transformation, AI, and data solutions, ANVATRA helps organizations build, scale, and innovate with confidence.",

    primaryButton: {
      text: "Explore Services",
      href: "#services-grid",
    },
  },

  grid: {
    badge: "Our Expertise",

    title: "Technology Services Designed to Scale",

    description:
      "Flexible technology solutions tailored to your business goals.",
  },
  whyChoose: {
  badge: "Why ANVATRA",

  title: "Why Businesses Choose ANVATRA",

  description:
    "We combine technology expertise, exceptional talent, and a client-first approach to deliver measurable business outcomes.",

  benefits: [
    "Access to Exceptional Talent",
    "Flexible Engagement Models",
    "Faster Hiring & Delivery",
    "Engineering Excellence",
    "Transparent Communication",
    "Long-Term Partnership",
  ],
},

  services,
};