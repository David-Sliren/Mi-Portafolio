# Repository Guidelines

## Project Structure & Module Organization

This repository is a portfolio built with Next.js 16 (App Router), React 19, TypeScript, and Tailwind CSS. Application code lives in `src/`:

- `app/` contains the Next.js App Router structure (`layout.tsx`, `(home)/page.tsx`, and `globals.css`).
- `components/` contains reusable UI and portfolio sections such as `Hero`, `Experience`, `Skills`, `Projects`, `Certificates`, `aboutMe`, and `Contact`.
- `Layout/` contains page-level layout wrappers (`Home.tsx`, `HorizontalScroll.tsx`).
- `constants/` stores portfolio content and asset mappings (`docsProjects.ts`, `docsCertificate.ts`, `constantsIcons.ts`, and `insertImage.ts`).
- `assets/` contains imported images and icons; `public/` contains static assets served directly.
- `utils/` contains shared helper functions (`utils.ts`).

## Build, Test, and Development Commands

Use `pnpm` for dependency management and scripts:

- `pnpm install` — install the locked dependency set.
- `pnpm dev` — start the Next.js development server (typically at `http://localhost:3000`).
- `pnpm lint` — run ESLint across the repository; use it before submitting changes.
- `pnpm build` — create the optimized Next.js production build in `.next/`.
- `pnpm start` — serve the production build locally.

There is currently no automated test suite configured. For UI changes, verify the affected responsive layouts and interactions in the development server, then run lint and build.

## Coding Style & Naming Conventions

Use modern TypeScript and TSX, two-space indentation, and arrow functional components with explicit default exports where appropriate. Name React components and component files in PascalCase (`ProjectCard.tsx`); use camelCase for utilities and data files (`utils.ts`, `insertImage.ts`). Prefer focused, reusable components and keep portfolio content typed in `src/constants/` rather than embedding it in rendering logic. Use Tailwind utility classes for styling and preserve the established responsive and animation patterns. ESLint (`eslint.config.mjs`) is authoritative for linting.

## Commit & Pull Request Guidelines

Existing commits use short Conventional Commit-like prefixes, often with a scope: `feat(Projects): ...`, `refactor(Hero): ...`, `style(ui/Navbar): ...`, or `fix: ...`. Keep messages concise and describe the user-visible or code-level change.

Pull requests should explain the change, identify affected sections, and include screenshots or a short recording for visual/UI updates. Mention validation performed (`pnpm lint`, `pnpm build`) and link any related issue when applicable.

## Security & Configuration Tips

Keep secrets out of source control and place local configuration in `.env`. Client-side environment variables must use the `NEXT_PUBLIC_` prefix (e.g. `NEXT_PUBLIC_EMAIL_*`). Review `.gitignore` before adding generated files; never commit credentials or production-only tokens.
