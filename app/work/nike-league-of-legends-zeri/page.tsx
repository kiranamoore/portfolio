import Link from "next/link";

export default function NikeLeagueOfLegendsZeriPage() {
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
          <p className="text-[13px] text-[#6E6E73] mb-2">Winter 2021</p>
          <h1 className="text-[32px] font-semibold text-[#1D1D1F] tracking-tight mb-4">
            Nike x League of Legends: Zeri
          </h1>
          <p className="text-[17px] text-[#1D1D1F] leading-relaxed">
            Led concept development and visual design for a Nike x League of Legends collaboration, creating a dynamic digital fashion skin for Zeri that fuses Nike's athletic brand identity with gaming aesthetics through splash art, 3D modeling, animation, and in-game integrations.
          </p>
        </header>

        {/* Hero Image */}
        <div className="mb-10">
          <img
            src="/zeri.jpg"
            alt="Nike x League of Legends Zeri hero image"
            className="w-full rounded-xl border border-[#E5E5E5]"
          />
        </div>

        {/* Videos */}
        <div className="space-y-8 mb-12">
          <div>
            <h3 className="text-[15px] font-semibold text-[#1D1D1F] mb-3">Recall Animation</h3>
            <video
              src="/recall.mp4"
              controls
              autoPlay
              loop
              muted
              className="w-full rounded-xl border border-[#E5E5E5]"
            />
          </div>

          <div>
            <h3 className="text-[15px] font-semibold text-[#1D1D1F] mb-3">Character Animation</h3>
            <video
              src="/zeri-animation.mp4"
              controls
              autoPlay
              loop
              muted
              className="w-full rounded-xl border border-[#E5E5E5]"
            />
          </div>

          <div>
            <h3 className="text-[15px] font-semibold text-[#1D1D1F] mb-3">Animatic</h3>
            <video
              src="/animatic.mp4"
              controls
              autoPlay
              loop
              muted
              className="w-full rounded-xl border border-[#E5E5E5]"
            />
          </div>
        </div>

        {/* Role & Objective */}
        <section className="mb-10">
          <h2 className="text-[18px] font-semibold text-[#1D1D1F] mb-4">Role & Objective</h2>
          <ul className="space-y-3 text-[15px] text-[#1D1D1F]">
            <li className="flex gap-3">
              <span className="text-[#6E6E73]">•</span>
              <span>Served as <strong>Concept & Visual Development Lead</strong> for a cross-industry project between Nike and Riot Games' League of Legends, focused on bridging fashion, gaming, and urban culture.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[#6E6E73]">•</span>
              <span>Aimed to design a digital fashion skin that fuses Nike's energetic style with Zeri's fast-paced gameplay, crafting an immersive visual identity across platforms.</span>
            </li>
          </ul>
        </section>

        {/* Actions Taken */}
        <section className="mb-10">
          <h2 className="text-[18px] font-semibold text-[#1D1D1F] mb-4">Actions Taken</h2>
          <ul className="space-y-3 text-[15px] text-[#1D1D1F]">
            <li className="flex gap-3">
              <span className="text-[#6E6E73]">•</span>
              <span>Designed custom <strong>Character Splash Art</strong> to showcase the Nike-inspired skin, emphasizing motion, energy, and electric visuals.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[#6E6E73]">•</span>
              <span>Created <strong>3D fashion models</strong> in Marvelous Designer to integrate Nike's performance aesthetic with in-game costume design.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[#6E6E73]">•</span>
              <span>Produced a <strong>mixed media animation</strong> blending real-life footage shot in Downtown Los Angeles with digital overlays to connect physical and virtual worlds.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[#6E6E73]">•</span>
              <span>Modeled body and helmet of Zeri in Rhino and rigged and animated the skin in Blender.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[#6E6E73]">•</span>
              <span>Collaborated with the <strong>Nike .SWOOSH Digital Branding Team</strong> to ensure cohesive brand storytelling and authentic integration.</span>
            </li>
          </ul>
        </section>

        {/* Results & Impact */}
        <section className="mb-10">
          <h2 className="text-[18px] font-semibold text-[#1D1D1F] mb-4">Results & Impact</h2>
          <ul className="space-y-3 text-[15px] text-[#1D1D1F]">
            <li className="flex gap-3">
              <span className="text-[#6E6E73]">•</span>
              <span>Delivered a compelling cross-industry concept that merges fashion, gaming, and storytelling into an engaging consumer experience.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[#6E6E73]">•</span>
              <span>Demonstrated expertise in collaborating with major brands to develop co-branded visual narratives and innovative digital experiences.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[#6E6E73]">•</span>
              <span>Produced a full suite of deliverables—splash art, 3D assets, animation, and mock-ups—that lays a foundation for future digital fashion collaborations.</span>
            </li>
          </ul>
        </section>
      </article>
    </div>
  );
}
