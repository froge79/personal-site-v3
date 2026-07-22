# Personal Blog

Minimal dark personal blog built with Next.js App Router, MDX, KaTeX, and rehype-pretty-code. Deployed to Vercel.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Writing posts

Add `.mdx` files to `/content` with frontmatter:

```yaml
---
title: "Post Title"
date: "2026-07-21"
---
```

The slug is the filename without `.mdx`. Posts are sorted by date descending.

Supports:

- Inline math (`$...$`) and display math (`$$...$$`)
- Syntax-highlighted code blocks via Shiki

## Deploy

Push to GitHub and import the repo in [Vercel](https://vercel.com). No special configuration required.
