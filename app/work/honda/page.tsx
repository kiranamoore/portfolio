"use client";

import ProjectLayout from "@/components/ProjectLayout";

export default function HondaPage() {
  return (
    <ProjectLayout
      title="Future Mobility Concept"
      company="IYA Academy"
      year="2025"
      description="9-week design sprint contracted with a major automotive manufacturer. Our team tackled a key insight: Gen-Z is the loneliest generation. 61% of young adults report serious loneliness, yet no vehicle has been designed around enhancing human connection while respecting the need for privacy."
      tags={["UX Design", "Unity", "AR/MR", "Automotive"]}
      orientation="landscape"
      slides={[
        {
          type: "image",
          src: "/placeholder-honda.svg",
          caption: "Final Interactive Demo — Video coming soon",
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
            "<strong>UX Designer & Unity Developer</strong> on a 4-person team during a 9-week design sprint",
            "Led design and development of the car's <strong>immersive gaming concept</strong>, <strong>zoning system</strong>, interactive displays, and mixed reality features",
            "Sole creator of all storyboards defining the complete user journey",
            "Built interactive Unity demos to pitch concepts to client stakeholders",
          ],
        },
        {
          title: "Key Features Developed",
          icon: "contributions",
          color: "#f093fb",
          items: [
            "<strong>Immersive Gaming Mode:</strong> Seats rotate inward, communal table rises, AR accessories deploy for tabletop games—showcased through a D&D campaign scenario",
            "<strong>Zoning System:</strong> Play/Rest/Dining modes that transform the car interior based on activity",
            "<strong>Floating AR UI:</strong> Hand-tracked interface projected in space, allowing passengers to opt-in or opt-out of group activities",
            "<strong>Privacy Dividers:</strong> Noise-canceling partitions that rise when users choose isolation, with automatic seat recline and table retraction",
            "<strong>Adaptive Interior:</strong> Storage compartments that surface relevant items (game accessories, dining supplies) based on selected mode",
          ],
        },
        {
          title: "Process & Iterations",
          icon: "results",
          color: "#4facfe",
          items: [
            "<strong>Storyboard v1:</strong> Explored usage across various drive times (3+ hours, 1-2 hours, under 1 hour) using personal road trip experiences—praised for thoroughness",
            "<strong>Storyboard v2:</strong> Introduced zoning concept and AR/MR exploration based on feedback; condensed user experience into single trip narrative",
            "<strong>Early Prototype:</strong> Demonstrated relaxation modes, communal dining, and privacy features—client requested exploration of opt-out scenarios",
            "<strong>Final Demo:</strong> Consolidated all features into immersive gaming scenario, showcasing the full opt-in/opt-out flow with floating UI controls",
          ],
        },
      ]}
    />
  );
}
