import Link from "next/link";

export default function QuickStartGuideARManualPage() {
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
          <p className="text-[13px] text-[#6E6E73] mb-2">HP/HyperX · Spring 2025</p>
          <h1 className="text-[32px] font-semibold text-[#1D1D1F] tracking-tight mb-4">
            Quick Start Guide AR Manual
          </h1>
          <p className="text-[17px] text-[#1D1D1F] leading-relaxed">
            Developed an interactive AR onboarding experience for HyperX products, designing a mobile solution that replaces paper manuals with intuitive, step-by-step guidance to reduce production costs and support sustainability goals.
          </p>
        </header>

        {/* Demo Video */}
        <div className="mb-12">
          <video
            src="/Quick Start Manual.mp4"
            controls
            muted
            className="w-full rounded-xl border border-[#E5E5E5]"
          />
          <p className="text-[13px] text-[#6E6E73] mt-2 text-center">
            AR Quick Start Manual demonstration
          </p>
        </div>

        {/* Role & Objective */}
        <section className="mb-10">
          <h2 className="text-[18px] font-semibold text-[#1D1D1F] mb-4">Role & Objective</h2>
          <ul className="space-y-3 text-[15px] text-[#1D1D1F]">
            <li className="flex gap-3">
              <span className="text-[#6E6E73]">•</span>
              <span>Served as <strong>Lead AR Designer</strong> to create an augmented reality onboarding experience for HyperX products.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[#6E6E73]">•</span>
              <span>Aimed to replace paper manuals with a mobile AR solution to enhance setup clarity.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[#6E6E73]">•</span>
              <span>Targeted reduction of production costs and alignment with sustainability goals through a paperless approach.</span>
            </li>
          </ul>
        </section>

        {/* Actions Taken */}
        <section className="mb-10">
          <h2 className="text-[18px] font-semibold text-[#1D1D1F] mb-4">Actions Taken</h2>
          <ul className="space-y-3 text-[15px] text-[#1D1D1F]">
            <li className="flex gap-3">
              <span className="text-[#6E6E73]">•</span>
              <span>Designed and developed an interactive AR manual using Lens Studio for seamless mobile functionality.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[#6E6E73]">•</span>
              <span>Created visual interface assets and overlays in Adobe Photoshop for a polished, intuitive design.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[#6E6E73]">•</span>
              <span>Implemented a top navigation system to select product features and a bottom panel for step-by-step instructions.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[#6E6E73]">•</span>
              <span>Optimized AR performance across diverse mobile devices by refining 3D assets and streamlining interactions.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[#6E6E73]">•</span>
              <span>Shifted from aesthetic-focused AR to operational utility, addressing cost and clarity challenges.</span>
            </li>
          </ul>
        </section>

        {/* Results & Impact */}
        <section className="mb-10">
          <h2 className="text-[18px] font-semibold text-[#1D1D1F] mb-4">Results & Impact</h2>
          <ul className="space-y-3 text-[15px] text-[#1D1D1F]">
            <li className="flex gap-3">
              <span className="text-[#6E6E73]">•</span>
              <span>Delivered a production-ready prototype, eliminating ~$0.01 per unit in printing costs:</span>
            </li>
            <li className="flex gap-3 pl-6">
              <span className="text-[#6E6E73]">-</span>
              <span><strong>$10</strong> saved for 1,000 units</span>
            </li>
            <li className="flex gap-3 pl-6">
              <span className="text-[#6E6E73]">-</span>
              <span><strong>$1,000</strong> saved for 100,000 units</span>
            </li>
            <li className="flex gap-3 pl-6">
              <span className="text-[#6E6E73]">-</span>
              <span><strong>$100,000</strong> saved annually for 10 million units (aligned with HP's shipping scale)</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[#6E6E73]">•</span>
              <span>Aligned with HyperX's sustainability goals by reducing paper waste.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[#6E6E73]">•</span>
              <span>Created structured UI and AR experience for guided product education, providing the ability to implement for future product releases.</span>
            </li>
          </ul>
        </section>
      </article>
    </div>
  );
}
