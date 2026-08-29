import React from "react";
import { NICKNAME } from "@/common/constant";

function Intro() {
  return (
    <section className="flex flex-col gap-[20px]">
      <div className="flex flex-col gap-[6px]">
        <h1 className="title">{NICKNAME}</h1>
        <p className="b2 text-text60">
          토스 페이스페이 그로쓰 사일로 · 프론트엔드 개발자
        </p>
      </div>

      <p className="h2">어떤 문제든 해결할 수 있는 사람이 되려고 합니다.</p>

      <p className="b1 text-text80 leading-[1.9]">
        문제를 받으면 원인부터 좁힙니다. 코드는 응집도와 추상화 기준으로
        판단하고, 도메인이 모호해도 끝까지 결과를 냅니다.
      </p>
    </section>
  );
}

export default Intro;
