# MountainEstatepartners.com — website

Static site (HTML / CSS / vanilla JS, no frameworks) for the Dehradun launch: 15 brief pages plus privacy, terms, thank-you and 404. It is built from one shared Estate Partners design system, and a tiny Node build turns templates into plain HTML.

```
npm run build        # → dist/  (pretty URLs: /dehradun/buy-property/)
npm run dev          # build + preview at http://localhost:5173
npm run build:file   # → dist/ with index.html links (double-click preview, no server)
```

No `npm install` is needed. It runs on Node 18 or later with zero dependencies.

## Project layout

| Path | What it is |
|---|---|
| `site.config.js` | **Edit first.** Phone, WhatsApp, email, address, RERA, form endpoint, Calendly, GA |
| `src/data.js` | Collections: services, areas, locations, testimonials, guides (map to WP CPTs) |
| `src/components.js` | Reusable blocks: hero, service grid, steps, pricing, testimonial slider, FAQ, CTA band, enquiry form, call booking |
| `src/layout.js` | `<head>` SEO, JSON-LD schema, header + mega menu, footer, floating WhatsApp |
| `src/templates.js` | Service-page template (`/<town>/<service>/`), reused by every town |
| `src/pages/*.js` | One file per page (title, meta, H1, WhatsApp message, FAQs, content) |
| `assets/css/main.css` | Design system: white/charcoal/grey, Inter→Arial, mobile-first |
| `assets/js/main.js` | Header, mega menu, lazy hero video, scroll reveals, slider, forms, UTM, time zones |
| `assets/video/` | 4 hero videos (Mixkit free licence) + WebP posters |
| `assets/img/` | 12 WebP photos (800 + 1600 px). Credits in `docs/image-credits.json` |
| `docs/google-apps-script.gs` | Lead sheet + instant email alert |
| `dist-coming-soon/` | "Coming soon, WhatsApp us" pages for NCR & NRI domains |

## What's built (vs the brief)

- **Pages, URLs, title tags, H1s and CTAs** exactly as in the SEO table; all service pages sit under `/dehradun/`.
- **SEO:** canonical URLs, Open Graph, `RealEstateAgent`/`LocalBusiness`, `BreadcrumbList`, `FAQPage`, `Service` and `Article` schema, `sitemap.xml`, `robots.txt`.
- **WhatsApp on every page:** a header button plus a floating button (bottom right), each pre-filled per page, e.g. *"Hi, I'm interested in caretaker services in Dehradun."*
- **Forms:** 5 fields (name, WhatsApp with country code, country, property location, service). Country and dial code are guessed from the visitor's time zone. Each submission captures the source page, UTMs, gclid/fbclid, referrer and time zone, then redirects to `/thank-you/` (the conversion page), which offers a pre-filled WhatsApp follow-up.
- **Call booking:** detects the visitor's time zone, shows live local time and IST, and converts office hours into local time. It opens Calendly when `calendly` is set, otherwise WhatsApp.
- **Motion:** hero video with slow zoom, word-by-word headline reveal, scroll reveals, image parallax, clip-path reveals, an animated steps line, counters, a scroll-highlighted statement, a marquee of areas, the testimonial slider, an animated FAQ, a before/after slider and the guide's reading progress bar. All motion respects `prefers-reduced-motion`.
- **Performance:** hero videos load lazily and are skipped on Save-Data / 2G or with reduced motion (the poster is shown instead), and pause off-screen. Images are WebP with `srcset` and lazy loading. There is no jQuery and no framework.

## Lead capture setup

1. Follow the steps at the top of `docs/google-apps-script.gs` (Google Sheet → Apps Script → deploy as web app).
2. Paste the web-app URL into `site.config.js → formEndpoint`, then run `npm run build`.
3. Optional: set `calendly` (e.g. `https://calendly.com/mep/20min`) and `gaId`.

GA4 events fired: `generate_lead`, `whatsapp_click`, `phone_click`, `book_call_click`. Mark `generate_lead` as a conversion, or track page views of `/thank-you/`.

## Deploying on WordPress

Choose based on who will edit the site:

**A. Static on the WordPress host (fastest, live today).** Upload the contents of `dist/` to the web root (or a subdomain) via cPanel/FTP. The `.htaccess` forces HTTPS and non-www. Keep WordPress for guides by installing it in `/guides/` only. Text edits need a developer and a rebuild.

**B. Custom WordPress theme (recommended for the brief).** This meets the brief's "non-developers edit text, add guides, create new location pages" requirement. Convert `layout.js` into `header.php`/`footer.php`, each block in `components.js` into a template part, and `data.js` into CPTs (Guides, Locations, Services, Testimonials, FAQs) with ACF fields. The CSS/JS here are used as-is (`wp_enqueue_style/script`), and a new town becomes a new *Location* entry with the same 8 children.

**C. Page builder (Elementor / Gutenberg).** Enqueue `main.css` + `main.js` site-wide (small plugin or theme `functions.php`), then paste each page's `<main>` HTML into a Custom HTML block. Quick, but harder to keep consistent.

## Before launch: placeholders to replace

- [ ] `site.config.js`: real phone, WhatsApp number, email, full office address, geo, RERA (when issued)
- [ ] **Testimonials** in `src/data.js` are samples. Replace them with real, attributable client reviews (ASCI / consumer-law requirement).
- [ ] **Prices** on verification, rental, homestay and caretaker pages are indicative. Confirm or edit them.
- [ ] **Land law guide**: must be reviewed by a lawyer (a banner on the page says so). Remove the banner after review.
- [ ] **Privacy & terms** are templates. Get legal review.
- [ ] About page: founder story, team photos, office photos
- [ ] Photos: swap the Wikimedia placeholders for real Dehradun property and team photos (WebP, 800 + 1600 px, same file names). The current photos are CC BY-SA, so attribution is needed if you keep them (see `docs/image-credits.json`).
- [ ] Before/after gallery on the maintenance page uses placeholder images
- [ ] Optional: compress the hero videos further (HandBrake, 720p, ~2–3 MB each)
- [ ] Fill search volumes in the keyword workbook; add supporting keywords to H2s/FAQs
- [ ] Deploy `dist-coming-soon/ncrestatepartners.com/` and `…/nriestatepartners.com/` to those domains
- [ ] Google Search Console + Business Profile; submit `sitemap.xml`

## Adding a new town (phase 2)

1. Add the town to `locations` in `src/data.js` (status `live`, `url: '/mussoorie/'`).
2. Copy `src/pages/02-dehradun.js` and the eight service pages, changing the slug base, copy and areas. `servicePage()` in `src/templates.js` takes the town as the only structural change.
3. Run `npm run build`. The sitemap, footer and menus update automatically.
