# Risk Assurance Partners — CLARITY & WAYFINDING PROPOSALS

**Status: PROPOSED — requires owner approval. Nothing here has been implemented.**
Prepared as an independent review of `prototype-ui/home.html` against owner feedback dated
2026-08-24. Reviewer did not design the prototype.

**Scope discipline.** The owner approved CSS, layout, and color. This document proposes **no**
palette, typography, or spacing change; **no** change to the three-path structure, the gating
strategy, the Newswire / Market Intelligence / Research separation, or the RAP↔FurnitureRx
brand hierarchy; and **no** reordering of the fourteen homepage sections. It proposes changes
inside three of them plus one site-map addition.

**Authority note.** `LOCKED_WIREFRAME.md` §02 defers "what RAP does" out of the hero. The owner
feedback of 2026-08-24 deliberately flexes that. Per `AGENT_RULES.md` §2, owner instruction
outranks the locked wireframe. The proposals below therefore add orientation *alongside* the
dealer-first opening rather than replacing it — **in every option the H1 is untouched.**

---

# 1. First-viewport audit

## 1.1 Method

What a cold visitor — no prior knowledge of Risk Assurance Partners — can know at `scrollY = 0`,
with no hover, no tap, and no scroll. Measured against the live prototype markup at 1440×800
(desktop) and 375×667 (mobile). Scroll depths below are approximate and stated in screen-counts,
not pixels.

## 1.2 Desktop, 1440×800 — what is actually on screen

| Element | Content |
|---|---|
| Utility bar, 38px ink | File a Claim · Manage My Plan · Customer Support · **Dealer Login →** |
| Header, 84px | `Risk Assurance Partners` / `Value Through Innovation` · Dealer Economics · Programs ▾ · Newswire · Market Intelligence · Research · Why RAP · **[ See My Economics → ]** |
| Hero eyebrow | "The economics of furniture retail" |
| Hero H1 | "Your expenses recur every month. *Your furniture sale doesn't.*" |
| Hero lead | "Create more economic value from customers you already paid to acquire — without adding inventory, advertising, floor space, or material operating burden." |
| Hero CTAs | [ See My Economics → ] [ How RAP Helps ] |
| Hero figure | Figure 1 — expense bars vs one transaction vs recurring value |

## 1.3 Desktop — what the visitor knows, and does not

**Knows:**
- The company is called Risk Assurance Partners.
- The subject is furniture retail, and the reader is the one carrying inventory, advertising,
  and floor space — so the audience is *inferable* as a furniture retailer.
- There is something called "Dealer Economics" and something called "Programs".

**Does not know — and cannot find out without scrolling or hovering:**

1. **The category.** The words *protection*, *warranty*, *coverage*, *plan*, *claims*, and
   *insurance* appear **nowhere** in the first viewport. The only category-adjacent word is the
   nav label "Programs", which is a hover-only dropdown whose contents are invisible at rest.
   The hero as written could belong verbatim to a retail consultancy, a lender, a loyalty-CRM
   vendor, a payments company, or a marketing agency. **This is the owner's finding, and it is
   correct.**
2. **The audience, stated.** The word "dealer" appears three times in the first viewport
   (Dealer Login, Dealer Economics, and inside the CTA flow) — but only as *chrome*, never as a
   statement. The hero never says who this is for. A visitor must reverse-engineer it from the
   nouns in the lead paragraph.
3. **That three distinct programs exist.** Subscription / Multi-Year / Reinsurance first appear
   in Section 05, roughly the **third screen** down. "Programs ▾" is the only signal, and it is
   a hover.
4. **FurnitureRx.** Does not appear in the first viewport, in the visible nav, or anywhere above
   Section 07 — roughly the **fifth screen** down.
5. **How to reach a human.** There is no contact path of any kind in the first viewport. See §1.6.

**Compounding factor.** The second thing a cold visitor sees (Section 03, Market Pulse) is four
macroeconomic stat tiles with sources and update stamps. For a visitor who does not yet know
what RAP sells, this actively reinforces the wrong inference — *this is a data or research
firm*. The orientation gap is not neutral; the page's own next move deepens it.

## 1.4 Mobile, 375×667 — materially worse

At ≤680px `.utility{display:none}` removes the entire utility bar. At ≤1024px `.nav` and
`.hdr__cta` are also hidden. The first viewport is therefore:

- 64px header: wordmark, "Value Through Innovation", ☰
- Hero eyebrow, H1 (34px, 3–4 lines), lead (~6 lines)
- The two hero buttons land at roughly 640px — **at or just below the 667px fold.**
- The hero figure never appears in the first viewport.

**Consequences on mobile:**
- **All four customer/dealer utility functions are invisible.** File a Claim, Manage My Plan,
  Customer Support and Dealer Login are two taps deep — open the drawer, then scroll *past*
  seven Playfair-30px nav items to reach them at `margin-top:auto` at the drawer foot.
- The primary CTA "See My Economics" has **no header presence at all** below 1024px.
- Orientation is identical to desktop, i.e. absent, but with less type on screen to infer from.

This is the sharpest failure in the prototype and it maps exactly onto the owner's second
complaint. It is also a **proposed-but-unapproved deviation** (`DEVIATION_NOTES` D1), not a
locked decision — `LOCKED_WIREFRAME` §4 lists "1. Utility" as the first item of the mobile
sequence. Reversing it moves the prototype *toward* the lock, not away from it.

## 1.5 Wayfinding audit — the four things the owner named

| Function | Desktop at 0px | Mobile at 0px | Verdict |
|---|---|---|---|
| **Dealer Login** | Present, brass, but 12px mono at 72% white — the smallest, lowest-contrast text on the page | Hidden; 2 taps + in-drawer scroll | Present but under-weighted; effectively absent on mobile |
| **File a Claim** | Same treatment; first item of a three-link cluster with no label explaining who it is for | Hidden; 2 taps + in-drawer scroll | Same |
| **Programs** | Nav item is a `<button>` with **no destination** — hover-only, does nothing on click, `aria-expanded` never updates. There is no Programs page in the site map. Two of the three dropdown items point at the same anchor (`#paths`) | Drawer "Programs" → `#paths` (works) | **Broken on desktop.** "View the programs without working through the entire page" is currently not possible by clicking |
| **Contact** | **None.** Not in nav, not in the utility bar, not in the hero | **None** | Absent |

**Additional wayfinding defects found:**
- The sticky header does **not** implement its own specification. `WIREFRAMES.md` §00 states
  "the sticky header retains only `Dealer Login`." It retains nothing — once the utility bar
  scrolls away, there is no login or claims path anywhere on screen for the remaining ~90% of
  the page.
- Section 05's "Learn more →" links for **Multi-Year Protection** and **Reinsurance** are both
  `href="#"`. Two of the three programs have no destination anywhere in the prototype.
- Section 12's **"Talk to RAP"** is `href="#"`. The footer **"Contact"** is `href="#"`.

## 1.6 Contact path — the structural gap

`LOCKED_WIREFRAME` §13 lists **Contact** under the footer's Company group. `LOCKED_WIREFRAME` §1
Global Site Map does **not** contain a Contact page. The locked document is internally
inconsistent: it links to a page it never defines. `DEVIATION_NOTES` Q6 already flagged this and
it is still open.

The practical result on the deployed prototype is that a visitor who wants to talk to RAP has
exactly one route — `See My Economics`, which is a *gated calculator access request reviewed by
Sales*. That is a qualification funnel, not a contact path. A dealer who simply wants to ask a
question, and a consumer holding a FurnitureRx plan, are both funnelled into a six-field lead
form or nothing.

## 1.7 "Am I at the right site?" — the marketing-response scenario

A visitor arriving from a FurnitureRx ad, kiosk card, or dealer mailer lands on a page where the
string "FurnitureRx" does not appear until roughly the fifth screen. The one sentence written
specifically to resolve this — *"FurnitureRx is a product of Risk Assurance Partners"* — is the
**last line of the footer**. The reassurance exists; it is positioned where only a visitor who
has already decided to stay will ever read it.

## 1.8 Honest separation: design failure vs. prototype artifact

Part of the wayfinding complaint is placeholder noise — roughly twenty `href="#"` links that
production will resolve. But the three findings below are **design**, not placeholders, and
would ship as-is:

1. No statement of category, offering, or audience in the first viewport (desktop and mobile).
2. Utility navigation entirely hidden on mobile, and non-persistent on desktop after one scroll.
3. No Contact destination exists to link *to* — the site map has no such page.

**Audit verdict:** the owner's read is accurate and the causes are specific and cheap to fix.

---

# 2. Recommendations

Ranked by (clarity gained) ÷ (narrative + space + governance cost). Each carries two flags:
**Owner approval?** and **Wireframe amendment?**

---

## R1 — Hero eyebrow becomes an orientation kicker

**Rank: 1 (do this regardless of what else is chosen).**
**Owner approval: yes, copy only. Wireframe amendment: no.**

**What changes.** Section 02, one line. The eyebrow currently reads "The economics of furniture
retail" — it names the *topic*, which the H1 then names again. It is the cheapest unused line on
the page. Replace it with a line that names company, category, and audience.

**Where.** `prototype-ui/home.html`, the `<p class="eyebrow">` immediately above the H1. No
layout change, no new element, zero added vertical space.

**Draft copy — ranked:**

> **A.** `RISK ASSURANCE PARTNERS · PROTECTION PROGRAMS FOR FURNITURE RETAIL DEALERS`
>
> **B.** `PROTECTION PROGRAMS FOR FURNITURE RETAIL DEALERS`
>
> **C.** `RISK ASSURANCE PARTNERS · PROTECTION PROGRAMS FOR FURNITURE RETAIL`

A is recommended: it is the only version that binds the unfamiliar company name to a category in
one read. At 12px it will not carry the whole load — pair it with R2.

**Why it fixes the feedback.** Puts category and audience above the H1, in the first 100px of
content, without touching the dealer-first opening.

**Cost.** None structurally. The eyebrow becomes long for its type size (≈58 characters); at
375px it wraps to two lines, costing ~18px. The locked wireframe's §02 sketch contains no eyebrow
at all, so this sits inside "UI Agent Freedom — improved wording."

---

## R2 — Orientation strip at the foot of the hero

**Rank: 2 (the primary fix; this is the recommendation).**
**Owner approval: yes. Wireframe amendment: NO if built inside §02 — YES if built as a new section.**

**What changes.** A compact band added **inside Section 02**, below the hero CTAs, spanning the
full content width, closing the hero. It is deliberately *not* a new section: building it inside
§02 means the fourteen-section sequence is untouched and no wireframe amendment is required.
Building the same content as a new band between §02 and §03 would be a sequence change and
**would** require an amendment. Recommend the in-hero placement.

**Where.** `prototype-ui/home.html` §02, after `.btns`, above the section close. On desktop it
sits under the two-column hero and spans both columns.

**Draft copy:**

> **Lead line (Inter, ~17px):**
> Risk Assurance Partners builds furniture protection programs for retail dealers — and the
> dealer economics behind them.
>
> **Three items, strict visual parity, hairline-separated:**
>
> | `SUBSCRIPTION` | `MULTI-YEAR` | `REINSURANCE` |
> |---|---|---|
> | **FurnitureRx** — recurring protection income, monthly for the customer. | **Multi-Year Protection** — protection income at the original sale. | **Reinsurance** — underwriting and investment economics. |
> | View → | View → | View → |
>
> **Footnote line (Plex Mono, 11px, one line):**
> FurnitureRx is a product of Risk Assurance Partners.

**Why it fixes the feedback.** This single element answers all three of the owner's points at
once: *what we do* (protection programs), *who it is for* (retail dealers), *what our programs
cover in structure* (three named paths), *the right-site check* (FurnitureRx named and attributed
in viewport 1), and *view the programs without working through the entire page* (three jump
links). It is also positioned **before Market Pulse**, which is what stops §03's macro tiles from
reinforcing the wrong inference.

**Cost — narrative.** Real, and worth naming plainly: the three paths appear ~2½ screens before
Section 05, the section built to earn them. Section 05's reveal is softened. Three mitigations:
(i) the strip is drawn as a **directory object** — mono labels, hairlines, no headline weight,
no fill — so it reads as wayfinding, not as a pitch; (ii) it carries **no economics** — no
`$19.99`, no `$8`, no coverage terms, no claims language, so §07 and §08 lose nothing; (iii)
Section 05 keeps the full argument, the timing diagrams, and the caveat copy.

**Cost — space.** ~120–150px desktop. On mobile, stacked, ~260px — which pushes the already
below-fold hero figure further down. Acceptable: on mobile the figure is not first-viewport
content in any case. If the mobile cost is judged too high, render the three items as a single
horizontally-scrolling row of chips (~90px).

**Constraint compliance.** `LOCKED_WIREFRAME` §02 forbids *opening* with FurnitureRx, coverage,
history, `$19.99`, or sofa photography. The strip opens with none of these — the H1 and lead are
unchanged and still open on the dealer's economic problem. The strip names FurnitureRx as one of
three peers, below the fold-line of the argument, with no price and no coverage terms. Parity per
`DESIGN_SYSTEM` §6 is mandatory: identical width, weight, type size, and link treatment across
all three; no ember rule on the FurnitureRx item.

---

## R3 — Utility navigation: make it survive mobile and scroll

**Rank: 3.**
**Owner approval: yes — but only as a revision to an unapproved proposal (D1). Wireframe amendment: no; this moves back toward the lock.**

Four changes, all inside Sections 00 and 01:

**(a) Stop hiding the utility bar on mobile.** Replace `.utility{display:none}` at ≤680px with a
compact 32–34px ink strip carrying **two** links only:

> `FILE A CLAIM` &nbsp;&nbsp;&nbsp; `DEALER LOGIN →`

Manage My Plan and Customer Support move into the drawer. This is precisely the fallback that
`DEVIATION_NOTES` D1 already priced at "~5% of first viewport" — and 5% is the correct trade for
making the two highest-intent actions on the site visible instead of two taps deep.

**(b) Move the utility links to the *top* of the drawer**, above the primary nav, not to
`margin-top:auto` at its foot. Today they are below the drawer's own fold on a 667px screen.

**(c) Raise desktop legibility one step.** 12px → 13px, `rgba(255,255,255,.72)` → `.88`. Add a
1px brass hairline box around `Dealer Login →` so it reads as an action, not a link. The bar stays
38px on ink and stays unmistakably secondary — `MASTER_SPEC` asks for "easy to find, visually
secondary", and it is currently the second without being the first.

**(d) Label the customer cluster.** Prefix the left cluster with a mono label so a consumer knows
the row is addressed to them:

> `CUSTOMERS` · File a Claim · Manage My Plan · Customer Support &nbsp;&nbsp;&nbsp;&nbsp; `DEALER LOGIN →`

Do **not** label it "FurnitureRx customers" — Multi-Year customers file claims through the same
functions, and that label would be factually wrong.

**Why it fixes the feedback.** "We need dealer login and file-a-claim" becomes true at 0px scroll
on every device. Cost: ~34px of mobile first viewport; nothing on desktop.

---

## R4 — Sticky header retains Dealer Login (and File a Claim on desktop)

**Rank: 4. Owner approval: no — this implements an existing annotation. Wireframe amendment: no.**

`WIREFRAMES.md` §00 already specifies "the sticky header retains only `Dealer Login`." The
prototype does not do it. Implement it: on condense (scrollY > 40) the header drops the "Value
Through Innovation" line — freeing exactly the vertical space needed — and gains `Dealer Login →`
in brass at the right of the nav row, plus `File a Claim` at ≥1280px only.

**Why.** Without it, the utility functions exist for one screen out of roughly eleven. Cost:
header crowding at 1024–1280px, resolved by the tagline drop and by showing only Dealer Login
below 1280px.

---

## R5 — Programs becomes reachable in one click

**Rank: 5.**

Two tiers. Recommend the minimum now; the fuller version is a genuine site-map change.

**R5-min — no approval required, no amendment. Link plumbing only:**
- Make the nav "Programs" element focusable/clickable with a real destination
  (`#paths` on the homepage; `/programs` once program pages exist), keeping the dropdown for
  hover and adding keyboard open/close with a live `aria-expanded`.
- Point the three dropdown items at the three **already-locked** program pages instead of two of
  them sharing `#paths`.
- Fix the dead `Learn more →` links on the Multi-Year and Reinsurance cards in Section 05.

**R5-full — owner approval: yes. Wireframe amendment: yes (adds a node to §1 Global Site Map):**
Add a **Programs index page** at `/programs` — the three paths at parity, each with a one-
paragraph summary and a link through. This is what "an easy way to view the programs we offer
without working through the entire page" asks for in its strongest reading, and it gives the
header nav item a real home.

**Cost.** R5-min is defect repair. R5-full adds one page and one site-map node; it does not touch
the homepage, the narrative, or the nav order.

---

## R6 — Contact: add the page the locked wireframe already links to

**Rank: 6. Owner approval: yes. Wireframe amendment: yes — small.**

**The minimal fix, recommended.** Add **Contact** to `LOCKED_WIREFRAME` §1 under Company /
Why RAP. This resolves an existing inconsistency rather than introducing a new concept: §13
already lists Contact in the footer's Company group; only the site map omits it.

Then, three link changes and no new homepage section:

1. **Utility bar, right cluster:** add `CONTACT` beside `DEALER LOGIN →`.
   Present on every page, at 0px scroll, on desktop and mobile.
2. **Section 12:** point `Talk to RAP` at `/contact` (currently `href="#"`).
3. **Footer:** `Contact` under Company already exists — give it the destination.

**Contact page contents (minimum viable):** a routing choice — *I'm a dealer* / *I have a
protection plan* / *Media or other* — a short form, RAP's published phone number and business
hours, and a direct link to File a Claim for consumers who landed there by mistake. **The phone
number, email address, and hours must be supplied by the owner** — they are not in any approved
document and must not be invented (`AGENT_RULES` §5, §15).

**Explicitly not recommended:**
- **Contact in the primary navigation.** `MASTER_SPEC` warns against reverting to
  *About → Features → Products → Contact*, and the seven-item nav order is locked. The utility
  bar carries it without weakening dealer-first nav.
- **A contact section on the homepage.** That is a fifteenth section and a sequence change, and
  the owner asked for a way to get in touch, not for more homepage.

---

## R7 — "Right site?" reassurance for marketing arrivals

**Rank: 7. Owner approval: yes, copy only. Wireframe amendment: no.**

Mostly delivered by R1, R2, and R3 together. Two additions complete it:

**(a)** The R2 strip's footnote line — *"FurnitureRx is a product of Risk Assurance Partners"* —
is the single sentence that resolves the mismatch between the brand on the ad and the brand on
the page. Moving it from the last line of the footer into the first viewport is the whole fix.
Keep the footer instance as well.

**(b)** Give the `/contact` page and the `<title>`/meta description the same job. Current title:
`Risk Assurance Partners — Homepage Design Prototype`. Production should read:

> `Risk Assurance Partners — Protection Programs for Furniture Retail Dealers`

A visitor who searched the company name from a mailer sees the category in the search result and
the browser tab before the page even paints. Zero cost.

---

## R8 — Header descriptor line (sitewide orientation)

**Rank: 8. Owner approval: yes — this is brand tagline territory. Wireframe amendment: no.**

The 9px mono line under the wordmark currently reads `VALUE THROUGH INNOVATION`. It occupies the
one slot on every page of the site reserved for saying what the company is, and it says nothing a
stranger can use. `DEVIATION_NOTES` Q4 already asks whether the tagline is current.

**Options:**
1. **Replace:** `FURNITURE PROTECTION PROGRAMS` — orientation on every page, interior pages
   included. This is the only recommendation here that fixes clarity beyond the homepage.
2. **Keep and defer:** retain the tagline, and let R1 + R2 carry the homepage. Interior pages
   keep the orientation gap.

Recommend 1 if the owner is willing to retire or relocate the tagline; the tagline can move to
the footer lockup, where it already appears. Do not stack both lines in the header — 84px does
not hold three lines of lockup legibly.

---

## R9 — Fresh-eyes observations

Not relitigating approved decisions; these are comprehension issues a cold visitor hits.

1. **No phone number exists anywhere on the site.** For the exact scenario the owner described —
   someone holding a marketing piece, checking whether this is the right company — a phone
   number in the utility bar or footer is the classic reassurance element. Owner must supply it;
   it is not in any approved document.
2. **The primary CTA vanishes below 1024px.** `.hdr__cta{display:none}` removes "See My
   Economics" from the header on every tablet and phone; it survives only inside the drawer. The
   site's single primary conversion verb has no persistent presence on the majority of sessions.
   Either keep a compact primary CTA in the mobile header, or accept it — but note that the hero
   CTAs land at ~640px on a 667px screen, so on the most common phone the visitor may see *no*
   call to action in viewport 1.
3. **Section 05 never uses the word "programs."** Its heading is "Three ways to create more value
   from the same customer." A visitor scanning for *what do you sell* does not match on that
   phrase, and the nav label ("Programs") and the section that answers it never agree on
   vocabulary. Change the §05 eyebrow from `RISK ASSURANCE PARTNERS` to
   **`RISK ASSURANCE PARTNERS PROGRAMS`** — keeps master-brand attribution, adds the scan target,
   costs nothing, changes no structure.
4. **Two of three programs are dead ends.** Covered in R5-min, but worth restating as a business
   risk: the site currently makes Multi-Year and Reinsurance unclickable everywhere they appear,
   which is a subtle form of the demotion the three-path rule exists to prevent.
5. **Accessibility, implementation-level (not strategy):** no skip-to-content link; the
   checkbox-hack drawer cannot close on `Esc` and does not trap focus, though `DESIGN_SYSTEM` §8
   claims both; `aria-expanded` on the Programs button is hard-coded `false`. Flagged for the
   build phase, not for this review.

---

# 3. Recommended minimum change set

The smallest coherent set that fully answers all three of the owner's points. Six items; two
require an owner copy decision, one requires a small wireframe amendment, and none touches the
palette, the typography, the section sequence, or the three-path structure.

| # | Change | Answers | Owner approval | Wireframe amendment |
|---|---|---|---|---|
| 1 | **R1** — hero eyebrow becomes `RISK ASSURANCE PARTNERS · PROTECTION PROGRAMS FOR FURNITURE RETAIL DEALERS` | Clarity | Copy only | No |
| 2 | **R2** — orientation strip at the foot of §02: one-line statement + the three named programs at parity + jump links + "FurnitureRx is a product of Risk Assurance Partners" | Clarity · Programs · Right-site | Yes | **No**, if built inside §02 |
| 3 | **R3** — utility bar persists on mobile (File a Claim + Dealer Login), utility links move to the top of the drawer, one step more contrast on desktop, `CUSTOMERS` label on the left cluster | Wayfinding | Yes (revises unapproved D1) | No |
| 4 | **R4** — sticky header retains `Dealer Login →` on condense | Wayfinding | No | No |
| 5 | **R5-min** — Programs nav gets a real destination; the three dropdown items and the two dead §05 "Learn more" links get theirs | Programs | No | No |
| 6 | **R6** — add **Contact** to the site map; surface it in the utility bar and the footer; point `Talk to RAP` at it | Contact | Yes | **Yes** — one node |

**What this set delivers at `scrollY = 0`, desktop and mobile:** the company name, the category
(protection programs), the audience (furniture retail dealers), the three programs by name with
links, the FurnitureRx relationship, File a Claim, Dealer Login, and Contact — while the H1, the
lead, the hero figure, the fourteen-section sequence, and the dealer-first argument remain exactly
as approved.

**Deliberately excluded from the minimum set**, available if the owner wants more: R5-full (a
`/programs` index page), R8 (retiring "Value Through Innovation" for a sitewide descriptor), and
R9.2 (a persistent mobile header CTA).

**Owner decisions needed to proceed:**
1. Approve or revise the R1 eyebrow copy and the R2 strip copy.
2. Confirm the R2 strip is built **inside** §02 (no amendment) rather than as a new section.
3. Approve the Contact site-map amendment, and supply the phone number, email, and hours.
4. Decide R8 — does `VALUE THROUGH INNOVATION` stay in the header?

**STOP — awaiting owner review. No other file has been changed.**
