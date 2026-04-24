# Current State

<!-- brain:begin context-current-state -->
This file is a deterministic snapshot of the repository state at the last refresh.

## Repository

- Project: `fbcwimberley`
- Root: `.`
- Runtime: `node`
- Current branch: `brain`
- Default branch: `main`
- Remote: `git@github.com:fbcwimberley/fbcwimberley.git`
- Go test files: `0`

## Docs

- `README.md`
- `docs/architecture-overview.md`
- `docs/coding-standards.md`
- `docs/common-tasks.md`
- `docs/component-guide.md`
- `docs/design-system-governance.md`
- `docs/project-architecture.md`
- `docs/project-overview.md`
- `docs/project-workflows.md`
- `docs/theming-guide.md`
<!-- brain:end context-current-state -->

## Local Notes

### What Matters In Practice

- The highest-risk shared files are `src/routes/+layout.svelte`, `src/routes/+layout.server.ts`, `src/lib/components/Header.svelte`, `src/app.css`, `src/lib/stores/theme.ts`, `src/lib/server/planningCenter.ts`, and `src/routes/api/newsletter/+server.ts`.
- Most route work is content-heavy and local to a single page. Changes in `src/routes/about-us/+page.svelte`, `src/routes/connect/+page.svelte`, `src/routes/ministries/**`, and `src/routes/chairqr/+page.svelte` usually do not require broader refactors.
- Family Milestones now lives at `src/routes/ministries/family-milestones/+page.svelte`, with shared milestone copy/data in `src/lib/familyMilestones.ts` and reusable preview/icon UI in `src/lib/ui/FamilyMilestonePreview.svelte` and `src/lib/ui/FamilyMilestoneIcon.svelte`; keep those shared files aligned with `src/lib/components/Header.svelte` and the Preschool, Elementary, and Student Ministry pages when milestone content changes.
- `/events` and `/events/family-life-weekend` are linked through the same Planning Center helper and should be reviewed together when event logic changes.
- The current codebase still includes legacy external dependencies: WordPress AJAX forms on women’s ministry and Kids Day Out, LiveControl for the watch page, and Procare for Kids Day Out registration.
- `.brain/state/brain.sqlite3` is the portable Brain index/state database and should be committed with the shared workspace.
- Session/private artifacts under `.brain/` can remain ignored.
- `.codex/skills/brain/` and `.claude/skills/brain/` are the only expected local agent directories.
- `.openclaw/` should not exist.
