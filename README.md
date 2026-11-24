# Dala — Graphic Design Portfolio & Automated Case Study System

A monolithic, dark-void graphic design portfolio engineered with **Next.js 14 (App Router)**, **TypeScript**, and **Tailwind CSS**, strictly built according to the **Dala Style Reference (`DESIGN.md`)**.

> *Constellation floating on black velvet.*

---

## ✦ System Architecture & Design Truth

- **Theme Canvas**: Pure `#000000` void — no gray background panels, cards, or borders.
- **Typography**: 
  - Weight `400` headlines at outsized scale (`78px` – `113px`) with aggressive negative tracking (`-0.04em`).
  - Signature weight `200` (ultra-light) `18px` body copy for spacious, airy reading.
  - Weight `600` uppercase nav and metadata labels with `0.025em` tracking.
- **Primary CTA**: Filled Electric Iris (`#8052ff`) pill button (`22.5px` border-radius).
- **Chromatic Tension**: Saffron Spark (`#ffb829`) and Deep Verdant (`#15846e`) accents.
- **Hero Centerpiece**: Procedural canvas particle constellation forming an organic brain/neural shape of thousands of multicolored triangular glyphs with interactive mouse parallax.

---

## ✦ Case Studies Included

1. **LOGI Yatra** (`/project/logi-yatra`)
   - *Category*: Brand Identity & Logo Design / Digital Fleet
   - *Original Assets*: Application squircle icon (`Frame 38.png`) & horizontal presentation (`LogiyatraLogo.png`).
   - *Highlights*: Bilingual Latin ("LOGI") & Devanagari ("यात्रा") balance with integrated express cargo vehicle.
2. **HIRA अतिथि** (`/project/hira-atithi`)
   - *Category*: Brand Identity & Cultural Hospitality
   - *Original Asset*: Master artwork (`visitorurl.png`).
   - *Highlights*: Reverent Anjali Mudra (praying hands), radiant golden halo, and red horizon connecting Latin and Devanagari.
3. **FIXNIX** (`/project/fixnix`)
   - *Category*: Digital Product Identity & Mobile Application Graphics
   - *Original Assets*: Dark mode logo (`logo-for-dark.png`), light mode logo (`logo-for-light.png`), and mobile splash screen (`fixnix_splash_screen.png`).
   - *Highlights*: Surface adaptability toggle, twin emerald status diodes on 'I' letterforms, and repeating watermark pattern.
4. **Bhawani Moulders** (`/project/bhawani-moulders`)
   - *Category*: Corporate Branding & Editorial Publication
   - *Original Asset*: Multi-panel master brochure (`Group 209.png`, 4960 × 10521 px).
   - *Highlights*: Interactive 3-panel editorial reader (Cover, Products, Fabrication & Quality Compliance), 30° diagonal architecture, and realistic tri-fold mockups.
5. **Kalpavraksh** (`/project/kalpavraksh`)
   - *Category*: Festive Promotional Campaign & Cultural Craft
   - *Original Asset*: Complete Diwali flyer (`sample!.png`, 1545 × 2000 px).
   - *Highlights*: Uncropped high-res inspection, corner floral rangoli mandalas, hanging marigold diya garlands, and luxury gift mockups.

---

## ✦ Features & Automation Engine

- **High-Res Lightbox Inspector**: Multi-level zoom (1x to 3.5x), smooth mouse pan/drag, pixel-accurate inspection, and direct download of original artwork.
- **Color Architecture**: Extracted HEX codes, contrast ratios, and one-click copy-to-clipboard.
- **Typographic Taxonomy**: Letterform geometry breakdown with identified fonts and verified web substitutes.
- **Asset Ingestion Pipeline Modal**: Interactive 6-phase demonstration of how raw assets are audited, categorized, clustered, and structured for future uploads.
- **Static Site Generation (SSG)**: All routes pre-rendered statically for sub-second global delivery.

---

## ✦ Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Local Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Build for Production
```bash
npm run build
npm run start
```

---

## ✦ Deploying to Vercel (1-Click Ready)

This repository is pre-configured for instant zero-configuration deployment to [Vercel](https://vercel.com):

1. Initialize Git and commit:
```bash
git add .
git commit -m "feat: complete graphic design portfolio presentation system"
```
2. Push to your GitHub / GitLab / Bitbucket repository:
```bash
git remote add origin https://github.com/<your-username>/<repo-name>.git
git branch -M main
git push -u origin main
```
3. In **Vercel Dashboard**:
   - Click **"Add New Project"**
   - Import your repository
   - Framework Preset: **Next.js** (automatically detected)
   - Click **Deploy**

---

## ✦ Directory Structure

```
├── assets/                  # Original raw design assets (untouched)
├── public/assets/           # Publicly served original & optimized assets
├── src/
│   ├── app/
│   │   ├── globals.css      # Dala design system tokens & custom utilities
│   │   ├── layout.tsx       # Root layout with fonts, viewport & metadata
│   │   ├── page.tsx         # Portfolio homepage with hero constellation & selected works
│   │   └── project/[slug]/  # Pre-rendered static case study routes
│   ├── components/
│   │   ├── ConstellationCanvas.tsx  # Brain-shape particle cloud hero visual
│   │   ├── AmbientParticles.tsx     # Ambient drifting triangular particles
│   │   ├── Navbar.tsx               # Minimalist transparent header with violet pill CTA
│   │   ├── Footer.tsx               # Monolithic typography footer
│   │   ├── ProjectCard.tsx          # Floating 24px-radius artwork card
│   │   ├── ProjectDetailView.tsx    # Rich project presentation layout
│   │   ├── ImageLightbox.tsx        # Pan/zoom high-res inspection HUD
│   │   ├── ColorPaletteViewer.tsx   # Interactive color swatch copy tool
│   │   ├── TypographyViewer.tsx     # Type specimen & font pairing inspector
│   │   ├── MockupDevice.tsx         # Realistic supporting application mockups
│   │   └── AssetAnalysisModal.tsx   # 6-phase automated pipeline inspector
│   └── data/
│       └── projects.ts              # Verified project definitions, tokens & assets
├── DESIGN.md                # Strict design system source of truth (untouched)
├── .gitignore               # Complete Vercel & Next.js ignore rules
├── package.json
└── tailwind.config.js
```
