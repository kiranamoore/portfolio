"use client";
import InteractiveBackground from "@/components/core/InteractiveBackground";
import TextScramble from "@/components/core/TextScramble";
import FeaturedWorks from "@/components/FeaturedWorks";
import { useEffect, useState } from "react";

export default function Home() {
  const [californiaTime, setCaliforniaTime] = useState("");

  useEffect(() => {
    const getCaliforniaTime = () => {
      const time = new Date().toLocaleTimeString("en-US", {
        timeZone: "America/Los_Angeles",
        hour: '2-digit',
        minute: '2-digit',
        hour12: true,
      });
      setCaliforniaTime(time.replace(" ", ""));
    };

    getCaliforniaTime();
    const interval = setInterval(getCaliforniaTime, 1000 * 60);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <main>
        <InteractiveBackground>
          <section 
            className="h-[60vh] flex flex-col justify-center items-center relative text-center" 
            style={{ height: 'calc(60vh - 100px)' }} // Matches the reduced outer height
          >
            <div className="mix-blend-difference relative z-40">
              <div className="flex justify-center">
                <img 
                  src="/animated_logo.png" 
                  alt="Kirana" 
                  className="h-28 md:h-40 w-auto"
                />
              </div>
              <div className="h-2"></div> {/* Reduced from h-8 to h-2 (8px) */}
              <p 
                className="text-xl md:text-2xl text-white whitespace-pre-line font-bold" 
                style={{ 
                  fontFamily: 'var(--font-lekton)', 
                  lineHeight: '30px' /* Maintains 15px gap between lines */
                }}
              >
                <TextScramble text={"Hello, I'm a senior at the USC Iovine and Young Academy,\nAn Extended Reality Designer,\n3D Artist,\nExperience Designer,\nand Visual Storyteller"} />
              </p>
            </div>
            <div className="absolute bottom-8 right-8 text-white mix-blend-difference text-sm z-40">
              <p style={{ fontFamily: 'var(--font-lekton)' }}>San Francisco / Los Angeles, CA &gt; {californiaTime}</p>
            </div>
          </section>
        </InteractiveBackground>

        <section
          id="about"
          className="py-5 bg-black text-white text-center"
          style={{ paddingTop: "20px", paddingBottom: "20px" }}
        >
          <div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              <TextScramble text="About Me" />
            </h2>
            <p
              className="text-lg md:text-xl leading-relaxed px-8"
              style={{ maxWidth: "50rem", margin: "0 auto", fontFamily: 'var(--font-lekton)' }}
            >
              I'm a multidisciplinary designer and Unity developer passionate about crafting immersive AR, VR, and architectural experiences. Skilled in Unity, 3D modeling, and spatial design, I create user-centered environments that captivate and connect. Let's build something extraordinary together!
            </p>
          </div>
        </section>

        <FeaturedWorks />
      </main>
    </>
  );
}