import Clock from "@/features/home/modules/Clock";
import TimeFlow from "@/features/home/modules/TimeFlow";
import React from "react";

function HomePage() {
  return (
    <div className="flex flex-col">
      <section className="flex flex-col gap-[20px] pt-[24vh]">
        <Clock />
        <TimeFlow />
      </section>
    </div>
  );
}

export default HomePage;
