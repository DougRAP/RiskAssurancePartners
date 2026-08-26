# Risk Assurance Partners — DESIGN SYSTEM

**Phase 2 / UI-UX deliverable 2 of 5.**
**Revision 6 — 2026-08-26.** DECISION 042: three components added, built from existing tokens —
**support popup** (`.sup`, centred dialog with `aria-modal`, focus trap, Esc-to-close, ember top
rule; hours line with a live open/closed `.hchip` computed in ET; primary File a Claim, secondary
Chat with an Agent, phone at Playfair 26px), **chat panel** (`.chat`, right-side slide-in on ink
header with `.msg` bubbles, typing indicator, agent-connecting state and an offline variant
carrying phone + File a Claim + leave-a-message), and the **pre-chat form** (`.pf`, Name required
plus at least one of email/phone, validated inline). Popup + chat ship as one byte-identical
block on all six public pages. `admin.html` reuses the tokens in a deliberately utilitarian
console layout (inbox with unread badges, pinned customer contact, reply box, End Session,
midnight-ET purge note, muted alerts indicator) and is noindex, direct-URL only, never linked
from public navigation. All states are static prototype demos — no transport, no persistence.
No token, typeface, scale, or grid value changed.
**Revision 5 — 2026-08-25.** DECISION 039: the system now spans four prototype pages
(`home` · `programs` · `newswire` · `economics-gate`). Shared chrome — utility bar, sticky
condensing header, drawer, contact block, footer — is identical on every page; the condense
script publishes the live header height as `--hdr-h` so page-level sticky elements (the
Programs section-jump strip, the Newswire filter rail) dock directly beneath it at both 84px
and 64px. Three components added, all built from existing tokens: **coverage grid** (real
`<table>`, `BASIC | PREMIUM` columns, `✓` in `--rap-ember-700` / `—` in `--rap-slate-300`, both
`aria-label`led), **mini calculator** (two editable inputs, Playfair tabular results,
`aria-live` region, mandatory illustrative caption, gated-tool CTA), and **placeholder wrap**
(dashed `--rap-ember` border + ribbon marking any block awaiting owner content). No token,
typeface, scale, or grid value changed.
**Revision 4 — 2026-08-25.** DECISIONS 037–038: the economic-paths row carries **four** cards,
not three. `.paths` is `repeat(4,1fr)` desktop → `1fr` at ≤900px. **Four in a row on desktop,
stacked below — there is no 2×2 stage** (DECISION 038); 4-across holds to ~900px, and below
that the serif titles break down so the row goes straight to stacked. Cards keep their vertical
form at every width so the parity rule below still holds, and the former horizontal-card
treatment at ≤1024px is retired. Standard Programs is added to the orientation
strip, Programs dropdown, drawer, and footer at full label. Parity rule extended to four:
identical border, padding, title size, and CTA across all four; **no ember rule on any card in
this row.** No token, typeface, scale, or grid-gutter value changed.
**Revision 3 — 2026-08-25.** DECISIONS 029–032: primary CTA relabelled **"Profit Calculator"**
and made persistent on mobile (§4.1, §4.2); two-axis program block added to the orientation
strip (§4.2b); rating block added (§4.3b); FurnitureRx point list added (§6). No token,
typeface, scale, or grid value changed.
**Revision 2 — 2026-08-24.**

**Palette, typography, spacing and layout are owner-approved as-is and are frozen.** Revision 2
changes no token, no typeface, no scale value, and no grid value. It adds two components and
revises navigation behavior for the R1–R6 clarity set (DECISIONS 024–028,
LOCKED_WIREFRAME v1.1). It does not change the site map, the homepage sequence, the brand
hierarchy, or any business fact.

Revision 2 additions: §4.2 navigation (utility bar contrast + `CUSTOMERS` label + Contact +
mobile persistence + condensed-header utility), §4.2b orientation strip, §4.2c contact block.

Reference implementation: `prototype-ui/home.html`, `prototype-ui/economics-gate.html`.

---

## 1. Where the palette comes from

Every color below is either (a) pixel-sampled from an existing RAP-owned surface, or
(b) a neutral/semantic value derived for legibility. No invented brand hues.

| Sampled from | Value | Source |
|---|---|---|
| RAP corporate site header/footer navy | `#204374` | `Current_website_image2.png`, dominant non-white color |
| FurnitureRx kiosk dark band | `#0C172A` | kiosk screenshot, utility bar + trust band |
| FurnitureRx kiosk action orange | `#C8581B` | kiosk buttons, eyebrow labels, italic accent on light |
| FurnitureRx kiosk gold | `#C19541` | kiosk italic accent on dark ("*our service.*") |
| FurnitureRx kiosk cream | `#FCF8F5` | kiosk Care Kits / editorial ground |
| FurnitureRx kiosk cool grey | `#F3F5F8` | kiosk hero + FAQ ground |

The two brands already share a system: **a near-black navy ground, an orange accent on
light, a gold accent on dark, and a high-contrast serif for the emotional line.** The
corporate blue `#204374` is the piece the kiosk does not have, and it is what makes the
result read as Risk Assurance Partners rather than as FurnitureRx. It is therefore
reserved for corporate identity and for the primary data series in charts.

### 1.1 Token set

```css
:root {
  /* Ground / surface */
  --rap-ink:        #0C172A;  /* dark ground, primary text on light */
  --rap-ink-800:    #16243C;  /* raised surface on ink, panel fill */
  --rap-ink-700:    #22334F;  /* hairline / border on ink */
  --rap-paper:      #FFFFFF;  /* default page ground */
  --rap-mist:       #F3F5F8;  /* DATA ground (Market Pulse, Market Intelligence) */
  --rap-cream:      #FCF8F5;  /* EDITORIAL ground (Research) */

  /* Corporate identity */
  --rap-blue:       #204374;  /* RAP corporate brand blue — logo lockup, chart series 1 */
  --rap-blue-600:   #2E5A96;  /* interactive blue, hover, secondary series */
  --rap-blue-050:   #E8EEF6;  /* blue tint fill, chart area fill */

  /* Product / action accent (FurnitureRx DNA) */
  --rap-ember:      #C8581B;  /* accent: italic display word, rules, large numerals */
  --rap-ember-700:  #A3450F;  /* BUTTON FILL and small-text link — AA-safe (see 1.2) */
  --rap-ember-050:  #FBEFE8;  /* tint fill */

  /* Editorial accent on dark */
  --rap-brass:      #C19541;  /* italic display word on ink, Research accent */
  --rap-brass-050:  #F7F0E2;

  /* Neutral ramp */
  --rap-slate-700:  #3D4A5C;  /* secondary text on light */
  --rap-slate-500:  #64748B;  /* tertiary text, mono metadata */
  --rap-slate-300:  #C3CBD6;  /* strong hairline */
  --rap-slate-200:  #DFE4EB;  /* default hairline / divider */
  --rap-slate-100:  #EEF1F5;  /* chart gridline, disabled fill */

  /* Semantic data */
  --rap-up:         #1E6F50;
  --rap-down:       #A8331F;
  --rap-flat:       #64748B;
  --rap-live:       #C8581B;  /* Newswire LIVE pulse */
}
```

### 1.2 Contrast rules (WCAG AA, measured)

| Pair | Ratio | Permitted use |
|---|---|---|
| `--rap-ink` on `--rap-paper` | 17.0 : 1 | anything |
| `--rap-slate-700` on `--rap-paper` | 9.0 : 1 | body, secondary |
| `--rap-slate-500` on `--rap-paper` | 4.8 : 1 | metadata ≥ 14px only |
| `--rap-ember` on `--rap-paper` | **4.31 : 1** | large text only (≥24px, or ≥18.7px bold), rules, fills |
| `--rap-ember-700` on `--rap-paper` | 6.14 : 1 | **all** text incl. links; white-on-fill buttons |
| `--rap-brass` on `--rap-ink` | 6.53 : 1 | all text on dark |
| `--rap-ember` on `--rap-ink` | 4.16 : 1 | large text only on dark — prefer brass |
| `--rap-blue` on `--rap-paper` | 8.3 : 1 | all text |

**Rule:** `--rap-ember` is a *display* color. Anything at body size that must be orange
uses `--rap-ember-700`. On ink grounds the accent is `--rap-brass`, never `--rap-ember`
at body size. This mirrors exactly what the kiosk already does.

### 1.3 Surface semantics (replaces decorative striping)

Sections are **not** alternately shaded. Separation is spacing plus a 1px
`--rap-slate-200` hairline. A non-default ground is only used when it carries meaning:

| Ground | Meaning | Homepage sections |
|---|---|---|
| `--rap-paper` | default narrative | 05, 07, 09, 11 |
| `--rap-mist` | **live/quantitative data** | 02 Hero, 03 Market Pulse, 08 Economics teaser |
| `--rap-cream` | **editorial / research** | 10 RAP Research |
| `--rap-ink` | **argument pivot & conversion** | 00 Utility, 04 Dealer Problem, 12 Final CTA, 13 Footer |

Three ink moments on the page, deliberately placed. The kiosk uses exactly one; a longer
B2B page supports the pivot + close + footer pattern.

---

## 2. Typography

### 2.1 Typefaces

| Role | Typeface | Weights | Why |
|---|---|---|---|
| Display / editorial | **Playfair Display** | 400, 500, 600, 700 + italics | Closest Google-hosted match to the high-contrast Didone display serif already in the kiosk wordmark and headlines. Carries the "editorial research" half of the brief. Italic is the accent device. |
| Interface / body | **Inter** | 400, 500, 600, 700 | Matches the kiosk body face. Neutral, excellent at 14–18px, real tabular figures. |
| Data / wire | **IBM Plex Mono** | 400, 500, 600 | Timestamps, tickers, source lines, deltas, calculator fields. Supplies the "financial intelligence terminal" register without introducing a third voice. **This is an addition beyond sampled kiosk DNA — flagged in DEVIATION_NOTES §D4.** |

```html
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..700;1,400..700&family=Inter:wght@400..700&family=IBM+Plex+Mono:wght@400;500;600&display=swap" rel="stylesheet">
```

Fallbacks: `Playfair Display, "Iowan Old Style", Georgia, serif` ·
`Inter, "Helvetica Neue", Arial, sans-serif` · `"IBM Plex Mono", ui-monospace, monospace`.

### 2.2 Scale

Fluid via `clamp()`. Ratio ≈ 1.25 (major third) at desktop, compressing to ≈1.2 on mobile.

| Token | Face | Desktop | Mobile | Line | Tracking | Use |
|---|---|---|---|---|---|---|
| `--fs-display-1` | Playfair 500 | 76px | 40px | 0.98 | −0.02em | Hero H1 |
| `--fs-display-2` | Playfair 500 | 56px | 32px | 1.02 | −0.02em | Section headline |
| `--fs-display-3` | Playfair 500 | 40px | 27px | 1.08 | −0.01em | Sub-headline, big stat |
| `--fs-stat` | Playfair 500 | 52px | 36px | 1.0 | −0.01em | Stat-tile value, price |
| `--fs-h3` | Inter 600 | 22px | 20px | 1.25 | −0.01em | Card title, Newswire headline |
| `--fs-h4` | Inter 600 | 17px | 16px | 1.3 | 0 | Sub-heads, table headers |
| `--fs-lead` | Inter 400 | 20px | 17px | 1.55 | 0 | Hero/section lead paragraph |
| `--fs-body` | Inter 400 | 16px | 16px | 1.6 | 0 | Body |
| `--fs-small` | Inter 400 | 14px | 14px | 1.5 | 0 | Captions, secondary |
| `--fs-mono` | Plex Mono 500 | 13px | 12px | 1.4 | 0.01em | Timestamps, deltas, values |
| `--fs-eyebrow` | Inter 600 | 12px | 11px | 1.2 | **0.10em** | UPPERCASE eyebrow labels |

Measure: body copy caps at **68ch**; Research long-form caps at **66ch**; hero lead at
**46ch**. Never full-bleed paragraphs.

### 2.3 The accent-italic device (core brand move)

Every major headline is one plain sentence plus **one italic accent phrase**, colored
`--rap-ember` on light and `--rap-brass` on dark. This is lifted directly from the kiosk
("Get the same coverage, *monthly.*" / "2M households trust *our service.*"). It is the
single strongest carry-over of existing product DNA and should be applied consistently:

- Hero: "Your expenses recur every month. *Your furniture sale doesn't.*"
- Section 06: "They may be saying *not another large purchase today.*"
- Section 12: "You already have the customer. *Let's improve the economics.*"

Limit: **one italic phrase per headline.** Never italicize a whole headline.

### 2.4 Numerals

Playfair Display for hero/stat numerals (the kiosk sets `4.5★ / 24/7 / 2M+` this way).
Inter/Plex Mono with `font-variant-numeric: tabular-nums` for anything in a table, chart
axis, delta chip, or calculator field, so columns align.

---

## 3. Spacing, grid, layout

### 3.1 Spacing scale (4px base)

`--s-1:4 · --s-2:8 · --s-3:12 · --s-4:16 · --s-5:24 · --s-6:32 · --s-7:48 · --s-8:64 · --s-9:96 · --s-10:128 · --s-11:160`

Section vertical rhythm: `--s-10` (128px) desktop top/bottom, `--s-8` (64px) at ≤768px.
Ink sections get `--s-11` / `--s-9`. Heading→lead = `--s-4`; lead→content = `--s-7`.

### 3.2 Grid

- 12 columns, gutter 24px desktop / 20px tablet / 16px mobile.
- Content max-width **1240px**; page margin 48px desktop, 24px mobile.
- A `--wide` container at 1440px is available for the Newswire and Market Pulse bands only.
- Breakpoints: `sm 480 · md 768 · lg 1024 · xl 1280`.
- Standard splits: hero 6/6 · FurnitureRx 5/7 (copy/product) · Research 4/8 (cover/copy) ·
  Three Paths 4/4/4 · Market Pulse 3/3/3/3 · Why RAP 3/3/3/3 over two rows.

### 3.3 Radius, borders, elevation

- `--radius-sm: 2px` (chips, inputs, buttons) · `--radius-md: 4px` (cards, panels). Nothing
  rounder. The kiosk is near-square; pills would read as generic SaaS.
- Borders are the primary structural device: `1px solid var(--rap-slate-200)`.
- A **2px `--rap-ink` top rule** marks a data object (stat tile, calculator panel,
  Newswire block). A **2px `--rap-ember` top rule** marks a FurnitureRx-owned object.
- Elevation: essentially none. One shadow token only, for the mobile drawer and sticky
  header: `0 1px 0 var(--rap-slate-200), 0 8px 24px rgba(12,23,42,.08)`. No card shadows.

---

## 4. Components

### 4.1 Buttons

| Variant | Fill | Text | Border | Use |
|---|---|---|---|---|
| Primary | `--rap-ember-700` | `#FFF` | none | `Profit Calculator →` (DECISION 032 — the single primary label sitewide), form submit |
| Secondary | transparent | `--rap-ink` | 1px `--rap-ink` | `How RAP Helps`, `Talk to RAP` |
| Primary on ink | `--rap-ember-700` | `#FFF` | none | Final CTA |
| Secondary on ink | transparent | `#FFF` | 1px `rgba(255,255,255,.45)` | Final CTA pair |
| Quiet link | — | `--rap-ember-700` | 1px bottom | `Learn more →`, `Source →` |

**Primary CTA label** is `Profit Calculator →` in every position — header, hero, Section 08
teaser, final CTA, and mobile drawer. One primary conversion verb sitewide. The gated tool it
opens keeps its own brand, **RAP Dealer Economics Calculator**; the button is the door, the
brand is the room. Never merge the two labels.

**The primary CTA never disappears responsively** (R9.2 / DECISION 032). It compacts instead:
15px/28px at ≥1024px, 13px/16px at ≤1024px, 12px/12px at ≤680px, `min-height:44px` throughout.

Metrics: 14px 28px padding, `--radius-sm`, Inter 600 at 15px, sentence case, trailing
`→` on any forward action. Hover: ember-700 → `#8E3B0C`; secondary fills `--rap-ink` with
white text. Focus: `outline: 2px solid var(--rap-blue-600); outline-offset: 2px` — never
removed. Active: `translateY(1px)`. Minimum target 44×44 on touch.

### 4.2 Navigation

**Utility bar** (`--rap-ink`, 38px): Plex Mono **13px** `.08em` uppercase at
`rgba(255,255,255,.88)` — one contrast step above revision 1, which was legible but
under-weighted for the two highest-intent actions on the site.

- Left cluster is prefixed with a `CUSTOMERS` label in `--rap-slate-500` at 11px `.12em`, with
  a 1px `--rap-ink-700` right divider: File a Claim · Manage My Plan · Customer Support.
  Deliberately **not** "FurnitureRx customers" — Multi-Year customers file claims through the
  same functions, so that label would be factually wrong.
- Right cluster: `Contact`, then `Dealer Login →` in `--rap-brass` inside a 1px
  `rgba(193,149,65,.55)` hairline box so it reads as an action rather than a link. Fills brass
  with ink text on hover.
- Still visually secondary to the dealer narrative at 38px of ink — findable, not loud.
- **Mobile (≤680px):** the bar does **not** disappear. It slims to 32px and carries
  `FILE A CLAIM` + `DEALER LOGIN →` only; the label and the three secondary links hide and
  reappear at the top of the drawer.

**Primary header** (white, 84px, sticky): RAP wordmark left (mark + "RISK ASSURANCE
PARTNERS" in Playfair 500 with "PROTECTION PROGRAMS FOR HOME FURNISHINGS RETAIL" in Plex Mono 9px `.18em` beneath —
the existing corporate lockup, not redesigned). Nav right in Inter 500 15px `--rap-ink`,
32px gaps, 2px `--rap-ember` underline on hover/active. Primary CTA button at the far right.

**Condensed state** (`.is-condensed`, scrollY > 40): height 84px → 64px, the
"PROTECTION PROGRAMS FOR HOME FURNISHINGS RETAIL" line drops — freeing exactly the space required — a bottom hairline
and soft shadow appear, and the header **gains `Dealer Login →`** in a 1px `--rap-slate-300`
box plus `File a Claim` at ≥1280px only. Without this the utility functions exist for one
screen out of roughly eleven. Transition 160ms; `prefers-reduced-motion` removes the
transition, never the behavior.

`Programs` is an **anchor with a real destination** (`#paths`, or `/programs` once program
pages exist), not a button that does nothing on click. It opens a 3-item dropdown panel on
hover and focus-within (1px border, 4px radius, each item = name + one-line descriptor), and
each item points at a **distinct** destination.

**Mobile header** (≤1024px): the nav collapses to a hamburger but the **primary CTA stays in
the bar** (R9.2). To make room without dropping the corporate wordmark at ≤680px: the mark
shrinks 34px → 30px, the "PROTECTION PROGRAMS FOR HOME FURNISHINGS RETAIL" line hides, and the wordmark is allowed to
wrap to two lines at 14px. The condensed-header utility cluster stands down below 1024px, since
the slim utility strip already carries File a Claim and Dealer Login persistently.

**Mobile nav** (≤1024px): hamburger opens a full-height `--rap-ink` drawer, closing on `Esc`.
Order inside the drawer is deliberate:

1. **Utility links first**, at the top — `CUSTOMERS` label, the four customer/dealer functions,
   and Contact, in Plex Mono 13px. Previously these sat at `margin-top:auto`, which on a 667px
   screen put them below the drawer's own fold, behind a scroll past seven Playfair-30px items.
2. Primary nav in Playfair 30px, Programs expanded inline as an indented list (no nested
   accordion — three items do not justify a second tap).
3. Primary CTA pinned as a full-width bar at the drawer foot.

### 4.2b Orientation strip (hero foot)

A **directory object**, not a pitch. It exists to answer "what is this company, who is it for,
what do they sell" inside the first viewport, and its styling is what keeps it from pre-empting
the Section 05 argument.

```
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔  ← 2px --rap-ink top rule
Owner descriptor, Inter 400 17px, --rap-slate-700, max 92ch
┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄  ← 1px --rap-slate-200
SUBSCRIPTION      │ MULTI-YEAR        │ REINSURANCE     ← Plex Mono 10px .10em
FurnitureRx       │ Multi-Year Prot.  │ Reinsurance     ← Inter 600 15px
one line of desc  │ one line of desc  │ one line of desc ← Inter 400 14px
View →            │ View →            │ View →          ← quiet link 13px
┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄
Footnotes, Plex Mono 11px .06em, --rap-slate-500
```

Rules:
- **No fill, no card, no shadow, no button.** Hairline column dividers only. Headline weight is
  never used here — the section H1 above it must stay dominant.
- **Strict parity across the three items:** identical column width, label treatment, name
  weight, description length band, and link. **No ember rule on the FurnitureRx item** — the
  ember rule marks FurnitureRx-owned objects (§3.3) and would break parity in a row where the
  three paths must read as peers.
- **Carries no economics.** No price, no commission, no coverage terms, no claims language.
  That is what preserves Sections 07 and 08.
- Descriptor copy is owner-approved and used **verbatim** (DECISION 025). It is not a slot for
  UI-agent wordsmithing.
- Closing footnote line states the FurnitureRx → RAP relationship. Keep the footer instance too.
- Responsive: 3 columns → 3 hairline-separated rows below 860px.

**Two-axis block** (DECISION 029), appended below the three program items:

```
PROTECTION PLAN TYPES          │ UNDERWRITING TYPES
— how the customer buys        │ — who keeps the underwriting profits
Subscription — $19.99 a month, │ Reinsurance — the dealer shares in the
cancel at any time.            │ underwriting profits and gets tax benefits.
Multi-Year — on average $300   │ Standard — RAP keeps them.
one time, prorated share back. │
```

- Two columns, `--rap-slate-200` top rule, mono 10px labels, Inter 14px values, program names
  in Inter 600 `--rap-ink`. Stacks below 860px.
- This exists to resolve a real comprehension trap: the descriptor names **four** program words
  while Section 05 shows **three** cards. The block states that these are two dimensions that
  combine, not four competing products. Without it a reader who counts is left confused.
- **Standard gets no card in Section 05 and no entry in the three-item row above.** It is an
  underwriting type, not an economic path.
- Facts introduced here are owner-approved and appear nowhere else on the homepage: Multi-Year
  averages ~$300 one time with a prorated refund; Reinsurance carries dealer tax benefits.

### 4.2c Contact block

Lives inside the footer region (Section 13) with `id="contact"`, so no fifteenth homepage
section is created. It is the single Contact destination for the utility bar, the drawer, the
footer Company group, and `Talk to RAP`.

- **Three routing choices** as bordered rows on `--rap-ink`: *I'm a dealer* → the economics
  gate; *I have a protection plan* → kiosk claim/manage; *Media or other* → email. Each is
  title + one-line descriptor + a brass `→`. Border lifts to `--rap-brass` on hover.
- **Details column**: phone, email, hours as a definition list, each on a 1px
  `--rap-ink-700` top rule, label in Plex Mono 11px `--rap-brass`, value in Inter 20px.
  Phone is `tel:`, email is `mailto:`.
- Contact details are owner-approved (DECISION 027) and must not be altered or supplemented.
- A `.pending-owner` chip (dashed border, Plex Mono 11px, `--rap-slate-500`) is available for
  any contact field the owner has **not** supplied. Never invent a value to fill the slot.
- Contact is **not** in primary navigation — MASTER_SPEC warns against reverting to
  *About → Features → Products → Contact*, and the seven-item nav order is locked.

### 4.3 Stat tile (Market Pulse / Market Intelligence)

```
┌────────────────────────────  ← 2px --rap-ink top rule
│ FURNITURE RETAIL SALES        ← eyebrow, Inter 600 12px .10em, --rap-slate-500
│
│ $11.20B                       ← Playfair 500 52px, --rap-ink, tabular
│ ▼ 4.5%  vs 2022 run rate      ← Plex Mono 13px, --rap-down + glyph + label
│
│ ────────────────────────      ← 1px --rap-slate-200
│ CENSUS/FRED · UPD 08 AUG      ← Plex Mono 11px .06em, --rap-slate-500
└────────────────────────────
```

Rules: value never wraps; delta is **always** glyph + sign + number (never color alone);
source and last-updated are mandatory on every tile — an unsourced number is a bug.
Stale state: source line turns `--rap-slate-300` and appends `· STALE`. Error state: value
renders as `—` with `DATA UNAVAILABLE` in the source line. Never render an empty tile.

### 4.3b Rating block (lead proof)

The Google rating is owner-designated as **very important** (DECISION 030), so it gets a
component rather than a footnote, and it opens Section 11 rather than closing it.

```
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔  ← 2px --rap-ink top rule
       ★★★★☆    RAP GOOGLE RATING           ← brass glyphs; Inter 600 12px .10em
4.5             One sentence on why it       ← Playfair clamp(56px,7vw,86px)
                matters to a dealer.         ← Inter 16px, --rap-slate-700, 56ch
┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄
```

Rules:
- The numeral is the largest on the page outside the hero. That is the prominence.
- Star glyphs are `--rap-brass` and decorative (`aria-hidden`); the value carries the meaning.
- The supporting sentence must state **why the rating matters to a dealer** — the customer
  researches the provider and the retailer wears the result — not merely that RAP is well rated.
  A number without a stake is a vanity metric.
- **4.5 only.** The 4.7 figure in the research draft is incorrect (DECISION 021).
- No testimonial carousel, no review screenshots, no third-party trust badges, and no new
  section — prominence comes from scale and position inside Section 11.
- Stacks to a left-aligned column below 680px, numeral scale preserved.

### 4.4 Trend indicator

`▲` up · `▼` down · `▶` flat, colored `--rap-up` / `--rap-down` / `--rap-flat`, followed by
a signed percentage in Plex Mono and an optional comparison label. Direction is carried by
the glyph so the component survives greyscale, color-blindness, and print.

### 4.5 Charts (inline SVG, no library dependency implied)

- Series order: `--rap-blue` → `--rap-ember` → `--rap-brass` → `--rap-slate-500`.
  Maximum four series; beyond that, use small multiples.
- Axes: one 1px `--rap-slate-300` baseline. Horizontal gridlines 1px `--rap-slate-100`,
  four maximum. No vertical gridlines, no chart border, no 3D, no gradients on bars.
- **Direct labelling over legends** wherever the series count is ≤3.
- Value labels in Plex Mono 12px above bars / at line end.
- Every chart carries a caption block: `Figure n.` (Plex Mono 11px `--rap-ember-700`) +
  one sentence + `Source · Updated` line.
- Sparklines: 1px stroke, no axis, no fill, 64×20, end-point dot only.
- Charts must be readable at 320px wide; below 640px, bar charts rotate to horizontal.

### 4.6 Diagram style (Sections 04 and 06)

Line diagrams only: 1px `--rap-slate-300` connectors, labels in Inter 600 13px uppercase,
nodes as bordered rectangles with 2px radius. Emphasis by weight and color, never by
illustration. No icons standing in for concepts. The Section 04 converging-costs figure and
the Section 06 decision-branch figure are the two places on the homepage where a drawn
figure is permitted — everywhere else, type and data do the work.

### 4.7 Form controls (Dealer Economics gate)

Input: 1px `--rap-slate-300`, 2px radius, 44px tall, Inter 16px (16px minimum prevents iOS
zoom), label above in Inter 600 13px, helper text Plex Mono 12px `--rap-slate-500`. Focus:
`--rap-blue-600` border + 3px `rgba(46,90,150,.18)` ring. Error: `--rap-down` border + text
message with a `!` glyph, never color alone. Required fields marked with a bullet in
`--rap-ember-700`, and the form states the six fields are all that is asked for.

### 4.8 Locked / gated treatment

Gated content is shown as a **real object behind a lock**, not hidden: the panel renders at
50% opacity with a 3px blur and `pointer-events:none`, under a centered lock chip
(`--rap-ink` fill, white Plex Mono 11px `.10em`, "REQUIRES APPROVED ACCESS"). Public numbers
sit *outside* the lock at full contrast. This shows there is a real model without exposing
it, which is the stated gate objective.

---

## 5. The three information products — distinct visual characters

They must never be told apart only by their headings. Each gets its own ground, face
hierarchy, density, and metadata grammar.

### 5.1 Newswire — *wire service*

**Question: what happened?**

- Ground `--rap-paper`. Full-width, no cards, no images, no thumbnails.
- Row grammar: `[HH:MM AM]  [CATEGORY]  Headline` then a one-sentence synopsis and
  `SOURCE — Publication →`.
- Timestamp in Plex Mono 13px `--rap-slate-500`, fixed 88px column, left-aligned, tabular.
- Category chip: 1px `--rap-slate-300`, 2px radius, Plex Mono 10px `.10em` uppercase,
  `--rap-ink`. Categories are the approved list (Furniture Retail, Manufacturers, Bedding,
  Housing, Economy, Consumer, Consumer Credit, Trade/Tariffs, Freight, M&A, Bankruptcies,
  Store Openings/Closings, Protection/Warranty, Retail Technology).
- Headline in **Inter 600** — deliberately *not* the serif. Newswire is utilitarian; the
  serif is reserved for RAP's own voice (Hero, Research). This is the clearest signal that
  Newswire is aggregated third-party news, not RAP editorial.
- Rows separated by 1px `--rap-slate-200`, 20px vertical padding. Dense; ~8 items visible
  per screen on the full page, 5 on the homepage.
- `LIVE` indicator: 6px `--rap-live` dot with a 2s opacity pulse (`prefers-reduced-motion`
  disables the pulse, dot remains) + `LIVE` in Plex Mono 11px `.10em`.
- Attribution is non-negotiable: publication name plus outbound link on every row. Synopsis
  is capped at two lines / ~180 characters — never a republished article.
- Full Newswire page adds a left category filter rail and a date-grouped `— TUE 08 AUG —`
  Plex Mono divider between days.

### 5.2 Market Intelligence — *data dashboard*

**Question: what is changing?**

- Ground `--rap-mist`. This is the only surface where a dashboard grid is permitted.
- Homepage Market Pulse = four stat tiles (§4.3) in a 3/3/3/3 row, plus one source line and
  a `Market Intelligence →` link. It is a preview, not the dashboard.
- Full page = a 2-up or 3-up grid of *metric cards*: stat tile header + a 240px-tall chart +
  a `Figure` caption + source/updated/next-update line.
- Numerals in Playfair for the headline value (RAP's voice stating the number), Plex Mono
  everywhere else (machine-read metadata).
- Chart palette per §4.5. One chart, one idea. No dual axes.
- Every card shows: latest value · trend vs prior period · source name · last updated ·
  historical series. All five are required by AGENT_RULES §16.
- Freshness is a first-class visual: a `UPD 08 AUG 2026` line in Plex Mono under every card,
  greying to `--rap-slate-300 · STALE` past the metric's expected cadence.

### 5.3 RAP Research — *editorial report*

**Question: what does it mean?**

- Ground `--rap-cream`. The only cream surface on the site — it reads as paper.
- Headline in Playfair 500 with a `--rap-brass` italic accent phrase.
- Long-form measure 66ch, body Inter 18px / 1.7, generous 40px paragraph rhythm.
- Section headings inside a report: Playfair 500 32px, preceded by a short Plex Mono
  `--rap-ember-700` eyebrow, with a 1px rule above.
- Figures: chart in a 1px `--rap-slate-200` frame on `--rap-paper` inside the cream ground,
  captioned `Figure 3.` in Plex Mono + sentence in Inter 15px `--rap-slate-700`.
- Pull-quote: Playfair 500 italic 30px, 2px `--rap-brass` left rule, no quotation marks.
- Every report has a **cover object**: portrait 3:4, `--rap-ink` ground, brass hairline
  border, Playfair title, `RISK ASSURANCE PARTNERS` in Plex Mono at the foot, and a month/
  year. It appears on the homepage, the Research index, and as the download thumbnail.
- Numbered source list at the foot of every report, matching the research draft's `[n]`
  convention, each with an outbound link. Research is where citations live.
- Homepage Research block = cover object (4 cols) + headline/description/CTA pair (8 cols).
  Nothing else. Research is occasional and should look considered, not fed.

**Separation rule:** these three never share a container, a card style, a heading style, or
a "latest from RAP" carousel. A visitor must be able to identify which product they are
looking at from a cropped screenshot.

---

## 6. FurnitureRx product treatment inside the RAP site

- The RAP wordmark is always the site identity. FurnitureRx appears as a **product lockup**:
  `FurnitureRx` in Playfair 600 + `A PRODUCT OF RISK ASSURANCE PARTNERS` in Plex Mono 10px
  `.10em` `--rap-slate-500` beneath. Never larger than the RAP header wordmark.
- FurnitureRx-owned objects are marked by the 2px `--rap-ember` top rule (§3.3), which is
  what distinguishes them from RAP-corporate objects (2px `--rap-ink`).
- Product proof is the **actual kiosk interface**, rendered as a real UI panel on cream with
  the kiosk's own type and orange button — not a screenshot in a laptop mockup, not a
  stylized illustration. It is the same design system, which is why it fits.
- **Do not mirror kiosk coverage copy onto the corporate site** (DECISION 031). `$5,000 total
  coverage`, `24/7 claim filing`, component lists, and repair/replace language are point-of-sale
  detail and the wrong emphasis for a dealer-facing page. The kiosk panel shows only the two
  lines that carry the buying decision, closed by `FULL COVERAGE TERMS SHOWN AT CHECKOUT`.
- **FurnitureRx point list** (`.frx__pts`) — the approved Section 07 message, grouped
  `For the customer` / `For the dealer`, each item a 2px `--rap-ember` left rule with a bold
  claim (Inter 600 17px) over one supporting line (Inter 14px `--rap-slate-700`):

  | Audience | Claim | Support |
  |---|---|---|
  | Customer | Just $19.99 a month | Same coverage as multi-year programs, paid monthly instead of upfront |
  | Customer | Cancel, start, restart at any time | The customer stays in control |
  | Dealer | Zero remit | The dealer pays RAP nothing to participate |
  | Dealer | Recurring commission revenue | $8 per successful monthly payment, for as long as the customer stays |

  "Same coverage as multi-year programs" is load-bearing — it is what stops a monthly price
  reading as a lesser product. The economics table beneath restates the same three numbers in
  active voice (**Customer pays / Dealer remits / Dealer earns**) as a scannable summary.
- Multi-Year Protection and Reinsurance are rendered with identical card weight, identical
  type sizes, and identical CTA treatment to FurnitureRx in Section 05. Visual parity is how
  the "three paths, not one product plus two footnotes" requirement is enforced. FurnitureRx
  gets the ember rule only where it is the subject of the section (07), never in the
  three-path row **and never in the §4.2b orientation strip**.
- **All four programs must be reachable everywhere they appear.** Each has a stable anchor
  (`#program-subscription`, `#program-multiyear`, `#program-reinsurance`, `#program-standard`)
  targeted by the header dropdown, the orientation strip, the drawer, and the footer. A program
  rendered at parity but left unclickable is a quiet form of the demotion the parity rule exists
  to prevent.
- **Reinsurance framing** (DECISION 028): Reinsurance is its own product, described as taking a
  share of the underwriting profits and building wealth over time — always paired with the
  unchanged caveat that its timing differs from commission income and it is not immediate
  profit. "Standard" describes a non-participating program where the vendor keeps the
  underwriting profits; it is **not** a fourth path and gets no card.

---

## 7. Motion

Purposeful only. Three permitted behaviors:

1. Sticky-header condense: 160ms height/shadow transition, driven by a scroll listener that
   toggles `.is-condensed` past 40px. The utility links it reveals (§4.2) appear without
   transition — a wayfinding element must not fade in.
2. Hover/focus state changes: 120ms color, 1px underline grow.
3. Newswire LIVE dot: 2s opacity pulse.

Optional, single instance: the hero economics figure may draw its monthly expense bars in
sequence once on load (600ms total, `ease-out`). Nothing else animates. No scroll-triggered
reveals, no parallax, no counters that tick up, no autoplaying carousels.

`@media (prefers-reduced-motion: reduce)` disables all of the above; every element renders
in its final state.

---

## 8. Accessibility baseline

- All text meets AA per §1.2; the ember/brass rules are the enforcement mechanism.
- Focus visible on every interactive element, 2px `--rap-blue-600`, offset 2px.
- Landmarks: `header/nav/main/section[aria-labelledby]/footer`. One `h1` per page; headings
  never skip a level.
- Charts and diagrams: `role="img"` with an `aria-label` stating the finding, plus a
  visible caption. Any chart whose meaning is not in the caption also needs a data table.
- Trend and error states carry a glyph, not color alone (§4.4, §4.7).
- Touch targets ≥44×44px; mobile inputs ≥16px font.
- Drawer traps focus and closes on `Esc`.
- The gated calculator region is `aria-hidden` and `inert` while locked, and the lock chip
  is the focusable element that explains why.

---

## 9. What this system deliberately does not do

Per MASTER_SPEC "Avoid" list, checked against the prototype:

| Prohibited | Status |
|---|---|
| Shield motifs / insurance clichés | none — no shield, no umbrella, no handshake |
| Generic sofa hero photography | none — the prototype contains **zero photographs** |
| Decorative icon grids | none — Section 11 "Why RAP" is typographic with hairlines |
| Excessive gradients | one, `--rap-ink → --rap-ink-800` at 4% on two ink bands |
| Glassmorphism | none |
| Cartoon illustration | none |
| Gratuitous animation | four behaviors total, §7 |
| Every section a SaaS dashboard | dashboard grammar confined to `--rap-mist` surfaces |
