"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  Maximize2,
  Sparkles,
  Download,
  Layers,
  ChevronLeft,
  ChevronRight,
  Sun,
  Moon,
  ExternalLink,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import AmbientParticles from "@/components/AmbientParticles";
import ImageLightbox from "@/components/ImageLightbox";
import ColorPaletteViewer from "@/components/ColorPaletteViewer";
import TypographyViewer from "@/components/TypographyViewer";
import MockupDevice from "@/components/MockupDevice";
import AssetAnalysisModal from "@/components/AssetAnalysisModal";
import { ProjectData } from "@/data/projects";

interface ProjectDetailViewProps {
  project: ProjectData;
  nextProject?: ProjectData;
  prevProject?: ProjectData;
}

export default function ProjectDetailView({
  project,
  nextProject,
  prevProject,
}: ProjectDetailViewProps) {
  // State
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxInitialIndex, setLightboxInitialIndex] = useState(0);
  const [isPipelineOpen, setIsPipelineOpen] = useState(false);

  // FixNix interactive theme toggle
  const [fixnixTheme, setFixnixTheme] = useState<"dark" | "light">("dark");

  // Bhawani Moulders active panel tab
  const [bhawaniActiveTab, setBhawaniActiveTab] = useState<"all" | "p1" | "p2" | "p3">("all");

  const openLightboxWithAsset = (assetIndex: number) => {
    setLightboxInitialIndex(assetIndex);
    setLightboxOpen(true);
  };

  return (
    <main className="w-full bg-void min-h-screen relative overflow-hidden">
      <AmbientParticles count={30} />
      <Navbar onOpenPipeline={() => setIsPipelineOpen(true)} />

      {/* Top Breadcrumb & Quick Nav */}
      <div className="max-w-[1280px] mx-auto px-6 pt-10 pb-4 flex items-center justify-between border-b border-[#141414]">
        <Link
          href="/#selected-works"
          className="btn-ghost-link group flex items-center gap-2"
        >
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
          <span>Back to Selected Works</span>
        </Link>

        <div className="flex items-center gap-4 text-[13px] font-mono text-ash-gray">
          {prevProject && (
            <Link
              href={`/project/${prevProject.slug}`}
              className="hover:text-bone-white transition-colors hidden sm:inline"
            >
              ← Prev ({prevProject.title})
            </Link>
          )}
          {prevProject && nextProject && (
            <span className="hidden sm:inline">•</span>
          )}
          {nextProject && (
            <Link
              href={`/project/${nextProject.slug}`}
              className="hover:text-bone-white transition-colors hidden sm:inline"
            >
              Next ({nextProject.title}) →
            </Link>
          )}
        </div>
      </div>

      {/* ========================================================= */}
      {/* 01 — PROJECT HERO & INTRODUCTION                          */}
      {/* ========================================================= */}
      <section className="max-w-[1280px] mx-auto px-6 py-16 sm:py-24">
        <div className="flex flex-col gap-8">
          {/* Metadata badges */}
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-[12px] uppercase font-mono tracking-wider text-saffron-spark font-semibold">
              {project.category}
            </span>
            <span className="text-ash-gray text-[12px] font-mono">•</span>
            <span className="text-[12px] uppercase font-mono tracking-wider text-ash-gray">
              Client / Brand: {project.clientOrBrand}
            </span>
          </div>

          {/* Monolithic Display Title (Weight 400, Negative Tracking) */}
          <h1 className="text-[52px] sm:text-[78px] lg:text-[104px] font-normal leading-[1.0] tracking-[-3.12px] lg:tracking-[-4.52px] text-bone-white font-sans max-w-5xl">
            {project.title}
          </h1>

          <div className="text-[24px] sm:text-[32px] font-normal tracking-[-0.8px] text-silver-mist">
            {project.subtitle}
          </div>

          {/* Asymmetric Two-Column Introduction Block */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 pt-8 border-t border-[#161616] items-start">
            <div className="lg:col-span-7 flex flex-col gap-6">
              <span className="text-[14px] uppercase tracking-[0.35px] font-semibold text-saffron-spark font-mono">
                01 — Project Overview & Strategic Brief
              </span>
              <h2 className="text-[32px] sm:text-[42px] font-normal leading-[1.15] tracking-[-1.68px] text-bone-white">
                {project.introduction.headline}
              </h2>
              <p className="text-[18px] font-body-ultralight text-silver-mist leading-[1.6]">
                {project.introduction.statement}
              </p>
            </div>

            <div className="lg:col-span-5 flex flex-col gap-4 bg-[#080808] p-6 sm:p-8 rounded-3xl border border-[#1a1a1a]">
              <span className="text-[12px] font-mono uppercase tracking-wider text-ash-gray">
                Verified Deliverables
              </span>
              <ul className="flex flex-col gap-3">
                {project.introduction.keyDeliverables.map((deliv, i) => (
                  <li key={i} className="flex items-start gap-3 text-[14px] text-bone-white font-light">
                    <span className="w-1.5 h-1.5 rounded-full bg-electric-iris mt-2 shrink-0" />
                    <span>{deliv}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 02 — MASTER ARTWORK SHOWCASE & INSPECTOR                   */}
      {/* ========================================================= */}
      <section className="max-w-[1280px] mx-auto px-6 py-12">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4">
            <div>
              <span className="text-[14px] uppercase tracking-[0.35px] font-semibold text-saffron-spark font-mono block mb-2">
                02 — Original Asset Showcase
              </span>
              <h2 className="text-[36px] sm:text-[48px] font-normal tracking-[-1.68px] text-bone-white">
                {project.category.includes("Brochure")
                  ? "Publication Architecture."
                  : project.category.includes("Campaign")
                  ? "Festival Artwork."
                  : "Original Identity Mark."}
              </h2>
            </div>

            <button
              onClick={() => openLightboxWithAsset(0)}
              className="btn-electric-pill"
            >
              <Maximize2 className="w-4 h-4" />
              <span>Full High-Res Inspection</span>
            </button>
          </div>

          {/* CUSTOM SHOWCASE FOR LOGI YATRA */}
          {project.slug === "logi-yatra" && (
            <div className="flex flex-col gap-8">
              {/* Main horizontal logo on dark void */}
              <div
                onClick={() => openLightboxWithAsset(0)}
                className="group relative w-full aspect-[16/9] sm:aspect-[21/9] bg-[#080808] rounded-3xl p-8 sm:p-14 flex items-center justify-center cursor-zoom-in border border-[#161616] overflow-hidden"
              >
                <img
                  src="/assets/logiyatra_horizontal.png"
                  alt="Logi Yatra Horizontal Mark"
                  className="max-h-[65%] max-w-[85%] object-contain transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute bottom-6 left-6 flex items-center gap-2 bg-void/80 px-3 py-1.5 rounded-full border border-[#2a2a2a] text-[12px] font-mono text-silver-mist">
                  <Maximize2 className="w-3.5 h-3.5 text-saffron-spark" />
                  <span>Click to inspect original raster (500 × 536 px)</span>
                </div>
              </div>

              {/* Two-Column Detail: App Icon & Typography lockup */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div
                  onClick={() => openLightboxWithAsset(1)}
                  className="group p-8 rounded-3xl bg-[#080808] border border-[#161616] flex flex-col items-center justify-center gap-6 cursor-zoom-in"
                >
                  <div className="w-40 h-40 rounded-[32px] overflow-hidden shadow-2xl transition-transform duration-500 group-hover:scale-105">
                    <img
                      src="/assets/logiyatra_icon.png"
                      alt="Logi Yatra App Icon"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="text-center">
                    <div className="text-[16px] text-bone-white font-medium">
                      Mobile Application Icon (Squircle)
                    </div>
                    <div className="text-[13px] text-ash-gray font-mono mt-1">
                      Frame 38.png • 180 × 180 px
                    </div>
                  </div>
                </div>

                <div className="p-8 rounded-3xl bg-[#080808] border border-[#161616] flex flex-col justify-center gap-4">
                  <span className="text-[12px] font-mono uppercase tracking-wider text-saffron-spark">
                    Bilingual Typography Composition
                  </span>
                  <h3 className="text-[24px] font-normal text-bone-white">
                    Latin & Devanagari Symbiosis
                  </h3>
                  <p className="text-[15px] text-silver-mist leading-relaxed font-light">
                    The composition bridges the English acronym with regional Devanagari script. The horizontal headline bar (shirorekha) of "यात्रा" serves as the roadway supporting the express cargo delivery truck, symbolizing nationwide accessibility across language barriers.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* CUSTOM SHOWCASE FOR HIRA ATITHI */}
          {project.slug === "hira-atithi" && (
            <div className="flex flex-col gap-8">
              <div
                onClick={() => openLightboxWithAsset(0)}
                className="group relative w-full aspect-[16/8] sm:aspect-[21/9] bg-[#050505] rounded-3xl p-8 sm:p-14 flex items-center justify-center cursor-zoom-in border border-[#161616] overflow-hidden"
              >
                <img
                  src="/assets/hira_atithi_logo.png"
                  alt="Hira Atithi Master Artwork"
                  className="max-h-[75%] max-w-[90%] object-contain transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute bottom-6 left-6 flex items-center gap-2 bg-void/80 px-3 py-1.5 rounded-full border border-[#2a2a2a] text-[12px] font-mono text-silver-mist">
                  <Maximize2 className="w-3.5 h-3.5 text-saffron-spark" />
                  <span>Master High-Resolution Artwork (1607 × 704 px)</span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-6 bg-[#080808] rounded-2xl border border-[#181818] flex flex-col gap-2">
                  <span className="text-[12px] font-mono text-saffron-spark uppercase">
                    01 • The Anjali Mudra
                  </span>
                  <div className="text-[15px] text-bone-white font-medium">Sacred Greeting</div>
                  <p className="text-[13px] text-ash-gray font-light leading-relaxed">
                    Palms gently pressed together symbolize heartfelt greeting, reverence, and non-violence.
                  </p>
                </div>

                <div className="p-6 bg-[#080808] rounded-2xl border border-[#181818] flex flex-col gap-2">
                  <span className="text-[12px] font-mono text-saffron-spark uppercase">
                    02 • The Golden Halo
                  </span>
                  <div className="text-[15px] text-bone-white font-medium">Sanctum Illumination</div>
                  <p className="text-[13px] text-ash-gray font-light leading-relaxed">
                    A radiating circular disc behind the hands evokes dawn light and the sanctity of divine hospitality.
                  </p>
                </div>

                <div className="p-6 bg-[#080808] rounded-2xl border border-[#181818] flex flex-col gap-2">
                  <span className="text-[12px] font-mono text-saffron-spark uppercase">
                    03 • Red Horizon Arc
                  </span>
                  <div className="text-[15px] text-bone-white font-medium">Dynamic Connection</div>
                  <p className="text-[13px] text-ash-gray font-light leading-relaxed">
                    A sweeping red stroke bridges the Latin 'HIRA' wordmark and traditional Devanagari 'अतिथि'.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* CUSTOM SHOWCASE FOR FIXNIX */}
          {project.slug === "fixnix" && (
            <div className="flex flex-col gap-8">
              {/* Surface Adaptability Switcher */}
              <div className="flex items-center justify-between p-4 bg-[#0a0a0a] rounded-2xl border border-[#1a1a1a]">
                <div className="flex items-center gap-3">
                  <span className="text-[13px] font-mono text-ash-gray uppercase">
                    Interactive Surface Simulation:
                  </span>
                  <span className="text-[13px] font-semibold text-bone-white">
                    {fixnixTheme === "dark" ? "Dark Mode Canvas" : "Light Mode Canvas"}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setFixnixTheme("dark")}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[12px] font-medium transition-all ${
                      fixnixTheme === "dark"
                        ? "bg-bone-white text-void font-semibold"
                        : "text-ash-gray hover:text-bone-white"
                    }`}
                  >
                    <Moon className="w-3.5 h-3.5" />
                    <span>Dark Surface</span>
                  </button>
                  <button
                    onClick={() => setFixnixTheme("light")}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[12px] font-medium transition-all ${
                      fixnixTheme === "light"
                        ? "bg-bone-white text-void font-semibold"
                        : "text-ash-gray hover:text-bone-white"
                    }`}
                  >
                    <Sun className="w-3.5 h-3.5" />
                    <span>Light Surface</span>
                  </button>
                </div>
              </div>

              {/* Logo Presentation Stage with Dark/Light Toggle */}
              <div
                className={`w-full aspect-[16/7] rounded-3xl p-10 flex items-center justify-center transition-colors duration-500 border border-[#222222] ${
                  fixnixTheme === "dark" ? "bg-[#000000]" : "bg-[#F5F5F5]"
                }`}
              >
                <img
                  src={
                    fixnixTheme === "dark"
                      ? "/assets/fixnix_logo_dark.png"
                      : "/assets/fixnix_logo_light.png"
                  }
                  alt="FixNix Logo"
                  className="max-h-24 sm:max-h-32 object-contain transition-all duration-300"
                />
              </div>

              {/* Splash Screen Presentation */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-4">
                <div
                  onClick={() => openLightboxWithAsset(0)}
                  className="lg:col-span-5 bg-[#080808] p-8 rounded-3xl border border-[#161616] flex items-center justify-center cursor-zoom-in"
                >
                  <div className="w-[260px] aspect-[390/844] rounded-[32px] overflow-hidden shadow-2xl border-4 border-[#222222]">
                    <img
                      src="/assets/fixnix_splash.png"
                      alt="FixNix Splash Screen"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                <div className="lg:col-span-7 flex flex-col gap-6">
                  <span className="text-[12px] font-mono uppercase tracking-wider text-saffron-spark">
                    Digital Product Identity
                  </span>
                  <h3 className="text-[28px] sm:text-[36px] font-normal text-bone-white">
                    Emerald Energy & Tessellated Watermark
                  </h3>
                  <p className="text-[16px] font-body-ultralight text-silver-mist leading-relaxed">
                    The mobile launch screen combines saturated electric emerald (#00C066) with a subtle repeating outline pattern of the FIXNIX logotype. This establishes instant brand recognition during cold app launches before resolving into the functional UI interface.
                  </p>
                  <div className="flex items-center gap-4 text-[13px] font-mono text-ash-gray">
                    <span>• Dimensions: 390 × 844 px</span>
                    <span>• Mobile iOS/Android Launch Standard</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* CUSTOM SHOWCASE FOR BHAWANI MOULDERS */}
          {project.slug === "bhawani-moulders" && (
            <div className="flex flex-col gap-8">
              {/* Interactive Panel Tab Bar */}
              <div className="flex flex-wrap items-center gap-2 p-2 bg-[#0a0a0a] rounded-2xl border border-[#1a1a1a]">
                {[
                  { id: "all", label: "Full Master Spread" },
                  { id: "p1", label: "Panel 01: Cover & Profile" },
                  { id: "p2", label: "Panel 02: Structural Products" },
                  { id: "p3", label: "Panel 03: Fabrication & Quality" },
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setBhawaniActiveTab(tab.id as any)}
                    className={`text-[13px] font-medium px-4 py-2 rounded-xl transition-all ${
                      bhawaniActiveTab === tab.id
                        ? "bg-electric-iris text-bone-white font-semibold"
                        : "text-ash-gray hover:text-bone-white"
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* Panel Display Stage */}
              <div className="w-full bg-[#080808] rounded-3xl p-6 sm:p-10 border border-[#161616] flex flex-col items-center justify-center">
                {bhawaniActiveTab === "all" && (
                  <div
                    onClick={() => openLightboxWithAsset(0)}
                    className="w-full max-w-2xl cursor-zoom-in group flex flex-col items-center"
                  >
                    <img
                      src="/assets/bhawani_full_web.png"
                      alt="Bhawani Moulders Full Master Publication"
                      className="w-full rounded-2xl shadow-2xl transition-transform duration-500 group-hover:scale-[1.01]"
                    />
                    <div className="mt-4 text-[12px] font-mono text-ash-gray flex items-center gap-2">
                      <Maximize2 className="w-3.5 h-3.5 text-saffron-spark" />
                      <span>Original Continuous Master Artwork (4960 × 10521 px)</span>
                    </div>
                  </div>
                )}

                {bhawaniActiveTab === "p1" && (
                  <div
                    onClick={() => openLightboxWithAsset(1)}
                    className="w-full max-w-3xl cursor-zoom-in group flex flex-col items-center"
                  >
                    <img
                      src="/assets/bhawani_panel_1_cover.png"
                      alt="Bhawani Moulders Cover Panel"
                      className="w-full rounded-2xl shadow-2xl transition-transform duration-500 group-hover:scale-[1.01]"
                    />
                    <div className="mt-4 text-[12px] font-mono text-ash-gray">
                      Panel 1: Corporate Cover, Hexagonal Monogram & Contact Infrastructure
                    </div>
                  </div>
                )}

                {bhawaniActiveTab === "p2" && (
                  <div
                    onClick={() => openLightboxWithAsset(2)}
                    className="w-full max-w-3xl cursor-zoom-in group flex flex-col items-center"
                  >
                    <img
                      src="/assets/bhawani_panel_2_products.png"
                      alt="Bhawani Moulders Products Panel"
                      className="w-full rounded-2xl shadow-2xl transition-transform duration-500 group-hover:scale-[1.01]"
                    />
                    <div className="mt-4 text-[12px] font-mono text-ash-gray">
                      Panel 2: Structural Steel, Angles, Channels & Long Products
                    </div>
                  </div>
                )}

                {bhawaniActiveTab === "p3" && (
                  <div
                    onClick={() => openLightboxWithAsset(3)}
                    className="w-full max-w-3xl cursor-zoom-in group flex flex-col items-center"
                  >
                    <img
                      src="/assets/bhawani_panel_3_services.png"
                      alt="Bhawani Moulders Services Panel"
                      className="w-full rounded-2xl shadow-2xl transition-transform duration-500 group-hover:scale-[1.01]"
                    />
                    <div className="mt-4 text-[12px] font-mono text-ash-gray">
                      Panel 3: Fabrication Services, Quality Assurance & Workshop Photography
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* CUSTOM SHOWCASE FOR KALPAVRAKSH */}
          {project.slug === "kalpavraksh" && (
            <div className="flex flex-col gap-8">
              <div
                onClick={() => openLightboxWithAsset(0)}
                className="group relative w-full max-w-3xl mx-auto aspect-[1545/2000] bg-[#FFFFFA] rounded-3xl p-6 sm:p-10 shadow-2xl border border-[#222222] cursor-zoom-in overflow-hidden"
              >
                <img
                  src="/assets/kalpavraksh_diwali_flyer.png"
                  alt="Kalpavraksh Diwali Flyer"
                  className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-[1.02]"
                />
                <div className="absolute bottom-6 right-6 flex items-center gap-2 bg-[#1B365D] text-bone-white px-4 py-2 rounded-full text-[12px] font-mono shadow-xl">
                  <Maximize2 className="w-4 h-4 text-saffron-spark" />
                  <span>Inspect Complete Uncropped Flyer (1545 × 2000 px)</span>
                </div>
              </div>

              {/* Cultural Ornamentation Breakdown */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
                <div className="p-6 bg-[#080808] rounded-2xl border border-[#181818] flex flex-col gap-2">
                  <span className="text-[12px] font-mono text-saffron-spark uppercase">
                    Mandala Corner Framing
                  </span>
                  <div className="text-[16px] text-bone-white font-medium">Geometric Floral Arches</div>
                  <p className="text-[14px] text-silver-mist font-light leading-relaxed">
                    Intricate symmetrical rangoli mandalas in royal navy and turquoise ground the upper corners with festive architecture.
                  </p>
                </div>

                <div className="p-6 bg-[#080808] rounded-2xl border border-[#181818] flex flex-col gap-2">
                  <span className="text-[12px] font-mono text-saffron-spark uppercase">
                    Toran Garland Strings
                  </span>
                  <div className="text-[16px] text-bone-white font-medium">Suspended Marigold Diyas</div>
                  <p className="text-[14px] text-silver-mist font-light leading-relaxed">
                    Golden flower beads suspend brass-effect diya lanterns from the top ceiling, evoking traditional home celebration portals.
                  </p>
                </div>

                <div className="p-6 bg-[#080808] rounded-2xl border border-[#181818] flex flex-col gap-2">
                  <span className="text-[12px] font-mono text-saffron-spark uppercase">
                    Lotus Foundation
                  </span>
                  <div className="text-[16px] text-bone-white font-medium">Sacred Oil Lamps</div>
                  <p className="text-[14px] text-silver-mist font-light leading-relaxed">
                    A dual-tiered base of illuminated clay lamps nestled inside golden lotus petals creates harmony and visual stability.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* ========================================================= */}
      {/* 03 — COLOUR EXPLORATION                                   */}
      {/* ========================================================= */}
      <section className="max-w-[1280px] mx-auto px-6 py-16 border-t border-[#121212]">
        <div className="flex flex-col gap-8">
          <div>
            <span className="text-[14px] uppercase tracking-[0.35px] font-semibold text-saffron-spark font-mono block mb-2">
              03 — Colour Architecture
            </span>
            <h2 className="text-[36px] sm:text-[48px] font-normal tracking-[-1.68px] text-bone-white">
              Extracted Palette.
            </h2>
            <p className="text-[16px] font-body-ultralight text-silver-mist max-w-xl mt-1">
              Exact hex values and chromatic hierarchies extracted directly from the verified source assets.
            </p>
          </div>

          <ColorPaletteViewer colors={project.colors} />
        </div>
      </section>

      {/* ========================================================= */}
      {/* 04 — TYPOGRAPHY SPECIMEN                                  */}
      {/* ========================================================= */}
      <section className="max-w-[1280px] mx-auto px-6 py-16 border-t border-[#121212]">
        <div className="flex flex-col gap-8">
          <div>
            <span className="text-[14px] uppercase tracking-[0.35px] font-semibold text-saffron-spark font-mono block mb-2">
              04 — Typographic Taxonomy
            </span>
            <h2 className="text-[36px] sm:text-[48px] font-normal tracking-[-1.68px] text-bone-white">
              Type & Letterform Hierarchy.
            </h2>
            <p className="text-[16px] font-body-ultralight text-silver-mist max-w-xl mt-1">
              Letterform taxonomy, geometry analysis, and recommended digital font pairings.
            </p>
          </div>

          <TypographyViewer specs={project.typography} />
        </div>
      </section>

      {/* ========================================================= */}
      {/* 05 — VISUAL LANGUAGE & MOTIFS                             */}
      {/* ========================================================= */}
      <section className="max-w-[1280px] mx-auto px-6 py-16 border-t border-[#121212]">
        <div className="flex flex-col gap-10">
          <div>
            <span className="text-[14px] uppercase tracking-[0.35px] font-semibold text-saffron-spark font-mono block mb-2">
              05 — Visual Language
            </span>
            <h2 className="text-[36px] sm:text-[48px] font-normal tracking-[-1.68px] text-bone-white">
              Graphic Motifs & Structure.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {project.visualLanguage.motifs.map((motif, idx) => (
              <div
                key={motif.title}
                className="flex flex-col gap-3 p-8 rounded-3xl bg-[#080808] border border-[#161616]"
              >
                <span className="text-[12px] font-mono text-saffron-spark uppercase">
                  MOTIF 0{idx + 1}
                </span>
                <h3 className="text-[20px] font-normal text-bone-white">
                  {motif.title}
                </h3>
                <p className="text-[15px] font-body-ultralight text-silver-mist leading-relaxed">
                  {motif.description}
                </p>
              </div>
            ))}
          </div>

          <div className="p-6 bg-[#0a0a0a] rounded-2xl border border-[#1a1a1a] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-[13px] font-mono text-ash-gray">
            <div>
              <strong className="text-bone-white">Grid System:</strong> {project.visualLanguage.gridConcept}
            </div>
            <div>
              <strong className="text-bone-white">Composition Rhythm:</strong> {project.visualLanguage.compositionStyle}
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 06 — REAL-WORLD BRAND APPLICATIONS                        */}
      {/* ========================================================= */}
      <section className="max-w-[1280px] mx-auto px-6 py-16 border-t border-[#121212]">
        <div className="flex flex-col gap-10">
          <div>
            <span className="text-[14px] uppercase tracking-[0.35px] font-semibold text-saffron-spark font-mono block mb-2">
              06 — Real-World Applications
            </span>
            <h2 className="text-[36px] sm:text-[48px] font-normal tracking-[-1.68px] text-bone-white">
              Application Contexts.
            </h2>
            <p className="text-[16px] font-body-ultralight text-silver-mist max-w-xl mt-1">
              Demonstrating adaptability across physical and digital touchpoints using the original vector and pixel artwork.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {project.applications.map((app) => (
              <MockupDevice key={app.title} app={app} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* NEXT PROJECT CONTINUATION BAR                             */}
      {/* ========================================================= */}
      {nextProject && (
        <section className="max-w-[1280px] mx-auto px-6 py-20 border-t border-[#161616]">
          <Link
            href={`/project/${nextProject.slug}`}
            className="group flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 p-8 sm:p-12 rounded-3xl bg-[#080808] border border-[#1a1a1a] hover:border-electric-iris/60 transition-all duration-300"
          >
            <div className="flex flex-col gap-2">
              <span className="text-[12px] font-mono text-saffron-spark uppercase tracking-wider">
                Next Case Study →
              </span>
              <h3 className="text-[32px] sm:text-[44px] font-normal tracking-[-1.5px] text-bone-white group-hover:text-electric-iris transition-colors">
                {nextProject.title}
              </h3>
              <p className="text-[15px] font-light text-ash-gray">
                {nextProject.subtitle}
              </p>
            </div>

            <div className="w-14 h-14 rounded-full bg-[#141414] border border-[#2a2a2a] group-hover:border-electric-iris group-hover:bg-electric-iris group-hover:text-bone-white flex items-center justify-center text-ash-gray transition-all">
              <ArrowRight className="w-6 h-6" />
            </div>
          </Link>
        </section>
      )}

      {/* Interactive Lightbox for High-Res Inspection */}
      <ImageLightbox
        assets={project.assets}
        initialIndex={lightboxInitialIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
      />

      {/* Asset Analysis Modal */}
      <AssetAnalysisModal
        isOpen={isPipelineOpen}
        onClose={() => setIsPipelineOpen(false)}
      />
    </main>
  );
}
