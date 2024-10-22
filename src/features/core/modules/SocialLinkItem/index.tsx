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
      className="flex items-center gap-2 rounded-[4px] p-[6px] hover:bg-gray-200 duration-150 cursor-pointer"
    >
      <div className="flex-1 flex items-center gap-2 label">
        <Icon name={icon} size={18} />
        {label}
      </div>
      <Icon name="arrowUpRight" size={20} />
    </a>
  );
}

export default SocialLinkItem;
