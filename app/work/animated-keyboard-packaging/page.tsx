"use client";

export default function AnimatedKeyboardPackagingPage() {
  return (
    <>
      <div className="h-32" />
      <div
        className="min-h-screen bg-black text-white py-12 flex justify-center items-center mt-16 md:mt-24 mb-12"
        style={{ marginLeft: 'auto', marginRight: 'auto', marginBottom: '50px', maxWidth: '1400px' }}
      >
        <div className="w-full flex flex-col lg:flex-row gap-16 items-center justify-center" style={{maxWidth: '1200px'}}>
          {/* Left column: Video - order-2 on mobile, order-1 on desktop */}
          <div className="flex flex-col items-center justify-center flex-1 h-full order-2 lg:order-1">
            <video
              src="/keyboard_packaging_demo.MP4"
              controls
              muted
              className="w-full max-w-md object-contain rounded-lg border border-gray-700 shadow-lg"
              style={{ minHeight: '320px' }}
            >
              Your browser does not support the video tag.
            </video>
          </div>

          {/* Right column: Content - order-1 on mobile, order-2 on desktop */}
          <div className="flex flex-col items-center text-center space-y-6 flex-1 order-1 lg:order-2">
            <div className="space-y-1">
              <p className="text-sm text-gray-300">Fall 2024</p>
              <h1 className="text-4xl md:text-6xl font-bold text-white">Animated Keyboard Packaging</h1>
            </div>
            <p className="text-lg text-gray-200 mt-2">
              Created an augmented reality experience for HyperX keyboard packaging that brings the product to life through animated 3D models and interactive features, enhancing the unboxing experience and product engagement.
            </p>
            <div className="space-y-10 text-left max-w-2xl w-full">
              {/* Role & Objective */}
              <section>
                <div className="flex items-center gap-3 mb-2">
                  <span className="h-6 w-1 rounded bg-gradient-to-b from-pink-500 to-red-400" />
                  <h2 className="text-2xl font-bold text-pink-400 tracking-tight">Role & Objective</h2>
                </div>
                <ul className="space-y-2 pl-6 list-none">
                  <li className="flex items-start gap-2"><span className="mt-1 text-pink-400">•</span><span className="text-white">Served as <span className="font-semibold">Lead AR Developer</span> to create an animated AR experience for HyperX keyboard packaging.</span></li>
                  <li className="flex items-start gap-2"><span className="mt-1 text-pink-400">•</span><span className="text-white">Aimed to transform static packaging into an interactive experience that showcases product features through animation.</span></li>
                  <li className="flex items-start gap-2"><span className="mt-1 text-pink-400">•</span><span className="text-white">Targeted enhancing customer engagement during the unboxing experience and improving product understanding.</span></li>
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
                  <li className="flex items-start gap-2"><span className="mt-1 text-blue-300">•</span><span className="text-white">Developed the AR experience using <span className="font-bold">Lens Studio</span> for seamless mobile functionality.</span></li>
                  <li className="flex items-start gap-2"><span className="mt-1 text-blue-300">•</span><span className="text-white">Created 3D models and animations using <span className="font-bold">Blender</span> to showcase keyboard features.</span></li>
                  <li className="flex items-start gap-2"><span className="mt-1 text-blue-300">•</span><span className="text-white">Designed <span className="font-bold">animated sequences that highlight key product features</span> when users scan the packaging.</span></li>
                  <li className="flex items-start gap-2"><span className="mt-1 text-blue-300">•</span><span className="text-white">Implemented interactive UI elements that allow users to explore different keyboard functions and lighting effects.</span></li>
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
                  <li className="flex items-start gap-2"><span className="mt-1 text-green-300">•</span><span className="text-white">Successfully created an engaging AR experience that enhances the unboxing and product discovery process.</span></li>
                  <li className="flex items-start gap-2"><span className="mt-1 text-green-300">•</span><span className="text-white">Improved customer understanding of keyboard features through interactive animations and visual demonstrations.</span></li>
                  <li className="flex items-start gap-2"><span className="mt-1 text-green-300">•</span><span className="text-white">Extended the physical packaging into a digital interactive medium, creating a memorable brand experience.</span></li>
                </ul>
              </section>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

