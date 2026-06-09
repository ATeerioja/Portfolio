/**
 * sections/About.jsx
 * Props: config
 */
export default function About({ config }) {
  return (
    <div className="section-inner">
      <p className="section-label">// about</p>
      <div className="about-grid">
        <div className="about-bio">
          <h2 className="about-heading">a bit<br />about me.</h2>
          {config.bio.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>
        <div className="about-skills">
          <p className="skills-label">technologies I work with</p>
          <div className="skills-chips">
            {config.skills.map(skill => (
              <span key={skill} className="chip">{skill}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
