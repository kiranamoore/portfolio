"use client";

import ImageSlideshow from "@/components/core/ImageSlideshow";

const imagesProject3 = [
  "/weaving/weaving-spaces-01.png",
  "/weaving/weaving-spaces-02.png",
];
const imagesProject4 = [
  "/weaving/project-4-01.png",
  "/weaving/project-4-02.png",
  "/weaving/project-4-03.png",
  "/weaving/project-4-04.png",
  "/weaving/project-4-05.png",
  "/weaving/project-4-06.png",
  "/weaving/project-4-07.png",
];

export default function WeavingSpacesPage() {
  return (
    <>
      <div className="h-32" />
      <div
        className="min-h-screen bg-black text-white py-12 flex justify-center mt-16 md:mt-24 mb-12"
        style={{ marginLeft: '100px', marginRight: '100px', marginBottom: '50px' }}
      >
        <div className="max-w-full w-full grid grid-cols-1 lg:grid-cols-[600px_1fr] gap-16 items-center text-white">
          {/* Left column: Two slideshows */}
          <div className="flex flex-col items-start w-full gap-8">
            <ImageSlideshow images={imagesProject3} altPrefix="Weaving Spaces Project 3" />
            <ImageSlideshow images={imagesProject4} altPrefix="Weaving Spaces Project 4" />
          </div>
          {/* Right column: Content */}
          <div className="flex flex-col items-center text-center space-y-6 justify-center text-white">
            <div className="space-y-1 text-white">
              <p className="text-sm text-white">Fall 2022</p>
              <h1 className="text-4xl md:text-6xl font-bold text-white">Weaving Spaces</h1>
            </div>
            <div className="space-y-8 text-left max-w-2xl w-full text-white">
              {/* Project 3 */}
              <section>
                <h2 className="text-2xl font-bold mb-2 text-white">Project 3 – Weaving Planes: Abstracted Form Exploration</h2>
                <p className="text-lg font-medium text-white mb-4">
                  This project began by abstracting the figure-ground relationship from line drawings of a hair straightener. The process emphasized weaving as both a conceptual and structural technique.
                </p>
                <h3 className="text-xl font-semibold mb-2 text-red-400 text-white" style={{color: 'white'}}>Key Features</h3>
                <ul className="space-y-2 list-disc pl-5 text-white">
                  <li className="text-white"><strong className="text-white">Figure-Ground Abstraction:</strong> Developed layered figure-ground drawings from the abstracted line work of a hair straightener, progressively rotating and recoloring them to emphasize relationships between curves and straight lines.</li>
                  <li className="text-white"><strong className="text-white">Weaving Technique:</strong> Designed the physical model using interlaced planes that weave through one another at multiple points, creating varied elevations and subtle curvatures.</li>
                  <li className="text-white"><strong className="text-white">Structural Cuts:</strong> Incorporated precise cuts into the model that align with the original figure-ground linework, further reinforcing the visual and spatial weaving effect.</li>
                  <li className="text-white"><strong className="text-white">Curved Tension:</strong> Generated arched forms through the physical demands of the woven planes, creating an organic tension and layered dimensionality throughout the model.</li>
                </ul>
                <h3 className="text-xl font-semibold mb-2 text-red-400 text-white" style={{color: 'white'}}>Design Focus</h3>
                <ul className="space-y-2 list-disc pl-5 text-white">
                  <li className="text-white">Translating abstract two-dimensional linework into spatial, three-dimensional form</li>
                  <li className="text-white">Exploring weaving as a formal, structural, and conceptual design tool</li>
                  <li className="text-white">Creating subtle curvatures through physical intersections rather than imposed form</li>
                </ul>
                <h3 className="text-xl font-semibold mb-2 text-red-400 text-white" style={{color: 'white'}}>Project Impact</h3>
                <p className="text-white">
                  This project demonstrates my ability to develop complex physical forms from abstract graphic studies, applying weaving as a method to create spatial depth, structural variation, and visual movement.
                </p>
              </section>
              <div className="h-6" />
              {/* Project 4 */}
              <section>
                <h2 className="text-2xl font-bold mb-2 text-white">Project 4 – Weaving Habitable Landscapes</h2>
                <p className="text-lg font-medium text-white mb-4">
                  Building on a selected chunk of the site from Project 3, this project explored weaving at the architectural scale, embedding two structures into the landscape to create an inhabitable, multi-layered environment.
                </p>
                <h3 className="text-xl font-semibold mb-2 text-red-400 text-white" style={{color: 'white'}}>Key Features</h3>
                <ul className="space-y-2 list-disc pl-5 text-white">
                  <li className="text-white"><strong className="text-white">Weaving as Architecture:</strong> Extended the weaving concept into the built environment by creating structures with arching and dipping planes that visually and physically interlace with the site.</li>
                  <li className="text-white"><strong className="text-white">Vertical Displacement:</strong> Designed varying vertical heights across woven volumes to reinforce the sense of planes weaving under, over, and behind each other.</li>
                  <li className="text-white"><strong className="text-white">Elevated Extensions:</strong> Integrated walls that rise beyond the roofline to complete arching gestures and visually connect different site elements, enhancing shared spaces and circulation paths.</li>
                  <li className="text-white"><strong className="text-white">Spatial Interplay:</strong> Created habitable spaces that blur the boundary between structure and landscape, maintaining the visual language of woven planes throughout the design.</li>
                </ul>
                <h3 className="text-xl font-semibold mb-2 text-red-400 text-white" style={{color: 'white'}}>Design Focus</h3>
                <ul className="space-y-2 list-disc pl-5 text-white">
                  <li className="text-white">Transforming abstract weaving into habitable, architectural forms</li>
                  <li className="text-white">Emphasizing movement, layered circulation, and interconnected spaces</li>
                  <li className="text-white">Maintaining a visual and structural continuity between site and architecture</li>
                </ul>
                <h3 className="text-xl font-semibold mb-2 text-red-400 text-white" style={{color: 'white'}}>Project Impact</h3>
                <p className="text-white">
                  This project showcases my ability to evolve formal studies into architectural solutions, using weaving as a cohesive design language that shapes both space and experience. It emphasizes my interest in creating dynamic, interwoven environments that encourage exploration and interaction.
                </p>
              </section>
            </div>
          </div>
        </div>
      </div>
    </>
  );
} 