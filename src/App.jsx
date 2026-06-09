/**
 * App.jsx — Root component
 *
 * Composes the page from section components.
 * To add a new section:
 *   1. Create src/sections/MySection.jsx
 *   2. Import it here
 *   3. Add <MySection /> inside <main>
 *   4. Add a nav link
 */
import { useEffect, useState } from 'react'
import Hero    from './sections/Hero.jsx'
import About   from './sections/About.jsx'
import Projects from './sections/Projects.jsx'
import Contact from './sections/Contact.jsx'
import config  from './config.js'

export default function App() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  function scrollTo(id) {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <nav className={`nav${scrolled ? ' nav--scrolled' : ''}`}>
        <span className="nav-logo">~/portfolio</span>
        <ul className="nav-links">
          {['hero', 'about', 'projects', 'contact'].map(id => (
            <li key={id}>
              <button onClick={() => scrollTo(id)} className="nav-btn">
                {id}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      <main>
        <section id="hero"><Hero config={config} /></section>
        <section id="about"><About config={config} /></section>
        <section id="projects"><Projects config={config} /></section>
        <section id="contact"><Contact config={config} /></section>
      </main>

      <footer className="footer">
        <span>built with curiosity &amp; caffeine</span>
        <span>{new Date().getFullYear()}</span>
      </footer>
    </>
  )
}
