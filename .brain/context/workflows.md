# Workflows

<!-- brain:begin context-workflows -->
Use this file for agent operating workflow inside the repo.

## Startup

1. Start or validate a Brain session.
2. Read `README.md` plus the architecture and standards docs before source edits.
3. Read repo-specific Brain context when the task touches structure, conventions, or integrations.
4. Search Brain memory if the task overlaps prior repo documentation or decisions.

## During Work

- Edit route-local pages directly for one-off content work.
- Prefer shared primitives or token utilities for repeated interaction/styling patterns.
- Treat layout, header, theme, newsletter, and Planning Center code as shared surfaces.
- Record meaningful repo knowledge in docs or Brain notes, not in transient chat only.

## Close-Out

- Update docs/Brain notes when routes, integrations, or standards change.
- Run required verification commands through the Brain session.
- Finish the session cleanly.
<!-- brain:end context-workflows -->

## Local Notes

### Project-Specific Workflow

- Start with `README.md`, `docs/architecture-overview.md`, `docs/coding-standards.md`, `docs/design-system-governance.md`, `docs/component-guide.md`, and `docs/theming-guide.md`.
- Use `wiki/gitflow-basics.md` for the expected branch-from-main, push, PR, and Vercel-preview process.
- If the task affects navigation, review both the desktop and mobile nav structures in `Header.svelte`.
- If the task affects events, review both `/events` and `/events/family-life-weekend` plus `planningCenter.ts`.
- If the task affects styling, check both light and dark themes and any Family Life color-token exceptions.
- Track `.brain/state/brain.sqlite3` with the shared Brain workspace, while leaving session/private artifacts ignored.
- Keep `.codex/skills/brain/` and `.claude/skills/brain/` as the only local agent installs.
- Keep `.openclaw/` absent.
