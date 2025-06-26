"use client";

import { motion } from "framer-motion";
import TextScramble from "@/components/core/TextScramble";
import Image from "next/image";

export default function Cloud3DConnectPage() {
  return (
    <>
      <div className="h-32" />
      <div
        className="min-h-screen bg-black text-white py-12 flex justify-center mt-16 md:mt-24"
        style={{ marginLeft: '5px', marginRight: '5px' }}
      >
        <div className="max-w-full w-full grid grid-cols-1 lg:grid-cols-[900px_1fr] gap-16">
          {/* Left column: Image + stage info */}
          <div className="flex flex-col items-start">
            <img
              src="/18k tris.png"
              alt="Cloud 3D Connect 18k tris thumbnail"
              className="w-full max-w-3xl object-contain rounded-lg border border-gray-700 shadow-lg"
            />
            <p className="text-sm text-gray-400 mt-4">
              current stage of development: <br />
              optimizing the original manufacturing model by reducing triangle count <br />
              current triangle count: <span className="font-mono">20,000 triangles</span>
            </p>
          </div>

          {/* Right column: Centered content */}
          <div className="flex flex-col items-center text-center space-y-6">
            <div className="space-y-1">
              <p className="text-sm text-gray-300">May 2025 – August 2025</p>
              <h1 className="text-4xl md:text-6xl font-bold">Cloud 3D Connect</h1>
            </div>

            <p className="text-lg font-medium">
              Developing an interactive 3D customization experience for HyperX's Cloud 3 S headset that merges in-store interaction with online accessory personalization.
            </p>

            <div className="space-y-4 text-left max-w-2xl w-full">
              <section>
                <h2 className="text-xl font-semibold">Goal</h2>
                <p>
                  Solve the disconnect between headset purchases and HX3D accessory sales by letting users customize and order accessories before buying the headset.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mt-4">Tech Stack</h2>
                <ul className="list-disc list-inside space-y-1">
                  <li><b>Blender</b> – reduced triangle count for optimized models</li>
                  <li><b>Substance Painter</b> – applied performant textures</li>
                  <li><b>Unity (C#)</b> – interactive experience with real-time rendering</li>
                  <li><b>AR Integration</b> – view live customizations across devices</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold mt-4">Business Impact</h2>
                <ul className="list-disc list-inside space-y-1">
                  <li>Drives accessory sales and headset engagement</li>
                  <li>Encourages real-time customization and online checkout</li>
                  <li>Deployable retail solution with measurable value</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold mt-4">Builds on Past Work</h2>
                <p>
                  Leverages experience from past interactive demos, now taken to full production-grade deployment.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mt-4">Project Status</h2>
                <p>
                  Currently in active development phase. Represents a significant evolution from previous interactive demos to production-ready deployment.
                </p>
              </section>
            </div>
          </div>
        </div>
      </div>
    </>
  );
} 