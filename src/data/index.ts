import type { Experience, Project } from "../types";

export const experiences: Experience[] = [
  {
    id: "1",
    company: "KLog.co",
    role: "Full Stack Junior Software Engineer",
    period: "Sept. 2024 - Feb. 2026",
    description:
      "Lead the architecture design for the Web API V4, transitioning to DCSA logistics standards. Engineered standardized request/response lifecycle with automated error logging. Primary consultant for v4 API ecosystem ensuring architectural consistency.",
    technologies: [
      "Lambda",
      "Api Gateway",
      "Grafana",
      "Prisma",
      "TypeScript",
      "JavaScript",
      "Node.js",
      "AWS",
      "PostgreSQL",
    ],
  },
  {
    id: "2",
    company: "USAFE",
    role: "Software Engineer",
    period: "Mar. 2025 - Dec. 2025",
    description:
      "Led a team of 6 engineers developing a safe routes platform including Android app, backend services, and admin portal. Architected core infrastructure, defined technical standards, and implemented QA processes. Mentored team members and managed task allocation.",
    technologies: [
      "GCP",
      "Docker",
      "Expo",
      "React Native",
      "Android",
      "Node.js",
      "TypeScript",
      "JavaScript",
    ],
  },
  {
    id: "3",
    company: "Universidad Tecnica Federico Santa Maria",
    role: "Teaching Assistant",
    period: "Mar. 2024 - Jan. 2025",
    description:
      "Facilitated learning for the Programming Languages course. Curated engaging content to supplement class material and adapted teaching methods to meet student needs.",
    technologies: ["Programming Languages", "Education"],
  },
  {
    id: "4",
    company: "Forcast",
    role: "Software Engineer Intern",
    period: "Mar. 2024 - Aug. 2024",
    description:
      "Developed key features for client applications across frontend and backend. Provided architectural improvements for application functionality and robustness. Conducted periodic QA to ensure proper functionality.",
    technologies: [
      "React",
      "Angular",
      "Ionic",
      "Node.js",
      "Express",
      "TypeScript",
      "JavaScript",
    ],
  },
];

export const projects: Project[] = [
  {
    title: "Cloudflare Workers Q&A Service",
    description:
      "High-security Q&A API platform for instant answers. Automated, zero-trust deployments with Infrastructure-as-Code. No manual steps: GitHub Actions manages build, test and production/staging deploys.",
    technologies: [
      "workers",
      "Terraform",
      "Drizzle",
      "TypeScript",
      "Javascript",
      "OpenAI",
      "GitHub Actions",
      "JWT",
      "OAuth",
    ],
    repositoryUrl:
      "https://github.com/jhossepmartinez/testing-cloudflare-worker",
    liveUrl: "https://qa-worker-production.jhossepmv.workers.dev/ask",
  },
];
