import theme from "@/common/styles/theme";
import React from "react";

function TimeFlowBlock() {
  const flows = [
    theme.text4,
    theme.text20,
    theme.text40,
    theme.text60,
    theme.text80,
    theme.text100,
    theme.text80,
    theme.text60,
    theme.text40,
    theme.text20,
  ];

  return (
    <div className="flex animate-loop">
      {flows.map((flow, idx) => (
        <div
          className="flex-shrink-0 aspect-[9/16] w-[19px] rounded-[2px] mr-[10px]"
          style={{ backgroundColor: flow }}
          key={idx}
        />
      ))}
    </div>
  );
}

export default TimeFlowBlock;
