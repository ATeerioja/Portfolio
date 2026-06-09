/**
 * app.js — Core application loader
 *
 * How it works:
 *   Each section module calls `App.register(id, renderFn)`.
 *   After all scripts load, App.mount() calls each renderFn and
 *   injects the returned HTML into the matching <section id="..."> element.
 *
 * To add a new section:
 *   1. Create src/sections/my-section.js
 *   2. Call App.register('my-section', () => '<html>...')
 *   3. Add <section id="my-section"></section> to index.html
 *   4. Add <script src="sections/my-section.js"></script> to index.html
 */

const App = (() => {
  const registry = [];

  function register(id, renderFn) {
    registry.push({ id, renderFn });
  }

  function mount() {
    registry.forEach(({ id, renderFn }) => {
      const el = document.getElementById(id);
      if (!el) return console.warn(`[App] No <section id="${id}"> found.`);
      el.innerHTML = renderFn(window.PORTFOLIO_CONFIG);
    });

    // Activate post-render hooks (e.g. fetch calls, event listeners)
    document.dispatchEvent(new CustomEvent('app:mounted'));

    // Sticky nav shadow on scroll
    window.addEventListener('scroll', () => {
      document.getElementById('nav').classList.toggle('nav--scrolled', window.scrollY > 10);
    });

    // Footer year
    document.getElementById('footer-year').textContent = new Date().getFullYear();

    // Smooth scroll for nav links
    document.querySelectorAll('a[href^="#"]').forEach(a => {
      a.addEventListener('click', e => {
        e.preventDefault();
        document.querySelector(a.getAttribute('href'))?.scrollIntoView({ behavior: 'smooth' });
      });
    });
  }

  // Mount after all section scripts have loaded
  window.addEventListener('load', mount);

  return { register };
})();
