---
updated: "2026-04-22T16:36:53Z"
---
# Architecture

<!-- brain:begin context-architecture -->
Use this file for the structural shape of the repository.

## Architecture Notes

- One global layout wraps mostly route-local content pages.
- Shared client logic lives in the header, theme store, homepage section components, and UI primitives.
- Shared server logic lives in the newsletter API route and Planning Center helper.
<!-- brain:end context-architecture -->

## Local Notes

### Shell

- `src/app.html` handles font loading, theme flash prevention, and analytics injection.
- `src/routes/+layout.svelte` applies global CSS, initializes theme listeners, resets scroll on route changes, and renders the skip link, header, and footer.
- `src/routes/+layout.server.ts` decides whether the home-page banner should be shown based on a cookie.

### Shared UI Layers

- `src/lib/ui/*`: reusable primitives (`Button`, `Card`, `Input`, `Alert`)
- `src/lib/components/*`: shared layout and homepage sections
- `src/routes/**`: mostly page-local layouts, data arrays, and copy

### Integration Boundaries

- Newsletter: `src/lib/components/Newsletter.svelte` -> `src/routes/api/newsletter/+server.ts` -> Mailchimp
- Events: `src/routes/events/**` -> `src/lib/server/planningCenter.ts` -> Planning Center Registrations API
- Events featured rule: `getUpcomingEvents()` may keep AWANA in the event list, but AWANA should not be selected as the featured event because it runs through most of the school year.
- Legacy ministry forms: route-local `fetch()` calls -> WordPress Elementor `admin-ajax.php` with `no-cors`
- Streaming and registration handoff: route-local CTAs -> LiveControl, Church Center, Realm, Procare

### Reuse Pattern

- Home page uses extracted shared sections.
- Most ministry/content pages are inline route files because the content structure is unique and tightly coupled to the page.
- Reusable design behavior should go into `src/lib/ui/*` or tokenized utilities in `src/app.css` instead of being duplicated across routes.
