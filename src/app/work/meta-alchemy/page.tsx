"use client";

import ImageSlideshow from "@/components/core/ImageSlideshow";

export default function MetaAlchemyPage() {
  const alchemyImages = Array.from({ length: 16 }, (_, i) => `/little alchemy/${i + 1}.png`);
  return (
    <>
      <div className="h-32" />
      <div className="min-h-screen bg-black text-white py-12 flex justify-center mb-12" style={{ marginLeft: '5px', marginRight: '5px', marginBottom: '50px' }}>
        <div className="max-w-full w-full grid grid-cols-1 lg:grid-cols-[900px_1fr] gap-16">
          {/* Left: Slideshow */}
          <div className="flex flex-col items-start w-full">
            <div className="w-full">
              <ImageSlideshow
                images={alchemyImages}
                altPrefix="Meta Alchemy screenshot"
              />
            </div>
            <video
              src="/little alchemy.mp4"
              controls
              muted
              className="w-full mt-6 rounded-lg border border-gray-700 shadow-lg"
            >
              Your browser does not support the video tag.
            </video>
          </div>
          {/* Right: Description and details */}
          <div className="flex flex-col items-center text-center space-y-6 justify-center">
            <div className="space-y-1">
              <p className="text-sm text-gray-300">Spring 2025</p>
              <h1 className="text-4xl md:text-6xl font-bold">Meta Alchemy</h1>
            </div>
            <p className="text-lg font-medium">
              Designed and developed a mixed reality prototype for the Meta Quest 3 that enables users to combine virtual elements in an interactive 3D space, inspired by the creativity-driven gameplay of Little Alchemy.
            </p>
            <div className="space-y-4 text-left w-full max-w-2xl mx-auto px-4">
              <section>
                <h2 className="text-xl font-semibold">Goal</h2>
                <p>
                  Foster user creativity and exploration through combinatorial play in mixed reality, showcasing the immersive capabilities of the Meta Quest 3.
                </p>
              </section>
              <section>
                <h2 className="text-xl font-semibold mt-4">Tech Stack</h2>
                <ul className="list-disc list-inside space-y-1">
                  <li><b>Unity</b> – developed for spatial computing with high-performance rendering</li>
                  <li><b>C#</b> – implemented interaction logic and object manipulation</li>
                  <li><b>Meta Quest 3 SDK</b> – utilized for spatial tracking, controller input, and passthrough</li>
                  <li><b>Blender</b> – created and optimized 3D assets for interactive use</li>
                </ul>
              </section>
              <section>
                <h2 className="text-xl font-semibold mt-4">Interface Design</h2>
                <ul className="list-disc list-inside space-y-1">
                  <li>3D sandbox-style environment with drag-and-drop virtual elements</li>
                  <li>Real-time feedback for element combinations and discoveries</li>
                  <li>Optimized spatial interactions based on headset and controller tracking</li>
                </ul>
              </section>
              <section>
                <h2 className="text-xl font-semibold mt-4">Business Impact</h2>
                <ul className="list-disc list-inside space-y-1">
                  <li>Demonstrates the potential for educational or game-like MR applications on next-gen headsets</li>
                  <li>Highlights platform-specific strengths of the Meta Quest 3 for immersive product design</li>
                  <li>Establishes a foundation for future combinatorial AR/VR content or platform pitches</li>
                </ul>
              </section>
              <section>
                <h2 className="text-xl font-semibold mt-4">Builds on Past Work</h2>
                <ul className="list-disc list-inside space-y-1">
                  <li>Extends previous mobile AR projects into fully immersive, headset-based spatial computing</li>
                  <li>Introduces more complex interaction paradigms (3D physics + tracked hands/controllers)</li>
                  <li>Showcases system-level performance optimization and intuitive MR design thinking</li>
                </ul>
              </section>
              <section>
                <h2 className="text-xl font-semibold mt-4">Project Status</h2>
                <p>
                  Functional prototype deployed on Meta Quest 3 hardware with responsive interactions, platform-optimized assets, and a modular design for extensibility.
                </p>
              </section>
            </div>
          </div>
        </div>
      </div>
    </>
  );
} 