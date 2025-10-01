"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCursor } from "@/context/CursorContext";

export default function Header() {
  const { setVariant } = useCursor();
  const pathname = usePathname();

  const linkProps = {
    onMouseEnter: () => setVariant("hover"),
    onMouseLeave: () => setVariant("default"),
    className: "hover:underline",
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full p-4 md:p-8 flex justify-end items-center z-50 transition-all duration-300 mix-blend-difference text-white`}
    >
      <nav className="flex items-center">
        {pathname !== "/" && (
          <Link href="/" {...linkProps} style={{ paddingLeft: "24px", paddingRight: "24px" }}>
            Home
          </Link>
        )}
        <Link href="/work" {...linkProps} style={{ paddingLeft: "24px", paddingRight: "24px" }}>
          Work
        </Link>
        <Link href="/resume" {...linkProps} style={{ paddingLeft: "24px", paddingRight: "24px" }}>
          Resume
        </Link>
      </nav>
    </header>
  );
}
