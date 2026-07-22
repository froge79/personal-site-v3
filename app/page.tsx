import Link from "next/link";
import { getAllPosts, formatDate } from "@/lib/posts";
import { SocialLinks } from "@/components/SocialLinks";

export default function HomePage() {
  const posts = getAllPosts();

  return (
    <div className="site site-home">
      <header className="site-header">
        <Link href="/" className="site-title">
          Samuel X
        </Link>
        <Link href="/about" className="site-description">
          <span>my work, football, cinema, and whatever else</span>
          <span className="site-description-arrow" aria-hidden="true">
            →
          </span>
        </Link>
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
      </div>

      <SocialLinks />
    </div>
  );
}
