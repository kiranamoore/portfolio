"use client";

import TextScramble from "@/components/core/TextScramble";

export default function QuickStartGuideARManualPage() {
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
              <p className="text-sm text-gray-300">Spring 2025</p>
              <h1 className="text-4xl md:text-6xl font-bold">Quick Start Guide Augmented Reality Manual</h1>
            </div>
            <p className="text-lg font-medium">
              AR Quick Start Manual<br />
              Developed an augmented reality onboarding experience to replace paper manuals for HyperX products, improving usability while reducing production cost and environmental impact.
            </p>
            <div className="space-y-4 text-left max-w-2xl w-full">
              <section>
                <h2 className="text-xl font-semibold">Goal</h2>
                <p>
                  Enhance product setup clarity and accessibility through a mobile AR manual, while eliminating the recurring cost and waste associated with printing physical manuals.
                </p>
              </section>
              <section>
                <h2 className="text-xl font-semibold mt-4">Tech Stack</h2>
                <ul className="list-disc list-inside space-y-1">
                  <li><b>Lens Studio</b> – built the interactive AR experience</li>
                  <li><b>Adobe Photoshop</b> – designed all visual interface assets and overlays</li>
                </ul>
              </section>
              <section>
                <h2 className="text-xl font-semibold mt-4">Interface Design</h2>
                <ul className="list-disc list-inside space-y-1">
                  <li><b>Top Navigation</b> – allows users to select specific product features</li>
                  <li><b>Bottom Panel</b> – displays step-by-step usage instructions and feature descriptions</li>
                </ul>
              </section>
              <section>
                <h2 className="text-xl font-semibold mt-4">Business Impact</h2>
                <p>Eliminates ~$0.01 printing cost per unit:</p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>1,000 units → $10 saved</li>
                  <li>100,000 units → $1,000 saved</li>
                  <li>10 million units/year (realistic for HP-scale shipping volume) → $100,000 saved annually</li>
                </ul>
                <ul className="list-disc list-inside space-y-1 mt-2">
                  <li>Improves onboarding clarity and reduces support costs</li>
                  <li>Aligns with sustainability goals through paperless delivery</li>
                </ul>
              </section>
              <section>
                <h2 className="text-xl font-semibold mt-4">Builds on Past Work</h2>
                <ul className="list-disc list-inside space-y-1">
                  <li>Shifts from aesthetic/consumer-facing AR to operational AR utility</li>
                  <li>Applies AR experience design to solve cost, clarity, and scale challenges in product onboarding</li>
                  <li>Introduces structured UI for guided product education</li>
                </ul>
              </section>
              <section>
                <h2 className="text-xl font-semibold mt-4">Project Status</h2>
                <p>
                  Prototype completed using production-ready assets and tested in Lens Studio. Ready for integration into product packaging workflows at scale.
                </p>
              </section>
            </div>
          </div>
          {/* Right column: Video */}
          <div className="flex flex-col items-start">
            <video
              src="/Quick Start Manual.mp4"
              controls
              muted
              className="w-full max-w-md object-contain rounded-lg border border-gray-700 shadow-lg"
            >
              Your browser does not support the video tag.
            </video>
            <p className="text-sm text-gray-400 mt-4">
              AR Quick Start Manual demonstration video showing the interactive onboarding experience
            </p>
          </div>
        </div>
      </div>
    </>
  );
} 