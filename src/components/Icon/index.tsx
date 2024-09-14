import React from "react";
import * as Icons from "./icons";
import theme from "@/common/styles/theme";

export type IconName = keyof typeof Icons;

type IconProps = {
  name: IconName;
  color?: string;
  size?: number;
};

function Icon({ name, color = theme.text100, size = 24 }: IconProps) {
  const SVGComp = Icons[name];

  return <SVGComp color={color} width={size} height={size} />;
}

export default Icon;
