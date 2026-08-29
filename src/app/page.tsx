import Clock from "@/features/home/modules/Clock";
import Intro from "@/features/home/modules/Intro";
import TimeFlow from "@/features/home/modules/TimeFlow";
import React from "react";

function HomePage() {
  return (
    <div className="flex flex-col">
      <section className="page">
        <Intro />
      </section>

      <section className="flex flex-col gap-[20px] py-[80px]">
        <Clock />
        <TimeFlow />
      </section>
    </div>
  );
}

export default HomePage;
