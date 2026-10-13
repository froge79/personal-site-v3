import type { Metadata } from "next";
import { getAllProjects } from "@/lib/projects";
import { ProjectCard } from "@/components/ProjectCard";
import { Breadcrumbs } from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Projects",
};

export default function ProjectsIndexPage() {
  const projects = getAllProjects();

  return (
    <div className="site">
      <header className="site-header">
        <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Projects" }]} />
      </header>

      <div className="post-list">
        {projects.map((project, index) => (
          <div key={project.slug}>
            {index > 0 && <hr />}
            <ProjectCard project={project} />
          </div>
        ))}
      </div>
    </div>
  );
}
