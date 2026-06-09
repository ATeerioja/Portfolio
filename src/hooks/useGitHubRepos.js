/**
 * useGitHubRepos.js
 * -----------------
 * Custom hook that fetches public GitHub repos for a given username.
 *
 * Returns: { repos, loading, error }
 *
 * This isolates all data-fetching logic from the UI component.
 * If you later want to swap the data source (e.g. a backend API,
 * or GraphQL), you only change this file.
 */
import { useState, useEffect } from 'react'

export function useGitHubRepos({ username, pinnedRepos = [], maxRepos = 6 }) {
  const [repos, setRepos]     = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError]     = useState(null)

  useEffect(() => {
    if (!username || username === 'your-github-username') {
      setError('Set your githubUsername in src/config.js')
      setLoading(false)
      return
    }

    let cancelled = false // prevents state update on unmounted component

    async function fetchRepos() {
      try {
        const res = await fetch(
          `https://api.github.com/users/${username}/repos?sort=updated&per_page=100`
        )
        if (!res.ok) throw new Error(`GitHub API returned ${res.status}`)

        let data = await res.json()

        // Exclude forks
        data = data.filter(r => !r.fork)

        // Sort: pinned repos first, then rest by updated date
        if (pinnedRepos.length) {
          data.sort((a, b) => {
            const ai = pinnedRepos.indexOf(a.name)
            const bi = pinnedRepos.indexOf(b.name)
            if (ai === -1 && bi === -1) return 0
            if (ai === -1) return 1
            if (bi === -1) return -1
            return ai - bi
          })
        }

        data = data.slice(0, maxRepos)

        if (!cancelled) {
          setRepos(data)
          setLoading(false)
        }
      } catch (err) {
        if (!cancelled) {
          setError(err.message)
          setLoading(false)
        }
      }
    }

    fetchRepos()
    return () => { cancelled = true }
  }, [username, maxRepos]) // pinnedRepos excluded: array identity changes on every render

  return { repos, loading, error }
}
