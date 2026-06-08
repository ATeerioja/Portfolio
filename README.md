# Portfolio

A simple, modular, dockerised portfolio website. Built to be easy to understand, extend, and deploy.

## Quick Start

```bash
# 1. Clone / enter the project
cd portfolio

# 2. Set your details
#    Open src/js/config.js and fill in your name, GitHub username, etc.

# 3. Run with Docker Compose
docker compose up

# 4. Open http://localhost:3000
```

That's it. No npm install, no build step for v1.

---

## Project Structure

```
portfolio/
├── src/                    # All website source files
│   ├── index.html          # Entry point — add new <section> tags here
│   ├── js/
│   │   ├── config.js       # ← YOUR PERSONAL DETAILS GO HERE
│   │   └── app.js          # Core loader (don't need to edit this)
│   ├── styles/
│   │   └── main.css        # All styles
│   └── sections/           # Each section is its own module
│       ├── hero.js
│       ├── about.js
│       ├── projects.js     # Fetches your GitHub repos automatically
│       └── contact.js
├── nginx/
│   └── default.conf        # Nginx config (serving, caching, headers)
├── Dockerfile
├── docker-compose.yml
└── README.md
```

---

## Personalising

Open **`src/js/config.js`** — it's the only file you need to edit for basic customisation:

| Field | Description |
|-------|-------------|
| `name` | Your full name |
| `title` | Role/tagline |
| `githubUsername` | Fetches your public repos automatically |
| `pinnedRepos` | Array of repo names to highlight first |
| `bio` | Array of paragraph strings for the About section |
| `skills` | Array of tech tags shown as chips |
| `email` / `github` / `linkedin` | Contact links |

---

## Adding a New Section

This is the core of the modular design. To add e.g. a **"Blog"** section:

**1.** Create `src/sections/blog.js`:

```js
App.register('blog', (cfg) => `
  <div class="section-inner">
    <p class="section-label">// blog</p>
    <h2>writing.</h2>
    <!-- your content -->
  </div>
`);
```

**2.** Add the section anchor to `src/index.html`:

```html
<section id="blog"></section>
```

**3.** Load the script in `src/index.html`:

```html
<script src="sections/blog.js"></script>
```

**4.** Add it to the nav if you want:

```html
<li><a href="#blog">blog</a></li>
```

Done. No build step, no config changes.

---

## Docker Commands

```bash
# Start (with live-reload via volume mount)
docker compose up

# Rebuild after Dockerfile/nginx changes
docker compose up --build

# Run detached (background)
docker compose up -d

# Stop
docker compose down

# Production build (no volume mount — uses baked-in files)
docker build -t portfolio .
docker run -p 3000:80 portfolio
```

---

## Future Ideas

- [ ] Add a **Blog** section (markdown files → rendered posts)
- [ ] Add a **Timeline** section (internships, projects, courses)
- [ ] Add a **dark/light** theme toggle
- [ ] Hook up a **contact form** (Formspree is free and requires no backend)
- [ ] Add a CI/CD pipeline (GitHub Actions → build image → push to registry)
- [ ] Deploy to a VPS (Hetzner is cheap, DigitalOcean has a free tier)
