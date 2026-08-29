import React from "react";

const RECORDS: string[] = ["Viva Republica (Toss)", "University of Seoul"];

function Career() {
  return (
    <section className="flex flex-col gap-[8px]">
      <span className="b1 font-bold">Experience</span>

      <div className="flex flex-col gap-[4px]">
        {RECORDS.map((record) => (
          <span className="b1" key={record}>
            {record}
          </span>
        ))}
      </div>
    </section>
  );
}

export default Career;
