"use client";

import { useEffect, useRef, useState } from "react";

export default function HeroCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [showCursor, setShowCursor] = useState(false);

  useEffect(() => {
    const heroSection = document.querySelector(".hero-gradient");
    if (!heroSection) return;

    const handleMouseEnter = () => setShowCursor(true);
    const handleMouseLeave = () => setShowCursor(false);

    const handleMouseMove = (e: MouseEvent) => {
      if (cursorRef.current) {
        cursorRef.current.style.left = `${e.clientX}px`;
        cursorRef.current.style.top = `${e.clientY}px`;
      }
    };

    heroSection.addEventListener("mouseenter", handleMouseEnter);
    heroSection.addEventListener("mouseleave", handleMouseLeave);
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      heroSection.removeEventListener("mouseenter", handleMouseEnter);
      heroSection.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="custom-cursor"
      style={{ opacity: showCursor ? 1 : 0 }}
    >
      <svg width="20" height="20" viewBox="0 0 24 24">
        <path
          d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"
          fill="#667EEA"
        />
      </svg>
      <div className="cursor-prompt">Connect the dots</div>
    </div>
  );
}
