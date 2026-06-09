/**
 * sections/Contact.jsx
 * Props: config
 */
export default function Contact({ config }) {
  const links = [
    config.email    && { href: `mailto:${config.email}`, label: '✉ email' },
    config.github   && { href: config.github,            label: '⌥ github',   external: true },
    config.linkedin && { href: config.linkedin,          label: '↗ linkedin',  external: true },
  ].filter(Boolean)

  return (
    <div className="section-inner">
      <p className="section-label">// contact</p>
      <h2 className="contact-heading">let's talk.</h2>
      <p className="contact-sub">
        open to internships, collaborations, or just a conversation about cool tech.
      </p>
      <div className="contact-links">
        {links.map(({ href, label, external }) => (
          <a
            key={href}
            className="contact-link"
            href={href}
            {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
          >
            {label}
          </a>
        ))}
      </div>
    </div>
  )
}
