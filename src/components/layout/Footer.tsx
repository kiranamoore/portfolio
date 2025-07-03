"use client";
import Link from "next/link";
import { useCursor } from "@/context/CursorContext";
import { useEffect, useState } from "react";

export default function Footer() {
  const { setVariant } = useCursor();
  const [californiaTime, setCaliforniaTime] = useState("");

  useEffect(() => {
    const getCaliforniaTime = () => {
      const time = new Date().toLocaleTimeString("en-US", {
        timeZone: "America/Los_Angeles",
        hour: '2-digit',
        minute: '2-digit',
        hour12: true,
      });
      setCaliforniaTime(time.replace(" ", ""));
    };

    getCaliforniaTime();
    const interval = setInterval(getCaliforniaTime, 1000 * 60); // Update every minute

    return () => clearInterval(interval);
  }, []);

  const linkProps = {
    onMouseEnter: () => setVariant("hover"),
    onMouseLeave: () => setVariant("default"),
    className: "hover:underline",
  };

  return (
    <footer className="bg-black text-white p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
          <div className="col-span-2 md:col-span-4 lg:col-span-1">
            <div className="text-2xl md:text-4xl font-bold mb-12">
              <p>I&apos;m open to possibilities—</p>
              <p>feel free to reach out anytime</p>
            </div>
          </div>

          <div>
            <h3 className="font-bold mb-4">MENU</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="hover:underline">(Home)</Link></li>
              <li><Link href="/resume" className="hover:underline">(Resume)</Link></li>
              <li><Link href="/work" className="hover:underline">(Work)</Link></li>
              <li><Link href="/contact" className="hover:underline">(Contact)</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4">SOCIAL</h3>
            <ul className="space-y-2">
              <li><a href="https://www.instagram.com/keymo0/" target="_blank" rel="noopener noreferrer" className="hover:underline">(Instagram)</a></li>
              <li><a href="https://kdmoore.itch.io/" target="_blank" rel="noopener noreferrer" className="hover:underline">(itch.io)</a></li>
              <li><a href="https://www.linkedin.com/in/kirana-moore-228701276/" target="_blank" rel="noopener noreferrer" className="hover:underline">(LinkedIn)</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4">REACH OUT</h3>
            <ul className="space-y-2">
              <li><a href="mailto:Kiranamoore14@gmail.com" className="hover:underline">Kiranamoore14@gmail.com</a></li>
              <li><a href="mailto:kdmoore@usc.edu" className="hover:underline">kdmoore@usc.edu</a></li>
              <li><a href="tel:4086799484" className="hover:underline">408-679-9484</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-gray-800 text-gray-500 flex justify-between">
          <p>&copy;KIRANA 2025 (Privacy Policy)</p>
          <p>San Francisco / Los Angeles, CA &gt; {californiaTime}</p>
        </div>
      </div>
    </footer>
  );
}
