import Logo from "@/components/Logo";
import DateUtil from "@/utils/DateUtil";
import React from "react";
import NavItem from "../NavItem";
import Navigator from "../Navigator";
import SocialLinks from "../SocialLinks";

function Sidebar() {
  const today = DateUtil.now().format("MMM D");

  return (
    <div className="fixed top-0 bottom-0 left-0 w-[240px] h-screen z-50">
      <nav className="w-full h-full flex flex-col gap-[24px] bg-gray-50 p-5 border-r">
        <header className="flex items-center gap-2">
          <Logo />
          <span className="h4">{today}</span>
        </header>

        <NavItem label="Home" url="/" />

        <Navigator />

        <div className="h-[2px] bg-gray-200" />

        <SocialLinks />
      </nav>
    </div>
  );
}

export default Sidebar;
