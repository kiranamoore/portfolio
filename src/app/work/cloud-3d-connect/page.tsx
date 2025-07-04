"use client";

import { motion } from "framer-motion";
import TextScramble from "@/components/core/TextScramble";
import Image from "next/image";

export default function Cloud3DConnectPage() {
  return (
    <>
      <div className="h-32" />
      <div
        className="min-h-screen bg-black text-white py-12 flex justify-center items-center mt-16 md:mt-24 mb-12"
        style={{ marginLeft: 'auto', marginRight: 'auto', marginBottom: '50px', maxWidth: '1400px' }}
      >
        <div className="w-full flex flex-col lg:flex-row gap-16 items-center justify-center" style={{maxWidth: '1200px'}}>
          {/* Left column: Image + stage info */}
          <div className="flex flex-col items-center justify-center flex-1 h-full">
            <img
              src="/18k tris.png"
              alt="Cloud 3D Connect 18k tris thumbnail"
              className="w-full max-w-md object-contain rounded-lg border border-gray-700 shadow-lg"
              style={{ minHeight: '320px' }}
            />
            <p className="text-sm text-gray-400 mt-4">
              current stage of development: <br />
              optimizing the original manufacturing model by reducing triangle count <br />
              current triangle count: <span className="font-mono">20,000 triangles</span>
            </p>
          </div>

          {/* Right column: Content */}
          <div className="flex flex-col items-center text-center space-y-6 flex-1">
            <div className="space-y-1">
              <p className="text-sm text-gray-300">May 2025 – August 2025</p>
              <h1 className="text-4xl md:text-6xl font-bold">Cloud 3D Connect</h1>
            </div>
            <p className="text-lg text-gray-200 mt-2">
              Developed an interactive 3D experience that showcases key product highlights and allows in-store customers to customize HyperX's Cloud 3 S headset in real time. The solution helps sway purchase decisions by visually demonstrating HyperX's advantages over competitors.
            </p>
            <div className="space-y-10 text-left max-w-2xl w-full">
              {/* Role & Objective */}
              <section>
                <div className="flex items-center gap-3 mb-2">
                  <span className="h-6 w-1 rounded bg-gradient-to-b from-pink-500 to-red-400" />
                  <h2 className="text-2xl font-bold text-pink-400 tracking-tight">Role & Objective</h2>
                </div>
                <ul className="space-y-2 pl-6 list-none">
                  <li className="flex items-start gap-2"><span className="mt-1 text-pink-400">•</span><span>Worked as the sole <span className="font-bold">Augmented Reality Developer</span> to create an <span className="font-bold">in-store and mobile-friendly customization tool</span> to drive HX3D accessory sales and in-store purchases.</span></li>
                  <li className="flex items-start gap-2"><span className="mt-1 text-pink-400">•</span><span>Highlighted unique product features to support customer decision-making at the point of sale.</span></li>
                  <li className="flex items-start gap-2"><span className="mt-1 text-pink-400">•</span><span><span className="font-bold">Bridged the gap between headset purchases and accessory personalization.</span></span></li>
                </ul>
              </section>
              <div className="border-t border-gray-700 my-6" />
              {/* Key Contributions */}
              <section>
                <div className="flex items-center gap-3 mb-2">
                  <span className="h-6 w-1 rounded bg-gradient-to-b from-blue-400 to-cyan-400" />
                  <h2 className="text-2xl font-bold text-blue-300 tracking-tight">Key Contributions</h2>
                </div>
                <ul className="space-y-2 pl-6 list-none">
                  <li className="flex items-start gap-2"><span className="mt-1 text-blue-300">•</span><span>Optimized 3D models <span className="font-bold">(Blender)</span> and textures <span className="font-bold">(Blender &amp; Substance Painter)</span> for mobile performance.</span></li>
                  <li className="flex items-start gap-2"><span className="mt-1 text-blue-300">•</span><span>Built the interactive experience in Unity with real-time rendering and AR integration.</span></li>
                  <li className="flex items-start gap-2"><span className="mt-1 text-blue-300">•</span><span><span className="font-bold">Developed feature callouts, animations, and clickable hotspots</span> to showcase benefits like comfort, sound quality, and HX3D compatibility.</span></li>
                  <li className="flex items-start gap-2"><span className="mt-1 text-blue-300">•</span><span><span className="font-bold">Delivered a production-ready solution for retail deployment.</span></span></li>
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
                  <li className="flex items-start gap-2"><span className="mt-1 text-green-300">•</span><span>Helped customers understand HyperX advantages over competitors directly in-store.</span></li>
                  <li className="flex items-start gap-2"><span className="mt-1 text-green-300">•</span><span>Increased headset engagement and HX3D accessory sales.</span></li>
                  <li className="flex items-start gap-2"><span className="mt-1 text-green-300">•</span><span>Provided a scalable, interactive retail tool that enhances the buying experience.</span></li>
                </ul>
              </section>
            </div>
          </div>
        </div>
      </div>
    </>
  );
} 