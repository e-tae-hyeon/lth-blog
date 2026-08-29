import { ArticleMeta } from "@/utils/articles";
import DateUtil from "@/utils/DateUtil";
import Link from "next/link";
import React from "react";

type Props = {
  article: ArticleMeta;
};

function ArticleCard({ article }: Props) {
  const { slug, title, date, description } = article;

  return (
    <Link
      href={`/articles/${slug}`}
      className="flex flex-col gap-[4px] rounded-[6px] -mx-[10px] px-[10px] py-[10px] duration-150 hover:bg-gray-100"
    >
      <h2 className="h2">{title}</h2>

      {description && <p className="b1 text-text60">{description}</p>}

      {date && (
        <time className="b2 text-text40" dateTime={date}>
          {DateUtil.format(date)}
        </time>
      )}
    </Link>
  );
}

export default ArticleCard;
