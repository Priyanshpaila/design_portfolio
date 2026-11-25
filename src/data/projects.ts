export interface ColorToken {
  name: string;
  hex: string;
  role: string;
  contrastOnDark?: string;
}

export interface TypographySpec {
  role: string;
  family: string;
  sampleText: string;
  notes: string;
  recommendedAlternative?: string;
  weight?: string;
  tracking?: string;
}

export interface ProjectAsset {
  id: string;
  title: string;
  originalFileName: string;
  url: string;
  type: string;
  aspectRatio: string;
  dimensions: string;
  caption: string;
  description?: string;
  transparentBackground?: boolean;
}

export interface MoodBoardTile {
  type: "image" | "color-swatch" | "type-specimen" | "quote" | "detail" | "presentation";
  title: string;
  subtitle?: string;
  image?: string;
  color?: string;
  textColor?: string;
  colSpan?: string; // e.g. "col-span-12 lg:col-span-8"
  aspect?: string;
  description?: string;
}

export interface ProjectData {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  category: string;
  categories: string[];
  disciplines: string[];
  summary: string;
  coverImage: string;
  visualPersonality: string;
  statement: string;
  
  // Mood Board configuration
  moodBoard: {
    heroQuote: string;
    tiles: MoodBoardTile[];
  };

  // Original Assets for High-Res Lightbox
  assets: ProjectAsset[];

  // Palette & Typography for visual presentation
  colors: ColorToken[];
  typography: TypographySpec[];

  // Concept & Motifs
  motifs: { title: string; description: string }[];

  nextSlug?: string;
  prevSlug?: string;
}

export const PROJECTS: ProjectData[] = [
  {
    id: "project-01",
    slug: "logi-yatra",
    title: "LOGI Yatra",
    subtitle: "Bilingual Identity & Transport Symbolism",
    category: "Brand Identity / Logo Design",
    categories: ["Brand Identity", "Logo Design"],
    disciplines: ["Visual Identity", "Bilingual Typography", "Iconography", "Symbol Design"],
    summary: "A bilingual visual identity combining typography and transportation-inspired symbolism to create a distinctive brand mark.",
    coverImage: "/assets/logiyatra_horizontal.png",
    visualPersonality: "Dynamic, rapid, industrial, dependable",
    statement: "Created to unite Latin and Devanagari typographic scripts into a unified visual identity. The continuous horizontal headline stroke of 'यात्रा' is repurposed as a roadway supporting the express delivery truck, symbolizing seamless cross-country movement.",
    moodBoard: {
      heroQuote: "Bridging Latin and Devanagari through kinetic transport symbolism.",
      tiles: [
        {
          type: "presentation",
          title: "Primary Horizontal Brand Mark",
          subtitle: "Master Composition on Black Void",
          image: "/assets/logiyatra_horizontal.png",
          colSpan: "col-span-12 lg:col-span-8",
          aspect: "aspect-[16/9] sm:aspect-[21/9]",
          description: "High-contrast Signal Red and pure white lettering balanced with an integrated cargo truck icon."
        },
        {
          type: "image",
          title: "Application Squircle Mark",
          subtitle: "Digital Icon (Frame 38.png)",
          image: "/assets/logiyatra_icon.png",
          colSpan: "col-span-12 sm:col-span-6 lg:col-span-4",
          aspect: "aspect-square",
          description: "Stacked composition with red 'LOGI' resting upon the shared Devanagari shirorekha bar."
        },
        {
          type: "color-swatch",
          title: "Signal Cargo Red",
          subtitle: "#CC181E • Primary Brand Accent",
          color: "#CC181E",
          textColor: "#FFFFFF",
          colSpan: "col-span-12 sm:col-span-6 lg:col-span-4",
          aspect: "aspect-[4/3]",
          description: "A high-visibility chromatic red engineered for legibility at speed and distance."
        },
        {
          type: "type-specimen",
          title: "Bilingual Letterform Harmony",
          subtitle: "Latin Bold Sans & Structural Devanagari",
          colSpan: "col-span-12 lg:col-span-8",
          aspect: "aspect-[16/9]",
          description: "A nested 'O' inside the initial 'L' balances spatial rhythm alongside the broader Devanagari glyphs."
        },
        {
          type: "detail",
          title: "Fleet & Waybill Application",
          subtitle: "Physical Touchpoint Implementation",
          image: "/assets/logiyatra_horizontal.png",
          colSpan: "col-span-12",
          aspect: "aspect-[21/8]",
          description: "High-contrast placement across commercial fleet vehicle panels and dispatch paperwork."
        }
      ]
    },
    assets: [
      {
        id: "asset-ly-1",
        title: "Primary Horizontal Logo Presentation",
        originalFileName: "LogiyatraLogo.png",
        url: "/assets/logiyatra_horizontal.png",
        type: "Master Artwork",
        aspectRatio: "500/536",
        dimensions: "500 × 536 px",
        caption: "Master horizontal composition with red 'LOGI' and white 'यात्रा' + delivery truck."
      },
      {
        id: "asset-ly-2",
        title: "Squircle Application Icon",
        originalFileName: "Frame 38.png",
        url: "/assets/logiyatra_icon.png",
        type: "Icon Specimen",
        aspectRatio: "1/1",
        dimensions: "180 × 180 px",
        caption: "Stacked squircle icon format with bold color contrast on dark canvas."
      }
    ],
    colors: [
      { name: "Signal Cargo Red", hex: "#CC181E", role: "Primary Brand Accent & Latin Mark" },
      { name: "Bone White", hex: "#FFFFFF", role: "Devanagari Headline & Vehicle Graphic" },
      { name: "Obsidian Field", hex: "#141414", role: "Base Canvas Field" },
      { name: "Silver Ash", hex: "#9A9A9A", role: "Supporting Typographic Hierarchy" }
    ],
    typography: [
      {
        role: "Primary Latin Mark",
        family: "Custom Geometric Grotesque",
        sampleText: "LOGI",
        notes: "Heavy capital lettering with lowered 'O' geometry nested inside the 'L' stem."
      },
      {
        role: "Devanagari Headline",
        family: "Structural Devanagari Headline",
        sampleText: "यात्रा",
        notes: "Solid continuous top shirorekha bar functioning as the visual highway for the cargo vehicle."
      }
    ],
    motifs: [
      {
        title: "The Shirorekha Highway",
        description: "The top continuous horizontal bar of Devanagari script acts as the road upon which the delivery vehicle moves."
      },
      {
        title: "Speed Stream Whiskers",
        description: "Triple horizontal motion cuts denotative of velocity, express delivery, and fluid logistics."
      },
      {
        title: "Letterform Nesting",
        description: "The Latin 'O' sits neatly within the opening 'L' to establish an even typographic bounding box."
      }
    ],
    nextSlug: "hira-atithi",
    prevSlug: "cansa-square-independence"
  },
  {
    id: "project-02",
    slug: "hira-atithi",
    title: "HIRA अतिथि",
    subtitle: "Devotional Symbolism & Expressive Typography",
    category: "Logo Design / Visual Identity",
    categories: ["Brand Identity", "Logo Design"],
    disciplines: ["Symbol Construction", "Devotional Illustration", "Bilingual Branding", "Cultural Hospitality"],
    summary: "An illustrative identity built around devotional symbolism, expressive typography and a distinctive visual composition.",
    coverImage: "/assets/hira_atithi_logo.png",
    visualPersonality: "Welcoming, spiritual, dignified, authentic",
    statement: "Grounded in traditional Indian hospitality, the identity unites reverent folded hands (Anjali Mudra) with an illuminated golden halo disc. A dynamic crimson horizon stroke sweeps beneath the Latin wordmark, connecting it directly to traditional Devanagari lettering.",
    moodBoard: {
      heroQuote: "Cultural reverence expressed through sacred mudra illustration and golden radiance.",
      tiles: [
        {
          type: "presentation",
          title: "Master Horizontal Identity Artwork",
          subtitle: "Illuminated Sacred Symbol & Bilingual Typography",
          image: "/assets/hira_atithi_logo.png",
          colSpan: "col-span-12 lg:col-span-8",
          aspect: "aspect-[16/9] sm:aspect-[21/9]",
          description: "Full master composition on pure black void with radiant golden halo and jade bangle accents."
        },
        {
          type: "color-swatch",
          title: "Radiant Halo Gold",
          subtitle: "#F5CF78 • Sanctum Illumination",
          color: "#F5CF78",
          textColor: "#111111",
          colSpan: "col-span-12 sm:col-span-6 lg:col-span-4",
          aspect: "aspect-square",
          description: "Soft sunrise golden hue symbolizing dawn light and traditional welcoming warmth."
        },
        {
          type: "type-specimen",
          title: "Bilingual Typographic Composition",
          subtitle: "Latin 'HIRA' + Devanagari 'अतिथि'",
          colSpan: "col-span-12 sm:col-span-6 lg:col-span-4",
          aspect: "aspect-[4/3]",
          description: "Bold Latin capitals cut through with a red crescent arc, anchored by traditional Devanagari script."
        },
        {
          type: "color-swatch",
          title: "Sacred Kumkum Red",
          subtitle: "#E51A24 • Horizon Accent",
          color: "#E51A24",
          textColor: "#FFFFFF",
          colSpan: "col-span-12 sm:col-span-6 lg:col-span-4",
          aspect: "aspect-[4/3]",
          description: "The sweeping red horizon stroke connecting Latin and Devanagari traditions."
        },
        {
          type: "color-swatch",
          title: "Temple Jade Teal",
          subtitle: "#48CFAD • Bangle Ornamentation",
          color: "#48CFAD",
          textColor: "#111111",
          colSpan: "col-span-12 sm:col-span-6 lg:col-span-4",
          aspect: "aspect-[4/3]",
          description: "Traditional colored bangles signifying cultural authenticity and feminine grace."
        }
      ]
    },
    assets: [
      {
        id: "asset-ha-1",
        title: "Master Identity Artwork",
        originalFileName: "visitorurl.png",
        url: "/assets/hira_atithi_logo.png",
        type: "Master Composition",
        aspectRatio: "1607/704",
        dimensions: "1607 × 704 px",
        caption: "Original master identity artwork with halo-illuminated folded hands and bilingual lockup."
      }
    ],
    colors: [
      { name: "Radiant Halo Gold", hex: "#F5CF78", role: "Illuminated Sun Disc & Spiritual Aura" },
      { name: "Sacred Kumkum Red", hex: "#E51A24", role: "Dynamic Horizon Stroke & Energy Accent" },
      { name: "Temple Jade Teal", hex: "#48CFAD", role: "Ornamental Bangle Detailing" },
      { name: "Pure Bone White", hex: "#FFFFFF", role: "Typographic Wordmarks (HIRA & अतिथि)" }
    ],
    typography: [
      {
        role: "Primary Latin Wordmark",
        family: "High-Contrast Structural Sans",
        sampleText: "HIRA",
        notes: "Monolithic capital letters with an angular right stem dynamic on 'A'."
      },
      {
        role: "Devanagari Heritage Mark",
        family: "Humanist Devanagari Display",
        sampleText: "अतिथि",
        notes: "Solid, grounded letterforms honoring centuries of Indian hospitality traditions."
      }
    ],
    motifs: [
      {
        title: "The Anjali Mudra (Folded Hands)",
        description: "Universal gesture of respect, welcoming hospitality, and peaceful greeting."
      },
      {
        title: "The Luminous Sun Disc",
        description: "Radiating halo contour evoking sanctum warmth and dawn illumination."
      },
      {
        title: "The Horizon Arc",
        description: "Dynamic curved red line serving as an energetic bridge between two linguistic scripts."
      }
    ],
    nextSlug: "fixnix",
    prevSlug: "logi-yatra"
  },
  {
    id: "project-03",
    slug: "fixnix",
    title: "FIXNIX",
    subtitle: "High-Contrast Typography & Digital Splash Screen",
    category: "Logo Design / Digital Branding",
    categories: ["Logo Design", "Digital Branding"],
    disciplines: ["Identity Design", "Digital Branding", "Surface Adaptability", "Pattern Design"],
    summary: "A visual identity developed through bold typography, contrasting logo variations and a distinctive digital splash screen.",
    coverImage: "/assets/fixnix_splash.png",
    visualPersonality: "Sharp, agile, technical, modern",
    statement: "Engineered around extreme surface adaptability. The identity features bold geometric typography punctuated by electric emerald dot accents on both 'I' letterforms, paired with a full mobile splash screen carrying an isometric watermark pattern.",
    moodBoard: {
      heroQuote: "Architectural letterforms balancing dark and light surfaces through vibrant emerald accents.",
      tiles: [
        {
          type: "presentation",
          title: "Mobile Splash Screen Composition",
          subtitle: "Emerald Surface & Repeating Outline Watermark (390 × 844 px)",
          image: "/assets/fixnix_splash.png",
          colSpan: "col-span-12 lg:col-span-5",
          aspect: "aspect-[390/844]",
          description: "Full-bleed emerald canvas with diagonal watermark pattern of the FIXNIX outline wordmark."
        },
        {
          type: "image",
          title: "Dark Surface Logo Variation",
          subtitle: "White Letterforms with Emerald Diodes (logo-for-dark.png)",
          image: "/assets/fixnix_logo_dark.png",
          colSpan: "col-span-12 lg:col-span-7",
          aspect: "aspect-[16/7]",
          description: "Engineered for dark mode UI environments with pure white stems and saturated green accents."
        },
        {
          type: "image",
          title: "Light Surface Logo Variation",
          subtitle: "Black Letterforms with Emerald Diodes (logo-for-light.png)",
          image: "/assets/fixnix_logo_light.png",
          colSpan: "col-span-12 lg:col-span-7",
          aspect: "aspect-[16/7]",
          description: "Inverted variation for light collateral and stationery with maximum black ink contrast."
        },
        {
          type: "color-swatch",
          title: "Electric Emerald",
          subtitle: "#00C066 • Signature Dot Accent",
          color: "#00C066",
          textColor: "#111111",
          colSpan: "col-span-12 sm:col-span-6 lg:col-span-6",
          aspect: "aspect-[16/9]",
          description: "A luminous digital green evoking affirmative status and active software performance."
        },
        {
          type: "type-specimen",
          title: "Symmetrical Glyphs",
          subtitle: "F-I-X / N-I-X Balance",
          colSpan: "col-span-12 sm:col-span-6 lg:col-span-6",
          aspect: "aspect-[16/9]",
          description: "Twin 'I's serve as focal status pins between alternating uprights and diagonal 'X' strokes."
        }
      ]
    },
    assets: [
      {
        id: "asset-fn-1",
        title: "Mobile Splash Screen",
        originalFileName: "fixnix_splash_screen.png",
        url: "/assets/fixnix_splash.png",
        type: "Digital Splash",
        aspectRatio: "390/844",
        dimensions: "390 × 844 px",
        caption: "Emerald mobile splash screen with repeating outline pattern and center mark."
      },
      {
        id: "asset-fn-2",
        title: "Dark Surface Logo",
        originalFileName: "logo-for-dark.png",
        url: "/assets/fixnix_logo_dark.png",
        type: "Logo Variation",
        aspectRatio: "673/182",
        dimensions: "673 × 182 px",
        caption: "White letterforms with emerald circular accents for dark canvas presentation."
      },
      {
        id: "asset-fn-3",
        title: "Light Surface Logo",
        originalFileName: "logo-for-light.png",
        url: "/assets/fixnix_logo_light.png",
        type: "Logo Variation",
        aspectRatio: "673/185",
        dimensions: "673 × 185 px",
        caption: "Solid black letterforms with identical emerald accents for light backgrounds."
      }
    ],
    colors: [
      { name: "Electric Emerald", hex: "#00C066", role: "Signature Accent & Splash Field" },
      { name: "Deep Obsidian", hex: "#121212", role: "Primary Text on Light Canvas" },
      { name: "Pure Bone White", hex: "#FFFFFF", role: "Primary Text on Dark Mode Canvas" },
      { name: "Pattern Shadow", hex: "#009D53", role: "Subtle Watermark Texture Lines" }
    ],
    typography: [
      {
        role: "Primary Geometric Logotype",
        family: "Modified Geometric Grotesque",
        sampleText: "F İ X N İ X",
        notes: "All-caps industrial grotesque sans-serif with circular dot accents on both 'I' letters."
      }
    ],
    motifs: [
      {
        title: "Twin Status Diodes",
        description: "The emerald dots on both 'I' glyphs evoke active precision, calibration, and affirmative status."
      },
      {
        title: "Letterform Symmetry",
        description: "F-I-X and N-I-X mirror one another with alternating vertical and diagonal lines."
      },
      {
        title: "Watermark Tessellation",
        description: "Repeating geometric pattern creates depth and texture across digital launch surfaces."
      }
    ],
    nextSlug: "bhawani-moulders",
    prevSlug: "hira-atithi"
  },
  {
    id: "project-04",
    slug: "bhawani-moulders",
    title: "Bhawani Moulders",
    subtitle: "Corporate Communication & Industrial Editorial Architecture",
    category: "Corporate Communication / Brochure Design",
    categories: ["Corporate Design", "Brochure & Editorial Design"],
    disciplines: ["Brochure Design", "Editorial Layout", "Information Architecture", "Photography Direction", "Print Production"],
    summary: "A corporate brochure design bringing together industrial imagery, structured information and a consistent visual language.",
    coverImage: "/assets/bhawani_panel_1_cover.png",
    visualPersonality: "Robust, precise, structured, authoritative",
    statement: "Designed for Bhawani Moulders Pvt. Ltd. ('Precision in every angle'), this multi-panel corporate brochure translates heavy structural steel manufacturing into an orderly, modern publication. Dynamic 30-degree diagonal cuts echo the precision angles of steel crossbeams and structural trusses.",
    moodBoard: {
      heroQuote: "Translating heavy structural steel manufacturing into an orderly, architectural publication.",
      tiles: [
        {
          type: "presentation",
          title: "Full Continuous Master Publication",
          subtitle: "All 3 Editorial Panels (4960 × 10521 px)",
          image: "/assets/bhawani_full_web.png",
          colSpan: "col-span-12 lg:col-span-6",
          aspect: "aspect-[4960/10521] max-h-[750px]",
          description: "Complete master artwork showcasing cover, products catalog, and services workflow."
        },
        {
          type: "presentation",
          title: "Panel 01: Executive Cover & Profile",
          subtitle: "Hexagonal Monogram & Contact QR Code",
          image: "/assets/bhawani_panel_1_cover.png",
          colSpan: "col-span-12 lg:col-span-6",
          aspect: "aspect-[4960/3600]",
          description: "Cover spread featuring steel beam photography, diagonal dividers, and corporate contact lockup."
        },
        {
          type: "presentation",
          title: "Panel 02: Structural Steel Catalog",
          subtitle: "Angles, Channels & Technical Specifications",
          image: "/assets/bhawani_panel_2_products.png",
          colSpan: "col-span-12 sm:col-span-6 lg:col-span-6",
          aspect: "aspect-[4960/3400]",
          description: "Structured technical cataloging for structural steel sections and long products."
        },
        {
          type: "presentation",
          title: "Panel 03: Fabrication & Quality",
          subtitle: "Workshop Photography & Compliance Standards",
          image: "/assets/bhawani_panel_3_services.png",
          colSpan: "col-span-12 sm:col-span-6 lg:col-span-6",
          aspect: "aspect-[4960/3521]",
          description: "Industrial workshop photography framed with dynamic angular color planes."
        },
        {
          type: "color-swatch",
          title: "Corporate Industrial Navy",
          subtitle: "#2D3691 • Primary Corporate Structural Color",
          color: "#2D3691",
          textColor: "#FFFFFF",
          colSpan: "col-span-12 sm:col-span-6 lg:col-span-6",
          aspect: "aspect-[16/9]",
          description: "An authoritative industrial blue delivering corporate trust and structural order."
        },
        {
          type: "color-swatch",
          title: "Precision Signal Red",
          subtitle: "#E51E25 • Kinetic Monogram & Keyword Accent",
          color: "#E51E25",
          textColor: "#FFFFFF",
          colSpan: "col-span-12 sm:col-span-6 lg:col-span-6",
          aspect: "aspect-[16/9]",
          description: "Dynamic contrast red highlighting focus keywords, bullets, and the 'B' monogram."
        }
      ]
    },
    assets: [
      {
        id: "asset-bm-full",
        title: "Full Master Publication",
        originalFileName: "Group 209.png",
        url: "/assets/bhawani_full_web.png",
        type: "Full Brochure",
        aspectRatio: "4960/10521",
        dimensions: "4960 × 10521 px",
        caption: "Continuous master corporate brochure containing all 3 editorial sections."
      },
      {
        id: "asset-bm-p1",
        title: "Panel 01: Cover & Corporate Overview",
        originalFileName: "Group 209 (Panel 1)",
        url: "/assets/bhawani_panel_1_cover.png",
        type: "Cover Spread",
        aspectRatio: "4960/3600",
        dimensions: "4960 × 3600 px",
        caption: "Corporate cover with hexagonal monogram, steel photography, and contact QR code."
      },
      {
        id: "asset-bm-p2",
        title: "Panel 02: Structural Steel Catalog",
        originalFileName: "Group 209 (Panel 2)",
        url: "/assets/bhawani_panel_2_products.png",
        type: "Product Catalog",
        aspectRatio: "4960/3400",
        dimensions: "4960 × 3400 px",
        caption: "Structural steel, angles, channels, and long products technical breakdown."
      },
      {
        id: "asset-bm-p3",
        title: "Panel 03: Services & Compliance",
        originalFileName: "Group 209 (Panel 3)",
        url: "/assets/bhawani_panel_3_services.png",
        type: "Services Spread",
        aspectRatio: "4960/3521",
        dimensions: "4960 × 3521 px",
        caption: "Fabrication services, quality assurance workflow, and workshop photography."
      }
    ],
    colors: [
      { name: "Corporate Industrial Navy", hex: "#2D3691", role: "Primary Structural Color & Section Headers" },
      { name: "Precision Signal Red", hex: "#E51E25", role: "Monogram Accent, Keywords & Bullets" },
      { name: "Clean Structural White", hex: "#FFFFFF", role: "Page Canvas Background" },
      { name: "Steel Alloy Tint", hex: "#E4E5F1", role: "Subtle Table Dividers & Technical Rules" }
    ],
    typography: [
      {
        role: "Corporate Headings",
        family: "Industrial Sans Grotesque",
        sampleText: "BHAWANI Moulders Pvt Ltd",
        notes: "Heavy bold all-caps headlines featuring dual-color emphasis (Red & Navy) for quick visual scanning."
      },
      {
        role: "Technical Body & Bullet Specs",
        family: "Corporate Information Sans",
        sampleText: "Precision steel sections with dependable supply for fabrication and projects.",
        notes: "Clean neutral body typography paired with square color-coded bullet markers."
      }
    ],
    motifs: [
      {
        title: "30-Degree Dynamic Diagonals",
        description: "Section boundaries cut across dynamic 30° angles, mirroring the precision lines of structural steel beams."
      },
      {
        title: "Industrial Photography Treatment",
        description: "Raw photography of warehouse stock, fabrication workers, and metal sparks framed within geometric angular masks."
      },
      {
        title: "Dual-Hue Emphasis Rhythm",
        description: "Navy and red planes balance one another: navy establishes corporate weight while red guides reading priority."
      }
    ],
    nextSlug: "kalpavraksh",
    prevSlug: "fixnix"
  },
  {
    id: "project-05",
    slug: "kalpavraksh",
    title: "Kalpavraksh",
    subtitle: "Festive Promotional Composition & Traditional Craft",
    category: "Promotional Design / Festival Creative",
    categories: ["Promotional Design", "Festival Creative"],
    disciplines: ["Festival Creative", "Traditional Motifs", "Decorative Framing", "Typographic Craft", "Print Campaign"],
    summary: "A festive promotional composition combining traditional decorative elements, expressive typography and a vibrant visual palette.",
    coverImage: "/assets/kalpavraksh_diwali_flyer.png",
    visualPersonality: "Auspicious, joyful, handcrafted, celebratory",
    statement: "Created for 'Kalpvraksh By Kalpa Dani' on the occasion of Diwali. The artwork balances traditional Indian decorative arts—including intricate floral rangoli corner mandalas, suspended marigold garlands with clay diya lanterns, and a lotus foundation—with lyrical display serif typography.",
    moodBoard: {
      heroQuote: "Illuminating celebration through traditional Indian ornamentation and festive typography.",
      tiles: [
        {
          type: "presentation",
          title: "Complete Festival Creative Artwork",
          subtitle: "Master High-Resolution Composition (1545 × 2000 px)",
          image: "/assets/kalpavraksh_diwali_flyer.png",
          colSpan: "col-span-12 lg:col-span-7",
          aspect: "aspect-[1545/2000] max-h-[750px]",
          description: "Full uncropped artwork showing corner floral arches, marigold garlands, and lotus diya base."
        },
        {
          type: "type-specimen",
          title: "Celebratory Headline Craft",
          subtitle: "Lyrical Display Serif 'Diwali' with Swash",
          colSpan: "col-span-12 lg:col-span-5",
          aspect: "aspect-square",
          description: "High-contrast serif typography with an expressive looping capital 'D' swash anchoring the composition."
        },
        {
          type: "color-swatch",
          title: "Midnight Festive Navy",
          subtitle: "#1B365D • Primary Headline & Floral Petals",
          color: "#1B365D",
          textColor: "#FFFFFF",
          colSpan: "col-span-12 sm:col-span-4 lg:col-span-4",
          aspect: "aspect-[4/3]",
          description: "Deep regal navy providing dignity and grounding the vibrant warm festive colors."
        },
        {
          type: "color-swatch",
          title: "Saffron Marigold Gold",
          subtitle: "#FFB829 • Garland Beads & Diya Glow",
          color: "#FFB829",
          textColor: "#111111",
          colSpan: "col-span-12 sm:col-span-4 lg:col-span-4",
          aspect: "aspect-[4/3]",
          description: "Radiant golden yellow evoking sacred marigolds and glowing brass lanterns."
        },
        {
          type: "color-swatch",
          title: "Auspicious Diya Flame",
          subtitle: "#E65100 • Burning Wick Accent",
          color: "#E65100",
          textColor: "#FFFFFF",
          colSpan: "col-span-12 sm:col-span-4 lg:col-span-4",
          aspect: "aspect-[4/3]",
          description: "Rich flame gradient capturing the warmth of traditional clay oil lamps."
        }
      ]
    },
    assets: [
      {
        id: "asset-kp-1",
        title: "Master Diwali Campaign Flyer",
        originalFileName: "sample!.png",
        url: "/assets/kalpavraksh_diwali_flyer.png",
        type: "Master Artwork",
        aspectRatio: "1545/2000",
        dimensions: "1545 × 2000 px",
        caption: "Original uncropped festival promotional artwork with ornate borders and central greeting."
      }
    ],
    colors: [
      { name: "Midnight Festive Navy", hex: "#1B365D", role: "Primary Headline & Floral Petal Fills" },
      { name: "Saffron Marigold Gold", hex: "#FFB829", role: "Garland Beads, Lantern Glow & Lotus Accents" },
      { name: "Auspicious Diya Flame", hex: "#E65100", role: "Flame Teardrops & Petal Accents" },
      { name: "Warm Ivory Cream", hex: "#FFFFFA", role: "Greeting Card Background Field" }
    ],
    typography: [
      {
        role: "Festive Display Headline",
        family: "Lyrical High-Contrast Display Serif",
        sampleText: "Diwali",
        notes: "Expressive display serif with dramatic looping capital 'D' swash."
      },
      {
        role: "Greeting Prefix & Verse",
        family: "Wide Geometric Sans & Sturdy Slab",
        sampleText: "HAPPY / May the lights of Diwali illuminate every corner of your life...",
        notes: "Wide-tracked clean uppercase sans paired with clear contact footer hierarchy."
      }
    ],
    motifs: [
      {
        title: "Symmetrical Rangoli Corner Arches",
        description: "Intricate floral mandalas in navy, turquoise, and gold ground the upper corners with festive geometry."
      },
      {
        title: "Suspended Marigold Garlands",
        description: "Beaded vertical flower strings suspending brass diya lanterns to create architectural celebration height."
      },
      {
        title: "Base Lotus Foundation",
        description: "Symmetrical burning clay oil lamps resting upon blooming lotus petals along the footer."
      }
    ],
    nextSlug: "grid-gaming-thumbnails",
    prevSlug: "bhawani-moulders"
  },
  {
    id: "project-06",
    slug: "grid-gaming-thumbnails",
    title: "GRID — YouTube Thumbnails",
    subtitle: "High-Impact Creator Graphics & Stream Packaging",
    category: "Digital Branding / YouTube Thumbnails",
    categories: ["Digital Branding", "YouTube Thumbnails", "Promotional Design"],
    disciplines: ["YouTube Thumbnail Design", "Digital Illustration", "Visual Storytelling", "Stream Packaging"],
    summary: "A dynamic suite of YouTube gaming thumbnails engineered for high click-through engagement, featuring stylized anime character integration, kinetic energy effects, and high-contrast typography.",
    coverImage: "/assets/youtube_thumbnail_grid_fun_night.jpg",
    visualPersonality: "Kinetic, cybernetic, energetic, bold, high-voltage",
    statement: "Designed for competitive gaming content and live broadcasts. Each thumbnail combines cinematic character posing with intense atmospheric lighting, custom texturing, neon grid backdrops, and bold monolithic typography designed to stand out at small mobile scales.",
    moodBoard: {
      heroQuote: "Visual intensity engineered for rapid viewer capture and unmistakable streaming identity.",
      tiles: [
        {
          type: "presentation",
          title: "GRID Fun Night — Master Thumbnail",
          subtitle: "Jett Knife Throw & Neon Grid (1920×1080)",
          image: "/assets/youtube_thumbnail_grid_fun_night.jpg",
          colSpan: "col-span-12 lg:col-span-8",
          aspect: "aspect-[16/9]",
          description: "High-energy composition featuring dynamic knife perspective, neon grid overlay, and vibrant magenta-purple backlighting."
        },
        {
          type: "presentation",
          title: "GRID Is Live — Broken Glass Cyberpunk",
          subtitle: "Character Shatter Effect (1920×1080)",
          image: "/assets/youtube_thumbnail_grid_is_live.jpg",
          colSpan: "col-span-12 sm:col-span-6 lg:col-span-4",
          aspect: "aspect-[16/9]",
          description: "Multi-layered fractured glass distortion across character gaze with bold metallic title lockup."
        },
        {
          type: "presentation",
          title: "Trolling Noobs — High Energy Live Stream",
          subtitle: "Reaction Framing & Chat Element (1920×1080)",
          image: "/assets/youtube_thumbnail_grid_trolling_noobs.jpg",
          colSpan: "col-span-12 sm:col-span-6 lg:col-span-6",
          aspect: "aspect-[16/9]",
          description: "High-contrast speedlines, glowing cyan energy bursts, and in-game dialogue overlay for viewer curiosity."
        },
        {
          type: "color-swatch",
          title: "Electric Iris Cyber Glow",
          subtitle: "Backlight Accent",
          color: "#8052FF",
          textColor: "#FFFFFF",
          colSpan: "col-span-12 sm:col-span-6 lg:col-span-3",
          aspect: "aspect-[4/3]",
          description: "Signature neon violet aura used to separate foreground characters from dark backgrounds."
        },
        {
          type: "color-swatch",
          title: "Velocity Cyan",
          subtitle: "Speedline Bursts",
          color: "#00E5FF",
          textColor: "#000000",
          colSpan: "col-span-12 sm:col-span-6 lg:col-span-3",
          aspect: "aspect-[4/3]",
          description: "Electrifying blue glow providing chromatic contrast against warm character skin tones."
        },
        {
          type: "type-specimen",
          title: "High-Impact Streaming Display",
          subtitle: "Condensed Italic Slabs & Heavy Sans",
          colSpan: "col-span-12",
          description: "Condensed, italicized, and dimensional display type with strokes and drop-shadows optimized for immediate mobile readability."
        }
      ]
    },
    assets: [
      {
        id: "asset-grid-1",
        title: "GRID Fun Night — YouTube Thumbnail",
        originalFileName: "youtube_thumbnail_grid_fun_night.jpg",
        url: "/assets/youtube_thumbnail_grid_fun_night.jpg",
        type: "Full HD Thumbnail",
        aspectRatio: "16/9",
        dimensions: "1920 × 1080 px",
        caption: "High-energy YouTube thumbnail composition with character knife-throwing perspective and neon grid aesthetic."
      },
      {
        id: "asset-grid-2",
        title: "GRID Is Live — Cyberpunk Thumbnail",
        originalFileName: "youtube_thumbnail_grid_is_live.jpg",
        url: "/assets/youtube_thumbnail_grid_is_live.jpg",
        type: "Full HD Thumbnail",
        aspectRatio: "16/9",
        dimensions: "1920 × 1080 px",
        caption: "Cyberpunk broken glass effect thumbnail with dramatic violet backlighting and metallic title typography."
      },
      {
        id: "asset-grid-3",
        title: "Trolling Noobs — Live Stream Thumbnail",
        originalFileName: "youtube_thumbnail_grid_trolling_noobs.jpg",
        url: "/assets/youtube_thumbnail_grid_trolling_noobs.jpg",
        type: "Full HD Thumbnail",
        aspectRatio: "16/9",
        dimensions: "1920 × 1080 px",
        caption: "Expressive reaction live-stream thumbnail with speedlines, cyan radial burst, and integrated chat element."
      }
    ],
    colors: [
      { name: "Electric Cyber Iris", hex: "#8052FF", role: "Primary Backlight Glow & Atmosphere" },
      { name: "Velocity Cyan", hex: "#00E5FF", role: "Energy Accents, Speedlines & Knife Glow" },
      { name: "Signal Flame Red", hex: "#FF3B30", role: "Callout Badge Fills & Highlight Markers" },
      { name: "Midnight Cyber Void", hex: "#080614", role: "Deep Background Canvas & Shadow Depths" }
    ],
    typography: [
      {
        role: "Primary Stream Headline",
        family: "Heavy Angled Condensed Display",
        sampleText: "GRID IS LIVE / TROLLING NOOBS",
        notes: "Heavy italicized display lettering with thick outline strokes for maximum clarity at 300px thumbnail scale."
      },
      {
        role: "Event Tag & Chat Overlay",
        family: "Clean Geometric Grotesk",
        sampleText: "FUN NIGHT / TODAY (ALL) Harry: Stop Trolling Bro",
        notes: "Crisp rectangular tag with stark white-on-orange contrast."
      }
    ],
    motifs: [
      {
        title: "Dramatic Foreshortened Perspective",
        description: "Dynamic camera angle pushing hands, weapons, and characters directly toward the viewer to break 2D thumbnail flatness."
      },
      {
        title: "Broken Glass & Texture Distortion",
        description: "Realistic fracture overlays slicing across the composition to convey raw intensity and digital disruption."
      },
      {
        title: "Radial Energy & Speedlines",
        description: "High-contrast radial motion bursts radiating from the center to funnel eye focus immediately onto the focal subject."
      }
    ],
    nextSlug: "cansa-square-independence",
    prevSlug: "kalpavraksh"
  },
  {
    id: "project-07",
    slug: "cansa-square-independence",
    title: "Cansa Square — Independence Day",
    subtitle: "Community Invitation Poster & Cultural Print Creative",
    category: "Festival Creative / Promotional Design",
    categories: ["Festival Creative", "Promotional Design", "Print Communication"],
    disciplines: ["Poster Design", "Print Communication", "Event Invitation", "Typographic Layout"],
    summary: "An official Independence Day event invitation poster crafted for Cansa Square Residents, celebrating the national flag hoisting with vibrant tricolour ribbons, heritage monument silhouettes, and clear ceremonial hierarchy.",
    coverImage: "/assets/cansa_square_independence_poster.jpg",
    visualPersonality: "Patriotic, celebratory, welcoming, dignified, vibrant",
    statement: "Created for the annual 15 August community flag-hoisting gathering. The design orchestrates the Indian tricolour through waving ribbons and rising banners, anchored by hands hoisting the national flag against the historic Red Fort silhouette with warm celebratory fireworks.",
    moodBoard: {
      heroQuote: "Uniting community celebration through tricolour harmony and architectural pride.",
      tiles: [
        {
          type: "presentation",
          title: "Full Commemorative Invitation Poster",
          subtitle: "Master Print Layout (1414×2000)",
          image: "/assets/cansa_square_independence_poster.jpg",
          colSpan: "col-span-12 lg:col-span-8",
          aspect: "aspect-[1414/2000] sm:aspect-[3/4]",
          description: "Complete vertical composition showcasing festive fireworks, Red Fort heritage silhouette, and patriotic community hands."
        },
        {
          type: "color-swatch",
          title: "India Saffron",
          subtitle: "Top Band & Celebration Badge",
          color: "#FF9933",
          textColor: "#000000",
          colSpan: "col-span-12 sm:col-span-6 lg:col-span-4",
          aspect: "aspect-square",
          description: "Vibrant national saffron symbolizing strength, courage, and festive optimism."
        },
        {
          type: "color-swatch",
          title: "India Green",
          subtitle: "Primary Headline Stroke",
          color: "#138808",
          textColor: "#FFFFFF",
          colSpan: "col-span-12 sm:col-span-6 lg:col-span-4",
          aspect: "aspect-square",
          description: "Rich verdant green representing growth, prosperity, and auspicious festivity."
        },
        {
          type: "color-swatch",
          title: "Ashoka Navy",
          subtitle: "Ceremonial Typography",
          color: "#000080",
          textColor: "#FFFFFF",
          colSpan: "col-span-12 sm:col-span-6 lg:col-span-4",
          aspect: "aspect-square",
          description: "Stately navy blue carrying event details with authority and legal heritage."
        },
        {
          type: "type-specimen",
          title: "Ceremonial Serif & Clean Event Sans",
          subtitle: "High-Contrast Commemorative Hierarchy",
          colSpan: "col-span-12 lg:col-span-8",
          description: "Stately bold serif for 'INDIA' commanding respect, paired with geometric sans-serif for program logistics."
        }
      ]
    },
    assets: [
      {
        id: "asset-cansa-1",
        title: "Cansa Square Independence Day Invitation Poster",
        originalFileName: "cansa_square_independence_poster.jpg",
        url: "/assets/cansa_square_independence_poster.jpg",
        type: "Print Poster Artwork",
        aspectRatio: "1414/2000",
        dimensions: "1414 × 2000 px",
        caption: "Original uncropped event invitation poster designed for community notice boards and resident digital messaging."
      }
    ],
    colors: [
      { name: "National Saffron", hex: "#FF9933", role: "Date Badge, Ribbon Tops & Subtitle Accents" },
      { name: "Verdant Green", hex: "#138808", role: "Primary 'INDIA' Headline & Ribbon Underside" },
      { name: "Ashoka Navy", hex: "#000080", role: "Program Timings & Resident Information" },
      { name: "Pure Ivory Cloud", hex: "#FFFFFF", role: "Central Canvas & Ribbon Center Band" }
    ],
    typography: [
      {
        role: "National Display Headline",
        family: "Bold Stately Serif",
        sampleText: "INDIA / INDEPENDENCE DAY",
        notes: "Commanding classical serif celebrating the nation with monumental presence."
      },
      {
        role: "Event Details & Logistics",
        family: "Structured Bold Capital Sans",
        sampleText: "CANSA SQUARE RESIDENTS / FLAG HOISTING AT TERRACE / 11AM / SWEETS DISTRIBUTION",
        notes: "Wide-tracked legible uppercase lettering designed for effortless comprehension by all age groups."
      }
    ],
    motifs: [
      {
        title: "Flowing Tricolour Ribbons",
        description: "Dynamic tricolour bands curving gracefully across the header to frame the composition with festive rhythm."
      },
      {
        title: "Red Fort Architectural Silhouette",
        description: "Soft heritage monument outline grounding the event in authentic historic national legacy."
      },
      {
        title: "Community Flag Hoisting Gesture",
        description: "Diverse hands collectively holding the Tiranga towards the sky, celebrating togetherness and national pride."
      }
    ],
    nextSlug: "logi-yatra",
    prevSlug: "grid-gaming-thumbnails"
  }
];
