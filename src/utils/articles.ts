import fs from "fs";
import path from "path";
import matter from "gray-matter";

const ARTICLES_DIR = path.join(process.cwd(), "articles");
const EXTENSION = ".mdx";

export type ArticleMeta = {
  slug: string;
  title: string;
  date: string;
  description: string;
};

export type Article = {
  meta: ArticleMeta;
  content: string;
};

function readFileNames(): string[] {
  if (!fs.existsSync(ARTICLES_DIR)) return [];

  return fs.readdirSync(ARTICLES_DIR).filter((name) => name.endsWith(EXTENSION));
}

function toSlug(fileName: string): string {
  return fileName.slice(0, -EXTENSION.length);
}

function toDateString(value: unknown): string {
  if (value instanceof Date) return value.toISOString().slice(0, 10);
  if (typeof value === "string") return value;

  return "";
}

function toMeta(slug: string, data: Record<string, unknown>): ArticleMeta {
  return {
    slug,
    title: typeof data.title === "string" ? data.title : slug,
    date: toDateString(data.date),
    description: typeof data.description === "string" ? data.description : "",
  };
}

export function getArticleSlugs(): string[] {
  return readFileNames().map(toSlug);
}

export function getArticles(): ArticleMeta[] {
  return readFileNames()
    .map((fileName) => {
      const source = fs.readFileSync(path.join(ARTICLES_DIR, fileName), "utf8");
      return toMeta(toSlug(fileName), matter(source).data);
    })
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getArticle(slug: string): Article | null {
  if (!getArticleSlugs().includes(slug)) return null;

  const source = fs.readFileSync(
    path.join(ARTICLES_DIR, `${slug}${EXTENSION}`),
    "utf8"
  );
  const { data, content } = matter(source);

  return { meta: toMeta(slug, data), content };
}
