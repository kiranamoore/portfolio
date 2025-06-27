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
        className="min-h-screen bg-black text-white py-12 flex justify-center mt-16 md:mt-24 mb-12"
        style={{ marginLeft: '100px', marginRight: '100px', marginBottom: '50px' }}
      >
        <div className="max-w-full w-full grid grid-cols-1 lg:grid-cols-[900px_1fr] gap-16">
          {/* Left column: Slideshow */}
          <div className="flex flex-col items-start w-full">
            <div className="w-full">
              <ImageSlideshow
                images={images}
                altPrefix="The Traveler project image"
              />
            </div>
          </div>
          {/* Right column: Centered content */}
          <div className="flex flex-col items-center text-center space-y-6 justify-center">
            <div className="space-y-1">
              <p className="text-sm text-gray-300">Spring 2025</p>
              <h1 className="text-4xl md:text-6xl font-bold">The Traveler</h1>
            </div>
            <div className="space-y-4 text-left max-w-2xl w-full">
              <p className="text-lg font-medium">
                <em>The Traveler</em> – Digital Living Space Design<br />
                The Traveler is a 3D digital model created in Rhinoceros 3D as part of my Constructing Experiences class. This project reimagines my ideal living space as a whimsical, sunlight-filled environment designed to inspire creativity and comfort.
              </p>
              <section>
                <h2 className="text-xl font-semibold mt-4">Key Design Elements</h2>
                <ul className="list-disc list-inside space-y-1">
                  <li><b>First Floor – Social Hub:</b> Open layout with a lowered kitchen connected by a window to a conversation pit, encouraging natural flow and connection.</li>
                  <li><b>Second Floor – Private Loft:</b> Quiet retreat with large windows framing nature and curtains for optional privacy.</li>
                  <li><b>Basement – Creative Studio:</b> A painting space with curved, organic walls and a large daylight window to enhance focus and calmness.</li>
                  <li><b>Restroom – Restorative Space:</b> Custom bathtub with a high window to create a peaceful, light-filled sanctuary.</li>
                </ul>
              </section>
              <section>
                <h2 className="text-xl font-semibold mt-4">Design Focus</h2>
                <ul className="list-disc list-inside space-y-1">
                  <li>Balancing functionality with personal, emotional spaces</li>
                  <li>Seamless transitions between social and private zones</li>
                  <li>Using natural light as a core design material to elevate mood and creativity</li>
                </ul>
              </section>
              <section>
                <h2 className="text-xl font-semibold mt-4">Project Impact</h2>
                <p>
                  The Traveler reflects my ability to design spaces that feel both purposeful and emotionally resonant—spaces that support living, hosting, and creating in equal measure.
                </p>
              </section>
            </div>
          </div>
        </div>
      </div>
    </>
  );
} 