import React from "react";
import { useParams } from "next/navigation";

interface ProjectClientProps {
  params: {
    slug: string;
  };
}

const ProjectClient: React.FC<ProjectClientProps> = ({ params }) => {
  const { slug } = params;

  // Default: Painter of Light
  return (
    <>
      <div className="h-32" />

      <div
        className="min-h-screen bg-black text-white py-12 flex justify-center items-center mt-16 md:mt-24 mb-12"
        style={{ marginLeft: "auto", marginRight: "auto", marginBottom: "50px", maxWidth: "1400px" }}
      >
        <div
          className="w-full flex flex-col lg:flex-row gap-16 items-center justify-center"
          style={{ maxWidth: "1200px" }}
        >
          {/* Left Column */}
          <div className="flex-1 flex flex-col gap-8">
            <h1 className="text-4xl font-bold">{slug}</h1>
            <p className="text-lg">
              This is the project description for <strong>{slug}</strong>. Replace this with your actual content.
            </p>

            {/* PDF Link */}
            <a
              href="/drawn.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block px-6 py-3 bg-white text-black font-semibold rounded hover:bg-gray-200 transition"
            >
              View PDF
            </a>
          </div>

          {/* Right Column */}
          <div className="flex-1 flex justify-center items-center">
            <img
              src="/drawn.pdf" // optional: you could also add a thumbnail here
              alt="Project PDF"
              className="max-w-full h-auto"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectClient;
