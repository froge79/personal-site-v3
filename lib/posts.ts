import fs from "fs";
import path from "path";
import matter from "gray-matter";

const contentDirectory = path.join(process.cwd(), "content");

export type PostMeta = {
  slug: string;
  title: string;
  date: string;
  featured: boolean;
};

export type Post = PostMeta & {
  content: string;
};

function getMdxFiles(): string[] {
  if (!fs.existsSync(contentDirectory)) {
    return [];
  }
  return fs
    .readdirSync(contentDirectory)
    .filter((file) => file.endsWith(".mdx"));
}

function parsePostMeta(filename: string): PostMeta {
  const slug = filename.replace(/\.mdx$/, "");
  const fullPath = path.join(contentDirectory, filename);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data } = matter(fileContents);

  return {
    slug,
    title: data.title as string,
    date: data.date as string,
    featured: Boolean(data.featured),
  };
}

export function getAllPosts(): PostMeta[] {
  const posts = getMdxFiles().map(parsePostMeta);

  return posts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );
}

export function getFeaturedPosts(): PostMeta[] {
  return getAllPosts().filter((post) => post.featured);
}

export function getPostBySlug(slug: string): Post | null {
  const fullPath = path.join(contentDirectory, `${slug}.mdx`);

  if (!fs.existsSync(fullPath)) {
    return null;
  }

  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return {
    slug,
    title: data.title as string,
    date: data.date as string,
    featured: Boolean(data.featured),
    content,
  };
}

export function getAllSlugs(): string[] {
  return getMdxFiles().map((filename) => filename.replace(/\.mdx$/, ""));
}

export function formatDate(dateString: string): string {
  const date = new Date(dateString + "T00:00:00");
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
