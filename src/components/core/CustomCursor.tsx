"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useCursor } from "@/context/CursorContext";

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const { variant } = useCursor();

  useEffect(() => {
    const mouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      width: 32,
      height: 32,
      backgroundColor: "#fff",
      mixBlendMode: "difference" as const,
    },
    hover: {
      x: mousePosition.x - 40,
      y: mousePosition.y - 40,
      width: 80,
      height: 80,
      backgroundColor: "#fff",
      mixBlendMode: "difference" as const,
    },
  };

  return (
    <motion.div
      className="fixed top-0 left-0 rounded-full pointer-events-none z-50"
      variants={variants}
      animate={variant}
      transition={{ type: "spring", stiffness: 500, damping: 30 }}
    />
  );
};

export default CustomCursor;
