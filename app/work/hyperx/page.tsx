"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function HyperXPage() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [hasScrolled, setHasScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("overview");

  const sections = [
    { id: "overview", label: "Overview" },
    { id: "context", label: "Context" },
    { id: "problem", label: "Problem" },
    { id: "research", label: "Research" },
    { id: "hmw", label: "H.M.W" },
    { id: "framing", label: "Design" },
    { id: "try-it", label: "Try It" },
    { id: "impact", label: "Impact" },
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
              <p className="text-center text-[16px] text-[#6E6E73] py-4 px-4 md:px-8">Increase accessory attach rate by bringing digital-only HX3D products into the retail aisle via AR.</p>
            

            {/* Hero Visual */}
            <div className="rounded-2xl overflow-hidden mb-0">
              <img src="/hyperx/hero-ar-tryOn.png" alt="AR Try-On Experience" className="w-full" />
              <p className="text-center text-[14px] text-[#6E6E73] italic py-4 px-4 md:px-8">Preview. Customize. Purchase.</p>
            </div>
            {/* Product Summary */}
            <div id="context" className="mb-12 scroll-mt-[130px]">
              <p className="text-[16px] md:text-[17px] text-[#1D1D1F] leading-relaxed">
              Retail shoppers were choosing headsets without visibility into HyperX’s strongest differentiator: customization. I designed an AR commerce bridge that surfaced digital-only HX3D accessories at the point of comparison, turning in-store evaluation into a revenue opportunity.              </p>
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
                <img src="/hyperx/before-after.png" alt="Before and after comparison" className="w-full" />
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="px-4 md:px-6">
                  <p className="font-semibold text-[#1D1D1F] mb-3">Before:</p>
                  <p className="text-[15px] text-[#6E6E73] leading-[1.6]">
                  Accessory discovery relied entirely on post-purchase online traffic, leaving high-intent in-store shoppers disconnected from HyperX’s customization ecosystem.                  </p>
                </div>
                <div className="px-4 md:px-6">
                  <p className="font-semibold text-[#1D1D1F] mb-3">After:</p>
                  <p className="text-[15px] text-[#6E6E73] leading-[1.6]">
                  A shelf-placed QR entry point launches AR try-on instantly, converting retail foot traffic into a measurable, direct-to-consumer accessory channel.                  </p>
                </div>
              </div>
            </div>
          </section>

          <hr className="border-0 border-t border-[#D1D1D6] w-full my-0" />
{/* Problem Statement */}
<div id="problem" className="mb-0 scroll-mt-[130px]">
            <p className="text-[14px] font-semibold text-[#667eea] mb-3">PROBLEM</p>
              <p className="text-[16px] md:text-[22px] text-[#1D1D1F] leading-[1.7]">
              In-store shoppers evaluating HyperX headsets are unaware that customization options exist.           </p>
            </div>
            {/* 3. TARGET USER */}
<section className="bg-white/60 backdrop-blur-sm rounded-2xl border border-[#E5E5E5]/50 shadow-sm p-10 px-8 md:px-12">
            <h2 className="text-[22x] md:text-[30px] font-semibold text-[#1D1D1F] mb-10">Target User</h2>
            <div className="rounded-xl overflow-hidden shadow-sm mb-10">
              <img src="/hyperx/persona.png" alt="User persona - Jordan Mitchell" className="w-full" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-5">
                {/* Card 1: Team */}
                <div className="bg-white rounded-xl p-6 border border-none shadow-none">
                <p className="text-[14px] font-semibold text-[#667eea] mb-3">GOALS</p>
                  <div className="text-[16px] text-[#1D1D1F] leading-relaxed space-y-1">
                    <p>Tech-savvy gamers and streamers (18–28) who <span className="font-semibold"> shop for peripherals in-store. </span></p>
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
                  <span>Loses accessory attach rate and downstream ecosystem revenue</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#667eea] mt-1">•</span>
                  <span>Fails to differentiate at the most competitive decision point — the shelf</span>
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
            <p className="text-[16px] md:text-[22px] text-[#1D1D1F] leading-[1.7] mb-3" >
            Differentiation Fails When It’s Invisible at the Moment of Decision     </p>
            <p className="text-[16px] md:text-[16px] text-[#1D1D1F] leading-[1.7] mb-3">
                I conducted market research, in-store contextual inquiry, and cross-industry research to understand how headset accessories are discovered today and where meaningful product opportunities exist.
              </p>
          </div>
              <section className="bg-white/60 backdrop-blur-sm rounded-2xl border border-[#E5E5E5]/50 shadow-sm p-10 px-8 md:px-12">
            {/* Competitive Landscape */}
            <div className="mb-12">
              <h3 className="text-[20px] md:text-[22px] font-semibold text-[#1D1D1F] mb-8">Market Research</h3>
              <div className="rounded-xl overflow-hidden shadow-sm mb-10">
                <img src="/hyperx/competitive-analysis.png" alt="Competitive analysis" className="w-full" />
              </div>
              
              <p className="text-[15px] text-[#1D1D1F] leading-[1.7]">
                <strong>Key Insight:</strong> HyperX owns the strongest customization ecosystem in the category, but without visibility or digital preview, that advantage cannot influence purchase decisions.
              </p>
            </div>
            </section>
            
            {/* Contextual Inquiry */}
            <section className="bg-white/60 backdrop-blur-sm rounded-2xl border border-[#E5E5E5]/50 shadow-sm p-10 px-8 md:px-12">
            <div className="mb-12">
              <h3 className="text-[20px] md:text-[22px] font-semibold text-[#1D1D1F] mb-8">Contextual Inquiry</h3>
              <div className="rounded-xl overflow-hidden shadow-sm mb-10">
                <img src="/hyperx/contextual-analysis.png" alt="Contextual inquiry findings" className="w-full" />
              </div>
              <p className="text-[15px] text-[#1D1D1F] leading-[1.7]">
                <strong>Key Insight:</strong> In-store shoppers can evaluate the product — but not discover its customization potential.
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
                Together, these insights revealed an opportunity to use AR to bridge in-store headset shopping with HyperX's digital HX3D accessory catalog, making customization visible, experiential, and shoppable at the point of decision.
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
            <h2 className="text-[28px] md:text-[30px] font-bold text-[#1D1D1F] mb-10">Experience Architecture</h2>
            <div className="rounded-xl overflow-hidden shadow-sm mb-10">
              <img src="/hyperx/experience-architecture.png" alt="Experience architecture and flow" className="w-full" />
            </div>
            <div className="space-y-6 text-[16px] md:text-[17px] text-[#1D1D1F] leading-[1.7] pl-2 pr-2 md:pl-4 md:pr-4">
              <p>
                The experience is designed with in-store retail as the primary entry point, where shoppers are actively comparing headsets and making purchase decisions. QR codes placed on shelf talkers, header cards, or packaging labels act as a lightweight digital bridge between the physical retail environment and a Web-based AR experience.
              </p>
              <p>
                Scanning the QR code launches the AR Try-On directly, allowing shoppers to preview HX3D decorative accessories on the headset in real time without navigating through intermediate pages. This ensures immediate access to the core value of the experience: visualizing customization before purchase.
              </p>
              <p>
                Within the AR experience, users can tap a checkout call-to-action that redirects them to HyperX.com/cart with the selected HX3D accessories preloaded. From the cart, users can review accessory details if needed and complete their purchase through HyperX's existing e-commerce flow.
              </p>
              <p>
                This architecture prioritizes fast, in-store discovery while integrating seamlessly with HyperX's current digital infrastructure, enabling accessory purchases to occur before shoppers even complete their in-store headset purchase.
              </p>
            </div>
          </section>

          <hr className="border-0 border-t border-[#D1D1D6] w-full my-0" />

          {/* 8. DESIGN ITERATION */}
          <section id="iteration" className="bg-white/60 backdrop-blur-sm rounded-2xl border border-[#E5E5E5]/50 shadow-sm p-10 px-8 md:px-12">
            <h2 className="text-[28px] md:text-[30px] font-bold text-[#1D1D1F] mb-10">Design Iteration</h2>

            {/* Lo-Fi Exploration */}
            <div className="mb-12">
              <h3 className="text-[24px] md:text-[24px] font-semibold text-[#1D1D1F] mb-8">Lo-Fi Exploration</h3>
              <div className="rounded-xl overflow-hidden shadow-sm mb-10">
                <img src="/hyperx/lofi-exploration.png" alt="Lo-fi exploration" className="w-full" />
              </div>
              <h4 className="text-[18px] font-semibold text-[#1D1D1F] mb-4">Defining the Spatial Constraint</h4>
              <p className="text-[16px] md:text-[17px] text-[#1D1D1F] leading-[1.7] mb-10">
                <strong>Goal:</strong> Identify the optimal layout for a camera-first AR experience in a retail context.
              </p>
              <p className="text-[16px] md:text-[17px] text-[#1D1D1F] leading-[1.7] mb-10">
                Because the user's face and headset must remain centered and unobstructed, the core constraint was spatial: How much interface can be introduced without compromising AR visibility?
              </p>
              <div className="mb-10">
                <p className="font-semibold text-[#1D1D1F] mb-3">Layout Variations Explored:</p>
                <ul className="space-y-3 text-[15px] text-[#1D1D1F] pl-4 pr-4">
                  <li className="flex items-start gap-2"><span className="text-[#667eea] mt-1">•</span><span>Bottom-anchored customization bar + top checkout</span></li>
                  <li className="flex items-start gap-2"><span className="text-[#667eea] mt-1">•</span><span>Large bottom customization panel</span></li>
                  <li className="flex items-start gap-2"><span className="text-[#667eea] mt-1">•</span><span>Top-anchored customization + bottom checkout</span></li>
                  <li className="flex items-start gap-2"><span className="text-[#667eea] mt-1">•</span><span>Right-side vertical control panel</span></li>
                </ul>
              </div>
              <p className="text-[16px] md:text-[17px] text-[#1D1D1F] leading-[1.7] mb-10">
                Through early reviews with managers and peers, larger panels were eliminated because they disrupted face framing and made the experience feel like browsing rather than try-on.
              </p>
              <div className="bg-gradient-to-br from-[#667eea]/10 to-[#764ba2]/10 rounded-xl p-6 border border-[#667eea]/20 mb-8">
                <p className="text-[15px] text-[#1D1D1F] leading-[1.6]"><strong>Key Insight:</strong> Interface must support rapid visual comparison without competing with the user's face in AR.</p>
              </div>
              <p className="text-[15px] text-[#6E6E73] italic leading-[1.6]">
                <strong>Decision → Moving to Mid-Fi:</strong> I selected a bottom-positioned customization selector paired with a lightweight checkout call-to-action to preserve face centering, enable one-handed use, and reinforce AR try-on as the primary behavior.
              </p>
            </div>

            {/* Mid-Fi Prototype */}
            <div className="mb-12">
              <h3 className="text-[24px] md:text-[24px] font-semibold text-[#1D1D1F] mb-8">Mid-Fi Prototype</h3>
              <div className="rounded-xl overflow-hidden shadow-sm bg-black mb-10">
                <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
                  <iframe
                    className="absolute top-0 left-0 w-full h-full"
                    src="https://www.youtube.com/embed/k-q2NEEKSBY?rel=0"
                    title="Mid-Fi Prototype"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </div>
              <h4 className="text-[18px] font-semibold text-[#1D1D1F] mb-4">Validating Interaction, Ergonomics, and Conversion</h4>
              <p className="text-[16px] md:text-[17px] text-[#1D1D1F] leading-[1.7] mb-6">
                The mid-fi interactive prototype focused on validating three things:
              </p>
              <ul className="space-y-3 text-[15px] text-[#1D1D1F] mb-8 pl-4 pr-4">
                <li className="flex items-start gap-2"><span className="text-[#667eea] mt-1">•</span><span>Speed of accessory toggling</span></li>
                <li className="flex items-start gap-2"><span className="text-[#667eea] mt-1">•</span><span>Thumb ergonomics in a natural phone grip</span></li>
                <li className="flex items-start gap-2"><span className="text-[#667eea] mt-1">•</span><span>Realistic e-commerce handoff</span></li>
              </ul>
              <p className="text-[16px] md:text-[17px] text-[#1D1D1F] leading-[1.7] mb-8">
                Weekly testing sessions with managers, supervisors, and peers helped refine both interaction clarity and reachability.
              </p>
              <div className="mb-8">
                <p className="font-semibold text-[#1D1D1F] mb-3">Key Decisions in Mid-Fi:</p>
                <ul className="space-y-3 text-[15px] text-[#1D1D1F] pl-4 pr-4">
                  <li className="flex items-start gap-2"><span className="text-[#667eea] mt-1">•</span><span>Committed to bottom-positioned controls</span></li>
                  <li className="flex items-start gap-2"><span className="text-[#667eea] mt-1">•</span><span>Reduced UI chrome to emphasize AR</span></li>
                  <li className="flex items-start gap-2"><span className="text-[#667eea] mt-1">•</span><span>Kept checkout inside the AR experience</span></li>
                  <li className="flex items-start gap-2"><span className="text-[#667eea] mt-1">•</span><span>Implemented handoff to HyperX.com/cart with selected accessories preloaded</span></li>
                </ul>
              </div>
              <div className="bg-gradient-to-br from-[#667eea]/10 to-[#764ba2]/10 rounded-xl p-6 border border-[#667eea]/20 mb-6">
                <p className="text-[15px] text-[#1D1D1F]"><strong>Ergonomic Insight:</strong> Testing revealed that anchoring the customization bar flush to the bottom edge slightly strained thumb reach in a natural holding position. This informed the next refinement.</p>
              </div>
              <p className="text-[15px] text-[#6E6E73] italic">
                <strong>Decision → Moving to High-Fi:</strong> With interaction flow and checkout integration validated, the next iteration focused on ergonomic refinement and system-level brand alignment.
              </p>
            </div>

            {/* High-Fi Prototype */}
            <div className="mb-12">
              <h3 className="text-[24px] md:text-[24px] font-semibold text-[#1D1D1F] mb-8">High-Fidelity Prototype</h3>
              <div className="rounded-xl overflow-hidden shadow-sm bg-black mb-10">
                <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
                  <iframe
                    className="absolute top-0 left-0 w-full h-full"
                    src="https://www.youtube.com/embed/s4N8mFgTG1E?rel=0"
                    title="High-Fidelity Prototype"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </div>
              <h4 className="text-[18px] font-semibold text-[#1D1D1F] mb-3">Refining Ergonomics & Brand System Integration</h4>
              <p className="text-[16px] md:text-[17px] text-[#1D1D1F] leading-relaxed mb-4">
                In the high-fidelity iteration, I raised the customization selector slightly above the bottom edge of the screen to align with the natural arc of the thumb when holding a phone one-handed.
              </p>
              <div className="mb-8">
                <p className="text-[15px] text-[#1D1D1F] mb-2">This subtle adjustment:</p>
                <ul className="space-y-2 text-[15px] text-[#1D1D1F] pl-4 pr-4">
                  <li className="flex items-start gap-2"><span className="text-[#667eea] mt-1">•</span><span>Improved reachability</span></li>
                  <li className="flex items-start gap-2"><span className="text-[#667eea] mt-1">•</span><span>Reduced edge mis-taps</span></li>
                  <li className="flex items-start gap-2"><span className="text-[#667eea] mt-1">•</span><span>Maintained face centering</span></li>
                  <li className="flex items-start gap-2"><span className="text-[#667eea] mt-1">•</span><span>Preserved AR visibility</span></li>
                </ul>
              </div>
              <h4 className="text-[18px] font-semibold text-[#1D1D1F] mb-3">Brand & System Alignment</h4>
              <p className="text-[16px] md:text-[17px] text-[#1D1D1F] leading-relaxed mb-4">
                The interface was refined to align with the visual language being developed for HyperX NGENUITY, HyperX's device customization platform. Refinements included typography alignment, color hierarchy adjustments, and button styling consistency.
              </p>
              <p className="text-[16px] md:text-[17px] text-[#1D1D1F] leading-relaxed mb-4">
                The goal was to ensure the AR experience felt like an extension of HyperX's ecosystem rather than a standalone AR experiment.
              </p>
              <div className="bg-gradient-to-br from-[#667eea]/10 to-[#764ba2]/10 rounded-xl p-6 border border-[#667eea]/20">
                <p className="text-[15px] text-[#1D1D1F]"><strong>Production-Ready Flow:</strong> The high-fidelity prototype maintained the validated cart redirect introduced in mid-fi, reinforcing that AR selection transitions directly into HyperX's existing e-commerce system.</p>
              </div>
            </div>

            {/* Technical Decisions */}
            <div>
              <h3 className="text-[24px] font-semibold text-[#1D1D1F] mb-8">Technical Decisions as Product Design</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white rounded-xl p-6 border border-[#E5E5E5]/30">
                  <h4 className="font-semibold text-[#1D1D1F] mb-3">Interaction Logic</h4>
                  <p className="text-[15px] text-[#6E6E73]">I taught myself JavaScript and implemented lightweight interaction logic in Lens Studio to manage accessory toggling and state changes.</p>
                </div>
                <div className="bg-white rounded-xl p-6 border border-[#E5E5E5]/30">
                  <h4 className="font-semibold text-[#1D1D1F] mb-3">Performance Constraints</h4>
                  <p className="text-[15px] text-[#6E6E73]">Lens Studio Web AR enforces an 8MB file size limit, requiring careful prioritization of interactions, assets, and visual fidelity to ensure fast load times in retail environments.</p>
                </div>
                <div className="bg-white rounded-xl p-6 border border-[#E5E5E5]/30">
                  <h4 className="font-semibold text-[#1D1D1F] mb-3">3D Asset Optimization</h4>
                  <p className="text-[15px] text-[#6E6E73]">I optimized product CAD models in Blender, keeping each model under 60,000 triangles while preserving premium visual quality for smooth mobile AR rendering.</p>
                </div>
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

          {/* 9. IMPACT */}
          <section id="impact" className="bg-white/60 backdrop-blur-sm rounded-2xl border border-[#E5E5E5]/50 shadow-sm p-10 px-8 md:px-12 scroll-mt-[130px]">
          <p className="text-[14px] font-semibold text-[#667eea] mb-3">IMPACT</p>
            <p className="text-[16px] md:text-[17px] text-[#1D1D1F] leading-[1.7] mb-10">
              I independently presented this work during a one-hour session with HyperX and HP senior leadership, including executives and directors across product, design, strategy, brand, and 3D. The session required communicating both the user experience and underlying product strategy to stakeholders with varied backgrounds.
            </p>

            <div className="bg-gradient-to-br from-[#667eea]/10 to-[#764ba2]/10 rounded-xl p-8 border border-[#667eea]/20 mb-8">
              <p className="text-[14px] text-[#6E6E73] mb-3">Attendees included:</p>
              <p className="text-[15px] text-[#1D1D1F]">
                Gagan Singh (VP & GM), Dan Kelley (VP Gaming Solutions), Mark Spijkers (Global Head of Design & UX), Sean Peralta (Director of Product), Kellie Steinman (Director of Strategic Planning / Chief of Staff), Brendan Nguyen (Director of 3D/CGI), Shawn Denison (Global Product Manager, Audio), Rodrigo Rangel (Global Brand Manager)
              </p>
            </div>

            <div className="mb-8">
              <h3 className="text-[20px] font-semibold text-[#1D1D1F] mb-4">Technical Credibility</h3>
              <p className="text-[16px] md:text-[17px] text-[#1D1D1F] leading-relaxed">
                The quality and performance of the AR prototype reinforced confidence that this experience could scale, demonstrating that HX3D accessories could be realistically previewed in-store without compromising performance or brand quality.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 border-l-4 border-[#667eea] shadow-md">
              <p className="text-[16px] text-[#1D1D1F] leading-relaxed italic mb-3">
                "Thank you so much for all the fantastic work you've shown us. I'm very motivated to get HyperX to invest in these capabilities, and when that becomes a reality, my first focus will be to find a way for you to continue this work with us."
              </p>
              <p className="text-[14px] text-[#667eea] font-semibold">— Mark Spijkers, Global Head of Design and User Experience, HyperX</p>
            </div>
          </section>

          <hr className="border-0 border-t border-[#D1D1D6] w-full my-0" />

          {/* 11. LESSONS LEARNED */}
          <section id="lessons" className="bg-white/60 backdrop-blur-sm rounded-2xl border border-[#E5E5E5]/50 shadow-sm p-12 px-8 md:px-12 scroll-mt-[130px]">
          <p className="text-[14px] font-semibold text-[#667eea] mb-3">LESSONS LEARNED</p>
            <ul className="space-y-8 text-[16px] text-[#1D1D1F] pl-4 pr-4">
              <li className="flex items-start gap-3">
                <span className="text-[#667eea] mt-1 text-[20px]">•</span>
                <span>Making differentiation visible at the shelf can influence purchase decisions before checkout.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#667eea] mt-1 text-[20px]">•</span>
                <span>AR is most effective when framed as a product bridge, not a standalone experience.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#667eea] mt-1 text-[20px]">•</span>
                <span>Research and live demos are essential for aligning stakeholders on emerging technology.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#667eea] mt-1 text-[20px]">•</span>
                <span>Technical constraints can sharpen, not limit, product design decisions.</span>
              </li>
            </ul>
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
