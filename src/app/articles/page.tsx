import WorkInProgress from "@/components/WorkInProgress";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Articles - lth.XD",
  description: "articles written by Lee Tae-Hyeon",
};

function ArticlesPage() {
  return (
    <div className="page flex flex-col gap-[40px]">
      <div>
        <WorkInProgress />
      </div>
    </div>
  );
}

export default ArticlesPage;
