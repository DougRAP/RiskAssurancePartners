# Fabel Master Agent — Session Handoff (v3)

**From:** Master Agent 3 (active session, 2026-08-30)
**To:** Next Fabel Master session (owner will direct you to this update)
**Baseline:** main @ `cfbf853` (production; mi-refactor MERGED 2026-08-30, branch deleted). Tree clean.
**Read first, in order:** AGENT_RULES.md → DECISIONS.md (001–**053**, all on main, authoritative) → docs/design/MI_REFACTOR_SPEC.md (as amended by Decision 052) → this file → MASTER_SPEC.md / LOCKED_WIREFRAME.md when structural work needs them → docs/design/MOBILE_AUDIT.md.

## Where all updates are written (canonical locations)

- **docs/project/DECISIONS.md** — every material owner ruling, numbered, with implementing commits. 049 (research pass), 050 (contact routes form), 051 (form validation standard), 052 (MI refactor, many amendments — merged), 053 (FurnitureRx footer note removed). All 001–053 on main.
- **docs/project/HANDOFF.md** — this file; session state for the next master.
- **docs/project/DEV_NOTES.md** — work orders for later phases: Adrian's back-links; Supabase lead-capture wiring (source tags `calculator` / `infosheet` / `contact`+route / `research-topic`); post-Supabase comment cleanup sweep; MI snapshot-archive persistence; **AI output contract** (analysis must always end with the Furniture Retail Outlook score). All on main.
- **docs/design/MOBILE_AUDIT.md** — living mobile punch list (research items closed; MI items M1–M4 closed at merge; still open sitewide: S6, S14, newswire state bar).
- **Code:** everything on `main`. **Branch rule (unconditional, all page passes):** create the review branch (`<page>-refactor`) BEFORE the first edit; commit and push to it continuously as you work — never batch locally — so the Netlify branch preview always reflects current state for the owner's rolling desktop + phone review; `main` receives nothing until the owner says "merge". (Home/research ran on main in an earlier era; that flow is retired.)

## Current state

**Phase 2, page passes. Done: home (048), research (049), market-intelligence (052 — merged to main `cfbf853`, owner-approved, live on production). Remaining MI scope deliberately deferred: AI interpretation wiring and Supabase snapshot persistence (DEV_NOTES work orders). NEXT: programs.html pass, then newswire; full-site audit agent runs after all pages.**

MI page as built (Decision 052 trail): masthead + full-width how-to paragraph → 1Y/3Y/5Y/10Y global selector ("Select Time Frame") → ink console (8-indicator quick-look list with aligned values + ink-inset AI analysis panel: intro line, empty `#mic-article` with pre-styled serif typography, "No analysis yet.") → collapsed "View Charts" accordion (8 cards, themed pairs, 16:10 shape-only SVG frames, all text HTML) → left-justified ember RAP Research button → footer. Data layer: one `METRICS` array; `snapshotValue()`/`setSnapshot()` archive plumbing with empty `SNAPSHOTS` store — date picker + "Return to current" + howto sentence render ONLY when snapshots exist. Q&A/chat feature cancelled; outlook score UI removed (score lives in future AI text). Page swept clean (dead code, syntax, runtime) at `2b11fc9` — re-sweep after any further polish.

## Work cadence (unchanged, owner-confirmed)

Owner instructions override docs; **all page-pass work on the review branch per the branch rule above (branch before first edit; push continuously)**; one-liners inline by master; Opus subagents for multi-line work (self-contained briefs, no subagent commits); mobile impact stated BEFORE each change; QA greps before every push (classics + mobile + no dev chrome + no dead controls); DECISIONS entry per material ruling; assessment-first on "thoughts?" questions; owner screenshots issues — diagnose the code cause (beware: owner full-page screenshots can show stale deploys and stitching artifacts — verify locally with headless Chrome before believing a rendering bug; pattern established, screenshots in scratchpad workflow).

## Sitewide work done this session (all on main, deployed)

- Contact routes open a shared lead form (050): I'm a dealer / How do I start selling subscription programs / Media or other → Name/Email/Phone/interest, hidden route field.
- Validation standard (051): email `name@domain.tld`, phone 10–15 digits, all lead forms incl. gate + popup pre-chat; leave-a-message now collects Name/Company/Position + email-or-phone; pre-chat focuses first invalid field; "Demo only" line removed.
- Research page rebuilt (049): 3-up cover grid + coming-soon card with propose-a-topic form.
- Dead chrome removed sitewide: `.hdr__claim`, FurnitureRx footer note (053), prototype footer notes.

## Open questions for the owner (carry-forward)

1. **Hours conflict** — footer 8–6 M–F (027) vs popup 9–6 M–Sat (042). Still unanswered (asked 3×).
2. **Programs-page descriptor** — old 025 copy; raise during the programs pass.
3. Gate-page GM kicker sync + slider m=1 default — raise when touching gate.
4. Owner-owed content: chat agent name, lunch-popup copy, Support final URL, Basic|Premium coverage lists, Reinsurance/Standard good-fit bullets, Multi-Year commission stat, tax-advisor qualifier, vector logo, Supabase connection.
5. MI: AI copy/wording owner may still tweak on preview; outlook scoring methodology + disclaimer need approval before any real score ships.

## Technical traps (updated)

1. Never pair `hidden` with author CSS `display` — sitewide guard exists.
2. No text inside scaling SVGs — shapes only; every label HTML (MI charts are the reference implementation).
3. Proportional flex bars need `flex-basis:0`; cost-bar bracket needs gap compensation.
4. CRLF fenced by .gitattributes; expected checkout warnings on docs.
5. Newswire keeps its `#stub` anchors/fabricated feed until its pass; research report buttons still `#stub` (Phase 11).
6. Headless Chrome verification: `--headless=new --screenshot` with `cygpath -w` paths; min-window clamp makes ≤500px phone captures unreliable for header chrome — owner's real phone is the mobile authority.
7. Shared chrome (popup/contact/footer) must stay byte-identical across pages — hash-compare after edits; the popup chat classes (`msg--*`, `m--*`, `hchip--open`, `is-*`) are JS-composed, never "dead".

## Road ahead

programs.html pass → newswire pass → remaining mobile items (S6, S14, newswire state bar) → full-site audit agent → Phase 3 UI_SPEC.md → Phase 4 architecture proposal (Supabase work packages already scoped in DEV_NOTES, including MI AI-interpretation v1 — the press-releasable service) → per IMPLEMENTATION_PLAN.md.
