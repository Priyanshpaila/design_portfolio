"use client";

import React, { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  const lenisRef = useRef<any>(null);
  const pathname = usePathname();

  useEffect(() => {
    let lenisInstance: any = null;
    let tickerHandler: any = null;
    let isCancelled = false;

    // Load Lenis and GSAP strictly in client runtime
    Promise.all([
      import("lenis"),
      import("gsap"),
      import("gsap/ScrollTrigger"),
    ]).then(([LenisModule, gsapModule, scrollTriggerModule]) => {
      if (isCancelled) return;

      const Lenis = LenisModule.default;
      const { gsap } = gsapModule;
      const { ScrollTrigger } = scrollTriggerModule;

      gsap.registerPlugin(ScrollTrigger);

      lenisInstance = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // exponential deceleration curve
        orientation: "vertical",
        gestureOrientation: "vertical",
        smoothWheel: true,
        wheelMultiplier: 0.9,
        touchMultiplier: 1.5,
      });

      lenisRef.current = lenisInstance;

      // Sync Lenis scroll with GSAP ScrollTrigger
      lenisInstance.on("scroll", ScrollTrigger.update);

      // Connect to GSAP ticker
      tickerHandler = (time: number) => {
        lenisInstance.raf(time * 1000);
      };

      gsap.ticker.add(tickerHandler);
      gsap.ticker.lagSmoothing(0);

      (window as any).__lenis = lenisInstance;
    }).catch((err) => {
      console.warn("Smooth scroll initialization notice:", err);
    });

    return () => {
      isCancelled = true;
      if (lenisInstance) {
        lenisInstance.destroy();
        (window as any).__lenis = null;
      }
      if (tickerHandler) {
        import("gsap").then(({ gsap }) => {
          gsap.ticker.remove(tickerHandler);
        }).catch(() => {});
      }
    };
  }, []);

  // Reset scroll to top on route change
  useEffect(() => {
    if (lenisRef.current) {
      lenisRef.current.scrollTo(0, { immediate: true });
    }
  }, [pathname]);

  return <>{children}</>;
}
