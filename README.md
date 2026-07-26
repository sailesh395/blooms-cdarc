# Blooms Child Development & Rehabilitation Centre — Website

A minimal, modern, fast static website for Blooms CDARC, Tirupati. No build step, no
framework, no dependencies — just HTML, one CSS file, and one small JS file. Cheap to
host, easy to edit, and built for SEO + AEO from the ground up.

---

## 1. Run it locally

```bash
cd blooms-cdarc
python3 -m http.server 8787
# open http://localhost:8787
```

All internal links use **relative paths**, so the site also works if you just double-click
a page (file://) or host it in a subfolder — not only at a domain root.

## 2. Deploy (pick one — all free)

- **Netlify / Vercel / Cloudflare Pages:** drag-and-drop this folder, or connect a Git repo.
  A `404.html` is already included and works automatically on these hosts.
- **GitHub Pages:** push the folder to a repo, enable Pages.
- Point `bloomscdarc.com` at the host and **enable HTTPS** (one click on all of the above).

> ⚠️ The current live site's **SSL certificate is expired** — every one of these hosts gives
> you a free auto-renewing certificate, which fixes that permanently.

---

## 3. Pages

| Page | File | Purpose |
|---|---|---|
| Home | `index.html` | Hero, services, why-us, testimonials, FAQ preview, CTAs |
| About | `about.html` | Story, mission/vision, approach, team |
| Services | `services.html` | Full service list + deep-dive therapy sections |
| Special School & Hostel | `special-school.html` | Special education, day plan, hostel |
| Gallery | `gallery.html` | Photo grid (placeholders — see §6) |
| FAQ | `faq.html` | Answers + **FAQPage schema** (AEO) |
| Blog | `blog.html` | Content hub + 1 full sample article |
| Article | `blog/early-signs-your-child-may-need-support.html` | Sample post with Article schema |
| Contact | `contact.html` | Info, enquiry form → WhatsApp, Google map |
| Donate | `donate.html` | Support the Trust |
| Privacy | `privacy.html` | Privacy policy (template — have it reviewed) |
| 404 | `404.html` | Friendly not-found page |

Shared assets: `assets/css/style.css`, `assets/js/main.js`, `assets/img/`.

---

## 4. What was wrong with the old site (and fixed here)

1. **Expired SSL certificate** → fixed by hosting with auto-HTTPS (§2).
2. **"click to edit text" placeholders** left visible → gone; real, purposeful copy.
3. **Conflicting address** (header "V V Mahal Road" vs contact "Sarojini Devi Road") →
   standardised to the full Sarojini Devi Road / RamNagar address everywhere. **Please
   confirm which is correct** and update in one place per page if needed.
4. **Conflicting email** (`info@` vs `support@`) and scattered/stray phone numbers →
   standardised to `info@bloomscdarc.com` + the two 9912… numbers.
5. **Outdated copyright** (2021–2022) → auto-updating year via JS.
6. **Generic testimonials** ("my friend", "my sister") → rewritten in parent voice.
   Replace with **real, consented** parent reviews when you have them.
7. **Thin content / no trust signals** → full services, conditions, approach, FAQ, blog.
8. **Locked JustDial template** ("Powered By") → fully owned, brandable, editable site.
9. **No SEO/schema/social metadata / no WhatsApp** → all added (§5, §7).

---

## 5. SEO & AEO (already built in)

- Unique `<title>` + meta description + keywords on every page.
- **Open Graph + Twitter Card** tags → rich previews when shared on WhatsApp/FB/Insta/X.
- Canonical URLs on every page.
- **JSON-LD structured data:** `MedicalClinic`/`LocalBusiness` (home), `FAQPage` (faq),
  `Article` (blog post), `ItemList` (services), `ContactPage`, `AboutPage`, `Blog`.
- `sitemap.xml` + `robots.txt` (robots explicitly **allows AI crawlers** — GPTBot,
  ClaudeBot, PerplexityBot, Google-Extended — so you can be cited in AI answers = AEO).
- `site.webmanifest` + SVG favicon + theme-color.
- Semantic headings, alt text, mobile-first responsive, fast (no heavy JS).

**After you deploy:**
1. Verify the domain in **Google Search Console** and submit `sitemap.xml`.
2. Create/claim your **Google Business Profile** (huge for "child therapy near me").
3. Test structured data: https://search.google.com/test/rich-results
4. Update every `https://www.bloomscdarc.com/...` URL if your final domain differs.

---

## 6. Placeholders to replace before launch

- **`assets/img/og-cover.jpg`** — ✅ a branded 1200×630 social-share image is included
  (used by all OG/Twitter tags). Replace it later if you want real photography instead.
- **Gallery photos** (`gallery.html`) — swap the coloured placeholder tiles for real photos
  of your centre/therapy/activities (with parents' consent). Replace each
  `<div class="ph" ...>Label</div>` with `<img src="/assets/img/your-photo.jpg" alt="...">`.
- **Team names/photos/qualifications** (`about.html`) — add them to build trust.
- **Social links** — replace the `https://www.facebook.com/` etc. placeholders (footer of
  every page + `sameAs` in the home JSON-LD) with your real Facebook/Instagram/YouTube URLs.
- **Donation details** (`donate.html`) — add Trust name, UPI/bank, and 80G info if any.
- **Confirm** the address, phone(s), email and opening hours are 100% correct.
- **Logo** — `assets/img/logo.png` is your real logo pulled from the current site (193×95,
  slightly low-res). If you have a higher-resolution PNG/SVG, drop it in with the same name.

## 7. WhatsApp integration

A floating green WhatsApp button is fixed to the bottom-right on **every page** and follows
as you scroll. It links to `wa.me/919790811793` with a friendly pre-filled message. The
enquiry form on Contact also opens WhatsApp with the parent's details pre-filled.

To change the number, edit **two places**: the `wa.me/919790811793` links in the HTML and
`WA_NUMBER` in `assets/js/main.js`.

## 8. Marketing / campaign next steps (for when you go live)

- **Content engine:** publish ~1 blog post/month from the ready-made topics in `blog.html`
  (autism signs, OT explained, late talkers, sensory needs, parent wellbeing). Each targets
  real searches from Tirupati/AP parents and feeds both Google and AI assistants.
- **Local SEO:** Google Business Profile + JustDial/Practo/Sulekha listings with the *same*
  name, address, phone (NAP consistency matters).
- **Social:** the OG images make every shared link look professional. Post gallery photos,
  parent stories (consented), and blog snippets to Instagram/Facebook.
- **Lead capture:** every CTA routes to WhatsApp — your fastest channel for Indian parents.
  Consider adding a real form backend (Formspree/Netlify Forms) if you also want email leads.

---

Built as static HTML so anyone can edit a page in a text editor. Header, footer and the
WhatsApp button are repeated in each file — if you change one (e.g. a phone number), update
it across the files (find-and-replace works well).
