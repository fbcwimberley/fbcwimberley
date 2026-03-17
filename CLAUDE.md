# WFBC POC - First Baptist Church Wimberley

Church website rebuild using SvelteKit 5 with a modern family-church aesthetic.

## Tech Stack

- **Framework:** SvelteKit 2.50+ / Svelte 5.51+ (uses runes: `$state`, `$effect`, `$props`)
- **Language:** TypeScript (strict mode)
- **Runtime/Package Manager:** Bun 1.1+
- **Build:** Vite 7.3+
- **Styling:** CSS custom properties for light/dark theming, component-scoped `<style>` blocks
- **Fonts:** Inter (sans), Playfair Display (serif) via Google Fonts
- **Adapter:** `@sveltejs/adapter-auto`

## Quick Start

```bash
bun run dev          # Start dev server (usually localhost:5173)
bun run build        # Production build
bun run preview      # Preview production build
bun run check        # TypeScript + Svelte type checking
```

## Key File Locations

```
src/
├── app.html                        # Shell HTML (theme flash prevention script, fonts)
├── app.css                         # Global styles, CSS custom properties, button variants
├── lib/
│   ├── components/                 # All UI components
│   │   ├── Header.svelte           # Fixed nav, dropdowns, mobile menu, theme toggle
│   │   ├── Footer.svelte           # 3-col footer, social links, copyright
│   │   ├── Hero.svelte             # Auto-rotating image carousel (5s interval)
│   │   ├── Features.svelte         # 3-card glassmorphism section (dark bg)
│   │   ├── Newsletter.svelte       # Email signup form (dark bg, glass card)
│   │   ├── NextStep.svelte         # CTA section with dual images (light bg)
│   │   ├── EventsCTA.svelte        # Events/newsletter CTA (dark bg)
│   │   └── ThemeToggle.svelte      # Sun/moon toggle button
│   ├── server/
│   │   └── planningCenter.ts       # Planning Center Registrations API helpers
│   └── stores/
│       └── theme.ts                # Theme store: light | dark | system
├── routes/
│   ├── +layout.svelte              # Root layout (Header + Footer + theme init)
│   ├── +page.svelte                # Home page (composes section components)
│   ├── events/+page.svelte         # Events listing page
│   ├── events/+page.server.ts      # Planning Center event loader
│   └── about-us/+page.svelte       # About page (staff, FAQs, mission, contact)
```

## Common Imports

```typescript
// Svelte 5 runes (no import needed, compiler built-ins)
let value = $state(initialValue);
let derived = $derived(expression);
$effect(() => { /* side effect */ });
let { prop } = $props();

// Theme
import { toggleTheme, themePreference, applyTheme, initThemeListener } from '$lib/stores/theme';

// Components
import ComponentName from '$lib/components/ComponentName.svelte';

// SvelteKit
import { browser } from '$app/environment';
import { onMount } from 'svelte';
```

## Design System Quick Reference

### CSS Custom Properties (defined in app.css)

| Token | Light | Dark | Usage |
|-------|-------|------|-------|
| `--color-bg` | `#faf9f6` | `#0f0f1a` | Page background |
| `--color-bg-alt` | `#f0ede6` | `#1a1a2e` | Section alternate bg |
| `--color-bg-card` | `#ffffff` | `#1e1e32` | Card backgrounds |
| `--color-text` | `#1a1a2e` | `#e4e4ec` | Body text |
| `--color-text-muted` | `#5a5a6e` | `#9a9ab0` | Secondary text |
| `--color-primary` | `#2c5f7c` | `#5a9fc2` | Links, primary buttons |
| `--color-accent` | `#c8915a` | `#d4a36a` | Gold accent, labels |
| `--color-heading` | `#1a1a2e` | `#f0f0f8` | Headings |
| `--font-sans` | Inter | | Body text |
| `--font-serif` | Playfair Display | | Headings |
| `--radius-sm/md/lg/full` | 6/12/20/9999px | | Border radius |

### Button Classes (defined in app.css)

- `.btn .btn-primary` — Blue background, white text
- `.btn .btn-accent` — Gold background, white text
- `.btn .btn-outline` — White border on transparent (for dark sections)
- `.btn .btn-outline-dark` — Primary border on transparent (for light sections)

### Section Pattern

Dark glassmorphism sections alternate with light sections for visual rhythm:
- **Dark sections** (Features, Newsletter, Vision, Mission): Background image + gradient overlay + glassmorphic cards
- **Light sections** (NextStep, Story, FAQs, Contact): `var(--color-bg)` or `var(--color-bg-alt)`

### Glassmorphism Card Pattern

```css
background: rgba(255, 255, 255, 0.07);
backdrop-filter: blur(12px);
-webkit-backdrop-filter: blur(12px);
border: 1px solid rgba(255, 255, 255, 0.12);
border-radius: var(--radius-lg);
```

### Responsive Breakpoints

- `640px` — Small (2-col grids, horizontal buttons)
- `768px` — Medium (2-col layouts, desktop padding)
- `1024px` — Large (3-col grids, desktop nav visible)

## External Services

| Service | URL | Purpose |
|---------|-----|---------|
| ChurchCenter | `fbcwimberley.churchcenter.com` | Groups, events, directory |
| OnRealm | `onrealm.org/fbcwimberley` | Online giving |
| Mailchimp | `eepurl.com/bUEnaz` | Newsletter signup |
| WordPress | `fbcwimberley.com` | Image hosting, legacy pages |

## Detailed Guides

> **Only read guides relevant to your current task to conserve tokens.**

See `docs/` for detailed documentation:

| Guide | Read when... |
|-------|-------------|
| [architecture-overview.md](docs/architecture-overview.md) | Understanding component relationships, data flow, or how the app is structured |
| [design-system-governance.md](docs/design-system-governance.md) | Choosing which UI layer to change, when to create/extend primitives, and keeping UI evolution consistent |
| [coding-standards.md](docs/coding-standards.md) | Writing new code, reviewing conventions, or unsure about naming/style |
| [common-tasks.md](docs/common-tasks.md) | Adding pages, components, modifying theme, or routine development workflows |
| [theming-guide.md](docs/theming-guide.md) | Working on light/dark mode, colors, or the CSS custom property system |
| [component-guide.md](docs/component-guide.md) | Creating new UI sections or modifying existing component patterns |

### Guide Selection Helper

| Task | Guides to read |
|------|---------------|
| Add a new page | common-tasks, coding-standards |
| Add a new section component | design-system-governance, component-guide, coding-standards |
| Change colors or theme | theming-guide |
| Fix layout or responsiveness | component-guide |
| Understand how something works | architecture-overview |
| Refactor or restructure | architecture-overview, design-system-governance, coding-standards |
| Add interactivity (forms, toggles) | design-system-governance, component-guide, common-tasks |

## Maintenance

When making changes that affect project structure, conventions, or architecture, **update the relevant guide in docs/** and this file if key locations or quick reference info changed.
