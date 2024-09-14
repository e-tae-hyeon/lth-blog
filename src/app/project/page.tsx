import ProjectGrid from "@/features/project/modules/ProjectGrid";
import React from "react";

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
