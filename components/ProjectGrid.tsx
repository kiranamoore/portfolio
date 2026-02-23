"use client";

import Link from "next/link";

interface Project {
  title: string;
  year: number;
  slug: string;
  category?: string | string[];
  thumbnail?: string;
  company?: string;
}

export default function ProjectGrid({ projects }: { projects: Project[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {projects.map((project) => (
        <Link
          key={project.slug}
          href={`/work/${project.slug}`}
          className="group block"
        >
          <div className="overflow-hidden rounded-xl border border-[#E5E5E5] transition-shadow duration-200 hover:shadow-lg">
            <div className="aspect-[4/3] relative overflow-hidden bg-[#FAFAFA]">
              {project.thumbnail ? (
                <img
                  src={project.thumbnail}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                />
              ) : (
                <div className="w-full h-full bg-[#E5E5E5] flex items-center justify-center">
                  <span className="text-[#86868B] text-[13px]">No image</span>
                </div>
              )}
            </div>
            <div className="p-5 bg-white">
              <h3 className="text-[17px] font-semibold text-[#1D1D1F] mb-1">
                {project.title}
              </h3>
              <p className="text-[13px] text-[#6E6E73]">
                {project.company ? `${project.company} · ` : ""}{project.year}
              </p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
