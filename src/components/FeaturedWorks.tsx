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
    offset: ["start 25%", "end 75%"],
  });

  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    ["#FFFFFF", "#000000", "#FFFFFF"]
  );

  const color = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    ["#000000", "#FFFFFF", "#000000"]
  );

  return (
    <motion.section
      ref={targetRef}
      id="featured-work"
      style={{ backgroundColor }}
    >
      <motion.div
        style={{
          color,
          paddingLeft: "32px",
          paddingRight: "32px",
        }}
      >
        {/* Extended Reality Design */}
        <div className="min-h-screen flex items-center py-20">
          <div className="flex-1">
            <h2 className="text-4xl md:text-6xl font-bold mb-4">
              Featured &gt; <br /> Extended Reality
            </h2>
            <p className="text-lg max-w-md">
              <TextScramble text="Exploring new dimensions of interaction and perception through AR and VR." />
            </p>
          </div>
          <div className="flex-1 flex justify-center">
            <Link href="/work/cloud-3d-connect">
              <div className="text-center group">
                <Image
                  src="/18k tris.png"
                  alt="Cloud 3D Connect 18k tris thumbnail"
                  width={400}
                  height={600}
                  className="rounded-lg group-hover:scale-105 transition-transform duration-300"
                />
                <div className="mt-2">
                  <p className="font-semibold">
                    <TextScramble text="Cloud 3D Connect" />
                  </p>
                  <p className="text-sm">
                    <TextScramble text="Extended Reality / Summer 2025" />
                  </p>
                  <span className="inline-block px-2 py-1 bg-yellow-500 text-black text-xs font-semibold rounded-full mt-1 mr-2">
                    Hewlett-Packard / HyperX
                  </span>
                  <span className="inline-block px-2 py-1 bg-yellow-500 text-black text-xs font-semibold rounded-full mt-1">
                    In Development
                  </span>
                </div>
              </div>
            </Link>
          </div>
        </div>

        {/* Second row: HyperX Cloud 3 3D Customizer */}
        <div className="min-h-[40vh] flex items-center py-10">
          <div className="flex-1" />
          <div className="flex-1 flex justify-center">
            <Link href="/work/hyperx-cloud-3-3d-customizer">
              <div className="text-center group">
                <Image
                  src="/purchase.png"
                  alt="HyperX Cloud 3 3D Customizer thumbnail"
                  width={400}
                  height={600}
                  className="rounded-lg group-hover:scale-105 transition-transform duration-300"
                />
                <div className="mt-2">
                  <p className="font-semibold">
                    <TextScramble text="HyperX Cloud 3 3D Customizer" />
                  </p>
                  <p className="text-sm">
                    <TextScramble text="Extended Reality / Spring 2025" />
                  </p>
                  <span className="inline-block px-2 py-1 bg-yellow-500 text-black text-xs font-semibold rounded-full mt-1 mr-2">
                    Hewlett-Packard / HyperX
                  </span>
                  <span className="inline-block px-2 py-1 bg-yellow-500 text-black text-xs font-semibold rounded-full mt-1">
                    Completed
                  </span>
                </div>
              </div>
            </Link>
          </div>
        </div>

        {/* Immersive Experience Design */}
        <div className="min-h-screen flex items-center py-20">
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
        <div className="min-h-screen flex items-center py-20">
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
