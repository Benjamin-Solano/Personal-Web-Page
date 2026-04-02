# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # Start development server with hot reload
npm run build     # Build for production (output: /dist)
npm run preview   # Preview the production build locally
```

No linting or test commands are configured.

## Architecture

Single-page React portfolio site built with Vite, Tailwind CSS, and Framer Motion.

**Data flow:** All portfolio content lives in `src/data/portfolioData.js` as a single exported object. Every section component reads from this file — update content there, not inside components.

**Component structure:** `App.jsx` manages dark mode state and renders 6 section components in order: `Navbar → Hero → About → Skills → Experience → Contact`. Each component is self-contained and imports only what it needs from `portfolioData.js`.

**Dark mode:** Toggled via a class on `<html>` using React state in `App.jsx`. Preference persisted in `localStorage`; falls back to `prefers-color-scheme` on first load. Tailwind's `dark:` variant strategy is `class`-based (see `tailwind.config.js`).

**Animations:** Framer Motion `whileInView` triggers animations as sections scroll into view. Staggered children use `staggerChildren` + `delayChildren` variants. The custom easing throughout is `[0.16, 1, 0.3, 1]` (expo out).

**Styling conventions:**
- Tailwind utilities are the primary styling mechanism; avoid inline styles.
- Reusable class groups (`.section-wrapper`, `.btn-outline`, `.tag-pill`, `.link-arrow`, `.section-label`) are defined as `@layer components` in `src/index.css`.
- Custom design tokens (color palette `ink`/`cream`/`gold`, fonts `display`/`mono`) are in `tailwind.config.js`.

**Language:** All user-facing content is in Spanish. Keep it consistent.
