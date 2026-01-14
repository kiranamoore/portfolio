"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-xl shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="h-20 flex items-center justify-between w-full" style={{ paddingLeft: '24px', paddingRight: '24px' }}>
        {/* Logo / Name */}
        <Link
          href="/"
          className="text-[15px] font-semibold text-[#1D1D1F] hover:opacity-70 transition-opacity"
        >
          Kirana Moore
        </Link>

        {/* Navigation Links */}
        <nav className="flex items-center gap-2">
          <Link
            href="/resume"
            className="text-[14px] font-medium transition-all duration-200 hover:scale-105 active:scale-95 text-[#6E6E73] hover:text-[#1D1D1F] hover:bg-[#F5F5F7]"
            style={{ padding: '6px 12px', borderRadius: '8px' }}
          >
            Resume
          </Link>
          <a
            href="mailto:kiranaamoore@gmail.com"
            className="ml-2 text-[14px] font-medium text-white bg-gradient-to-r from-[#667eea] to-[#764ba2] transition-all duration-200 hover:scale-105 active:scale-95 hover:shadow-md hover:shadow-[#667eea]/25"
            style={{ padding: '6px 12px', borderRadius: '8px' }}
          >
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}
