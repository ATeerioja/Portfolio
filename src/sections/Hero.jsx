/**
 * sections/Hero.jsx
 * Props: config
 */
export default function Hero({ config }) {
  return (
    <div className="hero-inner">
      <p className="hero-greeting">hello, world —</p>
      <h1 className="hero-name">{config.name}</h1>
      <p className="hero-sub">
        {config.title} · {config.university}<br />
        {config.location}
      </p>
      <button
        className="hero-cta"
        onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
      >
        view my work →
      </button>
      <span className="hero-scroll-hint">scroll ↓</span>
    </div>
  )
}
