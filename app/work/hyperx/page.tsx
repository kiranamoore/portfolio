"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import HeroBackground from "@/components/HeroBackground";

export default function HyperXPage() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [hasScrolled, setHasScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("overview");

  const sections = [
    { id: "overview", label: "Overview" },
    { id: "context", label: "Context" },
    { id: "target-user", label: "Target User" },
    { id: "research", label: "Research" },
    { id: "insights", label: "Insights" },
    { id: "framing", label: "Framing" },
    { id: "architecture", label: "Architecture" },
    { id: "iteration", label: "Iteration" },
    { id: "impact", label: "Impact" },
    { id: "try-it", label: "Try It" },
    { id: "lessons", label: "Lessons" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) setHasScrolled(true);

      // Track active section
      const sectionElements = sections.map(s => ({
        id: s.id,
        element: document.getElementById(s.id)
      })).filter(s => s.element);

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
      {/* HeroBackground removed for project pages */}

      {/* Side Navigation */}
      <Link href="/work/meta-alchemy" className="fixed left-4 lg:left-8 top-1/2 -translate-y-1/2 z-20 hidden lg:flex flex-col items-center justify-center gap-2 group">
        <span className="text-[11px] text-[#86868B] uppercase tracking-widest text-center group-hover:text-[#667eea] transition-colors">Prev<br />Project</span>
        <svg className="w-6 h-6 text-[#86868B] group-hover:text-[#667eea] transition-colors animate-bounce-left" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
        </svg>
      </Link>
      <Link href="/work/nogi-nogi" className="fixed right-4 lg:right-8 top-1/2 -translate-y-1/2 z-20 hidden lg:flex flex-col items-center justify-center gap-2 group">
        <span className="text-[11px] text-[#86868B] uppercase tracking-widest text-center group-hover:text-[#667eea] transition-colors">Next<br />Project</span>
        <svg className="w-6 h-6 text-[#86868B] group-hover:text-[#667eea] transition-colors animate-bounce-right" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                document.getElementById(section.id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }}
              className={`block text-[14px] transition-all duration-200 ${
                activeSection === section.id
                  ? 'text-[#667eea] font-medium'
                  : 'text-[#86868B] hover:text-[#1D1D1F]'
              }`}
            >
              {activeSection === section.id && <span className="inline-block mr-2">←</span>}
              {section.label}
            </a>
          ))}
        </div>
      </nav>

      <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-8 md:px-12 lg:px-24 py-12" style={{ paddingTop: '100px' }}>
        <div className="w-full max-w-4xl" style={{ display: 'flex', flexDirection: 'column', gap: '180px' }}>

          {/* 1. OVERVIEW */}
          <section id="overview">
            {/* Title */}
            <div className="text-center style={{ marginBottom: '50px' }}">
              <h1 className="text-[42px] md:text-[52px] font-bold text-[#1D1D1F] tracking-tight leading-tight mb-3">
                HX3D AR Retail Experience
              </h1>
              <p className="text-[18px] text-[#667eea] font-semibold">HyperX · Product Design · AR Commerce Case Study</p>
            </div>

            {/* Hero Visual */}
            <div className="style={{ marginBottom: '50px' }} rounded-2xl overflow-hidden shadow-2xl bg-white/80 backdrop-blur-sm border border-[#E5E5E5]/50">
              <img src="/hyperx/hero-ar-tryOn.png" alt="AR Try-On Experience" className="w-full" />
            </div>
            <p className="text-center text-[16px] text-[#6E6E73] italic style={{ marginBottom: '50px' }}">Preview. Customize. Purchase.</p>

            {/* Product Summary */}
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl border border-[#E5E5E5]/50 shadow-lg p-12 style={{ marginBottom: '50px' }}">
              <p className="text-[18px] text-[#1D1D1F] leading-relaxed">
                To address the lack of in-store discovery for HyperX's HX3D headset accessories, I designed an AR retail experience that lets shoppers scan a QR code in-store, preview accessory sets on the headset in real time, and purchase them online.
              </p>
            </div>

            {/* Role & Responsibilities */}
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl border border-[#E5E5E5]/50 shadow-lg" style={{ padding: '60px' }}>
              <h3 className="text-[24px] font-bold text-[#1D1D1F] style={{ marginBottom: '40px' }}">Role & Responsibilities</h3>
              <div className="grid md:grid-cols-3 gap-8 style={{ marginBottom: '40px' }}">
                <div>
                  <p className="text-[14px] font-semibold text-[#667eea] mb-2">ROLE</p>
                  <p className="text-[16px] text-[#1D1D1F]">Product Designer</p>
                </div>
                <div>
                  <p className="text-[14px] font-semibold text-[#667eea] mb-2">SCOPE</p>
                  <p className="text-[16px] text-[#1D1D1F]">End-to-end, solo project</p>
                </div>
                <div>
                  <p className="text-[14px] font-semibold text-[#667eea] mb-2">TIMELINE</p>
                  <p className="text-[16px] text-[#1D1D1F]">13 weeks</p>
                </div>
              </div>
              <div className="style={{ marginBottom: '40px' }}">
                <p className="text-[14px] font-semibold text-[#667eea] mb-3">RESPONSIBILITIES</p>
                <ul className="space-y-2 text-[15px] text-[#1D1D1F]">
                  <li className="flex items-start gap-2"><span className="text-[#667eea] mt-1">•</span><span>Problem definition and opportunity framing</span></li>
                  <li className="flex items-start gap-2"><span className="text-[#667eea] mt-1">•</span><span>User and market research</span></li>
                  <li className="flex items-start gap-2"><span className="text-[#667eea] mt-1">•</span><span>Experience and interaction design</span></li>
                  <li className="flex items-start gap-2"><span className="text-[#667eea] mt-1">•</span><span>System and flow design</span></li>
                  <li className="flex items-start gap-2"><span className="text-[#667eea] mt-1">•</span><span>AR prototyping and technical implementation</span></li>
                  <li className="flex items-start gap-2"><span className="text-[#667eea] mt-1">•</span><span>Executive presentation and stakeholder alignment</span></li>
                </ul>
              </div>
              <div>
                <p className="text-[14px] font-semibold text-[#667eea] mb-2">TOOLS & PLATFORM</p>
                <p className="text-[15px] text-[#1D1D1F]">Figma, FigJam, Lens Studio, JavaScript, Blender, Photoshop · Mobile Web AR (QR-based)</p>
              </div>
            </div>
          </section>

          {/* 2. CONTEXT & PROBLEM */}
          <section id="context" className="bg-white/60 backdrop-blur-sm rounded-2xl border border-[#E5E5E5]/50 shadow-lg" style={{ padding: '60px' }}>
            <h2 className="text-[32px] font-bold text-[#1D1D1F] style={{ marginBottom: '50px' }}">Context & Problem</h2>

            {/* Context */}
            <div className="style={{ marginBottom: '50px' }}">
              <h3 className="text-[20px] font-semibold text-[#1D1D1F] style={{ marginBottom: '40px' }}">Context</h3>
              <p className="text-[16px] text-[#1D1D1F] leading-[1.7]">
                HyperX headsets are primarily purchased in physical retail environments such as Best Buy, Target, and other major electronics stores. However, HX3D decorative accessories are sold exclusively online and have no physical or digital presence in retail. As a result, in-store shoppers evaluating HyperX headsets are unaware that customization options even exist.
              </p>
            </div>

            {/* Before/After */}
            <div className="style={{ marginBottom: '50px' }}">
              <h3 className="text-[20px] font-semibold text-[#1D1D1F] style={{ marginBottom: '40px' }}">Before / After Snapshot</h3>
              <div className="rounded-xl overflow-hidden shadow-xl style={{ marginBottom: '40px' }}">
                <img src="/hyperx/before-after.png" alt="Before and after comparison" className="w-full" />
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <p className="font-semibold text-[#1D1D1F] mb-3">Before:</p>
                  <p className="text-[15px] text-[#6E6E73] leading-[1.6]">A HyperX retail section displaying headsets, keyboards, mice, and microphones, with no HX3D accessories shown and no indication that decorative customization options exist.</p>
                </div>
                <div>
                  <p className="font-semibold text-[#1D1D1F] mb-3">After:</p>
                  <p className="text-[15px] text-[#6E6E73] leading-[1.6]">A QR-initiated AR experience that allows shoppers to preview HX3D accessory sets directly on the headset in real time, making customization visible at the point of purchase.</p>
                </div>
              </div>
            </div>

            {/* Problem Statement */}
            <div className="style={{ marginBottom: '50px' }}">
              <h3 className="text-[20px] font-semibold text-[#1D1D1F] style={{ marginBottom: '40px' }}">Problem Statement</h3>
              <p className="text-[16px] text-[#1D1D1F] leading-[1.7]">
                In-store shoppers choosing between gaming headsets have no way to discover that HyperX offers customizable HX3D accessories, resulting in missed differentiation, missed accessory sales, and lost opportunities to influence purchase decisions at the shelf.
              </p>
            </div>

            {/* Why This Matters */}
            <div>
              <h3 className="text-[20px] font-semibold text-[#1D1D1F] style={{ marginBottom: '40px' }}">Why This Matters</h3>
              <p className="text-[16px] text-[#1D1D1F] leading-[1.7] style={{ marginBottom: '40px' }}">
                For users, the lack of visibility into HX3D accessories removes an opportunity for personalization and self-expression, especially for shoppers who value aesthetics and cohesive gaming setups.
              </p>
              <p className="text-[16px] text-[#1D1D1F] leading-[1.7] mb-4">For HyperX, this means:</p>
              <ul className="space-y-3 text-[15px] text-[#1D1D1F] style={{ marginBottom: '40px' }}">
                <li className="flex items-start gap-2"><span className="text-[#667eea] mt-1">•</span><span>Losing incremental accessory revenue</span></li>
                <li className="flex items-start gap-2"><span className="text-[#667eea] mt-1">•</span><span>Missing a chance to differentiate headsets from competitors on the shelf</span></li>
                <li className="flex items-start gap-2"><span className="text-[#667eea] mt-1">•</span><span>Failing to surface a unique product advantage at the moment of decision</span></li>
              </ul>
              <p className="text-[16px] text-[#1D1D1F] leading-[1.7]">
                Making HX3D visible in-store increases the likelihood that shoppers choose HyperX over competing brands and purchase accessories alongside or even before purchasing the headset itself.
              </p>
            </div>
          </section>

          {/* 3. TARGET USER */}
          <section id="target-user" className="bg-white/60 backdrop-blur-sm rounded-2xl border border-[#E5E5E5]/50 shadow-lg" style={{ padding: '60px' }}>
            <h2 className="text-[32px] font-bold text-[#1D1D1F] style={{ marginBottom: '50px' }}">Target User</h2>
            <div className="rounded-xl overflow-hidden shadow-xl style={{ marginBottom: '40px' }}">
              <img src="/hyperx/persona.png" alt="User persona - Jordan Mitchell" className="w-full" />
            </div>
            <p className="text-[16px] text-[#1D1D1F] leading-[1.7]">
              The primary user is a style-conscious gamer shopping in-store who values personalization and wants to understand how a headset can reflect their aesthetic before committing to a purchase.
            </p>
          </section>

          {/* 4. RESEARCH */}
          <section id="research" className="bg-white/60 backdrop-blur-sm rounded-2xl border border-[#E5E5E5]/50 shadow-lg" style={{ padding: '60px' }}>
            <h2 className="text-[32px] font-bold text-[#1D1D1F] style={{ marginBottom: '50px' }}">Research</h2>

            {/* Research Approach */}
            <div className="style={{ marginBottom: '50px' }}">
              <h3 className="text-[20px] font-semibold text-[#1D1D1F] style={{ marginBottom: '40px' }}">Research Approach</h3>
              <p className="text-[16px] text-[#1D1D1F] leading-[1.7]">
                I combined competitive analysis, in-store contextual inquiry, and cross-industry research to understand how headset accessories are discovered today and where meaningful product opportunities exist.
              </p>
            </div>

            {/* Competitive Landscape */}
            <div className="style={{ marginBottom: '50px' }}">
              <h3 className="text-[20px] font-semibold text-[#1D1D1F] style={{ marginBottom: '40px' }}">Competitive Landscape</h3>
              <div className="rounded-xl overflow-hidden shadow-xl style={{ marginBottom: '40px' }}">
                <img src="/hyperx/competitive-analysis.png" alt="Competitive analysis" className="w-full" />
              </div>
              <p className="text-[16px] text-[#1D1D1F] leading-[1.7] style={{ marginBottom: '40px' }}">
                HyperX is the only major gaming brand offering a wide variety of decorative headset accessories with cross-headset compatibility. However, unlike other product categories, there is no way for users to preview or try these accessories digitally before purchase.
              </p>
              <p className="text-[15px] text-[#1D1D1F] leading-[1.7]">
                <strong>Key Insight:</strong> HyperX has the strongest accessory offering in the category, but no mechanism to make that advantage visible or experiential.
              </p>
            </div>

            {/* Contextual Inquiry */}
            <div className="style={{ marginBottom: '50px' }}">
              <h3 className="text-[20px] font-semibold text-[#1D1D1F] style={{ marginBottom: '40px' }}">Contextual Inquiry</h3>
              <div className="rounded-xl overflow-hidden shadow-xl style={{ marginBottom: '40px' }}">
                <img src="/hyperx/contextual-analysis.png" alt="Contextual inquiry findings" className="w-full" />
              </div>
              <p className="text-[16px] text-[#1D1D1F] leading-[1.7]">
                In-store observation revealed that HX3D accessories have zero physical presence. Shoppers comparing HyperX headsets with neighboring brands see no indication of customization options and no digital touchpoint to explore them online. This lack of visibility means HyperX's key differentiator is invisible at the shelf.
              </p>
            </div>

            {/* Cross-Industry Signals */}
            <div>
              <h3 className="text-[20px] font-semibold text-[#1D1D1F] style={{ marginBottom: '40px' }}">Cross-Industry Signals</h3>
              <div className="rounded-xl overflow-hidden shadow-xl style={{ marginBottom: '40px' }}">
                <img src="/hyperx/ar-companies-logos.png" alt="AR precedents - Nike, Adidas, Gucci, Zara, Meta" className="w-full" />
              </div>
              <p className="text-[16px] text-[#1D1D1F] leading-[1.7]">
                Across fashion, footwear, and wearables, brands use AR to surface customization, reduce hesitation, and help customers visualize products in context. These experiences bridge physical environments and digital catalogs, increasing confidence and conversion. This pattern validated AR as a proven approach for making visually driven options discoverable at the moment of decision.
              </p>
            </div>
          </section>

          {/* 5. RESEARCH INSIGHTS */}
          <section id="insights" className="bg-white/60 backdrop-blur-sm rounded-2xl border border-[#E5E5E5]/50 shadow-lg" style={{ padding: '60px' }}>
            <h2 className="text-[32px] font-bold text-[#1D1D1F] style={{ marginBottom: '50px' }}">Research Insights</h2>
            <ul className="space-y-6 text-[16px] text-[#1D1D1F] style={{ marginBottom: '50px' }}">
              <li className="flex items-start gap-3">
                <span className="text-[#667eea] mt-1 text-[20px]">•</span>
                <div>
                  <strong>Customization is a primary differentiator, but it is invisible in retail.</strong>
                  <p className="text-[15px] text-[#6E6E73] mt-1">HX3D accessories differentiate HyperX from competitors, yet shoppers never see this advantage in-store.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#667eea] mt-1 text-[20px]">•</span>
                <div>
                  <strong>In-store shoppers are making decisions without full product awareness.</strong>
                  <p className="text-[15px] text-[#6E6E73] mt-1">Without knowledge of HX3D, shoppers evaluate HyperX headsets as functionally similar to competing brands.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#667eea] mt-1 text-[20px]">•</span>
                <div>
                  <strong>The highest-intent moment occurs before checkout, not after.</strong>
                  <p className="text-[15px] text-[#6E6E73] mt-1">Shoppers are most open to accessories while comparing products on the shelf, not after leaving the store.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#667eea] mt-1 text-[20px]">•</span>
                <div>
                  <strong>AR can surface digital-only products without adding physical inventory.</strong>
                  <p className="text-[15px] text-[#6E6E73] mt-1">Cross-industry examples show AR is effective at bringing online-only options into physical spaces.</p>
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

          {/* 6. DESIGN FRAMING */}
          <section id="framing" className="bg-white/60 backdrop-blur-sm rounded-2xl border border-[#E5E5E5]/50 shadow-lg" style={{ padding: '60px' }}>
            <h2 className="text-[32px] font-bold text-[#1D1D1F] style={{ marginBottom: '50px' }}">Design Framing</h2>

            {/* How Might We */}
            <div className="style={{ marginBottom: '50px' }}">
              <h3 className="text-[20px] font-semibold text-[#1D1D1F] style={{ marginBottom: '40px' }}">How Might We</h3>
              <p className="text-[18px] text-[#1D1D1F] leading-[1.7] italic">
                How might we help in-store shoppers discover and preview HX3D headset accessories while comparing products in major electronics retail stores?
              </p>
            </div>

            {/* Design Principles */}
            <div>
              <h3 className="text-[20px] font-semibold text-[#1D1D1F] style={{ marginBottom: '40px' }}">Design Principles</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white rounded-xl p-6 border border-[#E5E5E5]/30">
                  <h4 className="font-semibold text-[#1D1D1F] mb-2">Make the Invisible Visible</h4>
                  <p className="text-[15px] text-[#6E6E73]">HX3D accessories must be discoverable in the retail aisle, not hidden online.</p>
                </div>
                <div className="bg-white rounded-xl p-6 border border-[#E5E5E5]/30">
                  <h4 className="font-semibold text-[#1D1D1F] mb-2">Preview on the User, Not the Product Page</h4>
                  <p className="text-[15px] text-[#6E6E73]">Shoppers need to see accessories on themselves, not as isolated images.</p>
                </div>
                <div className="bg-white rounded-xl p-6 border border-[#E5E5E5]/30">
                  <h4 className="font-semibold text-[#1D1D1F] mb-2">Support Fast, Confident Decisions</h4>
                  <p className="text-[15px] text-[#6E6E73]">The experience must work in seconds, not minutes, while standing in-store.</p>
                </div>
                <div className="bg-white rounded-xl p-6 border border-[#E5E5E5]/30">
                  <h4 className="font-semibold text-[#1D1D1F] mb-2">Integrate with Existing Retail Reality</h4>
                  <p className="text-[15px] text-[#6E6E73]">The solution must require no additional shelf space, inventory, or store redesign.</p>
                </div>
              </div>
            </div>
          </section>

          {/* 7. EXPERIENCE ARCHITECTURE */}
          <section id="architecture" className="bg-white/60 backdrop-blur-sm rounded-2xl border border-[#E5E5E5]/50 shadow-lg" style={{ padding: '60px' }}>
            <h2 className="text-[32px] font-bold text-[#1D1D1F] style={{ marginBottom: '50px' }}">Experience Architecture</h2>
            <div className="rounded-xl overflow-hidden shadow-xl style={{ marginBottom: '50px' }}">
              <img src="/hyperx/experience-architecture.png" alt="Experience architecture and flow" className="w-full" />
            </div>
            <div className="space-y-6 text-[16px] text-[#1D1D1F] leading-[1.7]">
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

          {/* 8. DESIGN ITERATION */}
          <section id="iteration" className="bg-white/60 backdrop-blur-sm rounded-2xl border border-[#E5E5E5]/50 shadow-lg" style={{ padding: '60px' }}>
            <h2 className="text-[32px] font-bold text-[#1D1D1F] style={{ marginBottom: '50px' }}">Design Iteration</h2>

            {/* Lo-Fi Exploration */}
            <div className="style={{ marginBottom: '50px' }}">
              <h3 className="text-[24px] font-semibold text-[#1D1D1F] style={{ marginBottom: '40px' }}">Lo-Fi Exploration</h3>
              <div className="rounded-xl overflow-hidden shadow-xl style={{ marginBottom: '40px' }}">
                <img src="/hyperx/lofi-exploration.png" alt="Lo-fi exploration" className="w-full" />
              </div>
              <h4 className="text-[18px] font-semibold text-[#1D1D1F] mb-4">Defining the Spatial Constraint</h4>
              <p className="text-[16px] text-[#1D1D1F] leading-[1.7] style={{ marginBottom: '40px' }}">
                <strong>Goal:</strong> Identify the optimal layout for a camera-first AR experience in a retail context.
              </p>
              <p className="text-[16px] text-[#1D1D1F] leading-[1.7] style={{ marginBottom: '40px' }}">
                Because the user's face and headset must remain centered and unobstructed, the core constraint was spatial: How much interface can be introduced without compromising AR visibility?
              </p>
              <div className="style={{ marginBottom: '40px' }}">
                <p className="font-semibold text-[#1D1D1F] mb-3">Layout Variations Explored:</p>
                <ul className="space-y-3 text-[15px] text-[#1D1D1F]">
                  <li className="flex items-start gap-2"><span className="text-[#667eea] mt-1">•</span><span>Bottom-anchored customization bar + top checkout</span></li>
                  <li className="flex items-start gap-2"><span className="text-[#667eea] mt-1">•</span><span>Large bottom customization panel</span></li>
                  <li className="flex items-start gap-2"><span className="text-[#667eea] mt-1">•</span><span>Top-anchored customization + bottom checkout</span></li>
                  <li className="flex items-start gap-2"><span className="text-[#667eea] mt-1">•</span><span>Right-side vertical control panel</span></li>
                </ul>
              </div>
              <p className="text-[16px] text-[#1D1D1F] leading-[1.7] style={{ marginBottom: '40px' }}">
                Through early reviews with managers and peers, larger panels were eliminated because they disrupted face framing and made the experience feel like browsing rather than try-on.
              </p>
              <div className="bg-gradient-to-br from-[#667eea]/10 to-[#764ba2]/10 rounded-xl p-6 border border-[#667eea]/20 style={{ marginBottom: '40px' }}">
                <p className="text-[15px] text-[#1D1D1F] leading-[1.6]"><strong>Key Insight:</strong> Interface must support rapid visual comparison without competing with the user's face in AR.</p>
              </div>
              <p className="text-[15px] text-[#6E6E73] italic leading-[1.6]">
                <strong>Decision → Moving to Mid-Fi:</strong> I selected a bottom-positioned customization selector paired with a lightweight checkout call-to-action to preserve face centering, enable one-handed use, and reinforce AR try-on as the primary behavior.
              </p>
            </div>

            {/* Mid-Fi Prototype */}
            <div className="style={{ marginBottom: '50px' }}">
              <h3 className="text-[24px] font-semibold text-[#1D1D1F] style={{ marginBottom: '40px' }}">Mid-Fi Prototype</h3>
              <div className="rounded-xl overflow-hidden shadow-xl bg-black" style={{ marginBottom: '40px' }}>
                <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
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
              <p className="text-[16px] text-[#1D1D1F] leading-[1.7] style={{ marginBottom: '40px' }}">
                The mid-fi interactive prototype focused on validating three things:
              </p>
              <ul className="space-y-3 text-[15px] text-[#1D1D1F] style={{ marginBottom: '40px' }}">
                <li className="flex items-start gap-2"><span className="text-[#667eea] mt-1">•</span><span>Speed of accessory toggling</span></li>
                <li className="flex items-start gap-2"><span className="text-[#667eea] mt-1">•</span><span>Thumb ergonomics in a natural phone grip</span></li>
                <li className="flex items-start gap-2"><span className="text-[#667eea] mt-1">•</span><span>Realistic e-commerce handoff</span></li>
              </ul>
              <p className="text-[16px] text-[#1D1D1F] leading-[1.7] style={{ marginBottom: '40px' }}">
                Weekly testing sessions with managers, supervisors, and peers helped refine both interaction clarity and reachability.
              </p>
              <div className="style={{ marginBottom: '40px' }}">
                <p className="font-semibold text-[#1D1D1F] mb-3">Key Decisions in Mid-Fi:</p>
                <ul className="space-y-3 text-[15px] text-[#1D1D1F]">
                  <li className="flex items-start gap-2"><span className="text-[#667eea] mt-1">•</span><span>Committed to bottom-positioned controls</span></li>
                  <li className="flex items-start gap-2"><span className="text-[#667eea] mt-1">•</span><span>Reduced UI chrome to emphasize AR</span></li>
                  <li className="flex items-start gap-2"><span className="text-[#667eea] mt-1">•</span><span>Kept checkout inside the AR experience</span></li>
                  <li className="flex items-start gap-2"><span className="text-[#667eea] mt-1">•</span><span>Implemented handoff to HyperX.com/cart with selected accessories preloaded</span></li>
                </ul>
              </div>
              <div className="bg-gradient-to-br from-[#667eea]/10 to-[#764ba2]/10 rounded-xl p-6 border border-[#667eea]/20 mb-4">
                <p className="text-[15px] text-[#1D1D1F]"><strong>Ergonomic Insight:</strong> Testing revealed that anchoring the customization bar flush to the bottom edge slightly strained thumb reach in a natural holding position. This informed the next refinement.</p>
              </div>
              <p className="text-[15px] text-[#6E6E73] italic">
                <strong>Decision → Moving to High-Fi:</strong> With interaction flow and checkout integration validated, the next iteration focused on ergonomic refinement and system-level brand alignment.
              </p>
            </div>

            {/* High-Fi Prototype */}
            <div className="style={{ marginBottom: '50px' }}">
              <h3 className="text-[24px] font-semibold text-[#1D1D1F] style={{ marginBottom: '40px' }}">High-Fidelity Prototype</h3>
              <div className="rounded-xl overflow-hidden shadow-xl bg-black" style={{ marginBottom: '40px' }}>
                <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
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
              <p className="text-[16px] text-[#1D1D1F] leading-relaxed mb-4">
                In the high-fidelity iteration, I raised the customization selector slightly above the bottom edge of the screen to align with the natural arc of the thumb when holding a phone one-handed.
              </p>
              <div className="style={{ marginBottom: '40px' }}">
                <p className="text-[15px] text-[#1D1D1F] mb-2">This subtle adjustment:</p>
                <ul className="space-y-2 text-[15px] text-[#1D1D1F]">
                  <li className="flex items-start gap-2"><span className="text-[#667eea] mt-1">•</span><span>Improved reachability</span></li>
                  <li className="flex items-start gap-2"><span className="text-[#667eea] mt-1">•</span><span>Reduced edge mis-taps</span></li>
                  <li className="flex items-start gap-2"><span className="text-[#667eea] mt-1">•</span><span>Maintained face centering</span></li>
                  <li className="flex items-start gap-2"><span className="text-[#667eea] mt-1">•</span><span>Preserved AR visibility</span></li>
                </ul>
              </div>
              <h4 className="text-[18px] font-semibold text-[#1D1D1F] mb-3">Brand & System Alignment</h4>
              <p className="text-[16px] text-[#1D1D1F] leading-relaxed mb-4">
                The interface was refined to align with the visual language being developed for HyperX NGENUITY, HyperX's device customization platform. Refinements included typography alignment, color hierarchy adjustments, and button styling consistency.
              </p>
              <p className="text-[16px] text-[#1D1D1F] leading-relaxed mb-4">
                The goal was to ensure the AR experience felt like an extension of HyperX's ecosystem rather than a standalone AR experiment.
              </p>
              <div className="bg-gradient-to-br from-[#667eea]/10 to-[#764ba2]/10 rounded-xl p-6 border border-[#667eea]/20">
                <p className="text-[15px] text-[#1D1D1F]"><strong>Production-Ready Flow:</strong> The high-fidelity prototype maintained the validated cart redirect introduced in mid-fi, reinforcing that AR selection transitions directly into HyperX's existing e-commerce system.</p>
              </div>
            </div>

            {/* Technical Decisions */}
            <div>
              <h3 className="text-[24px] font-semibold text-[#1D1D1F] style={{ marginBottom: '40px' }}">Technical Decisions as Product Design</h3>
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

          {/* 9. IMPACT */}
          <section id="impact" className="bg-white/60 backdrop-blur-sm rounded-2xl border border-[#E5E5E5]/50 shadow-lg" style={{ padding: '60px' }}>
            <h2 className="text-[32px] font-bold text-[#1D1D1F] style={{ marginBottom: '50px' }}">Impact</h2>
            <p className="text-[16px] text-[#1D1D1F] leading-[1.7] style={{ marginBottom: '50px' }}">
              I independently presented this work during a one-hour session with HyperX and HP senior leadership, including executives and directors across product, design, strategy, brand, and 3D. The session required communicating both the user experience and underlying product strategy to stakeholders with varied backgrounds.
            </p>
            <div className="bg-gradient-to-br from-[#667eea]/10 to-[#764ba2]/10 rounded-xl p-8 border border-[#667eea]/20 style={{ marginBottom: '40px' }}">
              <p className="text-[14px] text-[#6E6E73] mb-3">Attendees included:</p>
              <p className="text-[15px] text-[#1D1D1F]">
                Gagan Singh (VP & GM), Dan Kelley (VP Gaming Solutions), Mark Spijkers (Global Head of Design & UX), Sean Peralta (Director of Product), Kellie Steinman (Director of Strategic Planning / Chief of Staff), Brendan Nguyen (Director of 3D/CGI), Shawn Denison (Global Product Manager, Audio), Rodrigo Rangel (Global Brand Manager)
              </p>
            </div>
            <div className="style={{ marginBottom: '40px' }}">
              <h3 className="text-[20px] font-semibold text-[#1D1D1F] mb-4">Technical Credibility</h3>
              <p className="text-[16px] text-[#1D1D1F] leading-relaxed">
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

          {/* 10. TRY IT YOURSELF */}
          <section id="try-it" className="bg-gradient-to-br from-[#667eea] to-[#764ba2] rounded-2xl shadow-2xl p-20 text-center text-white">
            <h2 className="text-[36px] font-bold mb-4">Try It Yourself</h2>
            <p className="text-[18px] mb-3 opacity-90">Scan the QR code to experience the live AR prototype</p>
            <p className="text-[14px] style={{ marginBottom: '40px' }} opacity-75">This demo focuses on in-store discovery and real-time accessory preview. Checkout is represented conceptually in the video.</p>
            <div className="bg-white rounded-2xl p-8 inline-block shadow-xl style={{ marginBottom: '40px' }}">
              <img src="/hyperx/qr-code.png" alt="QR code to try AR experience" className="w-64 h-64 object-contain" />
            </div>
            <p className="text-[14px] opacity-75">Works on iOS and Android devices</p>
          </section>

          {/* 11. LESSONS LEARNED */}
          <section id="lessons" className="bg-white/60 backdrop-blur-sm rounded-2xl border border-[#E5E5E5]/50 shadow-lg p-20 style={{ marginBottom: '50px' }}">
            <h2 className="text-[32px] font-bold text-[#1D1D1F] style={{ marginBottom: '50px' }}">Lessons Learned</h2>
            <ul className="space-y-6 text-[16px] text-[#1D1D1F]">
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
