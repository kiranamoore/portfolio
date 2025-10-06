import ProjectClient from "./ProjectClient";

interface ProjectPageProps {
  params: {
    slug: string;
  };
}

export default function ProjectPage({ params }: ProjectPageProps) {
  return <ProjectClient slug={params.slug} />;
}