import ProjectLayout from "@/components/ProjectLayout";

export default function NogiNogiPage() {
  return (
    <ProjectLayout
      title="Nogi Nogi"
      year="Sep 2025 – Dec 2025"
      description="A utility collectible born from a market white space: carabiners have evolved from climbing gear to must-have fashion accessories (trending across Balenciaga, Gucci, and streetwear), while Gen Z increasingly parades collectibles on bags as wearable identity pieces. Nogi Nogi merges both behaviors into a poseable action figure that transforms into a functional, load-bearing carabiner. Engineered a ball-jointed system with elastic-tension mechanics and magnetic locking, then used an AI-accelerated Blender-to-Vizcom pipeline to iterate on materials 70% faster than traditional workflows."
      tags={["Product Design", "3D Modeling", "UX Research", "Blender"]}
      orientation="portrait"
      slides={[
        {
          type: "image",
          src: "/nogi-nogi-product.png",
          caption: "Nogi Nogi on Handbag",
        },
        {
          type: "image",
          src: "/Nogi-Nogi-bent.png",
          caption: "Nogi Nogi Bent",
        },
        {
          type: "image",
          src: "/Nogi-Nogi-standing.png",
          caption: "Nogi Nogi Standing",
          objectFit: "contain",
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
            "Led concept development and product design for a 15-week capstone project targeting the $45B adult collectibles market",
            "Designed a dual-state object balancing the emotional appeal of a collectible with the utility of a carabiner",
            "Created a modular mechanical platform that can be licensed across different fandoms and IPs",
          ],
        },
        {
          title: "Key Contributions",
          icon: "contributions",
          color: "#f093fb",
          items: [
            "Engineered a ball-jointed elastic-tension mechanism modeled on ball-jointed doll physics for fluid movement and structural rigidity",
            "Designed magnetic-locking system in hands and feet to secure the carabiner form for load-bearing utility",
            "Built a Blender-to-Vizcom AI pipeline for rapid CMF (Color, Material, Finish) exploration, reducing iteration cycles by 70%",
            "Conducted field research at Frank & Sons Collectible Show and consumer interviews to validate product-market fit",
          ],
        },
        {
          title: "Results & Impact",
          icon: "results",
          color: "#4facfe",
          items: [
            "Identified and validated a trend intersection positioning Nogi Nogi in an emerging product category",
            "Developed a licensing-ready standardized skeleton capable of hosting characters from various global fandoms",
            "Validated demand through consumer interviews and competitive analysis against Labubu, Sonny Angel, and traditional carabiners",
            "Preparing Kickstarter campaign for early 2026 to bring product to market",
          ],
        },
      ]}
    />
  );
}
