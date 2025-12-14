"use client";

import ImageSlideshow from "@/components/core/ImageSlideshow";

const images = [
  "/trainar/8.png",
  "/trainar/9.png",
  "/trainar/10.png",
  "/trainar/11.png",
  "/trainar/13.png",
  "/trainar/14.png",
  "/trainar/15.png",
  "/trainar/16.png",
  "/trainar/17.png",
];

export default function TrainarPage() {
  return (
    <>
      <div className="h-32" />
      <div
        className="min-h-screen bg-black text-white py-12 flex justify-center items-center mt-16 md:mt-24 mb-12"
        style={{ marginLeft: 'auto', marginRight: 'auto', marginBottom: '50px', maxWidth: '1500px' }}
      >
        <div className="w-full flex flex-col lg:flex-row gap-10 items-start justify-center" style={{maxWidth: '1400px'}}>
          {/* Left column: Slideshow and Video - order-2 on mobile, order-1 on desktop */}
          <div className="flex flex-col items-center justify-center flex-1 w-full min-w-[400px] max-w-[700px] order-2 lg:order-1">
            <ImageSlideshow images={images} altPrefix="TRAINAR project image" />
            <video
              src="/trainar/12.mp4"
              controls
              muted
              className="w-full max-w-md object-contain rounded-lg border border-gray-700 shadow-lg mt-6"
              style={{ minHeight: '320px' }}
            >
              Your browser does not support the video tag.
            </video>
          </div>
          {/* Right column: Content - order-1 on mobile, order-2 on desktop */}
          <div className="flex flex-col items-start text-left space-y-6 flex-1 min-w-[320px] max-w-[520px] order-1 lg:order-2">
            <div className="space-y-1">
              <p className="text-sm text-gray-300">Spring 2024</p>
              <h1 className="text-4xl md:text-6xl font-bold text-white">TRAINAR</h1>
            </div>
            <p className="text-lg text-gray-200 mt-2">
              Developed TRAINAR, an augmented reality fitness application that provides users with real-time workout guidance, form correction, and personalized training routines through immersive AR overlays and motion tracking.
            </p>
            <div className="space-y-10 max-w-full w-full">
              {/* Role & Objective */}
              <section>
                <div className="flex items-center gap-3 mb-2">
                  <span className="h-6 w-1 rounded bg-gradient-to-b from-pink-500 to-red-400" />
                  <h2 className="text-2xl font-bold text-pink-400 tracking-tight">Role & Objective</h2>
                </div>
                <ul className="space-y-2 pl-6 list-none">
                  <li className="flex items-start gap-2"><span className="mt-1 text-pink-400">•</span><span className="text-white">Served as <span className="font-semibold">Lead AR Developer</span> to create an augmented reality fitness training application.</span></li>
                  <li className="flex items-start gap-2"><span className="mt-1 text-pink-400">•</span><span className="text-white">Aimed to provide users with real-time workout guidance and form correction through AR technology.</span></li>
                  <li className="flex items-start gap-2"><span className="mt-1 text-pink-400">•</span><span className="text-white">Targeted creating an accessible fitness solution that enables users to exercise effectively at home with professional guidance.</span></li>
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
                  <li className="flex items-start gap-2"><span className="mt-1 text-blue-300">•</span><span className="text-white">Developed the AR application using <span className="font-bold">Unity</span> with motion tracking and spatial computing capabilities.</span></li>
                  <li className="flex items-start gap-2"><span className="mt-1 text-blue-300">•</span><span className="text-white">Implemented <span className="font-bold">real-time pose estimation and form analysis</span> to provide instant feedback to users.</span></li>
                  <li className="flex items-start gap-2"><span className="mt-1 text-blue-300">•</span><span className="text-white">Designed interactive AR overlays that guide users through exercises with visual cues and instructions.</span></li>
                  <li className="flex items-start gap-2"><span className="mt-1 text-blue-300">•</span><span className="text-white">Created personalized workout routines that adapt to user fitness levels and progress.</span></li>
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
                  <li className="flex items-start gap-2"><span className="mt-1 text-green-300">•</span><span className="text-white">Delivered a functional AR fitness application that provides professional-grade workout guidance.</span></li>
                  <li className="flex items-start gap-2"><span className="mt-1 text-green-300">•</span><span className="text-white">Enabled users to exercise effectively at home with real-time form correction and personalized training.</span></li>
                  <li className="flex items-start gap-2"><span className="mt-1 text-green-300">•</span><span className="text-white">Demonstrated the potential of AR technology to transform home fitness experiences.</span></li>
                </ul>
              </section>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

