import Link from "next/link";
import type { Paper } from "@/lib/papers";
import { PdfIcon, CodeIcon } from "@/components/Icons";

export function PaperCard({ paper }: { paper: Paper }) {
  return (
    <div className="post-item paper-item">
      <Link href={`/research/${paper.slug}`}>{paper.title}</Link>
      <div className="paper-icons">
        <a href={paper.pdf} target="_blank" rel="noopener noreferrer" aria-label="PDF" title="PDF">
          <PdfIcon />
        </a>
        <a href={paper.code} target="_blank" rel="noopener noreferrer" aria-label="Code" title="Code">
          <CodeIcon />
        </a>
      </div>
    </div>
  );
}
