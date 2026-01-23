"use client";

import ProjectLayout from "@/components/ProjectLayout";

export default function HyperXPage() {
  return (
    <ProjectLayout
      title="AR Shopping Experience for Gaming Hardware"
      company="HP/HyperX"
      year="May 2025 – August 2025"
      description="Pioneered HyperX's first augmented reality e-commerce experience, positioning the brand ahead of competitors like Razer and Logitech in the gaming peripherals space. Presented directly to the HyperX CEO, earning executive buy-in and driving investment interest in AR for e-commerce and brand experiences."
      tags={["Lens Studio", "Blender", "WebAR", "Figma"]}
      orientation="portrait"
      slides={[
        {
          type: "youtube",
          src: "Y9iAdqKr93U",
          caption: "AR Product Customizer → Checkout Flow",
        },
        {
          type: "youtube",
          src: "AApNbHPmC9I",
          caption: "Interactive Packaging – AR from Physical Box",
          muted: true,
        },
        {
          type: "youtube",
          src: "ikBsQZAmAAE",
          caption: "AR Try-On Experience",
        },
        {
          type: "youtube",
          src: "Ao0wM8Of284",
          caption: "Keyboard & Mouse 3D Product Viewer",
        },
        {
          type: "youtube",
          src: "JQfUVj6Q5ak",
          caption: "3D Viewer on Product Page",
        },
        {
          type: "image",
          src: "/hyperx-ar-demo-qr.png",
          caption: "Try It Yourself – Scan to Experience the AR Demo",
          objectFit: "contain",
        },
      ]}
      prevProject={{ slug: "nogi-nogi", title: "Nogi Nogi" }}
      nextProject={{ slug: "honda", title: "Future Mobility Concept" }}
      sections={[
        {
          title: "Role & Objective",
          icon: "role",
          color: "#667eea",
          items: [
            "Served as <strong>Product Design Intern</strong> on the 3D and CGI Team, owning the end-to-end AR initiative",
            "Identified market opportunity: <strong>61% of consumers prefer retailers with AR</strong>, yet no gaming peripheral brand offered it",
            "Built business case and technical proof-of-concept to position HyperX as <strong>first-mover in gaming hardware AR</strong>",
            "Collaborated cross-functionally with marketing and UI teams using Figma and Photoshop",
          ],
        },
        {
          title: "Technical Contributions",
          icon: "contributions",
          color: "#f093fb",
          items: [
            "<strong>3D Asset Optimization:</strong> Reduced Cloud 3 headset mesh from <strong>6M+ to 15k triangles (99.7% reduction)</strong> via Blender, enabling real-time web/AR rendering",
            "<strong>Accessory Asset Pipeline:</strong> Optimized 3 HyperX headset accessory sets from <strong>12M to 30k triangles</strong> using Quad Remesher, with baked normal and diffuse maps",
            "<strong>AR Product Customizer:</strong> Built web-based real-time customization with HX3D accessories using Lens Studio",
            "<strong>Interactive Packaging:</strong> Developed AR experience triggered by physical product box using marker-based tracking",
            "<strong>AR Quick Start Guide:</strong> Created paperless onboarding flow replacing printed manuals",
          ],
        },
        {
          title: "Results & Impact",
          icon: "results",
          color: "#4facfe",
          items: [
            "<strong>Presented to HyperX CEO</strong> – received direct executive feedback and approval",
            "<strong>Drove AR investment interest</strong> for e-commerce and brand experiences company-wide",
            "Delivered production-ready assets: PBR texturing, lighting, and ray-traced rendering for web deployment",
            "Created scalable AR shopping flow: Browse → Customize → Try-On → Checkout",
            "Positioned HyperX ahead of Razer, Logitech, and SteelSeries in AR adoption",
          ],
        },
      ]}
    />
  );
}
