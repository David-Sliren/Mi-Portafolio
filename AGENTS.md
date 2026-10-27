# Repository Guidelines

## Project Structure & Module Organization

This repository is a portfolio built with **Next.js 16 (App Router)**, **React 19**, **TypeScript**, and **Tailwind CSS v4**. Application code lives in `src/`:

- `app/` contains the Next.js App Router structure:
  - `layout.tsx`: Root layout with Google Fonts (`Inter`, `Manrope`), global metadata, and JSON-LD structured data.
  - `(home)/page.tsx`: Main route entry point wrapping the home layout.
  - `robots.ts`: Next.js `MetadataRoute.Robots` handler generating `/robots.txt`.
  - `sitemap.ts`: Next.js `MetadataRoute.Sitemap` handler generating `/sitemap.xml`.
  - `globals.css`: Tailwind v4 styles, theme configuration, and CSS variables.
- `components/` contains reusable UI and portfolio sections:
  - `Hero`, `Experience`, `Skills`, `Projects` (`Projects.tsx`, `ProjectsMobile.tsx`), `Certificates`, `aboutMe`, and `Contact`.
  - `ui/` contains reusable layout navigation elements (`Navbar.tsx`, `Footer.tsx`).
- `Layout/` contains page-level layout wrappers (`Home.tsx`, `HorizontalScroll.tsx`).
- `constants/` stores portfolio content and asset mappings (`docsProjects.ts`, `docsCertificate.ts`, `constantsIcons.ts`, and `insertImage.ts`).
- `assets/` contains imported images and icons; `public/` contains static assets served directly (favicons, icons, SVGs).
- `utils/` contains shared helper functions (`utils.ts`).

## SEO & Web Standards Guidelines

When modifying, adding pages, or adjusting metadata, agents must follow these rules:

1. **Metadata API:** Use the native Next.js App Router `Metadata` and `Viewport` exports in `layout.tsx` or specific `page.tsx` files. Never insert manual `<meta>` tags in `<head>` unless using special scripts.
2. **Canonical & MetadataBase:** Always preserve `metadataBase` (`new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://slirendev.vercel.app")`) and `alternates: { canonical: '/' }` to prevent duplicate indexing issues.
3. **Open Graph & Twitter Cards:** Keep Open Graph and Twitter Card tags in sync. Maintain appropriate preview dimensions (`apple-touch-icon.png` or dedicated social cards) and creator handles (`@slirendev`).
4. **Sitemaps & Robots:** When adding new public pages or routes, register them in `src/app/sitemap.ts` and ensure appropriate crawling rules in `src/app/robots.ts`.
5. **Structured Data (JSON-LD):** Keep Schema.org data updated in `src/app/layout.tsx` (e.g. `Person` schema with skills, social links `sameAs`, and `WebSite` schema). Use Next.js script tags with `dangerouslySetInnerHTML={{ __html: JSON.stringify(...) }}`.
6. **Semantic HTML & Accessibility:** Maintain heading hierarchies (`h1` reserved for main intro in `Hero`, `h2` for section titles), descriptive `alt` texts on images, and `rel="noopener noreferrer"` on external links.

## Build, Test, and Development Commands

Use `pnpm` for dependency management and scripts:

- `pnpm install` — install the locked dependency set.
- `pnpm dev` — start the Next.js development server with Turbopack (typically at `http://localhost:3000`).
- `pnpm lint` — run ESLint across the repository; use it before submitting changes.
- `pnpm build` — create the optimized Next.js production build in `.next/` and verify static generation of routes, sitemaps, and robots.
- `pnpm start` — serve the production build locally.

There is currently no automated test suite configured. Always run `pnpm lint` and `pnpm build` before finalizing any changes.

## Coding Style & Naming Conventions

- Use modern TypeScript and TSX, two-space indentation, and arrow functional components with explicit default exports where appropriate.
- Name React components and component files in PascalCase (`ProjectCard.tsx`); use camelCase for utilities and data files (`utils.ts`, `insertImage.ts`).
- Separate content from presentation: keep portfolio content typed in `src/constants/` rather than hardcoding large arrays or objects inside rendering JSX.
- Use Tailwind CSS utility classes and preserve established responsive breakpoints (`md:`, `lg:`) and animations (`motion`, `tailwind-animations`).
- ESLint (`eslint.config.mjs`) is authoritative for linting.

## Commit & Pull Request Guidelines

Existing commits follow Conventional Commits with a scope:
- `feat(seo): ...`, `refactor(Hero): ...`, `style(ui/Navbar): ...`, `docs: ...`, or `fix: ...`.
- Keep commit messages concise, imperative, and descriptive.
- In pull requests, mention validation performed (`pnpm lint`, `pnpm build`) and note affected sections.

## Security & Configuration Tips

- Keep secrets out of source control and place local configuration in `.env`.
- Client-side environment variables must use the `NEXT_PUBLIC_` prefix (e.g. `NEXT_PUBLIC_SITE_URL`, `NEXT_PUBLIC_EMAIL_*`).
- Review `.gitignore` before adding generated files; never commit credentials or production-only tokens.
