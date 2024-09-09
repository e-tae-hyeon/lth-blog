import React from "react";

function CareerRecords() {
  const careers: { content: string; year: number }[] = [
    { content: "서울시립대학교 전자전기컴퓨터공학부 입학", year: 19 },
  ];

  const sorted = careers.sort((a, b) => b.year - a.year);

  return (
    <div className="mx-auto max-w-3xl grid md:grid-cols-2 p-5">
      {sorted.map(({ content, year }, idx) => (
        <div
          className="flex-1 flex flex-col gap-1 p-2 rounded hover:bg-text4 duration-150"
          key={idx}
        >
          <div className="label">{content}</div>
          <div className="b2 text-text60">{year}'</div>
        </div>
      ))}
    </div>
  );
}

export default CareerRecords;
