"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCursor } from "@/context/CursorContext";
import { useState, useEffect } from "react";

export default function Header() {
  const { setVariant } = useCursor();
  const pathname = usePathname();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const linkProps = {
    onMouseEnter: () => setVariant("hover"),
    onMouseLeave: () => setVariant("default"),
  };

  // Close sidebar on route change
  useEffect(() => {
    setSidebarOpen(false);
  }, [pathname]);

  // Prevent body scroll when sidebar is open
  useEffect(() => {
    if (sidebarOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [sidebarOpen]);

  return (
    <>
      {/* Top Header Bar */}
      <header
        className="fixed top-0 left-0 w-full p-4 md:p-6 flex items-center z-50 mix-blend-difference text-white"
      >
        {/* Hamburger - Left */}
        <button
          onClick={() => setSidebarOpen(true)}
          className="p-2 hover:opacity-70 transition-opacity"
          aria-label="Open menu"
          {...linkProps}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        </button>

        {/* Centered Logo */}
        <div className="flex-1 flex justify-center">
          <Link
            href="/"
            className="text-xl md:text-2xl font-bold tracking-wider"
            {...linkProps}
          >
            KIRANA
          </Link>
        </div>

        {/* Spacer for balance */}
        <div className="w-10" />
      </header>

      {/* Sidebar Overlay (for clicking outside to close) */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full w-72 bg-black border-r border-gray-800 z-50 transform transition-transform duration-300 ease-in-out ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Sidebar Header */}
        <div className="flex items-center justify-between p-4 md:p-6 border-b border-gray-800">
          <span className="text-lg font-semibold text-white">Menu</span>
          <button
            onClick={() => setSidebarOpen(false)}
            className="p-2 hover:opacity-70 transition-opacity text-white"
            aria-label="Close menu"
            {...linkProps}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        {/* Sidebar Navigation */}
        <nav className="p-4 md:p-6">
          <ul className="space-y-4">
            <li>
              <Link
                href="/"
                className={`block text-lg py-2 px-3 rounded transition-colors ${
                  pathname === "/" ? "bg-white/10 text-white" : "text-gray-300 hover:text-white hover:bg-white/5"
                }`}
                onClick={() => setSidebarOpen(false)}
                {...linkProps}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/work"
                className={`block text-lg py-2 px-3 rounded transition-colors ${
                  pathname.startsWith("/work") ? "bg-white/10 text-white" : "text-gray-300 hover:text-white hover:bg-white/5"
                }`}
                onClick={() => setSidebarOpen(false)}
                {...linkProps}
              >
                Work
              </Link>
            </li>
            <li>
              <Link
                href="/resume"
                className={`block text-lg py-2 px-3 rounded transition-colors ${
                  pathname === "/resume" ? "bg-white/10 text-white" : "text-gray-300 hover:text-white hover:bg-white/5"
                }`}
                onClick={() => setSidebarOpen(false)}
                {...linkProps}
              >
                Resume
              </Link>
            </li>
          </ul>
        </nav>
      </aside>
    </>
  );
}
