"use client";

import React from "react";

export default function HyperXUnityWebARPage() {
  return (
    <>
      <div className="h-32" />
      <div
        className="min-h-screen bg-black text-white py-12 flex justify-center items-center mt-16 md:mt-24 mb-12"
        style={{ marginLeft: "auto", marginRight: "auto", marginBottom: "50px", maxWidth: "1400px" }}
      >
        <div className="w-full flex flex-col lg:flex-row gap-16 items-center justify-center" style={{ maxWidth: "1200px" }}>
          {/* Left column: Video Demo */}
          <div className="flex flex-col items-center justify-center flex-1 w-full min-w-[320px] max-w-[700px]">
            <video
              src="/unity-ar.mp4"
              controls
              autoPlay
              loop
              muted
              className="w-full max-w-4xl aspect-[4/3] object-contain rounded-lg border border-gray-700 shadow-lg"
              style={{ minHeight: '400px' }}
            />
            <p className="text-xs text-gray-400 mt-2">JavaScript Web AR with marker-based tracking demonstration</p>
          </div>
          {/* Right column: Content */}
          <div className="flex flex-col items-center text-center space-y-6 flex-1 min-w-[320px] max-w-[520px]">
            <div className="space-y-1">
              <p className="text-sm text-gray-300">Summer 2025</p>
              <h1 className="text-4xl md:text-6xl font-bold">Marker-Based Augmented Reality Development</h1>
            </div>
            <p className="text-lg font-medium">
              Developed a Web AR solution using JavaScript for marker-based augmented reality, demonstrating computer vision integration and real-time 3D rendering for cross-platform deployment.
            </p>
            <div className="space-y-10 text-left max-w-2xl w-full">
              {/* Role & Objective */}
              <section>
                <div className="flex items-center gap-3 mb-2">
                  <span className="h-6 w-1 rounded bg-gradient-to-b from-pink-500 to-red-400" />
                  <h2 className="text-2xl font-bold text-pink-400 tracking-tight">Role & Objective</h2>
                </div>
                <ul className="space-y-2 pl-6 list-none">
                  <li className="flex items-start gap-2"><span className="mt-1 text-pink-400">•</span><span>Created a <span className="font-bold">marker-based AR system</span> using pure JavaScript and web technologies.</span></li>
                  <li className="flex items-start gap-2"><span className="mt-1 text-pink-400">•</span><span>Developed <span className="font-bold">real-time computer vision algorithms</span> for precise marker detection and 3D positioning in browsers.</span></li>
                  <li className="flex items-start gap-2"><span className="mt-1 text-pink-400">•</span><span>Created a <span className="font-bold">scalable AR framework</span> deployable across multiple devices without native apps or Unity dependencies.</span></li>
                </ul>
              </section>
              <div className="border-t border-gray-700 my-6" />
              {/* Actions Taken */}
              <section>
                <div className="flex items-center gap-3 mb-2">
                  <span className="h-6 w-1 rounded bg-gradient-to-b from-blue-400 to-cyan-400" />
                  <h2 className="text-2xl font-bold text-blue-300 tracking-tight">Actions Taken</h2>
                </div>
                <ul className="space-y-2 pl-6 list-none">
                  <li className="flex items-start gap-2"><span className="mt-1 text-blue-300">•</span><span>Implemented <span className="font-bold">marker detection algorithms</span> using JavaScript computer vision libraries for real-time tracking.</span></li>
                  <li className="flex items-start gap-2"><span className="mt-1 text-blue-300">•</span><span>Developed <span className="font-bold">JavaScript integration</span> with browser APIs for camera access and device orientation.</span></li>
                  <li className="flex items-start gap-2"><span className="mt-1 text-blue-300">•</span><span>Created <span className="font-bold">3D object positioning systems</span> with sub-pixel precision using WebGL and Three.js.</span></li>
                  <li className="flex items-start gap-2"><span className="mt-1 text-blue-300">•</span><span>Optimized <span className="font-bold">rendering performance</span> for mobile devices using efficient JavaScript shaders.</span></li>
                </ul>
              </section>
              <div className="border-t border-gray-700 my-6" />
              {/* Results & Impact */}
              <section>
                <div className="flex items-center gap-3 mb-2">
                  <span className="h-6 w-1 rounded bg-gradient-to-b from-green-400 to-emerald-500" />
                  <h2 className="text-2xl font-bold text-green-300 tracking-tight">Results & Impact</h2>
                </div>
                <ul className="space-y-2 pl-6 list-none">
                  <li className="flex items-start gap-2"><span className="mt-1 text-green-300">•</span><span><span className="font-bold">Delivered production-ready Web AR</span> that works smoothly and accurately across all devices.</span></li>
                  <li className="flex items-start gap-2"><span className="mt-1 text-green-300">•</span><span>Demonstrated <span className="font-bold">advanced computer vision</span> in web environments.</span></li>
                  <li className="flex items-start gap-2"><span className="mt-1 text-green-300">•</span><span>Established <span className="font-bold">reusable AR framework</span> for future HyperX products.</span></li>
                </ul>
              </section>
            </div>
          </div>
        </div>
      </div>
    </>
  );
} 