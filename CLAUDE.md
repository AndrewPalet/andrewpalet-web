# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `yarn start` — Start dev server (Create React App)
- `yarn build` — Production build
- `yarn test` — Run tests (Jest via react-scripts, interactive watch mode)
- `yarn test --watchAll=false` — Run tests once (CI-friendly)

## Architecture

This is a single-page portfolio website built with Create React App, TypeScript, and Material UI v5. It is deployed on Netlify. Node version is pinned via Volta (v24.14.0).

The app renders all sections on one page (no route-based navigation). The NavBar uses `scrollIntoView` to smooth-scroll to sections by their container ID (`#Home-Container`, `#About-Container`, etc.).

### Key Files

- `src/Theme.tsx` — MUI theme config (palette, typography, component overrides) with `responsiveFontSizes`
- `src/data/data.ts` — Centralized content data (job info, skills list, projects array). Edit this file to update portfolio content.
- `src/App.tsx` — Root layout: wraps all sections in `ThemeProvider` + `Router`, uses Emotion `styled` for the outer container

### Styling Approach

Components use a mix of:
- **Emotion `styled`** for component-level wrappers (imported from `@emotion/styled`)
- **MUI `sx` prop** for inline styling
- **SCSS** only for global body styles (`App.scss`)

### Contact Form

The contact form (`src/components/Contact/Contact.tsx`) sends emails via EmailJS (`@emailjs/browser`) with hardcoded service/template/user IDs.

## Code Style

- Prettier config: no semicolons, single quotes, trailing commas (es5), 2-space tabs
- TypeScript strict mode enabled
- Functional components only (no class components)
