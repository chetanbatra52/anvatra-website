import {
  BriefcaseBusiness,
  Users,
  Handshake,
  Code2,
  Database,
} from "lucide-react";

type ServiceStatus = "Available Today" | "Coming Soon";

type Industry = {
  title: string;
  description: string;
  icon: typeof BriefcaseBusiness;
  status: ServiceStatus;
};

export const industries: Industry[] = [
  {
    title: "Permanent Hiring",
    description:
      "Helping organizations hire exceptional technology professionals for long-term success across software engineering, cloud, data, AI, QA, DevOps, and other technology roles.",
    icon: BriefcaseBusiness,
    status: "Available Today",
  },
  {
    title: "Contract Staffing",
    description:
      "Flexible staffing solutions for project-based and contract hiring requirements.",
    icon: Users,
    status: "Coming Soon",
  },
  {
    title: "Staff Augmentation",
    description:
      "Scale your technology teams with experienced professionals when you need them most.",
    icon: Handshake,
    status: "Coming Soon",
  },
  {
    title: "Technology Consulting",
    description:
      "Strategic technology consulting to help organizations modernize and innovate.",
    icon: Code2,
    status: "Coming Soon",
  },
  {
    title: "Software, Cloud & AI",
    description:
      "Modern engineering services across software development, cloud platforms, data engineering, and artificial intelligence.",
    icon: Database,
    status: "Coming Soon",
  },
];