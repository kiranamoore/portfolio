"use client";

export default function MagicalGirlVsZombiesPage() {
  return (
    <>
      <div className="h-32" />
      <div
        className="min-h-screen bg-black text-white py-12 flex justify-center items-center mt-16 md:mt-24 mb-12"
        style={{ marginLeft: 'auto', marginRight: 'auto', marginBottom: '40px', maxWidth: '1500px' }}
      >
        <div className="w-full flex flex-col lg:flex-row gap-10 items-start justify-center" style={{maxWidth: '1400px'}}>
          {/* Left column: Main Image */}
          <div className="flex flex-col items-center justify-center flex-1 w-full min-w-[400px] max-w-[700px]">
            <img
              src="/magical-girl-vs-zombies.PNG"
              alt="Magical Girl VS. Corporate Zombies illustration"
              className="w-full object-contain rounded-lg border border-gray-700 shadow-lg bg-white"
              style={{ maxHeight: 700 }}
            />
          </div>
          {/* Right column: Content */}
          <div className="flex flex-col items-start text-left space-y-6 flex-1 min-w-[320px] max-w-[520px]">
            <div className="space-y-1">
              <p className="text-sm text-gray-300">Spring 2025</p>
              <h1 className="text-4xl md:text-6xl font-bold">Magical Girl VS. Corporate Zombies</h1>
            </div>
            <div className="space-y-10 text-left max-w-2xl w-full">
              <section>
                <div className="flex items-center gap-3 mb-2">
                  <span className="h-6 w-1 rounded bg-gradient-to-b from-pink-500 to-red-400" />
                  <h2 className="text-2xl font-bold text-pink-400 tracking-tight">Project Overview</h2>
                </div>
                <ul className="space-y-2 pl-6 list-none">
                  <li className="flex items-start gap-2"><span className="mt-1 text-pink-400">•</span><span><em>Magical Girl VS. Corporate Zombies</em> – Digital Self Portrait created in my junior year for Art-417: Digital Illustration Studio. <span className="font-bold">This piece explores the tension between my dual identities: a vibrant, expressive artist and a disciplined office worker.</span></span></li>
                </ul>
              </section>
              <div className="flex items-center gap-3 mb-2 mt-6">
                <span className="h-6 w-1 rounded bg-gradient-to-b from-blue-400 to-cyan-400" />
                <h3 className="text-xl font-bold text-blue-300 tracking-tight">Narrative Details</h3>
              </div>
              <ul className="space-y-2 pl-6 list-none">
                <li className="flex items-start gap-2"><span className="mt-1 text-blue-300">•</span><span>The illustration portrays a magical battle between a radiant Magical Girl and a horde of Corporate Zombies. <span className="font-bold">The Magical Girl symbolizes my creative, self-expressive side, while the Corporate Zombies embody the structured, relentless demands of work, school, and professional ambition.</span></span></li>
              </ul>
              <div className="flex items-center gap-3 mb-2 mt-6">
                <span className="h-6 w-1 rounded bg-gradient-to-b from-green-400 to-emerald-500" />
                <h3 className="text-xl font-bold text-green-300 tracking-tight">Color & Atmosphere</h3>
              </div>
              <ul className="space-y-2 pl-6 list-none">
                <li className="flex items-start gap-2"><span className="mt-1 text-green-300">•</span><span>Through bold colors, dynamic composition, and playful symbolism, this illustration captures how my <span className="font-bold">creative energy fuels resilience, even within rigid systems.</span> It serves as both a personal reflection and a celebration of navigating dual worlds.</span></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
} 