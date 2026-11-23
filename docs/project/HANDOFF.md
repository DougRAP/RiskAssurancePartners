# Session Handoff (v4)

**Written:** 2026-11-23, end of the strategy + rebuild session.
**Next session's focus (owner-stated):** design elements of the new site.
**Read first:** this file, then `docs/project/DECISIONS.md` entries 055–058. Older docs (MASTER_SPEC, LOCKED_WIREFRAME, IMPLEMENTATION_PLAN, AGENT_RULES phase gates) describe the August prototype and are largely superseded by 055–058; where they conflict, the owner and the newer decisions win.

## Scope rule from the owner

**Website only.** The owner is answering a dealer RFP separately and has said twice not to bring it into this work. Do not reference it, plan around it, or justify choices with it. Judge the site on what wins retail furniture dealers in general.

## What the site is for

Risk Assurance Partners (RAP) sells furniture protection programs through retail dealers, who resell to their customers. The site must:

1. Speak first to **retail dealers**: their pain points and how RAP answers them.
2. Give **consumers** an obvious way to get service (file a claim).

Competitors' sites (Montage, Guardian, Guardsman, ServeCo, Furniture Care Protection, ProtectAll) are generic consumer/dealer hybrids; none quantifies dealer economics or names a subscription program. RAP's differentiators, all owner-supplied:

- Google rating **4.4** (229 reviews); competitors 2.2–3.7 (Montage 3.7, ProtectAll 3.3, Guardian 2.6, Furniture Care Protection 2.2; pulled by the owner November 2026).
- **$19.99/month subscription** plan; dealer earns $8 per monthly payment, remits $0.
- **Only provider** whose subscription programs qualify for reinsurance.
- Every service contract backed by **A+ underwriting from Zurich or Sentruity Casualty Company**.
- **Established 2012.** Millions of customers served. Claims in-house.

FurnitureRx (kiosk.furniturerx.net) is the owner's direct-to-consumer subscription brand. Keep consumer-facing kiosk links **off** the RAP site; subscription appears only as a program dealers earn on.

## Branches

| Branch | State | Deployed at |
|---|---|---|
| `ground-up` | **Current work.** Full rebuild, Decision 058. Not merged. | https://ground-up--riskassurancepartners.netlify.app/ |
| `main` | The earlier trim of the August prototype (Decisions 055–057). | https://riskassurancepartners.netlify.app/ |
| `site-rebuild` | Same as `main`; can be ignored. | — |
| `programs-refactor` | Already contained in `main`. | — |

The owner compares `ground-up` against `main` side by side. **Merge `ground-up` into `main` only when the owner says "merge."** Commit and push to the working branch continuously so the Netlify preview stays current.

The whole Netlify site is password-protected and sends a no-index header. An agent cannot see the deployed pages (every URL returns 401); a 401 on a preview URL does confirm the deploy exists.

## The ground-up build (`ground-up`)

Static HTML, no framework, no build step. Netlify publishes `prototype-ui/`.

- `prototype-ui/index.html` — dealer home
- `prototype-ui/programs.html` — programs, as two choices (plan types, then underwriting)
- `prototype-ui/customers.html` — customer service / file a claim
- `prototype-ui/assets/site.css` — the one shared stylesheet
- `prototype-ui/assets/site.js` — mobile menu, income estimate, contact form
- `deferred-pages/` — Newswire, Market Intelligence, Research, gated calculator, Admin. Out of the publish folder, kept for later. They use the old inline-CSS chrome.
- `netlify.toml` — publish folder, no-index header, `/home.html` → `/` redirect

**The header and footer are duplicated in the three HTML files.** They were generated once by a throwaway script that no longer exists; edit the HTML directly and keep the three copies in sync. (The customers page deliberately differs: its header buttons are "Call Us" and "File a Claim".)

Home section order: hero with "Only at RAP" panel and proof strip → what you earn (plan cards, underwriting cards, income estimate) → why subscription → Google rating comparison, dealer quotes and logos → how it works (three steps, three screenshots) → dealer questions → contact form.

Links that matter: claims go to `https://www.5starservice.net/`; dealer login is `https://portal.furniturerx.net/`; phone 1.800.732.5856; sales@raptns.com.

The contact form posts to Netlify Forms (form name `contact`). It has never been tested on a live deploy.

## Design rules

- **Use only the existing tokens** in `:root` of `assets/site.css` (copied verbatim from the approved design system). Do not invent colours, fonts or spacing values; ask the owner first if a new value seems needed.
- **No alternating section background fills.** Separate sections with spacing and hairline rules. The only dark band is the footer.
- Type: Playfair Display for headings, Inter for body, IBM Plex Mono for small labels.
- Mobile counts as part of "done": 44px tap targets, 12px type floor, no text inside scaling SVGs, never pair the `hidden` attribute with an author `display` rule.
- Copy: do not invent claims, coverage terms or numbers. Use "Reinsurance," never "Captive." Do not present Reinsurance as immediate profit. Keep the tax-advisor note next to tax-benefit claims.

The owner's reaction to the first pass on `main` was that it looked like the old site with edits. The `ground-up` design is the response; the owner has not yet given feedback on it.

## Checking your work

Headless Chrome screenshots from the local files work well:

```
"/c/Program Files/Google/Chrome/Application/chrome.exe" --headless=new --disable-gpu --hide-scrollbars \
  --window-size=1280,6600 --screenshot="<scratchpad>/home.png" \
  "file:///c:/Newco/AI/RAP%20Website/Website%20Refactor/prototype-ui/index.html"
```

Widths below about 500px are unreliable in headless Chrome; the owner's phone is the authority for mobile. As of this handoff, Home and Programs were checked at desktop width and Home at 520px; the Customers page on `ground-up` was not screenshotted.

`gh` is not installed. Git line-ending warnings (LF → CRLF) on commit are expected.

## Placeholders awaiting the owner

Each renders as a grey dashed box (`.ph`) or a "Placeholder — owner to supply" line (`.ph-text`).

| Page | Placeholder |
|---|---|
| Home, under the rating chart | Three dealer quotes; five dealer logos |
| Home, How it works | Screenshots: claim app, subscription sign-up, dealer portal |
| Home, Dealer questions | Answers: plans sold under the current provider; associate training; point-of-sale; how and when the dealer is paid; time to launch |
| Programs | Basic and Premium coverage lists; what the dealer remits on Multi-Year |
| Customers | Answers: how long a claim takes; how to check claim status |

## Open questions for the owner

1. **Subscription math:** the site uses $8 × 60 payments = $480 per subscriber; Decision 039 says 36 payments / $288.
2. **"Since 2012" vs "decade and a half":** the owner's reinsurance line said a decade and a half; 2012 to 2026 is 14 years, so the site says "since 2012."
3. **A+ for both carriers:** written as the owner gave it; not independently confirmed for Sentruity.
4. **Hours:** sales 8–6 ET Mon–Fri (Decision 027); customer service 9–6 ET Mon–Sat (Decision 042). Both are shown, each in its own context.
5. **Income estimate defaults** (500 tickets, 30% Multi-Year, 15% Subscription) were chosen by the agent, not the owner.
6. **Guardian** has two Google listings (2.6 and 2.5); the site shows 2.6. Guardsman and ServeCo are not in the chart because the owner did not supply their ratings.
7. Draft copy throughout the new pages needs the owner's read.

## Before the site can go live

- DNS access for riskassurancepartners.com (the owner does not have the old site's code; the new site replaces it).
- Owner's go-ahead to remove the Netlify password and the no-index header (`netlify.toml` and the `<meta name="robots">` tag in each page).
- Privacy and Terms pages do not exist.
- A test submission of the contact form on a live deploy.

## Owner working preferences

- Replies: extremely concise.
- For coding tasks, name the matching skill in one line before starting.
- The owner reviews on desktop and phone via the Netlify previews and often sends screenshots.
- Log each material ruling as a numbered entry in `docs/project/DECISIONS.md`.
