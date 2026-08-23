# Risk Assurance Partners Website Refactor — IMPLEMENTATION_PLAN

## Status

**Working phased implementation plan**

This plan is intentionally approval-gated.

The master agent must not automatically proceed from one phase to the next.

# Phase 0 — Repository Setup

## Goal

Create the project workspace without prematurely scaffolding the application.

## Initial structure

```text
rap-website/
│
├── docs/
│   ├── source/
│   │   ├── current-website.docx
│   │   ├── furniturerx-kiosk.docx
│   │   └── furniture-retail-research.docx
│   │
│   └── project/
│       ├── MASTER_SPEC.md
│       ├── LOCKED_WIREFRAME.md
│       ├── AGENT_RULES.md
│       ├── DECISIONS.md
│       └── IMPLEMENTATION_PLAN.md
│
└── README.md
```

Do not yet:
- initialize frontend framework;
- install app packages;
- create Supabase;
- create production routes;
- deploy.

# Phase 1 — Fabel Master-Agent Intake

## Goal

Make Fabel prove it understands the business and locked architecture before any work begins.

Fabel must review:
- source materials;
- MASTER_SPEC.md;
- LOCKED_WIREFRAME.md;
- AGENT_RULES.md;
- DECISIONS.md.

Required response:
1. Risk Assurance Partners master brand.
2. FurnitureRx relationship to RAP.
3. Core dealer economic problem.
4. Three economic paths.
5. Newswire vs Market Intelligence vs RAP Research.
6. Gated RAP Dealer Economics Calculator strategy.
7. Locked homepage narrative.
8. Genuine contradictions/blockers, if any.
9. Recommended next step.

**Gate: STOP. Owner approval required.**

No coding or delegation.

# Phase 2 — UI/UX

## Agent

Opus 5 UI/UX specialist.

## Goal

Establish the visual language and dealer-first experience before production implementation.

## Inputs

- source materials;
- MASTER_SPEC.md;
- LOCKED_WIREFRAME.md;
- AGENT_RULES.md;
- DECISIONS.md.

## First deliverable only

1. Desktop low-fidelity homepage wireframe.
2. Mobile low-fidelity homepage wireframe.
3. Proposed visual design system:
   - typography direction;
   - palette evolution;
   - spacing;
   - grid;
   - buttons;
   - navigation;
   - data components;
   - Newswire presentation;
   - Market Intelligence presentation;
   - Research presentation.
4. One high-fidelity homepage direction.
5. Gated Dealer Economics access-flow mockup:
   - public teaser;
   - request access;
   - approval state;
   - authorized calculator state.
6. Notes explaining any recommended deviation.

A disposable visual prototype may live under `/prototype-ui`.

Anything in `/prototype-ui` is design-only, not production implementation.

**Gate: STOP. Owner reviews and approves UI.**

# Phase 3 — Lock UI Specification

Create:

`/docs/project/UI_SPEC.md`

UI_SPEC should capture:
- design tokens;
- typography;
- palette;
- spacing;
- grid;
- navigation;
- shared components;
- responsive behavior;
- Newswire visual rules;
- Market Intelligence visual rules;
- Research visual rules;
- Dealer Economics gate flow;
- accessibility expectations.

Update:
- DECISIONS.md
- LOCKED_WIREFRAME.md if approved changes occurred.

**Gate: STOP before production coding.**

# Phase 4 — Technical Architecture Proposal

Owner requirements:
- Git repository;
- Netlify production deployment;
- Supabase may be used where appropriate;
- multi-agent implementation;
- Newswire self-maintaining;
- Market Intelligence self-maintaining;
- detailed calculator requires verified access.

Fabel must propose:
- frontend framework;
- application structure;
- route architecture;
- Netlify deployment model;
- Supabase role;
- authentication/access model;
- scheduled-function approach;
- caching strategy;
- component architecture;
- testing approach;
- branching/worktree strategy;
- agent work packages.

For each major choice, explain:
- why;
- alternatives considered;
- implications.

**Gate: STOP. Owner approves technical architecture.**

# Phase 5 — Foundation Build

## Agent

One maker agent only.

Do not parallelize yet.

## Scope

- approved app scaffold;
- design tokens;
- typography;
- global CSS/theme;
- responsive grid;
- layout containers;
- global navigation;
- utility navigation;
- footer;
- buttons;
- shared card/data primitives;
- routing structure;
- accessibility baseline.

Fabel reviews:
- fidelity to UI_SPEC;
- component consistency;
- responsive behavior;
- code quality.

Foundation must be merged and stable before parallel maker agents begin.

# Phase 6 — Parallel Commercial Implementation

After foundation approval, split work into controlled packages.

## Maker 1 — Commercial Site
Potential scope:
- Home;
- Dealer Economics public page;
- Why RAP;
- shared commercial components.

## Maker 2 — Programs
Potential scope:
- FurnitureRx;
- Multi-Year Protection;
- Reinsurance;
- customer/kiosk product preview.

## Maker 3 — Publishing UI
Potential scope:
- Newswire UI;
- Research index;
- Research article/report template;
- Market Intelligence UI.

## Maker 4 — Dealer Economics UI
Potential scope:
- calculator access request;
- pending/approved/rejected states;
- authorized calculator shell;
- sales approval interface.

All agents must work from the same approved UI_SPEC.

Fabel owns integration and conflict resolution.

# Phase 7 — Dealer Economics Backend / Supabase

## Goal

Implement real gated access and lead capture after the UI is stable.

Conceptual data areas may include:
- dealer leads;
- access requests;
- access approvals;
- calculator sessions;
- calculator scenarios.

Final schema must be proposed and approved before implementation.

Required flow:

```text
Dealer requests access
        ↓
Lead stored
        ↓
RAP Sales notified
        ↓
Sales approves / rejects
        ↓
Approved dealer receives secure access
        ↓
Dealer opens calculator
```

Requirements:
- no anonymous access to full model;
- secure link/auth;
- revocation support;
- no public search indexing;
- concise access-request form;
- appropriate lead context;
- minimal necessary personal data.

# Phase 8 — Detailed Dealer Economics Calculator

Initial focus:
- FurnitureRx Subscription.

Potential categories:
- subscribers;
- locations;
- time horizon;
- approved cancellation assumptions;
- dealer-payment economics.

Future expansion may support:
- Multi-Year comparisons;
- Reinsurance scenarios.

Do not expose proprietary model details publicly.

# Phase 9 — Market Intelligence Automation

Conceptual architecture:

```text
Authoritative Data Sources
        ↓
Scheduled Netlify Functions
        ↓
Validation / Calculation
        ↓
Supabase Cache / History
        ↓
RAP Market Intelligence
        ↓
Homepage Market Pulse
```

Requirements:
- source displayed;
- last updated displayed;
- historical values retained as needed;
- failure/stale states;
- no dependency on external APIs responding during every visitor page load.

Prefer authoritative primary sources where practical.

Exact source list requires approval.

# Phase 10 — Newswire Automation

Conceptual architecture:

```text
News Discovery
      ↓
Scheduled Ingestion
      ↓
Relevance Filter
      ↓
Source-Quality Filter
      ↓
Duplicate Detection
      ↓
Category Assignment
      ↓
Concise Synopsis
      ↓
Supabase
      ↓
RAP Newswire
```

Requirements:
- timestamp;
- category;
- headline;
- concise synopsis;
- source attribution;
- original-source link;
- duplicate control;
- relevance scoring;
- source suppression/admin control;
- story suppression/admin override.

Do not republish full third-party articles.

Exact feed/provider remains open until this phase.

# Phase 11 — RAP Research

Keep the initial Research implementation simple unless volume requires more.

Potential implementation:
- structured content in Git;
- Markdown/MDX or approved equivalent;
- research index;
- individual report pages;
- downloadable document assets.

Do not introduce a CMS solely because one is available.

# Phase 12 — Existing Customer Function Inventory

Before launch, inventory the current site's service functions and routes.

Confirm preservation or intentional redirection for:
- File a Claim;
- Customer Support;
- Manage My Plan;
- Dealer Login;
- existing forms;
- existing external application links.

The dealer-first refactor must not break customer servicing.

# Phase 13 — QA

## Business fidelity
Confirm:
- RAP is master brand;
- FurnitureRx is a RAP product;
- three economic paths remain intact;
- Multi-Year is not disparaged;
- approved economics are accurate;
- no unsupported claims were introduced.

## UI
Test:
- desktop;
- tablet;
- mobile;
- keyboard navigation;
- WCAG AA contrast;
- focus states;
- chart readability;
- responsive behavior.

## Dealer Economics
Test:
- anonymous users cannot reach full model;
- approval flow;
- secure access;
- revocation;
- no indexing;
- lead capture.

## Market Intelligence
Test:
- source attribution;
- latest value;
- date;
- trend calculations;
- stale-data handling;
- source/API failure behavior.

## Newswire
Test:
- source attribution;
- original links;
- duplicates;
- relevance filtering;
- suppressed/bad source behavior;
- malformed feed behavior.

## Technical
Test:
- builds;
- routing;
- broken links;
- redirects;
- metadata;
- performance;
- error states;
- Netlify functions;
- Supabase permissions;
- scheduled jobs.

# Phase 14 — Netlify Staging

Deploy an owner-reviewable staging build.

Do not change production DNS.

Review:
- desktop;
- tablet;
- mobile;
- commercial narrative;
- customer utility functions;
- calculator gate;
- Newswire;
- Market Intelligence;
- Research.

**Gate: Owner approval required before production.**

# Phase 15 — Production Launch

After approval:
1. merge final production branch;
2. deploy Netlify production;
3. configure domain;
4. confirm HTTPS;
5. implement redirects from old URLs;
6. confirm analytics;
7. verify forms;
8. verify Dealer Economics access;
9. verify scheduled functions;
10. verify Newswire;
11. verify Market Intelligence;
12. verify indexing rules;
13. tag production release in Git.

# Agent Sequence Summary

```text
OWNER
  ↓
FABEL — requirements / coordination / QA
  ↓
OPUS UI AGENT
  ↓
OWNER APPROVES UI
  ↓
FABEL — technical architecture proposal
  ↓
OWNER APPROVES ARCHITECTURE
  ↓
FOUNDATION MAKER
  ↓
FABEL REVIEW / MERGE
  ↓
PARALLEL MAKERS
  ├─ Commercial
  ├─ Programs
  ├─ Publishing
  └─ Dealer Economics
  ↓
FABEL INTEGRATION
  ↓
Supabase / Calculator
  ↓
Market Intelligence Automation
  ↓
Newswire Automation
  ↓
Research
  ↓
QA
  ↓
Netlify Staging
  ↓
OWNER APPROVAL
  ↓
Production
```

# Core Operating Rule

> **Fabel may coordinate and recommend. The owner approves material changes to strategy, information architecture, UI, and technical architecture before the project crosses the next gate.**
