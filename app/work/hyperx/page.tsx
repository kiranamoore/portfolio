"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function HyperXPage() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [hasScrolled, setHasScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("overview");

  // NEW: modal state for enlarged image
  const [modalImage, setModalImage] = useState<string | null>(null);

  const sections = [
    { id: "overview", label: "Overview" },
    { id: "context", label: "Context" },
    { id: "problem", label: "Problem" },
    { id: "research", label: "Research" },
    { id: "hmw", label: "H.M.W" },
    { id: "framing", label: "Design" },
    { id: "try-it", label: "Try It" },
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
      if (window.scrollY > 50) setHasScrolled(true);

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
        href="/work/meta-alchemy"
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

      {/* Sticky Section Navigation */}
      <nav className="hidden lg:block fixed left-24 top-1/2 -translate-y-1/2 z-30">
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

      <div className="relative z-10 flex-1 flex flex-col items-center px-6 md:px-10 lg:px-20 pt-32 pb-24">
        <div className="w-full max-w-4xl flex flex-col gap-6">
          {/* 1. OVERVIEW */}
          <section className="flex flex-col gap-0">
            {/* Title */}
            <div id="overview" className="text-center mb-0 px-4 md:px-8 scroll-mt-[130px]">
              <h1 className="text-[36px] md:text-[44px] font-bold text-[#1D1D1F] tracking-tight leading-[1.1] mb-3">
                HX3D AR Retail Experience
              </h1>
              <p className="text-[18px] text-[#667eea] font-semibold">HyperX · Product Design · AR Commerce</p>
              <p className="text-center text-[16px] text-[#1D1D1F] py-4 px-4 md:px-8">Increase accessory attach rate by bringing digital-only HX3D products into the retail aisle via AR.</p>

              {/* Hero Visual */}
              <div className="rounded-2xl overflow-hidden mb-0">
                <img src="/hyperx/hero-ar-tryOn.png" alt="AR Try-On Experience" className="w-full cursor-zoom-in" onClick={() => openImage("/hyperx/hero-ar-tryOn.png")} />
                <p className="text-center text-[14px] text-[#6E6E73] italic py-4 px-4 md:px-8">Preview. Customize. Purchase.</p>
              </div>
              {/* Product Summary */}
              <div id="context" className="mb-12 scroll-mt-[130px]">
                <p className="text-[16px] md:text-[17px] text-[#1D1D1F] leading-relaxed">
                  Retail shoppers were choosing headsets <strong>without visibility into HyperX’s strongest differentiator: customization.</strong> I designed an <strong>AR commerce bridge</strong> that surfaced digital-only HX3D accessories at the point of comparison, <strong>turning in-store evaluation into a revenue opportunity.</strong>
                </p>
              </div>
            </div>

            {/* --- Three equal cards row --- */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-5">
              {/* Card 1: Team */}
              <div className="bg-white rounded-xl p-6 border border-[#F0EDE9] shadow-sm">
                <p className="text-[14px] font-semibold text-[#667eea] mb-3">ROLE</p>
                <div className="text-[15px] text-[#1D1D1F] leading-relaxed space-y-1">
                  <p>Product Design Intern</p>
                </div>
              </div>

              {/* Card 2: Project Type */}
              <div className="bg-white rounded-xl p-6 border border-[#F0EDE9] shadow-sm">
                <p className="text-[14px] font-semibold text-[#667eea] mb-3">TEAM</p>
                <p className="text-[15px] text-[#1D1D1F]">solo project</p>
              </div>

              {/* Card 3: Timeline */}
              <div className="bg-white rounded-xl p-6 border border-[#F0EDE9] shadow-sm">
                <p className="text-[14px] font-semibold text-[#667eea] mb-3">TIMELINE</p>
                <p className="text-[15px] text-[#1D1D1F]">13 weeks</p>
              </div>
            </div>

            {/* Role & Responsibilities */}
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl border border-[#E5E5E5]/50 shadow-sm p-10 px-8 md:px-12">
              {/* --- Responsibilities list (unchanged, but spacing normalized) --- */}
              <div className="mb-10">
                <p className="text-[14px] font-semibold text-[#667eea] mb-3">WHAT I DID</p>
                <ul className="space-y-2 text-[15px] text-[#1D1D1F] pl-4 pr-4">
                  <li className="flex items-start gap-2">
                    <span className="text-[#667eea] mt-1">•</span>
                    <span>Problem definition and opportunity framing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#667eea] mt-1">•</span>
                    <span>Market research and contextual inquiry</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#667eea] mt-1">•</span>
                    <span>Experience and interaction design</span>
                  </li>

                  <li className="flex items-start gap-2">
                    <span className="text-[#667eea] mt-1">•</span>
                    <span>AR prototyping and technical implementation</span>
                  </li>
                </ul>
              </div>

              {/* Tools & Platform */}
              <div>
                <p className="text-[14px] font-semibold text-[#667eea] mb-2">TOOLS & PLATFORM</p>
                <p className="text-[15px] text-[#1D1D1F]">
                  Figma, FigJam, Lens Studio, JavaScript, Blender, Photoshop · Mobile Web AR (QR-based)
                </p>
              </div>
            </div>

            {/* Before/After */}
            <div className="mb-12">
              <div className="rounded-xl overflow-hidden shadow-sm mb-10">
                <img src="/hyperx/before-after.png" alt="Before and after comparison" className="w-full cursor-zoom-in" onClick={() => openImage("/hyperx/before-after.png")} />
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="px-4 md:px-6">
                  <p className="font-semibold text-[#1D1D1F] mb-3">Before:</p>
                  <p className="text-[15px] text-[#6E6E73] leading-[1.6]">
                    <strong>Accessory discovery relied entirely on post-purchase online traffic,</strong> leaving high-intent in-store shoppers disconnected from HyperX’s customization ecosystem.
                  </p>
                </div>
                <div className="px-4 md:px-6">
                  <p className="font-semibold text-[#1D1D1F] mb-3">After:</p>
                  <p className="text-[15px] text-[#6E6E73] leading-[1.6]">
                    A shelf-placed QR entry point launches AR try-on instantly, <strong>converting retail foot traffic into a direct-to-consumer accessory channel.</strong>
                  </p>
                </div>
              </div>
            </div>
          </section>

          <hr className="border-0 border-t border-[#D1D1D6] w-full my-0" />
          {/* Problem Statement */}
          <div id="problem" className="mb-0 scroll-mt-[130px]">
            <p className="text-[14px] font-semibold text-[#667eea] mb-3">PROBLEM</p>
            <p className="text-[16px] md:text-[22px] text-[#1D1D1F] leading-[1.7]">
              In-store shoppers evaluating HyperX headsets are unaware that customization options exist.
            </p>
          </div>

          {/* 3. TARGET USER */}
          <section className="bg-white/60 backdrop-blur-sm rounded-2xl border border-[#E5E5E5]/50 shadow-sm p-10 px-8 md:px-12">
            <h2 className="text-[22x] md:text-[30px] font-semibold text-[#1D1D1F] mb-10">Target User</h2>
            <div className="rounded-xl overflow-hidden shadow-sm mb-10">
              <img
                src="/hyperx/persona.png"
                alt="User persona - Jordan Mitchell"
                className="w-full cursor-zoom-in"
                onClick={() => openImage("/hyperx/persona.png")}
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-5">
              {/* Card 1: Team */}
              <div className="bg-white rounded-xl p-6 border border-none shadow-none">
                <p className="text-[14px] font-semibold text-[#667eea] mb-3">GOALS</p>
                <div className="text-[16px] text-[#1D1D1F] leading-relaxed space-y-1">
                  <p>
                    Tech-savvy gamers and streamers (18–28) who <span className="font-semibold"> shop for peripherals in-store. </span>
                  </p>
                </div>
              </div>

              {/* Card 2: Project Type */}
              <div className="bg-white rounded-xl p-6 border border-none shadow-none">
                <p className="text-[14px] font-semibold text-[#667eea] mb-3">MOTIVATIONS</p>
                <p className="text-[16px] text-[#1D1D1F]">
                  <span className="font-semibold">Seeks personalized setups</span> that reflect their identity
                </p>
              </div>

              {/* Card 3: Timeline */}
              <div className="bg-white rounded-xl p-6 border border-none shadow-none">
                <p className="text-[14px] font-semibold text-[#667eea] mb-3">PAINPOINTS</p>
                <p className="text-[16px] text-[#1D1D1F]">Shoppers <span className="font-semibold"> cannot discover HX3D customization </span> at the moment they are deciding which headset to buy.</p>
              </div>
            </div>
          </section>

          {/* 2. CONTEXT & PROBLEM */}
          <section className="bg-white/60 backdrop-blur-sm rounded-2xl border border-[#E5E5E5]/50 shadow-sm p-10 px-8 md:px-12">
            {/* Why This Matters */}
            <div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-5">
                <div className="bg-white rounded-xl p-6 border border-none shadow-none">
                  <h3 className="text-[20px] md:text-[22px] font-semibold text-[#1D1D1F] mb-8">What This Means for the User</h3>
                  <ul className="space-y-3 text-[15px] text-[#1D1D1F] mb-10 pl-4 pr-4">
                    <li className="flex items-start gap-2">
                      <span className="text-[#667eea] mt-1">•</span>
                      <span>Unaware that customization options exist while shopping in-store</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#667eea] mt-1">•</span>
                      <span>Evaluates HyperX as functionally similar to competing brands</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#667eea] mt-1">•</span>
                      <span>Misses the opportunity to personalize their setup</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-white rounded-xl p-6 border border-none shadow-none">
                  <h3 className="text-[20px] md:text-[22px] font-semibold text-[#1D1D1F] mb-8">What This Means for HyperX</h3>
                  <ul className="space-y-3 text-[15px] text-[#1D1D1F] mb-10 pl-4 pr-4">
                    <li className="flex items-start gap-2">
                      <span className="text-[#667eea] mt-1">•</span>
                      <span><strong>Loses accessory attach rate and downstream ecosystem revenue</strong></span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#667eea] mt-1">•</span>
                      <span><strong>Fails to differentiate at the most competitive decision point — the shelf</strong></span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#667eea] mt-1">•</span>
                      <span>Risks losing headset purchases to brands perceived as equivalent</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="bg-gradient-to-br from-[#667eea]/10 to-[#764ba2]/10 rounded-xl p-8 border border-[#667eea]/20">
                <p className="text-[16px] md:text-[17px] text-[#1D1D1F] leading-[1.7]">
                  Making HX3D visible in-store increases the likelihood that shoppers choose HyperX over competing brands and purchase accessories alongside or even before purchasing the headset itself.
                </p>
              </div>
            </div>
          </section>

          <hr className="border-0 border-t border-[#D1D1D6] w-full my-0" />

          {/* 4. RESEARCH */}
          <div id="research" className="scroll-mt-[130px]">
            <p className="text-[14px] font-semibold text-[#667eea] mb-3">RESEARCH</p>
            <p className="text-[16px] md:text-[22px] text-[#1D1D1F] leading-[1.7] mb-3">Differentiation Fails When It’s Invisible at the Moment of Decision</p>
            <p className="text-[16px] md:text-[16px] text-[#1D1D1F] leading-[1.7] mb-3">
              I conducted market research, in-store contextual inquiry, and cross-industry research to understand how headset accessories are discovered today and where meaningful product opportunities exist.
            </p>
          </div>

          <section className="bg-white/60 backdrop-blur-sm rounded-2xl border border-[#E5E5E5]/50 shadow-sm p-10 px-8 md:px-12">
            {/* Competitive Landscape */}
            <div className="mb-12">
              <h3 className="text-[20px] md:text-[22px] font-semibold text-[#1D1D1F] mb-8">Market Research</h3>
              <div className="rounded-xl overflow-hidden shadow-sm mb-10">
                <img src="/hyperx/competitive-analysis.png" alt="Competitive analysis" className="w-full cursor-zoom-in" onClick={() => openImage("/hyperx/competitive-analysis.png")} />
              </div>

              <p className="text-[15px] text-[#1D1D1F] leading-[1.7]">
                <strong>Key Insight:</strong> HyperX <u>owns the strongest customization ecosystem</u> in the category, but without visibility or digital preview, that advantage <u>cannot influence purchase decisions</u>.
              </p>
            </div>
          </section>

          {/* Contextual Inquiry */}
          <section className="bg-white/60 backdrop-blur-sm rounded-2xl border border-[#E5E5E5]/50 shadow-sm p-10 px-8 md:px-12">
            <div className="mb-12">
              <h3 className="text-[20px] md:text-[22px] font-semibold text-[#1D1D1F] mb-8">Contextual Inquiry</h3>
              <div className="rounded-xl overflow-hidden shadow-sm mb-10">
                <img src="/hyperx/contextual-analysis.png" alt="Contextual inquiry findings" className="w-full cursor-zoom-in" onClick={() => openImage("/hyperx/contextual-analysis.png")} />
              </div>
              <p className="text-[15px] text-[#1D1D1F] leading-[1.7]">
                <strong>Key Insight:</strong> In-store shoppers can <u>evaluate the product — but not discover its customization potential</u>.
              </p>
            </div>
          </section>

          <section className="bg-white/60 backdrop-blur-sm rounded-2xl border border-[#E5E5E5]/50 shadow-sm p-10 px-8 md:px-12">
            {/* Cross-Industry Signals */}
            <div>
              <h3 className="text-[20px] md:text-[22px] font-semibold text-[#1D1D1F] mb-8">Cross-Industry Pattern</h3>
              <div className="rounded-xl overflow-hidden shadow-none mb-10">
                <img src="/hyperx/ar-companies-logos.png" alt="AR precedents - Nike, Adidas, Gucci, Zara, Meta" className="w-full" />
              </div>
              {/* --- Three equal cards row --- */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-5">
                {/* Card 1: Team */}
                <div className="bg-white rounded-xl p-6 border border-[#F0EDE9] shadow-sm">
                  <div className="text-[15px] text-[#1D1D1F] leading-relaxed space-y-1">
                    <p>AR reduces hesitation in visually driven categories</p>
                  </div>
                </div>

                {/* Card 2: Project Type */}
                <div className="bg-white rounded-xl p-6 border border-[#F0EDE9] shadow-sm">
                  <p className="text-[15px] text-[#1D1D1F]">AR increases confidence by previewing products in context</p>
                </div>

                {/* Card 3: Timeline */}
                <div className="bg-white rounded-xl p-6 border border-[#F0EDE9] shadow-sm">
                  <p className="text-[15px] text-[#1D1D1F]">AR bridges physical retail and digital catalog ecosystems</p>
                </div>
              </div>
              <p className="text-[15px] text-[#1D1D1F] leading-[1.7]">
                <strong>Key Insight:</strong> AR is not novelty — it is infrastructure for surfacing hidden customization.
              </p>
            </div>
          </section>

          {/* 5. RESEARCH INSIGHTS */}
          <section id="insights" className="bg-white/60 backdrop-blur-sm rounded-2xl border border-[#E5E5E5]/50 shadow-sm p-10 px-8 md:px-12">
            <h2 className="text-[28px] md:text-[30px] font-bold text-[#1D1D1F] mb-10">Research Insights</h2>
            <ul className="space-y-8 text-[16px] text-[#1D1D1F] mb-10">
              <li className="flex items-start gap-3 pl-4">
                <span className="text-[#667eea] mt-1 text-[20px]">•</span>
                <div className="pr-4">
                  <strong>Customization is a primary differentiator, but it is invisible in retail.</strong>
                  <span className="block text-[15px] text-[#6E6E73] mt-1">HX3D accessories differentiate HyperX from competitors, yet shoppers never see this advantage in-store.</span>
                </div>
              </li>
              <li className="flex items-start gap-3 pl-4">
                <span className="text-[#667eea] mt-1 text-[20px]">•</span>
                <div className="pr-4">
                  <strong>In-store shoppers are making decisions without full product awareness.</strong>
                  <span className="block text-[15px] text-[#6E6E73] mt-1">Without knowledge of HX3D, shoppers evaluate HyperX headsets as functionally similar to competing brands.</span>
                </div>
              </li>
              <li className="flex items-start gap-3 pl-4">
                <span className="text-[#667eea] mt-1 text-[20px]">•</span>
                <div className="pr-4">
                  <strong>The highest-intent moment occurs before checkout, not after.</strong>
                  <span className="block text-[15px] text-[#6E6E73] mt-1">Shoppers are most open to accessories while comparing products on the shelf, not after leaving the store.</span>
                </div>
              </li>
              <li className="flex items-start gap-3 pl-4">
                <span className="text-[#667eea] mt-1 text-[20px]">•</span>
                <div className="pr-4">
                  <strong>AR can surface digital-only products without adding physical inventory.</strong>
                  <span className="block text-[15px] text-[#6E6E73] mt-1">Cross-industry examples show AR is effective at bringing online-only options into physical spaces.</span>
                </div>
              </li>
            </ul>

            <div className="bg-gradient-to-br from-[#667eea]/10 to-[#764ba2]/10 rounded-xl p-8 border border-[#667eea]/20">
              <h3 className="text-[18px] font-semibold text-[#1D1D1F] mb-3">Opportunity Statement</h3>
              <p className="text-[16px] text-[#1D1D1F] leading-relaxed">
                Together, these insights revealed an opportunity to use AR to <strong>bridge in-store headset shopping with HyperX's digital HX3D accessory catalog,</strong> <strong>making customization visible, experiential, and shoppable at the point of decision.</strong>
              </p>
            </div>
          </section>

          <hr className="border-0 border-t border-[#D1D1D6] w-full my-0" />
          {/* How Might We */}
          <div id="hmw" className="mb-12 scroll-mt-[130px]">
            <p className="text-[14px] font-semibold text-[#667eea] mb-3">HOW MIGHT WE</p>
            <p className="text-[18px] md:text-[18px] text-[#1D1D1F] leading-[1.7] italic">
              How might we help in-store shoppers discover and preview HX3D headset accessories while comparing products in major electronics retail stores?
            </p>
          </div>
          <hr className="border-0 border-t border-[#D1D1D6] w-full my-0" />

          {/* 6. DESIGN FRAMING */}
          <section id="framing" className="bg-none backdrop-blur-sm rounded-2xl border border-none shadow-none p-10 px-8 md:px-12 scroll-mt-[130px]">
            <p className="text-[14px] font-semibold text-[#667eea] mb-3">DESIGN</p>

            {/* Design Principles */}
            <div>
              <h3 className="text-[20px] md:text-[22px] font-semibold text-[#1D1D1F] mb-8">What Are the Principles?</h3>
              <div className="grid md:grid-cols-2 gap-6 ">
                <div className="bg-white rounded-xl p-6 border border-[#E5E5E5]/30 shadow-sm">
                  <h4 className="font-semibold text-[#1D1D1F] mb-2">Make the Invisible Visible</h4>
                  <p className="text-[15px] text-[#6E6E73]">HX3D accessories must be discoverable in the retail aisle, not hidden online.</p>
                </div>
                <div className="bg-white rounded-xl p-6 border border-[#E5E5E5]/30 shadow-sm">
                  <h4 className="font-semibold text-[#1D1D1F] mb-2">Preview on the User, Not the Product Page</h4>
                  <p className="text-[15px] text-[#6E6E73]">Shoppers need to see accessories on themselves, not as isolated images.</p>
                </div>
                <div className="bg-white rounded-xl p-6 border border-[#E5E5E5]/30 shadow-sm">
                  <h4 className="font-semibold text-[#1D1D1F] mb-2">Support Fast, Confident Decisions</h4>
                  <p className="text-[15px] text-[#6E6E73]">The experience must work in seconds, not minutes, while standing in-store.</p>
                </div>
                <div className="bg-white rounded-xl p-6 border border-[#E5E5E5]/30 shadow-sm">
                  <h4 className="font-semibold text-[#1D1D1F] mb-2">Integrate with Existing Retail Reality</h4>
                  <p className="text-[15px] text-[#6E6E73]">The solution must require no additional shelf space, inventory, or store redesign.</p>
                </div>
              </div>
            </div>
          </section>

          {/* 7. EXPERIENCE ARCHITECTURE */}
          <section id="architecture" className="bg-white/60 backdrop-blur-sm rounded-2xl border border-[#E5E5E5]/50 shadow-sm p-10 px-8 md:px-12">
            <h2 className="text-[28px] md:text-[30px] font-bold text-[#1D1D1F] mb-10">User Experience</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-5">
              {/* Card 1: flowchart */}
              <div className="rounded-xl overflow-hidden shadow-none mb-10">
                <img
                  src="/hyperx/experience flow.png"
                  alt="Experience architecture and flow"
                  className="w-full cursor-zoom-in"
                  onClick={() => openImage("/hyperx/experience flow.png")}
                />
              </div>

              {/* Card 2: Project Type */}
              <div className="rounded-xl overflow-hidden shadow-none mb-10">
                <img
                  src="/hyperx/User Experience.png"
                  alt="User Experience Comic"
                  className="w-full cursor-zoom-in"
                  onClick={() => openImage("/hyperx/User Experience.png")}
                />
              </div>
            </div>

            <div className="space-y-6 text-[16px] md:text-[17px] text-[#1D1D1F] leading-[1.7] pl-2 pr-2 md:pl-4 md:pr-4">
              <p>
                The flow chart defines the system architecture; the comic validates the behavioral execution in a real retail context. Rather than building an AR feature,<strong> the experience was structured as a retail-to-DTC conversion funnel </strong> — entering at the shelf via QR, enabling immediate try-on, and exiting through a preloaded cart before checkout.
              </p>
              <div className="bg-gradient-to-br from-[#667eea]/10 to-[#764ba2]/10 rounded-xl p-6 border border-[#667eea]/20 mb-8">
                <p className="text-[15px] text-[#1D1D1F] leading-[1.6]"><strong>Key Takeaway:</strong> <u>Transform retail foot traffic into a measurable accessory revenue channel</u> without adding inventory, hardware, or operational complexity.</p>
              </div>
            </div>
          </section>

          {/* 8. DESIGN ITERATION */}
          <section id="iteration" className="bg-white/60 backdrop-blur-sm rounded-2xl border border-[#E5E5E5]/50 shadow-sm p-10 px-8 md:px-12">
            <h2 className="text-[28px] md:text-[30px] font-bold text-[#1D1D1F] mb-10">Design Iteration</h2>

            {/* Lo-Fi Exploration */}
            <div className="mb-12">
              <h3 className="text-[24px] md:text-[24px] font-semibold text-[#1D1D1F] mb-8">Low-Fidelity Exploration</h3>
              <div className="rounded-xl overflow-hidden shadow-sm mb-10">
                <img src="/hyperx/lofi mockups good vs bad.png" alt="Lo-fi exploration" className="w-full cursor-zoom-in" onClick={() => openImage("/hyperx/lofi mockups good vs bad.png")} />
              </div>
              
              <div className="bg-gradient-to-br from-[#667eea]/10 to-[#764ba2]/10 rounded-xl p-6 border border-[#667eea]/20 mb-8">
                <p className="text-[15px] text-[#1D1D1F] leading-[1.6]"><strong>Iteration Insight:</strong> Lo-fi exploration revealed that persistent side controls introduced <u>spatial competition</u> and <u>weakened AR as the primary interaction.</u></p>
              </div>
              <p className="text-[15px] text-[#1D1D1F] ">
                <strong>Decision → Moving to Mid-Fi:</strong> I transitioned to a <u>bottom-anchored customization model</u> with a visually lightweight checkout, preserving face centering, <u>reinforcing try-on as the core behavior,</u> and improving one-handed ergonomics.
              </p>  
            </div>

            {/* Mid-Fi Prototype */}
            <div className="mb-12">
              <h3 className="text-[24px] md:text-[24px] font-semibold text-[#1D1D1F] mb-8">Mid-Fidelity Validation</h3>
              <div className="rounded-xl overflow-hidden shadow-none bg-white mb-0">
                <img src="/hyperx/MidFi Select Accessories.gif" alt="MidFi Select Accessories" className="w-full cursor-zoom-in" onClick={() => openImage("/hyperx/MidFi Select Accessories.gif")} />
                <p className="text-center text-[14px] text-[#6E6E73] italic py-4 px-4 md:px-8">Accessory Selection  </p>
              </div>
              
              <p className="text-[16px] md:text-[17px] text-[#1D1D1F] leading-[1.7] mb-6">
              Users enter the AR experience, see themselves wearing HyperX headphones, and customize them in real time using popular HX3D accessories.
              </p>
              <div className="rounded-xl overflow-hidden shadow-none bg-white mb-0">
                <img src="/hyperx/MidFi Checkout.gif" alt="MidFi Checkout" className="w-full cursor-zoom-in" onClick={() => openImage("/hyperx/MidFi Checkout.gif")} />
                <p className="text-center text-[14px] text-[#6E6E73] italic py-4 px-4 md:px-8">AR-to-Web Checkout </p>
              </div>
              <p className="text-[16px] md:text-[17px] text-[#1D1D1F] leading-[1.7] mb-6">
              Users complete checkout within the AR experience and are directed to HyperX.com/cart to review their selected accessories and finalize their purchase.
              </p>
              <div className="bg-gradient-to-br from-[#667eea]/10 to-[#764ba2]/10 rounded-xl p-6 border border-[#667eea]/20 mb-6 mt-12">
                <p className="text-[15px] text-[#1D1D1F]"><strong>Validation Insight:</strong> Interactive testing confirmed that bottom-positioned controls improved toggle speed and <u>preserved AR focus,</u> while the integrated checkout successfully <u>maintained purchase continuity.</u></p>
                <p className="text-[15px] text-[#1D1D1F] mt-3"><strong>Ergonomic Learning:</strong> However, anchoring the customization bar flush to the bottom edge introduced <u>subtle thumb strain</u> in a natural grip.</p>
              </div>
              <p className="text-[15px] text-[#1D1D1F]">
                <strong>Decision → Moving to High-Fi:</strong> Transitioning from Mid-Fi to a functional Web AR prototype introduced an <u>8MB file-size constraint,</u> requiring careful <u>tradeoffs between interaction complexity and 3D asset fidelity.</u>
              </p>
              <p className="text-[15px] text-[#1D1D1F] mt-2">To stay within performance limits while preserving product quality, I:</p>
              <ul className="space-y-8 text-[14px] text-[#1D1D1F] pl-4 pr-4 mt-4">
              <li className="flex items-start gap-3">
                <span className="text-[#667eea] mt-1 text-[14px]">•</span>
                <span>Simplified and consolidated coded interaction states to <strong>reduce script weight</strong></span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#667eea] mt-1 text-[14px]">•</span>
                <span>Optimized 3D models for mobile rendering <strong>without compromising perceived premium quality</strong></span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#667eea] mt-1 text-[14px]">•</span>
                <span>Prioritized only <strong>conversion-critical customization flows</strong></span>
              </li>
          
            </ul>

            </div>

            {/* High-Fi Prototype */}
            <div className="mb-12">
              <h3 className="text-[24px] md:text-[24px] font-semibold text-[#1D1D1F] mb-4">High-Fidelity Refinement</h3>
              <p className="text-[16px] md:text-[17px] text-[#1D1D1F] leading-relaxed mb-12">
              To validate feasibility beyond static mockups, <strong>I translated the interface into a functional Web AR prototype </strong>in Lens Studio—integrating exported Figma UI, custom 3D assets, and real interaction logic to <strong>demonstrate production viability</strong> to executive stakeholders.              </p>
              <div>
              {/* --- Three equal cards row --- */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-5">
              {/* Card 1: Team */}
                <div className="bg-white rounded-xl  border border-none shadow-none">
                <img src="/hyperx/Hifi enter with headset.gif" alt="Hifi enter with headset" className="w-full cursor-zoom-in" onClick={() => openImage("/hyperx/Hifi enter with headset.gif")} />
                </div>
              {/* Card 2: Team */}
                <div className="bg-white rounded-xl  border border-none shadow-none">
                <img src="/hyperx/Hifi Nature.gif" alt="Hifi customization option 1" className="w-full cursor-zoom-in" onClick={() => openImage("/hyperx/Hifi Nature.gif")} />
                </div>
               {/* Card 3: Team */}
                <div className="bg-white rounded-xl  border border-none shadow-none">
                <img src="/hyperx/Hifi Valkyrie.gif" alt="Hifi customization option 2" className="w-full cursor-zoom-in" onClick={() => openImage("/hyperx/Hifi Valkyrie.gif")} />
                </div>
               {/* Card 3: Team */}
               <div className="bg-white rounded-xl  border border-none shadow-none">
                <img src="/hyperx/Hifi Beast.gif" alt="Hifi customization option 3" className="w-full cursor-zoom-in" onClick={() => openImage("/hyperx/Hifi Beast.gif")} />
                </div>
             
                </div>
                <p className="text-center text-[14px] text-[#6E6E73] italic py-4 px-4 md:px-8">AR Try-On HX3D Best Sellers </p>
                </div>
              <p className="text-[16px] md:text-[17px] text-[#1D1D1F] leading-relaxed mb-4">
              User enters the AR experience, sees themselves wearing a headset, and tries on HX3D’s best-selling accessory sets in real time.
              </p>
             
             
                <div className="bg-white rounded-xl  border border-none shadow-none">
                <img src="/hyperx/Hifi Checkout.gif" alt="Hifi Checkout" className="w-full cursor-zoom-in" onClick={() => openImage("/hyperx/Hifi Checkout.gif")} />
                <p className="text-center text-[14px] text-[#6E6E73] italic py-4 px-4 md:px-8">AR-to-Web Checkout </p>
                </div>
              {/* Card 2: Team */}
                
                 
                <p className="text-[16px] md:text-[17px] text-[#1D1D1F] leading-relaxed mt-4">
                User selects a preferred HX3D accessory set in AR, proceeds to checkout, and is directed to HyperX.com/cart to review and complete their purchase.
              </p>
               
               
                
              <div className="bg-gradient-to-br from-[#667eea]/10 to-[#764ba2]/10 rounded-xl p-6 border border-[#667eea]/20 mt-12">
              <p className="text-[15px] text-[#1D1D1F] mt-3"><strong>Ergonomic: Optimization:</strong>  Elevating the customization bar slightly above the screen edge <u>improved thumb reach,</u> <u>reduced edge mis-taps,</u> and preserved AR visibility without disrupting face centering.              </p>
              <p className="text-[15px] text-[#1D1D1F] mt-3"><strong>System-Level Alignment:</strong> The interface was then refined to <u>align with HyperX NGENUITY’s visual system</u>— standardizing typography, color hierarchy, and button styling to ensure the AR experience felt like an <u>extension of the broader product ecosystem.</u>              </p>
             
              </div>
            </div>

            
          </section>

          <hr className="border-0 border-t border-[#D1D1D6] w-full my-0" />

          {/* 10. TRY IT YOURSELF */}
          <section id="try-it" className="bg-gradient-to-br from-[#667eea] to-[#764ba2] rounded-2xl shadow-sm p-12 md:p-16 text-center text-white scroll-mt-[130px]">
            <h2 className="text-[30px] md:text-[32px] font-bold mb-4">Try It Yourself</h2>
            <p className="text-[18px] mb-3 opacity-90">Scan the QR code to experience the live AR prototype</p>
            <p className="text-[14px] mb-8 opacity-75">This demo focuses on in-store discovery and real-time accessory preview. Checkout is represented conceptually in the video.</p>
            <div className="bg-white rounded-2xl p-8 inline-block shadow-sm mb-6">
              <img src="/hyperx/qr-code.png" alt="QR code to try AR experience" className="w-64 h-64 object-contain" />
            </div>
            <p className="text-[14px] opacity-75">Works on iOS and Android devices</p>
          </section>

          <hr className="border-0 border-t border-[#D1D1D6] w-full my-0" />

          {/* 9. OUTCOME & INFLUENCE */}
          <section id="impact" className="bg-white/60 backdrop-blur-sm rounded-2xl border border-[#E5E5E5]/50 shadow-sm p-12 px-8 md:px-12 scroll-mt-[130px]">
            <p className="text-[14px] font-semibold text-[#667eea] mb-3">OUTCOME & INFLUENCE</p>
            <ul className="space-y-8 text-[16px] text-[#1D1D1F] pl-4 pr-4">
              <li className="flex items-start gap-3">
                <span className="text-[#667eea] mt-1 text-[20px]">•</span>
                <span><strong>Validated technical feasibility within an 8MB Web AR constraint,</strong> de-risking AR commerce as a viable retail channel for HyperX.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#667eea] mt-1 text-[20px]">•</span>
                <span><strong>Clarified interaction and ergonomic direction</strong> through iterative prototyping — resolving thumb-reach and spatial hierarchy tradeoffs that informed the final interface model.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#667eea] mt-1 text-[20px]">•</span>
                <span><strong>Aligned the AR experience with HyperX NGENUITY's visual system,</strong> reinforcing ecosystem coherence across digital and physical product touchpoints.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#667eea] mt-1 text-[20px]">•</span>
                <span><strong>Independently presented to HyperX and HP senior leadership</strong> — including executives and directors across product, design, strategy, brand, and 3D — in a one-hour session covering both the user experience and underlying product strategy.</span>
              </li>
            </ul>
          </section>

          <hr className="border-0 border-t border-[#D1D1D6] w-full my-0" />

          {/* 10.5 LEADERSHIP ENDORSEMENTS */}
          <div id="testimonials" className="scroll-mt-[130px]">
            <p className="text-[14px] font-semibold text-[#667eea] mb-3">LEADERSHIP ENDORSEMENTS</p>
            <p className="text-[16px] md:text-[22px] text-[#1D1D1F] leading-[1.7] mb-3">Leadership & Mentor validation of execution, strategic thinking, and AR feasibility.</p>
          <div className="flex flex-col gap-6">
            {/* Testimonial 1 */}
            <div className="bg-white rounded-xl p-6 border border-[#F0EDE9] shadow-sm hover:shadow-md transition-shadow">
              <blockquote className="text-[15px] text-[#1D1D1F] leading-[1.6]">
                &ldquo;During your internship at HyperX, you <strong>operated with a level of ownership and strategic thinking well beyond your tenure</strong>. You not only led the HX3D AR try-on initiative, but also introduced us to the broader potential of AR technology within our ecosystem. The AR Quick Start Guide you developed brought clarity and structure to a complex workflow, and you presented both initiatives to the executive team and cross-functional stakeholders with confidence and polish. Your ability to <strong>connect emerging AR technology with real business impact and user experience</strong> truly sets you apart.&rdquo;
              </blockquote>
              <cite className="block text-[13px] text-[#6E6E73] mt-3 italic not-italic">— Brendan Nguyen, Manager, Product Visualization &amp; CGI</cite>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-white rounded-xl p-6 border border-[#F0EDE9] shadow-sm hover:shadow-md transition-shadow">
              <blockquote className="text-[15px] text-[#1D1D1F] leading-[1.6]">
                &ldquo;Kirana brought an exceptional blend of creativity, technical curiosity, and business acumen to her internship with HyperX. She developed a series of forward-thinking AR concepts designed to elevate customer engagement and meaningfully impact sales conversion.
                <br /><br />
                Her ability to <strong>connect vision with value</strong> was evident as she <strong>presented her design and technology concepts to executive leadership with clarity and confidence, articulating ROI and strategic impact</strong>. Kirana demonstrated a strong ability to tailor her messaging based on the audience, showing empathy and insight into stakeholder priorities.
                <br /><br />
                She is a thoughtful designer, a strong communicator, and a strategic thinker with tremendous potential ahead of her.&rdquo;
              </blockquote>
              <cite className="block text-[13px] text-[#6E6E73] mt-3 italic not-italic">— Mark Spijkers, Head of Design and User Experience, HyperX</cite>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-white rounded-xl p-6 border border-[#F0EDE9] shadow-sm hover:shadow-md transition-shadow">
              <blockquote className="text-[15px] text-[#1D1D1F] leading-[1.6]">
                &ldquo;I had the pleasure of working closely with Kirana during her internship at HyperX. She always showed a eager willingness to learn and was quick to adapt to new challenges. Whenever she faced a problem she didn&rsquo;t have an immediate answer for, she took the extra step to research and came back with a solution the next time we talked. <strong>Her curiosity, persistence, and problem-solving mindset</strong> truly made her a wonderful and valued member of our team.&rdquo;
              </blockquote>
              <cite className="block text-[13px] text-[#6E6E73] mt-3 italic not-italic">— Wesley Ihezue, 3D Designer, HyperX</cite>
            </div>
          </div>
          </div>

          <hr className="border-0 border-t border-[#D1D1D6] w-full my-0" />

          {/* 11. LESSONS LEARNED */}
          <section id="lessons" className="bg-white/60 backdrop-blur-sm rounded-2xl border border-[#E5E5E5]/50 shadow-sm p-12 px-8 md:px-12 scroll-mt-[130px]">
            <p className="text-[14px] font-semibold text-[#667eea] mb-3">LESSONS LEARNED</p>
            <ul className="space-y-8 text-[16px] text-[#1D1D1F] pl-4 pr-4">
              <li className="flex items-start gap-3">
                <span className="text-[#667eea] mt-1 text-[20px]">•</span>
                <span>In a future iteration, I would validate the <strong>shelf-to-scan journey in real retail environments</strong> to ensure discoverability and reduce friction before optimizing the AR interface itself.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#667eea] mt-1 text-[20px]">•</span>
                <span>With more time, I would <strong>instrument the AR-to-cart flow</strong> to measure point-of-scan conversion and collaborate with retail and e-commerce teams to pilot a production integration.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#667eea] mt-1 text-[20px]">•</span>
                <span>This project reinforced that <strong>hard performance constraints sharpen product decisions</strong> — balancing interaction depth with 3D fidelity required disciplined prioritization.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#667eea] mt-1 text-[20px]">•</span>
                <span>I'll carry forward the practice of <strong>building production-feasible prototypes early</strong> to align stakeholders, reduce ambiguity, and de-risk emerging technology initiatives.</span>
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