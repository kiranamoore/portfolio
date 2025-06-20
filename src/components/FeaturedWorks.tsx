"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import TextScramble from "@/components/core/TextScramble";

export default function FeaturedWorks() {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const backgroundColor = useTransform(
    scrollYProgress,
    [0.1, 0.5, 0.9],
    ["#FFFFFF", "#000000", "#FFFFFF"]
  );

  const color = useTransform(
    scrollYProgress,
    [0.1, 0.5, 0.9],
    ["#000000", "#FFFFFF", "#000000"]
  );

  return (
    <motion.section
      ref={targetRef}
      id="featured-work"
      style={{ backgroundColor }}
    >
      <motion.div style={{ color }}>
        {/* Extended Reality Design */}
        <div className="min-h-screen flex items-center py-20 px-4 md:px-8">
          <div className="flex-1">
            <h2 className="text-4xl md:text-6xl font-bold mb-4">
              Featured &gt; <br /> Extended Reality
            </h2>
            <p className="text-lg max-w-md">
              <TextScramble text="Exploring new dimensions of interaction and perception through AR and VR." />
            </p>
          </div>
          <div className="flex-1 flex justify-center">
            <div className="text-center">
              <Image
                src="/xr-1.jpg"
                alt="XR Project 1"
                width={400}
                height={600}
                className="rounded-lg"
              />
              <p className="mt-2">
                <TextScramble text="Project Name :: Artwork, XR / 2025" />
              </p>
            </div>
          </div>
        </div>

        {/* Immersive Experience Design */}
        <div className="min-h-screen flex items-center py-20 px-4 md:px-8">
          <div className="flex-1">
            <h2 className="text-4xl md:text-6xl font-bold mb-4">
              Featured &gt; <br /> Immersive Experiences
            </h2>
            <p className="text-lg max-w-md">
              <TextScramble text="Crafting engaging and memorable experiences that captivate and inspire." />
            </p>
          </div>
          <div className="flex-1 flex justify-center">
            <Link href="/work/with-the-mountains-the-clouds-and-us">
              <div className="text-center group">
                <Image
                  src="/hero%20render_ps.png"
                  alt="The Painter of Light"
                  width={600}
                  height={400}
                  className="rounded-lg group-hover:scale-105 transition-transform duration-300"
                />
                <p className="mt-2">
                  <TextScramble text="The Painter of Light :: Immersive Experience / 2025" />
                </p>
              </div>
            </Link>
          </div>
        </div>

        {/* Visual Narrative Art */}
        <div className="min-h-screen flex items-center py-20 px-4 md:px-8">
          <div className="flex-1">
            <h2 className="text-4xl md:text-6xl font-bold mb-4">
              Featured &gt; <br /> Visual Narratives
            </h2>
            <p className="text-lg max-w-md">
              <TextScramble text="Telling stories through visuals, motion, and interactive media." />
            </p>
          </div>
          <div className="flex-1 flex justify-center">
            <div className="text-center">
              <Image
                src="/visual-1.jpg"
                alt="Visual Art 1"
                width={400}
                height={600}
                className="rounded-lg"
              />
              <p className="mt-2">
                <TextScramble text="Project Name :: Artwork, Generative Art / 2023" />
              </p>
            </div>
          </div>
        </div>
      </motion.div>
      <div className="text-center py-20 bg-white">
        <Link href="/work" className="text-xl hover:underline text-black">
          View all work
        </Link>
      </div>
    </motion.section>
  );
}
