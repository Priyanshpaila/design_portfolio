"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowUpRight } from "lucide-react";

interface NavbarProps {
  onOpenPipeline?: () => void;
}

export default function Navbar({ onOpenPipeline }: NavbarProps) {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "Selected Works", href: "/#selected-works" },
    { label: "About", href: "/#about" },
    { label: "Contact", href: "/#contact" },
  ];

  return (
    <header className="w-full bg-void sticky top-0 z-50 border-b border-transparent transition-colors duration-200">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 h-20 flex items-center justify-between">
        {/* Brand Lockup: Stylized geometric mark + Graphic Designer Portfolio title */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative w-7 h-7 flex items-center justify-center">
            {/* Geometric stylized triangular mark with Electric Iris to Deep Verdant gradient */}
            <svg
              viewBox="0 0 32 32"
              className="w-7 h-7 transition-transform duration-300 group-hover:scale-105"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient id="brandLogoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#8052ff" />
                  <stop offset="100%" stopColor="#15846e" />
                </linearGradient>
              </defs>
              <path
                d="M16 4L28 26H4L16 4Z"
                stroke="url(#brandLogoGrad)"
                strokeWidth="2.5"
                strokeLinejoin="round"
              />
              <path
                d="M16 11L23 23H9L16 11Z"
                fill="url(#brandLogoGrad)"
                fillOpacity="0.8"
              />
            </svg>
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-[17px] font-normal tracking-[-0.3px] text-bone-white font-sans">
              Archive
            </span>
            <span className="text-[12px] font-normal tracking-[0.05em] uppercase text-ash-gray">
              / Graphic Design
            </span>
          </div>
        </Link>

        {/* Center / Right Navigation Links */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.label}
                href={link.href}
                className={`text-[14px] uppercase tracking-[0.35px] font-semibold transition-colors ${
                  isActive ? "text-bone-white" : "text-ash-gray hover:text-bone-white"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Right CTA Button: Filled Electric Iris Pill */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="/#contact"
            className="btn-electric-pill"
          >
            <span>Get in Touch</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-bone-white"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-void px-6 py-6 border-b border-[#1f1f1f] flex flex-col gap-5">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-[14px] uppercase tracking-[0.35px] font-semibold text-ash-gray hover:text-bone-white py-2"
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-2">
            <a
              href="/#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="btn-electric-pill w-full text-center"
            >
              Get in Touch
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
