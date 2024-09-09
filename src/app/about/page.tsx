import { NICKNAME } from "@/common/constant";
import CareerRecords from "@/features/about/modules/CareerRecords";
import Contacts from "@/features/about/modules/Contacts";
import React from "react";

function AboutPage() {
  return (
    <main className="mx-auto max-w-[1024px] p-5">
      <section className="flex flex-col gap-10 p-5 text-center">
        <h1 className="title">I'm {NICKNAME}</h1>

        <div className="flex flex-col gap-5">
          <div className="h4 text-text80">
            "I am a software developer who primarily focuses on problem-solving
            and developing web and mobile services."
          </div>
          <div className="b1 text-text60">
            소프트웨어 개발자로서, 주로 문제 해결과 웹, 모바일 개발을 즐깁니다.
          </div>
        </div>
      </section>

      <section className="p-5">
        <Contacts />
      </section>

      <section>
        <CareerRecords />
      </section>
    </main>
  );
}

export default AboutPage;
