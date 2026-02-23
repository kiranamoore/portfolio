"use client";

import { useEffect, useRef, useState } from "react";

export default function HeroBackground() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const cursorRef = useRef<HTMLDivElement>(null);

  const [dots] = useState([
    { id: 0, x: 42, y: 22 },
    { id: 1, x: 58, y: 20 },
    { id: 2, x: 50, y: 28 },
    { id: 3, x: 44, y: 32 },
    { id: 4, x: 56, y: 30 }
  ]);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStartDot, setDragStartDot] = useState<number | null>(null);
  const [connections, setConnections] = useState<Array<{from: number, to: number}>>([]);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [showCursor, setShowCursor] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas) return;

    let mouseX = 0.5;
    let mouseY = 0.5;
    let targetX = 0.5;
    let targetY = 0.5;

    // Set canvas dimensions
    const resizeCanvas = () => {
      const rect = container.getBoundingClientRect();
      canvas.width = rect.width;
      canvas.height = rect.height;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const getHoveredDot = (e: MouseEvent): number | null => {
      const rect = container.getBoundingClientRect();
      const mouseX = ((e.clientX - rect.left) / rect.width) * 100;
      const mouseY = ((e.clientY - rect.top) / rect.height) * 100;

      for (let i = 0; i < dots.length; i++) {
        const dx = mouseX - dots[i].x;
        const dy = mouseY - dots[i].y;
        if (Math.sqrt(dx*dx + dy*dy) < 5) return i;
      }
      return null;
    };

    const handleMouseEnter = () => {
      setShowCursor(true);
    };

    const handleMouseLeave = () => {
      setShowCursor(false);
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      targetX = (e.clientX - rect.left) / rect.width;
      targetY = (e.clientY - rect.top) / rect.height;
      setCursorPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });

      if (cursorRef.current) {
        cursorRef.current.style.left = `${e.clientX}px`;
        cursorRef.current.style.top = `${e.clientY}px`;
      }
    };

    const handleMouseUp = (e: MouseEvent) => {
      if (!isDragging || dragStartDot === null) return;

      const targetDot = getHoveredDot(e);
      if (targetDot !== null && targetDot !== dragStartDot) {
        const exists = connections.some(c =>
          (c.from === dragStartDot && c.to === targetDot) ||
          (c.from === targetDot && c.to === dragStartDot)
        );
        if (!exists) {
          setConnections([...connections, { from: dragStartDot, to: targetDot }]);
        }
      }
      setIsDragging(false);
      setDragStartDot(null);
    };

    const handleScroll = () => {
      container.style.opacity = String(Math.max(0, 1 - window.scrollY / 600));
    };

    let animationId: number;
    const animate = () => {
      mouseX += (targetX - mouseX) * 0.1;
      mouseY += (targetY - mouseY) * 0.1;

      // Draw on canvas
      const ctx = canvas.getContext('2d');
      if (ctx) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Draw permanent connections
        connections.forEach(conn => {
          const fromDot = dots[conn.from];
          const toDot = dots[conn.to];
          const fromX = (fromDot.x / 100) * canvas.width;
          const fromY = (fromDot.y / 100) * canvas.height;
          const toX = (toDot.x / 100) * canvas.width;
          const toY = (toDot.y / 100) * canvas.height;

          const gradient = ctx.createLinearGradient(fromX, fromY, toX, toY);
          gradient.addColorStop(0, 'rgba(118, 75, 162, 0.6)');
          gradient.addColorStop(1, 'rgba(102, 126, 234, 0.6)');

          ctx.strokeStyle = gradient;
          ctx.lineWidth = 2;
          ctx.lineCap = 'round';
          ctx.beginPath();
          ctx.moveTo(fromX, fromY);
          ctx.lineTo(toX, toY);
          ctx.stroke();
        });

        // Draw active drag line
        if (isDragging && dragStartDot !== null) {
          const startDot = dots[dragStartDot];
          const startX = (startDot.x / 100) * canvas.width;
          const startY = (startDot.y / 100) * canvas.height;

          ctx.strokeStyle = 'rgba(118, 75, 162, 0.4)';
          ctx.lineWidth = 2;
          ctx.lineCap = 'round';
          ctx.beginPath();
          ctx.moveTo(startX, startY);
          ctx.lineTo(cursorPos.x, cursorPos.y);
          ctx.stroke();
        }
      }

      animationId = requestAnimationFrame(animate);
    };

    animate();
    container.addEventListener("mouseenter", handleMouseEnter);
    container.addEventListener("mouseleave", handleMouseLeave);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      container.removeEventListener("mouseenter", handleMouseEnter);
      container.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationId);
    };
  }, [isDragging, dragStartDot, connections, dots, cursorPos]);

  const handleDotMouseDown = (dotId: number) => {
    setIsDragging(true);
    setDragStartDot(dotId);
  };

  return (
    <div ref={containerRef} className="hero-bg-container">
      {/* Canvas for connection lines */}
      <canvas ref={canvasRef} className="dots-canvas" />

      {/* Interactive dots */}
      {dots.map(dot => (
        <div
          key={dot.id}
          className={`connect-dot ${isDragging && dragStartDot === dot.id ? 'active' : ''}`}
          style={{ left: `${dot.x}%`, top: `${dot.y}%` }}
          onMouseDown={() => handleDotMouseDown(dot.id)}
        />
      ))}

      {/* Morphing blobs */}
      <div className="morph-blob blob-1" />
      <div className="morph-blob blob-2" />

      {/* Custom cursor */}
      <div ref={cursorRef} className="custom-cursor">
        <svg width="20" height="20" viewBox="0 0 24 24">
          <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z" fill="#667EEA"/>
        </svg>
        {showCursor && <div className="cursor-prompt">Connect the dots</div>}
      </div>
    </div>
  );
}
