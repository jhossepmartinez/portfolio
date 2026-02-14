import type { Experience, Project } from "../types";

export const experiences: Experience[] = [
  {
    id: "1",
    company: "KLog.co",
    role: "Full Stack Junior Engineer",
    period: "Sept. 2024 - Feb. 2026",
    description:
      "Lead architect for Web API V4, transitioning to DCSA logistics standards. Engineered standardized request/response lifecycle with automated error logging. Primary consultant for v4 API ecosystem ensuring architectural consistency.",
    technologies: ["TypeScript", "Node.js", "AWS", "PostgreSQL", "Prisma"],
  },
  {
    id: "2",
    company: "USAFE",
    role: "Tech Lead",
    period: "Mar. 2025 - Dec. 2025",
    description:
      "Led a team of 6 engineers developing a safe routes platform including Android app, backend services, and admin portal. Architected core infrastructure, defined technical standards, and implemented QA processes. Mentored team members and managed task allocation.",
    technologies: ["Android", "Node.js", "TypeScript"],
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
    role: "Full Stack Intern",
    period: "Mar. 2024 - Aug. 2024",
    description:
      "Developed key features for client applications across frontend and backend. Provided architectural improvements for application functionality and robustness. Conducted periodic QA to ensure proper functionality.",
    technologies: [
      "React",
      "Next.js",
      "Angular",
      "Ionic",
      "Node.js",
      "Express",
      "TypeScript",
      "Tailwind",
    ],
  },
];

export const projects: Project[] = [
  {
    id: "1",
    title: "Project Alpha",
    description:
      "A full-stack application for managing workflows with real-time collaboration features.",
    technologies: ["React", "TypeScript", "Node.js", "Socket.io"],
    repositoryUrl: "https://github.com/username/project-alpha",
    liveUrl: "https://project-alpha.demo",
  },
  {
    id: "2",
    title: "API Gateway",
    description:
      "Microservices architecture with authentication, rate limiting, and request routing.",
    technologies: ["Go", "gRPC", "Redis", "Kubernetes"],
    repositoryUrl: "https://github.com/username/api-gateway",
  },
  {
    id: "3",
    title: "Data Visualization Dashboard",
    description:
      "Interactive dashboard for analyzing and visualizing complex datasets.",
    technologies: ["D3.js", "React", "Python", "FastAPI"],
    repositoryUrl: "https://github.com/username/data-viz",
    liveUrl: "https://data-viz.demo",
  },
  {
    id: "4",
    title: "CLI Tool",
    description: "Developer productivity tool for automating repetitive tasks.",
    technologies: ["Rust", "CLI", "Shell"],
    repositoryUrl: "https://github.com/username/cli-tool",
  },
];
