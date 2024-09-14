import ProjectGrid from "@/features/project/modules/ProjectGrid";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Projects - lth.XD",
  description: "projects developed by Lee Tae-Hyeon",
};

function ProjectPage() {
  return (
    <main className="page">
      <section className="p-5">
        <h1 className="title text-center">Projects</h1>
      </section>

      <section className="p-5">
        <ProjectGrid />
      </section>
    </main>
  );
}

export default ProjectPage;
