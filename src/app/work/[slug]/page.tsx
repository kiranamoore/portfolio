import ProjectClient from "./ProjectClient";

export default function ProjectPage({ params }: { params: { slug: string } }) {
  return <ProjectClient slug={params.slug} />;
}
