import React from "react";

const RECORDS: string[] = ["Viva Republica (Toss)", "University of Seoul"];

function Career() {
  return (
    <section className="flex flex-col gap-[6px]">
      {RECORDS.map((record) => (
        <span className="b1" key={record}>
          {record}
        </span>
      ))}
    </section>
  );
}

export default Career;
