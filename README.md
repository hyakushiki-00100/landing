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

## Before going live — placeholder links to replace

All of the following are placeholders and need real URLs once the accounts exist:

- `https://medium.com/@zenkyu` — Medium profile / article links (`index.html`, "Read Articles" + Articles section)
- `https://ko-fi.com/s/3cf76a0c4e` — Ko-fi shop link (already real, per project owner)
- `https://ko-fi.com/zenkyu` — Ko-fi profile (Support section, footer)
- `https://note.com/zenkyu` — note profile (Japanese section, footer)
- `https://x.com/zenkyu`, `https://instagram.com/zenkyu`, `https://pinterest.com/zenkyu` — social links (footer)
- `<link rel="canonical">` in `index.html` — set to the real production URL once known
- `og:image` / `twitter:image` — currently an SVG placeholder; replace with a rasterized
  PNG/JPG (1200×630) once final artwork exists, since not all crawlers render SVG OG images

## Also recommended before public launch

- Google Analytics 4 property + tracking snippet
- Google Search Console verification + sitemap submission
- Privacy Policy / Terms pages (not included in this first pass — add when needed)

## Local preview

No build step. Open `index.html` directly in a browser, or serve the folder:

```
python3 -m http.server 8000
```
