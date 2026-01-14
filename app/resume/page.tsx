"use client";

import React from "react";

const ResumePage = () => {
  return (
    <main className="w-full h-screen">
      <div className="h-32" />
      <div
        className="w-full"
        style={{
          height: "calc(100% - 8rem)",
        }}
      >
        <div className="w-full h-full flex justify-center items-center">
          <div
            style={{
              width: "90%",
              height: "95%",
            }}
            className="shadow-xl rounded-lg overflow-hidden border border-gray-700 bg-white"
          >
            <iframe
              src="/INDUSTRY.pdf"
              className="w-full h-full"
              title="Resume PDF"
              style={{ border: "none" }}
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default ResumePage;
