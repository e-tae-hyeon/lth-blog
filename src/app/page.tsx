import Clock from "@/features/home/modules/Clock";
import TimeFlow from "@/features/home/modules/TimeFlow";
import React from "react";

function HomePage() {
  return (
    <main className="pt-[20vh]">
      <div className="py-[20px]">
        <Clock />
      </div>

      <TimeFlow />
    </main>
  );
}

export default HomePage;
