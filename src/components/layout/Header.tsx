"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useCursor } from "@/context/CursorContext";
import TextScramble from "../core/TextScramble";

export default function Header() {
  const { setVariant } = useCursor();

  const linkProps = {
    onMouseEnter: () => setVariant("hover"),
    onMouseLeave: () => setVariant("default"),
    className: "hover:underline",
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full p-4 md:p-8 flex justify-between items-center z-50 transition-all duration-300 mix-blend-difference text-white`}
    >
      <Link href="/" {...linkProps}>
        <h1 className="text-2xl font-bold">
          <TextScramble text="Kirana" />
        </h1>
      </Link>
      <nav className="flex items-center space-x-4 md:space-x-8">
        <Link href="/work" {...linkProps}>
          Work
        </Link>
        <Link href="/about" {...linkProps}>
          About
        </Link>
        <Link href="/contact" {...linkProps}>
          Contact
        </Link>
      </nav>
    </header>
  );
}
