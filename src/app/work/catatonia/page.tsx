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
            <p className="text-lg text-gray-200 mt-2">
              Led visual concept development and art direction for a neo-noir short film set in an apocalyptic city, blending 2D illustration and 3D environments to craft a cinematic narrative about a detective entangled in an off-world conspiracy.
            </p>
            <div className="space-y-10 text-left max-w-2xl w-full">
              {/* Role & Objective */}
              <section>
                <div className="flex items-center gap-3 mb-2">
                  <span className="h-6 w-1 rounded bg-gradient-to-b from-pink-500 to-red-400" />
                  <h2 className="text-2xl font-bold text-pink-400 tracking-tight">Role & Objective</h2>
                </div>
                <ul className="space-y-2 pl-6 list-none">
                  <li className="flex items-start gap-2"><span className="mt-1 text-pink-400">•</span><span>Served as <b>Lead Visual Artist</b> and <b>Concept Designer</b> for a narrative-driven short film exploring a gritty, futuristic cityscape.</span></li>
                  <li className="flex items-start gap-2"><span className="mt-1 text-pink-400">•</span><span>Aimed to build a <b>cinematic storyworld</b> where a detective unravels a murder mystery connected to an off-world conspiracy.</span></li>
                  <li className="flex items-start gap-2"><span className="mt-1 text-pink-400">•</span><span>Focused on merging <b>2D illustration</b> and <b>3D environments</b> to create an innovative visual language for the film.</span></li>
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
                  <li className="flex items-start gap-2"><span className="mt-1 text-blue-300">•</span><span>Produced extensive <b>concept art</b> to establish the neo-noir tone, using moody lighting and textured details in Adobe Photoshop and Procreate.</span></li>
                  <li className="flex items-start gap-2"><span className="mt-1 text-blue-300">•</span><span>Collaborated with <b>3D animators</b> to translate 2D artwork into dynamic scenes in Blender, ensuring visual consistency.</span></li>
                  <li className="flex items-start gap-2"><span className="mt-1 text-blue-300">•</span><span>Developed a <b>layered visual language</b> that seamlessly blends illustrated and 3D elements for atmospheric storytelling.</span></li>
                  <li className="flex items-start gap-2"><span className="mt-1 text-blue-300">•</span><span>Applied <b>animation and post-production effects</b> in After Effects to enhance transitions and cinematic impact.</span></li>
                  <li className="flex items-start gap-2"><span className="mt-1 text-blue-300">•</span><span>Refined visual pipelines to <b>integrate 2D and 3D aesthetics</b>, overcoming challenges to achieve a cohesive film look.</span></li>
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
                  <li className="flex items-start gap-2"><span className="mt-1 text-green-300">•</span><span>Delivered a <b>visually compelling short film</b> praised for bringing the neo-noir city to life with cinematic detail.</span></li>
                  <li className="flex items-start gap-2"><span className="mt-1 text-green-300">•</span><span>Successfully merged 2D and 3D media, creating a <b>distinctive visual style</b> that amplifies narrative depth.</span></li>
                  <li className="flex items-start gap-2"><span className="mt-1 text-green-300">•</span><span>Strengthened skills in <b>cinematic storytelling</b> and pipeline development for hybrid visual projects.</span></li>
                  <li className="flex items-start gap-2"><span className="mt-1 text-green-300">•</span><span>Established a reusable <b>workflow for integrating 2D and 3D assets</b> now applied to future filmmaking projects.</span></li>
                </ul>
              </section>
            </div>
          </div>
        </div>
      </div>
    </>
  );
} 