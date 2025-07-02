"use client";

import ImageSlideshow from "@/components/core/ImageSlideshow";

const imagesCatatonia = [
  "/catatonia1.jpg",
  "/catatonia2.jpg",
  "/catatonia3.jpg",
  "/catatonia4.jpg",
  "/catatonia5.jpg",
  "/catatonia6.jpg",
];

export default function CatatoniaPage() {
  return (
    <>
      <div className="h-32" />
      <div
        className="min-h-screen bg-black text-white py-12 flex justify-center items-center mt-16 md:mt-24 mb-12"
        style={{ marginLeft: 'auto', marginRight: 'auto', marginBottom: '50px', maxWidth: '1400px' }}
      >
        <div className="w-full flex flex-col lg:flex-row gap-16 items-center justify-center" style={{maxWidth: '1200px'}}>
          {/* Left column: Video and slideshow */}
          <div className="flex flex-col items-center justify-center flex-1 h-full w-full">
            <video
              src="/catatonia.mp4"
              controls
              muted
              className="w-full max-w-md object-contain rounded-lg border border-gray-700 shadow-lg mb-8"
              style={{ minHeight: '320px' }}
            >
              Your browser does not support the video tag.
            </video>
            <ImageSlideshow images={imagesCatatonia} altPrefix="Catatonia Still" />
          </div>
          {/* Right column: Content */}
          <div className="flex flex-col items-center text-center space-y-6 flex-1">
            <div className="space-y-1">
              <p className="text-sm text-gray-300">Fall 2023</p>
              <h1 className="text-4xl md:text-6xl font-bold">Catatonia</h1>
            </div>
            <div className="space-y-10 text-left max-w-2xl w-full">
              {/* Role & Objective */}
              <section>
                <div className="flex items-center gap-3 mb-2">
                  <span className="h-6 w-1 rounded bg-gradient-to-b from-pink-500 to-red-400" />
                  <h2 className="text-2xl font-bold text-pink-400 tracking-tight">Role & Objective</h2>
                </div>
                <ul className="space-y-2 pl-6 list-none">
                  <li className="flex items-start gap-2"><span className="mt-1 text-pink-400">•</span><span>Served as <span className="font-semibold text-white">Lead Visual Artist and Concept Designer</span> to create a narrative-driven short film set in a neo-noir, apocalyptic city.</span></li>
                  <li className="flex items-start gap-2"><span className="mt-1 text-pink-400">•</span><span>Aimed to craft a cinematic storyworld following a detective uncovering murders tied to an off-world conspiracy.</span></li>
                  <li className="flex items-start gap-2"><span className="mt-1 text-pink-400">•</span><span>Targeted the fusion of 2D illustration and 3D environments to push boundaries in visual storytelling for a compelling short film.</span></li>
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
                  <li className="flex items-start gap-2"><span className="mt-1 text-blue-300">•</span><span>Developed a comprehensive suite of concept art to establish the cinematic neo-noir tone and guide visual direction.</span></li>
                  <li className="flex items-start gap-2"><span className="mt-1 text-blue-300">•</span><span>Designed 2D illustrations in Adobe Photoshop and Procreate, capturing the gritty aesthetic with moody lighting and textured details.</span></li>
                  <li className="flex items-start gap-2"><span className="mt-1 text-blue-300">•</span><span>Collaborated with 3D animators to integrate concept art into Blender for dynamic film environments.</span></li>
                  <li className="flex items-start gap-2"><span className="mt-1 text-blue-300">•</span><span>Crafted a layered visual language, blending 2D illustrations with 3D scenes to enhance the film's atmospheric narrative.</span></li>
                  <li className="flex items-start gap-2"><span className="mt-1 text-blue-300">•</span><span>Incorporated animation and post-production effects using After Effects to create seamless, cinematic transitions.</span></li>
                  <li className="flex items-start gap-2"><span className="mt-1 text-blue-300">•</span><span>Overcame challenges in aligning 2D and 3D aesthetics by iterating on visual pipelines to ensure a cohesive look.</span></li>
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
                  <li className="flex items-start gap-2"><span className="mt-1 text-green-300">•</span><span>Delivered a visually striking short film that received positive feedback in screenings: <span className="italic text-green-100">"The neo-noir city felt alive and cinematic."</span></span></li>
                  <li className="flex items-start gap-2"><span className="mt-1 text-green-300">•</span><span>Successfully blended 2D and 3D elements, creating a distinctive visual style that enhanced the narrative's emotional depth.</span></li>
                  <li className="flex items-start gap-2"><span className="mt-1 text-green-300">•</span><span>Deepened expertise in cinematic storytelling, strengthening skills in merging illustration and 3D animation for film.</span></li>
                  <li className="flex items-start gap-2"><span className="mt-1 text-green-300">•</span><span>Established a reusable workflow for integrating 2D and 3D assets, now applied to future short film projects.</span></li>
                </ul>
              </section>
            </div>
          </div>
        </div>
      </div>
    </>
  );
} 