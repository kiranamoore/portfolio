"use client";

import ImageSlideshow from "@/components/core/ImageSlideshow";

const images = [
  "/traveler/1.png",
  "/traveler/2.png",
  "/traveler/3.png",
  "/traveler/4.png",
  "/traveler/5.png",
  "/traveler/6.png",
  "/traveler/7.png",
  "/traveler/8.png",
  "/traveler/9.png",
  "/traveler/10.png",
];

export default function TheTravelerPage() {
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
            <ImageSlideshow images={images} altPrefix="The Traveler project image" />
          </div>
          {/* Right column: Centered content */}
          <div className="flex flex-col items-start text-left space-y-6 flex-1 min-w-[320px] max-w-[520px]">
            <div className="space-y-1">
              <p className="text-sm text-gray-300">Spring 2025</p>
              <h1 className="text-4xl md:text-6xl font-bold">The Traveler</h1>
            </div>
            <div className="space-y-8 max-w-full w-full">
              <section>
                <div className="flex items-center gap-3 mb-2">
                  <span className="h-6 w-1 rounded bg-gradient-to-b from-pink-500 to-red-400" />
                  <h2 className="text-2xl font-bold text-pink-400 tracking-tight">Project Overview</h2>
                </div>
                <ul className="space-y-2 pl-6 list-none">
                  <li className="flex items-start gap-2"><span className="mt-1 text-pink-400">•</span><span><em>The Traveler</em> – Digital Living Space Design</span></li>
                  <li className="flex items-start gap-2"><span className="mt-1 text-pink-400">•</span><span>The Traveler is a 3D digital model created in Rhinoceros 3D as part of my Constructing Experiences class. This project reimagines my ideal living space as a whimsical, sunlight-filled environment designed to inspire creativity and comfort.</span></li>
                </ul>
              </section>
              <div className="flex items-center gap-3 mb-2 mt-6">
                <span className="h-6 w-1 rounded bg-gradient-to-b from-blue-400 to-cyan-400" />
                <h3 className="text-xl font-bold text-blue-300 tracking-tight">Key Design Elements</h3>
              </div>
              <ul className="space-y-2 pl-6 list-none">
                <li className="flex items-start gap-2"><span className="mt-1 text-blue-300">•</span><span><b>First Floor – Social Hub:</b> Open layout with a lowered kitchen connected by a window to a conversation pit, encouraging natural flow and connection.</span></li>
                <li className="flex items-start gap-2"><span className="mt-1 text-blue-300">•</span><span><b>Second Floor – Private Loft:</b> Quiet retreat with large windows framing nature and curtains for optional privacy.</span></li>
                <li className="flex items-start gap-2"><span className="mt-1 text-blue-300">•</span><span><b>Basement – Creative Studio:</b> A painting space with curved, organic walls and a large daylight window to enhance focus and calmness.</span></li>
                <li className="flex items-start gap-2"><span className="mt-1 text-blue-300">•</span><span><b>Restroom – Restorative Space:</b> Custom bathtub with a high window to create a peaceful, light-filled sanctuary.</span></li>
              </ul>
              <div className="flex items-center gap-3 mb-2 mt-6">
                <span className="h-6 w-1 rounded bg-gradient-to-b from-green-400 to-emerald-500" />
                <h3 className="text-xl font-bold text-green-300 tracking-tight">Design Focus</h3>
              </div>
              <ul className="space-y-2 pl-6 list-none">
                <li className="flex items-start gap-2"><span className="mt-1 text-green-300">•</span><span>Balancing functionality with personal, emotional spaces</span></li>
                <li className="flex items-start gap-2"><span className="mt-1 text-green-300">•</span><span>Seamless transitions between social and private zones</span></li>
                <li className="flex items-start gap-2"><span className="mt-1 text-green-300">•</span><span>Using natural light as a core design material to elevate mood and creativity</span></li>
              </ul>
              <div className="flex items-center gap-3 mb-2 mt-6">
                <span className="h-6 w-1 rounded bg-gradient-to-b from-yellow-400 to-orange-400" />
                <h3 className="text-xl font-bold text-yellow-300 tracking-tight">Project Impact</h3>
              </div>
              <ul className="space-y-2 pl-6 list-none">
                <li className="flex items-start gap-2"><span className="mt-1 text-yellow-300">•</span><span>The Traveler reflects my ability to design spaces that feel both purposeful and emotionally resonant—spaces that support living, hosting, and creating in equal measure.</span></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
} 