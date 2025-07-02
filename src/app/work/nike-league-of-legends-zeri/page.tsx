"use client";

export default function NikeLeagueOfLegendsZeriPage() {
  return (
    <>
      <div className="h-32" />
      <div
        className="min-h-screen bg-black text-white py-12 flex justify-center items-center mt-16 md:mt-24 mb-12"
        style={{ marginLeft: 'auto', marginRight: 'auto', marginBottom: '50px', maxWidth: '1400px' }}
      >
        <div className="w-full flex flex-col lg:flex-row gap-16 items-center justify-center" style={{maxWidth: '1200px'}}>
          {/* Left column: Hero image and videos */}
          <div className="flex flex-col items-center justify-center flex-1 w-full gap-6 max-w-[520px]">
            <img
              src="/zeri.jpg"
              alt="Nike x League of Legends Zeri hero image"
              className="rounded-lg w-full object-cover max-w-[500px]"
            />
            <div className="flex flex-col items-center w-full gap-6">
              <div className="flex flex-col items-center w-full">
                <h3 className="text-xl font-semibold mb-4 text-white">Animation</h3>
                <video
                  controls
                  autoPlay
                  loop
                  muted
                  className="max-w-[500px] rounded-lg mx-auto"
                >
                  <source src="/zeri-animation.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
              <div className="flex flex-col items-center w-full">
                <h3 className="text-xl font-semibold mb-4 text-white">Animatic</h3>
                <video
                  controls
                  autoPlay
                  loop
                  muted
                  className="max-w-[500px] rounded-lg mx-auto"
                >
                  <source src="/animatic.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>
          {/* Right column: Content */}
          <div className="flex flex-col items-center text-center space-y-6 flex-1">
            <div className="space-y-1">
              <p className="text-sm text-gray-300">Spring 2024</p>
              <h1 className="text-4xl md:text-6xl font-bold">Nike x League of Legends Skin Collaboration: Zeri</h1>
            </div>
            <div className="space-y-10 text-left max-w-2xl w-full">
              {/* Role & Objective */}
              <section>
                <div className="flex items-center gap-3 mb-2">
                  <span className="h-6 w-1 rounded bg-gradient-to-b from-pink-500 to-red-400" />
                  <h2 className="text-2xl font-bold text-pink-400 tracking-tight">Role & Objective</h2>
                </div>
                <ul className="space-y-2 pl-6 list-none">
                  <li className="flex items-start gap-2"><span className="mt-1 text-pink-400">•</span><span>Served as <span className="font-semibold text-white">Concept & Visual Development Lead</span> for a cross-industry collaboration between Nike and Riot Games' League of Legends.</span></li>
                  <li className="flex items-start gap-2"><span className="mt-1 text-pink-400">•</span><span>Aimed to create a digital fashion collaboration that bridges gaming, fashion, and urban culture through visual storytelling.</span></li>
                  <li className="flex items-start gap-2"><span className="mt-1 text-pink-400">•</span><span>Targeted fusing Nike's active brand identity with Zeri's electric, fast-paced gameplay in an immersive cross-platform experience.</span></li>
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
                  <li className="flex items-start gap-2"><span className="mt-1 text-blue-300">•</span><span>Designed custom <span className="font-bold">Character Splash Art</span> showcasing the Nike-inspired skin, emphasizing energy, motion, and electricity.</span></li>
                  <li className="flex items-start gap-2"><span className="mt-1 text-blue-300">•</span><span>Created detailed <span className="font-bold">3D Fashion Modeling</span> in Marvelous Designer, aligning Nike's athletic aesthetic with in-game styling.</span></li>
                  <li className="flex items-start gap-2"><span className="mt-1 text-blue-300">•</span><span>Produced <span className="font-bold">Mixed Media Animation</span> featuring real-life footage shot in Downtown Los Angeles, blending digital and physical worlds.</span></li>
                  <li className="flex items-start gap-2"><span className="mt-1 text-blue-300">•</span><span>Developed <span className="font-bold">In-Game Store Integration</span> mock-up demonstrating how the skin would appear within League of Legends' store.</span></li>
                  <li className="flex items-start gap-2"><span className="mt-1 text-blue-300">•</span><span>Collaborated with Nike .SWOOSH Digital Branding Team and Riot Games League of Legends for authentic brand integration.</span></li>
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
                  <li className="flex items-start gap-2"><span className="mt-1 text-green-300">•</span><span>Successfully created an immersive, cross-industry experience that combines fashion, gaming, and digital storytelling.</span></li>
                  <li className="flex items-start gap-2"><span className="mt-1 text-green-300">•</span><span>Demonstrated ability to effectively collaborate with real-world brands to create consumer-driven, co-creative opportunities.</span></li>
                  <li className="flex items-start gap-2"><span className="mt-1 text-green-300">•</span><span>Established visual storytelling through movement, color, and energy that bridges multiple platforms and audiences.</span></li>
                  <li className="flex items-start gap-2"><span className="mt-1 text-green-300">•</span><span>Delivered a complete concept package including splash art, 3D modeling, animation, and store integration mock-ups.</span></li>
                </ul>
              </section>
            </div>
          </div>
        </div>
      </div>
    </>
  );
} 