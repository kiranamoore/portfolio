"use client";

import Link from "next/link";
import dynamic from "next/dynamic";

const ModelViewer = dynamic(
  () => import("@/components/ModelViewer3D"),
  { ssr: false }
);

export default function ARProductCustomizerPage() {
  return (
    <div className="min-h-screen bg-[#FAFAFA]">
      {/* Hero Section */}
      <section className="hero-gradient pt-32 pb-12 md:pt-40 md:pb-16">
        <div className="max-w-4xl mx-auto px-8 md:px-12">
          {/* Back Link */}
          <Link
            href="/work"
            className="inline-flex items-center gap-2 text-[14px] text-[#6E6E73] hover:text-[#667eea] transition-colors mb-8 group"
          >
            <svg className="w-4 h-4 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Work
          </Link>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-6">
            <span className="px-3 py-1 text-[12px] font-medium text-[#667eea] bg-[#667eea]/10 rounded-full">Unity</span>
            <span className="px-3 py-1 text-[12px] font-medium text-[#667eea] bg-[#667eea]/10 rounded-full">AR</span>
            <span className="px-3 py-1 text-[12px] font-medium text-[#667eea] bg-[#667eea]/10 rounded-full">3D</span>
          </div>

          {/* Header */}
          <h1 className="text-[36px] md:text-[48px] font-bold text-[#1D1D1F] tracking-tight leading-tight mb-4">
            AR Product Customizer
          </h1>
          <p className="text-[13px] font-medium text-[#6E6E73] mb-6">HP/HyperX · Summer 2025</p>
          <p className="text-[18px] text-[#1D1D1F] leading-relaxed max-w-3xl">
            Developed an interactive 3D experience that showcases key product highlights and allows in-store customers to customize HyperX's Cloud 3 S headset in real time. The solution helps sway purchase decisions by visually demonstrating HyperX's advantages over competitors.
          </p>
        </div>
      </section>

      {/* Content */}
      <article className="pb-20">
        <div className="max-w-4xl mx-auto px-8 md:px-12">
          {/* Demo Video */}
          <div className="mb-12 -mt-4">
            <div className="rounded-2xl overflow-hidden shadow-2xl shadow-black/10 border border-[#E5E5E5]/50">
              <video
                src="/Customizer_demo.MOV"
                controls
                muted
                className="w-full"
              />
            </div>
            <p className="text-[13px] text-[#6E6E73] mt-4 text-center">Live AR Demo</p>
          </div>

          {/* 3D Model Viewer */}
          <div className="mb-12">
            <div className="rounded-2xl overflow-hidden shadow-lg border border-[#E5E5E5]/50">
              <ModelViewer
                src="/Cloud-3-S-7-17.glb"
                alt="AR Product Customizer 3D Model"
                ar
                autoRotate
                cameraControls
                style={{ width: "100%", height: "450px", background: "#FFFFFF" }}
              />
            </div>
            <p className="text-[13px] text-[#6E6E73] mt-4 text-center">Interactive 3D Model - Drag to rotate</p>
          </div>

          {/* QR Code */}
          <div className="mb-16 text-center">
            <div className="inline-block p-6 bg-white rounded-2xl shadow-lg border border-[#E5E5E5]/50">
              <img
                src="/customizer_qr_code.png"
                alt="Scan to try"
                className="w-40 mx-auto"
              />
              <p className="text-[14px] font-medium text-[#1D1D1F] mt-4">Scan to try</p>
              <p className="text-[12px] text-[#6E6E73]">Open on your mobile device</p>
            </div>
          </div>

          {/* Role & Objective */}
          <section className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#667eea] to-[#764ba2] flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h2 className="text-[22px] font-bold text-[#1D1D1F]">Role & Objective</h2>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-[#E5E5E5]/50">
              <ul className="space-y-4 text-[15px] text-[#1D1D1F]">
                <li className="flex gap-4">
                  <span className="w-6 h-6 rounded-full bg-[#667eea]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="w-2 h-2 rounded-full bg-[#667eea]"></span>
                  </span>
                  <span>Worked as the sole <strong>Augmented Reality Developer</strong> to create an in-store and mobile-friendly customization tool to drive HX3D accessory sales and in-store purchases.</span>
                </li>
                <li className="flex gap-4">
                  <span className="w-6 h-6 rounded-full bg-[#667eea]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="w-2 h-2 rounded-full bg-[#667eea]"></span>
                  </span>
                  <span>Highlighted unique product features to support customer decision-making at the point of sale.</span>
                </li>
                <li className="flex gap-4">
                  <span className="w-6 h-6 rounded-full bg-[#667eea]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="w-2 h-2 rounded-full bg-[#667eea]"></span>
                  </span>
                  <span>Bridged the gap between headset purchases and accessory personalization.</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Key Contributions */}
          <section className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#f093fb] to-[#f5576c] flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h2 className="text-[22px] font-bold text-[#1D1D1F]">Key Contributions</h2>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-[#E5E5E5]/50">
              <ul className="space-y-4 text-[15px] text-[#1D1D1F]">
                <li className="flex gap-4">
                  <span className="w-6 h-6 rounded-full bg-[#f093fb]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="w-2 h-2 rounded-full bg-[#f093fb]"></span>
                  </span>
                  <span>Optimized 3D models (Blender) and textures (Blender & Substance Painter) for mobile performance.</span>
                </li>
                <li className="flex gap-4">
                  <span className="w-6 h-6 rounded-full bg-[#f093fb]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="w-2 h-2 rounded-full bg-[#f093fb]"></span>
                  </span>
                  <span>Built the interactive experience in Unity with real-time rendering and AR integration.</span>
                </li>
                <li className="flex gap-4">
                  <span className="w-6 h-6 rounded-full bg-[#f093fb]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="w-2 h-2 rounded-full bg-[#f093fb]"></span>
                  </span>
                  <span>Developed feature callouts, animations, and clickable hotspots to showcase benefits like comfort, sound quality, and HX3D compatibility.</span>
                </li>
                <li className="flex gap-4">
                  <span className="w-6 h-6 rounded-full bg-[#f093fb]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="w-2 h-2 rounded-full bg-[#f093fb]"></span>
                  </span>
                  <span>Delivered a production-ready solution for retail deployment.</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Results & Impact */}
          <section className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#4facfe] to-[#00f2fe] flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h2 className="text-[22px] font-bold text-[#1D1D1F]">Results & Impact</h2>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-[#E5E5E5]/50">
              <ul className="space-y-4 text-[15px] text-[#1D1D1F]">
                <li className="flex gap-4">
                  <span className="w-6 h-6 rounded-full bg-[#4facfe]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="w-2 h-2 rounded-full bg-[#4facfe]"></span>
                  </span>
                  <span>Helped customers understand HyperX advantages over competitors directly in-store.</span>
                </li>
                <li className="flex gap-4">
                  <span className="w-6 h-6 rounded-full bg-[#4facfe]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="w-2 h-2 rounded-full bg-[#4facfe]"></span>
                  </span>
                  <span>Increased headset engagement and HX3D accessory sales.</span>
                </li>
                <li className="flex gap-4">
                  <span className="w-6 h-6 rounded-full bg-[#4facfe]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="w-2 h-2 rounded-full bg-[#4facfe]"></span>
                  </span>
                  <span>Provided a scalable, interactive retail tool that enhances the buying experience.</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Next Project Link */}
          <div className="flex justify-center pt-8">
            <Link
              href="/work/quick-start-guide-ar-manual"
              className="inline-flex items-center gap-3 px-6 py-3 bg-[#1D1D1F] text-white text-[15px] font-medium rounded-full hover:bg-[#333] transition-colors group"
            >
              Next Project
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
}
