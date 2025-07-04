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
            <p className="text-lg text-gray-200 mt-2">
              Led concept development and visual design for a Nike x League of Legends collaboration, creating a dynamic digital fashion skin for Zeri that fuses Nike's athletic brand identity with gaming aesthetics through splash art, 3D modeling, animation, and in-game integrations.
            </p>
            <div className="space-y-10 text-left max-w-2xl w-full">
              {/* Role & Objective */}
              <section>
                <div className="flex items-center gap-3 mb-2">
                  <span className="h-6 w-1 rounded bg-gradient-to-b from-pink-500 to-red-400" />
                  <h2 className="text-2xl font-bold text-pink-400 tracking-tight">Role & Objective</h2>
                </div>
                <ul className="space-y-2 pl-6 list-none">
                  <li className="flex items-start gap-2"><span className="mt-1 text-pink-400">•</span><span>Served as <b>Concept & Visual Development Lead</b> for a cross-industry project between Nike and Riot Games' League of Legends, focused on bridging fashion, gaming, and urban culture.</span></li>
                  <li className="flex items-start gap-2"><span className="mt-1 text-pink-400">•</span><span>Aimed to design a <b>digital fashion skin</b> that fuses Nike's energetic style with Zeri's fast-paced gameplay, crafting an immersive visual identity across platforms.</span></li>
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
                  <li className="flex items-start gap-2"><span className="mt-1 text-blue-300">•</span><span>Designed custom <b>Character Splash Art</b> to showcase the Nike-inspired skin, emphasizing motion, energy, and electric visuals.</span></li>
                  <li className="flex items-start gap-2"><span className="mt-1 text-blue-300">•</span><span>Created <b>3D fashion models</b> in Marvelous Designer to integrate Nike's performance aesthetic with in-game costume design.</span></li>
                  <li className="flex items-start gap-2"><span className="mt-1 text-blue-300">•</span><span>Produced a <b>mixed media animation</b> blending real-life footage shot in Downtown Los Angeles with digital overlays to connect physical and virtual worlds.</span></li>
                  <li className="flex items-start gap-2"><span className="mt-1 text-blue-300">•</span><span>Developed <b>in-game store mock-ups</b> to visualize the skin within the League of Legends ecosystem.</span></li>
                  <li className="flex items-start gap-2"><span className="mt-1 text-blue-300">•</span><span>Collaborated with the <b>Nike .SWOOSH Digital Branding Team</b> and <b>Riot Games</b> to ensure cohesive brand storytelling and authentic integration.</span></li>
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
                  <li className="flex items-start gap-2"><span className="mt-1 text-green-300">•</span><span>Delivered a compelling <b>cross-industry concept</b> that merges fashion, gaming, and storytelling into an engaging consumer experience.</span></li>
                  <li className="flex items-start gap-2"><span className="mt-1 text-green-300">•</span><span>Demonstrated expertise in <b>collaborating with major brands</b> to develop co-branded visual narratives and innovative digital experiences.</span></li>
                  <li className="flex items-start gap-2"><span className="mt-1 text-green-300">•</span><span>Produced a full suite of deliverables—splash art, 3D assets, animation, and mock-ups—that lays a <b>foundation for future digital fashion collaborations</b>.</span></li>
                </ul>
              </section>
            </div>
          </div>
        </div>
      </div>
    </>
  );
} 