---
pr: "35"
review_source: github
type: change
updated: "2026-07-28T21:07:24Z"
---
# Address JimmyMcBride mobile hero review

## Outcome

The homepage hero now serves portrait-specific 480px, 768px, and native-resolution 854px crops through a `<picture>` source when the viewport is portrait. Landscape viewports keep the original landscape `srcset`. The preload, rendered image, and delayed carousel warm-up share the same `100vw` source size and select the same orientation-specific candidates.

This avoids scaling a landscape source to the full `object-cover` width before cropping, which preserves more source pixels across the visible portrait hero.

## Verification

- `bun run check`
- `bun run build`
- iPhone 15 emulation at 393x852 and DPR 3 selected the native 854px portrait candidate.
- The delayed warm-up requested only portrait candidates in portrait orientation.
- A landscape 852x393 viewport selected the landscape 960px candidate.
- Mobile Lighthouse remained at 98 performance, 100 accessibility, and zero CLS.
