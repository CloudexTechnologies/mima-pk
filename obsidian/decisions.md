# Decisions

| Date | ID | Decision | Rationale |
|---|---|---|---|
| 2026-05-25 | D-001 | Convert static HTML/CSS site to Next.js 15.5 (TypeScript + Tailwind CSS v3) | Enables component reuse, routing, and future CMS/API integration while keeping build output as a deployable static/SSR app |
| 2026-05-25 | D-002 | Consolidate all original CSS into app/globals.css (~700 lines) rather than rewriting in Tailwind utility classes | Preserves pixel-perfect parity with the original design without risking visual regressions |
| 2026-05-25 | D-003 | Portfolio page filter implemented client-side with URL hash state | Avoids server round-trips for a purely presentational filter; hash keeps shareability |
| 2026-05-25 | D-004 | Clients page category switching implemented client-side with all-view flat grid | Same rationale as portfolio — no backend needed for static category data |
| 2026-05-25 | D-005 | Assets copied verbatim to public/assets/ and public/clients/ | Simplest migration path; avoids any image-path rewrites across pages |
| 2026-05-25 | D-006 | MarqueeRow kept as inline component (not extracted to its own file) | Used in a single location; extraction would add indirection without benefit |
| 2026-05-25 | D-007 | Nav supports transparent and sticky variants via prop | Allows home page to have a transparent hero nav while inner pages use the sticky opaque variant |
