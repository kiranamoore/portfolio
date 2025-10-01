"use client";

import { useState, useEffect } from "react";

export default function AngelGundamHeadsetPage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = Array.from({ length: 9 }, (_, i) => `/gundam/${i + 2}.png`);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 2000); // change every 2 seconds
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <>
      <div className="h-32" />
      <div
        className="min-h-screen bg-black text-white py-12 flex justify-center items-center mt-16 md:mt-24 mb-12"
        style={{
          marginLeft: "auto",
          marginRight: "auto",
          marginBottom: "50px",
          maxWidth: "1400px",
          paddingTop: "60px",
        }}
      >
        <div
          className="w-full flex flex-col lg:flex-row gap-16 items-center justify-center"
          style={{ maxWidth: "1200px" }}
        >
          {/* Left column: Slideshow */}
          <div className="relative flex flex-col items-center justify-center flex-1 w-full gap-6 max-w-[520px]">
            <img
              src={images[currentIndex]}
              alt={`Slideshow image ${currentIndex + 2}`}
              className="rounded-lg w-full object-cover max-w-[500px]"
            />
            {/* Overlay image */}
            <img
              src="/gundam/gundam.png"
              alt="Gundam Overlay"
              className="absolute top-0 left-0 w-full h-full object-contain pointer-events-none"
            />
          </div>

          {/* Right column: Content */}
          <div className="flex flex-col items-center text-center space-y-6 flex-1">
            <div className="space-y-1">
              <p className="text-sm text-gray-300">Fall 2025</p>
              <h1 className="text-4xl md:text-6xl font-bold">
                Angel Gundam Headset
              </h1>
            </div>
            <p className="text-lg text-gray-200 mt-2">
              Project description placeholder. Replace with actual copy for the
              Angel Gundam Headset.
            </p>
            <div className="space-y-10 text-left max-w-2xl w-full">
              {/* Role & Objective */}
              <section>
                <div className="flex items-center gap-3 mb-2">
                  <span className="h-6 w-1 rounded bg-gradient-to-b from-pink-500 to-red-400" />
                  <h2 className="text-2xl font-bold text-pink-400 tracking-tight">
                    Role & Objective
                  </h2>
                </div>
                <ul className="space-y-2 pl-6 list-none">
                  <li className="flex items-start gap-2">
                    <span className="mt-1 text-pink-400">•</span>
                    <span>
                      Replace this section with details on your role and
                      objective in the project.
                    </span>
                  </li>
                </ul>
              </section>
              <div className="border-t border-gray-700 my-6" />

              {/* Actions Taken */}
              <section>
                <div className="flex items-center gap-3 mb-2">
                  <span className="h-6 w-1 rounded bg-gradient-to-b from-blue-400 to-cyan-400" />
                  <h2 className="text-2xl font-bold text-blue-300 tracking-tight">
                    Actions Taken
                  </h2>
                </div>
                <ul className="space-y-2 pl-6 list-none">
                  <li className="flex items-start gap-2">
                    <span className="mt-1 text-blue-300">•</span>
                    <span>Replace this section with actions taken.</span>
                  </li>
                </ul>
              </section>
              <div className="border-t border-gray-700 my-6" />

              {/* Results & Impact */}
              <section>
                <div className="flex items-center gap-3 mb-2">
                  <span className="h-6 w-1 rounded bg-gradient-to-b from-green-400 to-emerald-500" />
                  <h2 className="text-2xl font-bold text-green-300 tracking-tight">
                    Results & Impact
                  </h2>
                </div>
                <ul className="space-y-2 pl-6 list-none">
                  <li className="flex items-start gap-2">
                    <span className="mt-1 text-green-300">•</span>
                    <span>Replace this section with results and impact.</span>
                  </li>
                </ul>
              </section>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
  