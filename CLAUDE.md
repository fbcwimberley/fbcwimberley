# CLAUDE

## Project Summary

`fbcwimberley` is the public website for First Baptist Church Wimberley. It is a SvelteKit 2 + Svelte 5 + TypeScript app with shared homepage sections, route-local ministry/content pages, a Mailchimp newsletter endpoint, and Planning Center-backed event pages.

Primary flows:

- visitor onboarding through `/about-us`, `/connect`, and `/chairqr`
- livestream viewing at `/watch`
- ministry discovery through `/ministries/**`
- event browsing and registration through `/events` and `/events/family-life-weekend`
- newsletter signup through `/api/newsletter`

## Brain Workflow

This repo uses Brain for shared project context and durable repo memory.

Before substantial work:

1. read `AGENTS.md`
2. read `README.md`
3. read the relevant guides in `docs/`
4. read `.brain/policy.yaml`
5. read the relevant `.brain/context/*.md` files
6. use `brain search --project . "fbcwimberley <task>"`

Useful commands:

```bash
brain doctor --project .
brain find --project . fbcwimberley
brain search --project . "fbcwimberley <task>"
brain session start --project . --task "<task>"
brain session run --project . -- <command>
brain session finish --project .
```

## High-Value Files

- `src/app.html`
- `src/app.css`
- `src/routes/+layout.svelte`
- `src/routes/+layout.server.ts`
- `src/lib/components/Header.svelte`
- `src/lib/server/planningCenter.ts`
- `src/routes/api/newsletter/+server.ts`

## External Surfaces

- Planning Center Registrations API
- Mailchimp
- Church Center
- Realm
- LiveControl
- Procare
- legacy WordPress Elementor endpoints on some ministry pages

## Repo Rules

- use Svelte 5 runes only
- keep one-off content pages route-local unless reuse is real
- prefer shared primitives in `src/lib/ui/*` for repeated interaction/styling patterns
- keep `src/app.css` light and dark theme values in sync
- keep the portable Brain workspace tracked in git

## Agent Files

- only root `AGENTS.md` and root `CLAUDE.md` should act as project overview files
- `.codex/skills/brain/` and `.claude/skills/brain/` should contain the local Brain skill and nothing else
- `.openclaw/` should not exist
