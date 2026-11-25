"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  Maximize2,
  Sparkles,
  Download,
  Copy,
  Check,
  Eye,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import ImageLightbox from "@/components/ImageLightbox";
import LineReveal from "@/components/LineReveal";
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
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxInitialIndex, setLightboxInitialIndex] = useState(0);
  const [isPipelineOpen, setIsPipelineOpen] = useState(false);
  const [copiedHex, setCopiedHex] = useState<string | null>(null);

  const openLightboxWithAsset = (assetIndex: number) => {
    setLightboxInitialIndex(assetIndex);
    setLightboxOpen(true);
  };

  const handleCopyHex = (hex: string) => {
    navigator.clipboard.writeText(hex);
    setCopiedHex(hex);
    setTimeout(() => setCopiedHex(null), 2000);
  };

  return (
    <main className="w-full bg-void min-h-screen relative overflow-x-hidden">
      <Navbar onOpenPipeline={() => setIsPipelineOpen(true)} />

      {/* Top Breadcrumb & Project Switcher */}
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 pt-6 sm:pt-10 pb-4 flex items-center justify-between border-b border-[#141414] gap-2">
        <Link
          href="/#selected-works"
          className="btn-ghost-link group flex items-center gap-1.5 sm:gap-2 text-[13px] sm:text-[14px]"
        >
          <ArrowLeft className="w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform group-hover:-translate-x-1" />
          <span>Selected Works</span>
        </Link>

        <div className="flex items-center gap-2 sm:gap-4 text-[12px] sm:text-[13px] font-mono text-ash-gray">
          {prevProject && (
            <Link
              href={`/project/${prevProject.slug}`}
              className="hover:text-bone-white transition-colors flex items-center gap-1 p-1"
              title={`Previous: ${prevProject.title}`}
            >
              <span>←</span>
              <span className="hidden md:inline">Prev ({prevProject.title})</span>
              <span className="inline md:hidden">Prev</span>
            </Link>
          )}
          {prevProject && nextProject && (
            <span className="opacity-40">•</span>
          )}
          {nextProject && (
            <Link
              href={`/project/${nextProject.slug}`}
              className="hover:text-bone-white transition-colors flex items-center gap-1 p-1"
              title={`Next: ${nextProject.title}`}
            >
              <span className="hidden md:inline">Next ({nextProject.title})</span>
              <span className="inline md:hidden">Next</span>
              <span>→</span>
            </Link>
          )}
        </div>
      </div>

      {/* ========================================================= */}
      {/* 01 — PROJECT HERO & CREATIVE STATEMENT                    */}
      {/* ========================================================= */}
      <section className="max-w-[1280px] mx-auto px-4 sm:px-6 py-10 sm:py-16 md:py-24">
        <div className="flex flex-col gap-4 sm:gap-6">
          {/* Category & Discipline Tags */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-3">
            <span className="text-[11px] sm:text-[12px] uppercase font-mono tracking-wider text-saffron-spark font-semibold">
              {project.category}
            </span>
            <span className="text-ash-gray text-[11px] sm:text-[12px] font-mono">•</span>
            <span className="text-[11px] sm:text-[12px] uppercase font-mono tracking-wider text-ash-gray">
              {project.disciplines.join(" • ")}
            </span>
          </div>

          {/* Monolithic Project Display Title with fluid responsive scaling */}
          <LineReveal
            as="h1"
            lines={[project.title]}
            className="text-[38px] sm:text-[60px] md:text-[76px] lg:text-[96px] font-normal leading-[1.02] tracking-[-1.5px] sm:tracking-[-2.5px] lg:tracking-[-3.5px] text-bone-white font-sans max-w-5xl break-words"
            duration={1.2}
            triggerOnScroll={false}
          />

          <div className="text-[18px] sm:text-[24px] md:text-[28px] font-normal tracking-[-0.4px] sm:tracking-[-0.6px] text-silver-mist leading-snug">
            {project.subtitle}
          </div>

          <p className="text-[16px] sm:text-[18px] md:text-[20px] font-body-ultralight text-silver-mist leading-[1.6] max-w-3xl pt-2 sm:pt-4">
            {project.statement}
          </p>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 02 — THE VISUAL MOOD BOARD (Art-Directed Presentation)    */}
      {/* ========================================================= */}
      <section className="max-w-[1280px] mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <div className="flex flex-col gap-6 sm:gap-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 pb-4 border-b border-[#141414]">
            <div>
              <span className="text-[12px] sm:text-[13px] uppercase tracking-[0.35px] font-semibold text-saffron-spark font-mono block mb-1">
                Visual Presentation
              </span>
              <h2 className="text-[26px] sm:text-[36px] md:text-[42px] font-normal tracking-[-1.2px] text-bone-white">
                Project Mood Board.
              </h2>
            </div>

            <button
              onClick={() => openLightboxWithAsset(0)}
              className="btn-electric-pill w-full sm:w-auto justify-center text-[13px] sm:text-[14px] py-2.5 sm:py-3"
            >
              <Maximize2 className="w-4 h-4 shrink-0" />
              <span>Inspect High-Res Asset</span>
            </button>
          </div>

          {/* Mood Board Quote Banner */}
          {project.moodBoard.heroQuote && (
            <div className="p-5 sm:p-8 md:p-12 rounded-2xl sm:rounded-3xl bg-[#080808] border border-[#161616] relative overflow-hidden">
              <span className="text-[11px] font-mono uppercase tracking-widest text-ash-gray block mb-2 sm:mb-3">
                Creative Direction
              </span>
              <p className="text-[18px] sm:text-[26px] md:text-[34px] font-normal leading-[1.3] tracking-[-0.6px] text-bone-white font-sans max-w-4xl">
                "{project.moodBoard.heroQuote}"
              </p>
            </div>
          )}

          {/* Asymmetric Masonry Mood Board Grid */}
          <div className="grid grid-cols-12 gap-4 sm:gap-6 lg:gap-8 items-start">
            {project.moodBoard.tiles.map((tile, idx) => {
              const colClass = tile.colSpan || "col-span-12 lg:col-span-6";

              if (tile.type === "presentation" || tile.type === "image" || tile.type === "detail") {
                return (
                  <div
                    key={idx}
                    onClick={() => openLightboxWithAsset(0)}
                    className={`${colClass} group relative rounded-2xl sm:rounded-3xl bg-[#080808] border border-[#181818] overflow-hidden cursor-zoom-in transition-all duration-300 hover:border-[#2a2a2a]`}
                  >
                    <div className={`w-full ${tile.aspect || "aspect-[16/10]"} min-h-[220px] sm:min-h-[280px] md:min-h-[340px] flex items-center justify-center p-4 sm:p-6 md:p-10 relative`}>
                      <img
                        src={tile.image}
                        alt={tile.title}
                        className="max-h-full max-w-full object-contain transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                      />
                      {/* Zoom prompt icon on hover / touch */}
                      <div className="absolute top-3 right-3 sm:top-4 sm:right-4 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-void/80 border border-[#2a2a2a] flex items-center justify-center text-ash-gray group-hover:text-bone-white opacity-80 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity">
                        <Maximize2 className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                      </div>
                    </div>

                    <div className="p-4 sm:p-6 border-t border-[#141414] bg-[#060606] flex flex-col gap-1">
                      <div className="flex items-center justify-between gap-2">
                        <span className="text-[14px] sm:text-[16px] font-medium text-bone-white">
                          {tile.title}
                        </span>
                        {tile.subtitle && (
                          <span className="text-[11px] sm:text-[12px] font-mono text-ash-gray shrink-0">
                            {tile.subtitle}
                          </span>
                        )}
                      </div>
                      {tile.description && (
                        <p className="text-[12px] sm:text-[13px] text-silver-mist font-light leading-relaxed">
                          {tile.description}
                        </p>
                      )}
                    </div>
                  </div>
                );
              }

              if (tile.type === "color-swatch") {
                const isCopied = copiedHex === tile.color;
                return (
                  <div
                    key={idx}
                    onClick={() => tile.color && handleCopyHex(tile.color)}
                    className={`${colClass} group relative rounded-2xl sm:rounded-3xl overflow-hidden cursor-pointer transition-all duration-300 border border-[#1a1a1a] hover:border-[#333333]`}
                  >
                    <div
                      className={`w-full ${tile.aspect || "aspect-[4/3]"} min-h-[180px] sm:min-h-[220px] p-5 sm:p-6 md:p-8 flex flex-col justify-between relative`}
                      style={{ backgroundColor: tile.color }}
                    >
                      <div className="flex items-center justify-between">
                        <span
                          className="text-[11px] sm:text-[12px] font-mono uppercase tracking-wider px-2.5 sm:px-3 py-1 rounded-full bg-void/30 backdrop-blur-sm"
                          style={{ color: tile.textColor || "#FFFFFF" }}
                        >
                          {tile.subtitle}
                        </span>
                        <div
                          className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-void/30 backdrop-blur-sm flex items-center justify-center opacity-80 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity"
                          style={{ color: tile.textColor || "#FFFFFF" }}
                        >
                          {isCopied ? <Check className="w-3.5 h-3.5 sm:w-4 sm:h-4" /> : <Copy className="w-3.5 h-3.5 sm:w-4 sm:h-4" />}
                        </div>
                      </div>

                      <div className="flex flex-col gap-1">
                        <span
                          className="text-[22px] sm:text-[28px] md:text-[34px] font-normal tracking-[-1px]"
                          style={{ color: tile.textColor || "#FFFFFF" }}
                        >
                          {tile.color}
                        </span>
                        <span
                          className="text-[13px] sm:text-[14px] font-light opacity-90"
                          style={{ color: tile.textColor || "#FFFFFF" }}
                        >
                          {tile.title}
                        </span>
                      </div>
                    </div>

                    <div className="p-3.5 sm:p-5 bg-[#0a0a0a] border-t border-[#161616]">
                      <p className="text-[12px] sm:text-[13px] text-silver-mist font-light">
                        {tile.description}
                      </p>
                    </div>
                  </div>
                );
              }

              if (tile.type === "type-specimen") {
                return (
                  <div
                    key={idx}
                    className={`${colClass} rounded-2xl sm:rounded-3xl bg-[#090909] border border-[#181818] p-5 sm:p-8 md:p-10 flex flex-col justify-between gap-4 sm:gap-6`}
                  >
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-[11px] sm:text-[12px] font-mono uppercase tracking-wider text-saffron-spark">
                        Typography Specimen
                      </span>
                      <span className="text-[11px] sm:text-[12px] font-mono text-ash-gray">
                        {tile.subtitle}
                      </span>
                    </div>

                    <div className="py-2 sm:py-4">
                      <div className="text-[28px] xs:text-[36px] sm:text-[48px] md:text-[60px] font-normal leading-tight tracking-[-1.5px] text-bone-white mb-2 sm:mb-4">
                        Aa Gg Rr 09
                      </div>
                      <div className="text-[12px] sm:text-[14px] md:text-[15px] font-mono text-ash-gray tracking-wider opacity-60 break-all">
                        ABCDEFGHIJKLMN OPQRSTUVWXYZ 0123456789
                      </div>
                    </div>

                    <div className="border-t border-[#161616] pt-3 sm:pt-4">
                      <h4 className="text-[14px] sm:text-[16px] text-bone-white font-medium mb-1">
                        {tile.title}
                      </h4>
                      <p className="text-[12px] sm:text-[13px] text-silver-mist font-light leading-relaxed">
                        {tile.description}
                      </p>
                    </div>
                  </div>
                );
              }

              return null;
            })}
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 03 — VISUAL CONCEPT & MOTIFS                              */}
      {/* ========================================================= */}
      <section className="max-w-[1280px] mx-auto px-4 sm:px-6 py-12 sm:py-20 border-t border-[#121212]">
        <div className="flex flex-col gap-6 sm:gap-10">
          <div>
            <span className="text-[12px] sm:text-[13px] uppercase tracking-[0.35px] font-semibold text-saffron-spark font-mono block mb-1 sm:mb-2">
              Visual Strategy
            </span>
            <h2 className="text-[26px] sm:text-[36px] md:text-[44px] font-normal tracking-[-1.5px] text-bone-white">
              Design Elements & Motifs.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {project.motifs.map((motif, idx) => (
              <div
                key={motif.title}
                className="flex flex-col gap-2.5 sm:gap-3 p-5 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl bg-[#080808] border border-[#161616]"
              >
                <span className="text-[11px] sm:text-[12px] font-mono text-saffron-spark uppercase">
                  MOTIF 0{idx + 1}
                </span>
                <h3 className="text-[18px] sm:text-[20px] font-normal text-bone-white">
                  {motif.title}
                </h3>
                <p className="text-[13px] sm:text-[15px] font-body-ultralight text-silver-mist leading-relaxed">
                  {motif.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 04 — ORIGINAL VERIFIED ASSET LISTING                      */}
      {/* ========================================================= */}
      <section className="max-w-[1280px] mx-auto px-4 sm:px-6 py-12 sm:py-16 border-t border-[#121212]">
        <div className="flex flex-col gap-6 sm:gap-8">
          <div>
            <span className="text-[12px] sm:text-[13px] uppercase tracking-[0.35px] font-semibold text-saffron-spark font-mono block mb-1 sm:mb-2">
              Source Archive
            </span>
            <h2 className="text-[26px] sm:text-[34px] md:text-[40px] font-normal tracking-[-1.5px] text-bone-white">
              Original Files ({project.assets.length}).
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            {project.assets.map((asset, i) => (
              <div
                key={asset.id}
                onClick={() => openLightboxWithAsset(i)}
                className="p-3.5 sm:p-5 rounded-xl sm:rounded-2xl bg-[#090909] border border-[#181818] hover:border-[#2a2a2a] cursor-zoom-in flex items-center justify-between gap-3 sm:gap-4 transition-colors"
              >
                <div className="flex items-center gap-3 sm:gap-4 min-w-0 flex-1">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-lg sm:rounded-xl bg-void border border-[#222222] p-1.5 sm:p-2 flex items-center justify-center shrink-0">
                    <img
                      src={asset.url}
                      alt={asset.title}
                      className="max-h-full max-w-full object-contain"
                    />
                  </div>
                  <div className="flex flex-col min-w-0 flex-1">
                    <span className="text-[13px] sm:text-[15px] text-bone-white font-medium truncate">
                      {asset.title}
                    </span>
                    <span className="text-[11px] sm:text-[12px] font-mono text-ash-gray truncate">
                      {asset.originalFileName} • {asset.dimensions}
                    </span>
                  </div>
                </div>

                <div className="p-1.5 sm:p-2 text-ash-gray hover:text-electric-iris rounded-full transition-colors shrink-0">
                  <Eye className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* NEXT CASE STUDY BANNER                                    */}
      {/* ========================================================= */}
      {nextProject && (
        <section className="max-w-[1280px] mx-auto px-4 sm:px-6 py-12 sm:py-20 border-t border-[#161616]">
          <Link
            href={`/project/${nextProject.slug}`}
            className="group flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 p-6 sm:p-10 md:p-12 rounded-2xl sm:rounded-3xl bg-[#080808] border border-[#1a1a1a] hover:border-electric-iris/60 transition-all duration-300"
          >
            <div className="flex flex-col gap-2">
              <span className="text-[11px] sm:text-[12px] font-mono text-saffron-spark uppercase tracking-wider">
                Next Case Study →
              </span>
              <h3 className="text-[26px] sm:text-[36px] md:text-[44px] font-normal tracking-[-1.5px] text-bone-white group-hover:text-electric-iris transition-colors">
                {nextProject.title}
              </h3>
              <p className="text-[13px] sm:text-[15px] font-light text-ash-gray">
                {nextProject.summary}
              </p>
            </div>

            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#141414] border border-[#2a2a2a] group-hover:border-electric-iris group-hover:bg-electric-iris group-hover:text-bone-white flex items-center justify-center text-ash-gray transition-all shrink-0">
              <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6" />
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

      {/* Asset Pipeline Modal */}
      <AssetAnalysisModal
        isOpen={isPipelineOpen}
        onClose={() => setIsPipelineOpen(false)}
      />
    </main>
  );
}
