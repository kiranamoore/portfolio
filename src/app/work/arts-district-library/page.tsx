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
            <div className="space-y-10 max-w-full w-full">
              {/* Role & Objective */}
              <section>
                <div className="flex items-center gap-3 mb-2">
                  <span className="h-6 w-1 rounded bg-gradient-to-b from-pink-500 to-red-400" />
                  <h2 className="text-2xl font-bold text-pink-400 tracking-tight">Role & Objective</h2>
                </div>
                <ul className="space-y-2 pl-6 list-none">
                  <li className="flex items-start gap-2"><span className="mt-1 text-pink-400">•</span><span>Served as <span className="font-semibold text-white">Lead Architectural Designer</span> to create a hybrid urban space combining library and skatepark functions.</span></li>
                  <li className="flex items-start gap-2"><span className="mt-1 text-pink-400">•</span><span>Aimed to design a library for an empty lot in Downtown LA's Arts District with an unconventional secondary program.</span></li>
                  <li className="flex items-start gap-2"><span className="mt-1 text-pink-400">•</span><span>Targeted the integration of play, learning, and community into a cohesive spatial experience.</span></li>
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
                  <li className="flex items-start gap-2"><span className="mt-1 text-blue-300">•</span><span>Conducted thorough site research with color-coded diagrams mapping surrounding neighborhood programs to inform spatial relationships.</span></li>
                  <li className="flex items-start gap-2"><span className="mt-1 text-blue-300">•</span><span>Initially envisioned the project surrounded by a playground, which became the foundation for early circulation studies.</span></li>
                  <li className="flex items-start gap-2"><span className="mt-1 text-blue-300">•</span><span>Transformed the surrounding playground into a "play-ground" skate park, introducing a more dynamic, youth-oriented public space.</span></li>
                  <li className="flex items-start gap-2"><span className="mt-1 text-blue-300">•</span><span>Shaped the library by extruding the site and carving out large circular forms to create distinct masses, open-air courtyards, and interconnected walkways.</span></li>
                  <li className="flex items-start gap-2"><span className="mt-1 text-blue-300">•</span><span>Divided the building into upper and ground floor zones to encourage exploration and layered movement through the space.</span></li>
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
                  <li className="flex items-start gap-2"><span className="mt-1 text-green-300">•</span><span>Successfully created a vibrant, community-centered space that challenges conventional library design.</span></li>
                  <li className="flex items-start gap-2"><span className="mt-1 text-green-300">•</span><span>Demonstrated ability to evolve design concepts through iterative research, circulation studies, and playful form-making.</span></li>
                  <li className="flex items-start gap-2"><span className="mt-1 text-green-300">•</span><span>Established a model for integrating play, learning, and community into cohesive spatial experiences.</span></li>
                  <li className="flex items-start gap-2"><span className="mt-1 text-green-300">•</span><span>Blurred boundaries between traditional educational spaces and recreational environments effectively.</span></li>
                </ul>
              </section>
            </div>
          </div>
        </div>
      </div>
    </>
  );
} 