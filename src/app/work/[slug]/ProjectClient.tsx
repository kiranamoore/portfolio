// app/work/[slug]/ProjectClient.tsx
import React from "react";

interface ProjectClientProps {
  params: {
    slug: string;
  };
}

// Example project data mapping
const projects: Record<
  string,
  { title: string; pdfUrl: string; description: string }
> = {
  painter-of-light: {
    title: "Painter of Light",
    pdfUrl: "/drawn.pdf",
    description:
      "This project showcases the Painter of Light portfolio. The PDF above contains detailed visuals and information about the work.",
  },
  // Add more projects here with their slug keys
};

const ProjectClient: React.FC<ProjectClientProps> = ({ params }) => {
  const project = projects[params.slug];

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-xl text-red-500">Project not found.</p>
      </div>
    );
  }

  return (
    <>
      <div className="h-32" />

      <div
        className="min-h-screen bg-black text-white py-12 flex justify-center items-center mt-16 md:mt-24 mb-12"
        style={{
          marginLeft: "auto",
          marginRight: "auto",
          marginBottom: "50px",
          maxWidth: "1400px",
        }}
      >
        <div
          className="w-full flex flex-col lg:flex-row gap-16 items-center justify-center"
          style={{ maxWidth: "1200px" }}
        >
          {/* Left column: PDF embed or link */}
          <div className="flex-1 flex flex-col items-center justify-center">
            <h1 className="text-4xl mb-6">{project.title}</h1>
            <embed
              src={project.pdfUrl}
              type="application/pdf"
              width="100%"
              height="600px"
              className="border border-gray-400"
            />
            <p className="mt-4">
              <a
                href={project.pdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 underline"
              >
                Open PDF in new tab
              </a>
            </p>
          </div>

          {/* Right column: Project details */}
          <div className="flex-1 flex flex-col gap-4">
            <h2 className="text-2xl font-semibold">About the Project</h2>
            <p>{project.description}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectClient;
