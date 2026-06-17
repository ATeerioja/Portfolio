# Blog posts

Every `.md` file in this folder (except this README) becomes a published blog
post automatically — no config edits, no manual registration. Vite discovers
them at **build time** via `import.meta.glob`, so posts ship as static HTML in
the bundle (no backend, no runtime fetching).

## Add a post

Create a file like `my-new-post.md` here. The filename becomes the slug, so this
post will live at `#/blog/my-new-post`.

```markdown
---
title: My New Post
date: 2026-01-15
summary: One-line description shown in the blog index (optional).
draft: false
---

Write the post body in **Markdown**. Headings, lists, links, `code`,
code blocks, and > blockquotes are all styled.
```

## Frontmatter fields

| Field     | Required | Notes                                                        |
|-----------|----------|--------------------------------------------------------------|
| `title`   | yes      | Falls back to the slug if omitted.                           |
| `date`    | yes      | Written as `YYYY-MM-DD`; shown verbatim and used for sorting.|
| `summary` | no       | Shown under the title in the index.                          |
| `draft`   | no       | `draft: true` hides the post from the build. Omit to publish.|

Posts are sorted newest-first by the `date` string. `README.md` is ignored.
