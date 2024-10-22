import React from "react";
import NavItem from "../NavItem";

function Navigator() {
  const navOptions: { label: string; url: string }[] = [
    { label: "Projects", url: "/projects" },
    { label: "Posts", url: "/posts" },
    { label: "Logs", url: "/logs" },
  ];

  return (
    <div className="flex flex-col gap-2">
      {navOptions.map(({ label, url }) => (
        <NavItem label={label} url={url} key={url} />
      ))}
    </div>
  );
}

export default Navigator;
