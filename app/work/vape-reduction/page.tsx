import ProjectLayout from "@/components/ProjectLayout";

export default function VapeReductionPage() {
  return (
    <ProjectLayout
      title="Vape Reduction Initiative"
      company="IYA"
      year="Nov 2025 – Dec 2025"
      description="A health-focused behavioral design project exploring interventions to reduce vaping among young adults through user research, behavioral psychology, and design thinking methodologies."
      tags={["UX Research", "Behavior Design", "Health"]}
      orientation="landscape"
      slides={[
        {
          type: "image",
          src: "/placeholder-vape.svg",
          caption: "Project research and design coming soon",
        },
      ]}
      prevProject={undefined}
      nextProject={{ slug: "nogi-nogi", title: "Nogi Nogi" }}
      sections={[
        {
          title: "Role & Objective",
          icon: "role",
          color: "#667eea",
          items: [
            "Conducted UX research to understand vaping behaviors and triggers among young adults",
            "Applied behavioral design principles to develop effective intervention strategies",
            "Collaborated with health experts to ensure evidence-based approach",
          ],
        },
        {
          title: "Key Contributions",
          icon: "contributions",
          color: "#f093fb",
          items: [
            "User research and persona development",
            "Journey mapping of vaping behaviors and intervention touchpoints",
            "Prototype development for behavioral interventions",
            "Design thinking workshops with stakeholders",
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
