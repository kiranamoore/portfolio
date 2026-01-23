"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import HeroBackground from "@/components/HeroBackground";

const ModelViewer = dynamic(
  () => import("@/components/ModelViewer3D"),
  { ssr: false }
);

// YouTube Embed with thumbnail and play button
function YouTubeEmbed({ videoId, title, muted, thumbnail }: { videoId: string; title: string; muted?: boolean; thumbnail?: string }) {
  const [isPlaying, setIsPlaying] = useState(false);

  if (isPlaying) {
    return (
      <iframe
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1${muted ? "&mute=1" : ""}`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="w-full h-full"
        style={{ border: 'none' }}
      />
    );
  }

  return (
    <div
      className="w-full h-full relative cursor-pointer group"
      onClick={() => setIsPlaying(true)}
    >
      {/* YouTube Thumbnail */}
      <img
        src={thumbnail || `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
        alt={title}
        className="w-full h-full object-cover"
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors" />
      {/* Play Button */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-20 h-20 bg-red-600 rounded-2xl flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform">
          <svg className="w-10 h-10 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
            <path d="M8 5v14l11-7z" />
          </svg>
        </div>
      </div>
    </div>
  );
}

// Types
export interface Slide {
  type: "video" | "image" | "model" | "youtube";
  src: string;
  caption?: string;
  objectFit?: "cover" | "contain";
  muted?: boolean;
  thumbnail?: string;
}

export interface Section {
  title: string;
  icon: "role" | "contributions" | "results";
  color: string;
  items: string[];
}

export interface ProjectLayoutProps {
  // Required
  title: string;
  company?: string;
  year: string;
  description: string;
  tags: string[];
  slides: Slide[];

  // Layout
  orientation?: "portrait" | "landscape";

  // Navigation
  prevProject?: { slug: string; title: string };
  nextProject?: { slug: string; title: string };

  // Content sections
  sections?: Section[];
}

// Icon components
const icons = {
  role: (
    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
    </svg>
  ),
  contributions: (
    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
    </svg>
  ),
  results: (
    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
    </svg>
  ),
};

const gradients = {
  role: "from-[#667eea] to-[#764ba2]",
  contributions: "from-[#f093fb] to-[#f5576c]",
  results: "from-[#4facfe] to-[#00f2fe]",
};

const bulletColors = {
  role: "#667eea",
  contributions: "#f093fb",
  results: "#4facfe",
};

export default function ProjectLayout({
  title,
  company,
  year,
  description,
  tags,
  slides,
  orientation = "portrait",
  prevProject,
  nextProject,
  sections = [],
}: ProjectLayoutProps) {
  const [activeSlide, setActiveSlide] = useState(0);
  const [hasScrolled, setHasScrolled] = useState(false);

  // Track scroll for landscape mode scroll indicator
  useEffect(() => {
    if (orientation !== "landscape") return;

    const handleScroll = () => {
      if (window.scrollY > 50) {
        setHasScrolled(true);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [orientation]);

  // Media display component (shared between orientations)
  const MediaDisplay = ({ className = "" }: { className?: string }) => (
    <div className={`relative ${className}`}>
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-500 ${
            activeSlide === index ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          {slide.type === "video" && (
            <video
              src={slide.src}
              controls
              muted
              autoPlay
              loop
              playsInline
              className="w-full h-full object-contain bg-black"
            />
          )}
          {slide.type === "model" && (
            <ModelViewer
              src={slide.src}
              alt={`${title} 3D Model`}
              ar
              autoRotate
              cameraControls
              style={{ width: "100%", height: "100%", background: "#FFFFFF" }}
            />
          )}
          {slide.type === "image" && (
            <div className="w-full h-full flex items-center justify-center bg-white">
              <img
                src={slide.src}
                alt={slide.caption || title}
                className={`w-full h-full ${slide.objectFit === "contain" ? "object-contain p-4" : "object-cover"}`}
              />
            </div>
          )}
          {slide.type === "youtube" && (
            <YouTubeEmbed videoId={slide.src} title={slide.caption || title} muted={slide.muted} thumbnail={slide.thumbnail} />
          )}
        </div>
      ))}

      {/* Slide Navigation Arrows (only when multiple slides) */}
      {slides.length > 1 && (
        <>
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
        </>
      )}
    </div>
  );

  // Side navigation component - only for project navigation
  const SideNavigation = () => (
    <>
      {/* Left Arrow - Prev Project */}
      {prevProject && (
        <Link
          href={`/work/${prevProject.slug}`}
          className="fixed left-4 lg:left-8 top-1/2 -translate-y-1/2 z-20 hidden lg:flex flex-col items-center justify-center gap-2 group"
        >
          <span className="text-[11px] text-[#86868B] uppercase tracking-widest text-center group-hover:text-[#667eea] transition-colors">Prev<br />Project</span>
          <svg
            className="w-6 h-6 text-[#86868B] group-hover:text-[#667eea] transition-colors animate-bounce-left"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
          </svg>
        </Link>
      )}

      {/* Right Arrow - Next Project */}
      {nextProject && (
        <Link
          href={`/work/${nextProject.slug}`}
          className="fixed right-4 lg:right-8 top-1/2 -translate-y-1/2 z-20 hidden lg:flex flex-col items-center justify-center gap-2 group"
        >
          <span className="text-[11px] text-[#86868B] uppercase tracking-widest text-center group-hover:text-[#667eea] transition-colors">Next<br />Project</span>
          <svg
            className="w-6 h-6 text-[#86868B] group-hover:text-[#667eea] transition-colors animate-bounce-right"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      )}
    </>
  );

  // Content section component
  const ContentSections = () => (
    <div className="space-y-1">
      {sections.map((section, idx) => (
        <div key={idx} className="rounded-xl" style={{ padding: '8px 0' }}>
          <h3 className="text-[14px] font-semibold text-[#1D1D1F] flex items-center gap-3" style={{ marginBottom: '16px' }}>
            <span className={`w-8 h-8 rounded-lg bg-gradient-to-br ${gradients[section.icon]} flex items-center justify-center shadow-md`}>
              {icons[section.icon]}
            </span>
            {section.title}
          </h3>
          <ul className="text-[14px] text-[#1D1D1F] space-y-2 pl-11">
            {section.items.map((item, itemIdx) => (
              <li key={itemIdx} className="flex items-start gap-2">
                <span style={{ color: bulletColors[section.icon] }} className="mt-1">•</span>
                <span dangerouslySetInnerHTML={{ __html: item }} />
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );

  // Portrait Layout (side-by-side)
  if (orientation === "portrait") {
    return (
      <div className="h-screen overflow-hidden hero-gradient relative">
        <HeroBackground />
        <SideNavigation />

        <div className="relative z-10 h-full flex items-center justify-center px-8 md:px-12 lg:px-16" style={{ paddingTop: '100px', paddingBottom: '40px' }}>
          <div className="w-full max-w-5xl h-full max-h-[calc(100vh-8rem)] flex flex-col lg:flex-row gap-4 lg:gap-8">

            {/* Left side - Media slideshow */}
            <div className="flex-1 flex flex-col min-h-0">
              <MediaDisplay className="flex-1 rounded-2xl overflow-hidden bg-white/80 backdrop-blur-sm border border-[#E5E5E5]/50 shadow-xl" />

              {/* Caption */}
              {slides[activeSlide]?.caption && (
                <p className="text-[13px] text-[#6E6E73] mt-3 text-center">
                  {slides[activeSlide].caption}
                </p>
              )}

              {/* Slide indicators */}
              {slides.length > 1 && (
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
              )}
            </div>

            {/* Right side - Text content */}
            <div className="flex-1 flex flex-col min-h-0">
              {/* Fixed Header Section */}
              <div className="flex-shrink-0 mb-6">
                {/* Tags */}
                <div className="flex flex-wrap gap-3 mb-8">
                  {tags.map((tag) => (
                    <span key={tag} className="inline-block font-medium text-[#667eea] bg-[#667eea]/10 rounded-lg" style={{ padding: '6px 14px', fontSize: '12px' }}>{tag}</span>
                  ))}
                </div>

                {/* Header */}
                <h1 className="text-[28px] md:text-[36px] font-bold text-[#1D1D1F] tracking-tight leading-tight mb-2">
                  {title}
                </h1>
                <p className="text-[14px] font-semibold text-[#667eea] mb-4">
                  {company ? `${company} · ` : ""}{year}
                </p>

                {/* Description */}
                <p className="text-[15px] text-[#1D1D1F] leading-relaxed">
                  {description}
                </p>
              </div>

              {/* Scrollable Highlights */}
              <div className="flex-1 overflow-y-auto pr-2">
                <ContentSections />
              </div>
            </div>

          </div>
        </div>

        <style jsx global>{`
          @keyframes bounce-right {
            0%, 100% { transform: translateX(0); }
            50% { transform: translateX(4px); }
          }
          .animate-bounce-right {
            animation: bounce-right 1s ease-in-out infinite;
          }
          @keyframes bounce-left {
            0%, 100% { transform: translateX(0); }
            50% { transform: translateX(-4px); }
          }
          .animate-bounce-left {
            animation: bounce-left 1s ease-in-out infinite;
          }
        `}</style>
      </div>
    );
  }

  // Landscape Layout (stacked)
  return (
    <div className="min-h-screen hero-gradient relative flex flex-col">
      <HeroBackground />
      <SideNavigation />

      <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-8 md:px-12 lg:px-16 py-12" style={{ paddingTop: '100px' }}>
        <div className="w-full max-w-5xl">

          {/* Header Area - Above Video */}
          <div className="text-center" style={{ marginBottom: '32px' }}>
            {/* Tags */}
            <div className="flex flex-wrap justify-center gap-3" style={{ marginBottom: '20px' }}>
              {tags.map((tag) => (
                <span key={tag} className="inline-block font-medium text-[#667eea] bg-[#667eea]/10 rounded-lg" style={{ padding: '6px 14px', fontSize: '12px' }}>{tag}</span>
              ))}
            </div>

            {/* Title */}
            <h1 className="text-[28px] md:text-[42px] font-bold text-[#1D1D1F] tracking-tight leading-tight" style={{ marginBottom: '8px' }}>
              {title}
            </h1>

            {/* Date */}
            <p className="text-[14px] font-semibold text-[#667eea]">
              {company ? `${company} · ` : ""}{year}
            </p>
          </div>

          {/* Media Section - Fixed aspect ratio for landscape */}
          <div className="mb-6">
            <MediaDisplay className="w-full aspect-video rounded-2xl overflow-hidden bg-white/80 backdrop-blur-sm border border-[#E5E5E5]/50 shadow-xl" />

            {/* Caption */}
            {slides[activeSlide]?.caption && (
              <p className="text-[13px] text-[#6E6E73] mt-3 text-center">
                {slides[activeSlide].caption}
              </p>
            )}

            {/* Slide indicators */}
            {slides.length > 1 && (
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
            )}
          </div>

          {/* Scroll Indicator */}
          <div className={`flex flex-col items-center gap-2 transition-opacity duration-500 ${hasScrolled ? 'opacity-0' : 'opacity-100'}`} style={{ paddingTop: '32px', paddingBottom: '32px' }}>
            <span className="text-[12px] text-[#86868B] uppercase tracking-widest">Scroll for details</span>
            <svg className="w-6 h-6 text-[#86868B] animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
            </svg>
          </div>

          {/* Content Section */}
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl border border-[#E5E5E5]/50 shadow-lg" style={{ padding: '40px', paddingLeft: '48px', paddingRight: '48px' }}>
            {/* Description */}
            <p className="text-[16px] text-[#1D1D1F] leading-relaxed" style={{ marginBottom: '24px' }}>
              {description}
            </p>

            {/* Content Sections */}
            <ContentSections />
          </div>

        </div>
      </div>
    </div>
  );
}
