import React from "react";
import TimeFlowBlock from "../TimeFlowBlock";

function TimeFlow() {
  return (
    <div className="flex">
      {Array(10)
        .fill(0)
        .map((_, idx) => (
          <TimeFlowBlock key={idx} />
        ))}
    </div>
  );
}

export default TimeFlow;
