"use client";
import { useEffect, useRef } from "react";
import Lenis from "lenis";

function SmoothScrolling({ children }: { children: React.ReactNode }) {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    lenisRef.current = new Lenis({
      lerp: 0.1, // Adjust this value for scroll speed
      smoothWheel: true,
    });

    const raf = (time: number) => {
      lenisRef.current?.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);

    return () => {
      lenisRef.current?.destroy();
    };
  }, []);

  return <>{children}</>;
}

export default SmoothScrolling;
