"use client";

import ImageSlideshow from "@/components/core/ImageSlideshow";

const images = [
  "/eclipse/1.png",
  "/eclipse/2.png",
  "/eclipse/3.png",
  "/eclipse/4.png",
  "/eclipse/5.png",
  "/eclipse/6.png",
  "/eclipse/7.png",
  "/eclipse/8.png",
  "/eclipse/9.png",
  "/eclipse/10.png",
  "/eclipse/11.png",
  "/eclipse/12.png",
  "/eclipse/13.png",
  "/eclipse/14.png",
  "/eclipse/15.png",
  "/eclipse/16.png",
  "/eclipse/17.png",
];

const renders = [
  {
    src: "/eclipse/day_render.jpg",
    caption: "Day Cafe Render",
  },
  {
    src: "/eclipse/night_render.jpg",
    caption: "Night Cafe/Bar Render",
  },
  {
    src: "/eclipse/SPEAKEASY.jpg",
    caption: "Speakeasy Render",
  },
];

export default function EclipsePage() {
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
            <ImageSlideshow images={images} altPrefix="Eclipse project image" />
          </div>
          {/* Right column: Centered content */}
          <div className="flex flex-col items-start text-left space-y-6 flex-1 min-w-[320px] max-w-[520px]">
            <div className="space-y-1">
              <p className="text-sm text-gray-300">Spring 2025</p>
              <h1 className="text-4xl md:text-6xl font-bold">Eclipse</h1>
            </div>
            <div className="space-y-10 max-w-full w-full">
              {/* Role & Objective */}
              <section>
                <div className="flex items-center gap-3 mb-2">
                  <span className="h-6 w-1 rounded bg-gradient-to-b from-pink-500 to-red-400" />
                  <h2 className="text-2xl font-bold text-pink-400 tracking-tight">Role & Objective</h2>
                </div>
                <ul className="space-y-2 pl-6 list-none">
                  <li className="flex items-start gap-2"><span className="mt-1 text-pink-400">•</span><span>Served as <span className="font-semibold text-white">Lead Designer</span> for this futuristic café and bar concept, developing spatial layout, elevations, and all visual renders.</span></li>
                  <li className="flex items-start gap-2"><span className="mt-1 text-pink-400">•</span><span>Aimed to create an experiential café & bar with immersive concept design that pushes creative and technical boundaries.</span></li>
                  <li className="flex items-start gap-2"><span className="mt-1 text-pink-400">•</span><span>Targeted the design of transformative spaces that immerse users in narrative-driven, unforgettable environments.</span></li>
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
                  <li className="flex items-start gap-2"><span className="mt-1 text-blue-300">•</span><span>Integrated cutting-edge holographic displays for dynamic, culture-driven narratives and storytelling experiences.</span></li>
                  <li className="flex items-start gap-2"><span className="mt-1 text-blue-300">•</span><span>Crafted a multi-sensory environment that blends sound, visuals, and taste, including transforming tea-to-cocktail beverages.</span></li>
                  <li className="flex items-start gap-2"><span className="mt-1 text-blue-300">•</span><span>Designed intuitive access points for personalized, AI-driven user interactions throughout the space.</span></li>
                  <li className="flex items-start gap-2"><span className="mt-1 text-blue-300">•</span><span>Created adaptable spaces that shift to support different times of day and user needs through morphing architecture.</span></li>
                  <li className="flex items-start gap-2"><span className="mt-1 text-blue-300">•</span><span>Developed seamless fusion of thematic ambiance and functional flow throughout the design.</span></li>
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
                  <li className="flex items-start gap-2"><span className="mt-1 text-green-300">•</span><span>Successfully created story-driven, sensory-rich experiences that enhance user engagement and immersion.</span></li>
                  <li className="flex items-start gap-2"><span className="mt-1 text-green-300">•</span><span>Demonstrated ability to push creative and technical boundaries in experiential design.</span></li>
                  <li className="flex items-start gap-2"><span className="mt-1 text-green-300">•</span><span>Established advanced technology integration methods that enhance user engagement in physical spaces.</span></li>
                  <li className="flex items-start gap-2"><span className="mt-1 text-green-300">•</span><span>Created a foundation for future immersive space design with proven success in narrative-driven environments.</span></li>
                </ul>
              </section>
            </div>
          </div>
        </div>
      </div>
      {/* Renders Section */}
      <div className="w-full flex flex-col items-center justify-center mt-8 mb-12">
        <div className="w-full flex flex-col md:flex-row gap-8 items-start justify-center" style={{ maxWidth: '1800px' }}>
          {renders.map((render, idx) => (
            <div key={idx} className="flex flex-col items-center w-full md:w-1/3">
              <img src={render.src} alt={render.caption} className="w-full object-contain" style={{ background: 'white', borderRadius: 8, border: '1px solid #e5e5e5', maxHeight: 400 }} />
              <span className="text-base md:text-lg text-gray-400 mt-2" style={{ fontFamily: 'monospace', letterSpacing: 1 }}>{render.caption}</span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
} 