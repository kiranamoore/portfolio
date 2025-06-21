const ResumePage = () => {
  return (
    <main className="w-full h-screen">
      <div className="h-32" />
      <div
        className="w-full"
        style={{
          height: "calc(100% - 8rem)", // 100% minus h-32 (8rem)
        }}
      >
        <iframe
          src="/Kirana_Moore_Resume_Fall_2025_AR_VR.pdf"
          className="w-full h-full"
          title="Kirana Moore Resume"
          style={{ border: "none" }}
        />
      </div>
    </main>
  );
};

export default ResumePage; 