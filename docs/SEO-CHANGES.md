# SEO Changes – Ayodhya Tours

## What changed and why

### 1. Per-page `<title>` + meta description (react-helmet-async)
**Package added:** `react-helmet-async`  
**Files:** `src/main.tsx`, `src/app/components/SEOHead.tsx`, all page files

Each page now renders its own `<title>` tag and `meta description` via the `SEOHead` component. Without this, every page shared the generic "Ayodhya Tours Website" title, which hurts click-through rate in search results.

| Page | Title | Description length |
|------|-------|-------------------|
| `/` | Spiritual Pilgrimage Packages to Ram Mandir & Beyond \| Ayodhya Tours | 155 chars |
| `/about` | About Us – Trusted Ayodhya Pilgrimage Specialists Since 2020 \| Ayodhya Tours | 149 chars |
| `/contact` | Contact Us – Plan Your Ayodhya Spiritual Journey \| Ayodhya Tours | 143 chars |

### 2. Canonical tags + Open Graph + Twitter Cards
**File:** `src/app/components/SEOHead.tsx`

Every page now emits:
- `<link rel="canonical">` — prevents duplicate-content penalties if Vercel serves the site on multiple URLs.
- Full Open Graph tags (`og:title`, `og:description`, `og:image`, `og:url`, `og:type`, `og:site_name`, `og:locale`).
- Twitter Card tags (`twitter:card summary_large_image`).

**Action required:** The canonical/OG base URL is set to `https://www.ayodhyatour.in` in `src/app/components/SEOHead.tsx` (the `SITE_URL` constant). Update this to your actual Vercel URL (or custom domain) before going live.

### 3. robots.txt + sitemap.xml
**Files:** `public/robots.txt`, `public/sitemap.xml`

- `robots.txt` allows all crawlers and points to the sitemap.
- `sitemap.xml` lists all three routes with `lastmod`, `changefreq`, and `priority`.

**Action required:** Update all `https://www.ayodhyatour.in` references in both files to your actual domain.

### 4. JSON-LD Structured Data
**Files:** `src/app/pages/HomePage.tsx`, `src/app/pages/AboutPage.tsx`, `src/app/pages/ContactPage.tsx`

| Schema type | Page | Benefit |
|-------------|------|---------|
| `TouristInformationCenter` + `AggregateRating` | Home | Star rating in Google SERP |
| `Product` + `AggregateRating` + `Review` | Home | Rich product snippet for Ram Mandir Darshan package |
| `TravelAgency` | About | Business knowledge panel signals |
| `FAQPage` | Contact | FAQ rich results (expanded Q&A accordion in SERP) |

### 5. Semantic HTML improvements

**Hero image alt text** (`HeroSection.tsx`): Changed from generic "Ayodhya Ram Mandir" to descriptive "Ayodhya Ram Mandir temple illuminated at dusk – the sacred birthplace of Lord Ram". Added `fetchPriority="high"` to signal this as the LCP candidate.

**Package images** (`TourPackages.tsx`): Alt text is now `"${pkg.title} – Ayodhya Tours spiritual package"` rather than just the title. Added `loading="lazy"`.

**About section image** (`AboutSection.tsx`): More descriptive alt text + `loading="lazy"`.

**AboutPage image** (`AboutPage.tsx`): More descriptive alt text + `loading="lazy"`.

Note: The hero image intentionally does NOT have `loading="lazy"` — it is the Largest Contentful Paint element and must load eagerly.

### 6. Font loading optimisation
**Files:** `index.html`, `src/styles/fonts.css`

Moved Google Fonts from a CSS `@import` (render-blocking) to a `<link rel="stylesheet">` tag in `index.html`, preceded by `<link rel="preconnect">` for both `fonts.googleapis.com` and `fonts.gstatic.com`. This eliminates the extra DNS lookup waterfall and typically improves FCP by 100–300 ms on mobile.

### 7. Unsplash CDN preconnect
**File:** `index.html`

Added `<link rel="preconnect" href="https://images.unsplash.com">` to warm the connection used by all hero/package images.

### 8. Fallback meta in index.html
**File:** `index.html`

Added a fallback `<title>` and `<meta name="description">` directly in `index.html`. These are used by social-share scrapers and crawlers that do not execute JavaScript, while react-helmet-async overrides them for JS-enabled crawlers (Googlebot renders JS).

---

## Manual checklist for Ayush

- [ ] **Update the canonical domain** — change `SITE_URL` in `src/app/components/SEOHead.tsx` from `https://www.ayodhyatour.in` to your real Vercel URL (or custom domain once set up).
- [ ] **Update `public/robots.txt`** — replace `https://www.ayodhyatour.in/sitemap.xml` with your real URL.
- [ ] **Update `public/sitemap.xml`** — replace all `https://www.ayodhyatour.in` occurrences with your real domain.
- [ ] **Add site to Google Search Console** — go to https://search.google.com/search-console and add your property (Vercel URL or custom domain). Verify ownership using the HTML file method (download the file, put it in `public/`, redeploy) or the DNS method.
- [ ] **Submit sitemap** — in Search Console → Sitemaps, enter `sitemap.xml` and click Submit.
- [ ] **Request indexing** — in Search Console → URL Inspection, paste each of the three URLs (`/`, `/about`, `/contact`) and click "Request indexing".
- [ ] **Add a favicon** — create a `public/favicon.ico` and a `public/apple-touch-icon.png` (180×180). Add `<link rel="icon" href="/favicon.ico">` to `index.html`. This also improves brand recognition in SERPs.
- [ ] **Add a real OG image** — the current OG image is the Unsplash hero photo. For better social sharing, create a branded 1200×630 image (e.g. logo + temple photo + "Ayodhya Tours" text), upload it, and update `DEFAULT_IMAGE` in `SEOHead.tsx`.
- [ ] **Monitor Core Web Vitals** — after deploying, run PageSpeed Insights (https://pagespeed.web.dev) on your production URL. The main remaining opportunity is converting Unsplash JPGs to WebP — possible by changing `&fm=jpg` to `&fm=webp` in all Unsplash URLs.
- [ ] **Instagram profile link in JSON-LD** — confirm `https://www.instagram.com/ayodhya.tourguide` is the correct handle in `HomePage.tsx` (`organizationJsonLd.sameAs`).

---

## What was NOT changed (out of scope)

- No content rewrites — all copy is as written by the site owner.
- No analytics integration — no GA4 or GTM tags added.
- No SSR/prerendering — Googlebot renders JS fine; if Bing/other crawlers are a priority, consider `vite-plugin-prerender` in a future sprint.
- No image CDN — Unsplash URLs are kept as-is. Use `&fm=webp` param to get WebP from Unsplash at zero cost.
