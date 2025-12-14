"use client";

import dynamic from "next/dynamic";
import React from "react";

const ModelViewer = dynamic(
  () => import("@/components/ModelViewer3D"),
  { ssr: false }
);

export default function HyperXCloud33DCustomizerPage() {
  return (
    <>
      <div className="h-32" />
      <div
        className="min-h-screen bg-black text-white py-12 mt-16 md:mt-24 mb-12"
        style={{ marginLeft: "auto", marginRight: "auto", marginBottom: "50px", maxWidth: "1400px" }}
      >
        {/* Main Content Section */}
        <div className="w-full flex flex-col lg:flex-row gap-16 items-center justify-center mb-16" style={{ maxWidth: "1200px", margin: "0 auto" }}>
          {/* Left column: 3D Model Viewer */}
          <div className="flex flex-col items-center justify-center flex-1 w-full min-w-[320px] max-w-[700px]">
            <ModelViewer
              src="/Cloud-3-S-7-17.glb"
              alt="HyperX Cloud 3 3D Customizer"
              ar
              autoRotate
              cameraControls
              style={{ width: "100%", height: "500px", background: "#222", borderRadius: "1rem" }}
            />
            <p className="text-xs text-gray-400 mt-2">Interact with the 3D model above. Pinch/drag/zoom on mobile and desktop.</p>
            <button
              onClick={() => window.open('/work/hyperx-3d-optimization/viewer', '_blank')}
              className="mt-4 px-6 py-2 bg-white text-black font-medium rounded-lg hover:bg-gray-100 transition-colors duration-200"
            >
              Open Full-Screen Viewer
            </button>
          </div>
          {/* Right column: Content */}
          <div className="flex flex-col items-center text-center space-y-6 flex-1 min-w-[320px] max-w-[520px]">
            <div className="space-y-1">
              <p className="text-sm text-gray-300">Spring 2025</p>
              <h1 className="text-4xl md:text-6xl font-bold text-white">HyperX Cloud 3 3D Customizer</h1>
            </div>
            <p className="text-lg text-gray-200 mt-2">
              Developed an interactive 3D customization experience for HyperX Cloud 3 headsets, enabling customers to personalize their headset with different colors and accessories in real-time through an immersive AR interface.
            </p>
            <div className="space-y-10 text-left max-w-2xl w-full">
              {/* Role & Objective */}
              <section>
                <div className="flex items-center gap-3 mb-2">
                  <span className="h-6 w-1 rounded bg-gradient-to-b from-pink-500 to-red-400" />
                  <h2 className="text-2xl font-bold text-pink-400 tracking-tight">Role & Objective</h2>
                </div>
                <ul className="space-y-2 pl-6 list-none">
                  <li className="flex items-start gap-2"><span className="mt-1 text-pink-400">•</span><span className="text-white">Served as <span className="font-semibold">Lead AR Developer</span> to create an interactive 3D customization tool for HyperX Cloud 3 headsets.</span></li>
                  <li className="flex items-start gap-2"><span className="mt-1 text-pink-400">•</span><span className="text-white">Aimed to enable customers to personalize headset colors and accessories through an immersive AR experience.</span></li>
                  <li className="flex items-start gap-2"><span className="mt-1 text-pink-400">•</span><span className="text-white">Targeted enhancing customer engagement and purchase confidence by allowing real-time product customization.</span></li>
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
                  <li className="flex items-start gap-2"><span className="mt-1 text-blue-300">•</span><span className="text-white">Optimized 3D models using <span className="font-bold">Blender</span> and created textures with <span className="font-bold">Substance Painter</span> for mobile AR performance.</span></li>
                  <li className="flex items-start gap-2"><span className="mt-1 text-blue-300">•</span><span className="text-white">Developed the interactive customization interface in <span className="font-bold">Unity</span> with real-time rendering and AR integration.</span></li>
                  <li className="flex items-start gap-2"><span className="mt-1 text-blue-300">•</span><span className="text-white">Implemented <span className="font-bold">real-time color swapping and accessory selection</span> features for personalized headset configurations.</span></li>
                  <li className="flex items-start gap-2"><span className="mt-1 text-blue-300">•</span><span className="text-white">Created intuitive UI controls allowing users to explore different customization options seamlessly.</span></li>
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
                  <li className="flex items-start gap-2"><span className="mt-1 text-green-300">•</span><span className="text-white">Delivered a functional 3D customization tool that enhances customer engagement with HyperX products.</span></li>
                  <li className="flex items-start gap-2"><span className="mt-1 text-green-300">•</span><span className="text-white">Enabled customers to visualize personalized headset configurations before purchase, improving purchase confidence.</span></li>
                  <li className="flex items-start gap-2"><span className="mt-1 text-green-300">•</span><span className="text-white">Created a scalable AR solution that can be extended to other HyperX products and accessories.</span></li>
                </ul>
              </section>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

