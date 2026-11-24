export interface ColorToken {
  name: string;
  hex: string;
  role: string;
  contrastOnDark: string;
}

export interface TypographySpec {
  role: string;
  family: string;
  sourceStyle?: string;
  recommendedAlternative?: string;
  weight: string;
  tracking: string;
  sampleText: string;
  notes: string;
}

export interface ProjectAsset {
  id: string;
  title: string;
  originalFileName: string;
  url: string;
  type: "logo-horizontal" | "logo-dark" | "logo-light" | "app-icon" | "splash-screen" | "brochure-full" | "brochure-panel" | "flyer";
  aspectRatio: string;
  description: string;
  dimensions: string;
  transparentBackground?: boolean;
}

export interface RealWorldApplication {
  title: string;
  type: "mobile-device" | "stationery" | "fleet-signage" | "billboard" | "print-brochure" | "festival-gift" | "social-campaign";
  description: string;
  mockupDetails: {
    accentColor: string;
    secondaryColor: string;
    caption: string;
  };
}

export interface ProjectData {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  clientOrBrand: string;
  category: "Brand Identity & Logo Design" | "Corporate Branding" | "Editorial & Brochure Design" | "Marketing & Advertising Design" | "Campaign & Promotional Design" | "Mobile Application Graphics";
  categories: string[];
  disciplines: string[];
  summary: string;
  coverImage: string;
  visualPersonality: string;
  colorDirection: string;
  typographyDirection: string;
  intendedFormat: string;
  
  // Section 01: Introduction
  introduction: {
    headline: string;
    statement: string;
    keyDeliverables: string[];
    datePlaceholder?: string;
  };

  // Section 02: Assets & Showcase
  assets: ProjectAsset[];

  // Section 03: Color Exploration
  colors: ColorToken[];

  // Section 04: Typography
  typography: TypographySpec[];

  // Section 05: Visual Language
  visualLanguage: {
    motifs: { title: string; description: string }[];
    gridConcept: string;
    compositionStyle: string;
  };

  // Section 06: Brand Applications
  applications: RealWorldApplication[];

  // Extra metadata
  nextSlug?: string;
  prevSlug?: string;
}

export const PROJECTS: ProjectData[] = [
  {
    id: "project-01",
    slug: "logi-yatra",
    title: "LOGI Yatra",
    subtitle: "Dual-Script Transportation & Logistics Identity",
    clientOrBrand: "LOGI Yatra",
    category: "Brand Identity & Logo Design",
    categories: ["Brand Identity & Logo Design", "Mobile Application Graphics"],
    disciplines: ["Logo Composition", "Bilingual Typography", "App Icon Design", "Transportation Symbolism"],
    summary: "A high-visibility logistics brand identity harmonizing Latin uppercase letterforms with Devanagari typography, seamlessly bridging both scripts through an integrated speeding delivery vehicle graphic.",
    coverImage: "/assets/logiyatra_horizontal.png",
    visualPersonality: "Dynamic, rapid, industrial, trustworthy",
    colorDirection: "High-contrast Signal Red (#CC181E) and Bone White on deep black/dark charcoal field",
    typographyDirection: "Bilingual dual-script: bold geometric Latin sans with custom dropped 'O', paired with solid Devanagari headline type",
    intendedFormat: "Mobile app launcher icon, digital fleet platform, commercial vehicle livery, driver interface",
    introduction: {
      headline: "Dual-script motion engineered for modern logistics.",
      statement: "LOGI Yatra operates at the vital intersection of cross-country transport and regional digital accessibility. The identity unites Latin and Devanagari typographic traditions into a unified horizontal mark, driven by an integrated delivery truck silhouette with aerodynamic speed whiskers.",
      keyDeliverables: [
        "Primary Horizontal Logo with integrated vehicle motif",
        "iOS / Android squircle application icon",
        "Bilingual script alignment system (Latin 'LOGI' + Devanagari 'यात्रा')",
        "Commercial vehicle livery & digital interface applications"
      ]
    },
    assets: [
      {
        id: "asset-ly-1",
        title: "Horizontal Logo Master Presentation",
        originalFileName: "LogiyatraLogo.png",
        url: "/assets/logiyatra_horizontal.png",
        type: "logo-horizontal",
        aspectRatio: "500/536",
        dimensions: "500 × 536 px",
        description: "Primary horizontal lockup floating on dark gradient canvas. Features vibrant signal red 'LOGI' paired with crisp white Devanagari 'यात्रा' and moving cargo truck graphic."
      },
      {
        id: "asset-ly-2",
        title: "Mobile Application Icon",
        originalFileName: "Frame 38.png",
        url: "/assets/logiyatra_icon.png",
        type: "app-icon",
        aspectRatio: "1/1",
        dimensions: "180 × 180 px",
        description: "Squircle mobile app icon with stacked composition: Red Latin 'LOGI' with white speeding truck resting on the shared horizontal Devanagari shirorekha of 'यात्रा'."
      }
    ],
    colors: [
      {
        name: "Signal Cargo Red",
        hex: "#CC181E",
        role: "Primary Brand Accent / Latin Wordmark",
        contrastOnDark: "4.8:1 (High Visibility)"
      },
      {
        name: "Pure Bone White",
        hex: "#FFFFFF",
        role: "Devanagari Headline / Vehicle Icon Fill",
        contrastOnDark: "21:1 (Maximum Legibility)"
      },
      {
        name: "Obsidian Field",
        hex: "#141414",
        role: "Primary Canvas / Squircle App Icon Background",
        contrastOnDark: "Base Void"
      },
      {
        name: "Neutral Silver Ash",
        hex: "#9A9A9A",
        role: "Secondary Supporting Labels & Spec Data",
        contrastOnDark: "Receded Contrast"
      }
    ],
    typography: [
      {
        role: "Primary Latin Mark",
        family: "Custom Geometric Grotesque",
        sourceStyle: "Heavy uppercase with lowered internal 'O' geometry",
        recommendedAlternative: "PP Neue Montreal Bold / Inter Heavy (SS01)",
        weight: "700 Heavy",
        tracking: "-0.02em",
        sampleText: "LOGI",
        notes: "The Latin wordmark utilizes high x-height capitals where the 'O' is positioned inside the horizontal bar of 'L', saving lateral space and creating a bespoke monogram effect."
      },
      {
        role: "Primary Devanagari Headline",
        family: "Devanagari Display Headline",
        sourceStyle: "Solid structural Devanagari headline with continuous top shirorekha",
        recommendedAlternative: "Yantramanav Bold / Mukta ExtraBold",
        weight: "700 Bold",
        tracking: "Normal",
        sampleText: "यात्रा",
        notes: "Devanagari 'यात्रा' (Yatra = Journey) provides an immediate regional anchor. The top continuous bar (shirorekha) acts as the highway upon which the cargo vehicle glides."
      }
    ],
    visualLanguage: {
      motifs: [
        {
          title: "The Shirorekha Highway",
          description: "The continuous horizontal header bar of Devanagari script is cleverly repurposed as the road surface, anchoring the transport vehicle seamlessly into the typography."
        },
        {
          title: "Speed Stream Whiskers",
          description: "Triple horizontal negative-space cuts behind the delivery truck denote acceleration, express courier dispatch, and fluid supply chain movement."
        },
        {
          title: "Script Nesting",
          description: "By nesting the small 'O' within the opening 'L', the composition compresses Latin width to balance harmoniously against the wider Devanagari glyphs."
        }
      ],
      gridConcept: "Modular dual-script baseline alignment with central graphic bridge",
      compositionStyle: "Horizontal motion flow from left (origin) to right (destination vehicle)"
    },
    applications: [
      {
        title: "Commercial Fleet Livery",
        type: "fleet-signage",
        description: "High-contrast vehicle side branding ensuring readable company identity at 100km/h highway speeds.",
        mockupDetails: {
          accentColor: "#CC181E",
          secondaryColor: "#FFFFFF",
          caption: "Long-haul refrigerated truck side panel branding"
        }
      },
      {
        title: "Mobile App Dock & Launch Screen",
        type: "mobile-device",
        description: "Smartphone launcher squircle icon showing instant app recognition in light and dark iOS / Android environments.",
        mockupDetails: {
          accentColor: "#CC181E",
          secondaryColor: "#141414",
          caption: "Driver dispatch app icon with rounded squircle bezel"
        }
      },
      {
        title: "Logistics Waybill & Driver Badge",
        type: "stationery",
        description: "Clean bilingual documentation template for delivery notes, warehouse manifests, and NFC security cards.",
        mockupDetails: {
          accentColor: "#CC181E",
          secondaryColor: "#FFFFFF",
          caption: "Warehouse dispatch badge & printed freight receipt"
        }
      }
    ],
    nextSlug: "hira-atithi",
    prevSlug: "kalpavraksh"
  },
  {
    id: "project-02",
    slug: "hira-atithi",
    title: "HIRA अतिथि",
    subtitle: "Sacred Welcome & Cultural Reverence Identity",
    clientOrBrand: "HIRA अतिथि",
    category: "Brand Identity & Logo Design",
    categories: ["Brand Identity & Logo Design", "Corporate Branding"],
    disciplines: ["Symbol Construction", "Devotional Illustration", "Bilingual Typography", "Cultural Hospitality"],
    summary: "A culturally grounded brand identity centered on the Anjali Mudra (reverent folded hands) set against a warm illuminated halo disc, paired with bold Latin and Devanagari bilingual typography.",
    coverImage: "/assets/hira_atithi_logo.png",
    visualPersonality: "Welcoming, spiritual, timeless, dignified, authentic",
    colorDirection: "Warm Radiant Gold (#F5CF78), Sacred Kumkum Red (#E51A24), Jade Bangle Green (#48CFAD), and Deep Obsidian Black",
    typographyDirection: "Substantial Latin sans with angled stem dynamic, bridged by a curved red horizon stroke to traditional Devanagari 'अतिथि'",
    intendedFormat: "Guest management platform, heritage hotel signage, cultural hospitality collateral, devotional trust branding",
    introduction: {
      headline: "Traditional Indian hospitality expressed through symbolic reverence.",
      statement: "Derived from the ancient philosophy of 'Atithi Devo Bhava' (The Guest is God), HIRA अतिथि unites sacred Indian iconography with contemporary commercial presence. The central emblem illustrates hands clasped in welcoming prayer (Namaste), flanked by a radiant circular disc.",
      keyDeliverables: [
        "Primary Bilingual Brand Mark with sacred folded hands symbol",
        "Vector Mudra illustration with emerald/teal bangle accents",
        "Dynamic red horizon accent curve connecting Latin and Devanagari",
        "Hospitality signage, keycards, and guest welcome collateral"
      ]
    },
    assets: [
      {
        id: "asset-ha-1",
        title: "Master Horizontal Identity Artwork",
        originalFileName: "visitorurl.png",
        url: "/assets/hira_atithi_logo.png",
        type: "logo-horizontal",
        aspectRatio: "1607/704",
        dimensions: "1607 × 704 px",
        description: "Master horizontal composition on pure black void. Features the illuminated praying hands emblem on the left, paired with bold white 'HIRA' underlined by a sweeping red arc, and large Devanagari 'अतिथि' below."
      }
    ],
    colors: [
      {
        name: "Radiant Halo Gold",
        hex: "#F5CF78",
        role: "Illuminated Sun Disc / Spiritual Warmth",
        contrastOnDark: "12.4:1 (Luminous Warmth)"
      },
      {
        name: "Sacred Kumkum Red",
        hex: "#E51A24",
        role: "Dynamic Horizon Stroke / Auspicious Energy",
        contrastOnDark: "4.7:1 (Focal Accent)"
      },
      {
        name: "Temple Jade Teal",
        hex: "#48CFAD",
        role: "Bangle Ornamentation / Grace Accent",
        contrastOnDark: "8.9:1 (Fresh Complement)"
      },
      {
        name: "Bone White",
        hex: "#FFFFFF",
        role: "Typographic Wordmarks (HIRA & अतिथि)",
        contrastOnDark: "21:1 (Maximum Authority)"
      },
      {
        name: "Void Obsidian",
        hex: "#0A0A0A",
        role: "Primary Staging Canvas",
        contrastOnDark: "Base Void"
      }
    ],
    typography: [
      {
        role: "Primary Latin Wordmark",
        family: "High-Contrast Structural Sans",
        sourceStyle: "Bold monolithic capitals with sharp triangular apex on 'A'",
        recommendedAlternative: "PP Neue Montreal Bold / Helvetica Now Display Bold",
        weight: "700 Bold",
        tracking: "0.01em",
        sampleText: "HIRA",
        notes: "Capital 'HIRA' projects corporate stability and diamond clarity, cut through horizontally by the red crescent accent line."
      },
      {
        role: "Devanagari Heritage Mark",
        family: "Humanist Devanagari Headline",
        sourceStyle: "Traditional solid Devanagari letterforms with generous counter spaces",
        recommendedAlternative: "Yantramanav ExtraBold / Rozha One (Display)",
        weight: "700 Bold",
        tracking: "Normal",
        sampleText: "अतिथि",
        notes: "'अतिथि' (Guest) anchors the brand's cultural purpose with heavy, grounded strokes that honor centuries of guest reverence."
      }
    ],
    visualLanguage: {
      motifs: [
        {
          title: "The Anjali Mudra (Namaste)",
          description: "Two palms pressed gently together in universal greeting, signifying deep respect, non-aggression, and open-hearted reception of every visitor."
        },
        {
          title: "The Luminous Halo Disc",
          description: "A soft circular glow with radial ray sparks behind the hands evokes dawn light, temple sanctums, and the divine aura of honored visitors."
        },
        {
          title: "The Auspicious Tilak / Horizon Arc",
          description: "The sweeping crimson stroke under 'HIRA' injects life force and guides the eye diagonally between the Latin corporate name and Devanagari heritage title."
        }
      ],
      gridConcept: "Equilateral golden ratio balance between circular emblem and dual-tier text block",
      compositionStyle: "Left-anchored sacred symbol with right-aligned stacked bilingual typography"
    },
    applications: [
      {
        title: "Backlit Hotel & Lobby Welcome Sign",
        type: "fleet-signage",
        description: "Matte-black architectural entrance wall with halo-illuminated golden symbol and halo backlighting.",
        mockupDetails: {
          accentColor: "#F5CF78",
          secondaryColor: "#E51A24",
          caption: "Architectural brushed metal & warm LED lobby signage"
        }
      },
      {
        title: "Guest Registration Folio & Keycard",
        type: "stationery",
        description: "Tactile gold foil embossed stationery on heavyweight black uncoated stock with velvet touch.",
        mockupDetails: {
          accentColor: "#F5CF78",
          secondaryColor: "#0A0A0A",
          caption: "VIP guest folder, welcome envelope & contactless wooden keycard"
        }
      },
      {
        title: "Devotional Trust Publication Cover",
        type: "billboard",
        description: "Editorial cover layout featuring the mudra emblem as a subtle watermark with red accent highlight.",
        mockupDetails: {
          accentColor: "#E51A24",
          secondaryColor: "#FFFFFF",
          caption: "Annual hospitality report & philanthropic mission brochure"
        }
      }
    ],
    nextSlug: "fixnix",
    prevSlug: "logi-yatra"
  },
  {
    id: "project-03",
    slug: "fixnix",
    title: "FIXNIX",
    subtitle: "Adaptive Digital Utility & Application Branding",
    clientOrBrand: "FIXNIX",
    category: "Mobile Application Graphics",
    categories: ["Mobile Application Graphics", "Brand Identity & Logo Design", "Digital Graphics"],
    disciplines: ["Digital Identity", "Dark/Light Surface Adaptability", "Mobile Splash Screen", "Geometric Pattern Design"],
    summary: "An ultra-clean digital product and application branding system engineered for extreme cross-platform surface adaptability, marked by emerald circular dot accents on both 'I' letterforms and a vibrant branded splash screen.",
    coverImage: "/assets/fixnix_splash.png",
    visualPersonality: "Technical, crisp, agile, modern, focused",
    colorDirection: "Electric Emerald (#00C066), Deep Obsidian (#121212), and Crisp Signal White (#FFFFFF)",
    typographyDirection: "Heavy geometric sans with twin floating circular tittles on 'I' letterforms",
    intendedFormat: "Mobile operating system splash screen, digital SaaS platform, developer utility suite, responsive application icon",
    introduction: {
      headline: "Adaptive precision engineered across digital surfaces.",
      statement: "FIXNIX represents modern digital utility where seamless software performance is paramount. The visual identity addresses the real-world demand of modern interfaces: delivering uncompromised legibility on both pure void dark modes and bright light-canvas environments, unified by vibrant emerald status dots.",
      keyDeliverables: [
        "Primary Dark-Surface Logo with white letterforms and emerald accents",
        "Primary Light-Surface Logo with black letterforms and emerald accents",
        "Mobile Application Splash Screen (390 × 844 px) with repeating watermark pattern",
        "UI iconography and digital application design tokens"
      ]
    },
    assets: [
      {
        id: "asset-fn-1",
        title: "Mobile Application Splash Screen",
        originalFileName: "fixnix_splash_screen.png",
        url: "/assets/fixnix_splash.png",
        type: "splash-screen",
        aspectRatio: "390/844",
        dimensions: "390 × 844 px",
        description: "Full mobile splash screen artwork featuring an emerald green surface (#00C066), layered with a repeating geometric FIXNIX outline watermark pattern and centered solid black mark."
      },
      {
        id: "asset-fn-2",
        title: "Dark Surface Logo Variation",
        originalFileName: "logo-for-dark.png",
        url: "/assets/fixnix_logo_dark.png",
        type: "logo-dark",
        aspectRatio: "673/182",
        dimensions: "673 × 182 px",
        transparentBackground: true,
        description: "Primary logo engineered for dark UI surfaces. Crisp white letterforms with vibrant emerald circular accents floating over each 'I'."
      },
      {
        id: "asset-fn-3",
        title: "Light Surface Logo Variation",
        originalFileName: "logo-for-light.png",
        url: "/assets/fixnix_logo_light.png",
        type: "logo-light",
        aspectRatio: "673/185",
        dimensions: "673 × 185 px",
        transparentBackground: true,
        description: "Inverted logo variation for light backgrounds and printed collateral. Solid black letterforms with identical emerald dot accents."
      }
    ],
    colors: [
      {
        name: "Electric Emerald",
        hex: "#00C066",
        role: "Brand Signature Color / Tittle Accent / Splash Background",
        contrastOnDark: "7.8:1 (Optimal Digital Pop)"
      },
      {
        name: "Deep Obsidian Black",
        hex: "#121212",
        role: "Primary Text on Light & Splash Center Logo",
        contrastOnDark: "Dark Base"
      },
      {
        name: "Pure Bone White",
        hex: "#FFFFFF",
        role: "Primary Text on Dark Mode Canvas",
        contrastOnDark: "21:1"
      },
      {
        name: "Emerald Shadow Pattern",
        hex: "#009D53",
        role: "Subtle Splash Watermark Lines",
        contrastOnDark: "Tone-on-tone"
      }
    ],
    typography: [
      {
        role: "Primary Geometric Logotype",
        family: "Modified Geometric Grotesque",
        sourceStyle: "All-caps industrial sans with circular geometric dots on 'I'",
        recommendedAlternative: "PP Neue Montreal Bold / Inter 700 / Syne Bold",
        weight: "700 Bold",
        tracking: "0.02em",
        sampleText: "F İ X N İ X",
        notes: "The wordmark achieves architectural symmetry with flanking 'X' letterforms, anchored by dual 'I's that act as digital status indicators (green active diodes)."
      }
    ],
    visualLanguage: {
      motifs: [
        {
          title: "The Twin Status Diodes",
          description: "The emerald dots on both 'I' glyphs evoke active server diodes, precision laser calibration, and 'problem solved' affirmative status."
        },
        {
          title: "Structural Palindrome Symmetry",
          description: "F-I-X and N-I-X balance each other with alternating vertical uprights and diagonal crossbars ('X'), establishing rhythm."
        },
        {
          title: "Watermark Tessellation",
          description: "The repeating linear pattern on the mobile splash screen creates tactile depth without distraction, reinforcing brand recall during app loading."
        }
      ],
      gridConcept: "Strict 8px digital utility grid with equal stem thickness across all characters",
      compositionStyle: "Centralized focal typography with modular background texture"
    },
    applications: [
      {
        title: "iOS / Android Native Splash Launch Screen",
        type: "mobile-device",
        description: "Full-screen launch experience with smooth fade transition from emerald pattern to active dashboard UI.",
        mockupDetails: {
          accentColor: "#00C066",
          secondaryColor: "#121212",
          caption: "Mobile splash screen in iPhone bezel with bezel edge glow"
        }
      },
      {
        title: "Developer Console Dark/Light Mode Switcher",
        type: "social-campaign",
        description: "Live interface demonstrating seamless instant switching between dark and light themes without losing visual punch.",
        mockupDetails: {
          accentColor: "#00C066",
          secondaryColor: "#FFFFFF",
          caption: "System settings UI theme toggle showcase"
        }
      },
      {
        title: "Digital App Icon & Menubar Widget",
        type: "stationery",
        description: "Compact glyph representation designed for high-DPI desktop menu bars, browser tabs, and notification headers.",
        mockupDetails: {
          accentColor: "#00C066",
          secondaryColor: "#121212",
          caption: "Taskbar widget & favicon precision test"
        }
      }
    ],
    nextSlug: "bhawani-moulders",
    prevSlug: "hira-atithi"
  },
  {
    id: "project-04",
    slug: "bhawani-moulders",
    title: "Bhawani Moulders",
    subtitle: "Industrial Editorial Architecture & Corporate Brochure",
    clientOrBrand: "Bhawani Moulders Pvt. Ltd.",
    category: "Corporate Branding",
    categories: ["Corporate Branding", "Editorial & Brochure Design", "Print & Publication Design"],
    disciplines: ["Corporate Brochure", "Editorial Spread Design", "Industrial Photography Direction", "Information Architecture", "Print Production"],
    summary: "A premium corporate publication and brochure design for Bhawani Moulders Pvt. Ltd. ('Precision in every angle'), featuring dynamic diagonal layouts, industrial structural photography, and clear technical product hierarchies.",
    coverImage: "/assets/bhawani_panel_1_cover.png",
    visualPersonality: "Industrial, robust, precise, authoritative, corporate",
    colorDirection: "Corporate Navy Blue (#2D3691), Precision Signal Red (#E51E25), and Architectural White",
    typographyDirection: "Monolithic corporate sans with strong red bold keyword accents for instant executive scanning",
    intendedFormat: "Printed corporate brochure, multi-page company profile, digital PDF investor presentation, trade-fair editorial handout",
    introduction: {
      headline: "Precision in every angle: industrial editorial architecture.",
      statement: "Bhawani Moulders Pvt. Ltd. is a major structural steel and manufacturing supplier. The corporate brochure translates heavy industrial steel production into a sophisticated editorial publication, utilizing bold 30-degree dynamic angular cuts, rigorous product cataloging, and disciplined corporate communication.",
      keyDeliverables: [
        "Full Multi-Panel Corporate Brochure (4960 × 10521 px high-res artwork)",
        "Panel 01: Corporate Profile, Contact Infrastructure & Executive Cover",
        "Panel 02: Structural Steel & Long Products Technical Catalog",
        "Panel 03: Fabrication Services, Industrial Supply & Quality Compliance",
        "Realistic Print & Publication Mockups"
      ]
    },
    assets: [
      {
        id: "asset-bm-full",
        title: "Full Master Corporate Publication",
        originalFileName: "Group 209.png",
        url: "/assets/bhawani_full_web.png",
        type: "brochure-full",
        aspectRatio: "4960/10521",
        dimensions: "4960 × 10521 px",
        description: "Complete uncompressed master corporate brochure containing all 3 continuous panels: Company profile, products catalog, and fabrication/quality compliance sections."
      },
      {
        id: "asset-bm-p1",
        title: "Panel 01: Cover & Corporate Overview",
        originalFileName: "Group 209 (Panel 1)",
        url: "/assets/bhawani_panel_1_cover.png",
        type: "brochure-panel",
        aspectRatio: "4960/3600",
        dimensions: "4960 × 3600 px",
        description: "Executive cover and company introduction featuring the angular 'B' monogram logo, steel beam photography, dynamic diagonal dividers, contact QR code, and 'Precision in every angle' brand motto."
      },
      {
        id: "asset-bm-p2",
        title: "Panel 02: Structural & Long Products",
        originalFileName: "Group 209 (Panel 2)",
        url: "/assets/bhawani_panel_2_products.png",
        type: "brochure-panel",
        aspectRatio: "4960/3400",
        dimensions: "4960 × 3400 px",
        description: "Product portfolio showcase detailing Structural steel (MS Angles, MS Channels, Gate Channels), Semi-Finished (MS Billets), and Long Products (MS Rounds, Squares, Flats), flanked by on-site fabrication photography."
      },
      {
        id: "asset-bm-p3",
        title: "Panel 03: Services & Quality Compliance",
        originalFileName: "Group 209 (Panel 3)",
        url: "/assets/bhawani_panel_3_services.png",
        type: "brochure-panel",
        aspectRatio: "4960/3521",
        dimensions: "4960 × 3521 px",
        description: "Fabrication & structural works breakdown, industrial warehouse supply, quality assurance workflow, and safety compliance documentation with workshop grinding photography."
      }
    ],
    colors: [
      {
        name: "Corporate Industrial Navy",
        hex: "#2D3691",
        role: "Primary Corporate Color / Diagonal Structural Blocks / Headings",
        contrastOnDark: "7.1:1"
      },
      {
        name: "Precision Signal Red",
        hex: "#E51E25",
        role: "Monogram Accent / Bold Focus Words / Dynamic Arrows",
        contrastOnDark: "4.9:1"
      },
      {
        name: "Clean Structural White",
        hex: "#FFFFFF",
        role: "Editorial Page Background / High Contrast Typography",
        contrastOnDark: "21:1"
      },
      {
        name: "Alloy Steel Gray",
        hex: "#E4E5F1",
        role: "Subtle Technical Spec Backgrounds & Dividing Rules",
        contrastOnDark: "Subtle Neutral"
      }
    ],
    typography: [
      {
        role: "Corporate Headings & Monogram",
        family: "Industrial Sans Grotesque",
        sourceStyle: "All-caps bold headline with alternating red/navy color emphasis",
        recommendedAlternative: "PP Neue Montreal Bold / Inter Display 800",
        weight: "800 ExtraBold",
        tracking: "-0.01em",
        sampleText: "BHAWANI Moulders Pvt Ltd",
        notes: "Headlines utilize dual-color typographic emphasis ('OUR PRODUCTS', 'BUILT ON TRUST, DRIVEN BY QUALITY') to guide busy procurement managers."
      },
      {
        role: "Technical Body & Bullet Specs",
        family: "Corporate Information Sans",
        sourceStyle: "Clean readable neutral sans with high legibility at small sizes",
        recommendedAlternative: "Inter Regular / Roboto 400",
        weight: "400 Regular / 600 SemiBold",
        tracking: "Normal",
        sampleText: "Precision steel sections with dependable supply for fabrication and projects.",
        notes: "Bullet points are highlighted with custom solid square markers in navy and red to clearly differentiate product categories."
      }
    ],
    visualLanguage: {
      motifs: [
        {
          title: "30-Degree Dynamic Diagonal Architecture",
          description: "All major section transitions employ bold 30-degree diagonal cuts, echoing the precision angles of structural steel crossbeams and trusses."
        },
        {
          title: "Industrial Photography Treatment",
          description: "Raw photography of warehouse stock, workers wearing PPE hardhats, and sparks flying from metal grinding are framed within diagonal geometric masks."
        },
        {
          title: "Dual-Hue Color Weighting",
          description: "Interlocking navy and red planes create corporate equilibrium: navy provides institutional trust while red sparks urgency and precision."
        }
      ],
      gridConcept: "Asymmetric 2-column editorial grid governed by diagonal boundary lines",
      compositionStyle: "Full-bleed editorial spreads with balanced photo-to-text ratios"
    },
    applications: [
      {
        title: "Printed A4 Tri-Fold Corporate Brochure",
        type: "print-brochure",
        description: "Premium offset print on 250gsm silk matte paper with spot UV coating on the red 'B' monogram.",
        mockupDetails: {
          accentColor: "#2D3691",
          secondaryColor: "#E51E25",
          caption: "Realistic 3-fold corporate presentation mockup on boardroom table"
        }
      },
      {
        title: "Industrial Trade Fair Exhibition Stand",
        type: "billboard",
        description: "Large-format 3m tall fabric exhibition backdrop for steel manufacturing expos and buyer summits.",
        mockupDetails: {
          accentColor: "#2D3691",
          secondaryColor: "#E51E25",
          caption: "Trade show booth graphic display with illuminated brochure rack"
        }
      },
      {
        title: "Digital Corporate PDF Profile",
        type: "social-campaign",
        description: "Interactive digital document with clickable email and website links optimized for desktop and tablet viewing.",
        mockupDetails: {
          accentColor: "#2D3691",
          secondaryColor: "#FFFFFF",
          caption: "Tablet editorial reader view for procurement officers"
        }
      }
    ],
    nextSlug: "kalpavraksh",
    prevSlug: "fixnix"
  },
  {
    id: "project-05",
    slug: "kalpavraksh",
    title: "Kalpavraksh",
    subtitle: "Festive Promotional Campaign & Cultural Craft",
    clientOrBrand: "Kalpvraksh By Kalpa Dani",
    category: "Campaign & Promotional Design",
    categories: ["Campaign & Promotional Design", "Marketing & Advertising Design", "Print & Publication Design"],
    disciplines: ["Festival Creative", "Traditional Indian Motifs", "Decorative Framing", "Typographic Swash Craft", "Campaign Design"],
    summary: "A celebratory Diwali promotional greeting and brand campaign for 'Kalpvraksh By Kalpa Dani', orchestrating sacred marigold garlands, illuminated diya lanterns, intricate floral mandalas, and dignified serif typography.",
    coverImage: "/assets/kalpavraksh_diwali_flyer.png",
    visualPersonality: "Auspicious, joyful, handcrafted, celebratory, warm",
    colorDirection: "Midnight Royal Navy (#1B365D), Saffron Marigold Gold (#FFB829), Deep Diya Crimson (#E65100), and Warm Ivory Canvas (#FFFFFA)",
    typographyDirection: "Graceful display serif for 'Diwali' paired with bold geometric sans for 'HAPPY' and traditional Devanagari tree monogram",
    intendedFormat: "Printed festive greetings card, digital WhatsApp/social campaign, holiday brand gifting flyer, retail client insert",
    introduction: {
      headline: "Illuminating tradition with festive elegance and cultural reverence.",
      statement: "Created for Kalpvraksh By Kalpa Dani on the auspicious occasion of Diwali (The Festival of Lights). The artwork captures the festive spirit through delicate floral rangoli arches, suspended marigold garlands with diya medallions, and auspicious lotus petals.",
      keyDeliverables: [
        "Master High-Resolution Campaign Artwork (1545 × 2000 px)",
        "Traditional vector ornamentation & decorative border system",
        "Handcrafted Diwali typography with custom headline swash",
        "Social media, greeting card, and luxury gift insert applications"
      ]
    },
    assets: [
      {
        id: "asset-kp-1",
        title: "Master Diwali Campaign Flyer",
        originalFileName: "sample!.png",
        url: "/assets/kalpavraksh_diwali_flyer.png",
        type: "flyer",
        aspectRatio: "1545/2000",
        dimensions: "1545 × 2000 px",
        description: "Complete original festival artwork in full glory. Features ornate corner rangoli mandalas, hanging marigold garland strings, central 'HAPPY Diwali' typography, blessing verse, Kalpvraksh circular brand seal, and lotus diya base border."
      }
    ],
    colors: [
      {
        name: "Midnight Festive Navy",
        hex: "#1B365D",
        role: "Diwali Headline Wordmark / Floral Mandala Fill",
        contrastOnDark: "7.8:1 on light canvas"
      },
      {
        name: "Saffron Marigold Gold",
        hex: "#FFB829",
        role: "Garland Beads / Lantern Glow / Diya Base Highlights",
        contrastOnDark: "Radiant warmth"
      },
      {
        name: "Auspicious Diya Flame",
        hex: "#E65100",
        role: "Flame Teardrops / Deep Petal Accents",
        contrastOnDark: "Vibrant energy"
      },
      {
        name: "Temple Floral Cyan",
        hex: "#00838F",
        role: "Secondary Rangoli Petals & Teal Highlights",
        contrastOnDark: "Jeweled tone"
      },
      {
        name: "Warm Ivory Cream",
        hex: "#FFFFFA",
        role: "Sacred Background Canvas",
        contrastOnDark: "Clean backdrop"
      }
    ],
    typography: [
      {
        role: "Festive Headline Swash",
        family: "Lyrical Display Serif",
        sourceStyle: "High-contrast editorial serif with dramatic looping capital 'D' swash",
        recommendedAlternative: "Playfair Display Bold / PP Editorial New / Cormorant Garamond",
        weight: "700 Bold",
        tracking: "-0.01em",
        sampleText: "Diwali",
        notes: "The oversized 'Diwali' headline anchors the layout with warmth, elegance, and joyful energy, flowing organically across the central whitespace."
      },
      {
        role: "Greeting Prefix & Blessing Verse",
        family: "Clean Geometric Sans & Slab",
        sourceStyle: "Wide-tracked clean modern sans paired with sturdy slab serif for brand name",
        recommendedAlternative: "Inter SemiBold / Roboto Slab",
        weight: "600 SemiBold / 700 Bold",
        tracking: "0.15em on 'HAPPY'",
        sampleText: "HAPPY / May the lights of Diwali illuminate every corner of your life...",
        notes: "All-caps 'HAPPY' provides a modern horizontal balance directly above the flowing serif curves of 'Diwali'."
      }
    ],
    visualLanguage: {
      motifs: [
        {
          title: "Intricate Corner Rangoli Arches",
          description: "Top corners are framed with radiant geometric floral mandalas in alternating navy, cyan, and saffron petals, anchoring the composition."
        },
        {
          title: "Suspended Toran & Diya Strings",
          description: "Delicate vertical strings of golden marigold beads drop down with hanging clay diya lanterns, creating festive height and movement."
        },
        {
          title: "Base Lotus Foundation",
          description: "The bottom edge is grounded with symmetrical oil lamps (diyas) rising out of golden lotus petals with dual-tone burning flame drops."
        }
      ],
      gridConcept: "Centralized sacred symmetrical axis framed by decorative corner arches",
      compositionStyle: "Bilateral symmetry with generous central breathing space"
    },
    applications: [
      {
        title: "Gold Foil Embossed Festive Gift Card",
        type: "festival-gift",
        description: "Luxury greeting card on textured cotton rag paper with metallic gold foil stamping on the flame and garland elements.",
        mockupDetails: {
          accentColor: "#FFB829",
          secondaryColor: "#1B365D",
          caption: "Festive greeting card resting on dark velvet with sweet box"
        }
      },
      {
        title: "Social Media Festive Story & Feed Creative",
        type: "social-campaign",
        description: "Optimized 1080 × 1080 px Instagram feed square and 1080 × 1920 px story formats with gentle animation of burning diya flames.",
        mockupDetails: {
          accentColor: "#FFB829",
          secondaryColor: "#1B365D",
          caption: "Instagram feed presentation with high engagement framing"
        }
      },
      {
        title: "Storefront Promotional Standee",
        type: "billboard",
        description: "Large 6ft promotional banner welcoming festive shoppers at the retail boutique entrance.",
        mockupDetails: {
          accentColor: "#1B365D",
          secondaryColor: "#FFB829",
          caption: "Boutique entrance roll-up standee in ambient holiday lighting"
        }
      }
    ],
    nextSlug: "logi-yatra",
    prevSlug: "bhawani-moulders"
  }
];
