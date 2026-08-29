import ArticleList from "@/features/article/modules/ArticleList";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Articles - lth.XD",
  description: "articles written by Lee Tae-Hyeon",
};

function ArticlesPage() {
  return (
    <div className="w-full max-w-[720px] mx-auto px-[20px] py-[60px]">
      <ArticleList />
    </div>
  );
}

export default ArticlesPage;
