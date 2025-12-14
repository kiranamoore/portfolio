"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import TextScramble from "@/components/core/TextScramble";

type Project = {
  title: string;
  year: number;
  category: string | string[];
  slug: string;
  thumbnail?: string;
  company?: string;
  season?: string;
};

const projectsData: Project[] = [
  {
    title: "Angel Gundam Headset",
    year: 2025,
    season: "Fall",
    category: ["3D Design"],
    slug: "Angel-gundam",
    thumbnail: "/gundam/gundam.PNG",
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
    title: "3D Model Optimization for XR",
    year: 2025,
    season: "Summer",
    category: ["Extended Reality", "3D Design"],
    slug: "hyperx-3d-optimization",
    thumbnail: "/3d-viewer-thumbnail.png",
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
    title: "The Painter of Light",
    year: 2025,
    category: ["Immersive Experiences", "3D Design"],
    slug: "painter-of-light",
    thumbnail: "/hero%20render_ps.png",
  },
  {
    title: "Meta Alchemy",
    year: 2025,
    category: ["Extended Reality", "3D Design"],
    slug: "meta-alchemy",
    thumbnail: "/meta_alchemy.png",
  },
  {
    title: "Cops and Robbers",
    year: 2025,
    category: ["Extended Reality"],
    slug: "cops-and-robbers",
    thumbnail: "/cops_robbers.png",
  },
  {
    title: "Cloud 3 Try-On Experience",
    year: 2024,
    category: ["Extended Reality", "3D Design"],
    slug: "cloud-3-try-on-experience",
    thumbnail: "/tryon_thumbnail.png",
    company: "Hewlett-Packard / HyperX",
  },
  {
    title: "Castle Chambers",
    year: 2025,
    category: ["Extended Reality"],
    slug: "castle-chambers",
    thumbnail: "/castle-chambers.png",
  },
  {
    title: "TRAINAR",
    year: 2024,
    season: "Spring",
    category: ["Extended Reality"],
    slug: "trainar",
    thumbnail: "/trainar/trainar.png",
  },
  {
    title: "Pixel Headphones",
    year: 2024,
    season: "Spring",
    category: ["Extended Reality", "3D Design"],
    slug: "pixel-headphones",
    thumbnail: "/pixel headphones.png",
  },
  {
    title: "Beast of Burden",
    year: 2024,
    season: "Fall",
    category: ["Visual Narrative Art"],
    slug: "beast-of-burden",
    thumbnail: "/beast of burden/beast of burden.png",
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
    title: "The Traveler",
    year: 2025,
    season: "Fall",
    category: ["Immersive Experiences", "3D Design"],
    slug: "the-traveler",
    thumbnail: "/traveler/traveler.png",
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
    title: "Fading Memories",
    year: 2024,
    season: "Spring",
    category: ["Immersive Experiences"],
    slug: "fading-memories",
    thumbnail: "/fading-memories/thumbnail.png",
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
    year: 2020,
    season: "Spring",
    category: ["Extended Reality", "3D Design"],
    slug: "catatonia",
    thumbnail: "/catatoniathumbnail.png",
  },
];

export default function FeaturedWorks() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start 25%", "end 75%"],
  });

  const color = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    ["#000000", "#FFFFFF", "#000000"]
  );

  const getFeaturedProjects = (category: string): Project[] => {
    if (category === "Immersive Experiences") {
      const first = projectsData.find((p) => p.slug === "painter-of-light");
      const second = projectsData.find((p) => p.slug === "the-traveler");
      const third = projectsData.find((p) => p.slug === "fading-memories");
      return [first, second, third].filter((p): p is Project => p !== undefined);
    }
    if (category === "3D Design") {
      const first = projectsData.find((p) => p.slug === "hyperx-3d-optimization");
      const second = projectsData.find((p) => p.slug === "nike-league-of-legends-zeri");
      const third = projectsData.find((p) => p.slug === "the-traveler");
      return [first, second, third].filter((p): p is Project => p !== undefined);
    }
    return projectsData.filter((p: Project) => 
      Array.isArray(p.category) ? p.category.includes(category) : p.category === category
    ).slice(0, 3);
  };

  const featuredSections = [
    {
      title: "Extended Reality",
      description: "Crafting immersive AR and VR experiences that elevate retail engagement and showcase products in innovative, interactive ways.",
      category: "Extended Reality",
      bg: "#fff",
      color: "#000",
    },
    {
      title: "Immersive Experiences",
      description: "Designing spatial environments and immersive narratives that transform spaces into captivating, story-driven experiences.",
      category: "Immersive Experiences",
      bg: "#000",
      color: "#fff",
    },
    {
      title: "3D Design",
      description: "Optimizing and customizing 3D models for XR applications to enhance visual fidelity and performance.",
      category: "3D Design",
      bg: "#fff",
      color: "#000",
    },
    {
      title: "Visual Narratives",
      description: "Weaving compelling narratives through captivating illustrations and immersive storytelling.",
      category: "Visual Narrative Art",
      bg: "#000",
      color: "#fff",
    },
  ];

  const scrollToNextSection = (index: number) => {
    const sections = Array.from(document.querySelectorAll("#featured-work > div"));
    if (index < sections.length - 1) {
      sections[index + 1].scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="featured-work" className="w-full px-6">
      {featuredSections.map((section, index) => (
        <div key={section.title} style={{ background: section.bg, color: section.color }} className="w-full min-h-[85vh] flex justify-center items-center">
          <div className="flex flex-col items-center w-full max-w-6xl px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl mx-auto">
              {getFeaturedProjects(section.category).map((project) => (
                <Link 
                  key={project.slug} 
                  href={`/work/${project.slug}`} 
                  className="block group"
                  style={{ textDecoration: 'none', color: 'inherit' }}
                >
                  <div className="relative w-full max-w-sm mx-auto" style={{ paddingBottom: '100%', overflow: 'hidden', borderRadius: '8px' }}>
                    {project.thumbnail && (
                      <Image
                        src={project.thumbnail || "/file.svg"}
                        alt={project.title + " thumbnail"}
                        width={400}
                        height={400}
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    )}
                  </div>
                  <div className="text-center" style={{ marginTop: '20px' }}>
                    {project.company && (
                      <span className="inline-block px-2 py-1 bg-yellow-500 text-black text-xs font-semibold rounded-full mb-2">{project.company}</span>
                    )}
                    <p className="font-semibold text-sm md:text-base mt-2" style={{ fontFamily: 'var(--font-lekton)', color: 'inherit' }}>{project.title}</p>
                    <p className="text-xs mt-1" style={{ fontFamily: 'var(--font-lekton)', color: 'inherit' }}>
                      {Array.isArray(project.category) ? project.category.join(", ") : project.category} / {project.year}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
            <div className="mt-[50px]"></div> {/* 50px spacing between featured projects and title */}
            <motion.div className="text-center" style={{ color: color }}>
              <h2 className="text-4xl md:text-6xl font-bold">Featured &gt; <br /> {section.title}</h2>
            </motion.div>
            <div className="mt-[50px]"></div> {/* 50px spacing after title */}
            <p className="text-lg text-center" style={{ fontFamily: 'var(--font-lekton)' }}>
              <TextScramble text={section.description} />
            </p>
            <div className="mt-[50px]"></div> {/* 50px spacing after description */}
            {(section.category !== "Visual Narrative Art" && index < featuredSections.length - 1) && (
              <div className="flex justify-center">
                <button
                  onClick={() => scrollToNextSection(index)}
                  className="px-4 py-2 focus:outline-none"
                  aria-label="Scroll to next section"
                >
                  ▼
                </button>
              </div>
            )}
            <div className="mt-[50px]"></div> {/* 50px spacing after button */}
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