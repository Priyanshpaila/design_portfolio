"use client";

import React, { useEffect, useRef } from "react";

export default function AmbientParticles({ count = 35 }: { count?: number }) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let width = 0;
    let height = 0;

    const colors = ["#8052ff", "#ffb829", "#15846e", "#00e5a3", "#a855f7"];
    const particles = Array.from({ length: count }, () => ({
      x: Math.random() * 1000,
      y: Math.random() * 1000,
      vx: (Math.random() - 0.5) * 0.18,
      vy: (Math.random() - 0.5) * 0.18,
      size: 1.5 + Math.random() * 2.0,
      rot: Math.random() * Math.PI * 2,
      vrot: (Math.random() - 0.5) * 0.015,
      color: colors[Math.floor(Math.random() * colors.length)],
      alpha: 0.12 + Math.random() * 0.2,
    }));

    const resize = () => {
      const parent = canvas.parentElement;
      if (!parent) return;
      width = parent.clientWidth || window.innerWidth;
      height = parent.clientHeight || window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };

    resize();
    window.addEventListener("resize", resize);

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        p.rot += p.vrot;

        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rot);
        ctx.strokeStyle = p.color;
        ctx.lineWidth = 1;
        ctx.globalAlpha = p.alpha;

        const r = p.size * 1.5;
        ctx.beginPath();
        ctx.moveTo(r, 0);
        ctx.lineTo(r * Math.cos((Math.PI * 2) / 3), r * Math.sin((Math.PI * 2) / 3));
        ctx.lineTo(r * Math.cos((Math.PI * 4) / 3), r * Math.sin((Math.PI * 4) / 3));
        ctx.closePath();
        ctx.stroke();

        ctx.restore();
      });

      animId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, [count]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none z-0 w-full h-full"
    />
  );
}
