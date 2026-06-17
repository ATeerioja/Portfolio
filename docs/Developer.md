# Guide
## Commits
fix/ feat/ chore/
{fix or feat or chore}: {version number} - {changes}

## Branches
git checkout -b feat/{version number}-{feature}
git checkout main
git merge {branch name}
git tag {version number}

## Build
npm run build               # Production build → dist/
docker compose up --build   # Build + run container to test

## Dev
npm run dev                 # Vite dev server, HMR at http://localhost:5173
npm run preview             # Preview prod build locally
docker compose down         # Stop

# Versions
## V1.0.0
Claude tends to use legacy packages and old versions of builds.
Always check what version to use and update if necessary.

## V2.0.0
Updated nvm, npm and Node. Manually changed the package.json versions to current ones.
After these updates works as wanted.

Migration is now completed and added a blog section.

## V2.1.0
- Improved styling by changing CSS values.

## V2.2.0
- Create a lightweight markdown delivery system to serve the blogs section of the website

## V2.2.1
- Improve Developer Documentation using Diataxis methods

## V2.3.0
- Add a CV-section that is formatted as a one page ready-to-print and professional looking.
