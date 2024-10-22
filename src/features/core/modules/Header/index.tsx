"use client";

import Icon from "@/components/Icon";
import React from "react";
import useCoreStore from "../stores/useCoreStore";

function Header() {
  const { openSidebar } = useCoreStore();

  return (
    <header className="flex items-center justify-between p-[16px] ">
      <button
        onClick={openSidebar}
        className="visible md:invisible hover:-translate-y-1 duration-150"
      >
        <Icon name="sidebar" />
      </button>

      <div className="label">by LTH</div>
    </header>
  );
}

export default Header;
