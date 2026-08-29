import React from "react";
import ArticleCard from "../ArticleCard";
import { getArticles } from "@/utils/articles";

function ArticleList() {
  const articles = getArticles();

  if (articles.length === 0)
    return <p className="b1 text-text60">아직 작성한 글이 없어요.</p>;

  return (
    <div className="flex flex-col gap-[28px]">
      {articles.map((article) => (
        <ArticleCard article={article} key={article.slug} />
      ))}
    </div>
  );
}

export default ArticleList;
