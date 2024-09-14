import WorkInProgress from "@/components/WorkInProgress";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Posts - lth.XD",
  description: "posts written by Lee Tae-Hyeon",
};

function PostPage() {
  return (
    <main className="page">
      <section className="p-5">
        <h1 className="title text-center">Posts</h1>
      </section>

      <div>
        <WorkInProgress />
      </div>
    </main>
  );
}

export default PostPage;
