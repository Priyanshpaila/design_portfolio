"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-void border-t border-[#141414] py-20 px-6 mt-24">
      <div className="max-w-[1280px] mx-auto flex flex-col gap-16">
        {/* Top Two-Column Statement */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-10">
          <div className="flex-1 max-w-xl">
            <span className="text-[12px] uppercase tracking-[0.35px] font-semibold text-saffron-spark font-mono block mb-3">
              Design Philosophy
            </span>
            <h3 className="text-[36px] sm:text-[48px] font-normal leading-[1.1] tracking-[-1.68px] text-bone-white font-sans">
              Distributed intelligence, rendered with sculptural precision.
            </h3>
          </div>

          <div className="flex flex-col gap-6 items-start lg:items-end">
            <p className="text-[18px] font-body-ultralight text-silver-mist max-w-md text-left lg:text-right">
              Crafted for interview presentations and creative leadership dialogues. Original design work is preserved in high-fidelity vector and uncompressed raster.
            </p>
            <a
              href="mailto:contact@designer.portfolio"
              className="btn-electric-pill"
            >
              <span>Initiate Conversation</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Bottom Metadata & Credits */}
        <div className="flex flex-col sm:flex-row items-center justify-between border-t border-[#121212] pt-8 gap-4 text-[13px] text-ash-gray">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-electric-iris" />
            <span>Dala Design System Architecture</span>
            <span>•</span>
            <span className="text-silver-mist">Vercel Production Deployment Ready</span>
          </div>

          <div className="flex items-center gap-6 font-mono text-[12px]">
            <Link href="/#selected-works" className="hover:text-bone-white transition-colors">
              WORKS
            </Link>
            <Link href="/#design-system" className="hover:text-bone-white transition-colors">
              TOKENS
            </Link>
            <a
              href="#top"
              className="text-saffron-spark hover:underline"
            >
              BACK TO TOP ↑
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
