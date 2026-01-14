"use client";

import Link from "next/link";
import { useState } from "react";
import dynamic from "next/dynamic";
import HeroBackground from "@/components/HeroBackground";

const ModelViewer = dynamic(
  () => import("@/components/ModelViewer3D"),
  { ssr: false }
);

export default function HyperX3DOptimizationPage() {
  const [activeSlide, setActiveSlide] = useState(0);

  const slides = [
    { type: "model", src: "/Cloud-3-S-7-17.glb", caption: "HyperX Cloud 3 - Optimized 3D Model" },
    { type: "model", src: "/hx3d/beast.glb", caption: "HX3D Beast - Interactive 3D Model" },
    { type: "model", src: "/hx3d/nature.glb", caption: "HX3D Nature - Interactive 3D Model" },
    { type: "model", src: "/hx3d/valkyrie.glb", caption: "HX3D Valkyrie - Interactive 3D Model" },
  ];

  return (
    <div className="h-screen overflow-hidden hero-gradient relative">
      <HeroBackground />

      <div className="relative z-10 h-full flex items-center justify-center px-8 md:px-12 lg:px-16" style={{ paddingTop: '100px', paddingBottom: '40px' }}>
        {/* Main container */}
        <div className="w-full max-w-7xl h-full max-h-[calc(100vh-8rem)] flex flex-col lg:flex-row gap-4 lg:gap-8">

          {/* Left Navigation Arrow - Previous Project */}
          <Link
            href="/work/quick-start-guide-ar-manual"
            className="hidden lg:flex flex-col items-center justify-center gap-2 px-4 group self-center"
          >
            <span className="text-[11px] text-[#86868B] uppercase tracking-widest whitespace-nowrap">Prev</span>
            <svg
              className="w-6 h-6 text-[#86868B] group-hover:text-[#667eea] transition-colors animate-bounce-left"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
            </svg>
          </Link>

          {/* Left side - Media slideshow */}
          <div className="flex-1 flex flex-col min-h-0">
            {/* Main media display */}
            <div className="flex-1 rounded-2xl overflow-hidden bg-white/80 backdrop-blur-sm border border-[#E5E5E5]/50 shadow-xl relative">
              {slides.map((slide, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-opacity duration-500 ${
                    activeSlide === index ? "opacity-100" : "opacity-0 pointer-events-none"
                  }`}
                >
                  {slide.type === "model" && (
                    <ModelViewer
                      src={slide.src}
                      alt={slide.caption}
                      ar
                      autoRotate
                      cameraControls
                      style={{ width: "100%", height: "100%", background: "#FFFFFF" }}
                    />
                  )}
                </div>
              ))}

              {/* Navigation Arrows */}
              <button
                onClick={() => setActiveSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1))}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm shadow-lg border border-[#E5E5E5]/50 flex items-center justify-center text-[#1D1D1F] hover:bg-white hover:scale-110 transition-all duration-200 z-10 cursor-pointer"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={() => setActiveSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1))}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm shadow-lg border border-[#E5E5E5]/50 flex items-center justify-center text-[#1D1D1F] hover:bg-white hover:scale-110 transition-all duration-200 z-10 cursor-pointer"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            {/* Caption */}
            <p className="text-[13px] text-[#6E6E73] mt-3 text-center">
              {slides[activeSlide].caption}
            </p>

            {/* Slide indicators */}
            <div className="flex justify-center gap-2 mt-3">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveSlide(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    activeSlide === index
                      ? "bg-[#667eea] w-6"
                      : "bg-[#D1D1D6] hover:bg-[#A1A1A6]"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Right side - Text content */}
          <div className="flex-1 flex flex-col min-h-0">
            {/* Fixed Header Section */}
            <div className="flex-shrink-0 mb-6">
              {/* Tags */}
              <div className="flex flex-wrap gap-3 mb-8">
                <span className="inline-block font-medium text-[#667eea] bg-[#667eea]/10 rounded-lg" style={{ padding: '6px 14px', fontSize: '12px' }}>Blender</span>
                <span className="inline-block font-medium text-[#667eea] bg-[#667eea]/10 rounded-lg" style={{ padding: '6px 14px', fontSize: '12px' }}>3D</span>
                <span className="inline-block font-medium text-[#667eea] bg-[#667eea]/10 rounded-lg" style={{ padding: '6px 14px', fontSize: '12px' }}>WebGL</span>
                <span className="inline-block font-medium text-[#667eea] bg-[#667eea]/10 rounded-lg" style={{ padding: '6px 14px', fontSize: '12px' }}>AR/VR</span>
              </div>

              {/* Header */}
              <h1 className="text-[28px] md:text-[36px] font-bold text-[#1D1D1F] tracking-tight leading-tight mb-2">
                3D Model Optimization for XR
              </h1>
              <p className="text-[14px] font-semibold text-[#667eea] mb-4">HP/HyperX · Summer 2025</p>

              {/* Description */}
              <p className="text-[15px] text-[#1D1D1F] leading-relaxed">
                Developed a comprehensive guide and demonstration of 3D model optimization techniques for mobile, web, and AR/VR applications, using the HyperX Cloud 3 headset as a case study to show how complex 3D models can be made accessible across all devices.
              </p>
            </div>

            {/* Scrollable Highlights */}
            <div className="flex-1 overflow-y-auto pr-2 space-y-1">
              <div className="rounded-xl" style={{ padding: '8px 0' }}>
                <h3 className="text-[14px] font-semibold text-[#1D1D1F] mb-3 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#667eea] to-[#764ba2] flex items-center justify-center shadow-md">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </span>
                  Role & Objective
                </h3>
                <ul className="text-[14px] text-[#1D1D1F] space-y-2 pl-11">
                  <li className="flex items-start gap-2">
                    <span className="text-[#667eea] mt-1">•</span>
                    <span>Served as the <strong>Augmented Reality Developer</strong> to create a streamlined pipeline for converting CAD product models to Web, mobile, VR, AR, and Game ready models.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#667eea] mt-1">•</span>
                    <span>Aimed to <strong>simplify complex 3D models</strong> so they load quickly and run smoothly on phones, tablets, and computers.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#667eea] mt-1">•</span>
                    <span>Targeted creating a <strong>universal 3D model format</strong> that works across all devices and platforms.</span>
                  </li>
                </ul>
              </div>

              <div className="rounded-xl" style={{ padding: '8px 0' }}>
                <h3 className="text-[14px] font-semibold text-[#1D1D1F] mb-3 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#f093fb] to-[#f5576c] flex items-center justify-center shadow-md">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </span>
                  Actions Taken
                </h3>
                <ul className="text-[14px] text-[#1D1D1F] space-y-2 pl-11">
                  <li className="flex items-start gap-2">
                    <span className="text-[#f093fb] mt-1">•</span>
                    <span>Reduced the original CAD HyperX Cloud 3 S model from <strong>millions of triangles to just 20,000</strong> using Blender.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#f093fb] mt-1">•</span>
                    <span>Converted the model to <strong>GLB format</strong> - a universal file type that works on phones, computers, and AR/VR headsets.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#f093fb] mt-1">•</span>
                    <span>Optimized textures and materials to maintain visual quality while <strong>reducing file size</strong> for faster loading.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#f093fb] mt-1">•</span>
                    <span>Tested the model across different devices to ensure <strong>smooth interaction and fast loading times</strong>.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#f093fb] mt-1">•</span>
                    <span>Created an interactive web viewer using <strong>Google's Model Viewer</strong> to demonstrate the optimized model.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#f093fb] mt-1">•</span>
                    <span>Used <strong>projected diffuse maps</strong> from high-poly to low-poly models to texture the HX3D models.</span>
                  </li>
                </ul>
              </div>

              <div className="rounded-xl" style={{ padding: '8px 0' }}>
                <h3 className="text-[14px] font-semibold text-[#1D1D1F] mb-3 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#4facfe] to-[#00f2fe] flex items-center justify-center shadow-md">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </span>
                  Results & Impact
                </h3>
                <ul className="text-[14px] text-[#1D1D1F] space-y-2 pl-11">
                  <li className="flex items-start gap-2">
                    <span className="text-[#4facfe] mt-1">•</span>
                    <span><strong>Successfully created a mobile-friendly 3D model</strong> that loads in seconds instead of minutes.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#4facfe] mt-1">•</span>
                    <span>Established a <strong>standardized optimization process</strong> that can be applied to any 3D model for web and mobile use.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#4facfe] mt-1">•</span>
                    <span>Demonstrated how <strong>complex 3D assets can be made accessible</strong> to users on any device, regardless of technical limitations.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#4facfe] mt-1">•</span>
                    <span>Created a <strong>reusable template and best practices guide</strong> for future 3D optimization projects at HyperX.</span>
                  </li>
                </ul>
              </div>
            </div>

          </div>

          {/* Right Navigation Arrow - Next Project */}
          <Link
            href="/work/hyperx-unity-web-ar"
            className="hidden lg:flex flex-col items-center justify-center gap-2 px-4 group self-center"
          >
            <span className="text-[11px] text-[#86868B] uppercase tracking-widest whitespace-nowrap">Next</span>
            <svg
              className="w-6 h-6 text-[#86868B] group-hover:text-[#667eea] transition-colors animate-bounce-right"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>

      <style jsx global>{`
        @keyframes bounce-right {
          0%, 100% {
            transform: translateX(0);
          }
          50% {
            transform: translateX(4px);
          }
        }
        .animate-bounce-right {
          animation: bounce-right 1s ease-in-out infinite;
        }
        @keyframes bounce-left {
          0%, 100% {
            transform: translateX(0);
          }
          50% {
            transform: translateX(-4px);
          }
        }
        .animate-bounce-left {
          animation: bounce-left 1s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
