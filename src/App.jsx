/**
 * App.jsx — Root component
 *
 * Composes the one-page portfolio, plus a hash-routed blog:
 *   #                  -> full portfolio (hero, about, projects, blog, contact)
 *   #/blog/<slug>      -> single post view
 */
import { useEffect, useState } from 'react'
import Hero     from './sections/Hero.jsx'
import About    from './sections/About.jsx'
import Projects from './sections/Projects.jsx'
import Contact  from './sections/Contact.jsx'
import Blog     from './sections/Blog.jsx'
import BlogPost from './sections/BlogPost.jsx'
import { useHashRoute, navigate } from './hooks/useHashRoute.js'
import config   from './config.js'

export default function App() {
  const [scrolled, setScrolled] = useState(false)
  const route = useHashRoute()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // On the home page, nav items scroll to sections.
  // On a post page, they navigate home first, then scroll after render.
  function go(id) {
    if (route.name !== 'home') {
      navigate(null)
      // wait for home to mount, then scroll
      setTimeout(() => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }), 60)
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <>
      <nav className={`nav${scrolled ? ' nav--scrolled' : ''}`}>
        <button className="nav-logo nav-logo-btn" onClick={() => navigate(null)}>~/portfolio</button>
        <ul className="nav-links">
          {['hero', 'about', 'projects', 'blog', 'contact'].map(id => (
            <li key={id}>
              <button onClick={() => go(id)} className="nav-btn">{id}</button>
            </li>
          ))}
        </ul>
      </nav>

      <main>
        {route.name === 'post' ? (
          <BlogPost slug={route.slug} />
        ) : (
          <>
            <section id="hero"><Hero config={config} /></section>
            <section id="about"><About config={config} /></section>
            <section id="projects"><Projects config={config} /></section>
            <section id="blog"><Blog /></section>
            <section id="contact"><Contact config={config} /></section>
          </>
        )}
      </main>

      <footer className="footer">
        <span>built with curiosity</span>
        <span>{new Date().getFullYear()}</span>
      </footer>
    </>
  )
}
