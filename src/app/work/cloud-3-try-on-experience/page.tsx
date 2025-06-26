"use client";

import { motion } from "framer-motion";
import TextScramble from "@/components/core/TextScramble";
import Image from "next/image";

export default function Cloud3TryOnExperiencePage() {
  return (
    <>
      <div className="h-32" />
      <div
        className="min-h-screen bg-black text-white py-12 flex justify-center mt-16 md:mt-24"
        style={{ marginLeft: '100px', marginRight: '100px' }}
      >
        <div className="max-w-full w-full grid grid-cols-1 lg:grid-cols-[900px_1fr] gap-16">
          {/* Left column: Video only, no thumbnail */}
          <div className="flex flex-col items-start">
            <video
              src="/Headphone color swap.mov"
              controls
              autoPlay
              loop
              muted
              className="w-full max-w-md object-contain rounded-lg border border-gray-700 shadow-lg"
            />
          </div>

          {/* Right column: Centered content */}
          <div className="flex flex-col items-center text-center space-y-6">
            <div className="space-y-1">
              <p className="text-sm text-gray-300">Summer 2024</p>
              <h1 className="text-4xl md:text-6xl font-bold">Cloud 3 Try-On Experience</h1>
              <span className="inline-block px-2 py-1 bg-yellow-500 text-black text-xs font-semibold rounded-full mt-2">
                Hewlett-Packard / HyperX
              </span>
            </div>
            <p className="text-lg font-medium">
              AR Product Try-On Experience<br />
              Developed an augmented reality Try-On tool for HyperX customers to visualize product compatibility by previewing headsets directly on their head.
            </p>
            <div className="space-y-4 text-left max-w-2xl w-full">
              <section>
                <h2 className="text-xl font-semibold">Goal</h2>
                <p>
                  Enable users to virtually try on HyperX headsets—specifically the Cloud 3 series—through AR, enhancing confidence in fit, style, and purchase decisions.
                </p>
              </section>
              <section>
                <h2 className="text-xl font-semibold mt-4">Tech Stack</h2>
                <ul className="list-disc list-inside space-y-1">
                  <li><b>Meta Spark Studio</b> – built the interactive AR experience</li>
                  <li><b>Rhinoceros 3D & Blender</b> – modeled 3D assets</li>
                  <li><b>Adobe Substance</b> – created and applied textures</li>
                </ul>
              </section>
              <section>
                <h2 className="text-xl font-semibold mt-4">Interface Design</h2>
                <ul className="list-disc list-inside space-y-1">
                  <li><b>Single Toggle Button</b> – allows users to easily switch between different Cloud 3 headset versions within the AR experience</li>
                  <li><b>Head-Binded Face Tracking</b> – headsets are dynamically bound to the user's head using face tracking for accurate and intuitive visualization</li>
                </ul>
              </section>
              <section>
                <h2 className="text-xl font-semibold mt-4">Business Impact</h2>
                <ul className="list-disc list-inside space-y-1">
                  <li>Supports purchase confidence by allowing personalized, immersive product try-ons</li>
                  <li>Potential to reduce product returns by helping customers assess fit and style before buying</li>
                  <li>Demonstrates the viability of scalable, user-centric AR shopping tools</li>
                </ul>
              </section>
              <section>
                <h2 className="text-xl font-semibold mt-4">Build Context</h2>
                <p>
                  Developed during my first summer internship using early-stage 3D assets while refining AR modeling and optimization workflows.<br />
                  Learned to balance visual quality with technical constraints in AR development.
                </p>
              </section>
              <section>
                <h2 className="text-xl font-semibold mt-4">Project Status</h2>
                <p>
                  Prototype completed and fully functional using initial 3D models. Developed and tested in Meta Spark Studio. Ready for refinement with production-ready assets for future customer-facing deployment.
                </p>
              </section>
            </div>
          </div>
        </div>
      </div>
    </>
  );
} 