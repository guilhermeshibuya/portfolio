import { Footer } from './components/footer'
import { Header } from './components/header'
import { AboutPage } from './pages/about'
import { ExperiencesPage } from './pages/experiences'
import { HomePage } from './pages/home'
import { ProjectsPage } from './pages/projects'
import { SkillsPage } from './pages/skills'

function App() {
  return (
    <div className="max-w-6xl mx-auto">
      <Header />
      <div className="flex overflow-x-auto snap-x snap-mandatory ">
        <section className="flex-shrink-0 w-full snap-start">
          <HomePage />
        </section>
        <section className="flex-shrink-0 w-full snap-start">
          <AboutPage />
        </section>
        <section className="flex-shrink-0 w-full snap-start">
          <SkillsPage />
        </section>
        <section className="flex-shrink-0 w-full snap-start">
          <ProjectsPage />
        </section>
        <section className="flex-shrink-0 w-full snap-start">
          <ExperiencesPage />
        </section>
      </div>
      <Footer />
    </div>
  )
}

export default App
