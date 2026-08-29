import React from "react";
import SocialLinks from "../SocialLinks";

function Footer() {
  return (
    <footer className="mt-[80px]">
      <div className="max-w-[1240px] mx-auto flex justify-center px-[20px] py-[32px]">
        <SocialLinks />
      </div>
    </footer>
  );
}

export default Footer;
