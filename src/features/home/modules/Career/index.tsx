import React from "react";

const RECORDS: { name: string; period: string }[] = [
  { name: "Viva Republica (Toss)", period: "2025.08 -" },
  { name: "University of Seoul", period: "2019.03 -" },
];

function Career() {
  return (
    <section className="grid grid-cols-[max-content_auto] gap-x-[20px] gap-y-[8px]">
      {RECORDS.map(({ name, period }) => (
        <React.Fragment key={name}>
          <span className="b1">{name}</span>
          <span className="b1 text-text60">{period}</span>
        </React.Fragment>
      ))}
    </section>
  );
}

export default Career;
