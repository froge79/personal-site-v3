import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ME, getAllPapers, getPaperBySlug } from "@/lib/papers";
import { DetailPage } from "@/components/DetailPage";
import { PdfIcon, CodeIcon } from "@/components/Icons";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getAllPapers().map((paper) => ({ slug: paper.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const paper = getPaperBySlug(slug);

  return { title: paper ? paper.title : "Not found" };
}

export default async function PaperPage({ params }: Props) {
  const { slug } = await params;
  const paper = getPaperBySlug(slug);

  if (!paper) {
    notFound();
  }

  return (
    <DetailPage
      section={{ label: "Research", href: "/research" }}
      title={paper.title}
    >
      <div className="paper-meta">
        <p className="paper-authors">
          {paper.authors.map((author, index) => (
            <span key={author}>
              {index > 0 && ", "}
              <span className={author === ME ? "author-me" : undefined}>
                {author}
              </span>
            </span>
          ))}
        </p>
        <p className="paper-venue">{paper.venue}</p>
      </div>

      <p className="paper-summary">{paper.summary}</p>

      <details className="paper-abstract">
        <summary>Abstract</summary>
        <p>{paper.abstract}</p>
      </details>

      <section className="paper-section">
        <h2>Reflection</h2>
        <p>{paper.reflection}</p>
      </section>

      <nav className="paper-links" aria-label="Paper links">
        <a href={paper.pdf} target="_blank" rel="noopener noreferrer">
          <PdfIcon />
          <span>PDF</span>
        </a>
        <a href={paper.code} target="_blank" rel="noopener noreferrer">
          <CodeIcon />
          <span>Code</span>
        </a>
      </nav>
    </DetailPage>
  );
}
