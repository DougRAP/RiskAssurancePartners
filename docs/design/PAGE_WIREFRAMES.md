# Risk Assurance Partners — INTERIOR PAGE WIREFRAMES

**Phase 2 / UI-UX. Status: PROPOSED — owner approves layout before any shell coding.**
**Created 2026-08-25.** Authority: DECISIONS.md through **037**, LOCKED_WIREFRAME v1.1,
MASTER_SPEC, AGENT_RULES. Design system: `docs/design/DESIGN_SYSTEM.md` (rev 4).

Covers three deliverables:

1. **Program page template** — one shared template serving all four program pages, with a
   per-program variation note.
2. **Programs index** (`/programs`) — the destination the Programs nav item has never had.
3. **Newswire page** — the full wire.

Notation matches `WIREFRAMES.md`: `│` column edge · `┄` hairline `1px --rap-slate-200` ·
`▓` ink ground · `░` mist ground · `▒` cream ground · blank = paper ground.
Grid: 12 columns, 1240px content, 48px margin. Mobile: single column, 24px margin.

**`[NEEDS OWNER]`** marks any slot that would require a business fact not yet in DECISIONS.md.
Nothing in this document invents coverage terms, limits, eligibility, or economics.

---

# 0. Global chrome — identical on every page

Owner requirement: easy navigation everywhere. Every page below inherits, unchanged from
`home.html`:

```
▓ CUSTOMERS │ FILE A CLAIM · MANAGE MY PLAN · CUSTOMER SUPPORT              ▓
▓                                            CONTACT   [ DEALER LOGIN → ]   ▓  ← 00 utility, 38px ink
├──────────────────────────────────────────────────────────────────────────┤
│ ┌──┐ RISK ASSURANCE PARTNERS                                             │
│ │▞▚│   Dealer Economics  Programs ▾  Newswire  Market Intelligence       │
│ └──┘   Research  Why RAP                    [ Profit Calculator → ]      │  ← 01 header, 84px sticky
└──────────────────────────────────────────────────────────────────────────┘
   condensed (scrollY>40): 64px · gains FILE A CLAIM* + [ DEALER LOGIN → ]
   Programs ▾ now lists FOUR: FurnitureRx Subscription · Multi-Year Protection
                              · Reinsurance · Standard Programs
```

- Header is sticky and condenses at 40px; the primary CTA never disappears responsively.
- Footer is the five-group ink footer plus the `#contact` block (phone **1.800.732.5856**,
  **sales@raptns.com**, **8:00 AM – 6:00 PM, Monday–Friday, EST** — DECISION 027) and the
  "FurnitureRx is a product of Risk Assurance Partners" line.
- **Interior pages add two aids the homepage does not need:**
  - a **breadcrumb** directly under the header (`Home › Programs › Reinsurance`), Plex Mono
    12px `--rap-slate-500`, current page in `--rap-ink`;
  - a **section-jump rail** on pages taller than ~4 screens (program pages and Newswire),
    described in §1.3.

---

# 1. PROGRAM PAGE TEMPLATE

One template, four pages. The template is fixed; only the content of §P4–§P7 and the
variation notes in §1.5 differ. **Structural parity between the four program pages is the
mechanism that keeps the four paths peers** — the same rule that governs the homepage cards.

## 1.1 Desktop

```
[ 00 utility bar ]
[ 01 sticky header ]
┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄
 Home › Programs › {Program Name}                          ← P0 breadcrumb
┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄

░ P1 — PROGRAM HERO ░ mist ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
░ ◄────────── 7 cols ──────────►       ◄────────── 5 cols ──────────►      ░
░ {PLAN TYPE} · {UNDERWRITING TYPE}    ┌───────────────────────────────┐   ░
░                                      │ AT A GLANCE                   │   ░
░ {Program Name}                       │ ▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔ │   ░
░ ╱{one-line value phrase}╱  ← ember   │ Customer pays    {value}      │   ░
░                                      │ ┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄ │   ░
░ Two sentences of dealer-facing       │ Dealer remits    {value}      │   ░
░ positioning. No coverage terms,      │ ┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄ │   ░
░ no claims language.                  │ Dealer earns     {value}      │   ░
░                                      │ ┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄ │   ░
░ [ Profit Calculator → ]              │ Income arrives   {timing}     │   ░
░ [ Talk to RAP ]                      └───────────────────────────────┘   ░
░                                       2px ink top rule — data object     ░
░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░

┌ P2 — SECTION JUMP RAIL (sticky under header once P1 scrolls past) ───────┐
│ WHO IT'S FOR · HOW IT WORKS · ECONOMICS · IN PRACTICE · TERMS · FAQ      │
└──────────────────────────────────────────────────────────────────────────┘

 P3 — WHO IT'S FOR
┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄
 The customer this fits.                    The dealer this fits.
 ┌────────────────────────────────┐         ┌────────────────────────────────┐
 │ 2–3 short statements about the │         │ 2–3 short statements about the │
 │ buying behaviour this program  │         │ dealership profile this suits. │
 │ serves. Affirmative only.      │         │ Affirmative only.              │
 └────────────────────────────────┘         └────────────────────────────────┘
 ┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄
 This program is one of four. It is not the right answer for every customer.
                                              ← coexistence line, every page

 P4 — HOW IT WORKS
┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄
 ┌────────┐    ┌────────┐    ┌────────┐    ┌────────┐
 │  01    │ →  │  02    │ →  │  03    │ →  │  04    │
 │ {step} │    │ {step} │    │ {step} │    │ {step} │
 └────────┘    └────────┘    └────────┘    └────────┘
 1px rule connectors, Inter 600 13px uppercase labels, one line each.
 No icons. Steps are the dealer's and customer's actual sequence.

░ P5 — THE ECONOMICS ░ mist ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
░ ▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔ 2px ink rule ░
░ {headline number}    {headline number}    {headline number}              ░
░ {label}              {label}              {label}                        ░
░                                                                          ░
░ ┌──────────────────────────────────────────────────────────────────────┐ ░
░ │ Illustrative chart — shape and timing of dealer income               │ ░
░ │ Figure n · Illustrative. Not a forecast.                             │ ░
░ └──────────────────────────────────────────────────────────────────────┘ ░
░                                                                          ░
░ ┌── GATED (blurred, inert) ────────────────────────────────────────────┐ ░
░ │ 🔒 Model your own numbers — REQUIRES APPROVED ACCESS                 │ ░
░ └──────────────────────────────────────────────────────────────────────┘ ░
░                   [ Profit Calculator → ]                                ░
░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░

 P6 — IN PRACTICE (product proof — treatment varies, see §1.5)
┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄
 ◄────── 5 cols: what the dealer/customer ──────►  ◄──── 7 cols: proof ────►
        actually experiences                       kiosk UI, flow diagram,
                                                   or structure diagram

 P7 — WHAT'S INCLUDED / TERMS SUMMARY          [NEEDS OWNER on all four pages]
┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄
 A short, plain-language summary table. Coverage terms, limits, eligibility,
 and term lengths are NOT in DECISIONS.md and must be supplied per program.
 Closes with: "Full terms and conditions apply." + link.

 P8 — HOW IT FITS WITH THE OTHER THREE
┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄
 ┌──────────────┐ ┌──────────────┐ ┌──────────────┐   ← the OTHER three, at
 │ {Program}    │ │ {Program}    │ │ {Program}    │     strict parity with
 │ one line     │ │ one line     │ │ one line     │     each other
 │ View →       │ │ View →       │ │ View →       │
 └──────────────┘ └──────────────┘ └──────────────┘
                                    [ Compare all four → ] /programs

 P9 — FAQ
┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄
 ▸ Question one                                              [NEEDS OWNER]
 ▸ Question two                                              for the answer
 ▸ Question three                                            content
 Accordion, hairline rows, one open at a time not enforced.

▓ P10 — CONVERSION ▓ ink ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
▓            See what {Program} could mean for ╱your dealership.╱          ▓
▓                                                                          ▓
▓            [ Profit Calculator → ]      [ Talk to RAP ]                  ▓
▓                                                                          ▓
▓  Or call 1.800.732.5856 · sales@raptns.com · Mon–Fri 8:00–6:00 EST       ▓
▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓

[ 13 footer — five groups + #contact block ]
```

## 1.2 Mobile (375px)

```
┌─────────────────────────┐   ┌─────────────────────────┐
│▓ FILE A CLAIM  LOGIN → ▓│   │ P5 THE ECONOMICS ░      │
├─────────────────────────┤   │░ ▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔ │
│  RAP    [ Profit C. ] ☰ │   │░ {number}               │
├─────────────────────────┤   │░ {label}                │
│ Home › Programs ›       │   │░ ┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄ │
│ {Program}               │   │░ {number}               │
├─────────────────────────┤   │░ …3 stacked             │
│░ P1 HERO                │   │░ ┌─────────────────────┐│
│░ {PLAN} · {UNDERWRITING}│   │░ │ illustrative chart  ││
│░                        │   │░ └─────────────────────┘│
│░ {Program Name}         │   │░ ┌─────────────────────┐│
│░ ╱{value phrase}╱       │   │░ │ 🔒 GATED            ││
│░                        │   │░ └─────────────────────┘│
│░ Two sentences of       │   │░ [ Profit Calculator → ]│
│░ positioning.           │   ├─────────────────────────┤
│░                        │   │ P6 IN PRACTICE          │
│░ [ Profit Calculator → ]│   │ copy first,             │
│░ [ Talk to RAP ]        │   │ proof panel below       │
│░                        │   │ (kiosk UI / diagram)    │
│░ ┌─────────────────────┐│   ├─────────────────────────┤
│░ │ AT A GLANCE         ││   │ P7 WHAT'S INCLUDED      │
│░ │ ▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔ ││   │ stacked rows, not a     │
│░ │ Customer  {value}   ││   │ side-scrolling table    │
│░ │ ┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄ ││   ├─────────────────────────┤
│░ │ Remit     {value}   ││   │ P8 THE OTHER THREE      │
│░ │ ┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄ ││   │ ┌─────────────────────┐ │
│░ │ Earns     {value}   ││   │ │ {Program}  View →   │ │
│░ │ ┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄ ││   │ ├─────────────────────┤ │
│░ │ Timing    {value}   ││   │ │ {Program}  View →   │ │
│░ └─────────────────────┘│   │ ├─────────────────────┤ │
├─────────────────────────┤   │ │ {Program}  View →   │ │
│ P2 JUMP RAIL            │   │ └─────────────────────┘ │
│ ◄ WHO · HOW · ECON ·  ► │   │ [ Compare all four → ]  │
│   horizontally scrolls, │   ├─────────────────────────┤
│   sticky under header   │   │ P9 FAQ                  │
├─────────────────────────┤   │ ▸ Question one          │
│ P3 WHO IT'S FOR         │   │ ▸ Question two          │
│ ┌─────────────────────┐ │   ├─────────────────────────┤
│ │ The customer…       │ │   │▓ P10 CONVERSION         │
│ ├─────────────────────┤ │   │▓ See what {Program}     │
│ │ The dealer…         │ │   │▓ could mean for ╱your   │
│ └─────────────────────┘ │   │▓ dealership.╱           │
│ ┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄ │   │▓ [ Profit Calculator → ]│
│ One of four. Not right  │   │▓ [ Talk to RAP ]        │
│ for every customer.     │   │▓ 1.800.732.5856         │
├─────────────────────────┤   ├─────────────────────────┤
│ P4 HOW IT WORKS         │   │▓ FOOTER (5 accordions   │
│ 01 {step}               │   │▓  + contact block)      │
│  ↓                      │   └─────────────────────────┘
│ 02 {step}               │
│  ↓  …4 steps vertical   │
└─────────────────────────┘
```

## 1.3 Annotations

- **P0 breadcrumb.** Every interior page. It is also the only place the word "Programs" appears
  as a *parent*, which reinforces that the four are siblings.
- **P2 jump rail.** Sticky under the condensed header once the hero scrolls past. Plex Mono
  12px `.08em`, active section in `--rap-ink` with a 2px `--rap-ember` underline. On mobile it
  scrolls horizontally. This is the owner's "easy navigation" requirement applied to a page
  that will run 6–8 screens.
- **P1 "At a glance" panel** is the stat-tile grammar from DESIGN_SYSTEM §4.3 — 2px ink top
  rule, mono labels, Playfair values. Four rows: customer pays / dealer remits / dealer earns /
  income timing. Where a value is not an approved fact, the row is omitted rather than filled
  with a placeholder.
- **P3 coexistence line** appears on all four pages, verbatim. It is the cheapest structural
  guard against a program page reading as *the* answer, and it directly serves the
  "Multi-Year is never disparaged / FurnitureRx does not replace it" rules.
- **P5 economics** reuses the homepage teaser pattern: public numbers at full contrast, an
  illustrative chart with no vertical scale, and the gated model visible-but-inert behind the
  lock chip. **No program page exposes model logic, assumptions, or cancellation rates.**
- **P8** shows the *other three* at parity with each other, never ranked, always three cards
  wide, always linking to `/programs` as well. A visitor can reach any program from any program
  in one click.
- **P10** is the only conversion block. Same primary label as everywhere else —
  `Profit Calculator →` (DECISION 032) — plus the human contact path (DECISION 027), because a
  dealer who wants to ask a question should not be forced through the gate.
- Backgrounds follow the surface semantics in DESIGN_SYSTEM §1.3: mist for the two
  quantitative bands (P1, P5), paper for narrative, ink for conversion. No decorative striping.

## 1.4 What the template deliberately excludes

| Excluded | Why |
|---|---|
| Pricing tables comparing the four programs | That is the Programs index's job (§2). A program page argues its own fit. |
| Any "vs" framing against another RAP program | AGENT_RULES: the four coexist. Comparison happens on the index, neutrally. |
| Testimonials / logos | No approved customer-reference material exists. |
| Coverage detail in the hero | DECISION 031's lesson: coverage detail is point-of-sale, not top-of-page. |
| A second CTA style | One primary verb sitewide. |

## 1.5 Per-program variation notes

### FurnitureRx Subscription — `/programs/furniturerx-subscription`

| Slot | Content |
|---|---|
| P1 eyebrow | `SUBSCRIPTION PLAN · AVAILABLE STANDARD OR REINSURANCE` **[NEEDS OWNER]** — confirm the subscription can be written under both underwriting types before stating it |
| P1 at-a-glance | Customer pays **$19.99/month** · Dealer remits **$0** · Dealer earns **$8 per successful monthly payment** · Income **recurring, monthly** |
| P1 value phrase | "Another way for the customer to say yes." |
| P3 | Customer: wants protection, not another large purchase today; wants to stay in control. Dealer: wants income from the ~**70%** who decline Multi-Year (DECISION 020, attributed *RAP program experience*) |
| P4 steps | Offered at the sale → customer enrols → monthly payment succeeds → dealer commission paid |
| P5 | The **$8 × 60 payments = $480 GM** illustration (DECISION 036), labelled illustrative |
| **P6 — unique** | **The actual kiosk interface**, as on the homepage: real UI panel, not a screenshot. Plus the customer-control story — cancel, pause, restart anytime. This is the only program with a live consumer product to show. |
| P7 | Coverage summary **[NEEDS OWNER]**. Care Kits and Repair Safety Net appear **here**, ranked clearly below the subscription (DECISION 019) — never on the homepage |
| Watch | Lead with $19.99 only. No "from $9.99/mo" anywhere. |

### Multi-Year Protection — `/programs/multi-year-protection`

| Slot | Content |
|---|---|
| P1 eyebrow | `MULTI-YEAR PLAN · AVAILABLE STANDARD OR REINSURANCE` **[NEEDS OWNER]** — same confirmation |
| P1 at-a-glance | Customer pays **~$300 one time (average)** · Income **at the original sale** · Cancellation: **prorated share returned** (DECISION 029). Dealer-earn figure **[NEEDS OWNER]** — the $180 GM illustration is built on a $250 retail example, not a stated commission |
| P1 value phrase | "One decision, made once." |
| P3 | Customer: prefers to settle protection completely at the point of sale. Dealer: **this stays the first ask** |
| P5 | The **$250 retail × 72% = $180 GM** illustration (DECISION 036, round-number arithmetic resolved) |
| **P6 — unique** | The sales-floor moment: where the upfront plan fits naturally in the transaction. A flow diagram, not a product screenshot — there is no consumer UI for this program |
| **Tone rule** | Affirmative throughout. Never "legacy", "traditional but declining", "still has a place", or any construction that implies obsolescence. The homepage already states it stays the dealer's first ask; this page must not contradict that. |

### Reinsurance — `/programs/reinsurance`

| Slot | Content |
|---|---|
| P1 eyebrow | `UNDERWRITING TYPE · PAIRS WITH SUBSCRIPTION OR MULTI-YEAR` |
| P1 at-a-glance | Dealer **shares in the underwriting profits** · **Tax benefits** · Income **accrues over time** · Customer-facing price: unchanged, it is an underwriting structure not a plan type |
| P1 value phrase | "Keep the underwriting profit you're currently giving away." |
| P3 | Dealer: appropriate structure and scale **[NEEDS OWNER]** — no eligibility threshold is approved. Do **not** state a minimum volume |
| P5 | Accrual-over-time chart, **no scale**. **Must carry the not-immediate-profit caveat inline**, not in a footnote |
| **P6 — unique** | A **structure diagram**: premium → reserve → claims → underwriting profit, showing where the dealer's share arises and that it is deferred. This is the most conceptually difficult program and the diagram is doing the real work |
| **Required qualifier** | The tax-benefits mention needs a standing disclaimer — proposed: *"Tax treatment depends on your circumstances. Consult your own tax advisor."* **[NEEDS OWNER]** — flagged for legal/owner sign-off before publication; RAP should not appear to give tax advice |
| Watch | Never "guaranteed", never "profit" without the timing caveat, never a projected return. |

### Standard Programs — `/programs/standard-programs`

| Slot | Content |
|---|---|
| P1 eyebrow | `UNDERWRITING TYPE · PAIRS WITH SUBSCRIPTION OR MULTI-YEAR` |
| P1 at-a-glance | Dealer earns **protection income** · **RAP retains the underwriting** · Income **at the sale** · Structure: **simplest to run** |
| P1 value phrase | "The simplest way to run a protection program." |
| P3 | Dealer: wants protection income without taking on reinsurance participation |
| P5 | Income-at-the-sale shape, matching the homepage card's diagram (single bar + dashed retained-underwriting line) |
| **P6 — unique** | A **contrast-free structure diagram** — the same premium→reserve→claims frame as Reinsurance, but showing the underwriting profit remaining with RAP. Shown as a *fact of the structure*, never as a lesser outcome |
| **Tone rule** | DECISION 037: do not disparage relative to Reinsurance, and equally **do not disparage Reinsurance here**. No "without the complexity of…" phrasing — that demotes the sibling. State what Standard is; let the index do the comparing. |
| Watch | Shortest of the four pages. Do not pad it to match the others — parity is in treatment, not word count. |

---

# 2. PROGRAMS INDEX — `/programs`

Gives the Programs nav item a real destination for the first time, and is the one place
where the four are compared side by side.

## 2.1 Desktop

```
[ 00 utility ] [ 01 header ]
┄ Home › Programs ┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄

░ I1 — INDEX HERO ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
░ RISK ASSURANCE PARTNERS PROGRAMS                                          ░
░ Four ways to create more value from ╱the same customer.╱                  ░
░                                                                           ░
░ Protection programs for furniture & mattress retail dealers, as well as   ░
░ custom interior designer programs — all home furnishings categories.      ░
░                                     ← DECISION 025 descriptor, verbatim   ░
░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░

 I2 — THE TWO AXES  (DECISION 029 — promoted from a fold to a real section)
┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄
 A plan type and an underwriting type combine.

                    │  STANDARD              │  REINSURANCE
                    │  RAP retains the       │  The dealer shares in the
                    │  underwriting profits  │  underwriting profits,
                    │                        │  plus tax benefits*
 ───────────────────┼────────────────────────┼───────────────────────────────
  SUBSCRIPTION      │  Subscription,         │  Subscription,
  $19.99/month,     │  standard              │  reinsurance
  cancel anytime    │  [ View → ]            │  [ View → ]
 ───────────────────┼────────────────────────┼───────────────────────────────
  MULTI-YEAR        │  Multi-Year,           │  Multi-Year,
  ~$300 one time,   │  standard              │  reinsurance
  prorated refund   │  [ View → ]            │  [ View → ]
 ───────────────────┴────────────────────────┴───────────────────────────────
 * Tax treatment depends on your circumstances. Consult your own tax advisor.
                                                            [NEEDS OWNER]
 ┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄
 ⚠ MATRIX CELLS ARE [NEEDS OWNER]. The 2×2 asserts that either plan type can
   be written under either underwriting type. That is implied by Decision 029
   but never stated. If any combination is not offered, this becomes a list
   of the four programs instead of a matrix — see §2.3 fallback.

 I3 — THE FOUR PROGRAMS
┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄
 ┌───────────────┐ ┌───────────────┐ ┌───────────────┐ ┌───────────────┐
 │ 01            │ │ 02            │ │ 03            │ │ 04            │
 │ SUBSCRIPTION  │ │ MULTI-YEAR    │ │ REINSURANCE   │ │ STANDARD      │
 │ ▌▌▌▌ monthly  │ │ ▌ at the sale │ │ ╱╲ over time  │ │ ▌┄ at sale    │
 │               │ │               │ │               │ │               │
 │ FurnitureRx   │ │ Multi-Year    │ │ Reinsurance   │ │ Standard      │
 │ Subscription  │ │ Protection    │ │               │ │ Programs      │
 │ {one para}    │ │ {one para}    │ │ {one para}    │ │ {one para}    │
 │ Learn more →  │ │ Learn more →  │ │ Learn more →  │ │ Learn more →  │
 └───────────────┘ └───────────────┘ └───────────────┘ └───────────────┘
   Identical to the homepage cards — same component, same parity rules.

 I4 — COMPARISON TABLE
┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄
                    │ SUBSCRIPTION │ MULTI-YEAR   │ REINSURANCE │ STANDARD
 ───────────────────┼──────────────┼──────────────┼─────────────┼───────────
 What it is         │ Plan type    │ Plan type    │ Underwriting│ Underwriting
 Customer pays      │ $19.99/mo    │ ~$300 once   │ n/a         │ n/a
 Cancellation       │ Anytime      │ Prorated     │ n/a         │ n/a
 Dealer remit       │ $0           │ [NEEDS OWNER]│ n/a         │ n/a
 Dealer income      │ $8 / payment │ [NEEDS OWNER]│ Profit share│ Protection
                    │              │              │ over time   │ income
 When income arrives│ Monthly,     │ At the       │ Accrues     │ At the
                    │ recurring    │ original sale│ over time   │ sale
 Underwriting profit│ per structure│ per structure│ Shared with │ Retained
                    │              │              │ the dealer  │ by RAP
 ───────────────────┴──────────────┴──────────────┴─────────────┴───────────
 Horizontal scroll inside its own container below 900px. Row labels stick.
 Every cell is an approved fact or [NEEDS OWNER]. No cell is a judgement.

▓ I5 — CONVERSION ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
▓         Not sure which fits? ╱Run your numbers, or just ask.╱            ▓
▓         [ Profit Calculator → ]      [ Talk to RAP ]                     ▓
▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓

[ 13 footer ]
```

## 2.2 Mobile

```
┌─────────────────────────┐  ┌─────────────────────────┐
│▓ FILE A CLAIM  LOGIN → ▓│  │ I3 THE FOUR PROGRAMS    │
├─────────────────────────┤  │ ┌─────────────────────┐ │
│  RAP    [ Profit C. ] ☰ │  │ │ 01 SUBSCRIPTION     │ │
├─────────────────────────┤  │ │ ▌▌▌▌ monthly        │ │
│ Home › Programs         │  │ │ FurnitureRx …       │ │
├─────────────────────────┤  │ │ Learn more →        │ │
│░ I1 HERO                │  │ └─────────────────────┘ │
│░ RAP PROGRAMS           │  │ …4 stacked, order       │
│░ Four ways to create    │  │   01→02→03→04           │
│░ more value from ╱the   │  ├─────────────────────────┤
│░ same customer.╱        │  │ I4 COMPARISON           │
│░ {descriptor}           │  │ ┌─────────────────────┐ │
├─────────────────────────┤  │ │ ◄ scrolls sideways ►│ │
│ I2 THE TWO AXES         │  │ │ row labels stick    │ │
│ A plan type and an      │  │ └─────────────────────┘ │
│ underwriting type       │  │ Body never scrolls      │
│ combine.                │  │ horizontally — only     │
│ ┌─────────────────────┐ │  │ the table does.         │
│ │ SUBSCRIPTION        │ │  ├─────────────────────────┤
│ │ $19.99/mo, cancel   │ │  │▓ I5 CONVERSION          │
│ │ anytime             │ │  │▓ Not sure which fits?   │
│ │ ┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄ │ │  │▓ ╱Run your numbers,    │
│ │ + Standard  View →  │ │  │▓ or just ask.╱          │
│ │ + Reinsurance View →│ │  │▓ [ Profit Calculator → ]│
│ ├─────────────────────┤ │  │▓ [ Talk to RAP ]        │
│ │ MULTI-YEAR          │ │  ├─────────────────────────┤
│ │ ~$300 once,         │ │  │▓ FOOTER                 │
│ │ prorated refund     │ │  └─────────────────────────┘
│ │ ┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄ │ │
│ │ + Standard  View →  │ │   ← the 2×2 becomes two
│ │ + Reinsurance View →│ │     plan-type cards, each
│ └─────────────────────┘ │     listing its two
│ * Consult your own tax  │     underwriting options.
│   advisor. [NEEDS OWNER]│     A 2×2 grid is unreadable
└─────────────────────────┘     at 375px.
```

## 2.3 Annotations

- **The index is the only page that compares.** Program pages argue their own fit; the index
  lays the four side by side in neutral language. That division is what stops any single
  program page from becoming a sales pitch against its siblings.
- **I2 promotes the two-axis explainer** from the collapsed fold it occupies on the homepage to
  a full section, because this is the page where a visitor has actually come to understand the
  structure. The homepage fold stays as it is.
- **I2 matrix carries a real risk, flagged above.** A 2×2 asserts four combinations exist.
  Decision 029 defines the two axes but never confirms every pairing is offered. **Fallback if
  the owner says some combinations are not available:** drop the matrix and render I2 as two
  labelled lists — "Plan types: how the customer buys" and "Underwriting types: who keeps the
  underwriting profits" — which teaches the same distinction without asserting availability.
- **I3 reuses the homepage card component verbatim.** Same markup, same parity rules, same
  timing diagrams. A visitor who saw the homepage recognises them instantly, and there is one
  component to maintain rather than two.
- **I4 comparison table** — every cell is either an approved fact or `[NEEDS OWNER]`. Two cells
  are marked `n/a` rather than empty, because Reinsurance and Standard are underwriting types
  and have no customer price of their own; leaving them blank would read as missing data.
- Table scrolls inside its own `overflow-x:auto` container. The page body never scrolls
  sideways.

---

# 3. NEWSWIRE PAGE — `/newswire`

Built to hold 20–30+ items per view and to keep working when the feed is stale or broken.
The homepage section remains the 3–5 item preview that links here.

## 3.1 Desktop

```
[ 00 utility ] [ 01 header ]
┄ Home › Newswire ┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄

 N1 — MASTHEAD
┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄
 FURNITURE RETAIL NEWSWIRE                                        ● LIVE
 What happened.                                  LAST UPDATED 09:14 AM ET
 ▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔ 2px ink rule ▔▔▔

 ◄─── 3 cols ───►  ◄──────────────── 9 cols ────────────────►

 N2 FILTER RAIL     N3 FEED
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
 │  Technology  │   N4 — CROSS-LINKS (foot of feed, not a sidebar)
 │           (1)│   ┌──────────────────────┐ ┌──────────────────────┐
 │ ┄┄┄┄┄┄┄┄┄┄┄┄ │   │ MARKET INTELLIGENCE  │ │ RAP RESEARCH         │
 │ ARCHIVE      │   │ What is changing?    │ │ What does it mean?   │
 │  [date pick] │   │ View the data →      │ │ Read the research →  │
 └──────────────┘   └──────────────────────┘ └──────────────────────┘

[ 13 footer ]
```

## 3.2 Filter and state behaviour

```
ACTIVE FILTER — chip appears above the feed, feed heading updates
┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄
 Filtered: [ HOUSING ×]                              5 items · Clear all
┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄

EMPTY CATEGORY
┌──────────────────────────────────────────────────────────────────────────┐
│ No items in Bankruptcies in the last 30 days.                            │
│ [ Clear filter ]   [ View all news ]                                     │
└──────────────────────────────────────────────────────────────────────────┘
 Categories with (0) stay visible and clickable — a category that vanishes
 reads as a site bug, and an empty wire category is information.

STALE FEED (no successful ingest within the expected cadence)
┌──────────────────────────────────────────────────────────────────────────┐
│ ⚠ LAST UPDATED 25 AUG 09:14 ET · UPDATES DELAYED                        │
│ Items below are the most recent we have.                                 │
└──────────────────────────────────────────────────────────────────────────┘
 · LIVE dot switches from --rap-live to --rap-slate-300 and stops pulsing.
 · Feed still renders. Cached items are never hidden because of a bad ingest.

FEED UNAVAILABLE (no cached items at all — should be near-impossible)
┌──────────────────────────────────────────────────────────────────────────┐
│ The newswire is temporarily unavailable.                                 │
│ [ Market Intelligence → ]  [ RAP Research → ]  [ Contact RAP → ]         │
└──────────────────────────────────────────────────────────────────────────┘
 Never a blank page. Always an exit.
```

## 3.3 Mobile

```
┌─────────────────────────┐   ┌─────────────────────────┐
│▓ FILE A CLAIM  LOGIN → ▓│   │ ── TUE 25 AUG 2026 ──   │
├─────────────────────────┤   │ 12:38 PM                │
│  RAP    [ Profit C. ] ☰ │   │ [HOUSING]               │
├─────────────────────────┤   │ Headline over two or    │
│ Home › Newswire         │   │ three lines             │
├─────────────────────────┤   │ Synopsis, two lines     │
│ FURNITURE RETAIL        │   │ PUBLICATION · SOURCE →  │
│ NEWSWIRE       ● LIVE   │   │ ┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄ │
│ What happened.          │   │ 11:17 AM                │
│ UPDATED 09:14 AM ET     │   │ [FURNITURE RETAIL]      │
│ ▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔ │   │ …                       │
├─────────────────────────┤   │                         │
│ ┌─────────────────────┐ │   │ …items continue         │
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

## 3.4 Annotations

- **Wire-service character throughout** (DESIGN_SYSTEM §5.1): Plex Mono timestamps, outlined
  category chips, **Inter** headlines — deliberately not the editorial serif, so aggregated
  third-party news can never be mistaken for RAP's own voice. Hairline rows, no cards, no
  images, no thumbnails.
- **Date dividers** (`── TUE 25 AUG 2026 ──`) group the feed. At 20–30+ items this is what
  keeps chronology legible; the homepage preview has too few items to need them.
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
  path. **Owner may prefer pagination; flagged in §4.**
- **The stale state is a first-class design, not an error page.** Cached items keep rendering;
  only the freshness indicator changes. This directly serves AGENT_RULES §16's "no dependency
  on external APIs responding during every visitor page load".
- **N4 cross-links preserve the three-product separation** while helping navigation: Newswire
  answers *what happened*, and points to the two neighbours that answer *what is changing* and
  *what does it mean*. They are links out, not merged content, and they sit at the foot of the
  feed rather than in a sidebar that would compete with the filter rail.
- Filter rail is sticky on desktop, a collapsed sheet on mobile.

---

# 4. OPEN QUESTIONS

Ordered by what blocks the most work.

| # | Question | Blocks |
|---|---|---|
| **P-1** | **Coverage terms, limits, eligibility and term lengths for all four programs.** Section P7 exists on every page and cannot be written from DECISIONS.md. This is the single largest content gap in the set. | All four program pages |
| **P-2** | **Can both plan types be written under both underwriting types?** Decision 029 defines two axes but never confirms all four pairings are offered. If not, the Programs index I2 matrix must become two lists (fallback in §2.3), and the program-page eyebrows change. | Index I2, all four P1 eyebrows |
| **P-3** | **Reinsurance tax-benefits qualifier.** Proposed standing line: *"Tax treatment depends on your circumstances. Consult your own tax advisor."* Needs owner/legal sign-off — RAP must not appear to give tax advice. | Reinsurance page, index I2 |
| **P-4** | **Multi-Year dealer economics.** Decision 036 gives a $250 retail × 72% = $180 GM *illustration*, but no stated dealer commission or remit. The at-a-glance panel and comparison table both have a hole here. | Multi-Year page, index I4 |
| **P-5** | **Reinsurance eligibility.** MASTER_SPEC says "for appropriate dealers" — is there a stated volume, structure, or size threshold that can be published? Currently no minimum may be stated. | Reinsurance page P3 |
| **P-6** | **FAQ content for four pages.** Owner-supplied questions and answers, or approval for RAP Sales to draft them. | All four P9 blocks |
| **N-1** | **Load-more vs pagination**, and how many items per load. Recommendation is load-more at 25. | Newswire N3 |
| **N-2** | **Archive depth and retention.** The rail proposes a date picker; how far back does the wire go, and is older content indexable? | Newswire N2 |
| **N-3** | **Expected update cadence**, which is what defines "stale". Without it the freshness indicator has no threshold. | Newswire N1/N3 states |
| **N-4** | **Item volume per day**, to confirm 25–30 per view is the right density rather than a page that is always half-empty. | Newswire N3 |
| **G-1** | Do program pages get their own `/programs/{slug}` URLs as assumed here? Decision 037 says Standard "gets its own program page under Programs", implying yes for all four. Confirm slugs. | Routing, Phase 4 |
| **G-2** | Vector RAP logo asset — still outstanding from Q4, now needed on four more page templates. | Global chrome |

**STOP — wireframes only. No HTML written for these pages. Awaiting owner approval of layout.**
