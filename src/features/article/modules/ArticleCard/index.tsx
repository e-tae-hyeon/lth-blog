import { ArticleMeta } from "@/utils/articles";
import DateUtil from "@/utils/DateUtil";
import Link from "next/link";
import React from "react";

type Props = {
  article: ArticleMeta;
};

function ArticleCard({ article }: Props) {
  const { slug, title, date } = article;

  return (
    <Link
      href={`/articles/${slug}`}
      className="flex flex-wrap items-baseline gap-x-[12px] gap-y-[2px] w-fit"
    >
      <span className="text-[15px] font-medium leading-[1.45] text-text100 hover:underline underline-offset-[3px]">
        {title}
      </span>

      {date && (
        <time className="text-[13px] font-normal leading-[1.45] text-text60" dateTime={date}>
          {DateUtil.formatDisplay(date)}
        </time>
      )}
    </Link>
  );
}

export default ArticleCard;
