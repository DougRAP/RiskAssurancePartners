# Dev Notes — External Applications

Owner-directed notes for work in systems outside this repository.

## For Adrian — 2026-08-26 — Back-links from external apps to the RAP website

The new Risk Assurance Partners website links out to three external applications
from its utility navigation (every page):

| Website link | External application |
|---|---|
| Subscription Plans | https://kiosk.furniturerx.net |
| Dealer Login | https://portal.furniturerx.net/ |
| File a Claim | https://www.5starservice.net/ |
| Customer Support | https://kiosk.furniturerx.net (pending final URL) |

**Requested change — in each of the three applications:**

Add a button or link on the application's home page pointing back to the
**Risk Assurance Partners home page**, so a user can navigate easily between
the apps and the corporate website.

Requirements:
- the link back lives **in the navigation** of each application;
- it must be **obvious** (a clearly visible button or labeled link, e.g.
  "Risk Assurance Partners Home" — not a footer-only text link);
- destination: the RAP website home page (production domain once launched;
  staging URL https://riskassurancepartners.netlify.app until then — plan to
  update the href at production cutover, Phase 15).

Context: the RAP site refactor is dealer-first with customer functions living
in these external apps. Round-trip navigation keeps customers and dealers from
getting stranded in either direction.

## Supabase phase — 2026-08-28 — Research topic-proposal form wiring

The research page's coming-soon card carries a **Propose a topic** form
(research.html, `#prop-form`): required Name / Company / Phone / Email plus a
proposed-topic textarea. It is a static prototype today — native validation,
confirmation message, no transport.

**When the Supabase lead-capture work package runs (DECISIONS 042/043/049),
include this form:**
- store submissions in the same lead/access-request table as the other forms;
- **source tag: `research-topic`** (joins `calculator`, `infosheet`, `contact`);
- deliver to RAP Sales / the RAP Research team alongside other leads;
- no status tracking or login (matches Decision 043's no-friction ruling).

## Supabase phase — 2026-08-28 — Footer contact-routes form wiring

The footer "Talk to Risk Assurance Partners" block (all six public pages)
now opens a shared inline form (`#contact-form`) from its three route cards:
**I'm a dealer** · **How do I start selling subscription programs** · **Media
or other**. Required Name / Email / Phone + "What are you interested in?"
textarea; hidden `#contact-route` field records the clicked card
(`dealer` / `subscription` / `media`). Static prototype today — no transport.

**When the Supabase lead-capture work package runs, include this form:**
- same lead table as the other forms;
- **source tag: `contact`**, with the route value stored alongside
  (`dealer` / `subscription` / `media`) for triage;
- deliver to RAP Sales; media-route entries flagged for whoever handles press;
- no status tracking or login (Decision 043 ruling).

## MI automation phase — 2026-08-30 — Snapshot archive persistence

market-intelligence.html ships archive-by-date plumbing (Decision 052):
`SNAPSHOTS` array (empty), `snapshotValue()` / `setSnapshot()` on every value
render path, and a date `<select>` that self-renders only when snapshots
exist. When the FRED automation phase lands: persist a dated snapshot of the
8 metrics on each update run (up to 1 year of history), feed them into
`SNAPSHOTS` newest-first (`{date,label,metrics:{<id>:{currentValue,
changeLabel}}}`), and the picker + "Return to current" UI activates itself.
Current always = latest published snapshot (data is monthly; mid-month
visitors see the prior update). Also populate per-range `series` arrays for
the charts and the AI article fields at the same time.

**AI output contract (owner, 2026-08-30):** the outlook score UI was removed
from the page — the AI agent's article output MUST always end with the
Furniture Retail Outlook score (x / 100) as part of its written commentary
(methodology + disclaimer language still require owner approval before any
real score ships). The article renders into `#mic-article` (pre-styled
serif p / brass h4 / ul-li on the ink inset).

**Post-wiring cleanup (owner, 2026-08-29):** once transport is live, sweep all
pages for stale "no transport / nothing stored / static prototype" code
comments and remove them — economics-gate.html's access-form script header
carries an explicit REMINDER marker; the contact-form, propose-a-topic, and
leave-a-message script comments say the same thing and go in the same sweep.
