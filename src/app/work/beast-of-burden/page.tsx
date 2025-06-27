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
        className="min-h-screen bg-black text-white py-12 flex justify-center mt-16 md:mt-24 mb-12"
        style={{ marginLeft: '100px', marginRight: '100px', marginBottom: '50px' }}
      >
        <div className="max-w-full w-full grid grid-cols-1 lg:grid-cols-[900px_1fr] gap-16">
          {/* Left column: Slideshow */}
          <div className="flex flex-col items-start w-full">
            <div className="w-full">
              <ImageSlideshow
                images={images}
                altPrefix="Beast of Burden illustration"
              />
            </div>
          </div>
          {/* Right column: Centered content */}
          <div className="flex flex-col items-center text-center space-y-6">
            <div className="space-y-1">
              <p className="text-sm text-gray-300">Fall 2024</p>
              <h1 className="text-4xl md:text-6xl font-bold">Beast of Burden</h1>
            </div>
            <div className="space-y-4 text-left max-w-2xl w-full">
              <p className="text-lg font-medium">
                This series of illustrations, titled <b>Beast of Burden</b>, employs the metaphor of a mule—a symbol of enduring heavy loads—to explore the cyclical nature of relationships and their lasting impact. Through carefully selected moments in the protagonist's life, the work traces how familial dynamics, particularly with a parent, shape the patterns that emerge in adult partnerships. The narrative builds toward a pivotal argument with a significant other and its emotional aftermath, revealing how unresolved tensions resurface across generations.
                <br /><br />
                Departing from a conventional comic format, I designed a series of standalone illustrations to capture defining moments in the character's journey, from childhood to adulthood. Each piece is crafted to evoke the weight of inherited emotional burdens and the impact of these burdens on human connection. This intentional approach emphasizes the universality of these experiences, inviting viewers to reflect on their own relational cycles.
                <br /><br />
                Through its evocative imagery and narrative depth, <b>Beast of Burden</b> underscores the interplay between personal history and intimate connections, offering a poignant meditation on growth, conflict, and reconciliation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
} 