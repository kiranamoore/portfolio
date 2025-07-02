"use client";

import { motion } from "framer-motion";
import TextScramble from "@/components/core/TextScramble";
import Image from "next/image";

export default function CastleChambersPage() {
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
              src="/castle chambers.mp4"
              controls
              autoPlay
              loop
              muted
              className="w-full object-contain rounded-lg border border-gray-700 shadow-lg"
              style={{ minHeight: '400px', maxWidth: '700px' }}
            />
          </div>

          {/* Right column: Content */}
          <div className="flex flex-col items-center text-center space-y-6 flex-1 min-w-[350px]">
            <div className="space-y-1">
              <p className="text-sm text-gray-300">Spring 2025</p>
              <h1 className="text-4xl md:text-6xl font-bold">Castle Chambers</h1>
              <span className="inline-block px-2 py-1 bg-yellow-500 text-black text-xs font-semibold rounded-full mt-2">
                Extended Reality
              </span>
            </div>
            <div className="space-y-10 text-left max-w-2xl w-full">
              {/* Role & Objective */}
              <section>
                <div className="flex items-center gap-3 mb-2">
                  <span className="h-6 w-1 rounded bg-gradient-to-b from-pink-500 to-red-400" />
                  <h2 className="text-2xl font-bold text-pink-400 tracking-tight">Role & Objective</h2>
                </div>
                <ul className="space-y-2 pl-6 list-none">
                  <li className="flex items-start gap-2"><span className="mt-1 text-pink-400">•</span><span>Served as <span className="font-semibold text-white">Lead VR Developer and Game Designer</span> to create a multi-room, atmospheric escape room puzzle game.</span></li>
                  <li className="flex items-start gap-2"><span className="mt-1 text-pink-400">•</span><span>Aimed to create an immersive puzzle-solving experience that combines environmental storytelling with logic-based challenges.</span></li>
                  <li className="flex items-start gap-2"><span className="mt-1 text-pink-400">•</span><span>Targeted drawing players deeper into the castle's secrets as they progress through increasingly complex chambers.</span></li>
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
                  <li className="flex items-start gap-2"><span className="mt-1 text-blue-300">•</span><span>Built core gameplay mechanics and room transitions using <span className="font-bold">Unity</span> and <span className="font-bold">C#</span> scripting.</span></li>
                  <li className="flex items-start gap-2"><span className="mt-1 text-blue-300">•</span><span>Designed a four-chamber progression system where each completed puzzle unlocks a new room.</span></li>
                  <li className="flex items-start gap-2"><span className="mt-1 text-blue-300">•</span><span>Implemented environmental storytelling through visual cues and spatial design to gradually reveal castle lore.</span></li>
                  <li className="flex items-start gap-2"><span className="mt-1 text-blue-300">•</span><span>Created unique logic-based challenges for each room to maintain variety and engagement.</span></li>
                  <li className="flex items-start gap-2"><span className="mt-1 text-blue-300">•</span><span>Prioritized rapid prototyping and flexibility over fully modular architecture to enable quick iteration.</span></li>
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
                  <li className="flex items-start gap-2"><span className="mt-1 text-green-300">•</span><span>Delivered a fully playable prototype featuring four chambers with interactive puzzles and room-to-room progression.</span></li>
                  <li className="flex items-start gap-2"><span className="mt-1 text-green-300">•</span><span>Successfully created an immersive medieval atmosphere that enhances the puzzle-solving experience.</span></li>
                  <li className="flex items-start gap-2"><span className="mt-1 text-green-300">•</span><span>Demonstrated ability to balance technical constraints with creative design in VR development.</span></li>
                  <li className="flex items-start gap-2"><span className="mt-1 text-green-300">•</span><span>Established a foundation for future VR puzzle games with potential for modular expansion and enhanced atmospheric detail.</span></li>
                </ul>
              </section>
            </div>
          </div>
        </div>
      </div>
    </>
  );
} 