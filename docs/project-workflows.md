# Project Workflows

<!-- brain:begin project-doc-workflows -->
Use this file for agent operating workflow inside the repo.

## Startup

1. Start or validate a Brain session for the task.
2. Read `README.md` plus the architecture, standards, component, and theming docs before changing source files.
3. Read the repo-specific Brain docs in `docs/project-*.md` and `.brain/context/*.md`.
4. Search Brain memory when the task touches architecture, conventions, or previous decisions.

## During Work

- Prefer editing route-local pages directly for one-off ministry/content changes.
- Prefer primitives in `src/lib/ui/*` for repeated visual/interaction patterns.
- Treat `Header.svelte`, `app.css`, `theme.ts`, `planningCenter.ts`, and `/api/newsletter` as shared surfaces with broader blast radius.
- Run verification through `brain session run -- <command>` when source behavior changes.

## Close-Out

- Update docs or Brain context when routes, integrations, design conventions, or workflow expectations change.
- Track the portable Brain workspace, including `.brain/context/**`, `.brain/policy.yaml`, and `.brain/state/brain.sqlite3`.
- Keep session/private Brain artifacts ignored: `.brain/session.json`, `.brain/sessions/`, `.brain/policy.override.yaml`, `.brain/state/history.jsonl`, backups, and sqlite sidecars.
- Finish with `brain session finish`.
<!-- brain:end project-doc-workflows -->

## Local Notes

### Startup Read Order

1. `README.md`
2. `docs/architecture-overview.md`
3. `docs/coding-standards.md`
4. `docs/design-system-governance.md`
5. `docs/component-guide.md`
6. `docs/theming-guide.md`
7. `docs/project-overview.md`, `docs/project-architecture.md`, and this file
8. Relevant route files and shared components for the task

### Branching And Review Workflow

- The team workflow in `wiki/gitflow-basics.md` assumes every change starts from the latest remote `main`.
- Branches are task-specific and PRs are reviewed with a Vercel preview before merge.
- If you need to change multiple unrelated concerns, split them into separate branches instead of piling them into one content-heavy PR.

### Editing Workflow By Surface

- Homepage section changes usually belong in `src/lib/components/*`.
- Most About, Connect, Serve, Ministry, Watch, and Chair QR changes belong directly in the route file under `src/routes/**`.
- Navigation changes require checking desktop and mobile nav structures inside `Header.svelte`, plus any supporting links in the footer or index pages.
- Theme or token changes start in `src/app.css` and sometimes require a check in `src/lib/stores/theme.ts`.
- Event display or event categorization changes usually start in `src/lib/server/planningCenter.ts` and must be checked on both `/events` and `/events/family-life-weekend`.

### Content And Asset Workflow

- Prefer local static assets under `static/images/remote` or `static/images/kdo` over hotlinked remote images.
- Use `bun run localize:images` when importing image-heavy content from the legacy site.
- Use `node scripts/convert-images-to-webp-ffmpeg.mjs` when normalizing older assets to WebP.
- When updating copy that is mirrored from Church Center or the legacy WordPress site, verify whether the external destination also needs to be updated to avoid drift.

### Verification Expectations

- Run `bun run check` for any source-file change.
- Run `bun run build` when routing, server integration, environment assumptions, or layout shell behavior changes.
- Re-check both light and dark themes when editing shared layout or style tokens.
- Track the portable Brain workspace, including `.brain/context/**`, `.brain/policy.yaml`, and `.brain/state/brain.sqlite3`.
- Keep session/private Brain artifacts ignored: `.brain/session.json`, `.brain/sessions/`, `.brain/policy.override.yaml`, `.brain/state/history.jsonl`, backups, and sqlite sidecars.
- `.codex/skills/brain/` and `.claude/skills/brain/` are the only expected local agent folders.
- `.openclaw/` should not exist in this repo.
