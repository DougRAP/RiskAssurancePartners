# Risk Assurance Partners Website Refactor — MASTER_SPEC

## Purpose

This is the master business and product specification for the Risk Assurance Partners website refactor. It is authoritative unless the owner explicitly changes it.

The project must preserve the agreed brand hierarchy, dealer-first strategy, three economic paths, information products, gated dealer-economics strategy, and approval-gated development process.

## Master Brand Architecture

**Risk Assurance Partners** is the company and master brand.

**RAP** is acceptable shorthand for Risk Assurance Partners.

**FurnitureRx is a product of Risk Assurance Partners.**

FurnitureRx is not a separate company, is not the corporate master brand, and is not the parent of Multi-Year Protection, Reinsurance, RAP Research, Newswire, Market Intelligence, or Dealer Economics.

Risk Assurance Partners owns:
- the corporate website;
- dealer relationships;
- Dealer Economics;
- FurnitureRx Subscription;
- Multi-Year Protection;
- Reinsurance;
- Newswire;
- Market Intelligence;
- RAP Research;
- claims administration;
- technology;
- underwriting relationships;
- customer support;
- dealer support.

Where appropriate, FurnitureRx may be presented as:

> **FurnitureRx by Risk Assurance Partners**

The global header, navigation, footer, corporate thought leadership, Newswire, Market Intelligence, Research, and dealer-facing positioning belong to Risk Assurance Partners.

## Core Website Strategy

The current website is too provider-first.

The new website must be **dealer-need-first**.

It should not begin by explaining RAP history, coverage, claims features, or FurnitureRx. It should first establish why a furniture dealer should care.

### Core premise

Furniture retailers operate with recurring expenses while furniture transactions are episodic.

Dealers therefore need to create more economic value and free cash contribution from customers they have already paid to acquire.

### Required narrative

**Dealer Need**  
→ **Market Conditions**  
→ **Economic Opportunity**  
→ **Three Economic Paths**  
→ **Changed Customer Behavior**  
→ **RAP Solutions**  
→ **Economic Proof**  
→ **Newswire / Market Intelligence / Research**  
→ **Why RAP**  
→ **Conversion**

Do not convert this back into:

**RAP** → **About Us** → **Features** → **Products** → **Contact**

## Dealer Needs the Site Must Address

1. Create more profit and free cash flow from existing customers.
2. Protect the furniture sale first.
3. Get more value from traffic the dealer already paid to acquire.
4. Give today's customer more than one way to buy protection.
5. Improve economics without adding material operating burden.

RAP products and capabilities should be presented as ways to meet those needs.

## Three Economic Paths

### 1. FurnitureRx Subscription

FurnitureRx is RAP's subscription-protection product.

Current program economics:
- Customer payment: **$19.99/month**
- Dealer remit: **$0**
- Dealer payment: **$8 per successful monthly payment**

FurnitureRx gives dealers another protection-buying path for customers who may decline a large upfront protection purchase.

FurnitureRx does **not** automatically replace the dealer's Multi-Year Protection program.

Core positioning:

> **Keep the sale that works. Add another way to say yes.**

### 2. Multi-Year Protection

Traditional Multi-Year Protection remains an important RAP solution.

It remains appropriate for customers who prefer one complete upfront protection decision.

Do not call it obsolete or position FurnitureRx as its replacement.

### 3. Reinsurance

For appropriate dealers, Reinsurance can provide additional underwriting and investment economics.

Do not describe all Reinsurance value as immediate profit. Its timing differs from current dealer commission income.

### Working umbrella concept

> **Three Ways to Create More Value From the Same Customer**

Exact wording may be refined. The three-path structure is locked unless the owner approves a change.

## Information Products

Risk Assurance Partners will have three separate information products.

They must not be merged into a generic Blog or Insights section.

### Newswire — “What happened?”

High-frequency furniture-retail and related industry news.

Likely categories:
- Furniture Retail
- Manufacturers
- Bedding
- Housing
- Economy
- Consumer
- Consumer Credit
- Trade / Tariffs
- Freight
- M&A
- Bankruptcies
- Store Openings / Closings
- Protection / Warranty
- Retail Technology

The long-term system should be substantially self-maintaining through automated discovery, relevance filtering, source-quality filtering, duplicate detection, categorization, concise summaries, attribution, and original-source links.

Routine human newsroom labor is not acceptable.

### Market Intelligence — “What is changing?”

Automated economic data, trends, and charts relevant to furniture retail.

Potential metrics:
- Furniture retail sales
- Existing-home sales
- Housing starts
- New-home sales
- Building permits
- Furniture inflation
- Consumer indicators
- Interest-rate / credit indicators
- Other relevant economic measures

Prefer authoritative primary sources where practical.

Market Intelligence should be substantially self-maintaining.

### RAP Research — “What does it mean?”

Original long-form Risk Assurance Partners research.

Initial flagship study:

> **Furniture Retail Has Changed. Protection Has to Change With It.**

Research may be occasional rather than high-frequency.

## Dealer Economics Strategy

Dealer Economics is a primary conversion mechanism.

The detailed economic model should not be fully public.

### Publicly visible

The site may show:
- FurnitureRx customer price: $19.99/month;
- dealer remit: $0;
- recurring dealer-payment concept;
- illustrative accumulation concept;
- high-level opportunity.

### Gated

The full **RAP Dealer Economics Calculator** may include:
- editable subscriber volumes;
- number of locations;
- 12/24/36-month scenarios;
- approved cancellation assumptions;
- cumulative dealer payments;
- detailed FurnitureRx economics;
- future Multi-Year comparisons;
- future Reinsurance scenarios;
- proprietary assumptions.

### Gate objectives

1. Protect detailed dealer economics from casual competitor access.
2. Create qualified dealer leads.
3. Give RAP Sales useful context.

### Initial access-request fields

- First Name
- Last Name
- Company / Dealership
- Business Email
- Phone
- Role / Title

Do not over-qualify before access.

### Access flow

Request Access  
→ Lead stored  
→ RAP Sales reviews  
→ Approve / Reject  
→ Approved dealer receives secure access  
→ Dealer opens calculator

Prefer secure magic-link style access over unnecessary password creation, if technically appropriate.

The tool should be branded:

> **RAP Dealer Economics Calculator**

Initial focus may be FurnitureRx, with future room for Multi-Year and Reinsurance.

## Primary Site Structure

### Primary navigation
- Dealer Economics
- Programs
  - FurnitureRx Subscription
  - Multi-Year Protection
  - Reinsurance
- Newswire
- Market Intelligence
- Research
- Why RAP

### Primary CTA
- **See My Economics**

### Utility navigation
- File a Claim
- Manage My Plan
- Customer Support
- Dealer Login

Customer functions remain easy to find but visually secondary to the dealer-facing corporate story.

## Visual Direction

The intended character is:

**Modern B2B financial intelligence**  
+ **Furniture retail**  
+ **Modern technology**  
+ **Editorial research**

Preferred:
- strong typography;
- generous whitespace;
- disciplined grid;
- economic/data visualization;
- meaningful diagrams;
- professional editorial presentation;
- actual product interfaces;
- restrained imagery;
- subtle purposeful motion;
- premium but not flashy.

Avoid:
- shield motifs;
- generic insurance imagery;
- decorative icon grids;
- large generic furniture hero photography;
- excessive gradients;
- glassmorphism for its own sake;
- cartoon illustrations;
- gratuitous animation;
- turning every section into a SaaS dashboard.

Preserve recognizable Risk Assurance Partners branding. Do not redesign the corporate logo unless explicitly requested.

## Technical Direction

The project will ultimately use:
- Git repository;
- Netlify deployment;
- Supabase where appropriate;
- Claude Code multi-agent development.

Do not lock the frontend framework, Supabase schema, API providers, Newswire provider, Market Intelligence source list, or final auth implementation until the relevant architecture phase is approved.

## Project Governance

The master agent may coordinate, recommend, document, integrate, and QA.

The master agent may not independently change:
- business strategy;
- brand hierarchy;
- locked site architecture;
- homepage narrative;
- core economic facts;
- three-path framework;
- gated-calculator strategy.

Material changes require owner approval and must be recorded in `DECISIONS.md`.

## Locked vs. Flexible

### Locked
- Risk Assurance Partners is the master brand.
- FurnitureRx is a RAP product.
- Dealer-first architecture.
- Three economic paths.
- Multi-Year and FurnitureRx coexist.
- Newswire, Market Intelligence, and Research remain separate.
- Dealer Economics is a primary CTA.
- Detailed calculator is gated.
- Customer functions remain accessible but secondary in the main site hierarchy.
- Homepage makes the dealer business case before RAP credentials.

### Flexible
- exact final copy;
- exact hero wording;
- typography;
- palette refinement;
- spacing;
- chart styling;
- diagram style;
- microinteractions;
- animation;
- exact Market Pulse metrics;
- exact number of homepage Newswire items;
- calculator teaser visualization;
- minor layout refinements that do not alter the narrative.

Structural changes require owner approval.
