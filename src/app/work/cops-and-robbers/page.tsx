"use client";

export default function CopsAndRobbersPage() {
  return (
    <>
      <div className="h-32" />
      <div
        className="min-h-screen bg-black text-white py-12 flex justify-center items-center mt-16 md:mt-24 mb-12"
        style={{ marginLeft: 'auto', marginRight: 'auto', marginBottom: '50px', maxWidth: '1600px' }}
      >
        <div className="w-full flex flex-col lg:flex-row gap-12 items-center justify-center" style={{maxWidth: '1400px'}}>
          {/* Left column: Video */}
          <div className="flex flex-col items-center justify-center flex-1 h-full" style={{ maxWidth: '80%' }}>
            <video
              src="/cops-robbers-gameplay.mp4"
              controls
              muted
              className="w-full object-contain rounded-lg border border-gray-700 shadow-lg"
              style={{ minHeight: '400px', maxWidth: '700px' }}
            >
              Your browser does not support the video tag.
            </video>
          </div>
          {/* Right column: Content */}
          <div className="flex flex-col items-center text-center space-y-6 flex-1 min-w-[350px]">
            <div className="space-y-1">
              <p className="text-sm text-gray-300">Spring 2025</p>
              <h1 className="text-4xl md:text-6xl font-bold">Cops and Robbers (VR)</h1>
            </div>
            <div className="space-y-10 text-left max-w-2xl w-full">
              {/* Role & Objective */}
              <section>
                <div className="flex items-center gap-3 mb-2">
                  <span className="h-6 w-1 rounded bg-gradient-to-b from-pink-500 to-red-400" />
                  <h2 className="text-2xl font-bold text-pink-400 tracking-tight">Role & Objective</h2>
                </div>
                <ul className="space-y-2 pl-6 list-none">
                  <li className="flex items-start gap-2"><span className="mt-1 text-pink-400">•</span><span>Served as <span className="font-semibold text-white">Lead VR Developer and Game Designer</span> to create a first-person VR heist experience.</span></li>
                  <li className="flex items-start gap-2"><span className="mt-1 text-pink-400">•</span><span>Aimed to deliver a tense and fast-paced gameplay loop that challenges players to loot efficiently under pressure.</span></li>
                  <li className="flex items-start gap-2"><span className="mt-1 text-pink-400">•</span><span>Targeted blending urgency, exploration, and moral ambiguity in an immersive VR environment.</span></li>
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
                  <li className="flex items-start gap-2"><span className="mt-1 text-blue-300">•</span><span>Built core environment and interaction logic using <span className="font-bold">Unity</span> and <span className="font-bold">C#</span> scripting.</span></li>
                  <li className="flex items-start gap-2"><span className="mt-1 text-blue-300">•</span><span>Implemented <span className="font-bold">Unity XR Toolkit</span> for VR hand tracking, object grabbing, and immersive input.</span></li>
                  <li className="flex items-start gap-2"><span className="mt-1 text-blue-300">•</span><span>Designed gameplay mechanics where players loot stores by grabbing high-value items in limited time.</span></li>
                  <li className="flex items-start gap-2"><span className="mt-1 text-blue-300">•</span><span>Evolved raycasting mechanics from traditional FPS to VR hand-based interactions.</span></li>
                  <li className="flex items-start gap-2"><span className="mt-1 text-blue-300">•</span><span>Created building state displays via black-and-white overlay to show robbery progress.</span></li>
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
                  <li className="flex items-start gap-2"><span className="mt-1 text-green-300">•</span><span>Delivered a fully playable prototype for Meta Quest 3 with core mechanics fully functional and tested.</span></li>
                  <li className="flex items-start gap-2"><span className="mt-1 text-green-300">•</span><span>Successfully expanded VR experience design beyond passive viewing or simple UI interactions.</span></li>
                  <li className="flex items-start gap-2"><span className="mt-1 text-green-300">•</span><span>Demonstrated ability to emphasize polish and core loop clarity under real-world time and tech constraints.</span></li>
                  <li className="flex items-start gap-2"><span className="mt-1 text-green-300">•</span><span>Established foundation for future iterations with potential for patrolling NPCs, dynamic AI, and enhanced environmental storytelling.</span></li>
                </ul>
              </section>
            </div>
          </div>
        </div>
      </div>
    </>
  );
} 