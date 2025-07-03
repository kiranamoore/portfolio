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
          <section className="h-screen flex flex-col justify-center items-center relative text-center">
            <div className="mix-blend-difference">
              <h1 className="text-6xl md:text-9xl font-bold tracking-tighter text-white">
                <TextScramble text="Kirana" />
              </h1>
              <p className="text-xl md:text-2xl mt-4 text-white whitespace-pre-line">
                <TextScramble text={"Hello, I'm a senior at the USC Iovine and Young Academy,\n\nAn Extended Reality Designer, \n\nExperience Designer,\n\nand Visual Storyteller"} />
              </p>
            </div>
            <div className="absolute bottom-8 right-8 text-white mix-blend-difference text-sm">
              <p>San Francisco / Los Angeles, CA &gt; {californiaTime}</p>
            </div>
          </section>
        </InteractiveBackground>

        <section
          id="about"
          className="py-20 md:py-32 bg-black text-white text-center"
        >
          <div>
            <h2 className="text-3xl md:text-5xl font-bold mb-8">
              <TextScramble text="About Me" />
            </h2>
            <p
              className="text-lg md:text-xl leading-relaxed px-4"
              style={{ maxWidth: "42rem", margin: "0 auto" }}
            >
              I'm a multidisciplinary designer and Unity developer passionate about crafting immersive AR, VR, and architectural experiences that blend art, technology, and storytelling. Skilled in Unity, 3D modeling, and spatial design, I create user-centered, innovative environments that captivate and connect. Whether coding interactive AR showcases or designing empathetic spaces, I thrive on transforming ideas into impactful realities. Let's build something extraordinary together!
            </p>
          </div>
        </section>

        <FeaturedWorks />
      </main>
    </>
  );
}
