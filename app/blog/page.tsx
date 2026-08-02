import Link from "next/link";
import type { Metadata } from "next";
import { getAllPosts, formatDate } from "@/lib/posts";
import { Breadcrumbs } from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Blog",
};

export default function BlogIndexPage() {
  const posts = getAllPosts();

  return (
    <div className="site">
      <header className="site-header">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Blog" },
          ]}
        />
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
    </div>
  );
}
