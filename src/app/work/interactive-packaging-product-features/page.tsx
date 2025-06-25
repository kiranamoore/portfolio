"use client";

import TextScramble from "@/components/core/TextScramble";

export default function InteractivePackagingProductFeaturesPage() {
  return (
    <>
      <div className="h-32" />
      <div
        className="min-h-screen bg-black text-white py-12 flex justify-center mt-16 md:mt-24"
        style={{ marginLeft: '5px', marginRight: '5px' }}
      >
        <div className="max-w-full w-full grid grid-cols-1 lg:grid-cols-[1fr_900px] gap-16">
          {/* Left column: Description and details */}
          <div className="flex flex-col items-center text-center space-y-6">
            <div className="space-y-1">
              <p className="text-sm text-gray-300">Fall 2024</p>
              <h1 className="text-4xl md:text-6xl font-bold">Interactive Packaging with Product Features</h1>
            </div>
            <p className="text-lg font-medium">
              Interactive AR Product Packaging<br />
              Developed an augmented reality experience that transforms HyperX product packaging into an interactive in-store exploration tool for engaging and educating customers.
            </p>
            <div className="space-y-4 text-left max-w-2xl w-full">
              <section>
                <h2 className="text-xl font-semibold">Goal</h2>
                <p>
                  Enhance the retail experience by letting shoppers scan a QR code to launch an interactive 3D model that visually explains product features through animation and interaction.
                </p>
              </section>
              <section>
                <h2 className="text-xl font-semibold mt-4">Tech Stack</h2>
                <ul className="list-disc list-inside space-y-1">
                  <li><b>Lens Studio</b> – developed the AR experience with real-time interaction</li>
                  <li><b>Blender</b> – created stand-in 3D models for prototyping</li>
                  <li><b>Adobe Photoshop</b> – designed UI overlays and visual elements</li>
                </ul>
              </section>
              <section>
                <h2 className="text-xl font-semibold mt-4">Interface Design</h2>
                <ul className="list-disc list-inside space-y-1">
                  <li><b>Top Navigation</b> – highlights three core product features</li>
                  <li><b>Bottom Panel</b> – displays detailed descriptions and triggers 3D animations upon selection</li>
                </ul>
              </section>
              <section>
                <h2 className="text-xl font-semibold mt-4">Business Impact</h2>
                <ul className="list-disc list-inside space-y-1">
                  <li>Improves in-store product understanding and buyer confidence</li>
                  <li>Enables dynamic storytelling at point-of-sale without sales staff</li>
                  <li>Extends physical packaging into a digital interactive medium</li>
                </ul>
              </section>
              <section>
                <h2 className="text-xl font-semibold mt-4">Builds on Past Work</h2>
                <ul className="list-disc list-inside space-y-1">
                  <li>First AR retail guide created for HyperX with animated 3D models triggered by user input</li>
                  <li>Lays the groundwork for future integration of finalized models from Cloud3</li>
                  <li>Extends prior work in AR customization and onboarding into physical-to-digital retail engagement</li>
                </ul>
              </section>
              <section>
                <h2 className="text-xl font-semibold mt-4">Project Status</h2>
                <p>
                  Functional prototype completed with placeholder assets. Demonstrates full interaction pipeline, now ready for model integration and deployment at retail.
                </p>
              </section>
            </div>
          </div>
          {/* Right column: Video */}
          <div className="flex flex-col items-start">
            <video
              src="/packaging.mov"
              controls
              muted
              className="w-full max-w-md object-contain rounded-lg border border-gray-700 shadow-lg"
            >
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </>
  );
} 