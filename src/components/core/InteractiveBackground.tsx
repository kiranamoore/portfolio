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
      className="group relative h-screen w-full bg-black/50"
      onMouseMove={handleMouseMove}
    >
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              650px circle at ${mouseX}px ${mouseY}px,
              rgba(255, 89, 94, 0.25),
              rgba(255, 202, 58, 0.15),
              rgba(138, 201, 38, 0.1),
              rgba(25, 130, 196, 0.1),
              rgba(106, 76, 147, 0.1),
              transparent 80%
            )
          `,
        }}
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
}
