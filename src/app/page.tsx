import Career from "@/features/home/modules/Career";
import Clock from "@/features/home/modules/Clock";
import Intro from "@/features/home/modules/Intro";
import React from "react";

function HomePage() {
  return (
    <div className="flex-1 flex flex-col items-center justify-center gap-[48px] px-[20px] py-[80px]">
      <Intro />
      <Clock />
      <Career />
    </div>
  );
}

export default HomePage;
