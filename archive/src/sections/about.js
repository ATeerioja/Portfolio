/**
 * sections/about.js
 * -----------------
 * About section module.
 */
App.register('about', (cfg) => `
  <div class="section-inner">
    <p class="section-label">// about</p>
    <div class="about-grid">
      <div class="about-bio">
        <h2 class="about-heading">a bit<br/>about me.</h2>
        ${cfg.bio.map(p => `<p>${p}</p>`).join('')}
      </div>
      <div class="about-skills">
        <p class="skills-label">technologies I work with</p>
        <div class="skills-chips">
          ${cfg.skills.map(s => `<span class="chip">${s}</span>`).join('')}
        </div>
      </div>
    </div>
  </div>
`);
