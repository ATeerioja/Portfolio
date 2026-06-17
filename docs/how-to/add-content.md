# How to Add Content

Task guides for the three kinds of content you'll add most often.

## Add a blog post

Create a Markdown file in `src/posts/`, e.g. `my-post.md`. The filename becomes
the slug, so the post lives at `#/blog/my-post`.

```markdown
---
title: My New Post
date: 2026-01-15
summary: One-line description shown in the blog index (optional).
draft: false
---

Write the post body in **Markdown**.
```

Posts are discovered automatically at build time. No registration or config edit
is needed. Set `draft: true` to keep a post out of the build.

## Add a section

1. Create `src/sections/example.jsx` (or your section) exporting a default
   component that accepts `{ config }` if it needs config data.
2. Import it in `src/App.jsx` and add it to the layout:
```jsx
   <section id="example"><Example config={config} /></section>
```
3. Add the section's id to the nav array in `App.jsx`:
```jsx
   {['hero', 'about', 'projects', 'example', 'contact'].map(id => ( ... ))}
```

## Update projects

The Projects section fetches public GitHub repos automatically. To change what
appears, edit `src/config.js`:

- `githubUsername` — the account whose repos are fetched.
- `pinnedRepos` — repo names to surface first, in order.
- `maxRepos` — maximum number of repos to display.