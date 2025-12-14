"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCursor } from "@/context/CursorContext";

export default function Header() {
  const pathname = usePathname();
  const { setVariant } = useCursor();

  const navItems = [
    { href: "/work", label: "Work" },
    { href: "/resume", label: "Resume" },
  ];

  const linkProps = {
    onMouseEnter: () => setVariant("hover"),
    onMouseLeave: () => setVariant("default"),
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 mix-blend-difference py-4">
      <nav className="container mx-auto flex justify-end items-center px-8 space-x-8">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            {...linkProps}
            className={`transition-colors duration-300 text-base font-medium text-white hover:text-gray-300 ${
              pathname === item.href ? "border-b-2 border-white" : ""
            }`}
            style={{ textDecoration: 'none', color: 'white' }}
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}