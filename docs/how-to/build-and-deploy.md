# How to Build and Deploy

Task-oriented guide for building the application locally and deploying it to
production. For the full command reference, see [reference/commands.md](../reference/commands.md).

## Prerequisites

- Node.js `^20.19.0 || >=22.12.0` (matches the Vite/Rolldown engine requirement)
- Docker (for container builds and production testing)
- A Fly.io account with `flyctl` configured (deployment only)

## Build locally

### Development build (hot reload)

```bash
npm install
npm run dev
# → http://localhost:5173
```

Use this while developing. Vite's HMR reflects code changes near-instantly.

### Production build

```bash
npm run build      # outputs to dist/
npm run preview    # serves the built dist/ locally to verify it
```

Always run `npm run preview` before deploying — it serves the real production
bundle, surfacing issues that the dev server hides (e.g. build-time asset
discovery via `import.meta.glob`).

### Production build in Docker

```bash
docker compose up --build
# → http://localhost:3000
```

This exercises the full multi-stage Dockerfile (Node builds → Nginx serves),
which is exactly what runs in production. Test here before deploying.

## Deploy to production

Deployment is automated via GitHub Actions (`.github/workflows/deploy.yml`).

### Automatic deployment

Pushing to `main` triggers the pipeline, which:

1. Scans the commit for leaked secrets (TruffleHog).
2. Builds the Docker image to validate the Dockerfile.
3. Deploys to Fly.io via `flyctl deploy --remote-only`.

Changes under `docs/**` are ignored and do not trigger a deploy.

### Manual deployment (fallback)

```bash
flyctl deploy --remote-only
```

Requires `FLY_API_TOKEN` in your environment (in CI this is a GitHub repo
secret under Settings → Secrets and variables → Actions).

## Verify a deployment

After deploying, confirm the live site loads and that the GitHub-repos fetch
in the Projects section resolves. The Fly.io app is configured to scale to
zero (`min_machines_running = 0`), so the first request after idle may be slow
while a machine starts.