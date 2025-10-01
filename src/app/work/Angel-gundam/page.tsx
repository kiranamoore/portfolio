"use client";

import React, { useState, useEffect } from "react";

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
      <div className="min-h-screen bg-black text-white py-12 mt-16 md:mt-24 mb-12">
        <div className="max-w-[1200px] mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left column: slideshow stacked above image */}
            <div>
              <div className="flex flex-col items-center">
                <img
                  src={images[currentIndex]}
                  alt={`Slideshow image ${currentIndex + 2}`}
                  className="rounded-lg w-full max-w-[520px] object-cover"
                />
              </div>
              <div className="py-6" />
              <div className="flex justify-center">
                <img
                  src="/gundam/gundam.png"
                  alt="Gundam"
                  className="w-full max-w-[520px] object-contain"
                />
              </div>
            </div>
            {/* Right column: Content */}
            <div className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-6">
            <div className="space-y-1">
              <p className="text-sm text-gray-300">Fall 2025</p>
              <h1 className="text-4xl md:text-6xl font-bold">Angel Gundam Headset</h1>
            </div>
            <p className="text-lg text-gray-200 mt-2">
              Project description placeholder. Replace with actual copy for the Angel Gundam Headset.
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
      </div>
    </>
  );
}
  