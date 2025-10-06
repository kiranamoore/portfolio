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
      <div
        className="min-h-screen bg-black text-white py-12 flex justify-center items-center mt-16 md:mt-24 mb-12"
        style={{ marginLeft: 'auto', marginRight: 'auto', marginBottom: '50px', maxWidth: '1600px' }}
      >
        <div className="w-full flex flex-col lg:flex-row gap-12 items-center justify-center" style={{maxWidth: '1400px'}}>
          {/* Left column: slideshow and image */}
          <div className="flex flex-col items-center justify-center flex-1 h-full" style={{ maxWidth: '80%' }}>
            <div className="flex flex-col items-center space-y-6" style={{ width: '75%', maxWidth: '700px' }}>
              <img
                src={images[currentIndex]}
                alt={`Slideshow image ${currentIndex + 2}`}
                className="w-full object-contain rounded-lg border border-gray-700 shadow-lg"
              />
              <img
                src="/gundam/gundam.png"
                alt="Gundam"
                className="w-full object-contain rounded-lg border border-gray-700 shadow-lg"
              />
            </div>
          </div>
          {/* Right column: Content */}
          <div className="flex flex-col items-center text-center space-y-6 flex-1 min-w-[350px]">
            <div className="space-y-1">
              <p className="text-sm text-gray-300">Fall 2025</p>
              <h1 className="text-4xl md:text-6xl font-bold">Angel Gundam Headset</h1>
            </div>
            <p className="text-lg text-gray-200 mt-2">
              An innovative iteration on my first Gundam headset accessories piece, featuring an elegant chain-based attachment system and articulated wing components that provide enhanced customization and movement.
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
                      Served as <span className="font-semibold text-white">Lead Designer and Creator</span> to develop an improved iteration of my first Gundam headset accessories piece.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 text-pink-400">•</span>
                    <span>
                      Aimed to solve the <span className="font-bold">attachment and customization challenges</span> from the original design while adding enhanced articulation and movement.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 text-pink-400">•</span>
                    <span>
                      Targeted creating a more elegant and functional attachment system that eliminates the tedious velcro and wire wrapping method.
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
                    <span>
                      Replaced the original velcro and wire attachment system with an <span className="font-bold">elegant chain and lobster claw clasp system</span> that strings through headset gaps.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 text-blue-300">•</span>
                    <span>
                      Added <span className="font-bold">articulation and movement throughout the headset</span> by incorporating hinges throughout the wing components.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 text-blue-300">•</span>
                    <span>
                      Ordered a Gundam kit and followed instructions to create the wing structures, then <span className="font-bold">customized and superglued parts together</span> for optimal headset fit.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 text-blue-300">•</span>
                    <span>
                      Designed the chain system to provide <span className="font-bold">additional attachment points for further customization</span> beyond the main wing accessories.
                    </span>
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
                    <span>
                      Successfully created an <span className="font-bold">elegant and functional attachment system</span> that eliminates the mess and damage caused by velcro on the headset.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 text-green-300">•</span>
                    <span>
                      The chain-based system provides <span className="font-bold">versatile customization options</span> with additional hanging points for future accessories.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 text-green-300">•</span>
                    <span>
                      Achieved <span className="font-bold">enhanced articulation and movement</span> through strategic hinge placement, making the wings more dynamic and interactive.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 text-green-300">•</span>
                    <span>
                      Demonstrated iterative design thinking by identifying problems from the original piece and implementing creative solutions that improve both functionality and aesthetics.
                    </span>
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
  