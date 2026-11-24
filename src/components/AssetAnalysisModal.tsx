"use client";

import React, { useState } from "react";
import { X, Sparkles, CheckCircle2, ArrowRight, Layers, FileImage, Cpu, Eye, Palette, Type, Upload } from "lucide-react";
import { PROJECTS } from "@/data/projects";

interface AssetAnalysisModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AssetAnalysisModal({ isOpen, onClose }: AssetAnalysisModalProps) {
  const [activeStep, setActiveStep] = useState(1);
  const [selectedDemoProject, setSelectedDemoProject] = useState(PROJECTS[0].id);

  if (!isOpen) return null;

  const currentProject = PROJECTS.find((p) => p.id === selectedDemoProject) || PROJECTS[0];

  const pipelineSteps = [
    {
      step: 1,
      title: "File Ingestion & Pixel Audit",
      icon: FileImage,
      desc: "Inspect raw aspect ratios, dimensions, alpha transparency, and DPI integrity without modifying or recompressing original files.",
    },
    {
      step: 2,
      title: "Category Classification",
      icon: Cpu,
      desc: "Automatically determine whether work represents Brand Identity, Corporate Brochure, Festival Creative, or Mobile Product.",
    },
    {
      step: 3,
      title: "Asset Clustering Engine",
      icon: Layers,
      desc: "Group related variants (dark/light versions, splash screens, app icons) into unified multi-asset projects.",
    },
    {
      step: 4,
      title: "Color & Contrast Extraction",
      icon: Palette,
      desc: "Derive primary, secondary, and accent HEX codes directly from raw pixel data and compute WCAG contrast ratios on black void.",
    },
    {
      step: 5,
      title: "Typographic Analysis",
      icon: Type,
      desc: "Detect script families (Latin, Devanagari, Grotesque, Display Serif) and suggest verified font alternatives.",
    },
    {
      step: 6,
      title: "Art-Directed Layout Synthesis",
      icon: Eye,
      desc: "Assign the tailored presentation structure (Logo Identity vs Multi-Panel Publication vs Festive Campaign).",
    },
  ];

  return (
    <div className="fixed inset-0 z-[120] bg-void/95 backdrop-blur-xl flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      <div className="relative w-full max-w-5xl bg-[#080808] border border-[#222222] rounded-3xl p-6 sm:p-10 shadow-2xl flex flex-col gap-8 max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-start justify-between border-b border-[#181818] pb-6">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-saffron-spark animate-ping" />
              <span className="text-[12px] font-mono uppercase tracking-[0.35px] text-saffron-spark font-semibold">
                Automated Presentation Pipeline
              </span>
            </div>
            <h2 className="text-[28px] sm:text-[36px] font-normal tracking-[-1px] text-bone-white font-sans">
              Asset Analysis & Presentation Engine
            </h2>
            <p className="text-[15px] text-ash-gray font-light max-w-2xl leading-relaxed">
              Every uploaded design asset is systematically audited, classified, clustered, and transformed into an art-directed Behance-standard case study without fabricating history.
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full text-ash-gray hover:text-bone-white hover:bg-[#141414] transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Project Selector for Live Analysis */}
        <div className="flex flex-col gap-3">
          <span className="text-[12px] uppercase font-mono tracking-wider text-ash-gray">
            Select Processed Project to Inspect:
          </span>
          <div className="flex flex-wrap gap-2">
            {PROJECTS.map((p) => (
              <button
                key={p.id}
                onClick={() => setSelectedDemoProject(p.id)}
                className={`text-[13px] font-medium px-4 py-2 rounded-full transition-all ${
                  selectedDemoProject === p.id
                    ? "bg-electric-iris text-bone-white font-semibold shadow-lg shadow-electric-iris/20"
                    : "bg-[#121212] text-ash-gray hover:text-bone-white border border-[#222222]"
                }`}
              >
                {p.title} ({p.assets.length} {p.assets.length === 1 ? "asset" : "assets"})
              </button>
            ))}
          </div>
        </div>

        {/* 6-Step Pipeline Tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 border-b border-[#181818] pb-6">
          {pipelineSteps.map((s) => {
            const Icon = s.icon;
            const isActive = activeStep === s.step;
            return (
              <button
                key={s.step}
                onClick={() => setActiveStep(s.step)}
                className={`p-3 rounded-2xl flex flex-col items-start gap-2 text-left transition-all ${
                  isActive
                    ? "bg-[#181818] border border-electric-iris/60 text-bone-white"
                    : "bg-[#0d0d0d] border border-[#1a1a1a] text-ash-gray hover:text-bone-white"
                }`}
              >
                <div className="flex items-center justify-between w-full">
                  <span className="text-[11px] font-mono text-saffron-spark">
                    0{s.step}
                  </span>
                  <Icon className="w-4 h-4 text-ash-gray" />
                </div>
                <div className="text-[12px] font-medium line-clamp-1">
                  {s.title}
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Step Deep Dive Output */}
        <div className="bg-[#0e0e0e] border border-[#1c1c1c] rounded-2xl p-6 sm:p-8 flex flex-col gap-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 rounded-full bg-electric-iris/20 text-electric-iris text-[12px] font-mono font-semibold">
                STEP 0{activeStep} OF 06
              </span>
              <h3 className="text-[20px] font-normal text-bone-white">
                {pipelineSteps[activeStep - 1].title}
              </h3>
            </div>
            <span className="text-[12px] font-mono text-ash-gray hidden sm:inline">
              Source Project: {currentProject.title}
            </span>
          </div>

          <p className="text-[14px] text-silver-mist leading-relaxed font-light">
            {pipelineSteps[activeStep - 1].desc}
          </p>

          {/* Conditional Step Content */}
          {activeStep === 1 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
              {currentProject.assets.map((asset) => (
                <div
                  key={asset.id}
                  className="p-4 rounded-xl bg-[#141414] border border-[#222222] flex gap-4 items-center"
                >
                  <img
                    src={asset.url}
                    alt={asset.title}
                    className="w-16 h-16 object-contain rounded-lg bg-void p-1 border border-[#2a2a2a]"
                  />
                  <div className="flex flex-col gap-1 text-[13px]">
                    <span className="text-bone-white font-medium truncate">
                      {asset.originalFileName}
                    </span>
                    <span className="text-ash-gray font-mono text-[11px]">
                      Dimensions: {asset.dimensions}
                    </span>
                    <span className="text-saffron-spark font-mono text-[11px]">
                      Status: 100% Uncompressed Original Preserved
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeStep === 2 && (
            <div className="flex flex-col gap-4 mt-2">
              <div className="flex items-center gap-3">
                <span className="text-[14px] text-ash-gray font-mono">Assigned Category:</span>
                <span className="px-3 py-1 bg-saffron-spark/20 text-saffron-spark rounded-full text-[13px] font-semibold">
                  {currentProject.category}
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                {currentProject.categories.map((c) => (
                  <span
                    key={c}
                    className="px-3 py-1 bg-[#181818] border border-[#282828] text-bone-white rounded-full text-[12px]"
                  >
                    ✓ {c}
                  </span>
                ))}
              </div>
            </div>
          )}

          {activeStep === 3 && (
            <div className="p-4 rounded-xl bg-[#141414] border border-[#222222] flex flex-col gap-3">
              <span className="text-[12px] font-mono text-ash-gray uppercase">
                Asset Relationship Cluster
              </span>
              <p className="text-[14px] text-bone-white leading-relaxed font-light">
                Cluster detected <strong className="text-electric-iris">{currentProject.assets.length}</strong> interdependent files belonging to the <strong>{currentProject.clientOrBrand}</strong> design ecosystem.
              </p>
              <div className="text-[12px] text-silver-mist">
                • Intended format: {currentProject.intendedFormat}
              </div>
            </div>
          )}

          {activeStep === 4 && (
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-2">
              {currentProject.colors.map((c) => (
                <div key={c.name} className="flex items-center gap-3 p-3 bg-[#141414] rounded-xl border border-[#222222]">
                  <div className="w-8 h-8 rounded-lg shrink-0" style={{ backgroundColor: c.hex }} />
                  <div className="flex flex-col overflow-hidden">
                    <span className="text-[12px] font-mono text-bone-white">{c.hex}</span>
                    <span className="text-[11px] text-ash-gray truncate">{c.name}</span>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeStep === 5 && (
            <div className="flex flex-col gap-3">
              {currentProject.typography.map((t) => (
                <div key={t.role} className="p-4 bg-[#141414] rounded-xl border border-[#222222] flex flex-col gap-1">
                  <span className="text-[11px] font-mono text-saffron-spark uppercase">
                    {t.role}
                  </span>
                  <div className="text-[16px] text-bone-white font-medium">
                    {t.family}
                  </div>
                  <div className="text-[13px] text-silver-mist">
                    Substitute Recommendation: {t.recommendedAlternative || "Exact Match"}
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeStep === 6 && (
            <div className="p-4 bg-[#141414] rounded-xl border border-[#222222] flex flex-col gap-3">
              <span className="text-[12px] font-mono text-saffron-spark uppercase">
                Art Direction Blueprint Selected
              </span>
              <div className="text-[18px] text-bone-white font-normal">
                {currentProject.introduction.headline}
              </div>
              <p className="text-[14px] text-silver-mist font-light leading-relaxed">
                {currentProject.introduction.statement}
              </p>
            </div>
          )}
        </div>

        {/* Footer actions */}
        <div className="flex items-center justify-between border-t border-[#181818] pt-6">
          <span className="text-[12px] font-mono text-ash-gray">
            Vercel-Ready Modular Pipeline Engine
          </span>
          <button
            onClick={onClose}
            className="btn-electric-pill"
          >
            <span>Return to Portfolio</span>
          </button>
        </div>
      </div>
    </div>
  );
}
