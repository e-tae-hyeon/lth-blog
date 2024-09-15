"use client";

import { MOBILE_RESPONSIVE_SIZE } from "@/common/styles/theme";
import Icon from "@/components/Icon";
import Modal from "@/components/Modal";
import { useWindowWidth } from "@react-hook/window-size";
import Link from "next/link";
import React, { useState } from "react";

function Navigator() {
  const windowWidth = useWindowWidth();

  const [isVisibleMenu, setVisibleMenu] = useState(false);
  const openMenu = () => setVisibleMenu(true);
  const closeMenu = () => setVisibleMenu(false);

  const navOptions: { label: string; to: string }[] = [
    { label: "About", to: "/about" },
    { label: "Project", to: "/project" },
    { label: "Post", to: "/post" },
  ];

  if (windowWidth <= MOBILE_RESPONSIVE_SIZE)
    return (
      <>
        <nav className="flex items-center justify-center gap-[12px] px-6 py-2 bg-text4 rounded-full">
          <button
            onClick={openMenu}
            className="h4 text-text80 px-4 py-1 rounded-md hover:bg-neutral-200 duration-200"
          >
            Menu
          </button>
        </nav>

        <Modal
          isVisible={isVisibleMenu}
          onBackdropClick={closeMenu}
          position="top"
        >
          <div className="flex flex-col gap-1 m-5 p-5 rounded-lg bg-white w-[95vw] max-w-screen-mobile">
            {navOptions.map(({ label, to }) => (
              <Link
                href={to}
                className="flex items-center justify-between p-2 label"
                key={to}
              >
                {label}
                <Icon name="arrowRight" size={20} />
              </Link>
            ))}
          </div>
        </Modal>
      </>
    );

  return (
    <nav className="flex items-center justify-center gap-[12px] px-6 py-2 bg-text4 rounded-full">
      {navOptions.map(({ label, to }, idx) => (
        <>
          <Link
            href={"/about"}
            className="h4 text-text80 px-4 py-1 rounded-md hover:bg-neutral-200 duration-200"
            key={to}
          >
            {label}
          </Link>
          {idx !== navOptions.length - 1 && (
            <span className="bg-text20 w-[2px] h-[20px]" key={idx} />
          )}
        </>
      ))}
    </nav>
  );
}

export default Navigator;
