import Link from "next/link";

const featuredProjects = [
  {
    title: "AR Product Customizer",
    company: "HP/HyperX",
    year: 2025,
    slug: "ar-product-customizer",
    thumbnail: "/AR-PRODUCT-CUSTOMIZER-THUMBNAIL.png",
    description: "Real-time 3D headset customization for retail",
    tags: ["Unity", "AR", "3D"],
  },
  {
    title: "Quick Start Guide AR Manual",
    company: "HP/HyperX",
    year: 2025,
    slug: "quick-start-guide-ar-manual",
    thumbnail: "/quick_start_guide_thumbnail.png",
    description: "Paperless AR onboarding experience",
    tags: ["Lens Studio", "UX"],
  },
  {
    title: "Cloud 3D Connect",
    company: "HP/HyperX",
    year: 2025,
    slug: "cloud-3d-connect",
    thumbnail: "/18k tris.png",
    description: "Interactive in-store product showcase",
    tags: ["Unity", "WebGL", "3D"],
  },
  {
    title: "Meta Alchemy",
    company: null,
    year: 2025,
    slug: "meta-alchemy",
    thumbnail: "/meta_alchemy.png",
    description: "Mixed reality creative sandbox for Quest 3",
    tags: ["Unity", "MR", "Quest 3"],
  },
  {
    title: "Nike x LoL Zeri",
    company: null,
    year: 2021,
    slug: "nike-league-of-legends-zeri",
    thumbnail: "/zeri-thumbnail.png",
    description: "Cross-industry fashion gaming collaboration",
    tags: ["Blender", "Animation"],
  },
];

export default function WorkPage() {
  return (
    <div className="min-h-screen bg-[#FAFAFA]">
      {/* Header Section */}
      <section className="hero-gradient pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="max-w-6xl mx-auto px-8 md:px-12">
          <p className="text-[13px] font-medium text-[#667eea] uppercase tracking-wider mb-3">Portfolio</p>
          <h1 className="text-[40px] md:text-[48px] font-bold text-[#1D1D1F] tracking-tight mb-4">
            Selected Work
          </h1>
          <p className="text-[17px] text-[#6E6E73] max-w-2xl">
            A curated collection of projects showcasing my expertise in AR/VR development,
            3D design, and product innovation.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-8 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredProjects.map((project, index) => (
              <Link
                key={project.slug}
                href={`/work/${project.slug}`}
                className="group block"
              >
                <div className={`overflow-hidden rounded-2xl border border-[#E5E5E5]/50 bg-white card-hover h-full ${
                  index === 0 ? 'md:col-span-2' : ''
                }`}>
                  <div className="aspect-[16/10] relative overflow-hidden">
                    <img
                      src={project.thumbnail}
                      alt={project.title}
                      className="w-full h-full object-cover zoom-image"
                    />
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    {/* Arrow indicator */}
                    <div className="absolute bottom-4 right-4 w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                      <svg className="w-5 h-5 text-[#1D1D1F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>
                  <div className="p-8 md:p-10 text-center flex flex-col items-center">
                    {/* Tags */}
                    <div className="flex flex-wrap justify-center gap-3 mb-5">
                      {project.tags.map((tag) => (
                        <span key={tag} className="px-4 py-1.5 text-[11px] font-medium text-[#667eea] bg-[#667eea]/10 rounded-md">{tag}</span>
                      ))}
                    </div>
                    {/* Title */}
                    <h3 className="text-[20px] font-semibold text-[#1D1D1F] mb-4 group-hover:text-[#667eea] transition-colors">
                      {project.title}
                    </h3>
                    {/* Description */}
                    <p className="text-[16px] text-[#6E6E73] mb-4">
                      {project.description}
                    </p>
                    {/* Meta */}
                    <p className="text-[14px] text-[#86868B]">
                      {project.company ? `${project.company} · ` : ""}{project.year}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
