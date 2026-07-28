---
updated: "2026-07-28T20:05:58Z"
---
# Testing And PR Verification

> **Read when:** Planning, implementing, reviewing, or publishing a pull request.

## Principle

Choose verification from the behavior and risk changed by the PR. Do not add tests only to increase test count, and do not treat `check`, `build`, Lighthouse, or a Vercel deployment as interchangeable.

Every AI-authored PR must:

1. Identify the changed routes, shared surfaces, integrations, and user interactions.
2. Select the smallest test set that can fail for the regression being prevented.
3. Run the universal checks plus the relevant focused checks below.
4. Add or update automated regression coverage when a suitable harness exists.
5. State any missing harness or manual-only risk in the PR description.
6. Inspect the Vercel preview and wait for required GitHub checks before recommending merge.

## Universal Checks

Run for every source or configuration change:

```bash
bun run check
bun run build
```

Run commands through `brain session run --project . -- <command>` so closeout records them. Documentation-only changes may skip the application build when they cannot affect runtime or tooling, but the PR must say why.

## Verification Matrix

| Changed surface | Required focused verification |
| --- | --- |
| Route copy or static markup | Open changed route in Vercel preview; check affected links, headings, and mobile/desktop layout. |
| Shared layout, header, footer, tokens, or theme | Check every affected route family, desktop and mobile navigation, keyboard focus, and light/dark themes. Run Lighthouse when an audited route or shared accessibility/performance behavior changes. |
| Forms or interactive UI | Exercise success, validation, error, disabled, keyboard, and revealed states. Automated accessibility scans must run after opening menus, accordions, or dialogs because hidden UI is not covered initially. |
| Responsive images or LCP work | Inspect `currentSrc`, network requests, screenshots, and sharpness at representative viewport/DPR combinations. Lighthouse alone does not validate `object-cover` crop quality or correct candidate selection. |
| Server route or external integration | Test success, invalid input, upstream failure, and missing-configuration behavior without writing to production services. Add focused unit/integration coverage when a test harness exists. |
| Workflow or repository configuration | Parse the configuration locally, push it, inspect the real GitHub Actions run, and verify expected reports/artifacts. |
| Documentation only | Run `git diff --check`; verify commands, paths, and links against current repository state. |

## Current Automated Baseline

`.github/workflows/quality.yml` runs on pull requests and pushes to `main`:

- installs dependencies with the locked Bun dependency graph
- runs `bun run check`
- runs `bun run build`
- audits `/`, `/connect`, and `/about-us` three times with Lighthouse CI
- fails on accessibility and CLS regressions
- warns on performance regressions
- saves Lighthouse HTML/JSON reports for 14 days

The `Lighthouse` check should be required for `main`.

## Known Coverage Gaps

The repository currently has no Vitest or Playwright suite. Lighthouse covers common rendered-page issues, but it does not prove:

- navigation, accordions, forms, and error states work
- dark mode and responsive layouts are visually correct
- keyboard and screen-reader flows are usable
- responsive hero images select the right candidate or remain sharp
- Mailchimp and Planning Center failure paths behave correctly

Until browser and unit-test harnesses are added, AI PRs must call out these gaps and perform focused preview checks. Recommended next test investment: Playwright plus `@axe-core/playwright` for stable route smoke tests, navigation/form state tests, and light/dark mobile screenshots.
