"use client";

import { useEffect, useRef, useState } from "react";

export default function HeroBackground() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Dots positioned to overlap with the drawing near pen/hand area (bottom-left of drawing)
  const [dots] = useState([
    { id: 0, x: 20, y: 88 },
    { id: 1, x: 30, y: 93 },
    { id: 2, x: 38, y: 86 },
    { id: 3, x: 52, y: 88 },
    { id: 4, x: 68, y: 85 },
    { id: 5, x: 80, y: 90 },
    { id: 6, x: 62, y: 95 },
    { id: 7, x: 75, y: 97 }
  ]);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStartDot, setDragStartDot] = useState<number | null>(null);
  const [connections, setConnections] = useState<Array<{from: number, to: number}>>([]);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

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

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      targetX = (e.clientX - rect.left) / rect.width;
      targetY = (e.clientY - rect.top) / rect.height;
      setCursorPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
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
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationId);
    };
  }, [isDragging, dragStartDot, connections, dots, cursorPos]);

  const handleDotMouseDown = (dotId: number) => {
    setIsDragging(true);
    setDragStartDot(dotId);
  };

  return (
    <div ref={containerRef} className="hero-dots-overlay">
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

    </div>
  );
}
