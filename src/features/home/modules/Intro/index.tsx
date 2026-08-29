import React from "react";
import { NICKNAME } from "@/common/constant";

const KEYWORDS = ["growing", "ambitious", "building", "solving problems"];

function Intro() {
  return (
    <section className="flex flex-col gap-[10px]">
      <h1 className="title">
        taehyeon lee <span className="text-text40">({NICKNAME})</span>
      </h1>

      <p className="b1 text-text60">{KEYWORDS.join(" · ")}</p>
    </section>
  );
}

export default Intro;
