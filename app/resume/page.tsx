"use client";

import InteractiveBackground from "@/components/core/InteractiveBackground";
import FeaturedWorks from "@/components/FeaturedWorks";
import { useLayoutEffect } from "react";

export default function Home() {
  // -----------------------------------------------------------------
  // 1. Scramble animation for the hero text (runs once per session)
  // -----------------------------------------------------------------
  useLayoutEffect(() => {
    if (sessionStorage.getItem("scrambled")) return;
    sessionStorage.setItem("scrambled", "true");

    const timer = setTimeout(() => {
      const animate = () => {
        const els = document.querySelectorAll(
          ".scramble-text:not([data-animated])"
        );
        els.forEach((el, i) => {
          const delay = i * 150;
          setTimeout(() => {
            if ((el as HTMLElement).dataset.animated === "true") return;
            (el as HTMLElement).dataset.animated = "true";

            el.classList.remove("animate-text-scramble");
            void (el as HTMLElement).offsetHeight; // reflow
            el.classList.add("animate-text-scramble");
          }, delay);
        });
      };
      requestAnimationFrame(() => requestAnimationFrame(animate));
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  const topTextLines = [
    "Hello, I'm a senior at the USC Iovine and Young Academy,",
    "An Extended Reality Designer,",
    "3D Artist,",
    "Experience Designer,",
    "and Visual Storyteller",
  ];

  return (
    <>
      {/* ======================= HERO ======================= */}
      <InteractiveBackground>
        <section className="min-h-screen flex flex-col justify-center items-center relative text-center">
          <div
            className="mix-blend-difference relative z-40 w-full"
            style={{ paddingLeft: "30px", paddingRight: "30px" }}
          >
            {/* LOGO */}
            <div className="flex justify-center mb-4">
              <img
                src="/k-moore-logo.png"
                alt="K Moore Logo"
                className="h-20 md:h-32 w-auto"
                style={{ maxWidth: "calc(100% - 60px)" }}
              />
            </div>

            {/* SCRAMBLE BIO */}
            <div
              className="text-xl md:text-2xl text-white font-bold leading-relaxed scramble-container max-w-4xl mx-auto"
              style={{ fontFamily: "var(--font-lekton)", lineHeight: "1.4" }}
            >
              {topTextLines.map((line, i) => (
                <span
                  key={i}
                  className="scramble-text block mb-1"
                  data-line={i}
                >
                  {line}
                </span>
              ))}
            </div>
          </div>
        </section>
      </InteractiveBackground>

      {/* ======================= FEATURED WORKS ======================= */}
      <FeaturedWorks />
    </>
  );
}