"use client";

import React, { useState } from "react";
import { TypographySpec } from "@/data/projects";

export default function TypographyViewer({ specs }: { specs: TypographySpec[] }) {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="w-full flex flex-col gap-10">
      {/* Tab Switcher if multiple specs */}
      {specs.length > 1 && (
        <div className="flex flex-wrap gap-3 border-b border-[#181818] pb-4">
          {specs.map((spec, i) => (
            <button
              key={spec.role}
              onClick={() => setActiveTab(i)}
              className={`text-[14px] uppercase tracking-[0.35px] font-semibold px-4 py-2 rounded-full transition-all ${
                activeTab === i
                  ? "bg-[#181818] text-bone-white border border-[#333333]"
                  : "text-ash-gray hover:text-bone-white"
              }`}
            >
              {spec.role}
            </button>
          ))}
        </div>
      )}

      {/* Active Typography Card */}
      {specs[activeTab] && (
        <div className="flex flex-col lg:flex-row gap-12 items-start">
          {/* Left: Specimen Headline & Glyphs */}
          <div className="flex-1 w-full flex flex-col gap-6">
            <div className="text-[12px] uppercase tracking-[0.35px] text-saffron-spark font-semibold">
              Type Specimen — {specs[activeTab].role}
            </div>

            {/* Large Sample Render */}
            <div className="p-8 sm:p-12 rounded-3xl bg-[#080808] border border-[#161616] overflow-x-auto">
              <div className="text-[56px] sm:text-[76px] font-normal leading-none tracking-[-2px] text-bone-white mb-6">
                {specs[activeTab].sampleText}
              </div>
              <div className="text-[18px] text-ash-gray font-mono tracking-wider break-all opacity-70">
                Aa Bb Cc Dd Ee Ff Gg Hh Ii Jj Kk Ll Mm Nn Oo Pp Qq Rr Ss Tt Uu Vv Ww Xx Yy Zz
              </div>
              <div className="text-[16px] text-[#555555] font-mono tracking-widest mt-2">
                0123456789 • (!?@#$%^&*-_+)
              </div>
            </div>
          </div>

          {/* Right: Technical Breakdown */}
          <div className="w-full lg:w-[420px] flex flex-col gap-6 pt-2">
            <div className="flex flex-col gap-1 border-b border-[#181818] pb-4">
              <span className="text-[12px] uppercase tracking-[0.35px] text-ash-gray font-mono">
                Identified Type Family / Classification
              </span>
              <span className="text-[24px] font-normal tracking-[-0.48px] text-bone-white">
                {specs[activeTab].family}
              </span>
            </div>

            {specs[activeTab].recommendedAlternative && (
              <div className="flex flex-col gap-1 border-b border-[#181818] pb-4">
                <span className="text-[12px] uppercase tracking-[0.35px] text-saffron-spark font-mono">
                  Recommended Compatible Substitute
                </span>
                <span className="text-[16px] font-normal text-bone-white">
                  {specs[activeTab].recommendedAlternative}
                </span>
              </div>
            )}

            <div className="grid grid-cols-2 gap-4 border-b border-[#181818] pb-4">
              <div>
                <span className="text-[12px] uppercase tracking-[0.35px] text-ash-gray font-mono block">
                  Weight
                </span>
                <span className="text-[15px] text-bone-white font-medium">
                  {specs[activeTab].weight}
                </span>
              </div>
              <div>
                <span className="text-[12px] uppercase tracking-[0.35px] text-ash-gray font-mono block">
                  Tracking
                </span>
                <span className="text-[15px] text-bone-white font-medium">
                  {specs[activeTab].tracking}
                </span>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <span className="text-[12px] uppercase tracking-[0.35px] text-ash-gray font-mono">
                Art Direction Notes
              </span>
              <p className="text-[15px] text-silver-mist leading-relaxed font-light">
                {specs[activeTab].notes}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
