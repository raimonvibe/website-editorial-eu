# 🎨 Raimonvibe Editorial Redesign — Master Plan

> Complete redesign inspired by six creative-studio reference images.  
> Includes design decisions, page map, dark mode, and implementation roadmap.

> 📎 **Designer handoff:** All image specs, prompts, sources, and organic-shape guidance live in **[IMAGE-BRIEF-FOR-DESIGNER.md](./IMAGE-BRIEF-FOR-DESIGNER.md)**.

---

## 📋 Table of Contents

1. [Design Decisions](#-part-1-design-decisions-answered-for-you)
2. [Color System](#-unified-color-system)
3. [Organic Shapes & Splash](#-organic-shapes--splash-design-summary)
4. [Page-by-Page Map](#-part-2-page-by-page-redesign-map)
5. [Image Work (Designer Doc)](#-part-3-image-work-designer-handoff)
6. [Implementation Roadmap](#-part-4-implementation-roadmap)
7. [Sufficiency Checklist](#-part-5-is-this-sufficient-to-finish)
8. [Easy-to-Miss Items](#-things-you-might-be-forgetting)
9. [Summary](#-summary)

---

## ✅ Part 1: Design Decisions (Answered for You)

Based on the six reference images (alto, PAPERBOUND, Shape, udio, form&play, Studio Alva):

| Question | Decision | Rationale |
|---|---|---|
| **Primary style** | **alto** structure + **Studio Alva** organic masks | Clean bento grid + editorial photography; fits a research/dev portfolio |
| **Typography** | Inter (UI + headlines) + Instrument Serif Italic for one emphasized word | Matches Shape's pattern → *"Research with purpose."* |
| **Brand lockup** | `raimonvibe` bold + small caps `TECH RESEARCH` | Mirrors alto / form&play studio labels |
| **Layout** | **Remove sidebar** → top nav + mobile drawer | All six references use horizontal nav |
| **Dark mode** | **Keep it** — dual token system | Light canvas `#F2F0E9`, dark canvas `#111110` |
| **Accent colors** | 8-color rotation (see below) | Consistent tiles across projects / scripture / nigeria |
| **Buttons** | Black pill + `↗` arrow; orange pill for primary CTA on homepage | Universal pattern across references |
| **Motion** | Subtle only: tile hover, badge rotation, scroll fade-in | No heavy parallax |
| **Copy** | Shorten heroes to 1–2 lines; keep body text on inner pages | References use confident minimal hero copy |
| **Scope** | Full site — all 18+ routes | One design system everywhere |
| **Certificates** | **Keep real certificate scans** — frame them, don't AI-fake | Legal / proof value |
| **3D models** | **Re-render existing models** on unified studio backgrounds | Same objects, new cyclorama colors |
| **App projects** | Phone mockup on brand-color backdrop | Not raw Play Store screenshots |

---

## 🎨 Unified Color System

```
Canvas light:  #F2F0E9    Canvas dark:   #111110
Ink:           #0A0A0A    Ink dark:      #F5F4F0
Muted:         #6B6B6B    Muted dark:    #9A9A9A

Accent A — Cobalt:   #1E4BFF
Accent B — Orange:   #F24E1E
Accent C — Lavender:  #D6D1F5
Accent D — Lime:     #D4ED5D
Accent E — Peach:    #F5C4B8
Accent F — Teal:     #2EC4B6
Accent G — Mustard:  #E8C547
Accent H — Pink:     #F4A6C1
```

### 🖼️ Image Rule

Every photo sits on **one accent color** (full bleed background or cyclorama).  
Rotate **A → H** across card grids so no two adjacent tiles share a color.

### 📜 Scripture Sub-palette (warmer, calmer)

- Parchment `#E8E0D4`
- Sage `#8FA68E`
- Warm blue `#6B8FAD`
- Soft mustard `#E8C547`

No neon accents on scripture pages.

---

## 🫧 Organic Shapes & Splash Design (Summary)

**Yes — the redesign uses organic / half-rounded image containers** on key moments (homepage splash, about portrait, one services hero). Grids (projects, nigeria, certificates) stay clean rectangles.

| Shape | Where | Built by |
|---|---|---|
| Organic blob mask | Homepage hero, About portrait | CSS `clip-path` / SVG mask |
| Asymmetric radius | Splash accent tiles | CSS `border-radius` |
| Overlapping inset card | Homepage flower tile | Layout + z-index |
| Circle stamp badge | Homepage “RESEARCH • CODE • DESIGN” | SVG (code, not image) |
| Rectangular cards | Projects, Scripture, Nigeria grids | Standard 4:3 cards |

**Designer delivers rectangular images** with subject in center 80% safe zone — masks applied in code.

Full splash layout, small decorative assets, and per-page shape map → **[IMAGE-BRIEF-FOR-DESIGNER.md](./IMAGE-BRIEF-FOR-DESIGNER.md)**

---

## 📐 Image Dimensions (Standardize All Exports)

| Use | Ratio | Export Size | Format |
|---|---|---|---|
| Hero / editorial | 3:2 | 1800×1200 | WebP |
| Bento tile | 4:5 | 1000×1250 | WebP |
| Project card | 4:3 | 1200×900 | WebP |
| Section nav card | 4:3 | 1200×900 | WebP |
| Phone mockup | 9:16 in 4:3 frame | 1200×900 | WebP |
| OG / social | ~1:1.4 | 1200×1680 | WebP |
| Favicon source | 1:1 | 512×512 | PNG |
| 3D product | 1:1 | 1000×1000 | WebP |

---

## 🗺️ Part 2: Page-by-Page Redesign Map

### 🌐 Global Shell (All Pages)

| Current | New |
|---|---|
| `#wrapper` + sidebar | `SiteShell`: fixed top nav, full-width main, footer |
| `Header.tsx` (logo + social icons) | `SiteNav`: logo left, links center, "Let's talk ↗" + dark toggle right |
| Social icons in header | Footer icon row |
| jQuery sidebar toggle | CSS / React mobile menu |
| Editorial `.posts` grid | `BentoGrid` component with accent-colored cards |
| `.button` coral outline | `PillButton` black / orange |
| Search in sidebar | Drop or add minimal header search later (Phase 2) |

---

### 🏠 `/` Homepage

**Layout:** Left 40% giant headline + CTAs + trust bar. Right 60% bento mosaic (alto-style) with overlapping tiles and one lime circle badge (SVG, not an image).

| Section | New Treatment |
|---|---|
| Hero | *"Research with purpose."* + 2-line subcopy + "View my work ↗" + "About ↗" |
| Trust bar | Text logos: Python · React · Next.js · TensorFlow · Flutter |
| Features ("Technological Impact") | 4 bento tiles, no Font Awesome diamonds |
| "More" grid | 6 section cards with new editorial images |

---

### 👤 `/about`

- Split layout: large type left, organic-mask portrait right (Studio Alva)
- Shortened intro
- CTA pill to contact

---

### 🛠️ `/services`

Three stacked service blocks (Medium / YouTube / Websites), each with:
- One hero image
- Colored left border accent
- No more three full-width stacked photos without structure

---

### 💼 `/projects`

- Intro line + `BentoGrid` of 14 projects
- Each card: image, title, 2-line description, `VIEW PROJECT ↗`

---

### 📖 `/scripture-readers`

- Warmer, calmer palette (parchment, sage, warm blue)
- Respectful editorial book photography — not neon accents
- Shared visual language, softer than main projects

---

### 🇳🇬 `/nigeria`

- Same bento grid as projects
- Subtitle: *"Built for Nigerian developers"*
- Slightly more vibrant accents (Teal, Orange, Cobalt)
- Optional stat row: *"10 guides · 1 ecosystem · Offline-first"*

---

### 🧊 `/models`

- Masonry bento of 14 products
- Unified cyclorama backgrounds (rotate Peach / Lavender / Cobalt / Cream)
- Same object renders, re-shot or re-composited

---

### 🎓 `/certificates`

- Grid of 8 cards
- **Keep real certificate images** — frame only, do not AI-generate
- Cream / lavender card frame, course name overlay, `VIEW COURSE ↗`

---

### 🤝 `/clients`

- 2 feature cards (Collabs + TechBullion)
- Editorial magazine-style images

---

### 🚀 `/opportunities`

- Hero image + company logo grid (monochrome SVGs or text-only)
- Less wall-of-text; accordion or categorized list

---

### ✉️ `/contact`

- Split: form left (minimal fields, pill submit), editorial image right

---

### 📱 `/apps/animal-guesses` & `/apps/music-guesses`

- App landing layout: phone mockup hero, feature bullets, Play Store pill, privacy link

---

### 📄 `/resume`

- PDF embed or download card — no photo needed
- Styled container matching design system

---

### ⚖️ `/legalnotice`, `/privacynotice`, app privacy pages

- Narrow prose column (`max-w-2xl`), no images needed
- Same nav / footer

---

## 🖼️ Part 3: Image Work (Designer Handoff)

All image creation specs have moved to a dedicated designer document:

### → [IMAGE-BRIEF-FOR-DESIGNER.md](./IMAGE-BRIEF-FOR-DESIGNER.md)

That file includes:

- 🫧 Organic shapes & splash design (what to mask vs keep rectangular)
- ✨ Small decorative assets (flower inset, sculptural object, etc.)
- 📄 Per-page shape recommendations
- 🔍 Researched sources: **Nano Banana** (primary), Pexels, Unsplash, Meta AI, Leonardo, Ideogram, Canva
- 📦 All **63 new images** with exact filenames, sizes, hex colors, AI prompts, Pexels keywords
- ✅ Delivery checklist & folder structure

### Quick counts

| Category | New images |
|---|---|
| Brand + splash + editorial + nav | 19 |
| Projects | 14 |
| Scripture (unique) | 6 |
| Nigeria | 10 |
| 3D re-renders | 14 |
| Certificates | 0 (keep 8 existing) |
| **Total** | **~63** (+ buffer → 70–78) |

---

## 🚀 Part 4: Implementation Roadmap

```
Phase 1: Tokens + Nav
    ↓
Phase 2: Image batch 1 (you)
    ↓
Phase 3: Homepage + About
    ↓
Phase 4: Projects + Scripture + Nigeria
    ↓
Phase 5: Remaining pages
    ↓
Phase 6: 3D re-renders + cleanup
```

| Phase | Work | Depends On | ⏱️ Est. |
|---|---|---|---|
| **1** | Tailwind tokens, dark mode, fonts, `SiteNav`, `PillButton`, `BentoGrid`, `SiteShell` | Nothing | 3–4 days |
| **2** | Generate images A + B + C (#1–21) | Phase 1 palette | 2–5 days (you) |
| **3** | Homepage, About, Contact, layout swap | Images #5–14, #18 | 3 days |
| **4** | Projects, Scripture, Nigeria + data path updates | Images #22–51 | 4 days |
| **5** | Services, Clients, Opportunities, Certificates, Apps, Legal, Resume | Images #15–21, certs | 3 days |
| **6** | 3D re-renders (#52–64), remove Editorial CSS + jQuery, OG/favicon | All images | 2 days |
| **7** | QA: dark mode, mobile, alt text, WebP, Lighthouse | Everything | 1 day |

### 📦 Suggested Image Batch Order

1. ✏️ Editorial heroes (#5–7, #14–21) — unblocks homepage + about
2. 🧭 Nav cards (#8–13) — unblocks homepage grid
3. 💼 Projects (#22–35) — highest traffic page
4. 📖 Scripture (#36–42)
5. 🇳🇬 Nigeria (#43–51)
6. 🧊 3D re-renders (#52–64)
7. 🏷️ Brand / meta (#1–2)

---

## ✅ Part 5: Is This Sufficient to Finish?

### 👍 Yes — if you deliver:

- [ ] ~64 new / generated images (list above, excluding 8 certificates)
- [ ] 14 re-rendered 3D product shots (same models, new backgrounds)
- [ ] Favicon + OG image (#1–2)
- [ ] Approval of design decisions in Part 1

---

## ⚠️ Things You Might Be Forgetting

| Item | Status in Plan | Action Needed |
|---|---|---|
| 🎯 Favicon + `manifest.json` theme colors | Mentioned (#2) | Update `theme_color` from `#f56a6a` → `#0A0A0A` or orange |
| 🍎 Apple touch icon (`apple-icon.png`) | Not in repo | Regenerate from favicon |
| 🔗 `cover.webp` OG image | #1 replaces it | Update `layout.tsx` metadata |
| ✒️ Logo / wordmark | Text-based `raimonvibe` | Optional SVG logo; not blocking |
| 💻 SVG decorations | Badge + arrows in code | Built in code — no image needed |
| 🏢 Company logos on Opportunities | Not images | Monochrome SVGs or text links |
| 🔍 Search | Sidebar search goes away | Decide: drop it or add later |
| 🚫 404 page | Not in codebase | Create styled 404 |
| 🙏 PrayerChatWidget | Keep as-is | Test contrast on cream / dark canvas |
| 📜 Certificate authenticity | Keep real scans | ✅ Correct approach |
| ♿ Alt text | All images need updating | Updated when paths change |
| ⚡ Image optimization | WebP + `next/image` sizes | Handled in implementation |
| 📄 Resume PDF | Not visual | Restyle download card only |
| 📱 App screenshots | Animal / Music guesses | Fresh screenshot or AI mockup |
| ⚖️ Scripture imagery | Respectful editorial | Avoid cartoon religious clip art ✅ |
| 🔤 Font licensing | Inter + Instrument Serif | Free via Google Fonts ✅ |
| 📷 Pexels license | Stock photos | Free commercial use ✅ |
| 🤳 About portrait | #14 | Real photo of you OR generic stock — not AI fake of you |
| 🇳🇬 Nigeria imagery | #43, #51 | Authentic modern African tech; avoid clichés |
| 🌙 Dark mode image variants | Optional | Photos work on both; optional CSS desaturation |

---

## 📊 Summary

| Category | Count |
|---|---|
| 🏷️ Brand / meta images | 2–4 |
| 🏠 Homepage + editorial | 17 |
| 💼 Project thumbnails | 14 |
| 📖 Scripture images | 7 (1 shared) |
| 🇳🇬 Nigeria images | 10 |
| 🧊 3D re-renders | 14 |
| 🎓 Certificates (keep) | 8 |
| **📦 Total work items** | **~72 images + full code overhaul** |

---

## 🎯 Next Steps

1. **Designer:** Follow [IMAGE-BRIEF-FOR-DESIGNER.md](./IMAGE-BRIEF-FOR-DESIGNER.md) — start with splash heroes (IMG-005–007)
2. **Dev:** Implement Phase 1 (design tokens + nav shell + dark mode)
3. **You:** Approve or tweak design decisions in Part 1
4. **Together:** Roll out page by page per roadmap

---

*Last updated: July 2026 · Raimonvibe Editorial Redesign*
