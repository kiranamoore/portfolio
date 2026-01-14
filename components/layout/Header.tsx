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
          ? "bg-white/95 backdrop-blur-xl border-b border-[#E5E5E5]/50 shadow-sm"
          : "bg-white/90 backdrop-blur-md"
      }`}
    >
      <div className="h-20 flex items-center justify-between w-full" style={{ paddingLeft: '24px', paddingRight: '24px' }}>
        {/* Logo / Name */}
        <Link
          href="/"
          className="group flex items-center gap-3"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#667eea] to-[#764ba2] flex items-center justify-center shadow-lg shadow-[#667eea]/20 group-hover:shadow-[#667eea]/40 transition-shadow">
            <span className="text-[15px] font-bold text-white">KM</span>
          </div>
          <span className="text-[15px] font-semibold text-[#1D1D1F] hidden sm:block">
            Kirana Moore
          </span>
        </Link>

        {/* Navigation Links */}
        <nav className="flex items-center gap-2">
          <Link
            href="/work"
            className={`px-4 py-2 text-[14px] font-medium rounded-full transition-all ${
              pathname === "/work" || pathname.startsWith("/work/")
                ? "bg-[#1D1D1F] text-white"
                : "text-[#6E6E73] hover:text-[#1D1D1F] hover:bg-[#F5F5F7]"
            }`}
          >
            Work
          </Link>
          <Link
            href="/resume"
            className={`px-4 py-2 text-[14px] font-medium rounded-full transition-all ${
              pathname === "/resume"
                ? "bg-[#1D1D1F] text-white"
                : "text-[#6E6E73] hover:text-[#1D1D1F] hover:bg-[#F5F5F7]"
            }`}
          >
            Resume
          </Link>
          <a
            href="mailto:kiranaamoore@gmail.com"
            className="ml-2 px-4 py-2 text-[14px] font-medium text-white bg-gradient-to-r from-[#667eea] to-[#764ba2] rounded-full hover:shadow-lg hover:shadow-[#667eea]/30 transition-all"
          >
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}
