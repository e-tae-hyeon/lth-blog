import WorkInProgress from "@/components/WorkInProgress";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "About - lth.XD",
  description: "Lee Tae-Hyeon의 이력",
};

function AboutPage() {
  return (
    <div className="page flex flex-col gap-[40px]">
      <div>
        <WorkInProgress />
      </div>
    </div>
  );
}

export default AboutPage;
