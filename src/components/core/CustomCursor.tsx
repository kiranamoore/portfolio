"use client";

import { useEffect, useState } from "react";
import { useCursor } from "@/context/CursorContext";

export default function CustomCursor() {
  const { variant } = useCursor();
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  const size = variant === "hover" ? 24 : 12;
  const opacity = 0.8;

  return (
    <div
      style={{
        position: "fixed",
        left: position.x - size / 2,
        top: position.y - size / 2,
        width: size,
        height: size,
        borderRadius: "9999px",
        pointerEvents: "none",
        zIndex: 9999,
        backgroundColor: variant === "hover" ? "rgba(255,0,0,0.8)" : "rgba(255,255,255,0.6)",
        mixBlendMode: "difference",
        transition: "width 120ms ease, height 120ms ease, background-color 120ms ease",
        opacity,
      }}
      aria-hidden
    />
  );
}