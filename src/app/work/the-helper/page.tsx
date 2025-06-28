"use client";

import ImageSlideshow from "@/components/core/ImageSlideshow";

const images = [
  "/helper/helper1.png",
  "/helper/helper2.png",
  "/helper/helper3.png",
  "/helper/helper4.png",
  "/helper/helper5.png",
  "/helper/helper6.png",
  "/helper/helper7.png",
  "/helper/helper8.png",
  "/helper/helper9.png",
  "/helper/helper10.png",
  "/helper/helper11.png",
  "/helper/helper12.png",
  "/helper/helper13.png",
];

const artboards = [
  {
    src: "/helper/plan-helper.png",
    caption: "Waiting Room Floor Plan",
  },
  {
    src: "/helper/sensory-room.png",
    caption: "Sensory Room Section",
  },
  {
    src: "/helper/reading-nook.png",
    caption: "Reading Room Elevation",
  },
];

export default function TheHelperPage() {
  return (
    <>
      <div className="h-32" />
      <div
        className="min-h-screen bg-black text-white py-12 flex justify-center mt-16 md:mt-24 mb-12"
        style={{ marginLeft: '100px', marginRight: '100px', marginBottom: '50px' }}
      >
        <div className="max-w-full w-full grid grid-cols-1 lg:grid-cols-[900px_1fr] gap-16">
          {/* Left column: Slideshow */}
          <div className="flex flex-col items-start w-full">
            <div className="w-full">
              <ImageSlideshow
                images={images}
                altPrefix="The Helper project image"
              />
            </div>
          </div>
          {/* Right column: Centered content */}
          <div className="flex flex-col items-center text-center space-y-6 justify-center">
            <div className="space-y-1">
              <p className="text-sm text-gray-300">Spring 2025</p>
              <h1 className="text-4xl md:text-6xl font-bold">The Helper</h1>
            </div>
            <div className="space-y-4 text-left max-w-2xl w-full">
              <p className="text-lg font-medium">
                <em>The Helper</em> – Trauma-Informed Care Center Design<br />
                As part of a collaborative project, I designed the spatial layout for The Helper, a trauma-informed temporary care center for young children in the foster system. The space was built to meet California courthouse requirements while prioritizing child safety, comfort, and emotional support.
              </p>
              <section>
                <h2 className="text-xl font-semibold mt-4">My Contributions</h2>
                <ul className="list-disc list-inside space-y-1">
                  <li><b>Spatial Planning & Architectural Drawings:</b> Created the floor plan, section, and elevation using Rhinoceros 3D.</li>
                  <li><b>User-Centered Design:</b> Integrated direct feedback from team interviews with former foster parent Lindsay Goodwin.</li>
                </ul>
              </section>
              <section>
                <h2 className="text-xl font-semibold mt-4">Trauma-Informed Features</h2>
                <ul className="list-disc list-inside space-y-1">
                  <li>Play area, sensory room, reading nook, and bonding spaces</li>
                  <li>Multipurpose furniture with no sharp edges</li>
                  <li>Carpeted wooden flooring for comfort and safety</li>
                  <li>Child-friendly aesthetics with privacy-conscious window placements</li>
                </ul>
              </section>
              <section>
                <h2 className="text-xl font-semibold mt-4">Design Focus</h2>
                <ul className="list-disc list-inside space-y-1">
                  <li>Safe, supportive environments for toddler development</li>
                  <li>Facilitating meaningful interactions between children and caregivers</li>
                  <li>Translating trauma-informed principles into functional design</li>
                </ul>
              </section>
              <section>
                <h2 className="text-xl font-semibold mt-4">Project Impact</h2>
                <p>
                  This project demonstrates my ability to design empathetic, user-driven spaces that balance regulatory constraints with the emotional and developmental needs of vulnerable children.
                </p>
              </section>
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