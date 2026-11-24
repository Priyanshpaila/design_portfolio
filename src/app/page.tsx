"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowDown, ArrowUpRight, Sparkles, Filter, Layers } from "lucide-react";
import Navbar from "@/components/Navbar";
import ConstellationCanvas from "@/components/ConstellationCanvas";
import AmbientParticles from "@/components/AmbientParticles";
import ProjectCard from "@/components/ProjectCard";
import AssetAnalysisModal from "@/components/AssetAnalysisModal";
import LineReveal from "@/components/LineReveal";
import { PROJECTS } from "@/data/projects";

export default function HomePage() {
  const [selectedFilter, setSelectedFilter] = useState("All Work");
  const [isPipelineOpen, setIsPipelineOpen] = useState(false);

  // Parallax container refs
  const heroSectionRef = useRef<HTMLDivElement | null>(null);
  const heroTextRef = useRef<HTMLDivElement | null>(null);
  const decisionSectionRef = useRef<HTMLDivElement | null>(null);
  const worksSectionRef = useRef<HTMLDivElement | null>(null);

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

  // Dynamic GSAP Layered Scroll Parallax (Client Only)
  useEffect(() => {
    let ctx: any = null;
    let isCancelled = false;

    Promise.all([
      import("gsap"),
      import("gsap/ScrollTrigger"),
    ]).then(([gsapModule, stModule]) => {
      if (isCancelled) return;

      const { gsap } = gsapModule;
      const { ScrollTrigger } = stModule;
      gsap.registerPlugin(ScrollTrigger);

      ctx = gsap.context(() => {
        // 1. Hero text parallax depth drift
        if (heroTextRef.current && heroSectionRef.current) {
          gsap.to(heroTextRef.current, {
            yPercent: 25,
            opacity: 0.25,
            ease: "none",
            scrollTrigger: {
              trigger: heroSectionRef.current,
              start: "top top",
              end: "bottom top",
              scrub: true,
            },
          });
        }

        // 2. Parallax floating effect on selected works section
        const cards = document.querySelectorAll(".project-card-parallax");
        cards.forEach((card, i) => {
          const speed = i % 2 === 0 ? -30 : 30; // alternate vertical speeds
          gsap.fromTo(
            card,
            { y: speed },
            {
              y: -speed,
              ease: "none",
              scrollTrigger: {
                trigger: card,
                start: "top bottom",
                end: "bottom top",
                scrub: true,
              },
            }
          );
        });

        // 3. Staggered reveal for section subheads
        const fadeElements = document.querySelectorAll(".gsap-fade-in");
        fadeElements.forEach((el) => {
          gsap.fromTo(
            el,
            { opacity: 0, y: 35 },
            {
              opacity: 1,
              y: 0,
              duration: 1.1,
              ease: "power3.out",
              scrollTrigger: {
                trigger: el,
                start: "top 85%",
                once: true,
              },
            }
          );
        });
      });
    }).catch(() => {});

    return () => {
      isCancelled = true;
      if (ctx) ctx.revert();
    };
  }, [filteredProjects]);

  return (
    <main className="w-full bg-void min-h-screen relative overflow-hidden">
      {/* Background ambient drifting particles */}
      <AmbientParticles count={35} />

      {/* Top Navbar */}
      <Navbar onOpenPipeline={() => setIsPipelineOpen(true)} />

      {/* ========================================================= */}
      {/* HERO SECTION — Matching Dala Reference Image & Video      */}
      {/* Left: Line Reveal "Unlock collective wisdom."             */}
      {/* Right: Signature Brain Constellation & Floating 3D Prisms */}
      {/* ========================================================= */}
      <section
        ref={heroSectionRef}
        className="relative min-h-[calc(100vh-80px)] flex items-center justify-center px-6 py-12 md:py-20 max-w-[1280px] mx-auto overflow-visible"
      >
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center z-10">
          {/* Left Column: Line Reveal Typography */}
          <div
            ref={heroTextRef}
            className="lg:col-span-6 flex flex-col items-start gap-8 z-20"
          >
            {/* Amber Uppercase Label Token */}
            <div className="gsap-fade-in flex items-center gap-2">
              <span className="text-[13px] sm:text-[14px] uppercase tracking-[0.35px] font-semibold text-saffron-spark font-mono">
                STOP MANAGING KNOWLEDGE. START USING IT.
              </span>
            </div>

            {/* Line Reveal Monolithic Display Headline (Weight 400, Tracking -0.04em) */}
            <LineReveal
              as="h1"
              lines={["Unlock", "collective", "wisdom."]}
              className="text-[62px] sm:text-[88px] lg:text-[104px] xl:text-[113px] font-normal leading-[0.94] tracking-[-3.12px] xl:tracking-[-4.52px] text-bone-white font-sans"
              duration={1.3}
              stagger={0.14}
              triggerOnScroll={false}
            />

            {/* Ultra-Light (200) Body Copy */}
            <div className="gsap-fade-in flex flex-col gap-3">
              <p className="text-[18px] sm:text-[20px] font-body-ultralight text-silver-mist leading-[1.5] max-w-[500px]">
                Plug into your team's shared brainpower. Ask Dala to instantly find anything or anyone from any workplace system. Focus on doing your best work with context, conviction and clarity.
              </p>
              <div className="text-[13px] font-mono text-ash-gray tracking-wide">
                Your workplace has the answer. Just ask Dala for it.
              </div>
            </div>

            {/* Primary Action Button (Filled Violet Pill #8052ff) & Ghost Link */}
            <div className="gsap-fade-in flex flex-wrap items-center gap-6 pt-2">
              <a href="#selected-works" className="btn-electric-pill">
                <span>Request Access</span>
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

          {/* Right Column: Signature 3D Brain Constellation & Floating Wireframe Polyhedra */}
          <div className="lg:col-span-6 h-[480px] sm:h-[580px] lg:h-[720px] relative w-full flex items-center justify-center">
            <div className="w-full h-full relative">
              <ConstellationCanvas className="w-full h-full" interactive={true} />

              {/* Bottom Subtle Signature Tag */}
              <div className="absolute bottom-4 right-4 text-right pointer-events-none opacity-40">
                <span className="text-[11px] font-mono text-ash-gray uppercase tracking-widest block">
                  Constellation on Black Velvet
                </span>
                <span className="text-[10px] font-mono text-silver-mist">
                  Lateral Cerebral Topology & 3D Geometry
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 2ND SECTION: "Make decisions with confidence."            */}
      {/* ========================================================= */}
      <section
        ref={decisionSectionRef}
        className="max-w-[1280px] mx-auto px-6 py-24 sm:py-32 border-t border-[#121212] relative z-10"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 flex flex-col gap-6">
            <span className="text-[14px] uppercase tracking-[0.35px] font-semibold text-saffron-spark font-mono">
              Decision Intelligence
            </span>
            <LineReveal
              as="h2"
              lines={["Make decisions", "with confidence"]}
              className="text-[44px] sm:text-[64px] lg:text-[72px] font-normal leading-[1.04] tracking-[-2.6px] text-bone-white font-sans"
              duration={1.2}
              stagger={0.12}
            />
          </div>

          <div className="lg:col-span-6 flex flex-col gap-4">
            <p className="gsap-fade-in text-[18px] sm:text-[20px] font-body-ultralight text-silver-mist leading-[1.6]">
              Dala's bleeding-edge AI search tool automates extracting knowledge from across your organisation so that you can take the guesswork out of your work.
            </p>
            <p className="gsap-fade-in text-[16px] font-body-ultralight text-ash-gray leading-[1.5]">
              Presented here as a sculptural graphic design case study portfolio, bridging original raw brand assets, bilingual typography, industrial steel publications, and festival creatives into monolithic visual clarity.
            </p>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION HEADLINE BLOCK — Dala Asymmetric Reading Rhythm   */}
      {/* ========================================================= */}
      <section className="max-w-[1280px] mx-auto px-6 py-20 border-t border-[#121212]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-6">
            <LineReveal
              as="h2"
              lines={["Original artwork.", "Structured without", "compromise."]}
              className="text-[44px] sm:text-[60px] font-normal leading-[1.05] tracking-[-2.2px] text-bone-white font-sans"
              duration={1.2}
              stagger={0.12}
            />
          </div>
          <div className="lg:col-span-6 flex flex-col gap-4">
            <span className="text-[14px] uppercase tracking-[0.35px] font-semibold text-saffron-spark font-mono">
              The Art-Direction Standard
            </span>
            <p className="gsap-fade-in text-[18px] font-body-ultralight text-silver-mist leading-[1.6]">
              Every project in this collection is built directly from original client assets produced during professional employment. No stock placeholders, no fabricated metrics, no generic card borders. The work speaks through high-resolution raster integrity, typographic taxonomy, and real-world application mockups.
            </p>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* SELECTED WORKS SECTION                                    */}
      {/* Filterable categories + Asymmetric Layered Parallax Grid  */}
      {/* ========================================================= */}
      <section
        id="selected-works"
        ref={worksSectionRef}
        className="max-w-[1280px] mx-auto px-6 py-16 scroll-mt-24"
      >
        {/* Section Header with Category Filter Bar */}
        <div className="flex flex-col gap-8 mb-12">
          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4">
            <div>
              <span className="text-[14px] uppercase tracking-[0.35px] font-semibold text-saffron-spark font-mono block mb-2">
                Portfolio Index
              </span>
              <LineReveal
                as="h3"
                lines={["Selected Works."]}
                className="text-[42px] sm:text-[48px] font-normal tracking-[-1.68px] text-bone-white font-sans"
              />
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

        {/* Floating Project Grid with Layered Parallax Depth */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
          {filteredProjects.map((project, idx) => (
            <div key={project.id} className="project-card-parallax">
              <ProjectCard project={project} index={idx} />
            </div>
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
            <LineReveal
              as="h3"
              lines={[
                "Built for seamless expansion.",
                "Ingest raw assets into case studies.",
              ]}
              className="text-[36px] sm:text-[44px] font-normal leading-[1.1] tracking-[-1.5px] text-bone-white font-sans"
            />
            <p className="gsap-fade-in text-[17px] font-body-ultralight text-silver-mist leading-relaxed">
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
            <LineReveal
              as="h3"
              lines={["Tokens & Design Truth."]}
              className="text-[36px] sm:text-[42px] font-normal tracking-[-1.68px] text-bone-white font-sans"
            />
            <p className="gsap-fade-in text-[17px] font-body-ultralight text-silver-mist max-w-xl">
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
