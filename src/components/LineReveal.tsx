"use client";

import React, { useEffect, useRef } from "react";

interface LineRevealProps {
  lines: string[];
  as?: "h1" | "h2" | "h3" | "h4" | "p" | "div";
  className?: string;
  lineClassName?: string;
  delay?: number;
  duration?: number;
  stagger?: number;
  triggerOnScroll?: boolean;
}

export default function LineReveal({
  lines,
  as: Component = "h2",
  className = "",
  lineClassName = "",
  delay = 0,
  duration = 1.2,
  stagger = 0.12,
  triggerOnScroll = true,
}: LineRevealProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const lineElements = el.querySelectorAll(".line-reveal-inner");
    if (!lineElements.length) return;

    let cleanup: (() => void) | undefined;
    let isCancelled = false;

    // Load GSAP strictly on the client
    Promise.all([
      import("gsap"),
      import("gsap/ScrollTrigger"),
    ]).then(([gsapModule, stModule]) => {
      if (isCancelled) return;

      const { gsap } = gsapModule;
      const { ScrollTrigger } = stModule;
      gsap.registerPlugin(ScrollTrigger);

      gsap.set(lineElements, {
        yPercent: 120,
        opacity: 0,
        rotateX: 10,
      });

      const animConfig = {
        yPercent: 0,
        opacity: 1,
        rotateX: 0,
        duration,
        stagger,
        delay,
        ease: "power4.out",
      };

      if (triggerOnScroll) {
        const st = ScrollTrigger.create({
          trigger: el,
          start: "top 88%",
          onEnter: () => {
            gsap.to(lineElements, animConfig);
          },
          once: true,
        });

        cleanup = () => {
          st.kill();
        };
      } else {
        const tween = gsap.to(lineElements, animConfig);
        cleanup = () => {
          tween.kill();
        };
      }
    }).catch(() => {
      // Fallback: if GSAP fails to load, make lines visible immediately
      lineElements.forEach((line) => {
        (line as HTMLElement).style.opacity = "1";
        (line as HTMLElement).style.transform = "none";
      });
    });

    return () => {
      isCancelled = true;
      if (cleanup) cleanup();
    };
  }, [lines, delay, duration, stagger, triggerOnScroll]);

  return (
    <Component ref={containerRef as any} className={`block ${className}`}>
      {lines.map((line, idx) => (
        <span
          key={idx}
          className="block overflow-hidden pb-1"
          style={{ perspective: "1000px" }}
        >
          <span className={`block line-reveal-inner ${lineClassName}`}>
            {line}
          </span>
        </span>
      ))}
    </Component>
  );
}
