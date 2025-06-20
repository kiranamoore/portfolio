"use client";

import Link from "next/link";
import { useCursor } from "@/context/CursorContext";

interface Project {
  title: string;
  year: number;
  slug: string;
  category: string;
}

const colors = [
  "bg-cyan-500",
  "bg-magenta-500",
  "bg-yellow-500",
  "bg-red-500",
  "bg-green-500",
  "bg-blue-500",
];

export default function ProjectGrid({ projects }: { projects: Project[] }) {
  const { setVariant } = useCursor();

  const linkProps = {
    onMouseEnter: () => setVariant("hover"),
    onMouseLeave: () => setVariant("default"),
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {projects.map((project, index) => (
        <Link href={`/work/${project.slug}`} key={project.slug} {...linkProps}>
          <div className="group">
            <div
              className={`relative aspect-square w-full overflow-hidden ${
                colors[index % colors.length]
              }`}
            >
              <div className="absolute inset-0 bg-[url('/grid.svg')] bg-repeat opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <div className="mt-4">
              <h2 className="font-bold text-lg">{project.title}</h2>
              <p className="text-gray-400">
                :: {project.category} / {project.year}
              </p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
