# Overview

<!-- brain:begin context-overview -->
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
<!-- brain:end context-overview -->

## Local Notes

### Repo Summary

- Public church website for First Baptist Church Wimberley built in SvelteKit.
- Primary user journeys are visitor onboarding, ministry discovery, livestream viewing, event discovery/registration, and newsletter signup.
- The site uses branded first-party pages to add context before linking people out to Church Center, Realm, Procare, LiveControl, or legacy WordPress destinations.
- Data-driven behavior is intentionally narrow: theme state, the dismissible home-page banner, the newsletter API route, and Planning Center-backed events.

### High-Value Files

- `src/app.html`
- `src/routes/+layout.svelte`
- `src/routes/+layout.server.ts`
- `src/lib/components/Header.svelte`
- `src/lib/server/planningCenter.ts`
- `src/routes/api/newsletter/+server.ts`
- `src/routes/events/+page.server.ts`
- `src/routes/events/family-life-weekend/+page.server.ts`

### Route Families

- Shared-section home page: `/`
- Visitor and next-step content pages: `/about-us`, `/connect`, `/watch`, `/chairqr`
- Event pages: `/events`, `/events/family-life-weekend`
- Ministry pages: `/ministries` and child routes
- Serve pages: `/serve-the-church`, `/serve-the-community`

### Important External Dependencies

- Mailchimp for newsletter signup
- Planning Center Registrations API for event data
- Church Center and Realm for downstream actions
- LiveControl for livestream embedding
- Procare and WordPress Elementor endpoints for a couple of legacy ministry flows

### Local-Only Artifacts

- `.brain/state/brain.sqlite3` is part of the portable Brain workspace and should be tracked.
- Session/private artifacts such as `.brain/session.json`, `.brain/sessions/`, `.brain/policy.override.yaml`, `.brain/state/history.jsonl`, backups, and sqlite sidecars can remain local.
- `.codex/skills/brain/` and `.claude/skills/brain/` are the only expected local agent directories.
- `.openclaw/` should not exist.
