# Component Guide

> **Read when:** Creating new UI sections or modifying existing component patterns.
>
> **Policy source:** For decisions about whether to use primitives vs section-local patterns, or when to introduce new reusable components, follow `design-system-governance.md` first.

## Component Inventory

### Layout Components (always rendered)

| Component | File | Description |
|-----------|------|-------------|
| Header | `src/lib/components/Header.svelte` | Fixed nav, dropdowns, mobile menu, logo switching, theme toggle |
| Footer | `src/lib/components/Footer.svelte` | 3-col grid: Quick Links, About/Contact, Resources + social links |
| ThemeToggle | `src/lib/components/ThemeToggle.svelte` | Sun/moon button, 40x40px, reads/writes theme store |

### Section Components (home page)

| Component | File | Type | Key Features |
|-----------|------|------|-------------|
| Hero | `Hero.svelte` | Dark | 3-image carousel (5s), full viewport, gradient overlay |
| Features | `Features.svelte` | Dark (glass) | 3 cards in row, background image, glassmorphism |
| Newsletter | `Newsletter.svelte` | Dark (glass) | Form with glass card, success state, accent button |
| NextStep | `NextStep.svelte` | Light | Centered text, 2-image grid, primary CTA button |
| EventsCTA | `EventsCTA.svelte` | Dark | Parallax bg, 2 CTA buttons, gradient overlay |

### Page Sections (about-us, inline)

| Section | Type | Key Features |
|---------|------|-------------|
| Hero | Dark | Shorter (50vh), image bg, overlay |
| Our Story | Light | Centered text, max-width 800px |
| Our Vision | Dark (glass) | Glass card, blockquote with accent border |
| Staff | Light (alt bg) | Group photo + 3-col card grid, expandable bio |
| Plan Your Visit | Dark (glass) | Glass card with welcome text |
| FAQs | Light | Accordion with chevron animation |
| Our Mission | Dark (glass) | 4-value card grid |
| Contact | Light | 3-col icon cards + Google Maps embed |

## Anatomy of a Section Component

Every section follows a consistent structure:

```
┌─────────────────────────────────────────┐
│  section-label ("Get Connected")        │  ← uppercase, accent color, 0.8rem
│  h2 heading ("There's a place...")      │  ← serif font, clamp() sizing
│                                          │
│  ┌─────────┐ ┌─────────┐ ┌─────────┐  │
│  │  Card 1  │ │  Card 2  │ │  Card 3  │  │  ← responsive grid
│  └─────────┘ └─────────┘ └─────────┘  │
│                                          │
│        [CTA Button →]                    │  ← optional, centered
└─────────────────────────────────────────┘
```

## Hover & Animation Patterns

### Card Lift

```css
.card {
    transition: all 300ms cubic-bezier(0.23, 1, 0.32, 1);
}
.card:hover {
    transform: translateY(-6px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
}
```

### Arrow Reveal on Hover

```css
.link-arrow {
    opacity: 0;
    transform: translateY(6px);
    transition: all 300ms ease;
}
.card:hover .link-arrow {
    opacity: 1;
    transform: translateY(0);
}
.card:hover .link-arrow svg {
    transform: translateX(4px);
}
```

### Image Zoom

```css
.image-wrap {
    border-radius: var(--radius-lg);
    overflow: hidden;
}
.image-wrap img {
    transition: transform 600ms cubic-bezier(0.23, 1, 0.32, 1);
}
.image-wrap:hover img {
    transform: scale(1.04);
}
```

### Chevron Rotation (Accordions)

```css
svg.rotated {
    transform: rotate(180deg);
}
```

Use Svelte's `class:rotated={isOpen}` directive.

## Responsive Grid Patterns

### 1 → 3 Column Grid (Features, Staff, Mission)

```css
.grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1.25rem;
}

@media (min-width: 640px) {
    .grid { grid-template-columns: repeat(2, 1fr); }
}

@media (min-width: 1024px) {
    .grid { grid-template-columns: repeat(3, 1fr); }
}
```

### 1 → 2 Column Grid (Images, Form Rows)

```css
.grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1rem;
}

@media (min-width: 768px) {
    .grid { grid-template-columns: 1fr 1fr; }
}
```

### 1 → 3 Column Grid (Contact Cards)

```css
@media (min-width: 640px) {
    .grid { grid-template-columns: repeat(3, 1fr); }
}
```

## Icon Pattern

All icons are inline SVGs using stroke style (not filled):

```svelte
<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24"
    fill="none" stroke="currentColor" stroke-width="1.5"
    stroke-linecap="round" stroke-linejoin="round">
    <!-- paths -->
</svg>
```

- **Feature icons:** 28-30px, `stroke-width="1.5"`, inside 64px accent circle
- **Contact icons:** 24px, `stroke-width="1.5"`, inside 52px primary circle
- **Nav arrows:** 14-16px, `stroke-width="2"`
- **Button arrows:** 16-18px, `stroke-width="2"`

Icons inherit color from `currentColor`, so set color on the parent element.

## Form Pattern

```svelte
<script lang="ts">
    let field = $state('');
    let submitted = $state(false);

    function handleSubmit(e: SubmitEvent) {
        e.preventDefault();
        submitted = true;
        setTimeout(() => {
            submitted = false;
            field = '';
        }, 3000);
    }
</script>

<form onsubmit={handleSubmit}>
    {#if submitted}
        <div class="success">Thanks!</div>
    {:else}
        <input bind:value={field} required />
        <button type="submit">Submit</button>
    {/if}
</form>
```

**Key details:**
- Use `bind:value` for two-way binding
- `onsubmit` with `preventDefault()`
- Conditional rendering for success state
- Auto-reset after timeout

## Header Scroll Behavior

The header is transparent over hero sections and gains a solid background on scroll:

```typescript
let scrolled = $state(false);
function handleScroll() { scrolled = window.scrollY > 50; }
```

```svelte
<svelte:window onscroll={handleScroll} />
<header class:scrolled>
```

This affects:
- Background: transparent → `var(--color-bg)`
- Logo: white version → dark version (unless dark mode)
- Nav text: white → `var(--color-nav-text)`
- Mobile toggle: white → `var(--color-nav-text)`
