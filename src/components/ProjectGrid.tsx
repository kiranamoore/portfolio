"use client";

import Link from "next/link";
import { useCursor } from "@/context/CursorContext";

interface Project {
  title: string;
  year: number;
  slug: string;
  category: string;
  thumbnail?: string;
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
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
        justifyContent: "center",
        justifyItems: "center",
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "0 24px",
      }}
    >
      {projects.map((project, index) => (
        <div key={project.slug} style={{ padding: "32px", width: "320px" }}>
          <Link href={`/work/${project.slug}`} {...linkProps}>
            <div className="group">
              {project.thumbnail ? (
                <img
                  src={project.thumbnail}
                  alt={project.title}
                  style={{ width: "100%", aspectRatio: "1/1", objectFit: "cover", borderRadius: "12px" }}
                />
              ) : (
                <div
                  className={`relative aspect-square w-full overflow-hidden ${
                    colors[index % colors.length]
                  }`}
                >
                  <div className="absolute inset-0 bg-[url('/grid.svg')] bg-repeat opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              )}
              <div className="mt-4">
                <h2 className="font-bold text-lg">{project.title}</h2>
                <p className="text-gray-400">
                  :: {project.category} / {project.year}
                </p>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}
