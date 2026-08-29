import Link from "next/link";
import React from "react";

type Props = {
  url: string;
  label: string;
  isActive?: boolean;
};

function NavItem({ url, label, isActive = false }: Props) {
  return (
    <Link
      href={url}
      className={`label rounded-[4px] px-[10px] py-[6px] duration-150 hover:bg-gray-100 ${
        isActive ? "text-text100" : "text-text40"
      }`}
    >
      {label}
    </Link>
  );
}

export default NavItem;
