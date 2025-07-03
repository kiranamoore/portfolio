"use client";

import ImageSlideshow from "@/components/core/ImageSlideshow";

export default function MetaAlchemyPage() {
  const alchemyImages = Array.from({ length: 16 }, (_, i) => `/little alchemy/${i + 1}.png`);
  return (
    <>
      <div className="h-32" />
      <div
        className="min-h-screen bg-black text-white py-12 flex justify-center items-center mt-16 md:mt-24 mb-12"
        style={{ marginLeft: 'auto', marginRight: 'auto', marginBottom: '50px', maxWidth: '1600px' }}
      >
        <div className="w-full flex flex-col lg:flex-row gap-12 items-center justify-center" style={{maxWidth: '1400px'}}>
          {/* Left column: Slideshow and Video */}
          <div className="flex flex-col items-center justify-center flex-1 h-full" style={{ maxWidth: '80%' }}>
            <div style={{ width: '75%', maxWidth: '700px' }}>
              <ImageSlideshow
                images={alchemyImages}
                altPrefix="Meta Alchemy screenshot"
              />
            </div>
            <video
              src="/little-alchemy-demo.mp4"
              controls
              muted
              className="w-full max-w-md object-contain rounded-lg border border-gray-700 shadow-lg mt-6"
              style={{ minHeight: '320px', width: '75%', maxWidth: '525px' }}
            >
              Your browser does not support the video tag.
            </video>
          </div>
          {/* Right column: Content */}
          <div className="flex flex-col items-center text-center space-y-6 flex-1 min-w-[350px]">
            <div className="space-y-1">
              <p className="text-sm text-gray-300">Spring 2025</p>
              <h1 className="text-4xl md:text-6xl font-bold">Meta Alchemy</h1>
            </div>
            <div className="space-y-10 text-left max-w-2xl w-full">
              {/* Role & Objective */}
              <section>
                <div className="flex items-center gap-3 mb-2">
                  <span className="h-6 w-1 rounded bg-gradient-to-b from-pink-500 to-red-400" />
                  <h2 className="text-2xl font-bold text-pink-400 tracking-tight">Role & Objective</h2>
                </div>
                <ul className="space-y-2 pl-6 list-none">
                  <li className="flex items-start gap-2"><span className="mt-1 text-pink-400">•</span><span>Served as <span className="font-semibold text-white">Lead Mixed Reality Developer</span> to design and develop a prototype for Meta Quest 3.</span></li>
                  <li className="flex items-start gap-2"><span className="mt-1 text-pink-400">•</span><span>Aimed to enable users to combine virtual elements in an interactive 3D space, inspired by Little Alchemy's creativity-driven gameplay.</span></li>
                  <li className="flex items-start gap-2"><span className="mt-1 text-pink-400">•</span><span>Targeted fostering user creativity and exploration through combinatorial play in mixed reality.</span></li>
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
                  <li className="flex items-start gap-2"><span className="mt-1 text-blue-300">•</span><span>Developed for spatial computing using <span className="font-bold">Unity</span> with high-performance rendering and <span className="font-bold">C#</span> for interaction logic.</span></li>
                  <li className="flex items-start gap-2"><span className="mt-1 text-blue-300">•</span><span>Utilized <span className="font-bold">Meta Quest 3 SDK</span> for spatial tracking, controller input, and passthrough functionality.</span></li>
                  <li className="flex items-start gap-2"><span className="mt-1 text-blue-300">•</span><span>Created and optimized 3D assets using <span className="font-bold">Blender</span> for interactive use in mixed reality.</span></li>
                  <li className="flex items-start gap-2"><span className="mt-1 text-blue-300">•</span><span>Designed a 3D sandbox-style environment with drag-and-drop virtual elements and real-time feedback.</span></li>
                  <li className="flex items-start gap-2"><span className="mt-1 text-blue-300">•</span><span>Optimized spatial interactions based on headset and controller tracking for intuitive user experience.</span></li>
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
                  <li className="flex items-start gap-2"><span className="mt-1 text-green-300">•</span><span>Delivered a functional prototype deployed on Meta Quest 3 hardware with responsive interactions and platform-optimized assets.</span></li>
                  <li className="flex items-start gap-2"><span className="mt-1 text-green-300">•</span><span>Successfully demonstrated the potential for educational or game-like MR applications on next-gen headsets.</span></li>
                  <li className="flex items-start gap-2"><span className="mt-1 text-green-300">•</span><span>Established a foundation for future combinatorial AR/VR content with modular design for extensibility.</span></li>
                  <li className="flex items-start gap-2"><span className="mt-1 text-green-300">•</span><span>Showcased system-level performance optimization and intuitive MR design thinking for spatial computing.</span></li>
                </ul>
              </section>
            </div>
          </div>
        </div>
      </div>
    </>
  );
} 