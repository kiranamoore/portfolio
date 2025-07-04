"use client";

import ImageSlideshow from "@/components/core/ImageSlideshow";

const images = Array.from({ length: 19 }, (_, i) => `/arch/${i}.jpg`);

export default function ArtsDistrictLibraryPage() {
  return (
    <>
      <div className="h-32" />
      <div
        className="min-h-screen bg-black text-white py-12 flex justify-center items-center mt-16 md:mt-24 mb-12"
        style={{ marginLeft: 'auto', marginRight: 'auto', marginBottom: '40px', maxWidth: '1500px' }}
      >
        <div className="w-full flex flex-col lg:flex-row gap-10 items-start justify-center" style={{maxWidth: '1400px'}}>
          {/* Left column: Slideshow */}
          <div className="flex flex-col items-center justify-center flex-1 w-full min-w-[400px] max-w-[700px]">
            <ImageSlideshow images={images} altPrefix="Arts District Library" />
          </div>
          {/* Right column: Content */}
          <div className="flex flex-col items-start text-left space-y-6 flex-1 min-w-[320px] max-w-[520px]">
            <div className="space-y-1">
              <p className="text-sm text-gray-300">Spring 2023</p>
              <h1 className="text-4xl md:text-6xl font-bold">Arts District Library</h1>
            </div>
            <p className="text-lg text-gray-200 mt-2">
              Designed the spatial layout, architectural concept, and site integration for a hybrid library and skatepark in Downtown LA, blending play, learning, and community into a unified public space.
            </p>
            <div className="space-y-10 max-w-full w-full">
              {/* Role & Objective */}
              <section>
                <div className="flex items-center gap-3 mb-2">
                  <span className="h-6 w-1 rounded bg-gradient-to-b from-pink-500 to-red-400" />
                  <h2 className="text-2xl font-bold text-pink-400 tracking-tight">Role & Objective</h2>
                </div>
                <ul className="space-y-2 pl-6 list-none">
                  <li className="flex items-start gap-2"><span className="mt-1 text-pink-400">•</span><span>Designed a speculative library concept in LA's Arts District that reimagines how youth and communities engage with public space.</span></li>
                  <li className="flex items-start gap-2"><span className="mt-1 text-pink-400">•</span><span>Aimed to develop a <b>hybrid urban space</b> that combines the functions of a library and a skatepark to support education, recreation, and neighborhood culture.</span></li>
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
                  <li className="flex items-start gap-2"><span className="mt-1 text-blue-300">•</span><span>Conducted <b>site research and analysis</b> using color-coded diagrams to map adjacent programs and inform spatial organization.</span></li>
                  <li className="flex items-start gap-2"><span className="mt-1 text-blue-300">•</span><span>Evolved early playground-inspired circulation studies into a dynamic "<b>play-ground skatepark</b>" concept that surrounds and interacts with the library.</span></li>
                  <li className="flex items-start gap-2"><span className="mt-1 text-blue-300">•</span><span>Used <b>site extrusion and circular subtractions</b> to shape the building form, creating courtyards, open-air walkways, and massing contrasts.</span></li>
                  <li className="flex items-start gap-2"><span className="mt-1 text-blue-300">•</span><span>Designed <b>layered circulation paths</b> by dividing the structure into upper and lower zones that promote movement and discovery throughout the space.</span></li>
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
                  <li className="flex items-start gap-2"><span className="mt-1 text-green-300">•</span><span>Delivered a <b>youth-oriented, community-centered design</b> that challenges traditional expectations of public libraries.</span></li>
                  <li className="flex items-start gap-2"><span className="mt-1 text-green-300">•</span><span>Demonstrated ability to <b>translate iterative research into spatial form-making</b> and integrate unconventional programs cohesively.</span></li>
                  <li className="flex items-start gap-2"><span className="mt-1 text-green-300">•</span><span>Established a model for <b>blurring educational and recreational functions</b> to foster inclusive, flexible public environments.</span></li>
                </ul>
              </section>
            </div>
          </div>
        </div>
      </div>
    </>
  );
} 