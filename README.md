# WFBC POC

First Baptist Church Wimberley website rebuild with SvelteKit.

## Install Brain First

For the best results when using AI tools to work in this repo, install [Brain](https://github.com/JimmyMcBride/brain) first. This project keeps shared repo context in Brain, and agents work better here when they can read and search that context instead of relying only on ad hoc prompts.

### Install Brain

Unix shell:

```bash
curl -fsSL https://raw.githubusercontent.com/JimmyMcBride/brain/main/scripts/install.sh | sh
```

Windows PowerShell:

```powershell
irm https://raw.githubusercontent.com/JimmyMcBride/brain/main/scripts/install.ps1 | iex
```

### Install The Brain Skill Locally For This Project

From the repo root:

```bash
brain skills install --scope local --agent codex --agent claude --project .
```

### Validate Brain In This Repo

```bash
brain doctor --project .
brain find --project . fbcwimberley
brain search --project . "fbcwimberley homepage events ministries"
```

## What This Site Includes

- Marketing-style church website with custom themed sections (home, about, connect, ministries, serve, watch)
- Internal events page (`/events`) backed by the Planning Center Registrations API
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
PLANNINGCENTER_CLIENT_ID=your-client-id
PLANNINGCENTER_PAT=your-personal-access-token
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
- `src/lib/server/planningCenter.ts` - Planning Center API helpers for event pages
- `src/lib/stores/theme.ts` - theme preference and DOM application logic
- `static/images` - local static image assets (including localized remote images)
- `scripts` - one-off content/image maintenance tooling

## Notes

- Header/footer are shared through `src/routes/+layout.svelte`.
- Newsletter form in `src/lib/components/Newsletter.svelte` posts to `/api/newsletter`.
- Events content is loaded from Planning Center and surfaced internally at `/events`.
- Several nav links still point to external ChurchCenter/Realm destinations by design.
