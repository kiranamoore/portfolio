"use client";

export default function CopsAndRobbersPage() {
  return (
    <>
      <div className="h-32" />
      <div className="min-h-screen bg-black text-white py-12 flex justify-center" style={{ marginLeft: '5px', marginRight: '5px' }}>
        <div className="max-w-full w-full grid grid-cols-1 lg:grid-cols-[900px_1fr] gap-16">
          {/* Left: Video */}
          <div className="flex flex-col items-start w-full">
            <video
              src="/cops and robbers gameplay.mp4"
              controls
              muted
              className="w-full h-full object-contain rounded-lg border border-gray-700 shadow-lg"
            >
              Your browser does not support the video tag.
            </video>
          </div>
          {/* Right: Description and details */}
          <div className="flex flex-col items-center text-center space-y-6 justify-center">
            <div className="space-y-1">
              <p className="text-sm text-gray-300">Spring 2025</p>
              <h1 className="text-4xl md:text-6xl font-bold">Cops and Robbers (VR)</h1>
            </div>
            <p className="text-lg font-medium">
              A first-person VR heist experience where you play a desperate mafia enforcer racing against time to steal $1M in jewelry before your boss catches up with you.
            </p>
            <div className="space-y-4 text-left w-full max-w-2xl mx-auto px-4">
              <section>
                <h2 className="text-xl font-semibold">Goal</h2>
                <p>
                  Deliver a tense and fast-paced gameplay loop in VR that challenges players to loot efficiently under pressure, blending urgency, exploration, and moral ambiguity.
                </p>
              </section>
              <section>
                <h2 className="text-xl font-semibold mt-4">Tech Stack</h2>
                <ul className="list-disc list-inside space-y-1">
                  <li><b>Unity</b> – core engine used to build the environment and interaction logic</li>
                  <li><b>Unity XR Toolkit</b> – enabled VR hand tracking, object grabbing, and immersive input</li>
                  <li><b>C#</b> – implemented gameplay mechanics, object detection, and state transitions</li>
                  <li><b>Meta Quest 3</b> – target hardware platform for deployment</li>
                </ul>
              </section>
              <section>
                <h2 className="text-xl font-semibold mt-4">Gameplay Design</h2>
                <ul className="list-disc list-inside space-y-1">
                  <li>Players loot stores by grabbing high-value items in a limited amount of time</li>
                  <li>Raycasting mechanic evolved from traditional FPS to VR hand-based interactions</li>
                  <li>Buildings display robbery state via black-and-white overlay (future: asset swap)</li>
                </ul>
              </section>
              <section>
                <h2 className="text-xl font-semibold mt-4">Builds on Past Work</h2>
                <ul className="list-disc list-inside space-y-1">
                  <li>Expanded VR experience design beyond passive viewing or simple UI</li>
                  <li>Emphasized polish and core loop clarity under real-world time and tech constraints</li>
                </ul>
              </section>
              <section>
                <h2 className="text-xl font-semibold mt-4">Future Improvements</h2>
                <ul className="list-disc list-inside space-y-1">
                  <li>Add patrolling police NPCs and dynamic AI citizens to increase stealth tension</li>
                  <li>Introduce custom visual changes to robbed stores for enhanced environmental storytelling</li>
                  <li>Expand mission progression and failure consequences for replayability</li>
                </ul>
              </section>
              <section>
                <h2 className="text-xl font-semibold mt-4">Project Status</h2>
                <p>
                  Playable prototype completed for Meta Quest using Unity XR Toolkit. Core mechanics fully functional and tested. Future versions will iterate based on user feedback and visual polish goals.
                </p>
              </section>
            </div>
          </div>
        </div>
      </div>
    </>
  );
} 