// src/app/work/[slug]/ProjectClient.tsx
import React from 'react';
import Link from 'next/link';

interface ProjectClientProps {
  // You can add props if needed
}

const ProjectClient: React.FC<ProjectClientProps> = () => {
  return (
    <>
      {/* Spacer at top */}
      <div className="h-32" />

      {/* Main content wrapper */}
      <div
        className="min-h-screen bg-black text-white py-12 flex justify-center items-center mt-16 md:mt-24 mb-12"
        style={{ marginLeft: 'auto', marginRight: 'auto', marginBottom: '50px', maxWidth: '1400px' }}
      >
        <div
          className="w-full flex flex-col lg:flex-row gap-16 items-center justify-center"
          style={{ maxWidth: '1200px' }}
        >
          {/* Left side: Project Info */}
          <div className="flex-1 flex flex-col gap-4">
            <h1 className="text-4xl font-bold">Painter of Light</h1>
            <p className="text-lg">
              This is a sample project description. Here you can explain the project details, your role, and any
              relevant context.
            </p>

            {/* PDF link */}
            <Link href="/drawn.pdf" target="_blank" className="text-blue-400 underline mt-4">
              View PDF Resume
            </Link>
          </div>

          {/* Right side: Placeholder for image or media */}
          <div className="flex-1 flex justify-center items-center">
            <img
              src="/drawn.pdf" // Optional: replace with image if needed
              alt="Project preview"
              className="max-w-full rounded shadow-lg"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectClient;
