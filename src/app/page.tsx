"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowDown, ArrowUpRight, Sparkles, Mail } from "lucide-react";
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
  const approachSectionRef = useRef<HTMLDivElement | null>(null);
  const worksSectionRef = useRef<HTMLDivElement | null>(null);

  const filterCategories = [
    "All Work",
    "Brand Identity",
    "Logo Design",
    "Corporate Design",
    "Brochure & Editorial Design",
    "Digital Branding",
    "Promotional Design",
    "Festival Creative",
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
            yPercent: 22,
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
          const speed = i % 2 === 0 ? -28 : 28;
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

        // 3. Staggered reveal for subheads and body
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
      {/* HERO SECTION — Personal Graphic Design Portfolio          */}
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
            {/* Saffron Spark Uppercase Label */}
            <div className="gsap-fade-in flex items-center gap-2">
              <span className="text-[13px] sm:text-[14px] uppercase tracking-[0.35px] font-semibold text-saffron-spark font-mono">
                SELECTED GRAPHIC DESIGN WORKS • CREATIVE ARCHIVE
              </span>
            </div>

            {/* Line Reveal Monolithic Headline (Weight 400, Tracking -0.04em) */}
            <LineReveal
              as="h1"
              lines={["Designing", "ideas into", "visual experiences."]}
              className="text-[58px] sm:text-[84px] lg:text-[98px] xl:text-[106px] font-normal leading-[0.95] tracking-[-3.12px] xl:tracking-[-4.52px] text-bone-white font-sans"
              duration={1.3}
              stagger={0.14}
              triggerOnScroll={false}
            />

            {/* Ultra-Light (200) Body Copy */}
            <div className="gsap-fade-in flex flex-col gap-3">
              <p className="text-[18px] sm:text-[20px] font-body-ultralight text-silver-mist leading-[1.5] max-w-[500px]">
                A collection of graphic design work exploring brand identities, visual communication, digital graphics and print design. Each project reflects a different idea, purpose and creative direction.
              </p>
            </div>

            {/* Primary Action Button (Filled Violet Pill #8052ff) & Secondary CTA */}
            <div className="gsap-fade-in flex flex-wrap items-center gap-6 pt-2">
              <a href="#selected-works" className="btn-electric-pill">
                <span>Explore Selected Work</span>
                <ArrowDown className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                className="btn-ghost-link group"
              >
                <span>Get in Touch</span>
                <ArrowUpRight className="w-4 h-4 text-saffron-spark transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
          </div>

          {/* Right Column: Signature 3D Creative Particle Constellation */}
          <div className="lg:col-span-6 h-[480px] sm:h-[580px] lg:h-[720px] relative w-full flex items-center justify-center">
            <div className="w-full h-full relative">
              <ConstellationCanvas className="w-full h-full" interactive={true} />

              {/* Bottom Subtle Signature Tag */}
              {/* <div className="absolute bottom-4 right-4 text-right pointer-events-none opacity-40">
                <span className="text-[11px] font-mono text-ash-gray uppercase tracking-widest block">
                  Constellation on Black Velvet
                </span>
                <span className="text-[10px] font-mono text-silver-mist">
                  Creative Brainpower • Distributed Visual Ideas
                </span>
              </div> */}
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 2ND SECTION: VISUAL APPROACH & INTENTION                  */}
      {/* ========================================================= */}
      <section
        ref={approachSectionRef}
        className="max-w-[1280px] mx-auto px-6 py-24 sm:py-32 border-t border-[#121212] relative z-10"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 flex flex-col gap-6">
            <span className="text-[14px] uppercase tracking-[0.35px] font-semibold text-saffron-spark font-mono">
              Design Philosophy
            </span>
            <LineReveal
              as="h2"
              lines={["Ideas shaped with", "clarity and purpose."]}
              className="text-[44px] sm:text-[64px] lg:text-[72px] font-normal leading-[1.04] tracking-[-2.6px] text-bone-white font-sans"
              duration={1.2}
              stagger={0.12}
            />
          </div>

          <div className="lg:col-span-6 flex flex-col gap-4">
            <p className="gsap-fade-in text-[18px] sm:text-[20px] font-body-ultralight text-silver-mist leading-[1.6]">
              Every design project begins with understanding the core objective—whether defining a company identity, structuring an industrial publication, or crafting festive visual storytelling.
            </p>
            <p className="gsap-fade-in text-[16px] font-body-ultralight text-ash-gray leading-[1.5]">
              This archive presents verified creative output produced across different design formats, with special attention given to typography hierarchy, chromatic tension, and uncompressed artwork presentation.
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
              <p className="text-[16px] font-body-ultralight text-silver-mist mt-2">
                A collection of identities, campaigns and visual communication created across different projects.
              </p>
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
      {/* ABOUT SECTION                                             */}
      {/* ========================================================= */}
      <section id="about" className="max-w-[1280px] mx-auto px-6 py-28 border-t border-[#121212] scroll-mt-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5 flex flex-col gap-4">
            <span className="text-[14px] uppercase tracking-[0.35px] font-semibold text-saffron-spark font-mono">
              About the Designer
            </span>
            <LineReveal
              as="h3"
              lines={["A little about", "the designer."]}
              className="text-[36px] sm:text-[46px] font-normal leading-[1.1] tracking-[-1.68px] text-bone-white font-sans"
            />
          </div>

          <div className="lg:col-span-7 flex flex-col gap-6">
            <p className="gsap-fade-in text-[20px] sm:text-[22px] font-body-ultralight text-bone-white leading-[1.6]">
              I'm a graphic designer interested in creating thoughtful visual identities and meaningful design experiences. My work spans branding, corporate communication, digital graphics and print design, with a focus on turning ideas into clear and engaging visuals.
            </p>
            <p className="gsap-fade-in text-[16px] font-body-ultralight text-silver-mist leading-[1.6]">
              I believe great design begins with listening and understanding the context before making aesthetic decisions. Whether balancing bilingual typography, organizing complex industrial information into an editorial spread, or developing a high-contrast digital identity, I focus on craftsmanship, composition, and visual longevity.
            </p>

            {/* Disciplines tags */}
            <div className="flex flex-wrap gap-2 pt-4 border-t border-[#161616]">
              {[
                "Brand Identity Systems",
                "Logo & Mark Design",
                "Brochure & Editorial Layout",
                "Corporate Communications",
                "Bilingual Typography (Latin & Devanagari)",
                "Digital Assets & Splash Screens",
                "Print Production & Packaging",
              ].map((item) => (
                <span
                  key={item}
                  className="text-[12px] font-mono text-ash-gray px-3 py-1.5 rounded-full bg-[#0a0a0a] border border-[#1a1a1a]"
                >
                  • {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* CONTACT SECTION                                           */}
      {/* ========================================================= */}
      <section id="contact" className="max-w-[1280px] mx-auto px-6 py-28 border-t border-[#121212] scroll-mt-24">
        <div className="w-full bg-[#080808] border border-[#181818] rounded-3xl p-8 sm:p-14 relative overflow-hidden flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-electric-iris/10 rounded-full blur-3xl pointer-events-none" />

          <div className="flex-1 flex flex-col gap-4 z-10 max-w-2xl">
            <span className="text-[13px] font-mono text-saffron-spark uppercase tracking-wider font-semibold">
              Get in Touch
            </span>
            <LineReveal
              as="h3"
              lines={["Have a project", "in mind?"]}
              className="text-[40px] sm:text-[52px] font-normal leading-[1.05] tracking-[-2px] text-bone-white font-sans"
            />
            <p className="gsap-fade-in text-[18px] font-body-ultralight text-silver-mist leading-relaxed">
              Whether it's a new identity, a creative collaboration or an opportunity to work together, I'd love to hear from you.
            </p>
          </div>

          <div className="z-10 flex flex-col sm:flex-row gap-4 items-center">
            <a
              href="mailto:contact@designer.portfolio?subject=Graphic%20Design%20Inquiry"
              className="btn-electric-pill whitespace-nowrap"
            >
              <Mail className="w-4 h-4" />
              <span>Let's Talk</span>
            </a>
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
