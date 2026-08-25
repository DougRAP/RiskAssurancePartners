# R10 — Homepage Refactor Notes (read before editing home-r10.html)

To: Claude Code
From: Doug (via design review session)

`home-r10.html` supersedes the prior `home.html`. It is the same prototype —
same palette, type system, section inventory, DECISION history, sticky-header
JS, drawer, and prototype banner — refactored to fix three problems the owner
identified: an obtuse hero, bloated inter-section padding, and a missing trust
strip. Every change is marked with an `R10` comment in the file. Treat R10 as
the new baseline; do not revert any of the following without owner sign-off.

---

## 1. Hero rebuilt — clarity before cleverness

**Problem.** The old hero led with an aphorism ("Your expenses recur every
month. Your furniture sale doesn't.") and an abstract three-register diagram,
while the plain statement of what RAP *is* sat below the fold. A first-time
dealer visitor had to solve "what is this company?" before the argument could
land. The plan-type × underwriting-type matrix added a 2×2 taxonomy to the
first screen — Programs-page depth in a hero slot.

**What changed.**
- Eyebrow: `For furniture & mattress retailers` — audience-first, replacing
  the four-product list.
- H1: `Turn one furniture sale into recurring dealer income.` — states the
  offer in dealer language. The `.acc` italic-ember treatment is retained.
- The original aphorism moved into the `.lead`, where it now supports the
  headline instead of substituting for it. Nothing was deleted — resequenced.
- Hero figure: reduced from three registers to one — the sale (ember) followed
  by recurring income climbing to MONTH 24 (brass). Rationale: one register,
  one idea. The expenses-recur/transaction-doesn't story is told properly in
  Section 04 (the ink section), so the hero was paying for it twice. The
  self-undermining figcaption ("carry no data claim") is now one line:
  `Illustrative — recurring program income after delivery.`
- The `.axes` matrix + `.orient__note` moved OUT of the hero into Section 05
  (#paths) as a collapsed `<details class="axes-fold">` labeled "How plan
  types and underwriting types combine." Copy is unchanged and remains
  owner-approved verbatim (DECISION 025). Collapsed by default: depth for the
  reader who wants it, invisible to the one who doesn't.
- The orientation strip keeps `.orient__desc` (owner-approved descriptor) and
  the three program cards; its top margin tightened from --s-9 to --s-7.

**Rule going forward:** the hero answers *who it's for* and *what RAP does*
before it argues *why it matters*. Do not move taxonomy, matrices, or
multi-register diagrams back into Section 02.

## 2. Vertical rhythm tightened

**Problem.** `.sec` padded 128px top AND bottom → 256px of air at every
boundary; ink sections were 160px → ~290px seams. Same-background adjacencies
(mist→mist) rendered as quarter-screen dead zones with a stranded hairline.

**What changed.**
- `.sec` padding: `var(--s-10)` → `var(--s-9)` (128 → 96px per side).
- `.sec--ink` padding: `var(--s-11)` → `var(--s-10)` (160 → 128px).
- New `.sec--tight` (64px) applied to content-dense sections: #newswire and
  #pulse.
- Safety net: `.sec--mist + .sec--mist` collapses its border and halves its
  top padding. The section order now alternates backgrounds so this should
  never fire, but it prevents regressions if sections are reordered later.
- Removed the inline 96px margins inside the ink section (SVG and closing
  lead are now --s-7). Internal element spacing tops out at --s-7 (48px);
  section padding handles the rest.
- Footer gained `border-top:1px solid var(--rap-ink-700)` so the two stacked
  ink sections (final CTA → footer) read as separate rooms.

**Rule going forward:** section-level whitespace comes only from `.sec` /
`.sec--tight` / `.sec--ink`. Do not add inline `margin-top` values above
--s-7 to create separation between sections — if a seam looks wrong, fix the
background alternation, not the margins.

## 3. Trust strip added (new Section 02b)

**Problem.** Every proof point — the 4.5★ Google rating, 15+ years, the
underwriting backing — was stranded in Section 11, eleven screens down.
Nothing validated RAP before the reader was asked to follow an economic
argument.

**What changed.** A slim `.trust` band sits directly below the hero: paper
background, hairline top/bottom borders, five items with vertical dividers —
Google rating, 15+ years, Gulf States underwriting, in-house claims
administration, categories served. Serif values over mono labels, consistent
with the tile/pub vocabulary. Responsive: 3-up at ≤1024px, 2-up borderless at
≤680px.

**Constraints:**
- The strip is the teaser; Section 11 (Why RAP) keeps the full `.rating`
  block and substance. Do not duplicate body copy between them.
- "Gulf States" as underwriting-partner language is **pending owner
  confirmation** of the approved dealer-facing phrasing (see HTML comment).
  Do not expand, restyle, or add legal qualifiers to it without asking.
- Do not add a dealer count or states-served figure unless the owner supplies
  an approved number. Never invent one.

## 4. Section resequenced — backgrounds now alternate

Market Pulse moved from position 03 to sit directly after Newswire (both are
intelligence content; it was interrupting the pitch two screens in). The
"changed customer" section switched to `sec--mist`. Resulting order and
backgrounds — **no two adjacent sections share a background**:

| # | Section | Background |
|---|---------|-----------|
| 02 | Hero | mist |
| 02b | Trust strip (new) | paper |
| 04 | You already paid to acquire | ink |
| 05 | Three paths (+ axes fold) | paper |
| 06 | Changed customer | mist |
| 07 | FurnitureRx | paper |
| 08 | Dealer economics | mist |
| 09 | Newswire (tight) | paper |
| 09b | Market Pulse (tight) | mist |
| 10 | RAP Research | cream |
| 11 | Why RAP | paper |
| 12 | Final CTA | ink |
| 13 | Footer | ink (hairline seam) |

**Rule going forward:** if you add or move a section, keep the alternation.
Nav order (Newswire → Market Intelligence) already matches the new page order.

## What did NOT change

Palette, fonts, radius, buttons, utility bar, header/condense behavior, mobile
drawer, kiosk reproduction, economics gate, research section, footer content,
ARIA patterns, reduced-motion and print rules, all placeholder/stub notes, and
all prior DECISION comments. No new dependencies, no build step — still one
file.

## Open items (flag to owner, don't ship silently)

1. Gulf States phrasing in the trust strip (above).
2. Hero H1 direction commits to the recurring-income angle. Owner's approved
   fallback if he wants program-neutral: "The protection program administrator
   built for furniture retail," with the recurring line staying in the lead.
3. The hero SVG and trust-strip proportions were verified structurally but not
   screenshotted — eyeball at 1440px, 1024px, and 390px before calling it done.
