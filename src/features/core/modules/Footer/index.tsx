import React from "react";
import SocialLinks from "../SocialLinks";

function Footer() {
  return (
    <footer className="border-t mt-[80px]">
      <div className="max-w-[1240px] mx-auto flex flex-col gap-[8px] px-[20px] py-[32px]">
        <SocialLinks />
        <span className="caption text-text40">Taehyeon Lee</span>
      </div>
    </footer>
  );
}

export default Footer;
