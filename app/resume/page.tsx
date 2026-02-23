import HeroBackground from "@/components/HeroBackground";

export default function ResumePage() {
  return (
    <div className="min-h-screen hero-gradient relative">
      <HeroBackground />

      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-6 py-24">
        <div className="w-full max-w-4xl">
          <div className="rounded-xl border border-[#E5E5E5] overflow-hidden bg-white shadow-lg">
            <iframe
              src="/Kirana_Moore_Resume_2025.pdf"
              className="w-full"
              style={{ height: "75vh", minHeight: "600px" }}
              title="Resume PDF"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
