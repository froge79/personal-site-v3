// Placeholder data — swap for real tools/projects later.
export type Project = {
  slug: string;
  title: string;
  year: string;
};

const projects: Project[] = [
  { slug: "placeholder-tool-one", title: "Placeholder Tool One", year: "2026" },
  { slug: "placeholder-tool-two", title: "Placeholder Project Two", year: "2025" },
  { slug: "placeholder-tool-three", title: "Placeholder Tool Three", year: "2025" },
  { slug: "placeholder-tool-four", title: "Placeholder Project Four", year: "2024" },
];

export function getAllProjects(): Project[] {
  return projects;
}
