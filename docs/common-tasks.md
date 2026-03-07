# Common Tasks

> **Read when:** Adding pages, components, modifying theme, or doing routine development workflows.

## Adding a New Page

1. Create a directory under `src/routes/` with the page slug:

```
src/routes/my-page/+page.svelte
```

2. Basic page template:

```svelte
<script lang="ts">
    // imports and state here
</script>

<svelte:head>
    <title>Page Title - First Baptist Church Wimberley</title>
</svelte:head>

<!-- Hero section -->
<section class="hero">
    <div class="hero-bg" style="background-image: url('...')"></div>
    <div class="hero-overlay"></div>
    <div class="hero-content">
        <p class="hero-label">Label</p>
        <h1>Page Title</h1>
    </div>
</section>

<!-- Content sections... -->

<style>
    /* Page-specific styles */
</style>
```

3. The page automatically inherits Header + Footer from `+layout.svelte`.

4. Update `Header.svelte` nav links if needed (both desktop and mobile nav).

## Adding a New Reusable Component

1. Create `src/lib/components/MyComponent.svelte`

2. Follow the component structure:

```svelte
<script lang="ts">
    // props, state, functions
</script>

<section class="my-component">
    <!-- markup -->
</section>

<style>
    .my-component {
        padding: 5rem 0; /* or 7rem for dark sections */
    }
    /* mobile-first styles, then @media breakpoints */
</style>
```

3. Import and use in a page:

```svelte
<script lang="ts">
    import MyComponent from '$lib/components/MyComponent.svelte';
</script>

<MyComponent />
```

## Adding a Dark Glassmorphism Section

The pattern used by Features, Newsletter, Vision, and Mission sections:

```svelte
<section class="my-section">
    <div class="my-section-bg" style="background-image: url('IMAGE_URL')">
        <div class="my-section-overlay"></div>
    </div>
    <div class="my-section-content container">
        <p class="section-label">Label</p>
        <h2>Heading</h2>
        <!-- Glass cards or content -->
    </div>
</section>

<style>
    .my-section {
        position: relative;
        padding: 5rem 0;
        overflow: hidden;
    }

    .my-section-bg {
        position: absolute;
        inset: 0;
        background-size: cover;
        background-position: center;
        background-attachment: fixed;
    }

    .my-section-overlay {
        position: absolute;
        inset: 0;
        background: linear-gradient(
            160deg,
            rgba(26, 26, 46, 0.93) 0%,
            rgba(26, 26, 46, 0.85) 50%,
            rgba(44, 95, 124, 0.80) 100%
        );
    }

    .my-section-content {
        position: relative;
        z-index: 1;
        text-align: center;
    }

    .my-section-content h2 {
        color: #ffffff;
    }

    @media (min-width: 768px) {
        .my-section { padding: 7rem 0; }
    }
</style>
```

## Adding a Light Content Section

```svelte
<section class="my-section">
    <div class="my-section-content container">
        <p class="section-label">Label</p>
        <h2>Heading</h2>
        <p>Content...</p>
    </div>
</section>

<style>
    .my-section {
        padding: 5rem 0;
        background: var(--color-bg-alt); /* or var(--color-bg) */
    }

    .my-section-content {
        max-width: 800px; /* for text-heavy sections */
        text-align: center;
    }

    .my-section-content h2 {
        font-size: clamp(1.75rem, 4vw, 2.5rem);
        margin-bottom: 1.5rem;
    }
</style>
```

## Adding an FAQ Accordion

```svelte
<script lang="ts">
    const items = [
        { question: 'Question?', answer: 'Answer.' },
        // ...
    ];
    let openIndex = $state<number | null>(null);

    function toggle(i: number) {
        openIndex = openIndex === i ? null : i;
    }
</script>

{#each items as item, i}
    <button class="faq-item" class:open={openIndex === i} onclick={() => toggle(i)}>
        <div class="faq-header">
            <h3>{item.question}</h3>
            <svg class:rotated={openIndex === i} ...chevron icon... />
        </div>
        {#if openIndex === i}
            <div class="faq-answer"><p>{item.answer}</p></div>
        {/if}
    </button>
{/each}
```

## Adding a Nav Link

Update **both** desktop and mobile navigation in `Header.svelte`:

1. Desktop nav: Find `<ul class="nav-list">` and add `<li><a href="/my-page">Label</a></li>`
2. Mobile nav: Find `<ul class="mobile-nav-list">` and add the same link with `onclick={closeMobile}`

For dropdown items, follow the existing `has-dropdown` / `mobile-accordion` patterns.

## Modifying Colors

Edit CSS custom properties in `src/app.css`:

- Light theme: Under `:root { ... }`
- Dark theme: Under `:root.dark { ... }`

Both must be updated together to maintain contrast and readability.

## Build & Verify

After changes:

```bash
npm run build    # Check for build errors
npm run check    # TypeScript/Svelte type checking
```

The dev server hot-reloads automatically, but always run a build check before considering work complete.
