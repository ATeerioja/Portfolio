/**
 * loadPosts.js
 * ------------
 * Discovers every Markdown file in src/posts/ at BUILD TIME using
 * Vite's import.meta.glob, parses frontmatter + body, and exposes
 * a sorted index plus a slug lookup.
 *
 * No backend, no runtime fetch — the posts are bundled into the
 * static build and served by Nginx like any other asset.
 *
 * To publish a post: drop a `my-post.md` file in this folder with
 * frontmatter at the top. That's the only step.
 *
 *   ---
 *   title: My Post Title
 *   date: 2025-06-09
 *   summary: One line shown in the index (optional).
 *   draft: false        # omit or set false to publish
 *   ---
 *   Markdown body goes here...
 *
 * The slug is derived from the filename (my-post.md -> my-post),
 * so the post lives at /blog/my-post.
 */
import { marked } from 'marked'

// eager: true inlines the raw file contents at build time.
// `query: '?raw'` + `import: 'default'` gives us the file as a string.
// The negative glob keeps README.md out of the bundle entirely.
const files = import.meta.glob(['./*.md', '!./README.md'], {
  eager: true,
  query: '?raw',
  import: 'default',
})

marked.setOptions({ gfm: true, breaks: false })

function slugFromPath(path) {
  // './sim2real-problem.md' -> 'sim2real-problem'
  return path.replace(/^\.\//, '').replace(/\.md$/, '')
}

/**
 * Minimal frontmatter parser — no dependencies.
 * Handles the simple `key: value` block between leading `---` fences.
 * Values stay as plain strings (so dates render exactly as written),
 * with `true`/`false` coerced to booleans for the `draft` flag.
 */
function parseFrontmatter(raw) {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/)
  if (!match) return { attributes: {}, body: raw }

  const attributes = {}
  for (const line of match[1].split(/\r?\n/)) {
    const idx = line.indexOf(':')
    if (idx === -1) continue
    const key = line.slice(0, idx).trim()
    let value = line.slice(idx + 1).trim().replace(/^["']|["']$/g, '')
    if (value === 'true') value = true
    else if (value === 'false') value = false
    attributes[key] = value
  }
  return { attributes, body: match[2] }
}

const posts = Object.entries(files)
  .map(([path, raw]) => {
    const { attributes, body } = parseFrontmatter(raw)
    return {
      slug: slugFromPath(path),
      title: attributes.title || slugFromPath(path),
      date: attributes.date || '',
      summary: attributes.summary || '',
      draft: attributes.draft === true,
      html: marked.parse(body),
    }
  })
  .filter(post => !post.draft)
  .sort((a, b) => (a.date < b.date ? 1 : a.date > b.date ? -1 : 0))

export const allPosts = posts

export function getPost(slug) {
  return posts.find(p => p.slug === slug) || null
}
