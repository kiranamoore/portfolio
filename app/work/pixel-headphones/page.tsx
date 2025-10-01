"use client";

export default function PixelHeadphonesPage() {
  return (
    <>
      <div className="h-32" />
      <div
        className="min-h-screen bg-black text-white py-12 flex justify-center mt-16 md:mt-24 mb-12"
        style={{ marginLeft: '100px', marginRight: '100px', marginBottom: '50px' }}
      >
        <div className="max-w-full w-full grid grid-cols-1 lg:grid-cols-[900px_1fr] gap-16">
          {/* Left column: Video */}
          <div className="flex flex-col items-start">
            <video
              src="/Pixel Headphones Demo.mp4"
              controls
              autoPlay
              loop
              muted
              className="w-full max-w-4xl aspect-[4/3] object-contain rounded-lg border border-gray-700 shadow-lg"
            />
            <div className="mt-6 space-y-4">
              <div className="text-center">
                <img
                  src="/pixel-snapcode.png"
                  alt="Pixel Headphones Snapcode"
                  className="w-full max-w-xs mx-auto rounded-lg border border-gray-700 shadow-lg"
                />
                <p className="text-sm text-gray-400 mt-2">
                  scan in snapchat to try
                </p>
              </div>
            </div>
          </div>
          {/* Right column: Centered content */}
          <div className="flex flex-col items-center text-center space-y-6">
            <div className="space-y-1">
              <p className="text-sm text-gray-300">Spring 2024</p>
              <h1 className="text-4xl md:text-6xl font-bold">Pixel Headphones</h1>
            </div>
            <p className="text-lg font-medium">
              Pixel Headphones – AR Customization Demo<br />
              Developed an augmented reality demo showcasing real-time headphone customization with dynamic color changes and interactive 3D model manipulation, demonstrating the potential for AR in product personalization.
            </p>
            <div className="space-y-10 text-left max-w-2xl w-full">
              {/* Role & Objective */}
              <section>
                <div className="flex items-center gap-3 mb-2">
                  <span className="h-6 w-1 rounded bg-gradient-to-b from-pink-500 to-red-400" />
                  <h2 className="text-2xl font-bold text-pink-400 tracking-tight">Role & Objective</h2>
                </div>
                <ul className="space-y-2 pl-6 list-none">
                  <li className="flex items-start gap-2"><span className="mt-1 text-pink-400">•</span><span>Served as <b>Sole Designer and Developer</b> for the Pixel Headphone Lens, an augmented reality experience built in Lens Studio and deployed on Snapchat.</span></li>
                  <li className="flex items-start gap-2"><span className="mt-1 text-pink-400">•</span><span>Aimed to create an AR fashion accessory experience that embodies a distinctive <b>game-inspired aesthetic</b> and playful visual style.</span></li>
                  <li className="flex items-start gap-2"><span className="mt-1 text-pink-400">•</span><span>Focused on developing a cohesive AR experience by designing all visual and interactive elements personally.</span></li>
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
                  <li className="flex items-start gap-2"><span className="mt-1 text-blue-300">•</span><span>Modeled a custom <b>3D pixelated headphone</b> and designed a pixel-style <b>start UI element</b> to establish the lens's gaming aesthetic.</span></li>
                  <li className="flex items-start gap-2"><span className="mt-1 text-blue-300">•</span><span>Created <b>2D face-anchored animated cheek stickers</b> to enhance the interactive fashion element and user engagement.</span></li>
                  <li className="flex items-start gap-2"><span className="mt-1 text-blue-300">•</span><span>Designed and animated <b>two 2D background environments</b> to add immersive context and dynamic visual layers to the experience.</span></li>
                  <li className="flex items-start gap-2"><span className="mt-1 text-blue-300">•</span><span>Developed and assembled the complete AR experience in <b>Lens Studio</b>, ensuring smooth performance and seamless integration on Snapchat.</span></li>
                  <li className="flex items-start gap-2"><span className="mt-1 text-blue-300">•</span><span>Managed the entire creative and technical pipeline, producing all assets independently to maintain a unified aesthetic vision.</span></li>
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
                  <li className="flex items-start gap-2"><span className="mt-1 text-green-300">•</span><span>Delivered a fully functional AR lens that offers users a fun, fashion-focused digital accessory experience with strong <b>game-inspired visual identity</b>.</span></li>
                  <li className="flex items-start gap-2"><span className="mt-1 text-green-300">•</span><span>Demonstrated proficiency in 3D modeling, 2D animation, and interactive AR development for social media platforms.</span></li>
                  <li className="flex items-start gap-2"><span className="mt-1 text-green-300">•</span><span>Showcased ability to produce and integrate diverse AR assets independently, from concept to deployment.</span></li>
                  <li className="flex items-start gap-2"><span className="mt-1 text-green-300">•</span><span>Expanded creative portfolio with a playful, visually distinctive AR project accessible directly through Snapchat via Snapcode.</span></li>
                </ul>
              </section>
            </div>
          </div>
        </div>
      </div>
    </>
  );
} 