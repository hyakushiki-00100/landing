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
robots.txt, sitemap.xml
```

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

Still placeholder:

- `<link rel="canonical">` in `index.html` — set to the real production URL once known
- `og:image` / `twitter:image` — currently an SVG placeholder; replace with a rasterized
  PNG/JPG (1200×630) once final artwork exists, since not all crawlers render SVG OG images
- The four Free Resources cards ("Free PDF", "Wallpaper", "Journal Template", "Weekly Reflection")
  all link to the general Ko-fi shop page for now, since there aren't individual product URLs yet.
  Point each to its specific Ko-fi product page once those exist.

Instagram and Pinterest are intentionally omitted (no accounts yet) — add them back to the footer
in `index.html` once created.

## Also recommended before public launch

- Google Analytics 4 property + tracking snippet
- Google Search Console verification + sitemap submission
- Privacy Policy / Terms pages (not included in this first pass — add when needed)

## Local preview

No build step. Open `index.html` directly in a browser, or serve the folder:

```
python3 -m http.server 8000
```
