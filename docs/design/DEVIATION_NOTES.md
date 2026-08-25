# Risk Assurance Partners — DEVIATION NOTES & OPEN QUESTIONS

**Phase 2 / UI-UX deliverable 5 of 5.**
**Revision 2 — 2026-08-24.** Several items below were resolved by owner decision. Superseded
entries are retained per the decision-log convention rather than deleted.

## Revision 2 — resolved items

| Item | Resolution |
|---|---|
| **D1** — mobile utility bar merged into the drawer | **Superseded by DECISION 024 / R3.** A slim 32px utility strip now persists on mobile with File a Claim + Dealer Login, and all utility links moved to the **top** of the drawer. This moves back toward LOCKED_WIREFRAME §4, which lists Utility as item 1 of the mobile sequence. |
| **Q6** — where does "Talk to RAP" go? | **Resolved by DECISION 024 / R6.** Contact is added to the site map (utility bar + footer, not primary nav); `Talk to RAP` targets the `#contact` block inside the footer region. |
| **Contact details** (phone / email / hours) | **Resolved by DECISION 027.** 1.800.732.5856 · sales@raptns.com · 8:00 AM – 6:00 PM, Monday–Friday, EST. Previously flagged as un-inventable. |
| **§05 program links dead** (`href="#"` on Multi-Year and Reinsurance) | **Resolved by DECISION 024 / R5.** All three programs now have stable anchors and are reachable from the header dropdown, the orientation strip, the drawer, and the footer. |
| Audience described as "furniture retail dealers" | **Superseded by DECISION 025.** The owner rejected that as too narrow. Approved descriptor now covers furniture **& mattress** retail dealers, custom interior designer programs, and all home furnishings categories, and is used verbatim in the hero orientation strip. |
| Reinsurance card copy | **Updated per DECISION 028.** Reinsurance is its own product — a share of the underwriting profits, building wealth over time — retaining the not-immediate-profit caveat. "Standard" (vendor keeps the underwriting profits) is a program descriptor only; **no fourth path card was added and Section 05 is unchanged.** |
| Owner review of palette / typography / spacing | **Approved as-is.** These are now frozen; revision 2 changed no token, typeface, scale, or grid value. |

## Revision 2 — new open question

| # | Question | Blocks |
|---|---|---|
| **Q14** | DECISION 025 lists "Standard" alongside Reinsurance, Subscription and Multi-Year in owner-approved descriptor copy, and DECISION 028 defines it as a non-participating structure rather than a fourth path. The homepage therefore names four program words but shows three cards. Confirm this is intended, or supply the wording that resolves it for a reader who counts. | Section 02 strip, Section 05, program pages |

---

## Revision 3 — 2026-08-25 — resolved by DECISIONS 029–032

| Item | Resolution |
|---|---|
| **Q14** — four program words, three cards | **Resolved by DECISION 029.** The four terms are **two axes**: protection plan types (Subscription / Multi-Year — how the customer buys) and underwriting types (Reinsurance / Standard — who keeps the underwriting profits). The orientation strip now carries a two-column block stating this explicitly. Section 05 is unchanged and Standard still gets no card. |
| **Q1 / D4** — is "15+ years" approved? | **Resolved by DECISION 030.** Accurate and approved. Restored to the first position in the Section 11 grid; the "Multi-program capability" filler that stood in for it is removed. |
| **Q3** — which Why-RAP capability claims are approved? | **Resolved by DECISION 030.** All four are correct and usable: claims administered in-house by RAP, underwriting partner relationships, technology built in-house, US-based service with self-serve claims. This closes the largest unsupported-claim risk flagged in revision 1. |
| **Q13** — may live kiosk coverage copy be mirrored? | **Resolved by DECISION 031 — no.** `$5,000 total coverage`, `24/7 claim filing`, component lists and repair/replace language are removed from the homepage entirely. Section 07 now carries the five approved points instead, and the kiosk panel keeps only the two lines that carry the buying decision. |
| **4.5-star rating prominence** | **DECISION 030** designates it very important. Promoted from a footnote line beneath the Section 11 grid to a lead proof block above it, with the numeral at `clamp(56px,7vw,86px)` — the largest on the page outside the hero. No new section. |
| **R9.2** — primary CTA vanished below 1024px | **Implemented under DECISION 032.** The CTA now stays in the header at every width, compacting rather than disappearing. |
| **Primary CTA label** | **DECISION 032** — "See My Economics" replaced by **"Profit Calculator"** in all five positions. The gated tool keeps its brand, *RAP Dealer Economics Calculator*. |

### New approved facts now on the page

Introduced by DECISION 029 and used only in the Section 02 two-axis block: **Multi-Year averages
~$300 one time with a prorated share returned on cancellation**, and **Reinsurance carries tax
benefits for the dealer**. Both are owner-supplied; neither appears elsewhere on the homepage.

### Remaining open

| # | Question | Blocks |
|---|---|---|
| **Q2** | Market Pulse metric list and whether the research draft's figures may publish before Phase 9 wires live sources. Prototype still shows clearly-labelled placeholders. | Section 03, Phase 9 |
| **Q4** | Vector RAP logo asset; and is "Value Through Innovation" still the current tagline? (It now hides on mobile to make room for the persistent CTA, which makes the question slightly more pressing.) | Header, footer |
| **Q5** | The flagship research draft still cites **4.7 stars** in two places against DECISION 021's 4.5, and carries ~15 third-party statistics needing review before publishing under the RAP masthead. | Section 10, Phase 11 |
| **Q7** | Destination for "See the customer experience" — a RAP-hosted product tour, or a deep link to kiosk.furniturerx.net? | Section 07 |
| **Q8** | Should calculator access be time-limited? Prototype shows a plausible 90-day default. | Phase 7 |
| **Q9** | Should the authorized calculator offer PDF export? Still the most likely route for gated dealer economics to leave the gate. | Phase 8 |
| **Q10** | Homepage Newswire item count (prototype: 5 desktop / 3 mobile). | Section 09 |
| **Q11** | How widely the ~70% figure should be repeated sitewide. | Sitewide |
| **Q15** | DECISION 029 is marked "can be discussed further." If the two-axis model changes, the Section 02 block and the Multi-Year ~$300 fact change with it. | Section 02 |

Everything in this file is **PROPOSED — requires owner approval.** Nothing here has been
implemented as a change to `docs/project/`. The prototype implements the locked wireframe as
written; where this document proposes an alternative, the prototype shows the *proposed*
treatment so the owner can evaluate it visually, and it is listed here.

**Summary: no structural deviation is proposed.** The site map, primary navigation, and the
14-section homepage sequence are implemented exactly as locked. The items below are
responsive behavior, copy, one omitted claim, and one added typeface.

---

## A. Confirmation of what was NOT changed

| Locked item | Status in prototype |
|---|---|
| RAP is master brand; FurnitureRx is a RAP product | Held. RAP wordmark is the only site identity; FurnitureRx appears with "A product of Risk Assurance Partners" beneath it, at smaller scale, and the footer restates the relationship. |
| Primary nav (7 items, Programs dropdown) | Held, exact order. |
| Primary CTA | Label changed to **"Profit Calculator"** by DECISION 032 (supersedes part of 009). Still one primary verb sitewide, used in header, hero, teaser, final CTA and drawer, and now persistent on mobile. |
| Utility nav (4 items) | Held. |
| Homepage sequence 00–13 | Held, exact, desktop and mobile. |
| Three economic paths, equal standing | Held. Identical card treatment; see §D8. |
| Multi-Year not disparaged | Held. Affirmative copy; drawn as an equal branch in Section 06. |
| Reinsurance not "immediate profit" | Held. Card states the timing caveat explicitly. |
| Newswire / Market Intelligence / Research separate | Held. Three distinct grounds, faces, densities — see DESIGN_SYSTEM §5. |
| Gated calculator | Held. No formula, assumption value, cancellation rate, or model output is public. |
| $19.99 lead pricing only | Held. No "from $9.99/mo". Care Kits and Repair Safety Net appear nowhere on the homepage. |
| 4.5 Google rating | Held. Used once, in Section 11. |
| "Reinsurance" not "Captive" | Held. "Captive" appears nowhere. |

---

## B. Proposed deviations — responsive behavior

### D1 — On mobile, the Utility Bar (§00) merges into the header and relocates to the drawer
**PROPOSED — requires owner approval**

At ≤680px the 38px ink utility bar is hidden and its four links move to the foot of the
navigation drawer, styled identically (Plex Mono, uppercase, `Dealer Login →` in brass).

*Rationale:* 38px of utility plus 84px of header is 18% of a 667px viewport before any
content. The locked mobile sequence lists "1. Utility, 2. Header" — this proposal does not
remove Utility, it nests it one tap inside Header. All four customer functions remain
reachable from every page in a single tap and remain visually secondary, which is the stated
intent in MASTER_SPEC.

*If rejected:* the alternative is a 32px utility bar with only "File a Claim" and "Dealer
Login" visible on mobile and the other two in the drawer. Costs ~5% of first viewport.

### D2 — On mobile, Section 06's two decision branches stay side-by-side rather than stacking
**PROPOSED — requires owner approval**

Every other multi-column block stacks on mobile. The Multi-Year / FurnitureRx branch pair does
not; it compresses to two narrow columns instead.

*Rationale:* stacking ranks them. Whichever branch is on top reads as the preferred answer,
which would violate both "Multi-Year must not be disparaged" and "FurnitureRx does not
replace Multi-Year." Side-by-side at 375px is tight but preserves parity. This is a case where
the visual grammar carries a locked business rule.

### D3 — Hero (§02) and Market Pulse (§03) share one continuous mist band
**PROPOSED — minor, requires owner acknowledgement**

They are separated by a hairline rule and spacing rather than by a background change. They
remain two distinct sections with their own headings and `aria-labelledby`.

*Rationale:* both are quantitative surfaces, and the design system assigns background by
meaning rather than by alternation. No sequence change.

---

## C. Proposed deviations — content and claims

### D4 — "15+ Years" is omitted from Section 11
**PROPOSED — requires owner decision. This is the most important item in this document.**

The locked wireframe's Section 11 sketch lists `15+ Years` as one of eight Why-RAP items.
**That figure does not appear in DECISIONS.md, MASTER_SPEC.md, or any owner-approved
material.** Under AGENT_RULES §15 ("do not invent... if unsupported, flag for owner review")
it has been left out rather than published. The eighth slot is filled with
**"Multi-program capability — one partner across all three economic paths"**, which is
supported by the three-path framework itself.

*Action requested:* either (a) confirm the tenure figure and its exact wording, and it goes
back in, or (b) confirm the substitute.

### D5 — Section 07 labels the $8 as "Dealer commission", not "Dealer Payment"
**PROPOSED — requires owner acknowledgement**

The locked wireframe sketch reads `Dealer Payment  $8 / successful payment`. DECISION 020
(later, and clarifying) defines it as a **dealer commission**. The prototype uses
"Dealer commission — $8 per successful monthly payment" and states "the dealer pays nothing
to participate" as a separate line so the $0 remit and the $8 commission cannot be conflated.

### D6 — The ~70% figure is attributed on-page as "Source: RAP program experience"
**PROPOSED — requires owner approval of the attribution wording**

DECISION 020 records the figure as owner-supplied and usable. A published statistic with no
attribution invites challenge. The prototype attributes it inline. Owner should approve the
attribution phrase, or supply the correct one (e.g. "RAP dealer program data", "RAP internal
estimate"), or instruct that it run unattributed.

### D7 — Section 05 adds the line "They are not alternatives to one another — most dealers will use more than one."
**PROPOSED — requires owner approval**

This is new copy, not in any approved document. It is the clearest single sentence available
to enforce "FurnitureRx does not replace Multi-Year" and "all three are RAP strategies" at the
moment the reader first meets the three paths. If "most dealers will use more than one" is not
a supportable statement about RAP's actual dealer base, it must be cut or softened to
"they are designed to be used together."

### D8 — Section 05 cards carry a small timing diagram
**PROPOSED — minor**

Each of the three cards shows a tiny abstract mark encoding *when* the income arrives
(repeating pulses / one block / an accruing wedge). It is the only visual difference between
otherwise identical cards, and it is informational rather than promotional. No card is
elevated, tinted, or badged.

### D9 — Newswire headlines are set in sans, not the editorial serif
**PROPOSED — minor**

Deliberate. The serif is RAP's own voice (hero, Research, section headlines). Newswire
aggregates third-party reporting. Setting wire headlines in Inter is the clearest way to keep
a visitor from reading aggregated news as RAP editorial, which supports the
Newswire / Research separation requirement.

### D10 — The gated panel in §08 exposes the *labels* of the gated controls
**PROPOSED — requires owner security decision**

The blurred panel shows, at 3px blur and 50% opacity, field labels including
"Cancellation assumption", "Cumulative dealer commission", and "Multi-Year comparison".
No values, rates, or formulas are shown. The intent is to demonstrate that a real model
exists — which is what makes the gate worth passing.

*Risk:* a competitor learns which variables the model contains. Owner should confirm this is
acceptable, or the labels can be replaced with meaningless placeholder text at the cost of
some persuasive force.

---

## D. Proposed deviation — design system

### D11 — A third typeface (IBM Plex Mono) is proposed beyond sampled kiosk DNA
**PROPOSED — requires owner approval**

The palette is pixel-sampled from RAP-owned surfaces and adds no invented brand color. The
type is not: the kiosk uses a display serif plus a UI sans, and this system adds a monospace
for timestamps, deltas, source lines, and calculator fields.

*Rationale:* Newswire, Market Intelligence, and the calculator all need tabular alignment and
a machine-read register that a proportional sans cannot supply, and the mono is what produces
the "financial intelligence terminal" half of the approved visual character.

*If rejected:* Inter's tabular-figure feature covers alignment, and metadata falls back to
Inter at 12px with letterspacing. The site would read slightly softer and less like a data
product.

### D12 — Playfair Display is a substitute, not a match
**PROPOSED — requires owner input**

The kiosk headline face is a high-contrast Didone-style display serif. Playfair Display is the
closest **Google-hosted** equivalent and is what the prototype uses. If the kiosk licenses a
commercial face (the letterforms suggest a Canela/Editorial-class serif), supplying that
license would give an exact brand match and is preferable. Please confirm which face
kiosk.furniturerx.net uses and whether the license extends to the corporate site.

---

## E. Open questions requiring owner input

| # | Question | Blocks |
|---|---|---|
| **Q1** | Is "15+ years" (or any tenure figure) an approved claim? See D4. | Section 11 copy |
| **Q2** | Which Market Pulse metrics are the four? The prototype uses furniture store sales, existing-home sales, housing starts, and furniture CPI as placeholders. Confirm the metric list and whether the research draft's figures may be published before Phase 9 wires live sources. | Section 03, Phase 9 |
| **Q3** | Which Why-RAP capability statements are factually approved? The prototype asserts: claims administered by RAP rather than a third party; programs backed by underwriting partners; enrollment/billing/reporting/claims built in-house; US-based service with self-serve claim filing. These are drawn from the kiosk and the research draft, **not from an approved facts document.** Each needs a yes/no. | Section 11 |
| **Q4** | Can RAP supply the corporate logo as vector? The prototype uses a placeholder mark. Also: is "Value Through Innovation" still the current tagline? | Header, footer, all pages |
| **Q5** | The flagship research report — is the supplied draft the version that publishes? It cites a **4.7-star** Google rating in two places, which DECISION 021 corrects to **4.5**, and it carries ~15 third-party statistics that may need review before appearing under the RAP masthead. | Section 10, Phase 11 |
| **Q6** | Where does "Talk to RAP" (§12) go? There is no Contact page in the locked site map, only a footer link. Contact form, phone, or calendar booking? | Section 12 |
| **Q7** | Where does "See the customer experience" (§07) go — a RAP-hosted product tour page, or a deep link to kiosk.furniturerx.net? DECISION 023 covers only the four utility functions. | Section 07 |
| **Q8** | Should calculator access be time-limited? The prototype shows "access expires 23 Nov 2026" as a plausible default. Confirm whether access expires, and after how long. | Phase 7 |
| **Q9** | Should the authorized calculator offer **Export PDF**? It is the natural feature, and it is also the most likely route for gated dealer economics to leave the gate. Options: no export; watermarked export naming the dealership; or export available only to the RAP rep. | Phase 8 |
| **Q10** | How many Newswire items on the homepage? Prototype shows 5 desktop / 3 mobile. MASTER_SPEC marks the count flexible. | Section 09 |
| **Q11** | Does Section 06's "~70%" appear anywhere else on the site, or only once on the homepage? Repeating a single owner-supplied figure across many pages increases exposure if it is later revised. | Sitewide |
| **Q12** | Care Kits and Repair Safety Net appear nowhere on the homepage, per DECISION 019. Confirm they belong on the FurnitureRx program page, ranked below the $19.99 subscription. | Phase 6 |
| **Q13** | The Section 07 kiosk reproduction repeats coverage copy transcribed from the live kiosk: "$5,000 total coverage", "rips, burns, mechanical & electrical failure", "frames, springs, motors, switches, controls", "repair first, replace if repair isn't enough", "24/7 claim filing — same-day processing". These are **live published product statements, not owner-approved facts in DECISIONS.md.** Confirm they may be mirrored on the corporate site, or supply the approved short-form coverage summary. | Section 07 |

---

## F. Things deliberately not done, and why

- **No photography of any kind.** The prototype contains zero images. Adding retail
  photography later is possible, but the "generic sofa hero" trap is avoided entirely by
  starting from a system that does not need it.
- **No icon set.** Section 11 is typographic. Adding icons later would require an
  icon-selection pass and would risk the prohibited decorative grid.
- **No chart library assumed.** Every chart is inline SVG. This keeps Phase 4's chart-library
  decision genuinely open.
- **No framework, no npm, no build step** in `prototype-ui/`. It is disposable design output,
  per IMPLEMENTATION_PLAN Phase 2.
- **No UI_SPEC.md written.** That is Phase 3 and requires owner UI approval first.
- **No git commit, no deployment, no scaffold, no dependency added.**

---

## G. Recommended next step

Owner reviews `prototype-ui/home.html` and `prototype-ui/economics-gate.html` in a browser at
desktop and phone width, and returns:

1. approve / revise the visual direction;
2. a decision on D4 (the tenure figure) and Q3 (the Why-RAP claims), which are the only two
   items that would put unsupported statements on a live page;
3. a decision on D10 (whether gated control labels may be visible) and Q9 (PDF export), which
   are the two items with a competitive-exposure dimension;
4. approval or rejection of D11 (the monospace typeface) and an answer on D12 (the display
   serif license).

On approval, Phase 3 writes `docs/project/UI_SPEC.md` and records the approved deviations in
`DECISIONS.md`.

**STOP — awaiting owner review.**
