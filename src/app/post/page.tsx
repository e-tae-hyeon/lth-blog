import WorkInProgress from "@/components/WorkInProgress";
import React from "react";

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
