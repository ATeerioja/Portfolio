/**
 * sections/projects.js
 * --------------------
 * Fetches public GitHub repos and renders them as cards.
 *
 * Reads from config:
 *   cfg.githubUsername  — your GitHub handle
 *   cfg.pinnedRepos     — array of repo names to show first
 *   cfg.maxRepos        — max number of repos to display
 */
App.register('projects', (cfg) => `
  <div class="section-inner">
    <div class="projects-header">
      <div>
        <p class="section-label">// projects</p>
        <h2 class="projects-heading">things I've built.</h2>
      </div>
      <a class="projects-github-link" href="${cfg.github}" target="_blank" rel="noopener">
        github ↗
      </a>
    </div>
    <div class="projects-grid" id="projects-grid">
      <p class="projects-loading">fetching repos...</p>
    </div>
  </div>
`);

// After the DOM is ready, fetch repos from GitHub API
document.addEventListener('app:mounted', async () => {
  const cfg = window.PORTFOLIO_CONFIG;
  const grid = document.getElementById('projects-grid');
  if (!grid) return;

  try {
    const res = await fetch(
      `https://api.github.com/users/${cfg.githubUsername}/repos?sort=updated&per_page=100`
    );

    if (!res.ok) throw new Error(`GitHub API error: ${res.status}`);

    let repos = await res.json();

    // If pinnedRepos specified, sort those to top
    if (cfg.pinnedRepos && cfg.pinnedRepos.length) {
      repos.sort((a, b) => {
        const ai = cfg.pinnedRepos.indexOf(a.name);
        const bi = cfg.pinnedRepos.indexOf(b.name);
        if (ai === -1 && bi === -1) return 0;
        if (ai === -1) return 1;
        if (bi === -1) return -1;
        return ai - bi;
      });
    }

    // Exclude forks, limit count
    repos = repos
      .filter(r => !r.fork)
      .slice(0, cfg.maxRepos);

    if (repos.length === 0) {
      grid.innerHTML = '<p class="projects-loading">no public repos found yet.</p>';
      return;
    }

    grid.innerHTML = repos.map(repo => `
      <a class="project-card" href="${repo.html_url}" target="_blank" rel="noopener">
        <div class="project-name">${repo.name}</div>
        <div class="project-desc">${repo.description || 'no description yet.'}</div>
        <div class="project-meta">
          ${repo.language ? `<span class="project-lang">${repo.language}</span>` : ''}
          ${repo.stargazers_count > 0 ? `<span class="project-stars">${repo.stargazers_count}</span>` : ''}
        </div>
      </a>
    `).join('');

  } catch (err) {
    console.error('[projects]', err);
    grid.innerHTML = `
      <p class="projects-error">
        couldn't load repos. check that <code>githubUsername</code> is set in config.js.
      </p>`;
  }
});
