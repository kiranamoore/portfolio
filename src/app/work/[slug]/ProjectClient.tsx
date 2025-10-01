// File: app/work/[slug]/ProjectClient.tsx

import React from 'react';

interface ProjectClientProps {
  slug: string;
}

const ProjectClient: React.FC<ProjectClientProps> = ({ slug }) => {
  // Example: you can fetch project data based on slug if needed
  // For now, we'll just render the PDF link

  return (
    <>
      {/* Spacer at top */}
      <div className="h-32" />

      {/* Main content container */}
      <div
        className="min-h-screen bg-black text-white py-12 flex justify-center items-center mt-16 md:mt-24 mb-12"
        style={{ marginLeft: 'auto', marginRight: 'auto', marginBottom: '50px', maxWidth: '1400px' }}
      >
        <div
          className="w-full flex flex-col lg:flex-row gap-16 items-center justify-center"
          style={{ maxWidth: '1200px' }}
        >
          {/* PDF download link */}
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-4">Project Resume</h1>
            <a
              href="/drawn.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition"
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectClient;
