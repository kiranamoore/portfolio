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
        className="min-h-screen bg-black text-white py-12 flex justify-center items-center mt-16 md:mt-24 mb-12"
        style={{ marginLeft: 'auto', marginRight: 'auto', marginBottom: '50px', maxWidth: '1400px' }}
      >
        <div className="w-full flex flex-col lg:flex-row gap-16 items-center justify-center" style={{maxWidth: '1200px'}}>
          {/* Left column: Two slideshows */}
          <div className="flex flex-col items-center justify-center flex-1 w-full gap-8">
            <ImageSlideshow images={imagesProject3} altPrefix="Weaving Spaces Project 3" />
            <ImageSlideshow images={imagesProject4} altPrefix="Weaving Spaces Project 4" />
          </div>
          {/* Right column: Content */}
          <div className="flex flex-col items-center text-center space-y-6 flex-1">
            <div className="space-y-1">
              <p className="text-sm text-gray-300">Fall 2022</p>
              <h1 className="text-4xl md:text-6xl font-bold">Weaving Spaces</h1>
            </div>
            <p className="text-lg text-gray-200 mt-2">
              Led the architectural design and concept development of Weaving Spaces, translating two-dimensional linework into dynamic, interwoven forms that create layered environments blending structure and landscape.
            </p>
            <div className="space-y-10 text-left max-w-2xl w-full">
              {/* Role & Objective */}
              <section>
                <div className="flex items-center gap-3 mb-2">
                  <span className="h-6 w-1 rounded bg-gradient-to-b from-pink-500 to-red-400" />
                  <h2 className="text-2xl font-bold text-pink-400 tracking-tight">Role & Objective</h2>
                </div>
                <ul className="space-y-2 pl-6 list-none">
                  <li className="flex items-start gap-2"><span className="mt-1 text-pink-400">•</span><span>Served as <b>Lead Architectural Designer</b> to explore weaving as both a conceptual and structural strategy in architectural form-making.</span></li>
                  <li className="flex items-start gap-2"><span className="mt-1 text-pink-400">•</span><span>Aimed to transform <b>abstract graphic studies</b> into spatial, three-dimensional designs that encourage movement and interaction.</span></li>
                  <li className="flex items-start gap-2"><span className="mt-1 text-pink-400">•</span><span>Focused on evolving weaving into a <b>cohesive architectural language</b> adaptable across multiple scales.</span></li>
                </ul>
              </section>
              <div className="border-t border-gray-700 my-6" />
              {/* Actions Taken */}
              <section>
                <div className="flex items-center gap-3 mb-2">
                  <span className="h-6 w-1 rounded bg-gradient-to-b from-blue-400 to-cyan-400" />
                  <h2 className="text-2xl font-bold text-blue-300 tracking-tight">Actions Taken</h2>
                </div>
                <ul className="space-y-2 pl-6 list-none">
                  <li className="flex items-start gap-2"><span className="mt-1 text-blue-300">•</span><span>Developed <b>figure-ground abstractions</b> from line drawings of a hair straightener, experimenting with rotations and color shifts to analyze spatial relationships.</span></li>
                  <li className="flex items-start gap-2"><span className="mt-1 text-blue-300">•</span><span>Created <b>physical models</b> using interlaced planes that intersect at varied elevations and curvatures.</span></li>
                  <li className="flex items-start gap-2"><span className="mt-1 text-blue-300">•</span><span>Scaled weaving concepts into <b>architectural forms</b> featuring arching, dipping planes and elevated extensions that visually connect site elements.</span></li>
                  <li className="flex items-start gap-2"><span className="mt-1 text-blue-300">•</span><span>Designed <b>habitable spaces</b> where woven planes blur boundaries between structure and landscape, fostering layered circulation and exploration.</span></li>
                </ul>
              </section>
              <div className="border-t border-gray-700 my-6" />
              {/* Results & Impact */}
              <section>
                <div className="flex items-center gap-3 mb-2">
                  <span className="h-6 w-1 rounded bg-gradient-to-b from-green-400 to-emerald-500" />
                  <h2 className="text-2xl font-bold text-green-300 tracking-tight">Results & Impact</h2>
                </div>
                <ul className="space-y-2 pl-6 list-none">
                  <li className="flex items-start gap-2"><span className="mt-1 text-green-300">•</span><span>Demonstrated the ability to translate <b>abstract graphic ideas</b> into sophisticated physical and spatial designs.</span></li>
                  <li className="flex items-start gap-2"><span className="mt-1 text-green-300">•</span><span>Established weaving as a <b>formal and structural design tool</b> capable of shaping both space and experience.</span></li>
                  <li className="flex items-start gap-2"><span className="mt-1 text-green-300">•</span><span>Delivered <b>dynamic environments</b> that invite exploration through interconnected forms and visual depth.</span></li>
                  <li className="flex items-start gap-2"><span className="mt-1 text-green-300">•</span><span>Developed a design approach that integrates <b>weaving principles</b> as a flexible method for architectural innovation.</span></li>
                </ul>
              </section>
            </div>
          </div>
        </div>
      </div>
    </>
  );
} 