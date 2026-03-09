"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import AnimatedLogo from "@/components/AnimatedLogo";

function OvalHoverButton({
  children,
  href,
  isExternal = false,
  className = "",
}: {
  children: React.ReactNode;
  href: string;
  isExternal?: boolean;
  className?: string;
}) {
  const [hovered, setHovered] = useState(false);

  const content = (
    <span
      className={`relative inline-block text-[14px] font-medium text-[#6E6E73] transition-colors duration-200 ${className}`}
      style={{ padding: "6px 12px" }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {children}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        viewBox="0 0 120 44"
        preserveAspectRatio="none"
        fill="none"
        style={{ overflow: "visible", left: "-4px", top: "-2px", width: "calc(100% + 8px)", height: "calc(100% + 4px)" }}
      >
        <defs>
          <linearGradient id="ovalGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(118, 75, 162, 0.7)" />
            <stop offset="100%" stopColor="rgba(102, 126, 234, 0.7)" />
          </linearGradient>
        </defs>
        <ellipse
          cx="60"
          cy="22"
          rx="58"
          ry="20"
          stroke="url(#ovalGradient)"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
          strokeDasharray="400"
          strokeDashoffset={hovered ? "0" : "400"}
          style={{
            transition: hovered
              ? "stroke-dashoffset 0.5s cubic-bezier(0.4, 0, 0.2, 1) 0.15s"
              : "stroke-dashoffset 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
          }}
        />
        {/* Left dot */}
        <circle cx="2" cy="22" r="4" fill="rgba(102, 126, 234, 0.8)"
          opacity={hovered ? 1 : 0}
          style={{ transition: "opacity 0.2s ease" }}
        />
        {/* Right dot */}
        <circle cx="118" cy="22" r="4" fill="rgba(102, 126, 234, 0.8)"
          opacity={hovered ? 1 : 0}
          style={{ transition: "opacity 0.2s ease" }}
        />
      </svg>
    </span>
  );

  if (isExternal) {
    return <a href={href}>{content}</a>;
  }

  return <Link href={href}>{content}</Link>;
}

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
        {/* Logo */}
        <Link
          href="/"
          onClick={(e) => {
            if (pathname === "/") {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }
          }}
          className="hover:opacity-90 transition-opacity"
        >
          <AnimatedLogo />
        </Link>

        {/* Navigation Links */}
        <nav className="flex items-center gap-8">
          <OvalHoverButton href="/resume">
            Resume
          </OvalHoverButton>
          <OvalHoverButton href="mailto:kiranamoore14@gmail.com" isExternal>
            Contact
          </OvalHoverButton>
        </nav>
      </div>
    </header>
  );
}
