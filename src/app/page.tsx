"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowDown, ArrowUpRight, Sparkles, Filter, Layers } from "lucide-react";
import Navbar from "@/components/Navbar";
import ConstellationCanvas from "@/components/ConstellationCanvas";
import AmbientParticles from "@/components/AmbientParticles";
import ProjectCard from "@/components/ProjectCard";
import AssetAnalysisModal from "@/components/AssetAnalysisModal";
import { PROJECTS } from "@/data/projects";

export default function HomePage() {
  const [selectedFilter, setSelectedFilter] = useState("All Work");
  const [isPipelineOpen, setIsPipelineOpen] = useState(false);

  const filterCategories = [
    "All Work",
    "Brand Identity & Logo Design",
    "Corporate Branding",
    "Editorial & Brochure Design",
    "Campaign & Promotional Design",
    "Mobile Application Graphics",
  ];

  const filteredProjects =
    selectedFilter === "All Work"
      ? PROJECTS
      : PROJECTS.filter((p) => p.categories.includes(selectedFilter));

  return (
    <main className="w-full bg-void min-h-screen relative overflow-hidden">
      {/* Ambient background drifting triangles outside the hero constellation */}
      <AmbientParticles count={40} />

      {/* Top Navbar */}
      <Navbar onOpenPipeline={() => setIsPipelineOpen(true)} />

      {/* ========================================================= */}
      {/* HERO SECTION — Dala Asymmetric Split                      */}
      {/* Left: Oversized 78-113px Display Headline + Ultra-Light Body */}
      {/* Right: Signature Brain-Shape Particle Constellation       */}
      {/* ========================================================= */}
      <section className="relative min-h-[calc(100vh-80px)] flex items-center justify-center px-6 py-12 md:py-20 max-w-[1280px] mx-auto">
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center z-10">
          {/* Left Column: Typographic Monument (7 cols on lg) */}
          <div className="lg:col-span-7 flex flex-col items-start gap-8">
            {/* Amber Label Token */}
            <div className="flex items-center gap-2">
              <span className="text-[14px] uppercase tracking-[0.35px] font-semibold text-saffron-spark font-mono">
                Visual Intelligence & Identity Archive
              </span>
            </div>

            {/* Oversized Monolithic Display Headline (Weight 400, Negative Tracking) */}
            <h1 className="text-[54px] sm:text-[78px] lg:text-[96px] xl:text-[104px] font-normal leading-[0.98] tracking-[-3.12px] xl:tracking-[-4.52px] text-bone-white font-sans">
              Your workplace has the answer. Just ask Dala for it.
            </h1>

            {/* Ultra-Light (200) Body Copy */}
            <p className="text-[18px] sm:text-[20px] font-body-ultralight text-silver-mist leading-[1.5] max-w-[540px]">
              A curated graphic design archive transforming commercial brand identities, bilingual typography, structural steel editorial publications, and festival creatives into monolithic visual case studies.
            </p>

            {/* Primary Action Button (Filled Violet Pill #8052ff) & Ghost Link */}
            <div className="flex flex-wrap items-center gap-6 pt-2">
              <a href="#selected-works" className="btn-electric-pill">
                <span>Explore Selected Works</span>
                <ArrowDown className="w-4 h-4" />
              </a>

              <button
                onClick={() => setIsPipelineOpen(true)}
                className="btn-ghost-link group"
              >
                <Sparkles className="w-4 h-4 text-saffron-spark transition-transform group-hover:rotate-12" />
                <span>Asset Pipeline Engine</span>
              </button>
            </div>
          </div>

          {/* Right Column: Signature Brain-Shape Particle Constellation (5 cols on lg) */}
          <div className="lg:col-span-5 h-[420px] sm:h-[520px] lg:h-[620px] relative w-full flex items-center justify-center">
            {/* Constellation Canvas */}
            <div className="w-full h-full relative">
              <ConstellationCanvas className="w-full h-full" interactive={true} />
              
              {/* Subtle caption token */}
              <div className="absolute bottom-2 right-2 text-right pointer-events-none opacity-40">
                <span className="text-[11px] font-mono text-ash-gray uppercase tracking-widest block">
                  Signature Gesture
                </span>
                <span className="text-[10px] font-mono text-silver-mist">
                  Neural Knowledge Constellation
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION HEADLINE BLOCK — Dala Asymmetric Reading Rhythm   */}
      {/* ========================================================= */}
      <section className="max-w-[1280px] mx-auto px-6 py-20 border-t border-[#121212]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-6">
            <h2 className="text-[48px] sm:text-[68px] font-normal leading-[1.05] tracking-[-2.4px] text-bone-white font-sans">
              Original artwork. Structured without compromise.
            </h2>
          </div>
          <div className="lg:col-span-6 flex flex-col gap-4">
            <span className="text-[14px] uppercase tracking-[0.35px] font-semibold text-saffron-spark font-mono">
              The Art-Direction Standard
            </span>
            <p className="text-[18px] font-body-ultralight text-silver-mist leading-[1.5]">
              Every project in this collection is built directly from original client assets produced during professional employment. No stock placeholders, no fabricated metrics, no generic card borders. The work speaks through high-resolution raster integrity, typographic taxonomy, and real-world application mockups.
            </p>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* SELECTED WORKS SECTION                                    */}
      {/* Filterable categories + Asymmetric Two-Column Grid        */}
      {/* ========================================================= */}
      <section id="selected-works" className="max-w-[1280px] mx-auto px-6 py-16 scroll-mt-24">
        {/* Section Header with Category Filter Bar */}
        <div className="flex flex-col gap-8 mb-12">
          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4">
            <div>
              <span className="text-[14px] uppercase tracking-[0.35px] font-semibold text-saffron-spark font-mono block mb-2">
                Portfolio Index
              </span>
              <h3 className="text-[42px] sm:text-[48px] font-normal tracking-[-1.68px] text-bone-white font-sans">
                Selected Works.
              </h3>
            </div>
            <div className="text-[14px] text-ash-gray font-mono">
              Showing {filteredProjects.length} of {PROJECTS.length} Projects
            </div>
          </div>

          {/* Minimalist Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 pt-2 border-b border-[#141414] pb-6">
            {filterCategories.map((cat) => {
              const isSelected = selectedFilter === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedFilter(cat)}
                  className={`text-[13px] font-semibold tracking-[0.02em] px-4 py-2 rounded-full transition-all ${
                    isSelected
                      ? "bg-electric-iris text-bone-white shadow-lg shadow-electric-iris/20"
                      : "text-ash-gray hover:text-bone-white hover:bg-[#111111]"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* Floating Project Grid (No card borders, no shadows, 24px image radius) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
          {filteredProjects.map((project, idx) => (
            <ProjectCard key={project.id} project={project} index={idx} />
          ))}
        </div>
      </section>

      {/* ========================================================= */}
      {/* AUTOMATION & ASSET ANALYSIS BANNER (Section 3 & 11)        */}
      {/* ========================================================= */}
      <section id="asset-pipeline" className="max-w-[1280px] mx-auto px-6 py-24 scroll-mt-24">
        <div className="w-full bg-[#080808] border border-[#181818] rounded-3xl p-8 sm:p-14 relative overflow-hidden flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10">
          {/* Subtle violet ambient wash */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-electric-iris/10 rounded-full blur-3xl pointer-events-none" />

          <div className="flex-1 flex flex-col gap-4 z-10 max-w-2xl">
            <div className="flex items-center gap-2 text-saffron-spark font-mono text-[13px] uppercase tracking-wider font-semibold">
              <Sparkles className="w-4 h-4" />
              <span>Automated Project Ingestion Pipeline</span>
            </div>
            <h3 className="text-[36px] sm:text-[44px] font-normal leading-[1.1] tracking-[-1.5px] text-bone-white font-sans">
              Built for seamless expansion. Ingest raw assets into art-directed case studies.
            </h3>
            <p className="text-[17px] font-body-ultralight text-silver-mist leading-relaxed">
              When new design assets are uploaded, our structured 6-phase pipeline audits pixel integrity, groups related brand variants, isolates exact hex palettes, detects typography, and synthesizes Behance-standard project documentation automatically.
            </p>
          </div>

          <div className="z-10 flex flex-col sm:flex-row gap-4 items-center">
            <button
              onClick={() => setIsPipelineOpen(true)}
              className="btn-electric-pill whitespace-nowrap"
            >
              <span>Inspect Ingestion Engine</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* DESIGN TOKENS & ARCHITECTURE SUMMARY (DESIGN.md)          */}
      {/* ========================================================= */}
      <section id="design-system" className="max-w-[1280px] mx-auto px-6 py-20 border-t border-[#121212] scroll-mt-24">
        <div className="flex flex-col gap-12">
          <div className="flex flex-col gap-2">
            <span className="text-[14px] uppercase tracking-[0.35px] font-semibold text-saffron-spark font-mono">
              System Architecture
            </span>
            <h3 className="text-[36px] sm:text-[42px] font-normal tracking-[-1.68px] text-bone-white font-sans">
              Tokens & Design Truth.
            </h3>
            <p className="text-[17px] font-body-ultralight text-silver-mist max-w-xl">
              Strictly preserved from DESIGN.md. Pure void canvas, monolithic 400 headlines, signature 200 body copy, and single Electric Iris interactive pill.
            </p>
          </div>

          {/* Color Tokens Strip */}
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-4">
            {[
              { name: "Void", hex: "#000000", token: "--color-void" },
              { name: "Bone White", hex: "#ffffff", token: "--color-bone-white" },
              { name: "Ash Gray", hex: "#9a9a9a", token: "--color-ash-gray" },
              { name: "Silver Mist", hex: "#bdbdbd", token: "--color-silver-mist" },
              { name: "Electric Iris", hex: "#8052ff", token: "--color-electric-iris" },
              { name: "Saffron Spark", hex: "#ffb829", token: "--color-saffron-spark" },
              { name: "Deep Verdant", hex: "#15846e", token: "--color-deep-verdant" },
            ].map((tok) => (
              <div key={tok.token} className="flex flex-col gap-2 p-4 bg-[#0a0a0a] rounded-2xl border border-[#181818]">
                <div
                  className="w-full h-12 rounded-xl border border-bone-white/10"
                  style={{ backgroundColor: tok.hex }}
                />
                <div className="text-[13px] font-medium text-bone-white">{tok.name}</div>
                <div className="text-[11px] font-mono text-ash-gray">{tok.hex}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Asset Pipeline Modal */}
      <AssetAnalysisModal
        isOpen={isPipelineOpen}
        onClose={() => setIsPipelineOpen(false)}
      />
    </main>
  );
}
