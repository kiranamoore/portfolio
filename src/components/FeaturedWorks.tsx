"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import TextScramble from "@/components/core/TextScramble";

type Project = {
  title: string;
  year: number;
  category: string;
  slug: string;
  thumbnail?: string;
  company?: string;
  season?: string;
};

const projectsData: Project[] = [
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
    company: undefined,
  },
  {
    title: "The Great Cow Invasion of Los Angeles!",
    year: 2024,
    season: "Spring",
    category: "Visual Narrative Art",
    slug: "the-great-cow-invasion-of-los-angeles",
    thumbnail: "/cow-invasion-thumbnail.png",
    company: undefined,
  },
  {
    title: "Nike x League of Legends Skin Collaboration: Zeri",
    year: 2024,
    season: "Spring",
    category: "Visual Narrative Art",
    slug: "nike-league-of-legends-zeri",
    thumbnail: "/zeri-thumbnail.png",
    company: undefined,
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

export default function FeaturedWorks() {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start 25%", "end 75%"],
  });

  const backgroundColor = "#FFFFFF";

  const color = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    ["#000000", "#FFFFFF", "#000000"]
  );

  // Helper to get first 3 projects by category
  const getFeaturedProjects = (category: string): Project[] => {
    if (category === "Immersive Experiences") {
      // Manually select the first two, then Fading Memories
      const first = projectsData.find((p) => p.slug === "with-the-mountains-the-clouds-and-us");
      const second = projectsData.find((p) => p.slug === "the-traveler");
      const third = projectsData.find((p) => p.slug === "fading-memories");
      return [first, second, third].filter(Boolean) as Project[];
    }
    return projectsData.filter((p: Project) => p.category === category).slice(0, 3);
  };

  const featuredSections = [
    {
      title: "Extended Reality",
      description: "Exploring new dimensions of interaction and perception through AR and VR.",
      category: "Extended Reality",
      bg: "#fff",
      color: "#000",
    },
    {
      title: "Immersive Experiences",
      description: "Crafting engaging and memorable experiences that captivate and inspire.",
      category: "Immersive Experiences",
      bg: "#000",
      color: "#fff",
    },
    {
      title: "Visual Narratives",
      description: "Telling stories through visuals, motion, and interactive media.",
      category: "Visual Narrative Art",
      bg: "#fff",
      color: "#000",
    },
  ];

  return (
    <section id="featured-work" className="mx-5">
      {featuredSections.map((section) => (
        <div key={section.title} style={{ background: section.bg, color: section.color }} className="mx-5">
          <div className="min-h-screen flex items-center py-20">
            <div className="flex-[1.2] min-w-[320px]">
              <h2 className="text-4xl md:text-6xl font-bold mb-4">Featured &gt; <br /> {section.title}</h2>
              <p className="text-lg max-w-md">
                <TextScramble text={section.description} />
              </p>
            </div>
            <div className="flex-[1.8] flex flex-row gap-8 justify-center">
              {getFeaturedProjects(section.category).map((project: Project) => (
                <Link key={project.slug} href={`/work/${project.slug}`}>
                  <div className="text-center group">
                    <Image
                      src={project.thumbnail || "/file.svg"}
                      alt={project.title + " thumbnail"}
                      width={320}
                      height={320}
                      className="rounded-lg group-hover:scale-105 transition-transform duration-300 object-cover aspect-square"
                    />
                    <div className="mt-2">
                      <p className="font-semibold">{project.title}</p>
                      <p className="text-sm">{project.category} / {project.year}</p>
                      {project.company && (
                        <span className="inline-block px-2 py-1 bg-yellow-500 text-black text-xs font-semibold rounded-full mt-1 mr-2">{project.company}</span>
                      )}
                      {/* Add status badge if available */}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      ))}
      <div className="text-center py-20 bg-white">
        <Link href="/work" className="text-xl hover:underline text-black">
          View all work
        </Link>
      </div>
    </section>
  );
}
