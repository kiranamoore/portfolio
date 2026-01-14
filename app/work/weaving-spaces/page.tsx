"use client";

import Link from "next/link";
import { useState } from "react";
import HeroBackground from "@/components/HeroBackground";

export default function WeavingSpacesPage() {
  const [activeSlide, setActiveSlide] = useState(0);

  const slides = [
    { type: "image", src: "/weaving/weaving-spaces-01.png", caption: "Weaving Spaces - Concept Development" },
    { type: "image", src: "/weaving/weaving-spaces-02.png", caption: "Weaving Spaces - Spatial Design" },
    { type: "image", src: "/weaving/project-4-01.png", caption: "Architectural Form Study 1" },
    { type: "image", src: "/weaving/project-4-02.png", caption: "Architectural Form Study 2" },
    { type: "image", src: "/weaving/project-4-03.png", caption: "Architectural Form Study 3" },
    { type: "image", src: "/weaving/project-4-04.png", caption: "Architectural Form Study 4" },
    { type: "image", src: "/weaving/project-4-05.png", caption: "Architectural Form Study 5" },
    { type: "image", src: "/weaving/project-4-06.png", caption: "Architectural Form Study 6" },
    { type: "image", src: "/weaving/project-4-07.png", caption: "Architectural Form Study 7" },
  ];

  return (
    <div className="h-screen overflow-hidden hero-gradient relative">
      <HeroBackground />

      <div className="relative z-10 h-full flex items-center justify-center px-8 md:px-12 lg:px-16" style={{ paddingTop: '100px', paddingBottom: '40px' }}>
        {/* Main container */}
        <div className="w-full max-w-7xl h-full max-h-[calc(100vh-8rem)] flex flex-col lg:flex-row gap-4 lg:gap-8">

          {/* Left Navigation Arrow - Previous Project */}
          <Link
            href="/work/fading-memories"
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
                  <div className="w-full h-full flex items-center justify-center bg-white p-4">
                    <img
                      src={slide.src}
                      alt={slide.caption}
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>
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
                <span className="inline-block font-medium text-[#667eea] bg-[#667eea]/10 rounded-lg" style={{ padding: '6px 14px', fontSize: '12px' }}>Architecture</span>
                <span className="inline-block font-medium text-[#667eea] bg-[#667eea]/10 rounded-lg" style={{ padding: '6px 14px', fontSize: '12px' }}>3D Modeling</span>
                <span className="inline-block font-medium text-[#667eea] bg-[#667eea]/10 rounded-lg" style={{ padding: '6px 14px', fontSize: '12px' }}>Concept</span>
              </div>

              {/* Header */}
              <h1 className="text-[28px] md:text-[36px] font-bold text-[#1D1D1F] tracking-tight leading-tight mb-2">
                Weaving Spaces
              </h1>
              <p className="text-[14px] font-semibold text-[#667eea] mb-4">Fall 2022</p>

              {/* Description */}
              <p className="text-[15px] text-[#1D1D1F] leading-relaxed">
                Led the architectural design and concept development of Weaving Spaces, translating two-dimensional linework into dynamic, interwoven forms that create layered environments blending structure and landscape.
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
                    <span>Served as <strong>Lead Architectural Designer</strong> to explore weaving as both a conceptual and structural strategy in architectural form-making.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#667eea] mt-1">•</span>
                    <span>Aimed to transform <strong>abstract graphic studies</strong> into spatial, three-dimensional designs that encourage movement and interaction.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#667eea] mt-1">•</span>
                    <span>Focused on evolving weaving into a <strong>cohesive architectural language</strong> adaptable across multiple scales.</span>
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
                    <span>Developed <strong>figure-ground abstractions</strong> from line drawings of a hair straightener, experimenting with rotations and color shifts to analyze spatial relationships.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#f093fb] mt-1">•</span>
                    <span>Created <strong>physical models</strong> using interlaced planes that intersect at varied elevations and curvatures.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#f093fb] mt-1">•</span>
                    <span>Scaled weaving concepts into <strong>architectural forms</strong> featuring arching, dipping planes and elevated extensions that visually connect site elements.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#f093fb] mt-1">•</span>
                    <span>Designed <strong>habitable spaces</strong> where woven planes blur boundaries between structure and landscape, fostering layered circulation and exploration.</span>
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
                    <span>Demonstrated the ability to translate <strong>abstract graphic ideas</strong> into sophisticated physical and spatial designs.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#4facfe] mt-1">•</span>
                    <span>Established weaving as a <strong>formal and structural design tool</strong> capable of shaping both space and experience.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#4facfe] mt-1">•</span>
                    <span>Delivered <strong>dynamic environments</strong> that invite exploration through interconnected forms and visual depth.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#4facfe] mt-1">•</span>
                    <span>Developed a design approach that integrates <strong>weaving principles</strong> as a flexible method for architectural innovation.</span>
                  </li>
                </ul>
              </div>
            </div>

          </div>

          {/* Right Navigation Arrow - Next Project */}
          <Link
            href="/work/the-helper"
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
