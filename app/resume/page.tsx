export default function ResumePage() {
  return (
    <div className="min-h-screen bg-[#FAFAFA]">
      <section className="pt-24 pb-12 md:pt-32">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="text-[32px] font-semibold text-[#1D1D1F] tracking-tight mb-8">
            Resume
          </h1>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-6 pb-16">
        <div className="rounded-xl border border-[#E5E5E5] overflow-hidden bg-white shadow-sm">
          <iframe
            src="/INDUSTRY.pdf"
            className="w-full"
            style={{ height: "calc(100vh - 280px)", minHeight: "600px" }}
            title="Resume PDF"
          />
        </div>
      </div>
    </div>
  );
}
