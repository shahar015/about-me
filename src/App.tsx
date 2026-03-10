import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Experience from './components/Experience'
import Projects from './components/Projects'
import TechStack from './components/TechStack'
import Contact from './components/Contact'
import GridBackground from './components/GridBackground'

function App() {
  return (
    <div className="relative min-h-screen">
      <div className="noise-overlay" />
      <GridBackground />
      <Navbar />
      <main>
        <Hero />
        <TechStack />
        <Experience />
        <Projects />
        <Contact />
      </main>
    </div>
  )
}

export default App
