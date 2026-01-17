import ProjectLayout from "@/components/ProjectLayout";

export default function ArupPage() {
  return (
    <ProjectLayout
      title="Sustainability & Community"
      company="ARUP"
      year="Aug 2024 – Dec 2024"
      description="An IYA sustainability and community impact project in collaboration with ARUP, focusing on designing solutions that address environmental challenges while strengthening community bonds."
      tags={["Sustainability", "Community", "Design Research"]}
      orientation="landscape"
      slides={[
        {
          type: "image",
          src: "/placeholder-arup.svg",
          caption: "Project documentation coming soon",
        },
      ]}
      prevProject={{ slug: "honda", title: "Future Mobility Concept" }}
      nextProject={undefined}
      sections={[
        {
          title: "Role & Objective",
          icon: "role",
          color: "#667eea",
          items: [
            "Collaborated with ARUP on sustainability-focused design research",
            "Explored community-centered solutions for environmental challenges",
            "Integrated IYA interdisciplinary approach to problem-solving",
          ],
        },
        {
          title: "Key Contributions",
          icon: "contributions",
          color: "#f093fb",
          items: [
            "Community engagement and stakeholder research",
            "Sustainability impact assessment and design criteria development",
            "Concept development and visualization",
            "Presentation and documentation of findings",
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
