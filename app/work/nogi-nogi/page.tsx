import ProjectLayout from "@/components/ProjectLayout";

export default function NogiNogiPage() {
  return (
    <ProjectLayout
      title="Nogi Nogi"
      year="2025"
      description="Physical product design for a carabiner art pose doll - a unique collectible that combines functionality with artistic expression."
      tags={["Product Design", "Physical"]}
      orientation="portrait"
      slides={[
        {
          type: "image",
          src: "/placeholder-nogi.svg",
          caption: "Product showcase coming soon",
        },
      ]}
      prevProject={{ slug: "honda", title: "Honda Innovation Project" }}
      nextProject={{ slug: "hyperx", title: "XR/AR Product Showcase" }}
      sections={[
        {
          title: "Role & Objective",
          icon: "role",
          color: "#667eea",
          items: [
            "Designed a unique carabiner art pose doll combining functionality with artistic expression",
            "Created a collectible product that appeals to both art enthusiasts and everyday users",
          ],
        },
        {
          title: "Key Contributions",
          icon: "contributions",
          color: "#f093fb",
          items: [
            "Product concept development and iteration",
            "Material selection and manufacturing considerations",
            "Packaging and brand identity design",
          ],
        },
        {
          title: "Results & Impact",
          icon: "results",
          color: "#4facfe",
          items: [
            "Details to be added",
          ],
        },
      ]}
    />
  );
}
