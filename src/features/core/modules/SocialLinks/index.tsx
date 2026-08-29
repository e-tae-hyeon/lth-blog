import { IconName } from "@/components/Icon";
import React from "react";
import SocialLinkItem from "../SocialLinkItem";
import { EMAIL, URI_GITHUB, URI_LINKEDIN } from "@/common/constant";

function SocialLinks() {
  const links: { icon: IconName; label: string; url: string }[] = [
    { icon: "mail", label: "Email", url: `mailto:${EMAIL}` },
    { icon: "github", label: "GitHub", url: URI_GITHUB },
    { icon: "linkedin", label: "LinkedIn", url: URI_LINKEDIN },
  ];

  return (
    <div className="flex flex-wrap items-center gap-[4px] -ml-[8px]">
      {links.map(({ icon, label, url }) => (
        <SocialLinkItem icon={icon} label={label} url={url} key={url} />
      ))}
    </div>
  );
}

export default SocialLinks;
