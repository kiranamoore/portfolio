"use client";

import ImageSlideshow from "@/components/core/ImageSlideshow";

const imagesProject3 = [
  "/weaving/weaving-spaces-01.png",
  "/weaving/weaving-spaces-02.png",
];
const imagesProject4 = [
  "/weaving/project-4-01.png",
  "/weaving/project-4-02.png",
  "/weaving/project-4-03.png",
  "/weaving/project-4-04.png",
  "/weaving/project-4-05.png",
  "/weaving/project-4-06.png",
  "/weaving/project-4-07.png",
];

export default function WeavingSpacesPage() {
  return (
    <>
      <div className="h-32" />
      <div
        className="min-h-screen bg-black text-white py-12 flex justify-center items-center mt-16 md:mt-24 mb-12"
        style={{ marginLeft: 'auto', marginRight: 'auto', marginBottom: '50px', maxWidth: '1400px' }}
      >
        <div className="w-full flex flex-col lg:flex-row gap-16 items-center justify-center" style={{maxWidth: '1200px'}}>
          {/* Left column: Two slideshows */}
          <div className="flex flex-col items-center justify-center flex-1 w-full gap-8">
            <ImageSlideshow images={imagesProject3} altPrefix="Weaving Spaces Project 3" />
            <ImageSlideshow images={imagesProject4} altPrefix="Weaving Spaces Project 4" />
          </div>
          {/* Right column: Content */}
          <div className="flex flex-col items-center text-center space-y-6 flex-1">
            <div className="space-y-1">
              <p className="text-sm text-gray-300">Fall 2022</p>
              <h1 className="text-4xl md:text-6xl font-bold">Weaving Spaces</h1>
            </div>
            <div className="space-y-10 text-left max-w-2xl w-full">
              {/* Role & Objective */}
              <section>
                <div className="flex items-center gap-3 mb-2">
                  <span className="h-6 w-1 rounded bg-gradient-to-b from-pink-500 to-red-400" />
                  <h2 className="text-2xl font-bold text-pink-400 tracking-tight">Role & Objective</h2>
                </div>
                <ul className="space-y-2 pl-6 list-none">
                  <li className="flex items-start gap-2"><span className="mt-1 text-pink-400">•</span><span>Served as <span className="font-semibold text-white">Lead Architectural Designer</span> to explore weaving as both a conceptual and structural technique in architectural form-making.</span></li>
                  <li className="flex items-start gap-2"><span className="mt-1 text-pink-400">•</span><span>Aimed to translate abstract two-dimensional linework into spatial, three-dimensional forms through systematic design exploration.</span></li>
                  <li className="flex items-start gap-2"><span className="mt-1 text-pink-400">•</span><span>Targeted evolving formal studies into architectural solutions that create dynamic, interwoven environments encouraging exploration and interaction.</span></li>
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
                  <li className="flex items-start gap-2"><span className="mt-1 text-blue-300">•</span><span>Developed <span className="font-bold">Figure-Ground Abstraction</span> from line drawings of a hair straightener, progressively rotating and recoloring to emphasize relationships between curves and straight lines.</span></li>
                  <li className="flex items-start gap-2"><span className="mt-1 text-blue-300">•</span><span>Designed physical models using <span className="font-bold">Interlaced Planes</span> that weave through one another at multiple points, creating varied elevations and subtle curvatures.</span></li>
                  <li className="flex items-start gap-2"><span className="mt-1 text-blue-300">•</span><span>Extended weaving concept into <span className="font-bold">Architectural Scale</span> by creating structures with arching and dipping planes that interlace with the site.</span></li>
                  <li className="flex items-start gap-2"><span className="mt-1 text-blue-300">•</span><span>Integrated <span className="font-bold">Elevated Extensions</span> with walls rising beyond rooflines to complete arching gestures and visually connect different site elements.</span></li>
                  <li className="flex items-start gap-2"><span className="mt-1 text-blue-300">•</span><span>Created habitable spaces that blur boundaries between structure and landscape, maintaining visual language of woven planes throughout.</span></li>
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
                  <li className="flex items-start gap-2"><span className="mt-1 text-green-300">•</span><span>Successfully demonstrated ability to develop complex physical forms from abstract graphic studies, applying weaving as a method to create spatial depth and structural variation.</span></li>
                  <li className="flex items-start gap-2"><span className="mt-1 text-green-300">•</span><span>Evolved formal studies into architectural solutions using weaving as a cohesive design language that shapes both space and experience.</span></li>
                  <li className="flex items-start gap-2"><span className="mt-1 text-green-300">•</span><span>Created dynamic, interwoven environments that encourage exploration and interaction through layered circulation and interconnected spaces.</span></li>
                  <li className="flex items-start gap-2"><span className="mt-1 text-green-300">•</span><span>Established weaving as a formal, structural, and conceptual design tool that can be applied across multiple scales of architectural intervention.</span></li>
                </ul>
              </section>
            </div>
          </div>
        </div>
      </div>
    </>
  );
} 