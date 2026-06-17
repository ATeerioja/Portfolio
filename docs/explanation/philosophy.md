# Development Philosophy

This document explains *why* the application is built the way it is. It is not
a how-to — it provides the reasoning behind the architecture and workflow so
that future changes stay consistent with the project's intent.

## Goals

This is a portfolio website with two jobs: showcase data-analytics and machine
learning projects, and serve as a conventional portfolio (about, contact, CV).
A secondary, equally important goal is **learning** — the codebase is a vehicle
for understanding modern web tooling and deployment, not just a finished site.

## Guiding principles

### Simplicity over cleverness

The site is deliberately small and dependency-light. Routing is a hand-written
hash router (`useHashRoute.js`) rather than a routing library; frontmatter
parsing is a minimal regex-based parser rather than a dependency. Each choice is
small enough to fully understand, which serves the learning goal.

### Modularity

Sections are self-contained components composed in `App.jsx`. Adding a section
is a local change — create the component, import it, drop it into the layout.
Data-fetching is isolated in hooks (e.g. `useGitHubRepos.js`) so the UI and the
data source can evolve independently.

### Build-time over runtime

Blog posts are discovered and parsed at build time via Vite's
`import.meta.glob`, shipping as static HTML. There is no backend and no runtime
fetching for content. This keeps hosting cheap, fast, and simple to reason about.

### Separation of content and code

Personal details live in `src/config.js`; blog posts are plain Markdown files in
`src/posts/`. Updating content rarely requires touching component code.

## Architecture at a glance

- **React + Vite** — component-based UI with fast local development.
- **Nginx in Docker** — a multi-stage build compiles the site, then serves only
  the static `dist/` output. `node_modules` never reaches production.
- **Fly.io** — hosts the container, scaling to zero when idle.
- **Cloudflare** — custom domain and SSL.
- **GitHub Actions** — CI/CD: secret scanning, build validation, and deploy.

## On AI-assisted development

Much of the code is generated with an AI pair-programmer, but understanding it
remains the developer's responsibility. A known failure mode is **stale
dependency versions** — generated code tends to reach for outdated packages, so
versions in `package.json` are checked and updated manually. Generated code is
reviewed and learned from, not merged blindly.

## Versioning

The project follows semantic-style version tags (`V2.3.0`, etc.) recorded in
[Developer.md](../Developer.md). Each version captures a discrete, reviewable
change.