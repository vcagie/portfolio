import Nav from './components/Nav'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-term-bg font-sans text-slate-100">
      <Nav />
      <Hero />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
    </div>
  )
}

export default App
