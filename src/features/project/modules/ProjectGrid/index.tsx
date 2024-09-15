import React from "react";
import ProjectCard from "../ProjectCard";
import { createClient } from "@/utils/supabase/server";

async function ProjectGrid() {
  const client = createClient();
  const { data } = await client.from("Project").select("*");

  const projects = data ?? [];

  return (
    <div className="grid mobile:grid-cols-2 gap-5">
      {projects.map((project) => {
        const { id, logo_uri, name, desc, web_uri, ios_uri, aos_uri } = project;

        return (
          <ProjectCard
            logoUri={logo_uri}
            name={name}
            desc={desc}
            links={{ web: web_uri, appStore: ios_uri, googlePlay: aos_uri }}
            key={id}
          />
        );
      })}
    </div>
  );
}

export default ProjectGrid;
