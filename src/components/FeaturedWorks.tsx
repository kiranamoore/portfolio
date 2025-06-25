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

  const backgroundColor = "#FFFFFF";

  const color = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    ["#000000", "#FFFFFF", "#000000"]
  );

  return (
    <section id="featured-work">
      {/* Featured Extended Reality Section (white bg, black text) */}
      <div style={{ background: '#fff', color: '#000' }}>
        {/* Extended Reality Design */}
        <div className="min-h-screen flex items-center py-20">
          <div className="flex-1">
            <h2 className="text-4xl md:text-6xl font-bold mb-4">Featured &gt; <br /> Extended Reality</h2>
            <p className="text-lg max-w-md">
              <TextScramble text="Exploring new dimensions of interaction and perception through AR and VR." />
            </p>
          </div>
          <div className="flex-1 flex justify-center">
            <Link href="/work/quick-start-guide-ar-manual">
              <div className="text-center group">
                <Image
                  src="/quick_start_guide_thumbnail.png"
                  alt="Quick Start Guide AR Manual thumbnail"
                  width={400}
                  height={600}
                  className="rounded-lg group-hover:scale-105 transition-transform duration-300"
                />
                <div className="mt-2">
                  <p className="font-semibold">Quick Start Guide AR Manual</p>
                  <p className="text-sm">Extended Reality / Spring 2025</p>
                  <span className="inline-block px-2 py-1 bg-yellow-500 text-black text-xs font-semibold rounded-full mt-1 mr-2">Hewlett-Packard / HyperX</span>
                  <span className="inline-block px-2 py-1 bg-yellow-500 text-black text-xs font-semibold rounded-full mt-1">Completed</span>
                </div>
              </div>
            </Link>
          </div>
        </div>
        <div className="min-h-screen flex items-center py-20">
          <div className="flex-1" />
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
                  <p className="font-semibold">Cloud 3D Connect</p>
                  <p className="text-sm">Extended Reality / Summer 2025</p>
                  <span className="inline-block px-2 py-1 bg-yellow-500 text-black text-xs font-semibold rounded-full mt-1 mr-2">Hewlett-Packard / HyperX</span>
                  <span className="inline-block px-2 py-1 bg-yellow-500 text-black text-xs font-semibold rounded-full mt-1">In Development</span>
                </div>
              </div>
            </Link>
          </div>
        </div>
        <div className="min-h-screen flex items-center py-20">
          <div className="flex-1" />
          <div className="flex-1 flex justify-center">
            <Link href="/work/hyperx-cloud-3-3d-customizer">
              <div className="text-center group">
                <Image
                  src="/HX3D_thumbnail.png"
                  alt="HyperX Cloud 3 3D Customizer thumbnail"
                  width={400}
                  height={600}
                  className="rounded-lg group-hover:scale-105 transition-transform duration-300"
                />
                <div className="mt-2">
                  <p className="font-semibold">HyperX Cloud 3 3D Customizer</p>
                  <p className="text-sm">Extended Reality / Spring 2025</p>
                  <span className="inline-block px-2 py-1 bg-yellow-500 text-black text-xs font-semibold rounded-full mt-1 mr-2">Hewlett-Packard / HyperX</span>
                  <span className="inline-block px-2 py-1 bg-yellow-500 text-black text-xs font-semibold rounded-full mt-1">Completed</span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
      {/* Immersive Experience Section (black bg, white text) */}
      <div style={{ background: '#000', color: '#fff' }}>
        <div className="min-h-screen flex items-center py-20">
          <div className="flex-1">
            <h2 className="text-4xl md:text-6xl font-bold mb-4">Featured &gt; <br /> Immersive Experiences</h2>
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
                <p className="mt-2">The Painter of Light :: Immersive Experience / 2025</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
      {/* Visual Narrative Art Section (white bg, black text) */}
      <div style={{ background: '#fff', color: '#000' }}>
        <div className="min-h-screen flex items-center py-20">
          <div className="flex-1">
            <h2 className="text-4xl md:text-6xl font-bold mb-4">Featured &gt; <br /> Visual Narratives</h2>
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
              <p className="mt-2">Project Name :: Artwork, Generative Art / 2023</p>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center py-20 bg-white">
        <Link href="/work" className="text-xl hover:underline text-black">
          View all work
        </Link>
      </div>
    </section>
  );
}
