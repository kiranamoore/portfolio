"use client";

import { motion } from "framer-motion";
import TextScramble from "@/components/core/TextScramble";
import ImageSlideshow from "@/components/core/ImageSlideshow";

export default function BeastOfBurdenPage() {
  // Slideshow images in correct order
  const images = [
    "/beast of burden/1.png",
    "/beast of burden/1.5.png",
    "/beast of burden/2.png",
    "/beast of burden/3.png",
    "/beast of burden/4.png",
    "/beast of burden/5.png",
    "/beast of burden/6.png",
    "/beast of burden/7.png",
    "/beast of burden/8.png",
    "/beast of burden/9.png",
    "/beast of burden/10.png",
    "/beast of burden/12.png",
    "/beast of burden/13.png",
    "/beast of burden/14.png",
  ];
  return (
    <>
      <div className="h-32" />
      <div
        className="min-h-screen bg-black text-white py-12 flex justify-center items-center mt-16 md:mt-24 mb-12"
        style={{ marginLeft: 'auto', marginRight: 'auto', marginBottom: '50px', maxWidth: '1600px' }}
      >
        <div className="w-full flex flex-col lg:flex-row gap-12 items-center justify-center" style={{maxWidth: '1400px'}}>
          {/* Left column: Slideshow */}
          <div className="flex flex-col items-center justify-center flex-1 h-full w-full">
            <ImageSlideshow
              images={images}
              altPrefix="Beast of Burden illustration"
            />
          </div>
          {/* Right column: Content */}
          <div className="flex flex-col items-center text-center space-y-6 flex-1 min-w-[400px]">
            <div className="space-y-1">
              <p className="text-sm text-gray-300">Fall 2024</p>
              <h1 className="text-4xl md:text-6xl font-bold">Beast of Burden</h1>
            </div>
            <div className="space-y-10 text-left max-w-2xl w-full">
              <section>
                <div className="flex items-center gap-3 mb-2">
                  <span className="h-6 w-1 rounded bg-gradient-to-b from-pink-500 to-red-400" />
                  <h2 className="text-2xl font-bold text-pink-400 tracking-tight">Project Overview</h2>
                </div>
                <ul className="space-y-2 pl-6 list-none">
                  <li className="flex items-start gap-2"><span className="mt-1 text-pink-400">•</span><span>This series of illustrations, titled <b>Beast of Burden</b>, employs the metaphor of a mule—a symbol of enduring heavy loads—to explore the <b>cyclical nature of relationships and their lasting impact.</b> Through carefully selected moments in the protagonist's life, the work traces how familial dynamics, particularly with a parent, shape the patterns that emerge in adult partnerships.</span></li>
                </ul>
              </section>
              <div className="flex items-center gap-3 mb-2 mt-6">
                <span className="h-6 w-1 rounded bg-gradient-to-b from-blue-400 to-cyan-400" />
                <h3 className="text-xl font-bold text-blue-300 tracking-tight">Narrative Details</h3>
              </div>
              <ul className="space-y-2 pl-6 list-none">
                <li className="flex items-start gap-2"><span className="mt-1 text-blue-300">•</span><span>Departing from a conventional comic format, I designed a series of standalone illustrations to capture <b>defining moments in the character's journey</b>, from childhood to adulthood. The narrative builds toward a pivotal argument with a significant other and its emotional aftermath, revealing how <b>unresolved tensions resurface across generations</b>. Each piece is crafted to evoke the weight of inherited emotional burdens and the impact of these burdens on human connection.</span></li>
              </ul>
              <div className="flex items-center gap-3 mb-2 mt-6">
                <span className="h-6 w-1 rounded bg-gradient-to-b from-green-400 to-emerald-500" />
                <h3 className="text-xl font-bold text-green-300 tracking-tight">Color & Atmosphere</h3>
              </div>
              <ul className="space-y-2 pl-6 list-none">
                <li className="flex items-start gap-2"><span className="mt-1 text-green-300">•</span><span>Through its evocative imagery and narrative depth, <b>Beast of Burden</b> underscores the <b>interplay between personal history and intimate connections</b>, offering a poignant meditation on growth, conflict, and reconciliation. This intentional approach emphasizes the universality of these experiences, inviting viewers to reflect on their own relational cycles.</span></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
} 