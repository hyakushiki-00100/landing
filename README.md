# ZENKYU — Japanese Zen for Modern Life

A single-page landing site for ZENKYU: practical Zen, mindfulness, and minimalism
for a modern (non-religious) audience. Built as plain HTML/CSS/JS so it can be
hosted for free on GitHub Pages, with no build step and no dependencies.

## Structure

```
index.html            One-page site: Hero, About, Articles, Free, Shop, Support, Japanese
assets/css/style.css   Brand styles (colors, type, layout)
assets/js/main.js      Mobile nav toggle + footer year
assets/img/            favicon.svg, og-image.svg
downloads/             The four free resources (see below), served as static files
robots.txt, sitemap.xml
```

## Free Resources

The four cards in the "Free Resources" section link directly to static files in `downloads/` —
no Ko-fi upload or email capture required, consistent with the free/GitHub-Pages-only approach:

- `zenkyu-intro.pdf` — 5-page starter guide ("Zen for Modern Life")
- `zenkyu-journal-template.pdf` — printable daily reflection template
- `zenkyu-weekly-reflection.pdf` — weekly check-in guide + worksheet
- `zenkyu-wallpaper-phone.png` (1170×2532) / `zenkyu-wallpaper-desktop.png` (2560×1440)

Source HTML for the three PDFs and two wallpapers (used to render them via a headless browser)
is not checked into this repo — regenerate by rebuilding similar print-styled HTML and rendering
with Playwright's `page.pdf()` / `page.screenshot()` if these ever need updating.

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
- Ko-fi profile: `https://ko-fi.com/zenkyu` (Support section, footer)
- Ko-fi shop: `https://ko-fi.com/zenkyu/shop` (Hero "Shop Digital Resources", Free Resources cards,
  Shop section "Visit the Ko-fi Shop")
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

## Copy review notes

An editorial pass (2026-08-04) flagged and fixed: a cliché hero tagline, verbatim-repeated
sentences across meta description/hero/About, and copy that read as contradicting the "no
religion" positioning (e.g. "Grounded in Zen practice" → "Drawn from Zen practice"). The About
section now includes a one-line, deliberately anonymous author note, since no verified author
identity/name was available to attribute. Revisit and personalize once the site has a named
author.

## Also recommended before public launch

- Google Analytics 4 property + tracking snippet
- Google Search Console verification + sitemap submission
- Privacy Policy / Terms pages (not included in this first pass — add when needed)

## Local preview

No build step. Open `index.html` directly in a browser, or serve the folder:

```
python3 -m http.server 8000
```
