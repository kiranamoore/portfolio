import ImageSlideshow from "@/components/core/ImageSlideshow";

// Generate array of image paths from 1.png to 45.png, excluding 6.png
const projectImages = [
  ...Array.from({ length: 5 }, (_, i) => `/${i + 1}.png`), // 1.png to 5.png
  ...Array.from({ length: 39 }, (_, i) => `/${i + 7}.png`), // 7.png to 45.png
];

export default function ProjectPage() {
  return (
    <>
      <div className="h-32" />
      <div className="min-h-screen bg-black text-white px-6 py-12 flex justify-center">
        <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-[420px_1fr] gap-12">
          {/* Left column: Main image */}
          <div className="flex flex-col items-start">
            <img
              src={projectImages[0]}
              alt="Painter of Light project thumbnail"
              className="w-full max-w-xs object-contain rounded-lg border border-gray-700 shadow-lg"
            />
          </div>

          {/* Right column: Centered content */}
          <div className="flex flex-col items-center text-center space-y-6">
            <div className="space-y-1">
              <p className="text-sm text-gray-300">Spring 2025</p>
              <h1 className="text-4xl md:text-6xl font-bold">The Painter of Light</h1>
            </div>

            <div className="space-y-4 text-left max-w-2xl w-full">
              <p className="text-base md:text-lg text-gray-200 leading-relaxed mb-8">
                As an innovative designer with a passion for creating immersive, narrative-driven experiences, I specialize in crafting environments that blend art, storytelling, and audience engagement to provoke thought and evoke emotion. My recent research project, "The Painter of Light," exemplifies my ability to design compelling, multi-sensory experiences that resonate with diverse audiences. This project explored the dichotomy between Thomas Kinkade's idyllic, Christian-themed artwork and his complex personal struggles, culminating in a conceptual immersive exhibit. By juxtaposing Kinkade's luminous aesthetic with symbolic elements reflecting his challenges, the exhibit invites viewers to engage with the interplay of light and shadow, both visually and thematically, fostering a deeper understanding of his work.
                <br /><br />
                Drawing on insights from art history, theology, and the growing trend of experiential art, I designed this exhibit to transform perceptions of Kinkade's art, appealing to both art critics and the general public. My approach integrates spatial design, atmospheric lighting, and carefully curated props to guide participants through a narrative journey, aligning with the success of immersive experiences like Meow Wolf and Van Gogh: The Immersive Experience. This project demonstrates my ability to conceptualize and execute designs that balance aesthetic appeal with intellectual depth, creating inclusive and impactful experiences.
              </p>
            </div>
          </div>
        </div>
        {/* Additional images below main content */}
        <div className="w-full max-w-2xl mx-auto flex flex-col items-center mt-12">
          {projectImages.slice(1).map((img, idx) => (
            <img
              key={img}
              src={img}
              alt={`Painter of Light project image ${idx + 2}`}
              className="w-full rounded-lg border border-gray-700 shadow-lg mb-8"
            />
          ))}
        </div>
      </div>
    </>
  );
}
