# Repository Guidelines

## Project Structure & Module Organization

This repository is a React 19 portfolio built with Vite and Tailwind CSS. Application code lives in `src/`:

- `components/` contains reusable UI and portfolio sections such as projects, experience, skills, and contact.
- `pages/` contains high-level views (`Home.jsx`), while `Layout/` contains page-level wrappers.
- `constants/` stores portfolio content and asset mappings (`docsProjects.js`, `docsCertificate.js`, and `constantsIcons.js`).
- `assets/` contains imported images and icons; `public/` contains files served directly, such as the favicon.
- `utils/` contains shared helper functions. `src/main.jsx` and `src/App.jsx` are the application entry points.

## Build, Test, and Development Commands

Use `pnpm` for dependency management and scripts:

- `pnpm install` — install the locked dependency set.
- `pnpm dev` — start the Vite development server, normally at `http://localhost:5173`.
- `pnpm lint` — run ESLint across the repository; use it before submitting changes.
- `pnpm build` — create the optimized production bundle in `dist/`.
- `pnpm preview` — serve the production bundle locally after building.

There is currently no automated test suite configured. For UI changes, verify the affected responsive layouts and interactions in the development server, then run lint and build.

## Coding Style & Naming Conventions

Use modern ES modules and JSX, two-space indentation, and the existing semicolon-light style. Name React components and component files in PascalCase (`ProjectCard.jsx`); use camelCase for utilities and data files (`insertImage.js`). Prefer focused, reusable components and keep portfolio content in `src/constants` rather than embedding it in rendering logic. Use Tailwind utility classes for styling and preserve the established responsive and animation patterns. ESLint (`eslint.config.js`) is authoritative for JavaScript/JSX linting.

## Commit & Pull Request Guidelines

Existing commits use short Conventional Commit-like prefixes, often with a scope: `feat(Projects): ...`, `refactor(Hero): ...`, `style(ui/Navbar): ...`, or `fix: ...`. Keep messages concise and describe the user-visible or code-level change.

Pull requests should explain the change, identify affected sections, and include screenshots or a short recording for visual/UI updates. Mention validation performed (`pnpm lint`, `pnpm build`) and link any related issue when applicable.

## Security & Configuration Tips

Keep secrets out of source control and place local configuration in `.env`. Review `.gitignore` before adding generated files; never commit credentials or production-only tokens.
