import Career from "@/features/home/modules/Career";
import Clock from "@/features/home/modules/Clock";
import Intro from "@/features/home/modules/Intro";
import TimeFlow from "@/features/home/modules/TimeFlow";
import React from "react";

function HomePage() {
  return (
    <div className="flex-1 flex flex-col justify-center px-[20px] py-[80px]">
      <div className="w-full max-w-[560px] mx-auto flex flex-col gap-[28px]">
        <Intro />

        <Career />

        <div className="flex flex-col gap-[10px]">
          <div className="rounded-[6px] overflow-hidden">
            <TimeFlow />
          </div>

          <Clock />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
