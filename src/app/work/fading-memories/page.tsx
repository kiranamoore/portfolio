"use client";

import ImageSlideshow from "@/components/core/ImageSlideshow";

const images = [
  "/fading-memories/1.JPG",
  "/fading-memories/1.5.JPG",
  "/fading-memories/2.JPG",
  "/fading-memories/3.JPG",
  "/fading-memories/4.JPG",
  "/fading-memories/5.JPG",
  "/fading-memories/6.JPG",
];

export default function FadingMemoriesPage() {
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
            <ImageSlideshow images={images} altPrefix="Fading Memories project image" />
          </div>
          {/* Right column: Centered content */}
          <div className="flex flex-col items-start text-left space-y-6 flex-1 min-w-[320px] max-w-[520px]">
            <div className="space-y-1">
              <p className="text-sm text-gray-300">Spring 2024</p>
              <h1 className="text-4xl md:text-6xl font-bold">Fading Memories</h1>
            </div>
            <div className="space-y-10 max-w-full w-full">
              {/* Role & Objective */}
              <section>
                <div className="flex items-center gap-3 mb-2">
                  <span className="h-6 w-1 rounded bg-gradient-to-b from-pink-500 to-red-400" />
                  <h2 className="text-2xl font-bold text-pink-400 tracking-tight">Role & Objective</h2>
                </div>
                <ul className="space-y-2 pl-6 list-none">
                  <li className="flex items-start gap-2"><span className="mt-1 text-pink-400">•</span><span>Served as <span className="font-semibold text-white">Project Lead and Lead Designer</span> for a multi-sensory immersive installation.</span></li>
                  <li className="flex items-start gap-2"><span className="mt-1 text-pink-400">•</span><span>Aimed to create an experience exploring the distortion of memories over time through collaborative works.</span></li>
                  <li className="flex items-start gap-2"><span className="mt-1 text-pink-400">•</span><span>Targeted examining how memories fragment and warp through recollection in an immersive spatial environment.</span></li>
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
                  <li className="flex items-start gap-2"><span className="mt-1 text-blue-300">•</span><span>Designed three synchronized video clips projected onto draped fabric sheets, creating layered visuals that distort naturally.</span></li>
                  <li className="flex items-start gap-2"><span className="mt-1 text-blue-300">•</span><span>Created an enclosed space of suspended fabrics allowing audience movement and shifting perspectives.</span></li>
                  <li className="flex items-start gap-2"><span className="mt-1 text-blue-300">•</span><span>Implemented organic fabric shapes that create visual distortions reflecting the fluid nature of memory.</span></li>
                  <li className="flex items-start gap-2"><span className="mt-1 text-blue-300">•</span><span>Collaborated with a team of artists, architectural designers, and video editors to bring the concept to life.</span></li>
                  <li className="flex items-start gap-2"><span className="mt-1 text-blue-300">•</span><span>Designed spatial interaction that changes how videos are perceived, making each experience unique.</span></li>
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
                  <li className="flex items-start gap-2"><span className="mt-1 text-green-300">•</span><span>Successfully created a cinematic immersive installation that explores memory distortion through multi-sensory experience.</span></li>
                  <li className="flex items-start gap-2"><span className="mt-1 text-green-300">•</span><span>Demonstrated ability to lead collaborative projects involving artists, designers, and technical specialists.</span></li>
                  <li className="flex items-start gap-2"><span className="mt-1 text-green-300">•</span><span>Established a model for spatial design that allows audience movement to change perception of synchronized content.</span></li>
                  <li className="flex items-start gap-2"><span className="mt-1 text-green-300">•</span><span>Created a foundation for future immersive installations that explore psychological themes through physical space.</span></li>
                </ul>
              </section>
            </div>
          </div>
        </div>
      </div>
      {/* Two videos side by side */}
      <div className="w-full flex flex-col items-center justify-center mt-8 mb-8">
        <div className="w-full flex flex-col md:flex-row gap-8 items-start justify-center" style={{ maxWidth: '1200px' }}>
          <video src="/fading-memories/video1.mov" controls className="w-full md:w-1/2 object-contain rounded-lg border border-gray-700 shadow-lg" />
          <video src="/fading-memories/video2.mov" controls className="w-full md:w-1/2 object-contain rounded-lg border border-gray-700 shadow-lg" />
        </div>
        <span className="text-base md:text-lg text-gray-400 mt-2 mb-4" style={{ fontFamily: 'monospace', letterSpacing: 1 }}>
          videos from the built experience
        </span>
      </div>
      {/* 25px vertical space */}
      <div style={{ height: '25px' }} />
      {/* Three OPEX clips in a row */}
      <div className="w-full flex flex-col items-center justify-center mt-4 mb-12">
        <div className="w-full flex flex-col md:flex-row gap-8 items-start justify-center" style={{ maxWidth: '1400px' }}>
          <video src="/fading-memories/OPEX CLIP1.mp4" controls className="w-full md:w-1/3 object-contain rounded-lg border border-gray-700 shadow-lg" />
          <video src="/fading-memories/OPEX CLIP2.mp4" controls className="w-full md:w-1/3 object-contain rounded-lg border border-gray-700 shadow-lg" />
          <video src="/fading-memories/OPEX CLIP3.mp4" controls className="w-full md:w-1/3 object-contain rounded-lg border border-gray-700 shadow-lg" />
        </div>
        <span className="text-base md:text-lg text-gray-400 mt-2 mb-4" style={{ fontFamily: 'monospace', letterSpacing: 1 }}>
          projected looping visuals
        </span>
        <div style={{ height: '25px' }} />
      </div>
    </>
  );
} 