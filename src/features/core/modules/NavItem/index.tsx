import Link from "next/link";
import React from "react";

type Props = {
  url: string;
  label: string;
};

function NavItem({ url, label }: Props) {
  return (
    <Link
      href={url}
      className="flex items-center gap-2 rounded-[4px] p-[6px] hover:bg-gray-200 duration-150"
    >
      <div className="w-1 bg-neutral-950 h-full" />

      <div className="flex items-center gap-1 label">{label}</div>
    </Link>
  );
}

export default NavItem;
