"use client";

import React, { useEffect, useRef } from "react";

interface Particle {
  // Base coordinates in normalized [-1, 1] brain space
  bx: number;
  by: number;
  bz: number;

  // Current screen coordinates
  x: number;
  y: number;

  // Geometry & visual properties
  size: number;
  rotation: number;
  rotSpeed: number;
  color: string;
  alpha: number;
  baseAlpha: number;
  isAmbient: boolean;

  // Ambient velocities
  vx?: number;
  vy?: number;
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

    let animationFrameId: number;
    let width = 0;
    let height = 0;
    let dpr = 1;

    // Mouse tracking for parallax tilt
    let mouseX = 0;
    let mouseY = 0;
    let targetTiltX = 0;
    let targetTiltY = 0;
    let currentTiltX = 0;
    let currentTiltY = 0;

    const colors = [
      "#8052ff", // Electric Iris
      "#ffb829", // Saffron Spark
      "#15846e", // Deep Verdant
      "#00e5a3", // Bright Emerald Teal
      "#ff2a85", // Neon Magenta
      "#38bdf8", // Sky Cyan
      "#a855f7", // Violet
    ];

    // Generate brain constellation points
    const particles: Particle[] = [];
    const BRAIN_PARTICLES = 1600;
    const AMBIENT_PARTICLES = 250;

    // Equation for parametric dual-hemisphere brain point cloud
    function generateBrainPoint(): [number, number, number] {
      // Choose left or right hemisphere (-1 or +1)
      const hemisphere = Math.random() > 0.5 ? 1 : -1;
      
      // Ellipsoidal base shape with organic lobe indentations
      const u = Math.random();
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);

      // Radii: width (X), height (Y), depth (Z)
      const rx = 0.55;
      const ry = 0.75;
      const rz = 0.6;

      // Base ellipsoid coords
      let x = rx * Math.sin(phi) * Math.cos(theta);
      let y = ry * Math.sin(phi) * Math.sin(theta);
      let z = rz * Math.cos(phi);

      // Shift hemisphere outward along X
      x = x * 0.75 + hemisphere * 0.28;

      // Pinch the center longitudinal fissure (sulcus)
      const fissurePinch = Math.exp(-Math.pow(x / 0.25, 2)) * 0.15;
      x += (x > 0 ? 1 : -1) * fissurePinch;

      // Temporal lobe dip and frontal expansion
      if (y < 0) {
        y *= 0.85; // slightly rounder bottom
      } else {
        y *= 1.1; // taller cerebral cortex
      }

      // Add gentle organic turbulence / fractal noise
      const jitter = (Math.random() - 0.5) * 0.12;
      x += jitter;
      y += jitter;
      z += jitter;

      return [x, y, z];
    }

    // Initialize brain particles
    for (let i = 0; i < BRAIN_PARTICLES; i++) {
      const [bx, by, bz] = generateBrainPoint();
      const color = colors[Math.floor(Math.random() * colors.length)];
      const baseAlpha = 0.45 + Math.random() * 0.55;
      particles.push({
        bx,
        by,
        bz,
        x: 0,
        y: 0,
        size: 1.8 + Math.random() * 2.2,
        rotation: Math.random() * Math.PI * 2,
        rotSpeed: (Math.random() - 0.5) * 0.02,
        color,
        alpha: baseAlpha,
        baseAlpha,
        isAmbient: false,
      });
    }

    // Initialize ambient background drifting particles
    for (let i = 0; i < AMBIENT_PARTICLES; i++) {
      const color = colors[Math.floor(Math.random() * colors.length)];
      particles.push({
        bx: 0,
        by: 0,
        bz: 0,
        x: Math.random() * 1000,
        y: Math.random() * 800,
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25,
        size: 1.2 + Math.random() * 1.8,
        rotation: Math.random() * Math.PI * 2,
        rotSpeed: (Math.random() - 0.5) * 0.015,
        color,
        alpha: 0.15 + Math.random() * 0.25,
        baseAlpha: 0.2,
        isAmbient: true,
      });
    }

    // Handle canvas resizing for crisp high-DPI
    const handleResize = () => {
      const parent = canvas.parentElement;
      if (!parent) return;
      const rect = parent.getBoundingClientRect();
      width = rect.width || window.innerWidth;
      height = rect.height || 600;
      dpr = window.devicePixelRatio || 1;

      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      ctx.scale(dpr, dpr);

      // Reposition ambient particles across the newly calculated dimensions
      particles.forEach((p) => {
        if (p.isAmbient) {
          p.x = Math.random() * width;
          p.y = Math.random() * height;
        }
      });
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    // Mouse movement listener
    const handleMouseMove = (e: MouseEvent) => {
      if (!interactive) return;
      const rect = canvas.getBoundingClientRect();
      const clientX = e.clientX - rect.left;
      const clientY = e.clientY - rect.top;
      mouseX = clientX - width / 2;
      mouseY = clientY - height / 2;

      targetTiltX = (mouseY / (height / 2)) * 0.25;
      targetTiltY = (mouseX / (width / 2)) * 0.35;
    };

    if (interactive) {
      window.addEventListener("mousemove", handleMouseMove);
    }

    // Draw a single outlined equilateral triangle
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
      context.lineWidth = 1.0;
      context.globalAlpha = Math.max(0, Math.min(1, alpha));

      context.beginPath();
      // Equilateral triangle coordinates
      const r = size * 1.5;
      const a0 = 0;
      const a1 = (Math.PI * 2) / 3;
      const a2 = (Math.PI * 4) / 3;

      context.moveTo(r * Math.cos(a0), r * Math.sin(a0));
      context.lineTo(r * Math.cos(a1), r * Math.sin(a1));
      context.lineTo(r * Math.cos(a2), r * Math.sin(a2));
      context.closePath();
      context.stroke();

      context.restore();
    }

    // Animation loop
    let globalAngle = 0;
    let pulseTime = 0;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Smooth camera tilt interpolation
      currentTiltX += (targetTiltX - currentTiltX) * 0.05;
      currentTiltY += (targetTiltY - currentTiltY) * 0.05;

      globalAngle += 0.003;
      pulseTime += 0.02;

      const centerX = width * 0.52;
      const centerY = height * 0.48;
      // Scale brain relative to canvas dimensions
      const brainScale = Math.min(width, height) * 0.38;

      // 3D Rotation matrices
      const cosY = Math.cos(globalAngle + currentTiltY);
      const sinY = Math.sin(globalAngle + currentTiltY);
      const cosX = Math.cos(currentTiltX);
      const sinX = Math.sin(currentTiltX);

      // Sort brain particles by projected depth (Z) for natural depth layering
      const projectedBrain: {
        x: number;
        y: number;
        z: number;
        size: number;
        rot: number;
        color: string;
        alpha: number;
      }[] = [];

      // Update & project brain particles
      for (let i = 0; i < BRAIN_PARTICLES; i++) {
        const p = particles[i];
        p.rotation += p.rotSpeed;

        // Subtle organic breathing oscillation
        const breathing = 1 + 0.03 * Math.sin(pulseTime + p.by * 3);
        const bx = p.bx * breathing;
        const by = p.by * breathing;
        const bz = p.bz * breathing;

        // Rotate around Y axis
        const x1 = bx * cosY - bz * sinY;
        const z1 = bx * sinY + bz * cosY;

        // Rotate around X axis
        const y2 = by * cosX - z1 * sinX;
        const z2 = by * sinX + z1 * cosX;

        // Perspective projection
        const fov = 2.4;
        const perspective = fov / (fov + z2 * 0.6);
        const screenX = centerX + x1 * brainScale * perspective;
        const screenY = centerY + y2 * brainScale * perspective;

        // Depth cueing for alpha & scale
        const depthAlpha = p.baseAlpha * Math.max(0.2, (z2 + 1) / 2);
        const depthSize = p.size * perspective;

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

      // Sort from back to front
      projectedBrain.sort((a, b) => a.z - b.z);

      // Draw faint constellation interconnecting lines between close neighboring particles
      ctx.lineWidth = 0.5;
      const sampleStep = 8; // sample every 8th particle for high performance
      for (let i = 0; i < projectedBrain.length; i += sampleStep) {
        const p1 = projectedBrain[i];
        for (let j = i + sampleStep; j < projectedBrain.length && j < i + 40; j += sampleStep) {
          const p2 = projectedBrain[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const distSq = dx * dx + dy * dy;
          if (distSq < 1600) {
            // within 40px
            const lineAlpha = (1 - Math.sqrt(distSq) / 40) * 0.15;
            ctx.strokeStyle = p1.color;
            ctx.globalAlpha = lineAlpha;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      }

      // Render brain particles
      for (let i = 0; i < projectedBrain.length; i++) {
        const p = projectedBrain[i];
        drawTriangle(ctx, p.x, p.y, p.size, p.rot, p.color, p.alpha);
      }

      // Render ambient background drifting particles
      for (let i = BRAIN_PARTICLES; i < particles.length; i++) {
        const p = particles[i];
        if (!p.isAmbient) continue;

        if (p.vx && p.vy) {
          p.x += p.vx;
          p.y += p.vy;

          if (p.x < 0) p.x = width;
          if (p.x > width) p.x = 0;
          if (p.y < 0) p.y = height;
          if (p.y > height) p.y = 0;
        }

        p.rotation += p.rotSpeed;
        drawTriangle(ctx, p.x, p.y, p.size, p.rotation, p.color, p.alpha);
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
      if (interactive) {
        window.removeEventListener("mousemove", handleMouseMove);
      }
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
