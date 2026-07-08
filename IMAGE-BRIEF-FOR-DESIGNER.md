# 🖼️ Raimonvibe — Image Brief for Designer

> **Audience:** Designer / image creator  
> **Project:** Full visual refresh of [raimonvibe.eu](https://www.raimonvibe.eu)  
> **Companion doc:** [REDESIGN-PLAN.md](./REDESIGN-PLAN.md) (code + page structure)  
> **Primary AI tool (client choice):** [Nano Banana](https://gemini.google.com) (Google Gemini image generation)

---

## 📋 Table of Contents

1. [Creative Direction](#-creative-direction)
2. [Organic Shapes & Splash Design](#-organic-shapes--splash-design)
3. [Where Shapes Work Best Per Page](#-where-shapes-work-best-per-page)
4. [Small Decorative Assets](#-small-decorative-assets)
5. [Color & Export Rules](#-color--export-rules)
6. [Recommended Sources](#-recommended-sources)
7. [Workflow for This Project](#-workflow-for-this-project)
8. [Master Image List](#-master-image-list)
9. [Delivery Checklist](#-delivery-checklist)

---

## 🎯 Creative Direction

### Visual references (six studio homepages)

The site should feel like a **boutique creative tech studio** — not a corporate SaaS page, not a generic blog.

| Reference | What to borrow |
|---|---|
| **alto** | Asymmetric bento grid, overlapping tiles, trust bar, pill buttons |
| **Studio Alva / udio** | Organic image masks (wavy / blob edges), portrait heroes |
| **Shape** | One serif-italic emphasized word in headlines |
| **form&play** | Bold stacked type, polygon clip on one hero image |
| **PAPERBOUND** | Paper-cut collage accents, stat row, scroll badge |

### One sentence brief

> *Editorial studio photography on bold color fields, with organic-masked heroes and clean rectangular cards for grids.*

---

## 🫧 Organic Shapes & Splash Design

### Yes — we are using organic / half-rounded image containers

This is a **core design feature**, not optional decoration.

| Shape type | Description | How it is built in code |
|---|---|---|
| **Organic blob mask** | Wavy, uneven edges — image looks cut from a soft amoeba shape | CSS `clip-path` or SVG mask |
| **Asymmetric radius** | One corner very round, another nearly square — “half rounded” feel | `border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%` |
| **Polygon clip** | Angled cut on one edge (form&play style) | `clip-path: polygon(...)` |
| **Overlapping card** | Small cream card sitting on top of a larger image | Layout + `z-index`, image stays **rectangular inside** |

**Important for the designer:**  
You deliver **full rectangular images** with the subject centered and safe margins. The developer applies masks in CSS. Do **not** pre-cut wavy edges into the PNG unless asked — rectangular exports are easier to re-mask responsively.

### Safe zone rule for masked images

```
┌─────────────────────────────┐
│ 10% margin (may be clipped) │
│  ┌───────────────────────┐  │
│  │                       │  │
│  │   SUBJECT / FOCUS     │  │
│  │   (keep here)         │  │
│  │                       │  │
│  └───────────────────────┘  │
│ 10% margin (may be clipped) │
└─────────────────────────────┘
```

Keep faces, books, products, and text **inside the center 80%** of the frame.

---

### 🌊 Splash design (homepage hero) — what we need

The splash is the **first viewport** of the homepage. It combines typography + a bento mosaic of images.

```
┌──────────────────────────────────────────────────────────────┐
│  NAV: raimonvibe · links · Let's talk ↗ · dark mode         │
├──────────────────────┬───────────────────────────────────────┤
│                      │  ┌─────────────┐                      │
│  Research with       │  │ ORGANIC     │  tall tile          │
│  purpose.            │  │ MASK hero   │  (workspace photo)  │
│                      │  │ image       │                      │
│  Subcopy 2 lines     │  └─────────────┘                      │
│                      │       ┌──────────┐  ◉ lime badge      │
│  [View work ↗]       │       │ small    │  (SVG, not image) │
│  About ↗             │       │ flower   │                    │
│                      │       │ inset    │  ┌────────┐        │
│  TRUSTED BY: logos   │       └──────────┘  │ cobalt │        │
│                      │                     │ object │        │
│                      │                     └────────┘        │
└──────────────────────┴───────────────────────────────────────┘
```

#### Splash image assets (priority 🔥)

| Asset ID | Filename | Size | Shape treatment | Priority |
|---|---|---|---|---|
| SPLASH-01 | `editorial/hero-workspace.webp` | 1800×1200 (3:2) | **Organic blob mask** — main hero | 🔥 Critical |
| SPLASH-02 | `editorial/hero-accent-flower.webp` | 800×1000 (4:5) | Small inset card, soft radius | 🔥 Critical |
| SPLASH-03 | `editorial/hero-accent-object.webp` | 1000×1250 (4:5) | Tall tile, slight asymmetric radius | 🔥 Critical |
| SPLASH-04 | `brand/og-cover.webp` | 1200×1680 | Rectangular (social / OG only) | High |

#### Splash non-image elements (developer builds — designer does NOT need to create)

| Element | Type | Notes |
|---|---|---|
| Lime circle badge “RESEARCH • CODE • DESIGN” | SVG + CSS animation | Like alto green stamp |
| Scroll explore ring (optional) | SVG | PAPERBOUND-style, bottom-right |
| Pill buttons | CSS | Black / orange |
| Trust bar text logos | SVG / text | Python, React, Next.js, etc. |

---

## 📄 Where Shapes Work Best Per Page

| Page | Organic masks? | Card style | Notes |
|---|---|---|---|
| **Homepage `/`** | ✅ **Yes — primary** | Bento + overlap | Full splash treatment |
| **About `/about`** | ✅ **Yes** | Split hero | Portrait with blob mask |
| **Services `/services`** | ⚡ One hero only | Rectangular section images | Organic on first block only |
| **Projects `/projects`** | ❌ Mostly rectangular | 4:3 cards with colored bg | Consistency > drama |
| **Scripture `/scripture-readers`** | ⚡ Soft radius only | Calm rounded cards | Respectful, not playful blobs |
| **Nigeria `/nigeria`** | ❌ Rectangular | 4:3 cards | Same as projects |
| **Models `/models`** | ⚡ One featured item | 1 polygon clip on hero model | Rest rectangular grid |
| **Certificates** | ❌ Rectangular frames | Formal | Real scans — no masks |
| **Clients / Opportunities** | ⚡ Soft radius | Editorial magazine cards | |
| **Contact** | ⚡ Soft radius | Side image only | |
| **Legal / Privacy** | ❌ No images | Text only | |
| **App landing pages** | ❌ Rectangular | Phone mockup frame | |

**Rule of thumb:** Organic blobs on **≤3 moments per page** — hero, one portrait, one accent. Grids stay clean rectangles.

---

## ✨ Small Decorative Assets

These are **small supporting images** — not full heroes. They create the “studio collage” feel.

| ID | Filename | Approx size | Used on | Description |
|---|---|---|---|---|
| DECO-01 | `editorial/hero-accent-flower.webp` | 800×1000 | Homepage splash | Single flower in vase, peach/cream mood |
| DECO-02 | `editorial/hero-accent-object.webp` | 1000×1250 | Homepage splash | Sculptural object (glass, tube, design object) on cobalt |
| DECO-03 | `editorial/contact-ideas.webp` | 1200×900 | Contact page | Lightbulb / idea metaphor, lavender |
| DECO-04 | `nav/*.webp` (6 files) | 1200×900 each | Homepage “More” grid | Section thumbnails — can be simpler than heroes |
| DECO-05 | `brand/og-cover.webp` | 1200×1680 | Social sharing | Flat-lay studio desk, no text |

### Optional paper-cut collage assets (Phase 2)

If you want PAPERBOUND-style playfulness on the homepage only:

| ID | Filename | Size | Description |
|---|---|---|---|
| COLLAGE-01 | `decorative/shape-yellow.svg` | SVG | Tilted yellow rectangle — **designer can draw in Figma** |
| COLLAGE-02 | `decorative/shape-blue-arc.svg` | SVG | Blue quarter-circle |
| COLLAGE-03 | `decorative/shape-pink-blob.svg` | SVG | Wavy pink blob |

These are **vector**, not photos — optional stretch goal.

---

## 🎨 Color & Export Rules

### Background colors (mandatory per asset)

Every image must sit on a **solid accent background** OR be shot on a physical cyclorama of that color.

| Code | Name | Hex | Use for |
|---|---|---|---|
| A | Cobalt | `#1E4BFF` | Tech, code, hero accents |
| B | Orange | `#F24E1E` | Energy, YouTube, CTAs |
| C | Lavender | `#D6D1F5` | Soft editorial, contact |
| D | Lime | `#D4ED5D` | Badges, kids apps |
| E | Peach | `#F5C4B8` | Warm editorial, flowers |
| F | Teal | `#2EC4B6` | Nigeria, health, growth |
| G | Mustard | `#E8C547` | Education, Tanach, certificates frame |
| H | Pink | `#F4A6C1` | Music app, 3D models |
| — | Cream canvas | `#F2F0E9` | Site background (not image bg) |
| — | Parchment | `#E8E0D4` | Scripture sub-palette |
| — | Sage | `#8FA68E` | Scripture, wellness |

### Export spec (all raster images)

| Setting | Value |
|---|---|
| Format | **WebP** (PNG only if transparency needed) |
| Quality | 85–90% |
| Color space | sRGB |
| Sharpening | Light — web optimized |
| Filename | **lowercase, hyphenated**, match table exactly |
| Folder | See [Delivery Checklist](#-delivery-checklist) |

### Post-processing in Canva / Figma / Photoshop

If you find a Pexels photo with the wrong background:

1. Remove / replace background
2. Place subject on correct hex color
3. Add subtle floor shadow (45° left, 20% opacity)
4. Export at target size

---

## 🔍 Recommended Sources

### ⭐ Primary — Nano Banana (client choice)

**What it is:** Google's branded name for **Gemini native image generation** (Nano Banana 2 = Gemini 3.1 Flash Image).

| Access point | URL | Free tier | Best for |
|---|---|---|---|
| **Gemini app** (easiest) | [gemini.google.com](https://gemini.google.com) | ~17–25 images/day | Quick generation, conversational edits |
| **Google AI Studio** (more control) | [aistudio.google.com](https://aistudio.google.com) | ~500 API requests/day on Flash | Aspect ratio, batch work, higher volume |
| **API docs** | [ai.google.dev/gemini-api/docs/image-generation](https://ai.google.dev/gemini-api/docs/image-generation) | Metered | Automation |

**Why it fits this project:** Free, fast, strong at product/editorial scenes, conversational refinement (“make background more cobalt”, “remove text”).

**Nano Banana prompt tip:** Always end with:
```
Editorial studio photography, soft natural light, no text, no watermark, no logo, sRGB, high detail
```

---

### 📷 Stock photography

| Source | URL | License | Best for |
|---|---|---|---|
| **Pexels** ⭐ | [pexels.com](https://www.pexels.com) | Free commercial use, no attribution required | Desks, portraits, flowers, books, offices |
| **Unsplash** | [unsplash.com](https://unsplash.com) | Free (Unsplash License) | Higher-end editorial photography |
| **Pixabay** | [pixabay.com](https://www.pixabay.com) | Free | Backup stock |
| **StockSnap** | [stocksnap.io](https://stocksnap.io) | CC0 | Niche editorial |

**Pexels is the default** for anything that exists in real life (desks, flowers, hands, books).  
**Nano Banana is the default** for abstract UI mockups, concept scenes, and recolored composites.

---

### 🤖 AI generators (comparable ease to Nano Banana)

| Tool | URL | Free tier | Ease | Best for |
|---|---|---|---|---|
| **Nano Banana / Gemini** ⭐ | [gemini.google.com](https://gemini.google.com) | ~20/day | ⭐⭐⭐⭐⭐ Easiest | Primary — editorial + mockups |
| **Meta AI** | [meta.ai](https://www.meta.ai) | Very generous / near unlimited | ⭐⭐⭐⭐⭐ | Volume iterations, variations |
| **Bing Image Creator** | [bing.com/images/create](https://www.bing.com/images/create) | Reward credits | ⭐⭐⭐⭐ | DALL-E 3 quality, good realism |
| **Leonardo.ai** | [leonardo.ai](https://leonardo.ai) | ~150 tokens/day | ⭐⭐⭐⭐ | Product shots, commercial polish |
| **Ideogram** | [ideogram.ai](https://ideogram.ai) | ~10/week | ⭐⭐⭐⭐ | Images that need readable text inside |
| **Adobe Firefly** | [firefly.adobe.com](https://firefly.adobe.com) | 25/month | ⭐⭐⭐⭐ | Commercial-safe if client needs Adobe workflow |
| **Canva Magic Media** | [canva.com](https://www.canva.com) | 50 lifetime free | ⭐⭐⭐⭐⭐ | Background removal + recolor + export |
| **Perchance / Craiyon** | browser-based | Unlimited | ⭐⭐⭐ | Quick rough concepts only — lower quality |

**Recommended stack for this project:**

```
1. Pexels/Unsplash  →  find base photo
2. Canva or Photopea  →  recolor background to hex
3. Nano Banana  →  generate mockups / abstract scenes / fix details
4. Meta AI  →  extra variations when Nano Banana daily limit hit
```

---

### 🎨 Background removal & compositing (free)

| Tool | URL | Use |
|---|---|---|
| **remove.bg** | [remove.bg](https://www.remove.bg) | Free low-res cuts |
| **Photopea** | [photopea.com](https://www.photopea.com) | Free Photoshop in browser |
| **Canva** | [canva.com](https://www.canva.com) | Color fields + export WebP |
| **Squoosh** | [squoosh.app](https://squoosh.app) | WebP compression |

---

### 🧊 3D model re-renders

| Tool | Use |
|---|---|
| **Blender** (free) | Re-render products on solid cyclorama |
| **Photoshop / Photopea** | Cut out existing PNG, paste on colored layer |
| **Nano Banana** | Last resort background replacement if no 3D source |

---

## 🔄 Workflow for This Project

### Per-image workflow (recommended)

```
Step 1: Check Master Image List → note filename, hex, size, prompt
Step 2: Try Pexels keywords first (faster + more authentic for photos)
Step 3: If no match → Nano Banana with full prompt from list
Step 4: Post-process → correct background hex, shadow, crop to size
Step 5: Export WebP → place in correct public/images/ subfolder
Step 6: Tick off Delivery Checklist
```

### Daily production schedule (suggested)

| Day | Batch | Count |
|---|---|---|
| 1 | Splash heroes (SPLASH-01 to 03) + OG cover | 4 |
| 2 | Nav cards + About + Contact | 9 |
| 3 | Services + Clients + Opportunities | 5 |
| 4 | Projects 1–7 | 7 |
| 5 | Projects 8–14 | 7 |
| 6 | Scripture 1–7 | 7 |
| 7 | Nigeria 1–10 | 10 |
| 8 | 3D model re-renders 1–7 | 7 |
| 9 | 3D model re-renders 8–14 + favicon | 8 |
| 10 | QA pass — color consistency, safe zones, file names | — |

---

## 📦 Master Image List

> **Certificates (8 files): DO NOT recreate.** Keep existing scans in `public/images/`.  
> **App pages:** Reuse `projects/animal-guesses.webp` and `projects/music-guesses.webp`.

---

### 🏷️ A. Brand & Meta (2 raster + 2 code)

#### IMG-001 · `brand/og-cover.webp`

| Field | Value |
|---|---|
| **Size** | 1200×1680 px (portrait OG) |
| **Background** | Lavender `#D6D1F5` + cream `#F2F0E9` split |
| **Source** | 🤖 Nano Banana |
| **Shape** | Rectangle (no mask) |
| **Prompt** | `Editorial studio flat lay, minimal desk with laptop and coffee, warm cream and soft lavender color blocks, bold negative space, premium creative agency mood, soft natural light, no text, no logo, 4:5 portrait` |
| **Pexels fallback** | `minimal workspace cream`, `creative studio flat lay pastel` |

#### IMG-002 · `brand/favicon-512.png`

| Field | Value |
|---|---|
| **Size** | 512×512 px |
| **Background** | Transparent or black `#0A0A0A` |
| **Source** | Figma / Nano Banana |
| **Prompt** | `Minimal letter R monogram, bold geometric sans serif, black with small orange dot accent, flat icon, no text, centered, square` |

---

### 🏠 B. Homepage Splash & Nav (13 images)

#### IMG-005 · `editorial/hero-workspace.webp` 🔥 SPLASH

| Field | Value |
|---|---|
| **Size** | 1800×1200 px (3:2) |
| **Background** | Cream `#F2F0E9` |
| **Mask on site** | **Organic blob** |
| **Source** | 📷 Pexels preferred |
| **Prompt** | `Minimal developer workspace top view, clean keyboard and monitor, warm cream tones, editorial studio photography, soft shadow, no text` |
| **Pexels** | `developer desk minimal`, `keyboard workspace top view clean`, `tech workspace neutral` |

#### IMG-006 · `editorial/hero-accent-flower.webp` 🔥 SPLASH

| Field | Value |
|---|---|
| **Size** | 800×1000 px (4:5) |
| **Background** | Peach `#F5C4B8` |
| **Mask on site** | Soft rounded card (inset) |
| **Source** | 📷 Pexels |
| **Prompt** | `Single orange flower in cream ceramic vase, minimal floral still life, peach background, soft natural light, editorial` |
| **Pexels** | `single orange flower vase cream`, `minimal floral still life pastel` |

#### IMG-007 · `editorial/hero-accent-object.webp` 🔥 SPLASH

| Field | Value |
|---|---|
| **Size** | 1000×1250 px (4:5) |
| **Background** | Cobalt `#1E4BFF` |
| **Mask on site** | Asymmetric radius tall tile |
| **Source** | 🤖 Nano Banana |
| **Prompt** | `Single green ribbed glass or sculptural design object on cobalt blue backdrop, studio product photography, hard shadow, editorial, no text` |
| **Pexels** | `blue background product minimal`, `still life cobalt glass` |

#### IMG-008 · `nav/about.webp`

| Field | Value |
|---|---|
| **Size** | 1200×900 px (4:3) |
| **Background** | Lavender `#D6D1F5` |
| **Prompt** | `Creative professional at workspace, thoughtful side profile, soft light, lavender background, editorial portrait` |
| **Pexels** | `creative portrait thoughtful`, `person workspace soft light` |

#### IMG-009 · `nav/certificates.webp`

| Field | Value |
|---|---|
| **Size** | 1200×900 px |
| **Background** | Mustard `#E8C547` |
| **Prompt** | `Stack of books and laptop, education theme, mustard yellow background, minimal, no readable text` |
| **Pexels** | `studying minimal yellow`, `books laptop education aesthetic` |

#### IMG-010 · `nav/clients.webp`

| Field | Value |
|---|---|
| **Size** | 1200×900 px |
| **Background** | Teal `#2EC4B6` |
| **Prompt** | `Business collaboration concept, minimal editorial, teal background` |
| **Pexels** | `handshake creative business`, `magazine editorial business minimal` |

#### IMG-011 · `nav/opportunities.webp`

| Field | Value |
|---|---|
| **Size** | 1200×900 px |
| **Background** | Orange `#F24E1E` |
| **Prompt** | `Career journey abstract, stepping stones, orange background, professional editorial` |
| **Pexels** | `career path minimal`, `professional journey concept orange` |

#### IMG-012 · `nav/projects.webp`

| Field | Value |
|---|---|
| **Size** | 1200×900 px |
| **Background** | Cobalt `#1E4BFF` |
| **Prompt** | `Abstract floating UI cards, web development concept, cobalt blue, no readable text, editorial 3D` |
| **Pexels** | `web development abstract blue` |

#### IMG-013 · `nav/models.webp`

| Field | Value |
|---|---|
| **Size** | 1200×900 px |
| **Background** | Pink `#F4A6C1` |
| **Prompt** | `3D printed objects and filament spool on pink backdrop, maker studio, soft shadow` |
| **Pexels** | `3d printing minimal pink` |

---

### 👤 C. About, Services, Contact, Clients, Opportunities (8 images)

#### IMG-014 · `editorial/about-portrait.webp`

| Field | Value |
|---|---|
| **Size** | 1800×1200 px (3:2) |
| **Background** | Cobalt `#1E4BFF` (left half bleed) |
| **Mask on site** | **Organic blob** — primary about hero |
| **Source** | 📷 Real photo of Raimon OR Pexels generic |
| **⚠️** | **Do not AI-generate a fake likeness of the site owner** |
| **Pexels** | `creative professional portrait orange background`, `developer portrait studio` |

#### IMG-015 · `editorial/services-medium.webp`

| Field | Value |
|---|---|
| **Size** | 1800×1200 px |
| **Background** | Cream `#F2F0E9` |
| **Prompt** | `Writing notebook and coffee on desk, blog writer aesthetic, cream tones, minimal` |
| **Pexels** | `writing notebook coffee minimal`, `blog writer desk` |

#### IMG-016 · `editorial/services-youtube.webp`

| Field | Value |
|---|---|
| **Size** | 1800×1200 px |
| **Background** | Orange `#F24E1E` |
| **Prompt** | `Video camera or ring light on orange backdrop, content creator setup, no logos` |
| **Pexels** | `youtube creator setup minimal`, `video production orange` |

#### IMG-017 · `editorial/services-websites.webp`

| Field | Value |
|---|---|
| **Size** | 1800×1200 px |
| **Background** | Teal `#2EC4B6` |
| **Prompt** | `Responsive website on laptop and phone mockup, teal background, clean UI shapes, no brand text` |
| **Pexels** | `responsive web design mockup teal` |

#### IMG-018 · `editorial/contact-ideas.webp`

| Field | Value |
|---|---|
| **Size** | 1200×900 px |
| **Background** | Lavender `#D6D1F5` |
| **Mask on site** | Soft radius |
| **Prompt** | `Lightbulb moment creative concept, soft purple lavender background, minimal editorial` |
| **Pexels** | `lightbulb creative minimal`, `idea inspiration pastel purple` |

#### IMG-019 · `editorial/clients-collabs.webp`

| Field | Value |
|---|---|
| **Size** | 1200×900 px |
| **Background** | Peach `#F5C4B8` |
| **Prompt** | `Open magazine editorial flat lay on peach surface, interview aesthetic, no readable masthead` |
| **Pexels** | `magazine editorial flat lay peach` |

#### IMG-020 · `editorial/clients-techbullion.webp`

| Field | Value |
|---|---|
| **Size** | 1200×900 px |
| **Background** | Mustard `#E8C547` |
| **Prompt** | `Fintech magazine abstract charts on mustard background, professional editorial, no logos` |
| **Pexels** | `fintech editorial minimal mustard` |

#### IMG-021 · `editorial/opportunities-journey.webp`

| Field | Value |
|---|---|
| **Size** | 1800×1200 px |
| **Background** | Cobalt `#1E4BFF` |
| **Prompt** | `Career growth stepping stones abstract, cobalt blue, professional editorial` |
| **Pexels** | `career growth concept blue`, `professional network abstract` |

---

### 💼 D. Projects (14 images) — all 1200×900, rectangular cards

| ID | Filename | Title | BG | Source | Nano Banana prompt (append standard suffix) |
|---|---|---|---|---|---|
| IMG-022 | `projects/change-my.webp` | Change-My | Lavender | 🤖 | `Image format converter UI mockup, jpg png webp icons floating, lavender background, minimal SaaS, no readable brand` |
| IMG-023 | `projects/skills-hub.webp` | Skills Hub | Teal | 🤖 | `Abstract technology stack shapes floating, python react node concept, teal backdrop, no trademark logos` |
| IMG-024 | `projects/tanach.webp` | Tanach Explorer | Mustard | 🤖 | `Open ancient book subtle Hebrew texture, warm mustard gold background, reverent editorial still life, soft light, no cartoon` |
| IMG-025 | `projects/physics-calc.webp` | Speed Calculation | Cobalt | 🤖 | `Physics equations speedometer abstract, cobalt blue, minimal scientific` |
| IMG-026 | `projects/flashcards.webp` | Physics Flashcards | Orange | 🤖 | `Stack of study flashcards with physics diagrams, orange background` |
| IMG-027 | `projects/retro-monitor.webp` | Retro Monitor | Peach | 🤖 | `Vintage typewriter with modern screen element, peach retro-tech studio photo` |
| IMG-028 | `projects/animal-guesses.webp` | Animal Guesses | Lime | 📱 | Screenshot app → phone mockup on lime `#D4ED5D`. AI fallback: `Kids animal quiz on phone, lime green background` |
| IMG-029 | `projects/music-guesses.webp` | Music Guesses | Pink | 📱 | Screenshot app → phone mockup on pink `#F4A6C1`. AI fallback: `Music instrument quiz on phone, pink background` |
| IMG-030 | `projects/emf-simulator.webp` | EMF Simulator | Cobalt | 🤖 | `Electromagnetic coil diagram abstract, cobalt scientific visualization` |
| IMG-031 | `projects/tetris.webp` | Tetris 2.0 | Lavender | 🤖 | `Minimal tetris blocks floating, lavender background, geometric game` |
| IMG-032 | `projects/periodic-table.webp` | Periodic Table | Teal | 🤖 | `Periodic table colorful grid abstract on teal, science poster style` |
| IMG-033 | `projects/unsmoke.webp` | Unsmoke | Sage `#8FA68E` | 🤖 | `Green plant sprout breaking through soil, health recovery metaphor, sage green calm` |
| IMG-034 | `projects/rootwork.webp` | Rootwork | Peach | 🤖 | `Tree roots becoming career ladder abstract, warm peach, growth metaphor` |
| IMG-035 | `projects/google-login-edu.webp` | Google Login EDU | Mustard | 🤖 | `School login portal mockup, graduation cap and lock icon abstract, mustard background` |

**Pexels batch keywords (projects):**  
`physics formula blue`, `tetris blocks minimal`, `periodic table aesthetic`, `plant sprout green`, `retro typewriter minimal`

---

### 📖 E. Scripture Readers (7 images) — warmer palette, soft radius only

| ID | Filename | Title | BG | Prompt |
|---|---|---|---|---|
| IMG-036 | `scripture/tanach.webp` | Tanach | Mustard | **Same file as IMG-024** — copy `projects/tanach.webp` |
| IMG-037 | `scripture/holy-bible.webp` | Holy Bible | Warm blue `#6B8FAD` | `Open Bible soft white pages, warm blue-grey background, reverent editorial, no cartoon` |
| IMG-038 | `scripture/childrens-bible.webp` | Children's Bible | Peach | `Children's storybook gentle style, soft peach, inviting, no cartoon characters` |
| IMG-039 | `scripture/book-of-mormon.webp` | Book of Mormon | Parchment `#E8E0D4` | `Leather-bound book gold edges, parchment cream, dignified warm light` |
| IMG-040 | `scripture/apocrypha.webp` | Apocrypha | Sage `#8FA68E` | `Ancient manuscripts stack, aged paper, sage green, scholarly` |
| IMG-041 | `scripture/lost-scriptures.webp` | Lost Scriptures | Lavender | `Fragmented ancient pages, mystery aesthetic, soft lavender, academic` |
| IMG-042 | `scripture/prayer-intentions.webp` | Prayer Intentions | Cream | 📷 `prayer hands soft light`, `candle meditation calm cream` |

---

### 🇳🇬 F. Nigerian Projects (10 images) — 1200×900 rectangular

| ID | Filename | Title | BG | Prompt / Pexels |
|---|---|---|---|---|
| IMG-043 | `nigeria/nigerian-tech.webp` | Nigerian Tech | Teal | 🤖/📷 `African developers with laptop, modern Lagos office feel, teal, authentic` — `african developers office`, `nigeria tech startup` |
| IMG-044 | `nigeria/connection-solution.webp` | Connection Solution | Orange | 🤖 `Offline coding laptop with sync icon, unreliable wifi metaphor, orange` |
| IMG-045 | `nigeria/payment-guide.webp` | Payment Guide | Cobalt | 🤖 `Mobile payment phone mockup, fintech africa, cobalt blue` |
| IMG-046 | `nigeria/frontend-jobs.webp` | Frontend Jobs | Lavender | 🤖 `Job board UI laptop, frontend developer theme, lavender` |
| IMG-047 | `nigeria/coding-ai.webp` | Coding with AI | Lime | 🤖 `AI coding assistant laptop with code sparkles, lime green` |
| IMG-048 | `nigeria/react-app.webp` | React App Guide | Cobalt | 🤖 `React abstract atom shape on cobalt, terminal aesthetic` |
| IMG-049 | `nigeria/google-login.webp` | Google Login NG | Mustard | 🤖 Same as IMG-035, subtle African education context |
| IMG-050 | `nigeria/form-education.webp` | Form Education | Peach | 🤖 `Contact form wireframe on peach, formspree concept` |
| IMG-051 | `nigeria/health-navigator.webp` | Health Navigator | Teal | 🤖/📷 `Hospital map pin app mockup, Lagos healthcare, teal calm` — `hospital locator app`, `healthcare map` |

---

### 🧊 G. 3D Models (14 images) — 1000×1000, re-render on cyclorama

> Keep the **same 3D object**. Only change background color and shadow.

| ID | Filename | Replaces | BG hex |
|---|---|---|---|
| IMG-052 | `models/earrings-hero.webp` | `cults.png` | Peach `#F5C4B8` |
| IMG-053 | `models/monkey-coaster.webp` | `monkeys.webp` | Lavender `#D6D1F5` |
| IMG-054 | `models/deer-ornament.webp` | `deer.webp` | Cobalt `#1E4BFF` |
| IMG-055 | `models/cat-earrings-v6.webp` | `cat-v6-final.webp` | Cream `#F2F0E9` |
| IMG-056 | `models/unicorn-keychain.webp` | `unicorn.webp` | Pink `#F4A6C1` |
| IMG-057 | `models/roses-earrings.webp` | `roses.webp` | Peach `#F5C4B8` |
| IMG-058 | `models/butterfly-earrings.webp` | `butterfly.webp` | Lavender `#D6D1F5` |
| IMG-059 | `models/alien-keychain.webp` | `alien.webp` | Cobalt `#1E4BFF` |
| IMG-060 | `models/owl-bowl.webp` | `owl-bowl.webp` | Mustard `#E8C547` |
| IMG-061 | `models/buddha-coaster.webp` | `buddha.webp` | Cream `#F2F0E9` |
| IMG-062 | `models/male-torso.webp` | `male.webp` | Teal `#2EC4B6` |
| IMG-063 | `models/horse-keychain.webp` | `horse.webp` | Orange `#F24E1E` |
| IMG-064 | `models/cat-earrings-v3.webp` | `Cat-v3-final.webp` | Pink `#F4A6C1` |

**Render settings:** 45° left shadow, 15–20% opacity, object centered, 10% padding.

---

### 🎓 H. Certificates — KEEP (no new images)

| Files | Action |
|---|---|
| `JavaScript1.webp` through `java-spring.webp` (8 files) | ✅ Keep existing scans. Designer adds CSS frame only. |

---

## ✅ Delivery Checklist

### Folder structure

```
public/images/
├── brand/
│   ├── og-cover.webp
│   └── favicon-512.png
├── editorial/
│   ├── hero-workspace.webp
│   ├── hero-accent-flower.webp
│   ├── hero-accent-object.webp
│   ├── about-portrait.webp
│   ├── services-medium.webp
│   ├── services-youtube.webp
│   ├── services-websites.webp
│   ├── contact-ideas.webp
│   ├── clients-collabs.webp
│   ├── clients-techbullion.webp
│   └── opportunities-journey.webp
├── nav/
│   ├── about.webp
│   ├── certificates.webp
│   ├── clients.webp
│   ├── opportunities.webp
│   ├── projects.webp
│   └── models.webp
├── projects/        (14 files)
├── scripture/       (6 unique + 1 copy of tanach)
├── nigeria/         (10 files)
└── models/          (14 files)
```

### Count summary

| Category | New images |
|---|---|
| Brand | 2 |
| Editorial + splash | 11 |
| Nav | 6 |
| Projects | 14 |
| Scripture (unique) | 6 |
| Nigeria | 10 |
| 3D re-renders | 14 |
| **Total new raster** | **~63** |
| Certificates | 0 (keep 8) |
| **With buffer / retries** | **~70–78** ✅ |

### QA before handoff

- [ ] Every file name matches this document exactly
- [ ] Every image has correct background hex
- [ ] No readable text / watermarks / AI artifacts in images
- [ ] Subject inside center 80% safe zone (for masked heroes)
- [ ] WebP format, correct dimensions
- [ ] Scripture images use calm palette (no neon)
- [ ] Nigeria images feel authentic (no stereotypes)
- [ ] About portrait is real photo or generic stock — not fake AI likeness
- [ ] Animal/Music guesses: fresh app screenshots in phone frames
- [ ] 3D models: consistent shadow angle across all 14

---

## 📎 Standard prompt suffix (copy-paste)

Append this to **every** Nano Banana prompt:

```
Editorial studio photography, soft natural light, clean composition, no text, no watermark, no logo, no brand names, sRGB color, high detail, web-ready
```

---

*Document version: 1.0 · July 2026 · For designer handoff*
