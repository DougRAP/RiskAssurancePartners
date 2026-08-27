# Fabel Master Agent — Session Handoff

**From:** Fabel Master Agent 1 (session ended at owner request, 2026-08-27)
**To:** Fabel Master Agent 2
**Read first, in order:** AGENT_RULES.md → DECISIONS.md (001–044, authoritative) → MASTER_SPEC.md → LOCKED_WIREFRAME.md → this file. Then standby for owner instructions.

## Where the project stands

**Phase 2 (UI/UX) — advanced, iterating with owner; not yet formally signed off.**
The owner reviews the deployed prototype and issues rapid changes; treat owner messages as top authority, apply the MASTER_SPEC flexibility clause liberally (Decision 035 process note): locked docs protect the business narrative and facts, not design execution.

- **Repo:** https://github.com/DougRAP/RiskAssurancePartners — push to `main` deploys.
- **Deploy:** Netlify, publish dir `prototype-ui/` only (netlify.toml pins it; site-wide noindex header). Site is visitor-password-protected. URL: https://riskassurancepartners.netlify.app (WebFetch returns 401 — verify via local files).
- **Pages (all self-contained HTML, no framework/build):** home.html, programs.html, newswire.html, market-intelligence.html, research.html, economics-gate.html (Dealer Economics / "Profit Calculator" page), admin.html (agent console, passphrase `rap-agent-2026`). All share identical chrome: utility bar (Subscription Plans · Customer Support · Admin | Contact · Dealer Login), sticky condensing header (Home · Programs ▾ · Newswire · Market Intel ▾ · Why RAP · Profit Calculator CTA), drawer, full footer. Customer Support opens a popup (Decision 042) on every page.

## Working conventions (owner-set)

- **Delegate multi-line changes to Opus subagents** (owner preference, stated twice); inline only one-liners. Master does: briefs, QA, decision logging, git commits/pushes. Subagents must NOT commit.
- Long-lived subagent contexts can expire — write self-contained briefs (repo path, house rules, approved facts, validation standards, "no git commits", report format).
- QA before every deploy: grep forbidden strings ($9.99, Captive, 4.7 star, "See My Economics", href="#"), zero dead links, no duplicate IDs. Prototype must match production (NO banners/dev chrome — owner removes them on sight).
- Commit style: short imperative subject + `Co-Authored-By: Claude Fable 5 <noreply@anthropic.com>`. Every material owner ruling gets a DECISIONS.md entry before/with the implementation commit.
- Owner is "the owner" (email dwright@raptns.com, git DougRAP). Be extremely concise. Answer questions with assessment first; don't implement while a "thoughts?" question is open — propose, get go, execute.

## Key facts cheat sheet (all owner-approved; details in DECISIONS)

- FurnitureRx Subscription: customer $19.99/mo; dealer remits $0; dealer earns $8 per successful monthly payment. Multi-Year: ~$250 avg one-time; $250 × 72% = $180 GM/ticket; prorated refunds. 60-month term everywhere (one multi-year term = 60 subscription payments; $8 × 60 = $480/ticket).
- Waterfall (owner proforma, docs/design/Subscription Proforma Dealer Standard 3.xlsx): cumulative = $8 × m × M(M+1)/2. Checks: 1/mo → $5,328 @36mo, $14,640 @60mo; 100/mo → $532,800 @36mo, $1,464,000 @60mo; 200/mo → $1,065,600 @36mo ("more than $1M"). Multi-year total = $180 × m × 60.
- Commission schedule: kits $20 (drop-ship to claimed non-overlapping trading-area zips, or dealer stocks), Repair Safety Net $8, stain plans $2 — none of these lead the main site.
- 4.5-star Google rating (prominent), 15+ years, A-Rated underwriting (never name the partner), in-house claims, ~70% decline multi-year, two-axis model (plan types Subscription/Multi-Year × underwriting types Reinsurance/Standard; Reinsurance = dealer shares underwriting profits + tax benefits, wealth over time, never "immediate profit").
- Contact: 1.800.732.5856, sales@raptns.com, 9–6 ET Mon–Sat (support hours; office hours logged as 8–6 M–F in Decision 027 — popup shows 9–6 M–Sat per Decision 042). External links: kiosk.furniturerx.net (Subscription Plans/Customer Support fallback), portal.furniturerx.net (Dealer Login), 5starservice.net (File a Claim).

## Open items / immediate queue

1. **Contact Us** — owner said "we will talk about the contact us button" — NEVER DISCUSSED. Likely first topic for Agent 2.
2. **Two questions asked, unanswered:** (a) add a volume qualifier to the homepage "$1M in 36 months" claim (true at 200 new subs/mo)? (b) Programs page intro still carries the old Decision 025 descriptor — sync with the new homepage copy or leave?
3. Minor open: "Turn key" vs "Turnkey" spelling; footer File-a-Claim sitemap entries keep/remove; chat agent display name (Maya vs generic); lunch-state copy for support popup.
4. **Owner will connect Supabase** — then supply setup/SQL script (chat transport = Realtime broadcast, no transcript storage; real admin auth; access-request lead capture with source tag "calculator"/"infosheet"). First Supabase work package is defined in Decisions 042/043.
5. **Content owed by owner:** coverage lists for Basic|Premium grids (programs page placeholders), Reinsurance/Standard "good fit" bullets, Multi-Year dealer commission stat, tax-advisor qualifier sign-off, Customer Support final URL, vector logo asset.
6. **Phase 2 close → Phase 3:** when owner signs off the UI, write /docs/project/UI_SPEC.md (lock tokens/components/rules), update DECISIONS + LOCKED_WIREFRAME, STOP at pre-coding gate. Then Phase 4 technical architecture proposal (framework, Netlify model, Supabase role, auth, scheduled functions, caching, agent work packages — each with why/alternatives/implications).
7. Dev note for Adrian pending action (docs/project/DEV_NOTES.md): back-links from the three external apps to RAP home; update to production domain at Phase 15.
8. Design docs (WIREFRAMES/DESIGN_SYSTEM/PAGE_WIREFRAMES) lag the latest owner iterations — reconcile when writing UI_SPEC rather than continuously.

## Cautions

- economics-gate.html's request form must stay `hidden` on load (regressed once). Sliders/mini-calcs: never expose cancellation/retention assumptions publicly (Decision 013); proforma cancel-rate input stays private.
- Don't let subagents reintroduce prototype banners, dev chrome, or named underwriters.
- FurnitureRx-Subscription-Plan-Info.html must never be copied into prototype-ui/ (it would bypass the gate).
