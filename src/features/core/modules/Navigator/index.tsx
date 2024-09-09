import Link from "next/link";
import React from "react";

function Navigator() {
  return (
    <nav className="flex items-center justify-center gap-[12px] px-6 py-2 bg-text4 rounded-full">
      <Link
        href={"/about"}
        className="h4 text-text80 px-4 py-1 rounded-md hover:bg-neutral-200 duration-200"
      >
        About
      </Link>

      <span className="bg-text20 w-[2px] h-[20px]" />

      <Link
        href={"/project"}
        className="h4 text-text80 px-4 py-1 rounded-md hover:bg-neutral-200 duration-200"
      >
        Project
      </Link>

      <span className="bg-text20 w-[2px] h-[20px]" />

      <Link
        href={"/post"}
        className="h4 text-text80 px-4 py-1 rounded-md hover:bg-neutral-200 duration-200"
      >
        Post
      </Link>
    </nav>
  );
}

export default Navigator;
