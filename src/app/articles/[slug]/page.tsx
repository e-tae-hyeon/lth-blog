import { getArticle, getArticleSlugs } from "@/utils/articles";
import DateUtil from "@/utils/DateUtil";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import React from "react";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getArticleSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);

  if (!article) return {};

  return {
    title: `${article.meta.title} - taehyeon lee`,
    description: article.meta.description,
  };
}

async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = getArticle(slug);

  if (!article) notFound();

  const { title, date } = article.meta;

  return (
    <div className="w-full max-w-[720px] mx-auto px-[20px] py-[60px]">
      <article className="article">
        <header className="flex flex-col gap-[6px] mb-[40px]">
          <h1 className="mb-0">{title}</h1>

          {date && (
            <time className="b2 text-text40" dateTime={date}>
              {DateUtil.format(date)}
            </time>
          )}
        </header>

        <MDXRemote
          source={article.content}
          options={{ mdxOptions: { remarkPlugins: [remarkGfm] } }}
        />
      </article>
    </div>
  );
}

export default ArticlePage;
