# Risk Assurance Partners Website Refactor — LOCKED_WIREFRAME

## Status

**Version 1.1 — Working Locked Wireframe**

Amendments 2026-08-24 (owner-approved, DECISIONS 024–025):
- **Contact** added to the site map under Company (footer + utility bar; target of "Talk to RAP"). Not in primary navigation.
- Hero (Section 02) carries an eyebrow identifying RAP and its audience, and an orientation strip below the CTAs: what RAP does, who it serves, the three programs at parity with jump links.
- Mobile retains a slim utility strip (File a Claim + Dealer Login); remaining utility links move to the top of the mobile drawer. Sticky header retains Dealer Login.
- Audience descriptor per Decision 025 (furniture & mattress retail dealers; custom interior designer programs; all home furnishings categories).

Amendments 2026-08-25 (owner-approved, DECISIONS 029–032):
- Primary CTA label is **"Profit Calculator"** — every `[ SEE MY ECONOMICS ]` in the sketches below reads as `[ PROFIT CALCULATOR ]`. The gated tool remains branded RAP Dealer Economics Calculator.
- Program model is two-axis (plan types: Subscription / Multi-Year; underwriting types: Reinsurance / Standard) per Decision 029.
- Section 07 (FurnitureRx) emphasizes: $19.99/month, same coverage as multi-year programs, cancel/start/restart anytime (customer in control), zero dealer remit, recurring commission revenue — not kiosk coverage details (Decision 031).
- Section 11 (Why RAP): "15+ Years" approved; 4.5-star Google rating given prominence (Decision 030).

This is a project specification, not a suggestion.

The UI/UX agent may improve visual execution but may not independently change:
- page hierarchy;
- homepage narrative;
- section sequence;
- brand hierarchy;
- the three economic paths;
- the relationship between Risk Assurance Partners and FurnitureRx;
- the separation of Newswire, Market Intelligence, and Research;
- the gated Dealer Economics Calculator strategy.

If an agent believes a structural change would materially improve the site, it must propose the change and explain why. Do not implement the change until the owner approves it.

# 1. Global Site Map

```text
Risk Assurance Partners
│
├── Home
├── Dealer Economics
├── Programs                       (ONE page — Decision 038; nav dropdown items
│   ├── #subscription               jump to in-page sections)
│   ├── #multi-year
│   ├── #reinsurance
│   └── #standard
├── Newswire
├── Market Intelligence
├── Research
│   └── Individual Research / Report Pages
├── Why RAP
├── Contact          (utility bar + footer only — not primary nav)
└── See My Economics
    └── RAP Dealer Economics Calculator
```

## Utility / Customer Navigation

- File a Claim
- Manage My Plan
- Customer Support
- Dealer Login

These functions must remain easy to locate but visually secondary to the dealer-facing corporate navigation.

# 2. Desktop Homepage Wireframe

## Section 00 — Utility Bar

```text
┌──────────────────────────────────────────────────────────────────────┐
│ File a Claim   Manage My Plan   Customer Support       Dealer Login │
└──────────────────────────────────────────────────────────────────────┘
```

Keep compact.

## Section 01 — Primary Header

```text
┌──────────────────────────────────────────────────────────────────────┐
│ RISK ASSURANCE PARTNERS                                             │
│                                                                      │
│ Dealer Economics   Programs ▾   Newswire   Market Intelligence      │
│ Research   Why RAP                         [ SEE MY ECONOMICS ]      │
└──────────────────────────────────────────────────────────────────────┘
```

Programs dropdown:
- FurnitureRx Subscription
- Multi-Year Protection
- Reinsurance

Risk Assurance Partners is the dominant corporate identity.

## Section 02 — Hero

```text
┌──────────────────────────────────────────────────────────────────────┐
│                                                                      │
│   YOUR EXPENSES RECUR                    SIMPLE ECONOMIC             │
│   EVERY MONTH.                           VISUALIZATION               │
│                                                                      │
│   YOUR FURNITURE SALE DOESN'T.           recurring costs            │
│                                          ↓ ↓ ↓ ↓ ↓                  │
│   Create more economic value             furniture transaction      │
│   from customers you already             ↓                          │
│   paid to acquire—without                economic value             │
│   adding inventory, advertising,                                    │
│   floor space or material                                           │
│   operating burden.                                                 │
│                                                                      │
│   [ SEE MY ECONOMICS ]                                               │
│   [ HOW RAP HELPS ]                                                  │
│                                                                      │
└──────────────────────────────────────────────────────────────────────┘
```

Purpose: establish the dealer's economic problem first.

Do not open with FurnitureRx, coverage, RAP history, claims features, $19.99/month, or generic sofa photography.

Preferred visual: recurring dealer expenses versus episodic furniture transactions.

## Section 03 — Market Pulse

```text
┌──────────────────────────────────────────────────────────────────────┐
│ THE MARKET MOVING FURNITURE RETAIL                                  │
│                                                                      │
│ Furniture Retail     Existing Home      Housing Starts     Metric 4 │
│ Sales                Sales                                          │
│                                                                      │
│ $XX.XB               X.XXM              X.XXM              XXX      │
│ ↓ X.X%               ↓ X.X%             ↑ X.X%             → X.X%  │
│                                                                      │
│ Source / Updated                           [ MARKET INTELLIGENCE → ] │
└──────────────────────────────────────────────────────────────────────┘
```

This is a compact preview, not the full Market Intelligence dashboard.

## Section 04 — Fundamental Dealer Economic Problem

```text
┌──────────────────────────────────────────────────────────────────────┐
│                                                                      │
│               YOU ALREADY PAID TO ACQUIRE THE CUSTOMER.             │
│                                                                      │
│   Advertising   Inventory   Payroll   Rent   Freight   Warehousing  │
│         \           |          |       |       |           /         │
│          \__________|__________|_______|_______|__________/          │
│                              ↓                                       │
│                       CUSTOMER PURCHASE                              │
│                              ↓                                       │
│                                                                      │
│              HOW MUCH ECONOMIC VALUE DOES THAT                       │
│                    TRANSACTION CREATE?                               │
│                                                                      │
└──────────────────────────────────────────────────────────────────────┘
```

Use a meaningful economic/process diagram, not decorative icon grids.

## Section 05 — Three Economic Paths

```text
┌──────────────────────────────────────────────────────────────────────┐
│                                                                      │
│       THREE WAYS TO CREATE MORE VALUE FROM THE SAME CUSTOMER        │
│                                                                      │
│ ┌───────────────────┐ ┌───────────────────┐ ┌────────────────────┐ │
│ │   SUBSCRIPTION    │ │    MULTI-YEAR     │ │    REINSURANCE     │ │
│ │                   │ │                   │ │                    │ │
│ │ FurnitureRx       │ │ Protection income │ │ Underwriting and   │ │
│ │ recurring dealer  │ │ generated at the  │ │ investment         │ │
│ │ income            │ │ original sale     │ │ economics          │ │
│ │                   │ │                   │ │                    │ │
│ │ Learn More →      │ │ Learn More →      │ │ Learn More →       │ │
│ └───────────────────┘ └───────────────────┘ └────────────────────┘ │
│                                                                      │
└──────────────────────────────────────────────────────────────────────┘
```

Requirements:
- All three are RAP economic strategies.
- FurnitureRx is not the parent of the other two.
- Subscription must not be presented as replacing Multi-Year.
- Do not call all three “immediate profit.”

## Section 06 — Changed Customer

```text
┌──────────────────────────────────────────────────────────────────────┐
│                                                                      │
│         THE CUSTOMER MAY NOT BE SAYING                               │
│                    "NO TO PROTECTION."                               │
│                                                                      │
│          THEY MAY BE SAYING                                         │
│          "NOT ANOTHER LARGE PURCHASE TODAY."                        │
│                                                                      │
│ Furniture → Tax → Delivery → Financing → Protection Decision       │
│                                                                      │
│                              │                                       │
│                   ┌──────────┴──────────┐                            │
│                   │                     │                            │
│                   ▼                     ▼                            │
│       UPFRONT FORMAT FITS       UPFRONT FORMAT DOESN'T FIT          │
│                   │                     │                            │
│                   ▼                     ▼                            │
│             MULTI-YEAR              FURNITURERX                      │
│                                                                      │
│      KEEP THE SALE THAT WORKS. ADD ANOTHER WAY TO SAY YES.          │
│                                                                      │
└──────────────────────────────────────────────────────────────────────┘
```

Do not disparage traditional protection.

## Section 07 — FurnitureRx

```text
┌──────────────────────────────────────────────────────────────────────┐
│                                                                      │
│ FURNITURERX                                      ACTUAL FURNITURERX │
│ A PRODUCT OF RISK ASSURANCE PARTNERS             KIOSK / UI         │
│                                                                      │
│ TURN SOME PROTECTION DECLINES                                       │
│ INTO RECURRING CUSTOMER RELATIONSHIPS.                              │
│                                                                      │
│ Customer Payment                  $19.99 / month                     │
│ Dealer Remit                      $0                                 │
│ Dealer Payment                    $8 / successful payment            │
│                                                                      │
│ [ FURNITURERX FOR DEALERS ]                                         │
│ [ SEE THE CUSTOMER EXPERIENCE ]                                     │
│                                                                      │
└──────────────────────────────────────────────────────────────────────┘
```

Use the actual FurnitureRx interface as product proof.

## Section 08 — Dealer Economics / Calculator Teaser

The detailed calculator must not be public.

```text
┌──────────────────────────────────────────────────────────────────────┐
│                                                                      │
│               WHAT COULD THIS MEAN FOR YOUR DEALERSHIP?             │
│                                                                      │
│                  ILLUSTRATIVE RECURRING-INCOME                      │
│                         VISUALIZATION                               │
│                                                                      │
│   Show enough value to create interest.                             │
│   Do not expose the full proprietary model.                         │
│                                                                      │
│                  [ CALCULATE MY OPPORTUNITY ]                       │
│                                                                      │
└──────────────────────────────────────────────────────────────────────┘
```

Public teaser may show:
- $19.99/month customer payment;
- $0 dealer remit;
- recurring dealer-payment concept;
- illustrative accumulation.

Do not publicly expose:
- detailed editable assumptions;
- detailed cancellation modeling;
- full forecast formulas;
- detailed reinsurance calculations;
- proprietary economics.

## Section 09 — Furniture Retail Newswire

```text
┌──────────────────────────────────────────────────────────────────────┐
│                                                                      │
│ FURNITURE RETAIL NEWSWIRE                                    LIVE   │
│                                                                      │
│ 12:38 PM   HOUSING                                                   │
│ Existing-home sales...                                              │
│ Brief synopsis...                                      Source →     │
│ ─────────────────────────────────────────────────────────────────── │
│ 11:17 AM   RETAIL                                                    │
│ Major furniture retailer...                                        │
│ Brief synopsis...                                      Source →     │
│ ─────────────────────────────────────────────────────────────────── │
│ 10:04 AM   TRADE                                                     │
│ Tariff development...                                               │
│ Brief synopsis...                                      Source →     │
│                                                                      │
│                                             [ VIEW ALL NEWS → ]      │
│                                                                      │
└──────────────────────────────────────────────────────────────────────┘
```

Design character:
- wire service;
- financial news;
- chronological utility;
- professional newsroom.

Not a corporate blog.

## Section 10 — RAP Research

```text
┌──────────────────────────────────────────────────────────────────────┐
│                                                                      │
│ RAP RESEARCH                                                        │
│                                                                      │
│ ┌─────────────────────────┐       FURNITURE RETAIL HAS CHANGED.     │
│ │ REPORT COVER /          │       PROTECTION HAS TO CHANGE WITH IT. │
│ │ FEATURED GRAPH          │                                         │
│ └─────────────────────────┘       Original Risk Assurance Partners  │
│                                 research examining furniture retail │
│                                 economics, consumer behavior, and   │
│                                 protection.                         │
│                                                                      │
│                                 [ READ RESEARCH ]                    │
│                                 [ DOWNLOAD REPORT ]                  │
│                                                                      │
└──────────────────────────────────────────────────────────────────────┘
```

Research remains separate from Newswire.

## Section 11 — Why Risk Assurance Partners

```text
┌──────────────────────────────────────────────────────────────────────┐
│                                                                      │
│                 BUILT AROUND FURNITURE RETAIL.                      │
│                                                                      │
│   15+ Years                Claims Administration                    │
│   Furniture Focus          Technology                               │
│   Underwriting             Dealer Support                           │
│   Customer Experience      Program Expertise                        │
│                                                                      │
│               Evidence / proof should support claims.               │
│                                                                      │
└──────────────────────────────────────────────────────────────────────┘
```

Avoid generic feature-icon grids and unsupported superlatives.

## Section 12 — Final Conversion

```text
┌──────────────────────────────────────────────────────────────────────┐
│                                                                      │
│                    YOU ALREADY HAVE THE CUSTOMER.                    │
│                                                                      │
│               LET'S IMPROVE THE ECONOMICS                           │
│                    OF THE TRANSACTION.                               │
│                                                                      │
│             [ SEE MY ECONOMICS ]    [ TALK TO RAP ]                 │
│                                                                      │
└──────────────────────────────────────────────────────────────────────┘
```

## Section 13 — Footer

Suggested groups:

**Programs**
- FurnitureRx
- Multi-Year Protection
- Reinsurance

**Intelligence**
- Newswire
- Market Intelligence
- Research

**Company**
- Why RAP
- Contact (site-map page per Decision 024/R6)

**Customer**
- File a Claim
- Customer Support
- Manage My Plan

**Dealer**
- Dealer Login
- Dealer Economics

**Legal**
- Privacy
- Terms

# 3. Dealer Economics Page / Gated Calculator Flow

Public page should show enough value to earn interest without exposing proprietary model logic.

CTA:

> **Get Access to the RAP Dealer Economics Calculator**

Initial fields:
- First Name
- Last Name
- Company / Dealership
- Business Email
- Phone
- Role / Title

Access flow:

```text
Request Access
      ↓
Lead Saved
      ↓
RAP Sales Review
      ↓
Approve / Reject
      ↓
Approved
      ↓
Secure Email Access
      ↓
RAP Dealer Economics Calculator
```

Prefer magic-link style access if appropriate.

Initial authorized-calculator focus:
- FurnitureRx Subscription economics.

Future expansion may include:
- Multi-Year Protection;
- Reinsurance.

Do not expose the detailed calculator to anonymous users or search indexing.

# 4. Mobile Homepage Narrative

Mobile must preserve the same sequence:

1. Utility
2. Header
3. Hero
4. Market Pulse
5. Dealer Problem
6. Three Economic Paths
7. Changed Customer
8. FurnitureRx
9. Dealer Economics Teaser
10. Newswire
11. RAP Research
12. Why RAP
13. Final CTA
14. Footer

Responsive stacking must not change the business narrative.

# 5. UI Agent Freedom

The UI agent may determine:
- typography;
- palette evolution;
- whitespace;
- grid details;
- section height;
- chart treatment;
- diagrams;
- animation;
- focus/hover behavior;
- responsive details;
- data-component styling;
- improved wording.

# 6. UI Agent May Not Independently Change

- Risk Assurance Partners master brand;
- FurnitureRx product relationship;
- primary navigation;
- site map;
- homepage section sequence;
- three economic paths;
- Newswire / Market Intelligence / Research separation;
- dealer-first positioning;
- Multi-Year + FurnitureRx coexistence;
- gated Dealer Economics strategy;
- Dealer Economics primary CTA.

Any structural change requires owner approval.
