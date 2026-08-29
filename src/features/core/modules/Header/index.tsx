"use client";

import React from "react";
import { usePathname } from "next/navigation";
import NavItem from "../NavItem";

const NAV_OPTIONS: { label: string; url: string }[] = [
  { label: "taehyeon lee", url: "/" },
  { label: "articles", url: "/articles" },
  { label: "about", url: "/about" },
];

function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur">
      <nav className="max-w-[1240px] mx-auto flex items-center gap-[4px] h-[56px] px-[20px]">
        {NAV_OPTIONS.map(({ label, url }) => (
          <NavItem
            label={label}
            url={url}
            isActive={pathname === url}
            key={url}
          />
        ))}
      </nav>
    </header>
  );
}

export default Header;
