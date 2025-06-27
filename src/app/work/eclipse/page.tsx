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
        className="min-h-screen bg-black text-white py-12 flex justify-center mt-16 md:mt-24 mb-12"
        style={{ marginLeft: '100px', marginRight: '100px', marginBottom: '50px' }}
      >
        <div className="max-w-full w-full grid grid-cols-1 lg:grid-cols-[900px_1fr] gap-16">
          {/* Left column: Slideshow */}
          <div className="flex flex-col items-start w-full">
            <div className="w-full">
              <ImageSlideshow
                images={images}
                altPrefix="Eclipse project image"
              />
            </div>
          </div>
          {/* Right column: Centered content */}
          <div className="flex flex-col items-center text-center space-y-6 justify-center">
            <div className="space-y-1">
              <p className="text-sm text-gray-300">Spring 2025</p>
              <h1 className="text-4xl md:text-6xl font-bold">Eclipse</h1>
            </div>
            <div className="space-y-4 text-left max-w-2xl w-full">
              <p className="text-lg font-medium">
                <em>Experiential Café & Bar – Immersive Concept Design</em><br />
                As the Lead Designer for this futuristic café and bar concept, I developed the spatial layout, elevations, and all visual renders to bring the experience to life.
              </p>
              <section>
                <h2 className="text-xl font-semibold mt-4">Key Features</h2>
                <ul className="list-disc list-inside space-y-1">
                  <li><b>Holographic Storytelling:</b> Integrated cutting-edge holographic displays for dynamic, culture-driven narratives.</li>
                  <li><b>Multi-Sensory Design:</b> Crafted an environment that blends sound, visuals, and taste, including transforming tea-to-cocktail beverages.</li>
                  <li><b>Interactive AI Touchpoints:</b> Designed intuitive access points for personalized, AI-driven user interactions.</li>
                  <li><b>Morphing Architecture:</b> Created adaptable spaces that shift to support different times of day and user needs.</li>
                </ul>
              </section>
              <section>
                <h2 className="text-xl font-semibold mt-4">Design Focus</h2>
                <ul className="list-disc list-inside space-y-1">
                  <li>Seamless fusion of thematic ambiance and functional flow</li>
                  <li>Story-driven, sensory-rich experiences</li>
                  <li>Advanced technology integration to enhance user engagement</li>
                </ul>
              </section>
              <section>
                <h2 className="text-xl font-semibold mt-4">Project Impact</h2>
                <p>
                  This project demonstrates my ability to push creative and technical boundaries to design transformative spaces that immerse users in narrative-driven, unforgettable environments.
                </p>
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