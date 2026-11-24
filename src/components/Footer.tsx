"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-void border-t border-[#141414] py-20 px-6 mt-24">
      <div className="max-w-[1280px] mx-auto flex flex-col gap-16">
        {/* Top Minimalist Statement */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-10">
          <div className="flex-1 max-w-xl">
            <span className="text-[12px] uppercase tracking-[0.35px] font-semibold text-saffron-spark font-mono block mb-3">
              Design Philosophy
            </span>
            <h3 className="text-[36px] sm:text-[48px] font-normal leading-[1.1] tracking-[-1.68px] text-bone-white font-sans">
              Designed with curiosity. Created with intention.
            </h3>
          </div>

          <div className="flex flex-col gap-6 items-start lg:items-end">
            <p className="text-[18px] font-body-ultralight text-silver-mist max-w-md text-left lg:text-right">
              A personal portfolio exploring visual identities, editorial layouts, promotional campaigns and digital graphics.
            </p>
            <a
              href="mailto:contact@designer.portfolio?subject=Graphic%20Design%20Inquiry"
              className="btn-electric-pill"
            >
              <span>Let's Talk</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Bottom Metadata & Portfolio Navigation */}
        <div className="flex flex-col sm:flex-row items-center justify-between border-t border-[#121212] pt-8 gap-4 text-[13px] text-ash-gray">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-electric-iris" />
            <span>Graphic Design Portfolio & Selected Archive</span>
            <span>•</span>
            <span className="text-silver-mist">All Original Works Preserved</span>
          </div>

          <div className="flex items-center gap-6 font-mono text-[12px]">
            <Link href="/#selected-works" className="hover:text-bone-white transition-colors">
              SELECTED WORKS
            </Link>
            <Link href="/#about" className="hover:text-bone-white transition-colors">
              ABOUT
            </Link>
            <Link href="/#contact" className="hover:text-bone-white transition-colors">
              CONTACT
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
