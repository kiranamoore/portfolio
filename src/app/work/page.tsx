"use client";
import ProjectGrid from "@/components/ProjectGrid";
import TextScramble from "@/components/core/TextScramble";
import { useState, Fragment } from "react";

const projectsData = [
  {
    title: "Quantum Leap",
    year: 2024,
    category: "Extended Reality",
    slug: "quantum-leap",
  },
  {
    title: "Echoes of Tomorrow",
    year: 2024,
    category: "Extended Reality",
    slug: "echoes-of-tomorrow",
  },
  {
    title: "Cybernetic Dreams",
    year: 2024,
    category: "Extended Reality",
    slug: "cybernetic-dreams",
  },
  {
    title: "The Silent Forest",
    year: 2023,
    category: "Immersive Experiences",
    slug: "the-silent-forest",
  },
  {
    title: "Oceanic Depths",
    year: 2023,
    category: "Immersive Experiences",
    slug: "oceanic-depths",
  },
  {
    title: "City of Light",
    year: 2023,
    category: "Immersive Experiences",
    slug: "city-of-light",
  },
  {
    title: "Starlit Painter",
    year: 2022,
    category: "Visual Narrative Art",
    slug: "starlit-painter",
  },
  {
    title: "Forgotten Fables",
    year: 2022,
    category: "Visual Narrative Art",
    slug: "forgotten-fables",
  },
  {
    title: "The Alchemist's Study",
    year: 2022,
    category: "Visual Narrative Art",
    slug: "the-alchemists-study",
  },
];

const categories = [
  "All",
  "Extended Reality",
  "Immersive Experiences",
  "Visual Narrative Art",
];

export default function WorkPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projectsData
      : projectsData.filter((p) => p.category === activeCategory);

  return (
    <main className="p-4 md:p-8 pt-48 md:pt-52">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl md:text-5xl font-bold mb-2 flex flex-wrap items-baseline">
          <span className="mr-4">Work</span>
          {categories.map((cat, index) => (
            <Fragment key={cat}>
              {index > 0 && <span className="mx-2 select-none">-</span>}
              <button
                onClick={() => setActiveCategory(cat)}
                className={`${activeCategory === cat ? "text-red-500" : ""}`}
              >
                <TextScramble
                  as="span"
                  text={`(${cat})`}
                  className="hover:text-red-500 transition-colors"
                />
              </button>
            </Fragment>
          ))}
        </h1>
        <p className="text-lg md:text-xl text-gray-400 mb-12">
          We make art & design, blending aesthetics and technology in our works.
        </p>
        <ProjectGrid projects={filteredProjects} />
      </div>
    </main>
  );
}
