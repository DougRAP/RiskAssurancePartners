# Session Handoff (v5)

**Written:** 2026-11-27, end of the home-page design session (2026-11-23 to 11-27).
**Next session's focus:** not yet stated by the owner. Ask, or continue down the list under "What is left" below.
**Read first:** this file, then `docs/project/DECISIONS.md` entries 058–062. Older docs (MASTER_SPEC, LOCKED_WIREFRAME, IMPLEMENTATION_PLAN, AGENT_RULES phase gates) describe the August prototype and are superseded; where they conflict, the owner and the newer decisions win.

## Scope rule from the owner

**Website only.** The owner is answering a dealer RFP separately and has said twice not to bring it into this work. Do not reference it, plan around it, or justify choices with it.

## What the site is for

Risk Assurance Partners (RAP) sells furniture protection programs through retail dealers, who resell to their customers. In the owner's words the site must do three things at once:

1. Speak to **dealers** and make them want to sell RAP programs.
2. Be the place **customers** file a claim or get information.
3. Convince dealers RAP is **tech-forward and customer-friendly**.

Owner's priority order for the message: (1) protection programs that protect furniture from damage; (2) reinsurance that lets dealers build wealth; (3) Multi-Year and the new Subscription program. Appeal to dealer pain points. "Service is important but is not the deciding factor."

Facts in use, all owner-supplied: Google rating 4.4; $19.99/month subscription paying the dealer $8 per payment with nothing to remit; A-rated underwriting; established 2012; millions served; claims handled in-house; "RAP Diamond" is the real plan name.

FurnitureRx (kiosk.furniturerx.net) is the owner's direct-to-consumer brand. Keep consumer kiosk **links** off the RAP site.

## Branches and publishing

| Branch | State | Deployed at |
|---|---|---|
| `ground-up` | Working branch. | https://ground-up--riskassurancepartners.netlify.app/ |
| `main` | Kept identical to `ground-up`. | https://riskassurancepartners.netlify.app/ |

**Standing owner ruling (2026-11-24): push and merge as you go.** After every change: commit on `ground-up`, `git push origin ground-up`, then `git push origin ground-up:main` and `git branch -f main HEAD`. The owner reviews on the main URL within a minute or two of each change. End commit messages with the `Co-Authored-By` line the session provides.

The whole Netlify site is password-protected and sends a no-index header. An agent cannot view the deployed pages (every URL returns 401). Verify locally instead.

## The build

Static HTML, no framework, no build step. Netlify publishes `prototype-ui/`.

- `prototype-ui/index.html`: dealer home. **Redesigned this session; current.**
- `prototype-ui/programs.html`: programs page. **Not yet redesigned**; only its header, utility bar and footer were synced.
- `prototype-ui/customers.html`: customer service / file a claim. **Not yet redesigned**; same sync only.
- `prototype-ui/assets/site.css`: the one shared stylesheet.
- `prototype-ui/assets/site.js`: mobile menu, comparison calculator, contact form.
- `prototype-ui/assets/img/`: published images, WebP only, two widths each.
- `wireframes/home-wireframe.html`: the greyscale wireframe the home page was built from. Reference only; not published.
- `deferred-pages/`: Newswire, Market Intelligence, Research, gated calculator, Admin. Parked.
- `netlify.toml`: publish folder, no-index header, `/home.html` → `/` redirect.

**The utility bar, header and footer are duplicated in the three HTML files.** Edit the HTML directly and keep the three in sync. The customers page deliberately differs: its header buttons are "Call Us" and "File a Claim".

Links that matter: claims `https://www.5starservice.net/`; dealer login `https://portal.furniturerx.net/`; phone 1.800.732.5856; sales@raptns.com.

## Home page as built (top to bottom)

| # | Section | Background | Notes |
|---|---|---|---|
| 0 | Utility bar, header | navy / white | "File a claim" link and phone; nav: Programs, Reinsurance, How It Works, For Customers, Dealer Login |
| 1 | Hero | white | Copy left; photo right with "Turn common damage to gold with RAP." and five bullets on the photo |
| 2 | Trust band | navy | 4.4 Google Stars, A Rated Underwriting, Millions Served, File Claims 24/7, US Based Service |
| 3 | Programs (`#programs`) | white | Heading with "Programs & Coverage →" button on the same row; two photo cards (Multi-Year, Monthly Subscription). Cards have no links. |
| 4 | Reinsurance (`#reinsurance`) | tint | Photo with caption left, copy right |
| 5 | Five challenges (`#challenges`) | white | Five-row ledger: challenge left, RAP answer right. Decision 060. |
| 6 | Comparison calculator (`#calc`) | tint | "Combine a 4-year program with subscription." Two sliders. |
| 7 | Service & training | white | "When claims go badly, you get the blame." Rating chart (competitors anonymised, Decision 061) beside a five-bullet "RAP service difference" panel |
| 8 | How it works (`#how`) | tint | "Onboard and sell in three easy steps." Three generated photos |
| 9 | Dealer questions (`#questions`) | white | Seven FAQs, all collapsed on load; contact side card |
| 10 | Contact (`#contact`) | navy | Netlify form `contact` |
| 11 | Footer | navy | |

Almost every line of copy on the home page was dictated or edited by the owner, word by word. **Do not rewrite home-page copy unasked.** When the owner dictates a change, apply it verbatim; fix only obvious typos and say which ones you fixed.

### Calculator model (owner-supplied)

Follows one month's sales over four years. Constants are in `site.js`.

- Multi-Year: $300 retail, dealer keeps $225, remits $75 per plan.
- 70% of customers decline, so declined customers = plans ÷ 0.30 − plans.
- Second slider: % of those who buy a subscription (0–100, default 20).
- Subscription: $8 × 48 payments per subscriber, nothing remitted.
- First slider: 25–5,000 plans, step 25, default 100.

## Design rules (changed this session)

The owner said on 2026-11-23: **"there are no rules, we are free to design what we want."** That lifted the old no-fills rule. What now holds:

- **Section backgrounds alternate white / tint** down the page (see the table). If you add, remove or split a section, re-check that no two neighbours match.
- **All section headings are left-aligned**, and the owner wants them on **one line** at desktop width where the copy allows. Headings use `text-wrap:balance` so any that do wrap break evenly.
- Colours, fonts and spacing still come from the `:root` tokens in `site.css`. Ask before inventing a new value. The owner's global instructions specifically forbid an invented warm tan/green background.
- Type: Playfair Display headings, Inter body, IBM Plex Mono small labels.
- Photography: warm editorial lifestyle, navy walls, cream upholstery, brass accents. The owner generates images with an AI tool from prompts the agent writes; a photo has to **show the action its caption describes** (the owner rejected a generic "two people at a laptop" for a step about choosing coverage).
- You are the UI design agent, not the copy agent. Lead with layout; do not pad design discussions with copy rewrites.
- Mobile counts as part of "done": 44px tap targets, 12px type floor.

## Working with images

Owner originals live in `C:\Newco\Website\photos\`. For each new image: read it first, crop to the frame's shape, save WebP at two widths into `prototype-ui/assets/img/`, reference with `srcset`, write alt text, and move any original the owner dropped into the publish folder back to the photos folder (ask first). PDFs can be opened with `pymupdf` (installed).

Untracked files currently sitting in `prototype-ui/assets/` (not published, originals also in the photos folder): four PNGs and `wine-to-gold-hero.webp`. One of them, **"A Quick Claim Among Family.png", appeared after the last change and has not been used or discussed**; ask the owner what it is for. `wireframes/hero.jpg` is an unused leftover.

## Checking your work

Start a local server and screenshot with headless Chrome (the servers do not survive a restart):

```
cd prototype-ui && python -m http.server 8123 --bind 127.0.0.1      # run in background
"/c/Program Files/Google/Chrome/Application/chrome.exe" --headless=new --disable-gpu --hide-scrollbars \
  --window-size=1280,9000 --screenshot="<scratchpad>/f.png" "http://127.0.0.1:8123/index.html"
```

Crop the region you changed with PIL and look at it. Check 1280 wide for desktop and about 600 for mobile; widths below about 500px are unreliable and the owner's phone is the authority. Shell heredocs containing apostrophes fail in this environment: write a short Python script to the scratchpad and run it, or use `python -c` with care. `gh` is not installed. LF → CRLF warnings on commit are expected.

## What is left

**Open on the home page**

1. The label "The RAP service difference" (service panel) and the eyebrow "Run the numbers" (calculator) are agent wording the owner has not confirmed.
2. The reinsurance photo caption ("Generational wealth / Built one protection plan at a time, and passed on to the next generation.") is agent wording.
3. The note under the rating chart still says "as published by Google, November 2026" although competitors are now anonymous.
4. FAQ "How and when am I paid?" covers Subscription only.
5. Wording differences the owner knows about and has not asked to change: Multi-Year card says "two to five years" while the hero bullet says "30 Days to 10 Years"; "70% to 75%" in the Subscription card versus a flat 70% in the calculator.
6. Section position: the five challenges sit after Reinsurance. Moving them under the trust band was discussed and left.
7. Real-phone review of the redesigned home page has not been reported back.

**Other pages (not started)**

8. Programs and Customers pages still have the pre-redesign body. They say "A+" where Home says "A-rated", and Programs still shows the old "$250 × 72% = $180" margin illustration, which conflicts with the home calculator's $300 / $225.
9. Customers page: the first FAQ still loads open (Home's are all collapsed); the owner was asked and has not answered.
10. Placeholders remain on Programs (Basic and Premium coverage lists; what the dealer remits on Multi-Year) and Customers (how long a claim takes; how to check claim status).

**Before the site can go live**

- DNS access for riskassurancepartners.com.
- Owner's go-ahead to remove the Netlify password and the no-index header (`netlify.toml` and the `<meta name="robots">` tag in each page).
- Privacy and Terms pages do not exist.
- The contact form has never been tested on a live deploy.

## Owner working preferences

- Replies: extremely concise.
- For coding tasks, name the matching skill in one line before starting.
- The owner works top-down through a section, dictating one small change per message ("change this … to this …"). Make the change, publish it, confirm in a line or two, and flag anything it breaks (wrapping, misalignment, a conflict with other copy). Do not batch or wait.
- The owner reviews on the live main URL and sends screenshots. A yellow arrow in a screenshot is the owner's own mouse pointer.
- Log each material ruling as a numbered entry in `docs/project/DECISIONS.md`.
