# 🎨 Raimonvibe Editorial Redesign — Master Plan

> Complete redesign inspired by six creative-studio reference images.  
> Includes design decisions, page map, dark mode, and every image to generate or source.

---

## 📋 Table of Contents

1. [Design Decisions](#-part-1-design-decisions-answered-for-you)
2. [Color System](#-unified-color-system)
3. [Image Dimensions](#-image-dimensions-standardize-all-exports)
4. [Page-by-Page Map](#-part-2-page-by-page-redesign-map)
5. [Complete Image Inventory](#-part-3-complete-image-inventory)
6. [Implementation Roadmap](#-part-4-implementation-roadmap)
7. [Sufficiency Checklist](#-part-5-is-this-sufficient-to-finish)
8. [Easy-to-Miss Items](#-things-you-might-be-forgetting)
9. [Pexels Search Pack](#-part-6-quick-reference-pexels-search-pack)
10. [Summary](#-summary)

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

## 🖼️ Part 3: Complete Image Inventory

**Total: ~72 image work items** (+ 8 certificates kept as-is)

### Legend

| Symbol | Meaning |
|---|---|
| 🤖 AI | Generate with AI image tool |
| 📷 Pexels | Stock photo from Pexels |
| 📱 Screenshot | Capture from your app |
| ✅ Keep | Use existing file (reframe only) |
| 🎨 Render | Re-render 3D model on new background |
| 💻 Code | Build in SVG/CSS (no image file) |

---

### 🏷️ A. Brand & Meta (4 assets)

| # | New Filename | Used On | BG | Source | 🤖 AI Prompt | 📷 Pexels Keywords |
|---|---|---|---|---|---|---|
| 1 | `brand/og-cover.webp` | Social sharing, `layout.tsx` | Lavender + peach split | 🤖 AI | `Editorial studio flat lay, minimal desk with laptop, warm cream and soft lavender color blocks, bold negative space, no text, premium creative agency mood, soft natural light, 3:2` | `minimal workspace cream`, `creative studio flat lay pastel` |
| 2 | `brand/favicon-512.png` | Favicon, manifest | Black | 🤖 AI / 💻 SVG | `Minimal letter R monogram, bold geometric sans serif, black on transparent, simple dot accent orange` | — |
| 3 | `brand/hero-badge.svg` | Homepage circle stamp | Lime | 💻 Code | N/A — build in code: "RESEARCH • CODE • DESIGN" | — |
| 4 | `brand/trust-logos.svg` | Homepage trust bar | Transparent | 💻 Code | N/A — text-based tech stack | — |

---

### 🏠 B. Homepage (13 images)

| # | New Filename | Replaces | BG | Source | 🤖 AI Prompt | 📷 Pexels Keywords |
|---|---|---|---|---|---|---|
| 5 | `editorial/hero-workspace.webp` | `pic12.jpg` | Cream `#F2F0E9` | 📷 Pexels | — | `developer desk minimal`, `keyboard workspace top view clean`, `tech workspace neutral background` |
| 6 | `editorial/hero-accent-flower.webp` | (new bento tile) | Peach `#F5C4B8` | 📷 Pexels | — | `single orange flower vase cream`, `minimal floral still life pastel` |
| 7 | `editorial/hero-accent-object.webp` | (new bento tile) | Cobalt `#1E4BFF` | 🤖 AI | `Single sculptural object on cobalt blue backdrop, ribbed glass or design object, studio product photography, hard shadow, editorial` | `blue background product minimal`, `still life cobalt` |
| 8 | `nav/about.webp` | `pic13.jpg` | Lavender | 📷 Pexels | — | `creative portrait thoughtful`, `person workspace side profile soft light` |
| 9 | `nav/certificates.webp` | `pic15.jpg` | Mustard | 📷 / 🤖 AI | `Stack of books and laptop on mustard yellow background, education theme, minimal, no readable text` | `studying minimal yellow`, `books laptop education aesthetic` |
| 10 | `nav/clients.webp` | `pic16.jpg` | Teal | 📷 Pexels | — | `handshake creative business`, `magazine editorial business minimal` |
| 11 | `nav/opportunities.webp` | `pic17.jpg` | Orange | 📷 Pexels | — | `career path minimal`, `office building abstract orange`, `professional journey concept` |
| 12 | `nav/projects.webp` | `pic19.jpg` | Cobalt | 🤖 AI | `Abstract grid of floating UI cards on cobalt blue, no readable text, web development concept, editorial 3D` | `web development abstract blue`, `code interface minimal` |
| 13 | `nav/models.webp` | `pic20.jpg` | Pink | 🤖 AI | `3D printed objects on pink backdrop, geometric shapes and filament spool, maker studio, soft shadow` | `3d printing minimal`, `3d printer object pink background` |

---

### 👤 C. About, Services, Contact, Clients, Opportunities (9 images)

| # | New Filename | Replaces | BG | Source | 🤖 AI Prompt | 📷 Pexels Keywords |
|---|---|---|---|---|---|---|
| 14 | `editorial/about-portrait.webp` | `pic14.jpg` | Cobalt | 📷 Pexels | — | `creative professional portrait orange background`, `developer portrait studio bold color` |
| 15 | `editorial/services-medium.webp` | `pic24.jpg` | Cream | 📷 Pexels | — | `writing notebook coffee minimal`, `blog writer desk aesthetic` |
| 16 | `editorial/services-youtube.webp` | `pic23.jpg` | Orange | 📷 / 🤖 AI | `Video camera or ring light on orange backdrop, content creator setup, minimal, no logos` | `youtube creator setup minimal`, `video production orange background` |
| 17 | `editorial/services-websites.webp` | `website.jpg` | Teal | 🤖 AI | `Responsive website mockups on teal background, floating laptop and phone, no readable brand text, clean UI shapes` | `responsive web design mockup`, `website development minimal teal` |
| 18 | `editorial/contact-ideas.webp` | `pic21.jpg` | Lavender | 📷 Pexels | — | `lightbulb moment creative minimal`, `idea inspiration pastel purple` |
| 19 | `editorial/clients-collabs.webp` | `pic17.jpg` | Peach | 🤖 AI | `Open magazine on peach surface, editorial interview aesthetic, no readable masthead text` | `magazine editorial flat lay`, `publication interview minimal` |
| 20 | `editorial/clients-techbullion.webp` | `pic18.jpg` | Mustard | 🤖 AI | `Fintech magazine aesthetic, abstract charts on mustard background, professional editorial, no readable logos` | `fintech editorial minimal`, `business magazine abstract` |
| 21 | `editorial/opportunities-journey.webp` | `pic22.jpg` | Cobalt | 📷 Pexels | — | `career growth concept minimal`, `stepping stones path abstract blue`, `professional network abstract` |

> ⚠️ **About portrait (#14):** Use a **real photo of you** or a generic Pexels portrait — not an AI-generated likeness of yourself.

---

### 💼 D. Projects Page (14 images)

| # | New Filename | Project | BG | Source | 🤖 AI Prompt | 📷 Pexels Keywords |
|---|---|---|---|---|---|---|
| 22 | `projects/change-my.webp` | Change-My Image Converter | Lavender | 📱 + 🤖 | `Image format converter UI mockup, jpg png webp icons, lavender background, minimal SaaS` | `image converter app ui`, `file conversion minimal` |
| 23 | `projects/skills-hub.webp` | Recommended Stack | Teal | 🤖 AI | `Technology stack icons abstract floating, react python node as shapes not trademarks, teal backdrop` | `tech stack abstract`, `programming tools minimal` |
| 24 | `projects/tanach.webp` | Tanach Explorer | Mustard `#E8C547` | 🤖 AI | `Open ancient book with subtle Hebrew typography texture, star of david very subtle, warm mustard gold background, reverent editorial still life, soft light, no cartoon` | `old book gold background`, `hebrew bible book editorial`, `ancient scripture book minimal` |
| 25 | `projects/physics-calc.webp` | Speed Calculation | Cobalt | 🤖 AI | `Physics equations and speedometer abstract on cobalt blue, minimal scientific calculator aesthetic` | `physics formula blue`, `speed motion abstract science` |
| 26 | `projects/flashcards.webp` | Physics Flashcards | Orange | 🤖 AI | `Stack of flashcards with physics diagrams, orange background, study aesthetic` | `flashcards study orange`, `physics study cards` |
| 27 | `projects/retro-monitor.webp` | Retro Typewriter Monitor | Peach | 🤖 AI | `Vintage typewriter merged with modern screen, peach retro-tech aesthetic, studio photo` | `retro typewriter minimal`, `vintage computer aesthetic` |
| 28 | `projects/animal-guesses.webp` | Animal Guesses | Lime | 📱 Screenshot | Re-screenshot app → phone mockup on lime. AI fallback: `Kids animal quiz app on phone, cute animal icons, lime green background, playful but clean` | `kids animal app mockup`, `educational quiz mobile` |
| 29 | `projects/music-guesses.webp` | Music Guesses | Pink | 📱 Screenshot | Same on pink. AI fallback: `Music instrument quiz app on phone, piano guitar icons, pink background` | `music education app kids`, `instrument learning app` |
| 30 | `projects/emf-simulator.webp` | EMF Simulator | Cobalt | 🤖 AI | `Electromagnetic coil diagram abstract, blue scientific visualization, minimal` | `electromagnetic field abstract`, `physics simulation blue` |
| 31 | `projects/tetris.webp` | Tetris 2.0 | Lavender | 🤖 AI | `Minimal tetris blocks floating, lavender purple background, geometric game aesthetic` | `tetris blocks minimal`, `puzzle game abstract purple` |
| 32 | `projects/periodic-table.webp` | Periodic Table | Teal | 🤖 AI | `Periodic table abstract colorful grid on teal, editorial science poster style` | `periodic table aesthetic`, `chemistry elements minimal` |
| 33 | `projects/unsmoke.webp` | Unsmoke | Sage `#8FA68E` | 🤖 AI | `Green plant sprout breaking through, health recovery metaphor, sage green calm background` | `plant sprout green minimal`, `quit smoking health green`, `new beginning plant` |
| 34 | `projects/rootwork.webp` | Rootwork | Peach | 🤖 AI | `Tree roots transforming into career ladder abstract, warm peach, growth metaphor` | `career growth roots`, `personal development abstract warm` |
| 35 | `projects/google-login-edu.webp` | Google Login EDU | Mustard | 🤖 AI | `School login portal mockup, graduation cap + lock icon abstract, mustard background, education auth` | `education login portal`, `school authentication minimal` |

---

### 📖 E. Scripture Readers (7 images)

> 🔗 `tanach.webp` (#24) is **shared** between `/projects` and `/scripture-readers`.

| # | New Filename | Reader | BG | Source | 🤖 AI Prompt | 📷 Pexels Keywords |
|---|---|---|---|---|---|---|
| 36 | `scripture/tanach.webp` | Tanach Reader | Mustard | 🤖 AI | Same as #24 — shared asset | `hebrew bible open book gold` |
| 37 | `scripture/holy-bible.webp` | Holy Bible Reader | Warm blue `#6B8FAD` | 🤖 AI | `Open Bible with soft white pages, cross light ray subtle, warm blue-grey background, reverent editorial` | `open bible blue background`, `holy bible book minimal` |
| 38 | `scripture/childrens-bible.webp` | Bible Stories for Children | Peach `#F5C4B8` | 🤖 AI | `Children's storybook with gentle illustration style, soft peach, warm and inviting, no cartoon characters` | `children bible story book`, `kids storybook pastel` |
| 39 | `scripture/book-of-mormon.webp` | Book of Mormon | Parchment `#E8E0D4` | 🤖 AI | `Leather-bound book with gold edges, desert warm light, parchment cream background, dignified` | `leather book gold edges`, `scripture book warm light` |
| 40 | `scripture/apocrypha.webp` | Apocrypha Reader | Sage `#8FA68E` | 🤖 AI | `Ancient manuscripts stack, aged paper texture, sage green background, scholarly` | `ancient manuscripts stack`, `old texts scholarly green` |
| 41 | `scripture/lost-scriptures.webp` | Lost Scriptures | Lavender `#D6D1F5` | 🤖 AI | `Fragmented ancient pages with missing pieces, mystery aesthetic, soft lavender, academic` | `ancient fragmented texts`, `lost manuscript aesthetic` |
| 42 | `scripture/prayer-intentions.webp` | Prayer Intentions | Cream `#F2F0E9` | 📷 Pexels | — | `prayer hands soft light minimal`, `candle meditation calm cream`, `peaceful spiritual still life` |

---

### 🇳🇬 F. Nigerian Projects (10 images)

| # | New Filename | Project | BG | Source | 🤖 AI Prompt | 📷 Pexels Keywords |
|---|---|---|---|---|---|---|
| 43 | `nigeria/nigerian-tech.webp` | Nigerian Tech Opportunities | Teal | 🤖 / 📷 | `African developers collaborating laptop, Lagos modern office, teal accent, authentic not stereotype` | `african developers office`, `nigeria tech startup`, `lagos office modern` |
| 44 | `nigeria/connection-solution.webp` | Connection Solution | Orange | 🤖 AI | `Offline coding tutorial on laptop with sync icon, unreliable wifi metaphor, orange background` | `offline learning laptop`, `coding poor internet` |
| 45 | `nigeria/payment-guide.webp` | Payment Solution Guide | Cobalt | 🤖 AI | `Mobile payment phone mockup Nigeria, naira coins abstract, cobalt blue fintech` | `mobile payment africa`, `fintech africa blue` |
| 46 | `nigeria/frontend-jobs.webp` | Frontend Job Search | Lavender | 🤖 AI | `Job board UI on laptop, frontend developer theme, lavender background` | `job search developer laptop`, `frontend developer hiring` |
| 47 | `nigeria/coding-ai.webp` | Coding with AI Tutorial | Lime | 🤖 AI | `AI coding assistant abstract, lime green, laptop with code and sparkles` | `ai coding assistant`, `artificial intelligence programming` |
| 48 | `nigeria/react-app.webp` | How to Create React App | Cobalt | 🤖 AI | `React atom logo abstract shape on cobalt, create-react-app terminal aesthetic` | `react development minimal`, `react js abstract blue` |
| 49 | `nigeria/google-login.webp` | Google Login EDU (NG) | Mustard | 🤖 AI | Same as #35 with subtle Nigeria context | `education login africa` |
| 50 | `nigeria/form-education.webp` | Form Education | Peach | 🤖 AI | `Contact form wireframe on peach background, formspree integration concept` | `web form design minimal`, `contact form ui` |
| 51 | `nigeria/health-navigator.webp` | Lagos Health Navigator | Teal | 🤖 / 📷 | `Hospital map pin Lagos, healthcare navigation app mockup, teal calming` | `hospital locator app`, `healthcare map lagos`, `medical navigation mobile` |

---

### 🧊 G. 3D Models (14 images — re-render)

**Rule:** Same 3D model, new cyclorama. Rotate: Peach → Lavender → Cobalt → Cream → Pink.

| # | New Filename | Replaces | BG | Source | Notes |
|---|---|---|---|---|---|
| 52 | `models/earrings-hero.webp` | `cults.png` | Peach | 🎨 Render | 3D printed earrings, peach cyclorama |
| 53 | `models/monkey-coaster.webp` | `monkeys.webp` | Lavender | 🎨 Render | Monkey coaster |
| 54 | `models/deer-ornament.webp` | `deer.webp` | Cobalt | 🎨 Render | Deer ornament |
| 55 | `models/cat-earrings-v6.webp` | `cat-v6-final.webp` | Cream | 🎨 Render | Cat earrings v6 |
| 56 | `models/unicorn-keychain.webp` | `unicorn.webp` | Pink | 🎨 Render | Unicorn keychain |
| 57 | `models/roses-earrings.webp` | `roses.webp` | Peach | 🎨 Render | Rose earrings |
| 58 | `models/butterfly-earrings.webp` | `butterfly.webp` | Lavender | 🎨 Render | Butterfly earrings |
| 59 | `models/alien-keychain.webp` | `alien.webp` | Cobalt | 🎨 Render | Alien keychain |
| 60 | `models/owl-bowl.webp` | `owl-bowl.webp` | Mustard | 🎨 Render | Owl voronoi bowl |
| 61 | `models/buddha-coaster.webp` | `buddha.webp` | Cream | 🎨 Render | Buddha coaster |
| 62 | `models/male-torso.webp` | `male.webp` | Teal | 🎨 Render | Voronoi male torso |
| 63 | `models/horse-keychain.webp` | `horse.webp` | Orange | 🎨 Render | Geometric horse |
| 64 | `models/cat-earrings-v3.webp` | `Cat-v3-final.webp` | Pink | 🎨 Render | Cat earrings v3 |

**🎨 Render tip:** Blender or Photoshop → solid color backdrop, consistent soft shadow (45° left), export 1000×1000 WebP.

---

### 🎓 H. Certificates (8 images — KEEP)

| # | Files | Action |
|---|---|---|
| 65–72 | `JavaScript1.webp` … `java-spring.webp` | ✅ **Do not regenerate.** Keep scans. Wrap in CSS card with lavender border + course title overlay. |

---

### 📱 I. App Pages (reuse)

| # | File | Action |
|---|---|---|
| 73 | `projects/animal-guesses.webp` | Reuse on `/apps/animal-guesses` |
| 74 | `projects/music-guesses.webp` | Reuse on `/apps/music-guesses` |

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

## 🔎 Part 6: Quick-Reference Pexels Search Pack

Copy-paste these batches:

```
Batch 1 — Heroes:
developer desk minimal, keyboard workspace top view, creative studio flat lay pastel

Batch 2 — About:
creative professional portrait orange background, developer portrait studio

Batch 3 — Services:
writing notebook coffee minimal, youtube creator setup minimal, responsive web design mockup

Batch 4 — Contact:
lightbulb moment creative minimal, idea inspiration pastel

Batch 5 — Scripture:
open bible blue background, hebrew bible book editorial, ancient manuscripts stack, prayer hands soft light minimal

Batch 6 — Nigeria:
african developers office, nigeria tech startup, mobile payment africa, hospital locator app

Batch 7 — Projects:
physics formula blue, tetris blocks minimal, periodic table aesthetic, plant sprout green minimal
```

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

1. **You:** Start Batch 1 images (#5–7, #14–21)
2. **Dev:** Implement Phase 1 (design tokens + nav shell + dark mode)
3. **You:** Approve or tweak design decisions in Part 1
4. **Together:** Roll out page by page per roadmap

---

*Last updated: July 2026 · Raimonvibe Editorial Redesign*
