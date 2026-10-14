"use client";

import { useId, useState } from "react";
import type { Project } from "@/lib/projects";
import { CodeIcon } from "@/components/Icons";

export function ProjectCard({ project }: { project: Project }) {
  const [open, setOpen] = useState(false);
  const panelId = useId();

  return (
    <div className="post-item project-item" data-open={open}>
      <div className="project-row">
        <button
          type="button"
          className="project-toggle"
          aria-expanded={open}
          aria-controls={panelId}
          onClick={() => setOpen((value) => !value)}
        >
          <span className="project-title">{project.title}</span>
          <span className="project-description">{project.description}</span>
        </button>
        <span className="post-date project-year">{project.year}</span>
        <div className="paper-icons">
          <a
            href={project.code}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub repository"
            title="GitHub repository"
          >
            <CodeIcon />
          </a>
        </div>
      </div>

      <div className="project-panel" id={panelId} role="region" aria-hidden={!open} inert={!open}>
        <div className="project-panel-inner">
          <h3>Reflection</h3>
          <p>{project.reflection}</p>
          <h3>Technical details</h3>
          <ul>
            {project.details.map((detail) => (
              <li key={detail}>{detail}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
