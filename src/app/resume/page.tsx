"use client";

import { useState } from "react";

const ResumePage = () => {
  const [activeTab, setActiveTab] = useState<"creative" | "industry">("creative");

  const pdfSrc = activeTab === "creative" ? "/DRAWN.pdf" : "/INDUSTRY.pdf";

  return (
    <main className="w-full h-screen">
      <div className="h-32" />
      <div className="w-full flex justify-center">
        <div className="flex gap-4 mb-4">
          <button
            onClick={() => setActiveTab("creative")}
            className={`px-4 py-2 rounded border ${
              activeTab === "creative" ? "bg-black text-white border-black" : "bg-white text-black border-gray-300"
            }`}
            aria-pressed={activeTab === "creative"}
          >
            Creative Resume
          </button>
          <button
            onClick={() => setActiveTab("industry")}
            className={`px-4 py-2 rounded border ${
              activeTab === "industry" ? "bg-black text-white border-black" : "bg-white text-black border-gray-300"
            }`}
            aria-pressed={activeTab === "industry"}
          >
            Industry Resume
          </button>
        </div>
      </div>
      <div
        className="w-full"
        style={{
          height: "calc(100% - 12rem)",
        }}
      >
        <iframe
          src={pdfSrc}
          className="w-full h-full"
          title={activeTab === "creative" ? "Creative Resume PDF" : "Industry Resume PDF"}
          style={{ border: "none" }}
        />
      </div>
    </main>
  );
};

export default ResumePage; 