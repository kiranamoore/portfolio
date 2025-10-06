"use client";

import TextScramble from "@/components/core/TextScramble";

export default function InteractivePackagingProductFeaturesPage() {
  return (
    <>
      <div className="h-32" />
      <div
        className="min-h-screen bg-black text-white py-12 flex justify-center items-center mt-16 md:mt-24 mb-12"
        style={{ marginLeft: 'auto', marginRight: 'auto', marginBottom: '50px', maxWidth: '1400px' }}
      >
        <div className="w-full flex flex-col lg:flex-row gap-16 items-center justify-center" style={{maxWidth: '1200px'}}>
          {/* Left column: Content */}
          <div className="flex flex-col items-center text-center space-y-6 flex-1">
            <div className="space-y-1">
              <p className="text-sm text-gray-300">Fall 2024</p>
              <h1 className="text-4xl md:text-6xl font-bold">Interactive Packaging with Product Features</h1>
            </div>
            <p className="text-lg text-gray-200 mt-2">
              Developed an augmented reality experience for HyperX packaging that lets customers scan QR codes to explore interactive 3D models and animations of key product features, enhancing in-store engagement and buyer confidence.
            </p>
            <div className="space-y-10 text-left max-w-2xl w-full">
              {/* Role & Objective */}
              <section>
                <div className="flex items-center gap-3 mb-2">
                  <span className="h-6 w-1 rounded bg-gradient-to-b from-pink-500 to-red-400" />
                  <h2 className="text-2xl font-bold text-pink-400 tracking-tight">Role & Objective</h2>
                </div>
                <ul className="space-y-2 pl-6 list-none">
                  <li className="flex items-start gap-2"><span className="mt-1 text-pink-400">•</span><span>Served as <span className="font-semibold text-white">Lead AR Developer</span> to create an augmented reality experience for HyperX product packaging.</span></li>
                  <li className="flex items-start gap-2"><span className="mt-1 text-pink-400">•</span><span>Aimed to transform <b>product packaging into an interactive in-store exploration tool for engaging and educating customers</b>.</span></li>
                  <li className="flex items-start gap-2"><span className="mt-1 text-pink-400">•</span><span>Targeted enhancing the retail experience by letting shoppers scan QR codes to launch interactive 3D models.</span></li>
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
                  <li className="flex items-start gap-2"><span className="mt-1 text-blue-300">•</span><span>Developed the AR experience with real-time interaction using <span className="font-bold">Lens Studio</span>.</span></li>
                  <li className="flex items-start gap-2"><span className="mt-1 text-blue-300">•</span><span>Created stand-in 3D models for prototyping using <span className="font-bold">Blender</span>.</span></li>
                  <li className="flex items-start gap-2"><span className="mt-1 text-blue-300">•</span><span>Designed UI overlays and visual elements using <span className="font-bold">Adobe Photoshop</span>.</span></li>
                  <li className="flex items-start gap-2"><span className="mt-1 text-blue-300">•</span><span>Implemented top navigation highlighting three core product features.</span></li>
                  <li className="flex items-start gap-2"><span className="mt-1 text-blue-300">•</span><span>Created bottom panel <b>displaying detailed descriptions and triggering 3D animations upon selection.</b></span></li>
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
                  <li className="flex items-start gap-2"><span className="mt-1 text-green-300">•</span><span>Successfully <b>improves in-store product understanding and buyer confidence through interactive experiences.</b></span></li>
                  <li className="flex items-start gap-2"><span className="mt-1 text-green-300">•</span><span>Enables dynamic storytelling at point-of-sale without requiring sales staff intervention.</span></li>
                  <li className="flex items-start gap-2"><span className="mt-1 text-green-300">•</span><span>Extends physical packaging into a digital interactive medium for enhanced customer engagement.</span></li>
                  <li className="flex items-start gap-2"><span className="mt-1 text-green-300">•</span><span>Establishes groundwork for future integration of finalized models from Cloud3 project.</span></li>
                </ul>
              </section>
            </div>
          </div>
          {/* Right column: Video */}
          <div className="flex flex-col items-center justify-center flex-1 h-full">
            <video
              src="/packaging.mov"
              controls
              muted
              className="w-full max-w-md object-contain rounded-lg border border-gray-700 shadow-lg"
              style={{ minHeight: '320px' }}
            >
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </>
  );
} 