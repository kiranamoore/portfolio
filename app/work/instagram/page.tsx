"use client";

import Link from "next/link";
import { useState, useEffect, type PointerEvent as ReactPointerEvent } from "react";

function BeforeAfterCompare() {
  const [front, setFront] = useState<"before" | "after" | null>(null);

  const hoverSide = (side: "before" | "after") => (event: ReactPointerEvent<HTMLButtonElement>) => {
    if (event.pointerType === "mouse") setFront(side);
  };

  const tapSide = (side: "before" | "after") => (event: ReactPointerEvent<HTMLButtonElement>) => {
    if (event.pointerType !== "mouse") {
      setFront((current) => (current === side ? null : side));
    }
  };

  return (
    <div
      className={`ba-stage${front ? ` is-${front}` : ""}`}
      onPointerLeave={(event) => {
        if (event.pointerType === "mouse") setFront(null);
      }}
    >
      <button
        type="button"
        className="ba-card ba-before"
        onPointerEnter={hoverSide("before")}
        onPointerUp={tapSide("before")}
        aria-pressed={front === "before"}
      >
        <img
          src="/Redesigns/Instagram/before.jpg"
          alt="Before: Meta's Instagram section, with a static Story inside the phone"
        />
        <span className="ba-label">Before</span>
      </button>
      <button
        type="button"
        className="ba-card ba-after"
        onPointerEnter={hoverSide("after")}
        onPointerUp={tapSide("after")}
        aria-pressed={front === "after"}
      >
        <img
          src="/Redesigns/Instagram/after.jpg"
          alt="After: the redesigned Instagram section, with a scrollable feed inside the phone"
        />
        <span className="ba-label">After</span>
      </button>
    </div>
  );
}

export default function InstagramPage() {
  const [activeSection, setActiveSection] = useState("overview");

  const [modalImage, setModalImage] = useState<string | null>(null);

  const sections = [
    { id: "overview", label: "Overview" },
    { id: "before-after", label: "Before/After" },
    { id: "change", label: "The Change" },
    { id: "reflection", label: "Reflection" },
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

  const openImage = (src: string) => {
    setModalImage(src);
  };

  const closeModal = () => setModalImage(null);

  return (
    <div className="min-h-screen hero-gradient relative flex flex-col">
      {/* Side previous/next project links */}
      <Link
        href="/work/zuzu"
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
            <div id="overview" className="text-center mb-0 px-4 md:px-8 scroll-mt-[130px]">
              <h1 className="text-[36px] md:text-[44px] font-bold text-[#1D1D1F] tracking-tight leading-[1.1] mb-3">
                Instagram Website Redesign
              </h1>
              <p className="text-[18px] text-[#667eea] font-semibold">Meta · Web Design · Interaction Design</p>
              <p className="text-center text-[16px] text-[#1D1D1F] py-4 px-4 md:px-8">turning a static screenshot into an experience you can scroll through.</p>

              {/* Hero Visual */}
              <div className="rounded-2xl overflow-hidden mb-12">
                <video src="/Redesigns/Instagram/Instagram_Hero.mp4" autoPlay muted loop playsInline className="w-full" aria-label="Scroll driven Instagram redesign, showing the feed, carousel, comments and share sheet inside a phone" />
              </div>
            </div>

            {/* --- Three equal cards row --- */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-5">
              {/* Card 1: Role */}
              <div className="bg-white rounded-xl p-6 border border-[#F0EDE9] shadow-sm">
                <p className="text-[14px] font-bold text-[#667eea] mb-3" style={{ fontFamily: 'var(--font-inter)' }}>ROLE</p>
                <div className="text-[15px] text-[#1D1D1F] leading-relaxed space-y-1">
                  <p>Solo Designer and Developer</p>
                </div>
              </div>

              {/* Card 2: Team */}
              <div className="bg-white rounded-xl p-6 border border-[#F0EDE9] shadow-sm">
                <p className="text-[14px] font-bold text-[#667eea] mb-3" style={{ fontFamily: 'var(--font-inter)' }}>TEAM</p>
                <div className="text-[15px] text-[#1D1D1F] leading-relaxed space-y-1">
                  <p className="font-bold text-[#667eea]">1 Designer (Me)</p>
                </div>
              </div>

              {/* Card 3: Timeline */}
              <div className="bg-white rounded-xl p-6 border border-[#F0EDE9] shadow-sm">
                <p className="text-[14px] font-bold text-[#667eea] mb-3" style={{ fontFamily: 'var(--font-inter)' }}>TIMELINE</p>
                <p className="text-[15px] text-[#1D1D1F]">2 days</p>
              </div>
            </div>

            {/* Role & Responsibilities */}
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl border border-[#E5E5E5]/50 shadow-sm p-10 px-8 md:px-12">
              <div className="mb-10">
                <p className="text-[14px] font-bold text-[#667eea] mb-3" style={{ fontFamily: 'var(--font-inter)' }}>WHAT I DID</p>
                <ul className="space-y-2 text-[15px] text-[#1D1D1F] pl-4 pr-4">
                  <li className="flex items-start gap-2">
                    <span className="text-[#667eea] mt-1">•</span>
                    <span>Identified one section to intervene in, rebuilt it as a coded interactive prototype, kept the rest of the page out of scope</span>
                  </li>
                </ul>
              </div>

              <div className="mb-10">
                <p className="text-[14px] font-bold text-[#667eea] mb-2" style={{ fontFamily: 'var(--font-inter)' }}>CONTEXT</p>
                <p className="text-[15px] text-[#1D1D1F]">
                  Directed research, one of 25 website redesigns completed over the semester
                </p>
              </div>

              <div>
                <p className="text-[14px] font-bold text-[#667eea] mb-2" style={{ fontFamily: 'var(--font-inter)' }}>TOOLS</p>
                <p className="text-[15px] text-[#1D1D1F]">
                  HTML, CSS, JavaScript
                </p>
              </div>
            </div>

            {/* Before/After */}
            <div id="before-after" className="mb-12 scroll-mt-[130px]">
              <BeforeAfterCompare />
              <p className="text-center text-[14px] text-[#6E6E73] italic py-4 px-4 md:px-8">
                Left, Meta&apos;s current section. Right, the redesigned section, live at{" "}
                <a href="/Redesigns/Instagram/" className="text-[15px] font-medium text-[#0071E3] hover:underline not-italic">
                  View the redesign
                </a>
              </p>
            </div>
          </section>

          <hr className="border-0 border-t border-[#D1D1D6] w-full my-0" />

          {/* 2. THE CHANGE */}
          <section id="change" className="bg-white/60 backdrop-blur-sm rounded-2xl border border-[#E5E5E5]/50 shadow-sm p-10 px-8 md:px-12 scroll-mt-[130px]">
            <p className="text-[14px] font-bold text-[#667eea] mb-3" style={{ fontFamily: 'var(--font-inter)' }}>THE CHANGE</p>
            <div className="space-y-6 text-[16px] md:text-[17px] text-[#1D1D1F] leading-relaxed">
              <p>
                I did not set out to redesign the whole Instagram page on Meta&apos;s site, only the second section.
              </p>
              <p>
                In the original, that section introduces Instagram with a static image of a Story. It tells you what Instagram is, but it does not feel like using it.
              </p>
              <p>
                I rebuilt that one section as a scroll driven phone. As you move down the page, you move through the app itself: the feed, a photo carousel, liking a post, opening comments, and opening the share sheet. The interaction is the point. Scrolling the website starts to feel like scrolling Instagram.
              </p>
              <p>
                That does a better job of showing what the page is trying to claim, that Instagram is about experience and community, because you see people posting, responding, and sharing instead of reading about it next to a frozen image.
              </p>
            </div>
          </section>

          <hr className="border-0 border-t border-[#D1D1D6] w-full my-0" />

          {/* 3. REFLECTION */}
          <section id="reflection" className="bg-white/60 backdrop-blur-sm rounded-2xl border border-[#E5E5E5]/50 shadow-sm p-10 px-8 md:px-12 scroll-mt-[130px]">
            <p className="text-[14px] font-bold text-[#667eea] mb-3" style={{ fontFamily: 'var(--font-inter)' }}>REFLECTION</p>
            <p className="text-[16px] md:text-[17px] text-[#1D1D1F] leading-relaxed">
              A 2 day limit kept the scope honest: one section, one idea, built in code instead of mocked up. I would keep future redesigns in this series the same way.
            </p>
          </section>
        </div>
      </div>

      {/* ----------------- Modal / Lightbox ----------------- */}
      {modalImage && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center"
          onClick={closeModal}
        >
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity" />

          <div
            className="relative z-10 flex items-center justify-center p-6"
            onClick={(e) => e.stopPropagation()}
            style={{ width: "100%", height: "100%" }}
          >
            <button
              onClick={closeModal}
              aria-label="Close image"
              className="absolute top-6 right-6 z-20 rounded-full bg-white/90 hover:bg-white p-2 shadow-md"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-[#1D1D1F]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="max-w-[95vw] max-h-[95vh] w-full h-full overflow-auto flex items-center justify-center">
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

        .ba-stage {
          --rest: 0.62;
          --cover: 0.94;
          position: relative;
          height: 0;
          margin-bottom: 16px;
          padding-bottom: calc(var(--rest) * 553 / 1024 * 100%);
          transition: padding-bottom 0.7s cubic-bezier(0.22, 1, 0.36, 1);
        }

        .ba-stage.is-before,
        .ba-stage.is-after {
          padding-bottom: calc(var(--cover) * 553 / 1024 * 100% + 18px);
        }

        .ba-card {
          position: absolute;
          top: 0;
          width: calc(var(--rest) * 100%);
          aspect-ratio: 1024 / 553;
          margin: 0;
          padding: 0;
          border: 0;
          border-radius: 14px;
          overflow: hidden;
          background: #fff;
          cursor: pointer;
          display: block;
          text-align: left;
          box-shadow: 0 10px 24px rgba(0, 0, 0, 0.1);
          transition:
            width 0.7s cubic-bezier(0.22, 1, 0.36, 1),
            box-shadow 0.7s cubic-bezier(0.22, 1, 0.36, 1),
            transform 0.7s cubic-bezier(0.22, 1, 0.36, 1),
            z-index 0s linear 0.7s;
        }

        .ba-card img {
          display: block;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center top;
        }

        .ba-before {
          left: 0;
          z-index: 1;
        }

        .ba-after {
          right: 0;
          z-index: 2;
          box-shadow: -14px 10px 28px rgba(0, 0, 0, 0.16);
        }

        .ba-stage.is-before .ba-before,
        .ba-stage.is-after .ba-after {
          width: calc(var(--cover) * 100%);
          z-index: 4;
          transform: translateY(-6px);
          transition:
            width 0.7s cubic-bezier(0.22, 1, 0.36, 1),
            box-shadow 0.7s cubic-bezier(0.22, 1, 0.36, 1),
            transform 0.7s cubic-bezier(0.22, 1, 0.36, 1),
            z-index 0s linear 0s;
        }

        .ba-stage.is-before .ba-before {
          box-shadow: 22px 16px 44px rgba(0, 0, 0, 0.32);
        }

        .ba-stage.is-after .ba-after {
          box-shadow: -22px 16px 44px rgba(0, 0, 0, 0.32);
        }

        .ba-label {
          position: absolute;
          top: 12px;
          z-index: 2;
          padding: 5px 12px;
          border-radius: 999px;
          background: rgba(29, 29, 31, 0.82);
          color: #fff;
          font-family: var(--font-inter), sans-serif;
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 0.04em;
          line-height: 1.2;
          pointer-events: none;
        }

        .ba-before .ba-label {
          left: 12px;
        }

        .ba-after .ba-label {
          right: 12px;
        }

        @media (prefers-reduced-motion: reduce) {
          .ba-stage,
          .ba-card {
            transition: none;
          }
        }
      `}</style>
    </div>
  );
}
