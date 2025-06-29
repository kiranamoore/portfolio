"use client";

import ImageSlideshow from "@/components/core/ImageSlideshow";

const images = Array.from({ length: 19 }, (_, i) => `/arch/${i}.jpg`);

export default function ArtsDistrictLibraryPage() {
  return (
    <>
      <div className="h-32" />
      <div
        className="min-h-screen bg-black text-white py-12 flex justify-center mt-16 md:mt-24 mb-12"
        style={{ marginLeft: '100px', marginRight: '100px', marginBottom: '50px' }}
      >
        <div className="max-w-full w-full grid grid-cols-1 lg:grid-cols-[900px_1fr] gap-16 items-center text-white">
          {/* Left column: Slideshow */}
          <div className="flex flex-col items-start w-full">
            <ImageSlideshow images={images} altPrefix="Arts District Library" />
          </div>
          {/* Right column: Content */}
          <div className="flex flex-col items-center text-center space-y-6 justify-center text-white">
            <div className="space-y-1 text-white">
              <p className="text-sm text-white">Spring 2023</p>
              <h1 className="text-4xl md:text-6xl font-bold text-white">Arts District Library</h1>
            </div>
            <div className="space-y-4 text-left max-w-2xl w-full text-white">
              <p className="text-lg font-medium text-white">
                Library x Skatepark – Hybrid Urban Space Design
                <br />
                For this design challenge, we were tasked with creating a library for an empty lot in Downtown Los Angeles' Arts District, combining it with an unconventional secondary program.
              </p>
              <section>
                <h3 className="text-2xl font-semibold mb-2 text-red-400 text-white" style={{color: 'white'}}>Key Features</h3>
                <ul className="space-y-3 list-disc pl-5 text-white">
                  <li className="text-white"><strong className="text-white">Contextual Urban Analysis:</strong> Conducted thorough site research, including color-coded diagrams mapping surrounding neighborhood programs to inform spatial relationships.</li>
                  <li className="text-white"><strong className="text-white">Circulation-Driven Design:</strong> Initially envisioned the project to be surrounded by a playground, which became the foundation for early circulation studies.</li>
                  <li className="text-white"><strong className="text-white">Evolving Concept:</strong> Transformed the surrounding playground into a "play-ground" skate park, introducing a more dynamic, youth-oriented public space.</li>
                  <li className="text-white"><strong className="text-white">Form Development:</strong> Shaped the library by extruding the site and carving out large circular forms to create distinct masses, open-air courtyards, and interconnected walkways.</li>
                  <li className="text-white"><strong className="text-white">Multi-Level Spatial Flow:</strong> Divided the building into upper and ground floor zones to encourage exploration and layered movement through the space.</li>
                </ul>
              </section>
              <section>
                <h3 className="text-2xl font-semibold mb-2 text-red-400 text-white" style={{color: 'white'}}>Design Focus</h3>
                <ul className="space-y-3 list-disc pl-5 text-white">
                  <li className="text-white">Integrating play, learning, and community into a cohesive spatial experience</li>
                  <li className="text-white">Designing movement pathways inspired by playground circulation</li>
                  <li className="text-white">Blurring boundaries between traditional educational spaces and recreational environments</li>
                </ul>
              </section>
              <section>
                <h3 className="text-2xl font-semibold mb-2 text-red-400 text-white" style={{color: 'white'}}>Project Impact</h3>
                <p className="text-white">
                  This project showcases my ability to evolve design concepts through iterative research, circulation studies, and playful form-making, resulting in a vibrant, community-centered space that challenges conventional library design.
                </p>
              </section>
            </div>
          </div>
        </div>
      </div>
    </>
  );
} 