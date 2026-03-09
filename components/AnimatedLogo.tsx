"use client";

import { useState, useRef, useEffect, useCallback } from "react";

// Dot positions forming a "K" shape (viewBox 100x120)
const dots = [
  { id: "tl", cx: 18, cy: 15 },   // top-left
  { id: "tr", cx: 72, cy: 15 },   // top-right
  { id: "ml", cx: 18, cy: 55 },   // middle-left
  { id: "bl", cx: 18, cy: 95 },   // bottom-left
  { id: "br", cx: 72, cy: 95 },   // bottom-right
];

// Lines that form the "K" — drawn in this order
const lines = [
  { from: "ml", to: "br" },  // line 1: middle-left → bottom-right
  { from: "ml", to: "tr" },  // line 2: middle-left → top-right
  { from: "tl", to: "ml" },  // line 3: top-left → middle-left
  { from: "ml", to: "bl" },  // line 4: middle-left → bottom-left
];

// Pencil path: center → br → ml → tr → (back) → tl → ml → bl → center
const pencilStops = [
  { x: 50, y: 45, rot: -45 },   // 0: center start
  { x: 72, y: 95, rot: -45 },   // 1: at bottom-right dot
  { x: 18, y: 55, rot: -45 },   // 2: at middle-left (drew line 1)
  { x: 72, y: 15, rot: -45 },   // 3: at top-right (drew line 2)
  { x: 18, y: 15, rot: -80 },   // 4: at top-left (drew line 3)
  { x: 18, y: 55, rot: -60 },   // 5: at middle-left
  { x: 18, y: 95, rot: -80 },   // 6: at bottom-left (drew line 4)
  { x: 50, y: 45, rot: -45 },   // 7: back to center
];

function getDot(id: string) {
  return dots.find((d) => d.id === id)!;
}

function lineLength(fromId: string, toId: string) {
  const f = getDot(fromId);
  const t = getDot(toId);
  return Math.sqrt((t.cx - f.cx) ** 2 + (t.cy - f.cy) ** 2);
}

export default function AnimatedLogo() {
  const [isHovered, setIsHovered] = useState(false);
  const [animProgress, setAnimProgress] = useState(0); // 0 to 1
  const animRef = useRef<number | null>(null);
  const startTimeRef = useRef<number>(0);
  const DURATION = 1800; // ms total animation

  const animate = useCallback((timestamp: number) => {
    if (!startTimeRef.current) startTimeRef.current = timestamp;
    const elapsed = timestamp - startTimeRef.current;
    const progress = Math.min(elapsed / DURATION, 1);
    setAnimProgress(progress);
    if (progress < 1) {
      animRef.current = requestAnimationFrame(animate);
    }
  }, []);

  const reverseAnimate = useCallback((timestamp: number) => {
    if (!startTimeRef.current) startTimeRef.current = timestamp;
    const elapsed = timestamp - startTimeRef.current;
    const progress = Math.max(1 - elapsed / (DURATION * 0.6), 0);
    setAnimProgress(progress);
    if (progress > 0) {
      animRef.current = requestAnimationFrame(reverseAnimate);
    }
  }, []);

  useEffect(() => {
    if (animRef.current) cancelAnimationFrame(animRef.current);
    startTimeRef.current = 0;

    if (isHovered) {
      animRef.current = requestAnimationFrame(animate);
    } else if (animProgress > 0) {
      animRef.current = requestAnimationFrame(reverseAnimate);
    }

    return () => {
      if (animRef.current) cancelAnimationFrame(animRef.current);
    };
  }, [isHovered, animate, reverseAnimate]);

  // Map progress (0-1) to animation phases
  // Pencil has 7 segments (stops 0→1, 1→2, ..., 6→7)
  const totalSegments = pencilStops.length - 1;
  const currentSegFloat = animProgress * totalSegments;
  const currentSeg = Math.floor(currentSegFloat);
  const segProgress = currentSegFloat - currentSeg;

  // Interpolate pencil position
  const fromStop = pencilStops[Math.min(currentSeg, totalSegments - 1)];
  const toStop = pencilStops[Math.min(currentSeg + 1, totalSegments)];
  const ease = (t: number) => t < 0.5 ? 2 * t * t : 1 - (-2 * t + 2) ** 2 / 2;
  const eased = ease(segProgress);
  const pencilX = fromStop.x + (toStop.x - fromStop.x) * eased;
  const pencilY = fromStop.y + (toStop.y - fromStop.y) * eased;
  const pencilRot = fromStop.rot + (toStop.rot - fromStop.rot) * eased;

  // Lines appear after pencil reaches the destination
  // Line 0 appears after segment 2 (pencil arrives at ml from br)
  // Line 1 appears after segment 3 (pencil arrives at tr from ml)
  // Line 2 appears after segment 4 (pencil arrives at tl... actually after segment 5 when it reaches ml from tl)
  // Line 3 appears after segment 6 (pencil arrives at bl from ml)
  const lineAppearAfterSeg = [2, 3, 5, 6];

  const getLineDrawProgress = (lineIndex: number) => {
    const appearSeg = lineAppearAfterSeg[lineIndex];
    // Line starts drawing one segment before it's "complete"
    const drawStartSeg = appearSeg - 1;
    if (currentSegFloat <= drawStartSeg) return 0;
    if (currentSegFloat >= appearSeg) return 1;
    return ease(currentSegFloat - drawStartSeg);
  };

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="cursor-pointer"
      style={{ width: 40, height: 48 }}
    >
      <svg viewBox="0 0 100 120" width="40" height="48" fill="none">
        {/* Connection lines */}
        {lines.map((line, i) => {
          const from = getDot(line.from);
          const to = getDot(line.to);
          const len = lineLength(line.from, line.to);
          const progress = getLineDrawProgress(i);
          return (
            <line
              key={i}
              x1={from.cx}
              y1={from.cy}
              x2={to.cx}
              y2={to.cy}
              stroke="rgba(118, 75, 162, 0.5)"
              strokeWidth="4"
              strokeLinecap="round"
              strokeDasharray={len}
              strokeDashoffset={len * (1 - progress)}
            />
          );
        })}

        {/* Dots */}
        {dots.map((dot) => (
          <circle
            key={dot.id}
            cx={dot.cx}
            cy={dot.cy}
            r="10"
            fill="rgba(102, 126, 234, 0.8)"
          />
        ))}

        {/* Pencil icon */}
        {animProgress > 0 && (
          <g
            transform={`translate(${pencilX}, ${pencilY}) rotate(${pencilRot}) scale(0.7)`}
            opacity={Math.min(animProgress * 5, 1)}
          >
            <path
              d="M-8 8L8-8M8-8L5-8M8-8L8-5"
              stroke="rgba(102, 126, 234, 0.9)"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
            />
            <rect
              x="-10"
              y="-3"
              width="16"
              height="6"
              rx="1"
              fill="rgba(102, 126, 234, 0.8)"
              transform="rotate(-45 -2 0)"
            />
            <polygon
              points="-12,5 -15,10 -9,8"
              fill="rgba(102, 126, 234, 0.8)"
              transform="rotate(-45 -2 0)"
            />
            <rect
              x="5"
              y="-3"
              width="3"
              height="6"
              rx="0.5"
              fill="white"
              transform="rotate(-45 -2 0)"
            />
          </g>
        )}
      </svg>
    </div>
  );
}
