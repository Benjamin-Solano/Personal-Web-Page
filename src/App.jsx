import { useState, useEffect } from 'react'
import Navbar     from './components/Navbar'
import Hero       from './components/Hero'
import About      from './components/About'
import Skills     from './components/Skills'
import Experience from './components/Experience'
import Contact    from './components/Contact'

export default function App() {
  const [dark, setDark] = useState(() => {
    if (typeof window === 'undefined') return true
    const stored = localStorage.getItem('theme')
    if (stored) return stored === 'dark'
    return window.matchMedia('(prefers-color-scheme: dark)').matches
  })

  useEffect(() => {
    const root = document.documentElement
    if (dark) {
      root.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      root.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }, [dark])

  return (
    <div className="bg-cream-100 dark:bg-ink-900 text-ink-800 dark:text-cream-50 transition-colors duration-500 min-h-screen overflow-x-hidden">
      <Navbar dark={dark} setDark={setDark} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Contact />
      </main>
      <footer className="section-wrapper py-8 divider">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-2 opacity-50 text-2xs tracking-widest2 uppercase">
          <span>Benjamín Alexander Solano Ortega</span>
          <span>© {new Date().getFullYear()} — Todos los derechos reservados.</span>
        </div>
      </footer>
    </div>
  )
}
