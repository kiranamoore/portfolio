import Image from "next/image";

const projectImages = [
  "/hero%20render_ps.png",
  // Add more image paths here as you send them
];

export default function ProjectPage() {
  return (
    <main className="bg-black text-white min-h-screen py-12 px-4 md:px-0 flex flex-col items-center">
      <h1 className="text-4xl md:text-6xl font-bold mb-2 text-center">
        The Painter of Light
      </h1>
      <div className="text-lg text-gray-300 mb-6 text-center">Spring 2025</div>
      <div className="max-w-3xl w-full flex flex-col gap-8">
        <p className="text-base md:text-lg text-gray-200 leading-relaxed mb-8">
          As an innovative designer with a passion for creating immersive, narrative-driven experiences, I specialize in crafting environments that blend art, storytelling, and audience engagement to provoke thought and evoke emotion. My recent research project, "The Painter of Light," exemplifies my ability to design compelling, multi-sensory experiences that resonate with diverse audiences. This project explored the dichotomy between Thomas Kinkade's idyllic, Christian-themed artwork and his complex personal struggles, culminating in a conceptual immersive exhibit. By juxtaposing Kinkade's luminous aesthetic with symbolic elements reflecting his challenges, the exhibit invites viewers to engage with the interplay of light and shadow, both visually and thematically, fostering a deeper understanding of his work.
          <br /><br />
          Drawing on insights from art history, theology, and the growing trend of experiential art, I designed this exhibit to transform perceptions of Kinkade's art, appealing to both art critics and the general public. My approach integrates spatial design, atmospheric lighting, and carefully curated props to guide participants through a narrative journey, aligning with the success of immersive experiences like Meow Wolf and Van Gogh: The Immersive Experience. This project demonstrates my ability to conceptualize and execute designs that balance aesthetic appeal with intellectual depth, creating inclusive and impactful experiences.
        </p>
        {projectImages.map((src, idx) => (
          <Image
            key={src}
            src={src}
            alt={`Project image ${idx + 1}`}
            width={1200}
            height={800}
            className="rounded-lg w-full object-cover"
          />
        ))}
        {/* Descriptions and more content will go here */}
      </div>
    </main>
  );
}
