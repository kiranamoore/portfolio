"use client";

import ImageSlideshow from "@/components/core/ImageSlideshow";

const images = Array.from({ length: 20 }, (_, i) => `/${21 + i}.png`);

export default function PainterOfLightPage() {
  return (
    <>
      <div className="h-32" />
      <div
        className="min-h-screen bg-black text-white py-12 flex justify-center items-center mt-16 md:mt-24 mb-12"
        style={{ marginLeft: 'auto', marginRight: 'auto', marginBottom: '50px', maxWidth: '1500px' }}
      >
        <div className="w-full flex flex-col lg:flex-row gap-10 items-start justify-center" style={{maxWidth: '1400px'}}>
          {/* Left column: Slideshow */}
          <div className="flex flex-col items-center justify-center flex-1 w-full min-w-[400px] max-w-[700px]">
            <ImageSlideshow images={images} altPrefix="Painter of Light project image" />
          </div>
          {/* Right column: Content */}
          <div className="flex flex-col items-start text-left space-y-6 flex-1 min-w-[320px] max-w-[520px]">
            <div className="space-y-1">
              <p className="text-sm text-gray-300">Spring 2025</p>
              <h1 className="text-4xl md:text-6xl font-bold text-white">The Painter of Light</h1>
            </div>
            <p className="text-lg text-gray-200 mt-2">
              Led the design of an immersive exhibit reimagining Thomas Kinkade's legacy by blending his luminous style with symbolic elements reflecting his personal struggles. The multi-sensory experience invites deeper reflection and challenges public perceptions, appealing to both art critics and casual audiences.
            </p>
            <div className="space-y-10 max-w-full w-full">
              {/* Role & Objective */}
              <section>
                <div className="flex items-center gap-3 mb-2">
                  <span className="h-6 w-1 rounded bg-gradient-to-b from-pink-500 to-red-400" />
                  <h2 className="text-2xl font-bold text-pink-400 tracking-tight">Role & Objective</h2>
                </div>
                <ul className="space-y-2 pl-6 list-none">
                  <li className="flex items-start gap-2"><span className="mt-1 text-pink-400">•</span><span className="text-white">Lead Experience Designer for a conceptual exhibit exploring Kinkade's life and work.</span></li>
                  <li className="flex items-start gap-2"><span className="mt-1 text-pink-400">•</span><span className="text-white">Aimed to shift perceptions by contrasting his light-filled aesthetic with personal symbolism.</span></li>
                  <li className="flex items-start gap-2"><span className="mt-1 text-pink-400">•</span><span className="text-white">Created an inclusive, thought-provoking, multi-sensory journey.</span></li>
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
                  <li className="flex items-start gap-2"><span className="mt-1 text-blue-300">•</span><span className="text-white">Researched art history, theology, and immersive exhibit trends.</span></li>
                  <li className="flex items-start gap-2"><span className="mt-1 text-blue-300">•</span><span className="text-white">Designed narrative-driven spaces using atmospheric lighting and spatial flow.</span></li>
                  <li className="flex items-start gap-2"><span className="mt-1 text-blue-300">•</span><span className="text-white">Modeled spaces in <span className="font-bold">Rhino</span> and textured, used shaders, and rendered in <span className="font-bold">Blender</span> using the Cycles engine.</span></li>
                  <li className="flex items-start gap-2"><span className="mt-1 text-blue-300">•</span><span className="text-white">Curated symbolic props to explore the interplay of light and shadow in Kinkade's story.</span></li>
                  <li className="flex items-start gap-2"><span className="mt-1 text-blue-300">•</span><span className="text-white">Drew from immersive benchmarks like Meow Wolf and Van Gogh: The Immersive Experience.</span></li>
                  <li className="flex items-start gap-2"><span className="mt-1 text-blue-300">•</span><span className="text-white">Balanced visual appeal with emotional and intellectual depth.</span></li>
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
                  <li className="flex items-start gap-2"><span className="mt-1 text-green-300">•</span><span className="text-white">Developed a conceptual framework for immersive storytelling that repositions Kinkade's work.</span></li>
                  <li className="flex items-start gap-2"><span className="mt-1 text-green-300">•</span><span className="text-white">Created a scalable, multi-sensory exhibit model that resonates with diverse audiences.</span></li>
                  <li className="flex items-start gap-2"><span className="mt-1 text-green-300">•</span><span className="text-white">Demonstrated ability to blend art, narrative, and audience engagement to provoke meaningful reflection.</span></li>
                </ul>
              </section>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

