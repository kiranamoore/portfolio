"use client";

import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { MouseEvent } from "react";

const colors = [
  "rgba(255, 89, 94, 0.8)",
  "rgba(255, 202, 58, 0.7)",
  "rgba(138, 201, 38, 0.6)",
  "rgba(25, 130, 196, 0.6)",
  "rgba(106, 76, 147, 0.6)",
];

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

      <motion.div
        className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100 z-20 mix-blend-overlay"
        style={{
          background: useMotionTemplate`radial-gradient(650px circle at ${mouseX}px ${mouseY}px, var(--color1), var(--color2), var(--color3), transparent 80%)`,
        }}
        animate={{
          "--color1": colors,
          "--color2": [...colors.slice(1), colors[0]],
          "--color3": [...colors.slice(2), ...colors.slice(0, 2)],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: "mirror",
        }}
      />
      <div className="relative z-30">{children}</div>
    </div>
  );
}
