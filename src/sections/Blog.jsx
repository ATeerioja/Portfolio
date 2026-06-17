/**
 * sections/Blog.jsx
 * Blog index — lists posts discovered from src/posts/*.md
 */
import { allPosts } from '../posts/loadPosts.js'
import { navigate } from '../hooks/useHashRoute.js'

export default function Blog() {
  return (
    <div className="section-inner">
      <p className="section-label">// blog</p>
      <h2 className="about-heading">writing.</h2>

      {allPosts.length === 0 ? (
        <p className="projects-loading">no posts yet — add a .md file to src/posts/.</p>
      ) : (
        <div className="blog-list">
          {allPosts.map(post => (
            <button
              key={post.slug}
              className="blog-card"
              onClick={() => navigate(post.slug)}
            >
              <span className="blog-date">{post.date}</span>
              <span className="blog-text">
                <span className="blog-title">{post.title}</span>
                {post.summary && <span className="blog-summary">{post.summary}</span>}
              </span>
              <span className="blog-arrow">→</span>
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
