import Icon, { IconName } from "@/components/Icon";
import React from "react";

export enum Store {
  Web = "web",
  GooglePlay = "googlePlay",
  AppStore = "appStore",
}

type StoreLinkerProps = {
  store: Store;
  link: string;
};

function StoreLinker({ store, link }: StoreLinkerProps) {
  const storeInfoMap: Record<Store, { icon: IconName; label: string }> = {
    web: { icon: "world", label: "Web" },
    googlePlay: { icon: "googlePlay", label: "Google Play" },
    appStore: { icon: "appStore", label: "App store" },
  };

  const { icon, label } = storeInfoMap[store];

  return (
    <a
      href={link}
      target="_blank"
      className="flex items-center justify-center gap-1 py-1 px-2 rounded bg-text4"
    >
      <Icon name={icon} size={20} />
      <span className="label hidden mobile:block">{label}</span>
    </a>
  );
}

export default StoreLinker;
