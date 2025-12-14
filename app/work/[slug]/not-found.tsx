export default function NotFound() {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
        <p className="text-gray-400 mb-8">The project you're looking for doesn't exist.</p>
        <a href="/work" className="text-blue-400 hover:text-blue-300 underline">
          Return to Work Gallery
        </a>
      </div>
    </div>
  );
}

