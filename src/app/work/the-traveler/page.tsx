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
            <p className="text-lg text-gray-200 mt-2">
              Designed a 3D digital model in Rhinoceros 3D for The Traveler, a whimsical, light-filled living space concept that balances social connection and personal retreat through thoughtful layouts, natural illumination, and emotionally resonant design.
            </p>
            <div className="space-y-8 max-w-full w-full">
              {/* Role & Objective */}
              <section>
                <div className="flex items-center gap-3 mb-2">
                  <span className="h-6 w-1 rounded bg-gradient-to-b from-pink-500 to-red-400" />
                  <h2 className="text-2xl font-bold text-pink-400 tracking-tight">Role & Objective</h2>
                </div>
                <ul className="space-y-2 pl-6 list-none">
                  <li className="flex items-start gap-2"><span className="mt-1 text-pink-400">•</span><span>Designed and modeled The Traveler, a 3D digital living space concept, as part of my Constructing Experiences class, aiming to translate personal ideals of creativity and comfort into spatial form.</span></li>
                  <li className="flex items-start gap-2"><span className="mt-1 text-pink-400">•</span><span>Focused on creating a whimsical, sunlight-filled environment that balances social connection and private retreat.</span></li>
                </ul>
              </section>
              <div className="flex items-center gap-3 mb-2 mt-6">
                <span className="h-6 w-1 rounded bg-gradient-to-b from-blue-400 to-cyan-400" />
                <h3 className="text-xl font-bold text-blue-300 tracking-tight">Actions Taken</h3>
              </div>
              <ul className="space-y-2 pl-6 list-none">
                <li className="flex items-start gap-2"><span className="mt-1 text-blue-300">•</span><span>Built a detailed 3D model in <span className="font-bold">Rhinoceros 3D,</span> designing distinct zones including a social hub, private loft, creative studio, and restorative restroom.</span></li>
                <li className="flex items-start gap-2"><span className="mt-1 text-blue-300">•</span><span>Used organic forms, open layouts, and strategic window placement to optimize natural light and enhance mood.</span></li>
                <li className="flex items-start gap-2"><span className="mt-1 text-blue-300">•</span><span>Prioritized <span className="font-bold">seamless transitions between social and private areas</span> to support multiple modes of living and creating.</span></li>
              </ul>
              <div className="flex items-center gap-3 mb-2 mt-6">
                <span className="h-6 w-1 rounded bg-gradient-to-b from-green-400 to-emerald-500" />
                <h3 className="text-xl font-bold text-green-300 tracking-tight">Results & Impact</h3>
              </div>
              <ul className="space-y-2 pl-6 list-none">
                <li className="flex items-start gap-2"><span className="mt-1 text-green-300">•</span><span>Delivered a digital space that reflects my ability to design environments blending functionality with emotional resonance.</span></li>
                <li className="flex items-start gap-2"><span className="mt-1 text-green-300">•</span><span>Demonstrated skills in <span className="font-bold">spatial design, 3D modeling, and crafting experiences</span> that support living, hosting, and creative pursuits.</span></li>
                <li className="flex items-start gap-2"><span className="mt-1 text-green-300">•</span><span>Showcased a personal design philosophy centered on light, comfort, and emotional well-being in physical spaces.</span></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
} 