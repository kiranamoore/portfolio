"use client";
import ProjectGrid from "@/components/ProjectGrid";
import TextScramble from "@/components/core/TextScramble";
import { useState, Fragment } from "react";

const projectsData = [
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
    thumbnail: "/purchase.png",
    company: "Hewlett-Packard / HyperX",
  },
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
  {
    title: "The Painter of Light",
    year: 2025,
    category: "Immersive Experiences",
    slug: "with-the-mountains-the-clouds-and-us",
    thumbnail: "/hero%20render_ps.png",
  },
];

const categories = [
  "All",
  "Extended Reality",
  "Immersive Experiences",
  "Visual Narrative Art",
];

const companies = [
  "All",
  "Hewlett-Packard / HyperX",
];

export default function WorkPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [activeCompany, setActiveCompany] = useState("All");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [hoverCompany, setHoverCompany] = useState<string | null>(null);

  const filteredProjects = projectsData.filter((p) => {
    const categoryMatch = activeCategory === "All" || p.category === activeCategory;
    const companyToUse = hoverCompany !== null ? hoverCompany : activeCompany;
    const companyMatch =
      companyToUse === "All" || (p.company && p.company === companyToUse);
    return categoryMatch && companyMatch;
  });

  // Determine which company is being previewed (hovered or selected)
  const effectiveCompany = hoverCompany || activeCompany;
  if (typeof window !== 'undefined') {
    console.log('activeCategory:', activeCategory, 'activeCompany:', activeCompany, 'hoverCompany:', hoverCompany, 'effectiveCompany:', effectiveCompany);
  }

  return (
    <main className="bg-black text-white">
      <div className="h-32" />
      <div className="relative flex flex-col items-center justify-center">
        {/* Nav and description (not sticky) */}
        <div className="w-full flex flex-col items-center pt-8 pb-6">
          <div className="max-w-7xl w-full px-4 md:px-8 pointer-events-auto flex flex-col items-center">
            <h1 className="text-3xl md:text-5xl font-bold mb-2 flex flex-wrap items-baseline justify-center text-center w-full">
              <span className="mr-4">Work</span>
              {categories.map((cat, index) => (
                <Fragment key={cat}>
                  {index > 0 && <span className="mx-2 select-none">-</span>}
                  <div
                    className="relative inline-block"
                    onMouseEnter={() => setDropdownOpen(true)}
                    onMouseLeave={() => { setDropdownOpen(false); setHoverCompany(null); }}
                  >
                    <button
                      onClick={() => setActiveCategory(cat)}
                      className={`transition-colors duration-200 ${activeCategory === cat ? "text-red-500" : "text-white"} font-bold uppercase text-3xl md:text-5xl tracking-tight px-2 py-1 rounded focus:outline-none`}
                      style={{ letterSpacing: '-0.03em' }}
                    >
                      <TextScramble
                        as="span"
                        text={`(${cat})`}
                        className="hover:text-red-500 transition-colors"
                      />
                    </button>
                    {cat === "Extended Reality" && (dropdownOpen || (activeCategory === "Extended Reality" && dropdownOpen)) && (
                      <div
                        className="absolute left-1/2 transform -translate-x-1/2 mt-4 w-80 bg-black border-2 border-red-500 rounded-xl shadow-2xl z-50 flex flex-col items-center py-4 gap-2"
                        style={{ fontWeight: 700, fontSize: '1.5rem', letterSpacing: '-0.02em' }}
                      >
                        {companies.map((company) => (
                          <button
                            key={company}
                            onClick={() => { setActiveCompany(company); setActiveCategory('Extended Reality'); setDropdownOpen(false); setHoverCompany(null); }}
                            onMouseEnter={() => setHoverCompany(company)}
                            onMouseLeave={() => setHoverCompany(null)}
                            className={`w-72 text-center px-4 py-2 rounded-lg transition-colors duration-150 ${((hoverCompany ?? activeCompany) === company) ? "bg-red-500 text-white" : "text-white hover:bg-gray-900 hover:text-red-400"}`}
                            style={{ textTransform: 'uppercase', fontWeight: 800, fontSize: '1.1rem' }}
                          >
                            {company}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </Fragment>
              ))}
            </h1>
            {/* Add a gap between the title row and the next line */}
            <div className="h-4" />
            {/* Centered filter label above the project gallery */}
            {activeCategory === "Extended Reality" && ((hoverCompany ?? activeCompany) !== "All") && (
              <div className="flex justify-center">
                <div className="text-center text-lg font-semibold text-white bg-gray-800 rounded px-6 py-2 mt-2 mb-4">
                  Showing: {(hoverCompany ?? activeCompany)} Extended Reality Projects
                </div>
              </div>
            )}
            <p className="text-lg md:text-xl text-gray-300 text-center max-w-3xl mx-auto">
              {(activeCategory === "Extended Reality" && effectiveCompany === "Hewlett-Packard / HyperX")
                ? "As the sole Augmented and Virtual Reality Developer at HyperX, a leading brand under HP Inc., I have the privilege of spearheading the company's exploration into extended reality (XR) during my internship from May 2024 to August 2025. Tasked with demonstrating the transformative potential of AR/VR, I focused on creating innovative solutions to address key company needs, from cost-saving digital manuals to immersive customer experiences. Collaborating closely with HyperX's 3D and CGI teams, I developed engaging AR experiences that enhanced product interaction, streamlined operations, and showcased the brand's commitment to cutting-edge technology. My work aimed to prove XR's value as a worthwhile investment, paving the way for HyperX to redefine user engagement in the gaming and tech industries."
                : "We make art & design, blending aesthetics and technology in our works."}
            </p>
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
