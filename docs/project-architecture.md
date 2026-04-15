# Project Architecture

<!-- brain:begin project-doc-architecture -->
Use this file for the structural shape of the repository.

## Architecture Notes

- The app has one global layout and many route-local content pages rather than a deep componentized CMS-style architecture.
- Shared logic is concentrated in the root layout, header/footer/navigation, theme store, newsletter API route, and Planning Center server helper.
- Most ministry and content pages are intentionally authored inline in route files because their layouts and copy are one-off and not broadly reusable.
<!-- brain:end project-doc-architecture -->

## Local Notes

### Application Shell

- `src/app.html` is part of the runtime architecture, not just boilerplate. It preconnects to Google Fonts, preloads the Inter and Playfair Display stylesheet, applies a no-flash dark-theme script before paint, and injects the Plausible analytics script.
- `src/routes/+layout.svelte` imports `src/app.css`, initializes the theme listener on mount, forces scroll-to-top on route changes without hashes, exposes an accessibility skip link, and wraps every page with `Header` and `Footer`.
- `src/routes/+layout.server.ts` reads a dismissal cookie and decides whether the home-page event banner should render.

### Shared UI Layers

- `src/lib/ui/*` holds the reusable primitives: `Button`, `Card`, `Input`, and `Alert`.
- `src/lib/components/*` holds higher-level shared sections: header, footer, theme toggle, and the five homepage sections.
- Route files under `src/routes/**` own most page-specific content, images, data arrays, and one-off layouts.

### Navigation And Banner Model

- `Header.svelte` owns both desktop hover menus and mobile accordion menus, so navigation edits must stay in sync in two places.
- The home-page promo banner is only shown on `/`, only while the header is not scrolled, and can be dismissed for one hour via the `family-life-weekend-banner-dismissed` cookie.
- Header scroll state also controls logo variant swaps and transparent-vs-solid header styling.

### Styling And Theme System

- `src/app.css` is the main design-token surface and defines Tailwind v4 `@theme` variables for colors, typography, radii, shadows, motion, and special ministry palettes.
- Dark mode is class-based on `<html>` via `.dark`, with the effective theme managed by `src/lib/stores/theme.ts`.
- Shared button and card behaviors are implemented through tokenized utility classes plus primitive wrappers.
- The Family Life and Kids Day Out routes use an additional bright sub-palette (`--color-kids-*`) instead of only the main church palette.

### Data And Integration Boundaries

- Newsletter signup is client-to-server within this repo: `Newsletter.svelte` posts JSON to `/api/newsletter`, then the server route upserts a Mailchimp subscriber and tags them with `Weekly Contact (God Time/Shoutout)`.
- Events are server-rendered from `src/lib/server/planningCenter.ts`, which fetches signups, signup times, locations, and pricing metadata from the Planning Center Registrations API.
- `planningCenter.ts` also normalizes Church Center event/registration URLs, derives categories, sorts events, chooses a featured event by hardcoded `EVENT_ID`, and returns fallback models on failure.
- The women’s ministry and Kids Day Out pages still rely on legacy WordPress Elementor form postbacks with `mode: 'no-cors'`, which means success is inferred from an opaque response rather than a structured JSON API.

### Page Families

- Home page: fully shared-section composition.
- About, Connect, Serve, Watch, and most ministry pages: route-local static or semi-static content pages.
- Events: the only notable SSR data-driven page family in the app.
- Chair QR: a dedicated in-building guest landing page with its own information architecture and CTA mix.
