"use client";

import Logo from "@/components/Logo";
import DateUtil from "@/utils/DateUtil";
import React, { useEffect } from "react";
import NavItem from "../NavItem";
import Navigator from "../Navigator";
import SocialLinks from "../SocialLinks";
import { useWindowSize } from "@react-hook/window-size";
import useCoreStore from "../stores/useCoreStore";
import { RESPONSIVE_WINDOW_SIZE } from "@/common/styles/theme";
import { usePathname } from "next/navigation";

function Sidebar() {
  const today = DateUtil.now().format("MMM D");
  const pathname = usePathname();

  const [width] = useWindowSize();
  const isVisible = useCoreStore((s) => s.isVisibleSidebar);
  const close = useCoreStore((s) => s.closeSidebar);

  const isDesktop = width >= RESPONSIVE_WINDOW_SIZE;

  useEffect(() => {
    if (!isDesktop) return;

    close();
  }, [isDesktop]);

  useEffect(() => {
    close();
  }, [pathname]);

  if (isDesktop || isVisible)
    return (
      <>
        {isVisible && (
          <div
            onClick={close}
            className="absolute inset-0 bg-black bg-opacity-60"
          />
        )}
        <div className="fixed top-0 bottom-0 left-0 w-[240px] h-screen z-50">
          <div className="w-full h-full flex flex-col gap-[24px] bg-gray-50 p-5 border-r">
            <header className="flex items-center gap-2">
              <Logo />
              <span className="h4">{today}</span>
            </header>

            <NavItem label="Home" url="/" />

            <Navigator />

            <div className="h-[2px] bg-gray-200" />

            <SocialLinks />
          </div>
        </div>
      </>
    );
}

export default Sidebar;
