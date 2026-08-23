# Risk Assurance Partners Website Refactor — AGENT_RULES

## 1. Purpose

These rules apply to every Claude Code agent, sub-agent, specialist agent, maker agent, and reviewer working on the Risk Assurance Partners website refactor.

The purpose is to prevent:
- strategic drift;
- conflicting interpretations;
- agents jumping ahead;
- unapproved architecture changes;
- brand confusion;
- inconsistent UI;
- duplicated implementation;
- unsupported business claims.

## 2. Authority Hierarchy

Agents must follow this order of authority:

1. **Owner instructions**
2. **DECISIONS.md**
3. **MASTER_SPEC.md**
4. **LOCKED_WIREFRAME.md**
5. **UI_SPEC.md** once approved
6. **IMPLEMENTATION_PLAN.md**
7. Agent-specific task instructions

If documents conflict, stop and have the master agent resolve the conflict through the owner.

Do not silently choose one interpretation.

## 3. Master Brand Rule

Risk Assurance Partners is the master corporate brand.

RAP is shorthand for Risk Assurance Partners.

FurnitureRx is a product of Risk Assurance Partners.

No agent may:
- present FurnitureRx as the company;
- make FurnitureRx the global site identity;
- subordinate Multi-Year Protection or Reinsurance to FurnitureRx;
- place RAP Research, Newswire, Market Intelligence, or Dealer Economics under FurnitureRx branding.

## 4. Dealer-First Strategy Rule

The website must remain dealer-need-first.

Required logic:

**Dealer Need**  
→ **Market Conditions**  
→ **Economic Opportunity**  
→ **Three Economic Paths**  
→ **Changed Customer Behavior**  
→ **RAP Solutions**  
→ **Economic Proof**  
→ **Information / Research**  
→ **Why RAP**  
→ **Conversion**

Do not revert to:
- company-first;
- feature-first;
- generic insurance/warranty brochure;
- generic SaaS website structure.

## 5. Locked Business Facts

Do not change or invent the following without owner approval.

### FurnitureRx
- Product of Risk Assurance Partners.
- Customer price: **$19.99/month**.
- Dealer remit: **$0**.
- Dealer payment: **$8 per successful monthly payment**.
- Intended to work alongside Multi-Year Protection rather than automatically replace it.

### Multi-Year Protection
- Remains an important RAP solution.
- Must not be described as obsolete.

### Reinsurance
- Can provide underwriting and investment economics for appropriate dealers.
- Must not be described as universally immediate profit.

If a business fact is not covered by approved material, do not invent it. Mark it unresolved.

## 6. Newswire / Market Intelligence / Research Rule

These are separate products.

### Newswire
**What happened?**

High-frequency industry news.

### Market Intelligence
**What is changing?**

Automated economic indicators, charts, and trends.

### RAP Research
**What does it mean?**

Original long-form analysis.

No agent may merge them into a generic Blog, Insights, Resources, or content hub without owner approval.

## 7. Calculator Rule

The detailed **RAP Dealer Economics Calculator** is gated.

Public pages may show:
- high-level economics;
- illustrative concepts;
- enough value to create interest.

Do not expose detailed formulas, assumptions, cancellation modeling, reinsurance economics, or proprietary model logic to anonymous users unless explicitly approved.

The tool is branded:

> **RAP Dealer Economics Calculator**

not merely “Subscription Calculator.”

## 8. Project Phase Rule

Agents must not jump ahead.

Required order:

1. Requirements
2. Locked Wireframe
3. Master-agent confirmation
4. UI/UX
5. Owner UI approval
6. UI specification lock
7. Technical architecture proposal
8. Owner architecture approval
9. Foundation implementation
10. Parallel feature implementation
11. Supabase / gated calculator
12. Market Intelligence automation
13. Newswire automation
14. Research implementation
15. QA
16. Netlify staging
17. Owner approval
18. Production

An agent assigned work from one phase must not begin future phases.

## 9. Fabel Master-Agent Rules

Fabel owns:
- requirements integrity;
- coordination;
- task decomposition;
- architecture recommendations;
- integration;
- code review;
- QA;
- decision logging;
- final branch coordination.

Fabel may recommend changes.

Fabel may not independently change:
- business strategy;
- brand hierarchy;
- locked wireframe;
- primary site architecture;
- three-path framework;
- core economics;
- calculator-gating strategy.

Material changes require owner approval.

## 10. UI/UX Agent Rules

The UI/UX agent owns:
- low-fidelity wireframes;
- high-fidelity design direction;
- design system;
- responsive behavior;
- visual hierarchy;
- typography;
- palette refinement;
- diagrams;
- chart treatment;
- Newswire presentation;
- Market Intelligence presentation;
- Research presentation;
- calculator access-flow design.

The UI/UX agent may improve:
- layout;
- spacing;
- typography;
- visual composition;
- exact copy;
- microinteractions.

The UI/UX agent may not independently change:
- master brand;
- site map;
- homepage sequence;
- three economic paths;
- Newswire / Market Intelligence / Research separation;
- gated-calculator strategy;
- dealer-first positioning.

Any proposed structural change must return for owner approval.

## 11. Maker / Coding-Agent Rules

Maker agents may only build approved work packages.

Before coding, each maker agent must read:
- MASTER_SPEC.md
- LOCKED_WIREFRAME.md
- AGENT_RULES.md
- DECISIONS.md
- UI_SPEC.md, once available
- assigned task specification

Maker agents must:
- use the approved shared design system;
- avoid competing component systems;
- avoid route changes without approval;
- avoid inventing business claims;
- keep work within scope;
- leave unrelated files alone where practical;
- document assumptions that cannot be resolved.

## 12. Foundation-First Rule

Do not start multiple maker agents before the foundation is approved and merged.

Foundation should establish:
- app scaffold;
- design tokens;
- typography;
- layout containers;
- global navigation;
- footer;
- responsive grid;
- button patterns;
- shared data/card primitives;
- routing structure.

Only after this foundation is stable should multiple agents build in parallel.

## 13. Decision Log Rule

Every material approved change must be recorded in `DECISIONS.md`.

Each entry should include:
- date;
- decision;
- reason;
- affected documents/components;
- whether it supersedes an earlier decision.

Agents must not rely on undocumented conversational assumptions for material project changes.

## 14. Source-of-Truth Rule

Business facts must come from:
- owner instructions;
- approved project documents;
- supplied source materials.

External research may be used when:
- the owner requests it;
- current data are required;
- it is needed for Newswire or Market Intelligence;
- it supports an approved design/technical decision.

External research must not silently replace owner-approved facts.

## 15. No Unsupported Claims

Do not invent:
- market leadership claims;
- conversion rates;
- savings;
- revenue claims;
- claims-performance metrics;
- customer satisfaction metrics;
- legal/regulatory claims;
- underwriting capabilities;
- coverage terms;
- reinsurance outcomes.

If unsupported, flag for owner review.

## 16. Data / Automation Rules

### Market Intelligence

Prefer authoritative primary data where practical.

Display:
- source;
- last-updated date;
- latest value;
- relevant trend.

The site should not depend on outside APIs responding live on every visitor page load. Use approved caching/storage architecture.

### Newswire

The automated system must support:
- source attribution;
- original-source link;
- deduplication;
- relevance filtering;
- source-quality control;
- category assignment;
- manual suppression/admin override.

Do not republish full third-party articles.

## 17. Access / Privacy Rules

The detailed Dealer Economics Calculator should not be publicly indexable.

Access architecture should support:
- approved users;
- revocation;
- secure access;
- lead capture;
- appropriate sales context.

Collect only necessary personal data.

Do not add tracking beyond approved lead-intelligence requirements.

## 18. QA Rule

No feature is complete merely because it compiles.

QA must cover, where applicable:
- business fidelity;
- brand fidelity;
- responsive UI;
- accessibility;
- link integrity;
- calculator security;
- source attribution;
- stale-data behavior;
- duplicate Newswire handling;
- performance;
- Netlify build;
- error states.

## 19. Stop Rule

When a task says **STOP**, stop.

Do not:
- continue to the next phase;
- delegate new agents;
- deploy;
- initialize infrastructure;
- “helpfully” make adjacent changes.

Wait for owner approval.
