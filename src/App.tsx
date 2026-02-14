import { Header, Hero, ExperienceSection, WorksSection, Footer } from './components'
import { experiences, projects } from './data'

function App() {
  return (
    <div className="min-h-screen bg-neutral-950">
      <Header />
      <main>
        <Hero />
        <ExperienceSection experiences={experiences} />
        <WorksSection projects={projects} />
      </main>
      <Footer />
    </div>
  )
}

export default App
