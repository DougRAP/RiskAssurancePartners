# Market Intelligence Page Refactor — Approved Specification

**Status:** Owner-approved direction, 2026-08-29 (settled between the owner, ChatGPT drafting, and Master Agent 1 review — four amendments accepted).
**Executor:** Fabel Master Agent 3, delegating implementation to Opus subagents per the working rules.
**Branch:** ALL work on `mi-refactor` — never main. Netlify branch preview (`mi-refactor--riskassurancepartners.netlify.app`) is the owner's review surface; merge to main only on explicit owner approval. No parallel page work anywhere while this runs.

## Strategic intent (context, not build scope)

The page becomes dealer-facing economic intelligence, not a chart collection: **AI interpretation first, supporting evidence below.** A dealer lands, immediately understands whether conditions are becoming more or less favorable, then inspects indicators as desired. Later phases add a fully automated interpretation pipeline (press-release-able) and, separately, live Q&A. **This phase is UI and page architecture only.**

## Page structure (top to bottom)

1. **Existing chrome unchanged** — header/nav/utility/footer/support popup exactly as-is.
2. **RAP Market Intelligence console** — new full-width container directly below the masthead; the visual focal point. Premium business-intelligence character, NOT a chatbot widget. Contains:
   - AI Interpretation area (empty/awaiting state — see prohibitions);
   - **Furniture Retail Outlook** with placeholder score `-- / 100`;
   - concise insight area (empty/awaiting state);
   - **Q&A teaser, explicitly non-interactive:** "Ask RAP Intelligence — coming soon." Do NOT render a functional-looking input; no dead controls anywhere on this page.
3. **Metric grid** — 2 columns desktop, 1 column mobile (2×4 → 1×8 stack). Normal page scroll ONLY: no internal scroll areas, carousels, horizontal scroll, or per-panel scrollbars.

## The 8 metrics, in this exact order (themed pairs per desktop row)

| Row theme | Left | Right |
|---|---|---|
| Furniture demand | Furniture & Home Furnishings Sales | Inflation-Adjusted Furniture Sales |
| Housing | Existing-Home Sales | Housing Starts |
| Consumer | Consumer Sentiment | Real Disposable Personal Income |
| Affordability | 30-Year Mortgage Rate | Furniture CPI |

Theme labels may appear visually only if they improve the layout; the ORDER is mandatory. All eight map to FRED series — **FRED is the committed source family** (simplifies normalization, labeling, automation, and AI wiring); deviate only if a specific series proves unsuitable, and flag it.

## Metric card — one reusable component

Every card: metric title · large current value · small trend/change line · chart area · source · last updated.

- **Data shape** (build to this; do not over-engineer): `{ id, name, currentValue, changeLabel, source, lastUpdated, series }` with per-range series support.
- **Time ranges 1Y / 3Y / 5Y / 10Y, default 5Y — supported internally, controls HIDDEN** until live data exists (Phase 9). No visible dead buttons. No continuous slider ever.
- **Charting constraint (trap #2, mandatory):** SVG may draw shapes only (lines/areas). Every label, value, axis mark, source line, annotation, and any future control is HTML outside the SVG. Reuse existing patterns where sensible.

## Data and provenance rules (claims hygiene)

- **No database. No historical persistence. No invented values. No AI wiring.**
- The four metrics with existing sourced values (Furniture & Home Furnishings Sales, Existing-Home Sales, Housing Starts, Furniture CPI) keep their current values, sources, and updated stamps.
- The four new metrics show an **em-dash value**, their **real source name** (FRED / UMich / BEA / Freddie Mac lineage as appropriate), and subdued status **"awaiting first update."**
- Remove dev-only labels ("HISTORICAL SERIES — PHASE 9", "PLACEHOLDER — NO SERIES PLOTTED"). The page must look near-production while fabricating nothing.

## Visual + mobile

- Existing RAP design language only: current tokens, typography, navy/ember/brass, border and spacing style. Avoid consumer-dashboard/trading-terminal aesthetics, gradients, neon, icon clutter, heavy shadows, oversized cards.
- Mobile: console stacks vertically; cards single-column full-width; charts readable (HTML labels guarantee this); no sideways/nested scrolling; page may run long — acceptable; judge on the phone via branch preview before proposing any grouping/collapse mechanics.

## Later architecture (for orientation only — do not build)

`FRED → scheduled function → normalized structured data → chart rendering → AI interpretation (reads the structured data, never the rendered page)`. AI ships in two releases: **v1** scheduled automated interpretation + outlook + timestamp (the press-releasable service); **v2** live Q&A, gated as its own future decision. Outlook score stays placeholder until the owner approves scoring methodology and disclaimer language.

## Prohibitions (ask the owner first, via Master Agent, before crossing any)

Do not: connect any AI model · implement or imply a real outlook score · invent score methodology · create a database · fake AI output or responses · redesign navigation · touch any other page · change the metric list, order, hierarchy, wording, or interaction model.

## Process requirements for Master Agent 3

- **Delegate all multi-line implementation to Opus subagents** with self-contained briefs (repo path, house rules, this spec, validation standards, "no git commits", report format). Master does briefs, QA, decision logging, and git on the `mi-refactor` branch only.
- All standing rules apply: mobile impact stated before each change; dead-code alerts; pre-deploy QA greps (forbidden strings, dead links, duplicate IDs, fixed px, SVG text, display-vs-hidden); no dev chrome; DECISIONS.md entries for material rulings (continue normal numbering); owner reviews on the branch preview (desktop + phone) before merge.
