/**
 * sections/contact.js
 * -------------------
 * Contact / links section module.
 */
App.register('contact', (cfg) => {
  const links = [
    cfg.email    && `<a class="contact-link" href="mailto:${cfg.email}">✉ email</a>`,
    cfg.github   && `<a class="contact-link" href="${cfg.github}" target="_blank" rel="noopener">⌥ github</a>`,
    cfg.linkedin && `<a class="contact-link" href="${cfg.linkedin}" target="_blank" rel="noopener">↗ linkedin</a>`,
  ].filter(Boolean).join('');

  return `
    <div class="section-inner">
      <p class="section-label">// contact</p>
      <h2 class="contact-heading">let's talk.</h2>
      <p class="contact-sub">
        open to internships, collaborations, or just a conversation about cool tech.
      </p>
      <div class="contact-links">${links}</div>
    </div>
  `;
});
