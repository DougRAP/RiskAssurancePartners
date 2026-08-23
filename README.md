# Risk Assurance Partners — Website Refactor

Dealer-first refactor of the Risk Assurance Partners corporate website.

## Status

**Phase 1 — Master-agent intake.** No application code yet, by design. The project is approval-gated; see [docs/project/IMPLEMENTATION_PLAN.md](docs/project/IMPLEMENTATION_PLAN.md).

## Repository layout

```text
docs/
├── source/                      # Owner-supplied source materials
│   ├── current-website.docx
│   ├── furniturerx-kiosk.docx
│   └── furniture-retail-research.docx
└── project/                     # Authoritative project documents
    ├── MASTER_SPEC.md           # Business & product specification
    ├── LOCKED_WIREFRAME.md      # Locked site map + homepage wireframe
    ├── AGENT_RULES.md           # Rules for all agents
    ├── DECISIONS.md             # Authoritative decision log
    └── IMPLEMENTATION_PLAN.md   # Phased, approval-gated plan
```

## Order of authority

1. Owner instructions
2. DECISIONS.md
3. MASTER_SPEC.md
4. LOCKED_WIREFRAME.md
5. UI_SPEC.md (once approved)
6. IMPLEMENTATION_PLAN.md

If documents conflict, stop and escalate to the owner. Do not silently choose an interpretation.

## Non-negotiables

- **Risk Assurance Partners** is the master brand; FurnitureRx is a RAP product.
- Dealer-need-first narrative; three economic paths (FurnitureRx Subscription, Multi-Year Protection, Reinsurance).
- Newswire, Market Intelligence, and RAP Research remain separate products.
- The detailed RAP Dealer Economics Calculator is gated behind verified access.
- Every phase gate requires explicit owner approval before proceeding.
