# ZENKYU — Japanese Zen for Modern Life

A single-page landing site for ZENKYU: practical Zen, mindfulness, and minimalism
for a modern (non-religious) audience. Built as plain HTML/CSS/JS so it can be
hosted for free on GitHub Pages, with no build step and no dependencies.

## Structure

```
index.html              One-page site: Hero, About, Articles, Free, Shop, Support, Japanese
assets/css/style.css    Brand styles (colors, type, layout)
assets/js/main.js       Mobile nav toggle + footer year
assets/img/             favicon.svg, og-image.svg
assets/img/notes/       Cover images for featured note articles
assets/img/kofi/        Cover images for featured Ko-fi products
downloads/              The four free resources (see below), served as static files
tools/downloads-src/    Source HTML for the PDFs/wallpapers in downloads/ (see below)
robots.txt, sitemap.xml
```

## Free Resources

The four cards in the "Free Resources" section link directly to static files in `downloads/` —
no Ko-fi upload or email capture required, consistent with the free/GitHub-Pages-only approach:

- `zenkyu-intro.pdf` — 5-page starter guide ("Zen for Modern Life")
- `zenkyu-journal-template.pdf` — printable daily reflection template
- `zenkyu-weekly-reflection.pdf` — weekly check-in guide + worksheet
- `zenkyu-wallpaper-phone.png` (1170×2532) / `zenkyu-wallpaper-desktop.png` (2560×1440)

Source HTML for these lives in `tools/downloads-src/` (`intro.html`, `journal.html`, `weekly.html`,
`wallpaper-phone.html`, `wallpaper-desktop.html`, shared `print-base.css`). To regenerate after
editing, serve that folder locally and render with headless Chromium:

```
cd tools/downloads-src && python3 -m http.server 8940 &
# then, in Node with Playwright:
#   page.pdf({ width: '210mm', height: '297mm', printBackground: true }) for the *.html print pages
#   page.screenshot() at viewport 1170x2532 / 2560x1440 for the wallpapers
```

Output files go back into `downloads/`.

## Brand guide

| Token       | Value      | Use                          |
|-------------|------------|-------------------------------|
| Background  | `#FAFAF8`  | Page background               |
| Text        | `#222222`  | Body copy                     |
| Accent      | `#3F5D4A`  | Buttons, links, decorative enso |
| Line/Gray   | `#E8E8E8`  | Borders, dividers             |

- **Display font:** Shippori Mincho (headings, logo) — quiet, Japanese-inflected serif.
- **Body font:** Inter — neutral, highly legible sans-serif.
- **Logo:** wordmark only — `ZENKYU`, no icon required.

## Deploying (free, GitHub Pages)

1. Merge this branch into the repository's default branch.
2. In the repo: **Settings → Pages → Build and deployment → Deploy from a branch**,
   select the default branch and `/ (root)`.
3. The site will be live at `https://<username>.github.io/<repo>/`.
4. Once traffic justifies it, point a custom domain (e.g. `zenkyu.org`) at the
   Pages site and add a `CNAME` file.

## Account links

Real accounts wired in:

- Medium: `https://medium.com/@mk3372`
- note: `https://note.com/zenkyu_jp`
- X: `https://x.com/ZENKYUjp`
- Ko-fi profile: `https://ko-fi.com/zenkyu` (Support section)
- Ko-fi shop: `https://ko-fi.com/zenkyu/shop` (Shop section "Visit the Ko-fi Shop")
- Gumroad: `https://zenkyujp.gumroad.com/` (footer only — Ko-fi stays the primary shop; Gumroad is
  reserved for future higher-priced items/bundles per the brand plan)

`canonical`, `sitemap.xml`, and `robots.txt` now point at the real live URL
(`https://hyakushiki-00100.github.io/landing/`). If a custom domain is added later, update all
three.

## Ko-fi products (Shop section)

The Shop section features 3 real products from the "Five Castles: Japan's National Treasures"
series (cover images in `assets/img/kofi/`, resized to 800×800 JPG for page weight):

- Himeji Castle Guide (01) — https://ko-fi.com/s/3cf76a0c4e
- Inuyama Castle Guide (03) — https://ko-fi.com/s/1ef67daa2f
- Matsue Castle Guide (05) — https://ko-fi.com/s/26300c42db

Two more castles in the series (02, 04) are not yet linked — add their cards here once those
products exist and their Ko-fi URLs are known.

Still placeholder:

- `og:image` / `twitter:image` — currently an SVG placeholder; replace with a rasterized
  PNG/JPG (1200×630) once final artwork exists, since not all crawlers render SVG OG images

Instagram and Pinterest are intentionally omitted (no accounts yet) — add them back to the footer
in `index.html` once created.

## Article backlog (Medium)

The Articles section features 6 of the following real, published essays at a time. Rotate the
featured 6 periodically for freshness — swap `href`/title/blurb in `index.html`, keep the rest
here as backlog:

**Currently featured:**
- https://medium.com/@mk3372/you-will-never-be-in-this-exact-room-again-the-zen-phrase-ichigo-ichie-%E4%B8%80%E6%9C%9F%E4%B8%80%E4%BC%9A-cd88caf466eb
- https://medium.com/@mk3372/your-like-count-is-a-flower-in-a-mirror-the-zen-phrase-ky%C5%8Dka-suigetsu-ec692fa78d9b
- https://medium.com/@mk3372/the-doorway-where-you-take-off-your-shoes-means-gate-to-the-profound-the-zen-word-genkan-%E7%8E%84%E9%96%A2-a6c20c8be956
- https://medium.com/@mk3372/put-it-down-even-im-carrying-nothing-the-zen-word-h%C5%8Dgejaku-%E6%94%BE%E4%B8%8B%E8%91%97-fb1fc6992dd5
- https://medium.com/@mk3372/the-5-minutes-before-you-check-your-phone-decide-more-than-you-think-597f1a07316e
- https://medium.com/@mk3372/why-a-cluttered-desktop-is-quietly-draining-your-focus-63d469658eb3

**Backlog (not yet featured on the homepage):**
- https://medium.com/@mk3372/master-are-you-there-the-zen-habit-of-calling-your-own-name-%E4%B8%BB%E4%BA%BA%E5%85%AC-ec211c6e27d5
- https://medium.com/@mk3372/the-lantern-went-out-look-at-your-feet-the-zen-instruction-kankyakka-%E7%9C%8B%E8%84%9A%E4%B8%8B-511c3416d0f5
- https://medium.com/@mk3372/we-just-get-each-other-isnt-a-compliment-it-s-the-zen-story-of-holding-up-a-flower-c35bcd62fb20
- https://medium.com/@mk3372/shouting-louder-doesnt-wake-anyone-the-zen-word-katsu-%E5%96%9D-8dc1f128c7d7
- https://medium.com/@mk3372/results-take-time-isnt-a-pep-talk-it-s-the-zen-case-for-sequence-ab6e6002e534
- https://medium.com/@mk3372/the-boundary-you-lost-when-you-stopped-commuting-9123f77cd15f
- https://medium.com/@mk3372/the-zen-word-a-un-%E9%98%BF%E5%90%BD-living-beginnings-and-endings-as-a-pair-54d6ffdae910
- https://medium.com/@mk3372/the-zen-word-un-%E5%90%BD-what-a-single-closed-mouth-character-teaches-us-about-silence-and-endings-c0ea2d91c832
- https://medium.com/@mk3372/rain-or-shine-both-are-good-what-actually-ruins-a-rainy-day-26e65ef8d3eb
- https://medium.com/@mk3372/dharma-rain-the-same-rain-different-growth-562ec691a4b4
- https://medium.com/@mk3372/the-sound-of-raindrops-are-you-hearing-it-or-just-naming-it-5d5f845dae5d
- https://medium.com/@mk3372/why-your-best-people-freeze-in-a-crisis-and-the-japanese-word-for-the-fix-b00f7cf00d9f

Note: two different Medium post IDs were submitted for "Why a cluttered desktop..." — the
featured one is `63d469658eb3`; a second copy (`babb28a2cb69`) exists on Medium but is treated as
a duplicate and not linked here.

## Adversarial review fixes (2026-08-08)

A harsher, adversarial editorial pass (looking for overstated claims and broken assumptions, not
just typos) found and fixed:

- **Ko-fi card images were cropping out the product's own branding.** `.card-cover-img` used a wide
  1280:670 crop meant for note's landscape covers; applied to the square (800×800) Ko-fi covers, it
  cut off both the "Five Castles" series badge and the castle name baked into the image. Fixed with
  a `.card-cover-img-square` modifier (1:1 aspect ratio) for Ko-fi cards, plus an explicit
  "Five Castles — 0X" eyebrow line in the card text so the series context isn't only in a
  potentially-cropped image.
- **Stale tagline in shipped assets.** `og-image.svg` and the `tools/downloads-src/` source for the
  intro PDF and both wallpapers still said "Ancient Wisdom for Modern Minds" after the hero copy
  was changed to "Practical Zen for Ordinary Days" — meaning the most-shared asset (OG image) and
  the free downloads never got the fix. Now consistent, and regenerated into `downloads/`.
- **Hero's primary CTA sent visitors straight to Medium**, bypassing the rest of the page on first
  contact — undermines the "this page is the hub" premise. Now links to `#articles` instead.
- **Support section implied a real membership tier** ("Become a Member") that pointed at the exact
  same Ko-fi profile URL as "Buy Me a Coffee" — collapsed into one honest CTA.
- **`<html lang="en">` with no language attribute on the Japanese section** — added `lang="ja"` to
  the `#japanese` section.

Not yet addressed (lower priority, tracked here for later): a few unused/dead CSS classes
(`.card-static`, `.feature-list`, `.card-grid-2` no longer referenced from `index.html`), `<img>`
tags missing explicit `width`/`height` (minor layout-shift risk), the nav order (`Shop` before
`Free`) not matching the on-page section order (`Free` before `Shop`), and an inline
`style="margin-top:-32px;"` hack in the About section.

## Copy review notes

An editorial pass (2026-08-04) flagged and fixed: a cliché hero tagline, verbatim-repeated
sentences across meta description/hero/About, and copy that read as contradicting the "no
religion" positioning (e.g. "Grounded in Zen practice" → "Drawn from Zen practice"). The About
section now includes a one-line, deliberately anonymous author note, since no verified author
identity/name was available to attribute. Revisit and personalize once the site has a named
author.

## Analytics (GA4)

GA4 is installed (`assets/js/main.js` + the snippet in `<head>` of `index.html`), measurement ID
`G-RD2NYK8QKS`. Beyond default pageview tracking, every outbound/download link on the page is
auto-tracked — no per-link markup needed. `classifyDestination()` in `main.js` inspects each link's
hostname and fires one of two GA4 events on click:

- `outbound_click` — Medium, note, Ko-fi, Gumroad, or X links, with `destination` (`medium` /
  `note` / `kofi` / `gumroad` / `x`), `section` (the id of the enclosing `<section>`, e.g.
  `articles`, `shop`, `japanese`), and `link_text` (the card's `<h3>`, or the link text if there's
  no heading).
- `file_download` — anything under `downloads/` (the free PDFs and wallpapers), same fields with
  `destination: 'download'`.

New links picked up automatically as long as they point to one of the domains above or to
`downloads/` — no code change needed when rotating Medium articles or adding new Ko-fi products.
`allow_google_signals` is set to `false` (no ads/remarketing signal collection).

GA4 uses cookies; there's no consent banner yet, so treat this as US/Japan-first analytics rather
than something compliant for EU visitors — add a consent mechanism (or switch to a cookieless
analytics tool) before actively promoting to an EU audience.

## Also recommended before public launch

- Google Search Console verification + sitemap submission
- Privacy Policy / Terms pages (not included in this first pass — add when needed)

## Local preview

No build step. Open `index.html` directly in a browser, or serve the folder:

```
python3 -m http.server 8000
```
