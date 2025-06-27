"use client";
import ProjectGrid from "@/components/ProjectGrid";
import TextScramble from "@/components/core/TextScramble";
import { useState, Fragment } from "react";

type Project = {
  title: string;
  year: number;
  category: string;
  slug: string;
  thumbnail?: string;
  company?: string;
  season?: string;
};

const projectsData = [
  {
    title: "Quick Start Guide Augmented Reality Manual",
    year: 2025,
    category: "Extended Reality",
    slug: "quick-start-guide-ar-manual",
    thumbnail: "/quick_start_guide_thumbnail.png",
    company: "Hewlett-Packard / HyperX",
  },
  {
    title: "Cloud 3D Connect",
    year: 2025,
    category: "Extended Reality",
    slug: "cloud-3d-connect",
    thumbnail: "/18k tris.png",
    company: "Hewlett-Packard / HyperX",
  },
  {
    title: "HyperX Cloud 3 3D Customizer",
    year: 2025,
    category: "Extended Reality",
    slug: "hyperx-cloud-3-3d-customizer",
    thumbnail: "/HX3D_thumbnail.png",
    company: "Hewlett-Packard / HyperX",
  },
  {
    title: "Interactive Packaging with Product Features",
    year: 2024,
    category: "Extended Reality",
    slug: "interactive-packaging-product-features",
    thumbnail: "/packaging_effect_thumbnail.png",
    company: "Hewlett-Packard / HyperX",
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
  {
    title: "The Painter of Light",
    year: 2025,
    category: "Immersive Experiences",
    slug: "with-the-mountains-the-clouds-and-us",
    thumbnail: "/hero%20render_ps.png",
  },
  {
    title: "Meta Alchemy",
    year: 2025,
    category: "Extended Reality",
    slug: "meta-alchemy",
    thumbnail: "/meta_alchemy.png",
  },
  {
    title: "Cops and Robbers",
    year: 2025,
    category: "Extended Reality",
    slug: "cops-and-robbers",
    thumbnail: "/cops_robbers.png",
  },
  {
    title: "Cloud 3 Try-On Experience",
    year: 2024,
    category: "Extended Reality",
    slug: "cloud-3-try-on-experience",
    thumbnail: "/tryon_thumbnail.png",
    company: "Hewlett-Packard / HyperX",
  },
  {
    title: "Castle Chambers",
    year: 2025,
    category: "Extended Reality",
    slug: "castle-chambers",
    thumbnail: "/castle-chambers.png",
    company: undefined,
  },
  {
    title: "TRAINAR",
    year: 2024,
    season: "Spring",
    category: "Extended Reality",
    slug: "trainar",
    thumbnail: "/trainar/trainar.png",
    company: undefined,
  },
  {
    title: "Pixel Headphones",
    year: 2024,
    season: "Spring",
    category: "Extended Reality",
    slug: "pixel-headphones",
    thumbnail: "/pixel headphones.png",
    company: undefined,
  },
  {
    title: "Beast of Burden",
    year: 2024,
    season: "Fall",
    category: "Visual Narrative Art",
    slug: "beast-of-burden",
    thumbnail: "/beast of burden/beast of burden.png",
    company: undefined,
  },
  {
    title: "Mosaic – Future Car Concept for Honda",
    year: 2025,
    season: "Spring",
    category: "Extended Reality",
    slug: "mosaic",
    thumbnail: "/mosaic thumbnail.png",
    company: "Honda",
  },
  {
    title: "The Traveler",
    year: 2025,
    season: "Spring",
    category: "Immersive Experiences",
    slug: "the-traveler",
    thumbnail: "/traveler/traveler.png",
  },
];

// Helper to extract season and year
function getSeasonAndYear(project: Project) {
  // Try to extract from title/description if not present, but default to Spring if not found
  const seasonRegex = /(Spring|Summer|Fall|Winter)\s*(\d{4})/i;
  let season = null, year = null;
  if (project.season && project.year) {
    season = project.season;
    year = project.year;
  } else if (project.title && seasonRegex.test(project.title)) {
    const match = project.title.match(seasonRegex);
    if (match) {
      season = match[1];
      year = parseInt(match[2]);
    }
  } else if (project.year) {
    // Default to Spring if not specified
    season = project.season || 'Spring';
    year = project.year;
  }
  return { season: season as string, year };
}

const seasonOrder: Record<string, number> = { 'Summer': 3, 'Fall': 2, 'Spring': 1, 'Winter': 0 };

const sortedProjectsData = [...projectsData].sort((a, b) => {
  const aInfo = getSeasonAndYear(a);
  const bInfo = getSeasonAndYear(b);
  if (aInfo.year != null && bInfo.year != null && aInfo.year !== bInfo.year) {
    return bInfo.year - aInfo.year; // Descending by year
  }
  // Descending by season order
  return (seasonOrder[String(bInfo.season)] || 0) - (seasonOrder[String(aInfo.season)] || 0);
});

const categories = [
  "All",
  "Extended Reality",
  "Immersive Experiences",
  "Visual Narrative Art",
];

const companies = [
  "All",
  "Hewlett-Packard / HyperX",
  "Honda",
];

export default function WorkPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [showHyperXBio, setShowHyperXBio] = useState(false);

  const filteredProjects = sortedProjectsData.filter((p) => {
    const categoryMatch = activeCategory === "All" || p.category === activeCategory;
    // Only filter by company if HyperX is selected in second nav
    const companyMatch = !(activeCategory === "Extended Reality" && showHyperXBio) || (p.company && p.company === "Hewlett-Packard / HyperX");
    return categoryMatch && companyMatch;
  });

  return (
    <main className="bg-black text-white">
      <div className="h-32" />
      <div className="relative flex flex-col items-center justify-center">
        {/* Main Nav */}
        <div className="w-full flex flex-col items-center pt-8 pb-6">
          <div className="max-w-7xl w-full px-4 md:px-8 pointer-events-auto flex flex-col items-center">
            <h1 className="text-3xl md:text-5xl font-bold mb-2 flex flex-wrap items-baseline justify-center text-center w-full">
              <span className="mr-4">Work</span>
              {categories.map((cat, index) => (
                <Fragment key={cat}>
                  {index > 0 && <span className="mx-2 select-none">-</span>}
                  <button
                    onClick={() => {
                      setActiveCategory(cat);
                      setShowHyperXBio(false);
                    }}
                    className={`transition-colors duration-200 ${activeCategory === cat ? "text-red-500" : "text-white"} font-bold uppercase text-3xl md:text-5xl tracking-tight px-2 py-1 rounded focus:outline-none`}
                  >
                    {cat}
                  </button>
                </Fragment>
              ))}
            </h1>
            {/* Second Nav Bar for Extended Reality */}
            {activeCategory === "Extended Reality" && (
              <div className="flex flex-row items-center justify-center w-full mt-2 mb-2">
                <button
                  onClick={() => {
                    setShowHyperXBio(false);
                  }}
                  className={`mx-2 px-4 py-1 rounded text-base md:text-lg font-bold uppercase ${!showHyperXBio ? "bg-red-500 text-white" : "bg-gray-800 text-white"}`}
                >
                  All
                </button>
                <span className="mx-2 text-base md:text-lg font-bold">-</span>
                <button
                  onClick={() => {
                    setShowHyperXBio(true);
                  }}
                  className={`mx-2 px-4 py-1 rounded text-base md:text-lg font-bold uppercase ${showHyperXBio ? "bg-red-500 text-white" : "bg-gray-800 text-white"}`}
                >
                  Hewlett-Packard/HyperX (Professional Projects)
                </button>
              </div>
            )}
            {/* Show custom HyperX bio if selected */}
            {activeCategory === "Extended Reality" && showHyperXBio && (
              <div className="flex justify-center">
                <div className="text-center text-lg font-semibold text-white bg-gray-800 rounded px-6 py-2 mt-2 mb-4">
                  As the sole Augmented and Virtual Reality Developer at HyperX, a leading brand under HP Inc., I have the privilege of spearheading the company's exploration into extended reality (XR) during my internship from May 2024 to August 2025. Tasked with demonstrating the transformative potential of AR/VR, I focused on creating innovative solutions to address key company needs, from cost-saving digital manuals to immersive customer experiences. Collaborating closely with HyperX's 3D and CGI teams, I developed engaging AR experiences that enhanced product interaction, streamlined operations, and showcased the brand's commitment to cutting-edge technology. My work aimed to prove XR's value as a worthwhile investment, paving the way for HyperX to redefine user engagement in the gaming and tech industries.
                </div>
              </div>
            )}
            {/* Add a gap between the title row and the next line */}
            <div className="h-4" />
            {/* Default description if not showing HyperX bio */}
            {!(activeCategory === "Extended Reality" && showHyperXBio) && (
              <p className="text-lg md:text-xl text-gray-300 text-center max-w-3xl mx-auto">
                We make art & design, blending aesthetics and technology in our works.
              </p>
            )}
          </div>
        </div>
        {/* 4. The project grid */}
        <div className="max-w-7xl w-full px-4 md:px-8 flex justify-center">
          <ProjectGrid projects={filteredProjects} />
        </div>
      </div>
    </main>
  );
}
