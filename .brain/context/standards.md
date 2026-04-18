# Standards

<!-- brain:begin context-standards -->
Use this file for implementation and review expectations.

## Standards

- Preserve existing repo conventions and testing workflows.
- Prefer narrow, reviewable changes over broad speculative rewrites.
- Keep reusable interaction/styling behavior in primitives or global tokenized utilities when it is used in more than one place.
<!-- brain:end context-standards -->

## Local Notes

### Repo-Specific Standards

- This repo uses Svelte 5 runes. Do not reintroduce legacy `$:` reactivity or `export let`.
- Follow the primitive/section/page layering documented in `docs/design-system-governance.md`.
- Use design tokens from `src/app.css` instead of inventing ad hoc colors, radii, and shadows.
- Update both light and dark theme token values when adding shared visual tokens.
- Internal links should stay on SvelteKit routes; external actions generally go to Church Center, Realm, Procare, or other named services.
- Prefer localized static images over hotlinked remote assets.
- Route-local content arrays are normal in this codebase for one-off ministry/content pages; do not over-abstract them unless the reuse case is real.
