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
        className="min-h-screen bg-black text-white py-12 flex justify-center mt-16 md:mt-24 mb-12"
        style={{ marginLeft: '100px', marginRight: '100px', marginBottom: '50px' }}
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
      {/* Unity Final Demo Section */}
      <div className="w-full flex flex-col items-center justify-center mt-16 mb-8">
        <a
          href="https://play.unity.com/en/games/ae07ae23-35db-4021-8739-7565f1819997/mosaic-demo"
          target="_blank"
          rel="noopener noreferrer"
          className="no-underline"
        >
          <div className="text-center">
            <h2 className="font-bold text-4xl md:text-6xl text-white" style={{ letterSpacing: 1, marginBottom: 0 }}>
              UNITY FINAL DEMO
            </h2>
            <div className="font-bold text-lg md:text-xl text-white" style={{ marginTop: 0 }}>
              (click to try demo)
            </div>
          </div>
        </a>
        <div className="w-full flex justify-center" style={{ margin: '0' }}>
          <video
            src="/honda/demo.mp4"
            controls
            className="object-contain"
            style={{ display: 'block', margin: '0 50px', width: 'calc(100% - 100px)', maxWidth: '1200px', background: '#e5e5e5' }}
          />
        </div>
        <div className="w-full text-center mt-2">
          <span className="text-xs md:text-sm text-gray-400" style={{ fontFamily: 'inherit' }}>
            Developed by Kirana Moore and 3D models made by Clarence Keith
          </span>
        </div>
      </div>
      {/* Unity First Version Demo Section */}
      <div className="w-full flex flex-col items-center justify-center mt-16 mb-8">
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-start" style={{ maxWidth: '1600px' }}>
          {/* Left: Title and Video */}
          <div className="flex flex-col items-center w-full">
            <a
              href="https://play.unity.com/en/games/207296c0-2926-4e68-acce-324730fedd3f/honda-demo-311-accord-team"
              target="_blank"
              rel="noopener noreferrer"
              className="no-underline w-full"
            >
              <div className="text-center w-full">
                <h2 className="font-bold text-4xl md:text-6xl text-white" style={{ letterSpacing: 1, marginBottom: 0 }}>
                  UNITY FIRST VERSION DEMO
                </h2>
                <div className="font-bold text-lg md:text-xl text-white" style={{ marginTop: 0 }}>
                  (click to try demo)
                </div>
              </div>
            </a>
            <video
              src="/honda/first-demo.mp4"
              controls
              className="object-contain mt-4"
              style={{ display: 'block', margin: '0 50px', width: 'calc(100% - 100px)', maxWidth: '900px', background: '#e5e5e5' }}
            />
            <div className="w-full text-center mt-2">
              <span className="text-xs md:text-sm text-gray-400" style={{ fontFamily: 'inherit' }}>
                Developed by Kirana Moore and 3D models made by Clarence Keith
              </span>
            </div>
          </div>
          {/* Right: Description */}
          <div className="flex flex-col justify-center w-full text-left text-white" style={{ fontFamily: 'inherit', fontSize: '1.1rem', lineHeight: '1.6', marginTop: '32px' }}>
            <h2 className="text-xl font-semibold mt-4">Mosaic Unity Demos – Iterative AR/VR Experience Design</h2>
            <p className="mt-2">
              Developed interactive Unity demos to showcase Mosaic's key features in an immersive, narrative-driven format, focusing on cohesive user experience design and system flexibility.
            </p>
            <h2 className="text-xl font-semibold mt-4">Iterative Design Approach</h2>
            <p className="mt-2">
              <b>Initial Demo:</b> Created a feature-by-feature walkthrough using a family's road trip to the beach, with each Mosaic capability demonstrated in isolated, scenario-specific moments.
            </p>
            <p className="mt-2">
              <b>Refined Demo:</b> Transitioned to a unified, story-driven experience using a Dungeons & Dragons session as the core scenario, allowing features to flow naturally and interact seamlessly within a single narrative.
            </p>
            <h2 className="text-xl font-semibold mt-4">Design Enhancements</h2>
            <p className="mt-2">
              <b>Holistic Feature Integration:</b> Shifted from segmented demonstrations to an interconnected experience where multiple Mosaic features are activated in response to evolving group dynamics.
            </p>
            <p className="mt-2">
              <b>Opt-Out Mechanic:</b> Introduced the option for individual riders to disengage from the shared experience, highlighting Mosaic's user-centric flexibility and support for personal space within communal settings.
            </p>
            <h2 className="text-xl font-semibold mt-4">My Role</h2>
            <p className="mt-2">
              Led the iterative prototyping in Unity, refining transitions, UI responsiveness, and the overall narrative flow to create a more immersive and intuitive demonstration.
            </p>
            <h2 className="text-xl font-semibold mt-4">Impact</h2>
            <p className="mt-2">
              The evolution from isolated scenarios to a cohesive, story-driven demo better illustrates Mosaic's potential to deliver adaptive, emotionally intelligent in-car experiences that prioritize both individual comfort and group engagement.
            </p>
          </div>
        </div>
      </div>
      {/* Hero Video Section */}
      <div className="w-full flex flex-col items-center justify-center mt-16 mb-8">
        <div className="text-center">
          <h2 className="font-bold text-4xl md:text-6xl text-white" style={{ letterSpacing: 1, marginBottom: 0 }}>
            HERO VIDEO
          </h2>
        </div>
        <div className="w-full flex justify-center" style={{ margin: '0' }}>
          <video
            src="/honda/final-video.mp4"
            controls
            className="object-contain"
            style={{ display: 'block', margin: '0 50px', width: 'calc(100% - 100px)', maxWidth: '1200px', background: '#e5e5e5' }}
          />
        </div>
        <div className="w-full text-center mt-2">
          <span className="text-xs md:text-sm text-gray-400" style={{ fontFamily: 'inherit' }}>
            Rendered by Clarence Keith, Edited by Kaitlin Chow
          </span>
        </div>
      </div>
      {/* Ideation Slideshow Section */}
      <div className="min-h-screen bg-black text-white py-12 flex justify-center mt-16 md:mt-24 mb-12" style={{ marginLeft: '100px', marginRight: '100px', marginBottom: '50px' }}>
        <div className="max-w-full w-full grid grid-cols-1 lg:grid-cols-[900px_1fr] gap-16">
          {/* Left column: Slideshow */}
          <div className="flex flex-col items-start w-full">
            <div className="w-full">
              <ImageSlideshow
                images={[
                  "/honda/Honda_FirstRoundIdeation-01.png",
                  "/honda/Honda_FirstRoundIdeation-02.png",
                  "/honda/Honda_FirstRoundIdeation-03.png",
                  "/honda/Honda_FirstRoundIdeation-04.png",
                  "/honda/Honda_FirstRoundIdeation-05.png",
                  "/honda/Honda_FirstRoundIdeation-06.png",
                  "/honda/Honda_FirstRoundIdeation-07.png",
                  "/honda/Honda_FirstRoundIdeation-08.png",
                  "/honda/Honda_FirstRoundIdeation-09.png",
                  "/honda/Honda_FirstRoundIdeation-10.png",
                  "/honda/Honda_FirstRoundIdeation-11.png",
                  "/honda/Honda_FirstRoundIdeation-12.png",
                  "/honda/Honda_FirstRoundIdeation-13.png",
                  "/honda/Honda_FirstRoundIdeation-14.png",
                  "/honda/Honda_FirstRoundIdeation-15.png",
                  "/honda/Honda_FirstRoundIdeation-16.png",
                ]}
                altPrefix="Honda First Round Ideation page"
              />
            </div>
          </div>
          {/* Right column: Description */}
          <div className="flex flex-col items-center text-center space-y-6 justify-center">
            <div className="space-y-1">
              <h2 className="text-3xl md:text-5xl font-bold">Experience Design and Feature Ideation</h2>
            </div>
            <div className="space-y-4 text-left max-w-2xl w-full">
              <p className="text-lg font-medium">
                As part of the Mosaic project for the Iovine and Young Academy Innovation Sprint with Honda, I focused on creating a human-centered, emotionally engaging user journey while contributing core feature ideas that shaped the concept.
              </p>
              <section>
                <h3 className="text-xl font-semibold mt-4">My Contributions</h3>
                <ul className="list-disc list-inside space-y-1">
                  <li><b>Modular Interiors:</b> Proposed a flexible interior system where users could quickly swap out components to change the car's layout and aesthetic on demand.</li>
                  <li><b>Augmented Reality Integration:</b> Pitched AR features for in-car gaming, idle animations, and personalized digital entertainment to create immersive, customizable experiences.</li>
                  <li><b>AR Education:</b> Introduced the concept of location-based AR storytelling to provide real-time information about landmarks, local spots, and friend-recommended destinations. Riders could save trips and replay them as they originally happened.</li>
                  <li><b>Experience Design:</b> Crafted the narrative flow for the Mosaic user journey, using storyboarding to balance exciting, calm, and emotionally resonant moments. My story drew inspiration from a meaningful road trip I took to Solvang, California, focusing on joy, discovery, and connection.</li>
                </ul>
              </section>
              <section>
                <h3 className="text-xl font-semibold mt-4">Design Focus</h3>
                <ul className="list-disc list-inside space-y-1">
                  <li>Emotional storytelling rooted in real experiences</li>
                  <li>Immersive, modular, and user-driven features</li>
                  <li>Blending practical innovation with playful, memorable design</li>
                </ul>
              </section>
            </div>
          </div>
        </div>
      </div>
      {/* Dual Storyboard Slideshows Section */}
      <div className="w-full flex flex-col items-center justify-center mt-16 mb-8">
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-start" style={{ maxWidth: '1800px' }}>
          {/* Left: Initial Storyboard Slideshow */}
          <div className="flex flex-col items-center w-full">
            <ImageSlideshow
              images={Array.from({length: 23}, (_, i) => `/honda/honda storyboard 1/${i+1}.png`)}
              altPrefix="Initial Storyboard Concept page"
            />
            <div className="w-full text-center mt-2">
              <span className="text-xs md:text-sm text-gray-400" style={{ fontFamily: 'inherit' }}>
                Initial Concept Storyboard illustrated by Kirana Moore
              </span>
            </div>
          </div>
          {/* Right: Refined Storyboard Slideshow */}
          <div className="flex flex-col items-center w-full">
            <ImageSlideshow
              images={Array.from({length: 22}, (_, i) => `/honda/honda storyboard 2/${i+1}.png`)}
              altPrefix="Refined Storyboard page"
            />
            <div className="w-full text-center mt-2">
              <span className="text-xs md:text-sm text-gray-400" style={{ fontFamily: 'inherit' }}>
                Refined Storyboard illustrated by Kirana Moore
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
} 