"use client";

import ProjectLayout from "@/components/ProjectLayout";

export default function HondaPage() {
  return (
    <ProjectLayout
      title="Future Mobility Concept"
      company="IYA"
      year="Feb 2025 – Mar 2025"
      description="9-week design sprint contracted with a major automotive manufacturer. Our team tackled a key insight: Gen-Z is the loneliest generation. 61% of young adults report serious loneliness, yet no vehicle has been designed around enhancing human connection while respecting the need for privacy."
      tags={["UX Design", "Unity", "AR/MR", "Automotive"]}
      orientation="landscape"
      slides={[
        {
          type: "youtube",
          src: "JEkAEWwGEVs",
          caption: "Final Interactive Demo — Immersive Gaming Experience",
        },
        {
          type: "youtube",
          src: "e8aMQo_JWRQ",
          caption: "Storyboard Walkthrough — User Journey Design",
        },
      ]}
      prevProject={{ slug: "hyperx", title: "XR/AR Product Showcase" }}
      nextProject={{ slug: "arup", title: "Sustainability & Community" }}
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
            "<strong>Immersive Gaming Mode:</strong> All surfaces (windows and walls) become screens, creating a 360° gaming environment—demonstrated through Space Invaders, Rocket League, and a D&D campaign scenario",
            "<strong>Zoning System:</strong> Privacy partitions divide the car into communal and private zones, with the center designated for group activities",
            "<strong>Activity Modes:</strong> Play, Rest, and Dining programs that transform the interior experience based on the group's chosen activity",
            "<strong>Floating AR UI:</strong> Hand-tracked interface projected in space, allowing passengers to opt-in or opt-out of group activities",
            "<strong>Privacy Dividers:</strong> Noise-canceling partitions that rise when users choose isolation, with automatic seat recline and table retraction",
            "<strong>Communal Table & Storage:</strong> Rising table with integrated storage for shared items users bring aboard (e.g., tabletop game accessories, dining supplies), supporting communal activities like gaming and family dinner",
          ],
        },
        {
          title: "Process & Iterations",
          icon: "results",
          color: "#4facfe",
          items: [
            "<strong>Storyboard v1:</strong> Explored usage across various drive times (3+ hours, 1-2 hours, under 1 hour) using personal road trip experiences. Praised for thoroughness",
            "<strong>Storyboard v2:</strong> Introduced zoning concept and AR/MR exploration based on feedback; condensed user experience into single trip narrative",
            "<strong>Early Prototype:</strong> Demonstrated relaxation modes, communal dining, and privacy features. Client requested exploration of opt-out scenarios",
            "<strong>Final Demo:</strong> Consolidated all features into immersive gaming scenario, showcasing the full opt-in/opt-out flow with floating UI controls",
          ],
        },
      ]}
    />
  );
}
