import AsyncBoundary from "@/features/core/modules/AsyncBoundary";
import ProjectList from "@/features/project/modules/ProjectList";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Projects - lth.XD",
  description: "projects developed by Lee Tae-Hyeon",
};

function ProjectsPage() {
  return (
    <div className="page flex flex-col gap-[40px]">
      <header>
        <h1 className="title p-[20px]">Projects</h1>
      </header>

      <section className="p-[20px]">
        <AsyncBoundary>
          <ProjectList />
        </AsyncBoundary>
      </section>
    </div>
  );
}

export default ProjectsPage;
