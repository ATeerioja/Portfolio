# Command Reference

A complete list of commands used in this project.

## Development

| Command | Description |
|---------|-------------|
| `npm install` | Install dependencies from `package-lock.json`. |
| `npm run dev` | Start the Vite dev server with HMR at `http://localhost:5173`. |
| `npm run build` | Produce a production build in `dist/`. |
| `npm run preview` | Serve the built `dist/` locally to verify the production bundle. |

## Docker

| Command | Description |
|---------|-------------|
| `docker compose up --build` | Build the multi-stage image and run it at `http://localhost:3000`. |
| `docker compose up -d` | Run detached (background). |
| `docker compose down` | Stop and remove the container. |
| `docker build -t portfolio .` | Build the image manually without Compose. |
| `docker run -p 3000:80 portfolio` | Run the manually built image. |

## Deployment

| Command | Description |
|---------|-------------|
| `flyctl deploy --remote-only` | Deploy to Fly.io using a remote builder. |
| `flyctl status` | Check the status of the deployed app. |
| `flyctl logs` | Stream logs from the running machine. |

## Git workflow

| Command | Description |
|---------|-------------|
| `git checkout -b feat/{version}-{feature}` | Create a feature branch. |
| `git merge {branch}` | Merge a branch into the current branch. |
| `git tag {version}` | Tag a release. |

### Branch prefixes

- `feat/` — new features
- `fix/` — bug fixes
- `chore/` — maintenance, tooling, docs

### Commit format

```
{fix|feat|chore}: {version} - {changes}
```