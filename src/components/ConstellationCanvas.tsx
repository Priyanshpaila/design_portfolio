"use client";

import React, { useEffect, useRef } from "react";

interface BrainParticle {
  // Normalized 3D coordinates [-1, 1]
  bx: number;
  by: number;
  bz: number;

  // Geometry
  size: number;
  rotation: number;
  rotSpeed: number;
  color: string;
  alpha: number;
  baseAlpha: number;
  isRim: boolean;
}

interface FloatingPolyhedron {
  x: number; // in normalized screen space [-1, 1]
  y: number;
  z: number;
  scale: number;
  color: string;
  rotX: number;
  rotY: number;
  rotZ: number;
  speedX: number;
  speedY: number;
  speedZ: number;
  parallaxSpeed: number;
  type: "tetrahedron" | "octahedron" | "prism" | "triangle";
}

interface AmbientStar {
  x: number;
  y: number;
  size: number;
  color: string;
  alpha: number;
  vx: number;
  vy: number;
  rot: number;
  vrot: number;
  parallaxSpeed: number;
}

export default function ConstellationCanvas({
  className = "",
  interactive = true,
}: {
  className?: string;
  interactive?: boolean;
}) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let width = 0;
    let height = 0;
    let dpr = 1;

    // Mouse tracking
    let targetTiltX = 0;
    let targetTiltY = 0;
    let currentTiltX = 0;
    let currentTiltY = 0;

    // Scroll tracking
    let scrollY = 0;
    let targetScrollProgress = 0;
    let currentScrollProgress = 0;

    // Chromatic colors from Style Reference
    const GOLD_PALETTE = ["#ffb829", "#ffaa00", "#ffd700", "#ffc83b", "#ffe066"];
    const CHROMATIC_PALETTE = [
      "#8052ff", // Electric Iris
      "#ff2a85", // Neon Magenta
      "#15846e", // Deep Verdant
      "#00e5a3", // Bright Emerald Teal
      "#00d2ff", // Electric Cyan
      "#ffffff", // Bone White
      "#38bdf8", // Sky Blue
      "#a855f7", // Violet
    ];

    // =========================================================================
    // 1. GENERATE A 3D CONSTELLATION ENERGY ORB
    // =========================================================================
    const brainParticles: BrainParticle[] = [];
    const TOTAL_BRAIN_PARTICLES = 2800;

    // A softly irregular spherical volume gives the particle field a clear,
    // dimensional silhouette without resembling a literal object.
    function evaluateBrainPoint(x: number, y: number): { inside: boolean; isRim: boolean; type: string } {
      const nx = x / 0.76;
      const ny = y / 0.76;
      const radius = nx * nx + ny * ny;
      return {
        inside: radius <= 1,
        isRim: radius > 0.82,
        type: radius > 0.82 ? "rim" : "core",
      };
    }

    // Populate the orb with front/back shell particles and a sparse inner core.
    let count = 0;
    let attempts = 0;
    while (count < TOTAL_BRAIN_PARTICLES && attempts < 50000) {
      attempts++;
      const candidateX = (Math.random() - 0.5) * 1.55;
      const candidateY = (Math.random() - 0.5) * 1.55;
      const evalResult = evaluateBrainPoint(candidateX, candidateY);
      if (!evalResult.inside) continue;

      const nx = candidateX / 0.76;
      const ny = candidateY / 0.76;
      const radial = Math.min(0.985, nx * nx + ny * ny);
      const surfaceDepth = 0.48 * Math.sqrt(Math.max(0.02, 1 - radial));
      const isFrontLayer = Math.random() > 0.5;
      const shellDepth = surfaceDepth * (0.78 + Math.random() * 0.22);
      const candidateZ = (Math.random() < 0.8
        ? shellDepth
        : Math.random() * surfaceDepth * 0.68) * (isFrontLayer ? 1 : -1);

      // A subtle radial ripple keeps the orb from looking mechanically perfect.
      const ripple = Math.sin(Math.atan2(candidateY, candidateX) * 7 + radial * 9);
      const organicScale = 1 + ripple * 0.012;
      const bx = candidateX * organicScale;
      const by = candidateY * organicScale;

      let color: string;
      let baseAlpha: number;
      let size: number;
      if (evalResult.isRim) {
        color = GOLD_PALETTE[Math.floor(Math.random() * GOLD_PALETTE.length)];
        baseAlpha = 0.72 + Math.random() * 0.28;
        size = 1.35 + Math.random() * 1.8;
      } else {
        color = Math.random() < 0.22
          ? GOLD_PALETTE[Math.floor(Math.random() * GOLD_PALETTE.length)]
          : CHROMATIC_PALETTE[Math.floor(Math.random() * CHROMATIC_PALETTE.length)];
        baseAlpha = 0.42 + Math.random() * 0.52;
        size = 1.15 + Math.random() * 1.7;
      }

      brainParticles.push({
        bx,
        by,
        bz: candidateZ,
        size,
        rotation: Math.random() * Math.PI * 2,
        rotSpeed: (Math.random() - 0.5) * 0.02,
        color,
        alpha: baseAlpha,
        baseAlpha,
        isRim: evalResult.isRim,
      });
      count++;
    }

    // =========================================================================
    // 2. FLOATING 3D WIREFRAME POLYHEDRA (Look at the reference image & video!)
    // =========================================================================
    // Floating large 3D wireframe pyramids, tetrahedrons, prisms drifting in depth
    const floatingPolyhedra: FloatingPolyhedron[] = [
      {
        x: -0.68,
        y: -0.22,
        z: -0.1,
        scale: 64,
        color: "#ffb829", // Saffron gold wireframe pyramid
        rotX: 0.4,
        rotY: 0.6,
        rotZ: 0.2,
        speedX: 0.004,
        speedY: 0.006,
        speedZ: 0.003,
        parallaxSpeed: -0.25,
        type: "tetrahedron",
      },
      {
        x: -0.82,
        y: 0.15,
        z: 0.15,
        scale: 85,
        color: "#ffaa00", // Large amber tilted tetrahedron (middle left)
        rotX: -0.3,
        rotY: 0.8,
        rotZ: -0.4,
        speedX: 0.003,
        speedY: 0.005,
        speedZ: 0.002,
        parallaxSpeed: -0.35,
        type: "tetrahedron",
      },
      {
        x: -0.58,
        y: 0.48,
        z: -0.05,
        scale: 52,
        color: "#15846e", // Deep verdant/teal wireframe octahedron
        rotX: 0.5,
        rotY: -0.4,
        rotZ: 0.3,
        speedX: -0.005,
        speedY: 0.004,
        speedZ: -0.002,
        parallaxSpeed: -0.18,
        type: "octahedron",
      },
      {
        x: -0.15,
        y: 0.72,
        z: 0.1,
        scale: 44,
        color: "#8052ff", // Violet diamond octahedron
        rotX: 0.2,
        rotY: 0.5,
        rotZ: 0.7,
        speedX: 0.004,
        speedY: -0.003,
        speedZ: 0.005,
        parallaxSpeed: -0.3,
        type: "octahedron",
      },
      {
        x: -0.35,
        y: -0.58,
        z: -0.2,
        scale: 48,
        color: "#ffb829", // Upper amber wireframe prism
        rotX: -0.6,
        rotY: 0.3,
        rotZ: 0.1,
        speedX: 0.005,
        speedY: 0.003,
        speedZ: -0.004,
        parallaxSpeed: -0.22,
        type: "prism",
      },
      {
        x: 0.65,
        y: -0.55,
        z: -0.15,
        scale: 38,
        color: "#ff2a85", // Neon magenta wireframe triangle
        rotX: 0.3,
        rotY: -0.7,
        rotZ: 0.4,
        speedX: -0.004,
        speedY: 0.005,
        speedZ: 0.003,
        parallaxSpeed: -0.15,
        type: "tetrahedron",
      },
      {
        x: 0.72,
        y: 0.38,
        z: 0.2,
        scale: 42,
        color: "#00d2ff", // Electric cyan diamond
        rotX: -0.5,
        rotY: 0.4,
        rotZ: -0.3,
        speedX: 0.003,
        speedY: -0.004,
        speedZ: 0.002,
        parallaxSpeed: -0.28,
        type: "octahedron",
      },
    ];

    // =========================================================================
    // 3. AMBIENT DRIFTING PARTICLES
    // =========================================================================
    const ambientStars: AmbientStar[] = [];
    for (let i = 0; i < 180; i++) {
      const isGold = Math.random() < 0.4;
      ambientStars.push({
        x: Math.random() * 1200,
        y: Math.random() * 900,
        size: 1.2 + Math.random() * 1.8,
        color: isGold
          ? GOLD_PALETTE[Math.floor(Math.random() * GOLD_PALETTE.length)]
          : CHROMATIC_PALETTE[Math.floor(Math.random() * CHROMATIC_PALETTE.length)],
        alpha: 0.15 + Math.random() * 0.4,
        vx: (Math.random() - 0.5) * 0.15,
        vy: (Math.random() - 0.5) * 0.15,
        rot: Math.random() * Math.PI * 2,
        vrot: (Math.random() - 0.5) * 0.02,
        parallaxSpeed: 0.1 + Math.random() * 0.3,
      });
    }

    // =========================================================================
    // 4. CANVAS RESIZE & MOUSE / SCROLL LISTENERS
    // =========================================================================
    const handleResize = () => {
      const parent = canvas.parentElement;
      if (!parent) return;
      width = parent.clientWidth || window.innerWidth;
      height = parent.clientHeight || 700;
      dpr = window.devicePixelRatio || 1;

      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      // Reposition ambient stars
      ambientStars.forEach((s) => {
        s.x = Math.random() * width;
        s.y = Math.random() * height;
      });
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    const handleMouseMove = (e: MouseEvent) => {
      if (!interactive) return;
      const rect = canvas.getBoundingClientRect();
      const cx = e.clientX - rect.left - width / 2;
      const cy = e.clientY - rect.top - height / 2;

      targetTiltX = (cy / (height / 2)) * 0.22;
      targetTiltY = (cx / (width / 2)) * 0.32;
    };

    const handleScroll = () => {
      scrollY = window.scrollY || document.documentElement.scrollTop;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      targetScrollProgress = docHeight > 0 ? scrollY / docHeight : 0;
    };

    if (interactive) {
      window.addEventListener("mousemove", handleMouseMove);
    }
    window.addEventListener("scroll", handleScroll, { passive: true });

    // =========================================================================
    // 5. HELPER: 3D ROTATION & PROJECTION MATH
    // =========================================================================
    function rotate3D(
      x: number,
      y: number,
      z: number,
      rx: number,
      ry: number,
      rz: number
    ): [number, number, number] {
      // Rotate around X
      const cosX = Math.cos(rx);
      const sinX = Math.sin(rx);
      const y1 = y * cosX - z * sinX;
      const z1 = y * sinX + z * cosX;

      // Rotate around Y
      const cosY = Math.cos(ry);
      const sinY = Math.sin(ry);
      const x2 = x * cosY + z1 * sinY;
      const z2 = -x * sinY + z1 * cosY;

      // Rotate around Z
      const cosZ = Math.cos(rz);
      const sinZ = Math.sin(rz);
      const x3 = x2 * cosZ - y1 * sinZ;
      const y3 = x2 * sinZ + y1 * cosZ;

      return [x3, y3, z2];
    }

    // Draw single outlined equilateral triangle
    function drawTriangle(
      context: CanvasRenderingContext2D,
      x: number,
      y: number,
      size: number,
      angle: number,
      color: string,
      alpha: number
    ) {
      context.save();
      context.translate(x, y);
      context.rotate(angle);
      context.strokeStyle = color;
      context.lineWidth = 1.1;
      context.globalAlpha = Math.max(0, Math.min(1, alpha));

      context.beginPath();
      const r = size * 1.55;
      context.moveTo(r, 0);
      context.lineTo(r * Math.cos((Math.PI * 2) / 3), r * Math.sin((Math.PI * 2) / 3));
      context.lineTo(r * Math.cos((Math.PI * 4) / 3), r * Math.sin((Math.PI * 4) / 3));
      context.closePath();
      context.stroke();

      context.restore();
    }

    // Draw 3D Wireframe Polyhedron
    function drawWireframePolyhedron(
      context: CanvasRenderingContext2D,
      poly: FloatingPolyhedron,
      centerX: number,
      centerY: number
    ) {
      poly.rotX += poly.speedX;
      poly.rotY += poly.speedY;
      poly.rotZ += poly.speedZ;

      // Parallax scroll shift
      const parallaxY = scrollY * poly.parallaxSpeed;
      const screenX = centerX + poly.x * (width * 0.45);
      const screenY = centerY + poly.y * (height * 0.45) + parallaxY;

      let vertices: [number, number, number][] = [];
      let edges: [number, number][] = [];

      if (poly.type === "tetrahedron") {
        // Regular tetrahedron
        const s = poly.scale;
        vertices = [
          [0, -s, 0],
          [s * 0.94, s * 0.33, -s * 0.54],
          [-s * 0.94, s * 0.33, -s * 0.54],
          [0, s * 0.33, s],
        ];
        edges = [
          [0, 1],
          [0, 2],
          [0, 3],
          [1, 2],
          [2, 3],
          [3, 1],
        ];
      } else if (poly.type === "octahedron") {
        // Double pyramid / diamond
        const s = poly.scale * 0.85;
        vertices = [
          [0, -s * 1.2, 0], // top apex
          [s, 0, 0],
          [0, 0, s],
          [-s, 0, 0],
          [0, 0, -s],
          [0, s * 1.2, 0], // bottom apex
        ];
        edges = [
          [0, 1],
          [0, 2],
          [0, 3],
          [0, 4],
          [5, 1],
          [5, 2],
          [5, 3],
          [5, 4],
          [1, 2],
          [2, 3],
          [3, 4],
          [4, 1],
        ];
      } else {
        // Triangular prism
        const s = poly.scale * 0.7;
        vertices = [
          [-s, -s, -s * 0.6],
          [s, -s, -s * 0.6],
          [0, s, -s * 0.6],
          [-s, -s, s * 0.6],
          [s, -s, s * 0.6],
          [0, s, s * 0.6],
        ];
        edges = [
          [0, 1],
          [1, 2],
          [2, 0],
          [3, 4],
          [4, 5],
          [5, 3],
          [0, 3],
          [1, 4],
          [2, 5],
        ];
      }

      // Rotate & project vertices
      const projected = vertices.map(([vx, vy, vz]) => {
        const [rx, ry, rz] = rotate3D(vx, vy, vz, poly.rotX, poly.rotY, poly.rotZ);
        const fov = 400;
        const p = fov / (fov + rz + 100);
        return {
          x: screenX + rx * p,
          y: screenY + ry * p,
          z: rz,
        };
      });

      // Render wireframe edges
      context.save();
      context.strokeStyle = poly.color;
      context.lineWidth = 1.2;
      context.globalAlpha = 0.65;

      edges.forEach(([i1, i2]) => {
        const v1 = projected[i1];
        const v2 = projected[i2];
        context.beginPath();
        context.moveTo(v1.x, v1.y);
        context.lineTo(v2.x, v2.y);
        context.stroke();
      });

      context.restore();
    }

    // =========================================================================
    // 6. ANIMATION TICKER LOOP
    // =========================================================================
    let globalAngle = 0;
    let pulseTime = 0;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Smooth inertia damping for mouse and scroll
      currentTiltX += (targetTiltX - currentTiltX) * 0.06;
      currentTiltY += (targetTiltY - currentTiltY) * 0.06;
      currentScrollProgress += (targetScrollProgress - currentScrollProgress) * 0.08;

      globalAngle += 0.0025;
      pulseTime += 0.02;

      // Energy orb positioning: on the right half of the hero section
      // In wider screens, place it on the right; in mobile, centered
      const isMobile = width < 768;
      const brainCenterX = isMobile ? width * 0.5 : width * 0.58;
      const brainCenterY = height * 0.48 - currentScrollProgress * 140; // subtle upward scroll parallax

      // Orb scale relative to canvas size
      const brainScale = Math.min(width, height) * (isMobile ? 0.44 : 0.48);

      // 3D rotation angles tied to mouse tilt + continuous drift + scroll
      const rotY = globalAngle * 0.42 + currentTiltY * 1.18 + currentScrollProgress * 0.55;
      const rotX = currentTiltX * 1.05 + Math.sin(globalAngle * 0.7) * 0.035 + currentScrollProgress * 0.22;
      const rotZ = currentTiltY * 0.15;

      const cosY = Math.cos(rotY);
      const sinY = Math.sin(rotY);
      const cosX = Math.cos(rotX);
      const sinX = Math.sin(rotX);

      // Project orb particles
      const projectedBrain: {
        x: number;
        y: number;
        z: number;
        size: number;
        rot: number;
        color: string;
        alpha: number;
      }[] = [];

      for (let i = 0; i < brainParticles.length; i++) {
        const p = brainParticles[i];
        p.rotation += p.rotSpeed;

        // Gentle breathing motion keeps the particle volume alive
        const breathing = 1 + 0.015 * Math.sin(pulseTime + p.by * 4);
        const bx = p.bx * breathing;
        const by = p.by * breathing;
        const bz = p.bz * breathing;

        // 3D rotation
        const x1 = bx * cosY - bz * sinY;
        const z1 = bx * sinY + bz * cosY;
        const y2 = by * cosX - z1 * sinX;
        const z2 = by * sinX + z1 * cosX;

        // Perspective projection
        const fov = 2.45;
        const perspective = fov / (fov - z2 * 0.42);
        const screenX = brainCenterX + x1 * brainScale * perspective;
        const screenY = brainCenterY + y2 * brainScale * perspective;

        const depthLight = Math.max(0.28, Math.min(1.22, 0.72 + z2 * 0.34));
        const depthAlpha = p.baseAlpha * Math.max(0.16, (z2 + 1.05) / 2.05) * depthLight;
        const depthSize = p.size * perspective * (0.82 + depthLight * 0.2);

        projectedBrain.push({
          x: screenX,
          y: screenY,
          z: z2,
          size: depthSize,
          rot: p.rotation,
          color: p.color,
          alpha: depthAlpha,
        });
      }

      // Sort back to front for natural depth layering
      projectedBrain.sort((a, b) => a.z - b.z);

      // Soft volumetric aura behind the energy orb.
      ctx.save();
      const brainAura = ctx.createRadialGradient(
        brainCenterX, brainCenterY, brainScale * 0.08,
        brainCenterX, brainCenterY, brainScale * 1.08
      );
      brainAura.addColorStop(0, "rgba(128, 82, 255, 0.105)");
      brainAura.addColorStop(0.48, "rgba(0, 210, 255, 0.045)");
      brainAura.addColorStop(1, "rgba(0, 0, 0, 0)");
      ctx.fillStyle = brainAura;
      ctx.beginPath();
      ctx.ellipse(brainCenterX, brainCenterY, brainScale * 1.02, brainScale * 1.02, 0, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();

      // Fine orbital arcs add scale and make the sphere read as a 3D energy core.
      ctx.save();
      ctx.translate(brainCenterX, brainCenterY);
      ctx.lineWidth = 0.8;
      ctx.globalAlpha = 0.22;
      ctx.strokeStyle = "#00d2ff";
      ctx.beginPath();
      ctx.ellipse(0, 0, brainScale * 1.12, brainScale * 0.34, globalAngle * 0.32, 0, Math.PI * 2);
      ctx.stroke();
      ctx.globalAlpha = 0.16;
      ctx.strokeStyle = "#a855f7";
      ctx.beginPath();
      ctx.ellipse(0, 0, brainScale * 1.08, brainScale * 0.29, -globalAngle * 0.24 + 0.9, 0, Math.PI * 2);
      ctx.stroke();
      ctx.restore();

      // Draw faint constellation interconnecting lines
      ctx.lineWidth = 0.5;
      const sampleStep = 7;
      for (let i = 0; i < projectedBrain.length; i += sampleStep) {
        const p1 = projectedBrain[i];
        for (let j = i + sampleStep; j < projectedBrain.length && j < i + 35; j += sampleStep) {
          const p2 = projectedBrain[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const distSq = dx * dx + dy * dy;
          if (distSq < 1400) {
            const lineAlpha = (1 - Math.sqrt(distSq) / 38) * 0.16;
            ctx.strokeStyle = p1.color;
            ctx.globalAlpha = lineAlpha;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      }

      // Render volumetric particles as softly lit spherical beads.
      // A restrained highlight on the upper-left edge gives each particle a 3D bead-like feel.
      for (let i = 0; i < projectedBrain.length; i++) {
        const p = projectedBrain[i];
        const radius = Math.max(0.55, p.size * 0.72);
        ctx.save();
        ctx.globalAlpha = Math.max(0.04, Math.min(1, p.alpha));
        ctx.shadowColor = p.color;
        ctx.shadowBlur = p.z > 0 ? 7 : 2.5;
        ctx.fillStyle = p.color;
        ctx.beginPath();
        ctx.arc(p.x, p.y, radius, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 0;
        ctx.globalAlpha *= 0.62;
        ctx.fillStyle = "rgba(255,255,255,0.9)";
        ctx.beginPath();
        ctx.arc(p.x - radius * 0.28, p.y - radius * 0.32, Math.max(0.3, radius * 0.25), 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }

      ctx.globalAlpha = 1;

      // Render Floating 3D Wireframe Polyhedra
      floatingPolyhedra.forEach((poly) => {
        drawWireframePolyhedron(ctx, poly, width * 0.5, height * 0.48);
      });

      // Render ambient background drifting particles
      ambientStars.forEach((star) => {
        star.x += star.vx;
        star.y += star.vy;
        star.rot += star.vrot;

        if (star.x < 0) star.x = width;
        if (star.x > width) star.x = 0;
        if (star.y < 0) star.y = height;
        if (star.y > height) star.y = 0;

        const parallaxY = scrollY * star.parallaxSpeed * 0.2;
        drawTriangle(ctx, star.x, (star.y + parallaxY) % height, star.size, star.rot, star.color, star.alpha);
      });

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", handleResize);
      if (interactive) {
        window.removeEventListener("mousemove", handleMouseMove);
      }
      window.removeEventListener("scroll", handleScroll);
    };
  }, [interactive]);

  return (
    <canvas
      ref={canvasRef}
      className={`block w-full h-full pointer-events-none ${className}`}
      style={{ background: "transparent" }}
    />
  );
}
