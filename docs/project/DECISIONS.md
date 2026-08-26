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
