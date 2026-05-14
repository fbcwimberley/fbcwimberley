# Architecture Overview

> **Read when:** Understanding component relationships, data flow, or how the app is structured.

## App Structure

```
app.html (shell)
  └── +layout.svelte (root layout)
        ├── Header.svelte (fixed, all pages)
        │     └── ThemeToggle.svelte
        ├── <main> (page content via {@render children()})
        │     ├── +page.svelte (home — composes section components)
        │     ├── events/+page.svelte (Planning Center-backed event listing)
        │     └── about-us/** (shared About hero layout + three child pages)
        └── Footer.svelte (all pages)
```

## Data Flow

### Theme System

```
app.html (inline script)          ← Prevents flash of wrong theme on load
    ↓
+layout.svelte (onMount)          ← Calls initThemeListener()
    ↓
theme.ts store                    ← Manages state: 'light' | 'dark' | 'system'
    ├── themePreference (writable) ← Reactive store, read by ThemeToggle
    ├── applyTheme()              ← Adds/removes .dark class on <html>
    ├── toggleTheme()             ← Cycles light ↔ dark, updates store + DOM + localStorage
    └── initThemeListener()       ← Listens for OS prefers-color-scheme changes
    ↓
CSS custom properties             ← :root vs :root.dark selectors in app.css
    ↓
All components                    ← Use var(--color-*) tokens, auto-switch
```

**Key detail:** The theme class (`.dark`) is applied to `document.documentElement` (`<html>`), NOT `<body>`. Components target it via `:global(.dark)` in scoped styles or directly in app.css.

**localStorage key:** `'theme'` — stores `'light'` or `'dark'`. Absent = system default.

### Component State

Components use Svelte 5 runes for local state. There is no global state beyond the theme store.

| Component | State | Purpose |
|-----------|-------|---------|
| Header | `mobileMenuOpen`, `ministriesOpen`, `serveOpen`, `scrolled` | Navigation UI |
| Hero | `currentSlide` | Image carousel index |
| Newsletter | `firstName`, `lastName`, `email`, `submitted` | Form fields + submission state |
| About Us pages | `openFaq`, `expandedStaff`, `openSubvalues` | FAQ, staff bio, and core values accordion toggles |

### Rendering Strategy

- **SSR + Client Hydration:** SvelteKit renders pages on the server, then hydrates on the client.
- **Selective server data loading:** Planning Center event pages use `+page.server.ts` to fetch live registration data.
- **API routes:** Server routes exist for integrations such as Mailchimp newsletter signup.
- **Layout inheritance:** All pages inherit `+layout.svelte` which provides Header, Footer, and theme initialization.

## Page Composition Patterns

### Home Page (Compositional)

The home page has zero logic — it purely composes section components:

```svelte
<Hero />
<Features />
<Newsletter />
<NextStep />
<EventsCTA />
```

Each section is fully self-contained with its own markup, styles, data, and interactivity.

### About Us Pages (Shared Layout + Route-Local Sections)

The about route redirects `/about-us` to `/about-us/our-story` and uses a shared `about-us/+layout.svelte` hero for all child pages. About-specific staff and FAQ data live in `about-us/aboutData.ts`.

The child pages are:
- `/about-us/our-story` — story copy, Plan Your Visit, and FAQs
- `/about-us/mission-vision-values` — mission and vision copy plus four core value groups with 12 expandable subvalue buttons
- `/about-us/our-team` — staff roster and contact/map section

This pattern works for content-heavy pages where the sections are unique to that page and unlikely to be reused.

## Navigation Architecture

The Header manages a two-level navigation hierarchy:

```
Level 1: About Us | Ministries | Groups | Serve | Events | Give
Level 2: ├── Our Story             ├── Family Milestones   ├── Serve The Church
         ├── Mission/Vision/Values ├── KDO                 └── Serve The Community
         └── Our Team              ├── Kids Ministry
                                  ├── Student
                                  ├── Women's
                                  ├── Men's
                                  ├── Care
                                  └── Missions
Level 3:                              ├── Counseling
                                      └── Widows
```

**Desktop:** CSS hover-triggered dropdowns (`.has-dropdown:hover .dropdown`)
**Mobile:** JavaScript toggle-based accordions with `$state` booleans

**Internal vs External links:**
- `/about-us/**`, `/connect`, `/events`, ministry pages → Internal SvelteKit routes
- Groups, directory, giving, and some registrations → External URLs (churchcenter, onrealm)

## Visual Rhythm

The page alternates between dark glassmorphism sections and light sections:

```
[Hero]              — Dark (image + overlay)
[Features]          — Dark (image bg + glass cards)
[Newsletter]        — Dark (image bg + glass form)
[NextStep]          — Light (bg-alt)
[EventsCTA]         — Dark (image bg + overlay)
[Footer]            — Dark (solid bg)
```

This creates a rhythmic visual flow. When adding new sections, maintain this alternation.

## Image Strategy

All images are stored locally in the `static/` directory as `.webp` files for optimal performance. There are no externally hosted images (except favicon.svg which remains in `static/`). Images are referenced via root-relative paths (e.g., `/images/some-photo.webp`).

WebP format is used exclusively across the project for its superior compression and quality compared to JPEG/PNG.
