# Design System Governance

> **Read when:** Deciding how to build new UI, introducing reusable styles/components, or reviewing UI consistency.

## Philosophy

This design system is maintained as a product, not a one-time style layer.

- System-first over page-first: reuse shared primitives before inventing local patterns.
- Consistency over novelty: prefer existing spacing, typography, tokens, and interactions.
- Pragmatic evolution: exceptions are allowed when justified and documented.
- Token-driven visuals: colors, radii, shadows, and transitions come from shared tokens/utilities.

## Component Hierarchy and Ownership

Use this order of responsibility when adding UI:

1. **Primitives (`src/lib/ui/*`)**
   - Canonical for reusable building blocks and interaction patterns.
   - Current primitives: `Button.svelte`, `Card.svelte`, `Input.svelte`, `Alert.svelte`.
2. **Section components (`src/lib/components/*`)**
   - Compose primitives into section-level structures and content layouts.
   - Should avoid redefining primitive-level visuals unless there is a strong reason.
3. **Route/page files (`src/routes/**`)**
   - Compose sections and route-specific content.
   - Avoid introducing new visual primitives at route level.

## Component Selection Rules (How/When/What)

Use these defaults:

- If an existing primitive covers at least 80% of the need, use it.
- If usage differs slightly, extend via props/class hooks/utilities before creating a new primitive.
- Create a new primitive only when the pattern is reusable across at least two sections/pages.
- Use local scoped styles only for page/section-specific behavior that is unlikely to repeat.
- Put global reusable visual behavior in `src/app.css` utilities or primitive-owned styles.

## Decision Matrix

Use this matrix when deciding where a new pattern belongs:

| Pattern type | Reuse likelihood | Location |
|---|---|---|
| Tokenized visual + interaction pattern | High | `src/lib/ui/*` primitive (or extend existing primitive) |
| Content-specific composition pattern | Medium/High | `src/lib/components/*` |
| One-off route-specific adjustment | Low | Route/section scoped style with documented rationale |

When uncertain, choose the more reusable layer.

## Styling and Tokens Policy

- Shared tokens and reusable utilities live in `src/app.css`.
- Do not hardcode colors/radii/shadows when an existing token applies.
- Keep interaction behavior consistent (hover lift, arrow motion, focus states, spacing rhythm).
- Use component-scoped CSS for local behavior only; promote repeated behavior to utilities/primitives.

## Evolution Workflow

For any new reusable pattern:

1. **Introduce**
   - Add or extend a primitive with a clear API.
2. **Adopt**
   - Use it in at least one real section/page to validate ergonomics.
3. **Document**
   - Update this guide and related quick references if usage rules changed.
4. **Review**
   - Apply the PR checklist below before merge.

## PR Review Checklist

- Does this reuse an existing primitive before adding new UI structure?
- If new primitive was added, is reuse justification clear?
- Are styles token-driven and utility-consistent?
- Does hover/focus/spacing behavior match established patterns?
- Were relevant docs updated (`design-system-governance.md`, plus references as needed)?

## Design System Decisions Log

Record governance-level changes here to keep evolution traceable.

| Date | Decision | Impact |
|---|---|---|
| 2026-03-06 | Established primitives-first governance and decision matrix. | Canonical guidance for `src/lib/ui/*`, composition rules, and review process. |
