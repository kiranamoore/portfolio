"use client";

import dynamic from "next/dynamic";
import React from "react";

const ModelViewer = dynamic(
  () => import("@/components/ModelViewer3D"),
  { ssr: false }
);

export default function BeastViewerPage() {
  return (
    <div className="min-h-screen bg-black flex justify-center items-center p-4">
      <div className="w-full max-w-4xl">
        <ModelViewer
          src="/hx3d/beast.glb"
          alt="Beast 3D Model"
          ar
          autoRotate
          cameraControls
          style={{ width: "100%", height: "80vh", background: "#ffffff", borderRadius: "1rem", border: "1px solid #e5e7eb" }}
        />
        <p className="text-sm text-gray-400 mt-4 text-center">
          Interact with the 3D model above. Pinch/drag/zoom on mobile and desktop.
        </p>
      </div>
    </div>
  );
}
