"use client";

import ImageSlideshow from "@/components/core/ImageSlideshow";

const images = [
  "/helper1.png",
  "/helper2.png",
  "/helper3.png",
  "/helper4.png",
  "/helper5.png",
  "/helper6.png",
  "/helper7.png",
  "/helper8.png",
  "/helper9.png",
  "/helper10.png",
  "/helper11.png",
  "/helper12.png",
  "/helper13.png",
];

const artboards = [
  {
    src: "/plan-helper.png",
    caption: "Waiting Room Floor Plan",
  },
  {
    src: "/sensory-room.png",
    caption: "Sensory Room Section",
  },
  {
    src: "/reading-nook.png",
    caption: "Reading Room Elevation",
  },
];

export default function TheHelperPage() {
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
            <ImageSlideshow images={images} altPrefix="The Helper project image" />
          </div>
          {/* Right column: Centered content */}
          <div className="flex flex-col items-start text-left space-y-6 flex-1 min-w-[320px] max-w-[520px]">
            <div className="space-y-1">
              <p className="text-sm text-gray-300">Spring 2025</p>
              <h1 className="text-4xl md:text-6xl font-bold">The Helper</h1>
            </div>
            <div className="space-y-8 max-w-full w-full">
              <section>
                <div className="flex items-center gap-3 mb-2">
                  <span className="h-6 w-1 rounded bg-gradient-to-b from-pink-500 to-red-400" />
                  <h2 className="text-2xl font-bold text-pink-400 tracking-tight">Project Overview</h2>
                </div>
                <ul className="space-y-2 pl-6 list-none">
                  <li className="flex items-start gap-2"><span className="mt-1 text-pink-400">•</span><span><em>The Helper</em> – Trauma-Informed Care Center Design</span></li>
                  <li className="flex items-start gap-2"><span className="mt-1 text-pink-400">•</span><span>As part of a collaborative project, I designed the spatial layout for The Helper, a trauma-informed temporary care center for young children in the foster system. The space was built to meet California courthouse requirements while prioritizing child safety, comfort, and emotional support.</span></li>
                </ul>
              </section>
              <div className="flex items-center gap-3 mb-2 mt-6">
                <span className="h-6 w-1 rounded bg-gradient-to-b from-blue-400 to-cyan-400" />
                <h3 className="text-xl font-bold text-blue-300 tracking-tight">My Contributions</h3>
              </div>
              <ul className="space-y-2 pl-6 list-none">
                <li className="flex items-start gap-2"><span className="mt-1 text-blue-300">•</span><span><b>Spatial Planning & Architectural Drawings:</b> Created the floor plan, section, and elevation using Rhinoceros 3D.</span></li>
                <li className="flex items-start gap-2"><span className="mt-1 text-blue-300">•</span><span><b>User-Centered Design:</b> Integrated direct feedback from team interviews with former foster parent Lindsay Goodwin.</span></li>
              </ul>
              <div className="flex items-center gap-3 mb-2 mt-6">
                <span className="h-6 w-1 rounded bg-gradient-to-b from-green-400 to-emerald-500" />
                <h3 className="text-xl font-bold text-green-300 tracking-tight">Trauma-Informed Features</h3>
              </div>
              <ul className="space-y-2 pl-6 list-none">
                <li className="flex items-start gap-2"><span className="mt-1 text-green-300">•</span><span>Play area, sensory room, reading nook, and bonding spaces</span></li>
                <li className="flex items-start gap-2"><span className="mt-1 text-green-300">•</span><span>Multipurpose furniture with no sharp edges</span></li>
                <li className="flex items-start gap-2"><span className="mt-1 text-green-300">•</span><span>Carpeted wooden flooring for comfort and safety</span></li>
                <li className="flex items-start gap-2"><span className="mt-1 text-green-300">•</span><span>Child-friendly aesthetics with privacy-conscious window placements</span></li>
              </ul>
              <div className="flex items-center gap-3 mb-2 mt-6">
                <span className="h-6 w-1 rounded bg-gradient-to-b from-blue-400 to-cyan-400" />
                <h3 className="text-xl font-bold text-blue-300 tracking-tight">Design Focus</h3>
              </div>
              <ul className="space-y-2 pl-6 list-none">
                <li className="flex items-start gap-2"><span className="mt-1 text-blue-300">•</span><span>Safe, supportive environments for toddler development</span></li>
                <li className="flex items-start gap-2"><span className="mt-1 text-blue-300">•</span><span>Facilitating meaningful interactions between children and caregivers</span></li>
                <li className="flex items-start gap-2"><span className="mt-1 text-blue-300">•</span><span>Translating trauma-informed principles into functional design</span></li>
              </ul>
              <div className="flex items-center gap-3 mb-2 mt-6">
                <span className="h-6 w-1 rounded bg-gradient-to-b from-yellow-400 to-orange-400" />
                <h3 className="text-xl font-bold text-yellow-300 tracking-tight">Project Impact</h3>
              </div>
              <ul className="space-y-2 pl-6 list-none">
                <li className="flex items-start gap-2"><span className="mt-1 text-yellow-300">•</span><span>This project demonstrates my ability to design empathetic, user-driven spaces that balance regulatory constraints with the emotional and developmental needs of vulnerable children.</span></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* Artboards Section */}
      <div className="w-full flex flex-col items-center justify-center mt-8 mb-12">
        <div className="w-full flex flex-col md:flex-row gap-8 items-start justify-center" style={{ maxWidth: '1800px' }}>
          {artboards.map((art, idx) => (
            <div key={idx} className="flex flex-col items-center w-full md:w-1/3">
              <img src={art.src} alt={art.caption} className="w-full object-contain" style={{ background: 'white', borderRadius: 8, border: '1px solid #e5e5e5', maxHeight: 400 }} />
              <span className="text-base md:text-lg text-gray-400 mt-2" style={{ fontFamily: 'monospace', letterSpacing: 1 }}>{art.caption}</span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
} 