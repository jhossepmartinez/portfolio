import type { Experience, Project } from '../types'

export const experiences: Experience[] = [
  {
    id: '1',
    company: 'Company Name',
    role: 'Senior Software Engineer',
    period: '2023 - Present',
    description: 'Led development of scalable web applications, mentored junior developers, and implemented CI/CD pipelines.',
    technologies: ['React', 'TypeScript', 'Node.js', 'AWS'],
  },
  {
    id: '2',
    company: 'Previous Company',
    role: 'Software Engineer',
    period: '2021 - 2023',
    description: 'Developed and maintained full-stack applications, collaborated with cross-functional teams.',
    technologies: ['Vue.js', 'Python', 'PostgreSQL', 'Docker'],
  },
  {
    id: '3',
    company: 'Startup Inc',
    role: 'Junior Developer',
    period: '2019 - 2021',
    description: 'Built responsive web interfaces and RESTful APIs, participated in agile development processes.',
    technologies: ['JavaScript', 'React', 'Express', 'MongoDB'],
  },
]

export const projects: Project[] = [
  {
    id: '1',
    title: 'Project Alpha',
    description: 'A full-stack application for managing workflows with real-time collaboration features.',
    technologies: ['React', 'TypeScript', 'Node.js', 'Socket.io'],
    repositoryUrl: 'https://github.com/username/project-alpha',
    liveUrl: 'https://project-alpha.demo',
  },
  {
    id: '2',
    title: 'API Gateway',
    description: 'Microservices architecture with authentication, rate limiting, and request routing.',
    technologies: ['Go', 'gRPC', 'Redis', 'Kubernetes'],
    repositoryUrl: 'https://github.com/username/api-gateway',
  },
  {
    id: '3',
    title: 'Data Visualization Dashboard',
    description: 'Interactive dashboard for analyzing and visualizing complex datasets.',
    technologies: ['D3.js', 'React', 'Python', 'FastAPI'],
    repositoryUrl: 'https://github.com/username/data-viz',
    liveUrl: 'https://data-viz.demo',
  },
  {
    id: '4',
    title: 'CLI Tool',
    description: 'Developer productivity tool for automating repetitive tasks.',
    technologies: ['Rust', 'CLI', 'Shell'],
    repositoryUrl: 'https://github.com/username/cli-tool',
  },
]
