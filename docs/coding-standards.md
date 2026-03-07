# Coding Standards

> **Read when:** Writing new code, reviewing conventions, or unsure about naming/style.
>
> **Policy source:** For component-layer decisions (primitive vs composed vs page-local) and design-system evolution rules, refer to `design-system-governance.md`.

## Svelte 5 Conventions

### Runes (NOT legacy reactive statements)

This project uses **Svelte 5 runes**. Do NOT use legacy `$:` reactive declarations or `export let` for props.

```typescript
// State
let count = $state(0);
let items = $state<string[]>([]);

// Derived values
let doubled = $derived(count * 2);

// Side effects with cleanup
$effect(() => {
    const interval = setInterval(() => { /* ... */ }, 1000);
    return () => clearInterval(interval);
});

// Props
let { title, description } = $props();

// Typed props
let { items, onSelect }: { items: string[]; onSelect: (id: string) => void } = $props();
```

### Slot Content (Svelte 5)

Use `{@render children()}` instead of `<slot />`:

```svelte
<script lang="ts">
    let { children } = $props();
</script>

{@render children()}
```

## File Organization

### Naming

- **Components:** PascalCase — `Header.svelte`, `ThemeToggle.svelte`
- **Stores:** camelCase — `theme.ts`
- **Routes:** kebab-case directories — `about-us/+page.svelte`
- **CSS properties:** kebab-case — `--color-bg-card`

### Component Structure

Follow this order within `.svelte` files:

```svelte
<script lang="ts">
    // 1. Imports
    // 2. Props
    // 3. State ($state)
    // 4. Derived ($derived)
    // 5. Effects ($effect)
    // 6. Functions
</script>

<!-- Markup -->

<style>
    /* Scoped styles */
</style>
```

### Where to Put Things

| Type | Location |
|------|----------|
| Reusable components | `src/lib/components/` |
| Reusable UI primitives | `src/lib/ui/` |
| Stores | `src/lib/stores/` |
| Page-specific sections | Inline in the page's `+page.svelte` |
| Global styles & tokens | `src/app.css` |
| Static assets | `static/` |

## TypeScript

- Always use `lang="ts"` in script tags: `<script lang="ts">`
- Type state when the type isn't obvious: `let items = $state<StaffMember[]>([])`
- Use interfaces/types for data shapes when arrays of objects are involved
- No `any` types — use proper typing or `unknown`

## CSS Conventions

### Use CSS Custom Properties

Always reference design tokens instead of hardcoding values:

```css
/* Good */
color: var(--color-text-muted);
background: var(--color-bg-card);
border-radius: var(--radius-md);
transition: all var(--transition);

/* Bad */
color: #5a5a6e;
background: white;
border-radius: 12px;
transition: all 200ms ease;
```

### Exception: Dark Overlay Sections

For glassmorphism sections with image backgrounds, use raw rgba values since the card sits on a dark overlay regardless of theme:

```css
color: #ffffff;                              /* Always white on dark overlay */
color: rgba(255, 255, 255, 0.7);            /* Muted white */
background: rgba(255, 255, 255, 0.07);      /* Glass effect */
```

### Scoped Styles

- Component styles are scoped by default in Svelte
- Use `:global(.dark)` to target dark mode within scoped styles
- Avoid `!important` except for logo display switching in the Header

### Responsive Design

- Mobile-first: Write base styles for mobile, add `@media (min-width: ...)` for larger screens
- Use standard breakpoints: `640px`, `768px`, `1024px`
- Use `clamp()` for fluid typography: `font-size: clamp(1.5rem, 3vw, 2.5rem)`
- Use CSS Grid for layouts, Flexbox for alignment

## Content Conventions

### Links

- Internal pages: Use SvelteKit paths (`/about-us`)
- External services: Use full URLs, add `target="_blank"` for non-church domains
- Email links: Use `mailto:` protocol
- Phone links: Use `tel:` protocol

### Images

- Reference external URLs from `fbcwimberley.com`
- Always include `alt` text
- Use `loading="lazy"` for below-the-fold images
- Prefer `1024x683` size variants for content images

### Section Labels

Use the consistent uppercase accent label pattern:

```svelte
<p class="section-label">Label Text</p>
```

```css
.section-label {
    font-size: 0.8rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.15em;
    color: var(--color-accent);
    margin-bottom: 0.75rem;
}
```
