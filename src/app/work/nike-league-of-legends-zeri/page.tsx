"use client";

export default function NikeLeagueOfLegendsZeriPage() {
  return (
    <>
      <div className="h-32" />
      <div
        className="min-h-screen bg-black text-white py-12 flex justify-center mt-16 md:mt-24 mb-12"
        style={{ marginLeft: '100px', marginRight: '100px', marginBottom: '50px' }}
      >
        <div className="max-w-full w-full grid grid-cols-1 lg:grid-cols-[700px_1fr] gap-16 items-center">
          {/* Left column: Hero image */}
          <div className="flex flex-col items-start w-full">
            <img
              src="/zeri.jpg"
              alt="Nike x League of Legends Zeri hero image"
              className="rounded-lg w-full object-cover"
            />
          </div>
          {/* Right column: Content */}
          <div className="flex flex-col items-center text-center space-y-6 justify-center text-white">
            <div className="space-y-1">
              <p className="text-sm text-white">Spring 2024</p>
              <h1 className="text-4xl md:text-6xl font-bold text-white">Nike x League of Legends Skin Collaboration: Zeri</h1>
            </div>
            <div className="space-y-4 text-left max-w-2xl w-full text-white">
              <p className="text-lg font-medium text-white">
                Nike x League of Legends – Digital Fashion Collaboration
                <br />
                As part of a project proposed by Nike's digital branding team, .SWOOSH, I led the concept and visual development for a cross-industry collaboration between Nike and Riot Games' League of Legends within my Extended Reality for Fashion class.
              </p>
              <section>
                <h3 className="text-2xl font-semibold mb-2 text-red-400">Key Features</h3>
                <ul className="space-y-3 list-disc pl-5 text-white">
                  <li><strong>Character Splash Art:</strong> Designed custom splash art showcasing the Nike-inspired skin, emphasizing energy, motion, and electricity.</li>
                  <li><strong>3D Fashion Modeling:</strong> Created detailed 3D garments in Marvelous Designer, aligning Nike's athletic aesthetic with in-game styling.</li>
                  <li><strong>Mixed Media Animation:</strong> Produced a 2D animated sequence featuring real-life footage shot in Downtown Los Angeles, blending digital and physical worlds.</li>
                  <li><strong>In-Game Store Integration:</strong> Developed a mock-up demonstrating how the skin would appear within League of Legends' in-game store.</li>
                </ul>
              </section>
              <section>
                <h3 className="text-2xl font-semibold mb-2 text-red-400">Design Focus</h3>
                <ul className="space-y-3 list-disc pl-5 text-white">
                  <li>Fusion of Nike's active brand identity with Zeri's electric, fast-paced gameplay</li>
                  <li>Visual storytelling through movement, color, and energy</li>
                  <li>Cross-platform design bridging gaming, fashion, and urban culture</li>
                </ul>
              </section>
              <section>
                <h3 className="text-2xl font-semibold mb-2 text-red-400">Project Impact</h3>
                <p className="text-white">
                  This project highlights my ability to design immersive, cross-industry experiences that combine fashion, gaming, and digital storytelling, while effectively collaborating with real-world brands to create consumer-driven, co-creative opportunities.
                </p>
              </section>
              <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                <div className="bg-gray-900 rounded-lg p-6 text-white">
                  <h3 className="text-xl font-semibold mb-3 text-red-400">Project Details</h3>
                  <div className="space-y-2 text-white">
                    <p><strong>Date:</strong> Spring 2024</p>
                    <p><strong>Category:</strong> Visual Narrative Art</p>
                    <p><strong>Role:</strong> Concept & Visual Development Lead</p>
                    <p><strong>Tools:</strong> Marvelous Designer, Animation Software</p>
                  </div>
                </div>
                <div className="bg-gray-900 rounded-lg p-6 text-white">
                  <h3 className="text-xl font-semibold mb-3 text-red-400">Collaboration</h3>
                  <div className="space-y-2 text-white">
                    <p><strong>Client:</strong> Nike .SWOOSH Digital Branding Team</p>
                    <p><strong>Partner:</strong> Riot Games League of Legends</p>
                    <p><strong>Context:</strong> Extended Reality for Fashion Class</p>
                    <p><strong>Location:</strong> Downtown Los Angeles</p>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
      {/* Videos Section at the bottom */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4 text-white">Animation</h3>
            <video
              controls
              className="w-full rounded-lg"
              poster="/zeri-thumbnail.png"
            >
              <source src="/zeri-animation.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4 text-white">Animatic</h3>
            <video
              controls
              className="w-full rounded-lg"
              poster="/zeri-thumbnail.png"
            >
              <source src="/animatic.MOV" type="video/quicktime" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </>
  );
} 