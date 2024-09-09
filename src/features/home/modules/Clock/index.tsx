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
    <div className="flex flex-col justify-center items-center gap-[10px] p-[10px] h4">
      <h1>{WISE}</h1>
      <div suppressHydrationWarning> {now} GMT+9</div>
    </div>
  );
}

export default Clock;
