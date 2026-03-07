# WFBC POC

First Baptist Church Wimberley website rebuild with SvelteKit.

## What This Site Includes

- Marketing-style church website with custom themed sections (home, about, connect, ministries, serve, watch)
- Responsive header with dropdown navigation and mobile drawer
- Light/dark theme toggle with persisted preference
- Embedded livestream page (`/watch`)
- Newsletter signup flow backed by Mailchimp (`POST /api/newsletter`)
- Image localization/conversion scripts for remote assets

## Tech Stack

- SvelteKit 2 + Svelte 5 (TypeScript)
- Vite 7
- Tailwind CSS v4 (`@tailwindcss/vite`) plus custom global CSS variables
- Adapter: `@sveltejs/adapter-auto`

## Routes

Top-level pages:

- `/`
- `/about-us`
- `/connect`
- `/ministries`
- `/serve-the-church`
- `/serve-the-community`
- `/watch`

Ministry pages:

- `/ministries/womens-ministry`
- `/ministries/care`
- `/ministries/missions`
- `/ministries/preschool`
- `/ministries/elementary`
- `/ministries/junior-high`
- `/ministries/high-school`
- `/ministries/kids-day-out`

API:

- `POST /api/newsletter` (Mailchimp subscribe/update by email hash)

## Local Development

### 1) Install dependencies

```bash
bun install
```

### 2) Configure environment variables

Create `.env` with:

```bash
MAILCHIMP_API_KEY=your-key-usXX
MAILCHIMP_AUDIENCE_ID=your-audience-id
# Optional fallback name used by the API route:
# MAILCHIMP_LIST_ID=your-audience-id
```

### 3) Run the app

```bash
bun run dev
```

Open `http://localhost:5173`.

## Scripts

- `bun run dev` - start local dev server
- `bun run build` - production build
- `bun run preview` - preview production build
- `bun run check` - Svelte + TypeScript checks
- `bun run check:watch` - watch mode checks
- `bun run localize:images` - download externally hosted image URLs into `static/images/remote` and rewrite references in source files

Additional utility script:

- `node scripts/convert-images-to-webp-ffmpeg.mjs` - convert JPG/PNG/GIF in `static/images` to WebP, rewrite references, and remove original files (requires `ffmpeg`)

## Project Structure

- `src/routes` - page routes and API endpoints
- `src/lib/components` - reusable UI sections and layout components
- `src/lib/stores/theme.ts` - theme preference and DOM application logic
- `static/images` - local static image assets (including localized remote images)
- `scripts` - one-off content/image maintenance tooling

## Notes

- Header/footer are shared through `src/routes/+layout.svelte`.
- Newsletter form in `src/lib/components/Newsletter.svelte` posts to `/api/newsletter`.
- Several nav links point to external ChurchCenter/Realm destinations by design.
