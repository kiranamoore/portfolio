type Props = {
  params: Promise<{ slug: string }>;
};

const ProjectPage = async ({ params }: Props) => {
  const { slug } = await params;

  return (
    <main className="p-4 md:p-8 pt-24">
      <h1 className="text-4xl font-bold">Project: {slug}</h1>
      <div className="mt-8">
        {/* Project details will go here */}
        <p>This is the page for project {slug}.</p>
        <p>More content about the project will be added here soon.</p>
      </div>
    </main>
  );
};

export default ProjectPage;
