"use client";

import { motion } from "framer-motion";
import TextScramble from "@/components/core/TextScramble";
import Image from "next/image";

export default function CastleChambersPage() {
  return (
    <>
      <div className="h-32" />
      <div
        className="min-h-screen bg-black text-white py-12 flex justify-center mt-16 md:mt-24"
        style={{ marginLeft: '100px', marginRight: '100px' }}
      >
        <div className="max-w-full w-full grid grid-cols-1 lg:grid-cols-[900px_1fr] gap-16">
          {/* Left column: Video only, no thumbnail */}
          <div className="flex flex-col items-start">
            <video
              src="/castle chambers.mp4"
              controls
              autoPlay
              loop
              muted
              className="w-full max-w-2xl h-[900px] object-contain rounded-lg border border-gray-700 shadow-lg"
            />
          </div>

          {/* Right column: Centered content */}
          <div className="flex flex-col items-center text-center space-y-6">
            <div className="space-y-1">
              <p className="text-sm text-gray-300">Spring 2025</p>
              <h1 className="text-4xl md:text-6xl font-bold">Castle Chambers</h1>
              <span className="inline-block px-2 py-1 bg-yellow-500 text-black text-xs font-semibold rounded-full mt-2">
                Extended Reality
              </span>
            </div>
            <p className="text-lg font-medium">
              Castle Chambers – VR Escape Room Puzzle Game<br />
              Developed a multi-room, atmospheric escape room puzzle game set within a medieval castle, where players solve puzzles to descend deeper into ancient chambers.
            </p>
            <div className="space-y-4 text-left max-w-2xl w-full">
              <section>
                <h2 className="text-xl font-semibold">Goal</h2>
                <p>
                  Create an immersive puzzle-solving experience that combines environmental storytelling with logic-based challenges, drawing players deeper into the castle's secrets as they progress.
                </p>
              </section>
              <section>
                <h2 className="text-xl font-semibold mt-4">Tech Stack</h2>
                <ul className="list-disc list-inside space-y-1">
                  <li><b>Unity</b> – built the core gameplay mechanics and room transitions</li>
                  <li><b>C#</b> – scripted puzzle logic and room-specific interactions</li>
                </ul>
              </section>
              <section>
                <h2 className="text-xl font-semibold mt-4">Gameplay Design</h2>
                <ul className="list-disc list-inside space-y-1">
                  <li><b>Four-Chamber Progression</b> – each completed puzzle unlocks a new room, guiding players deeper into the castle</li>
                  <li><b>Environmental Storytelling</b> – gradual reveal of castle lore and hidden secrets through visual cues and spatial design</li>
                  <li><b>Puzzle Diversity</b> – each room features unique logic-based challenges to maintain variety and engagement</li>
                </ul>
              </section>
              <section>
                <h2 className="text-xl font-semibold mt-4">Development Approach</h2>
                <ul className="list-disc list-inside space-y-1">
                  <li>Prioritized rapid prototyping and flexibility over fully modular architecture to enable quick iteration and real-time design adjustments</li>
                  <li>Used some duplicated scripts and loosely coupled systems to accelerate puzzle development without breaking game flow</li>
                </ul>
              </section>
              <section>
                <h2 className="text-xl font-semibold mt-4">Future Considerations</h2>
                <ul className="list-disc list-inside space-y-1">
                  <li>Introduce more scalable, modular systems for puzzle and room management to support future content expansion</li>
                  <li>Enhance atmospheric detail with richer environmental storytelling and tactile VR interactions</li>
                  <li>Improve code reusability and performance to maintain scalability in larger builds</li>
                </ul>
              </section>
              <section>
                <h2 className="text-xl font-semibold mt-4">Project Status</h2>
                <p>
                  Prototype completed and fully playable, featuring four chambers with interactive puzzles and room-to-room progression. Future updates could further refine modularity and aesthetic depth for expanded gameplay.
                </p>
              </section>
            </div>
          </div>
        </div>
      </div>
    </>
  );
} 