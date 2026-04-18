# Memory Policy

<!-- brain:begin context-memory-policy -->
Use this file to decide what is worth keeping in project memory.

## Capture Required

- Non-obvious implementation decisions.
- Bugs, regressions, and the fix or mitigation.
- Config, schema, deployment, or interface changes.
- Risks, follow-ups, and unresolved tradeoffs.

## Capture Optional

- Small implementation details that are likely to matter later.
- Helpful command sequences worth repeating.

## Do Not Capture

- Trivial edits with no future value.
- Temporary command noise already obvious from code or tests.
- Duplicate notes when an existing note can be updated.
<!-- brain:end context-memory-policy -->

## Local Notes

### Project-Specific Memory Rules

- Capture changes to external service assumptions:
- Mailchimp env var names, tags, or endpoint behavior
- Planning Center event IDs, category logic, fallback behavior, or credential expectations
- LiveControl, Procare, Realm, Church Center, or WordPress form destinations that are part of public flows
- Capture navigation structure changes, especially when desktop and mobile nav diverge or banner behavior changes.
- Capture design-token or theming conventions that affect multiple pages.
- Capture route ownership changes when a page moves from shared-component composition to route-local implementation or vice versa.
- Capture image/localization workflow decisions that affect how assets are stored under `static/images/**`.
- Capture Brain workspace policy decisions such as which `.brain` artifacts are shared in git versus kept local.
- Do not capture one-off copy tweaks unless they imply a new content source of truth or a recurring workflow rule.
