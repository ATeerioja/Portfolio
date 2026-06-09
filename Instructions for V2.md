# Portfolio v2

Modular portfolio website built with **Vite + React**, served by **Nginx** in Docker.

## Quick Start

### Development (hot reload)
```bash
npm install
npm run dev
# → http://localhost:5173
```

### Production (Docker)
```bash
docker compose up --build
# → http://localhost:3000
```

---

## Project Structure

```
portfolio/
├── archive/               # v1 source preserved for reference
├── src/
│   ├── config.js          # ← YOUR DETAILS GO HERE
│   ├── main.jsx           # React entry point
│   ├── App.jsx            # Root component — add new sections here
│   ├── hooks/
│   │   └── useGitHubRepos.js
│   ├── sections/
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Projects.jsx
│   │   └── Contact.jsx
│   └── styles/main.css
├── nginx/default.conf
├── Dockerfile             # Multi-stage: Node builds → Nginx serves
├── docker-compose.yml
└── package.json
```

---

## Adding a New Section

1. Create `src/sections/Blog.jsx` and export a default component that accepts `{ config }`
2. Import it in `App.jsx` and add `<section id="blog"><Blog config={config} /></section>`
3. Add `'blog'` to the nav array in `App.jsx`

---

## How the Docker Build Works

The Dockerfile uses a **multi-stage build**:
- **Stage 1** (Node 20): runs `npm ci` + `vite build` → outputs `dist/`
- **Stage 2** (Nginx Alpine): copies only `dist/` — node_modules never ship

Final image is ~50MB.

---

## Commands

```bash
npm run dev                 # Vite dev server, HMR at http://localhost:5173
npm run build               # Production build → dist/
npm run preview             # Preview prod build locally

docker compose up --build   # Build + run container
docker compose down         # Stop
```
