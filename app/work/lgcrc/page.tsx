"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function LgcrcPage() {
  const [activeSection, setActiveSection] = useState("overview");

  const sections = [
    { id: "overview", label: "Overview" },
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
        if (section.element && section.element.getBoundingClientRect().top <= 150) {
          setActiveSection(section.id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen hero-gradient relative flex flex-col">
      <Link
        href="/work/gemini"
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
        href="/work/sj-quilts"
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
          <section className="flex flex-col gap-0">
            <div id="overview" className="text-center mb-0 px-4 md:px-8 scroll-mt-[130px]">
              <h1 className="text-[36px] md:text-[44px] font-bold text-[#1D1D1F] tracking-tight leading-[1.1] mb-3">
                Scroll the Shot
              </h1>
              <p className="text-[18px] text-[#667eea] font-semibold">Los Gatos Coffee Roasting Company · Web Design · Interaction Design</p>
              <p className="text-center text-[16px] text-[#1D1D1F] py-4 px-4 md:px-8">
                The coffeehouse has been on West Main since 1982. This version tells that story by pouring one shot.
              </p>

              <div className="rounded-2xl overflow-hidden border border-[#E5E5E5] bg-white">
                <iframe
                  src="/Redesigns/LGCRC/"
                  title="Live redesign: Los Gatos Coffee Roasting Company, a scroll through one shot of espresso"
                  className="w-full block"
                  style={{ height: "clamp(520px, 78vh, 760px)", border: "0" }}
                  loading="lazy"
                />
              </div>
              <p className="text-[14px] text-[#86868B]" style={{ marginTop: "14px", marginBottom: "48px" }}>
                Live and interactive: scroll the shot above, from the bean to the cup.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-5">
              <div className="bg-white rounded-xl p-6 border border-[#F0EDE9] shadow-sm">
                <p className="text-[14px] font-bold text-[#667eea] mb-3" style={{ fontFamily: "var(--font-inter)" }}>ROLE</p>
                <div className="text-[15px] text-[#1D1D1F] leading-relaxed space-y-1">
                  <p>Solo Designer and Developer</p>
                </div>
              </div>
              <div className="bg-white rounded-xl p-6 border border-[#F0EDE9] shadow-sm">
                <p className="text-[14px] font-bold text-[#667eea] mb-3" style={{ fontFamily: "var(--font-inter)" }}>TEAM</p>
                <div className="text-[15px] text-[#1D1D1F] leading-relaxed space-y-1">
                  <p className="font-bold text-[#667eea]">1 Designer (Me)</p>
                </div>
              </div>
              <div className="bg-white rounded-xl p-6 border border-[#F0EDE9] shadow-sm">
                <p className="text-[14px] font-bold text-[#667eea] mb-3" style={{ fontFamily: "var(--font-inter)" }}>TOOLS</p>
                <p className="text-[15px] text-[#1D1D1F]">HTML, CSS, JavaScript</p>
              </div>
            </div>

            <div className="bg-white/60 backdrop-blur-sm rounded-2xl border border-[#E5E5E5]/50 shadow-sm p-10 px-8 md:px-12">
              <div className="mb-10">
                <p className="text-[14px] font-bold text-[#667eea] mb-3" style={{ fontFamily: "var(--font-inter)" }}>WHAT I DID</p>
                <p className="text-[15px] text-[#1D1D1F] leading-relaxed">
                  Los Gatos Coffee Roasting Company roasts on West Main and sells the cup, the bean, and a seat in the room. I rebuilt the visit as one scroll. Each step of an espresso — the shop, the bean, the roast, the grind, the dose, the tamp, the cut, and the cup — carries a piece of the coffeehouse with it.
                </p>
              </div>
              <div>
                <p className="text-[14px] font-bold text-[#667eea] mb-2" style={{ fontFamily: "var(--font-inter)" }}>CONTEXT</p>
                <p className="text-[15px] text-[#1D1D1F]">
                  Directed research, one of 25 website redesigns completed over the semester
                </p>
              </div>
            </div>
          </section>

          <hr className="border-0 border-t border-[#D1D1D6] w-full my-0" />

          <section id="change" className="bg-white/60 backdrop-blur-sm rounded-2xl border border-[#E5E5E5]/50 shadow-sm p-10 px-8 md:px-12 scroll-mt-[130px]">
            <p className="text-[14px] font-bold text-[#667eea] mb-3" style={{ fontFamily: "var(--font-inter)" }}>THE CHANGE</p>
            <div className="space-y-6 text-[16px] md:text-[17px] text-[#1D1D1F] leading-relaxed">
              <p>
                The page is a shot being made. Flat colored drawings, shaded so the roaster, the grinder, and the bag read as objects, sit beside copy that changes shape with the step: a year, a ledger of origins, a menu, the hours for the live set. Photographs of the real shop sit under the words — the drum with Teri Hope, the sidewalk tables, the pastry case — so the drawing and the place stay tied together.
              </p>
              <p>
                The last scene serves the cup. Hours, the Thursday through Saturday music, and the address on West Main land with it, instead of living on a separate about page.
              </p>
            </div>
          </section>

          <hr className="border-0 border-t border-[#D1D1D6] w-full my-0" />

          <section id="reflection" className="bg-white/60 backdrop-blur-sm rounded-2xl border border-[#E5E5E5]/50 shadow-sm p-10 px-8 md:px-12 scroll-mt-[130px]">
            <p className="text-[14px] font-bold text-[#667eea] mb-3" style={{ fontFamily: "var(--font-inter)" }}>REFLECTION</p>
            <p className="text-[16px] md:text-[17px] text-[#1D1D1F] leading-relaxed">
              A catalog gives every fact the same weight. Putting each fact on a step of the shot gave the coffeehouse a sequence, and it forced the drawings to stay recognizable when the panel is wide and when the screen is short. The roaster had to be one machine, the bag had to sit under the grinder, and the notes on the last scene had to clear the cup.
            </p>
          </section>
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
