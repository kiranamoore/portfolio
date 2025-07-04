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
    src: "/day_render.JPG",
    caption: "Day Cafe Render",
  },
  {
    src: "/night_render.JPG",
    caption: "Night Cafe/Bar Render",
  },
  {
    src: "/SPEAKEASY.JPG",
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
            <p className="text-lg text-gray-200 mt-2">
              Developed the spatial layout, architectural drawings, and visual renders for Eclipse, a futuristic café and bar concept that fuses holographic storytelling, multi-sensory experiences, and adaptive design to create an immersive, narrative-driven environment.
            </p>
            <div className="space-y-10 max-w-full w-full">
              {/* Role & Objective */}
              <section>
                <div className="flex items-center gap-3 mb-2">
                  <span className="h-6 w-1 rounded bg-gradient-to-b from-pink-500 to-red-400" />
                  <h2 className="text-2xl font-bold text-pink-400 tracking-tight">Role & Objective</h2>
                </div>
                <ul className="space-y-2 pl-6 list-none">
                  <li className="flex items-start gap-2"><span className="mt-1 text-pink-400">•</span><span>Served as <span className="font-bold">Lead Designer</span> for Eclipse, a futuristic café and bar concept focused on creating immersive, narrative-driven environments.</span></li>
                  <li className="flex items-start gap-2"><span className="mt-1 text-pink-400">•</span><span>Aimed to develop an experiential space that pushes creative and technical boundaries through innovative design and advanced technology integration.</span></li>
                  <li className="flex items-start gap-2"><span className="mt-1 text-pink-400">•</span><span>Focused on crafting transformative spaces that engage multiple senses and immerse users in unforgettable, story-driven experiences.</span></li>
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
                  <li className="flex items-start gap-2"><span className="mt-1 text-blue-300">•</span><span>Designed the <span className="font-bold">floor plan</span>, <span className="font-bold">spatial layout</span>, <span className="font-bold">elevation drawings</span>, and produced all <span className="font-bold">visual renders</span> to communicate the concept's aesthetic and functional vision.</span></li>
                  <li className="flex items-start gap-2"><span className="mt-1 text-blue-300">•</span><span>Created a <span className="font-bold">multi-sensory environment</span> blending soundscapes, immersive visuals, and innovative beverage experiences, including transforming tea-to-cocktail drinks.</span></li>
                  <li className="flex items-start gap-2"><span className="mt-1 text-blue-300">•</span><span>Developed <span className="font-bold">intuitive access points</span> for personalized, AI-driven user interactions to enhance engagement throughout the space.</span></li>
                  <li className="flex items-start gap-2"><span className="mt-1 text-blue-300">•</span><span>Designed <span className="font-bold">adaptable spaces</span> capable of shifting atmospheres and configurations to support different times of day and diverse user needs, utilizing morphing architectural elements.</span></li>
                  <li className="flex items-start gap-2"><span className="mt-1 text-blue-300">•</span><span>Ensured a <span className="font-bold">seamless fusion of thematic ambiance and functional flow</span>, maintaining user comfort while heightening immersive impact.</span></li>
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
                  <li className="flex items-start gap-2"><span className="mt-1 text-green-300">•</span><span>Successfully delivered a <span className="font-bold">story-driven, sensory-rich concept</span> that elevates user engagement and immersion in hospitality environments.</span></li>
                  <li className="flex items-start gap-2"><span className="mt-1 text-green-300">•</span><span>Demonstrated the ability to <span className="font-bold">push creative and technical boundaries</span> in experiential spatial design.</span></li>
                  <li className="flex items-start gap-2"><span className="mt-1 text-green-300">•</span><span>Created a strong <span className="font-bold">foundation for future immersive space design</span>, showcasing the power of narrative-driven architecture and multi-sensory environments.</span></li>
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