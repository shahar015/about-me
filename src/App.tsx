import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Experience from './components/Experience'
import Projects from './components/Projects'
import TechStack from './components/TechStack'
import Contact from './components/Contact'
import ParticleField from './components/ParticleField'

function App() {
  return (
    <div className="relative min-h-screen">
      <ParticleField />
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
