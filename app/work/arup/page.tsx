import ProjectLayout from "@/components/ProjectLayout";

export default function ArupPage() {
  return (
    <ProjectLayout
      title="Downtown Revitalization"
      company="ARUP"
      year="Aug 2024 – Dec 2024"
      description="A collaborative project with ARUP exploring how to revitalize downtown urban areas facing office vacancies and declining foot traffic in post-work-from-home culture. Through stakeholder interviews, trend analysis, and design research, we proposed ReWork, a co-working concept that transforms underutilized office spaces into community-driven hubs for collaboration, events, and connection."
      tags={["Urban Design", "Sustainability", "Design Research", "Co-working"]}
      orientation="landscape"
      slides={[
        {
          type: "youtube",
          src: "ZhWUannnzwI",
          caption: "ARUP Project Video",
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
            "Partnered with ARUP to address urban sustainability and community challenges in downtown areas",
            "Investigated how rising remote work and office vacancies impact city vibrancy and identity",
            "Defined a problem statement: city residents lack compelling reasons to engage with downtowns post-WFH",
          ],
        },
        {
          title: "Key Contributions",
          icon: "contributions",
          color: "#f093fb",
          items: [
            "Conducted stakeholder interviews with diverse urban dwellers across Toledo, NYC, and Los Angeles",
            "Performed PESTLE analysis, S-curve trend mapping, and morphological analysis",
            "Synthesized research into three key trends: changing work patterns, inward urban expansion, and push for green spaces",
            "Led ideation sessions using 'How Might We' prompts to generate and refine solutions",
          ],
        },
        {
          title: "Results & Impact",
          icon: "results",
          color: "#4facfe",
          items: [
            "Proposed ReWork: a co-working concept featuring collaboration spaces, flexible company partnerships, and community events",
            "Addressed underutilized real estate while promoting sustainability and human connection",
            "Presented findings and solution to ARUP stakeholders",
          ],
        },
      ]}
    />
  );
}
