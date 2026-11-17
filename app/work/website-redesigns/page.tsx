import Link from "next/link";

// Featured redesigns, strongest first. Each card matches the homepage work grid.
const redesigns = [
  {
    title: "Instagram Website Redesign",
    company: "Meta",
    slug: "instagram",
    thumbnail: "/Redesigns/Instagram/Instagram_Thumbnail.mp4",
    description: "Turning a static screenshot into a scroll driven experience you can interact with, built in code in 2 days",
    tags: ["Web Design", "Interaction Design", "HTML/CSS/JS"],
  },
  {
    title: "The Loom Menu",
    company: "SJMQT",
    slug: "sj-quilts",
    thumbnail: "/Redesigns/SJ-Quilts/SJ_Quits_Hero.mp4",
    description: "Rebuilding a quilt museum's menu as a working loom of interlacing cloth ribbons, built in code in 1 day",
    tags: ["Web Design", "Interaction Design", "HTML/CSS/JS"],
  },
  {
    title: "A Stack of Notes",
    company: "Granola",
    slug: "granola",
    thumbnail: "/Redesigns/Granola/Granola_Hero.mp4",
    description: "Rebuilding Granola's blog as a stack of meeting notes you flip through and open to read, built in code in 2 days",
    tags: ["Web Design", "Interaction Design", "HTML/CSS/JS"],
  },
  {
    title: "Scroll Through a Passport",
    company: "Veeza AI",
    slug: "veeza",
    thumbnail: "/Redesigns/Veeza/Veeza_Hero.mp4",
    description: "Rebuilding a visa service's homepage as a passport you flip through, stamps and all, built in code in 1 day",
    tags: ["Web Design", "Interaction Design", "HTML/CSS/JS"],
  },
  {
    title: "Interactive IBM Product Cards",
    company: "IBM",
    slug: "ibm",
    thumbnail: "/Redesigns/IBM/IBM_Hero.mp4",
    description: "Rebuilding IBM's product boxes as cards that ripple on hover, with customer proof up front, built in code in 1 day",
    tags: ["Web Design", "Interaction Design", "HTML/CSS/JS"],
  },
  {
    title: "Try the Agent",
    company: "Workday",
    slug: "workday",
    thumbnail: "/Redesigns/Workday/Workday_Hero.mp4",
    description: "Rebuilding Workday's agent animation as a working chat demo you can run yourself, built in code in 1 day",
    tags: ["Web Design", "Interaction Design", "HTML/CSS/JS"],
  },
];

export default function WebsiteRedesignsPage() {
  return (
    <div className="min-h-screen bg-white relative">
      {/* Side previous/next project links */}
      <Link
        href="/work/hyperx"
        className="fixed left-4 lg:left-8 top-1/2 -translate-y-1/2 z-20 hidden lg:flex flex-col items-center justify-center gap-2 group"
      >
        <span className="text-[11px] text-[#86868B] uppercase tracking-widest text-center group-hover:text-[#667eea] transition-colors">
          Prev
          <br />
          Project
        </span>
        <svg
          className="w-6 h-6 text-[#86868B] group-hover:text-[#667eea] transition-colors animate-bounce-left"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
        </svg>
      </Link>

      <Link
        href="/work/zuzu"
        className="fixed right-4 lg:right-8 top-1/2 -translate-y-1/2 z-20 hidden lg:flex flex-col items-center justify-center gap-2 group"
      >
        <span className="text-[11px] text-[#86868B] uppercase tracking-widest text-center group-hover:text-[#667eea] transition-colors">
          Next
          <br />
          Project
        </span>
        <svg
          className="w-6 h-6 text-[#86868B] group-hover:text-[#667eea] transition-colors animate-bounce-right"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
        </svg>
      </Link>

      <section className="w-full flex flex-col items-center px-8 md:px-16 lg:px-24" style={{ paddingTop: "160px", paddingBottom: "80px" }}>
        {/* Title */}
        <div className="text-center w-full max-w-[900px]">
          <p className="text-[15px] font-semibold text-[#667eea] uppercase tracking-wider mb-5">Directed Research</p>
          <h1 className="text-[36px] md:text-[48px] font-bold text-[#1D1D1F] tracking-tight" style={{ marginBottom: "28px" }}>
            Interactive by Design: A Website Redesign Series
          </h1>

          {/* Blurb */}
          <div className="text-left max-w-[760px] mx-auto">
            <p className="text-[18px] md:text-[19px] text-[#1D1D1F] leading-relaxed font-medium" style={{ marginBottom: "28px" }}>
              For my directed research at USC&apos;s Iovine and Young Academy, I redesigned 25 websites in one semester, taking on one focused interaction per site, designed and built in real code.
            </p>

            <p className="text-[16px] md:text-[17px] leading-relaxed" style={{ marginBottom: "16px" }}>
              <strong className="text-[#1D1D1F]">The problem: as AI-generated websites become the default, especially for startups, product sites are starting to look template-driven and generic, flattening the very products they are meant to sell.</strong>
            </p>
            <p className="text-[16px] md:text-[17px] leading-relaxed" style={{ marginBottom: "28px" }}>
              <strong className="text-[#1D1D1F]">The solution: treat AI as a multiplier, not the designer. When every prompt carries clear design intention, AI accelerates iteration and shipping while the creative decisions stay human, which is how you get interactions that feel novel, specific, and memorable.</strong>
            </p>

            <p className="text-[16px] md:text-[17px] text-[#3A3A3C] leading-relaxed">
              The six redesigns below are the featured highlights of the set of 25.
            </p>
          </div>
        </div>

        {/* Redesigns grid, same card style as the homepage work grid */}
        <div className="w-full max-w-[1300px] grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 mx-auto" style={{ marginTop: "72px" }}>
          {redesigns.map((project) => (
            <Link key={project.slug} href={`/work/${project.slug}`} className="group block">
              <div className="overflow-hidden rounded-2xl bg-white border border-[#E5E5E5] card-hover">
                <div className="aspect-[16/10] relative overflow-hidden bg-[#F5F5F7]">
                  <video
                    src={project.thumbnail}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover zoom-image"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-4 right-4 w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0 shadow-lg">
                    <svg className="w-5 h-5 text-[#1D1D1F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
                <div className="px-8 md:px-10 text-center flex flex-col items-center" style={{ paddingTop: "24px", paddingBottom: "24px" }}>
                  <h3 className="text-[22px] font-semibold text-[#1D1D1F] mb-4 group-hover:text-[#667eea] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-[17px] text-[#6E6E73] mb-4">{project.description}</p>
                  <p className="text-[14px] text-[#86868B] mb-4">{project.company}</p>
                  <div className="flex flex-wrap justify-center gap-3" style={{ marginTop: "10px", marginBottom: "0px" }}>
                    {project.tags.map((tag) => (
                      <span key={tag} className="inline-block font-medium text-[#667eea] bg-[#667eea]/10 rounded-lg" style={{ padding: "6px 14px", fontSize: "14px" }}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
