import Link from "next/link";
import type { Project } from "@/lib/projects";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="post-item">
      <Link href={`/projects/${project.slug}`}>{project.title}</Link>
      <span className="post-date">{project.year}</span>
    </div>
  );
}
