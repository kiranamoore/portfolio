"use client";

export default function MagicalGirlVsCorporateZombiesPage() {
  return (
    <>
      <div className="h-32" />
      <div
        className="min-h-screen bg-black text-white py-12 flex justify-center mt-16 md:mt-24 mb-12"
        style={{ marginLeft: '100px', marginRight: '100px', marginBottom: '50px' }}
      >
        <div className="max-w-full w-full grid grid-cols-1 lg:grid-cols-[700px_1fr] gap-16">
          {/* Left column: Main Image */}
          <div className="flex flex-col items-start w-full">
            <img
              src="/magical-girl-vs-zombies/magical-girl-vs-zombies.png"
              alt="Magical Girl VS. Corporate Zombies illustration"
              className="w-full object-contain rounded-lg border border-gray-700 shadow-lg bg-white"
              style={{ maxHeight: 700 }}
            />
          </div>
          {/* Right column: Content */}
          <div className="flex flex-col items-center text-center space-y-6 justify-center">
            <div className="space-y-1">
              <p className="text-sm text-gray-300">Spring 2025</p>
              <h1 className="text-4xl md:text-6xl font-bold">Magical Girl VS. Corporate Zombies</h1>
            </div>
            <div className="space-y-4 text-left max-w-2xl w-full">
              <p className="text-lg font-medium">
                <em>Magical Girl VS. Corporate Zombies</em> – Digital Self Portrait<br />
                Created in my junior year for Art-417: Digital Illustration Studio, this piece explores the tension between my dual identities: a vibrant, expressive artist and a disciplined office worker.
              </p>
              <section>
                <h2 className="text-xl font-semibold mt-4">Concept</h2>
                <p>
                  The illustration portrays a magical battle between a radiant Magical Girl and a horde of Corporate Zombies. The Magical Girl symbolizes my creative, self-expressive side, while the Corporate Zombies embody the structured, relentless demands of work, school, and professional ambition.
                </p>
              </section>
              <section>
                <h2 className="text-xl font-semibold mt-4">Key Themes</h2>
                <ul className="list-disc list-inside space-y-1">
                  <li>Creative Freedom vs. Professional Structure</li>
                  <li>Balancing Artistic Passion with Real-World Responsibility</li>
                  <li>Embracing Multifaceted Identity</li>
                </ul>
              </section>
              <section>
                <h2 className="text-xl font-semibold mt-4">Process</h2>
                <p>
                  Through bold colors, dynamic composition, and playful symbolism, this illustration captures how my creative energy fuels resilience, even within rigid systems. It serves as both a personal reflection and a celebration of navigating dual worlds.
                </p>
              </section>
            </div>
          </div>
        </div>
      </div>
    </>
  );
} 