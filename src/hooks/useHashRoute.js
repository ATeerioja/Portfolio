/**
 * useHashRoute.js
 * ---------------
 * Minimal hash-based router — no dependency needed.
 *
 * Returns the current route parsed from window.location.hash:
 *   #                       -> { name: 'home' }
 *   #/blog/sim2real-problem -> { name: 'post', slug: 'sim2real-problem' }
 *
 * Hash routing keeps Nginx config untouched and behaves identically
 * in dev, preview, and the production container.
 */
import { useState, useEffect } from 'react'

function parse(hash) {
  const clean = hash.replace(/^#/, '')
  const match = clean.match(/^\/blog\/(.+)$/)
  if (match) return { name: 'post', slug: decodeURIComponent(match[1]) }
  return { name: 'home' }
}

export function useHashRoute() {
  const [route, setRoute] = useState(() => parse(window.location.hash))

  useEffect(() => {
    const onChange = () => setRoute(parse(window.location.hash))
    window.addEventListener('hashchange', onChange)
    return () => window.removeEventListener('hashchange', onChange)
  }, [])

  return route
}

export function navigate(slug, scrollToId) {
  if (slug) {
    window.location.hash = `#/blog/${encodeURIComponent(slug)}`
    window.scrollTo({ top: 0, behavior: 'instant' })
  } else {
    window.location.hash = '#'
    if (scrollToId) {
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          document.getElementById(scrollToId)?.scrollIntoView({ behavior: 'instant' })
        })
      })
    } else {
      window.scrollTo({ top: 0, behavior: 'instant' })
    }
  }
}
