"use client";

import Link from "next/link";
import { useState } from "react";

const alchemyImages = Array.from({ length: 16 }, (_, i) => `/little alchemy/${i + 1}.png`);

export default function MetaAlchemyPage() {
  const [currentImage, setCurrentImage] = useState(0);

  return (
    <div className="min-h-screen bg-white">
      <article className="max-w-3xl mx-auto px-6 pt-24 pb-16 md:pt-32">
        {/* Back Link */}
        <Link
          href="/work"
          className="inline-flex items-center text-[14px] text-[#6E6E73] hover:text-[#1D1D1F] transition-colors mb-8"
        >
          <span className="mr-1">&larr;</span> Work
        </Link>

        {/* Header */}
        <header className="mb-10">
          <p className="text-[13px] text-[#6E6E73] mb-2">Spring 2025</p>
          <h1 className="text-[32px] font-semibold text-[#1D1D1F] tracking-tight mb-4">
            Meta Alchemy
          </h1>
          <p className="text-[17px] text-[#1D1D1F] leading-relaxed">
            Meta Alchemy is a mixed reality prototype for Meta Quest 3 that empowers users to creatively combine virtual elements in a 3D space, blending combinatorial gameplay with intuitive spatial interactions.
          </p>
        </header>

        {/* Image Slideshow */}
        <div className="mb-8">
          <div className="rounded-xl border border-[#E5E5E5] overflow-hidden bg-[#FAFAFA]">
            <img
              src={alchemyImages[currentImage]}
              alt={`Meta Alchemy screenshot ${currentImage + 1}`}
              className="w-full aspect-video object-contain"
            />
          </div>
          <div className="flex justify-center gap-2 mt-4">
            {alchemyImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImage(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentImage ? "bg-[#1D1D1F]" : "bg-[#E5E5E5] hover:bg-[#D1D1D6]"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Demo Video */}
        <div className="mb-12">
          <video
            src="/little-alchemy-demo.mp4"
            controls
            muted
            className="w-full rounded-xl border border-[#E5E5E5]"
          />
          <p className="text-[13px] text-[#6E6E73] mt-2 text-center">
            Meta Quest 3 gameplay demonstration
          </p>
        </div>

        {/* Role & Objective */}
        <section className="mb-10">
          <h2 className="text-[18px] font-semibold text-[#1D1D1F] mb-4">Role & Objective</h2>
          <ul className="space-y-3 text-[15px] text-[#1D1D1F]">
            <li className="flex gap-3">
              <span className="text-[#6E6E73]">•</span>
              <span>Served as <strong>Lead Mixed Reality Developer</strong> to design and develop a prototype for Meta Quest 3.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[#6E6E73]">•</span>
              <span>Aimed to enable users to combine virtual elements in an interactive 3D space, inspired by Little Alchemy's creativity-driven gameplay.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[#6E6E73]">•</span>
              <span>Targeted fostering user creativity and exploration through combinatorial play in mixed reality.</span>
            </li>
          </ul>
        </section>

        {/* Actions Taken */}
        <section className="mb-10">
          <h2 className="text-[18px] font-semibold text-[#1D1D1F] mb-4">Actions Taken</h2>
          <ul className="space-y-3 text-[15px] text-[#1D1D1F]">
            <li className="flex gap-3">
              <span className="text-[#6E6E73]">•</span>
              <span>Developed for spatial computing using <strong>Unity</strong> with high-performance rendering and <strong>C#</strong> for interaction logic.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[#6E6E73]">•</span>
              <span>Utilized <strong>Meta Quest 3 SDK</strong> for spatial tracking, controller input, and passthrough functionality.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[#6E6E73]">•</span>
              <span>Created and optimized 3D assets using <strong>Blender</strong> for interactive use in mixed reality.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[#6E6E73]">•</span>
              <span>Designed a 3D sandbox-style environment with drag-and-drop virtual elements and real-time feedback.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[#6E6E73]">•</span>
              <span>Optimized spatial interactions based on headset and controller tracking for intuitive user experience.</span>
            </li>
          </ul>
        </section>

        {/* Results & Impact */}
        <section className="mb-10">
          <h2 className="text-[18px] font-semibold text-[#1D1D1F] mb-4">Results & Impact</h2>
          <ul className="space-y-3 text-[15px] text-[#1D1D1F]">
            <li className="flex gap-3">
              <span className="text-[#6E6E73]">•</span>
              <span>Delivered a functional prototype deployed on Meta Quest 3 hardware with responsive interactions and platform-optimized assets.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[#6E6E73]">•</span>
              <span>Successfully demonstrated the potential for educational or game-like MR applications on next-gen headsets.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[#6E6E73]">•</span>
              <span>Established a foundation for future combinatorial AR/VR content with modular design for extensibility.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[#6E6E73]">•</span>
              <span>Showcased system-level performance optimization and intuitive MR design thinking for spatial computing.</span>
            </li>
          </ul>
        </section>
      </article>
    </div>
  );
}
