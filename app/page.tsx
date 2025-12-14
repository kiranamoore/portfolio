"use client";

import InteractiveBackground from "@/components/core/InteractiveBackground";
import FeaturedWorks from "@/components/FeaturedWorks";
import { useLayoutEffect } from "react";

export default function Home() {
  useLayoutEffect(() => {
    if (sessionStorage.getItem("scrambled")) return;
    sessionStorage.setItem("scrambled", "true");

    const timer = setTimeout(() => {
      const els = document.querySelectorAll(".scramble-text");
      els.forEach((el, i) => {
        setTimeout(() => {
          el.classList.add("animate-text-scramble");
        }, i * 150);
      });
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const bioLines = [
    "Hello, I'm a senior at the USC Iovine and Young Academy,",
    "An Extended Reality Designer,",
    "3D Artist,",
    "Experience Designer,",
    "and Visual Storyteller",
  ];

  return (
    <>
      <InteractiveBackground>
        <section className="min-h-screen flex flex-col justify-center items-center relative text-center">
          <div className="mix-blend-difference relative z-40 w-full px-8">
            {/* LOGO */}
            <div className="flex justify-center mb-6">
              <img
                src="/k-moore-logo.png"
                alt="Kirana Moore"
                className="h-24 md:h-32 w-auto"
              />
            </div>

            {/* SCRAMBLE BIO */}
            <div
              className="text-xl md:text-2xl text-white font-bold leading-relaxed max-w-4xl mx-auto"
              style={{ fontFamily: "var(--font-lekton)", lineHeight: "1.5" }}
            >
              {bioLines.map((line, i) => (
                <div
                  key={i}
                  className="scramble-text block mb-1 opacity-0"
                  style={{ animationDelay: `${i * 0.15}s` }}
                >
                  {line}
                </div>
              ))}
            </div>
          </div>

          {/* TIME/LOCATION */}
          <div className="absolute bottom-8 right-8 text-white mix-blend-difference text-sm z-40">
            <p style={{ fontFamily: "var(--font-lekton)" }}>
              San Francisco / Los Angeles, CA &gt; 03:29PM
            </p>
          </div>
        </section>
      </InteractiveBackground>

      <FeaturedWorks />
    </>
  );
}