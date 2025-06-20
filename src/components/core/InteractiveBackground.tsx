"use client";

import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { MouseEvent } from "react";

export default function InteractiveBackground({
  children,
}: {
  children: React.ReactNode;
}) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <div
      className="group relative h-screen w-full overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src="/Landing%20Page%20video.mov" type="video/mp4" />
      </video>
      <div className="absolute top-0 left-0 w-full h-full bg-black/50 z-10" />
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100 z-20"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              650px circle at ${mouseX}px ${mouseY}px,
              rgba(255, 89, 94, 0.5),
              rgba(255, 202, 58, 0.4),
              rgba(138, 201, 38, 0.3),
              rgba(25, 130, 196, 0.3),
              rgba(106, 76, 147, 0.3),
              transparent 80%
            )
          `,
        }}
      />
      <div className="relative z-30">{children}</div>
    </div>
  );
}
