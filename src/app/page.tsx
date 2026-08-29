import Career from "@/features/home/modules/Career";
import Intro from "@/features/home/modules/Intro";
import React from "react";

function HomePage() {
  return (
    <div className="flex-1 flex flex-col justify-center px-[20px] py-[80px]">
      <div className="w-full max-w-[560px] mx-auto flex flex-col gap-[48px]">
        <Intro />
        <Career />
      </div>
    </div>
  );
}

export default HomePage;
