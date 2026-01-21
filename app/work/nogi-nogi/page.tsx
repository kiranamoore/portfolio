import ProjectLayout from "@/components/ProjectLayout";

export default function NogiNogiPage() {
  return (
    <ProjectLayout
      title="Nogi Nogi"
      year="Sep 2025 – Dec 2025"
      description="A utility collectible that transforms from a poseable action figure into a functional carabiner. Engineered a ball-jointed system with elastic-tension mechanics and magnetic locking, then used an AI-accelerated Blender-to-Vizcom pipeline to iterate on materials 70% faster than traditional workflows."
      tags={["Product Design", "3D Modeling", "UX Research", "Blender"]}
      orientation="portrait"
      slides={[
        {
          type: "image",
          src: "/nogi-nogi-product.png",
          caption: "Nogi Nogi product in context",
        },
      ]}
      prevProject={{ slug: "honda", title: "Future Mobility Concept" }}
      nextProject={{ slug: "hyperx", title: "XR/AR Product Showcase" }}
      sections={[
        {
          title: "Role & Objective",
          icon: "role",
          color: "#667eea",
          items: [
            "Led product design and UX research for a 15-week capstone project targeting Gen Z consumers",
            "Designed a dual-state object balancing the emotional appeal of a collectible with the utility of a carabiner",
            "Created a modular mechanical platform that can be licensed across different fandoms and IPs",
          ],
        },
        {
          title: "Key Contributions",
          icon: "contributions",
          color: "#f093fb",
          items: [
            "Engineered a ball-jointed elastic-tension mechanism modeled on BJD physics for fluid movement and structural rigidity",
            "Designed magnetic-locking system in hands and feet to secure the carabiner form for load-bearing utility",
            "Built a Blender-to-Vizcom pipeline for rapid CMF (Color, Material, Finish) exploration, reducing iteration cycles by 70%",
            "Conducted field research at Frank & Sons Collectible Show and consumer interviews to validate product-market fit",
          ],
        },
        {
          title: "Results & Impact",
          icon: "results",
          color: "#4facfe",
          items: [
            "Developed a licensing-ready standardized skeleton capable of hosting characters from various global fandoms",
            "Validated demand through consumer interviews and competitive analysis against Labubu, Sonny Angel, and traditional carabiners",
            "Preparing Kickstarter campaign for early 2026 to bring product to market",
          ],
        },
      ]}
    />
  );
}
