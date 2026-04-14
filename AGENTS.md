# AGENTS

## Project Summary

`fbcwimberley` is the public website for First Baptist Church Wimberley. It is a SvelteKit 2 + Svelte 5 + TypeScript app with a mix of shared homepage sections, route-local content pages, a Mailchimp newsletter endpoint, and Planning Center-backed event pages.

The main user flows are:

- visitor onboarding through `/about-us`, `/connect`, and `/chairqr`
- livestream viewing at `/watch`
- ministry discovery through `/ministries/**`
- event discovery and registration through `/events` and `/events/family-life-weekend`
- newsletter signup through `/api/newsletter`

## Brain First

This repo uses Brain as the durable project context layer.

Read order before substantial work:

1. `README.md`
2. `docs/architecture-overview.md`
3. `docs/coding-standards.md`
4. `docs/design-system-governance.md`
5. `docs/component-guide.md`
6. `docs/theming-guide.md`
7. `docs/project-overview.md`
8. `docs/project-architecture.md`
9. `docs/project-workflows.md`
10. `.brain/policy.yaml`
11. the relevant `.brain/context/*.md` files

Use Brain for retrieval and durable updates:

- `brain doctor --project .`
- `brain find --project . fbcwimberley`
- `brain search --project . "fbcwimberley <task>"`
- `brain session start --project . --task "<task>"`
- `brain session run --project . -- <command>`
- `brain session finish --project .`

## High-Value Files

- `src/app.html`: fonts, theme flash prevention, analytics
- `src/routes/+layout.svelte`: global CSS, theme init, shared shell
- `src/routes/+layout.server.ts`: cookie-driven home banner visibility
- `src/lib/components/Header.svelte`: desktop/mobile nav, banner, header state
- `src/lib/server/planningCenter.ts`: Planning Center integration and event shaping
- `src/routes/api/newsletter/+server.ts`: Mailchimp upsert endpoint
- `src/app.css`: tokens, shared utilities, light/dark theme values

## External Surfaces

- Planning Center Registrations API powers `/events` and `/events/family-life-weekend`
- Mailchimp powers newsletter subscription
- Church Center and Realm remain part of the public flow
- LiveControl powers `/watch`
- Procare powers Kids Day Out registration
- some ministry pages still POST to legacy WordPress Elementor endpoints

## Repo Conventions

- Svelte 5 runes only; do not reintroduce legacy `$:` or `export let`
- prefer route-local implementation for one-off content pages
- use `src/lib/ui/*` and tokenized utilities for repeated interaction/styling patterns
- keep `src/app.css` and both themes in sync when shared tokens change
- prefer localized assets under `static/images/**`

## Agent Files

- root `AGENTS.md` and root `CLAUDE.md` are the only project overview files for agents
- `.codex/skills/brain/` and `.claude/skills/brain/` are allowed and should contain only the local Brain skill install
- `.openclaw/` should not exist in this repo
- track the portable Brain workspace, including `.brain/context/**`, `.brain/policy.yaml`, and `.brain/state/brain.sqlite3`
- keep session/private Brain artifacts ignored: `.brain/session.json`, `.brain/sessions/`, `.brain/policy.override.yaml`, `.brain/state/history.jsonl`, backups, and sqlite sidecars
