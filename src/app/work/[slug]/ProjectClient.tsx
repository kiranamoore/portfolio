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
          className="min-h-screen bg-black text-white py-12 flex justify-center items-center mt-16 md:mt-24 mb-12"
          style={{ marginLeft: 'auto', marginRight: 'auto', marginBottom: '50px', maxWidth: '1400px' }}
        >
          <div className="w-full flex flex-col lg:flex-row gap-16 items-center justify-center" style={{maxWidth: '1200px'}}>
            {/* Left column: Video */}
            <div className="flex flex-col items-center justify-center flex-1 h-full">
              <video
                src="/My face demo.mp4"
                controls
                autoPlay
                loop
                muted
                className="w-full max-w-md object-contain rounded-lg border border-gray-700 shadow-lg"
                style={{ minHeight: '320px' }}
              />
              <div className="mt-6 space-y-4">
                <div className="text-center">
                  <img
                    src="/hx3d-snapcode.png"
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
            <div className="flex flex-col items-center text-center space-y-6 flex-1">
              <div className="space-y-1">
                <p className="text-sm text-gray-300">Spring 2025</p>
                <h1 className="text-4xl md:text-6xl font-bold">HyperX Cloud 3 3D Customizer</h1>
              </div>
              <p className="text-lg font-medium">
                Developed an augmented reality customization interface for HX3D's 3D-printed headphone accessories, enabling users to creatively customize accessories with curated color palettes and patterns while streamlining the purchase process.
              </p>
              <div className="space-y-10 text-left max-w-2xl w-full">
                {/* Role & Objective */}
                <section>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="h-6 w-1 rounded bg-gradient-to-b from-pink-500 to-red-400" />
                    <h2 className="text-2xl font-bold text-pink-400 tracking-tight">Role & Objective</h2>
                  </div>
                  <ul className="space-y-2 pl-6 list-none">
                    <li className="flex items-start gap-2"><span className="mt-1 text-pink-400">•</span><span>Served as <span className="font-semibold text-white">Lead AR Developer</span> to create an <span className="font-bold">augmented reality customization interface</span> for HX3D's 3D-printed headphone accessories.</span></li>
                    <li className="flex items-start gap-2"><span className="mt-1 text-pink-400">•</span><span>Aimed to <span className="font-bold">creatively customize accessories</span> in real-time while <span className="font-bold">streamlining the purchase process.</span></span></li>
                    <li className="flex items-start gap-2"><span className="mt-1 text-pink-400">•</span><span>Targeted delivering an <span className="font-bold">interactive, mobile-ready AR experience for personalized product customization.</span></span></li>
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
                    <li className="flex items-start gap-2"><span className="mt-1 text-blue-300">•</span><span>Reduced original models from 3–10M to 20,000 triangles using <span className="font-bold">Blender</span> and BlenderKit for mobile optimization.</span></li>
                    <li className="flex items-start gap-2"><span className="mt-1 text-blue-300">•</span><span>Applied detailed textures optimized for mobile using <span className="font-bold">Substance Painter</span>.</span></li>
                    <li className="flex items-start gap-2"><span className="mt-1 text-blue-300">•</span><span>Built the AR interface with interactive UI components and rendering using <span className="font-bold">Unity (C#)</span>.</span></li>
                    <li className="flex items-start gap-2"><span className="mt-1 text-blue-300">•</span><span>Implemented real-time model visualization and dynamic interaction support through <span className="font-bold">AR Integration</span>.</span></li>
                    <li className="flex items-start gap-2"><span className="mt-1 text-blue-300">•</span><span>Designed scrollable carousel for selecting 3D accessory models and interactive color palette with fine-grained shade selection.</span></li>
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
                    <li className="flex items-start gap-2"><span className="mt-1 text-green-300">•</span><span><span className="font-bold">Successfully simplifies and accelerates the made-to-order customization pipeline</span> for HX3D accessories.</span></li>
                    <li className="flex items-start gap-2"><span className="mt-1 text-green-300">•</span><span>Increases accessory engagement through creative user interaction and real-time customization.</span></li>
                    <li className="flex items-start gap-2"><span className="mt-1 text-green-300">•</span><span><span className="font-bold">Supports future integration with e-commerce systems</span> for seamless fulfillment.</span></li>
                    <li className="flex items-start gap-2"><span className="mt-1 text-green-300">•</span><span>Advances previous AR projects with fully textured, optimized models and complex UI logic.</span></li>
                  </ul>
                </section>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
  if (slug === 'trainar') {
    const trainarImages = [
      '/trainar/8.png',
      '/trainar/9.png',
      '/trainar/10.png',
      '/trainar/11.png',
      '/trainar/13.png',
      '/trainar/14.png',
      '/trainar/15.png',
      '/trainar/16.png',
      '/trainar/17.png',
    ];
    return (
      <>
        <div className="h-32" />
        <div
          className="min-h-screen bg-black text-white py-12 flex justify-center mt-16 md:mt-24 mb-12"
          style={{ marginLeft: '100px', marginRight: '100px', marginBottom: '50px' }}
        >
          <div className="max-w-full w-full grid grid-cols-1 lg:grid-cols-[900px_1fr] gap-16">
            {/* Left column: Video on top, slideshow below */}
            <div className="flex flex-col items-start w-full">
              <video
                src="/trainar/12.mp4"
                controls
                autoPlay
                loop
                muted
                className="w-full max-w-4xl aspect-[4/3] object-contain rounded-lg border border-gray-700 shadow-lg mb-6"
              />
              <div className="w-full">
                <ImageSlideshow
                  images={trainarImages}
                  altPrefix="TRAINAR project image"
                />
              </div>
            </div>
            {/* Right column: Centered content */}
            <div className="flex flex-col items-center text-center space-y-6">
              <div className="space-y-1">
                <p className="text-sm text-gray-300">Spring 2024</p>
                <h1 className="text-4xl md:text-6xl font-bold">TRAINAR</h1>
              </div>
              <p className="text-lg font-medium">
                Collaborated with a team of USC Iovine and Young Academy students to develop TrainAR, an <b>augmented reality fitness concept for Snapchat's AR platform.</b> designed to integrate gym training guidance into their AR platform.
              </p>
              <div className="space-y-10 text-left max-w-2xl w-full">
                {/* Role & Objective */}
                <section>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="h-6 w-1 rounded bg-gradient-to-b from-pink-500 to-red-400" />
                    <h2 className="text-2xl font-bold text-pink-400 tracking-tight">Role & Objective</h2>
                  </div>
                  <ul className="space-y-2 pl-6 list-none">
                    <li className="flex items-start gap-2"><span className="mt-1 text-pink-400">•</span><span>Served as <span className="font-semibold text-white">Lead AR Developer</span> to develop an augmented reality fitness concept for Snapchat's AR platform.</span></li>
                    <li className="flex items-start gap-2"><span className="mt-1 text-pink-400">•</span><span>Aimed to enhance workout safety and form correction by using AR to place a digital trainer in the user's gym space.</span></li>
                    <li className="flex items-start gap-2"><span className="mt-1 text-pink-400">•</span><span>Targeted providing real-time visual demonstrations of proper exercise techniques for safer, more effective workouts.</span></li>
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
                    <li className="flex items-start gap-2"><span className="mt-1 text-blue-300">•</span><span>Built the interactive AR lens demo using <span className="font-bold">Lens Studio</span> for Snapchat integration.</span></li>
                    <li className="flex items-start gap-2"><span className="mt-1 text-blue-300">•</span><span>Designed AR trainer overlay that positions a digital trainer in the user's environment to demonstrate correct form and movement.</span></li>
                    <li className="flex items-start gap-2"><span className="mt-1 text-blue-300">•</span><span>Implemented <b>real-time visual guidance to help users perform exercises safely</b> and correctly.</span></li>
                    <li className="flex items-start gap-2"><span className="mt-1 text-blue-300">•</span><span>Collaborated with a multidisciplinary student team to ideate, design, and develop the experience.</span></li>
                    <li className="flex items-start gap-2"><span className="mt-1 text-blue-300">•</span><span>Developed an interactive lens prototype as part of the pitch to Snapchat.</span></li>
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
                    <li className="flex items-start gap-2"><span className="mt-1 text-green-300">•</span><span>Successfully <b>promotes safer, more effective workouts</b> by reducing the risk of injury through real-time form correction.</span></li>
                    <li className="flex items-start gap-2"><span className="mt-1 text-green-300">•</span><span>Introduces <b>AR as a valuable tool for fitness</b> and personal training in health and wellness sectors.</span></li>
                    <li className="flex items-start gap-2"><span className="mt-1 text-green-300">•</span><span>Explores new use cases for Snapchat's AR capabilities beyond entertainment and social media.</span></li>
                    <li className="flex items-start gap-2"><span className="mt-1 text-green-300">•</span><span>Delivered a lens demo completed and functional in Lens Studio, ready for further development and refinement.</span></li>
                  </ul>
                </section>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
  if (slug === 'meta-alchemy') {
    return (
      <>
        <div className="h-32" />
        <div
          className="min-h-screen bg-black text-white py-12 flex justify-center items-center mt-16 md:mt-24 mb-12"
          style={{ marginLeft: 'auto', marginRight: 'auto', marginBottom: '50px', maxWidth: '1400px' }}
        >
          <div className="w-full flex flex-col lg:flex-row gap-16 items-center justify-center" style={{maxWidth: '1200px'}}>
            {/* Left column: Slideshow */}
            <div className="flex flex-col items-center justify-center flex-1 w-full min-w-[400px] max-w-[700px]">
              <ImageSlideshow
                images={projectImages}
                altPrefix="Meta Alchemy project image"
              />
            </div>
            {/* Right column: Centered content */}
            <div className="flex flex-col items-center text-center space-y-6 flex-1 min-w-[320px] max-w-[520px]">
              <div className="space-y-1">
                <p className="text-sm text-gray-300">Spring 2025</p>
                <h1 className="text-4xl md:text-6xl font-bold">Meta Alchemy</h1>
              </div>
              <p className="text-lg text-gray-200 mt-2">
                Meta Alchemy is a mixed reality prototype for Meta Quest 3 that empowers users to creatively combine virtual elements in a 3D space, blending combinatorial gameplay with intuitive spatial interactions.
              </p>
              <div className="space-y-10 text-left max-w-2xl w-full">
                {/* Role & Objective */}
                <section>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="h-6 w-1 rounded bg-gradient-to-b from-pink-500 to-red-400" />
                    <h2 className="text-2xl font-bold text-pink-400 tracking-tight">Role & Objective</h2>
                  </div>
                  <ul className="space-y-2 pl-6 list-none">
                    <li className="flex items-start gap-2"><span className="mt-1 text-pink-400">•</span><span>Served as <span className="font-semibold text-white">Lead Mixed Reality Developer</span> to design and develop a prototype for Meta Quest 3.</span></li>
                    <li className="flex items-start gap-2"><span className="mt-1 text-pink-400">•</span><span>Aimed to enable users to combine virtual elements in an interactive 3D space, inspired by Little Alchemy's creativity-driven gameplay.</span></li>
                    <li className="flex items-start gap-2"><span className="mt-1 text-pink-400">•</span><span>Targeted fostering user creativity and exploration through combinatorial play in mixed reality.</span></li>
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
                    <li className="flex items-start gap-2"><span className="mt-1 text-blue-300">•</span><span>Developed for spatial computing using <span className="font-bold">Unity</span> with high-performance rendering and C# for interaction logic.</span></li>
                    <li className="flex items-start gap-2"><span className="mt-1 text-blue-300">•</span><span>Utilized <span className="font-bold">Meta Quest 3 SDK</span> for spatial tracking, controller input, and passthrough functionality.</span></li>
                    <li className="flex items-start gap-2"><span className="mt-1 text-blue-300">•</span><span>Created and optimized 3D assets using <span className="font-bold">Blender</span> for interactive use in mixed reality.</span></li>
                    <li className="flex items-start gap-2"><span className="mt-1 text-blue-300">•</span><span>Designed a 3D sandbox-style environment with drag-and-drop virtual elements and real-time feedback.</span></li>
                    <li className="flex items-start gap-2"><span className="mt-1 text-blue-300">•</span><span>Optimized spatial interactions based on headset and controller tracking for intuitive user experience.</span></li>
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
                    <li className="flex items-start gap-2"><span className="mt-1 text-green-300">•</span><span>Delivered a functional prototype deployed on Meta Quest 3 hardware with responsive interactions and platform-optimized assets.</span></li>
                    <li className="flex items-start gap-2"><span className="mt-1 text-green-300">•</span><span>Successfully demonstrated the potential for educational or game-like MR applications on next-gen headsets.</span></li>
                    <li className="flex items-start gap-2"><span className="mt-1 text-green-300">•</span><span>Established a foundation for future combinatorial AR/VR content with modular design for extensibility.</span></li>
                    <li className="flex items-start gap-2"><span className="mt-1 text-green-300">•</span><span>Showcased system-level performance optimization and intuitive MR design thinking for spatial computing.</span></li>
                  </ul>
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
        className="min-h-screen bg-black text-white py-12 flex justify-center items-center mt-16 md:mt-24 mb-12"
        style={{ marginLeft: 'auto', marginRight: 'auto', marginBottom: '50px', maxWidth: '1400px' }}
      >
        <div className="w-full flex flex-col lg:flex-row gap-16 items-center justify-center" style={{maxWidth: '1200px'}}>
          {/* Left column: Large Slideshow */}
          <div className="flex flex-col items-center justify-center flex-1 w-full min-w-[400px] max-w-[700px]">
            <ImageSlideshow
              images={projectImages}
              altPrefix="Painter of Light project image"
            />
          </div>
          {/* Right column: Centered content */}
          <div className="flex flex-col items-center text-center space-y-6 flex-1 min-w-[320px] max-w-[520px]">
            <div className="space-y-1">
              <p className="text-sm text-gray-300">Spring 2025</p>
              <h1 className="text-4xl md:text-6xl font-bold">The Painter of Light</h1>
            </div>
            <p className="text-lg text-gray-200 mt-2">
              Led the design of an immersive exhibit reimagining Thomas Kinkade's legacy by blending his luminous style with symbolic elements reflecting his personal struggles. The multi-sensory experience invites deeper reflection and challenges public perceptions, appealing to both art critics and casual audiences.
            </p>
            <div className="space-y-10 text-left max-w-full w-full">
              {/* Role & Objective */}
              <section>
                <div className="flex items-center gap-3 mb-2">
                  <span className="h-6 w-1 rounded bg-gradient-to-b from-pink-500 to-red-400" />
                  <h2 className="text-2xl font-bold text-pink-400 tracking-tight">Role & Objective</h2>
                </div>
                <ul className="space-y-2 pl-6 list-none">
                  <li className="flex items-start gap-2"><span className="mt-1 text-pink-400">•</span><span>Lead Experience Designer for a <span className="font-bold">conceptual exhibit exploring Kinkade's life and work.</span></span></li>
                  <li className="flex items-start gap-2"><span className="mt-1 text-pink-400">•</span><span>Aimed to shift perceptions by contrasting his light-filled aesthetic with personal symbolism.</span></li>
                  <li className="flex items-start gap-2"><span className="mt-1 text-pink-400">•</span><span>Created an inclusive, thought-provoking, multi-sensory journey.</span></li>
                </ul>
              </section>
              <div className="border-t border-gray-700 my-6" />
              {/* Key Actions */}
              <section>
                <div className="flex items-center gap-3 mb-2">
                  <span className="h-6 w-1 rounded bg-gradient-to-b from-blue-400 to-cyan-400" />
                  <h2 className="text-2xl font-bold text-blue-300 tracking-tight">Key Actions</h2>
                </div>
                <ul className="space-y-2 pl-6 list-none">
                  <li className="flex items-start gap-2"><span className="mt-1 text-blue-300">•</span><span>Researched art history, theology, and immersive exhibit trends.</span></li>
                  <li className="flex items-start gap-2"><span className="mt-1 text-blue-300">•</span><span>Designed <span className="font-bold">narrative-driven spaces</span> using atmospheric lighting and spatial flow.</span></li>
                  <li className="flex items-start gap-2"><span className="mt-1 text-blue-300">•</span><span>Curated symbolic props to explore the interplay of light and shadow in Kinkade's story.</span></li>
                  <li className="flex items-start gap-2"><span className="mt-1 text-blue-300">•</span><span>Drew from immersive benchmarks like Meow Wolf and Van Gogh: The Immersive Experience.</span></li>
                  <li className="flex items-start gap-2"><span className="mt-1 text-blue-300">•</span><span>Balanced visual appeal with emotional and intellectual depth.</span></li>
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
                  <li className="flex items-start gap-2"><span className="mt-1 text-green-300">•</span><span>Developed a <span className="font-bold">conceptual framework for immersive storytelling that repositions Kinkade's work.</span></span></li>
                  <li className="flex items-start gap-2"><span className="mt-1 text-green-300">•</span><span>Created a scalable, multi-sensory exhibit model that resonates with diverse audiences.</span></li>
                  <li className="flex items-start gap-2"><span className="mt-1 text-green-300">•</span><span>Demonstrated ability to <span className="font-bold">blend art, narrative, and audience engagement to provoke meaningful reflection.</span></span></li>
                </ul>
              </section>
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