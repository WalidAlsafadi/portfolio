# Walid Alsafadi | Portfolio

Source code for [walidalsafadi.com](https://walidalsafadi.com), the personal portfolio of Walid Alsafadi.

The website presents selected AI and data science projects, research, publications, experience, education, and professional credentials in a fast, accessible, content-focused interface.

## Technology

- Next.js App Router
- React
- TypeScript
- Tailwind CSS
- Static HTML export
- Cloudflare Pages

## Getting started

Install the dependencies:

```bash
npm ci
```

Start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Available commands

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the local development server |
| `npm run lint` | Run ESLint |
| `npm run typecheck` | Check TypeScript types |
| `npm run build` | Create the production static export |
| `npm run start` | Preview the exported site locally |

## Project structure

```text
app/          Pages, layouts, metadata, and global styles
components/   Reusable layout and interface components
data/         Portfolio content and profile information
lib/          Metadata, structured-data, and utility helpers
public/       Images, logos, and Cloudflare static-asset configuration
```

Most portfolio content is maintained in the typed modules under `data/`. The canonical site URL and primary identity information are defined in `data/profile.ts`.

## Production

The application is configured as a static Next.js export. A successful production build writes the deployable site to `out/`.

```bash
npm run lint
npm run typecheck
npm run build
```

Deploy the generated output to the existing Cloudflare Pages project:

```bash
npx wrangler@latest pages deploy out --project-name walid-alsafadi --branch main
```

The canonical production domain is [walidalsafadi.com](https://walidalsafadi.com).

## Search and metadata

The site includes:

- Canonical URLs for every indexable page
- Unique titles and descriptions
- Open Graph and Twitter metadata
- XML sitemap and robots directives
- Person, ProfilePage, WebSite, ScholarlyArticle, BreadcrumbList, and CreativeWork structured data
- Semantic HTML and accessible navigation
