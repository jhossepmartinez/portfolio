export interface Experience {
  id: string
  company: string
  role: string
  period: string
  description: string
  technologies: string[]
}

export interface Project {
  id: string
  title: string
  description: string
  technologies: string[]
  repositoryUrl?: string
  liveUrl?: string
}
