"use client";

import ProjectLayout from "@/components/ProjectLayout";

export default function HyperXPage() {
  return (
    <ProjectLayout
      title="XR/AR Product Showcase"
      company="HP/HyperX"
      year="2025"
      description="Comprehensive XR and AR development work for HP/HyperX, including real-time 3D product customization, AR manuals, WebAR experiences, and 3D model optimization pipelines for retail and consumer applications."
      tags={["Unity", "AR", "3D", "WebXR", "Blender"]}
      orientation="landscape"
      slides={[
        {
          type: "video",
          src: "/Customizer_demo.MOV",
          caption: "AR Product Customizer - Live Demo",
        },
        {
          type: "image",
          src: "/AR-PRODUCT-CUSTOMIZER-THUMBNAIL.png",
          caption: "AR Product Customizer Interface",
        },
        {
          type: "image",
          src: "/quick_start_guide_thumbnail.png",
          caption: "Quick Start Guide AR Manual",
        },
        {
          type: "image",
          src: "/HX3D_thumbnail.png",
          caption: "3D Model Optimization Pipeline",
        },
        {
          type: "image",
          src: "/hiro-marker-thumb.png",
          caption: "Marker-Based WebAR Development",
        },
        {
          type: "image",
          src: "/18k tris.png",
          caption: "Cloud 3D Connect - In-Store Display",
        },
      ]}
      prevProject={{ slug: "nogi-nogi", title: "Nogi Nogi" }}
      nextProject={{ slug: "vape-reduction", title: "Vape Reduction Initiative" }}
      sections={[
        {
          title: "Role & Objective",
          icon: "role",
          color: "#667eea",
          items: [
            "Served as <strong>Augmented Reality Developer</strong> creating immersive retail and consumer experiences",
            "Developed interactive tools to drive product engagement and accessory sales at point of sale",
            "Built comprehensive XR solutions spanning Unity, WebAR, and mobile AR platforms",
            "Optimized 3D assets for cross-platform deployment (web, mobile, AR, VR)",
          ],
        },
        {
          title: "Key Contributions",
          icon: "contributions",
          color: "#f093fb",
          items: [
            "<strong>AR Product Customizer:</strong> Real-time 3D headset customization with feature callouts and AR integration",
            "<strong>Quick Start Guide AR Manual:</strong> Paperless onboarding experience using Lens Studio",
            "<strong>3D Optimization Pipeline:</strong> CAD to web/mobile/AR/VR workflow reducing model complexity while maintaining visual quality",
            "<strong>Marker-Based WebAR:</strong> JavaScript-based AR using computer vision for in-browser experiences",
            "<strong>Cloud 3D Connect:</strong> Interactive in-store product showcase with touch-based navigation",
          ],
        },
        {
          title: "Results & Impact",
          icon: "results",
          color: "#4facfe",
          items: [
            "Enabled customers to understand HyperX advantages over competitors directly in-store",
            "Increased product engagement and HX3D accessory attachment rates",
            "Delivered production-ready solutions deployed across retail locations",
            "Created scalable, interactive retail tools that enhance the buying experience",
          ],
        },
      ]}
    />
  );
}
