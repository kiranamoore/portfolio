"use client";

import TextScramble from "@/components/core/TextScramble";

export default function QuickStartGuideARManualPage() {
  return (
    <>
      <div className="h-32" />
      <div
        className="min-h-screen bg-black text-white py-12 flex justify-center items-center mt-16 md:mt-24 mb-12"
        style={{ marginLeft: 'auto', marginRight: 'auto', marginBottom: '50px', maxWidth: '1400px' }}
      >
        <div className="w-full flex flex-col lg:flex-row gap-16 items-center justify-center" style={{maxWidth: '1200px'}}>
          {/* Left column: Description and details */}
          <div className="flex flex-col items-center text-center space-y-6 flex-1">
            <div className="space-y-1">
              <p className="text-sm text-gray-300">Spring 2025</p>
              <h1 className="text-4xl md:text-6xl font-bold">Quick Start Guide Augmented Reality Manual</h1>
            </div>
            <div className="space-y-10 text-left max-w-2xl w-full">
              {/* Role & Objective */}
              <section>
                <div className="flex items-center gap-3 mb-2">
                  <span className="h-6 w-1 rounded bg-gradient-to-b from-pink-500 to-red-400" />
                  <h2 className="text-2xl font-bold text-pink-400 tracking-tight">Role & Objective</h2>
                </div>
                <ul className="space-y-2 pl-6 list-none">
                  <li className="flex items-start gap-2"><span className="mt-1 text-pink-400">•</span><span>Served as <span className="font-semibold text-white">Lead AR Designer</span> to create an augmented reality onboarding experience for HyperX products.</span></li>
                  <li className="flex items-start gap-2"><span className="mt-1 text-pink-400">•</span><span>Aimed to <span className="font-bold">replace paper manuals with a mobile AR solution</span> to enhance setup clarity.</span></li>
                  <li className="flex items-start gap-2"><span className="mt-1 text-pink-400">•</span><span>Targeted <span className="font-bold">reduction of production costs</span> and alignment with sustainability goals through a paperless approach.</span></li>
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
                  <li className="flex items-start gap-2"><span className="mt-1 text-blue-300">•</span><span>Designed and developed an <span className="font-bold">interactive AR manual</span> using Lens Studio for seamless mobile functionality.</span></li>
                  <li className="flex items-start gap-2"><span className="mt-1 text-blue-300">•</span><span>Created visual interface assets and overlays in Adobe Photoshop for a polished, intuitive design.</span></li>
                  <li className="flex items-start gap-2"><span className="mt-1 text-blue-300">•</span><span>Implemented a top navigation system to select product features and a bottom panel for step-by-step instructions.</span></li>
                  <li className="flex items-start gap-2"><span className="mt-1 text-blue-300">•</span><span>Optimized AR performance across diverse mobile devices by refining 3D assets and streamlining interactions.</span></li>
                  <li className="flex items-start gap-2"><span className="mt-1 text-blue-300">•</span><span><span className="font-bold">Shifted from aesthetic-focused AR to operational utility</span>, addressing cost and clarity challenges.</span></li>
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
                  <li className="flex items-start gap-2"><span className="mt-1 text-green-300">•</span><span>Delivered a production-ready prototype, eliminating <span className="font-semibold text-green-200">~$0.01 per unit</span> in printing costs:</span></li>
                  <li className="flex items-start gap-2"><span className="mt-1 text-green-300">•</span><span><span className="font-semibold text-green-200">$10</span> saved for 1,000 units.</span></li>
                  <li className="flex items-start gap-2"><span className="mt-1 text-green-300">•</span><span><span className="font-semibold text-green-200">$1,000</span> saved for 100,000 units.</span></li>
                  <li className="flex items-start gap-2"><span className="mt-1 text-green-300">•</span><span><span className="font-semibold text-green-200">$100,000</span> saved annually for 10 million units (aligned with HP's shipping scale).</span></li>
                  <li className="flex items-start gap-2"><span className="mt-1 text-green-300">•</span><span>Aligned with HyperX's sustainability goals by reducing paper waste.</span></li>
                  <li className="flex items-start gap-2"><span className="mt-1 text-green-300">•</span><span>Created structured UI and AR Experience for guided product education, providing the ability to implement for future product releases.</span></li>
                </ul>
              </section>
            </div>
          </div>
          {/* Right column: Video */}
          <div className="flex flex-col items-center justify-center flex-1 h-full">
            <video
              src="/Quick Start Manual.mp4"
              controls
              muted
              className="w-full max-w-md object-contain rounded-lg border border-gray-700 shadow-lg"
              style={{ minHeight: '320px' }}
            >
              Your browser does not support the video tag.
            </video>
            <p className="text-sm text-gray-400 mt-4 text-center">
              AR Quick Start Manual demonstration video showing the interactive onboarding experience
            </p>
          </div>
        </div>
      </div>
    </>
  );
} 