import React from "react";

interface ProjectClientProps {
  slug: string;
}

const ProjectClient: React.FC<ProjectClientProps> = ({ slug }) => {
  // You can add project-specific data here
  const projectTitle = "Painter of Light"; // Default title
  const pdfFileName = "/drawn.pdf"; // Make sure drawn.pdf is in public/

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
          {/* Project Title */}
          <h1 className="text-4xl font-bold mb-4">{projectTitle}</h1>

          {/* PDF Link */}
          <a
            href={pdfFileName}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 underline hover:text-blue-600"
          >
            View PDF
          </a>
        </div>
      </div>
    </>
  );
};

export default ProjectClient;
