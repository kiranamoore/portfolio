"use client";
import { useParams } from 'next/navigation';
import ImageSlideshow from "@/components/core/ImageSlideshow";

// Generate array of image paths from 1.png to 45.png, excluding 6.png
const projectImages = [
  ...Array.from({ length: 5 }, (_, i) => `/${i + 1}.png`), // 1.png to 5.png
  ...Array.from({ length: 39 }, (_, i) => `/${i + 7}.png`), // 7.png to 45.png
];

export default function ProjectClient() {
  const params = useParams();
  const slug = params?.slug;
  if (slug === 'hyperx-cloud-3-3d-customizer') {
    return (
      <>
        <div className="h-32" />
        <div
          className="min-h-screen bg-black text-white py-12 flex justify-center"
          style={{ marginLeft: '5px', marginRight: '5px' }}
        >
          <div className="max-w-full w-full grid grid-cols-1 lg:grid-cols-[900px_1fr] gap-16">
            {/* Left column: Video */}
            <div className="flex flex-col items-start">
              <video
                src="/My face demo.mp4"
                controls
                autoPlay
                loop
                muted
                className="w-full max-w-md object-contain rounded-lg border border-gray-700 shadow-lg"
              />
              <div className="mt-6 space-y-4">
                <div className="text-center">
                  <img
                    src="/hx3d_snapcode.png"
                    alt="HX3D Snapcode"
                    className="w-full max-w-md mx-auto rounded-lg border border-gray-700 shadow-lg"
                  />
                  <p className="text-sm text-gray-400 mt-2">
                    Scan the snapcode in the Snapchat app to try the lens
                  </p>
                </div>
                <div className="text-center">
                  <a
                    href="https://lens.snap.com/experience/40c4a227-6b11-4635-80c8-2ca9686659e5"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 text-sm font-medium"
                  >
                    Try WebAR Lens (mobile only)
                  </a>
                  <p className="text-xs text-gray-500 mt-1">
                    Click to experience via web browser
                  </p>
                </div>
              </div>
            </div>
            {/* Right column: Centered content */}
            <div className="flex flex-col items-center text-center space-y-6">
              <div className="space-y-1">
                <p className="text-sm text-gray-300">Spring 2025</p>
                <h1 className="text-4xl md:text-6xl font-bold">HyperX Cloud 3 3D Customizer</h1>
                <span className="inline-block px-2 py-1 bg-yellow-500 text-black text-xs font-semibold rounded-full mt-2">
                  Hewlett-Packard / HyperX
                </span>
              </div>
              <p className="text-lg font-medium">
                HX3D AR Customization Tool<br />
                Developed an augmented reality customization interface for HX3D's 3D-printed headphone accessories, enabling users to personalize designs with curated color palettes and patterns.
              </p>
              <div className="space-y-4 text-left max-w-2xl w-full">
                <section>
                  <h2 className="text-xl font-semibold">Goal</h2>
                  <p>
                    Empower customers to creatively customize accessories in real-time while streamlining the purchase process through an interactive, mobile-ready AR experience.
                  </p>
                </section>
                <section>
                  <h2 className="text-xl font-semibold mt-4">Tech Stack</h2>
                  <ul className="list-disc list-inside space-y-1">
                    <li><b>Blender</b> – reduced original models from 3–10M to &lt;10,000 triangles using BlenderKit</li>
                    <li><b>Substance Painter</b> – applied detailed textures optimized for mobile</li>
                    <li><b>Unity (C#)</b> – built the AR interface with interactive UI components and rendering</li>
                    <li><b>AR Integration</b> – real-time model visualization and dynamic interaction support</li>
                  </ul>
                </section>
                <section>
                  <h2 className="text-xl font-semibold mt-4">Interface Design</h2>
                  <ul className="list-disc list-inside space-y-1">
                    <li><b>Top Row</b> – scrollable carousel for selecting 3D accessory models</li>
                    <li><b>Middle Row</b> – interactive color palette with fine-grained shade selection</li>
                    <li><b>Bottom Row</b> – pattern customization with procedurally generated textures</li>
                  </ul>
                </section>
                <section>
                  <h2 className="text-xl font-semibold mt-4">Business Impact</h2>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Simplifies and accelerates the made-to-order customization pipeline</li>
                    <li>Increases accessory engagement through creative user interaction</li>
                    <li>Supports future integration with e-commerce systems for fulfillment</li>
                  </ul>
                </section>
                <section>
                  <h2 className="text-xl font-semibold mt-4">Builds on Past Work</h2>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Advances previous AR projects with fully textured, optimized models</li>
                    <li>Introduces more complex UI logic, such as scrollable galleries and dynamic button states</li>
                    <li>Lays groundwork for integration into the upcoming Cloud 3D Connect experience</li>
                  </ul>
                </section>
                <section>
                  <h2 className="text-xl font-semibold mt-4">Project Status</h2>
                  <p>
                    Completed prototype demonstrating full customization workflow and optimized mobile performance. Features will be integrated into the next iteration of Cloud 3D Connect.
                  </p>
                </section>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
  // Default: Painter of Light
  return (
    <>
      <div className="h-32" />
      <div
        className="min-h-screen bg-black text-white py-12 flex justify-center"
        style={{ marginLeft: '5px', marginRight: '5px' }}
      >
        <div className="max-w-full w-full grid grid-cols-1 lg:grid-cols-[900px_1fr] gap-16">
          {/* Left column: Large Slideshow */}
          <div className="flex flex-col items-start w-full">
            <div className="w-full">
              <ImageSlideshow
                images={projectImages}
                altPrefix="Painter of Light project image"
              />
            </div>
          </div>
          {/* Right column: Centered content */}
          <div className="flex flex-col items-center text-center space-y-6 justify-center">
            <div className="space-y-1">
              <p className="text-sm text-gray-300">Spring 2025</p>
              <h1 className="text-4xl md:text-6xl font-bold">The Painter of Light</h1>
            </div>
            <div className="space-y-4 text-left w-full max-w-2xl mx-auto px-4">
              <p className="text-base md:text-lg text-gray-200 leading-relaxed mb-8">
                As an innovative designer with a passion for creating immersive, narrative-driven experiences, I specialize in crafting environments that blend art, storytelling, and audience engagement to provoke thought and evoke emotion. My recent research project, "The Painter of Light," exemplifies my ability to design compelling, multi-sensory experiences that resonate with diverse audiences. This project explored the dichotomy between Thomas Kinkade's idyllic, Christian-themed artwork and his complex personal struggles, culminating in a conceptual immersive exhibit. By juxtaposing Kinkade's luminous aesthetic with symbolic elements reflecting his challenges, the exhibit invites viewers to engage with the interplay of light and shadow, both visually and thematically, fostering a deeper understanding of his work.
                <br /><br />
                Drawing on insights from art history, theology, and the growing trend of experiential art, I designed this exhibit to transform perceptions of Kinkade's art, appealing to both art critics and the general public. My approach integrates spatial design, atmospheric lighting, and carefully curated props to guide participants through a narrative journey, aligning with the success of immersive experiences like Meow Wolf and Van Gogh: The Immersive Experience. This project demonstrates my ability to conceptualize and execute designs that balance aesthetic appeal with intellectual depth, creating inclusive and impactful experiences.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Dual slideshows below the main content, full width */}
      <div className="w-full flex flex-col md:flex-row gap-8 justify-center mt-12">
        <div className="flex-1 w-full">
          <ImageSlideshow
            images={Array.from({length: 8}, (_,i) => `/${21 + i}.png`)}
            altPrefix="Painter of Light detail image set 1"
          />
        </div>
        <div className="flex-1 w-full">
          <ImageSlideshow
            images={["/31.png", "/32.png", "/30.png", "/15.png"]}
            altPrefix="Painter of Light detail image set 2"
          />
        </div>
      </div>
    </>
  );
} 