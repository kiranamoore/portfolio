"use client";

import { motion } from "framer-motion";
import TextScramble from "@/components/core/TextScramble";
import Image from "next/image";

export default function Cloud3TryOnExperiencePage() {
  return (
    <>
      <div className="h-32" />
      <div
        className="min-h-screen bg-black text-white py-12 flex justify-center items-center mt-16 md:mt-24 mb-12"
        style={{ marginLeft: 'auto', marginRight: 'auto', marginBottom: '50px', maxWidth: '1400px' }}
      >
        <div className="w-full flex flex-col lg:flex-row gap-16 items-center justify-center" style={{maxWidth: '1200px'}}>
          {/* Left column: Video - order-2 on mobile, order-1 on desktop */}
          <div className="flex flex-col items-center justify-center flex-1 h-full order-2 lg:order-1">
            <video
              src="/Headphone color swap.mov"
              controls
              autoPlay
              loop
              muted
              className="w-full max-w-md object-contain rounded-lg border border-gray-700 shadow-lg"
              style={{ minHeight: '320px' }}
            />
          </div>

          {/* Right column: Content - order-1 on mobile, order-2 on desktop */}
          <div className="flex flex-col items-center text-center space-y-6 flex-1 order-1 lg:order-2">
            <div className="space-y-1">
              <p className="text-sm text-gray-300">Summer 2024</p>
              <h1 className="text-4xl md:text-6xl font-bold text-white">Cloud 3 Try-On Experience</h1>
            </div>
            <p className="text-lg text-gray-200 mt-2">
              Created an AR Try-On experience that lets customers virtually wear HyperX Cloud 3 headsets in real time, featuring accurate 3D models, seamless face tracking, and interactive toggles to explore different styles and improve purchase confidence.
            </p>
            <div className="space-y-10 text-left max-w-2xl w-full">
              {/* Role & Objective */}
              <section>
                <div className="flex items-center gap-3 mb-2">
                  <span className="h-6 w-1 rounded bg-gradient-to-b from-pink-500 to-red-400" />
                  <h2 className="text-2xl font-bold text-pink-400 tracking-tight">Role & Objective</h2>
                </div>
                <ul className="space-y-2 pl-6 list-none">
                  <li className="flex items-start gap-2"><span className="mt-1 text-pink-400">•</span><span className="text-white">Served as <span className="font-semibold">Lead AR Developer</span> to create an augmented reality Try-On tool for HyperX customers.</span></li>
                  <li className="flex items-start gap-2"><span className="mt-1 text-pink-400">•</span><span className="text-white">Aimed to enable users to virtually try on HyperX headsets—specifically the Cloud 3 series—through AR technology.</span></li>
                  <li className="flex items-start gap-2"><span className="mt-1 text-pink-400">•</span><span className="text-white">Targeted enhancing customer confidence in fit, style, and purchase decisions while reducing product returns.</span></li>
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
                  <li className="flex items-start gap-2"><span className="mt-1 text-blue-300">•</span><span className="text-white">Built the interactive AR experience using <span className="font-bold">Meta Spark Studio</span> for seamless mobile functionality.</span></li>
                  <li className="flex items-start gap-2"><span className="mt-1 text-blue-300">•</span><span className="text-white">Modeled 3D assets using <span className="font-bold">Rhinoceros 3D & Blender</span> and created textures with <span className="font-bold">Adobe Substance</span>.</span></li>
                  <li className="flex items-start gap-2"><span className="mt-1 text-blue-300">•</span><span className="text-white">Designed a single toggle button interface allowing users to switch between different Cloud 3 headset versions.</span></li>
                  <li className="flex items-start gap-2"><span className="mt-1 text-blue-300">•</span><span className="text-white">Implemented head-binded face tracking for accurate and intuitive headset visualization.</span></li>
                  <li className="flex items-start gap-2"><span className="mt-1 text-blue-300">•</span><span className="text-white">Optimized AR performance across diverse mobile devices by refining 3D assets and streamlining interactions.</span></li>
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
                  <li className="flex items-start gap-2"><span className="mt-1 text-green-300">•</span><span className="text-white">Delivered a fully functional prototype that enables personalized, immersive product try-ons.</span></li>
                  <li className="flex items-start gap-2"><span className="mt-1 text-green-300">•</span><span className="text-white">Successfully demonstrated the viability of scalable, user-centric AR shopping tools for e-commerce.</span></li>
                  <li className="flex items-start gap-2"><span className="mt-1 text-green-300">•</span><span className="text-white">Potential to reduce product returns by helping customers assess fit and style before purchasing.</span></li>
                  <li className="flex items-start gap-2"><span className="mt-1 text-green-300">•</span><span className="text-white">Established a foundation for future customer-facing deployment with production-ready assets.</span></li>
                </ul>
              </section>
            </div>
          </div>
        </div>
      </div>
    </>
  );
} 