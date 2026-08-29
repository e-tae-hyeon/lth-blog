"use client";

import React from "react";
import { usePathname } from "next/navigation";
import NavItem from "../NavItem";
import Clock from "@/features/home/modules/Clock";
import TimeFlow from "@/features/home/modules/TimeFlow";

const NAV_OPTIONS: { label: string; url: string }[] = [
  { label: "taehyeon lee", url: "/" },
  { label: "articles", url: "/articles" },
];

function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 flex flex-col bg-white/80 backdrop-blur">
      <nav className="max-w-[1240px] w-full mx-auto flex items-center gap-[4px] h-[56px] px-[20px]">
        {NAV_OPTIONS.map(({ label, url }) => (
          <NavItem
            label={label}
            url={url}
            isActive={pathname === url}
            key={url}
          />
        ))}
      </nav>

      <Clock />

      <TimeFlow />
    </header>
  );
}

export default Header;
