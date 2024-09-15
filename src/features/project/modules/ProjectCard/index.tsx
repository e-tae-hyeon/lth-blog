import React from "react";
import StoreLinker, { Store } from "../StoreLinker";
import Image from "next/image";

type ProjectCardProps = {
  logoUri: string;
  name: string;
  desc: string;
  links: {
    web: string | null;
    googlePlay: string | null;
    appStore: string | null;
  };
};

function ProjectCard({ logoUri, name, desc, links }: ProjectCardProps) {
  const stores = Object.entries(links)
    .map(([store, link]) => ({
      store,
      link,
    }))
    .filter((store) => store.link) as Array<{ store: Store; link: string }>;

  return (
    <div className="flex flex-col gap-4">
      <section className="flex items-center gap-3">
        <div className="aspect-square w-[60px] mobile:w-[80px] relative rounded-lg border overflow-hidden border-neutral-200">
          <Image src={logoUri} alt={`${name} logo`} fill className="absolute" />
        </div>

        <div className="flex flex-col">
          <h1 className="h2">{name}</h1>
          <div className="b1 text-text60">{desc}</div>
        </div>
      </section>

      <div className="flex gap-3">
        {stores.map((store) => (
          <StoreLinker
            store={store.store as Store}
            link={store.link}
            key={store.store}
          />
        ))}
      </div>
    </div>
  );
}

export default ProjectCard;
