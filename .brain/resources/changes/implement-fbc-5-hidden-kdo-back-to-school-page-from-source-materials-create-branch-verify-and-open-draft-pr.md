---
created: "2026-04-23T17:06:00Z"
title: Implement FBC-5 hidden KDO Back to School page from source materials, create branch, verify, and open draft PR
type: change_note
updated: "2026-04-23T17:06:00Z"
---
# Implement FBC-5 hidden KDO Back to School page from source materials, create branch, verify, and open draft PR

## Outcome

- Added hidden direct-link route at `src/routes/kdo-back-to-school/+page.svelte`.
- Rendered confirmed source copy from Shelby's Google Doc without inventing unfinished downloads or media.
- Marked missing links, video, and graphics in-page so the route can ship as a partial draft while content remains incomplete.
- Updated `docs/project-overview.md` to include the hidden KDO back-to-school route in the route inventory.

## Verification

- `bun run check`
- `bun run build`

## Known Blockers

- Parent Handbook link still pending from Shelby.
- Admission Form link still pending from Shelby.
- Parent Questionnaire link still pending from Shelby.
- Welcome video still pending from Shelby.
- PNG graphics were present in the source email thread but not retrievable into the local workspace through the current connector path.
