/**
 * sections/Projects.jsx
 * Props: config
 *
 * Uses the useGitHubRepos hook to fetch and display repos.
 * The component only handles rendering — all data logic lives in the hook.
 */
import { useGitHubRepos } from '../hooks/useGitHubRepos.js'

export default function Projects({ config }) {
  const { repos, loading, error } = useGitHubRepos({
    username:    config.githubUsername,
    pinnedRepos: config.pinnedRepos,
    maxRepos:    config.maxRepos,
  })

  return (
    <div className="section-inner">
      <div className="projects-header">
        <div>
          <p className="section-label">// projects</p>
          <h2 className="projects-heading">things I've built.</h2>
        </div>
        <a
          className="projects-github-link"
          href={config.github}
          target="_blank"
          rel="noopener noreferrer"
        >
          github ↗
        </a>
      </div>

      <div className="projects-grid">
        {loading && <p className="projects-loading">fetching repos...</p>}
        {error   && <p className="projects-error">{error}</p>}
        {!loading && !error && repos.map(repo => (
          <RepoCard key={repo.id} repo={repo} />
        ))}
        {!loading && !error && repos.length === 0 && (
          <p className="projects-loading">no public repos found yet.</p>
        )}
      </div>
    </div>
  )
}

function RepoCard({ repo }) {
  return (
    <a
      className="project-card"
      href={repo.html_url}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="project-name">{repo.name}</div>
      <div className="project-desc">{repo.description || 'no description yet.'}</div>
      <div className="project-meta">
        {repo.language && <span className="project-lang">{repo.language}</span>}
        {repo.stargazers_count > 0 && (
          <span className="project-stars">{repo.stargazers_count}</span>
        )}
      </div>
    </a>
  )
}
