# Contributing

Thanks for your interest in this project. This guide describes the conventions
used for development, branching, and commits. It applies to all contributions,
including solo work, to keep the history clean and the project professional.

## Development setup

```bash
npm install
npm run dev      # → http://localhost:5173
```

See [docs/how-to/build-and-deploy.md](docs/how-to/build-and-deploy.md) for the
full build and deployment workflow, and
[docs/reference/commands.md](docs/reference/commands.md) for all commands.

## Branching

Create a branch off `main` for every change, using the prefix that matches the
work:

| Prefix   | Use for                          |
|----------|----------------------------------|
| `feat/`  | New features                     |
| `fix/`   | Bug fixes                        |
| `chore/` | Maintenance, tooling, docs       |

```bash
git checkout -b feat/{version}-{feature}
```

Example: `git checkout -b feat/v2.3.0-cv-section`

## Commits

Use the format: {fix|feat|chore}: {version} - {changes}

Example: `feat: v2.3.0 - add printable CV section`

## Merging and releasing

```bash
git checkout main
git merge {branch}
git tag {version}
```

Record the change in [docs/Developer.md](docs/Developer.md) under a new version
heading. Each version should capture a discrete, reviewable change.

## Before you open a pull request

- Run `npm run build` and `npm run preview` to confirm the production bundle works.
- Run `docker compose up --build` to validate the container build.
- Check that dependency versions in `package.json` are current — generated code
  tends to reach for outdated packages.

## CI/CD

Pushing to `main` triggers the GitHub Actions pipeline
(`.github/workflows/deploy.yml`): secret scanning, Docker build validation, and
deployment to Fly.io. Changes under `docs/**` do not trigger a deploy.

## Code philosophy

This project favours simplicity, modularity, and understanding over cleverness.
Before adding a dependency or abstraction, consider whether a small, readable
implementation would serve the project's learning goal better. See
[docs/explanation/philosophy.md](docs/explanation/philosophy.md) for the full
rationale.