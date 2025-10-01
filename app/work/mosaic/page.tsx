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
              <h1 className="text-4xl md:text-6xl font-bold">MOSAIC: A Future Car Concept for Honda Motor Company</h1>
            </div>
            <p className="text-lg text-gray-200 mt-2">
              Developed an interactive Unity prototype for MOSAIC, a concept car for Honda that reimagines the vehicle as an emotionally responsive third space, blending immersive digital panels, adaptive environments, and communal features.
            </p>
            <div className="space-y-10 text-left max-w-2xl w-full">
              {/* Role & Objective */}
              <section>
                <div className="flex items-center gap-3 mb-2">
                  <span className="h-6 w-1 rounded bg-gradient-to-b from-pink-500 to-red-400" />
                  <h2 className="text-2xl font-bold text-pink-400 tracking-tight">Role & Objective</h2>
                </div>
                <ul className="space-y-2 pl-6 list-none">
                  <li className="flex items-start gap-2"><span className="mt-1 text-pink-400">•</span><span>Served as <span className="font-semibold text-white">Unity Developer</span> and prototyper for a Gen Z-driven <span className="font-bold">car concept focused on emotional well-being, community, and immersive digital experiences</span>.</span></li>
                  <li className="flex items-start gap-2"><span className="mt-1 text-pink-400">•</span><span>Aimed to reimagine the car as a dynamic third space that adapts to the rider's emotional and social needs.</span></li>
                  <li className="flex items-start gap-2"><span className="mt-1 text-pink-400">•</span><span>Targeted balancing solitude and connection through flexible seating, customizable environments, and seamless transitions between individual and communal modes.</span></li>
                </ul>
              </section>
              <div className="border-t border-gray-700 my-6" />
              {/* Actions Taken */}
              <section>
                <div className="flex items-center gap-3 mb-2">
                  <span className="h-6 w-1 rounded bg-gradient-to-b from-blue-400 to-cyan-400" />
                  <h2 className="text-2xl font-bold text-blue-300 tracking-tight">Actions Taken</h2>
                </div>
                <ul className="space-y-2 pl-6 list-none">
                  <li className="flex items-start gap-2"><span className="mt-1 text-blue-300">•</span><span>Collaborated with a cross-disciplinary team to design Mosaic, a visionary car concept for Honda.</span></li>
                  <li className="flex items-start gap-2"><span className="mt-1 text-blue-300">•</span><span><span className="font-bold">Prototyped interactive elements and environment transitions in Unity,</span> focusing on seamless UI responsiveness and immersive digital panel behaviors.</span></li>
                  <li className="flex items-start gap-2"><span className="mt-1 text-blue-300">•</span><span>Developed features such as Community Mode, Privacy Mode, Immersive Digital Panels, and Floating UI for adaptive in-car experiences.</span></li>
                  <li className="flex items-start gap-2"><span className="mt-1 text-blue-300">•</span><span>Worked closely with UI/UX, 3D design, and strategy teammates to ensure cohesive vision and technical feasibility.</span></li>
                </ul>
              </section>
              <div className="border-t border-gray-700 my-6" />
              {/* Results & Impact */}
              <section>
                <div className="flex items-center gap-3 mb-2">
                  <span className="h-6 w-1 rounded bg-gradient-to-b from-green-400 to-emerald-500" />
                  <h2 className="text-2xl font-bold text-green-300 tracking-tight">Results & Impact</h2>
                </div>
                <ul className="space-y-2 pl-6 list-none">
                  <li className="flex items-start gap-2"><span className="mt-1 text-green-300">•</span><span>Successfully delivered a <span className="font-bold">future car concept that addresses the modern need for flexible, emotionally intelligent spaces.</span></span></li>
                  <li className="flex items-start gap-2"><span className="mt-1 text-green-300">•</span><span>Demonstrated ability to <span className="font-bold">prototype and iterate on immersive digital experiences</span> for automotive innovation.</span></li>
                  <li className="flex items-start gap-2"><span className="mt-1 text-green-300">•</span><span>Established a model for adaptive, user-centric vehicle design that prioritizes both individual comfort and group engagement.</span></li>
                  <li className="flex items-start gap-2"><span className="mt-1 text-green-300">•</span><span>Showcased the potential of cross-disciplinary collaboration in future mobility solutions.</span></li>
                </ul>
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
            <div className="space-y-10 text-left max-w-2xl w-full">
              {/* Role & Objective */}
              <section>
                <div className="flex items-center gap-3 mb-2">
                  <span className="h-6 w-1 rounded bg-gradient-to-b from-pink-500 to-red-400" />
                  <h2 className="text-2xl font-bold text-pink-400 tracking-tight">Role & Objective</h2>
                </div>
                <ul className="space-y-2 pl-6 list-none">
                  <li className="flex items-start gap-2"><span className="mt-1 text-pink-400">•</span><span>Served as <span className="font-semibold text-white">Lead Unity Developer</span> to create interactive demos showcasing Mosaic's key features in immersive, narrative-driven formats.</span></li>
                  <li className="flex items-start gap-2"><span className="mt-1 text-pink-400">•</span><span>Aimed to demonstrate cohesive user experience design and system flexibility through iterative prototyping.</span></li>
                  <li className="flex items-start gap-2"><span className="mt-1 text-pink-400">•</span><span>Targeted creating immersive demonstrations that showcase Mosaic's potential for adaptive, emotionally intelligent in-car experiences.</span></li>
                </ul>
              </section>
              <div className="border-t border-gray-700 my-6" />
              {/* Actions Taken */}
              <section>
                <div className="flex items-center gap-3 mb-2">
                  <span className="h-6 w-1 rounded bg-gradient-to-b from-blue-400 to-cyan-400" />
                  <h2 className="text-2xl font-bold text-blue-300 tracking-tight">Actions Taken</h2>
                </div>
                <ul className="space-y-2 pl-6 list-none">
                  <li className="flex items-start gap-2"><span className="mt-1 text-blue-300">•</span><span>Developed initial demo with feature-by-feature walkthrough using a family's road trip scenario in <span className="font-bold">Unity</span>.</span></li>
                  <li className="flex items-start gap-2"><span className="mt-1 text-blue-300">•</span><span>Refined demo to unified, story-driven experience using Dungeons & Dragons session as core narrative.</span></li>
                  <li className="flex items-start gap-2"><span className="mt-1 text-blue-300">•</span><span>Implemented holistic feature integration where multiple Mosaic features activate in response to evolving group dynamics.</span></li>
                  <li className="flex items-start gap-2"><span className="mt-1 text-blue-300">•</span><span>Designed opt-out mechanic allowing individual riders to disengage from shared experiences.</span></li>
                  <li className="flex items-start gap-2"><span className="mt-1 text-blue-300">•</span><span>Led iterative prototyping, refining transitions, UI responsiveness, and overall narrative flow.</span></li>
                </ul>
              </section>
              <div className="border-t border-gray-700 my-6" />
              {/* Results & Impact */}
              <section>
                <div className="flex items-center gap-3 mb-2">
                  <span className="h-6 w-1 rounded bg-gradient-to-b from-green-400 to-emerald-500" />
                  <h2 className="text-2xl font-bold text-green-300 tracking-tight">Results & Impact</h2>
                </div>
                <ul className="space-y-2 pl-6 list-none">
                  <li className="flex items-start gap-2"><span className="mt-1 text-green-300">•</span><span>Successfully evolved from isolated scenarios to cohesive, story-driven demonstrations of Mosaic's capabilities.</span></li>
                  <li className="flex items-start gap-2"><span className="mt-1 text-green-300">•</span><span>Demonstrated Mosaic's potential to deliver adaptive, emotionally intelligent in-car experiences.</span></li>
                  <li className="flex items-start gap-2"><span className="mt-1 text-green-300">•</span><span>Established framework for prioritizing both individual comfort and group engagement in vehicle design.</span></li>
                  <li className="flex items-start gap-2"><span className="mt-1 text-green-300">•</span><span>Created immersive prototypes that effectively communicate complex automotive concepts through interactive storytelling.</span></li>
                </ul>
              </section>
            </div>
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
            <div className="space-y-10 text-left max-w-2xl w-full">
              {/* Role & Objective */}
              <section>
                <div className="flex items-center gap-3 mb-2">
                  <span className="h-6 w-1 rounded bg-gradient-to-b from-pink-500 to-red-400" />
                  <h2 className="text-2xl font-bold text-pink-400 tracking-tight">Role & Objective</h2>
                </div>
                <ul className="space-y-2 pl-6 list-none">
                  <li className="flex items-start gap-2"><span className="mt-1 text-pink-400">•</span><span>Served as <span className="font-semibold text-white">Experience Designer</span> and feature ideation contributor for the Mosaic project during the Iovine and Young Academy Innovation Sprint with Honda.</span></li>
                  <li className="flex items-start gap-2"><span className="mt-1 text-pink-400">•</span><span>Aimed to create a human-centered, emotionally engaging user journey that balances practical innovation with playful, memorable design.</span></li>
                  <li className="flex items-start gap-2"><span className="mt-1 text-pink-400">•</span><span>Targeted developing immersive, modular, and user-driven features that would shape the core Mosaic concept.</span></li>
                </ul>
              </section>
              <div className="border-t border-gray-700 my-6" />
              {/* Actions Taken */}
              <section>
                <div className="flex items-center gap-3 mb-2">
                  <span className="h-6 w-1 rounded bg-gradient-to-b from-blue-400 to-cyan-400" />
                  <h2 className="text-2xl font-bold text-blue-300 tracking-tight">Actions Taken</h2>
                </div>
                <ul className="space-y-2 pl-6 list-none">
                  <li className="flex items-start gap-2"><span className="mt-1 text-blue-300">•</span><span>Proposed <span className="font-bold">Modular Interiors</span> system allowing users to quickly swap components and change car layout and aesthetic on demand.</span></li>
                  <li className="flex items-start gap-2"><span className="mt-1 text-blue-300">•</span><span>Pitched <span className="font-bold">Augmented Reality Integration</span> for in-car gaming, idle animations, and personalized digital entertainment.</span></li>
                  <li className="flex items-start gap-2"><span className="mt-1 text-blue-300">•</span><span>Introduced <span className="font-bold">AR Education</span> concept with location-based storytelling for landmarks, local spots, and friend-recommended destinations.</span></li>
                  <li className="flex items-start gap-2"><span className="mt-1 text-blue-300">•</span><span>Crafted narrative flow for Mosaic user journey using storyboarding to balance exciting, calm, and emotionally resonant moments.</span></li>
                  <li className="flex items-start gap-2"><span className="mt-1 text-blue-300">•</span><span>Drew inspiration from personal road trip to Solvang, California, focusing on joy, discovery, and connection in the experience design.</span></li>
                </ul>
              </section>
              <div className="border-t border-gray-700 my-6" />
              {/* Results & Impact */}
              <section>
                <div className="flex items-center gap-3 mb-2">
                  <span className="h-6 w-1 rounded bg-gradient-to-b from-green-400 to-emerald-500" />
                  <h2 className="text-2xl font-bold text-green-300 tracking-tight">Results & Impact</h2>
                </div>
                <ul className="space-y-2 pl-6 list-none">
                  <li className="flex items-start gap-2"><span className="mt-1 text-green-300">•</span><span>Successfully contributed core feature ideas that shaped the Mosaic concept and influenced the final design direction.</span></li>
                  <li className="flex items-start gap-2"><span className="mt-1 text-green-300">•</span><span>Established emotional storytelling approach rooted in real experiences for more authentic user engagement.</span></li>
                  <li className="flex items-start gap-2"><span className="mt-1 text-green-300">•</span><span>Created framework for immersive, modular, and user-driven features that prioritize personalization and flexibility.</span></li>
                  <li className="flex items-start gap-2"><span className="mt-1 text-green-300">•</span><span>Demonstrated how AR technology can enhance automotive experiences beyond traditional functionality.</span></li>
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