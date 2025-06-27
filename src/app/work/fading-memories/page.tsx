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
        className="min-h-screen bg-black text-white py-12 flex justify-center mt-16 md:mt-24 mb-12"
        style={{ marginLeft: '100px', marginRight: '100px', marginBottom: '50px' }}
      >
        <div className="max-w-full w-full grid grid-cols-1 lg:grid-cols-[900px_1fr] gap-16">
          {/* Left column: Slideshow */}
          <div className="flex flex-col items-start w-full">
            <div className="w-full">
              <ImageSlideshow
                images={images}
                altPrefix="Fading Memories project image"
              />
            </div>
          </div>
          {/* Right column: Centered content */}
          <div className="flex flex-col items-center text-center space-y-6 justify-center">
            <div className="space-y-1">
              <p className="text-sm text-gray-300">Spring 2024</p>
              <h1 className="text-4xl md:text-6xl font-bold">Fading Memories</h1>
            </div>
            <div className="space-y-4 text-left max-w-2xl w-full">
              <p className="text-lg font-medium">
                <em>Fading Memories</em> – Cinematic Immersive Installation<br />
                A multi-sensory immersive experience exploring the distortion of memories over time, featuring collaborative works from University of Southern California students.
              </p>
              <section>
                <h2 className="text-xl font-semibold mt-4">Concept</h2>
                <p>
                  Fading Memories examines how memories fragment and warp through recollection. Three synchronized video clips are projected onto draped fabric sheets, creating layered visuals that distort naturally with the fabric's organic folds.
                </p>
              </section>
              <section>
                <h2 className="text-xl font-semibold mt-4">Spatial Design</h2>
                <p>
                  The enclosed space of suspended fabrics allows the audience to move freely, experiencing shifting perspectives as they walk through. The same video clip plays on all surfaces but appears increasingly warped, echoing how memories change as time passes.
                </p>
              </section>
              <section>
                <h2 className="text-xl font-semibold mt-4">Key Features</h2>
                <ul className="list-disc list-inside space-y-1">
                  <li><b>Fabric Projections:</b> Organic fabric shapes create visual distortions that reflect the fluid nature of memory.</li>
                  <li><b>Layered Synchronization:</b> Three synchronized clips played across varying surfaces.</li>
                  <li><b>Audience Movement:</b> Spatial interaction changes how the videos are perceived, making each experience unique.</li>
                </ul>
              </section>
              <section>
                <h2 className="text-xl font-semibold mt-4">Project Team</h2>
                <ul className="list-disc list-inside space-y-1">
                  <li><b>Project Lead:</b> Kirana Moore</li>
                  <li><b>Artists:</b> Amy Pan, Eileen Chen, Kirana Moore</li>
                  <li><b>Architectural Designers:</b> Kirana Moore, Max Huerta, Raziel Caro Ramirez</li>
                  <li><b>Video Editor:</b> Dalton Flynn</li>
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