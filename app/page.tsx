import Link from "next/link";
import { getFeaturedPapers } from "@/lib/papers";
import { PaperCard } from "@/components/PaperCard";
import { SocialLinks } from "@/components/SocialLinks";
import { GameOfLife } from "@/components/GameOfLife";

export default function HomePage() {
  const papers = getFeaturedPapers();

  return (
    <div className="site site-home">
      <header className="site-header">
        <Link href="/" className="site-title">
          Samuel X
        </Link>
        <Link href="/about" className="site-description">
          <span>my work, hobbies, thoughts, and whatever else</span>
          <span className="site-description-arrow" aria-hidden="true">
            →
          </span>
        </Link>
        <div className="status-badge">
          <span className="status-dot" aria-hidden="true">
            <span className="status-dot-ping" />
          </span>
          <span>writing application essays and bingeing succession..</span>
        </div>
      </header>

      <div className="post-list">
        {papers.map((paper, index) => (
          <div key={paper.slug}>
            {index > 0 && <hr />}
            <PaperCard paper={paper} />
          </div>
        ))}
        {papers.length > 0 && <hr />}
        <div className="post-list-more">
          <Link href="/research">View all papers →</Link>
        </div>
      </div>

      <nav className="home-sections" aria-label="More">
        <Link href="/blog" className="home-section-link">
          <span>Blog</span>
          <span className="home-section-arrow" aria-hidden="true">→</span>
        </Link>
        <Link href="/projects" className="home-section-link">
          <span>Tools &amp; projects</span>
          <span className="home-section-arrow" aria-hidden="true">→</span>
        </Link>
      </nav>

      <div className="home-footer">
        <GameOfLife />
        {<SocialLinks />}
      </div>
    </div>
  );
}
