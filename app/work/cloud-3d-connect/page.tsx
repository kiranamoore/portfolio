"use client";

import Link from "next/link";
import dynamic from "next/dynamic";

const ModelViewer = dynamic(
  () => import("@/components/ModelViewer3D"),
  { ssr: false }
);

export default function Cloud3DConnectPage() {
  return (
    <div className="min-h-screen bg-white">
      <article className="max-w-3xl mx-auto px-6 pt-24 pb-16 md:pt-32">
        {/* Back Link */}
        <Link
          href="/work"
          className="inline-flex items-center text-[14px] text-[#6E6E73] hover:text-[#1D1D1F] transition-colors mb-8"
        >
          <span className="mr-1">&larr;</span> Work
        </Link>

        {/* Header */}
        <header className="mb-10">
          <p className="text-[13px] text-[#6E6E73] mb-2">HP/HyperX · May – August 2025</p>
          <h1 className="text-[32px] font-semibold text-[#1D1D1F] tracking-tight mb-4">
            Cloud 3D Connect
          </h1>
          <p className="text-[17px] text-[#1D1D1F] leading-relaxed">
            Developed an interactive 3D experience that showcases key product highlights and allows in-store customers to customize HyperX's Cloud 3 S headset in real time. The solution helps sway purchase decisions by visually demonstrating HyperX's advantages over competitors.
          </p>
        </header>

        {/* 3D Model Viewer */}
        <div className="mb-12">
          <ModelViewer
            src="/Cloud-3-S-7-17.glb"
            alt="Cloud 3D Connect 3D Model"
            ar
            autoRotate
            cameraControls
            style={{ width: "100%", height: "400px", background: "#FAFAFA", borderRadius: "12px", border: "1px solid #E5E5E5" }}
          />
        </div>

        {/* Role & Objective */}
        <section className="mb-10">
          <h2 className="text-[18px] font-semibold text-[#1D1D1F] mb-4">Role & Objective</h2>
          <ul className="space-y-3 text-[15px] text-[#1D1D1F]">
            <li className="flex gap-3">
              <span className="text-[#6E6E73]">•</span>
              <span>Worked as the sole <strong>Augmented Reality Developer</strong> to create an in-store and mobile-friendly customization tool to drive HX3D accessory sales and in-store purchases.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[#6E6E73]">•</span>
              <span>Highlighted unique product features to support customer decision-making at the point of sale.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[#6E6E73]">•</span>
              <span>Bridged the gap between headset purchases and accessory personalization.</span>
            </li>
          </ul>
        </section>

        {/* Key Contributions */}
        <section className="mb-10">
          <h2 className="text-[18px] font-semibold text-[#1D1D1F] mb-4">Key Contributions</h2>
          <ul className="space-y-3 text-[15px] text-[#1D1D1F]">
            <li className="flex gap-3">
              <span className="text-[#6E6E73]">•</span>
              <span>Optimized 3D models (Blender) and textures (Blender & Substance Painter) for mobile performance.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[#6E6E73]">•</span>
              <span>Built the interactive experience in Unity with real-time rendering and AR integration.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[#6E6E73]">•</span>
              <span>Developed feature callouts, animations, and clickable hotspots to showcase benefits like comfort, sound quality, and HX3D compatibility.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[#6E6E73]">•</span>
              <span>Delivered a production-ready solution for retail deployment.</span>
            </li>
          </ul>
        </section>

        {/* Results & Impact */}
        <section className="mb-10">
          <h2 className="text-[18px] font-semibold text-[#1D1D1F] mb-4">Results & Impact</h2>
          <ul className="space-y-3 text-[15px] text-[#1D1D1F]">
            <li className="flex gap-3">
              <span className="text-[#6E6E73]">•</span>
              <span>Helped customers understand HyperX advantages over competitors directly in-store.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[#6E6E73]">•</span>
              <span>Increased headset engagement and HX3D accessory sales.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[#6E6E73]">•</span>
              <span>Provided a scalable, interactive retail tool that enhances the buying experience.</span>
            </li>
          </ul>
        </section>
      </article>
    </div>
  );
}
