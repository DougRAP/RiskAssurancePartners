# Risk Assurance Partners Website Refactor — DECISIONS

## Purpose

This is the authoritative project decision log.

Only approved project decisions should be recorded here.

When a later decision changes an earlier decision:
- add a new dated entry;
- identify the superseded decision;
- do not silently rewrite history.

## Decision 001 — Master Brand

**Status:** Approved / Locked

**Decision:** Risk Assurance Partners is the master corporate brand. RAP is accepted shorthand. FurnitureRx is a product of Risk Assurance Partners.

**Implications:**
- Global header/footer belong to Risk Assurance Partners.
- FurnitureRx may have a distinct product treatment but cannot become the master site brand.
- RAP Research, Newswire, Market Intelligence, Dealer Economics, Multi-Year Protection, and Reinsurance remain RAP properties.

## Decision 002 — Dealer-First Website Strategy

**Status:** Approved / Locked

**Decision:** The website will be dealer-need-first rather than provider-first.

**Required narrative:**

Dealer Need  
→ Market Conditions  
→ Economic Opportunity  
→ Three Economic Paths  
→ Changed Customer Behavior  
→ RAP Solutions  
→ Economic Proof  
→ Newswire / Market Intelligence / Research  
→ Why RAP  
→ Conversion

## Decision 003 — Core Dealer Economic Premise

**Status:** Approved / Locked

**Decision:** The website will be built around the premise that furniture dealers face recurring operating expenses while furniture transactions are episodic, so dealers need to create more economic value from customers they have already paid to acquire.

## Decision 004 — Three Economic Paths

**Status:** Approved / Locked

**Decision:** RAP will present three distinct economic paths:

1. FurnitureRx Subscription
2. Multi-Year Protection
3. Reinsurance

**Implications:**
- FurnitureRx does not replace Multi-Year Protection.
- Multi-Year Protection must not be disparaged.
- Reinsurance must not be represented as universally immediate profit.
- All three are RAP strategies.

Working concept:

> **Three Ways to Create More Value From the Same Customer**

Exact wording remains flexible.

## Decision 005 — FurnitureRx Economics

**Status:** Approved / Locked

Current FurnitureRx economics:
- Customer payment: **$19.99/month**
- Dealer remit: **$0**
- Dealer payment: **$8 per successful monthly payment**

Do not change these values without owner instruction.

## Decision 006 — Separate Information Products

**Status:** Approved / Locked

Newswire, Market Intelligence, and RAP Research remain separate.

### Newswire
**What happened?**

### Market Intelligence
**What is changing?**

### RAP Research
**What does it mean?**

They must not be collapsed into a generic Blog or Insights section without owner approval.

## Decision 007 — Newswire Operating Model

**Status:** Approved Direction

Newswire should be substantially self-maintaining.

Routine human editorial labor is not acceptable.

The eventual system should support automated:
- discovery;
- relevance filtering;
- quality filtering;
- deduplication;
- categorization;
- concise summaries;
- source attribution;
- original-source links.

Exact provider/architecture is not yet selected.

## Decision 008 — Market Intelligence Operating Model

**Status:** Approved Direction

Market Intelligence should be substantially self-maintaining through authoritative data feeds and automated updating.

The eventual page should support:
- latest value;
- trend;
- source;
- last updated;
- historical visualization.

Exact source list and technical architecture are not yet selected.

## Decision 009 — Primary Site Architecture

**Status:** Approved / Working Locked Version 1

Primary navigation:
- Dealer Economics
- Programs
  - FurnitureRx Subscription
  - Multi-Year Protection
  - Reinsurance
- Newswire
- Market Intelligence
- Research
- Why RAP

Primary CTA:
- **See My Economics**

Utility navigation:
- File a Claim
- Manage My Plan
- Customer Support
- Dealer Login

## Decision 010 — Homepage Narrative Order

**Status:** Approved / Locked Version 1

Homepage sections:
1. Utility Bar
2. Primary Header
3. Hero — dealer economic problem
4. Market Pulse
5. Fundamental Dealer Problem
6. Three Economic Paths
7. Changed Customer
8. FurnitureRx
9. Dealer Economics / Calculator Teaser
10. Furniture Retail Newswire
11. RAP Research
12. Why RAP
13. Final CTA
14. Footer

Structural sequence changes require owner approval.

## Decision 011 — Hero Strategy

**Status:** Approved Direction

The homepage hero begins with the dealer's economic problem, not RAP features, FurnitureRx, coverage, pricing, or generic furniture imagery.

Working hero:

> **YOUR EXPENSES RECUR EVERY MONTH.  
> YOUR FURNITURE SALE DOESN'T.**

Exact wording remains flexible.

Preferred visual:
- recurring dealer expenses versus episodic furniture transactions.

## Decision 012 — Multi-Year Positioning

**Status:** Approved / Locked

Multi-Year Protection remains an important RAP solution and must not be attacked or described as obsolete.

Working positioning:

> **Keep the sale that works. Add another way to say yes.**

## Decision 013 — Gated Dealer Economics Calculator

**Status:** Approved / Locked

The detailed dealer economics calculator will not be anonymously public.

Public pages show enough value to create interest, but the detailed model requires verified access.

Objectives:
1. deter casual competitor access;
2. capture qualified leads;
3. provide sales context.

The tool will be branded:

> **RAP Dealer Economics Calculator**

Initial access fields:
- First Name
- Last Name
- Company / Dealership
- Business Email
- Phone
- Role / Title

Preferred user experience:
- sales approval;
- secure email access / magic-link style access if appropriate;
- no unnecessary password creation.

## Decision 014 — Calculator Scope

**Status:** Approved Direction

Initial calculator focus:
- FurnitureRx Subscription economics.

Future expansion may include:
- Multi-Year Protection;
- Reinsurance.

Architecture should not unnecessarily prevent later expansion.

## Decision 015 — Visual Direction

**Status:** Approved Direction

Design character:

Modern B2B financial intelligence  
+ furniture retail  
+ modern technology  
+ editorial research

Avoid:
- traditional insurance/warranty visual clichés;
- excessive shield imagery;
- generic sofa hero photography;
- decorative icon grids;
- gratuitous glassmorphism;
- excessive gradients;
- unnecessary animation.

Exact typography, palette, spacing, and final design system remain pending UI approval.

## Decision 016 — Development Environment

**Status:** Approved Direction

The project will use:
- Git repository;
- Netlify production deployment;
- Supabase if needed/appropriate;
- Claude Code multi-agent development.

Exact frontend framework and backend architecture are not yet approved.

## Decision 017 — Agent Structure

**Status:** Approved Direction

Master:
- Fabel
- owns requirements integrity, coordination, integration, QA, and decision control.

UI/UX:
- Opus 5 specialist agent.

Implementation:
- additional Opus 5 maker agents after UI and technical architecture approval.

Maker agents should not begin before the shared foundation/design system is established.

## Decision 018 — Approval Gates

**Status:** Approved / Locked

Required sequence:

1. Source materials
2. Master requirements
3. Locked wireframe
4. Fabel confirms understanding
5. UI/UX phase
6. Owner approves UI
7. UI specification locked
8. Fabel proposes technical architecture
9. Owner approves architecture
10. Foundation build
11. Parallel implementation
12. Gated calculator / Supabase
13. Market Intelligence automation
14. Newswire automation
15. Research implementation
16. QA
17. Netlify staging
18. Owner approval
19. Production

Each gate requires explicit approval before the next phase begins.

## Decision 019 — Public Pricing Presentation

**Status:** Approved / Locked (Owner, 2026-08-23)

The website leads with the FurnitureRx Subscription at **$19.99/month**. That is the focus.

Product hierarchy:
1. **FurnitureRx Subscription ($19.99/month)** — primary; the lead offer of the main site.
2. **Care Kits** — secondary.
3. **Repair Safety Net** — tertiary; designed to appeal to consumers at checkout. It is **not** a lead offer on the main site.

Do not present "from $9.99/mo" framing on the corporate site.

## Decision 020 — Dealer Commission Facts

**Status:** Approved / Locked (Owner, 2026-08-23)

Clarifies Decision 005. The "$8 dealer payment" is a **dealer commission**: when a customer makes a successful $19.99 subscription payment, the dealer earns an $8 commission.

The dealer pays nothing to participate — the dealer sells the subscription program, which is designed to **complement** Multi-Year programs and capture the ~70% of customers who say "no" to Multi-Year plans (owner-supplied figure; usable).

Full commission schedule (owner-supplied):
- $19.99 subscription payment → **$8** dealer commission;
- Care Kit sale → **$20** dealer commission;
- Repair Safety Net sale → **$8** dealer commission;
- Stain plan → **$2** dealer commission.

Only the $19.99 subscription and its $8 commission are the main-site story (see Decision 019).

## Decision 021 — RAP Google Rating

**Status:** Approved (Owner, 2026-08-23)

RAP's Google rating is **4.5 stars**. The 4.7 figure appearing in the research draft is incorrect. Use 4.5 wherever a rating is cited.

## Decision 022 — Reinsurance Terminology

**Status:** Approved / Locked (Owner, 2026-08-23)

"Captive" and "Reinsurance" refer to the same RAP program. The website uses **Reinsurance** because dealers understand that term. Do not introduce "Captive" as a separate offering.

## Decision 023 — Customer Utility Function URLs

**Status:** Approved Direction (Owner, 2026-08-23)

Customer/dealer utility functions (File a Claim, Manage My Plan, Customer Support, Dealer Login) link to the existing kiosk site (kiosk.furniturerx.net) URLs. Exact route inventory happens in Phase 12.

## Decision 024 — Homepage Orientation & Clarity Fixes (R1–R6)

**Status:** Approved (Owner, 2026-08-24)

The owner approved the CLARITY_PROPOSALS.md minimum change set R1–R6:
- R1: hero eyebrow identifies who RAP is and who it serves;
- R2: orientation strip inside the hero section (what we do / who for / three programs at parity with jump links);
- R3: mobile retains a slim utility strip (File a Claim + Dealer Login); utility links top of drawer; customer cluster labeled "CUSTOMERS";
- R4: sticky header retains Dealer Login;
- R5: Programs nav and all three path "Learn more" links get real destinations;
- R6: Contact added to the site map — surfaced in utility bar and footer, target of "Talk to RAP"; NOT added to primary navigation.

## Decision 025 — Audience & Program Descriptor Copy

**Status:** Approved (Owner, 2026-08-24)

The owner rejected "Protection programs for furniture retail dealers" as too narrow. Approved descriptor (owner-supplied; spelling normalized):

> Protection programs for furniture & mattress retail dealers, as well as custom interior designer programs. Reinsurance, Subscription, Multi-Year & Standard programs — all home furnishings categories.

Owner-established facts now usable:
- audience includes furniture retailers, mattress retailers, and custom interior designer programs;
- coverage spans all home furnishings categories;
- program types may be described as Reinsurance, Subscription, Multi-Year & Standard programs.

**Sub-question resolved by Decision 026.**

## Decision 026 — "Standard Program" Definition

**Status:** Approved (Owner, 2026-08-24)

A **Standard Program** is one where the retail dealer does **not** receive underwriting profits through reinsurance participation.

Implications:
- "Standard" is a program *structure* (non-participating), not a fourth economic path;
- the locked three-path homepage section is unchanged;
- program pages may distinguish standard vs. reinsurance-participating structures where relevant.

## Decision 027 — Public Contact Details

**Status:** Approved (Owner, 2026-08-24)

- Phone: **1.800.732.5856** (confirmed)
- Email: **sales@raptns.com**
- Hours: **8:00 AM – 6:00 PM, Monday–Friday, EST**

## Decision 028 — Reinsurance vs. Standard Programs (supersedes 026)

**Status:** Approved (Owner, 2026-08-24)

Corrects Decision 026. Owner's definition:

- **Reinsurance programs** are a product unto themselves. They let a retailer take a share of the **underwriting profits** and save for retirement or build wealth.
- **Standard programs**: the vendor keeps those underwriting profits.

Implications:
- Reinsurance is not merely a "structure" variant of other programs — it is its own product (consistent with its position as one of the three economic paths);
- the retirement / wealth-building framing is owner-approved copy territory for Reinsurance (fits the existing rule that Reinsurance is not "immediate profit" — its value accrues over time);
- "Standard" describes non-participating programs where the vendor retains underwriting profits;
- the locked three-path homepage section is unchanged.

## Decision 029 — Two-Axis Program Model (clarifies 025/028)

**Status:** Approved (Owner, 2026-08-25)

The four descriptor terms are **two axes**, not four products:

**Protection plan types** (how the customer buys):
- **Subscription** (new): customer pays $19.99/month, can cancel at any time;
- **Multi-Year**: customer pays on average **$300 one time**; on cancellation receives only a prorated share back.

**Underwriting types** (who keeps underwriting profits):
- **Reinsurance** (well-known in the industry): the dealer shares in underwriting profits and gets **tax benefits**;
- **Standard**: the vendor (RAP) keeps the underwriting profits.

Implications:
- the three-path homepage section remains valid (Subscription, Multi-Year, Reinsurance as economic paths);
- explanatory copy/footnotes should present plan types and underwriting types as different dimensions;
- new approved facts: Multi-Year average one-time price ~$300 with prorated refunds; Reinsurance carries tax benefits for the dealer.

Owner noted this can be discussed further; treat as the current authoritative model.

## Decision 030 — Why-RAP Claims Approved

**Status:** Approved (Owner, 2026-08-25)

All four capability claims are correct and usable:
- claims administered by RAP in-house (not a third party);
- underwriting partner relationships;
- enrollment/billing/reporting technology built in-house;
- US-based service with self-serve claims.

Additionally:
- **4.5-star Google rating — very important, give it prominence;**
- **"15+ years" is accurate and approved** (resolves Q1/D4).

## Decision 031 — FurnitureRx Homepage Message Focus

**Status:** Approved (Owner, 2026-08-25)

Do **not** mirror kiosk coverage copy ($5,000 total coverage, 24/7 claim filing, etc.) on the homepage — wrong emphasis (resolves Q13).

The key FurnitureRx features to present:
- customer pays just **$19.99/month** — same coverage as multi-year programs;
- customer can **cancel, start, restart at any time — the customer is in control**;
- dealer pays RAP **nothing — zero remit**;
- dealer earns **recurring commission revenue**.

## Decision 032 — Primary CTA Renamed "Profit Calculator" (supersedes part of 009)

**Status:** Approved (Owner, 2026-08-25)

The primary CTA label changes from "See My Economics" to **"Profit Calculator"** ("See My Economics" was strange wording). The gated tool itself remains branded **RAP Dealer Economics Calculator**.

## Decision 033 — Corporate Tagline and Hero Eyebrow

**Status:** Approved (Owner, 2026-08-25)

- Corporate tagline (under the logo, header/footer) changes from "Value Through Innovation" to:
  > **Protection Programs for Home Furnishings Retail**
- Hero eyebrow changes to (revised same day to include Multi-Year):
  > **Reinsurance, Standard, Subscription & Multi-Year Plans**

Resolves open question Q4 (tagline half; vector logo asset still outstanding).

## Decision 034 — RAP Research Launch Content

**Status:** Approved (Owner, 2026-08-25)

RAP Research launches with **two** papers, both available on the Research index:

1. **"Furniture Retail Has Changed. Protection Has to Change With It."** (flagship; `docs/source/furniture-retail-research.docx`)
2. **"Compute, Credit & Couches — AI Data-Center Debt, the 10-Year Treasury, Housing Turnover, and the Outlook for U.S. Furniture Sales"** (research briefing, August 2026; `docs/source/compute-credit-couches-furniture-outlook.docx`)

The homepage Research section may continue to feature the flagship; the index lists both.

## Decision 035 — R10 Homepage Adopted (amends 010, 011, 033)

**Status:** Approved (Owner, 2026-08-25)

The owner-directed R10.2 homepage refactor is the new baseline. Key points:

- **Hero balance (amends 011):** the hero *sells RAP first and adds the dealer pain point in support* — headline "We turn one furniture sale into recurring dealer income.", expenses-recur line in the lead beneath it. The point is to sell RAP with dealer pain as support, not pain-first with RAP demoted. Two-line eyebrow: "Risk Assurance Partners / Protection Programs for Home Furnishings Retail"; header lockup carries no tagline (nav-width fix); footer keeps the tagline.
- **Trust strip (new section 02b):** 4.5★ Google rating · 15+ years · **A Rated underwriting** (do NOT name the underwriting partner publicly) · in-house claims · categories served.
- **Market Pulse relocated (amends 010):** moved from position 3 to sit with Newswire / Market Intelligence content. Original position was "over the top" on the problem-first direction.
- Two-axis matrix collapsed into a fold within the three-paths section; section rhythm tightened; backgrounds alternate.
- **Process note:** the design-flexibility clause in MASTER_SPEC is to be applied liberally — locked items protect the business narrative and facts, not design execution. Owner iterations supersede prior design lockups.

## Decision 036 — Hero Polish Copy & GM Comparison Illustration

**Status:** Approved (Owner, 2026-08-25)

- Eyebrow line 2 / tagline: **"Protection Programs for Home Furnishings Retailers & Designers"**
- H1: **"2X net income or earn recurring subscription profits."**
- Lead: **"You pay fixed costs every month even when furniture sales slow. Our protection programs — Subscription, Multi-Year, and Reinsurance — generate more net cash from every customer without added inventory, advertising, or sales expense."**
- Hero illustration: side-by-side gross-margin comparison with divider bar —
  **Subscription: $8 × 60 payments = $480 GM** · **Multi-Year: $250 retail × 75% = $180 GM**

New owner-supplied claims now in play: "2X net income"; 60-payment subscription illustration horizon; $250 average multi-year retail; 75% multi-year margin rate.

**Arithmetic resolved (Owner, 2026-08-25):** use round-number $180 math — **$250 retail × 72% = $180 GM**.

## Decision 037 — Standard Programs Added as Fourth Path (amends 004/009)

**Status:** Approved (Owner, 2026-08-25)

Standard Programs joins the homepage economic-paths section and the Programs navigation (abbreviation allowed where space requires). The paths section now presents four: FurnitureRx Subscription, Multi-Year Protection, Reinsurance, Standard Programs.

Copy constraints per Decisions 028/029: Standard = RAP retains the underwriting; dealer income without reinsurance participation. Do not disparage it relative to Reinsurance.

Site map: Standard Programs gets its own program page under Programs (built Phase 6).

## Decision 038 — Single Programs Page; Coverage Grids; Mini Calculators (supersedes parts of 037 wireframes)

**Status:** Approved (Owner, 2026-08-25)

- **One Programs page**, not four separate pages and not an index. Each program (FurnitureRx Subscription, Multi-Year, Reinsurance, Standard) is its own section on that page; homepage "Learn more" links jump to the matching section. Content per section may later grow (calculator, sample coverage, program options).
- **Homepage paths grid:** four cards in a row on desktop, stacked on mobile. Use owner-provided content; do not further organize.
- **No terms & conditions on the page.** Instead each program gets a coverage-grid illustration: coverage types as text (furniture, adjustable beds, mattress, rugs, outdoor), then a two-column checkmark chart — **Basic | Premium** — with an owner-provided coverage list in the left column.
- **Mini calculator** in the Subscription and Multi-Year sections. **Reinsurance and Standard** instead get bullet points on what each is a good fit for.
- **No FAQ.**
- Drop the formal non-disparagement phrasing rules — each program stands on its own. Owner will provide final copy; sample copy is acceptable in the interim.

## Decision 039 — Programs & Newswire Placeholder Pages; Mini-Calc Spec; Care Kits Facts

**Status:** Approved (Owner, 2026-08-25)

- Build placeholder **Programs** and **Newswire** pages per the approved PAGE_WIREFRAMES layouts; wire navigation to them.
- **Mini calculators** (Subscription & Multi-Year sections): user enters **annual units**; the per-unit rates (**$8** subscription, **$180** multi-year) are **editable**. Results shown as **annual** and **5-year**.
- **Subscription model (final; owner proforma, 2026-08-25 — supersedes the annual-units version):** per `docs/design/Subscription Proforma Dealer Standard 3.xlsx`. Input = **new subscription sales per month** (default 200) and editable dealer share per payment (default $8). 36-month cohort waterfall; each subscriber makes an average **36 payments** (fixed, displayed as an assumption); cumulative at month M = m × rate × M(M+1)/2 for M ≤ 36. Milestones at 6/12/18/24/30/36 months (defaults: $33,600 / $124,800 / $273,600 / $480,000 / $744,000 / $1,065,600); net per subscriber = rate × 36 = $288. Cancel-rate input exists in the private proforma but is NOT exposed publicly (Decision 013). Multi-Year: annual = units × rate; 5-year = annual × 5.
- Coverage-grid lists: placeholders until owner supplies.
- **Care Kits** appear at the bottom of both the Subscription and Multi-Year sections. Approved facts: kits are **drop-shipped to the customer or the dealer can stock them**; on drop-ship, the dealer earns a **$20 commission per kit shipped to the dealer's trading-area zip codes** — the trading area **must be claimed by the dealer and cannot overlap a previously claimed dealer's territory**.

## Decision 040 — Navigation Consolidation (amends 009)

**Status:** Approved (Owner, 2026-08-26)

- "Dealer Economics" removed from primary nav and drawer — the Profit Calculator header CTA is the single route; homepage teaser section remains, reached by scroll. Footer sitemap link remains.
- "Market Intelligence" and "Research" combine into one nav item **"Market Intel"** with a two-item dropdown (Market Intelligence → its page; Research → its page), mirroring the Programs dropdown pattern.
- The Market Intelligence and Research pages each carry a prominent CTA button to the other.

Primary nav is now: Programs ▾ · Newswire · Market Intel ▾ · Why RAP · [Profit Calculator →]

## Decision 041 — Utility Link Labels & Destinations

**Status:** Approved (Owner, 2026-08-26)

- "Manage My Plan" renamed **"Subscription Plans"** → https://kiosk.furniturerx.net
- **Dealer Login** → https://portal.furniturerx.net/
- **File a Claim** → https://www.5starservice.net/
- Customer Support remains → kiosk.furniturerx.net (pending Phase 12 inventory)

## Decision 042 — Customer Support Popup & Live Chat

**Status:** Approved (Owner, 2026-08-26)

**Popup** (triggered by utility-bar "Customer Support", all pages):
- Hours shown: 9 AM – 6 PM ET, Monday–Saturday; closed Sunday (live open/closed state).
- **File a Claim** button → 5starservice.net, visually primary; copy steers service-need questions to it.
- **Chat with Agent** → pre-chat form requiring Name + (Email or Phone), plus a topic line, before chat opens.
- Phone for immediate assistance: **1.800.732.5856**.

**Chat architecture:**
- Transport: **Supabase Realtime broadcast channels** — messages relay in real time, nothing stored server-side. Owner will connect a Supabase account; SQL/setup script to be supplied when ready.
- **No transcript retention** (owner: no dual history systems). Agent-side transcripts live in the agent machine's local storage only, purged at midnight ET daily. Agent notes go to the CRM manually. Database functionality may be added later if scale demands.
- **/admin agent console** on the site: noindex, login required (shared credential, v1 — one "Webstore Agent" role). Alerts: sound + browser notification on new chat. Per-chat End Session control.
- Offline / outside-hours / lunch state: phone + File a Claim + leave-a-message with contact details (lunch backup agreed).

**Sequencing:** popup, chat UI, and admin console are mocked as static states in the Phase 2 prototype for owner approval; live Supabase transport is the first work package of the Supabase phase.

## Decision 043 — Dealer Economics Page Redesign (amends 042-adjacent gate UX)

**Status:** Approved (Owner, 2026-08-26)

- **No request tracking / pending state.** Anonymous visitors can't be re-identified without login, and login adds unwanted friction. Flow: request access (email and mobile required) → on submit, immediate "we received your request" confirmation. RAP responds by email. Status tracking dropped.
- **Page structure:**
  1. **Hero:** left — H1 "Types of Plans", H2 "Subscription" + copy, H2 "Multi-Year" + copy; right — the homepage GM-per-ticket bar illustration.
  2. **Calculator section:** "RAP Dealer Economics Calculator" ghosted/blurred illustration with the access CTA centered inside it.
  3. **Request access form** (six fields; email + mobile required) with the dealer/customer/media triage block moved inside it; submit → received confirmation.
- **Removed:** $19.99/$0/$8 stat strip; "Public on this page / Behind approved access" lists; both 01–06 step strips; "Why the gate…" and revocation copy; "Six fields · reviewed by RAP Sales…" meta; prototype stub note.

## Decision 044 — Post-043 Approved Changes (batch log, session handoff)

**Status:** Approved (Owner, 2026-08-26/27) — all implemented and deployed

- **Gate page (Profit Calculator):** hero = H1 "Profit Calculator", H2 "Types of Plans" + owner "toolbox" intro (millennial/budget/single-item → $19.99 subscription; >$5,000 or longer program → multi-year, incl. dealer's existing plan; both plan types qualify for reinsurance programs); H3 Subscription / H3 Multi-Year with "Custom coverage available — talk to us" lines; live ticket sliders on the GM illustration (new sales per month 1–500; subscription = $8 × m × 1830 across the 60-month waterfall — verified vs owner proforma: $5,328 @ 1/mo/36mo, $532,800 @ 100/mo/36mo; multi-year = $180 × m × 60); simplified caption; request form hidden until CTA; second CTA "Get the dealer info sheet →" routes to the same form with source tag (sheet sent with Sales reply; file kept OUT of deploy at docs/source/FurnitureRx-Subscription-Plan-Info.html, corrected to $250); self-referencing Profit Calculator button removed from this page's header/drawer.
- **Nav/utility:** "Agent Login" renamed **"Admin"**; **File a Claim removed from nav chrome** (lives in the Customer Support popup; footer sitemap keeps it) — B2B-first site; possible future "For Customers" page noted.
- **Admin console:** full site nav chrome added (links open new tabs); login enforces demo passphrase `rap-agent-2026`; reachable via utility-bar "Admin" link; real auth deferred to Supabase phase (owner accepted).
- **Homepage:** orientation claim = "Turn key protection programs built for furniture retailers and interior designers."; orientation descriptor replaced with owner copy (subscription reinsurance "$1M in 36 months" framing — **volume qualifier question open**, true at 200 new subscribers/month); ink section headline = "Why You Must Maximize Protection in Today's Economy" (eyebrow removed, top padding 64px); ink illustration = 100%-of-revenue stacked cost bar (COGS 50, payroll 18, rent 8, advertising 6, freight-in 5, warehouse 4.5 = 91.5%, brass 8.5% remainder; owner-supplied illustrative figures).
- Dropdown hover-gap bug fixed sitewide (invisible bridge).

## Decision 045 — Mobile Remediation Plan Approved

**Status:** Approved (Owner, 2026-08-27)

The MOBILE_AUDIT.md list (commit a01b1b3) is approved for remediation with these owner rulings (via Agent 1 review):

- **Utility bar on phone (S6):** keep a slim strip with **Customer Support + Dealer Login only**; everything else → drawer.
- **Hover dropdowns on touch (S14):** below 1024px is a non-issue (drawer); add **tap-to-toggle fallback** at desktop widths for touch devices — first tap opens panel, second tap on trigger navigates.
- **Cost bar mobile (H8):** keep horizontal, color-only segments, legend carries the reading; **bump bar height** so the 4.5% sliver stays visible. No vertical rebuild.
- **GM figure (H1/E1):** **HTML rebuild** of both copies (home + gate) from one shared pattern; gate keeps its sliders wired to it.
- **Newswire state bar (N7):** **remove** (dev chrome policy); keep states reachable via URL param like the gate's `?state=d`.
- **Admin minimal drawer (A8):** intentional, keep. The both-panes bug (A2) is must-fix.
- **Elevated to must-fix:** teaser chart's shrunken "no scale shown" disclaimer (H2 — claims hygiene); gate sliders (E2 — full-width tracks **plus a small numeric input beside each slider** for precise 1–500 entry); gate footer grid (E6); research missing color tokens (R3).

**Process:** all fixes on branch `mobile-fixes` (main untouched; owner reviews branch deploy on phone per batch). Batches: 1 = two sitewide root causes (S1 header overflow, S2 hidden-vs-display); 2 = three visual rebuilds (H1/E1, H2, M1-class SVG type); 3 = page-specific broken items; 4 = degraded/cosmetic sweep. Owner reviews each batch before the next starts. Merge to main logged as its own decision on approval.

## Decision 046 — Mobile Batch 1 + Drawer Merged; Mobile-as-Part-of-Done Working Model

**Status:** Approved (Owner, 2026-08-27)

- **Merged to main** (owner phone-reviewed on branch preview): batch 1 sitewide fixes (header shrink S1, `[hidden]` guard S2 — c8d2f90) and the mobile drawer redesign (accordions for Programs/Market Intel, Home row removed with wordmark as home link, CUSTOMERS cluster below nav, 22px serif rows / 15px sans customer links, pinned Profit Calculator CTA — 8b65b65).
- **Batch plan revised** (supersedes Decision 045 sequencing after batch 1): next, one must-fix pass on `mobile-fixes` for the remaining *broken* items — GM figure HTML rebuild (H1/E1, both pages, sliders kept), gate sliders full-width + numeric inputs (E2/E7), gate CTA centering (E3), gate footer grid (E6), teaser-chart disclaimer lift (H2, claims hygiene), research color tokens (R3). After that, remaining degraded/cosmetic audit items fold into whichever content pass touches that page — no standalone batches 3–4.
- **Working model going forward:** content work continues per page; mobile is part of "done":
  - every maker brief carries a standing mobile acceptance section (no new fixed widths; no text inside scaling SVGs; `hidden` never paired with bare CSS `display`; ≥44px tap targets; 12px type floor; wide content overflow-wrapped);
  - master QA adds a mobile grep pass (new fixed px widths, SVG font-size < 14, `display:` on hidden-toggled elements) alongside forbidden strings;
  - MOBILE_AUDIT.md is the living punch list, items marked as resolved.

## Decision 047 — Mobile Must-Fix Pass Merged

**Status:** Approved (Owner, 2026-08-27)

Owner phone-reviewed the branch preview and approved the merge of the must-fix pass to main (a94910f, cfbfb02):
- GM comparison figure rebuilt as HTML (shared `.gmf` pattern, home + gate); gate copy keeps live sliders, now full-width on mobile with two-way-synced numeric inputs (1–500) and 44px hit areas. Locked math unchanged ($8 × m × 1830; $180 × m × 60). Gate sliders keep their existing m=1 default.
- Gate access CTA centering fixed; gate footer contact grid stacks on mobile.
- Homepage teaser chart's month labels and "SHAPE ONLY — NO SCALE SHOWN" disclaimer moved from SVG to real HTML text (claims hygiene); SVG height trimmed 220→190 (dead band only, plot untouched).
- research.html missing `--rap-up/--rap-down/--rap-flat` tokens restored.

No *broken* MOBILE_AUDIT items remain. Remaining degraded/cosmetic items fold into content passes per Decision 046.

## Decision 048 — Home-Page Polish Pass (batch log, 2026-08-27)

**Status:** Approved (Owner) — all implemented and deployed (through commit 1111cea)

**Hero:** eyebrow "Protection Programs for Furniture Retailers & Designers"; H1 "2x Your Profits With / RAP Protection" (forced break); lead "Turn more customers into recurring profit…" (pain framing moved wholly to ink section); secondary button "See the Profit Math" → ink section. GM figure kicker "Subscription vs Multi-year Plan GM"; caption "Illustrative — one customer, two profit models. Subscription $480 / Multi-Year $180 over 60 months."

**Orientation strip:** headline "Protection programs built around how you want to earn." + one-line descriptor (text-wrap:balance). Cards get economic-model kickers — Recurring Income / Upfront Income / Underwriting Profit / Turnkey — new body copy, "Explore →" links. The "$1M in 36 months" claim removed (open volume-qualifier question mooted); "turnkey" (one word) is the settled spelling.

**Reinsurance clarification (supersedes 029's "shares in" phrasing):** Reinsurance is an underwriting option available on Subscription and Multi-Year — a participating dealer **retains** the underwriting profits; otherwise RAP keeps them. It is not a third product. Card copy "Retain underwriting profit over time." approved.

**Trust strip:** compact single-line labels (4.5★ Google · 15+ Years · A-Rated Underwriting · Claims In-House · All Furniture Categories), full-content-width distribution, 17–20px clamp.

**Structure:** "Four Ways" paths section REMOVED as duplicative (amends the 010/037 homepage sequence); changed-customer section switched to white to preserve striping.

**Ink section:** headline "RAP Helps You Maximize / Protection Profits". Cost bar corrected (supersedes 044 figures): COGS 50 · Payroll 18 · Rent 8 · Advertising 6 · Freight-in 5 · Warehouse/Delivery/Other 7.5 · Operating Profit 5.5 (brass). Bar made DYNAMIC: "Protection Plan Attachment Rate" slider 0–60%, default 0, numeric twin; normalized to 100 furniture sales at $2,250 avg ($225,000); **new approved facts:** per attached plan $250 retail = $70 plan COGS + $50 sales commission (20%) + $130 operating profit; readouts (margin 5.5%→x, OP $12,375→$x, +x%); verified checkpoints 0/30/60%. "Illustrative percentages" caption removed. Closer: "Furniture sales carry the full cost structure. Protection profit does not." / "Most incremental protection margin flows to profit."

**Changed-customer section rebuilt:** eyebrow "~70% of customers say no to Multi-Year plans"; headline "More customers are saying no. Give them another way to say yes."; two pain-point blocks ($250 checkout-resistance moment; millennial buying habits); centered solution block "Add subscription. Don't replace Multi-Year." + "See the $19.99 Subscription Program →" (qlink, not button); source line removed.

**Economics teaser rebuilt** as centered lead-gen block: eyebrow "Profit Calculator" (one name everywhere), "Run your numbers. See your upside.", brass CTA "Request Access to the Profit Calculator →" (same gate destination/logic); illustrative chart, blurred preview, and lock chip removed; no "locked/restricted" language permitted.

**Why RAP simplified** to closing proof: strip (4.5★ Google Rating · 15+ Years · A-Rated Underwriting · Claims In-House) + three proof points (Furniture Focus / In-House Administration / More Ways to Earn); rating block and 8 capability blocks removed (030's prominence carried by the two strips).

**Sitewide:** footer tagline → "Protection Programs for Furniture Retailers & Designers" (supersedes 036 tagline wording); prototype stub notes removed from home/programs/market-intelligence footers, Privacy/Terms plain text pending legal pages (gate page cross-links fixed); newswire/research keep their #stub targets until their page passes.

**Still open:** contact-hours conflict — footer 8–6 Mon–Fri EST (027) vs support popup 9–6 Mon–Sat ET (042).

## Decision 049 — Research-Page Cleanup Pass (batch log, 2026-08-28, in progress)

**Status:** Approved (Owner) — implemented and deployed as logged

- **Prototype footer notes removed sitewide** (owner order "remove from all footers"): research + newswire footer "Prototype note ·" paragraphs deleted; Privacy/Terms converted to plain text per the 048 pattern (d494415). Newswire's fabricated-content disclaimer went with it — flagged to owner; site remains password-protected + noindex. Research report buttons and newswire Source links keep `href="#stub"` (now no-op) until their content arrives.
- **Research cross-link cards removed (amends 040):** the bottom-of-page Newswire / Market Intelligence card block was redundant (owner ruling); the research→MI prominent CTA from Decision 040 is dropped — MI stays reachable via the Market Intel ▾ nav dropdown. MI's CTA to Research is unchanged. Phase-11 stub note above the cards removed with it (dev-chrome policy). All supporting CSS deleted (6ae315a).
- **Research index rebuilt as uniform cover grid (owner-directed):** owner rejected the featured-No. 01 + row-list layout as wasted space; grid chosen over carousel (mobile/a11y, fills in as reports are added). Each report = one 4:3 ink cover card (title inside + illustrative shape-only art: bar graph for No. 01, abstract data-center racks for No. 02) over a one-line caption, **date-only** meta line (owner ruling — no type labels), and compact Read/Download buttons (full-width 44px at phone). Removed: eyebrows, No. 01's duplicated headline/side column, figure thumbnails with fake captions, index lead paragraph, No. 02's 128-char full title (short display title used; full title lives on the Phase 11 report page). Resolves MOBILE_AUDIT R1/R2/R4 (968bda5).
- **Grid is 3-up on desktop with a coming-soon card** (owner: 2-up wasted desktop width): same ink cover, centered brass "Coming soon" label, caption inviting topic proposals (sales@raptns.com mailto), and a **Propose a topic → form** — required Name / Company / Phone / Email + topic textarea, native validation, `hidden`-attr toggling under the sitewide guard, static confirmation on submit. Transport joins the Supabase lead-capture work package (042/043) with **new source tag "research-topic"**. 2-up ≤1024, 1-col ≤680 (2b30c79, d93e9c5, 1bceac5).

## Decision 050 — Contact Routes Open a Shared Lead Form (partially resolves the Contact routing question)

**Status:** Approved (Owner, 2026-08-28) — implemented and deployed

The three contact route cards ("Talk to Risk Assurance Partners" block, all six public pages; on economics-gate they live in the request-access aside per 043):

1. **"I'm a dealer"** — kept; now opens an inline form instead of linking to the gate page.
2. **"How do I start selling subscription programs"** (subline "Get started with the FurnitureRx subscription program") — replaces "I have a protection plan" / kiosk link. Plan-holder self-service leaves the contact triage (kiosk remains in utility bar, popup, drawer, footer).
3. **"Media or other"** — kept; form replaces the mailto link.

All three open one shared form: required Name / Email / Phone + "What are you interested in?" textarea; hidden route field records the clicked card (`dealer` / `subscription` / `media`). Native validation; `hidden`-attr toggling under the sitewide guard; static confirmation on submit. **Supabase wiring queued in DEV_NOTES: source tag `contact` + route value.** Gate page's utility Contact link fixed to self-anchor (`#contact`); its stale "Not a dealer?" routing copy removed. Byte-identical block on all six pages (Opus maker subagent; master QA'd).

## Decision 051 — Sitewide Form Validation Standard

**Status:** Approved (Owner, 2026-08-28) — implemented and deployed (70fea04)

Every form collecting email or phone must block submission until formats are valid: **email** matches `name@domain.tld` (`[^@\s]+@[^@\s]+\.[A-Za-z]{2,}`); **phone** carries **10–15 digits** after stripping formatting. Format checks fire only on non-empty values, so optional/either-or rules (pre-chat's "email OR phone") are unchanged. Errors use each form's existing mechanism (native bubbles or `.err`/`.pf__err` lines). Applied to: footer contact form (6 pages), research topic form, gate access form, popup pre-chat. Standard applies to all future forms.

**Gap resolved (Owner, 2026-08-28):** the leave-a-message form now requires Name, Company, Position, and Message, plus at least one of Email / Phone (both format-checked per this standard) — errors via the existing inline line, first failing field focused (ef92648). Fulfills 042's "leave-a-message with contact details."

## Decision 052 — Market Intelligence Page Refactor (branch pass, awaiting owner merge approval)

**Status:** Built to owner-approved MI_REFACTOR_SPEC.md (2026-08-29) on branch `mi-refactor`; NOT merged — owner reviews branch preview desktop + phone.

- **Part 1 (3083177):** stale banner, old 4-metric block (in-SVG text), "[pending cadence]" line, phase footnote, and cross-link cards removed with their CSS. Metric grid rebuilt: one reusable card rendered from the spec data shape (`changeLabel` refined to `{dir,value,note}` — key name kept, feeds the up/down/flat convention); 8 FRED-family metrics in mandated themed pairs; four kept values/sources/stamps, four em-dash "awaiting first update" cards with real source lineage; hidden 1Y/3Y/5Y/10Y range plumbing, default 5Y, zero rendered controls; shape-only chart frames, every label HTML; 2-col desktop → 1-col ≤680. `.metric__src` raised 11→12px (phone type floor).
- **Part 2 (8307ba0):** RAP Intelligence console — full-width ink block below the masthead, 2px brass top rule; AI-interpretation awaiting state ("awaiting first run" + "No interpretation has been generated"); Furniture Retail Outlook `-- / 100`, "Not yet scored", deliberately unscored treatment (no gauge/scale/colors); Key signals awaiting state; "Ask RAP Intelligence — coming soon." teaser with zero interactive elements. Pure markup/CSS.
- **Mobile audit:** resolves M1 (no SVG text left) and M3/M4 (grid holds 2-up to 680; captions removed, source line at floor). M2 masthead-wrap softened (pending-cadence line gone) — verify on phone preview.
- **For owner review on preview:** console h2 reads "RAP Intelligence" (eyebrow "Interpretation layer") — spec's container name is "RAP Market Intelligence console"; masthead "RAP Research →" button now competes visually with the console below it.
- **Timeframe control ruling (Owner, 2026-08-29): GLOBAL, not per-chart.** One shared range state (default 5Y) drives all eight charts — already how the hidden plumbing works (single `activeRange` variable). When Phase 9 exposes controls, build ONE global selector above the grid; never per-card range buttons.
- **Polish pass (Owner, 2026-08-30 — five directives + follow-ups, 32660d9, supersedes earlier console iterations):** masthead subline "Key Indicators · Last Updated [date]" (right block deleted — resolves M2); timeframe selector above the console, no label, "Select Time Frame" caption, **default 1Y** (supersedes 5Y); console = 8-indicator quick-look list (aligned values from METRICS) + paper-white financial-article AI panel (intro sentence, empty field with pre-styled typography, "No analysis yet.", compact outlook with "Not yet scored"); **charts collapsed by default** behind a native "View Charts" accordion; **RAP Research CTA relocated** from masthead to an eyebrowed block above the footer (040's cross-CTA preserved); **archive-by-date design approved:** snapshot store + setSnapshot() plumbing shipped empty, a native date select replaces the plain updated-date ONLY once ≥1 snapshot exists (current = latest published date, monthly-cadence semantics), "Return to current" control exists only while viewing an archive — zero dead controls today. Snapshot persistence lands in the automation phase (DEV_NOTES).
- **Console restructured to 1×2 hero (Owner, 2026-08-30 — amends spec §2):** AI-interpretation await copy, Key signals area, and the "Ask RAP Intelligence" teaser REMOVED — **Q&A/chat feature cancelled** ("no chatting with AI"; supersedes the spec's v2 Q&A orientation). Left cell: eyebrow + "RAP Intelligence" (size kept) + subhead "AI analysis of the key indicators" + brass arrow pointing to the right cell (rotates downward when stacked ≤860). Right cell: hairline-bounded future-analysis container, TBD content; holds the `-- / 100` outlook placeholder meanwhile (bffd6c6).
- **Control EXPOSED (Owner, 2026-08-29 — amends the spec's "controls hidden" clause):** segmented 1Y/3Y/5Y/10Y bar above the grid, rendered from the same `RANGES` array, aria-pressed states, 44px phone targets, styled on the gate page's `.seg` Horizon precedent (d25e584). Ranges plot nothing until Phase 9 data lands — accepted by owner; no "no data" messaging added.

## Decision 053 — FurnitureRx Footer Note Removed Sitewide

**Status:** Approved (Owner, 2026-08-30) — deployed (main 47d8df6; MI copy f902d2f on branch)

The footer line "FurnitureRx is a product of Risk Assurance Partners." is removed from all pages, with its `.foot__note` CSS. Rationale: this is the B2B corporate site; FurnitureRx is the B2C property — the ownership note belongs on FurnitureRx surfaces, not here. Amends the MASTER_SPEC brand-presentation guidance ("Where appropriate, FurnitureRx may be presented as FurnitureRx by Risk Assurance Partners") for footer chrome only; the brand-hierarchy FACTS (Decision 001) are unchanged, and in-content uses like "FurnitureRx Subscription" remain.

## Open / Not Yet Decided

The following remain intentionally unresolved:
- frontend framework;
- exact Netlify application architecture;
- Supabase schema;
- exact authentication/magic-link implementation;
- Newswire feed/provider;
- Market Intelligence data-source list;
- exact caching strategy;
- exact typography;
- exact color palette;
- final homepage copy;
- final chart library/style;
- exact calculator model implementation;
- exact analytics platform;
- whether a CMS is needed for Research.

These are not blockers for the initial UI phase.
