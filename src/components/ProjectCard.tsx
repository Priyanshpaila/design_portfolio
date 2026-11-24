"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { ProjectData } from "@/data/projects";

interface ProjectCardProps {
  project: ProjectData;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  // Pad index as 01, 02, etc.
  const indexStr = (index + 1).toString().padStart(2, "0");

  return (
    <div className="group flex flex-col gap-6 py-6 transition-transform duration-300">
      {/* Artwork Container: 24px radius, pure black background, no border, no shadow */}
      <Link
        href={`/project/${project.slug}`}
        className="block relative w-full aspect-[16/10] overflow-hidden rounded-3xl bg-[#080808] focus:outline-none focus:ring-1 focus:ring-electric-iris"
      >
        <img
          src={project.coverImage}
          alt={project.title}
          className="w-full h-full object-contain p-6 sm:p-10 transition-transform duration-700 ease-out group-hover:scale-105"
          style={{ imageRendering: "auto" }}
        />

        {/* Floating index & category badge */}
        <div className="absolute top-6 left-6 flex items-center gap-3">
          <span className="text-[12px] font-mono text-saffron-spark uppercase tracking-wider font-semibold">
            {indexStr}
          </span>
          <span className="text-[12px] font-normal tracking-[0.025em] text-ash-gray uppercase">
            {project.category}
          </span>
        </div>

        {/* Hover Arrow Icon */}
        <div className="absolute bottom-6 right-6 w-11 h-11 rounded-full bg-void/80 border border-transparent group-hover:border-[#333333] flex items-center justify-center text-ash-gray group-hover:text-electric-iris group-hover:scale-110 transition-all duration-300">
          <ArrowUpRight className="w-5 h-5" />
        </div>
      </Link>

      {/* Typographic Metadata below Artwork */}
      <div className="flex flex-col gap-2">
        <div className="flex items-baseline justify-between">
          <Link
            href={`/project/${project.slug}`}
            className="text-[27px] sm:text-[36px] font-normal tracking-[-0.8px] text-bone-white hover:text-electric-iris transition-colors font-sans"
          >
            {project.title}
          </Link>
          <span className="text-[13px] font-mono text-ash-gray hidden sm:inline">
            {project.assets.length} {project.assets.length === 1 ? "Asset" : "Assets"}
          </span>
        </div>

        <p className="text-[16px] text-silver-mist font-light leading-relaxed max-w-2xl line-clamp-2">
          {project.summary}
        </p>

        {/* Discipline Tags */}
        <div className="flex flex-wrap gap-2 mt-2">
          {project.disciplines.map((d) => (
            <span
              key={d}
              className="text-[11px] font-mono uppercase tracking-wider text-ash-gray py-0.5"
            >
              • {d}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
