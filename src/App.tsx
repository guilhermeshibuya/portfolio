import React, { useState } from 'react'
import { Footer } from './components/footer'
import { Header } from './components/header'
import { AboutPage } from './pages/about'
import { ContactPage } from './pages/contact'
import { ExperiencesPage } from './pages/experiences'
import { HomePage } from './pages/home'
import { ProjectsPage } from './pages/projects'
import { SkillsPage } from './pages/skills'
import { useHorizontalScroll } from './hooks/useHorizontalScroll'
import './App.css'

const pages = [
  <HomePage />,
  <AboutPage />,
  <SkillsPage />,
  <ProjectsPage />,
  <ExperiencesPage />,
  <ContactPage />,
]

function App() {
  const [activePage, setActivePage] = useState(0)
  const scrollRef = useHorizontalScroll()

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const currentIndex = Math.round(
      e.currentTarget.scrollLeft / e.currentTarget.offsetWidth,
    )
    setActivePage(currentIndex)
  }

  return (
    <div className="max-w-6xl mx-auto">
      <Header activePage={activePage} />
      <div
        className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth"
        onScroll={handleScroll}
        ref={scrollRef}
      >
        {pages.map((page, index) => (
          <section key={index} className={`flex-shrink-0 w-full snap-start`}>
            {page}
          </section>
        ))}
      </div>
      <Footer />
    </div>
  )
}

export default App
