import WorkInProgress from "@/components/WorkInProgress";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Logs - lth.XD",
  description: "logs Lee Tae-Hyeon",
};

function LogsPage() {
  return (
    <div className="page flex flex-col gap-[40px]">
      {/* <header>
        <h1 className="title p-[20px]">Logs</h1>
      </header> */}

      <div>
        <WorkInProgress />
      </div>
    </div>
  );
}

export default LogsPage;
