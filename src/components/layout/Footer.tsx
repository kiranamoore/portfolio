"use client";
import Link from "next/link";
import { useCursor } from "@/context/CursorContext";

export default function Footer() {
  const { setVariant } = useCursor();

  const linkProps = {
    onMouseEnter: () => setVariant("hover"),
    onMouseLeave: () => setVariant("default"),
    className: "hover:underline",
  };

  return (
    <footer className="bg-black text-white p-8 md:p-16">
      <div className="max-w-7xl mx-auto">
        <div className="text-2xl md:text-4xl font-bold mb-12">
          <p>We're open to possibilities—</p>
          <p>feel free to reach out anytime</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-lg">
          <div>
            <h3 className="text-gray-400 mb-4">MENU</h3>
            <ul>
              <li>
                <Link href="/" {...linkProps}>
                  (Home)
                </Link>
              </li>
              <li>
                <Link href="/about" {...linkProps}>
                  (About)
                </Link>
              </li>
              <li>
                <Link href="/work" {...linkProps}>
                  (Work)
                </Link>
              </li>
              <li>
                <Link href="/contact" {...linkProps}>
                  (Hiring)
                </Link>
              </li>
              <li>
                <Link href="/contact" {...linkProps}>
                  (Contact)
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-gray-400 mb-4">SOCIAL</h3>
            <ul>
              <li>
                <a href="#" {...linkProps}>
                  (Facebook)
                </a>
              </li>
              <li>
                <a href="#" {...linkProps}>
                  (Instagram)
                </a>
              </li>
              <li>
                <a href="#" {...linkProps}>
                  (X)
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-gray-400 mb-4">REACH OUT</h3>
            <a href="mailto:contact@kirana.com" {...linkProps}>
              contact@kirana.com
            </a>
            <p className="mt-2">T +123-456-7890</p>
            <p>F +123-456-7891</p>
          </div>
          <div>
            <h3 className="text-gray-400 mb-4">NEWSLETTER</h3>
            <form>
              <div className="flex flex-col">
                <input
                  type="text"
                  placeholder="name"
                  className="bg-transparent border-b border-gray-500 py-2 mb-4 focus:outline-none"
                />
                <input
                  type="email"
                  placeholder="email"
                  className="bg-transparent border-b border-gray-500 py-2 mb-4 focus:outline-none"
                />
                <button type="submit" {...linkProps} className="text-left">
                  (Subscribe)
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-gray-800 text-gray-500 flex justify-between">
          <p>&copy;KIRANA 2025 (Privacy Policy)</p>
          <p>Taiwan &gt; 4:50 pm</p>
        </div>
      </div>
    </footer>
  );
}
