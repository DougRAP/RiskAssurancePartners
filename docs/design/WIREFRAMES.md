# Risk Assurance Partners — HOMEPAGE WIREFRAMES (Desktop + Mobile)

**Phase 2 / UI-UX deliverable 1 of 5.**
**Revision 3 — 2026-08-25.** Updated for DECISIONS 029–032 (LOCKED_WIREFRAME v1.1,
2026-08-25 amendment block).
**Revision 2 — 2026-08-24.** Design approved by owner; updated for the R1–R6 clarity set
(DECISIONS 024–028, LOCKED_WIREFRAME v1.1).

## Revision 4 change log (2026-08-25)

| Decision | Section | Change |
|---|---|---|
| 037 | 05 | **Standard Programs added as a fourth path card** at strict parity (`#program-standard`, num 04, mono label `AT THE SALE · SIMPLEST STRUCTURE`). Timing diagram is Multi-Year's single bar plus a dashed slate line for the underwriting RAP retains — same family, visually distinct. Copy limited to Decisions 028/029 facts; no comparison against Reinsurance. |
| 037 / 038 | 05 | Paths grid 3 → **4 columns** desktop, **stacked at ≤900px**. Four in a row on desktop and stacked on mobile per DECISION 038 — no 2×2 stage. The old ≤1024px horizontal-card treatment is retired; it was built for three full-width cards. |
| 037 | 05 | Headline "Three ways…" → **"Four ways to create more value from the same customer."**; lead "Three RAP strategies" → "Four". |
| 037 | 05 fold | Two-axis fold note no longer says "not four products" (now false). Rewritten to state that a plan type and an underwriting type combine. |
| 037 | 02 strip, 01 nav, 13 footer | Standard Programs added to the orientation strip (4th entry at parity), Programs dropdown, mobile drawer, and both footer Programs variants. Full label used everywhere — no abbreviation was needed. |

## Revision 3 change log

| Decision | Section | Change |
|---|---|---|
| 032 | 01, 02, 08, 12, drawer, gate | Primary CTA label is **"Profit Calculator"** everywhere. Tool stays branded *RAP Dealer Economics Calculator*. |
| 032 / R9.2 | 01 | Primary CTA now stays visible in the mobile and condensed header. |
| 029 | 02 | Orientation-strip footnote replaced by a **two-axis** block: protection plan types vs underwriting types. |
| 030 | 11 | "15+ years" restored; the 4.5-star Google rating promoted to **lead proof position**. |
| 031 | 07 | Copy refocused on the five approved points; mirrored kiosk coverage detail removed. |

These wireframes implement the locked 14-section homepage sequence in
`docs/project/LOCKED_WIREFRAME.md` v1.1 exactly. Section numbering below uses the
LOCKED_WIREFRAME numbering (00–13). No section is added, removed, merged, or reordered.
The R2 orientation strip is built **inside** Section 02 and the R6 Contact block **inside**
Section 13, specifically so the fourteen-section sequence stays untouched.

## Revision 2 change log

| Ref | Section | Change |
|---|---|---|
| R1 | 02 | Hero eyebrow now names company, category, and audience |
| R2 | 02 | Orientation strip added below the hero CTAs — owner descriptor, three programs at parity, FurnitureRx attribution |
| R3 | 00 / 01 | Utility bar survives on mobile as a slim strip; utility links move to the **top** of the drawer; +1 contrast step; `CUSTOMERS` label |
| R4 | 01 | Sticky header retains `Dealer Login →` (and `File a Claim` ≥1280px) when condensed |
| R5 | 01 / 05 | Programs nav and all three path `Learn more` links now resolve |
| R6 | 00 / 12 / 13 | Contact added to utility bar and footer; Contact block inside the footer region; `Talk to RAP` targets it |

Layout notation: `│` column edge · `┄` hairline `1px --rap-slate-200` · `▓` ink ground ·
`░` mist ground · `▒` cream ground · blank = paper ground.

Grid: 12 columns, 1240px content width, 48px page margin. Mobile: single column, 24px margin.

---

# PART 1 — DESKTOP (1440px viewport / 1240px content)

## 00 — Utility Bar ▓ `--rap-ink`, 38px

```
▓─────────────────────────────────────────────────────────────────────────────▓
▓ CUSTOMERS │ FILE A CLAIM · MANAGE MY PLAN · CUSTOMER SUPPORT               ▓
▓                                        CONTACT   [ DEALER LOGIN → ]        ▓
▓─────────────────────────────────────────────────────────────────────────────▓
```

**Annotations**
- **R3(c/d) applied.** Plex Mono **13px** `.08em` uppercase at `rgba(255,255,255,.88)` — one
  contrast step up from the first revision, which was legible but under-weighted for the two
  highest-intent actions on the site.
- **R3(d)** — the left cluster is prefixed with a `CUSTOMERS` label in `--rap-slate-500`, with a
  1px `--rap-ink-700` divider, so a consumer knows the row is addressed to them. Deliberately
  **not** "FurnitureRx customers": Multi-Year customers file claims through the same functions.
- `DEALER LOGIN →` is boxed in a 1px `rgba(193,149,65,.55)` brass hairline so it reads as an
  action rather than a link. Fills brass on hover.
- **R6** — `CONTACT` sits beside `DEALER LOGIN →` in the right cluster. Present on every page at
  0px scroll, desktop and mobile. Contact is **not** added to primary navigation.
- Customer servicing stays visually secondary to the dealer narrative at 38px of ink
  (MASTER_SPEC "easy to find, visually secondary").
- The four utility links resolve to kiosk.furniturerx.net (DECISION 023); the prototype points
  them at the kiosk root, with exact route inventory deferred to Phase 12.
- Not sticky. Scrolls away — but per **R4** the condensed header takes over the function.

## 01 — Primary Header — white, 84px, sticky

```
┌─────────────────────────────────────────────────────────────────────────────┐
│ ┌──┐ RISK ASSURANCE PARTNERS                                                │
│ │▞▚│ PROTECTION PROGRAMS FOR HOME FURNISHINGS RETAIL                                               │
│ └──┘                                                                        │
│        Dealer Economics  Programs ▾  Newswire  Market Intelligence          │
│        Research  Why RAP                        [ Profit Calculator → ]      │
└─────────────────────────────────────────────────────────────────────────────┘

  CONDENSED (scrollY > 40) — 64px, tagline dropped, utility returns:
┌─────────────────────────────────────────────────────────────────────────────┐
│ ┌──┐ RISK ASSURANCE PARTNERS   Dealer Economics  Programs ▾  Newswire       │
│ │▞▚│                           Market Intelligence  Research  Why RAP       │
│ └──┘        FILE A CLAIM*  [ DEALER LOGIN → ]    [ Profit Calculator → ]     │
└─────────────────────────────────────────────────────────────────────────────┘
                                              * ≥1280px only

        └ Programs ▾ opens:
          ┌────────────────────────────────────────────┐
          │ FurnitureRx Subscription                   │
          │   Recurring protection income              │
          │ Multi-Year Protection                      │
          │   Protection income at the original sale   │
          │ Reinsurance                                │
          │   Underwriting and investment economics    │
          └────────────────────────────────────────────┘
```

**Annotations**
- Wordmark is the existing RAP corporate lockup (mark + name + "PROTECTION PROGRAMS FOR HOME FURNISHINGS RETAIL").
  Not redesigned. In the prototype the mark is a placeholder glyph; production uses the
  supplied logo asset.
- Nav order is locked and matches DECISION 009 exactly. Programs is the only dropdown.
- One primary CTA in the header: **Profit Calculator** (DECISION 032; supersedes the
  "See My Economics" label). No secondary button competes with it. It is the same label and
  styling in the header, hero, teaser, final CTA and drawer — the site has exactly one primary
  conversion verb. The gated tool it opens keeps its own brand, *RAP Dealer Economics Calculator*.
- **R9.2 applied.** The CTA no longer disappears below 1024px. It stays in the header at a
  compact size (13px/16px padding at ≤1024px, 12px/12px at ≤680px, min-height 44px preserved).
  To make room without dropping the corporate wordmark, the mark shrinks to 30px, the tagline
  hides, and the wordmark wraps to two lines. The condensed-header utility cluster stands down
  below 1024px because the slim utility strip (R3a) already carries those functions.
- **R4 applied.** Sticky behavior at scrollY > 40: the bar condenses 84px → 64px, the
  "PROTECTION PROGRAMS FOR HOME FURNISHINGS RETAIL" line drops — freeing exactly the space needed — and the header
  gains `Dealer Login →` in a hairline box, plus `File a Claim` at ≥1280px only. Without this
  the utility functions existed for one screen out of roughly eleven. Implemented with a small
  scroll listener; `prefers-reduced-motion` removes the transition, not the behavior.
- **R5 applied.** `Programs` is now an anchor with a real destination (`#paths`; `/programs`
  once program pages exist), not a `<button>` that did nothing on click. The dropdown remains
  on hover and focus-within.
- Dropdown items carry a one-line descriptor so the three paths read as peers, not as a
  product family under FurnitureRx, and now point at three **distinct** destinations
  (`#program-subscription`, `#program-multiyear`, `#program-reinsurance`) rather than two of
  them sharing `#paths`.

## 02 — Hero ░ `--rap-mist`, ~640px

```
░─────────────────────────────────────────────────────────────────────────────░
░                                                                             ░
░ ◄─────────── 6 cols ───────────►    ◄─────────── 6 cols ───────────►        ░
░ RISK ASSURANCE PARTNERS · PROTECTION PROGRAMS FOR                           ░
░ FURNITURE & MATTRESS RETAILERS                        ← R1 eyebrow          ░
░                                     ┌───────────────────────────────────┐   ░
░ Your expenses recur                 │ MONTHLY OPERATING COST vs         │   ░
░ every month.                        │ FURNITURE TRANSACTION             │   ░
░ ╱Your furniture sale                │                                   │   ░
░  doesn't.╱            ← ember       │  ▌▌▌▌▌▌▌▌▌▌▌▌  ← 12 expense bars  │   ░
░           italic accent             │  ────────────────────────────     │   ░
░                                     │        ▲                          │   ░
░ Create more economic value from      │        └ one transaction         │   ░
░ customers you already paid to       │                                   │   ░
░ acquire — without adding inventory, │  ▁▂▃▄▅▆▇█  ← recurring value      │   ░
░ advertising, floor space, or        │     added after the sale          │   ░
░ material operating burden.          │                                   │   ░
░                                     │ Figure 1. Illustrative.           │   ░
░ [ Profit Calculator → ] [ How RAP    └───────────────────────────────────┘   ░
░                          Helps ]                                            ░
░                                                                             ░
░ ▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔ 2px ink rule ░
░ R2 ORIENTATION STRIP — spans both columns, closes Section 02               ░
░                                                                             ░
░ Protection programs for furniture & mattress retail dealers, as well as     ░
░ custom interior designer programs. Reinsurance, Subscription, Multi-Year    ░
░ & Standard programs — all home furnishings categories.                      ░
░ ┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄ ░
░ SUBSCRIPTION       │ MULTI-YEAR           │ REINSURANCE                     ░
░ FurnitureRx        │ Multi-Year Protection│ Reinsurance                     ░
░ Recurring          │ Protection income at │ A share of the underwriting     ░
░ protection income, │ the original sale.   │ profits, over time.             ░
░ monthly for the    │                      │                                 ░
░ customer.          │                      │                                 ░
░ View →             │ View →               │ View →                          ░
░ ┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄ ░
░ TWO-AXIS BLOCK (Decision 029)                                               ░
░ PROTECTION PLAN TYPES        │ UNDERWRITING TYPES                           ░
░ — how the customer buys      │ — who keeps the underwriting profits         ░
░ Subscription — $19.99 a      │ Reinsurance — the dealer shares in the       ░
░ month, cancel at any time.   │ underwriting profits and gets tax benefits.  ░
░ Multi-Year — on average $300 │ Standard — RAP keeps them.                   ░
░ one time, prorated share     │                                              ░
░ returned on cancellation.    │                                              ░
░ ┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄ ░
░ THESE ARE TWO DIMENSIONS, NOT FOUR PRODUCTS — A PLAN TYPE AND AN            ░
░ UNDERWRITING TYPE COMBINE. FURNITURERX IS A PRODUCT OF RISK ASSURANCE       ░
░ PARTNERS.                                                                   ░
░─────────────────────────────────────────────────────────────────────────────░
```

**Annotations**
- Opens with the dealer's economic problem. No FurnitureRx, no coverage, no `$19.99`, no
  RAP history, no furniture photography above the fold (DECISION 011). **The H1, the lead,
  the CTAs, and the figure are untouched by revision 2.**
- H1 = Playfair 500 76px, two sentences, second sentence italic `--rap-ember`.

### R1 — eyebrow

- Reads `REINSURANCE, STANDARD, SUBSCRIPTION & MULTI-YEAR PLANS`.
  Short form; the full owner descriptor lives in the strip below so the 12px line stays legible.
- This is the cheapest unused line on the page. The previous eyebrow ("The economics of
  furniture retail") named the topic the H1 then named again; this one names company, category,
  and audience in the first 100px of content at zero added vertical cost.
- At 375px it wraps to two lines, costing ~18px.

### R2 — orientation strip (DECISION 025)

- **Built inside Section 02**, below the CTAs, spanning both columns. Building it as a band
  between §02 and §03 would have been a sequence change; this is not, and the fourteen-section
  sequence is preserved.
- **Descriptor copy is owner-approved verbatim** and must not be paraphrased:
  > Protection programs for furniture & mattress retail dealers, as well as custom interior
  > designer programs. Reinsurance, Subscription, Multi-Year & Standard programs — all home
  > furnishings categories.
- Drawn as a **directory object**, not a pitch: 2px ink top rule, mono labels, hairline column
  dividers, no fill, no headline weight, no button. It reads as wayfinding, which is what keeps
  it from pre-empting Section 05.
- **Carries no economics.** No `$19.99`, no `$8`, no coverage terms, no claims language — so
  Sections 07 and 08 lose nothing.
- **Strict parity across the three items** (DESIGN_SYSTEM §6): identical column width, label
  treatment, name weight, description length band, and `View →` link. No ember rule on the
  FurnitureRx item.
- **Two-axis block (DECISION 029) — resolves the "four words, three cards" problem.** The
  descriptor names four program words while Section 05 shows three cards. The strip now states
  plainly that these are two *dimensions* rather than four products:
  - **Protection plan types — how the customer buys.** Subscription: $19.99 a month, cancel at
    any time. Multi-Year: on average $300 one time, with a prorated share returned on
    cancellation.
  - **Underwriting types — who keeps the underwriting profits.** Reinsurance: the dealer shares
    in the underwriting profits and gets tax benefits. Standard: RAP keeps them.
  - Two columns on desktop, stacked below 860px. Mono labels, Inter 14px values, program names
    in Inter 600 `--rap-ink`. It reads as a key, not a pitch.
- New approved facts introduced here and nowhere else on the homepage: **Multi-Year averages
  ~$300 one time with prorated refunds**, and **Reinsurance carries tax benefits** (DECISION 029).
- **Standard still gets no card.** Section 05 is unchanged and remains the three economic paths.
- Closing footnote, Plex Mono 11px: the two-dimensions sentence plus
  **"FurnitureRx is a product of Risk Assurance Partners."** Moving that sentence out of the last
  line of the footer and into viewport 1 is the whole of the "am I at the right site?" fix for
  visitors arriving from FurnitureRx marketing. The footer instance is kept as well.
- Cost: ~150px desktop, ~300px mobile stacked. Acceptable — on mobile the hero figure was never
  first-viewport content.
- The figure is the preferred visual from the locked wireframe made literal: twelve monthly
  expense bars along a continuous baseline versus a single transaction spike, then a third
  register showing recurring value accumulating after the sale. It is a diagram, not
  decoration, and it is labelled **Illustrative** because it carries no data claim.
- Two CTAs, unequal weight: primary `Profit Calculator →`, secondary `How RAP Helps`
  (anchor to §05).
- Mist ground because the hero's right half is quantitative. The hero and Market Pulse share
  the mist band, separated by a hairline rather than a color change.

## 03 — Market Pulse ░ `--rap-mist` (continues), ~300px

```
░┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄░
░ THE MARKET MOVING FURNITURE RETAIL                                          ░
░                                                                             ░
░ ▔▔▔▔▔▔▔▔▔▔▔▔   ▔▔▔▔▔▔▔▔▔▔▔▔   ▔▔▔▔▔▔▔▔▔▔▔▔   ▔▔▔▔▔▔▔▔▔▔▔▔  ← 2px ink rule ░
░ FURNITURE       EXISTING-HOME   HOUSING        FURNITURE                    ░
░ RETAIL SALES    SALES           STARTS         CPI                          ░
░                                                                             ░
░ $11.20B         4.06M           1.31M          −1.2%                        ░
░ ▼ 4.5% vs '22   ▶ 0.0% y/y      ▲ 2.1% y/y     ▼ 0.4% y/y                  ░
░ ┄┄┄┄┄┄┄┄┄┄┄┄   ┄┄┄┄┄┄┄┄┄┄┄┄   ┄┄┄┄┄┄┄┄┄┄┄┄   ┄┄┄┄┄┄┄┄┄┄┄┄                 ░
░ CENSUS/FRED     NAR/FRED        CENSUS         BLS                          ░
░ UPD 08 AUG      UPD 21 AUG      UPD 19 AUG     UPD 13 AUG                   ░
░                                                                             ░
░                                          [ Market Intelligence → ]          ░
░─────────────────────────────────────────────────────────────────────────────░
```

**Annotations**
- Four stat tiles per DESIGN_SYSTEM §4.3. Each carries value, trend glyph + signed number,
  comparison label, source, and last-updated. A tile without a source is a defect.
- **Values shown are placeholders pending approved sources (Phase 9).** The prototype marks
  them with a visible provenance banner. Exact metric list is flexible per MASTER_SPEC.
- This is a compact preview, not the dashboard. No charts here — charts live on the Market
  Intelligence page. The only exit is the `Market Intelligence →` link.
- Trend direction is carried by `▲ ▼ ▶` so the row survives greyscale and color-blindness.

## 04 — Fundamental Dealer Economic Problem ▓ `--rap-ink`, ~720px

```
▓─────────────────────────────────────────────────────────────────────────────▓
▓                          THE UNDERLYING MATH                                ▓
▓                                                                             ▓
▓             You already paid to acquire ╱the customer.╱  ← brass italic     ▓
▓                                                                             ▓
▓  ADVERTISING  INVENTORY  PAYROLL   RENT   FREIGHT  WAREHOUSING              ▓
▓      │            │         │        │       │          │                   ▓
▓      └────────────┴─────────┴────┬───┴───────┴──────────┘                    ▓
▓                                  │                                          ▓
▓                        ┌─────────▼──────────┐                               ▓
▓                        │  CUSTOMER PURCHASE │                               ▓
▓                        └─────────┬──────────┘                               ▓
▓                                  │                                          ▓
▓                                  ▼                                          ▓
▓             How much economic value does that transaction create?           ▓
▓                                                                             ▓
▓  ┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄  ▓
▓  Every cost above recurs.        The transaction does not.                  ▓
▓─────────────────────────────────────────────────────────────────────────────▓
```

**Annotations**
- Ink ground: this is the pivot of the argument and the first of three ink moments.
- The figure is a converging-flow diagram in 1px rules — six labelled cost inputs collapsing
  into one node, then one output question. **Not an icon grid.** No icons at all.
- The closing two-clause line restates the hero premise as a conclusion, which is what sets
  up Section 05.
- Nothing is sold in this section. No RAP product name appears.

## 05 — Three Economic Paths — paper, ~660px

```
┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄
                            RISK ASSURANCE PARTNERS
        Three ways to create more value from ╱the same customer.╱

  Three RAP strategies. They are not alternatives to one another —
  most dealers will use more than one.

┌────────────────────┐  ┌────────────────────┐  ┌────────────────────┐
│ 01                 │  │ 02                 │  │ 03                 │
│ SUBSCRIPTION       │  │ MULTI-YEAR         │  │ REINSURANCE        │
│                    │  │                    │  │                    │
│ ┌────┐ ┌────┐ ┌──┐ │  │ ┌────────────────┐ │  │  ╱╲                │
│ │ ▌  │ │ ▌  │ │▌ │ │  │ │       ▌        │ │  │ ╱  ╲  ← accrual   │
│ └────┘ └────┘ └──┘ │  │ └────────────────┘ │  │╱    ╲   over time  │
│ recurring          │  │ one decision       │  │ deferred           │
│                    │  │                    │  │                    │
│ FurnitureRx        │  │ Protection income  │  │ Underwriting and   │
│ recurring dealer   │  │ generated at the   │  │ investment         │
│ income from        │  │ original sale, for │  │ economics for      │
│ customers who      │  │ customers who      │  │ dealers with an    │
│ prefer a monthly   │  │ prefer one complete│  │ appropriate        │
│ commitment.        │  │ upfront decision.  │  │ structure.         │
│                    │  │                    │  │ Timing differs     │
│                    │  │                    │  │ from commission    │
│                    │  │                    │  │ income.            │
│                    │  │                    │  │                    │
│ Learn more →       │  │ Learn more →       │  │ Learn more →       │
└────────────────────┘  └────────────────────┘  └────────────────────┘
┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄
```

**Annotations**
- **Strict visual parity.** Identical card width, border, padding, title size, body length
  band, and CTA. No card is elevated, tinted, badged, or given the ember rule. This is the
  mechanism that enforces "FurnitureRx is not the parent of the other two."
- Each card carries a tiny abstract timing diagram (repeating pulses / single block /
  accruing wedge) that encodes *when* the income arrives. It is the one visual difference
  and it is informational, not promotional.
- Card 02 copy is affirmative — "for customers who prefer one complete upfront decision."
  Multi-Year is never described as legacy, declining, or replaced.
- Card 03 explicitly states the timing caveat, satisfying "do not describe reinsurance as
  universally immediate profit." Per **DECISION 028** it now leads with the owner's framing —
  taking a share of the underwriting profits rather than leaving them with the vendor, building
  wealth over time — followed by the unchanged not-immediate-profit caveat.
- Eyebrow is `RISK ASSURANCE PARTNERS` — the section is attributed to the master brand.
- **R5 applied.** Each card carries a real `id` (`#program-subscription`, `#program-multiyear`,
  `#program-reinsurance`) and is the destination for the header dropdown, the R2 strip, the
  drawer, and the footer. All three `Learn more →` links resolve — previously two of the three
  programs were unclickable everywhere they appeared, which is a quiet form of the demotion the
  three-path rule exists to prevent.

## 06 — The Changed Customer — paper, ~760px

```
                              WHAT CHANGED
     The customer may not be saying "no to protection."
     They may be saying ╱"not another large purchase today."╱

  ┌──────────┐  ┌─────┐  ┌──────────┐  ┌───────────┐  ┌──────────────┐
  │ FURNITURE│→ │ TAX │→ │ DELIVERY │→ │ FINANCING │→ │  PROTECTION  │
  └──────────┘  └─────┘  └──────────┘  └───────────┘  │   DECISION   │
                                                       └──────┬───────┘
                          ┌───────────────────────────────────┴──┐
                          │                                      │
                          ▼                                      ▼
              ┌───────────────────────┐          ┌───────────────────────┐
              │ UPFRONT FORMAT FITS   │          │ FORMAT DOESN'T FIT    │
              │                       │          │                       │
              │ MULTI-YEAR PROTECTION │          │ FURNITURERX           │
              │ Keep the sale that    │          │ ~70% of customers say │
              │ works.                │          │ no to Multi-Year      │
              │                       │          │ plans. This is that   │
              │                       │          │ group.                │
              └───────────────────────┘          └───────────────────────┘
                          └──────────────┬───────────────┘
                                         ▼
              Keep the sale that works. Add another way to say yes.
┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄
```

**Annotations**
- Both branches are drawn with identical weight. The left branch is not a failure state.
- The ~70% figure is owner-approved (DECISION 020) and is the only statistic in this section.
  It is attributed inline as RAP program experience. No other behavioral statistic appears —
  the research draft's third-party figures are not owner-approved for site use.
- The closing line is DECISION 012's locked positioning, set as a full-width statement rule.
- This is the second of the two permitted drawn diagrams on the homepage.

## 07 — FurnitureRx — paper, ~820px

```
┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄
◄────────── 5 cols ──────────►      ◄────────── 7 cols ──────────►
                                    ┌─────────────────────────────────────┐
FurnitureRx                         │ ▔▔▔▔ 2px ember rule                 │
A PRODUCT OF RISK ASSURANCE         │ FurnitureRx  POWERED BY RAP    [🛒] │
PARTNERS                            │─────────────────────────────────────│
                                    │ MONTHLY PLAN                        │
Turn some protection declines       │                                     │
into ╱recurring customer            │ Stain + Structure                   │
relationships.╱                     │ $19.99 /month                       │
                                    │                                     │
FOR THE CUSTOMER                    │ [ Maya · your sales assistant ]     │
▌ Just $19.99 a month               │                                     │
  Same coverage as multi-year       │ ✓ Same coverage as a multi-year plan│
  programs, paid monthly            │ ✓ Cancel, pause or restart anytime  │
  instead of upfront.               │ FULL COVERAGE TERMS SHOWN AT CHECKOUT│
▌ Cancel, start, restart anytime    │                                     │
  The customer stays in control.    │ [ Save to cart → ] [ Checkout ]     │
                                    └─────────────────────────────────────┘
FOR THE DEALER                      ACTUAL FURNITURERX CUSTOMER INTERFACE
▌ Zero remit                        kiosk.furniturerx.net
  The dealer pays RAP nothing
  to participate.
▌ Recurring commission revenue
  $8 for every successful monthly
  payment, for as long as the
  customer stays.

▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔ 2px ember
CUSTOMER PAYS         $19.99/month
┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄
DEALER REMITS         $0
┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄
DEALER EARNS          $8 per
                      successful
                      monthly
                      payment
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔

[ FurnitureRx for Dealers → ]
[ See the customer experience ]
┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄
```

**Annotations**

### The five approved points (DECISION 031)

The copy column carries exactly these, split into who benefits, each as an ember-ruled item
with a bold claim and one supporting line:

| Audience | Point |
|---|---|
| Customer | **Just $19.99 a month** — the same coverage as multi-year programs, paid monthly instead of upfront |
| Customer | **Cancel, start, restart at any time** — the customer stays in control |
| Dealer | **Zero remit** — the dealer pays RAP nothing to participate |
| Dealer | **Recurring commission revenue** — $8 for every successful monthly payment, for as long as the customer stays |

- **Mirrored kiosk coverage copy is removed.** `$5,000 total coverage`, `24/7 claim filing`,
  `rips, burns, mechanical & electrical failure`, `frames, springs, motors, switches, controls`
  and `repair first / replace if repair isn't enough` no longer appear anywhere on the homepage.
  DECISION 031 rules that emphasis wrong for a dealer-facing corporate page, and it also
  retires open question Q13 (whether live product copy could be mirrored).
- The kiosk panel **stays** as product proof — MASTER_SPEC calls for "actual product
  interfaces" — but its list is reduced to the two lines that carry the buying decision
  (*same coverage as a multi-year plan* · *cancel, pause or restart anytime*), closed by
  `FULL COVERAGE TERMS SHOWN AT CHECKOUT` in Plex Mono. Coverage detail belongs at the point of
  sale, not on the corporate homepage.
- "Same coverage as multi-year programs" is the load-bearing claim of this section: it is what
  stops a monthly price reading as a lesser product. Approved by DECISION 031.
- Only the `$19.99` subscription appears. No `from $9.99/mo`, no Care Kits, no Repair Safety
  Net on the homepage (DECISION 019). Care Kits/Safety Net live on the FurnitureRx program
  page, ranked below the subscription.
- The economics table restates the same three numbers as a scannable summary, relabelled to
  active voice (**Customer pays / Dealer remits / Dealer earns**) so it reinforces the points
  above rather than repeating them flatly. `$8` remains a **dealer commission** per DECISION 020.
- The FurnitureRx lockup is smaller than the RAP header wordmark and carries
  "A PRODUCT OF RISK ASSURANCE PARTNERS" directly beneath it.

## 08 — Dealer Economics / Calculator Teaser ░ `--rap-mist`, ~700px

```
░─────────────────────────────────────────────────────────────────────────────░
░                        RAP DEALER ECONOMICS                                 ░
░              What could this mean for ╱your dealership?╱                    ░
░                                                                             ░
░  ┌── PUBLIC (full contrast) ────────────────────────────────────────────┐   ░
░  │  $19.99          $0              $8                                  │   ░
░  │  customer pays   dealer remits   dealer commission per successful    │   ░
░  │  monthly                         monthly payment                     │   ░
░  └──────────────────────────────────────────────────────────────────────┘   ░
░                                                                             ░
░  ILLUSTRATIVE RECURRING CONTRIBUTION — ONE SUBSCRIBER COHORT                ░
░  ┌──────────────────────────────────────────────────────────────────────┐   ░
░  │                                                     ▁▂▃▄▅▆▇█ stepped │   ░
░  │                                         ▁▂▃▄▅▆▇█                     │   ░
░  │                             ▁▂▃▄▅▆▇█                                 │   ░
░  │  M1 ──────── M12 ──────── M24 ──────── M36                           │   ░
░  │  Illustrative only. Not a forecast.                                  │   ░
░  └──────────────────────────────────────────────────────────────────────┘   ░
░                                                                             ░
░  ┌── GATED (blurred, inert) ────────────────────────────────────────────┐   ░
░  │ ░░ Subscribers ░░ Locations ░░ Horizon ░░ Cancellation assumption ░░ │   ░
░  │ ░░ Cumulative dealer commission ░░ Multi-Year comparison ░░          │   ░
░  │              ┌────────────────────────────────┐                      │   ░
░  │              │ 🔒 REQUIRES APPROVED ACCESS    │                      │   ░
░  │              └────────────────────────────────┘                      │   ░
░  └──────────────────────────────────────────────────────────────────────┘   ░
░                                                                             ░
░                    [ Profit Calculator → ]                                  ░
░   Access is reviewed by RAP Sales. Six fields. No password to create.       ░
░─────────────────────────────────────────────────────────────────────────────░
```

**Annotations**
- Public strip shows only the four approved public facts (MASTER_SPEC "Publicly visible"):
  `$19.99`, `$0`, the recurring-commission concept, and an illustrative accumulation.
- The illustrative chart is an unlabelled-axis stepped area — shape without magnitude. No
  y-axis values, no dollar totals, no subscriber counts. It communicates "this accumulates"
  and nothing more.
- The gated panel is **visible but inert**: real control labels blurred at 3px, 50% opacity,
  `pointer-events:none`, `inert`, `aria-hidden`. Showing that a real model exists is the
  point of the gate; exposing its values is not. No formula, assumption, cancellation rate,
  or reinsurance calculation is legible.
- Sub-CTA line pre-answers the two friction questions (how long, what do I have to give).

## 09 — Furniture Retail Newswire — paper, ~740px

```
┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄
 FURNITURE RETAIL NEWSWIRE                                    ● LIVE
 What happened.                                     UPDATED CONTINUOUSLY
┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄
 12:38 PM  [HOUSING]     Existing-home sales headline goes here
                         One-sentence synopsis, capped at two lines and
                         roughly 180 characters.               SOURCE →
┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄
 11:17 AM  [RETAIL]      Major furniture retailer headline
                         Synopsis.                             SOURCE →
┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄
 10:04 AM  [TRADE]       Tariff development headline        …5 rows total
┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄
                                                      [ View all news → ]
```

**Annotations**
- Wire-service grammar per DESIGN_SYSTEM §5.1: fixed 88px Plex Mono timestamp column,
  outlined category chip, **Inter** (not serif) headline, hairline rows, no images, no cards.
- Headlines are sans specifically so Newswire cannot be mistaken for RAP's own editorial
  voice — the serif is reserved for RAP Research and the hero.
- Every row carries publication attribution plus an outbound link. Synopsis only; never a
  republished article (AGENT_RULES §16).
- `● LIVE` = 6px ember dot with a 2s pulse, disabled under `prefers-reduced-motion`.
- Five rows on the homepage. Homepage item count is explicitly flexible in MASTER_SPEC.

## 10 — RAP Research ▒ `--rap-cream`, ~700px

```
▒─────────────────────────────────────────────────────────────────────────────▒
▒ RAP RESEARCH                                                                ▒
▒ What it means.                                                              ▒
▒                                                                             ▒
▒ ◄─── 4 cols ───►     ◄──────────────── 8 cols ────────────────►            ▒
▒ ┌───────────────┐                                                           ▒
▒ │▓ REPORT COVER▓│    Furniture retail has changed.                          ▒
▒ │▓             ▓│    ╱Protection has to change with it.╱   ← brass italic   ▒
▒ │▓ Furniture    ▓│                                                          ▒
▒ │▓ retail has   ▓│    Original Risk Assurance Partners research examining   ▒
▒ │▓ changed.     ▓│    furniture retail economics, consumer behavior, and    ▒
▒ │▓             ▓│    the protection model.                                  ▒
▒ │▓ RISK ASSUR.  ▓│                                                          ▒
▒ │▓ PARTNERS     ▓│    ┌────────────────────┐  ┌────────────────────┐        ▒
▒ │▓ AUG 2026     ▓│    │ Fig. thumbnail     │  │ Fig. thumbnail     │        ▒
▒ └───────────────┘    └────────────────────┘  └────────────────────┘        ▒
▒                                                                             ▒
▒                       [ Read research → ]  [ Download report ]              ▒
▒─────────────────────────────────────────────────────────────────────────────▒
```

**Annotations**
- Cream is used only here. It signals "paper / editorial" and is the strongest single cue
  that Research is a different product from Newswire and Market Intelligence.
- The cover is a real object with a 3:4 portrait ratio, ink ground and brass hairline — it
  reappears identically on the Research index and as the download thumbnail.
- Serif headline with brass italic accent; the title is the approved flagship study title.
- Two figure thumbnails signal a data-backed report without asserting any figure on the
  homepage.
- Two CTAs: read online, download. `Download report` is secondary weight.

## 11 — Why Risk Assurance Partners — paper, ~640px

```
┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄
                              WHY RAP
                    Built around ╱furniture retail.╱

 ▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔ 2px ink rule ▔▔▔▔▔▔▔▔▔▔▔▔
        ★★★★☆   RAP GOOGLE RATING
 4.5            Today's customer researches the provider before they
                agree to the program — and the retailer that sold it
                wears the result. This is what they find.
 ┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄

 ▔▔▔▔▔▔▔▔▔▔▔▔▔▔    ▔▔▔▔▔▔▔▔▔▔▔▔▔▔    ▔▔▔▔▔▔▔▔▔▔▔▔▔▔    ▔▔▔▔▔▔▔▔▔▔▔▔▔▔
 15+ YEARS         FURNITURE FOCUS   CLAIMS            UNDERWRITING
 Fifteen-plus      Programs built    ADMINISTRATION    RELATIONSHIPS
 years building    for furniture     Administered by   Programs are
 and administering dealers, not      RAP, not handed   backed by
 protection        adapted from      to a third party. underwriting
 programs for      another category.                   partners.
 furniture retail.
 ┄┄┄┄┄┄┄┄┄┄┄┄┄┄    ┄┄┄┄┄┄┄┄┄┄┄┄┄┄    ┄┄┄┄┄┄┄┄┄┄┄┄┄┄    ┄┄┄┄┄┄┄┄┄┄┄┄┄┄
 TECHNOLOGY        CUSTOMER          DEALER SUPPORT    PROGRAM
 Enrollment,       EXPERIENCE        Training and      EXPERTISE
 billing, dealer   US-based service  materials for the Subscription,
 reporting and     and self-serve    sales floor.      multi-year and
 claims built      claim filing.                       reinsurance.
 in-house.
┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄
```

**Annotations**

### Google rating in lead proof position (DECISION 030)

- The owner rates this **very important**, so it opens the section rather than closing it.
  In revision 2 it was a small footnote line beneath the grid; it is now the first thing in
  Section 11, above the capability grid, on a 2px ink top rule.
- Treatment: `4.5` in Playfair at `clamp(56px, 7vw, 86px)` — the largest numeral on the page
  outside the hero — with a four-and-a-half star glyph row in `--rap-brass`, the label
  `RAP GOOGLE RATING`, and one sentence of *why it matters to a dealer*: the customer
  researches the provider, and the retailer that sold the program wears the result. Prominence
  without a testimonial carousel or a new section.
- Stacks to a left-aligned column below 680px; the numeral keeps its scale.
- **4.5 only** (DECISION 021). The 4.7 figure in the research draft is wrong and appears nowhere.

### Capability grid

- **No icons.** Eight capability statements as a typographic 4×2 grid with 2px ink top rules.
  Each has a one-sentence substantiation rather than a bare noun — this is what stops it
  becoming the "decorative icon grid" the spec prohibits.
- **`15+ years` restored** (DECISION 030 — resolves D4/Q1). It was withheld in revisions 1–2
  because it appeared only in the wireframe sketch and not in any approved facts document;
  the owner has now confirmed it is accurate. It takes the first grid position, and the
  "Multi-program capability" filler that stood in for it is removed.
- All four previously-flagged capability claims are now **owner-approved facts** (DECISION 030):
  claims administered in-house by RAP, underwriting partner relationships, technology built
  in-house, and US-based service with self-serve claims. Open question Q3 is closed.
- No superlatives, no market-share claims, no unsourced performance numbers.

## 12 — Final Conversion ▓ `--rap-ink`, ~480px

```
▓─────────────────────────────────────────────────────────────────────────────▓
▓                                                                             ▓
▓                      You already have the customer.                         ▓
▓            ╱Let's improve the economics of the transaction.╱                ▓
▓                                                                             ▓
▓            [ Profit Calculator → ]      [ Talk to RAP ]                      ▓
▓                                                                             ▓
▓  Access to the RAP Dealer Economics Calculator is reviewed by RAP Sales.    ▓
▓─────────────────────────────────────────────────────────────────────────────▓
```

**Annotations**
- Third and final ink moment. Centered, single column, no form embedded — the form lives
  behind `Profit Calculator` so the gate flow has one entry point across the whole site.
- Primary CTA is the same label and same styling as the header CTA. The site has exactly one
  primary conversion verb.
- **R6 applied.** `Talk to RAP` now targets `#contact` instead of a dead link. This matters
  beyond link hygiene: previously the only route to a human was the primary CTA, which is a
  gated calculator request reviewed by Sales — a qualification funnel, not a contact path. A
  dealer with a question and a consumer holding a plan were both funnelled into a six-field
  lead form or nothing.

## 13 — Footer ▓ `--rap-ink`

```
▓─────────────────────────────────────────────────────────────────────────────▓
▓ CONTACT                                          ← R6 block, id="contact"   ▓
▓ Talk to Risk Assurance Partners.                                            ▓
▓                                                                             ▓
▓ ◄──── 5 cols ────►          ◄──────── 7 cols ────────►                      ▓
▓ ┌───────────────────────┐   PHONE                                           ▓
▓ │ I'm a dealer       →  │   1.800.732.5856                                  ▓
▓ ├───────────────────────┤   ┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄                    ▓
▓ │ I have a plan      →  │   EMAIL                                           ▓
▓ ├───────────────────────┤   sales@raptns.com                                ▓
▓ │ Media or other     →  │   ┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄                    ▓
▓ └───────────────────────┘   HOURS                                           ▓
▓                             8:00 AM – 6:00 PM, Mon–Fri, EST                 ▓
▓ ┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄  ▓
▓ ┌──┐ RISK ASSURANCE PARTNERS                                                ▓
▓ │▞▚│ PROTECTION PROGRAMS FOR HOME FURNISHINGS RETAIL                                               ▓
▓ └──┘                                                                        ▓
▓                                                                             ▓
▓ PROGRAMS       INTELLIGENCE      COMPANY      CUSTOMER        DEALER        ▓
▓ FurnitureRx    Newswire          Why RAP      File a Claim    Dealer Login  ▓
▓ Multi-Year     Market Intel.     Contact      Customer Supp.  Dealer Econ.  ▓
▓ Reinsurance    Research                       Manage My Plan                ▓
▓ ┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄  ▓
▓ © 2026 Risk Assurance Partners        Privacy · Terms                       ▓
▓ FurnitureRx is a product of Risk Assurance Partners.                        ▓
▓─────────────────────────────────────────────────────────────────────────────▓
```

**Annotations**
- Five groups exactly as specified in the locked wireframe, in that order.
- The brand-hierarchy sentence is restated in the footer of every page. It is the cheapest
  possible insurance against brand confusion.
- Footer is ink, matching the utility bar, so the page opens and closes on the corporate mark.

### R6 — Contact block

- **Placed inside the footer region (Section 13), not as a fifteenth section.** Decision 024
  adds Contact to the site map; it does not add a homepage section. `#contact` is a real
  in-page destination for the utility bar, the drawer, the footer Company group, `Talk to RAP`,
  and the two non-FurnitureRx `Learn more` links until program pages exist.
- **Three routing choices** — *I'm a dealer* → the economics gate; *I have a protection plan* →
  kiosk claim/manage; *Media or other* → email. A consumer who landed here by mistake gets a
  one-click exit to File a Claim rather than a dealer lead form.
- **Contact details are owner-approved (DECISION 027) and must not be altered:**
  phone **1.800.732.5856**, email **sales@raptns.com**,
  hours **8:00 AM – 6:00 PM, Monday–Friday, EST**. Phone is `tel:`, email is `mailto:`.
- Contact also appears in the footer Company group, which the locked wireframe already listed
  but which previously had no destination.
- Contact is **not** in primary navigation — MASTER_SPEC warns against reverting to
  *About → Features → Products → Contact*, and the seven-item nav order is locked. The utility
  bar carries it without weakening dealer-first nav.

---

# PART 2 — MOBILE (375px viewport, 24px margins)

Sequence is identical: 00→13. No section is reordered, collapsed into another, or dropped.

```
COLUMN 1 — sections 00 to 04             COLUMN 2 — sections 05 to 08
┌─────────────────────────┐              ┌─────────────────────────┐
│▓ FILE A CLAIM  LOGIN → ▓│ ← 00 R3(a):  │ 05 RISK ASSURANCE       │
├─────────────────────────┤   slim 32px  │    PARTNERS             │
│  RAP               ☰   │   strip      │ Three ways to create    │
├─────────────────────────┤   STAYS      │ more value from ╱the    │
│░ 02 HERO                │ ← 01 header  │ same customer.╱         │
│░ RISK ASSURANCE         │   64px       │                         │
│░ PARTNERS · PROTECTION  │              │ ┌─────────────────────┐ │
│░ PROGRAMS FOR FURNITURE │ ← R1 eyebrow │ │ 01 SUBSCRIPTION     │ │
│░ & MATTRESS RETAILERS   │   wraps to   │ │ ▌ ▌ ▌ recurring     │ │
│░                        │   two lines  │ │ FurnitureRx …       │ │
│░ Your expenses recur    │              │ │ Learn more →        │ │
│░ every month.           │              │ └─────────────────────┘ │
│░ ╱Your furniture sale   │              │ ┌─────────────────────┐ │
│░  doesn't.╱             │              │ │ 02 MULTI-YEAR       │ │
│░                        │              │ │ ▌ one decision      │ │
│░ Create more economic   │              │ │ Learn more →        │ │
│░ value from customers   │              │ └─────────────────────┘ │
│░ you already paid to    │              │ ┌─────────────────────┐ │
│░ acquire.               │              │ │ 03 REINSURANCE      │ │
│░                        │              │ │ ╱╲ accrues          │ │
│░ [ Profit Calculator → ] │              │ │ Learn more →        │ │
│░ [ How RAP Helps      ] │              │ └─────────────────────┘ │
│░                        │              │   ↑ stacked 01→02→03,   │
│░ ▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔ │ ← R2 strip   │     equal treatment     │
│░ Protection programs    │   stacks,    ├─────────────────────────┤
│░ for furniture &        │   ~300px     │ 06 WHAT CHANGED         │
│░ mattress retail        │              │ The customer may not be │
│░ dealers, as well as    │              │ saying "no to           │
│░ custom interior        │              │ protection." …          │
│░ designer programs.     │              │                         │
│░ Reinsurance,           │              │ ┌─────────────────────┐ │
│░ Subscription,          │              │ │ FURNITURE           │ │
│░ Multi-Year & Standard  │              │ │   ↓  TAX            │ │
│░ programs — all home    │              │ │   ↓  DELIVERY       │ │
│░ furnishings categories.│              │ │   ↓  FINANCING      │ │
│░ ┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄ │              │ │   ↓                 │ │
│░ SUBSCRIPTION           │              │ │ PROTECTION DECISION │ │
│░ FurnitureRx            │              │ └──────────┬──────────┘ │
│░ Recurring protection   │              │    ┌───────┴───────┐    │
│░ income, monthly.       │              │    ▼               ▼    │
│░ View →                 │              │ ┌───────┐    ┌────────┐ │
│░ ┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄ │              │ │MULTI- │    │FURNITU-│ │
│░ MULTI-YEAR             │              │ │YEAR   │    │RERX    │ │
│░ Multi-Year Protection  │              │ └───────┘    └────────┘ │
│░ Protection income at   │              │   ↑ branches stay       │
│░ the original sale.     │              │     SIDE-BY-SIDE —      │
│░ View →                 │              │     stacking would      │
│░ ┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄ │              │     rank one above      │
│░ REINSURANCE            │              │     the other           │
│░ Reinsurance            │              │                         │
│░ A share of the         │              │ Keep the sale that      │
│░ underwriting profits,  │              │ works. Add another way  │
│░ over time.             │              │ to say yes.             │
│░ View →                 │              ├─────────────────────────┤
│░ ┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄ │              │ 07 FURNITURERX          │
│░ REINSURANCE PROGRAMS   │              │ FurnitureRx             │
│░ LET A RETAILER TAKE A  │              │ A PRODUCT OF RISK       │
│░ SHARE OF THE           │              │ ASSURANCE PARTNERS      │
│░ UNDERWRITING PROFITS.  │              │                         │
│░ IN STANDARD PROGRAMS,  │              │ Turn some protection    │
│░ THE VENDOR KEEPS       │              │ declines into           │
│░ THOSE PROFITS.         │              │ ╱recurring customer     │
│░ FURNITURERX IS A       │              │ relationships.╱         │
│░ PRODUCT OF RISK        │              │                         │
│░ ASSURANCE PARTNERS.    │              │ ▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔ │
│░                        │              │ CUSTOMER   $19.99/month │
│░ ┌─────────────────────┐│              │ PAYMENT                 │
│░ │ Fig 1. expense bars ││              │ ┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄ │
│░ │ vs one transaction  ││              │ DEALER     $0           │
│░ └─────────────────────┘│              │ REMIT                   │
├─────────────────────────┤              │ ┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄ │
│░ 03 MARKET PULSE        │              │ DEALER     $8 / payment │
│░ THE MARKET MOVING      │              │ COMMISSION              │
│░ FURNITURE RETAIL       │              │ ▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔ │
│░ ▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔ │              │ [FurnitureRx for        │
│░ FURNITURE RETAIL SALES │              │  Dealers → ]            │
│░ $11.20B                │              │ [See the customer exp.] │
│░ ▼ 4.5% vs '22          │              │                         │
│░ CENSUS/FRED · UPD AUG 8│              │ ┌─────────────────────┐ │
│░ ▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔ │              │ │ ACTUAL KIOSK UI     │ │
│░ EXISTING-HOME SALES    │              │ │ FurnitureRx         │ │
│░ 4.06M   ▶ 0.0% y/y     │              │ │ Stain + Structure   │ │
│░ …4 tiles, 1 per row    │              │ │ $19.99 /month       │ │
│░                        │              │ │ [Save to cart →]    │ │
│░ [Market Intelligence →]│              │ └─────────────────────┘ │
├─────────────────────────┤              │ ↑ moves BELOW copy:     │
│▓ 04 THE UNDERLYING MATH │              │   argument precedes     │
│▓ You already paid to    │              │   the proof             │
│▓ acquire ╱the customer.╱│              ├─────────────────────────┤
│▓                        │              │░ 08 DEALER ECONOMICS    │
│▓ ┌─────────────────────┐│              │░ What could this mean   │
│▓ │ ADVERTISING         ││              │░ for ╱your dealership?╱ │
│▓ │ INVENTORY           ││              │░ $19.99 / $0 / $8       │
│▓ │ PAYROLL             ││              │░   ↑ 3 rows, not 3 cols │
│▓ │ RENT                ││              │░ ┌─────────────────────┐│
│▓ │ FREIGHT             ││              │░ │ illustrative chart  ││
│▓ │ WAREHOUSING         ││              │░ └─────────────────────┘│
│▓ │  6 rows converging  ││              │░ ┌─────────────────────┐│
│▓ │  into one arrow ↓   ││              │░ │ 🔒 GATED (blurred)  ││
│▓ └──────────┬──────────┘│              │░ └─────────────────────┘│
│▓            ▼           │              │░ [Calculate My          │
│▓ ┌─────────────────────┐│              │░  Opportunity → ]       │
│▓ │ CUSTOMER PURCHASE   ││              └─────────────────────────┘
│▓ └──────────┬──────────┘│
│▓            ▼           │              DRAWER (☰ open) — R3(b)
│▓ How much economic      │              ┌─────────────────────────┐
│▓ value does that        │              │▓ RAP                 ×  │
│▓ transaction create?    │              │▓ ┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄  │
│▓ ┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄ │              │▓ CUSTOMERS              │
│▓ Every cost above       │              │▓ FILE A CLAIM           │
│▓ recurs. The            │              │▓ MANAGE MY PLAN         │
│▓ transaction does not.  │              │▓ CUSTOMER SUPPORT       │
└─────────────────────────┘              │▓ CONTACT                │
                                         │▓ DEALER LOGIN →         │
COLUMN 3 — sections 09 to 13             │▓ ┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄  │
┌─────────────────────────┐              │▓  ↑ utility now at the  │
│ 09 NEWSWIRE      ● LIVE │              │▓    TOP, above the nav  │
│ ┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄ │              │▓                        │
│ 12:38 PM  [HOUSING]     │              │▓ Dealer Economics       │
│ Headline over two lines │              │▓ Programs               │
│ Synopsis one line       │              │▓   FurnitureRx          │
│ SOURCE →                │              │▓   Multi-Year           │
│ ┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄ │              │▓   Reinsurance          │
│ 11:17 AM  [RETAIL]      │              │▓ Newswire               │
│ …3 rows on mobile       │              │▓ Market Intelligence    │
│ ┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄ │              │▓ Research               │
│ [ View all news → ]     │              │▓ Why RAP                │
├─────────────────────────┤              │▓                        │
│▒ 10 RAP RESEARCH        │              │▓ ┌─────────────────┐    │
│▒ ┌───────────────────┐  │              │▓ │Profit Calculator│    │
│▒ │  REPORT COVER     │  │              │▓ └─────────────────┘    │
│▒ │  3:4, capped      │  │              │▓  ↑ pinned to foot      │
│▒ │  at 260px         │  │              └─────────────────────────┘
│▒ └───────────────────┘  │
│▒ Furniture retail has   │
│▒ changed. ╱Protection   │
│▒ has to change with it.╱│
│▒ [ Read research → ]    │
│▒ [ Download report ]    │
├─────────────────────────┤
│ 11 WHY RAP              │
│ Built around ╱furniture │
│ retail.╱                │
│ ▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔ │
│ FURNITURE FOCUS         │
│ Programs built for …    │
│ ┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄ │
│ …8 items, 1 per row     │
│ ┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄ │
│ 4.5 ★ RAP Google rating │
├─────────────────────────┤
│▓ 12 FINAL CTA           │
│▓ You already have the   │
│▓ customer.              │
│▓ ╱Let's improve the     │
│▓ economics.╱            │
│▓ [ Profit Calculator → ] │
│▓ [ Talk to RAP ] → #contact
├─────────────────────────┤
│▓ 13 FOOTER              │
│▓ CONTACT          ← R6  │
│▓ Talk to Risk Assurance │
│▓ Partners.              │
│▓ ┌─────────────────────┐│
│▓ │ I'm a dealer      →││
│▓ ├─────────────────────┤│
│▓ │ I have a plan     →││
│▓ ├─────────────────────┤│
│▓ │ Media or other    →││
│▓ └─────────────────────┘│
│▓ PHONE                  │
│▓ 1.800.732.5856         │
│▓ EMAIL                  │
│▓ sales@raptns.com       │
│▓ HOURS                  │
│▓ 8:00 AM – 6:00 PM,     │
│▓ Monday–Friday, EST     │
│▓ ┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄ │
│▓ RISK ASSURANCE PARTNERS│
│▓ ▸ PROGRAMS             │
│▓ ▸ INTELLIGENCE         │
│▓ ▸ COMPANY              │
│▓ ▸ CUSTOMER             │
│▓ ▸ DEALER               │
│▓  ↑ 5 accordions        │
│▓ © 2026 RAP             │
│▓ FurnitureRx is a       │
│▓ product of RAP.        │
└─────────────────────────┘
```

## Mobile-specific rules

| # | Desktop | Mobile | Why |
|---|---|---|---|
| 00 | 38px bar, 5 links + `CUSTOMERS` label | **R3(a): slim 32px strip survives**, carrying `FILE A CLAIM` + `DEALER LOGIN →` only | revision 1 hid the bar entirely, which put the two highest-intent actions on the site two taps deep behind a drawer scroll. 32px is ~5% of a 667px viewport and the correct trade. `LOCKED_WIREFRAME` §4 lists Utility as item 1 of the mobile sequence, so this moves back toward the lock |
| 00→drawer | — | `CUSTOMERS` label, Manage My Plan, Customer Support, Contact + the two strip links repeat at the **top** of the drawer | **R3(b)** — previously at `margin-top:auto`, i.e. below the drawer's own fold on a 667px screen, past seven Playfair-30px nav items |
| 01 | 84px, condenses to 64px with `Dealer Login →` | 64px, hamburger; primary CTA lives in the drawer foot | **R4** applies at ≥1024px. Below that the utility strip (R3a) carries the same two functions persistently |
| 02 | 6/6 split | copy first, R2 strip, figure below | the sentence is the message; the figure supports it |
| 02 R2 strip | 3 columns, hairline dividers | 3 rows, hairline-separated, ~300px | parity is preserved by identical row treatment. If the mobile cost is later judged too high, the fallback is a single horizontally-scrolling row of chips (~90px) |
| 03 | 4 tiles across | 4 tiles stacked, full width | tiles keep the 2px ink rule so the row still reads as one data object |
| 04 | converging fan | vertical stack of six cost rows converging into one arrow | a six-way fan is illegible under 400px; the "many → one" reading is preserved |
| 05 | 3 across | stacked 01 → 02 → 03 | order preserved; all three keep identical height treatment so none reads as primary |
| 06 | horizontal chain | vertical chain, but the **two branches stay side-by-side** | stacking the branches would rank Multi-Year above FurnitureRx or vice versa; side-by-side is the only arrangement that keeps them peers |
| 07 | copy left / kiosk right | copy first, kiosk panel below | dealer argument before product proof, consistent with dealer-first ordering |
| 08 | 3-col public strip | 3 stacked rows | the gated panel keeps its blur and lock chip at every width |
| 09 | 5 rows, 88px time column | 3 rows, timestamp above headline | the fixed time column would consume 25% of a 375px line |
| 10 | cover left / copy right | cover above copy, capped 260px wide | cover is an identity object, not a hero image |
| 11 | 4×2 | 1×8 with hairlines | |
| 12 | buttons inline | buttons full-width stacked, primary first | |
| 13 contact | routes 5 cols / details 7 cols | routes stacked full-width, then phone / email / hours stacked | **R6** — the three routing choices stay above the details so a consumer self-selects before reading a dealer phone number |
| 13 | 5 columns | 5 accordions, collapsed by default | |

## Responsive breakpoint behavior

| Width | Layout |
|---|---|
| ≥1280 | full 12-col, 1240px content |
| 1024–1279 | 12-col, fluid content, header nav intact |
| 768–1023 | header collapses to hamburger; 3-up grids → 2-up; hero 7/5 |
| 480–767 | single column throughout; section padding 64px |
| <480 | single column; padding 48px; display-1 clamps to 34px |

Verified in the prototype at 320 / 375 / 414 / 768 / 1024 / 1440 / 1920.
