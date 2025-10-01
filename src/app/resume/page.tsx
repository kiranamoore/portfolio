"use client";

import { useState } from "react";

const ResumePage = () => {
  const [activeTab, setActiveTab] = useState<"creative" | "industry">("creative");

  const pdfSrc = activeTab === "creative" ? "/drawn.pdf" : "/INDUSTRY.pdf";

  return (
    <main className="w-full h-screen">
      <div className="h-32" />
      <div className="w-full flex justify-center">
        <div className="flex gap-2 mb-4 bg-black/70 p-1 rounded-full border border-gray-700">
          <button
            onClick={() => setActiveTab("creative")}
            className={`px-5 py-2 rounded-full transition-colors duration-200 ${
              activeTab === "creative"
                ? "bg-white text-black"
                : "bg-transparent text-white hover:bg-white/10"
            }`}
            aria-pressed={activeTab === "creative"}
          >
            <span style={{ fontFamily: 'var(--font-lekton)' }}>Creative Resume</span>
          </button>
          <button
            onClick={() => setActiveTab("industry")}
            className={`px-5 py-2 rounded-full transition-colors duration-200 ${
              activeTab === "industry"
                ? "bg-white text-black"
                : "bg-transparent text-white hover:bg-white/10"
            }`}
            aria-pressed={activeTab === "industry"}
          >
            <span style={{ fontFamily: 'var(--font-lekton)' }}>Industry Resume</span>
          </button>
        </div>
      </div>
      <div
        className="w-full"
        style={{
          height: "calc(100% - 12rem)",
        }}
      >
        <div className="w-full h-full flex justify-center items-center">
          <div
            style={{
              width: activeTab === "creative" ? "30%" : "90%",
              height: activeTab === "creative" ? "80%" : "95%",
            }}
            className="shadow-xl rounded-lg overflow-hidden border border-gray-700 bg-white"
          >
            <iframe
              src={pdfSrc}
              className="w-full h-full"
              title={activeTab === "creative" ? "Creative Resume PDF" : "Industry Resume PDF"}
              style={{ border: "none" }}
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default ResumePage; 