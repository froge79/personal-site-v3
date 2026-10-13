import type { Metadata } from "next";
import { getAllPapers } from "@/lib/papers";
import { PaperCard } from "@/components/PaperCard";
import { Breadcrumbs } from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Research",
};

export default function ResearchIndexPage() {
  const papers = getAllPapers();

  return (
    <div className="site">
      <header className="site-header">
        <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Research" }]} />
      </header>

      <div className="post-list">
        {papers.map((paper, index) => (
          <div key={paper.slug}>
            {index > 0 && <hr />}
            <PaperCard paper={paper} />
          </div>
        ))}
      </div>
    </div>
  );
}
