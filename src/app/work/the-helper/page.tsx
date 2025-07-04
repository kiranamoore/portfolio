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
            <p className="text-lg text-gray-200 mt-2">
              Designed a trauma-informed care center for young children in the foster system, creating a safe and supportive spatial concept that balances California courthouse requirements with emotional well-being through empathetic, user-centered design.
            </p>
            <div className="space-y-8 max-w-full w-full">
              {/* Role & Objective */}
              <section>
                <div className="flex items-center gap-3 mb-2">
                  <span className="h-6 w-1 rounded bg-gradient-to-b from-pink-500 to-red-400" />
                  <h2 className="text-2xl font-bold text-pink-400 tracking-tight">Role & Objective</h2>
                </div>
                <ul className="space-y-2 pl-6 list-none">
                  <li className="flex items-start gap-2"><span className="mt-1 text-pink-400">•</span><span><span className="font-bold">Led spatial design</span> for The Helper, a trauma-informed temporary care center created to support young children in the foster system within the constraints of California courthouse regulations.</span></li>
                  <li className="flex items-start gap-2"><span className="mt-1 text-pink-400">•</span><span>Tasked with developing a functional and emotionally supportive environment that prioritizes child safety, comfort, and well-being through user-centered, trauma-informed design principles.</span></li>
                </ul>
              </section>
              <div className="flex items-center gap-3 mb-2 mt-6">
                <span className="h-6 w-1 rounded bg-gradient-to-b from-blue-400 to-cyan-400" />
                <h3 className="text-xl font-bold text-blue-300 tracking-tight">Actions Taken</h3>
              </div>
              <ul className="space-y-2 pl-6 list-none">
                <li className="flex items-start gap-2"><span className="mt-1 text-blue-300">•</span><span><span className="font-bold">Designed the full spatial layout of the care center, including floor plan, section, and elevation drawings</span> using <span className="font-bold">Rhinoceros 3D</span>.</span></li>
                <li className="flex items-start gap-2"><span className="mt-1 text-blue-300">•</span><span><span className="font-bold">Created detailed architectural drawings and renderings</span> to visualize the design intent and communicate key programmatic zones.</span></li>
                <li className="flex items-start gap-2"><span className="mt-1 text-blue-300">•</span><span>Defined distinct spaces within the layout—including a play area, sensory room, reading nook, bonding room, and restorative restroom—each tailored to specific emotional and developmental needs.</span></li>
                <li className="flex items-start gap-2"><span className="mt-1 text-blue-300">•</span><span>Integrated trauma-informed elements such as curved, multipurpose furniture with no sharp edges, carpeted wooden floors for comfort and safety, and child-friendly aesthetics with privacy-aware window placements.</span></li>
                <li className="flex items-start gap-2"><span className="mt-1 text-blue-300">•</span><span>Collaborated with teammates to incorporate direct insights from interviews with former foster parent Lindsay Goodwin, ensuring that user needs directly shaped spatial and sensory decisions.</span></li>
              </ul>
              <div className="flex items-center gap-3 mb-2 mt-6">
                <span className="h-6 w-1 rounded bg-gradient-to-b from-green-400 to-emerald-500" />
                <h3 className="text-xl font-bold text-green-300 tracking-tight">Results & Impact</h3>
              </div>
              <ul className="space-y-2 pl-6 list-none">
                <li className="flex items-start gap-2"><span className="mt-1 text-green-300">•</span><span>Delivered a comprehensive <span className="font-bold">spatial concept</span> that demonstrates the ability to balance strict regulatory requirements with the emotional, developmental, and safety needs of young children in foster care.</span></li>
                <li className="flex items-start gap-2"><span className="mt-1 text-green-300">•</span><span><span className="font-bold">Showcased strong architectural design skills through technical drawings and environmental renderings</span> that support healing, play, and caregiver-child connection.</span></li>
                <li className="flex items-start gap-2"><span className="mt-1 text-green-300">•</span><span>Reinforced a trauma-informed design approach that transforms temporary institutional care into a space of comfort, agency, and emotional support.</span></li>
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