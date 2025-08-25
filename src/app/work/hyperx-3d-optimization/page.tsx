"use client";

import dynamic from "next/dynamic";
import React from "react";

const ModelViewer = dynamic(
  () => import("@/components/ModelViewer3D"),
  { ssr: false }
);

export default function HyperX3DOptimizationPage() {
  return (
    <>
      <div className="h-32" />
      <div
        className="min-h-screen bg-black text-white py-12 mt-16 md:mt-24 mb-12"
        style={{ marginLeft: "auto", marginRight: "auto", marginBottom: "50px", maxWidth: "1400px" }}
      >
        {/* Main Content Section */}
        <div className="w-full flex flex-col lg:flex-row gap-16 items-center justify-center mb-16" style={{ maxWidth: "1200px", margin: "0 auto" }}>
          {/* Left column: 3D Model Viewer */}
          <div className="flex flex-col items-center justify-center flex-1 w-full min-w-[320px] max-w-[700px]">
            <ModelViewer
              src="/Cloud-3-S-7-17.glb"
              alt="HyperX Cloud 3 Optimized 3D Model"
              ar
              autoRotate
              cameraControls
              style={{ width: "100%", height: "500px", background: "#222", borderRadius: "1rem" }}
            />
            <p className="text-xs text-gray-400 mt-2">Interact with the 3D model above. Pinch/drag/zoom on mobile and desktop.</p>
            <button
              onClick={() => window.open('/work/hyperx-3d-optimization/viewer', '_blank')}
              className="mt-4 px-6 py-2 bg-white text-black font-medium rounded-lg hover:bg-gray-100 transition-colors duration-200"
            >
              Open Full-Screen Viewer
            </button>
          </div>
          {/* Right column: Content */}
          <div className="flex flex-col items-center text-center space-y-6 flex-1 min-w-[320px] max-w-[520px]">
            <div className="space-y-1">
              <p className="text-sm text-gray-300">Summer 2025</p>
              <h1 className="text-4xl md:text-6xl font-bold">3D Model Optimization for XR</h1>
            </div>
            <p className="text-lg font-medium">
              Developed a comprehensive guide and demonstration of 3D model optimization techniques for mobile, web, and AR/VR applications, using the HyperX Cloud 3 headset as a case study to show how complex 3D models can be made accessible across all devices.
            </p>
            <div className="space-y-10 text-left max-w-2xl w-full">
              {/* Role & Objective */}
              <section>
                <div className="flex items-center gap-3 mb-2">
                  <span className="h-6 w-1 rounded bg-gradient-to-b from-pink-500 to-red-400" />
                  <h2 className="text-2xl font-bold text-pink-400 tracking-tight">Role & Objective</h2>
                </div>
                <ul className="space-y-2 pl-6 list-none">
                  <li className="flex items-start gap-2"><span className="mt-1 text-pink-400">•</span><span>Served as the<span className="font-semibold text-white">Augmented Reality Developer</span> to create a <span className="font-bold">streamlined pipeline for converting CAD product models to Web, mobile, VR, AR, and Game ready models</span></span></li>
                  <li className="flex items-start gap-2"><span className="mt-1 text-pink-400">•</span><span>Aimed to <span className="font-bold">simplify complex 3D models</span> so they load quickly and run smoothly on phones, tablets, and computers.</span></li>
                  <li className="flex items-start gap-2"><span className="mt-1 text-pink-400">•</span><span>Targeted creating a <span className="font-bold">universal 3D model format</span> that works across all devices and platforms.</span></li>
                </ul>
              </section>
              <div className="border-t border-gray-700 my-6" />
              {/* Actions Taken */}
              <section>
                <div className="flex items-center gap-3 mb-2">
                  <span className="h-6 w-1 rounded bg-gradient-to-b from-blue-400 to-cyan-400" />
                  <h2 className="text-2xl font-bold text-blue-300 tracking-tight">Actions Taken</h2>
                </div>
                <ul className="space-y-2 pl-6 list-none">
                  <li className="flex items-start gap-2"><span className="mt-1 text-blue-300">•</span><span>Reduced the original CAD HyperX Cloud 3 S model from <span className="font-bold">millions of triangles to just 20,000</span> using <span className="font-bold">Blender</span> - think of triangles as the building blocks that make up a 3D model.</span></li>
                  <li className="flex items-start gap-2"><span className="mt-1 text-blue-300">•</span><span>Converted the model to <span className="font-bold">GLB format</span> - a universal file type that works on phones, computers, and AR/VR headsets.</span></li>
                  <li className="flex items-start gap-2"><span className="mt-1 text-blue-300">•</span><span>Optimized textures and materials to maintain visual quality while <span className="font-bold">reducing file size</span> for faster loading.</span></li>
                  <li className="flex items-start gap-2"><span className="mt-1 text-blue-300">•</span><span>Tested the model across different devices to ensure <span className="font-bold">smooth interaction and fast loading times</span> on mobile and desktop.</span></li>
                  <li className="flex items-start gap-2"><span className="mt-1 text-blue-300">•</span><span>Created an interactive web viewer using <span className="font-bold">Google's Model Viewer</span> to demonstrate the optimized model in action.</span></li>
                  <li className="flex items-start gap-2"><span className="mt-1 text-blue-300">•</span><span>Used <span className="font-bold">projected diffuse maps from high-poly models to low-poly models</span> to texture the HX3D models, maintaining visual quality while reducing geometry complexity.</span></li>
                </ul>
              </section>
              <div className="border-t border-gray-700 my-6" />
              {/* Results & Impact */}
              <section>
                <div className="flex items-center gap-3 mb-2">
                  <span className="h-6 w-1 rounded bg-gradient-to-b from-green-400 to-emerald-500" />
                  <h2 className="text-2xl font-bold text-green-300 tracking-tight">Results & Impact</h2>
                </div>
                <ul className="space-y-2 pl-6 list-none">
                  <li className="flex items-start gap-2"><span className="mt-1 text-green-300">•</span><span><span className="font-bold">Successfully created a mobile-friendly 3D model</span> that loads in seconds instead of minutes.</span></li>
                  <li className="flex items-start gap-2"><span className="mt-1 text-green-300">•</span><span>Established a <span className="font-bold">standardized optimization process</span> that can be applied to any 3D model for web and mobile use.</span></li>
                  <li className="flex items-start gap-2"><span className="mt-1 text-green-300">•</span><span>Demonstrated how <span className="font-bold">complex 3D assets can be made accessible</span> to users on any device, regardless of technical limitations.</span></li>
                  <li className="flex items-start gap-2"><span className="mt-1 text-green-300">•</span><span>Created a <span className="font-bold">reusable template and best practices guide</span> for future 3D optimization projects at HyperX.</span></li>
                </ul>
              </section>
            </div>
          </div>
        </div>
        
        {/* HX3D Models Section - Full Width Below Content */}
        <div className="w-full" style={{ maxWidth: "1400px", margin: "0 auto" }}>
          <h3 className="text-2xl font-bold text-center mb-6 text-blue-300">HX3D Model Collection</h3>
          <p className="text-sm text-gray-300 text-center mb-8 max-w-2xl mx-auto">
            Explore our collection of optimized 3D models showcasing different optimization techniques
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
            {/* Beast Model */}
            <div className="flex flex-col items-center">
              <h4 className="text-lg font-semibold mb-3 text-white">Beast</h4>
              <ModelViewer
                src="/hx3d/beast.glb"
                alt="Beast 3D Model"
                autoRotate
                cameraControls
                style={{ width: "100%", height: "300px", background: "#333", borderRadius: "1rem" }}
              />
              <p className="text-xs text-gray-400 mt-2 text-center">Interactive 3D model</p>
              <button
                onClick={() => window.open('/hx3d/beast.glb', '_blank')}
                className="mt-4 px-6 py-2 bg-white text-black font-medium rounded-lg hover:bg-gray-100 transition-colors duration-200"
              >
                Open Full-Screen Viewer
              </button>
            </div>
            
            {/* Nature Model */}
            <div className="flex flex-col items-center">
              <h4 className="text-lg font-semibold mb-3 text-white">Nature</h4>
              <ModelViewer
                src="/hx3d/nature.glb"
                alt="Nature 3D Model"
                autoRotate
                cameraControls
                style={{ width: "100%", height: "300px", background: "#333", borderRadius: "1rem" }}
              />
              <p className="text-xs text-gray-400 mt-2 text-center">Interactive 3D model</p>
              <button
                onClick={() => window.open('/hx3d/nature.glb', '_blank')}
                className="mt-4 px-6 py-2 bg-white text-black font-medium rounded-lg hover:bg-gray-100 transition-colors duration-200"
              >
                Open Full-Screen Viewer
              </button>
            </div>
            
            {/* Valkyrie Model */}
            <div className="flex flex-col items-center">
              <h4 className="text-lg font-semibold mb-3 text-white">Valkyrie</h4>
              <ModelViewer
                src="/hx3d/valkyrie.glb"
                alt="Valkyrie 3D Model"
                autoRotate
                cameraControls
                style={{ width: "100%", height: "300px", background: "#333", borderRadius: "1rem" }}
              />
              <p className="text-xs text-gray-400 mt-2 text-center">Interactive 3D model</p>
              <button
                onClick={() => window.open('/hx3d/valkyrie.glb', '_blank')}
                className="mt-4 px-6 py-2 bg-white text-black font-medium rounded-lg hover:bg-gray-100 transition-colors duration-200"
              >
                Open Full-Screen Viewer
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
} 