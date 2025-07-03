"use client";
import ProjectGrid from "@/components/ProjectGrid";
import TextScramble from "@/components/core/TextScramble";
import { useState, Fragment } from "react";
import ImageSlideshow from "@/components/core/ImageSlideshow";

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
  {
    title: "The Helper",
    year: 2025,
    season: "Spring",
    category: "Immersive Experiences",
    slug: "the-helper",
    thumbnail: "/thumbnail-helper.png",
  },
  {
    title: "Eclipse",
    year: 2025,
    season: "Spring",
    category: "Immersive Experiences",
    slug: "eclipse",
    thumbnail: "/eclipse/thumbnail.png",
  },
  {
    title: "Fading Memories",
    year: 2024,
    season: "Spring",
    category: "Immersive Experiences",
    slug: "fading-memories",
    thumbnail: "/fading-memories/thumbnail.png",
  },
  {
    title: "Magical Girl VS. Corporate Zombies",
    year: 2025,
    season: "Spring",
    category: "Visual Narrative Art",
    slug: "magical-girl-vs-zombies",
    thumbnail: "/magical-girl-vs-zombies-thumbnail.png",
  },
  {
    title: "The Great Cow Invasion of Los Angeles!",
    year: 2024,
    season: "Spring",
    category: "Visual Narrative Art",
    slug: "the-great-cow-invasion-of-los-angeles",
    thumbnail: "/cow-invasion-thumbnail.png",
  },
  {
    title: "Nike x League of Legends Skin Collaboration: Zeri",
    year: 2024,
    season: "Spring",
    category: "Visual Narrative Art",
    slug: "nike-league-of-legends-zeri",
    thumbnail: "/zeri-thumbnail.png",
  },
  {
    title: "Arts District Library",
    year: 2023,
    category: "Immersive Experiences",
    slug: "arts-district-library",
    thumbnail: "/skate.png",
  },
  {
    title: "Weaving Spaces",
    year: 2022,
    category: "Immersive Experiences",
    slug: "weaving-spaces",
    thumbnail: "/weaving/project-4-06.png",
  },
  {
    title: "Catatonia",
    year: 2023,
    category: "Extended Reality",
    slug: "catatonia",
    thumbnail: "/catatoniathumbnail.png",
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

const archImages = Array.from({ length: 19 }, (_, i) => `/arch/${i}.jpg`);

function ArtsDistrictLibrary() {
  return (
    <section className="my-24">
      <div className="max-w-4xl mx-auto">
        <ImageSlideshow images={archImages} altPrefix="Arts District Library" />
        <div className="mt-10 text-center">
          <p className="text-sm text-gray-400">Spring 2023</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Arts District Library</h2>
          <p className="text-lg font-medium mb-6">
            Library x Skatepark – Hybrid Urban Space Design<br/>
            For this design challenge, we were tasked with creating a library for an empty lot in Downtown Los Angeles' Arts District, combining it with an unconventional secondary program.
          </p>
          <section className="mb-6 text-left max-w-2xl mx-auto">
            <h3 className="text-2xl font-semibold mb-2 text-red-400">Key Features</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Contextual Urban Analysis:</strong> Conducted thorough site research, including color-coded diagrams mapping surrounding neighborhood programs to inform spatial relationships.</li>
              <li><strong>Circulation-Driven Design:</strong> Initially envisioned the project to be surrounded by a playground, which became the foundation for early circulation studies.</li>
              <li><strong>Evolving Concept:</strong> Transformed the surrounding playground into a "play-ground" skate park, introducing a more dynamic, youth-oriented public space.</li>
              <li><strong>Form Development:</strong> Shaped the library by extruding the site and carving out large circular forms to create distinct masses, open-air courtyards, and interconnected walkways.</li>
              <li><strong>Multi-Level Spatial Flow:</strong> Divided the building into upper and ground floor zones to encourage exploration and layered movement through the space.</li>
            </ul>
          </section>
          <section className="mb-6 text-left max-w-2xl mx-auto">
            <h3 className="text-2xl font-semibold mb-2 text-red-400">Design Focus</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>Integrating play, learning, and community into a cohesive spatial experience</li>
              <li>Designing movement pathways inspired by playground circulation</li>
              <li>Blurring boundaries between traditional educational spaces and recreational environments</li>
            </ul>
          </section>
          <section className="text-left max-w-2xl mx-auto">
            <h3 className="text-2xl font-semibold mb-2 text-red-400">Project Impact</h3>
            <p>
              This project showcases my ability to evolve design concepts through iterative research, circulation studies, and playful form-making, resulting in a vibrant, community-centered space that challenges conventional library design.
            </p>
          </section>
        </div>
      </div>
    </section>
  );
}

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
                  className={`mx-2 px-4 py-1 rounded text-base md:text-lg font-bold uppercase ${!showHyperXBio ? "bg-red-500 text-white" : "text-white"}`}
                >
                  All
                </button>
                <span className="mx-2 text-base md:text-lg font-bold">-</span>
                <button
                  onClick={() => {
                    setShowHyperXBio(true);
                  }}
                  className={`mx-2 px-4 py-1 rounded text-base md:text-lg font-bold uppercase ${showHyperXBio ? "bg-red-500 text-white" : "text-white"}`}
                >
                  Hewlett-Packard/HyperX (Professional Projects)
                </button>
              </div>
            )}
            {/* Show custom HyperX bio if selected */}
            {activeCategory === "Extended Reality" && showHyperXBio && (
              <div className="flex justify-center">
                <div className="text-center text-lg font-semibold text-white rounded px-6 py-2 mt-2 mb-4">
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
