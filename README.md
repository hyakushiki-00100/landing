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

Still placeholder:

- `og:image` / `twitter:image` — currently an SVG placeholder; replace with a rasterized
  PNG/JPG (1200×630) once final artwork exists, since not all crawlers render SVG OG images

Instagram and Pinterest are intentionally omitted (no accounts yet) — add them back to the footer
in `index.html` once created.

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
