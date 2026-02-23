import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-[#E5E5E5] bg-white">
      <div className="max-w-6xl mx-auto px-8 md:px-12 py-12">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#667eea] to-[#764ba2] flex items-center justify-center">
              <span className="text-[11px] font-bold text-white">KM</span>
            </div>
            <div>
              <p className="text-[14px] font-medium text-[#1D1D1F]">Kirana Moore</p>
              <p className="text-[12px] text-[#6E6E73]">Product Designer</p>
            </div>
          </div>

          {/* Links */}
          <div className="flex items-center gap-6">
            <a
              href="mailto:kiranamoore14@gmail.com"
              className="text-[13px] text-[#6E6E73] hover:text-[#667eea] transition-colors"
            >
              Email
            </a>
            <a
              href="https://www.linkedin.com/in/kirana-moore-228701276/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[13px] text-[#6E6E73] hover:text-[#667eea] transition-colors"
            >
              LinkedIn
            </a>
            <Link
              href="/resume"
              className="text-[13px] text-[#6E6E73] hover:text-[#667eea] transition-colors"
            >
              Resume
            </Link>
          </div>

          {/* Copyright */}
          <p className="text-[12px] text-[#86868B]">
            &copy; 2025 Kirana Moore. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
