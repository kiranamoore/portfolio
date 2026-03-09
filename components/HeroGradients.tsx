"use client";

import { useEffect, useRef } from "react";

export default function HeroGradients() {
  const blob1Ref = useRef<HTMLDivElement>(null);
  const blob2Ref = useRef<HTMLDivElement>(null);
  const mouseRef = useRef({ x: 0.5, y: 0.5 });
  const currentRef = useRef({ x1: 0, y1: 0, x2: 0, y2: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = {
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight,
      };
    };

    let animationId: number;
    const animate = () => {
      const { x, y } = mouseRef.current;
      const c = currentRef.current;

      // Blob 1 follows mouse with offset (top-right area)
      const targetX1 = 20 + x * 60;
      const targetY1 = -30 + y * 50;
      c.x1 += (targetX1 - c.x1) * 0.05;
      c.y1 += (targetY1 - c.y1) * 0.05;

      // Blob 2 follows mouse inversely (bottom-left area)
      const targetX2 = -20 + (1 - x) * 50;
      const targetY2 = 20 + (1 - y) * 45;
      c.x2 += (targetX2 - c.x2) * 0.04;
      c.y2 += (targetY2 - c.y2) * 0.04;

      if (blob1Ref.current) {
        blob1Ref.current.style.transform = `translate(${c.x1}%, ${c.y1}%)`;
      }
      if (blob2Ref.current) {
        blob2Ref.current.style.transform = `translate(${c.x2}%, ${c.y2}%)`;
      }

      animationId = requestAnimationFrame(animate);
    };

    animate();
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <div className="hero-gradients-container">
      <div ref={blob1Ref} className="hero-blob hero-blob-1" />
      <div ref={blob2Ref} className="hero-blob hero-blob-2" />
    </div>
  );
}
