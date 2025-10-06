"use client";
import ProjectGrid from "@/components/ProjectGrid";
import { useState } from "react";

type Project = {
  title: string;
  year: number;
  category: string[];
  slug: string;
  thumbnail?: string;
  company?: string;
  season?: string;
};

const projectsData = [
  {
    title: "Angel Gundam Headset",
    year: 2025,
    season: "Fall",
    category: ["3D Design"],
    slug: "Angel-gundam",
    thumbnail: "/gundam/gundam.png",
  },
  {
    title: "AR Product Customizer",
    year: 2025,
    season: "Summer",
    category: ["Extended Reality"],
    slug: "cloud-3d-connect",
    thumbnail: "/Customizer-thumb.png",
    company: "Hewlett-Packard / HyperX",
  },
  {
    title: "Quick Start Guide Augmented Reality Manual",
    year: 2025,
    season: "Summer",
    category: ["Extended Reality"],
    slug: "quick-start-guide-ar-manual",
    thumbnail: "/quick_start_guide_thumbnail.png",
    company: "Hewlett-Packard / HyperX",
  },
  {
    title: "3D Model Optimization for XR",
    year: 2025,
    season: "Fall",
    category: ["Extended Reality", "3D Design"],
    slug: "hyperx-3d-optimization",
    thumbnail: "/3d-viewer-thumbnail.png",
    company: "Hewlett-Packard / HyperX",
  },
  {
    title: "Marker-Based Augmented Reality Development",
    year: 2025,
    season: "Summer",
    category: ["Extended Reality"],
    slug: "hyperx-unity-web-ar",
    thumbnail: "/hiro-marker-thumb.png",
    company: "Hewlett-Packard / HyperX",
  },
  {
    title: "HyperX Cloud 3 3D Customizer",
    year: 2025,
    season: "Spring",
    category: ["Extended Reality", "3D Design"],
    slug: "hyperx-cloud-3-3d-customizer",
    thumbnail: "/HX3D_thumbnail.png",
    company: "Hewlett-Packard / HyperX",
  },
  {
    title: "Magical Girl VS. Corporate Zombies",
    year: 2025,
    season: "Spring",
    category: ["Visual Narrative Art"],
    slug: "magical-girl-vs-zombies",
    thumbnail: "/magical-girl-vs-zombies-thumbnail.png",
  },
  {
    title: "The Painter of Light",
    year: 2025,
    season: "Spring",
    category: ["Immersive Experiences", "3D Design"],
    slug: "painter-of-light",
    thumbnail: "/hero%20render_ps.png",
  },
  {
    title: "Meta Alchemy",
    year: 2025,
    season: "Spring",
    category: ["Extended Reality", "3D Design"],
    slug: "meta-alchemy",
    thumbnail: "/meta_alchemy.png",
  },
  {
    title: "Cops and Robbers",
    year: 2025,
    season: "Spring",
    category: ["Extended Reality"],
    slug: "cops-and-robbers",
    thumbnail: "/cops_robbers.png",
  },
  {
    title: "Castle Chambers",
    year: 2025,
    season: "Spring",
    category: ["Extended Reality"],
    slug: "castle-chambers",
    thumbnail: "/castle-chambers.png",
    company: undefined,
  },
  {
    title: "Mosaic – Future Car Concept for Honda",
    year: 2025,
    season: "Spring",
    category: ["Extended Reality"],
    slug: "mosaic",
    thumbnail: "/mosaic thumbnail.png",
    company: "Honda",
  },
  {
    title: "The Helper",
    year: 2025,
    season: "Spring",
    category: ["Immersive Experiences", "3D Design"],
    slug: "the-helper",
    thumbnail: "/thumbnail-helper.png",
  },
  {
    title: "Eclipse",
    year: 2025,
    season: "Spring",
    category: ["Immersive Experiences", "3D Design"],
    slug: "eclipse",
    thumbnail: "/eclipse/thumbnail.png",
  },
  {
    title: "The Traveler",
    year: 2025,
    season: "Spring",
    category: ["Immersive Experiences", "3D Design"],
    slug: "the-traveler",
    thumbnail: "/traveler/traveler.png",
  },
  {
    title: "Cloud 3 Try-On Experience",
    year: 2024,
    season: "Summer",
    category: ["Extended Reality", "3D Design"],
    slug: "cloud-3-try-on-experience",
    thumbnail: "/tryon_thumbnail.png",
    company: "Hewlett-Packard / HyperX",
  },
  {
    title: "Interactive Packaging with Product Features",
    year: 2024,
    category: ["Extended Reality", "3D Design"],
    slug: "interactive-packaging-product-features",
    thumbnail: "/packaging_effect_thumbnail.png",
    company: "Hewlett-Packard / HyperX",
  },
  {
    title: "Animated Keyboard Packaging",
    year: 2024,
    season: "Fall",
    category: ["Extended Reality", "3D Design"],
    slug: "animated-keyboard-packaging",
    thumbnail: "/keyboard_thumbnail.png",
    company: "Hewlett-Packard / HyperX",
  },
  {
    title: "TRAINAR",
    year: 2024,
    season: "Spring",
    category: ["Extended Reality"],
    slug: "trainar",
    thumbnail: "/trainar/trainar.png",
    company: undefined,
  },
  {
    title: "Pixel Headphones",
    year: 2024,
    season: "Spring",
    category: ["Extended Reality", "3D Design"],
    slug: "pixel-headphones",
    thumbnail: "/pixel headphones.png",
    company: undefined,
  },
  {
    title: "Beast of Burden",
    year: 2024,
    season: "Fall",
    category: ["Visual Narrative Art"],
    slug: "beast-of-burden",
    thumbnail: "/beast of burden/beast of burden.png",
    company: undefined,
  },
  {
    title: "Fading Memories",
    year: 2024,
    season: "Spring",
    category: ["Immersive Experiences"],
    slug: "fading-memories",
    thumbnail: "/fading-memories/thumbnail.png",
  },
  {
    title: "The Great Cow Invasion of Los Angeles!",
    year: 2024,
    season: "Spring",
    category: ["Visual Narrative Art"],
    slug: "the-great-cow-invasion-of-los-angeles",
    thumbnail: "/cow-invasion-thumbnail.png",
  },
  {
    title: "Nike x League of Legends Skin Collaboration: Zeri",
    year: 2021,
    season: "Winter",
    category: ["Visual Narrative Art", "3D Design"],
    slug: "nike-league-of-legends-zeri",
    thumbnail: "/zeri-thumbnail.png",
  },
  {
    title: "Arts District Library",
    year: 2023,
    category: ["Immersive Experiences", "3D Design"],
    slug: "arts-district-library",
    thumbnail: "/skate.png",
  },
  {
    title: "Weaving Spaces",
    year: 2022,
    category: ["Immersive Experiences", "3D Design"],
    slug: "weaving-spaces",
    thumbnail: "/weaving/project-4-06.png",
  },
  {
    title: "Catatonia",
    year: 2024,
    season: "Spring",
    category: ["Extended Reality", "3D Design"],
    slug: "catatonia",
    thumbnail: "/catatoniathumbnail.png",
  },
];

// Helper to extract season and year
function getSeasonAndYear(project: Project) {
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
    season = project.season || 'Spring';
    year = project.year;
  }
  return { season: season as string, year };
}

const seasonOrder: Record<string, number> = { 'Summer': 3, 'Fall': 2, 'Spring': 1, 'Winter': 0 };

const sortedProjectsData = [...projectsData].sort((a, b) => {
  // Ensure Angel Gundam Headset always appears first
  if (a.slug === "Angel-gundam") return -1;
  if (b.slug === "Angel-gundam") return 1;
  
  const aInfo = getSeasonAndYear(a);
  const bInfo = getSeasonAndYear(b);
  if (aInfo.year != null && bInfo.year != null && aInfo.year !== bInfo.year) {
    return bInfo.year - aInfo.year;
  }
  return (seasonOrder[String(bInfo.season)] || 0) - (seasonOrder[String(aInfo.season)] || 0);
});

const categories = [
  "All",
  "Extended Reality",
  "Immersive Experiences",
  "Visual Narrative Art",
  "3D Design",
];

const companies = [
  "All",
  "Hewlett-Packard / HyperX",
  "Honda",
];

export default function WorkPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [activeCompany, setActiveCompany] = useState("All");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const filteredProjects = sortedProjectsData.filter((p) => {
    const categoryMatch = activeCategory === "All" || p.category.includes(activeCategory);
    const companyMatch = activeCategory === "Extended Reality" && activeCompany !== "All" 
      ? p.company === activeCompany 
      : true;
    return categoryMatch && companyMatch;
  });

  return (
    <main className="bg-black text-white min-h-screen">
      <style jsx global>{`
        @font-face {
          font-family: 'Lekton';
          src: url('/fonts/Lekton-Regular.ttf') format('truetype');
          font-weight: normal;
          font-style: normal;
        }
        .font-lekton {
          font-family: 'Lekton', sans-serif;
        }
      `}</style>
      <div className="h-16" />
      <div className="relative flex flex-col items-center justify-center">
        {/* Main Nav */}
        <nav className="w-full py-4">
          <div className="max-w-7xl mx-auto px-4 flex justify-center items-center gap-4">
            <h1 className="text-xl md:text-2xl font-bold">Work</h1>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setActiveCategory(cat);
                  if (cat !== "Extended Reality") setActiveCompany("All");
                }}
                className={`text-sm md:text-base font-semibold uppercase px-4 py-2 rounded transition-colors duration-200 ${activeCategory === cat ? "text-red-500 border-b-2 border-red-500" : "text-white hover:text-red-500 hover:border-b-2 hover:border-red-500"}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </nav>
        {/* Custom Dropdown for Extended Reality */}
        {activeCategory === "Extended Reality" && (
          <div className="max-w-7xl w-full px-4 md:px-8 py-4 flex justify-center">
            <div className="relative">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="bg-gray-800 text-white font-semibold uppercase px-6 py-3 rounded-lg border border-gray-700 hover:border-red-500 focus:outline-none focus:ring-2 focus:ring-red-500 transition-all duration-300 flex items-center gap-2"
              >
                {activeCompany}
                <svg
                  className={`w-4 h-4 transform transition-transform ${isDropdownOpen ? "rotate-180" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {isDropdownOpen && (
                <ul className="absolute z-10 mt-2 w-64 bg-gray-800 border border-gray-700 rounded-lg shadow-lg overflow-hidden">
                  {companies.map((company) => (
                    <li
                      key={company}
                      onClick={() => {
                        setActiveCompany(company);
                        setIsDropdownOpen(false);
                      }}
                      className="px-4 py-2 text-white hover:bg-red-500 hover:text-white cursor-pointer transition-colors duration-200"
                    >
                      {company}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        )}
        {/* Project Grid */}
        <div className="max-w-7xl w-full px-4 md:px-8 py-8 flex justify-center">
          <ProjectGrid projects={filteredProjects} />
        </div>
      </div>
    </main>
  );
}