import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  getAllSlugs,
  getPostBySlug,
  formatDate,
} from "@/lib/posts";
import { renderMDX } from "@/lib/mdx";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return { title: "Not found" };
  }

  return {
    title: post.title,
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const content = await renderMDX(post.content);

  return (
    <div className="site">
      <header className="site-header">
        <Link href="/" className="site-title">
          Samuel X
        </Link>
      </header>

      <article>
        <header className="post-header">
          <h1>{post.title}</h1>
          <time className="post-date" dateTime={post.date}>
            {formatDate(post.date)}
          </time>
        </header>

        <div className="prose">{content}</div>

        <Link href="/" className="back-link">
          ← Back
        </Link>
      </article>
    </div>
  );
}
