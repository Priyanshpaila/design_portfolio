"use client";

import React from "react";
import { RealWorldApplication, ProjectData } from "@/data/projects";

interface MockupDeviceProps {
  app: RealWorldApplication;
  project: ProjectData;
}

export default function MockupDevice({ app, project }: MockupDeviceProps) {
  return (
    <div className="flex flex-col gap-4">
      {/* Visual Mockup Container */}
      <div className="w-full rounded-3xl overflow-hidden bg-[#0a0a0a] border border-[#181818] relative min-h-[360px] flex items-center justify-center p-8 group">
        {/* Subtle background ambient glow */}
        <div
          className="absolute -top-24 -right-24 w-72 h-72 rounded-full blur-3xl opacity-20 pointer-events-none transition-opacity duration-500 group-hover:opacity-30"
          style={{ backgroundColor: app.mockupDetails.accentColor }}
        />

        {/* Illustrative Application Notice Tag */}
        <div className="absolute top-4 left-4 z-10 flex items-center gap-2 px-3 py-1 rounded-full bg-void/80 border border-[#222222] backdrop-blur-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-saffron-spark" />
          <span className="text-[11px] uppercase tracking-wider font-mono text-ash-gray">
            Illustrative Application
          </span>
        </div>

        {/* 1. Mobile Device Mockup */}
        {app.type === "mobile-device" && (
          <div className="relative w-[280px] h-[480px] bg-[#111111] rounded-[44px] p-3 shadow-2xl border-[3px] border-[#2a2a2a] flex flex-col justify-between overflow-hidden">
            {/* Dynamic Island / Speaker Notch */}
            <div className="w-24 h-4 bg-void rounded-full mx-auto mb-2 flex items-center justify-center">
              <div className="w-2 h-2 rounded-full bg-[#222222]" />
            </div>

            {/* Mobile Screen Content */}
            <div className="flex-1 rounded-[32px] overflow-hidden relative flex flex-col items-center justify-center bg-void">
              {project.slug === "fixnix" ? (
                <img
                  src="/assets/fixnix_splash.png"
                  alt="FixNix Splash Screen"
                  className="w-full h-full object-cover"
                />
              ) : project.slug === "logi-yatra" ? (
                <div className="w-full h-full bg-[#111111] flex flex-col items-center justify-center p-6 gap-6">
                  {/* Grid of icons with LOGI Yatra highlighted */}
                  <div className="w-20 h-20 rounded-2xl overflow-hidden shadow-xl ring-2 ring-electric-iris/50 animate-pulse">
                    <img
                      src="/assets/logiyatra_icon.png"
                      alt="Logi Yatra Icon"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="text-center">
                    <div className="text-[14px] font-semibold text-bone-white">
                      LOGI Yatra Driver
                    </div>
                    <div className="text-[11px] text-ash-gray">Ready for dispatch</div>
                  </div>
                </div>
              ) : (
                <img
                  src={project.coverImage}
                  alt={project.title}
                  className="w-full h-full object-contain p-4"
                />
              )}
            </div>

            {/* Home indicator bar */}
            <div className="w-24 h-1 bg-bone-white/30 rounded-full mx-auto mt-2" />
          </div>
        )}

        {/* 2. Commercial Fleet / Signage Mockup */}
        {app.type === "fleet-signage" && (
          <div className="w-full max-w-lg flex flex-col items-center justify-center">
            {project.slug === "logi-yatra" ? (
              <div className="w-full bg-[#141414] rounded-2xl p-8 border border-[#2a2a2a] relative overflow-hidden shadow-2xl flex flex-col gap-6">
                {/* Truck Side Panel Texture Lines */}
                <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#333_1px,transparent_1px)] bg-[size:24px_100%]" />
                <div className="relative z-10 flex flex-col items-center justify-center py-6">
                  <img
                    src="/assets/logiyatra_horizontal.png"
                    alt="Commercial Fleet Livery"
                    className="max-h-24 object-contain filter drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]"
                  />
                  <div className="mt-4 text-[11px] font-mono tracking-widest text-[#888888] uppercase">
                    INTERSTATE COLD CHAIN LOGISTICS • EXPRESS DISPATCH
                  </div>
                </div>
                {/* Reflective hazard strip */}
                <div className="h-2 w-full bg-[repeating-linear-gradient(45deg,#CC181E,#CC181E_12px,#FFF_12px,#FFF_24px)] rounded-full opacity-80" />
              </div>
            ) : project.slug === "hira-atithi" ? (
              <div className="w-full bg-[#050505] rounded-2xl p-10 border border-[#222222] relative overflow-hidden shadow-2xl flex flex-col items-center justify-center">
                {/* Backlit architectural halo */}
                <div className="absolute w-48 h-48 rounded-full bg-[#F5CF78] blur-2xl opacity-15" />
                <div className="relative z-10 text-center flex flex-col items-center gap-4">
                  <img
                    src="/assets/hira_atithi_logo.png"
                    alt="Lobby Signage"
                    className="max-h-28 object-contain filter drop-shadow-[0_0_20px_rgba(245,207,120,0.3)]"
                  />
                  <div className="text-[12px] uppercase tracking-[0.2em] text-[#d4af37] font-serif">
                    GRAND ATITHI RESIDENCY • WELCOME PORTAL
                  </div>
                </div>
              </div>
            ) : (
              <div className="w-full bg-[#111111] p-8 rounded-2xl flex items-center justify-center">
                <img
                  src={project.coverImage}
                  alt={project.title}
                  className="max-h-32 object-contain"
                />
              </div>
            )}
          </div>
        )}

        {/* 3. Stationery / Folio / Badge Mockup */}
        {app.type === "stationery" && (
          <div className="w-full max-w-md flex flex-col items-center justify-center py-4">
            <div className="w-full aspect-[16/10] bg-[#161616] rounded-2xl p-8 border border-[#2a2a2a] shadow-2xl relative flex flex-col justify-between overflow-hidden">
              <div className="flex items-start justify-between">
                <div className="w-10 h-10 rounded-xl bg-void border border-[#333333] flex items-center justify-center">
                  <span className="w-3 h-3 rounded-full bg-saffron-spark" />
                </div>
                <div className="text-right">
                  <div className="text-[10px] font-mono text-ash-gray uppercase tracking-widest">
                    OFFICIAL SPECIMEN
                  </div>
                  <div className="text-[12px] text-bone-white font-medium">
                    {project.clientOrBrand}
                  </div>
                </div>
              </div>

              <div className="py-4 flex items-center justify-center">
                <img
                  src={project.coverImage}
                  alt={project.title}
                  className="max-h-20 object-contain"
                />
              </div>

              <div className="flex items-center justify-between border-t border-[#262626] pt-3 text-[11px] text-[#777777] font-mono">
                <span>VERIFIED ASSET</span>
                <span>SYSTEM ID: {project.id.toUpperCase()}</span>
              </div>
            </div>
          </div>
        )}

        {/* 4. Print Brochure Mockup */}
        {app.type === "print-brochure" && (
          <div className="w-full max-w-lg flex items-center justify-center py-4">
            <div className="relative w-full max-w-md aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border border-[#262626] bg-[#0c0c0c] flex items-center justify-center group">
              <img
                src="/assets/bhawani_panel_1_cover.png"
                alt="Brochure Print Specimen"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-void via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-4 left-6 right-6 flex items-center justify-between">
                <div>
                  <div className="text-[14px] font-semibold text-bone-white">
                    Bhawani Moulders Publication
                  </div>
                  <div className="text-[12px] text-silver-mist">
                    A4 Tri-Fold Matte 250gsm
                  </div>
                </div>
                <span className="text-[11px] font-mono bg-void/80 px-2.5 py-1 rounded-full text-saffron-spark border border-[#333333]">
                  Spot UV
                </span>
              </div>
            </div>
          </div>
        )}

        {/* 5. Festival Gift Card Mockup */}
        {app.type === "festival-gift" && (
          <div className="w-full max-w-md flex items-center justify-center py-4">
            <div className="w-full aspect-[4/5] rounded-2xl bg-[#FFFFFA] p-6 shadow-2xl border-4 border-[#FFB829]/40 relative flex flex-col justify-between overflow-hidden">
              <img
                src="/assets/kalpavraksh_diwali_flyer.png"
                alt="Kalpavraksh Festival Card"
                className="w-full h-full object-contain"
              />
              <div className="absolute top-3 right-3 bg-[#1B365D] text-[#FFB829] text-[10px] uppercase font-bold tracking-widest px-2.5 py-1 rounded-full shadow">
                Gold Foil Stamped
              </div>
            </div>
          </div>
        )}

        {/* 6. Social Campaign / Billboard Mockup */}
        {(app.type === "social-campaign" || app.type === "billboard") && (
          <div className="w-full max-w-md flex items-center justify-center py-4">
            <div className="w-full aspect-square bg-[#0d0d0d] rounded-2xl p-6 border border-[#222222] shadow-2xl flex flex-col justify-between relative overflow-hidden">
              <div className="flex items-center justify-between text-[11px] text-ash-gray font-mono">
                <span>DIGITAL AD FORMAT</span>
                <span>1:1 RATIO</span>
              </div>
              <div className="flex-1 flex items-center justify-center py-4">
                <img
                  src={project.coverImage}
                  alt={project.title}
                  className="max-h-44 object-contain"
                />
              </div>
              <div className="text-[12px] text-silver-mist text-center font-light">
                {app.mockupDetails.caption}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Description below mockup */}
      <div className="flex flex-col gap-1 px-1">
        <h4 className="text-[16px] font-normal text-bone-white tracking-[-0.2px]">
          {app.title}
        </h4>
        <p className="text-[14px] text-ash-gray font-light leading-relaxed">
          {app.description}
        </p>
      </div>
    </div>
  );
}
