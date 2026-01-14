"use client";

import { useEffect, useRef } from "react";

export default function HeroBackground() {
  const containerRef = useRef<HTMLDivElement>(null);
  const wave1Ref = useRef<SVGPathElement>(null);
  const wave2Ref = useRef<SVGPathElement>(null);
  const wave3Ref = useRef<SVGPathElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const wave1 = wave1Ref.current;
    const wave2 = wave2Ref.current;
    const wave3 = wave3Ref.current;
    if (!container || !wave1 || !wave2 || !wave3) return;

    let mouseX = 0.5;
    let mouseY = 0.5;
    let targetX = 0.5;
    let targetY = 0.5;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      targetX = (e.clientX - rect.left) / rect.width;
      targetY = (e.clientY - rect.top) / rect.height;
    };

    const handleScroll = () => {
      container.style.opacity = String(Math.max(0, 1 - window.scrollY / 600));
    };

    let animationId: number;
    const animate = () => {
      mouseX += (targetX - mouseX) * 0.1;
      mouseY += (targetY - mouseY) * 0.1;

      const offsetX = (mouseX - 0.5) * 400;

      wave1.style.transform = `translateX(${offsetX * 0.5}px)`;
      wave2.style.transform = `translateX(${-offsetX * 0.7}px)`;
      wave3.style.transform = `translateX(${offsetX * 0.9}px)`;

      animationId = requestAnimationFrame(animate);
    };

    animate();
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <div ref={containerRef} className="hero-bg-container">
      {/* Animated flowing waves - extra wide for ultrawide screens */}
      <svg
        className="hero-waves"
        viewBox="0 0 2200 800"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient id="wave-gradient-1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(102, 126, 234, 0.15)" />
            <stop offset="50%" stopColor="rgba(118, 75, 162, 0.1)" />
            <stop offset="100%" stopColor="rgba(79, 172, 254, 0.08)" />
          </linearGradient>
          <linearGradient id="wave-gradient-2" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="rgba(118, 75, 162, 0.12)" />
            <stop offset="100%" stopColor="rgba(240, 147, 251, 0.06)" />
          </linearGradient>
          <linearGradient id="wave-gradient-3" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(79, 172, 254, 0.1)" />
            <stop offset="100%" stopColor="rgba(102, 126, 234, 0.05)" />
          </linearGradient>
        </defs>

        {/* Wave 1 - back layer */}
        <path
          ref={wave1Ref}
          className="wave wave-1"
          fill="url(#wave-gradient-1)"
          d="M-200,400 C0,350 200,500 400,400 C600,300 800,450 1000,400 C1200,350 1400,480 1600,400 C1800,320 2000,450 2200,400 L2400,400 L2400,800 L-200,800 Z"
        />

        {/* Wave 2 - middle layer */}
        <path
          ref={wave2Ref}
          className="wave wave-2"
          fill="url(#wave-gradient-2)"
          d="M-200,500 C50,420 200,580 450,500 C700,420 900,560 1150,500 C1400,440 1600,550 1850,500 C2100,450 2250,530 2400,500 L2400,800 L-200,800 Z"
        />

        {/* Wave 3 - front layer */}
        <path
          ref={wave3Ref}
          className="wave wave-3"
          fill="url(#wave-gradient-3)"
          d="M-200,600 C50,550 200,650 400,600 C600,550 800,670 1000,600 C1200,530 1400,660 1600,600 C1800,540 2000,650 2200,600 L2400,600 L2400,800 L-200,800 Z"
        />
      </svg>

      {/* Morphing blobs */}
      <div className="morph-blob blob-1" />
      <div className="morph-blob blob-2" />

      {/* Flowing wind lines */}
      <svg className="flow-lines" viewBox="0 0 1440 800" preserveAspectRatio="xMidYMid slice">
        {/* Top section lines */}
        <path
          className="flow-line line-1"
          d="M-100,80 Q200,40 500,80 T1000,60 T1500,90 T1800,70"
          fill="none"
          stroke="url(#wave-gradient-1)"
          strokeWidth="1.2"
        />
        <path
          className="flow-line line-2"
          d="M-100,140 Q300,100 600,140 T1100,120 T1600,150"
          fill="none"
          stroke="url(#wave-gradient-2)"
          strokeWidth="0.8"
        />
        <path
          className="flow-line line-3"
          d="M-100,200 Q250,160 550,200 T1050,180 T1550,210 T1800,190"
          fill="none"
          stroke="url(#wave-gradient-3)"
          strokeWidth="1"
        />

        {/* Middle section lines */}
        <path
          className="flow-line line-4"
          d="M-100,280 Q200,240 450,280 T900,260 T1350,290 T1700,270"
          fill="none"
          stroke="url(#wave-gradient-1)"
          strokeWidth="0.9"
        />
        <path
          className="flow-line line-5"
          d="M-100,340 Q350,300 650,340 T1150,320 T1650,350"
          fill="none"
          stroke="url(#wave-gradient-2)"
          strokeWidth="1.1"
        />
        <path
          className="flow-line line-6"
          d="M-100,400 Q280,360 580,400 T1080,380 T1580,410 T1800,390"
          fill="none"
          stroke="url(#wave-gradient-3)"
          strokeWidth="0.7"
        />

        {/* Lower section lines */}
        <path
          className="flow-line line-7"
          d="M-100,460 Q220,420 520,460 T1020,440 T1520,470 T1800,450"
          fill="none"
          stroke="url(#wave-gradient-1)"
          strokeWidth="1"
        />
        <path
          className="flow-line line-8"
          d="M-100,520 Q320,480 620,520 T1120,500 T1620,530"
          fill="none"
          stroke="url(#wave-gradient-2)"
          strokeWidth="0.8"
        />
      </svg>
    </div>
  );
}
