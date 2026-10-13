import Link from "next/link";
import type { ReactNode } from "react";
import { Breadcrumbs } from "@/components/Breadcrumbs";

type Props = {
  section: { label: string; href: string };
  title: string;
  children: ReactNode;
};

// Shared shell for single-item pages (blog post, paper, project): breadcrumbs,
// title header, body, back link. Put page-specific content in `children`.
export function DetailPage({ section, title, children }: Props) {
  return (
    <div className="site">
      <header className="site-header">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            section,
            { label: title },
          ]}
        />
      </header>

      <article>
        <header className="post-header">
          <h1>{title}</h1>
        </header>

        {children}

        <Link href={section.href} className="back-link">
          ← Back
        </Link>
      </article>
    </div>
  );
}
