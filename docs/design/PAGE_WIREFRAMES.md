# Risk Assurance Partners — INTERIOR PAGE WIREFRAMES

**Phase 2 / UI-UX. Status: PROPOSED — owner approves layout before any shell coding.**
**Revision 2 — 2026-08-25.** Rewritten for **DECISION 038**.
Authority: DECISIONS.md through **038**, LOCKED_WIREFRAME v1.1, MASTER_SPEC, AGENT_RULES.
Design system: `docs/design/DESIGN_SYSTEM.md` (rev 4).

## Revision 2 change log

| Ref | Change |
|---|---|
| 038 | **The four-page program template and the `/programs` index are both scrapped.** Replaced by **one Programs page** with four sections. |
| 038 | Homepage "Learn more" links and the Programs dropdown now jump to sections on that single page. |
| 038 | Each section gets a **coverage grid illustration** — coverage types as text, then a Basic \| Premium checkmark chart with an owner-supplied coverage list. |
| 038 | **Mini calculator** in the Subscription and Multi-Year sections; **"good fit for" bullets** in Reinsurance and Standard instead. |
| 038 | **No FAQ. No terms & conditions section.** Both removed everywhere. |
| 038 | Formal non-disparagement phrasing rules dropped — each program stands on its own. |
| 038 | Homepage paths grid: four in a row on desktop, stacked below ~900px. No 2×2 stage. |
| — | Newswire page wireframe carried forward unchanged (§2). |

**Structure was deliberately flattened.** The owner's direction — *"don't further organize, it
is unneeded and unhelpful"* — governs. Revision 1's breadcrumbs, per-page hero panels, jump
rails on every page, cross-link rows, FAQ accordions and terms tables are gone. What remains is
one page, four sections, one illustration pattern, and one of two content blocks per section.

Notation: `│` column edge · `┄` hairline `1px --rap-slate-200` · `▓` ink ground ·
`░` mist ground · `▒` cream ground · blank = paper ground.
Grid: 12 columns, 1240px content, 48px margin. Mobile: single column, 24px margin.

**`[OWNER TO SUPPLY]`** marks content the owner provides. Sample copy is acceptable in the
interim (DECISION 038) and is shown in *italics* where used.

---

# 0. Global chrome

Every page inherits, unchanged from `home.html`:

```
▓ CUSTOMERS │ FILE A CLAIM · MANAGE MY PLAN · CUSTOMER SUPPORT             ▓
▓                                          CONTACT   [ DEALER LOGIN → ]    ▓  ← utility, 38px ink
├─────────────────────────────────────────────────────────────────────────┤
│ ┌──┐ RISK ASSURANCE PARTNERS                                            │
│ │▞▚│   Dealer Economics  Programs ▾  Newswire  Market Intelligence      │
│ └──┘   Research  Why RAP                    [ Profit Calculator → ]     │  ← header, 84px sticky
└─────────────────────────────────────────────────────────────────────────┘
   condensed (scrollY>40): 64px · gains FILE A CLAIM* + [ DEALER LOGIN → ]

   Programs ▾ — all four items now point at sections of ONE page:
     FurnitureRx Subscription  → /programs#subscription
     Multi-Year Protection     → /programs#multi-year
     Reinsurance               → /programs#reinsurance
     Standard Programs         → /programs#standard
```

- Sticky header condenses at 40px; the primary CTA never disappears responsively.
- Footer is the five-group ink footer plus the `#contact` block (**1.800.732.5856**,
  **sales@raptns.com**, **8:00 AM – 6:00 PM, Monday–Friday, EST** — DECISION 027).
- Homepage path cards' `Learn more →` and the footer Programs group point at the same four
  section anchors. One destination per program, everywhere.

---

# 1. PROGRAMS PAGE — `/programs`

One page. Four sections. `#subscription` · `#multi-year` · `#reinsurance` · `#standard`.

## 1.1 Page structure

```
[ utility bar ]
[ sticky header ]

░ PAGE INTRO ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
░ RISK ASSURANCE PARTNERS PROGRAMS                                         ░
░ Four ways to create more value from ╱the same customer.╱                 ░
░                                                                          ░
░ Protection programs for furniture & mattress retail dealers, as well as  ░
░ custom interior designer programs — all home furnishings categories.     ░
░                                    ← DECISION 025 descriptor, verbatim   ░
░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░

┌ SECTION JUMP (sticky under header) ─────────────────────────────────────┐
│  SUBSCRIPTION · MULTI-YEAR · REINSURANCE · STANDARD                     │
└─────────────────────────────────────────────────────────────────────────┘
   Slim, one line, 44px. The page runs long; this is the only nav aid.

 §1  SUBSCRIPTION   #subscription    intro → coverage grid → mini calculator
┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄
 §2  MULTI-YEAR     #multi-year      intro → coverage grid → mini calculator
┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄
 §3  REINSURANCE    #reinsurance     intro → coverage grid → good fit for
┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄
 §4  STANDARD       #standard        intro → coverage grid → good fit for
┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄

▓ CONVERSION ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
▓        Run your numbers, or ╱just ask.╱                                 ▓
▓        [ Profit Calculator → ]      [ Talk to RAP ]                     ▓
▓        1.800.732.5856 · sales@raptns.com · Mon–Fri 8:00–6:00 EST        ▓
▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓

[ footer — five groups + contact block ]
```

Sections alternate paper / mist ground so the four read as distinct blocks without any
per-section chrome. One conversion block for the whole page, at the foot.

## 1.2 Section anatomy — desktop

Two patterns. Sections 1–2 use pattern A, sections 3–4 use pattern B. Everything above the
final block is identical.

### Pattern A — Subscription and Multi-Year

```
┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄
 SUBSCRIPTION                                             ← eyebrow, mono
 FurnitureRx Subscription                                 ← Playfair 40px
 ╱{one-line value phrase}╱                                ← ember italic

 ◄──────────── 7 cols ────────────►   ◄──────── 5 cols ────────►
 Two or three sentences of program     ┌──────────────────────┐
 intro. Owner supplies final copy;     │ Customer pays        │
 sample copy acceptable meanwhile.     │ $19.99 / month       │
                                       │ ┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄ │
 [OWNER TO SUPPLY — final copy]        │ Dealer remits   $0   │
                                       │ ┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄ │
                                       │ Dealer earns    $8   │
                                       │ per successful       │
                                       │ monthly payment      │
                                       └──────────────────────┘
                                        2px ink top rule

 ── COVERAGE GRID ──────────────────────────────────────────────────────────
 WHAT'S COVERED
 Furniture · Adjustable beds · Mattress · Rugs · Outdoor

 ┌───────────────────────────────────────────┬─────────┬─────────┐
 │                                           │  BASIC  │ PREMIUM │
 ├───────────────────────────────────────────┼─────────┼─────────┤
 │ [OWNER TO SUPPLY — coverage item]         │    ✓    │    ✓    │
 │ [OWNER TO SUPPLY — coverage item]         │    ✓    │    ✓    │
 │ [OWNER TO SUPPLY — coverage item]         │    —    │    ✓    │
 │ [OWNER TO SUPPLY — coverage item]         │    —    │    ✓    │
 └───────────────────────────────────────────┴─────────┴─────────┘

 ── MINI CALCULATOR ────────────────────────────────────────────────────────
 ┌───────────────────────────────────────────────────────────────────────┐
 │ ESTIMATE THE OPPORTUNITY                                              │
 │ ┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄ │
 │  {input label}          {input label}                                 │
 │  ┌─────────────┐        ┌─────────────┐                               │
 │  │  [ ─────○─] │        │  [ ──○────] │      ← controls TBD           │
 │  └─────────────┘        └─────────────┘                               │
 │ ┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄ │
 │  {RESULT LABEL}                                                       │
 │  $ 0 0 , 0 0 0            ← Playfair, tabular, single headline figure │
 │                                                                       │
 │  Illustrative only. Not a forecast.                                   │
 │ ┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄ │
 │  Want the full model?  [ Profit Calculator → ]                        │
 │  The RAP Dealer Economics Calculator requires approved access.        │
 └───────────────────────────────────────────────────────────────────────┘
```

### Pattern B — Reinsurance and Standard

Identical down to the coverage grid, then:

```
 ── GOOD FIT FOR ───────────────────────────────────────────────────────────
 ┌───────────────────────────────────────────────────────────────────────┐
 │ THIS IS A GOOD FIT FOR                                                │
 │ ┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄ │
 │ ▌ [OWNER TO SUPPLY — fit point]                                       │
 │ ▌ [OWNER TO SUPPLY — fit point]                                       │
 │ ▌ [OWNER TO SUPPLY — fit point]                                       │
 │ ▌ [OWNER TO SUPPLY — fit point]                                       │
 └───────────────────────────────────────────────────────────────────────┘
   2px --rap-ember left rule per bullet, Inter 17px. Same visual weight as
   the mini calculator block it replaces, so all four sections balance.
```

## 1.3 Mobile (375px)

```
┌─────────────────────────┐   ┌─────────────────────────┐
│▓ FILE A CLAIM  LOGIN → ▓│   │ COVERAGE GRID           │
├─────────────────────────┤   │ WHAT'S COVERED          │
│  RAP    [ Profit C. ] ☰ │   │ Furniture ·             │
├─────────────────────────┤   │ Adjustable beds ·       │
│░ RAP PROGRAMS           │   │ Mattress · Rugs ·       │
│░ Four ways to create    │   │ Outdoor                 │
│░ more value from ╱the   │   │                         │
│░ same customer.╱        │   │ ┌─────────────────────┐ │
│░ {descriptor}           │   │ │        BASIC PREMIUM│ │
├─────────────────────────┤   │ │ [item]   ✓     ✓   │ │
│ ◄ SUBSCRIPTION ·        │   │ │ [item]   ✓     ✓   │ │
│   MULTI-YEAR ·  ►       │   │ │ [item]   —     ✓   │ │
│   scrolls sideways,     │   │ └─────────────────────┘ │
│   sticky under header   │   │  ↑ 3 columns hold at    │
├─────────────────────────┤   │    375px — the coverage │
│ SUBSCRIPTION            │   │    label column wraps,  │
│ FurnitureRx             │   │    the two check cols   │
│ Subscription            │   │    stay fixed at 56px   │
│ ╱{value phrase}╱        │   ├─────────────────────────┤
│                         │   │ MINI CALCULATOR         │
│ Two or three sentences  │   │ ┌─────────────────────┐ │
│ of intro copy.          │   │ │ ESTIMATE THE        │ │
│                         │   │ │ OPPORTUNITY         │ │
│ ┌─────────────────────┐ │   │ │ ┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄ │ │
│ │ Customer pays       │ │   │ │ {label}             │ │
│ │ $19.99 / month      │ │   │ │ [ ─────○─ ]         │ │
│ │ ┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄ │ │   │ │ {label}             │ │
│ │ Dealer remits  $0   │ │   │ │ [ ──○──── ]         │ │
│ │ ┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄ │ │   │ │ ┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄ │ │
│ │ Dealer earns   $8   │ │   │ │ {RESULT LABEL}      │ │
│ └─────────────────────┘ │   │ │ $00,000             │ │
│  ↑ stat panel moves     │   │ │ Illustrative only.  │ │
│    BELOW the intro      │   │ │ ┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄ │ │
│    copy on mobile       │   │ │ [ Profit Calc. → ]  │ │
└─────────────────────────┘   │ └─────────────────────┘ │
                              ├─────────────────────────┤
   Sections 3 & 4 identical   │ (next section…)         │
   but with GOOD FIT FOR      └─────────────────────────┘
   bullets in place of the
   calculator block.          Final: ink conversion block
                              + footer.
```

## 1.4 Coverage grid — component notes

- **Coverage types run as one text line**, not as icons or cards: *Furniture · Adjustable beds ·
  Mattress · Rugs · Outdoor*, Inter 17px with `--rap-slate-300` middots. Owner-specified list.
- **The checkmark chart is a real `<table>`** with `<th scope>` headers, not a styled div grid —
  it is tabular data and needs to read correctly to screen readers and in print.
- Column headers `BASIC` / `PREMIUM` in Plex Mono 11px `.10em` on a 2px `--rap-ink` top rule.
  Check columns fixed at 56px; the coverage-item column takes the remainder.
- **Marks:** `✓` in `--rap-ember-700` for included, `—` in `--rap-slate-300` for not included.
  Both carry an `aria-label` ("included" / "not included") — a bare glyph is not accessible.
  Never leave a cell empty; an empty cell reads as missing data rather than exclusion.
- Row separators 1px `--rap-slate-200`. No zebra striping, no fills.
- **The left-column coverage list is `[OWNER TO SUPPLY]` on all four sections.** The wireframe
  shows four sample rows; the real count is whatever the owner provides.
- Below 420px the table keeps all three columns — the label column wraps to two lines rather
  than the table scrolling sideways. If the owner's coverage items run long, the fallback is an
  `overflow-x:auto` container on the table only, never on the page body.
- **Open:** whether Basic/Premium applies to all four programs or only the two plan types —
  see §3, Q-2.

## 1.5 Mini calculator — component notes

Sections 1 and 2 only (DECISION 038). This is a **public teaser**, not the model.

- **Inputs and formulas are TBD.** The wireframe fixes the *shape* only: two controls, one
  headline result, one disclaimer, one route to the gated tool. Control type (slider, stepper,
  select) is deliberately unspecified until the inputs are known.
- **Gating discipline (DECISION 013 / AGENT_RULES §7).** The mini calculator may use only the
  public facts already on the site. It must not expose cancellation assumptions, retention
  curves, forecast formulas, reinsurance economics, or any proprietary model logic. If a
  proposed input would reveal a model assumption, it belongs behind the gate instead.
- **One headline result**, Playfair with tabular figures, no secondary metrics, no chart. A
  second number invites comparison and starts rebuilding the gated model in public.
- `Illustrative only. Not a forecast.` is required, directly under the result, not in a
  footnote.
- The block always ends with `[ Profit Calculator → ]` and the line *"The RAP Dealer Economics
  Calculator requires approved access."* The teaser's job is to make the gate worth passing.
- Result recalculates live on input change, no submit button; `aria-live="polite"` on the
  result so the value is announced.

## 1.6 Per-section content notes

Copy is owner-supplied (DECISION 038). Sample copy is acceptable meanwhile. Approved facts
available to each section:

### §1 Subscription — `#subscription`

- Stat panel: customer pays **$19.99/month** · dealer remits **$0** · dealer earns **$8 per
  successful monthly payment**.
- Available intro material: cancel/start/restart anytime, customer in control; same coverage as
  multi-year programs; ~**70%** of customers decline Multi-Year (DECISION 020, attribute as
  *RAP program experience*).
- Mini calculator: the **$8 × 60 payments = $480** illustration (DECISION 036) is the natural
  basis, but the input set is TBD.
- Care Kits and Repair Safety Net may appear here, ranked clearly below the subscription
  (DECISION 019) — never on the homepage. **Optional; owner's call.**

### §2 Multi-Year — `#multi-year`

- Stat panel: customer pays **~$300 one time (average)** · cancellation returns a **prorated
  share** (DECISION 029) · income arrives **at the original sale**.
- Mini calculator: the **$250 retail × 72% = $180 GM** illustration (DECISION 036) is the
  natural basis.
- **Dealer remit and dealer commission for Multi-Year are not approved facts** — those stat
  rows are omitted rather than guessed. See §3, Q-1.

### §3 Reinsurance — `#reinsurance`

- Stat panel: dealer **shares in the underwriting profits** · **tax benefits** · income
  **accrues over time**.
- Good-fit bullets: `[OWNER TO SUPPLY]`. No eligibility threshold, minimum volume, or dealer
  size may be stated — none is approved.
- The tax-benefits mention still needs a qualifier decision (§3, Q-3).
- Reinsurance is an underwriting type, so its coverage grid may be identical to the plan-type
  grids or may not apply — see §3, Q-2.

### §4 Standard — `#standard`

- Stat panel: dealer earns **protection income** · **RAP retains the underwriting** · income
  **at the sale**.
- Good-fit bullets: `[OWNER TO SUPPLY]`.
- Shortest section of the four. Not padded to match — parity is in treatment, not word count.

---

# 2. NEWSWIRE PAGE — `/newswire`

**Unchanged from revision 1.** Built to hold 20–30+ items per view and to keep working when the
feed is stale or broken. The homepage section remains the 3–5 item preview that links here.

## 2.1 Desktop

```
[ utility ] [ header ]

 MASTHEAD
┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄
 FURNITURE RETAIL NEWSWIRE                                        ● LIVE
 What happened.                                  LAST UPDATED 09:14 AM ET
 ▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔ 2px ink rule ▔▔▔

 ◄─── 3 cols ───►  ◄──────────────── 9 cols ────────────────►

 FILTER RAIL       FEED
 (sticky)
 ┌──────────────┐   ── TUE 25 AUG 2026 ─────────────────────────────────────
 │ ALL      (34)│   12:38 PM  [HOUSING]
 │ ┄┄┄┄┄┄┄┄┄┄┄┄ │            Headline, Inter 600 22px, up to two lines
 │ Furniture    │            One-sentence synopsis, ~180 characters max,
 │  Retail   (7)│            never a republished article.
 │ Manufacturers│            PUBLICATION NAME · SOURCE →
 │           (4)│   ┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄
 │ Bedding   (2)│   11:17 AM  [FURNITURE RETAIL]
 │ Housing   (5)│            Headline…
 │ Economy   (3)│            Synopsis…
 │ Consumer  (2)│            PUBLICATION NAME · SOURCE →
 │ Consumer     │   ┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄
 │  Credit   (1)│   10:04 AM  [TRADE / TARIFFS]
 │ Trade /      │            …
 │  Tariffs  (3)│
 │ Freight   (1)│   ── MON 24 AUG 2026 ─────────────────────────────────────
 │ M&A       (2)│   04:51 PM  [M&A]
 │ Bankruptcies │            …
 │           (0)│
 │ Store        │            …20–30 items before the fold action
 │  Openings /  │
 │  Closings (2)│   ┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄
 │ Protection / │              [ Load 25 more ]      Showing 30 of 214
 │  Warranty (1)│   ┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄
 │ Retail       │
 │  Technology  │   CROSS-LINKS (foot of feed, not a sidebar)
 │           (1)│   ┌──────────────────────┐ ┌──────────────────────┐
 │ ┄┄┄┄┄┄┄┄┄┄┄┄ │   │ MARKET INTELLIGENCE  │ │ RAP RESEARCH         │
 │ ARCHIVE      │   │ What is changing?    │ │ What does it mean?   │
 │  [date pick] │   │ View the data →      │ │ Read the research →  │
 └──────────────┘   └──────────────────────┘ └──────────────────────┘

[ footer ]
```

## 2.2 Filter and state behaviour

```
ACTIVE FILTER — chip appears above the feed, feed heading updates
┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄
 Filtered: [ HOUSING ×]                              5 items · Clear all
┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄

EMPTY CATEGORY
┌─────────────────────────────────────────────────────────────────────────┐
│ No items in Bankruptcies in the last 30 days.                           │
│ [ Clear filter ]   [ View all news ]                                    │
└─────────────────────────────────────────────────────────────────────────┘
 Categories with (0) stay visible and clickable — a category that vanishes
 reads as a site bug, and an empty wire category is information.

STALE FEED (no successful ingest within the expected cadence)
┌─────────────────────────────────────────────────────────────────────────┐
│ ⚠ LAST UPDATED 25 AUG 09:14 ET · UPDATES DELAYED                       │
│ Items below are the most recent we have.                                │
└─────────────────────────────────────────────────────────────────────────┘
 · LIVE dot switches from --rap-live to --rap-slate-300 and stops pulsing.
 · Feed still renders. Cached items are never hidden because of a bad ingest.

FEED UNAVAILABLE (no cached items at all — should be near-impossible)
┌─────────────────────────────────────────────────────────────────────────┐
│ The newswire is temporarily unavailable.                                │
│ [ Market Intelligence → ]  [ RAP Research → ]  [ Contact RAP → ]        │
└─────────────────────────────────────────────────────────────────────────┘
 Never a blank page. Always an exit.
```

## 2.3 Mobile

```
┌─────────────────────────┐   ┌─────────────────────────┐
│▓ FILE A CLAIM  LOGIN → ▓│   │ ── TUE 25 AUG 2026 ──   │
├─────────────────────────┤   │ 12:38 PM                │
│  RAP    [ Profit C. ] ☰ │   │ [HOUSING]               │
├─────────────────────────┤   │ Headline over two or    │
│ FURNITURE RETAIL        │   │ three lines             │
│ NEWSWIRE       ● LIVE   │   │ Synopsis, two lines     │
│ What happened.          │   │ PUBLICATION · SOURCE →  │
│ UPDATED 09:14 AM ET     │   │ ┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄ │
│ ▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔ │   │ 11:17 AM                │
├─────────────────────────┤   │ [FURNITURE RETAIL]      │
│ ┌─────────────────────┐ │   │ …                       │
│ │ ▼ FILTER      ALL   │ │   │                         │
│ └─────────────────────┘ │   │ ┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄ │
│  ↑ collapsed by default;│   │ [ Load 25 more ]        │
│    opens a full-screen  │   │ Showing 30 of 214       │
│    sheet with the 14    │   ├─────────────────────────┤
│    categories + counts  │   │ MARKET INTELLIGENCE     │
│    and a Clear all      │   │ View the data →         │
│                         │   │ ┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄ │
│ Filtered: [HOUSING ×]   │   │ RAP RESEARCH            │
│ 5 items · Clear all     │   │ Read the research →     │
├─────────────────────────┤   ├─────────────────────────┤
│ (feed continues →)      │   │▓ FOOTER                 │
└─────────────────────────┘   └─────────────────────────┘

 Timestamp moves ABOVE the headline; the fixed 88px time column would eat
 a quarter of a 375px line. Category chip sits under the timestamp.
```

## 2.4 Annotations

- **Wire-service character throughout** (DESIGN_SYSTEM §5.1): Plex Mono timestamps, outlined
  category chips, **Inter** headlines — deliberately not the editorial serif, so aggregated
  third-party news can never be mistaken for RAP's own voice. Hairline rows, no cards, no
  images, no thumbnails.
- **Date dividers** group the feed. At 20–30+ items this is what keeps chronology legible; the
  homepage preview has too few items to need them.
- **All 14 MASTER_SPEC categories** appear in the rail with live counts: Furniture Retail,
  Manufacturers, Bedding, Housing, Economy, Consumer, Consumer Credit, Trade / Tariffs,
  Freight, M&A, Bankruptcies, Store Openings / Closings, Protection / Warranty,
  Retail Technology.
- **Attribution is structural, not decorative.** Publication name plus outbound link on every
  row, synopsis capped at ~180 characters. AGENT_RULES §16: never republish a full article.
  A row that cannot be attributed does not render.
- **Load-more over pagination.** A wire is read by scanning recency, and page 2 of a wire is
  where reading stops. `Load 25 more` with a `Showing 30 of 214` counter keeps position and
  scale visible. Infinite scroll is rejected — it breaks the footer, which carries the contact
  path. Owner may prefer pagination; flagged in §3.
- **The stale state is a first-class design, not an error page.** Cached items keep rendering;
  only the freshness indicator changes. This serves AGENT_RULES §16's "no dependency on
  external APIs responding during every visitor page load".
- **Cross-links preserve the three-product separation** while helping navigation: Newswire
  answers *what happened*, and points to the two neighbours that answer *what is changing* and
  *what does it mean*. Links out, not merged content, at the foot of the feed rather than in a
  sidebar competing with the filter rail.

---

# 3. OPEN QUESTIONS

Revision 2 closed several of revision 1's questions by deletion — no terms section means no
coverage-terms gap, and no FAQ means no FAQ content gap. What remains:

| # | Question | Blocks |
|---|---|---|
| **Q-1** | **The Basic \| Premium coverage list** for each section — the left column of every checkmark chart. This is now the single largest content dependency in the set. | All four coverage grids |
| **Q-2** | **Does the coverage grid apply to all four sections?** Subscription and Multi-Year are plan types and clearly have coverage. Reinsurance and Standard are *underwriting* types (DECISION 029) and may carry the same coverage as the plan they are written under. If so, their grids either repeat the plan-type grid or are omitted. | §3 and §4 coverage grids |
| **Q-3** | **Mini calculator inputs and result.** What two things does a dealer enter, and what single number comes out? Must stay within public facts (DECISION 013) — anything revealing a model assumption belongs behind the gate. | §1 and §2 calculators |
| **Q-4** | **Reinsurance tax-benefits qualifier.** Proposed standing line: *"Tax treatment depends on your circumstances. Consult your own tax advisor."* Needs owner/legal sign-off — RAP must not appear to give tax advice. | §3 intro |
| **Q-5** | **Multi-Year dealer economics.** DECISION 036 gives a $250 × 72% = $180 GM illustration but no stated dealer remit or commission, so two stat rows are omitted in §2. | §2 stat panel + calculator |
| **Q-6** | **"Good fit for" bullet content** for Reinsurance and Standard. No eligibility threshold or dealer-size minimum is currently approved and none may be invented. | §3 and §4 |
| **Q-7** | Do Care Kits and Repair Safety Net belong in the Subscription section, ranked below the subscription (DECISION 019)? Owner's call — currently proposed as optional. | §1 |
| **N-1** | Load-more vs pagination, and items per load. Recommendation: load-more at 25. | Newswire feed |
| **N-2** | Archive depth and retention; is older content indexable? | Newswire rail |
| **N-3** | Expected update cadence — without it "stale" has no threshold. | Newswire states |
| **N-4** | Items per day, to confirm 25–30 per view is the right density. | Newswire feed |
| **G-1** | Confirm the single Programs page lives at `/programs` with the four section anchors as named. | Routing, Phase 4 |
| **G-2** | Vector RAP logo asset — still outstanding. | Global chrome |

**STOP — wireframes only. No HTML written for these pages. Awaiting owner approval of layout.**
