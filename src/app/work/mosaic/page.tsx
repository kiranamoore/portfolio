"use client";

import ImageSlideshow from "@/components/core/ImageSlideshow";

const images = [
  "/honda/1.png",
  "/honda/2.png",
  "/honda/3.png",
  "/honda/3.5.png",
  "/honda/4.png",
  "/honda/5.png",
  "/honda/6.png",
  "/honda/7.png",
  "/honda/8.png",
  "/honda/9.png",
  "/honda/10.png",
  "/honda/11.png",
  "/honda/12.png",
  "/honda/13.png",
  "/honda/14.png",
  "/honda/15.png",
  "/honda/16.png",
  "/honda/17.png",
  "/honda/18.png",
  "/honda/19.png",
  "/honda/20.png",
  "/honda/21.png",
  "/honda/22.png",
];

export default function MosaicPage() {
  return (
    <>
      <div className="h-32" />
      <div
        className="min-h-screen bg-black text-white py-12 flex justify-center mt-16 md:mt-24"
        style={{ marginLeft: '100px', marginRight: '100px' }}
      >
        <div className="max-w-full w-full grid grid-cols-1 lg:grid-cols-[900px_1fr] gap-16">
          {/* Left column: Slideshow */}
          <div className="flex flex-col items-start w-full">
            <div className="w-full">
              <ImageSlideshow
                images={images}
                altPrefix="Mosaic Honda project image"
              />
            </div>
          </div>
          {/* Right column: Centered content */}
          <div className="flex flex-col items-center text-center space-y-6 justify-center">
            <div className="space-y-1">
              <p className="text-sm text-gray-300">Spring 2025</p>
              <h1 className="text-4xl md:text-6xl font-bold">MOSAĪC: A Future Car Concept for Honda Motor Company</h1>
            </div>
            <div className="space-y-4 text-left max-w-2xl w-full">
              <p className="text-lg font-medium">
                <em>Mosaic</em> – Future Car Concept for Honda<br />
                Selected to participate in the Iovine and Young Academy Innovation Sprint, where I collaborated with a cross-disciplinary team to design Mosaic, a visionary Gen Z-driven car concept focused on emotional well-being, community, and immersive digital experiences.
              </p>
              <section>
                <h2 className="text-xl font-semibold mt-4">Design Vision</h2>
                <p>
                  Mosaic reimagines the car as a dynamic third space—a vehicle that adapts to the rider's emotional and social needs. It balances solitude and connection through flexible seating, customizable environments, and seamless transitions between individual and communal modes.
                </p>
              </section>
              <section>
                <h2 className="text-xl font-semibold mt-4">Key Features</h2>
                <ul className="list-disc list-inside space-y-1">
                  <li><b>Community Mode:</b> Seats pivot toward a central table to enable shared experiences like work sessions, games, or meals.</li>
                  <li><b>Privacy Mode:</b> Riders can activate a soft "visual fog" and advanced noise-cancellation to create a personal retreat within the vehicle.</li>
                  <li><b>Immersive Digital Panels:</b> Each rider controls their own seat-specific digital environment, transforming their space into customizable worlds—ranging from natural landscapes to fantastical settings.</li>
                  <li><b>Floating UI:</b> An intuitive, adaptive interface gives each rider effortless access to controls and entertainment, fully responsive to seating configuration and personal preferences.</li>
                </ul>
              </section>
              <section>
                <h2 className="text-xl font-semibold mt-4">My Role</h2>
                <p>
                  <b>Unity Developer:</b> Prototyped interactive elements and environment transitions, focusing on seamless UI responsiveness and immersive digital panel behaviors.
                </p>
              </section>
              <section>
                <h2 className="text-xl font-semibold mt-4">Collaborative Team</h2>
                <ul className="list-disc list-inside space-y-1">
                  <li><b>UI/UX:</b> Kaitlin Chow</li>
                  <li><b>3D Design:</b> Clarence Keith</li>
                  <li><b>Design Strategy:</b> Aniket Singh</li>
                </ul>
              </section>
              <section>
                <h2 className="text-xl font-semibold mt-4">Impact</h2>
                <p>
                  Mosaic addresses the modern need for flexible, emotionally intelligent spaces—offering both escapism and connection in an era of rising stress and social fragmentation. It reframes the car as a customizable sanctuary that evolves with its riders.
                </p>
              </section>
            </div>
          </div>
        </div>
      </div>
    </>
  );
} 