import Link from "next/link";
import HeroBackground from "@/components/HeroBackground";

// Hero spotlight project
const spotlightProject = {
  title: "AR Shopping Experience",
  company: "HP/HyperX",
  year: "May 2025 – Aug 2025",
  slug: "hyperx",
  thumbnail: "/AR-PRODUCT-CUSTOMIZER-THUMBNAIL.png",
  description: "Pioneered HyperX's first augmented reality e-commerce experience, positioning the brand ahead of Razer and Logitech. Presented directly to the CEO, earning executive buy-in and driving company-wide AR investment.",
  tags: ["Unity", "Blender", "Lens Studio", "WebAR"],
  highlights: ["99.7% mesh optimization", "CEO presentation", "First in gaming hardware"],
};

// Other featured projects
const featuredProjects = [
  {
    title: "Vape Reduction Initiative",
    company: "IYA",
    year: "Nov 2025 – Dec 2025",
    slug: "vape-reduction",
    thumbnail: "/placeholder-vape.svg",
    description: "Health-focused behavioral design project",
    tags: ["UX Research", "Behavior Design"],
  },
  {
    title: "Nogi Nogi",
    company: null,
    year: "Sep 2025 – Dec 2025",
    slug: "nogi-nogi",
    thumbnail: "/placeholder-nogi.svg",
    description: "Physical product - carabiner art pose doll",
    tags: ["Product Design", "Physical"],
  },
  {
    title: "Future Mobility Concept",
    company: "IYA Academy",
    year: "Feb 2025 – Mar 2025",
    slug: "honda",
    thumbnail: "/honda/thumbnail.png",
    description: "Designing a Gen-Z car experience centered on human connection",
    tags: ["UX Design", "Unity", "AR/MR"],
  },
  {
    title: "Sustainability & Community",
    company: "ARUP",
    year: "Aug 2024 – Dec 2024",
    slug: "arup",
    thumbnail: "/placeholder-arup.svg",
    description: "IYA sustainability and community impact project",
    tags: ["Sustainability", "Community"],
  },
];

export default function Home() {
  return (
    <div className="min-h-screen w-full">
      {/* Hero Section */}
      <section className="hero-gradient w-full min-h-screen relative">
        <HeroBackground />
        <div className="min-h-screen w-full flex flex-col items-center justify-center px-8 md:px-16 lg:px-24 relative z-10">
          <div className="w-full max-w-[800px] text-center mx-auto">
            {/* Main headline */}
            <h1 className="text-[32px] sm:text-[40px] md:text-[48px] lg:text-[56px] font-bold text-[#1D1D1F] tracking-tight leading-[1.15]" style={{ marginBottom: '40px' }}>
              Designing immersive{" "}
              <span className="accent-gradient">digital experiences</span>{" "}
              that bridge worlds
            </h1>

            {/* Subheadline */}
            <p className="text-[16px] md:text-[18px] text-[#6E6E73] leading-relaxed w-full text-center" style={{ marginBottom: '48px' }}>
              Product Designer specializing in AR/VR, 3D interactions, and spatial computing.<br />
              Currently studying at <span className="text-[#1D1D1F] font-medium">USC Iovine and Young Academy</span> with previous product design experience at{" "}
              <span className="text-[#1D1D1F] font-medium">HP</span>, <span className="text-[#1D1D1F] font-medium">HyperX</span>, and other leading companies.
            </p>

          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 animate-bounce">
          <span className="text-[12px] text-[#86868B] uppercase tracking-widest">See projects</span>
          <svg className="w-6 h-6 text-[#86868B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </section>

      {/* Selected Work Section */}
      <section className="py-24 md:py-32 bg-white w-full">
        <div className="w-full flex flex-col items-center px-8 md:px-16 lg:px-24">
          {/* Section header */}
          <div className="text-center w-full" style={{ paddingTop: '60px', marginBottom: '80px' }}>
            <p className="text-[13px] font-semibold text-[#667eea] uppercase tracking-wider mb-4">Portfolio</p>
            <h2 className="text-[28px] md:text-[36px] font-bold text-[#1D1D1F] tracking-tight">
              Selected Work
            </h2>
          </div>

          {/* Spotlight Project - Full Width Hero */}
          <Link
            href={`/work/${spotlightProject.slug}`}
            className="group block w-full max-w-[1100px] mb-24"
          >
            <div className="overflow-hidden rounded-2xl bg-gradient-to-br from-[#667eea]/95 to-[#764ba2] border border-[#667eea]/30 card-hover relative">
              {/* Featured badge */}
              <div className="absolute top-8 left-8 z-10">
                <span className="inline-flex items-center bg-white text-[#667eea] text-[11px] font-semibold uppercase tracking-wider rounded-full shadow-lg" style={{ padding: '8px 16px', gap: '8px' }}>
                  <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                  Featured
                </span>
              </div>

              <div className="flex flex-col lg:flex-row">
                {/* Image side */}
                <div className="lg:w-1/2 aspect-[16/10] lg:aspect-auto relative overflow-hidden">
                  <img
                    src={spotlightProject.thumbnail}
                    alt={spotlightProject.title}
                    className="w-full h-full object-cover zoom-image"
                  />
                </div>

                {/* Content side */}
                <div className="lg:w-1/2 flex flex-col justify-center" style={{ padding: '40px 32px 48px 32px' }}>
                  {/* Tags - centered */}
                  <div className="flex flex-wrap justify-center gap-2 mb-6">
                    {spotlightProject.tags.map((tag) => (
                      <span key={tag} className="inline-block font-medium text-white bg-white/20 rounded-lg" style={{ padding: '5px 12px', fontSize: '11px' }}>{tag}</span>
                    ))}
                  </div>

                  {/* Title - centered */}
                  <h3 className="text-[24px] lg:text-[32px] font-bold text-white mb-2 group-hover:text-white/90 transition-colors text-center">
                    {spotlightProject.title}
                  </h3>

                  {/* Company & Year - centered */}
                  <p className="text-[14px] font-semibold text-white/80 text-center" style={{ marginBottom: '40px' }}>
                    {spotlightProject.company} · {spotlightProject.year}
                  </p>

                  {/* Description */}
                  <p className="text-white/80 leading-relaxed text-center" style={{ fontSize: '15px', marginBottom: '32px' }}>
                    {spotlightProject.description}
                  </p>

                  {/* CTA */}
                  <div className="flex items-center justify-center gap-2 text-[14px] font-semibold text-white group-hover:text-white/80 transition-colors">
                    View project
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </Link>

          {/* Other Projects Grid */}
          <div className="w-full max-w-[1100px] grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10" style={{ marginTop: '60px', paddingBottom: '60px' }}>
            {featuredProjects.map((project) => (
              <Link
                key={project.slug}
                href={`/work/${project.slug}`}
                className="group block"
              >
                <div className="overflow-hidden rounded-2xl bg-white border border-[#E5E5E5] card-hover">
                  <div className="aspect-[16/10] relative overflow-hidden bg-[#F5F5F7]">
                    <img
                      src={project.thumbnail}
                      alt={project.title}
                      className="w-full h-full object-cover zoom-image"
                    />
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    {/* Arrow indicator */}
                    <div className="absolute bottom-4 right-4 w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0 shadow-lg">
                      <svg className="w-5 h-5 text-[#1D1D1F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>
                  <div className="px-8 md:px-10 text-center flex flex-col items-center" style={{ paddingTop: '24px', paddingBottom: '24px' }}>
                    {/* Tags */}
                    <div className="flex flex-wrap justify-center gap-3 mb-12">
                      {project.tags.map((tag) => (
                        <span key={tag} className="inline-block font-medium text-[#667eea] bg-[#667eea]/10 rounded-lg" style={{ padding: '5px 12px', fontSize: '11px' }}>{tag}</span>
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

      {/* Skills/Expertise Section */}
      <section className="py-32 md:py-44 bg-[#FAFAFA] w-full">
        <div className="w-full flex flex-col items-center px-8 md:px-16 lg:px-24">
          <div className="text-center w-full" style={{ paddingTop: '60px', marginBottom: '60px' }}>
            <h2 className="text-[28px] md:text-[36px] font-bold text-[#1D1D1F] tracking-tight">
              Expertise
            </h2>
          </div>

          <div className="w-full max-w-[1000px] grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8" style={{ paddingBottom: '60px' }}>
            {/* Skill 1 */}
            <div style={{ paddingTop: '48px', paddingBottom: '48px' }} className="px-8 bg-white rounded-2xl border border-[#E5E5E5] hover:shadow-lg hover:border-[#667eea]/30 transition-all flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#667eea] to-[#764ba2] flex items-center justify-center shadow-lg shadow-[#667eea]/20" style={{ marginBottom: '32px' }}>
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 style={{ marginBottom: '24px' }} className="text-[18px] font-semibold text-[#1D1D1F]">Spatial Computing</h3>
              <p className="text-[15px] text-[#6E6E73] leading-relaxed">
                Designing immersive AR/VR experiences for Meta Quest, mobile AR, and WebXR platforms.
              </p>
            </div>

            {/* Skill 2 */}
            <div style={{ paddingTop: '48px', paddingBottom: '48px' }} className="px-8 bg-white rounded-2xl border border-[#E5E5E5] hover:shadow-lg hover:border-[#f093fb]/30 transition-all flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#f093fb] to-[#f5576c] flex items-center justify-center shadow-lg shadow-[#f093fb]/20" style={{ marginBottom: '32px' }}>
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5" />
                </svg>
              </div>
              <h3 style={{ marginBottom: '24px' }} className="text-[18px] font-semibold text-[#1D1D1F]">3D Design & Animation</h3>
              <p className="text-[15px] text-[#6E6E73] leading-relaxed">
                Creating optimized 3D assets, character animations, and real-time visuals using Blender and Unity.
              </p>
            </div>

            {/* Skill 3 */}
            <div style={{ paddingTop: '48px', paddingBottom: '48px' }} className="px-8 bg-white rounded-2xl border border-[#E5E5E5] hover:shadow-lg hover:border-[#4facfe]/30 transition-all flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#4facfe] to-[#00f2fe] flex items-center justify-center shadow-lg shadow-[#4facfe]/20" style={{ marginBottom: '32px' }}>
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                </svg>
              </div>
              <h3 style={{ marginBottom: '24px' }} className="text-[18px] font-semibold text-[#1D1D1F]">Product Design</h3>
              <p className="text-[15px] text-[#6E6E73] leading-relaxed">
                Crafting user-centered interfaces and experiences from concept to production with Figma.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{ paddingTop: '160px', paddingBottom: '160px' }} className="bg-gradient-to-br from-[#1a1a2e] to-[#16213e] w-full">
        <div className="w-full flex flex-col items-center px-8 md:px-16 lg:px-24">
          <div className="w-full max-w-[700px] text-center mx-auto">
            <h2 style={{ marginBottom: '40px' }} className="text-[28px] md:text-[40px] font-bold text-white tracking-tight">
              Let's build something{" "}
              <span className="bg-gradient-to-r from-[#667eea] to-[#764ba2] bg-clip-text text-transparent">extraordinary</span>
            </h2>
            <p className="text-[16px] text-white/70 w-full text-center" style={{ marginBottom: '60px' }}>
              I'm always excited to collaborate on innovative projects that push the boundaries of digital experiences.
            </p>
            <div className="flex flex-wrap justify-center gap-6" style={{ marginTop: '20px' }}>
              <a
                href="mailto:kiranaamoore@gmail.com"
                className="inline-flex items-center gap-3 bg-white text-[#1D1D1F] text-[16px] font-semibold rounded-full transition-all duration-200 hover:scale-105 active:scale-95"
                style={{ padding: '20px 40px' }}
              >
                Get in touch
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/kirana-moore"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-white/10 text-white text-[16px] font-semibold rounded-full border border-white/20 hover:bg-white/20 transition-all duration-200 hover:scale-105 active:scale-95"
                style={{ padding: '20px 40px' }}
              >
                LinkedIn
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
