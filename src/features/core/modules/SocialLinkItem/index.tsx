import Icon, { IconName } from "@/components/Icon";
import React from "react";

type Props = {
  icon: IconName;
  label: string;
  url: string;
};

function SocialLinkItem({ icon, label, url }: Props) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noreferrer"
      className="label flex items-center gap-[6px] rounded-[4px] px-[8px] py-[6px] text-text60 duration-150 hover:bg-gray-100 hover:text-text100"
    >
      <Icon name={icon} size={18} />
      {label}
    </a>
  );
}

export default SocialLinkItem;
