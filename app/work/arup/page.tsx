import ProjectLayout from "@/components/ProjectLayout";

export default function ArupPage() {
  return (
    <ProjectLayout
      title="Downtown Revitalization"
      company="ARUP"
      year="Aug 2024 – Dec 2024"
      description="Led research and concept development for HiveSpace, a systems-thinking approach to urban revitalization. Originated the core idea of rotating pop-ups in vacant office buildings, transforming underutilized commercial real estate into modular, flexible community hubs. Created all 3D visualizations including multi-floor building concepts and retail floor renders."
      tags={["Design Research", "3D Visualization", "Concept Development", "Urban Design"]}
      orientation="landscape"
      slides={[
        {
          type: "youtube",
          src: "VnuN3pWdzqE",
          caption: "ARUP Project Video",
        },
      ]}
      prevProject={{ slug: "honda", title: "Future Mobility Concept" }}
      nextProject={{ slug: "meta-alchemy", title: "Meta Alchemy" }}
      sections={[
        {
          title: "Role",
          icon: "role",
          color: "#667eea",
          items: [
            "<strong>Research Lead:</strong> Conducted the foundational research that informed the entire project direction",
            "<strong>Concept Originator:</strong> Created the core idea of rotating pop-ups in vacant office buildings as urban revitalization",
            "<strong>3D Visualization:</strong> Produced all visual assets communicating the HiveSpace vision",
          ],
        },
        {
          title: "Research & Process",
          icon: "contributions",
          color: "#f093fb",
          items: [
            "Conducted user interviews, PESTLE analysis, S-curve analysis, and empathy mapping to define the problem space",
            "Identified key insight: downtown areas lack compelling reasons for engagement post-WFH, while office vacancies create opportunity",
            "Developed a systems-thinking approach, designing not just a space, but a mechanism for ongoing community benefit",
          ],
        },
        {
          title: "Visual Communication",
          icon: "results",
          color: "#4facfe",
          items: [
            "Created multi-floor building visualization showing how different floors work together as a cohesive system",
            "Designed retail floor concept renders illustrating the rotating pop-up model",
            "Produced concept art communicating the overall HiveSpace vision to ARUP stakeholders",
          ],
        },
      ]}
    />
  );
}
