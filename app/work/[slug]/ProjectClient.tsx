import React from "react";
import ImageSlideshow from "@/components/core/ImageSlideshow"; // Adjust path if needed

interface ProjectClientProps {
  slug: string;
}

const ProjectClient: React.FC<ProjectClientProps> = ({ slug }) => {
  // Use slug for conditional rendering (fixes unused warning)
  if (slug === "angel-gundam") {
    return (
      <div className="min-h-screen bg-black text-white py-12">
        <h1 className="text-4xl font-bold mb-4">Angel Gundam Headset</h1>
        <ImageSlideshow images={["/gundam1.png", "/gundam2.png"]} altPrefix="Angel Gundam" />
        {/* Add your full content: description, images, etc. */}
      </div>
    );
  }

  if (slug === "cloud-3d-connect") {
    return (
      <div className="min-h-screen bg-black text-white py-12">
        <h1 className="text-4xl font-bold mb-4">Cloud 3D Connect</h1>
        {/* Full content */}
      </div>
    );
  }

  // Add more if/else for other slugs from projectsData...

  // Default: Painter of Light (fixes unclosed <div> at line 452)
  return (
    <div className="min-h-screen bg-black text-white py-12 flex justify-center items-center mt-16 md:mt-24 mb-12">
      <div
        className="w-full flex flex-col lg:flex-row gap-16 items-center justify-center"
        style={{ maxWidth: "1200px", margin: "0 auto", marginBottom: "50px" }}
      >
        {/* Project Title */}
        <h1 className="text-4xl font-bold mb-4">The Painter of Light</h1>

        {/* PDF Link */}
        <a
          href="/drawn.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 underline hover:text-blue-600"
        >
          View PDF
        </a>
      </div>

      {/* Main description */}
      <div className="max-w-4xl mx-auto text-center px-4">
        <span className="text-sm text-gray-400 mb-4">Spring 2025</span>
        <h2 className="text-5xl font-bold mb-8 bg-gradient-to-r from-purple-400 via-pink-500 to-blue-500 bg-clip-text text-transparent">
          The Painter of Light
        </h2>
        <p className="text-xl mb-8 text-gray-300 leading-relaxed">
          Led the design of an immersive exhibit reimagining Thomas Kinkade's legacy by blending his luminous style with symbolic elements reflecting his personal struggles. The multi-sensory experience invites deeper reflection and challenges public perceptions, appealing to both art critics and casual audiences.
        </p>

        {/* Role & Objective */}
        <h3 className="text-2xl font-semibold mb-4 text-white">Role & Objective</h3>
        <ul className="text-left mb-8 text-gray-300">
          <li>• Lead Experience Designer for a conceptual exhibit exploring Kinkade's life and work.</li>
          <li>• Aimed to shift perceptions by contrasting his light-filled aesthetic with personal symbolism.</li>
          <li>• Created an inclusive, thought-provoking, multi-sensory journey.</li>
        </ul>

        {/* Key Actions */}
        <h3 className="text-2xl font-semibold mb-4 text-white">Key Actions</h3>
        <ul className="text-left mb-8 text-gray-300">
          <li>• Researched art history, theology, and immersive exhibit trends.</li>
          <li>• Designed narrative-driven spaces using atmospheric lighting and spatial flow.</li>
          <li>• Modeled spaces in Rhino and textured, used shaders, and rendered in Blender using the Cycles engine.</li>
          <li>• Curated symbolic props to explore the interplay of light and shadow in Kinkade's story.</li>
          <li>• Drew from immersive benchmarks like Meow Wolf and Van Gogh: The Immersive Experience.</li>
          <li>• Balanced visual appeal with emotional and intellectual depth.</li>
        </ul>

        {/* Results & Impact */}
        <h3 className="text-2xl font-semibold mb-4 text-white">Results & Impact</h3>
        <ul className="text-left mb-8 text-gray-300">
          <li>• Developed a conceptual framework for immersive storytelling that repositions Kinkade's work.</li>
          <li>• Created a scalable, multi-sensory exhibit model that resonates with diverse audiences.</li>
          <li>• Demonstrated ability to blend art, narrative, and audience engagement to provoke meaningful reflection.</li>
        </ul>
      </div>

      {/* Dual slideshows: Grid with proper closing </div> */}
      <div className="w-full mt-16 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <ImageSlideshow 
            images={Array.from({ length: 10 }, (_, i) => `/${21 + i}.png`)} 
            altPrefix="Painter of Light detail image set 1" 
          />
          <ImageSlideshow 
            images={Array.from({ length: 10 }, (_, i) => `/${31 + i}.png`)} 
            altPrefix="Painter of Light detail image set 2" 
          />
        </div>
      </div>
    </div>
  );
};

export default ProjectClient;