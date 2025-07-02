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
            <div className="space-y-10 text-left max-w-2xl w-full">
              {/* Role & Objective */}
              <section>
                <div className="flex items-center gap-3 mb-2">
                  <span className="h-6 w-1 rounded bg-gradient-to-b from-pink-500 to-red-400" />
                  <h2 className="text-2xl font-bold text-pink-400 tracking-tight">Role & Objective</h2>
                </div>
                <ul className="space-y-2 pl-6 list-none">
                  <li className="flex items-start gap-2"><span className="mt-1 text-pink-400">•</span><span>Served as <span className="font-semibold text-white">Lead 3D Developer</span> to develop an interactive 3D customization experience for HyperX's Cloud 3 S headset.</span></li>
                  <li className="flex items-start gap-2"><span className="mt-1 text-pink-400">•</span><span>Aimed to merge in-store interaction with online accessory personalization for seamless customer experience.</span></li>
                  <li className="flex items-start gap-2"><span className="mt-1 text-pink-400">•</span><span>Targeted solving the disconnect between headset purchases and HX3D accessory sales by enabling pre-purchase customization.</span></li>
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
                  <li className="flex items-start gap-2"><span className="mt-1 text-blue-300">•</span><span>Reduced triangle count for optimized models using <span className="font-bold">Blender</span> for mobile performance.</span></li>
                  <li className="flex items-start gap-2"><span className="mt-1 text-blue-300">•</span><span>Applied performant textures using <span className="font-bold">Substance Painter</span> for high-quality visual output.</span></li>
                  <li className="flex items-start gap-2"><span className="mt-1 text-blue-300">•</span><span>Built interactive experience with real-time rendering using <span className="font-bold">Unity (C#)</span>.</span></li>
                  <li className="flex items-start gap-2"><span className="mt-1 text-blue-300">•</span><span>Implemented <span className="font-bold">AR Integration</span> to view live customizations across devices.</span></li>
                  <li className="flex items-start gap-2"><span className="mt-1 text-blue-300">•</span><span>Leveraged experience from past interactive demos, now taken to full production-grade deployment.</span></li>
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
                  <li className="flex items-start gap-2"><span className="mt-1 text-green-300">•</span><span>Successfully drives accessory sales and headset engagement through interactive customization.</span></li>
                  <li className="flex items-start gap-2"><span className="mt-1 text-green-300">•</span><span>Encourages real-time customization and online checkout for improved customer experience.</span></li>
                  <li className="flex items-start gap-2"><span className="mt-1 text-green-300">•</span><span>Creates a deployable retail solution with measurable value for HyperX.</span></li>
                  <li className="flex items-start gap-2"><span className="mt-1 text-green-300">•</span><span>Represents a significant evolution from previous interactive demos to production-ready deployment.</span></li>
                </ul>
              </section>
            </div>
          </div>
        </div>
      </div>
    </>
  );
} 