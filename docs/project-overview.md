---
updated: "2026-04-14T05:34:25Z"
---
<!-- brain:begin project-doc-overview -->
Project: `fbcwimberley`

Primary runtime: `node`

## Manifests

- `package.json`

## Repo Map

- `.brain/`
- `.claude/`
- `.codex/`
- `docs/`
- `node_modules/`
- `scripts/`
- `src/`
- `static/`
- `wiki/`
<!-- brain:end project-doc-overview -->

## Local Notes

### Product Summary

- This is the public-facing First Baptist Church Wimberley website rebuild in SvelteKit.
- The site mixes marketing pages, visitor onboarding, ministry landing pages, livestream access, and event registration funnels.
- The app intentionally keeps users on branded FBC pages for discovery and context, then hands off to Church Center, Realm, Procare, or other external systems only at the actual action step.
- The `/events` experience is a curated front door over Planning Center Registrations instead of a direct dump into Church Center.

### Stack And Runtime

- SvelteKit 2 with Svelte 5 runes and TypeScript.
- Vite 7 with Tailwind CSS v4 via `@tailwindcss/vite`.
- Bun is the documented package manager and script runner.
- Styling is a mix of tokenized custom properties in `src/app.css`, Tailwind utility classes, and route-scoped CSS.

### Route Inventory

- `/`: home page composed from shared section components `Hero`, `Features`, `Newsletter`, `NextStep`, and `EventsCTA`.
- `/about-us`: visitor-facing page with church story, vision, staff roster, FAQs, mission values, and contact details.
- `/connect`: next-step funnel for Sunday attendance, groups, online giving, and a Church Center next-step form.
- `/watch`: livestream embed page using a LiveControl iframe.
- `/events`: server-rendered Planning Center event list with a featured event, category filter, and direct registration/detail links.
- `/events/family-life-weekend`: server-rendered detail page for the featured Family Life Weekend registration sourced from Planning Center.
- `/ministries`: index of ministry areas linking to both internal pages and external Church Center group destinations.
- `/ministries/womens-ministry`: custom ministry page with hardcoded weekly group schedules, opportunities, and a hidden legacy contact form implementation.
- `/ministries/care`, `/ministries/missions`: standalone ministry pages with static content and contact destinations.
- `/ministries/preschool`, `/ministries/elementary`, `/ministries/junior-high`, `/ministries/high-school`: Family Life pages with a shared content style and Church Center CTAs.
- `/ministries/kids-day-out`: a more independent microsite-style page with a delayed YouTube hero video, Procare registration link, staff rosters, and a legacy contact form postback.
- `/serve-the-church`, `/serve-the-community`: static serve pages that link outward to ministry information pages.
- `/chairqr`: QR-driven first-visit landing page for guests in the building, with service basics, ministries, events, contact info, and podcast/giving/group links.
- `/api/newsletter`: POST endpoint that validates a first name, last name, and email, then upserts the contact into Mailchimp.

### External Systems And Secrets

- `MAILCHIMP_API_KEY` and `MAILCHIMP_AUDIENCE_ID` or `MAILCHIMP_LIST_ID` are required for newsletter signup.
- `PLANNINGCENTER_CLIENT_ID` and `PLANNINGCENTER_PAT` are required for the server-side events pages.
- Church Center is used for groups, some ministry registrations, and the connect/next-step form.
- Realm handles giving.
- LiveControl handles the livestream page.
- Procare handles Kids Day Out registration.
- A couple of pages still POST to legacy `fbcwimberley.com/wp-admin/admin-ajax.php` Elementor form endpoints using `mode: 'no-cors'`.
- `src/app.html` includes a Plausible analytics script for outbound-link tracking.

### Assets And Maintenance Scripts

- Most images live under `static/images/remote/` as localized copies of previously remote assets.
- `scripts/localize-images.mjs` crawls `src/**` for image URLs, downloads them into `static/images/remote`, and rewrites source references.
- `scripts/convert-images-to-webp-ffmpeg.mjs` converts JPG/PNG/GIF assets under `static/images` to WebP, rewrites references, and removes originals.
- `static/images/kdo/` exists as a dedicated image area for Kids Day Out assets.
- `.codex/skills/brain/` and `.claude/skills/brain/` hold the project-local Brain skill install for Codex and Claude.
