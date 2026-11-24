"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { X, ZoomIn, ZoomOut, RotateCcw, Download, ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";
import { ProjectAsset } from "@/data/projects";

interface LightboxProps {
  assets: ProjectAsset[];
  initialIndex?: number;
  isOpen: boolean;
  onClose: () => void;
}

export default function ImageLightbox({
  assets,
  initialIndex = 0,
  isOpen,
  onClose,
}: LightboxProps) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [zoomLevel, setZoomLevel] = useState(1);
  const [pan, setPan] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const dragStart = useRef({ x: 0, y: 0 });

  useEffect(() => {
    setCurrentIndex(initialIndex);
    setZoomLevel(1);
    setPan({ x: 0, y: 0 });
  }, [initialIndex, isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "+" || e.key === "=") handleZoomIn();
      if (e.key === "-") handleZoomOut();
      if (e.key === "0") handleResetZoom();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, currentIndex, zoomLevel]);

  if (!isOpen || assets.length === 0) return null;

  const currentAsset = assets[currentIndex];

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % assets.length);
    setZoomLevel(1);
    setPan({ x: 0, y: 0 });
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + assets.length) % assets.length);
    setZoomLevel(1);
    setPan({ x: 0, y: 0 });
  };

  const handleZoomIn = () => {
    setZoomLevel((prev) => Math.min(prev + 0.5, 3.5));
  };

  const handleZoomOut = () => {
    setZoomLevel((prev) => {
      const next = Math.max(prev - 0.5, 0.75);
      if (next <= 1) setPan({ x: 0, y: 0 });
      return next;
    });
  };

  const handleResetZoom = () => {
    setZoomLevel(1);
    setPan({ x: 0, y: 0 });
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    if (zoomLevel <= 1) return;
    setIsDragging(true);
    dragStart.current = { x: e.clientX - pan.x, y: e.clientY - pan.y };
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || zoomLevel <= 1) return;
    setPan({
      x: e.clientX - dragStart.current.x,
      y: e.clientY - dragStart.current.y,
    });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <div className="fixed inset-0 z-[100] bg-void/98 backdrop-blur-md flex flex-col select-none animate-fadeIn">
      {/* Top Bar: Title, Metadata, Controls */}
      <div className="h-16 px-6 flex items-center justify-between border-b border-[#181818] bg-void/80 z-10">
        <div className="flex items-center gap-4">
          <span className="text-[12px] uppercase tracking-[0.35px] font-semibold text-saffron-spark">
            Original Asset Inspection
          </span>
          <span className="text-[14px] text-bone-white font-normal truncate max-w-md">
            {currentAsset.title}
          </span>
          <span className="text-[12px] text-ash-gray font-mono hidden sm:inline">
            ({currentAsset.originalFileName} • {currentAsset.dimensions})
          </span>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-2">
          {/* Zoom controls */}
          <div className="flex items-center bg-[#111111] rounded-full p-1 border border-[#222222] mr-2">
            <button
              onClick={handleZoomOut}
              className="p-1.5 text-ash-gray hover:text-bone-white rounded-full transition-colors"
              title="Zoom Out (-)"
            >
              <ZoomOut className="w-4 h-4" />
            </button>
            <span className="px-2 text-[12px] font-mono text-silver-mist">
              {Math.round(zoomLevel * 100)}%
            </span>
            <button
              onClick={handleZoomIn}
              className="p-1.5 text-ash-gray hover:text-bone-white rounded-full transition-colors"
              title="Zoom In (+)"
            >
              <ZoomIn className="w-4 h-4" />
            </button>
            {zoomLevel !== 1 && (
              <button
                onClick={handleResetZoom}
                className="p-1.5 text-ash-gray hover:text-saffron-spark rounded-full transition-colors ml-1"
                title="Reset Zoom (0)"
              >
                <RotateCcw className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          {/* Download Original Asset */}
          <a
            href={currentAsset.url}
            download={currentAsset.originalFileName}
            className="p-2 text-ash-gray hover:text-electric-iris rounded-full hover:bg-[#141414] transition-colors"
            title="Download Original High-Res Asset"
          >
            <Download className="w-5 h-5" />
          </a>

          {/* Close Lightbox */}
          <button
            onClick={onClose}
            className="p-2 text-ash-gray hover:text-bone-white rounded-full hover:bg-[#141414] transition-colors"
            title="Close Lightbox (ESC)"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Main Artwork Stage */}
      <div
        className="flex-1 relative overflow-hidden flex items-center justify-center p-6 cursor-grab active:cursor-grabbing"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
      >
        {/* Previous Button */}
        {assets.length > 1 && (
          <button
            onClick={handlePrev}
            className="absolute left-6 z-20 p-3 rounded-full bg-[#111111]/80 border border-[#222222] text-bone-white hover:border-electric-iris hover:scale-105 transition-all"
            aria-label="Previous Asset"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
        )}

        {/* Artwork Image Container with Pan & Zoom */}
        <div
          className="relative max-w-full max-h-full flex items-center justify-center transition-transform duration-100 ease-out"
          style={{
            transform: `translate(${pan.x}px, ${pan.y}px) scale(${zoomLevel})`,
          }}
        >
          {/* Subtle checkered backdrop for transparent logos if applicable */}
          {currentAsset.transparentBackground && (
            <div
              className="absolute inset-0 rounded-lg pointer-events-none opacity-20"
              style={{
                backgroundImage:
                  "linear-gradient(45deg, #222 25%, transparent 25%), linear-gradient(-45deg, #222 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #222 75%), linear-gradient(-45deg, transparent 75%, #222 75%)",
                backgroundSize: "20px 20px",
                backgroundPosition: "0 0, 0 10px, 10px -10px, -10px 0px",
              }}
            />
          )}

          <img
            src={currentAsset.url}
            alt={currentAsset.title}
            className="max-h-[80vh] max-w-[85vw] object-contain rounded-lg shadow-2xl transition-all"
            style={{
              imageRendering: "auto",
            }}
            draggable={false}
          />
        </div>

        {/* Next Button */}
        {assets.length > 1 && (
          <button
            onClick={handleNext}
            className="absolute right-6 z-20 p-3 rounded-full bg-[#111111]/80 border border-[#222222] text-bone-white hover:border-electric-iris hover:scale-105 transition-all"
            aria-label="Next Asset"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        )}
      </div>

      {/* Bottom Info HUD */}
      <div className="h-16 px-6 flex items-center justify-between border-t border-[#181818] bg-void/80 z-10 text-[13px]">
        <div className="text-silver-mist font-light max-w-2xl truncate">
          {currentAsset.description}
        </div>
        <div className="flex items-center gap-4 text-ash-gray font-mono text-[12px]">
          <span>
            {currentIndex + 1} / {assets.length}
          </span>
          <span className="hidden sm:inline">•</span>
          <span className="hidden sm:inline">Use mouse drag to pan when zoomed</span>
        </div>
      </div>
    </div>
  );
}
