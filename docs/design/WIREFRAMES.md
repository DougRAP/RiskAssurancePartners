# Risk Assurance Partners — HOMEPAGE WIREFRAMES (Desktop + Mobile)

**Phase 2 / UI-UX deliverable 1 of 5. Status: PROPOSED — requires owner approval.**

These wireframes implement the locked 14-section homepage sequence in
`docs/project/LOCKED_WIREFRAME.md` exactly. Section numbering below uses the
LOCKED_WIREFRAME numbering (00–13). No section is added, removed, merged, or reordered.

Layout notation: `│` column edge · `┄` hairline `1px --rap-slate-200` · `▓` ink ground ·
`░` mist ground · `▒` cream ground · blank = paper ground.

Grid: 12 columns, 1240px content width, 48px page margin. Mobile: single column, 24px margin.

---

# PART 1 — DESKTOP (1440px viewport / 1240px content)

## 00 — Utility Bar ▓ `--rap-ink`, 38px

```
▓─────────────────────────────────────────────────────────────────────────────▓
▓ FILE A CLAIM · MANAGE MY PLAN · CUSTOMER SUPPORT           DEALER LOGIN → ▓
▓─────────────────────────────────────────────────────────────────────────────▓
```

**Annotations**
- Plex Mono 12px `.08em` uppercase, `rgba(255,255,255,.72)`; `DEALER LOGIN →` in `--rap-brass`.
- Customer servicing is present on every page and above the fold, but at 38px of ink it is
  unambiguously secondary to the dealer narrative (MASTER_SPEC "easy to find, visually
  secondary").
- All four links resolve to kiosk.furniturerx.net routes (DECISION 023); route inventory is
  Phase 12, so the prototype uses `#` placeholders and labels them.
- Not sticky. Scrolls away; the sticky header retains only `Dealer Login`.

## 01 — Primary Header — white, 84px, sticky

```
┌─────────────────────────────────────────────────────────────────────────────┐
│ ┌──┐ RISK ASSURANCE PARTNERS                                                │
│ │▞▚│ VALUE THROUGH INNOVATION                                               │
│ └──┘                                                                        │
│        Dealer Economics  Programs ▾  Newswire  Market Intelligence          │
│        Research  Why RAP                        [ See My Economics → ]      │
└─────────────────────────────────────────────────────────────────────────────┘
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
- Wordmark is the existing RAP corporate lockup (mark + name + "VALUE THROUGH INNOVATION").
  Not redesigned. In the prototype the mark is a placeholder glyph; production uses the
  supplied logo asset.
- Nav order is locked and matches DECISION 009 exactly. Programs is the only dropdown.
- One primary CTA in the header: **See My Economics**. No secondary button competes with it.
- Sticky behavior: at scrollY > 40 the bar condenses to 64px, the tagline line hides, and a
  1px `--rap-slate-200` bottom rule appears.
- Dropdown items carry a one-line descriptor so the three paths read as peers, not as a
  product family under FurnitureRx.

## 02 — Hero ░ `--rap-mist`, ~640px

```
░─────────────────────────────────────────────────────────────────────────────░
░                                                                             ░
░ ◄─────────── 6 cols ───────────►    ◄─────────── 6 cols ───────────►        ░
░ THE ECONOMICS OF FURNITURE RETAIL                                           ░
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
░ [ See My Economics → ] [ How RAP    └───────────────────────────────────┘   ░
░                          Helps ]                                            ░
░                                                                             ░
░─────────────────────────────────────────────────────────────────────────────░
```

**Annotations**
- Opens with the dealer's economic problem. No FurnitureRx, no coverage, no `$19.99`, no
  RAP history, no furniture photography above the fold (DECISION 011).
- H1 = Playfair 500 76px, two sentences, second sentence italic `--rap-ember`.
- The figure is the preferred visual from the locked wireframe made literal: twelve monthly
  expense bars along a continuous baseline versus a single transaction spike, then a third
  register showing recurring value accumulating after the sale. It is a diagram, not
  decoration, and it is labelled **Illustrative** because it carries no data claim.
- Two CTAs, unequal weight: primary `See My Economics →`, secondary `How RAP Helps`
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
  universally immediate profit."
- Eyebrow is `RISK ASSURANCE PARTNERS` — the section is attributed to the master brand.

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
                                    │ ONLY PAY FOR WHAT YOU NEED          │
Turn some protection declines       │                                     │
into ╱recurring customer            │ Stain + Structure                   │
relationships.╱                     │ $19.99 /month                       │
                                    │                                     │
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔ 2px ember  │ ✓ Rips, burns, mechanical failure   │
CUSTOMER PAYMENT      $19.99/month  │ ✓ $5,000 total coverage             │
┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄            │ ✓ Repair first. Replace if needed.  │
DEALER REMIT          $0            │ ✓ 24/7 claim filing                 │
┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄            │                                     │
DEALER COMMISSION     $8 per        │ [ Save to cart → ] [ Checkout ]     │
                      successful    └─────────────────────────────────────┘
                      monthly       ACTUAL FURNITURERX CUSTOMER INTERFACE
                      payment       kiosk.furniturerx.net
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔

The dealer pays nothing to
participate.

[ FurnitureRx for Dealers → ]
[ See the customer experience ]
┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄
```

**Annotations**
- The right panel is the **live kiosk interface reproduced in markup** (not a screenshot,
  not a device mockup) — MASTER_SPEC calls for "actual product interfaces". Because the RAP
  design system is derived from the kiosk, it drops in natively.
- Only the `$19.99` subscription appears. No `from $9.99/mo`, no Care Kits, no Repair Safety
  Net on the homepage (DECISION 019). Care Kits/Safety Net live on the FurnitureRx program
  page, ranked below the subscription.
- The economics table is a 3-row definition list with hairlines, values right-aligned in
  Playfair. `$8` is labelled **dealer commission** per DECISION 020, with the
  "dealer pays nothing to participate" line stated separately so the two facts cannot be
  conflated.
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
░               [ Calculate My Opportunity → ]                                ░
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

 ▔▔▔▔▔▔▔▔▔▔▔▔▔▔    ▔▔▔▔▔▔▔▔▔▔▔▔▔▔    ▔▔▔▔▔▔▔▔▔▔▔▔▔▔    ▔▔▔▔▔▔▔▔▔▔▔▔▔▔
 FURNITURE FOCUS    CLAIMS            UNDERWRITING      TECHNOLOGY
 Programs built     ADMINISTRATION    RELATIONSHIPS     Enrollment,
 for furniture      Administered by   Programs are      billing, dealer
 dealers, not       RAP, not handed   backed by         reporting and
 adapted from       to a third party. underwriting      claims built
 another category.                    partners.         in-house.
 ┄┄┄┄┄┄┄┄┄┄┄┄┄┄    ┄┄┄┄┄┄┄┄┄┄┄┄┄┄    ┄┄┄┄┄┄┄┄┄┄┄┄┄┄    ┄┄┄┄┄┄┄┄┄┄┄┄┄┄
 CUSTOMER          DEALER SUPPORT     PROGRAM           MULTI-PROGRAM
 EXPERIENCE        Training and       EXPERTISE         CAPABILITY
 US-based service  materials for the  Subscription,     One partner for
 and self-serve    sales floor.       multi-year and    all three
 claim filing.                        reinsurance.      economic paths.

 ┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄
 4.5 ★  RAP Google rating
┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄
```

**Annotations**
- **No icons.** Eight capability statements as a typographic 4×2 grid with 2px ink top rules.
  Each has a one-sentence substantiation rather than a bare noun — this is what stops it
  becoming the "decorative icon grid" the spec prohibits.
- Only one quantified proof point: **4.5 stars** (DECISION 021). The `15+ Years` figure shown
  in the locked wireframe sketch is **not** in DECISIONS.md and is therefore omitted pending
  owner confirmation — see DEVIATION_NOTES §Q1.
- No superlatives, no market-share claims, no unsourced performance numbers.

## 12 — Final Conversion ▓ `--rap-ink`, ~480px

```
▓─────────────────────────────────────────────────────────────────────────────▓
▓                                                                             ▓
▓                      You already have the customer.                         ▓
▓            ╱Let's improve the economics of the transaction.╱                ▓
▓                                                                             ▓
▓            [ See My Economics → ]      [ Talk to RAP ]                      ▓
▓                                                                             ▓
▓  Access to the RAP Dealer Economics Calculator is reviewed by RAP Sales.    ▓
▓─────────────────────────────────────────────────────────────────────────────▓
```

**Annotations**
- Third and final ink moment. Centered, single column, no form embedded — the form lives
  behind `See My Economics` so the gate flow has one entry point across the whole site.
- Primary CTA is the same label and same styling as the header CTA. The site has exactly one
  primary conversion verb.

## 13 — Footer ▓ `--rap-ink`

```
▓─────────────────────────────────────────────────────────────────────────────▓
▓ ┌──┐ RISK ASSURANCE PARTNERS                                                ▓
▓ │▞▚│ VALUE THROUGH INNOVATION                                               ▓
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

---

# PART 2 — MOBILE (375px viewport, 24px margins)

Sequence is identical: 00→13. No section is reordered, collapsed into another, or dropped.

```
┌─────────────────────────┐   ┌─────────────────────────┐   ┌─────────────────────────┐
│▓ RAP        ☰          ▓│   │ 05  RISK ASSURANCE      │   │ 09 NEWSWIRE      ● LIVE │
│  ↑ 00+01 merge into one │   │     PARTNERS            │   │ ┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄ │
│    sticky 56px bar.     │   │ Three ways to create    │   │ 12:38 PM  [HOUSING]     │
│    Utility links move   │   │ more value from ╱the    │   │ Headline over two lines │
│    into the drawer.     │   │ same customer.╱         │   │ Synopsis one line       │
├─────────────────────────┤   │                         │   │ SOURCE →                │
│░ 02 HERO                │   │ ┌─────────────────────┐ │   │ ┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄ │
│░ THE ECONOMICS OF       │   │ │ 01 SUBSCRIPTION     │ │   │ 11:17 AM  [RETAIL]      │
│░ FURNITURE RETAIL       │   │ │ ▌ ▌ ▌ recurring     │ │   │ …3 rows on mobile       │
│░                        │   │ │ FurnitureRx …       │ │   │ ┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄ │
│░ Your expenses recur    │   │ │ Learn more →        │ │   │ [ View all news → ]     │
│░ every month.           │   │ └─────────────────────┘ │   ├─────────────────────────┤
│░ ╱Your furniture sale   │   │ ┌─────────────────────┐ │   │▒ 10 RAP RESEARCH        │
│░  doesn't.╱             │   │ │ 02 MULTI-YEAR       │ │   │▒ ┌───────────────────┐  │
│░                        │   │ │ …                   │ │   │▒ │  REPORT COVER     │  │
│░ Create more economic   │   │ └─────────────────────┘ │   │▒ │  (full width,     │  │
│░ value from customers   │   │ ┌─────────────────────┐ │   │▒ │   3:4, capped     │  │
│░ you already paid to    │   │ │ 03 REINSURANCE      │ │   │▒ │   at 260px)       │  │
│░ acquire.               │   │ │ …                   │ │   │▒ └───────────────────┘  │
│░                        │   │ └─────────────────────┘ │   │▒                        │
│░ [ See My Economics → ] │   │   ↑ stacked, order      │   │▒ Furniture retail has   │
│░ [ How RAP Helps      ] │   │     preserved 01→02→03  │   │▒ changed. ╱Protection   │
│░ ┌─────────────────────┐│   ├─────────────────────────┤   │▒ has to change with it.╱│
│░ │ Fig 1. expense bars ││   │ 06 WHAT CHANGED         │   │▒                        │
│░ │ vs one transaction  ││   │ The customer may not be │   │▒ [ Read research → ]    │
│░ │ (SVG scales to      ││   │ saying "no to           │   │▒ [ Download report ]    │
│░ │  320px, labels      ││   │ protection." …          │   ├─────────────────────────┤
│░ │  stay legible)      ││   │                         │   │ 11 WHY RAP              │
│░ └─────────────────────┘│   │ ┌─────────────────────┐ │   │ Built around ╱furniture │
├─────────────────────────┤   │ │ FURNITURE           │ │   │ retail.╱                │
│░ 03 MARKET PULSE        │   │ │   ↓                 │ │   │ ▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔ │
│░ THE MARKET MOVING      │   │ │ TAX                 │ │   │ FURNITURE FOCUS         │
│░ FURNITURE RETAIL       │   │ │   ↓                 │ │   │ Programs built for …    │
│░ ▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔ │   │ │ DELIVERY            │ │   │ ┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄ │
│░ FURNITURE RETAIL SALES │   │ │   ↓                 │ │   │ CLAIMS ADMINISTRATION   │
│░ $11.20B                │   │ │ FINANCING           │ │   │ …8 items, 1 per row     │
│░ ▼ 4.5% vs '22          │   │ │   ↓                 │ │   │ ┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄ │
│░ CENSUS/FRED · UPD AUG 8│   │ │ PROTECTION DECISION │ │   │ 4.5 ★ RAP Google rating │
│░ ▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔ │   │ └──────────┬──────────┘ │   ├─────────────────────────┤
│░ EXISTING-HOME SALES    │   │    ┌───────┴───────┐    │   │▓ 12 FINAL CTA           │
│░ 4.06M   ▶ 0.0% y/y     │   │    ▼               ▼    │   │▓ You already have the   │
│░ …4 tiles, 1 per row    │   │ ┌───────┐    ┌────────┐ │   │▓ customer.              │
│░                        │   │ │MULTI- │    │FURNITU-│ │   │▓ ╱Let's improve the    │
│░ [ Market Intelligence →]│   │ │YEAR   │    │RERX    │ │   │▓ economics.╱            │
├─────────────────────────┤   │ └───────┘    └────────┘ │   │▓                        │
│▓ 04 THE UNDERLYING MATH │   │   ↑ branch stays        │   │▓ [ See My Economics → ] │
│▓ You already paid to    │   │     side-by-side —      │   │▓ [ Talk to RAP ]        │
│▓ acquire ╱the customer.╱│   │     stacking it would   │   ├─────────────────────────┤
│▓                        │   │     imply a preference  │   │▓ 13 FOOTER              │
│▓ ┌─────────────────────┐│   │                         │   │▓ RISK ASSURANCE PARTNERS│
│▓ │ ADVERTISING         ││   │ Keep the sale that      │   │▓ VALUE THROUGH INNOV.   │
│▓ │ INVENTORY           ││   │ works. Add another way  │   │▓                        │
│▓ │ PAYROLL             ││   │ to say yes.             │   │▓ ▸ PROGRAMS             │
│▓ │ RENT                ││   ├─────────────────────────┤   │▓ ▸ INTELLIGENCE         │
│▓ │ FREIGHT             ││   │ 07 FURNITURERX          │   │▓ ▸ COMPANY              │
│▓ │ WAREHOUSING         ││   │ FurnitureRx             │   │▓ ▸ CUSTOMER             │
│▓ │  6 stacked rows,    ││   │ A PRODUCT OF RISK       │   │▓ ▸ DEALER               │
│▓ │  each with a rule   ││   │ ASSURANCE PARTNERS      │   │▓  ↑ 5 accordions        │
│▓ │  converging into ↓  ││   │                         │   │▓ ┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄ │
│▓ └──────────┬──────────┘│   │ Turn some protection    │   │▓ © 2026 RAP             │
│▓            ▼           │   │ declines into           │   │▓ Privacy · Terms        │
│▓ ┌─────────────────────┐│   │ ╱recurring customer     │   │▓ FurnitureRx is a       │
│▓ │ CUSTOMER PURCHASE   ││   │ relationships.╱         │   │▓ product of RAP.        │
│▓ └──────────┬──────────┘│   │                         │   └─────────────────────────┘
│▓            ▼           │   │ ▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔ │
│▓ How much economic      │   │ CUSTOMER   $19.99/month │
│▓ value does that        │   │ PAYMENT                 │
│▓ transaction create?    │   │ ┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄ │
│▓ ┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄ │   │ DEALER     $0           │
│▓ Every cost above       │   │ REMIT                   │
│▓ recurs. The            │   │ ┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄ │
│▓ transaction does not.  │   │ DEALER     $8 / payment │
└─────────────────────────┘   │ COMMISSION              │
                              │ ▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔ │
   ┌──────────────────────┐   │ [FurnitureRx for        │
   │▓ DRAWER (☰ open)     │   │  Dealers → ]            │
   │▓                     │   │ [See the customer exp.] │
   │▓ Dealer Economics    │   │                         │
   │▓ Programs            │   │ ┌─────────────────────┐ │
   │▓   FurnitureRx       │   │ │ ACTUAL KIOSK UI     │ │
   │▓   Multi-Year        │   │ │ FurnitureRx  [🛒]   │ │
   │▓   Reinsurance       │   │ │ Stain + Structure   │ │
   │▓ Newswire            │   │ │ $19.99 /month       │ │
   │▓ Market Intelligence │   │ │ ✓ … ✓ … ✓ …        │ │
   │▓ Research            │   │ │ [Save to cart →]    │ │
   │▓ Why RAP             │   │ └─────────────────────┘ │
   │▓ ┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄ │   │ ↑ moves BELOW copy on   │
   │▓ FILE A CLAIM        │   │   mobile: the argument   │
   │▓ MANAGE MY PLAN      │   │   precedes the proof     │
   │▓ CUSTOMER SUPPORT    │   ├─────────────────────────┤
   │▓ DEALER LOGIN →      │   │░ 08 DEALER ECONOMICS    │
   │▓                     │   │░ What could this mean   │
   │▓ ┌─────────────────┐ │   │░ for ╱your dealership?╱ │
   │▓ │See My Economics→│ │   │░ $19.99 / $0 / $8       │
   │▓ └─────────────────┘ │   │░   ↑ 3 rows, not 3 cols │
   │▓  ↑ pinned to foot   │   │░ ┌─────────────────────┐│
   └──────────────────────┘   │░ │ illustrative chart  ││
                              │░ └─────────────────────┘│
                              │░ ┌─────────────────────┐│
                              │░ │ 🔒 GATED (blurred)  ││
                              │░ └─────────────────────┘│
                              │░ [Calculate My          │
                              │░  Opportunity → ]       │
                              └─────────────────────────┘
```

## Mobile-specific rules

| # | Desktop | Mobile | Why |
|---|---|---|---|
| 00+01 | separate bars | one 56px sticky bar; utility links relocate to the drawer foot | 38px + 84px of chrome on a 667px screen is unacceptable; the links remain one tap away and stay visually secondary |
| 02 | 6/6 split | copy first, figure below | the sentence is the message; the figure supports it |
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
