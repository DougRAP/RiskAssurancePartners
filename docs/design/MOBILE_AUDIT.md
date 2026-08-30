# MOBILE_AUDIT — Phase 2 Prototype, All Seven Pages

**Date:** 2026-08-27 · **Method:** code-read audit (no browser) at ~390px (phone) and ~768px (tablet) by three read-only Opus subagents; every finding cites the CSS/markup rule that causes it. Baseline: main @ 5033c79.

**Severity:** **broken** = unusable / overflows / unreadable · **degraded** = works but bad · **cosmetic** = polish.

**This is a project list for owner review. No fix has been written. Approve / edit / strike items; approved fixes then go to maker subagents on branch `mobile-fixes` (main untouched until owner phone-review + approval).**

---

## Status — 2026-08-27 (living punch list per Decision 046)

- **Resolved on main:** S1 (header shrink, all 7 pages — c8d2f90); S2 (`[hidden]` guard sitewide, incl. E4, E5, A2, admin End-session, plus latent finds: newswire stale banner on load, newswire down-state feed, chat log behind after-hours panel — c8d2f90); S7-drawer + S8-drawer rows and full drawer redesign per owner plan (8b65b65). S7's `.sup`/`.chat__log` portions and S8's utility-pill portion remain open.
- **Resolved on main (must-fix pass, merged 2026-08-27):** H1/E1 (GM figure HTML rebuild, shared `.gmf` pattern — a94910f), E2/E7/E8 (sliders full-width + numeric inputs + 44px hit areas), E3 (gate CTA), E6 (gate footer grid), H2 (teaser labels/disclaimer to HTML), R3 (research tokens) — cfbfb02. No *broken* items remain open.
- **All remaining degraded/cosmetic items:** folded into the content pass that next touches each page (Decision 046); no standalone batches.
- **Resolved by the MI refactor merge (2026-08-30, Decision 052, cfbf853):** M1 (no SVG text remains on the page — all chart text is HTML), M2 (masthead right block deleted), M3/M4 (grid holds 2-up to 680; captions removed, 12px floor held). market-intelligence.html has no open page-specific items.
- **Resolved by the research-page pass (2026-08-28, Decision 049):** R1, R2, R4 — index rebuilt as a uniform 2-up cover grid; covers no longer fixed-aspect-with-overflow, eyebrow/foot metadata removed, No. 02 uses a short display title. R3 was already fixed in the must-fix pass. research.html has no open page-specific items.
- **Resolved by the home-page content pass (2026-08-27, Decision 048):** H2 (chart deleted with economics-teaser rebuild), H5/H6 (chain + branch cards deleted), H9/H10 (trust strip rebuilt single-line), H11 (capability blocks deleted), H12 (blurred gate panel deleted), S5-home (scroll-padding added). Home.html has no open audit items except its share of the remaining sitewide S-items (S6 utility bar, S9–S13 popup/footer polish).

---

## Summary

- **14 broken**, ~30 degraded, ~15 cosmetic findings.
- **Two sitewide root causes explain much of the damage:**
  1. **Header overflow on every phone** — non-shrinkable header items sum to ~388px vs 342px available; the page scrolls sideways and the burger is half off-screen, on all 7 pages.
  2. **`hidden` attribute defeated by CSS `display`** — a recurring authoring bug: elements meant to hide (gate form error, gate form after submit, leave-a-message form after send, both admin console panes) stay visible because an author `display:flex/grid` outranks the UA `[hidden]` rule.
- **Three flagship visuals are illegible at 390px** (SVG text scales down with the viewBox): hero GM comparison (~5–7px labels), homepage teaser chart (6px axis/disclaimer), gate-page GM figure (~5–7px labels). Gate-page sliders are also physically unusable (0.22px per step).
- Suggested priority: sitewide items S1–S4 → economics-gate + admin broken items → home broken items → degraded pass → cosmetic type-floor pass.

---

## S. Sitewide (shared chrome — one fix applied to all 7 pages)

| # | Sev | Width | Finding — cause — proposed fix |
|---|-----|-------|-------------------------------|
| S1 | **broken** | ≤436px | Sticky header overflows viewport; burger pushed off-screen; whole page scrolls sideways — `.lockup`/`.hdr__cta`/`.burger` all `flex-shrink:0` (home.html:178, 209, 526; duplicated all pages; worst on admin whose CTA is larger, admin.html:142) — in the ≤680 block add `flex-shrink:1` to `.lockup` (with existing `min-width:0`), all 7 pages |
| S2 | **broken** | all | `hidden` attribute defeated by author `display` — pattern in 4 places: leave-a-message form never hides after send (`.pf{display:grid}` home/programs/gate), gate form error visible on load, gate form persists after submit, admin console panes both render — add `[hidden]{display:none!important}` guard rules per block (itemized under each page) |
| S3 | **broken** | 390 iOS | Burger may not open drawer on iOS Safari — `.burger` is a `<label>` with no `cursor:pointer`/handler (home.html:699, 210); same `.drawer__close` — add `cursor:pointer` to both, all pages |
| S4 | degraded | all | No `overflow-x` containment on html/body anywhere — any one overflowing child becomes full-page sideways scroll — add `html,body{overflow-x:clip}` safety net (not a substitute for S1) |
| S5 | degraded | 390+768 | In-page anchors land under the 64px sticky header — no `scroll-padding-top` (programs.html:52 has a wrong 140px value) — `html{scroll-padding-top:72px}` all pages |
| S6 | degraded | 390 | Utility bar collapses to a near-empty 32px strip (only Dealer Login survives; home.html:516) — hide whole `.utility` at ≤680 (drawer carries all five links) **or** keep Customer Support visible — *owner call* |
| S7 | degraded | 390 | Drawer doesn't lock/contain background scroll (CSS-only drawer; `lock()` wired only to popup, home.html:1529) — add `overscroll-behavior:contain` to `.drawer`, `.sup`, `.chat__log` |
| S8 | degraded | 390 | Tap targets under 44px across chrome: Dealer Login pill 29px (home.html:517), drawer util links ~21px (home.html:227), drawer sub links 41.6px (home.html:224) — padding bumps |
| S9 | degraded | 390 | Support/chat panels vs iOS viewport: `.chat` fixed to layout viewport so input can sit behind keyboard (home.html:602/616); `.sup__panel` `100vh` phantom scroll (home.html:628); body-lock unreliable on iOS (home.html:1529) — switch to `100dvh` + fixed-body lock |
| S10 | degraded | 390 | Modal close controls under 44px: `.sup__x` 38px, `.chat__x` 34px, `.sup__back` ~19px (home.html:572, 608, 591) — 44px minimum |
| S11 | degraded | 390 | Support-sheet close X scrolls out of reach on pre-chat form (non-sticky `.sup__head`, home.html:570) — make head sticky at ≤560 |
| S12 | degraded | 390 | Footer tagline 9px tracked uppercase wrapping twice (`.lockup__tag`, home.html:185) — 11px / less tracking at ≤680, or hide on phone |
| S13 | degraded | 768 | Footer sitemap links 36px tap targets; 3-column grid still live at 768 (home.html:452, 481) — raise accordion swap to ≤860 or pad links |
| S14 | cosmetic | touch ≥1024 | Nav dropdowns hover-only; iPad Pro landscape first tap navigates instead of opening panel (home.html:204) — accept 1024 cutoff or add focus/button fallback — *owner call* |
| S15 | cosmetic | 390 | Footer accordion links 40px (home.html:554) — pad to 44px |

---

## 1. home.html

| # | Sev | Width | Finding — cause — proposed fix |
|---|-----|-------|-------------------------------|
| H1 | **broken** | 390 | Hero GM comparison SVG labels render 5.3–6.9px (viewBox 520×350 scaled to 276px container; home.html:762–782, padding :235) — only the $480/$180 numerals survive — at ≤680 replace with an HTML/flex version, or re-author a stacked phone viewBox with font-sizes ≥18 units |
| H2 | **broken** | 390 | Economics-teaser chart axis labels + "SHAPE ONLY — NO SCALE SHOWN" disclaimer render at 6.0px (viewBox 460×220 → 276px; home.html:1105–1113) — the required disclaimer is invisible — lift month labels + disclaimer out of the SVG into HTML captions; reduce `.panel` padding at ≤680 |
| H3 | degraded | 390 | Hero eyebrow becomes three lines of 15px tracked uppercase (~72px preamble; clamp floor home.html:98 + forced `<br>` :743) — 13px at ≤680 and/or drop the second clause on phone |
| H4 | degraded | 390 | ~256px consumed before the H1 (utility 32 + header 64 + section padding 64 + eyebrow 72); mobile first-section padding *larger* than desktop (`.sec` override beats `.sec--first`, home.html:500 vs :74) — re-assert `.sec--first{padding-top:var(--s-5)}` in ≤860 block |
| H5 | degraded | 390 | Branch cards (Multi-Year vs FurnitureRx) stay side-by-side → 133px text measure, ~15 chars/line, 10-line ribbons (`.branch` 1fr 1fr re-asserted at ≤860, no ≤680 rule; home.html:351, 504) — `.branch{grid-template-columns:1fr}` at ≤680 |
| H6 | degraded | 768 | Decision chain wraps with a dangling "→" (five nodes ≈752px vs 720px; column stack only ≤680, home.html:344, 542) — raise column rule to ≤860 |
| H7 | degraded | 390 | Cost-bar legend — the figure's only reading at phone width — is 11px tracked uppercase wrapping to 2 lines (`.rev__seg{font-size:0}` from ≤1000 strips in-bar %, home.html:492; `.rev__item` :313) — `.rev__item{font-size:13px;letter-spacing:0;text-transform:none}` at ≤680 |
| H8 | degraded | 390 | Cost-bar smallest segments unreadable: 4.5% segment = 14.9px wide, brass 8.5% = 28px (home.html:304, 537) — rotate bar vertical at ≤680 or pair legend rows with mini-bars — *owner call on treatment* |
| H9 | degraded | 390 | Trust strip kickers 10px wrapping in 159px columns (home.html:268, 527) — 11px / less tracking |
| H10 | cosmetic | 768 | Trust strip ragged 3+2 grid with orphaned second row (home.html:479–480) — 2×… reorder or `repeat(2,1fr)` at ≤1024 |
| H11 | cosmetic | 390 | Sub-13px type pass: `.rev__cap` 11px (:291), `.rev__cite` 11px (:323), `.meta` 11px (:110), `.orient__k` 10px (:254), `.dir__k` 10px (:399), `.why__k` hierarchy inversion (:409), `.qlink` ~24px tap (:257) — one ≤680 type-floor pass to 12–13px |
| H12 | cosmetic | 390 | Blurred gate panel ~460px tall for one lock chip (six stacked fields, home.html:545, 370) — render 2 fields or cap height at ≤680 |

---

## 2. programs.html

| # | Sev | Width | Finding — cause — proposed fix |
|---|-----|-------|-------------------------------|
| P1 | degraded | 390 | 60-month waterfall splits five milestones 3+2 with a hole; bars restart against a fresh baseline in row 2, killing the growth curve (`.mile` repeat(3,1fr) at ≤680, programs.html:396; comment says six milestones, five exist :716–737) — `repeat(5,1fr)` with 11px values, or single-column month/value list at ≤680 |
| P2 | degraded | 390 | Milestone values break mid-number once user raises inputs (84px columns; `$29,280,000` splits; programs.html:310, 398) — wider columns + `white-space:nowrap` with a font-size step |
| P3 | degraded | 390 | Calculator gutters eat 29% of viewport (`.calc` 32px padding never reduces, programs.html:274) — `var(--s-4)` at ≤680 |
| P4 | degraded | 390 | "Standard" jump link fully off-screen with no scroll cue (`.jump__inner` needs ~431px vs 342, scrolls but no affordance; programs.html:221) — reduce gap + right-edge fade at ≤680 |
| P5 | cosmetic | 390 | `.calc__fx` label/value pairs wrap raggedly (programs.html:299) — stack column at ≤680 |
| P6 | cosmetic | 390 | Calculator CTA stays ~180px while every other CTA goes full-width (programs.html:312 vs :399) — add `.calc__cta` to the full-width selector |
| P7 | cosmetic | 390+768 | Six sub-13px mono strings in calc blocks (programs.html:278, 300, 309, 311, 287, 243) — 12px floor at ≤680 |
| P8 | cosmetic | 390 | Coverage tables have no overflow-x wrapper; currently fit (205px min-content) but one long real coverage name from breaking (programs.html:261, 663) — wrap in `overflow-x:auto` before owner's coverage lists land |

*(Verified fine: calc inputs 17px — no iOS zoom; input/output grids, program grids, kits grid, contact grid all collapse correctly.)*

---

## 3. economics-gate.html (Profit Calculator)

| # | Sev | Width | Finding — cause — proposed fix |
|---|-----|-------|-------------------------------|
| E1 | **broken** | 390 | GM figure renders at ~53% — all labels 5.3–6.9px ("SUBSCRIPTION"/"MULTI-YEAR", formulas, in-bar captions; viewBox 520×350 → 276px; economics-gate.html:589–611, padding :234) — stacked phone viewBox at ≤640 or HTML version (align with H1 treatment) |
| E2 | **broken** | 390 | Both ticket sliders unsettable — 130px track for range 1–500 ≈ 0.22px/step (`.tick` stays 1fr 1fr, economics-gate.html:250, 354; inputs :626, :632) — `.tick{grid-template-columns:1fr}` at ≤640 |
| E3 | **broken** | ≤742px | Primary CTA collapses to ~170px 4-line button ("Request access…" shrink-to-fit against `left:50%`; economics-gate.html:280) — replace centering with `left:16px;right:16px;translateY` |
| E4 | **broken** | all | Empty error line + red ⚠ visible on page load (`.err{display:flex}` defeats `hidden`; economics-gate.html:297 vs :730) — `.err[hidden]{display:none}` *(S2 pattern)* |
| E5 | **broken** | all | Request form never disappears after submit; confirmation appears below a still-live form (`.form{display:grid}` defeats `hidden`; economics-gate.html:284 vs :1406) — `.form[hidden]{display:none}` *(S2 pattern)* |
| E6 | **broken** | 390 | Footer contact details force 3 columns → page-wide horizontal scroll (~454px min-content vs 342; `.contact__det` 3-col with **no** mobile override, economics-gate.html:153 — home/programs stack correctly) — single column in ≤640 block |
| E7 | degraded | 390 | Sliders' touch target ~18px tall (no height on `.rng`, economics-gate.html:253) — 44px hit area |
| E8 | degraded | 390 | Slider labels 11px wrapping in 130px columns (economics-gate.html:251) — fixed by E2 + 13px at ≤640 |
| E9 | degraded | 390 | ~290px of blurred placeholder to scroll before the access CTA appears (stacked gate fields; economics-gate.html:351, 280) — cap blur panel height and pin CTA lower at ≤640 |
| E10 | degraded | 390 | Opening the form scrolls its heading under the sticky header (`scrollIntoView` + no scroll-padding; economics-gate.html:1349) — covered by S5 |
| E11 | degraded | 768 | Sections 50% taller than rest of site (96px padding only drops at ≤640; economics-gate.html:222, 349) — align to sitewide ≤860 pattern |
| E12 | degraded | 390 | Authorized-view chart shells (?state=d) scale to ~38%, axis text ~4.2px (viewBox 900×260; economics-gate.html:866, 332) — low priority (behind gate); overflow-x wrapper with min-width |
| E13 | cosmetic | 641–680 | Utility bar wraps to two rows in a 40px band (secondary links hidden at ≤640 vs home's ≤680; economics-gate.html:359) — match 680 |
| E14 | cosmetic | all | Missing two global resets home/programs carry: `-webkit-text-size-adjust:100%`, `img,svg{max-width:100%}` — copy in |

*(Verified safe: the request form's hidden-on-load mechanism holds at every width — no CSS `display` rule targets `#state-b`/`#state-d`/`#request-done`. The E4/E5 bugs are separate elements.)*

---

## 4. newswire.html

| # | Sev | Width | Finding — cause — proposed fix |
|---|-----|-------|-------------------------------|
| N1 | degraded | 768 | Category rail renders as full-width 15-row list above the feed — collapse trigger only ≤680 while layout stacks at ≤860 (newswire.html:341 vs 239/358) — move filter-button collapse into ≤860 block |
| N2 | degraded | 390 | Tapping a category leaves the filter list open; results pushed a screen down (`setFilter` never closes rail; newswire.html:816–820 vs 899) — close rail inside `setFilter` |
| N3 | degraded | 390 | Archive date input 13px → iOS zoom-on-focus (newswire.html:236) — 16px |
| N4 | degraded | 390+768 | Masthead right block (Live pill + updated stamp) wraps left-placed but right-aligned (~250px orphan; newswire.html:210, 213) — stack column, left-align at ≤680 |
| N5 | cosmetic | 390 | Category filter rows ~39px tap targets (newswire.html:227) — pad to 44px |
| N6 | cosmetic | 390 | Category chips 10px tracked mono (newswire.html:254) — 11–12px |
| N7 | cosmetic | 390 | Prototype state bar wraps to ~76px two-row block (newswire.html:279) — hide `.demo` at ≤680 *(check: prototype-must-match-production rule may want this gone anyway — owner call)* |

---

## 5. market-intelligence.html

| # | Sev | Width | Finding — cause — proposed fix |
|---|-----|-------|-------------------------------|
| M1 | degraded | 390 | All four chart SVGs illegible — 0.67× scale puts axis labels ~6.7px, annotations ~7.4px (viewBox 460×160 in 308px box; market-intelligence.html:560–623, 239) — mobile viewBox or bump SVG font-sizes ≥15 at ≤680; same trap will hit real Phase 9 series |
| M2 | degraded | 390+768 | Masthead right block (carries the "RAP Research →" CTA) — same wrap/misalignment as N4 (market-intelligence.html:215, 218) — same fix |
| M3 | cosmetic | 768 | Charts blow up to ~686px wide with oversized type (single column from ≤860; market-intelligence.html:309) — hold 2-up to ~700px |
| M4 | cosmetic | 390 | Figure captions 10px / source lines 11px (market-intelligence.html:243, 247) — 11/12px |

---

## 6. research.html

| # | Sev | Width | Finding — cause — proposed fix |
|---|-----|-------|-------------------------------|
| R1 | degraded | 390+768 | No. 01 cover overflows its fixed-aspect box; footer spills past the brass hairline (needs ~360px in a 346px `aspect-ratio:3/4` box; research.html:220–232, 314) — smaller title/padding at ≤680 or `min-height` instead of aspect-ratio |
| R2 | degraded | 390 | Cover metadata unreadable: 10px eyebrow, 9px footer at 65% opacity on ink (research.html:226, 229) — 11px, drop tracking |
| R3 | degraded | all | **Chrome deviation:** `--rap-up/--rap-down/--rap-flat` tokens missing from `:root` — support popup "Open" chip loses green, form error loses red (research.html:29–53 vs :364, :386; all other pages declare them) — add three tokens |
| R4 | degraded | 390 | No. 02 title runs 8–9 lines (22px clamp floor × 128-char academic title; research.html:246, 606) — 18px floor at ≤680 or short display title |

---

## 7. admin.html (internal tool — judged leniently, still must work on a phone)

| # | Sev | Width | Finding — cause — proposed fix |
|---|-----|-------|-------------------------------|
| A1 | **broken** | 390 | Chat transcript pane collapses to **zero height** — `flex:1 1 0%` absorbs all shrinkage while pin header + form + purge footer eat the budget (admin.html:244, 235–260, 272) — `min-height:200px` on log; collapse pin to name-only; hide footer at ≤680 |
| A2 | **broken** | all | Both console panes render simultaneously — `hidden` defeated by inline `display:flex` and `.empty{display:grid}` (admin.html:454, 261); End-session also fails to hide reply form (:250) — switch JS to an `.is-hidden{display:none!important}` class *(S2 pattern)* |
| A3 | degraded | 390 | Reply field 15px → iOS zoom-on-focus on the tool's primary input (admin.html:253) — 16px |
| A4 | degraded | 390 | Console controls 26–30px on touch incl. destructive End-session (admin.html:88, 198, 202) — 44px at ≤860 |
| A5 | degraded | short viewports | Login card top clipped and unscrollable (centered-overflow trap; admin.html:166) — `align-items:start` + margin-auto card |
| A6 | cosmetic | 390 | Console bar ~80px from 24px row-gap wrap (admin.html:190) — small row-gap at ≤680 |
| A7 | cosmetic | 390 | Utility bar one glyph from wrapping (positional hiding instead of home's `.utility__secondary` class; admin.html:278) — adopt shared class |
| A8 | cosmetic | 390 | Drawer omits utility links + Profit Calculator CTA that public pages carry (admin.html:356–378) — likely intentional for internal tool — *owner confirm* |

---

## Owner calls needed (beyond approve/strike per line)

1. **S6** — utility bar at phone: hide entirely, or keep Customer Support visible?
2. **S14** — accept 1024px as the touch cutoff for hover dropdowns (iPad Pro landscape edge case)?
3. **H8** — cost-bar mobile treatment: vertical bar, or legend-with-mini-bars?
4. **H1/E1** — flagship GM figure at phone: rebuild as HTML (recommended, matches `.rev` pattern) or re-authored stacked SVG?
5. **N7** — newswire prototype state bar: fix its wrap, or remove it entirely (prototype-matches-production rule)?
6. **A8** — admin drawer stays minimal (no public CTA/links)?
