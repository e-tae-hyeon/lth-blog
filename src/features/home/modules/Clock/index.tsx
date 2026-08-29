"use client";

import DateUtil from "@/utils/DateUtil";
import React, { useEffect, useState } from "react";

function Clock() {
  const WISE = "You may delay, but time will not.";

  const [now, setNow] = useState(DateUtil.now().format("HH:mm:ss"));

  useEffect(() => {
    const timer = setInterval(() => {
      setNow(DateUtil.now().format("HH:mm:ss"));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-col gap-[2px]">
      <p className="label">{WISE}</p>
      <p className="b2 text-text60" suppressHydrationWarning>
        {now} GMT+9
      </p>
    </div>
  );
}

export default Clock;
