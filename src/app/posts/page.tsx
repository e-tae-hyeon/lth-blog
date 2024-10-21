import WorkInProgress from "@/components/WorkInProgress";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Posts - lth.XD",
  description: "posts written by Lee Tae-Hyeon",
};

function PostsPage() {
  return (
    <div className="page flex flex-col gap-[40px]">
      {/* <header className="p-[20px]">
        <h1 className="title">Posts</h1>
      </header> */}

      <div>
        <WorkInProgress />
      </div>
    </div>
  );
}

export default PostsPage;
