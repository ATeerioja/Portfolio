/**
 * sections/hero.js
 * ----------------
 * Hero / landing section module.
 * Edit config.js to change name, title, etc.
 */
App.register('hero', (cfg) => `
  <div class="hero-inner">
    <p class="hero-greeting">hello, world —</p>
    <h1 class="hero-name">${cfg.name}</h1>
    <p class="hero-sub">
      ${cfg.title} · ${cfg.university}<br/>
      ${cfg.location}
    </p>
    <a class="hero-cta" href="#projects">view my work →</a>
  </div>
  <span class="hero-scroll-hint">scroll ↓</span>
`);
