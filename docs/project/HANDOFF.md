# Fabel Master Agent — Session Handoff (v2)

**From:** Master Agent 1 + Master Agent 2 (both retiring at owner request, 2026-08-28)
**To:** Fabel Master Agent 3
**Baseline:** main @ `4c20d8e`, tree clean, all pushed, no live subagents, no half-done tasks.
**Read first, in order:** AGENT_RULES.md → DECISIONS.md (001–**048**, authoritative) → MASTER_SPEC.md → LOCKED_WIREFRAME.md → this file → docs/design/MOBILE_AUDIT.md. Then standby for owner instructions.

## Where the project stands

**Phase 2 (UI/UX), iterating page-by-page with the owner; not signed off.** Owner messages are top authority; the MASTER_SPEC flexibility clause applies liberally to design execution (Decision 035) — locked docs protect business narrative and facts only.

- **Repo:** https://github.com/DougRAP/RiskAssurancePartners — push to `main` deploys immediately to production preview.
- **Deploy:** Netlify, publish dir `prototype-ui/` (netlify.toml), sitewide noindex header, visitor-password-protected. Branch deploys enabled ("All"); `mobile-fixes` branch exists, synced then left behind main — fast-forward or delete at will.
- **Pages** (self-contained HTML, no framework): home, programs, newswire, market-intelligence, research, economics-gate ("Profit Calculator" page), admin (console, passphrase `rap-agent-2026`). Shared chrome: utility bar, sticky condensing header (Home · Programs ▾ · Newswire · Market Intel ▾ · Why RAP · Profit Calculator CTA), drawer (owner-approved accordion redesign), full footer. Customer Support popup on every page (Decision 042).

## Work cadence (owner-established — follow it)

- **Page-by-page, top-to-bottom polish. HOME IS DONE (Decision 048). programs.html is next**; owner said "we will get to newswire."
- Owner fires rapid one-line copy edits: master does one-liners inline; **Opus subagents for all multi-line work** (self-contained briefs — subagent contexts expire; include repo path, house rules, approved facts, validation standards, "no git commits", report format).
- **Standing orders:** state the mobile impact BEFORE implementing every change; alert on dead code; QA greps before deploy now include mobile checks (fixed px widths, SVG font-size < 14, author display rules fighting `hidden`) plus the classics ($9.99, Captive, 4.7 star, "See My Economics", href="#", duplicate IDs, dead links).
- Owner reviews live production on desktop AND phone; screenshots issues with green arrows — diagnose the CSS cause, propose, fix.
- Owner pastes ChatGPT-drafted specs verbatim and may contradict parts when questioned — validate math/facts first; ask crisp either/or questions; fix obvious typos with a flag; stop on material ambiguity. Owner often answers "you decide" — decide and proceed.
- Every material ruling → DECISIONS.md entry with the implementing commit. Assessment-first on "thoughts?" questions — propose, get go, then execute.

## Key facts (all owner-approved; details in DECISIONS 001–048)

- Subscription: customer $19.99/mo · dealer remits $0 · dealer earns $8/successful payment. Multi-Year: ~$250 avg one-time; $250 × 72% = $180 GM/ticket. 60-month term everywhere ($8 × 60 = $480/ticket).
- Waterfall (owner proforma xlsx in docs/design/): cumulative = $8 × m × M(M+1)/2. Checks: 1/mo → $5,328 @36mo; 100/mo → $532,800 @36mo, $1,464,000 @60mo; 200/mo → $1,065,600 @36mo. Multi-year total = $180 × m × 60.
- **New per Decision 048:** per-plan economics $250 = $70 COGS + $50 commission (20%) + $130 operating profit; cost-bar baseline percentages incl. Wh/Del/Other 7.5, Operating Profit 5.5 (brass); average furniture sale $2,250; "~70% decline multi-year" usable in eyebrows without a source line.
- **Reinsurance clarification (supersedes 029, logged in 048 batch):** reinsurance is an *underwriting option on* Subscription/Multi-Year plans — a participating dealer RETAINS underwriting profits, otherwise RAP keeps them; it is NOT a third product.
- 4.5★ Google (prominent) · 15+ years · A-Rated underwriting (never name the partner) · in-house claims · "Profit Calculator" is the ONE name for the tool CTA (032) — do not invent labels.
- Contact: 1.800.732.5856 · sales@raptns.com. **Hours conflict OPEN** (footer 8–6 M–F vs popup 9–6 M–Sat — see open questions). External: kiosk.furniturerx.net (Subscription Plans), portal.furniturerx.net (Dealer Login), 5starservice.net (File a Claim, via popup only). Footer tagline sitewide: "Protection Programs for Furniture Retailers & Designers". "Turnkey" one word (settled).

## Mobile remediation status (docs/design/MOBILE_AUDIT.md + Decisions 045–047)

- **Fixed & deployed:** all "broken" items — sitewide header overflow, `[hidden]{display:none!important}` guard, drawer redesign, GM figure rebuilt as HTML (`.gmf` shared pattern, home + gate), gate sliders full-width + numeric twins + 44px targets, gate CTA/footer-grid, teaser disclaimer to HTML, research color tokens, admin pane bug.
- **Ruled but NOT yet implemented:** S6 utility-bar phone treatment (keep Support + Dealer Login); S14 tap-to-toggle dropdown fallback for desktop-width touch; newswire prototype state bar removal (keep URL-param access).
- **Open:** S9–S13 popup/footer polish, S15; all degraded/cosmetic items on programs/newswire/MI/research/admin fold into their page passes (Decision 046 working model).

## Open questions for the owner (consolidated)

1. **Hours conflict** — footer 8–6 Mon–Fri (027) vs support popup 9–6 Mon–Sat (042). Asked twice, unanswered.
2. **Programs-page descriptor** — still carries old Decision 025 copy; gap vs the reworked homepage widened by 048. Ask during the programs.html pass.
3. **Contact Us routing** — Agent 2 delivered an assessment (keep footer block; Supabase leave-a-message with source tag "contact"); owner never ruled. Known defect: gate page's utility "Contact" points at home.html#contact while other pages self-anchor — unfixed.
4. Gate-page GM figure kicker still reads old "Choose subscription or multi-year plans, or mix & match" — owner deferred syncing with home's "Subscription vs Multi-year Plan GM"; raise when touching gate. Gate slider default m=1 retained (owner offered to change, never did).
5. Inherited content owed: chat agent display name (Maya?), lunch-state popup copy, Customer Support final URL, coverage lists for Basic|Premium grids, Reinsurance/Standard good-fit bullets, Multi-Year commission stat, tax-advisor qualifier, vector logo, **Supabase connection** (owner connects → then supply setup/SQL; first work package per 042/043: chat Realtime broadcast, admin auth, access-request lead capture with source tags "calculator"/"infosheet"/"contact").
6. Resolved-moot: $1M/36mo qualifier (claim removed from homepage in 048).

## Technical traps (learned the hard way)

- Never pair `hidden` with an author CSS `display` rule — the sitewide guard exists; use it properly in new code.
- No text inside scaling SVGs — labels shrink to 5–7px on phones; rebuild as HTML (`.gmf` is the shared pattern).
- Proportional flex bars need `flex-basis:0` or content skews geometry; the cost-bar bracket needs inter-segment-gap compensation (see code comment).
- PowerShell regex edits can strip CRLF — check diffs for whitespace noise.
- newswire + research keep their `#stub` anchors and prototype notes DELIBERATELY (live JS deps) — clean up only in their page passes.
- economics-gate request form must stay `hidden` on load. Never expose cancellation/retention assumptions publicly (013). FurnitureRx-Subscription-Plan-Info.html (docs/source, corrected to $250) must never enter prototype-ui/. No prototype banners/dev chrome — owner removes on sight. Subagents must not reintroduce named underwriters.

## Road ahead

programs.html pass → newswire pass → remaining page passes + ruled-but-unimplemented mobile items → Contact Us ruling → Phase 2 sign-off → **Phase 3:** write /docs/project/UI_SPEC.md (reconcile the lagging design docs then), update DECISIONS/LOCKED_WIREFRAME, STOP at pre-coding gate → **Phase 4:** technical architecture proposal (framework, Netlify model, Supabase role, auth, scheduled functions, caching, agent work packages — each with why/alternatives/implications) → foundation build and beyond per IMPLEMENTATION_PLAN.md.
