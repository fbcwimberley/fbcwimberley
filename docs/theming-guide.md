# Theming Guide

> **Read when:** Working on light/dark mode, colors, or the CSS custom property system.

## How the Theme System Works

### 1. Flash Prevention (app.html)

An inline `<script>` in `app.html` runs before any rendering:

```javascript
const stored = localStorage.getItem('theme');
if (stored === 'dark' || (!stored && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark');
}
```

This prevents a flash of the wrong theme on page load. It runs synchronously before the page paints.

### 2. Theme Store (src/lib/stores/theme.ts)

```
themePreference: writable<'light' | 'dark' | 'system'>
```

**Functions:**

| Function | Purpose |
|----------|---------|
| `getInitialTheme()` | Reads localStorage, defaults to `'system'` |
| `getEffectiveTheme(theme)` | Resolves `'system'` to actual `'light'` or `'dark'` |
| `applyTheme(theme)` | Adds/removes `.dark` on `<html>`, writes localStorage |
| `toggleTheme()` | Flips current effective theme and applies it |
| `initThemeListener()` | Sets up OS `prefers-color-scheme` change listener |

### 3. CSS Application

Theme is applied via a `.dark` class on `<html>`:

```css
:root { --color-bg: #faf9f6; }         /* Light */
:root.dark { --color-bg: #0f0f1a; }    /* Dark */
```

All components use `var(--color-*)` tokens which automatically switch.

### 4. Component Integration

- `+layout.svelte` calls `initThemeListener()` on mount
- `ThemeToggle.svelte` reads `$themePreference` and calls `toggleTheme()`
- Components use `:global(.dark)` for theme-specific overrides when needed

## Complete Token Reference

### Backgrounds

| Token | Light | Dark |
|-------|-------|------|
| `--color-bg` | `#faf9f6` (warm white) | `#0f0f1a` (deep navy) |
| `--color-bg-alt` | `#f0ede6` (cream) | `#1a1a2e` (dark navy) |
| `--color-bg-card` | `#ffffff` | `#1e1e32` (dark purple-navy) |
| `--color-bg-hero-overlay` | `rgba(0,0,0,0.45)` | `rgba(0,0,0,0.6)` |

### Text

| Token | Light | Dark |
|-------|-------|------|
| `--color-text` | `#1a1a2e` | `#e4e4ec` |
| `--color-text-muted` | `#5a5a6e` | `#9a9ab0` |
| `--color-text-inverse` | `#ffffff` | `#ffffff` |
| `--color-heading` | `#1a1a2e` | `#f0f0f8` |

### Brand Colors

| Token | Light | Dark |
|-------|-------|------|
| `--color-primary` | `#2c5f7c` (steel blue) | `#5a9fc2` (lighter blue) |
| `--color-primary-hover` | `#1e4a63` | `#7ab4d4` |
| `--color-primary-light` | `#e8f0f5` | `#1a2a38` |
| `--color-accent` | `#c8915a` (warm gold) | `#d4a36a` |
| `--color-accent-hover` | `#b07a45` | `#e0b580` |

### Borders & Shadows

| Token | Light | Dark |
|-------|-------|------|
| `--color-border` | `#e0ddd6` | `#2a2a40` |
| `--color-border-light` | `#eceae4` | `#252538` |
| `--color-input-border` | `#d0cdc6` | `#2a2a40` |
| `--shadow-sm` | `0 1px 3px rgba(0,0,0,0.06)` | `...0.3)` |
| `--shadow-md` | `0 4px 12px rgba(0,0,0,0.08)` | `...0.4)` |
| `--shadow-lg` | `0 8px 30px rgba(0,0,0,0.1)` | `...0.5)` |

### Footer

| Token | Light | Dark |
|-------|-------|------|
| `--color-footer-bg` | `#1a1a2e` | `#0a0a14` |
| `--color-footer-text` | `#c8c8d4` | `#9a9ab0` |
| `--color-footer-heading` | `#ffffff` | `#e4e4ec` |

### Layout

| Token | Value |
|-------|-------|
| `--radius-sm` | `6px` |
| `--radius-md` | `12px` |
| `--radius-lg` | `20px` |
| `--radius-full` | `9999px` |
| `--font-sans` | `'Inter', system-ui, sans-serif` |
| `--font-serif` | `'Playfair Display', Georgia, serif` |
| `--transition` | `200ms ease` |

## Adding a New Color Token

1. Add to `:root` in `app.css` with the light value
2. Add to `:root.dark` with the dark value
3. Use via `var(--your-token)` in components

## Dark Section Styling

Dark glassmorphism sections (Features, Newsletter, etc.) do NOT use CSS custom properties for text because they always have a dark overlay regardless of theme. Use raw values:

```css
h2 { color: #ffffff; }
p { color: rgba(255, 255, 255, 0.7); }
.label { color: var(--color-accent); } /* Accent works in both */
```

## Testing Theme Changes

1. Toggle via the sun/moon button in the header
2. Check system preference: Browser DevTools → Rendering → `prefers-color-scheme`
3. Verify localStorage: `localStorage.getItem('theme')`
4. Check both light and dark for every section after changes
