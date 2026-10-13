import Link from "next/link";
import { getFeaturedPosts, formatDate } from "@/lib/posts";
import { SocialLinks } from "@/components/SocialLinks";
import { GameOfLife } from "@/components/GameOfLife";

export default function HomePage() {
  const posts = getFeaturedPosts();

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
          <span>(trying to) lock in</span>
        </div>
      </header>

      

      <div className="post-list">
        {posts.map((post, index) => (
          <div key={post.slug}>
            {index > 0 && <hr />}
            <div className="post-item">
              <Link href={`/blog/${post.slug}`}>{post.title}</Link>
              <time className="post-date" dateTime={post.date}>
                {formatDate(post.date)}
              </time>
            </div>
          </div>
        ))}
        {posts.length > 0 && <hr />}
        <div className="post-list-more">
          <Link href="/blog">View all posts →</Link>
        </div>
      </div>

      <div className="home-footer">
        <GameOfLife />
        {<SocialLinks />}
      </div>
    </div>
  );
}
