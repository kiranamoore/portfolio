"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function ZuZuPage() {
  const [activeSection, setActiveSection] = useState("overview");

  // NEW: modal state for enlarged image
  const [modalImage, setModalImage] = useState<string | null>(null);

  const sections = [
    { id: "overview", label: "Overview" },
    { id: "summary", label: "Summary" },
    { id: "before-after", label: "Before/After" },
    { id: "problem", label: "Problem" },
    { id: "research", label: "Research" },
    { id: "hmw", label: "H.M.W" },
    { id: "design", label: "Design" },
    { id: "digital-marketing", label: "Digital Marketing" },
    { id: "impact", label: "Outcome" },
    { id: "testimonials", label: "Endorsements" },
    { id: "lessons", label: "Lessons" },
  ];

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 130;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      // Track active section
      const sectionElements = sections
        .map((s) => ({
          id: s.id,
          element: document.getElementById(s.id),
        }))
        .filter((s) => s.element);

      for (let i = sectionElements.length - 1; i >= 0; i--) {
        const section = sectionElements[i];
        if (section.element) {
          const rect = section.element.getBoundingClientRect();
          if (rect.top <= 150) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll while modal open + handle Escape key
  useEffect(() => {
    if (modalImage) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";

      const onKey = (e: KeyboardEvent) => {
        if (e.key === "Escape") setModalImage(null);
      };
      window.addEventListener("keydown", onKey);

      return () => {
        document.body.style.overflow = originalOverflow;
        window.removeEventListener("keydown", onKey);
      };
    }
  }, [modalImage]);

  // helper to open modal
  const openImage = (src: string) => {
    setModalImage(src);
  };

  // helper to close modal
  const closeModal = () => setModalImage(null);

  return (
    <div className="min-h-screen hero-gradient relative flex flex-col">
      {/* Side previous/next project links */}
      <Link
        href="/work/hyperx"
        className="fixed left-4 lg:left-8 top-1/2 -translate-y-1/2 z-20 hidden lg:flex flex-col items-center justify-center gap-2 group"
      >
        <span className="text-[11px] text-[#86868B] uppercase tracking-widest text-center group-hover:text-[#667eea] transition-colors">
          Prev
          <br />
          Project
        </span>
        <svg
          className="w-6 h-6 text-[#86868B] group-hover:text-[#667eea] transition-colors animate-bounce-left"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
        </svg>
      </Link>

      <Link
        href="/work/nogi-nogi"
        className="fixed right-4 lg:right-8 top-1/2 -translate-y-1/2 z-20 hidden lg:flex flex-col items-center justify-center gap-2 group"
      >
        <span className="text-[11px] text-[#86868B] uppercase tracking-widest text-center group-hover:text-[#667eea] transition-colors">
          Next
          <br />
          Project
        </span>
        <svg
          className="w-6 h-6 text-[#86868B] group-hover:text-[#667eea] transition-colors animate-bounce-right"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
        </svg>
      </Link>

      {/* Sticky Sidebar Section Navigation — only on wide screens */}
      <nav className="hidden 2xl:block fixed top-1/2 -translate-y-1/2 z-30" style={{ left: "calc((50vw - 448px) / 2)" }}>
        <div className="space-y-2">
          {sections.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(section.id);
              }}
              className={`block text-[14px] transition-all duration-200 ${
                activeSection === section.id ? "text-[#667eea] font-medium" : "text-[#86868B] hover:text-[#1D1D1F]"
              }`}
            >
              {activeSection === section.id && <span className="inline-block mr-2">←</span>}
              {section.label}
            </a>
          ))}
        </div>
      </nav>

      {/* Horizontal sticky sub-header nav — visible below 2xl */}
      <div className="2xl:hidden sticky top-[80px] z-40 bg-white/95 backdrop-blur-xl border-b border-[#E5E5E5]/60">
        <div className="flex items-center justify-center gap-2 px-4 py-3 overflow-x-auto scrollbar-hide">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              className={`whitespace-nowrap text-[13px] font-medium rounded-full transition-all duration-200 flex-shrink-0 ${
                activeSection === section.id
                  ? "bg-[#667eea] text-white shadow-sm"
                  : "text-[#86868B] hover:text-[#1D1D1F] hover:bg-[#F5F5F7]"
              }`}
              style={{ padding: "6px 16px" }}
            >
              {section.label}
            </button>
          ))}
        </div>
      </div>

      <div className="relative z-10 flex-1 flex flex-col items-center px-6 md:px-10 lg:px-20 pt-32 pb-24">
        <div className="w-full max-w-4xl flex flex-col gap-6">
          {/* 1. OVERVIEW */}
          <section className="flex flex-col gap-0">
            {/* Title */}
            <div id="overview" className="text-center mb-0 px-4 md:px-8 scroll-mt-[130px]">
              <h1 className="text-[36px] md:text-[44px] font-bold text-[#1D1D1F] tracking-tight leading-[1.1] mb-3">
                ZuZu Design System &amp; Brand Identity
              </h1>
              <p className="text-[18px] text-[#667eea] font-semibold">ZuZu · Visual Design · Design Systems</p>
              <p className="text-center text-[16px] text-[#1D1D1F] py-4 px-4 md:px-8">Designing the platform where superfans become an artist&apos;s most valuable audience.</p>

              {/* Hero Visual */}
              <div className="rounded-2xl overflow-hidden mb-0">
                <img src="/zuzu/Hero%20Image%20ZuZu.png" alt="ZuZu brand identity and design system overview" className="w-full cursor-zoom-in" onClick={() => openImage("/zuzu/Hero%20Image%20ZuZu.png")} />
                <p className="text-center text-[14px] text-[#6E6E73] italic py-4 px-4 md:px-8">Define. Systematize. Scale.</p>
              </div>
              {/* Product Summary */}
              <div id="summary" className="mb-12 scroll-mt-[130px]">
                <p className="text-[14px] font-bold text-[#667eea] mb-3 text-left" style={{ fontFamily: 'var(--font-inter)' }}>EXECUTIVE SUMMARY</p>
                <p className="text-[16px] md:text-[17px] text-[#1D1D1F] leading-relaxed text-left">
                  Joined ZuZu as the <strong>sole visual designer</strong> when the product existed only as a strategic thesis: no brand, no UI, no design infrastructure. Over <strong>4.5 months</strong>, I built the complete visual identity and design system from zero. The system I delivered is currently in <strong>active engineering implementation</strong> and powered the interactive prototype used for <strong>investor pitches</strong>.
                </p>
              </div>
            </div>

            {/* --- Three equal cards row --- */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-5">
              {/* Card 1: Role */}
              <div className="bg-white rounded-xl p-6 border border-[#F0EDE9] shadow-sm">
                <p className="text-[14px] font-bold text-[#667eea] mb-3" style={{ fontFamily: 'var(--font-inter)' }}>ROLE</p>
                <div className="text-[15px] text-[#1D1D1F] leading-relaxed space-y-1">
                  <p>Sole Visual Designer</p>
                </div>
              </div>

              {/* Card 2: Team */}
              <div className="bg-white rounded-xl p-6 border border-[#F0EDE9] shadow-sm">
                <p className="text-[14px] font-bold text-[#667eea] mb-3" style={{ fontFamily: 'var(--font-inter)' }}>TEAM</p>
                <div className="text-[15px] text-[#1D1D1F] leading-relaxed space-y-1">
                  <p className="font-bold text-[#667eea]">1 Designer (Me)</p>
                  <p>Founder &amp; Product Team</p>
                </div>
              </div>

              {/* Card 3: Timeline */}
              <div className="bg-white rounded-xl p-6 border border-[#F0EDE9] shadow-sm">
                <p className="text-[14px] font-bold text-[#667eea] mb-3" style={{ fontFamily: 'var(--font-inter)' }}>TIMELINE</p>
                <p className="text-[15px] text-[#1D1D1F]">4.5 months</p>
              </div>
            </div>

            {/* Role & Responsibilities */}
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl border border-[#E5E5E5]/50 shadow-sm p-10 px-8 md:px-12">
              {/* --- Responsibilities list --- */}
              <div className="mb-10">
                <p className="text-[14px] font-bold text-[#667eea] mb-3" style={{ fontFamily: 'var(--font-inter)' }}>WHAT I DID</p>
                <ul className="space-y-2 text-[15px] text-[#1D1D1F] pl-4 pr-4">
                  <li className="flex items-start gap-2">
                    <span className="text-[#667eea] mt-1">•</span>
                    <span>Built the complete visual identity from zero: logo suite, brand bible, and brand application templates</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#667eea] mt-1">•</span>
                    <span>Designed 16+ UI component types with documented states, variants, and interaction specifications</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#667eea] mt-1">•</span>
                    <span>Created a custom iconography system, including custom cursor states</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#667eea] mt-1">•</span>
                    <span>Architected dark/light theming as a system, not a color swap</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#667eea] mt-1">•</span>
                    <span>Powered the interactive prototype used for investor pitches</span>
                  </li>
                </ul>
              </div>

              {/* Tools & Platform */}
              <div>
                <p className="text-[14px] font-bold text-[#667eea] mb-2" style={{ fontFamily: 'var(--font-inter)' }}>TOOLS &amp; PLATFORM</p>
                <p className="text-[15px] text-[#1D1D1F]">
                  Figma, Lovable · Design Systems, Brand Identity, Iconography
                </p>
              </div>
            </div>

            {/* Before/After */}
            <div id="before-after" className="mb-12 scroll-mt-[130px]">
              <div className="rounded-xl overflow-hidden shadow-sm mb-10">
                <img src="/zuzu/Before%20%2B%20After%20ZuZu.png" alt="Before and after comparison" className="w-full cursor-zoom-in" onClick={() => openImage("/zuzu/Before%20%2B%20After%20ZuZu.png")} />
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="px-4 md:px-6">
                  <p className="font-semibold text-[#1D1D1F] mb-3">Before:</p>
                  <p className="text-[15px] text-[#6E6E73] leading-[1.6]">
                    An 11-page strategic thesis and a <strong>multi-billion dollar market opportunity</strong> identified by Goldman Sachs and Morgan Stanley, but <strong>zero visual identity, zero UI, and zero design infrastructure.</strong>
                  </p>
                </div>
                <div className="px-4 md:px-6">
                  <p className="font-semibold text-[#1D1D1F] mb-3">After:</p>
                  <p className="text-[15px] text-[#6E6E73] leading-[1.6]">
                    A complete <strong>brand identity system and 16+ component UI library</strong> designed to make a new kind of economic relationship, superfans paying for proximity, identity, and belonging, feel tangible, trustworthy, and worth paying for.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <hr className="border-0 border-t border-[#D1D1D6] w-full my-0" />
          {/* Problem Statement */}
          <div id="problem" className="mb-0 scroll-mt-[130px]">
            <p className="text-[14px] font-bold text-[#667eea] mb-3" style={{ fontFamily: 'var(--font-inter)' }}>PROBLEM</p>
            <p className="text-[16px] md:text-[22px] text-[#1D1D1F] leading-[1.7]">
              Superfans, the most economically valuable segment of an artist&apos;s audience, have <strong>never had a native home.</strong>
            </p>
          </div>

          {/* 3. WHAT THIS MEANS */}
          <section className="bg-white/60 backdrop-blur-sm rounded-2xl border border-[#E5E5E5]/50 shadow-sm p-10 px-8 md:px-12">
            <h2 className="text-[22px] md:text-[30px] font-semibold text-[#1D1D1F] mb-10">Why This Matters</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-5">
              <div className="bg-white rounded-xl p-6 border border-none shadow-none">
                <p className="text-[14px] font-bold text-[#667eea] mb-3" style={{ fontFamily: 'var(--font-inter)' }}>FOR ARTISTS</p>
                <div className="text-[16px] text-[#1D1D1F] leading-relaxed space-y-1">
                  <p>
                    Their most economically valuable audience is <span className="font-semibold">invisible to them.</span> They monetize superfans indirectly through concerts and merchandise because those are the only channels available.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 border border-none shadow-none">
                <p className="text-[14px] font-bold text-[#667eea] mb-3" style={{ fontFamily: 'var(--font-inter)' }}>FOR FANS</p>
                <p className="text-[16px] text-[#1D1D1F]">
                  There is no place designed for what they actually want: <span className="font-semibold">proximity, identity, and belonging.</span> They piece together a fan identity across five platforms, none of which recognize or reward their commitment.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 border border-none shadow-none">
                <p className="text-[14px] font-bold text-[#667eea] mb-3" style={{ fontFamily: 'var(--font-inter)' }}>FOR DESIGN</p>
                <p className="text-[16px] text-[#1D1D1F]">ZuZu needed a visual language for <span className="font-semibold">an entirely new product category,</span> one with no established design patterns to borrow from.</p>
              </div>
            </div>
            <p className="text-[15px] text-[#1D1D1F] leading-[1.7] pl-2 pr-2">
              Music is no longer the product. Spotify redefined music as ambient infrastructure, everywhere, available for fractions of a cent per stream. The song gets someone interested in an artist, but <strong>it is not what monetizes that interest.</strong> Instagram gives superfans a feed. Discord gives them a chat room. Patreon gives them a subscription paywall. <strong>None of these platforms were built for the relationship itself.</strong>
            </p>
          </section>

          <hr className="border-0 border-t border-[#D1D1D6] w-full my-0" />

          {/* 4. RESEARCH */}
          <div id="research" className="scroll-mt-[130px]">
            <p className="text-[14px] font-bold text-[#667eea] mb-3" style={{ fontFamily: 'var(--font-inter)' }}>RESEARCH</p>
            <p className="text-[16px] md:text-[22px] text-[#1D1D1F] leading-[1.7] mb-3">Designing for a Relationship No Platform Was Built Around</p>
            <p className="text-[16px] md:text-[16px] text-[#1D1D1F] leading-[1.7] mb-3">
              I audited the visual identity and UI patterns of platforms in the artist-fan ecosystem, explored visual direction through moodboarding, and pressure-tested every decision in weekly design critiques.
            </p>
          </div>

          <section className="bg-white/60 backdrop-blur-sm rounded-2xl border border-[#E5E5E5]/50 shadow-sm p-10 px-8 md:px-12">
            <div className="mb-12">
              <h3 className="text-[20px] md:text-[22px] font-semibold text-[#1D1D1F] mb-8">Competitive Audit</h3>
              <p className="text-[15px] text-[#1D1D1F] leading-[1.7]">
                I analyzed the visual identity and UI patterns of <strong>seven platforms</strong> in the artist-fan ecosystem to identify where their design languages succeeded and where they failed to communicate a direct, intimate relationship.
              </p>
              <p className="text-[15px] text-[#1D1D1F] leading-[1.7] mt-3">
                <strong>Key Insight:</strong> <u>Every platform solved an adjacent problem.</u> None were designed for the core relationship ZuZu was building around.
              </p>
            </div>
          </section>

          <section className="bg-white/60 backdrop-blur-sm rounded-2xl border border-[#E5E5E5]/50 shadow-sm p-10 px-8 md:px-12">
            <div className="mb-12">
              <h3 className="text-[20px] md:text-[22px] font-semibold text-[#1D1D1F] mb-8">Visual Direction</h3>
              <div className="rounded-xl overflow-hidden shadow-sm mb-10">
                <img src="/zuzu/moodboard%20zuzu.png" alt="Visual direction moodboards" className="w-full cursor-zoom-in" onClick={() => openImage("/zuzu/moodboard%20zuzu.png")} />
              </div>
              <p className="text-[15px] text-[#1D1D1F] leading-[1.7]">
                Through moodboarding and visual exploration, I developed a direction that had to reconcile <strong>two opposing aesthetics:</strong> the clean efficiency of contemporary product UI with the warmth and personality of early-2000s desktop software. The founder&apos;s creative direction was intentional: <u>ZuZu should feel like a personal digital space, not a content consumption feed.</u>
              </p>
            </div>
          </section>

          <section className="bg-white/60 backdrop-blur-sm rounded-2xl border border-[#E5E5E5]/50 shadow-sm p-10 px-8 md:px-12">
            <div>
              <h3 className="text-[20px] md:text-[22px] font-semibold text-[#1D1D1F] mb-8">Validation</h3>
              <div className="bg-gradient-to-br from-[#667eea]/10 to-[#764ba2]/10 rounded-xl p-8 border border-[#667eea]/20">
                <p className="text-[16px] md:text-[17px] text-[#1D1D1F] leading-[1.7]">
                  <strong>Weekly design critiques</strong> with the founder and team served as the primary feedback loop throughout the engagement. Brand decisions, component designs, and system architecture were <strong>pressure-tested against the product thesis every week,</strong> ensuring the visual system stayed aligned with what ZuZu was actually building, not just what looked good in isolation.
                </p>
              </div>
            </div>
          </section>

          <hr className="border-0 border-t border-[#D1D1D6] w-full my-0" />
          {/* How Might We */}
          <div id="hmw" className="mb-12 scroll-mt-[130px]">
            <p className="text-[14px] font-bold text-[#667eea] mb-3" style={{ fontFamily: 'var(--font-inter)' }}>HOW MIGHT WE</p>
            <p className="text-[18px] md:text-[18px] text-[#1D1D1F] leading-[1.7] italic">
              How might we create a visual identity and design system that makes an entirely new kind of platform, one built for superfan belonging, not content consumption, feel immediately credible, emotionally resonant, and scalable enough to grow with the product?
            </p>
          </div>
          <hr className="border-0 border-t border-[#D1D1D6] w-full my-0" />

          {/* 6. DESIGN */}
          <section id="design" className="bg-none backdrop-blur-sm rounded-2xl border border-none shadow-none p-10 px-8 md:px-12 scroll-mt-[130px]">
            <p className="text-[14px] font-bold text-[#667eea] mb-3" style={{ fontFamily: 'var(--font-inter)' }}>DESIGN</p>

            <div className="mb-12">
              <h3 className="text-[20px] md:text-[22px] font-semibold text-[#1D1D1F] mb-6">The Design Brief</h3>
              <div className="space-y-4 text-[15px] md:text-[16px] text-[#1D1D1F] leading-[1.7]">
                <p>
                  The founder&apos;s creative direction posed an <strong>intentional paradox:</strong> build an interface that carries the warmth and personality of early-2000s desktop software, the era of Winamp skins and AIM profiles, when digital spaces felt personal, but with the <strong>functional clarity and scalability of modern product UI.</strong>
                </p>
                <p>
                  This wasn&apos;t aesthetic nostalgia for its own sake. ZuZu&apos;s thesis is that fan-artist relationships should feel <strong>intimate and identity-driven, not transactional.</strong> The visual system needed to evoke that feeling of personal digital space while remaining intuitive enough for a modern product audience.
                </p>
              </div>
            </div>

            <div className="mb-12">
              <h3 className="text-[20px] md:text-[22px] font-semibold text-[#1D1D1F] mb-6">Finding the Middle Ground</h3>
              <div className="space-y-4 text-[15px] md:text-[16px] text-[#1D1D1F] leading-[1.7]">
                <p>
                  Through extensive iteration, exploring gradients, type treatments, button styles, and interaction patterns across the full stylistic spectrum, I converged on a system that <strong>leans modern in structure and minimalist in layout,</strong> but carries <strong>nostalgic DNA in its personality:</strong> color choices, iconography, and moments of visual texture.
                </p>
                <div className="bg-gradient-to-br from-[#667eea]/10 to-[#764ba2]/10 rounded-xl p-6 border border-[#667eea]/20">
                  <p className="text-[15px] text-[#1D1D1F] leading-[1.6]"><strong>Guiding Principle:</strong> <u>Function sets the floor, feeling sets the ceiling.</u> Every component had to be immediately legible to a first-time user. Once usability was locked, I pushed expressiveness as far as it could go without compromising comprehension.</p>
                </div>
              </div>
            </div>

            {/* Design Principles */}
            <div className="mb-12">
              <h3 className="text-[20px] md:text-[22px] font-semibold text-[#1D1D1F] mb-8">Design Principles</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white rounded-xl p-6 border border-[#E5E5E5]/30 shadow-sm">
                  <h4 className="font-semibold text-[#1D1D1F] mb-2">Belonging over Consumption</h4>
                  <p className="text-[15px] text-[#6E6E73]">Every decision was filtered through one question: does this make the user feel like they belong to something, or like they&apos;re consuming something? The visual language had to signal community, not content.</p>
                </div>
                <div className="bg-white rounded-xl p-6 border border-[#E5E5E5]/30 shadow-sm">
                  <h4 className="font-semibold text-[#1D1D1F] mb-2">Personality within Structure</h4>
                  <p className="text-[15px] text-[#6E6E73]">Modern UI frameworks provide clarity. Early-2000s interfaces provided soul. The system borrows structural discipline from the former and emotional resonance from the latter, never sacrificing one for the other.</p>
                </div>
                <div className="bg-white rounded-xl p-6 border border-[#E5E5E5]/30 shadow-sm">
                  <h4 className="font-semibold text-[#1D1D1F] mb-2">Scalable Specificity</h4>
                  <p className="text-[15px] text-[#6E6E73]">Every component serves ZuZu&apos;s specific product thesis while remaining extensible enough to support features that don&apos;t exist yet. A foundation, not a ceiling.</p>
                </div>
              </div>
            </div>

            {/* Brand Identity */}
            <div className="mb-12">
              <h3 className="text-[20px] md:text-[22px] font-semibold text-[#1D1D1F] mb-8">Brand Identity</h3>
              <div className="rounded-xl overflow-hidden shadow-sm mb-10">
                <img src="/zuzu/logo%20development.png" alt="ZuZu logo development" className="w-full cursor-zoom-in" onClick={() => openImage("/zuzu/logo%20development.png")} />
                <p className="text-center text-[14px] text-[#6E6E73] italic py-4 px-4 md:px-8 bg-white">Logo development from concept to final</p>
              </div>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white rounded-xl p-6 border border-[#E5E5E5]/30 shadow-sm">
                  <h4 className="font-semibold text-[#1D1D1F] mb-2">Logo Suite</h4>
                  <p className="text-[15px] text-[#6E6E73]">From initial exploration through multiple development rounds to a final logo and monogram variant, designed to work across product UI, social media, investor materials, and eventual merchandise.</p>
                </div>
                <div className="bg-white rounded-xl p-6 border border-[#E5E5E5]/30 shadow-sm">
                  <h4 className="font-semibold text-[#1D1D1F] mb-2">Brand Bible</h4>
                  <p className="text-[15px] text-[#6E6E73]">Foundational guidelines codifying the visual language, ensuring that every touchpoint, whether designed by me or by someone after me, maintains the system&apos;s integrity.</p>
                </div>
                <div className="bg-white rounded-xl p-6 border border-[#E5E5E5]/30 shadow-sm">
                  <h4 className="font-semibold text-[#1D1D1F] mb-2">Dark &amp; Light Mode</h4>
                  <p className="text-[15px] text-[#6E6E73]">Built as a system-level architecture, not a color swap. Both modes preserve the brand&apos;s nostalgic personality and hierarchy regardless of user preference or system setting.</p>
                </div>
              </div>
            </div>
          </section>
          {/* UI Component Library */}
          <section className="bg-white/60 backdrop-blur-sm rounded-2xl border border-[#E5E5E5]/50 shadow-sm p-10 px-8 md:px-12">
            <h2 className="text-[28px] md:text-[30px] font-bold text-[#1D1D1F] mb-4">UI Component Library</h2>
            <p className="text-[15px] text-[#1D1D1F] leading-[1.7] mb-10">
              <strong>16 component types,</strong> each designed with documented states, variants, and interaction specifications.
            </p>
            <div className="rounded-xl overflow-hidden shadow-sm mb-10">
              <img src="/zuzu/component-library.png" alt="ZuZu UI component library" className="w-full cursor-zoom-in" onClick={() => openImage("/zuzu/component-library.png")} />
            </div>

            {/* Core Interaction */}
            <div className="mb-10">
              <h3 className="text-[18px] font-semibold text-[#1D1D1F] mb-6">Core Interaction</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white rounded-xl p-6 border border-[#F0EDE9] shadow-sm">
                  <h4 className="font-semibold text-[#1D1D1F] mb-2">Buttons</h4>
                  <p className="text-[15px] text-[#6E6E73]">Primary, secondary, outline, and pill variants with disabled states and leading/trailing icon configurations. Interaction clarity over aesthetic maximalism.</p>
                </div>
                <div className="bg-white rounded-xl p-6 border border-[#F0EDE9] shadow-sm">
                  <h4 className="font-semibold text-[#1D1D1F] mb-2">Input Fields</h4>
                  <p className="text-[15px] text-[#6E6E73]">Three distinct variants (standard text, rich text editor, date/time picker), each solving a different input context rather than forcing visual uniformity.</p>
                </div>
                <div className="bg-white rounded-xl p-6 border border-[#F0EDE9] shadow-sm">
                  <h4 className="font-semibold text-[#1D1D1F] mb-2">Controls</h4>
                  <p className="text-[15px] text-[#6E6E73]">Sliders, steppers, and interactive elements for direct manipulation.</p>
                </div>
              </div>
            </div>

            {/* System Feedback */}
            <div className="mb-10">
              <h3 className="text-[18px] font-semibold text-[#1D1D1F] mb-6">System Feedback</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white rounded-xl p-6 border border-[#F0EDE9] shadow-sm">
                  <h4 className="font-semibold text-[#1D1D1F] mb-2">Alerts</h4>
                  <p className="text-[15px] text-[#6E6E73]">Banners, dialogues, and toast notifications calibrated for appropriate urgency without disrupting the platform&apos;s warmth.</p>
                </div>
                <div className="bg-white rounded-xl p-6 border border-[#F0EDE9] shadow-sm">
                  <h4 className="font-semibold text-[#1D1D1F] mb-2">Loaders</h4>
                  <p className="text-[15px] text-[#6E6E73]">Spinners, progress bars, and skeletal loading states that maintain brand personality during wait states.</p>
                </div>
                <div className="bg-white rounded-xl p-6 border border-[#F0EDE9] shadow-sm">
                  <h4 className="font-semibold text-[#1D1D1F] mb-2">Ratings</h4>
                  <p className="text-[15px] text-[#6E6E73]">Review and star-rating components for fan-to-fan and fan-to-artist interaction.</p>
                </div>
              </div>
            </div>

            {/* Data & Media */}
            <div className="mb-10">
              <h3 className="text-[18px] font-semibold text-[#1D1D1F] mb-6">Data &amp; Media</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white rounded-xl p-6 border border-[#F0EDE9] shadow-sm">
                  <h4 className="font-semibold text-[#1D1D1F] mb-2">Charts</h4>
                  <p className="text-[15px] text-[#6E6E73]">Data visualization for artist dashboards: analytics and engagement metrics designed for creators, not analysts.</p>
                </div>
                <div className="bg-white rounded-xl p-6 border border-[#F0EDE9] shadow-sm">
                  <h4 className="font-semibold text-[#1D1D1F] mb-2">Tables</h4>
                  <p className="text-[15px] text-[#6E6E73]">Structured data display for revenue, fan activity, and content management.</p>
                </div>
                <div className="bg-white rounded-xl p-6 border border-[#F0EDE9] shadow-sm">
                  <h4 className="font-semibold text-[#1D1D1F] mb-2">Media Players</h4>
                  <p className="text-[15px] text-[#6E6E73]">Audio and video playback controls designed for a music-native context, not retrofitted from a generic player.</p>
                </div>
              </div>
            </div>

            {/* Fan Experience */}
            <div className="mb-10">
              <h3 className="text-[18px] font-semibold text-[#1D1D1F] mb-6">Fan Experience</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white rounded-xl p-6 border border-[#F0EDE9] shadow-sm">
                  <h4 className="font-semibold text-[#1D1D1F] mb-2">Fan Reaction UI</h4>
                  <p className="text-[15px] text-[#6E6E73]">The most expressive component in the system. A polling interface with percentage breakdowns where fans directly influence artist decisions. This is where nostalgic, personality-driven design could push furthest, because engagement and emotional investment are the point.</p>
                </div>
                <div className="bg-white rounded-xl p-6 border border-[#F0EDE9] shadow-sm">
                  <h4 className="font-semibold text-[#1D1D1F] mb-2">Settings</h4>
                  <p className="text-[15px] text-[#6E6E73]">Toggle switches, checkboxes, and notification badges with unread counts. The layer where fans control their relationship preferences.</p>
                </div>
              </div>
            </div>

            {/* System Infrastructure */}
            <div className="mb-2">
              <h3 className="text-[18px] font-semibold text-[#1D1D1F] mb-6">System Infrastructure</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white rounded-xl p-6 border border-[#F0EDE9] shadow-sm">
                  <h4 className="font-semibold text-[#1D1D1F] mb-2">Icon Buttons</h4>
                  <p className="text-[15px] text-[#6E6E73]">Interactive buttons relying on iconography without text labels.</p>
                </div>
                <div className="bg-white rounded-xl p-6 border border-[#F0EDE9] shadow-sm">
                  <h4 className="font-semibold text-[#1D1D1F] mb-2">Icons</h4>
                  <p className="text-[15px] text-[#6E6E73]">Complete custom iconography suite designed for the platform&apos;s specific interaction patterns.</p>
                </div>
                <div className="bg-white rounded-xl p-6 border border-[#F0EDE9] shadow-sm">
                  <h4 className="font-semibold text-[#1D1D1F] mb-2">Cursors</h4>
                  <p className="text-[15px] text-[#6E6E73]">Custom cursor states (default, hover, pointer) reinforcing the early-2000s personality at the interaction level.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Social Media Presence */}
          <section id="digital-marketing" className="bg-white/60 backdrop-blur-sm rounded-2xl border border-[#E5E5E5]/50 shadow-sm p-10 px-8 md:px-12 scroll-mt-[130px]">
            <h3 className="text-[20px] md:text-[22px] font-semibold text-[#1D1D1F] mb-8">Social Media Presence</h3>
            <p className="text-[15px] text-[#1D1D1F] leading-[1.7] mb-10">
              A strong social media presence was core to the brand strategy. ZuZu lives or dies on superfans discovering artists, so the brand needed a <strong>distinct visual style:</strong> when someone sees a graphic or promotional post for ZuZu and its artists, they should <strong>recognize the brand immediately,</strong> without reading a word. The nostalgic, personality-driven visual language from the design system carries directly into every social touchpoint.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="rounded-xl overflow-hidden shadow-sm">
                <img src="/zuzu/ZuZu%20Social%20Media%20Geordie%20Greep.png" alt="ZuZu social media graphic featuring Geordie Greep" className="w-full cursor-zoom-in" onClick={() => openImage("/zuzu/ZuZu%20Social%20Media%20Geordie%20Greep.png")} />
              </div>
              <div className="rounded-xl overflow-hidden shadow-sm">
                <img src="/zuzu/ZuZu%20Social%20Media%20News%20Graphic%204_5.png" alt="ZuZu social media news graphic" className="w-full cursor-zoom-in" onClick={() => openImage("/zuzu/ZuZu%20Social%20Media%20News%20Graphic%204_5.png")} />
              </div>
              <div className="rounded-xl overflow-hidden shadow-sm">
                <img src="/zuzu/ZuZu%20Social%20Media%20Graphic%20with%20signature%20palette.png" alt="ZuZu social media graphic with signature palette" className="w-full cursor-zoom-in" onClick={() => openImage("/zuzu/ZuZu%20Social%20Media%20Graphic%20with%20signature%20palette.png")} />
              </div>
            </div>
          </section>

          <hr className="border-0 border-t border-[#D1D1D6] w-full my-0" />

          {/* 9. OUTCOME & INFLUENCE */}
          <section id="impact" className="bg-white/60 backdrop-blur-sm rounded-2xl border border-[#E5E5E5]/50 shadow-sm p-12 px-8 md:px-12 scroll-mt-[130px]">
            <p className="text-[14px] font-bold text-[#667eea] mb-3" style={{ fontFamily: 'var(--font-inter)' }}>OUTCOME &amp; INFLUENCE</p>
            <h3 className="text-[20px] md:text-[22px] font-semibold text-[#1D1D1F] mb-6">In Production</h3>
            <p className="text-[15px] md:text-[16px] text-[#1D1D1F] leading-[1.7] mb-10">
              The design system is currently in <strong>active engineering implementation,</strong> components are being built from the specifications I delivered. The brand identity and component library powered an <strong>interactive Lovable prototype</strong> used by the founding team for investor pitches.
            </p>

            <h3 className="text-[20px] md:text-[22px] font-semibold text-[#1D1D1F] mb-8">By the Numbers</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-10">
              <div className="bg-white rounded-xl p-6 border border-[#F0EDE9] shadow-sm text-center">
                <p className="text-[32px] font-bold text-[#667eea] mb-1">16</p>
                <p className="text-[14px] text-[#6E6E73]">UI component types with documented states, variants, and interaction specs</p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-[#F0EDE9] shadow-sm text-center">
                <p className="text-[32px] font-bold text-[#667eea] mb-1">26+</p>
                <p className="text-[14px] text-[#6E6E73]">Total deliverables across brand identity, design system, and brand application</p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-[#F0EDE9] shadow-sm text-center">
                <p className="text-[32px] font-bold text-[#667eea] mb-1">3</p>
                <p className="text-[14px] text-[#6E6E73]">Complete system documents (brand bible, component library, iconography suite)</p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-[#F0EDE9] shadow-sm text-center">
                <p className="text-[32px] font-bold text-[#667eea] mb-1">2</p>
                <p className="text-[14px] text-[#6E6E73]">Theming modes (dark/light) built as system architecture</p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-[#F0EDE9] shadow-sm text-center">
                <p className="text-[32px] font-bold text-[#667eea] mb-1">4.5</p>
                <p className="text-[14px] text-[#6E6E73]">Months from zero visual identity to engineering-ready design system</p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-[#F0EDE9] shadow-sm text-center">
                <p className="text-[32px] font-bold text-[#667eea] mb-1">1</p>
                <p className="text-[14px] text-[#6E6E73]">Designer. Every visual decision, from logo to cursor states, was mine.</p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#667eea]/10 to-[#764ba2]/10 rounded-xl p-8 border border-[#667eea]/20">
              <h3 className="text-[18px] font-semibold text-[#1D1D1F] mb-3">Retention</h3>
              <p className="text-[16px] text-[#1D1D1F] leading-relaxed">
                At the end of the engagement, the founding team <strong>invited me to continue contributing</strong> as visual design needs arise. The system I built became the foundation they&apos;re scaling on.
              </p>
            </div>
          </section>

          <hr className="border-0 border-t border-[#D1D1D6] w-full my-0" />

          {/* 10. ENDORSEMENTS */}
          <div id="testimonials" className="scroll-mt-[130px]">
            <p className="text-[14px] font-bold text-[#667eea] mb-3" style={{ fontFamily: 'var(--font-inter)' }}>ENDORSEMENTS</p>
            <p className="text-[16px] md:text-[22px] text-[#1D1D1F] leading-[1.7] mb-3">Founder validation of creative vision and work product.</p>
          <div className="flex flex-col gap-6">
            {/* Testimonial 1 */}
            <div className="bg-white rounded-xl p-6 border border-[#F0EDE9] shadow-sm hover:shadow-md transition-shadow">
              <blockquote className="text-[15px] text-[#1D1D1F] leading-[1.6]">
                &ldquo;Your creativity and aesthetic vision were so crucial in building ZuZu&apos;s visual identity.&rdquo;
              </blockquote>
              <cite className="block text-[13px] text-[#6E6E73] mt-3 italic not-italic">— Rand, Founder, ZuZu</cite>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-white rounded-xl p-6 border border-[#F0EDE9] shadow-sm hover:shadow-md transition-shadow">
              <blockquote className="text-[15px] text-[#1D1D1F] leading-[1.6]">
                &ldquo;Thank you so much for your hard work and excellent work product.&rdquo;
              </blockquote>
              <cite className="block text-[13px] text-[#6E6E73] mt-3 italic not-italic">— Yorgos Papadopoulos, ZuZu</cite>
            </div>
          </div>
          </div>

          <hr className="border-0 border-t border-[#D1D1D6] w-full my-0" />

          {/* 11. LESSONS LEARNED */}
          <section id="lessons" className="bg-white/60 backdrop-blur-sm rounded-2xl border border-[#E5E5E5]/50 shadow-sm p-12 px-8 md:px-12 scroll-mt-[130px]">
            <p className="text-[14px] font-bold text-[#667eea] mb-3" style={{ fontFamily: 'var(--font-inter)' }}>LESSONS LEARNED</p>
            <ul className="space-y-8 text-[16px] text-[#1D1D1F] pl-4 pr-4">
              <li className="flex items-start gap-3">
                <span className="text-[#667eea] mt-1 text-[20px]">•</span>
                <span><strong>Function sets the floor, feeling sets the ceiling.</strong> Every component had to be immediately legible to a first-time user; only once usability was locked did I push expressiveness as far as it could go.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#667eea] mt-1 text-[20px]">•</span>
                <span>Designing for a product category that didn&apos;t exist yet means <strong>borrowing no patterns.</strong> The system had to establish its own visual language from scratch.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#667eea] mt-1 text-[20px]">•</span>
                <span><strong>Weekly critiques against the product thesis</strong> kept brand decisions grounded in what ZuZu was actually building, not just what looked good in isolation.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#667eea] mt-1 text-[20px]">•</span>
                <span>A design system should be <strong>a foundation, not a ceiling.</strong> Building for extensibility from day one meant the system could scale with features that didn&apos;t exist yet.</span>
              </li>
            </ul>
          </section>
        </div>
      </div>

      {/* ----------------- Modal / Lightbox (fit + scroll, avoids cropping) ----------------- */}
      {modalImage && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center"
          onClick={closeModal}
        >
          {/* backdrop */}
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity" />

          {/* center area (clicking here won't close because of stopPropagation below) */}
          <div
            className="relative z-10 flex items-center justify-center p-6"
            onClick={(e) => e.stopPropagation()}
            style={{ width: "100%", height: "100%" }}
          >
            {/* close button */}
            <button
              onClick={closeModal}
              aria-label="Close image"
              className="absolute top-6 right-6 z-20 rounded-full bg-white/90 hover:bg-white p-2 shadow-md"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-[#1D1D1F]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* container that limits size but allows scrolling if needed */}
            <div className="max-w-[95vw] max-h-[95vh] w-full h-full overflow-auto flex items-center justify-center">
              {/* image scales to fit, preserves aspect ratio (no cropping) */}
              <img
                src={modalImage}
                alt="Enlarged view"
                className="object-contain max-w-full max-h-full rounded-lg drop-shadow-2xl"
                style={{ display: "block" }}
              />
            </div>
          </div>
        </div>
      )}

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
