"use client";

import React, { useState } from "react";
import { Copy, Check } from "lucide-react";
import { ColorToken } from "@/data/projects";

export default function ColorPaletteViewer({ colors }: { colors: ColorToken[] }) {
  const [copiedHex, setCopiedHex] = useState<string | null>(null);

  const handleCopy = (hex: string) => {
    navigator.clipboard.writeText(hex);
    setCopiedHex(hex);
    setTimeout(() => setCopiedHex(null), 2000);
  };

  return (
    <div className="w-full">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {colors.map((color) => {
          const isCopied = copiedHex === color.hex;
          return (
            <div
              key={color.name}
              onClick={() => handleCopy(color.hex)}
              className="group cursor-pointer flex flex-col gap-3 transition-transform duration-200 hover:-translate-y-1"
            >
              {/* Swatch Box */}
              <div
                className="w-full h-32 rounded-3xl relative overflow-hidden transition-all duration-300 group-hover:ring-1 group-hover:ring-bone-white/30"
                style={{ backgroundColor: color.hex }}
              >
                {/* Copy overlay */}
                <div className="absolute inset-0 bg-void/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                  {isCopied ? (
                    <span className="text-[12px] font-semibold uppercase tracking-wider text-bone-white flex items-center gap-1.5 bg-void/80 px-3 py-1.5 rounded-full">
                      <Check className="w-3.5 h-3.5 text-saffron-spark" />
                      Copied!
                    </span>
                  ) : (
                    <span className="text-[12px] font-semibold uppercase tracking-wider text-bone-white flex items-center gap-1.5 bg-void/80 px-3 py-1.5 rounded-full">
                      <Copy className="w-3.5 h-3.5" />
                      Copy HEX
                    </span>
                  )}
                </div>
              </div>

              {/* Swatch Info */}
              <div className="flex flex-col gap-1">
                <div className="flex items-center justify-between">
                  <span className="text-[15px] font-normal text-bone-white tracking-[-0.2px]">
                    {color.name}
                  </span>
                  <span className="text-[13px] font-mono font-medium text-silver-mist">
                    {color.hex}
                  </span>
                </div>
                <div className="text-[12px] text-ash-gray font-light">
                  {color.role}
                </div>
                <div className="text-[11px] text-[#666666] font-mono mt-0.5">
                  Contrast: {color.contrastOnDark}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
