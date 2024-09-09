import React from "react";
import Navigator from "../Navigator";
import Logo from "@/components/Logo";
import Link from "next/link";
import DateUtil from "@/utils/DateUtil";

function Header() {
  const today = DateUtil.now().format("MMM D");

  return (
    <header className="flex justify-center items-center gap-[12px] p-[20px]">
      <div className="flex items-center justify-center gap-[14px] px-6 py-3 bg-text4 rounded-full">
        <Link href={"/"}>
          <Logo />
        </Link>
        <span className="h4">{today}</span>
      </div>

      <Navigator />
    </header>
  );
}

export default Header;
